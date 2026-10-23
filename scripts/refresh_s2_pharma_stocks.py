"""Refresh prices, valuation and TTM financials in the pharma stock workbook (same stock list, same sources).
A-share: Tencent quotes (price, caps, P/E, P/B, turnover); financials stay on the H1 report.
Hong Kong / US / Switzerland: TradingView scanner (price, caps, P/E, P/B, TTM financials), prices cross-checked with Tencent.
Usage: python3 scripts/refresh_s2_pharma_stocks.py <old.xlsx> <new.xlsx>
Writes an "更新时间" sheet that make_s2_pharma_stocks_page.py shows under the page title.
"""
import json, ssl, sys, time, urllib.request, datetime as dt
from zoneinfo import ZoneInfo
from openpyxl import load_workbook

SRC, OUT = sys.argv[1], sys.argv[2]
wb = load_workbook(SRC)
CEST = ZoneInfo('Europe/Zurich')
try:
    import certifi; CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = None

def get(url, data=None):
    for k in range(3):
        try:
            req = urllib.request.Request(url, data=data, headers={'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json'})
            return urllib.request.urlopen(req, timeout=30, context=CTX).read()
        except Exception as e:
            if k == 2: raise
            time.sleep(2)

def tencent(codes):
    out = {}
    for i in range(0, len(codes), 60):
        txt = get('https://qt.gtimg.cn/q=' + ','.join(codes[i:i + 60])).decode('gbk', 'replace')
        for line in txt.split(';'):
            if '="' not in line: continue
            k, v = line.strip().split('="', 1)
            f = v.rstrip('"').split('~')
            if len(f) > 40: out[k[2:]] = f
    return out

def num(s):
    try: return float(s)
    except (TypeError, ValueError): return None

TV_COLS = ['close', 'market_cap_basic', 'float_shares_percent_current', 'price_earnings_ttm', 'price_book_fq', 'total_revenue_ttm',
           'total_revenue_yoy_growth_ttm', 'net_income_ttm', 'net_income_yoy_growth_ttm', 'gross_margin_ttm', 'return_on_equity',
           'earnings_per_share_basic_ttm', 'book_value_per_share_fq', 'fiscal_period_end_current', 'update_time']
def tradingview(region, tickers):
    out = {}
    for i in range(0, len(tickers), 400):
        body = json.dumps({'symbols': {'tickers': tickers[i:i + 400]}, 'columns': TV_COLS}).encode()
        for r in json.loads(get(f'https://scanner.tradingview.com/{region}/scan', body))['data']:
            out[r['s']] = dict(zip(TV_COLS, r['d']))
    return out

def col(heads, prefix):
    hits = [j for j, h in enumerate(heads) if h.replace('\n', ' ').startswith(prefix)]
    assert len(hits) == 1, (prefix, hits); return hits[0]

def rewrite(ws, rows, cap_j):
    rows.sort(key=lambda r: (r[cap_j] is None, -(r[cap_j] or 0)))
    for i, r in enumerate(rows):
        r[0] = i + 1
        for j, v in enumerate(r): ws.cell(row=i + 2, column=j + 1).value = v  # ws.cell(value=None) would leave the old value

report, retrieved = [], dt.datetime.now(CEST)
# market -> (timezone, closing time); a quote stamped at/after the close is that day's close, otherwise intraday
MKT = {'A股': ('Asia/Shanghai', (15, 0)), '港股': ('Asia/Hong_Kong', (16, 0)), '美股': ('America/New_York', (16, 0)), '瑞士': ('Europe/Zurich', (17, 30))}
stamp = {}
def asof(sheet, t):
    tz, (h, m) = MKT[sheet]; t = t.astimezone(ZoneInfo(tz))
    day = f'{t.day} {t:%b %Y}'
    if (t.hour, t.minute) >= (h, m): return f'{day} close', f'{t:%Y-%m-%d} 收盘'
    c = t.astimezone(CEST); return f'{day}, intraday ({c:%H:%M} CEST)', f'{t:%Y-%m-%d} 盘中（{c:%H:%M} CEST）'

