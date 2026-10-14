// Updates S² Capital market data in src/data/s2-capital.json.
//
//   node scripts/update-s2-prices.mjs
//
// For every position and benchmark: latest daily close (lastPrice / lastPriceDate) plus
// dividends and splits since inception (merged into corporateActions, source "yahoo").
// Also refreshes the cash-interest proxy series (policy.cashInterest.proxy, e.g. ^IRX)
// and FX closes for non-USD positions, then records that day's fund value in navHistory.
// Also rebuilds the one-year daily series for the currencies listed in fxWatch.currencies.
// Cash, shares and income come from the ledger (src/lib/s2-ledger.mjs).
// Run after the US close; the GitHub workflow s2-prices.yml does this on weekdays.

import { readFileSync, writeFileSync } from 'node:fs';
import { runLedger } from '../src/lib/s2-ledger.mjs';

const FILE = new URL('../src/data/s2-capital.json', import.meta.url);
const fund = JSON.parse(readFileSync(FILE, 'utf8'));
const since = Math.floor(new Date(fund.inception + 'T00:00:00Z').getTime() / 1000) - 86400 * 7;

async function history(symbol, from = since, dp = 4) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`
    + `?period1=${from}&period2=${Math.floor(Date.now() / 1000)}&interval=1d&events=div,splits`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${symbol}: HTTP ${res.status}`);
  const r = (await res.json()).chart?.result?.[0];
  if (!r) throw new Error(`${symbol}: empty response`);
  const tz = r.meta?.exchangeTimezoneName ?? 'America/New_York';
  const day = (ts) => new Date(ts * 1000).toLocaleDateString('en-CA', { timeZone: tz });
  // during market hours the last daily bar is today's partial session, not a close
  // (only while the session is actually running — before the open the last bar is yesterday's close)
  const reg = r.meta?.currentTradingPeriod?.regular ?? {};
  const nowS = Date.now() / 1000;
  const sessionOpen = nowS >= (reg.start ?? 0) && nowS < (reg.end ?? 0);
  const closes = [];
  const q = r.indicators?.quote?.[0]?.close ?? [];
  (r.timestamp ?? []).forEach((ts, i) => {
    if (q[i] == null || (sessionOpen && i === q.length - 1)) return;
    closes.push([day(ts), Math.round(q[i] * 10 ** dp) / 10 ** dp]);
  });
  const divs = Object.values(r.events?.dividends ?? {}).map((e) => ({ exDate: day(e.date), amount: e.amount }));
  const splits = Object.values(r.events?.splits ?? {}).map((e) => ({ exDate: day(e.date), ratio: e.numerator / e.denominator }));
  return { closes, divs, splits };
}

// Yahoo-sourced actions are rebuilt every run; manual ones (spin-offs, pay dates) are kept.
const manual = (fund.corporateActions ?? []).filter((a) => a.source !== 'yahoo');
const fromYahoo = [];
const keep = (a) => !manual.some((m) => m.type === a.type && m.ticker === a.ticker && m.exDate === a.exDate);

// Daily FX since inception (USD per unit) for every non-USD position or benchmark:
// converts their dividends on the ex-date and non-USD benchmarks into US dollars.
const fxHist = {};
const fxOn = (ccy, date) => {
  if (!ccy || ccy === 'USD') return 1;
  let rate = null;
  for (const [d, r] of fxHist[ccy] ?? []) { if (d > date) break; rate = r; }
  return rate ?? fxHist[ccy]?.[0]?.[1] ?? 1;
};
for (const c of new Set([...fund.positions, ...(fund.benchmarks ?? [])].map((x) => x.currency).filter((c) => c && c !== 'USD'))) {
  fxHist[c] = (await history(`${c}USD=X`, since, 6)).closes;
  console.log(`FX history ${c}USD: ${fxHist[c].length} days`);
}

