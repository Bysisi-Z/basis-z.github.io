# Sisi Personal Website — Project Context (主站)

> Last updated: 2026-09-24 (session 87)
> Stack: Astro 6 + Tailwind CSS 4 (static output)
> Repo: `Bysisi-Z/basis-z.github.io` (local: `~/Desktop/basis-z.github.io`)
> Live: [si-lens.me](https://si-lens.me) · Preview: basis-z-github-io.pages.dev
> Deploy: Cloudflare Pages (auto-deploy on push to `main`) — GitHub Pages disabled s83
> Build cmd: `npm run build` → output dir `dist`
>
> **Sister site (副站):** `2SIMBO.com` — industry analysis · Repo: `Bysisi-Z/2simbo-nsfg` · Local: `~/Desktop/2simbo-nsfg` · Context: `~/Desktop/2simbo-nsfg/CONTEXT.md`

## Quick Read Order

| File | When to read |
|---|---|
| `CONTEXT.md` (this file) | Every session — architecture, rules, pending |
| `CONTEXT_HOMEPAGE.md` | Working on `/` or `#homeMobile` |
| `CONTEXT_RESEARCH.md` | Working on `/research`, NSFG, MEPS, or OGN analysis |
| `CONTEXT_CHINA_PHARMA_GLOBAL.md` | Continuing the China pharma "出海" Industry Analysis piece (framework discussion stage, not yet written) |
| `CODEX_WRITING.md` | Taking over Wandering from Codex |
| `HANDOFF_CLAUDE.md` | Security questions, deploy config, open decisions |

---

## 1. Design System

### Colors — Rose Pink scheme (all inner pages)

**Homepage** keeps its own dual palette (night = purple, day = sage green — inline in `index.astro`, unaffected by global tokens). → See `CONTEXT_HOMEPAGE.md`.

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background (warm white) |
| `--ink` | `#1A1A1A` | Primary text |
| `--rose` / `--accent` | `#A97EC2` | Main accent (warm pink-purple H≈288°) |
| `--rose-light` | `#e8c4d4` | Light tint for cards / highlights |
| `--stone` | `#847B7B` | Secondary text, metadata |
| `--rule` | `#E2DEDB` | Borders, dividers — **never as text color** |

**Color history:** Sessions 45–55 used purple `#A97EC2` / bg `#F6F3FC` for inner pages. Session 56 reverted to rose pink. Multi-module color scheme tried and abandoned same session.

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Hero titles | Cormorant Garamond | 300 italic |
| Article body | Cormorant Garamond | 300–400 |
| UI labels, body small | Inter | 200–400 (600 for section labels) |
| Homepage Si logo | Great Vibes | 400 italic |
| Writing essays (Chinese) | Ma Shan Zheng | 400 |

### Spacing & Layout

- Standard content max-width: 960px · Photography: 1040px · Explorers: 1600px
- Responsive padding: `clamp(20px, 6vw, 80px)`
- Card border-radius: 14px · Divider: `1px solid var(--rule)`

---

## 2. Site Architecture

```
src/
├── layouts/BaseLayout.astro       # html shell, Nav + Footer; props: hideNav, hideFooter
├── components/
│   ├── Nav.astro                  # Sticky top nav, 2-row mobile ≤1024px (s85, was ≤640px)
│   ├── Footer.astro               # Si sig + © year; hideFooter prop added s57
│   ├── ArticleHero.astro          # Portrait (split 42/58) / Landscape (full-width) hero
│   ├── Comments.astro             # Cusdis embed
│   └── Watermark.astro            # Photo watermark overlay
├── pages/
│   ├── index.astro                # Homepage — desktop day/night + mobile lock screen
│   ├── explorer.astro             # World Explorer profile ✅
│   ├── trails.astro               # Trails — Leaflet map ✅
│   ├── career/index.astro         # Journey — dual timeline ✅
│   ├── research/index.astro       # Decoding — two-column gateway ✅
│   ├── research/industry.astro    # Industry Analysis series index ✅
│   ├── research/data.astro        # NSFG explorer ✅
│   ├── research/meps-overview.astro # MEPS Survey Overview — Panel/Round explainer ✅ (s84)
│   ├── research/meps.astro        # MEPS explorer ✅
│   ├── research/meps-expenditure.astro # MEPS expenditure by payer ✅
│   ├── research/meps-drugs.astro  # Drug Payer & Channel Explorer ✅ (s84)
│   ├── photography/index.astro    # Nature Never Judges — mixed grid ✅
│   ├── photography/[slug].astro   # Hiking guide article template ✅
│   ├── writing/index.astro        # Wandering — post list (Codex) ✅
│   ├── moments/index.astro        # Moments ✅
│   ├── reading/index.astro        # S² Capital — virtual investment firm 🟡 (s87)
│   └── cv.astro                   # CV ✅
└── styles/global.css              # Design tokens, shared utilities

functions/_middleware.js           # Cloudflare Pages auth (cookie jauthv2 + KV)
public/                            # Static assets + standalone HTML analysis pages
```

---

## 3. Navigation

| # | Route | Nav Label | Auth |
|---|---|---|---|
| 01 | `/career` | Journey | 🔒 passcode |
| 02 | `/research` | Decoding | public |
| 03 | `/photography` | Nature Never Judges | public |
| 04 | `/moments` | Moments | public |
| 05 | `/writing` | Wandering | public |
| 06 | `/reading` | S² Capital | public |

Protected routes also: `/explorer` (🔒), `/cv` (🔒).

---

## 4. Page Status

### Homepage (`/`) ✅
Three-column desktop (photo | glass | strip), day/night by clock, `?preview=day/night` override. Full details → `CONTEXT_HOMEPAGE.md`.

### World Explorer (`/explorer`) ✅ — 🔒 passcode
Hero split (photo | intro text) + bento grid. **s86 rework** (all in `src/pages/explorer.astro`):
- **Removed:** "Geographic Migration" D3 world map (and its CDN d3/topojson/world-atlas loads + dead `.city-trail` CSS), "On the Shelf" books module, bottom "fun fact" (martial arts) line.
- **Intro copy rewritten by user** (s86): Yunnan → "Nature is my best friend." → **Nature never judges.** + trio (respects you / calls for the bravest heart and brutal honesty / shares breathtaking beauty) → "self-honesty over sugarcoating" → blue **ONTP** → "I gain energy outdoors…" → curiosity → "This website is simply a collection of…". Copy keeps the author's non-native voice deliberately — only fix clear errors, don't polish.
- **Bento order now:** A Life in Sound (full width) → "Come hiking with me" CTA (moved *inside* `.bento`, `grid-column: 1 / -1`) → The Bosses at Home (cats).
- **A Life in Sound:** grid text (5fr) | pipa photos (6fr), vertically centered; instrument strip full width below, items centered. `.pipa-photos` grid columns `400fr 450fr` = the two photos' aspect ratios so they render at equal height. Pipa photos are only 600px tall natively — can't be enlarged further without blur. Text 17–20px, weight 400, no bold/colored quote.
- **Cats:** alternating rows — Leilei photo|text, Xiao Mi Zha text|photo (`.cat-card--reverse`), photo 2fr : text 3fr, 4:3 crop; story text 17–20px.
- **Responsive:** 821–1180px hero uses 2fr/3fr columns (fixed 520px photo squeezed text to ~330px on iPad landscape); ≤820 stacked hero photo capped at 560px tall; ≤1100 music stacks (photos max 560px, centered); ≤900 all bento cards full width; ≤680 cats stack photo-on-top and hike CTA image uses `object-fit: cover` to fill its 340px box. Verified 375–1440px, no horizontal overflow.
- **Dev gotcha:** Astro dev server sometimes serves stale scoped CSS after edits to this file — restart `npm run dev` if a new rule doesn't apply.

### Journey (`/career`) ✅ — 🔒 passcode
Dual timeline: left = Life & Adventures (rose), right = Career & Education (stone). CTAs in column headers → `/explorer` and `/cv`. WeChat QR button in header. Timeline cards link to `#` (detail pages not built). Easter eggs: stork, bamboo, skyline, Alps, confetti, vines, cat photos.

### Decoding (`/research`) ✅
Two-column gateway: Industry Analysis (left) → `/research/industry`; Play with the Data (right) → 2 raw-data explorer cards only (NSFG, MEPS — the MEPS card now points to `/research/meps-overview`, not straight to the explorer). Deep-dive report pages — incl. new **Drug Payer & Channel Explorer** (`/research/meps-drugs`, s84: search/multi-select across 532 HC-248A drugs, payer + pharmacy channel + dosage-form split, bilingual therapeutic class filter) — live one level down via each explorer's "See all individual reports →" button, not as gateway cards.

**New this session (s84): `/research/meps-overview`** — bilingual (EN/ZH) Panel/Round design explainer, inserted
between Decoding and the MEPS explorer (explorer's back-crumb now points here). Covers what MEPS is, the two-panel
overlapping design (with a timeline diagram), data collection method, and AHRQ's exact household→RU→person sample
funnel (Table 19) — all cited to AHRQ's own `h251doc.pdf`. Also added a raw/recode/computed classification +
filter to the MEPS explorer itself, sourced from AHRQ's official Variable-Source Crosswalk. Full details →
`CONTEXT_RESEARCH.md`.

### Nature Never Judges (`/photography`) ✅
6-card mixed grid (`grid-auto-flow: dense`). 3 live articles: Stoos Ridge Hike · Oeschinensee Panorama Trail · Lucerne city guide. "VIEW ALL TRAILS ON THE MAP →" → `/trails`.

### Trails (`/trails`) ✅
Leaflet.js + OSM, centered Switzerland. 3 star markers: Stoos / Oeschinensee / Lucerne (with hover label + click popup photo). No page title (removed s57). Back link → `/explorer`.

### Wandering (`/writing`) ✅ — maintained by Codex
Index + 1 essay (`/writing/put-on-the-tie`). Details → `CODEX_WRITING.md`.

### Moments (`/moments`) ✅
3-column flex (NOT CSS columns — Safari bug). 16 cards live. Click-to-focus interaction. Cards: ferris wheel · pollen · pipa · chinese garden · library · rowing · geese · glass deck · lucerne dusk · plane home · palais des nations · dunhuang · grandma temple · saxer sunset · lunar eclipse · eras tour.

### S² Capital (`/reading`) 🟡 — s87, replaces "A Collection of Rabbit Holes"
A **virtual investment firm**: $100M simulated capital, real public-market prices, every decision logged. Route still `/reading` (rename to `/capital` undecided). Nav label / homepage card 06 = "S² Capital" · "Virtual portfolio & research notes".

> ⚠️ **DEMO DATA IS LIVE.** `src/data/s2-capital.json` currently holds a fictional backdated fund (inception 2025-09-24, all-in MRK at that day's low $79.33 × 1,260,557 sh) plus a placeholder research article, created only to review the layout. The JSON has a `"demo"` key saying so. **Reset before real launch:** set `inception` to the real start date, `cash` = 100000000, empty `positions` / `research` / `navHistory`, journal = one "Founded" row.

- **Art direction (user-set, don't redesign):** dark page (`#111113`), warm off-white `#F2EFEA`, Swiss red `#E1181E` used sparingly. Cormorant only for big statements/numbers (`lining-nums` — default old-style figures make "100" read "IOO"); Inter for everything else. No cards, no boxed stats.
- **Logo:** SVG red square, white Source Serif 4 "S" + Inter "2". Lockup "CAPITAL" to the right, **bottom-aligned** with the square, cap height ≈ 1/5 of square, 11px gap.
- **Page order:** brand bar (logo | Portfolio→#fund · Research→#research · About→#about) → headline "A virtual firm built as a $100 million experiment in public market investing." (full width, `text-wrap: balance`) → photo 16:9 (7fr) | short white vertical rule | intro copy ($100 million highlighted red) + index line "Portfolio • Investment Journal • Research • Performance" (600 weight, red 4px dots), copy bottom-aligned to photo → fund row "● LIVE · CURRENT PORTFOLIO VALUE … timestamp" + **split-flap board** value → metrics (initial capital / since inception / positions / day) → ■ Investment History ledger → ■ Research article list → colophon (logo, "Lucerne · Est. 2026", disclaimer right).
- **Section headings:** red 8px square + label (`.marker--square`); numbered markers no longer used. Methodology section removed; disclaimer lives in the colophon.
- **Split-flap board:** only the big value. Each char a tile (upper/lower halves + hinge line); separators `, .` sit between tiles. Updates flip left→right, 90ms stagger, 2 random interim digits. Tile markup must match between Astro (`board()`) and script (`tileHTML`).
- **Live prices (B):** `functions/api/quotes.js` → Yahoo chart API server-side, 5-min edge cache, max 20 symbols. Page re-prices every 5 min (skips hidden tabs), falls back to last close. `npm run dev` has no Functions, so dev **simulates** ±1% moves to demo the board. Yahoo may block Cloudflare IPs — if so, switch to Finnhub (key in Cloudflare env).
- **Daily close (A):** `scripts/update-s2-prices.mjs` updates `lastPrice`/`lastPriceDate` and upserts `navHistory`. `.github/workflows/s2-prices.yml` runs it weekdays 21:30 UTC and pushes the JSON (→ Cloudflare redeploy). Can also run via "Run workflow".
- **Data file shape:** `inception`, `initialCapital`, `cash`, `positions[{ticker,name,shares,entryPrice,entryDate,lastPrice,lastPriceDate}]`, `journal[{date,type,company,action,figure}]` (same-day rows: later in file = shown higher), `research[{date,type,title,company,status,href}]`, `navHistory[{date,value}]`.
- **Width:** everything in `min(86vw, 1600px)`.
- **Site chrome:** this page alone turns global nav + footer dark via `:global(body:has(.s2) …)` rules.
- **Photo:** `public/images/s2/s2-headquarters.jpg` — user-supplied AI-generated wall sign, ~1270px wide (soft on retina).
- **User preferences:** rejects generic corporate/PowerPoint looks; when asked for a small change, change only that ("别的不要动"). Headline copy is the user's own.
- **Pending:** research article detail page template; holdings table; real data + reset; `/capital` route decision; check on a real phone.

### CV (`/cv`) ✅ — 🔒 passcode
Photo + summary, 5 work entries with vine bullets, education, capabilities, action bar. Print layout: A4, 2-page.

### Footer ✅
"Si" italic left + copyright right. Hidden mobile ≤600px. `hideFooter={true}` prop for homepage.

---

## 5. Key Design Rules

- **"Nature Never Judges"** always has spaces — never concatenate
- Portrait photos → split hero (42% photo | 58% text), `imagePosition: left|right`
- Landscape photos → full-width hero with text overlay
- Timeline: left = Life (`var(--rose)`), right = Career (`var(--stone)`)
- Homepage: 1-screen no-scroll desktop, `hideNav={true}`, full-bleed photo bg
- Nav: 2-row on mobile/tablet ≤1024px (logo row + scrollable links strip). Raised from ≤640px in s85 — the desktop single-row nav needs ~980px to fit all 6 labels without wrapping, so 640–980px (notably iPad portrait 768px and landscape 1024px) was overflowing the whole page horizontally
- CSS Grid bento layouts: give `.bento-card`-style grid items `min-width: 0` — grid items don't shrink below their content's intrinsic width by default, so fixed-size children (e.g. a photo with `height:460px; width:auto`) silently blow out the card and cause page-wide horizontal scroll on narrow viewports. Found via s85 mobile audit on `/explorer`
- `var(--rule)` NEVER used as text color — minimum = `var(--stone)`
- `strong.hl` (rose inline highlight) in `global.css` for hiking articles
- Bilingual toggle: `html[data-lang="zh"]` attribute, `localStorage` key `sisi-article-lang`
- Writing essays: separate localStorage key `sisi-writing-lang`, default `zh`
- Moments cards: no em dashes (—) — use periods instead
- `explorer.astro` uses `<script is:inline>` — never TypeScript syntax inside it

---

## 6. Pending Work

### High priority
- [ ] **Industry Analysis** — new piece: China pharma globalization ("出海") — framework discussion in progress, not yet drafted, see `CONTEXT_CHINA_PHARMA_GLOBAL.md`
- [ ] **Industry Analysis** — Series 02 content TBD; OGN Sun Pharma draft at `~/SunPharma_OGN_acquisition.html`
- [ ] **MEPS deep-dive pages** — INSCOV23 (insurance), DLAYCA42 (delayed care), TOTSLF23 (OOP) — stubs in `meps-reports.html`

### Medium priority
- [ ] **Writing** — more essays (Codex); `[slug].astro` shared template decision pending
- [ ] **Journey detail pages** — timeline cards link to `#`
- [ ] **Moments** — add new cards as they happen

### Low priority
- [ ] **S² Capital** — reset demo data before real launch; research article detail template; holdings table; decide `/reading` → `/capital`; real-phone check; verify `/api/quotes` works on Cloudflare (Yahoo may block)
- [ ] **Cleanup** — delete experiment files in `public/` (color-preview, font-preview, compare-*, opt-*, preview-v*); see `HANDOFF_CLAUDE.md` §Content Architecture. Also 4 stale orphan JSON files found s84: `public/data/meps_utilization.json`, `meps_insurance.json`, `meps_health_status.json`, `meps_expenditures.json` (June 7, pre-25-section format) — not referenced anywhere in `src/` or `public/*.html`.

---

## 7. Infrastructure

- **Auth:** Cloudflare Pages Functions (`functions/_middleware.js`). Cookie `jauthv2`, KV binding `JOURNEY_AUTH` (namespace `253d0a90d7084d3e8794f636b02f7719`). Protects `/career`, `/explorer`, `/cv`.
- **Passcode management:** `node scripts/add-password.js <code> <days>` · `node scripts/lockdown.js` (emergency wipe). Script is whole-days only — for an exact expiry date use the KV API directly (see `HANDOFF_CLAUDE.md`). s86: codes rotated, one active until 2026-12-31. Env vars in `~/.zshrc`: `CLOUDFLARE_API_TOKEN`, `CF_ACCOUNT_ID`, `KV_NAMESPACE_ID`.
- **⚠️ Debug endpoint:** `?dbg=1` on protected routes dumps cookie state — remove from middleware before next public share.
- **GitHub Actions:** deleted s83 (was deploying to GitHub Pages — security bypass). GitHub Pages now disabled.
- **Contact email:** `sisi.zhang.ch@gmail.com` (updated everywhere s72; was giselle.z1989@gmail.com).
- **Search:** Pagefind (`astro-pagefind`) — full-site index built at `npm run build`.

---

## 8. Development Workflow

```bash
cd ~/Desktop/basis-z.github.io
npm run dev          # http://localhost:4321
npm run build        # verify before push
git add -A && git commit -m "..." && git push origin main
```

**Local dev note:** middleware does not run in `npm run dev`. Auth changes must be tested via Cloudflare preview deployment.
