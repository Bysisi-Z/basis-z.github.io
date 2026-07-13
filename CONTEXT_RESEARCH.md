# Context — Research / Decoding (`/research`)

> Part of si-lens.me project context. Read alongside `CONTEXT.md`.
> Last updated: 2026-07-13

## Gateway (`/research/index.astro`)

Two-column layout (s76): **Industry Analysis** (left) → `/research/industry` · **Play with the Data** (right) → 4 data project cards.

**Play with the Data cards:**
- NSFG Explorer → `/research/data`
- NSFG Individual Reports → `/nsfg-reports.html`
- MEPS Explorer → `/research/meps`
- MEPS Expenditure → `/research/meps-expenditure`
- Drug Payer & Channel Explorer → `/research/meps-drugs`

---

## Industry Analysis (`/research/industry`)

Series-based index (s76). Design: series number label (rose, 10px uppercase) + large italic serif title + tagline + article list.

**Series 01 — Invert, Always Invert:** Munger inversion framework. Tagline: *"What would have to be true for this to fail?"*
- [Live] Organon: Was the Failure Avoidable? → `/organon-stock-analysis.html`

**Series 02 — Coming Soon** (grayed-out placeholder, `pointer-events:none`)

---

## Organon Stock Post-Mortem (`/organon-stock-analysis.html`)

Standalone static HTML in `public/`. Light theme matching main site. Chart.js 4.4.0 + annotation plugin.

**Chart:** OGN monthly close (left axis, rose `#c17d9d`) + US 10Y Treasury yield (right axis, orange dashed). 22 annotated events; 7 categories (Milestone/Macro/Ops/BD/Product/Compliance/M&A). Hover near numbered badge → `.event-detail-panel` floating card. Event-type legend removed (chart fills full width).

**Responsive layout (s79–80):** `max-width: 1640px; margin: 0 auto` on `.page-wrap`. `≤960px`: stats panel → horizontal strip above chart. `≤640px`: mobile adjustments.

**Quarterly financial table:** Q2'21–Q1'26, 20 quarters.
- Income Statement: Revenue, COGS, Gross Profit (with GM%), SG&A, R&D, EBITDA*, Interest Exp., Net Income
- Cash Flow (s78): Free Cash Flow (quarterly) + Dividends Paid ($71M/qtr through Q1'25, $5M/qtr from Q2'25)
- Balance Sheet: Cash, Current Assets, Current Liab., Working Capital
- Sidebar labels sync via `requestAnimationFrame`. Hover chart month → highlights quarterly column.
- FCF: red for negative quarters. Dividends Paid: red for post-cut $5M quarters.
- Color legend row: ● Headline / ● Supporting / ● Cost·expense / ● Negative·below threshold / ● Gross margin ≥62%

**Section question style:** `.section-question` — Cormorant Garamond italic, `clamp(20px,2.2vw,28px)`, rose `#c17d9d`.

**Back nav:** `← Industry Analysis` crumb (10px uppercase Inter, stone → ink hover).

**Peer comparison table (s77, updated s82):** Organon / Haleon / Kenvue. Column headers neutral gray; Organon left border `3px solid #c17d9d`. Credit rating badges. Rows include: Parent stake retained at separation — Organon 0% (Merck fully exited, red bold), Haleon ~38%, Kenvue ~91%.

**Further Reading sidebar (s82):** After peer-box. Three cases: Chemours (DuPont, 2015) / Mallinckrodt (Covidien, 2013) / Viatris (Pfizer Upjohn + Mylan, 2020). Grid layout, muted gray-brown border.

### Article Structure (s81 reorganized)

**Topic 01: Turn the Clock Back to Spin-Off**
- 1.1 Did Organon Have to Be Born This Way? — 4 structural alternatives table; Section 355 blockers; key callout: structure maximizing Merck's extraction required public company.
- 1.2 Why $9.5 Billion? — Credit rating impact (Ba2/BB from day one); EBITDA capacity table.
- 1.3 How the $9.5B Was Structured — Uses-of-proceeds box ($9.5B raised − $9.0B to Merck − $118M fees = $382M net); debt tranche table (6 tranches); "The Hedge That Wasn't" (Fed June 2021 dot plot; SOFR peak 5.33%).

