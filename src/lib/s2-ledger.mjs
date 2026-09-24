// S² Capital fund accounting — the single source of truth for cash, share counts and income.
// Used by the /capital page (build time) and scripts/update-s2-prices.mjs.
//
// Inputs (src/data/s2-capital.json):
//   policy            cost / tax / interest assumptions (see CONTEXT_S2_CAPITAL.md §5)
//   trades[]          id, side, ticker, decisionAt, executionDate, convention, referencePrice, shares,
//                     capTier? | slippageBps?, commissionPerShare?, commissionMin?, currency?, fxRate?
//   positions[]       ticker, name, country?, currency?, lastPrice, lastPriceDate
//   corporateActions[] DIVIDEND {ticker, exDate, payDate?, amount, currency?, fxRate?, withholdingRate?}
//                      SPLIT    {ticker, exDate, ratio}               (2-for-1 → ratio 2)
//                      SPINOFF  {ticker, exDate, newTicker, ratio, cashInLieuPrice?}
//   rates             { "<proxy>": [[YYYY-MM-DD, annual % yield], …] }  cash-interest proxy series
//
// The ledger walks every calendar day from inception to `asOf`, in this order each day:
// splits/spin-offs (ex-date) → dividend entitlements (ex-date) → dividend payments (pay date)
// → trades → overnight interest on the end-of-day cash balance.

