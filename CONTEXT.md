# Sisi Personal Website — Project Context

> Last updated: 2026-06-08 (session 29)
> Stack: Astro 6 + Tailwind CSS 4 (static output)
> Repo: `Bysisi-Z/basis-z.github.io` (local: `~/Desktop/basis-z.github.io`)
> Live: [basis-z-github-io.pages.dev](https://basis-z-github-io.pages.dev) · Custom domain: si-lens.me
> Deploy: Cloudflare Pages (auto-deploy on push to `main`)
> Build cmd: `npm run build` → output dir `dist`

---

## 1. Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background (warm off-white) |
| `--ink` | `#1A1A1A` | Primary text |
| `--rose` / `--pink` | `#c17d9d` | Life events, accents, active states |
| `--stone` | `#847B7B` | Career events, secondary text, muted UI |
| `--rule` | `#E2DEDB` | Borders, dividers |

### Typography

| Role | Font | Weight | Style |
|---|---|---|---|
| Display / Hero titles | Cormorant Garamond | 300 | italic |
| Article body | Cormorant Garamond | 300–400 | upright + italic |
| UI labels, body small | Inter | 200–400 | upright |
| Homepage Si logo | Great Vibes | 400 | italic |

### Spacing & Layout

- **Standard content max-width:** 960px (articles, career, writing) · 1040px (photography grid)
- **Explorer page max-width:** 1600px (1.5× standard)
- **Responsive padding:** `clamp(20px, 6vw, 80px)` sides
- **Card border-radius:** 14px
- **Divider:** `1px solid var(--rule)`

---

## 2. Site Architecture

```
src/
├── layouts/
│   └── BaseLayout.astro       # html shell, loads fonts, Nav + Footer
├── components/
│   ├── Nav.astro              # Sticky top nav, 2-row mobile
│   ├── Footer.astro           # Si sig + © year
│   ├── ArticleHero.astro      # Portrait (split) / Landscape (full-width) hero
│   ├── Comments.astro         # Cusdis embed
│   └── Watermark.astro        # Photo watermark overlay
├── pages/
│   ├── index.astro            # Homepage — 1-screen layout, drum wheel mobile
│   ├── explorer.astro         # World Explorer profile page ✅ NEW
│   ├── career/index.astro     # Journey — dual timeline
│   ├── research/index.astro   # Decoding — gateway page
│   ├── research/data.astro    # NSFG 2022–2023 explorer ✅
│   ├── research/meps.astro    # MEPS 2023 explorer ✅ NEW (session 24)
│   ├── photography/index.astro# Nature Never Judges — mixed grid
│   ├── photography/[slug].astro # Hiking guide article template
│   ├── writing/index.astro    # Wandering — post list
│   ├── now/index.astro        # Now — placeholder
│   ├── reading/index.astro    # A Collection of Rabbit Holes
│   └── cv.astro               # CV / Professional profile
└── styles/
    └── global.css             # Design tokens, shared utilities
```

---

## 3. Navigation

| Module | Route | Nav Label |
|---|---|---|
| 01 | `/now` | Now |
| 02 | `/career` | Journey |
| 03 | `/research` | Decoding |
| 04 | `/photography` | Nature Never Judges |
| 05 | `/writing` | Wandering |
| 06 | `/reading` | A Collection of Rabbit Holes |

**Note:** "Mountain Calling" was renamed to "Nature Never Judges" (session 23). "Reading List" was renamed to "A Collection of Rabbit Holes" (session 23).

---

## 4. Page-by-Page Status

### Homepage (`/`) ✅ Complete

**Desktop:** `position: fixed; inset: 0` grid — left identity panel (300px, rose) + right modules panel. Flat list of 6 modules, hover → rose title + arrow.

**Mobile (≤768px):** Fixed viewport grid `33vh / 67vh`:
- **Top 33vh** — Rose identity panel: Si (Great Vibes, smaller on mobile, ghost hidden), double rule lines, tagline "Making sense of numbers and landscapes.", 3 contact icons (vertical stack right)
- **Bottom 67vh** — Drum wheel: 3× duplicated items (18 total), center item rose-highlighted, top/bottom 20% gradient fade showing ~3 items at once, touch swipe + auto-scroll every 2.2s

**Font:** Great Vibes loaded via `@import` in page `<style>` for Si only.

### World Explorer (`/explorer`) ✅ Live

Independent profile page. Journey CTA "Know me as a World Explorer" links here (not `/photography`).

**Layout:** max-width 1600px. Hero split + bento grid.

**Hero:**
- Left (520px): `explorer-profile.jpg` — mountain hut photo, 4-edge fade mask (5%), height stretches to match text
- Right: Personal intro text — serif italic paragraphs; **Learn from Nature.** and **Nature never judges.** in rose bold; three nature lines with rose left border; ONTP in blue (#4a7fc1); "a foreign country" bold + exclamation mark

**Map module** (D3.js + TopoJSON CDN):
- Natural Earth projection, grayscale (#e4e4e4 ocean, #b8b8b8 land)
- Animated dashed rose path: Yunnan → Chengdu → Shanghai → Lucerne
- City labels 14px bold + 12px bold rose year, offsets tuned to avoid dot overlap

**Bento grid (12-col, 14px gap):**

| Module | Cols | Status |
|---|---|---|
| Music "On Repeat" | 7 | ⚠️ placeholder shimmer |
| Books "Currently Reading" | 5 | ⚠️ placeholder shimmer |
| Outdoor "In the Mountains" | 4 | ⚠️ stats TBD, links → /photography |
| Food "What I Eat" | 8 | ⚠️ placeholder shimmer |
| Cats "The Bosses at Home" | 12 | ✅ Both cats done |

**Cats:**
- 嘞嘞 (Leilei) ♂ Since 2016 — British Shorthair Silver Shaded, full story written
- 小咪渣 (Xiao Mi Zha) ♀ Since 2019 — American Shorthair tabby, full story written

**Fun fact** (bottom of page, always visible): "I once spent several years learning traditional Chinese martial arts — something I could not have predicted, and still find hard to believe."

**Mobile (≤820px):** Hero stacks vertically, photo full width with natural proportions (no crop), mask removed, border-radius 12px.

### Journey (`/career`) ✅ Complete

Dual timeline. Left = Life & Adventures (rose). Right = Career & Education (stone).

**CTAs at bottom:**
- "Know me as a World Explorer" → `/explorer`
- "Know me as a Professional" → `/cv`

Easter eggs: stork (Born), bamboo (Chengdu), Shanghai skyline, Swiss Alps + flag (Lucerne), confetti (University), vine flowers (company expansions), cat photos (First/Second cat).

### Decoding (`/research`) ✅ Live

Gateway → two columns: Industry Research + Play with the Data.

**Play with the Data projects:**
- `/research/data` — NSFG 2022–2023 Female Respondent (5,586 respondents, 1,912 variables, 21 deep-dive analysis pages)
- `/research/meps` — MEPS 2023 Full-Year Consolidated HC-251 (18,640 respondents, 1,368 variables, 25 topic sections) ✅ session 24–25
- `/research/meps-expenditure` — MEPS Expenditure by Payer deep-dive ✅ session 25
- `/nsfg-method-trends.html` — NSFG contraceptive method usage across 4 years ✅ NEW session 29

**MEPS explorer (`/research/meps`) details:**
- Section dropdown (25 sections) in left panel above search
- REPORT badges (blue) on 8 expenditure variables → links to `/research/meps-expenditure`
- Regeneration script: `_data_sources/meps2023/gen_meps_data.py` (reads h251.dta)
- **Split by toggle (session 27):** Overall / Age group / Income level in detail panel header; state persists across variable/section switches; split files fetched on demand and cached

**Age groups:** 0–17 / 18–34 / 35–49 / 50–64 / 65–74 / 75+ (variable: AGE23X)
**Income groups:** Poor/Near poor (<125% FPL) / Low (125–199%) / Middle (200–399%) / High (≥400%) (variable: POVCAT23, codes 1+2 merged)
**Split data:** `public/data/meps_{section}_split.json` (25 files, ~2.7MB total) — keyed by varname → {age: {groupKey: {label,n,dist}}, income: {...}}. Bins aligned to overall distribution for cross-group comparison. Regeneration: `_data_sources/meps2023/gen_meps_splits.py`

**NSFG method trends (`/nsfg-method-trends.html`) — session 29:**
- Contraceptive method use across the 4 years before interview (interview yr−3 to interview yr)
- METHX layout: 48 months × 4 slots = METHX1–METHX192; months 1–12 = yr−3, 13–24 = yr−2, 25–36 = yr−1, 37–48 = interview yr
- All methods sorted by interview year usage (descending); Others = grouped minor methods
- **3-way denominator toggle:**
  - Method users that year — women who used any contraceptive method (n ≈ 3,464–3,640)
  - All respondents — full 5,586 sample
  - Non-EC contraception drug — women who used pill/IUD/implant/Depo/ring/patch (no EC); n ≈ 1,776–1,877
- Blue warning banner (always visible): percentages don't sum to 100% — one woman counted once per method per year
- METHX1–METHX192 all carry REPORT badge in NSFG explorer linking to this page
- Source file: `public/nsfg-method-trends.html` (standalone, no Astro build dependency)
- **Key findings:** Pill declining 31% → 26% of method users over 4 years; IUD rising 15% → 16%; in drug market Pill = ~51%, IUD = ~33%

**MEPS Expenditure overview (`/research/meps-expenditure`) details — session 25–27:**
- **Split by toggle (session 27):** Overall / Age group / Income level — switches composition chart (Chart 1) to matrix of stacked bars, one row per subgroup
- **Chart 1 (top):** 100% horizontal stacked bar — dollar share by payer. Overall: single bar. Split: matrix (6 rows age / 4 rows income)
- **Payer glossary:** 7-item grid below chart 1, color-coded, explains each payer in plain English
- **Chart 2:** 100% stacked bar — % with $0 vs >$0 for each payer; clickable to filter chart 3
- **Chart 3:** Sorted distribution curve (empirical CDF) for selected payer, users with >$0 only
  - X axis: percentile rank 0–100%; Y axis: $ clipped at P95
  - Annotations: Q1/Median/Q3 vertical dashed lines + Mean horizontal rose line; all bold
  - Stat cards: n users, Q1, Median, Q3, Mean (rose), P95, true max
  - Default: Total selected on page load
- **Section labels:** Inter 600, 15px, rose color, rose gradient background strip (left→transparent)
- **Payers:** Total, Self/OOP, Private Ins., Medicare, Medicaid, VA/CHAMPVA, TRICARE, Other (=TOTOFD+TOTSTL+TOTWCP+TOTOSR)
- **Medicare glossary (session 28):** expanded to explain under-65 coverage — SSDI (24 months), ESRD, ALS
- **Removed:** TOTPTR23, TOTOTH23 (aggregate/derived variables — excluded from explorer and REPORT badges)
- **Additive check:** payer components sum to TOTEXP23 at person level (max diff = $4, rounding only)
- Data: `public/data/meps_exp_overview.json` (200-pt curves + stats per payer + age_groups + income_groups)

**MEPS explorer updates (session 26):**
- Long-tail count variables (OBTOTV23, RXTOT23, etc.) now split at P95: normal bins + gray "Extreme values" outlier section
- Income/wage variables use dollar bins
- `outlier: true` flag in JSON; explorer shows 3 sections: Response distribution / Extreme values / Outside universe

**Typography (session 27):** Inter weight 600 added to Google Fonts load in BaseLayout.astro

**MEPS 2023 data storage:**
- Live JSON files: `public/data/meps_*.json` (25 section files + meps_meta.json + meps_exp_overview.json + 25 split files)
- Raw source files: `_data_sources/meps2023/` (gitignored, local only) — h251.dta, h249.dta, h248a.dta + codebooks
- Regeneration scripts: `gen_meps_data.py` (explorer), `gen_meps_splits.py` (split data), computed in-session for expenditure overview
- Original AHRQ download: HC-251 (FYC), HC-249 (Conditions), HC-248A (RX) — re-downloadable from meps.ahrq.gov

### Nature Never Judges (`/photography`) ✅ Index + 1 detail page

- Main title: **"Nature never judges"** (corrected grammar, session 23)
- 6-card mixed grid (portrait = span 2, landscape = span 4)
- Only Stoos Ridge Hike has a live detail page

**Stoos Ridge Hike (`/photography/stoos-ridge-line`):**
- iPad Safari fix: hero uses `100dvh` + `grid-template-rows: 1fr` + `height: 100%` on grid items (session 23)
- Route map: negative margins removed, contained within article padding (session 23)
- Lightbox moved outside `.article` to fix iOS fixed positioning (session 23)

### CV (`/cv`) ✅ Live

Professional profile: photo + summary, 5 work entries with vine bullets, education, capabilities, action bar.

### A Collection of Rabbit Holes (`/reading`) 🟡 Intro written

- No large h1 title (removed session 23)
- Intro quote as large body text: "Looking back, my reading habits make very little sense. And I am perfectly comfortable with that." (clamp 24–38px)
- Content: placeholder "Coming soon."

### Wandering (`/writing`) ⚠️ Index only

2 placeholder posts. No detail pages.

### Now (`/now`) ⚠️ Placeholder

Content not written.

---

## 5. Key Design Rules

- **"Nature Never Judges"** always has spaces — never concatenate
- Portrait photos → split hero (42% photo | 58% text), `imagePosition: left|right`
- Landscape photos → full-width hero with text overlay
- Timeline: left = Life (rose), right = Career (stone). Year + title + tag all same color per side
- Homepage: 1-screen no-scroll desktop, drum wheel mobile, `hideNav={true}`
- Nav: 2-row on mobile ≤640px (logo row + scrollable links strip)
- `var(--rule)` (#E2DEDB) NEVER used as text color — minimum = `var(--stone)`
- `strong.hl` (rose inline highlight) in `global.css` for hiking articles (bypasses Astro scoping)
- Bilingual toggle (EN/中文): `html[data-lang="zh"]` attribute, `localStorage` key `sisi-article-lang`

---

## 6. Pending Work

- [ ] **Explorer modules** — fill music, books, food, outdoor stats content
- [ ] **Nature Never Judges grid** — add real photos (5 CSS gradient placeholders remain)
- [ ] **Research detail pages** — `/research/[slug].astro`, HTML content at `~/OGN_financial_analysis.html` and `~/SunPharma_OGN_acquisition.html`
- [ ] **Writing detail pages** — `/writing/[slug].astro`
- [ ] **Journey detail pages** — timeline cards link to `#`
- [ ] **MEPS deep-dive analysis pages** — expenditure overview ✅ done; next: insurance coverage (INSCOV23), access barriers (DLAYCA42), etc.
- [x] **NSFG method trends page** — `/nsfg-method-trends.html` ✅ done session 29; METHX1–192 all badged
- [ ] **Now page** — content not written
- [ ] **A Collection of Rabbit Holes** — content not written

---

## 7. Development Workflow

```bash
cd ~/Desktop/basis-z.github.io
npm run dev          # http://localhost:4321
npm run build        # verify before push
git add -A && git commit -m "..." && git push origin main
```