# ---------- A-share ----------
ws = wb['A股']; heads = [c.value for c in ws[1]]; rows = [list(r) for r in ws.iter_rows(min_row=2, values_only=True)]
J = {k: col(heads, k) for k in ('代码', '最新价', '总市值', '流通市值', 'PE(TTM)', 'PE(动态)', 'PE(静态)', 'PB', '换手率')}
pre = lambda c: ('sh' if c[0] in '69' and not c.startswith('92') else 'bj' if c[0] in '48' or c.startswith('92') else 'sz') + c
q = tencent([pre(r[J['代码']]) for r in rows])
a_dates, miss = set(), []
for r in rows:
    f = q.get(pre(r[J['代码']]))
    if not f: miss.append(r[J['代码']]); continue
    a_dates.add(f[30][:8])
    price = num(f[3])
    old = (r[J['最新价']], r[J['PE(TTM)']])
    r[J['最新价']] = price if price else None
    for k, i in (('总市值', 45), ('流通市值', 44), ('PE(TTM)', 39), ('PE(动态)', 52), ('PE(静态)', 53), ('PB', 46)):
        v = num(f[i]); r[J[k]] = v if v not in (None, 0.0) else None
    t = num(f[38]); r[J['换手率']] = None if t is None else t / 100
t = max(dt.datetime.strptime(x, '%Y%m%d%H%M%S').replace(tzinfo=ZoneInfo('Asia/Shanghai')) for x in (f[30] for f in q.values()))
stamp['A股'] = asof('A股', t)
rewrite(ws, rows, J['总市值'])
report.append(f'A股 {len(rows)} 只，腾讯无数据 {len(miss)}：{miss}；行情日期 {sorted(a_dates)[-3:]}')

# ---------- HK / US / CH ----------
def intl(sheet, region, ticker, tq):
    ws = wb[sheet]; heads = [c.value for c in ws[1]]; rows = [list(r) for r in ws.iter_rows(min_row=2, values_only=True)]
    J = {k: col(heads, k) for k in ('代码', '交易所', '最新价', '总市值', '流通市值', 'PE(TTM)', 'PB', '营业收入', '营收同比', '归母净利润',
                                    '净利润同比', '毛利率', 'ROE', '每股收益', '每股净资产', '最近财报期', '备注')}
    tv = tradingview(region, [ticker(r, J) for r in rows])
    tc = tencent([tq(r, J) for r in rows]) if tq else {}
    miss, diffs, checks, times = [], [], [0, 0], []
    for r in rows:
        d = tv.get(ticker(r, J))
        if not d: miss.append(r[J['代码']]); continue
        times.append(d['update_time'] or 0)
        # sanity check on unchanged reporting periods: price-independent TTM figures must match the old workbook
        pe_end = dt.datetime.utcfromtimestamp(d['fiscal_period_end_current']).strftime('%Y-%m-%d') if d['fiscal_period_end_current'] else None  # _fq is blank for half-year reporters
        if pe_end == r[J['最近财报期']] and r[J['营业收入']] and d['total_revenue_ttm']:
            checks[0] += 1; checks[1] += abs(d['total_revenue_ttm'] / 1e8 / r[J['营业收入']] - 1) < 0.01
        b = lambda x, s=1: None if x is None else x / s
        mc = d['market_cap_basic']
        r[J['最新价']] = d['close']; r[J['总市值']] = b(mc, 1e8)
        r[J['流通市值']] = None if mc is None or d['float_shares_percent_current'] is None else mc * d['float_shares_percent_current'] / 100 / 1e8
        r[J['PE(TTM)']] = d['price_earnings_ttm']; r[J['PB']] = d['price_book_fq']
        r[J['营业收入']] = b(d['total_revenue_ttm'], 1e8); r[J['营收同比']] = b(d['total_revenue_yoy_growth_ttm'], 100)
        r[J['归母净利润']] = b(d['net_income_ttm'], 1e8); r[J['净利润同比']] = b(d['net_income_yoy_growth_ttm'], 100)
        r[J['毛利率']] = b(d['gross_margin_ttm'], 100); r[J['ROE']] = b(d['return_on_equity'], 100)
        r[J['每股收益']] = d['earnings_per_share_basic_ttm']; r[J['每股净资产']] = d['book_value_per_share_fq']
        r[J['最近财报期']] = pe_end
        # notes: drop the old price-mismatch remark, add a fresh one if the two sources disagree by more than 2%
        notes = [s for s in (r[J['备注']] or '').split('；') if s and not s.startswith('股价两数据源不一致')]
        if tq:
            f = tc.get(tq(r, J)); tp = num(f[3]) if f else None
            if tp and d['close'] and abs(tp / d['close'] - 1) > 0.02:
                notes.append(f"股价两数据源不一致：TradingView {d['close']:g} / 腾讯 {tp:g}"); diffs.append(r[J['代码']])
        r[J['备注']] = '；'.join(notes) or None
    # stamp: Tencent's quote time where available (HK/US), else TradingView's
    tz = ZoneInfo(MKT[sheet][0]); ts = []
    for f in tc.values():
        try: ts.append(dt.datetime.strptime(f[30][:19].replace('/', '-'), '%Y-%m-%d %H:%M:%S').replace(tzinfo=tz))
        except ValueError: pass
    stamp[sheet] = asof(sheet, max(ts) if ts else dt.datetime.fromtimestamp(max(times), CEST))
    rewrite(ws, rows, J['总市值'])
    last = dt.datetime.fromtimestamp(max(times), CEST).strftime('%Y-%m-%d %H:%M %Z') if times else None
    report.append(f'{sheet} {len(rows)} 只，TradingView 无数据 {len(miss)}：{miss}；财报期未变者营收一致 {checks[1]}/{checks[0]}；'
                  f'与腾讯股价差>2% {len(diffs)}：{diffs}；最新报价时间 {last}')

