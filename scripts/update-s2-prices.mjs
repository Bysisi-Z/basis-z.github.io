// Updates S² Capital closing prices in src/data/s2-capital.json.
//
//   node scripts/update-s2-prices.mjs
//
// For every position: sets lastPrice / lastPriceDate to the most recent daily close
// (Yahoo Finance chart API), then records that day's fund value in navHistory.
// Run after the US close; the GitHub workflow s2-prices.yml does this on weekdays.

import { readFileSync, writeFileSync } from 'node:fs';

const FILE = new URL('../src/data/s2-capital.json', import.meta.url);
const fund = JSON.parse(readFileSync(FILE, 'utf8'));

async function lastClose(ticker) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?range=5d&interval=1d`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${ticker}: HTTP ${res.status}`);
  const result = (await res.json()).chart?.result?.[0];
  const closes = result?.indicators?.quote?.[0]?.close ?? [];
  const tz = result?.meta?.exchangeTimezoneName ?? 'America/New_York';
  for (let i = closes.length - 1; i >= 0; i--) {
    if (closes[i] != null) {
      const date = new Date(result.timestamp[i] * 1000).toLocaleDateString('en-CA', { timeZone: tz });
      return { price: Math.round(closes[i] * 100) / 100, date };
    }
  }
  throw new Error(`${ticker}: no close in response`);
}

let asOf = null;
for (const p of fund.positions) {
  const { price, date } = await lastClose(p.ticker);
  console.log(`${p.ticker}: ${p.lastPrice ?? '—'} → ${price} (${date})`);
  p.lastPrice = price;
  p.lastPriceDate = date;
  if (!asOf || date > asOf) asOf = date;
}

if (asOf) {
  const value = fund.cash + fund.positions.reduce((s, p) => s + p.shares * p.lastPrice, 0);
  fund.navHistory ??= [];
  const row = { date: asOf, value: Math.round(value * 100) / 100 };
  const existing = fund.navHistory.findIndex((r) => r.date === asOf);
  if (existing >= 0) fund.navHistory[existing] = row;
  else fund.navHistory.push(row);
  console.log(`NAV ${asOf}: ${row.value}`);
}

writeFileSync(FILE, JSON.stringify(fund, null, 2) + '\n');
