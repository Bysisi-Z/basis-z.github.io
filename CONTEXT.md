# Sisi Personal Website — Project Context (主站)

> Last updated: 2026-10-14 (session 88)
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
| `CONTEXT_S2_CAPITAL.md` | Working on `/capital` (S² Capital): data model, trade ledger, live prices, benchmarks, design rules |
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
│   ├── photography/index.astro    # Nature — square photo wall + album filter ✅ (s88)
│   ├── photography/album/[slug].astro # Nature album page ✅ (s88)
│   ├── photography/[slug].astro   # Hiking guide article template ✅
│   ├── writing/index.astro        # Wandering — post list (Codex) ✅
│   ├── moments/index.astro        # Moments ✅
│   ├── capital/index.astro        # S² Capital — virtual investment firm 🟡 (s87)
│   ├── capital/team.astro         # S² Capital — Meet our team (placeholder)
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
| 03 | `/photography` | Nature | public |
| 04 | `/moments` | Moments | public |
| 05 | `/writing` | Wandering | public |
| 06 | `/capital` | S² Capital | public |

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

### Nature (`/photography`) ✅ photo gallery (s88, live 2026-10-16)
**Renamed (user, s88):** section/nav/homepage label is **"Nature"** (was "Nature Never Judges"); page h1 "Nature", subtitle "Nature never judges." (replaced "Trails walked, peaks reached, silences found."). Explorer's prose line "Nature never judges." is the user's own copy — leave it.
**Direction change (user, 2026-10-16):** no more travel-writing — the section becomes a photo gallery with optional short captions. Two colour themes in `src/styles/gallery.css`, switched by `"theme": "light" | "dark" | "auto"` at the top of `src/data/gallery.json` — **currently `auto`** (user, s88): same rule as the homepage, visitor's clock 06:00–18:00 → light, else dark, `?preview=day|night` overrides; done by the inline `src/components/GalleryThemeScript.astro` placed first inside `.gal` so there is no flash (pages set `.gal[data-theme]`; nav/footer/lightbox follow). **light** (current, white like jimmychin.com): `#FFF` bg, ink `#141414`, nav pill black. **dark**: `#0C0C0B` bg, ivory `#ECE8E1`. Album hero text stays light in both (it sits on the photo). Cormorant light titles, Inter caps meta.
- **Data:** `src/data/gallery.json` — per album `slug, folder, title, place, date, intro (optional), cover, guide (old article link), photos[{file, caption}]` in display order. Image sizes in `src/data/gallery-manifest.json`; both joined in `src/lib/gallery.mjs`.
- **Albums (15):** … · **Rosenlaui** (s88: 6 iPhone HEICs IMG_6685/6707/6725/6736/6741/6790 + IMG_6854.JPG from ~/Downloads (the user pasted 6854 without a path; found it by its 2025-09-06 date), all portrait; cover `rosenlaui-hike.jpg` = the explorer page's "Come hiking with me" photo (`public/images/hike-invite.jpg`, same meadow, user's choice; no EXIF date so it is listed first); place "Bernese Oberland, Switzerland"; map star 46.714, 8.183 from de.wikipedia — en.wikipedia has no coordinates) · · **Mürren & Lauterbrunnen** (s88: 8 iPhone HEICs IMG_5883…5917 from ~/Downloads, 2025-05-11 — first 4 in Mürren (~1640 m), last 4 in the Lauterbrunnen valley (~800 m) per the photos' GPS; cover IMG_5890, the only landscape; place "Bernese Oberland, Switzerland"; one map star at Lauterbrunnen 46.595, 7.907 from en.wikipedia — Mürren is too close for a second star) · **Schäfler** (s88: 13 iPhone HEICs IMG_4181…4379 from ~/Downloads, 2024-08-15/16 — evening + sunrise on the Alpstein ridge; `IMG_4348 2.HEIC` saved as IMG_4348.jpg; cover IMG_4348 (sunset over the ridge); title spelled "Schäfler" (user typed schaefler); place "Appenzell, Switzerland"; map star 47.276, 9.391 from de.wikipedia, matches the photos' own GPS). Earlier entry: Stoos Ridge · Oeschinensee · Lucerne · **Seealpsee** · **Rigi** · **Engelberg & Titlis** · **Luzerner Fasnacht** · **Matterhorn · Fluhalp** · **Caumasee** · **Gandria** · **Frick · Cherry Blossoms** · **Lake Bled** (s88, first album outside Switzerland: 6 iPhone HEICs IMG_6309/6317/6333/6353/6354/6370 (2025-07-31 – 08-01) + one older JPG from ~/Downloads renamed `bled-2019-09-29.jpg` (2019, sorts first; was the cover but too low-res for a full-screen hero — cover is now IMG_6317, lake reflection with Bled Castle and the Julian Alps); place "Bled, Slovenia"; map star 46.364, 14.095 from en.wikipedia. `/trails` now calls `map.fitBounds` over all stars on load (maxZoom 8) instead of a fixed Swiss centre, so non-Swiss stars are visible). Frick · Cherry Blossoms (s88: 9 iPhone HEICs IMG_0940/0952/0954/0956/5552/5558/5561/5563/5568 from ~/Downloads, all 2025-04-12, converted with `sips`; cover IMG_5563 (row of blossoming cherry trees over a dandelion meadow); place "Aargau, Switzerland"; trail sign in IMG_5558 reads "Fricktaler Chriesiwäg" — offered as an alternative title; map star 47.507, 8.022 from de.wikipedia — en.wikipedia has no coordinates). Gandria (s88: 11 iPhone HEICs from `~/Downloads/IMG_2032…2089.HEIC`, converted to JPG with `sips` into `_data_sources/gallery/gandria/` — sharp can't read HEIC; all portrait; cover IMG_2089 (village houses over the lake, `coverPosition: 50% 72%` to keep the water and pier); place "Ticino, Switzerland"; map star 46.006, 9.002 from de/it.wikipedia — en.wikipedia only has 46, 9; originals carry GPS, stripped in the WebP). Caumasee (s88: 16 JPGs from `/Volumes/T7/20260801相机存储卡2/DCIM/100MSDCF` — numbers 3/4/5/6/9/10/12/24/26/29/34/40/41/45/50/56 on `~/Desktop/caumasee-thumbnails`; #41/45/50/56 are the Rhine gorge (Ruinaulta) next to Flims, kept in at the user's pick; cover DSC08109 = #3; place "Flims, Switzerland"; map star 46.820, 9.296 from en.wikipedia). Matterhorn · Fluhalp (s88: 24 JPGs from `/Volumes/T7/马特洪峰Fluhalp` — numbers 10/12/14/18/20/22/24/27/31/36/39/46/47/48/54/55/58/62/65/73/77/80/83/84 on `~/Desktop/matterhorn-thumbnails`; cover DSC08211 = #48 (edelweiss + red post + Matterhorn; user picked it over #80, the lake reflection); place "Zermatt, Switzerland"; map star at Stellisee 46.013, 7.801 from de.wikipedia — Fluhalp has no wiki entry; camera clock said 2018-04 but the photos are summer, irrelevant since no dates are shown). Luzerner Fasnacht (s88: 11 JPGs from `/Volumes/T7/Photo/100MSDCF`, 2023-02-16 — numbers 79/83/85/88/92/94/98/100/102/103/104 on the 100MSDCF sheets = DSC07326…DSC07362; cover DSC07361 (two three-headed masks, my pick); place "Lucerne, Switzerland"; no extra map star — Lucerne already has one). Note: 100MSDCF camera has no GPS, so places come from the user; use the JPGs, not the ARW raws. Engelberg & Titlis (s88: 4 photos from 2024-04-27 — DSC08048/49/51/53, + `titlis-2023-06-09.jpg` (user's phone photo from ~/Downloads, taken 2023-06-09, so it sorts first), cover DSC08049, place "Obwalden, Switzerland", map star at Engelberg village 46.821, 8.409 from en.wikipedia — photos are from the valley floor, not the summit). Rigi (s88: 7 photos picked by number from the 2025-03-07 snow walk — DSC08064/65/66/70/74/77/79, cover DSC08079, place "Lucerne, Switzerland", map star at Rigi Kulm 47.057, 8.486 from en.wikipedia). Seealpsee (s88: 5 photos the user picked by number from `/Volumes/T7/Photo/Switzerland` — DSC07763/07850/07887/07890/07894, + 10 iPhone HEICs IMG_1067…1162 from ~/Downloads (same day 2023-10-13, converted with `sips`). Sorted by recorded time, so the 5 camera shots land last — the camera clock was hours off (says 18:39–22:25 for daylight shots) while the iPhone times are right; cover DSC07890, place "Appenzell, Switzerland", no trail guide; map star at 47.269, 9.400 from en.wikipedia).
- **New albums' originals go in `_data_sources/gallery/<slug>/`** (gitignored, never deployed) with `"source"` set in `gallery.json`; the three older albums still read `public/images/<folder>`.
- **Images:** `node scripts/build-gallery.mjs` (sharp) → `public/images/gallery/<slug>/<name>-{640,1280,2048}.webp`, EXIF-rotated, **all metadata stripped (no GPS)**. Re-run after adding photos; `--force` rebuilds. Originals stay in `public/images/<folder>/` (⚠️ 55 of them carry GPS and are publicly downloadable).
- **Layout (s88, user picked jimmychin.com/stills as the model — but every photo must open):** everything is **square tiles** (centre-cropped `object-fit: cover`, 3–6px gaps). **Index** `/photography`: compact title row, sticky left filter (All + one per album, with counts; album selected → place/date, "Album page →", "Trail guide →"; `?album=<slug>` keeps the filter in the URL; on phones the filter becomes a row and the wall is 2 columns) + one wall of all photos. **Album** `/photography/album/<slug>`: full-bleed cover hero + square wall + footer (trail guide, next album).
- **Phones (s88 check):** filter wraps to rows with "Trails map →" under it (was hidden on phones — user noticed no map entry); album footer also has a "Trails map →" link; album hero on ≤700px is `min(100svh − nav, 118vw)` tall so landscape covers aren't cropped to a sliver; optional `coverPosition` per album in `gallery.json` sets the hero's `object-position` (Matterhorn: `30% 50%`). Checked 375/390/430: no overflow, no errors.
- **Viewer** `src/components/GalleryLightbox.astro` (shared): opens any visible `.sq-item` from its `data-slide` JSON, shows the **full uncropped frame** (srcset up to 2048), navigates only the visible (filtered) items, ←/→/Esc, swipe, swipe-down closes, "Si" corner signature, right-click blocked. Each photo has an id `<slug>-NN` kept in the URL hash — `/photography#lucerne-03` opens that photo directly.
- **Edits made for the demo:** Stoos duplicates `stoos2b/3b/4b` left out; order = EXIF capture time; covers Stoos `IMG_3413`, Oeschinensee `IMG_3882`, Lucerne `DSC08012`. **No dates anywhere** (user: show place only) — `date` removed from `gallery.json`.
- Old articles (`/photography/<slug>`) untouched, linked from each album as the trail guide. `/trails` popups now open the albums (Lucerne/Oeschinensee popups use the 640px gallery WebP instead of the original JPEGs).

### Trails (`/trails`) ✅
Leaflet.js + OSM, centered Switzerland. 3 star markers: Stoos / Oeschinensee / Lucerne (with hover label + click popup photo). No page title (removed s57). Back link → `/explorer`.

### Wandering (`/writing`) ✅ — maintained by Codex
Index + 1 essay (`/writing/put-on-the-tie`). Details → `CODEX_WRITING.md`.
**s88 restraint pass (user: the title was "yelling"):** index is now just the essay list — no hero, no intro copy, no list header (sr-only `<h1>Wandering</h1>`); rows = index | EN title + ZH title inline + deck | date/read time, 960px. Essay page: single 760px column; title 26–32px (ZH in Songti, not Ma Shan Zheng); one meta row (date · read time | `中文 / EN` text toggle); in-body brush-font reveal/callout shrunk to ~23px. Keep it quiet — no large display titles in this section. Each essay in the `essays` array has `tags: [...]` — keys into the `TAGS` map (`essay` Essay|随笔, `short` Short piece|短文, `musing` Everyday musings|日常随想), shown as small sky-blue pills above the title, **English first, Chinese after** (most readers are native English speakers — never Chinese-only).
**Sky-blue section palette:** `BaseLayout` sets `<html data-section="{first path segment}">`; `global.css` overrides `--rose`/`--rose-light`/`--accent` to `#3E8ACC`/`#D3E6F6` for `html[data-section="writing"]` (nav pill, numbers, ZH titles, toggles all follow). Use `var(--rose)`, never hardcoded pink, in writing pages.

### Moments (`/moments`) ✅
3-column flex (NOT CSS columns — Safari bug). 16 cards live. Click-to-focus interaction. Cards: ferris wheel · pollen · pipa · chinese garden · library · rowing · geese · glass deck · lucerne dusk · plane home · palais des nations · dunhuang · grandma temple · saxer sunset · lunar eclipse · eras tour.

### S² Capital (`/capital`) 🟡 — s87, replaces "A Collection of Rabbit Holes"
Virtual investment firm: $100M simulated capital, real prices, live split-flap fund value, benchmarks (SPY / XLV / IBB), Investment History, Trades blotter, Research list, `/capital/team/`. **⚠️ Demo data is currently live.** Everything else → **`CONTEXT_S2_CAPITAL.md`**.

### CV (`/cv`) ✅ — 🔒 passcode
Photo + summary, 5 work entries with vine bullets, education, capabilities, action bar. Print layout: A4, 2-page.

### Footer ✅
"Si" italic left + copyright right. Hidden mobile ≤600px. `hideFooter={true}` prop for homepage.

---

## 5. Key Design Rules

- **"Nature"** is the section name (s88; formerly "Nature Never Judges" — when that phrase is used as the subtitle it keeps its spaces)
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

### Responsive pass (s88, 2026-10-14)
All 40 real pages checked headless at 375 / 390 (phone) and 768 / 1024 (iPad), production build: **0 horizontal overflow**. Fixes: hiking split hero (`ArticleHero.astro`) no longer locked to one screen — the intro quote was squeezed to a one-line sliver on iPad *and* desktop; hero now grows with its text, photo is sticky beside it (`--nav-h` 52px, 84px ≤1024 for the two-row nav), and 701–900px stacks photo (68vh, cover) above text. Phone overflow fixed on `/research/meps-expenditure` (stat cards wrap; coverage-chart payer names angled when columns < 70px), `meps-hrt-method.html` (narrower label column, matrix scrolls, tick labels hidden ≤640), `nsfg-method-age.html` + `nsfg-method-trends.html` (data tables scroll in their own box). Not changed: NSFG analysis pages' individual-records tables use <11px text on phones.

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
- [ ] **S² Capital** — see `CONTEXT_S2_CAPITAL.md` §10 (reset demo data first)
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