intl('港股', 'hongkong', lambda r, J: 'HKEX:' + str(int(r[J['代码']][:5])), lambda r, J: 'hk' + r[J['代码']][:5])
intl('美股', 'america', lambda r, J: f"{r[J['交易所']]}:{r[J['代码']]}", lambda r, J: 'us' + r[J['代码']].replace('.', '-'))
intl('瑞士', 'switzerland', lambda r, J: 'SIX:' + r[J['代码']], None)

# 行业汇总 was computed from the old numbers; drop it rather than leave stale totals
if '行业汇总' in wb.sheetnames: del wb['行业汇总']
if '更新时间' in wb.sheetnames: del wb['更新时间']
u = wb.create_sheet('更新时间')
u.append(['retrieved', retrieved.strftime('%Y-%m-%d %H:%M %Z'), f'{retrieved.day} {retrieved:%b %Y}, {retrieved:%H:%M} CEST'])
for k, (en, zh) in stamp.items(): u.append([k, zh, en])
n = wb['说明与来源']
for row in n.iter_rows():
    k = row[0].value or ''
    if k == '【A股】行情与财务':
        row[1].value = f"行情为{stamp['A股'][1]}（腾讯证券，抓取于 {retrieved:%Y-%m-%d %H:%M} CEST）。财务仍为2026年半年报（报告期2026-06-30），第三季度报告尚未统一纳入；营业收入、归母净利润为上半年累计值，同比为较2025年上半年。单位亿元人民币。PE为负表示对应口径下净利润为亏损；TTM=最近四个季度，动态=按最新报告期年化，静态=按上一完整年度。"
    if k == '【港股/美股/瑞士】行情':
        row[1].value = f"数据抓取时间 {retrieved:%Y-%m-%d %H:%M} CEST。港股为{stamp['港股'][1]}价；美股为{stamp['美股'][1]}价；瑞士为{stamp['瑞士'][1]}价。港股、美股股价已与腾讯证券行情逐只核对，相差超过2%的在备注列列出了两个数据源的数值。"
    if k == '【港股/美股/瑞士】财务与估值' and '已发布新一期' not in row[1].value:
        row[1].value += '各公司按各自最新已发布财报更新，部分公司已发布新一期（如2026-09-30）财报，以"最近财报期截止日"列为准。'
print('\n'.join(report))
wb.save(OUT)
print('saved', OUT)