**Topic 02: The Dividend — To Pay or Not to Pay**
- Why dividend was pre-planned (Investor Day May 2021); inherited income-mandate shareholder base.
- "Fixed Cash Commitments vs. FCF" box: interest $470M + dividend $284M + capex $240M = $994M vs $1,100M FCF → $106M residual.
- Cumulative dividend reference box: Q2'21–Q1'26 = $1,156M total (16×$71M + 4×$5M).
- May 2025 cut: $0.28 → $0.02 (93%); frees $264M/yr; token $0.02 preserves dividend-payer status.
- Window 01 (Q3–Q4 2022) + Window 02 (Feb 2023) — two-column card grid.
- Sources 1–19 with live links.

**EBITDA note:** $2.2–2.4B projection = Adj. EBITDA from May 2021 Investor Day. GAAP EBITDA differs. Actuals: 2022 ~$2.1B / 2023 $1.9B / 2024 ~$2.0B.

**Events:** 22 total; removed: id:16 (headcount cut), id:17 (Nexplanon 5yr label), id:15 (Q4 2025 earnings). Event id:25 = April 10 2025 Moody's & S&P outlook → Negative (Ba2/BB affirmed, never investment grade).

---

## NSFG Explorer (`/research/data`)

### Cycles

**2022–2023** (default): 5,586 respondents, 1,912 variables.
**2017–2019**: 6,141 respondents, 2,609 variables, ages 15–49. Note: 2019–2021 does not exist — COVID caused skip.

Cycle picker in header. Selected variable persists across cycle switches. All variable keys uppercase in REPORT_VARS / DEEPDIVE_MAP; 2017–2019 EA vars are lowercase (`pill`, `condom`) → fix: `.toUpperCase()` at 8 lookup sites (s41).

### Left panel

340px wide. 2-level grouped sidebar: section → group header (qcode + title + count) → variables. Groups default-expanded on load (s43). Group title no longer truncates (`word-break:break-word`). 19 groups where title=qcode fall back to first var's label. 84 groups, 710 grouped variables (`nsfg_groups.json`). Session 44 fixes: ED-6 title → "Method used in last 48 months"; EA-21 split into EA-21-reasons + EA-21-type.

### REPORT badges

213 variables have blue REPORT badge: 21 EA/METHSTOP variables + 192 METHX calendar variables.

**Analysis logic:** rate = n_stopped / n_users (NOT conditional on EA-17 data presence).

**METHSTOP codes (2022–2023):** pill=3, condom=4, vasectomy=5, withdrawal=7, depo=8, implant=9, IUD=19, patch=21, ring=22.
**METHSTOP codes (2017–2019):** patch=**25**, ring=**26** (not 21/22). Drug codes for METHX: `{3,8,9,19,25,26}` both cycles.

### Deep-dive pages

| Variable | Page | Rate 2022–23 | Rate 2017–19 |
|---|---|---|---|
| PILL | /pill-analysis.html | 28.9% | 34.6% |
| CONDOM | /condom-analysis.html | 7.6% | 7.1% |
| VASECTMY | /vasectomy-analysis.html | 0.2% | 0.6% |
| DEPOPROV | /depo-analysis.html | 34.2% | 44.1% |
| WIDRAWAL | /withdrawal-analysis.html | 5.1% | 6.0% |
| PATCH | /patch-analysis.html | 32.6% | 38.4% |
| RING | /ring-analysis.html | 34.0% | 44.2% |
| MORNPILL | /ec-analysis.html | n/a | — |
| IMPLANT | /implant-analysis.html | 29.1% | n/a (no standalone ever-used) |
| IUD | /iud-analysis.html | 23.4% | 35.8% |
| METHDISS/METHSTOP01–09 | /method-comparison.html | cross-method | — |

