# Sisi Personal Website — Project Context

> Last updated: 2026-05-29  
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
| `--rose` / `--pink` | `#c17d9d` | Life events, Life timeline, accents ⚠️ |
| `--stone` | `#847B7B` | Career events, secondary text, muted UI |
| `--rule` | `#E2DEDB` | Borders, dividers, very light accents |

> ⚠️ **Color inconsistency to fix:** `global.css` still has `--rose: #D3BABD` (old pale rose).  
> Individual pages (career, photography, ArticleHero) define `--pink: #c17d9d` locally.  
> **Action needed:** Update `global.css` `--rose` to `#c17d9d` and consolidate variable name to `--rose`.

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
| 01 | `/career` | Journey |
| 02 | `/research` | Decoding |
| 03 | `/photography` | Mountain Calling |
| 04 | `/writing` | Wandering |
| 05 | `#` | More to Come (disabled) |

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
- 5 module cards in 6-col grid (3+2 row split), rounded corners, rose hover
- Mobile: single-column horizontal card list, natural scroll

### Journey (`/career`) ✅ Complete

- Vertical dual timeline, center line
- **Left** = Life & Adventures (color: `#c17d9d`)
- **Right** = Career & Education (color: `#847B7B`)
- Year, title, tag all unified per side color; year bold (600)
- 9 left events + 9 right events (2018–2025), merged into rows by index
- Mobile: single column, left-side line, each card gets `::before` dot
- Detail pages: **not yet built** (slugs in timeline cards link to `#`)

### Decoding (`/research`) ⚠️ Index only — no detail pages

- Article list with tag chips, date, read time
- 2 entries: OGN analysis + Sun Pharma/OGN acquisition
- Detail pages `/research/ogn-annual-analysis` and `/research/sun-pharma-ogn-acquisition`: **not built**
- HTML versions of both analyses exist on Desktop (`OGN_financial_analysis.html`, `SunPharma_OGN_acquisition.html`)

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
- Entry 1 (Haute Route, Alps): preview HTML built (`preview-haute-route.html`), real photo `/Desktop/IMG_3355.jpeg` (portrait, alpine wildflowers)
- **Detail pages not yet deployed to Astro**

### Wandering (`/writing`) ⚠️ Index only — no detail pages

- Date-sidebar list layout (large day number as visual anchor)
- 2 placeholder posts
- Detail pages **not built**

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

- [ ] **Fix color token:** consolidate `--rose` in `global.css` to `#c17d9d`
- [ ] **Mountain Calling detail pages:** build `/photography/[slug].astro` dynamic route using `ArticleHero`
  - Haute Route entry has content + image ready (`IMG_3355.jpeg`, portrait, `imagePosition: 'left'`)
- [ ] **Add real photos** to Mountain Calling cards (replace CSS gradient placeholders)
- [ ] **Research detail pages:** `/research/[slug].astro` — content already in desktop HTML files
- [ ] **Writing detail pages:** `/writing/[slug].astro`
- [ ] **Journey detail pages:** each timeline event should link to a detail page
- [ ] **Fill in real career data** in `career/index.astro` (placeholder names/companies)

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
