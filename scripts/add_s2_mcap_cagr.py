"""Add / refresh the "市值3年CAGR" column (right after 总市值) in the pharma stock workbook, in place.
Run after refresh_s2_pharma_stocks.py:  python3 scripts/add_s2_mcap_cagr.py <workbook.xlsx>

Start point = last close on or before (data date − 3 years). Blank if the stock was not listed by then, or if data is missing
or fails the check.
A-share:  market cap then = close on the start day × total shares on that day; market cap now = the table's 总市值.
          Close = Yahoo's split-adjusted close × the split factors Yahoo lists after that day (i.e. back to the actual price);
          shares = Eastmoney share-capital history (RPT_F10_EH_EQUITY); stocks missing there (e.g. BeOne) use the HK/US
          method below. Yahoo has no Beijing Stock Exchange data → blank (Tencent's kline would cover BJ but blocked us
          after heavy use on 2026-10-23).
HK/US/CH: CAGR from (price now / price then) × (shares now / shares then). Price then = Yahoo split-adjusted close; shares =
          Yahoo split-adjusted ordinary shares (annual/quarterly), "then" = the reported date nearest the start point, "now" =
          the latest one. Using one share series for both ends keeps ADR ratios and share classes out of the result.
Check:    the 3-year price change must be within 35% of TradingView's Perf.3Y. Only a coarse guard against split / symbol
          errors: Perf.3Y's base day varies by stock (seen 10–13 Oct to 25 Oct 2023), so tighter tolerances reject good data.
Responses are cached in scratch file <workbook>.cagr-cache.json so a rerun does not hit the APIs again.
"""
import json, os, ssl, sys, time, datetime as dt, urllib.request, urllib.parse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from openpyxl import load_workbook

PATH = sys.argv[1]
CACHE_PATH = PATH + '.cagr-cache.json'
try:
    import certifi; CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = None
COL = '市值3年CAGR'
def load_cache():
    try: return json.load(open(CACHE_PATH))
    except (OSError, ValueError): return {}
def save_cache():
    json.dump(dict(cache), open(CACHE_PATH + '.tmp', 'w')); os.replace(CACHE_PATH + '.tmp', CACHE_PATH)
cache = load_cache()

def get(url, data=None):
    key = url + (data.decode() if data else '')
    if key in cache: return cache[key]
    for k in range(2):
        try:
            req = urllib.request.Request(url, data=data, headers={'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json'})
            out = json.loads(urllib.request.urlopen(req, timeout=20, context=CTX).read())
            cache[key] = out; return out
        except urllib.error.HTTPError as e:
            if e.code == 404: cache[key] = None; return None
            time.sleep(2)
        except Exception:
            time.sleep(2)
    return 'error'

def pmap(fn, items, n=4, label=''):
    out, t0 = [None] * len(items), time.time()
    with ThreadPoolExecutor(n) as ex:
        for i, v in enumerate(ex.map(fn, items)):
            out[i] = v
            if (i + 1) % 100 == 0 or i + 1 == len(items):
                print(f'  {label} {i + 1}/{len(items)} ({time.time() - t0:.0f}s)', flush=True)
                save_cache()
    return out

wb = load_workbook(PATH)
stamp = {r[0]: r[1] for r in wb['更新时间'].iter_rows(values_only=True)}
end = dt.date.fromisoformat(stamp['retrieved'][:10])
start = end.replace(year=end.year - 3)
years = (end - start).days / 365.25
ts = lambda d: int(dt.datetime(d.year, d.month, d.day).timestamp())

def ensure_col(ws):
    heads = [c.value for c in ws[1]]
    if COL in heads: return heads.index(COL) + 1
    cap = next(j for j, h in enumerate(heads) if h.startswith('总市值')) + 1
    ws.insert_cols(cap + 1); ws.cell(row=1, column=cap + 1).value = COL
    ws.cell(row=1, column=cap + 1)._style = ws.cell(row=1, column=cap)._style
    return cap + 1

