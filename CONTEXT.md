# Sisi Personal Website — Project Context

> Last updated: 2026-06-03 (session 7)  
> Stack: Astro 6 + Tailwind CSS 4 (static output)  
> Repo: `Bysisi-Z/basis-z.github.io` (local: `~/Desktop/basis-z.github.io`)  
> Live: [basis-z-github-io.pages.dev](https://basis-z-github-io.pages.dev)  
> Deploy: Cloudflare Pages (auto-deploy on push to `main`)  
> Build cmd: `npm run build` → output dir `dist`

---

## 1. Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background (warm off-white) |
| `--ink` | `#1A1A1A` | Primary text |
| `--rose` / `--pink` | `#c17d9d` | Life events, Life timeline, accents |
| `--stone` | `#847B7B` | Career events, secondary text, muted UI |
| `--rule` | `#E2DEDB` | Borders, dividers, very light accents |

> `global.css` `--rose` has been fixed to `#c17d9d`. Individual pages also define `--pink: #c17d9d` locally as a fallback — both resolve to the same value.

### Typography

| Role | Font | Weight | Style |
|---|---|---|---|
| Display / Hero titles | Cormorant Garamond | 300 | italic |
| Article body | Cormorant Garamond | 300–400 | upright + italic |
| UI labels, body small | Inter | 200–400 | upright |
| Year labels (timeline) | Inter | 600 | upright uppercase |

**Font loading:** Google Fonts via `<link>` in `BaseLayout.astro`.  
Both families loaded: `Cormorant Garamond` (300, 400, 500; italic variants) + `Inter` (200, 300, 400).

### Spacing & Layout

- **Content max-width:** 960px (articles, career, writing) · 1040px (photography grid)
- **Responsive padding:** `clamp(20px, 6vw, 80px)` sides
- **Divider line:** `1px solid var(--rule)` between sections
- **Card border-radius:** 14px (all cards)
- **Gap:** 10–16px in grids

### Breakpoints

| Name | Width | Behaviour |
|---|---|---|
| Desktop | >768px | Full layout |
| Tablet | 560–768px | Photography: 4-col, cards reflow |
| Mobile | 391–560px | Single-column, horizontal card list |
| Small mobile | ≤390px | Reduced font, hide non-essential text |

### Animation Patterns

- **Page entrance:** `rise` keyframe — opacity 0→1 + translateY(10px→0), 0.9s ease, staggered delays
- **Scroll reveal:** `IntersectionObserver` threshold 0.08, 70–90ms stagger per item, desktop only
- **Hover — cards:** border-color → `--rose/--pink`, box-shadow, arrow translateX(4px)
- **Hover — photo cards:** `scale(1.05)` on inner image via `overflow: hidden` on card
- **Hover — split hero:** `scale(1.03)` on portrait photo

---

## 2. Site Architecture

```
src/
├── layouts/
│   └── BaseLayout.astro       # html shell, loads fonts, Nav + Footer
├── components/
│   ├── Nav.astro              # Sticky top nav, 2-row mobile
│   ├── Footer.astro           # Sisi sig + © year
│   └── ArticleHero.astro      # Portrait (split) / Landscape (full-width) hero
├── pages/
│   ├── index.astro            # Homepage — 1-screen layout, no scroll desktop
│   ├── about.astro            # 301 → /career
│   ├── blog/index.astro       # 301 → /writing
│   ├── career/index.astro     # Journey — dual timeline
│   ├── research/index.astro   # Decoding — article list
│   ├── photography/index.astro# Mountain Calling — mixed-orientation card grid
│   └── writing/index.astro    # Wandering — date-sidebar post list
└── styles/
    └── global.css             # Design tokens, shared utilities
```

---

## 3. Navigation

**Module names** (must always include spaces, never concatenate):

| Module | Route | Nav Label |
|---|---|---|
| 01 | `/now` | Now |
| 02 | `/career` | Journey |
| 03 | `/research` | Decoding |
| 04 | `/photography` | Mountain Calling |
| 05 | `/writing` | Wandering |
| 06 | `/reading` | Reading List |

**Nav component behaviour:**
- Desktop: single row — `Sisi · [Current Page]` left + all 4 links right
- Mobile ≤640px: two rows — logo row (44px) + horizontal scrollable links strip (with `|` separators)
- Active link: `--rose/--pink` color
- `BaseLayout` prop `hideNav={true}` hides nav (used on homepage)

---

## 4. Page-by-Page Status

### Homepage (`/`) ✅ Complete

- Full-screen 1-page layout, no scroll on desktop
- Hero: CSS gradient mountain landscape, large italic "Sisi" with pink first S, rope + DSLR camera SVG hanging from S, tagline floating on image bottom-right
- 6 module cards in 3×2 grid, rounded corners, rose hover
- Contact bar: LinkedIn (blue brand icon) · Red Note (official red SVG) · Email me — all real links
- Mobile: single-column horizontal card list, natural scroll

### Journey (`/career`) ✅ Complete

- Vertical dual timeline, center line
- **Left** = Life & Adventures (color: `#c17d9d`) · **Right** = Career & Education (color: `#847B7B`)
- Year, title, tag all unified per side color; year bold (600)
- Rows merged **by year** (not index) so same-year events align side by side
- Sort: **descending** — 2022 at top, Born (no year) pinned at bottom
- Mobile: single column, left-side line, each card gets `::before` dot

**Left events (Life & Adventures):**
| Year | Event | Notes |
|------|-------|-------|
| 2022 | Move to Lucerne, Switzerland | |
| 2019 | Second Cat ♀ | pink SVG cat head icon |
| 2017 | Move to Shanghai | |
| 2016 | First Cat ♂ | pink SVG cat head icon |
| 2007 | Move to Chengdu | click → bamboo silhouette animation from left |
| — | Born in Yunnan, China | no year shown; click → stork-with-baby fly-in |

**Right events (Career & Education):**
| Year | Event |
|------|-------|
| 2022 | Organon, Global |
| 2018 | MSD, China |
| 2014 | Sanofi, China |
| 2013 | Cisco, China |
| 2011 | LG Electronics, China |
| 2007 | Southwest University of Finance and Economics — click → full-screen confetti |

**Easter eggs (all work desktop + mobile):**
- `data-born` → stork-with-baby SVG flies in from right column (3.2s)
- `data-chengdu` → **bamboo silhouette** — 3 stalks at different angles (-4°/+5°/+3°), leaves vary per stalk (upward/drooping/flat), two-tone pink for depth; slides in from left of `.tl-left` (3.4s); desktop 100px / mobile 85px
- `data-uni` → full-screen canvas confetti, 5 staggered bursts, theme pink palette
- `data-shanghai` → Pudong skyline (Pearl Tower / Jin Mao / SWFC / Shanghai Tower) slides in from right column (3s); depth layer in #d4a0b8
- `data-lucerne` → Swiss Alps panorama (3-layer depth, Matterhorn peak, snow cap) + Swiss flag (authentic red #D52B1E + white cross) on summit, slides in from left of `.tl-left` (3.2s)

**Positioning patterns:**
- Empty right column (Born, Shanghai 2017) → wrapper inside `.tl-right`, slides from right via `translateX`
- Occupied both columns (Chengdu 2007, Lucerne 2022) → wrapper inside `.tl-left`, `position:absolute; right:calc(100% - 8px)`, slides from left
- Mobile: all wrappers become `position:absolute; right:-8px; top:-8px` relative to their column div

**Cat head icons:** inline SVG `class="cat-icon"` with `fill="currentColor"`, inherits `--pink`

- Detail pages: **not yet built**

### Decoding (`/research`) ✅ Redesigned — two-module gateway

- **Gateway page** (`/research/index.astro`): two large entry cards
  - Card 01 → `/research/industry` (Industry Research Articles)
  - Card 02 → `/research/data` (Play with the Data)
- **`/research/industry`**: article list — 2 entries (OGN analysis + Sun Pharma/OGN acquisition)
  - Detail pages still not built; HTML content at `/Users/giselle/OGN_financial_analysis.html` and `SunPharma_OGN_acquisition.html`
- **`/research/data`**: ✅ Live interactive NSFG data explorer (see below)

### Play with the Data — NSFG Explorer (`/research/data`) ✅ Live

**Data sources** (local only, not in repo):
- `/Users/giselle/Downloads/NSFG-2022-2023-FemRespPUFData/NSFG_2022_2023_FemRespPUFData.csv` — raw survey data (5,586 respondents, 1,912 variables)
- `/Users/giselle/Downloads/2022-2023-NSFG-FemRespPUFCodebook.pdf` — variable codebook (565 pages)
- `/Users/giselle/Downloads/2022-2023-NSFG-FileIndex-FemRespPUF.pdf` — file index with section classification (29 pages)

**Parsing scripts** (run from `/Users/giselle/Downloads/NSFG-2022-2023-FemRespPUFData/`):
- `parse_codebook.py` → `nsfg_codebook.json` (1,897 variables: label, universe, code labels)
- `parse_index.py` → `nsfg_index.json` (1,912 variables with section + type + DRR merged)
- `generate_data.py` → `public/data/nsfg_data.json` (legacy aggregation, superseded)
- `compute_distributions.py` → `public/data/nsfg_meta.json` + `public/data/nsfg_section_*.json` (13 files, main data source for explorer)

**Explorer UI** (`/research/data`):
- Module title: "US NSFG Survey — Female Respondent" + 2022–2023 badge
- Section tabs (12 sections, scrollable with ‹/› arrows): Screener / Demographics / Pregnancy & Birth / Relationships / Sterilization & Fecundity / Contraception / Family Planning / Birth Intentions / Reproductive Health / CASI-CAWI / Recodes / Sample Design
- Left panel (300px): variable list in original file order, searchable; label primary (black) / varname secondary (rose) / type badge
- Right panel: variable name + type badge + universe + stats + distribution bars per code value (label primary, code value secondary in rose)
- Both panels independently scrollable with visible 8px scrollbars
- Data loaded on-demand per section (nsfg_section_{key}.json)
- Explorer width: 1400px max (1.5× site content width)

**Design rules enforced this session:**
- `var(--rule)` (#E2DEDB) is NEVER used as text color — minimum readable text = `var(--stone)` (#847B7B)

### Mountain Calling (`/photography`) ✅ Index complete — detail pages in progress

- Main title: **"Nature never judge"**
- Mixed-orientation grid (6-col):
  - Portrait entries → `span 2`, `aspect-ratio: 3/4`
  - Landscape entries → `span 4`, `aspect-ratio: 16/9`
- 6 entries (all CSS gradient placeholders, real photos TBD)
- **`ArticleHero` component** handles per-article cover:
  - Portrait photo → split layout (42% photo | 58% text), `imagePosition: 'left' | 'right'`
  - Landscape photo → full-width hero with bottom text overlay
  - Mobile: photo always stacks on top
- Entry 1 (Haute Route, Alps): `/photography/haute-route` live — `IMG_3355.jpeg` in `public/images/`, portrait, `imagePosition: 'left'`
- ~~Eyebrow label "03 — Mountain Calling" removed~~ ✅
- Remaining 5 entries: CSS gradient placeholders, real photos TBD

### Wandering (`/writing`) ⚠️ Index only — no detail pages

- Date-sidebar list layout (large day number as visual anchor)
- ~~Eyebrow label "04 — Writing" removed~~ ✅
- 2 placeholder posts
- Detail pages **not built**

### Now (`/now`) ⚠️ Placeholder

- Subtitle: "what I'm doing and thinking about lately"
- Content not yet written

### Reading List (`/reading`) ⚠️ Placeholder

- Subtitle: "Books, papers & ideas worth revisiting"
- Content not yet written

---

## 5. Key Design Decisions (rationale)

| Decision | Reason |
|---|---|
| Cormorant Garamond italic for all display text | Editorial minimalism, Swiss magazine feel |
| `#c17d9d` for Life/personal, `#847B7B` for Career/professional | Color as identity system — no need to read the label |
| Portrait photo → split hero (42/58) | Cropping portrait to full-width loses too much; split preserves image integrity |
| Landscape photo → full-width hero | Landscape fills frame naturally, overlay text readable |
| Timeline left = life, right = career | Visual metaphor: personal journey on one side, professional on the other |
| Homepage is 1-screen, no-scroll (desktop) | Immediate overview, navigates via cards |
| Mobile unlocks scroll | 1-screen impossible on phone given 5 cards + hero |
| Mountain Calling keeps space: "Mountain Calling" | User requirement — never "MountainCalling" |
| `hideNav` on homepage | Replaced by card-based navigation |
| Cloudflare Pages over GitHub Pages | Better accessibility in mainland China |

---

## 6. Pending Work

### Immediate next tasks

- [x] ~~Fix color token: `--rose` in `global.css`~~ ✅
- [x] ~~Fill in real career/life data~~ ✅
- [x] ~~`/photography/[slug].astro`~~ ✅ Haute Route live
- [ ] **Add real photos** to Mountain Calling grid cards (5 remaining CSS gradient placeholders)
- [ ] **Research detail pages:** `/research/[slug].astro` — content in `/Users/giselle/OGN_financial_analysis.html` and `SunPharma_OGN_acquisition.html`
- [ ] **Writing detail pages:** `/writing/[slug].astro`
- [ ] **Journey detail pages:** timeline cards currently link to `#`

### Future modules (More to Come)

- Module 05 is reserved; content TBD

---

## 7. Development Workflow

```bash
# Local dev
cd ~/Desktop/basis-z.github.io
npm run dev          # http://localhost:4321

# Build check before push
npm run build

# Deploy (auto via Cloudflare on push)
git add -A
git commit -m "..."
git push origin main
```

**Preview files** (on Desktop, local-only):
- `preview-homepage.html` — homepage design prototype
- `preview-journey.html` — Journey timeline prototype
- `preview-mountain-calling.html` — Mountain Calling grid prototype
- `preview-haute-route.html` — Article detail prototype (uses `./IMG_3355.jpeg`)
- `preview-1.html`, `preview-2.html` — font pairing tests
- `preview-orientation.html` — portrait/landscape layout options
- `IMG_3355.jpeg` — Haute Route cover photo (portrait, alpine wildflowers, Alps)
