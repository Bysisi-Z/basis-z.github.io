# Sisi Personal Website — Project Context (主站)

> Last updated: 2026-07-13 (session 84)
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
│   ├── Nav.astro                  # Sticky top nav, 2-row mobile ≤640px
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
│   ├── research/meps.astro        # MEPS explorer ✅
│   ├── research/meps-expenditure.astro # MEPS expenditure by payer ✅
│   ├── research/meps-drugs.astro  # Drug Payer & Channel Explorer ✅ (s84)
│   ├── photography/index.astro    # Nature Never Judges — mixed grid ✅
│   ├── photography/[slug].astro   # Hiking guide article template ✅
│   ├── writing/index.astro        # Wandering — post list (Codex) ✅
│   ├── moments/index.astro        # Moments ✅
│   ├── reading/index.astro        # A Collection of Rabbit Holes 🟡
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
| 06 | `/reading` | A Collection of Rabbit Holes | public |

Protected routes also: `/explorer` (🔒), `/cv` (🔒).

---

## 4. Page Status

### Homepage (`/`) ✅
Three-column desktop (photo | glass | strip), day/night by clock, `?preview=day/night` override. Full details → `CONTEXT_HOMEPAGE.md`.

### World Explorer (`/explorer`) ✅ — 🔒 passcode
Hero split + bento grid. Music module "A Life in Sound" live (narrative + 4 instrument PNGs + pipa photos, s73). Cats module live. Books / Food / Outdoor Stats still shimmer.

### Journey (`/career`) ✅ — 🔒 passcode
Dual timeline: left = Life & Adventures (rose), right = Career & Education (stone). CTAs in column headers → `/explorer` and `/cv`. WeChat QR button in header. Timeline cards link to `#` (detail pages not built). Easter eggs: stork, bamboo, skyline, Alps, confetti, vines, cat photos.

### Decoding (`/research`) ✅
Two-column gateway: Industry Analysis (left) → `/research/industry`; Play with the Data (right) → explorers, now 4 cards incl. **Drug Payer & Channel Explorer** (`/research/meps-drugs`, s84) — search/multi-select across 532 HC-248A drugs, payer + pharmacy channel + dosage-form split, therapeutic class filter (bilingual). Full NSFG + MEPS + OGN details → `CONTEXT_RESEARCH.md`.

### Nature Never Judges (`/photography`) ✅
6-card mixed grid (`grid-auto-flow: dense`). 3 live articles: Stoos Ridge Hike · Oeschinensee Panorama Trail · Lucerne city guide. "VIEW ALL TRAILS ON THE MAP →" → `/trails`.

### Trails (`/trails`) ✅
Leaflet.js + OSM, centered Switzerland. 3 star markers: Stoos / Oeschinensee / Lucerne (with hover label + click popup photo). No page title (removed s57). Back link → `/explorer`.

### Wandering (`/writing`) ✅ — maintained by Codex
Index + 1 essay (`/writing/put-on-the-tie`). Details → `CODEX_WRITING.md`.

### Moments (`/moments`) ✅
3-column flex (NOT CSS columns — Safari bug). 16 cards live. Click-to-focus interaction. Cards: ferris wheel · pollen · pipa · chinese garden · library · rowing · geese · glass deck · lucerne dusk · plane home · palais des nations · dunhuang · grandma temple · saxer sunset · lunar eclipse · eras tour.

### A Collection of Rabbit Holes (`/reading`) 🟡
Under-construction illustration + speech bubble easter eggs (20 clicks, escalating messages, click 100 = WeChat QR). Content not written.

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
- Nav: 2-row on mobile ≤640px (logo row + scrollable links strip)
- `var(--rule)` NEVER used as text color — minimum = `var(--stone)`
- `strong.hl` (rose inline highlight) in `global.css` for hiking articles
- Bilingual toggle: `html[data-lang="zh"]` attribute, `localStorage` key `sisi-article-lang`
- Writing essays: separate localStorage key `sisi-writing-lang`, default `zh`
- Moments cards: no em dashes (—) — use periods instead
- `explorer.astro` uses `<script is:inline>` — never TypeScript syntax inside it

---

## 6. Pending Work

### High priority
- [ ] **Explorer** — Books, Food, Outdoor Stats modules (shimmer → real content)
- [ ] **Industry Analysis** — Series 02 content TBD; OGN Sun Pharma draft at `~/SunPharma_OGN_acquisition.html`
- [ ] **MEPS deep-dive pages** — INSCOV23 (insurance), DLAYCA42 (delayed care), TOTSLF23 (OOP) — stubs in `meps-reports.html`

### Medium priority
- [ ] **Writing** — more essays (Codex); `[slug].astro` shared template decision pending
- [ ] **Journey detail pages** — timeline cards link to `#`
- [ ] **Moments** — add new cards as they happen

### Low priority
- [ ] **A Collection of Rabbit Holes** — content not written
- [ ] **Cleanup** — delete experiment files in `public/` (color-preview, font-preview, compare-*, opt-*, preview-v*); see `HANDOFF_CLAUDE.md` §Content Architecture

---

## 7. Infrastructure

- **Auth:** Cloudflare Pages Functions (`functions/_middleware.js`). Cookie `jauthv2`, KV binding `JOURNEY_AUTH` (namespace `253d0a90d7084d3e8794f636b02f7719`). Protects `/career`, `/explorer`, `/cv`.
- **Passcode management:** `node scripts/add-password.js <code> <days>` · `node scripts/lockdown.js` (emergency wipe). Env vars in `~/.zshrc`: `CLOUDFLARE_API_TOKEN`, `CF_ACCOUNT_ID`, `KV_NAMESPACE_ID`.
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