def write(ws, j, vals):
    for i, v in enumerate(vals):
        c = ws.cell(row=i + 2, column=j); c.value = v; c.number_format = '0.0%'

def y_price(ysym):
    """(day, split-adjusted close, split factor after that day) for the last close on or before start."""
    c = get(f'https://query2.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(ysym)}?period1={ts(start - dt.timedelta(days=120))}'
            f'&period2={ts(end + dt.timedelta(days=1))}&interval=1d&events=split')
    if c == 'error': return 'error', None
    r = ((c or {}).get('chart') or {}).get('result')
    if not r: return 'no Yahoo data', None
    r = r[0]
    first = r['meta'].get('firstTradeDate')
    if first and first > ts(start) + 86400: return 'not listed', None
    pts = [(t, x) for t, x in zip(r.get('timestamp') or [], r['indicators']['quote'][0].get('close') or []) if x and t <= ts(start) + 86400]
    if not pts: return 'not listed' if first is None else 'no price then', None
    t_then, p_then = pts[-1]
    split = 1.0
    for e in ((r.get('events') or {}).get('splits') or {}).values():
        if e['date'] > t_then: split *= e['numerator'] / e['denominator']
    return 'ok', (dt.datetime.utcfromtimestamp(t_then).date(), p_then, split)

def y_shares(ysym):
    s = get(f'https://query2.finance.yahoo.com/ws/fundamentals-timeseries/v1/finance/timeseries/{urllib.parse.quote(ysym)}'
            f'?type=annualOrdinarySharesNumber,quarterlyOrdinarySharesNumber&period1={ts(start - dt.timedelta(days=800))}&period2={ts(end + dt.timedelta(days=1))}')
    if s == 'error': return None
    obs = {}
    for res in ((s or {}).get('timeseries') or {}).get('result') or []:
        for x in res.get(res['meta']['type'][0]) or []:
            if x and x.get('reportedValue'): obs[x['asOfDate']] = x['reportedValue']['raw']
    if not obs: return None
    near = min(obs, key=lambda d: abs((dt.date.fromisoformat(d) - start).days))
    if abs((dt.date.fromisoformat(near) - start).days) > 275: return None
    return obs[near] / obs[max(obs)]

def em_shares(secucode, day):
    f = urllib.parse.quote(f'(SECUCODE="{secucode}")(END_DATE<=\'{day}\')')
    e = get(f'https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_F10_EH_EQUITY&columns=END_DATE,TOTAL_SHARES'
            f'&filter={f}&pageSize=1&sortColumns=END_DATE&sortTypes=-1')
    rows = ((e if isinstance(e, dict) else {}).get('result') or {}).get('data') or []
    return rows[0]['TOTAL_SHARES'] if rows else None

def tv_perf(region, tickers):
    out = {}
    for i in range(0, len(tickers), 400):
        d = get(f'https://scanner.tradingview.com/{region}/scan', json.dumps({'symbols': {'tickers': tickers[i:i + 400]}, 'columns': ['Perf.3Y']}).encode())
        for r in (d if isinstance(d, dict) else {}).get('data', []): out[r['s']] = r['d'][0]
    return out

def checked(ratio, tv):
    return tv is not None and abs(ratio / (1 + tv / 100) - 1) <= 0.35

report = []

