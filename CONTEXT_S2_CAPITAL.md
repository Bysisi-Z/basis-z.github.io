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

1. **Brand bar** — logo lockup | Portfolio → `#fund` · Research → `#research` · News → `#news` · Meet our team → `/capital/team/`
2. **Hero** — headline "A virtual firm built as a $100 million experiment in public market investing." (full width, `text-wrap: balance`); below it photo 16:9 (7fr) | short white vertical rule | intro copy (5fr, bottom-aligned to the photo). "$100 million" highlighted on a red background. No index line and no photo caption — both removed s88 to keep the page clean; don't add small-print lines back to the hero.
3. **Fund** (`#fund`) — "● LIVE · CURRENT SIMULATED PORTFOLIO VALUE (CLOSE 23 SEP 2026)" — "simulated" is required so the live number is never mistaken for real money; the timestamp sits in parentheses and switches to e.g. "24 SEP 14:32 ET" once live prices load → **split-flap board** with the value, and **Since inception** return at its bottom-right (drops below the board on phones). The old four-metric row (initial capital / positions / day) was removed by the user.
4. **■ Performance** (`#performance`) — line chart, S² NAV vs S&P 500 (SPY) and Health Care (XLV), indexed to 100 at inception, total return; hover crosshair + tooltip; direct end labels. Then the benchmark table "Since inception, against the market" (+ IBB) and the income strip.
5. **■ Holdings** (`#holdings`) — ticker, company, shares, cost basis (+ avg/sh), market value (+ last/sh), weight, unrealized return (% and $); a Cash row so weights sum to 100%. Valued at the last close.
6. **■ Investment History** (`#journal`) — manual rows + derived dividend/split/spin-off rows. Newest first, 20 rows.
7. **■ Trades** (`#trades`) — trade blotter, 11 columns (see §5).
8. ~~Closed positions~~ — **removed s88** (user: exits are announced in News and written up in Research, so a separate table isn't needed). `ledger.closed` is still computed in `s2-ledger.mjs` for accounting; it just isn't displayed.
9. **■ Currencies** (`#currencies`) — currency monitor: one small line chart per watched currency (CHF, EUR, HKD, CNY), US dollars per one unit, daily closes for the past 12 months, each chart on its own scale. Shows latest rate, 1-year change, 12-month high/low; hover/touch shows a day's close. Neutral ink line — no red. 4 columns → 2 (≤1100px) → 1 (≤560px). Sits directly below Performance, above Holdings (list position here is not page order). Hidden when `fxWatch.series` is empty. (added 2026-10-08)
9a. **■ Market hours** (`#markets`) — 24-hour timeline in the viewer's local time, directly below Currencies. One row per market (Shanghai, Hong Kong, Zurich, Frankfurt, New York — ordered by opening time): closed hours = hairline, open hours = bar (finished sessions dim, upcoming mid-grey, the traded part of a live session solid white). A red "now" line with the current time crosses all rows; open markets get bold name + red live dot + time left, closed ones show time to next open (lunch breaks for Shanghai/Hong Kong). Drawn client-side from the `MARKETS` constant in `index.astro` (exchange-local sessions + IANA time zone, so DST is automatic), redrawn every 30 s. Weekends handled; **exchange holidays and half-days are not**. Hours verified 2026-10-08 against NYSE, SIX, Deutsche Börse, HKEX and SSE pages. (added 2026-10-08)
9b. **■ Research** (`#research`) — article list: date / type / title + company / status. Links when `href` is set.
10. **■ News** (`#news`) — firm news (partners' meetings, other firm events): date / type / title + optional summary; links when `href` is set. Same row style as Research, no status column. Empty state "Firm news will be posted here." (added s88)
11. **Colophon** — small logo, "S² Capital · Lucerne · Est. 2026", disclaimer: *"S² Capital operates a simulated portfolio using real market prices. No actual capital is deployed, and nothing on this site is investment advice."*

**Compact layout (2026-10-08, user request: the page felt loose and needed too much scrolling).** Actual page order and two-up rows on desktop (≥1101px; single column below):
hero → fund value → **Performance** (`.perf-grid`: chart | benchmark table + income) → **Research** (full width) → Holdings → Trades → **Investment history** (full width) → **News | Documents** → **Currencies | Market hours** → colophon. (Reordered 2026-10-08: the firm's own judgement — research, later portfolio commentary — comes right after performance; currencies and market hours are supporting information and sit last.)
Two-up rows are `<div class="s2-wrap s2-pair">` holding two `<section class="s2-section">` (no `s2-wrap` on the inner sections). Inside a pair: the ledger shows two lines per entry, articles stack date/type above the title, `rtable--wide` becomes a label/value list, currencies are 2×2, market-hours rows are stacked (name + status above the bar). Section rhythm was cut from `clamp(160px, 26vh, 300px)` to `clamp(56px, 6vw, 88px)`; marker margin 56 → 26px; table/ledger/article row padding reduced. Keep it tight — don't reintroduce large vertical gaps. The numbered list above describes each section's content, not the order.

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
| `news[]` | `{date, type, title, summary?, href?}` | Firm news, newest first. `type` e.g. Firm / Meeting / Event. Real content — **not** cleared by the demo reset |
| `fxWatch` | `{currencies: [{code, name}], series: {CHF: [[date, rate], …]}}` | Currency monitor. `currencies` is the editable list; `series` is **rebuilt in full every updater run** (one year of daily closes from Yahoo `<CODE>USD=X`, 6 decimals). Separate from `fx`, which values non-USD positions |
| `documents[]` | `{date, type, title, summary?, file}` | Operating documents (meeting agendas, minutes, policies), newest first, section `#documents` (brand-bar link "Documents"). `file` is a file name in `public/documents/s2/`; if that file exists the title opens it in a new tab (preview) and the row shows format + size with Preview / Download links — so use PDF for anything that should preview in the browser. `type` e.g. Agenda / Minutes / Policy. `summary` is kept in the data but **not shown** on the page (s88, user wants rows to be date · type · title · file links only). Real content — **not** cleared by the demo reset. **Files are public once pushed — ask the user before adding any** |
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

**Section panels (s88):** every `.s2-section` sits on a faint white panel (`rgba(242,239,234,0.035)` + 1px `0.06` border, 14px radius, padding `clamp(24px,3vw,44px)`, 20–32px gap) so sections read as separate blocks. Paired sections (`.s2-pair`) use the same 20–32px gap and size to their own content (not stretched — stretching left big empty panels). `.perf-grid` (chart | table inside Performance) keeps its wider gap.

## 6. Prices, performance & benchmarks

- **Two layers:**
  - **A. Daily close (official record)** — `update-s2-prices.mjs` sets `lastPrice/lastPriceDate` for positions **and** benchmarks, upserts `navHistory`. During US market hours it skips Yahoo's partial daily bar (only while `now` is between `meta.currentTradingPeriod.regular.start` and `.end` — before 2026-10-13 it also dropped the previous close when run before the open), so a manual run never records an intraday price as a close. Benchmarks are marked to the fund's latest close date; prices under 10 keep 4 decimals.
  - **B. Live (display only)** — page calls `/api/quotes?symbols=…` on load and every 5 min (skips hidden tabs); re-prices the fund value, since-inception return, benchmark rows and excess. Falls back silently to the last close. Verified working on Cloudflare (Yahoo did not block) on 2026-09-24.
  - `npm run dev` has no Pages Functions → dev **simulates** ±1% moves so the board animation can be seen.
- **Benchmarks (picker added 2026-10-13):** two groups, set by `group` in `benchmarks[]`. **Broad market:** S&P 500 via SPY, CSI 300 via 510300.SS, Hang Seng China Enterprises (HSCEI) via 2828.HK. **Sector:** Health Care Select Sector via XLV, Nasdaq Biotechnology via IBB, CSI 300 Health Care via 512010.SS, Hang Seng Hong Kong Biotech via 3069.HK. The chart legend is the picker (`.chart-pick`): laid out as labelled rows — `FUND | S² Capital`, `BROAD MARKET | chips`, `SECTOR | chips` (grid: label column with a thin right divider | options; ≤560px the label stacks above). Benchmarks are bordered pill chips so they read as clickable and the group names (plain text) don't (s88, user found the old inline flow ambiguous — "SECTOR" looked like a selectable item). Chips toggle one or several benchmarks; the chart lines, y scale, end labels and the benchmark table rows follow; the choice is kept in `localStorage` (`s2-benchmarks`); defaults are the entries with `default: true` (SPY, XLV). Colour = market (US blue `#3D84C6`, China green `#2EA36B`, Hong Kong pink `#C7609B`; XLV keeps gold `#B8892A`), **dashed line = sector benchmark**; S² red + these four pass the dataviz validator all-pairs on `#111113` (green↔pink CVD in the warn band, covered by end labels + dash). **Non-USD benchmarks are measured in US dollars:** `currency`, `baseFx` (USD per unit on the base date, FX close) and `lastFx` on the benchmark; the updater fetches `<CCY>USD=X` history since inception, stores `navHistory[].benchmarks` **in USD**, and puts `fxRate` on Yahoo dividend rows of non-USD tickers. Their dividends use `policy.withholding[country] ?? default` (CN and HK currently fall under the 15% default — not confirmed by the user). To add a benchmark: append to `benchmarks[]` with `group`, `label`, `color`, `currency`, `country`, base price under the fund's convention (+ `baseFx`), then run the updater. Rule: **same start date (inception) and same price convention as the fund's opening trade; same latest close as the fund.** Excess shown in percentage points; negative excess in red.
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

**Add a currency to the monitor** — append `{code, name}` to `fxWatch.currencies` (ISO code Yahoo quotes as `<CODE>USD=X`), then run the updater.

**Add a document** — copy the file into `public/documents/s2/` (ASCII file name, e.g. `2026-10-partners-meeting-1-agenda.docx`), append `{date, type, title, summary, file}` to `documents[]`.

**Interactive pharma stock table** (added 2026-10-13) — `public/documents/s2/2026-10-pharma-listed-stocks.html` is a standalone page (own S² dark styling, no Astro layout) listed in `documents[]` as type "Data": English page (the script translates headers, industries, boards and notes from the Chinese workbook, converts 亿 to billions, and puts other-market codes in the last columns; it stops if a value has no translation); four market tabs (A-share / Hong Kong / United States / Switzerland), click a header to sort, filter row under the headers (every text column = multi-select checkbox list with counts, in-list search, "Select shown"/"Clear", and a "(Blank)" entry; nothing ticked = no filter; numeric columns keep `>100`, `<0`, `10-50`, percent columns take plain numbers). Table box height is fitted to the viewport by JS `fit()` (fills the space under the bar if ≥400px, else one screen tall) so the whole box is visible without scrolling the page; intro paragraph under the title removed (user, 2026-10-23). Data is embedded in the file. Rebuild from the Excel workbook: `python3 scripts/make_s2_pharma_stocks_page.py <workbook.xlsx> public/documents/s2/2026-10-pharma-listed-stocks.html` (template: `scripts/s2_pharma_stocks_template.html`; sheet names `A股/港股/美股/瑞士/说明与来源` are read as-is). Source workbook: `~/Desktop/Pharma_Listed_Stocks_A_HK_US_CH_20261023.xlsx` (refreshed 2026-10-23; the 20261012 original is kept).
**Company website links** (2026-10-23): `python3 scripts/add_s2_company_websites.py <workbook.xlsx>` appends `公司网址` as the last column of each market sheet, leaving all existing cells and row order intact. Sources: A-share Eastmoney `CompanySurvey/PageAjax` → `jbzl[0].ORG_WEB`; Hong Kong Eastmoney `CompanyProfile/PageAjax` → `gszl.gswz`; US and Switzerland TradingView symbol profiles → `web_site_url`. Only source-returned company URLs are accepted; schemes are normalised to HTTPS and vendor, exchange and social domains are excluded. No domain is guessed. Requests use at most two workers, a pause before each request, at most two retries, and per-response JSON caches (including failures) in `/tmp/s2-company-websites-cache/`. Reruns reuse the cache without calling the APIs again. Rerun this script when the stock list changes; a price refresh preserves the website column with its row. Rebuild with the usual page generator: URLs are hidden row metadata, and only Company names become new-tab links (`rel="noopener"`); names remain plain values for sorting, search and filters. Missing URLs stay plain text. Coverage on 2026-10-23: A-share **516/516**, Hong Kong **290/296**, US **1043/1055**, Switzerland **37/37** (total **1886/1904**). Empty HK codes: `03696.HK, 02657.HK, 06938.HK, 02563.HK, 08473.HK, 01173.HK`; empty US codes: `ATEC, TRAX, GMRS, ZJYL, KTWO, VRXA, MENS, ABVC, PMI, SNTI, NIKI, BTTC`. Validation: compared every original workbook cell/value/format/style and all original embedded page data; all unchanged. Cached rerun produced identical workbook values. Chromium checked 10 company links per market (including `603259`, `02359.HK`, `LLY`, `RO`), sorting, company multiselect and numeric filters; no page JavaScript errors or console errors. Desktop 1440px and mobile 390px geometry matches the prior page. External-site limitations in the sample: Baili (`688506`) failed browser navigation, Yunnan Baiyao (`000538`) and WuXi Biologics (`02269.HK`) exceeded the 12-second load timeout, and Lilly showed a Cloudflare challenge. Their links retain the source-returned official domains.

**Refreshing the numbers** (same stock list, same sources): `python3 scripts/refresh_s2_pharma_stocks.py <old.xlsx> <new.xlsx>` then rebuild the page from `<new.xlsx>`. A-share: Tencent `qt.gtimg.cn` fields 3 price / 45 total cap / 44 float cap (亿) / 39 PE TTM / 52 PE dyn / 53 PE static / 46 PB / 38 turnover %; A-share financials stay on the H1 report (Q3 not merged). HK/US/CH: TradingView scanner (`close, market_cap_basic, float_shares_percent_current, price_earnings_ttm, price_book_fq, total_revenue_ttm, …, fiscal_period_end_current` — `_fq` is blank for half-year reporters), HK/US prices cross-checked with Tencent (>2% gap → note). The script prints a sanity check (TTM revenue must equal the old workbook wherever the period end did not change; 2026-10-23 run: 267/267, 685/685, 34/34), drops the stale `行业汇总` sheet, rewrites the price notes in `说明与来源`, and writes an `更新时间` sheet (per-market "close" vs "intraday" from each market's closing time) that the page shows under the title. Gotcha: openpyxl `ws.cell(value=None)` does not clear a cell — assign `.value`.
**Market cap 3Y CAGR column** (user, 2026-10-23; 5Y was asked first, 3Y is the user's fallback — Yahoo has no HK/CH share counts before end-2022): run `python3 scripts/add_s2_mcap_cagr.py <workbook.xlsx>` after every refresh (refresh does **not** recompute it; it inserts/updates `市值3年CAGR` right after 总市值). Method and checks are in the script docstring and the page notes: A-share = Yahoo close (split record undone) × Eastmoney total shares on the start day vs today's cap; HK/US/CH = price ratio × Yahoo share-series ratio; coarse guard vs TradingView Perf.3Y (±35%, its base day varies by stock). Blanks = not listed by the start date, Beijing SE (29, no Yahoo data), no share data, or failed guard (2026-10-23: A 2, HK 4, US 40 mostly reverse-split microcaps, CH 3). Page colours: green ▲ > +5 %/yr, red ▼ < −5 %, yellow in between. **Rate limits:** Eastmoney `push2his` kline and Tencent `web.ifzq.gtimg.cn` kline both blocked us (Tencent WAF 501) after a few hundred fast requests — don't use them in bulk; the script caches every response in `<workbook>.cagr-cache.json` (keep that file in the scratchpad, not next to the Desktop workbook).

**Researcher's notes** (s89, user 2026-10-23): one page per company at `/capital/notes/<slug>/` (`src/pages/capital/notes/[slug].astro`), data in `src/data/s2-notes.json` (`slug, company, legalName, listings[{market, code, exchange}], website, status, updated, sections[{title, items[]}], log[{date, author?, text}]`; inline `**bold**` / `[text](url)`). The stock-table generator reads that file and links every listed `code` (A-share and H-share codes can share one note) → after adding/removing a note, **rebuild the stock table page**. Linked codes get a red underline + red square; the hint line explains the marker. Demo: WuXi AppTec (603259 + 02359.HK), status "Demo", sections empty — only verified identity facts filled in; content is the partners' to write, never invented.

**News articles** (s89): a `news[]` item with `slug` + `body` gets its own page `/capital/news/<slug>/` (`src/pages/capital/news/[slug].astro`); the News list then shows date · type · title only and links to it. `body` = paragraphs (strings) and `{list: [...]}`; inline `**bold**` and `[text](url)`. Tone: press release, only facts the user gave. First item: `first-partners-meeting` (2026-10-23, meeting 10:00–11:00 Zurich; next meeting November 2026).

**Add a news item** — append `{date, type, title, summary}` to `news[]` (English, matching the page; `href` optional).

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
