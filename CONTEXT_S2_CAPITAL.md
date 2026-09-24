# S² Capital — Project Context

> Last updated: 2026-09-24 (session 87)
> Route: `/capital` (+ `/capital/team/`) · Nav item 06 "S² Capital" · homepage card "Virtual portfolio & research notes"
> Read this file for anything under `/capital`. General site rules stay in `CONTEXT.md`.

S² Capital is a **virtual investment firm**: $100M of simulated capital, real public-market prices, every decision and trade recorded and published. It replaced "A Collection of Rabbit Holes" (old route `/reading`, 301-redirected) in session 87.

---

## ⚠️ 1. Demo data is live

`src/data/s2-capital.json` currently holds a **fictional, backdated fund** created only to review the layout. The file's `"demo"` key says so.

- Inception 2025-09-24; one BUY of MRK, $20M at that day's intraday low $79.33 (+5 bps → fill $79.3697) × 251,985 sh, zero commission; ~$80M cash earning T-bill interest; 4 real MRK dividends since then (fetched from Yahoo)
- Journal rows (Founded / IC Decision / Entry) and one placeholder research article ("Merck & Co.: pricing in the Keytruda cliff too early" — invented title, no real article)
- Benchmarks based at 2025-09-24 intraday lows

**Reset before the real launch** (see §7 "Reset the demo").

---

## 2. Files

| File | Role |
|---|---|
| `src/pages/capital/index.astro` | Fund page: hero, live fund value, benchmarks, Investment History, Trades, Research |
| `src/pages/capital/team.astro` | Meet our team — placeholder ("Team profiles are coming soon.") |
| `src/layouts/S2Layout.astro` | Shared shell: palette, brand bar, colophon + disclaimer, section markers, dark site chrome |
| `src/data/s2-capital.json` | All fund data (see §4) |
| `src/lib/s2-ledger.mjs` | `runLedger()` — day-by-day fund accounting (trades, dividends, withholding, splits, spin-offs, FX, cash interest); `benchmarkReturn()` — like-for-like benchmark total return |
| `functions/api/quotes.js` | Cloudflare Pages Function: live prices from Yahoo, 5-min edge cache |
| `scripts/update-s2-prices.mjs` | Writes latest closes (positions + benchmarks), Yahoo dividends/splits → `corporateActions`, the ^IRX rate series, FX closes, and a `navHistory` row |
| `.github/workflows/s2-prices.yml` | Runs the updater **twice daily** (12:00 and 21:30 UTC, every day), commits + pushes the JSON only if it changed |
| `public/images/s2/s2-headquarters.jpg` | User-supplied AI-generated wall-sign photo (~1270px wide, soft on retina) |
| `public/_redirects` | `/reading*` → `/capital*` (301) |

---

## 3. Page structure (`/capital`)

1. **Brand bar** — logo lockup | Portfolio → `#fund` · Research → `#research` · Meet our team → `/capital/team/`
2. **Hero** — headline "A virtual firm built as a $100 million experiment in public market investing." (full width, `text-wrap: balance`); below it photo 16:9 (7fr) | short white vertical rule | intro copy (5fr, bottom-aligned to the photo). "$100 million" highlighted on a red background. Index line "Portfolio • Investment Journal • Research • Performance" (Inter 600, red 4px dots). Caption "S² Capital / Lucerne / Est. 2026".
3. **Fund** (`#fund`) — "● LIVE · CURRENT SIMULATED PORTFOLIO VALUE (CLOSE 23 SEP 2026)" — "simulated" is required so the live number is never mistaken for real money; the timestamp sits in parentheses and switches to e.g. "24 SEP 14:32 ET" once live prices load → **split-flap board** with the value, and **Since inception** return at its bottom-right (drops below the board on phones). The old four-metric row (initial capital / positions / day) was removed by the user.
4. **■ Performance** (`#performance`) — line chart, S² NAV vs S&P 500 (SPY) and Health Care (XLV), indexed to 100 at inception, total return; hover crosshair + tooltip; direct end labels. Then the benchmark table "Since inception, against the market" (+ IBB) and the income strip.
5. **■ Holdings** (`#holdings`) — ticker, company, shares, cost basis (+ avg/sh), market value (+ last/sh), weight, unrealized return (% and $); a Cash row so weights sum to 100%. Valued at the last close.
6. **■ Investment History** (`#journal`) — manual rows + derived dividend/split/spin-off rows. Newest first, 20 rows.
7. **■ Trades** (`#trades`) — trade blotter, 11 columns (see §5).
8. **■ Closed positions** (`#closed`) — every full exit, kept permanently: held from → to, invested, proceeds, dividends, P&L, return. Empty state promises losses stay listed.
9. **■ Research** (`#research`) — article list: date / type / title + company / status. Links when `href` is set.
10. **Colophon** — small logo, "S² Capital · Lucerne · Est. 2026", disclaimer: *"S² Capital operates a simulated portfolio using real market prices. No actual capital is deployed, and nothing on this site is investment advice."*