# ---------- A-share ----------
ws = wb['A股']; j = ensure_col(ws); heads = [c.value for c in ws[1]]
ci, capi, pi = heads.index('代码'), next(i for i, h in enumerate(heads) if h.startswith('总市值')), next(i for i, h in enumerate(heads) if h.startswith('最新价'))
rows = [list(r) for r in ws.iter_rows(min_row=2, values_only=True)]
exch = lambda c: 'BJ' if c[0] in '48' or c.startswith('92') else ('SH' if c[0] in '69' else 'SZ')
def a_one(r):
    code = r[ci]; x = exch(code)
    if x == 'BJ': return 'Beijing SE (no Yahoo data)', None
    st, v = y_price(code + ('.SS' if x == 'SH' else '.SZ'))
    if st != 'ok': return st, None
    day, p_adj, split = v
    sh = em_shares(f'{code}.{x}', day.isoformat())
    if sh: return 'ok', (p_adj * split * sh / 1e8, p_adj, None)
    # not in Eastmoney's share history (e.g. offshore-incorporated BeOne): use the HK/US method with Yahoo's share series
    ratio = y_shares(code + ('.SS' if x == 'SH' else '.SZ'))
    return ('ok', (None, p_adj, ratio)) if ratio else ('no share data', None)
res = pmap(a_one, rows, 4, 'A股')
perf = tv_perf('china', [('SSE:' if exch(r[ci]) == 'SH' else 'SZSE:') + r[ci] for r in rows])
vals, sts, bad = [], [], []
for r, (st, v) in zip(rows, res):
    if st != 'ok' or not r[capi]: vals.append(None); sts.append(st); continue
    if not checked(r[pi] / v[1], perf.get(('SSE:' if exch(r[ci]) == 'SH' else 'SZSE:') + r[ci])):
        vals.append(None); sts.append('check failed'); bad.append(r[ci]); continue
    if v[2] is None: vals.append((r[capi] / v[0]) ** (1 / years) - 1); sts.append('ok')
    else: vals.append((r[pi] / v[1] * v[2]) ** (1 / years) - 1); sts.append('ok (Yahoo shares)')
write(ws, j, vals)
report.append(f'A股: {Counter(sts)}; check failed: {bad}')

# ---------- HK / US / CH ----------
def intl(sheet, region, tvsym, ysym):
    ws = wb[sheet]; j = ensure_col(ws); heads = [c.value for c in ws[1]]
    rows = [list(r) for r in ws.iter_rows(min_row=2, values_only=True)]
    ci, xi, pi = heads.index('代码'), heads.index('交易所'), next(i for i, h in enumerate(heads) if h.startswith('最新价'))
    def one(r):
        st, v = y_price(ysym(r[ci]))
        if st != 'ok': return st, None
        s = y_shares(ysym(r[ci]))
        return ('ok', (v[1], s)) if s else ('no Yahoo shares', None)
    res = pmap(one, rows, 4, sheet)
    perf = tv_perf(region, [tvsym(r[ci], r[xi]) for r in rows])
    vals, sts, bad = [], [], []
    for r, (st, v) in zip(rows, res):
        if st != 'ok' or not r[pi]: vals.append(None); sts.append(st); continue
        ratio = r[pi] / v[0]
        if not checked(ratio, perf.get(tvsym(r[ci], r[xi]))):
            vals.append(None); sts.append('check failed'); bad.append((r[ci], round(ratio - 1, 2), perf.get(tvsym(r[ci], r[xi])))); continue
        vals.append((ratio * v[1]) ** (1 / years) - 1); sts.append('ok')
    write(ws, j, vals)
    report.append(f'{sheet}: {Counter(sts)}; check failed (Yahoo price change, TV Perf.3Y %): {bad}')

intl('港股', 'hongkong', lambda c, x: 'HKEX:' + str(int(c[:5])), lambda c: f'{int(c[:5]):04d}.HK')
intl('美股', 'america', lambda c, x: f'{x}:{c}', lambda c: c.replace('.', '-'))
intl('瑞士', 'switzerland', lambda c, x: 'SIX:' + c, lambda c: c + '.SW')

u = wb['更新时间']
for row in list(u.iter_rows()):
    if row[0].value == 'cagr_start': u.delete_rows(row[0].row)
u.append(['cagr_start', start.isoformat(), f'{start.day} {start:%b %Y}'])
wb.save(PATH)
save_cache()
print(f'window {start} → {end} ({years:.2f} y)'); print('\n'.join(report))