All 11 pages have 2022–2023 / 2017–2019 cycle picker. Payloads: `public/data/nsfg1719_report_payloads.json`. Switch-back restores DOM (saved before first switch). Individual records table hidden in 1719 mode.

### Reports index

`/nsfg-reports.html` — 13 reports in 2 groups (EA + METHX). Breadcrumb: `← Decoding · Explorer`.

### Data files

| File | Description |
|---|---|
| `public/data/nsfg_*.json` | 2022–2023 explorer data |
| `public/data/nsfg1719_*.json` | 2017–2019 explorer data |
| `public/data/nsfg1719_age_counts.json` | 1.3MB, 7 age groups 15–50 |
| `public/data/nsfg1719_report_payloads.json` | All 11 report payloads |
| `public/data/nsfg_sex_activity_split.json` | Sexual activity split (both cycles) |
| `nsfg_groups.json` | 84 groups, 710 variables |

Raw source (local only): `~/Downloads/2017_2019_FemRespData.dat` + setup files. Generation scripts: `~/Downloads/gen_nsfg1719_*.py`.

---

## NSFG Method Trends (`/nsfg-method-trends.html`)

Standalone HTML in `public/`. METHX1–METHX192 (48 months × 4 slots). Months 1–12=yr−3, 13–24=yr−2, 25–36=yr−1, 37–48=interview yr.

**3-way denominator toggle:** method users that year / all respondents / non-EC drug market (pill+IUD+implant+Depo+ring+patch).

"No method used" row visible only in All Respondents mode (gray dashed border). Non-EC drug market n ≈ 1,776–1,877.

**2017–2019 cycle picker** added (s41). Data inlined (`ROWS_1719`, `DENOMS_1719`, `NO_METHOD_1719`).

**Key findings:** Pill 31%→26% of method users over 4 yrs (declining); IUD 15%→16% (rising). In drug market: Pill ~51%, IUD ~33%.

METHX1–192 all carry REPORT badge → links to this page AND to `/nsfg-method-age.html` (two cards since s31).

---

## NSFG Age Analysis (`/nsfg-method-age.html`)

Focus: pill (3), IUD (19), implant (9), ring (26) by age group across METHX calendar. 7 age groups: 15–19 / 20–24 / 25–29 / 30–34 / 35–39 / 40–44 / 45–50.

**Denominator toggles (4 total):**
1. Method users in age group (default)
2. All respondents
3. Hormonal+LARC users
4. **Sexually active that year** (`pa` key, s43) — uses EC-8 `MONSX` slots; n_active = respondents with ≥1 MONSX=1 in that 12-month window

**Section A:** Context stacked bar (full bar = n_total; segments = no method / other methods / non-EC drug). 4 method panels with horizontal bars.

**Section B:** Dumbbell charts — ○ yr−3 → ● interview yr. Rose dots, teal/red connecting line (direction). Intermediate yr-2/yr-1 small faint dots. Rows with n<15 show stone `!` badge. Δ pp on right in line color.

**Sexual activity split toggle:** "No method" → "Not recently sexually active" (gray) + "Sexually active, no contraception" (amber `#C49A7C`). Definition: HADSEX=1 AND LSEXDATE within 12mo of CMINTVW. Data: `public/data/nsfg_sex_activity_split.json`.

**Methodology note boxes (s42):** 3 gray `.meth-note` boxes (overview bar / method bars / 4-year trend). Key caveat: LSEXDATE classification valid for interview year only.

**Key findings:** Pill strong youth bias (51% teen method users) declining fastest in young women (−13 to −15 pp over 4 yrs). 15–19 "no method +10pp" is almost entirely not sexually active (60.7% vs 50.0% in 2017–19). IUD growing all ages, fastest <30 (+3.6–3.9 pp).

**2017–2019 cycle picker** added (s41). `DATA_1719` inlined.

