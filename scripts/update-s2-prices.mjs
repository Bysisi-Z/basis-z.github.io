// Updates S² Capital market data in src/data/s2-capital.json.
//
//   node scripts/update-s2-prices.mjs
//
// For every position and benchmark: latest daily close (lastPrice / lastPriceDate) plus
// dividends and splits since inception (merged into corporateActions, source "yahoo").
// Also refreshes the cash-interest proxy series (policy.cashInterest.proxy, e.g. ^IRX)
// and FX closes for non-USD positions, then records that day's fund value in navHistory.
// Cash, shares and income come from the ledger (src/lib/s2-ledger.mjs).
// Run after the US close; the GitHub workflow s2-prices.yml does this on weekdays.

import { readFileSync, writeFileSync } from 'node:fs';
import { runLedger } from '../src/lib/s2-ledger.mjs';

const FILE = new URL('../src/data/s2-capital.json', import.meta.url);
const fund = JSON.parse(readFileSync(FILE, 'utf8'));
const since = Math.floor(new Date(fund.inception + 'T00:00:00Z').getTime() / 1000) - 86400 * 7;

async function history(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`
    + `?period1=${since}&period2=${Math.floor(Date.now() / 1000)}&interval=1d&events=div,splits`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${symbol}: HTTP ${res.status}`);
  const r = (await res.json()).chart?.result?.[0];
  if (!r) throw new Error(`${symbol}: empty response`);
  const tz = r.meta?.exchangeTimezoneName ?? 'America/New_York';
  const day = (ts) => new Date(ts * 1000).toLocaleDateString('en-CA', { timeZone: tz });
  // during market hours the last daily bar is today's partial session, not a close
  const sessionOpen = Date.now() / 1000 < (r.meta?.currentTradingPeriod?.regular?.end ?? 0);
  const closes = [];
  const q = r.indicators?.quote?.[0]?.close ?? [];
  (r.timestamp ?? []).forEach((ts, i) => {
    if (q[i] == null || (sessionOpen && i === q.length - 1)) return;
    closes.push([day(ts), Math.round(q[i] * 10000) / 10000]);
  });
  const divs = Object.values(r.events?.dividends ?? {}).map((e) => ({ exDate: day(e.date), amount: e.amount }));
  const splits = Object.values(r.events?.splits ?? {}).map((e) => ({ exDate: day(e.date), ratio: e.numerator / e.denominator }));
  return { closes, divs, splits };
}

// Yahoo-sourced actions are rebuilt every run; manual ones (spin-offs, pay dates) are kept.
const manual = (fund.corporateActions ?? []).filter((a) => a.source !== 'yahoo');
const fromYahoo = [];
const keep = (a) => !manual.some((m) => m.type === a.type && m.ticker === a.ticker && m.exDate === a.exDate);

let asOf = null;
const closeSeries = {};   // ticker → Map(date → close), for the daily NAV backfill
for (const item of [...fund.positions, ...(fund.benchmarks ?? [])]) {
  const { closes, divs, splits } = await history(item.ticker);
  closeSeries[item.ticker] = new Map(closes);
  const [date, price] = closes.at(-1);
  console.log(`${item.ticker}: ${item.lastPrice ?? '—'} → ${price} (${date})  div ${divs.length} split ${splits.length}`);
  item.lastPrice = Math.round(price * 100) / 100;
  item.lastPriceDate = date;
  if (fund.positions.includes(item) && (!asOf || date > asOf)) asOf = date;
  for (const d of divs) if (d.exDate >= fund.inception) fromYahoo.push({ type: 'DIVIDEND', ticker: item.ticker, exDate: d.exDate, amount: d.amount, source: 'yahoo' });
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
      return [b.ticker, c];
    }));
    return { date, value: Math.round(value * 100) / 100, cash, benchmarks };
  });
  const { income } = runLedger(fund, asOf);
  const last = fund.navHistory.at(-1);
  console.log(`NAV ${last.date}: ${last.value}  (${fund.navHistory.length} days; dividends net ${income.dividendsNet}, WHT ${income.withholding}, interest ${income.interest})`);
}

writeFileSync(FILE, JSON.stringify(fund, null, 2) + '\n');