let asOf = null;
const closeSeries = {};   // ticker → Map(date → close), for the daily NAV backfill
for (const item of [...fund.positions, ...(fund.benchmarks ?? [])]) {
  const isPosition = fund.positions.includes(item);
  const { closes: all, divs, splits } = await history(item.ticker);
  // benchmarks are marked to the fund's latest close date (Asian sessions can be a day ahead)
  const closes = !isPosition && asOf ? all.filter(([d]) => d <= asOf) : all;
  closeSeries[item.ticker] = new Map(closes);
  const [date, price] = closes.at(-1);
  console.log(`${item.ticker}: ${item.lastPrice ?? '—'} → ${price} (${date})  div ${divs.length} split ${splits.length}`);
  const dp = price < 10 ? 4 : 2;   // low-priced ETFs (e.g. CNY 0.4) need more than cents
  item.lastPrice = Math.round(price * 10 ** dp) / 10 ** dp;
  item.lastPriceDate = date;
  const foreign = item.currency && item.currency !== 'USD';
  if (!isPosition && foreign) item.lastFx = fxOn(item.currency, date);
  if (isPosition && (!asOf || date > asOf)) asOf = date;
  for (const d of divs) if (d.exDate >= fund.inception) fromYahoo.push({ type: 'DIVIDEND', ticker: item.ticker, exDate: d.exDate, amount: d.amount, ...(foreign ? { currency: item.currency, fxRate: fxOn(item.currency, d.exDate) } : {}), source: 'yahoo' });
  for (const s of splits) if (s.exDate >= fund.inception) fromYahoo.push({ type: 'SPLIT', ticker: item.ticker, exDate: s.exDate, ratio: s.ratio, source: 'yahoo' });
}
fund.corporateActions = [...manual, ...fromYahoo.filter(keep)]
  .sort((a, b) => a.exDate.localeCompare(b.exDate) || a.ticker.localeCompare(b.ticker));

// cash-interest proxy (annual % yield series)
const proxy = fund.policy?.cashInterest?.proxy;
if (proxy) {
  const { closes } = await history(proxy);
  fund.rates = { ...(fund.rates ?? {}), [proxy]: closes };
  console.log(`${proxy}: ${closes.length} days, latest ${closes.at(-1)?.join(' ')}`);
}

// FX for non-USD positions (USD per unit of local currency)
const ccys = [...new Set(fund.positions.map((p) => p.currency).filter((c) => c && c !== 'USD'))];
if (ccys.length) {
  fund.fx ??= {};
  for (const c of ccys) {
    const { closes } = await history(`${c}USD=X`);
    const [date, rate] = closes.at(-1);
    fund.fx[c] = { rate, date };
    console.log(`FX ${c}USD: ${rate} (${date})`);
  }
}

// Currency monitor: one year of daily closes per watched currency (USD per unit), rebuilt every run
const watch = fund.fxWatch?.currencies ?? [];
if (watch.length) {
  const yearAgo = Math.floor(Date.now() / 1000) - 86400 * 372;
  const cutoff = new Date(Date.now() - 86400e3 * 366).toISOString().slice(0, 10);
  fund.fxWatch.series = {};
  for (const { code } of watch) {
    const { closes } = await history(`${code}USD=X`, yearAgo, 6);
    fund.fxWatch.series[code] = closes.filter(([d]) => d >= cutoff);
    console.log(`FX watch ${code}USD: ${fund.fxWatch.series[code].length} days, latest ${closes.at(-1)?.join(' ')}`);
  }
}

// Daily NAV since inception, rebuilt every run from the same ledger (so a corrected trade or
// a late corporate action restates history consistently). One row per trading day.
if (asOf) {
  const fx = (p) => (p.currency && p.currency !== 'USD' ? fund.fx?.[p.currency]?.rate ?? 1 : 1);
  const days = [...(closeSeries[fund.positions[0]?.ticker ?? fund.benchmarks?.[0]?.ticker] ?? new Map()).keys()]
    .filter((d) => d >= fund.inception && d <= asOf);
  const lastKnown = {};
  fund.navHistory = days.map((date) => {
    const { cash, shares } = runLedger(fund, date);
    let value = cash;
    for (const p of fund.positions) {
      const c = closeSeries[p.ticker]?.get(date) ?? lastKnown[p.ticker];
      if (c != null) lastKnown[p.ticker] = c;
      value += (shares[p.ticker] ?? 0) * (c ?? 0) * fx(p);
    }
    const benchmarks = Object.fromEntries((fund.benchmarks ?? []).map((b) => {
      const c = closeSeries[b.ticker]?.get(date) ?? lastKnown[b.ticker];
      if (c != null) lastKnown[b.ticker] = c;
      // stored in US dollars so every benchmark is comparable with the USD fund
      const usd = c == null ? c : Math.round(c * fxOn(b.currency, date) * 1e6) / 1e6;
      return [b.ticker, usd];
    }));
    return { date, value: Math.round(value * 100) / 100, cash, benchmarks };
  });
  const { income } = runLedger(fund, asOf);
  const last = fund.navHistory.at(-1);
  console.log(`NAV ${last.date}: ${last.value}  (${fund.navHistory.length} days; dividends net ${income.dividendsNet}, WHT ${income.withholding}, interest ${income.interest})`);
}

writeFileSync(FILE, JSON.stringify(fund, null, 2) + '\n');
