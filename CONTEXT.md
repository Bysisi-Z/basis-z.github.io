# Sisi Personal Website — Project Context

> Last updated: 2026-06-07 (session 23)
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

Gateway → two columns: Industry Research + Play with the Data (NSFG explorer at `/research/data`).

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
- [ ] **Mountain Calling grid** — add real photos (5 CSS gradient placeholders remain)
- [ ] **Research detail pages** — `/research/[slug].astro`, HTML content at `~/OGN_financial_analysis.html` and `~/SunPharma_OGN_acquisition.html`
- [ ] **Writing detail pages** — `/writing/[slug].astro`
- [ ] **Journey detail pages** — timeline cards link to `#`
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