**Generation scripts:** `~/Downloads/gen_method_age_with_active.py` (both cycles, includes `pa` and `n_active`).

---

## MEPS Explorer (`/research/meps`)

18,640 respondents, 1,368 variables, 25 topic sections. Source: AHRQ HC-251 Full-Year Consolidated 2023.

**Left panel:** Section dropdown (25 sections) above search. REPORT badges (blue `#4a7fc1`) on 8 expenditure vars → `/research/meps-expenditure`.

**Split by toggle (s27):** Overall / Age group / Income level. State persists across variable/section switches. Split files fetched on demand and cached.

**Age groups:** 0–17 / 18–34 / 35–49 / 50–64 / 65–74 / 75+ (variable: AGE23X)
**Income groups:** Poor/Near poor (<125% FPL) / Low (125–199%) / Middle (200–399%) / High (≥400%) (POVCAT23, codes 1+2 merged)

**Long-tail count variables (s26):** split at P95 — normal bins + gray "Extreme values" section. Dollar vars use dollar bins. `outlier: true` flag in JSON.

**Label fixes (s38):** Yes/No auto-applied to all {1,2}-only vars. -2 (prev round) and -10 (top coded) added to MISSING_VALS.

### Data files

| File | Description |
|---|---|
| `public/data/meps_*.json` | 25 section files + meta |
| `public/data/meps_{section}_split.json` | 25 split files (~2.7MB total) |
| `public/data/meps_exp_overview.json` | 200-pt curves + stats per payer |

Raw sources: `_data_sources/meps2023/` (gitignored). Generation: `gen_meps_data.py` (explorer), `gen_meps_splits.py` (split), `gen_meps_data.py` (expenditure).

---

## MEPS Expenditure (`/research/meps-expenditure`)

**Payers:** Total, Self/OOP, Private Ins., Medicare, Medicaid, VA/CHAMPVA, TRICARE, Other (=TOTOFD+TOTSTL+TOTWCP+TOTOSR). Additive check: max diff $4 (rounding only).

**Split by toggle (s27):** Overall / Age group / Income level. Chart 1 switches to matrix of stacked bars.

**Chart 1:** 100% horizontal stacked bar — dollar share by payer. Payer glossary: 7-item grid, color-coded. Medicare glossary (s28): explains under-65 coverage (SSDI 24mo, ESRD, ALS).

**Chart 2:** 100% stacked bar — % with $0 vs >$0 per payer. Clickable to filter Chart 3.

**Chart 3:** Sorted distribution curve (empirical CDF, >$0 only). X axis = percentile 0–100%; Y axis = $ clipped at P95. Annotations: Q1/Median/Q3 dashed + Mean horizontal rose line. Stat cards: n, Q1, Median, Q3, Mean (rose), P95, true max. Default: Total.

---

## MEPS HRT Method + Regimen (`/meps-hrt-method.html`)

**Universe:** Female age 45–69 in MEPS FY. **HRT filter:** TC1S1_1 = 183 (estrogens) or 185 (progestins); excludes TC 102 (contraceptives) + TC 182 (androgens). **Metric:** unique patients / total eligible women × 100% (prevalence).

**Page layout:** 1480px wide, two matrices side by side (4 years each).

**By Delivery Method:** HRT Total → Systemic (Oral / Patch / Gel·Spray / Compounded Cream / Injectable) → Vaginal·Local (Vaginal Cream / Vaginal Tablet / Vaginal Ring / Vaginal Insert).

**By Therapy Regimen:** HRT Total → Systemic (Estrogen Only / Combo / Progestogen Only*) → Vaginal·Local (Estrogen Only only). *P-only bars: gray + `*` asterisk — no FDA menopause indication.

**Systemic vs Local:** Systemic = RXDRGNAM NOT containing "TOPICAL". Local = RXDRGNAM contains "TOPICAL" + PROGESTERONE INST.

**Eligible women denominator:** 2020: 4,854 · 2021: 5,109 · 2022: 4,095 · 2023: 3,350.
**HRT prevalence:** 4.3% (2020) → 3.9% → 4.8% → 5.6% (2023).