const round2 = (n) => Math.round(n * 100) / 100;
const addDays = (iso, n) => {
  const d = new Date(iso + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

export function tradeCosts(trade, policy = {}) {
  const tiers = policy.slippageBps ?? {};
  const bps = trade.slippageBps ?? tiers[trade.capTier] ?? tiers.large ?? 0;
  const c = policy.commission ?? {};
  return {
    slippageBps: bps,
    commissionPerShare: trade.commissionPerShare ?? c.perShare ?? 0,
    commissionMin: trade.commissionMin ?? c.min ?? 0,
  };
}

export function withholdingFor(ticker, positions = [], policy = {}) {
  const country = positions.find((p) => p.ticker === ticker)?.country ?? 'US';
  const w = policy.withholding ?? {};
  return w[country] ?? w.default ?? 0;
}

/** Latest rate on or before `date` from a sorted [[date, pct]] series. */
function rateOn(series, date) {
  let r = 0;
  for (const [d, v] of series) { if (d > date) break; r = v; }
  return r;
}

export function runLedger(fund, asOf) {
  const policy = fund.policy ?? {};
  const positions = fund.positions ?? [];
  const actions = fund.corporateActions ?? [];
  const interest = policy.cashInterest ?? null;
  const rateSeries = interest ? (fund.rates?.[interest.proxy] ?? []) : [];
  const dayCount = interest?.dayCount ?? 360;

  let cash = fund.initialCapital;
  const shares = {};
  const lastFill = {};
  const income = { dividendsGross: 0, withholding: 0, dividendsNet: 0, interest: 0, commission: 0, slippage: 0 };
  const tradeRows = [];
  const cost = {};           // ticker → cost basis in USD (fills + commissions), average-cost method
  const opened = {};         // ticker → date the current holding was opened
  const divByTicker = {};    // ticker → net dividends received since the holding was opened
  const closed = [];         // fully exited holdings, kept permanently
  const events = [];         // derived ledger events (dividends, splits, spin-offs) for the journal
  const pending = [];        // dividends entitled at ex-date, awaiting pay date

  const trades = [...(fund.trades ?? [])].sort((a, b) =>
    a.executionDate.localeCompare(b.executionDate) || a.decisionAt.localeCompare(b.decisionAt));

  const end = asOf ?? positions.map((p) => p.lastPriceDate).filter(Boolean).sort().at(-1) ?? fund.inception;

  for (let day = fund.inception; day <= end; day = addDays(day, 1)) {
    // 1. splits and spin-offs take effect at the ex-date open
    for (const a of actions) {
      if (a.exDate !== day || !shares[a.ticker]) continue;
      if (a.type === 'SPLIT') {
        shares[a.ticker] *= a.ratio;           // cost basis unchanged by a split
        if (lastFill[a.ticker]) lastFill[a.ticker] /= a.ratio;
        events.push({ date: day, type: 'Split', ticker: a.ticker, action: `${a.ratio}-for-1`, figure: `${shares[a.ticker].toLocaleString('en-US')} sh` });
      } else if (a.type === 'SPINOFF') {
        const entitled = shares[a.ticker] * a.ratio;
        const whole = Math.floor(entitled);
        shares[a.newTicker] = (shares[a.newTicker] ?? 0) + whole;
        opened[a.newTicker] ??= day;             // spun-off shares start at zero cost (no allocation)
        cost[a.newTicker] ??= 0;
        const lieu = round2((entitled - whole) * (a.cashInLieuPrice ?? 0));
        cash = round2(cash + lieu);
        events.push({ date: day, type: 'Spin-off', ticker: a.ticker, action: `+${whole.toLocaleString('en-US')} ${a.newTicker}`, figure: lieu ? `$${lieu.toFixed(2)} cash in lieu` : '—' });
      }
    }

    // 2. dividend entitlement is fixed by shares held going into the ex-date
    for (const a of actions) {
      if (a.type !== 'DIVIDEND' || a.exDate !== day || !shares[a.ticker]) continue;
      const fx = a.fxRate ?? 1;
      const gross = round2(shares[a.ticker] * a.amount * fx);
      const rate = a.withholdingRate ?? withholdingFor(a.ticker, positions, policy);
      const tax = round2(gross * rate);
      pending.push({ ...a, payDate: a.payDate ?? a.exDate, gross, tax, rate, heldShares: shares[a.ticker] });
    }

    // 3. dividend cash arrives on the pay date
    for (let i = pending.length - 1; i >= 0; i--) {
      const p = pending[i];
      if (p.payDate !== day) continue;
      const net = round2(p.gross - p.tax);
      cash = round2(cash + net);
      income.dividendsGross += p.gross;
      income.withholding += p.tax;
      income.dividendsNet += net;
      divByTicker[p.ticker] = (divByTicker[p.ticker] ?? 0) + net;
      events.push({
        date: day, type: 'Dividend', ticker: p.ticker,
        action: `$${p.amount.toFixed(4).replace(/0{1,2}$/, '')}/sh × ${p.heldShares.toLocaleString('en-US')}`,
        figure: `$${net.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} net (${Math.round(p.rate * 100)}% WHT)`,
      });
      pending.splice(i, 1);
    }

    // 4. trades
    for (const t of trades) {
      if (t.executionDate !== day) continue;
      const { slippageBps, commissionPerShare, commissionMin } = tradeCosts(t, policy);
      const fx = t.fxRate ?? 1;
      const dir = t.side === 'SELL' ? -1 : 1;
      // slippage always works against the fund: pay up on buys, give up on sells
      const fillPrice = t.referencePrice * (1 + dir * slippageBps / 10_000);
      const gross = round2(t.shares * fillPrice * fx);
      const slippage = round2(t.shares * Math.abs(fillPrice - t.referencePrice) * fx);
      const commission = round2(t.shares > 0 ? Math.max(commissionMin, t.shares * commissionPerShare) : 0);

      cash = round2(cash - dir * gross - commission);
      const held = shares[t.ticker] ?? 0;
      let realized = null;
      if (dir > 0) {
        if (!held) { opened[t.ticker] = day; cost[t.ticker] = 0; divByTicker[t.ticker] = 0; }
        cost[t.ticker] += gross + commission;
      } else {
        const costOut = held ? cost[t.ticker] * (t.shares / held) : 0;
        const proceeds = gross - commission;
        realized = { costOut, proceeds, pnl: proceeds - costOut };
        cost[t.ticker] -= costOut;
      }
      shares[t.ticker] = held + dir * t.shares;
      if (dir < 0 && shares[t.ticker] === 0) {
        const buys = tradeRows.filter((r) => r.ticker === t.ticker && r.side === 'BUY' && r.executionDate >= opened[t.ticker]);
        const sells = [...tradeRows.filter((r) => r.ticker === t.ticker && r.side === 'SELL' && r.executionDate >= opened[t.ticker]), { gross, commission }];
        const invested = buys.reduce((x, r) => x + r.gross + r.commission, 0);
        const proceeds = sells.reduce((x, r) => x + r.gross - r.commission, 0);
        const dividends = divByTicker[t.ticker] ?? 0;
        closed.push({
          ticker: t.ticker, opened: opened[t.ticker], closedOn: day,
          invested: round2(invested), proceeds: round2(proceeds), dividends: round2(dividends),
          pnl: round2(proceeds + dividends - invested),
          returnPct: invested ? ((proceeds + dividends) / invested - 1) * 100 : 0,
        });
        delete cost[t.ticker]; delete opened[t.ticker]; delete divByTicker[t.ticker];
      }
      lastFill[t.ticker] = fillPrice * fx;
      income.commission += commission;
      income.slippage += slippage;

      const nav = cash + Object.entries(shares).reduce((s, [k, n]) => s + n * (lastFill[k] ?? 0), 0);
      tradeRows.push({
        ...t, slippageBps, fillPrice, gross, slippage, commission, currency: t.currency ?? 'USD', fxRate: fx,
        cashAfter: cash, weightAfter: nav > 0 ? (shares[t.ticker] * fillPrice * fx) / nav : 0, realized,
      });
    }

    // 5. overnight interest on the end-of-day balance (none on a negative balance)
    if (interest && cash > 0) {
      const accrued = cash * rateOn(rateSeries, day) / 100 / dayCount;
      cash += accrued;
      income.interest += accrued;
    }
  }

  cash = round2(cash);
  for (const k of Object.keys(income)) income[k] = round2(income[k]);
  for (const k of Object.keys(shares)) if (shares[k] === 0) delete shares[k];
  const holdings = Object.keys(shares).map((k) => ({
    ticker: k, shares: shares[k], cost: round2(cost[k] ?? 0), opened: opened[k], dividends: round2(divByTicker[k] ?? 0),
  }));
  return { cash, shares, holdings, closed, rows: tradeRows, events, income, asOf: end };
}

/**
 * Benchmark total return, like-for-like with the fund: one unit bought at basePrice on the
 * base date; later dividends (net of the same withholding policy) are added as cash, not
 * reinvested; splits after the base date adjust the base.
 */
export function benchmarkReturn(b, fund, price = b.lastPrice, through = b.lastPriceDate) {
  const policy = fund.policy ?? {};
  const acts = (fund.corporateActions ?? []).filter((a) => a.ticker === b.ticker && a.exDate > b.baseDate && (!through || a.exDate <= through));
  let units = 1;
  let divs = 0;
  for (const a of [...acts].sort((x, y) => x.exDate.localeCompare(y.exDate))) {
    if (a.type === 'SPLIT') units *= a.ratio;
    if (a.type === 'DIVIDEND') {
      const rate = a.withholdingRate ?? (policy.withholding?.[b.country ?? 'US'] ?? policy.withholding?.default ?? 0);
      divs += units * a.amount * (a.fxRate ?? 1) * (1 - rate);
    }
  }
  const priceOnly = (units * price) / b.basePrice - 1;
  const total = (units * price + divs) / b.basePrice - 1;
  return { priceReturn: priceOnly * 100, totalReturn: total * 100, dividends: divs };
}