Removed along the way (don't bring back without asking): Methodology section, "How we think" six-step process grid, numbered section markers, "01 The fund" label, standalone full-screen photo section, the 50/50 split hero, under-construction page + speech-bubble easter egg.

---

## 4. Data model — `src/data/s2-capital.json`

| Key | Shape | Notes |
|---|---|---|
| `demo` | string | Present only while demo data is loaded |
| `inception` | `YYYY-MM-DD` | Ledger start date (the Day counter it used to drive was removed from the page) |
| `initialCapital` | number | 100000000 |
| `policy` | object | Cost / tax / income assumptions — see §5 |
| `positions[]` | `{ticker, name, country, currency, lastPrice, lastPriceDate}` | **Market prices only** (local currency). Share counts are NOT stored here |
| `benchmarks[]` | `{ticker, name, via, country, baseDate, baseConvention, basePrice, lastPrice, lastPriceDate}` | SPY / XLV / IBB |
| `trades[]` | `{id, side, ticker, decisionAt, executionDate, convention, referencePrice, shares, capTier, currency, fxRate}` (+ optional `slippageBps`, `commissionPerShare`, `commissionMin` overrides) | Inputs only; everything else derived |
| `corporateActions[]` | `DIVIDEND {ticker, exDate, payDate?, amount, currency?, fxRate?, withholdingRate?}` · `SPLIT {ticker, exDate, ratio}` · `SPINOFF {ticker, exDate, newTicker, ratio, cashInLieuPrice?}`; each has `source` | `source: "yahoo"` rows are rebuilt by the updater every run; anything else (manual) is kept and wins on the same type/ticker/exDate |
| `rates` | `{"^IRX": [[date, annual %], …]}` | Cash-interest proxy series, refreshed by the updater |
| `fx` | `{EUR: {rate, date}, …}` | USD per unit; only written when a non-USD position exists |
| `journal[]` | `{date, type, company, action, figure}` | Manual rows. Dividend/split/spin-off rows are **derived** by the ledger and merged in at render time |
| `research[]` | `{date, type, title, company, status, href}` | `status` e.g. Invested / Watching / Passed |
| `navHistory[]` | `{date, value, cash, benchmarks: {SPY, XLV, IBB}}` | **Rebuilt in full every updater run** (one row per trading day since inception, same ledger) — feeds the Performance chart |

Cash is **derived**, never stored.

---

## 5. Fund accounting — `src/lib/s2-ledger.mjs`

`runLedger(fund, asOf)` → `{ cash, shares, holdings, closed, rows, events, income, asOf }`, used by the page **and** the updater. It walks every calendar day from inception to `asOf`; each day, in order:

1. **Splits / spin-offs** at the ex-date: split multiplies shares; spin-off adds `floor(shares × ratio)` of `newTicker`, fractional part paid as cash in lieu at `cashInLieuPrice`.
2. **Dividend entitlement** at the ex-date: shares held × amount × fxRate; withholding = `withholdingRate` or `policy.withholding[country]`.
3. **Dividend cash** on the pay date (= ex-date when unknown — Yahoo only gives ex-dates): net of withholding, credited to cash, **not reinvested**.
4. **Trades:** fill = reference × (1 ± slippage bps) — always against the fund; gross = shares × fill × fxRate; commission = max(min, shares × per-share); post-trade cash; post-trade weight (holdings at last fill).
5. **Cash interest** on the end-of-day balance: cash × proxy yield / 100 / dayCount, credited daily (none on negative cash).

`income` totals: dividendsGross, withholding, dividendsNet, interest, commission, slippage.

**Cost basis:** average-cost; buys add gross + commission; sells remove cost pro rata and carry `realized` on the trade row. Split: basis unchanged. Spin-off: new shares start at zero basis (no allocation yet). **Closed positions:** when a holding goes to zero shares → `{ticker, opened, closedOn, invested, proceeds, dividends, pnl, returnPct}` (dividends received while held are part of the result). Keep an exited ticker in `positions[]` so its price history stays available.

**Chart palette** (validated with the dataviz validator on #111113, dark mode, all checks pass): S² `#E1181E` · S&P 500 `#3D84C6` · XLV `#B8892A`.

### Policy (`policy` in the JSON) — current defaults, user may still change

| Item | Setting |
|---|---|
| Base currency | USD |
| Commission | 0 (per share 0, min 0) |
| Slippage | by cap tier at decision: large (≥ $10B) 5 bps · mid ($2–10B) 15 bps · small (< $2B) 35 bps; per-trade `slippageBps` overrides |
| Withholding | Swiss-resident investor: US dividends 15% (CH–US treaty); `default` 15% |
| Cash interest | 13-week US T-bill yield (`^IRX`), ACT/360, daily |
| Dividends | cash, net of withholding, not reinvested |
| FX | trades carry `fxRate` at execution; positions valued at latest `fx[ccy]` close |
| Spin-offs | manual entry only (not in Yahoo's feed) |

**Trade blotter** (11 columns): Trade (side + ticker) · Decision timestamp · Executed · Price convention (+ reference) · Shares · Fill price · Gross · Commission · Slippage (+ bps) · Cash after · Weight after. Phones: label/value list.

**Price convention for real trades (recommended, not yet confirmed by the user):** "Next open" — fill at the next session's open after the decision timestamp. The demo's "Intraday low" is not achievable in reality.

---

## 6. Prices, performance & benchmarks

- **Two layers:**
  - **A. Daily close (official record)** — `update-s2-prices.mjs` sets `lastPrice/lastPriceDate` for positions **and** benchmarks, upserts `navHistory`. During US market hours it skips Yahoo's partial daily bar (`meta.currentTradingPeriod.regular.end`), so a manual run never records an intraday price as a close.
  - **B. Live (display only)** — page calls `/api/quotes?symbols=…` on load and every 5 min (skips hidden tabs); re-prices the fund value, since-inception return, benchmark rows and excess. Falls back silently to the last close. Verified working on Cloudflare (Yahoo did not block) on 2026-09-24.
  - `npm run dev` has no Pages Functions → dev **simulates** ±1% moves so the board animation can be seen.
- **Benchmarks:** S&P 500 via SPY, Health Care Select Sector via XLV, Nasdaq Biotechnology via IBB. Rule: **same start date (inception) and same price convention as the fund's opening trade; same latest close as the fund.** Excess shown in percentage points; negative excess in red.
- **Return basis: total return, net of withholding, on both sides.** `benchmarkReturn()` = (units × price + Σ net dividends per unit) / basePrice − 1 — dividends held as cash, not reinvested; splits after the base adjust units. Price-only return shown as a sub-line. The fund additionally earns T-bill interest on idle cash (benchmarks are fully invested) — that's real attribution, not a mismatch. ETFs stand in for indices (small fee drag vs the index).
- **Income strip** under the benchmark table: dividends net · withholding tax · cash interest · commissions · slippage · cash.
- **Split-flap board:** only the big value. Each character is a tile (upper/lower halves + hinge line); `, .` sit between tiles. Updates flip left→right (90ms stagger, 2 random interim digits per digit). Tile markup must match between Astro `board()` and script `tileHTML()`. Honors `prefers-reduced-motion`.

---

## 7. How to…

**Add a trade**
1. Append to `trades[]`: `id` (T0002…), `side`, `ticker`, `decisionAt` (ISO with ET offset, e.g. `2026-10-02T09:10:00-04:00`), `executionDate`, `convention`, `referencePrice`, `shares`, `capTier` (large/mid/small), `currency`, `fxRate` (1 for USD).
2. If it's a new ticker, add `{ticker, name, country, currency, lastPrice, lastPriceDate}` to `positions[]` (country drives withholding).
3. Add matching `journal[]` rows (e.g. IC Decision, Entry/Exit).
4. `node scripts/update-s2-prices.mjs` to refresh prices, then `npm run build`.

**Record a spin-off** — add `{type: "SPINOFF", ticker, exDate, newTicker, ratio, cashInLieuPrice, source: "manual"}` to `corporateActions[]` and add `newTicker` to `positions[]`. A manual `payDate` for a dividend works the same way (same type/ticker/exDate as the Yahoo row; manual wins).

**Add a research article** — append to `research[]` with `href` pointing to the article (detail-page template not built yet).

**Reset the demo** (before launch)
- Delete the `demo` key; set `inception` to the real start date
- `trades`, `positions`, `corporateActions`, `research`, `navHistory` → `[]`; `rates` refills on the next updater run
- `journal` → one row: `{date: <inception>, type: "Founded", company: "S² Capital", action: "Fund opened", figure: "$100,000,000"}`
- Re-base `benchmarks[]`: `baseDate` = inception, `baseConvention` = the real convention, `basePrice` = that day's price under it
- Update the hero caption / colophon "Est." year if it changes

**Run the price update by hand** — `node scripts/update-s2-prices.mjs` locally, or GitHub → Actions → "S² Capital market data" → Run workflow.

**Refresh schedule** — 12:00 UTC (before the US open: overnight dividends/splits, T-bill rate, FX, revised closes) and 21:30 UTC (after the close: the day's closes + NAV), every day incl. weekends (weekend runs usually change nothing → no commit). Runs never overlap (`concurrency: s2-prices`) and rebase before pushing. GitHub may start scheduled runs a few minutes late.

**Troubleshooting**
- **Push rejected** after the bot ran: `git pull --rebase origin main` first (the workflow commits the JSON up to twice a day).
- **Live value never updates on the live site:** check `https://si-lens.me/api/quotes?symbols=MRK`. If Yahoo starts blocking Cloudflare, switch the Function to Finnhub (free key in Cloudflare env vars).
- **Scoped CSS not applying:** in page files, selectors that start from the layout wrapper must be written `:global(.s2) .x` — Astro's scoping otherwise never matches `.s2`.

---

## 8. Design rules

- **Art direction is user-set — don't redesign.** Dark page `#111113`, ink `#F2EFEA`, soft `#CFCAC2`, muted `#8F8A83`, Swiss red `#E1181E`.
- **Red is structural only:** logo, section-heading squares, live dot, index-line dots, "$100 million" highlight, nav hover/active underline, negative excess. Never decorative.
- **Type:** Cormorant Garamond only for big statements and big numbers, always `lining-nums` (its default old-style figures make "100" read "IOO"); Inter for nav, labels, body, tables. Numbers in tables use `tabular-nums`.
- **Logo:** SVG red square, white Source Serif 4 "S" + Inter "2" (matches the wall sign). Lockup: "CAPITAL" to the right, **bottom-aligned** with the square, cap height ≈ 1/5 of the square, 11px gap.
- **Section headings:** 8px red square + uppercase label (`.marker--square`).
- **No cards, no boxed stats, no dashboard grids.** Ledgers use hairline row rules only.
- **Width:** everything inside `min(86vw, 1600px)` so all left edges align.
- **Site chrome:** S² pages turn the global nav + footer dark via `body:has(.s2)` rules in `S2Layout`.
- **Mobile:** ≤720px brand bar stacks (logo row, links row); ≤760px blotter and benchmark table become label/value lists; ≤560px live row stacks, board 40px. Anchor jumps use `scroll-margin-top` to clear the sticky site nav.

---

## 9. Working with the user on this section

- Rejects anything that looks like a generic corporate / PowerPoint / private-equity site; references are Swiss modernist design, architectural editorial, independent research publication.
- When asked for a small change, **change only that** ("别的不要动") — don't bundle extra tweaks; mention side issues instead.
- Headline and intro copy are the user's own words; only fix clear grammar.
- Tried and rejected: 6 decorative logo directions, 12 pure-typographic S² directions (user supplied the wall-sign logo instead), cream/light version, 50/50 hero, full-screen statement hero, "Think independently. Invest deliberately.", "An investment test in the real world.", compact two-column hero (reverted), bold/black index-line weight.
- Never publish fictional trades as real — demo data must be clearly flagged and reset before launch.

---

## 10. Pending

- [ ] Reset demo data and start real trading (§7)
- [ ] Confirm the real price convention (recommended: Next open) and the §5 policy (withholding 15%, slippage tiers, T-bill interest)
- [ ] Real dividend pay dates (currently credited on the ex-date)
- [ ] Research article detail-page template
- [ ] Investment mandate, decision protocol, portfolio letters — drafts proposed in session 87, awaiting the user's wording
- [ ] Meet our team content
- [ ] Real-phone check; higher-resolution wall photo