**Key findings:** 67 unique products across 4 yrs. Premarin only in 2020. Generic progesterone caps #1 by patient count in 2023. Vaginal cream surged 11.4%→25.7% of HRT patients.

**Product frequency table (s70):** Appended to same page. Top-10 per year (union = 16 unique product types). Scope tags: Systemic (purple) / Local (teal). Rank ▲▼ arrows (colored chip). Patients only (not fills). Local TABS fix: RXDRGNAM containing "TOPICAL" + RXFORM=TABS → "Vaginal Tabs".

**Data:** `public/data/meps_hrt_method.json` + `meps_hrt_product.json`. Gen scripts: `gen_hrt_method.py` + `gen_hrt_product_v2.py` in `_data_sources/meps2023/`.

**Raw sources:** h220a/h224.dta (2020) · h229a/h233.dta (2021) · h239a/h243.dta (2022) · h248a/h251.dta (2023). All gitignored.

---

## MEPS PCSK9 Demo (`/meps-pcsk9-demo.html`)

Proportional attribution payer split. Linked from `meps-reports.html`. Details in original build notes.

**Known issue:** its "Pharmacy channel" legend labels don't match the official PHARTP1 codebook — e.g. what it
calls "Clinic / provider office" (80 fills, $43,768) is actually code 4 "Drug store" per the codebook; the whole
4-item legend is shifted. Not yet fixed (found while building the Drug Explorer below, which uses correct labels).

---

## MEPS Drug Payer & Channel Explorer (`/research/meps-drugs`)

Astro page (full site nav), added session 2026-07-13. Search/multi-select across all 532 drugs in HC-248A;
selections combine into one aggregated view (patient count deduplicated via ID-set union, not summed).

**Data:** `public/data/meps_drug_payer_channel.json` (1.08MB) — one record per drug: 187,060 fills and 11,836
patients after excluding missing/unimputed drug names; unique patient DUPERSID list; proportional payer attribution
(dollars/attr_fills/attr_days, same method as PCSK9 demo); PHARTP1 channel breakdown (fills+dollars). Gen script:
`_data_sources/meps2023/gen_drug_payer_channel.py`.

**Official PHARTP1 labels used** (from `h248acb.pdf` codebook): Mail-order · In another store · In HMO/clinic/
hospital · Drug store · Online. 5,215 fills with unimputed RXDRGNAM (-15/-9/-8/-7/-1) excluded from the drug list.
Days excluded from day-metrics when RXDAYSUP is missing (-8/-7) or 999 ("taken as needed").

**UI:** therapeutic class + subclass filters; search box + checkbox list (sorted by fills desc) → chips row → KPI
row (drugs/fills/unique patients/total $/avg $ per fill) → payer bar chart (toggle dollars/fills/days) → channel
bar chart → dosage-form chart. Default selection: top drug by fills (Atorvastatin).

**RXFORM dosage-form chart:** uses best-effort labels in `meta.form_labels`; raw RXFORM code is always displayed
next to the mapped label because AHRQ does not publish an official decode table for this free-text field.

Linked from `/research` "Play with the Data" (card 04) and `meps-reports.html` (Prescribed Medicines group).

---

## Reports Indexes

**`/nsfg-reports.html`** — NSFG reports index: 11 EA reports + 2 METHX reports. Breadcrumb: `← Decoding · Explorer`.

**`/meps-reports.html`** — MEPS reports index: HRT Method & Product Frequency (live) + 3 coming-soon stubs (INSCOV23, DLAYCA42, TOTSLF23).

---

## Internal Navigation Chain

`/research` → `/research/industry` or data hub pages → individual reports → back up cleanly.

All 11 analysis pages + method-comparison + method-trends + method-age: `← NSFG Reports` back link.
`/nsfg-reports.html` / `/meps-reports.html`: breadcrumb `← Decoding · Explorer`.
