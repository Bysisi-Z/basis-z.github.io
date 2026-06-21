# Sisi Personal Website — Project Context (主站)

> Last updated: 2026-06-21 (session 72)
> Stack: Astro 6 + Tailwind CSS 4 (static output)
> Repo: `Bysisi-Z/basis-z.github.io` (local: `~/Desktop/basis-z.github.io`)
> Live: [basis-z-github-io.pages.dev](https://basis-z-github-io.pages.dev) · Custom domain: si-lens.me
> Deploy: Cloudflare Pages (auto-deploy on push to `main`)
> Build cmd: `npm run build` → output dir `dist`
>
> **Sister site (副站):** `2SIMBO.com` — industry analysis · Repo: `Bysisi-Z/2simbo-nsfg` · Local: `~/Desktop/2simbo-nsfg` · Context: `~/Desktop/2simbo-nsfg/CONTEXT.md`

---

## 1. Design System

### Colors — Rose Pink scheme (session 56, LIVE)

**Homepage** keeps its own dual palette (night = purple, day = sage green — both defined inline in index.astro, unaffected by global tokens).

**All inner pages** use the original rose pink:

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background (warm white) |
| `--ink` | `#1A1A1A` | Primary text |
| `--rose` / `--accent` | `#c17d9d` | Main accent — rose pink |
| `--rose-light` | `#e8c4d4` | Light tint for cards / highlights |
| `--stone` | `#847B7B` | Secondary text, career right-side |
| `--rule` | `#E2DEDB` | Borders, dividers (warm gray) |

**Color history note:**
- Sessions 45–55: inner pages used purple `#A97EC2` / bg `#F6F3FC` (Soft Dusk scheme)
- Session 56: reverted to original rose pink. Multi-module color scheme (each module own color) was tried and abandoned — too many hardcoded details to maintain consistently.
- career/index.astro: CSS was using old `--pink` variable → replaced with `--rose` throughout

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
│   └── BaseLayout.astro       # html shell, loads fonts, Nav + Footer; props: hideNav, hideFooter
├── components/
│   ├── Nav.astro              # Sticky top nav, 2-row mobile
│   ├── Footer.astro           # Si sig + © year
│   ├── ArticleHero.astro      # Portrait (split) / Landscape (full-width) hero
│   ├── Comments.astro         # Cusdis embed
│   └── Watermark.astro        # Photo watermark overlay
├── pages/
│   ├── index.astro            # Homepage — desktop day/night + mobile lock screen (#homeMobile)
│   ├── explorer.astro         # World Explorer profile page ✅
│   ├── trails.astro           # Trails — Leaflet map, no title (removed s57) ✅
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
| 01 | `/career` | Journey |
| 02 | `/research` | Decoding |
| 03 | `/photography` | Nature Never Judges |
| 04 | `/moments` | Moments |
| 05 | `/writing` | Wandering |
| 06 | `/reading` | A Collection of Rabbit Holes |

**Note:** "Mountain Calling" → "Nature Never Judges" (session 23). "Reading List" → "A Collection of Rabbit Holes" (session 23). "Now" → "Moments", moved to slot 04 after Photography, route `/moments` (session 62).

---

## 4. Page-by-Page Status

### Homepage (`/`) ✅ Dual layout redesign (session 54–55)

**Concept:** Three-column layout. Two fully independent HTML sections (`#homeNight` / `#homeDay`) — no CSS class overrides. JS detects time and shows the correct one; both start `display:none`.

**Switch logic:** 6:00–18:00 = day (`#homeDay`), 18:00–6:00 = night (`#homeNight`)
**Preview override:** `?preview=day` or `?preview=night` in URL
**Code structure:** `n-` prefix = night classes, `d-` prefix = day classes; `<style is:global>` in index.astro

**Column proportions (both modes):**
- Left photo: `flex: 1 1 0` (≈1/3)
- Middle glass: `flex: 1.3 1 0`
- Right strip: `flex: 0.7 1 0`

**Night mode (`#homeNight`, 18:00–6:00):**
- Left photo: `homepage-ferris-original.jpeg`, `object-fit: cover; object-position: center 25%`
- Glass: `rgba(15,10,30,0.25)` + `blur(32px) brightness(0.55) saturate(1.2)` — dark purple
- Si logo: `#C4A8E0` with purple glow; "sense": `#C4A8E0`
- Module bullet: `◆` purple with twinkle animation on hover
- Module hover: `n-meteor` sweep (bottom 1px line)
- Right strip: `#000` black — Swisscom/WiFi/battery, greeting scroll, clock, date, weather, cats, floor lamp
- `.n-clockwrap` / `.d-clockwrap`: `top: 17%` (session 61; was 22% original, adjusted for bottom breathing room)

**Day mode (`#homeDay`, 6:00–18:00):**
- Left photo: `homepage-morning.jpg`, `object-fit: cover; object-position: center 35%`
- Glass: `rgba(110,123,129,0.36)` + `blur(32px) brightness(0.56) saturate(0.85)` — lake-blue-grey
- Si logo: `#A8D4B8` (sage green) with green glow; "sense": `#A8D4B8`
- Module bullet: leaf SVG in `#A8D4B8` with green `drop-shadow` glow; hover: `d-leaf-glow` pulse
- Module hover: **morning light beam** (`::after`, 1.6s, plays once) + **expanding highlight** (`::before`, `clip-path` left→right, 1.5s, tail fades to transparent); highlight collapses on mouse-leave
- Right strip: `#D4DCE2` — Swisscom/WiFi/battery, greeting, clock, date, weather, search bar, notification cards

**Greeting (3-way, 16 languages each):**
- 6:00–12:00: Good morning / 早上好
- 12:00–18:00: Good afternoon / 下午好
- 18:00–6:00: Good evening / 晚上好

**Night right strip:**
- Status bar (Swisscom · WiFi · battery), greeting scroll, clock, date, weather+location, floor lamp easter egg (`#nLamp` click toggles `.n-lamp-on`), cat blink easter egg
- Cats: `public/images/cats-illustration.png`, two grid layers, `brightness(0.65) contrast(3)`, blink 5s/2s
- **Cat scratch easter egg (session 55):** click left (big) cat → large purple scratch mark; click right (small) cat → small scratch mark. Scratch image: `public/images/cat-scratch.png` (purple glowing claws, `mix-blend-mode: screen`). Animation: `clip-path` top→bottom reveal + opacity fade, 0.38s total. Disabled when lamp is on (`.n-lamp-on .n-scratch { display:none }`). Click detection: `e.clientX` vs container midpoint. Elements: `#nScratchA` (22% wide, `bottom:63%`, left-aligned) / `#nScratchB` (16% wide, `bottom:54%`, right-aligned), both inside `#nCatsContainer`. (sizes reduced s67; were 46%/29%)
- **Shooting star easter egg (session 64):** click anywhere on `#nStrip` (excluding cats/lamp) → spawns `.n-meteor-click` div at click position. Meteor: 180px wide, 1px tall, gradient `to left` (right=white head, left=transparent tail), translates from −30px to +180px along rotation axis, fades in quickly then out over 1.4s. Angle: random 20°–160° (downward only). Both head and tail move together — no fixed origin. Class: `.n-meteor-click`; keyframe: `n-meteor-click-fly`.

**Greeting scroll (session 55 fix):**
- Transition shortened to `0.75s ease-in-out` (was 1.4s with slow easing — caused ghost overlap)
- Switch logic changed from `setTimeout(1600ms)` to `transitionend` event — new text only set after fade-out fully completes; eliminates residual ghost
- Display duration per greeting: 3.6s visible

**Day right strip:**
- Search bar at `top: 47%` — Pagefind full-site search, lazy-loaded, fixed-position results
- Notification cards at `top: 56%` — green tint `rgba(160,195,170,0.22)`:
  - NSFG Contraceptive Survey → `/research/data` (Jun 16, 2026)
  - Stoos Ridge Line Hike → `/photography/stoos-ridge-line` (Jun 5, 2026)
- To update cards: edit `.d-notif` elements in `#homeDay`
- **Dandelion easter egg (session 64–66):** `public/images/dandelion.jpg` placed `position: absolute; bottom: 0; right: clamp(6px,1cqw,14px)` with `mix-blend-mode: multiply; cursor: pointer`. Click → spawns `.d-seed` (`position: fixed` on `document.body`, `z-index: 9999`, `public/images/dandelion-seed.png` transparent PNG). Physics: gust target `gustWX=(rand-0.5)*1.2`, `gustWY=-(rand*0.62)`, updates every 2.2s; velocity eases toward gust at rate 0.022; **zero per-frame random calls** (eliminates jitter); all movement via `transform: translate()` on GPU (no left/top updates). Seeds drift full viewport for 60s (fade from 54s); each seed has independent `born` timer. Seed origin: `dRect.top + height*0.20` (flower head).
- **Shooting star (night, session 64):** click `#nStrip` (not cats/lamp) → `.n-meteor-click` div at click pos; `width:180px; height:1px`; gradient `to left` (right=white head); `transform: rotate(--ma) translateX` from −30px to +180px; 1.4s ease-out; angle random 20°–160° downward.

**Responsive:**
- `≤600px`: `#homeNight` / `#homeDay` hidden (`display:none !important`); `#homeMobile` shown instead
- `601–900px`: two-column, strip hidden
- `≥901px`: full three-column
- `max-height: 750px/620px`: search + notif stack adjusted

**Fonts:** Great Vibes · Ma Shan Zheng · Barlow Condensed (200;700) · Cormorant Garamond · Nunito (loaded via head slot)

**QR Card (session 59–60):** Contact strip in both night/day glass panels has **· GET QR CODE & SHARE** button (share arrow SVG + text, styled as ghost pill same as other links). Clicking opens a modal overlay.
- Modal: `backdrop-filter: blur(28px) saturate(1.4)` frosted glass showing page behind; `id="cardModal"`, toggled via `.open` class
- Canvas: 700×1050 px (2:3 portrait, phone-photo format) rendered in modal at `min(520, vh-200)` px tall
- **Card design (session 60):** Blurred theme photo background (blur 32px) + high-opacity light overlay (0.86) — night = lavender-tinted `rgba(228,220,240,0.86)`, day = green-tinted `rgba(238,243,240,0.86)`. Theme-split accent colors: night = deep rose `#9B3A6A`, day = deep green `#2A7A56`. "Si" Great Vibes 110px in accent color · Cormorant italic tagline 32px `#1A1A1A` · white rounded backing rect behind QR (300×300, radius 16) · QR 300×300 · `si-lens.me` Inter 500 36px in accent color · `© year` stone `#847B7B`
- QR library: `qrcodejs` from cdnjs (`https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js`) — renders to DOM canvas via `new QRCode(holder, opts)` then `drawImage` after 300ms timeout
- Drawing order: photo bg loaded async → overlay → QR (CDN load + 300ms) → white QR backing → fonts.ready → text drawn last on top
- Download button saves `si-lens-card.png` at full 700×1050 resolution
- **Contact strip pills (session 60):** `white-space: nowrap` on all pills; `flex-wrap: nowrap`; font-size/padding/gap use `clamp(…, cqw, …)` — scales with glass container width, always single row on all viewports including iPad

### Mobile Homepage (`#homeMobile`, ≤600px only) ✅ Day + Night (session 57–71)

Independent mobile-first homepage, never shown on desktop. JS sets `#homeMobile.day` class based on `_isDay`; this drives all day/night CSS splits. DOM order: `.m-lock` → `.m-notice` → `.m-open-night` / `.m-open-day`.

**Day/Night detection:**
- `_realHour = new Date().getHours()` — always real clock time (never overridden by `?preview`)
- `_hour` — used only for desktop layout switching; `?preview=day` forces `_hour=10`
- `_isDay = _hour >= 6 && _hour < 18` — controls which layout shows
- Greetings and message text always use `_realHour`, not `_hour`

**Lock screen (`.m-lock`):**
- `position: fixed; inset: 0; z-index: 100`
- Background: two `<img>` elements — `.m-bg-night` (`homepage-ferris-original.jpeg`) / `.m-bg-day` (`homepage-morning.jpg`, `object-position: center 30%`); CSS swaps via `#homeMobile.day`
- Clock: `id="mTime"`, Barlow Condensed 700, `font-size: 36vw`
  - Night gradient: `rgba(230,235,252,0.95) → rgba(215,200,238,0.88)` (purple)
  - Day gradient: `rgba(165,174,184,0.95) → rgba(110,123,129,0.88) → rgba(48,64,60,0.82)` 175deg (matches `.d-clock`)
- Status bar / date / weather row:
  - Night: `rgba(255,255,255,0.92)` (white)
  - Day: `#6E7B81` (matches web `.d-carrier` / `.d-statusbar`)
- **Dismiss:** swipe up ≥40px or scroll wheel → `.dismissed` → slides up. `/#open` hash (Nav Si link) skips directly to menu, bypasses lock + notice.

**Message card (`.m-msg-card`):**
- Night: purple tint `rgba(196,168,224,0.18)` · Day: sage tint `rgba(168,212,184,0.18)`
- Structure: `[Opening] [Weather sentence] [Closing]`
  - Opening: `Good morning!` (before 12) / `Good afternoon!` (12–18) / `Good evening!` (18+) — from `_realHour`
  - Weather: always shown (random pick from condition pool); city name included only if geolocation granted
  - Closing: day = "Hope you enjoy this little corner of the internet!" · night = "Thanks for stopping by. Make yourself comfortable!"
- **`_WM_NIGHT`** — 9 conditions: `clear` / `warm` / `cool` / `cold` / `rain` / `snow` / `fog` / `wind` / `thunderstorm`
- **`_WM_DAY`** — 9 conditions: `sunny` / `warm` (≥26°) / `mild` (20–26°) / `cool` (<20°) / `rain` / `thunderstorm` / `fog` / `snow` / `wind`
  - Day condition priority: thunderstorm > snow > rain > fog > wind(>30) > temp≥26→warm > clear(WMO 0/1)→sunny > temp≥20→mild > cool
  - Shared `_pickWeatherMsg(temp, code, wind, city, pool, isDay)` function

**Screen-size notice (`.m-notice`):**
- Night: dark purple overlay + purple card border/button
- Day: dark green overlay `rgba(8,22,14,0.90)` + sage green `#A8D4B8` card border/button/glyph

**Content sections:**
- `.m-open-night` — `homepage-ferris-original.jpeg` blurred + `rgba(15,8,38,0.48)` purple overlay + `n-glass m-glass`; has QR Code & Share button (`id="mNightCardBtn"`)
- `.m-open-day` — `homepage-morning.jpg` blurred + `rgba(8,28,15,0.48)` dark green overlay + `d-glass m-glass`; has QR Code & Share button (`id="mDayCardBtn"`)
- JS shows correct one via `.m-open-night/.m-open-day` `display` toggle
- Both QR buttons bound to `_openModal` alongside desktop `nCardBtn`/`dCardBtn`

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

**Password protected (session 72):** Cloudflare Pages Function middleware (`functions/_middleware.js`) intercepts all `/career` requests. Requires a time-limited passcode validated against Cloudflare KV (`JOURNEY_AUTH`). Sessions are linked to passwords — deleting a password instantly revokes all sessions created with it. Emergency lockdown: `node scripts/lockdown.js`.

**Passcode management:**
- Add passcode: `node scripts/add-password.js <code> <days>` (env vars in `~/.zshrc`: `CLOUDFLARE_API_TOKEN`, `CF_ACCOUNT_ID`, `KV_NAMESPACE_ID=253d0a90d7084d3e8794f636b02f7719`)
- Emergency kill all access: `node scripts/lockdown.js`

**Password gate page:** Shows explanation text + passcode input + "Email me" button (`sisi.zhang.ch@gmail.com`). Error on wrong passcode redirects to `?error=1` (POST→redirect prevents form resubmit on refresh).

**CTAs (session 72):** Moved from bottom to timeline column headers.
- Left column (Life & Adventures): "World Explorer" → `/explorer`
- Right column (Career & Education): "Professional" → `/cv`
Both buttons same width (160px), left aligns right toward center, right aligns left toward center.

**WeChat section (session 72):** Button in page header, bottom-right, absolutely positioned. Click to expand floating panel with QR code (`public/images/wechat-qr.jpg`) + note "A brief introduction when adding would be appreciated." (rose, bold, 14px). WeChat icon is brand green `#07C160`.

Easter eggs: stork (Born), bamboo (Chengdu), Shanghai skyline, Swiss Alps + flag (Lucerne), confetti (University), vine flowers (company expansions), cat photos (First/Second cat).

### Decoding (`/research`) ✅ Live

Gateway → **Play with the Data only** (session 72: Industry Research column removed — two OGN pharma articles deleted).

**Play with the Data projects (session 61: `/research/index.astro` now shows 4 cards):**
- `/research/data` — NSFG Explorer with **cycle switcher** ✅ session 39–40
  - **2022–2023** cycle: 5,586 respondents, 1,912 variables (default)
  - **2017–2019** cycle: 6,141 respondents, 2,609 variables, ages **15–49** (note: 2019–2021 cycle does not exist — COVID caused NSFG to skip directly to 2022–2023)
  - Cycle picker in header; selected variable persists across cycle switches for easy comparison
  - **Age split toggle now enabled for 2017–2019** ✅ session 40 — `public/data/nsfg1719_age_counts.json` (1.3MB, 7 groups 15–50); generated by `~/Downloads/gen_nsfg1719_age_counts.py`; age counts re-render current var when fetch completes (fixes race condition)
- `/research/meps` — MEPS 2023 Full-Year Consolidated HC-251 (18,640 respondents, 1,368 variables, 25 topic sections) ✅ session 24–25
- `/research/meps-expenditure` — MEPS Expenditure by Payer deep-dive ✅ session 25
- `/nsfg-method-trends.html` — NSFG contraceptive method usage across 4 years ✅ session 29
- `/nsfg-method-age.html` — Pill/IUD/implant/ring/Depo by age group × 4 years ✅ session 31–33
- `/nsfg-reports.html` — NSFG reports index: 11 EA reports + 2 METHX reports ✅ session 33
- `/meps-reports.html` — MEPS reports index: 1 live + 3 coming soon ✅ session 33
- `/meps-pcsk9-demo.html` — PCSK9 inhibitors payer mix, channel & cost demo ✅ session 68
- `/meps-hrt-method.html` — HRT method + therapy regimen + product frequency, female 45–69, 2020–2023 ✅ session 69–70

**MEPS HRT method + regimen analysis (session 69):**

- Route: `/meps-hrt-method.html` (standalone HTML in `public/`)
- Data: `public/data/meps_hrt_method.json`; gen script: `_data_sources/meps2023/gen_hrt_method.py`
- Raw sources: `h220a/h224.dta` (2020) · `h229a/h233.dta` (2021) · `h239a/h243.dta` (2022) · `h248a/h251.dta` (2023)
- **Universe:** Female age 45–69 in MEPS FY; denominator = all eligible women in FY file each year (not just HRT users)
- **HRT filter:** TC1S1_1 = 183 (estrogens) or 185 (progestins); excludes TC 102 (contraceptives) + TC 182 (androgens)
- **Metric:** unique patients / total eligible women × 100% (prevalence, not market share)

**Page layout:** 1480px wide, two matrices side by side (4 years each)
- **By Delivery Method** (top matrix): HRT Total → Systemic subtotal (Oral / Patch / Gel·Spray / Compounded Cream / Injectable) → Vaginal·Local subtotal (Vaginal Cream / Vaginal Tablet / Vaginal Ring / Vaginal Insert)
- **By Therapy Regimen** (bottom matrix): HRT Total → Systemic subtotal (Estrogen Only / Combo / Progestogen Only*) → Vaginal·Local subtotal (Estrogen Only only — Combo/P-only not shown; local estrogens don't stimulate endometrium, progestogen co-admin not indicated)
- Progestogen Only bars: gray color + `*` asterisk — no standalone FDA menopause indication; may represent compounded-estrogen users (estrogen not in MEPS) or perimenopause AUB treatment

**Systemic vs Local classification:**
- **Systemic:** RXDRGNAM NOT containing "TOPICAL" → oral, patch, gel, injectable (all have meaningful systemic absorption)
- **Local/Vaginal:** RXDRGNAM contains "TOPICAL" (ESTRADIOL TOPICAL + CONJUGATED ESTROGENS TOPICAL, any form) + PROGESTERONE INST (Endometrin)
- **Femring note:** Not in MEPS data. If it appeared, would classify as Systemic (0.05–0.1 mg/day systemic delivery, unlike Estring 7.5mcg/day local)

**Methodology decisions locked:**
- Progestogen-only patients **retained** in HRT Total with caveat note
- Vaginal/Local Combo + P-only categories **excluded** (clinically inappropriate — minimal endometrial stimulation)
- Compounded Cream = ESTRADIOL CRE (non-TOPICAL, skin-applied) + PROGESTERONE CRE → classified Systemic but shown separately

**Eligible women denominator by year:** 2020: 4,854 · 2021: 5,109 · 2022: 4,095 · 2023: 3,350
**HRT prevalence:** 4.3% (2020) → 3.9% (2021) → 4.8% (2022) → 5.6% (2023) [note: small samples, large CIs]

**Key findings:**
- 67 unique products (RXNAME × RXDRGNAM × RXFORM) across 4 years; top 3 are generic estradiol tabs, generic progesterone caps, estradiol patch PTTW
- Premarin (oral + vaginal) **only in 2020** — disappeared entirely 2021–2023; confirms post-WHI prescriber shift
- Generic progesterone caps overtook estradiol oral tabs in 2023 (#1 by patient count for first time)
- Vaginal cream (generic estradiol) surged: 11.4% of HRT patients (2020) → 25.7% (2023)
- Systemic E-only declining; Systemic Combo stable ~20-28 pts/yr; Systemic P-only rising (29→39) — P-only rise likely reflects MEPS capture gap for compounded estrogen users
- EstroGel (transdermal gel) entered 2021, stable ~5–11 patients/yr

**HRT product frequency table (session 70, appended to same page):**

- **Section:** "Most Frequently Used Products" — appended below the two matrices in `/meps-hrt-method.html`; no separate page
- **Data:** `public/data/meps_hrt_product.json`; gen script: `_data_sources/meps2023/gen_hrt_product_v2.py`
- **Display:** side-by-side table, 4 year columns; patients per product type per year; rank with ▲▼ arrows (vs prior year, colored chip); 2020 has no arrow
- **Classification:** generics grouped by molecule + route + scope (e.g. "Generic E2 · Oral", "Generic E2 · Cream"); named brands kept individual (Dotti, EstroGel, Yuvafem, Estring, Imvexxy, Climara, Lyllana, Premarin, Premarin Vaginal)
- **Scope tags:** Systemic (purple) / Local (teal); Brand/Generic chip
- **Local TABS fix:** RXDRGNAM containing "TOPICAL" + RXFORM = TABS → route = "Vaginal Tabs" (not "Oral")
- **Metric:** patients only (fills removed — fills ≠ apple-to-apple without RXDAYSUP normalization; patient count is cleaner frequency measure)
- **Top 10 per year:** union across 4 years = 16 unique product categories shown
- **Patient overlap note:** combo patients (E+P same year) = 25–33/yr; E-only = 119–161/yr; P-only = 21–35/yr. P-only patients likely include compounded-estrogen users (E not captured in MEPS) — but this is **speculative**, not directly verifiable
- **meps-reports.html card:** title updated to "HRT Method & Product Frequency — Female 45–69"; description updated

**Research internal navigation (session 61):**
- `/research/index.astro` now has 4 data project cards: NSFG Explorer · NSFG Individual Reports (`/nsfg-reports.html`) · MEPS Explorer · MEPS Expenditure (`/research/meps-expenditure`)
- All 11 analysis pages + method-comparison + method-trends + method-age: `← NSFG Reports` back link added
- `nsfg-reports.html` / `meps-reports.html`: breadcrumb row `← Decoding · Explorer`
- Navigation chain: `/research` → hub pages → individual reports → back up cleanly

**NSFG explorer cycle switcher (sessions 39–40):**
- Data pipeline: `~/Downloads/gen_nsfg1719_data.py` — parses Stata `.dct` (column positions) + `.do` (value labels), assigns sections via label prefix (e.g. `EA-` → Section E), outputs `public/data/nsfg1719_*.json`
- Age counts pipeline: `~/Downloads/gen_nsfg1719_age_counts.py` — outputs `public/data/nsfg1719_age_counts.json` (same 7-group format as 2022–2023)
- Raw source: `~/Downloads/2017_2019_FemRespData.dat` + `2017_2019_FemRespSetup.dct` + `.do` (local, not in git)
- Gotcha: labels with embedded quotes (e.g. `"NuvaRing"`) require greedy regex `\"(.+)\"` not `\"([^\"]+)\"` — fixed in script

**NSFG individual report cycle toggle (session 40):**
- All 11 analysis pages have **2022–2023 / 2017–2019 cycle picker**; updates funnel, hero KPI rate, charts (slot + race), eyebrow
- 2017-2019 payloads: `public/data/nsfg1719_report_payloads.json`; generated by `~/Downloads/gen_nsfg1719_report_payloads.py`
- METHSTOP code differences in 2017–2019: patch=**25** (not 21), ring=**26** (not 22)
- IUD n_users in 2017–2019: derived from EVIUDTYP1 universe (1,096); IMPLANT has no standalone "ever used" question — n_stopped shown only
- Switch-back restores original DOM (saved before first switch); individual records table hidden in 2017–2019 mode
- 2017–2019 dissatisfied rates: pill 34.6%, condom 7.1%, vasectomy 0.6%, depo 44.1%, withdrawal 6.0%, patch 38.4%, ring 44.2%, IUD 35.8%

**NSFG explorer REPORT badge fix + 1719 deep-dive (session 41):**
- **Bug fixed:** `REPORT_VARS` (Set) and `DEEPDIVE_MAP` / `varToGroup` use uppercase keys; 2017–2019 EA variables are lowercase (`pill`, `condom`, etc.) → all REPORT + GROUP badges were missing in 1719 mode
- **Fix location:** `src/pages/research/data.astro` — 8 lookup sites now use `.toUpperCase()` on `v.name`; isMethx regex has `i` flag
- **Added:** `DEEPDIVE_MAP_1719` with correct 1719 stats per method; `renderDetail` picks map based on `currentCycle`
- **Note:** METHX1–192 keep uppercase in 1719; only EA method vars (pill, condom…) are lowercase

**NSFG method-age sexual activity split (session 42):**
- `/nsfg-method-age.html` overview bar now has **"Sexual activity split"** toggle button (next to subtitle)
- When active: "No method" segment splits into 2 → "Not recently sexually active" (gray) + "Sexually active, no contraception" (amber `#C49A7C`)
- Definition: sexually active = `HADSEX=1` AND `LSEXDATE` within 12 months of interview (`CMINTVW`); not active = `HADSEX=2` OR last sex >12mo
- Data: `public/data/nsfg_sex_activity_split.json` (both cycles); generation script: `/tmp/nsfg_work/gen_sex_activity_split.py`
- Toggle updates legend; both 2022–2023 and 2017–2019 cycle data included
- **Key finding:** 15–19 "no method +10pp" is almost entirely "not sexually active" (2022–23: 60.7% vs 2017–19: 50.0%); sexually-active-no-method actually *declined* (4.0% → 2.7%). For 30–34, unprotected active sex rose (15.4% → 18.9%).
- Raw source: `NSFG_2022_2023_FemRespPUFData.csv` (in zip at `~/Downloads/`), `2017_2019_FemRespData.dat`
- **Methodology note boxes added (session 42):** three gray `.meth-note` boxes added to page — one per section (overview bar, method bars, 4-year trend), each explaining window coverage, variable definitions, denominator logic, and limitations
- **Key caveat documented:** `LSEXDATE`-based sexual activity classification applies to interview year only; yr−3/yr−2/yr−1 sexual activity status cannot be derived (no monthly sex calendar in NSFG). For ages 25+ this limitation is minimal; for 15–19 in yr−3 it is substantial.
- **Pending challenge items** (mid-session 42, conversation paused): user is reviewing methodology and has more challenges to raise in next session

**NSFG method-age EC-8 "Sexually active that year" denominator (session 43):**
- 4th denominator toggle added to `/nsfg-method-age.html`: **"Sexually active that year"** (`pa` key)
- Uses EC-8 `MONSX`/`MONSX2`–`MONSX48` monthly sexual intercourse indicators (value `1` = had sex that month)
- `n_active` per year = respondents with ≥1 MONSX slot = 1 in that 12-month window; year-specific denominator (varies yr-3→interview unlike other toggles)
- `pa` numerator = used method AND sexually active in same year (intersection per respondent, not simple division)
- Both 2022–2023 and 2017–2019 data regenerated with `pa` and `n_active`; gen script: `~/Downloads/gen_method_age_with_active.py`
- **Code correction:** 2022–2023 ring METHX code is **26** (same as 2017–2019), not 22 as previously assumed. Patch also 25 (not 21). DRUG codes updated to `{3,8,9,19,25,26}` for both cycles.
- **Impact on 15–19 yr-3:** n_active=55 vs n_total=730; pill pa=54.5% vs pu=64.2% — denominator correction removes non-sexually-active from baseline, substantially changing rates for young cohorts in early years

**NSFG method trends + age analysis 2017–2019 (session 41):**
- `/nsfg-method-trends.html` now has **2022–2023 / 2017–2019 cycle picker**; `ROWS_1719`, `DENOMS_1719`, `NO_METHOD_1719` inlined
- `/nsfg-method-age.html` now has **2022–2023 / 2017–2019 cycle picker**; `DATA_1719` inlined (5 methods × 7 age groups × 4 years)
- METHX codes in 2017–2019: 1=no method, 3=pill, 4=condom, 5=vasectomy, 6=sterilization, 7=withdrawal, 8=Depo, 9=implant, 10=rhythm, 19=IUD, 20=EC, 21=other method, 22=respondent sterile, 23=partner sterile, 25=patch, 26=ring, 55=continuation
- Key trends (2017–2019): Pill 25.9%→21.9% of method users (declining); IUD 11.4%→13.2% (rising); Condom ~32% stable; Female sterilization 20%→22% (rising)
- Data generation scripts: `~/Downloads/gen_nsfg1719_method_trends.py`, `~/Downloads/gen_nsfg1719_method_age.py`; source: `2017_2019_FemRespData.dat` (n=6,141)

**NSFG explorer group UX (session 43):**
- Groups now **default-expanded** on load: `expandedGroups = new Set(Object.keys(d.groups))` called in both group-load callbacks (initial + cycle switch)
- Group title no longer truncates: removed `white-space:nowrap; overflow:hidden; text-overflow:ellipsis`; replaced with `min-width:0; word-break:break-word`
- Group header flex changed to `align-items:flex-start`; chevron/qcode/count get `margin-top` to align with first text line

**NSFG explorer updates (session 30):**
- Left panel width: 300px → 340px
- 2-level grouped sidebar: grouped variables collapse to qcode header (title + count); click to expand; current var's group auto-expands; resets on section switch; 19 groups where title = qcode fall back to first var's label
- Groups: 84 groups, 710 grouped variables (from `nsfg_groups.json`)
- **Session 44 group fixes:** ED-6 title → "Method used in last 48 months"; EA-21 split into EA-21-reasons (REASIUD01–06) + EA-21-type (TYPEIUD_1/2)

**NSFG method trends updates (session 29–30):**
- "No method used" row visible only in All Respondents mode — gray dashed border + faint bar; n ≈ 1,946–2,122 (~35–38% of all respondents)
- Non-EC drug market filter: pill + IUD + implant + Depo + ring + patch (EC excluded); universe n ≈ 1,776–1,867

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
- METHX1–METHX192 carry REPORT badge linking to this page AND to `/nsfg-method-age.html` (two cards since session 31)
- Source file: `public/nsfg-method-trends.html` (standalone, no Astro build dependency)
- **Key findings:** Pill declining 31% → 26% of method users over 4 years; IUD rising 15% → 16%; in drug market Pill = ~51%, IUD = ~33%

**NSFG age analysis (`/nsfg-method-age.html`) — session 31–32:**
- Focus: pill (code 3), IUD (code 19), implant (code 9), ring (code 26) by age group across METHX calendar
- Age groups: 15–19 / 20–24 / 25–29 / 30–34 / 35–39 / 40–44 / 45–50 (7 groups; last group covers full NSFG universe including 1 age-50 respondent)
- 3-way denominator toggle: method users in age group (default) / all respondents / hormonal+LARC users
- **Section A — context stacked bar:** full bar = n_total per age group; segments = no method (light) | other methods (stone) | non-EC drug (rose). Always interview-year snapshot, unaffected by denominator toggle.
- **Section A — 4 method panels:** horizontal bars by age group, all bars use rose (#C17D9D) — single color for all 4 methods (not method-specific colors). Shows "all ages X%" badge in card header; sub-label shows denominator type. Bars scaled to each method's own max.
- **Section B — dumbbell charts:** ○ yr−3 → ● interview yr per age group. All dots: rose (#C17D9D). Axis labels: black (#1A1A1A). Connecting line: teal (#5BAD8B) = increasing, red (#E53935) = declining. Intermediate yr-2/yr-1 dots (small, faint rose) show trajectory shape. Rows with n < 15 show a stone `!` badge (circle) left of the age label; hover tooltip shows exact n for yr−3 and interview yr. No opacity fading. Δ pp shown on right in line color. Left margin: 56 (wider to accommodate badge).
- **Color principle:** colors encode meaning only — rose for all dots/bars, teal/red for direction only on dumbbell. No decorative per-method or age gradients.
- Data: inline JSON in HTML; raw source: `~/Downloads/NSFG-2022-2023-FemRespPUFData/NSFG_2022_2023_FemRespPUFData.csv`
- NSFG explorer: each METHX variable now shows 2 report cards ("Full breakdown →" trends page, "Age breakdown →" this page)
- **Key findings:** Pill strong youth bias (51% of teen method users) declining fastest in young women (−13 to −15 pp over 4 yrs); IUD growing in all age groups, fastest under 30 (+3.6–3.9 pp); Implant concentrated in 20–24, stable; Ring peaks in 35–39, small n.

**All NSFG deep-dive analysis pages (pill/iud/implant/depo/ring/patch/condom/vasectomy/withdrawal/method-comparison) — session 31:**
- Bar chart unit labels added: COUNT chip (gray) on count charts, RATE % chip (blue) on race/rate charts
- Count bars now show `n · share%` format (e.g. "929 · 92%")

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

### Nature Never Judges (`/photography`) ✅ Index + 3 detail pages (session 57)

- "View all trails on the map →" button now has inline map SVG icon (left of text); button uses `display: inline-flex; align-items: center`
- Grid entry order changed for visual rhythm: lucerne(landscape,4) | stoos(portrait,2) / oeschinensee(portrait,2) | first-5000m(landscape,4) / corsica(portrait,2) | dolomites(portrait,2) | patagonia(portrait,2)

- Main title: **"Nature never judges"** (corrected grammar, session 23)
- 6-card mixed grid (portrait = span 2, landscape = span 4)
- Live detail pages: Stoos Ridge Hike, Oeschinensee Panorama Trail, Lucerne city guide

**Lucerne (`/photography/lucerne`) — session 37–38:**
- Title: "Lucerne – The Heart of Switzerland" (renamed s38; was "The Most Swiss City in Switzerland")
- City travel essay, not hiking guide; orientation: landscape (full-width hero)
- Hero: `DSC08012.jpg` — winter cityscape from across the lake, Hofkirche twin spires, snow
- Section 1 photos (4 total): `DSC08013.jpg` full (old town), `DSC08014.jpg` half (dock), `DSC08020.jpg` half (lake + duck), `DSC08025.jpg` full (seagulls + misty Alps)
- Photos at `public/images/lucerne/` (Sony DSC08012/13/14/20/25.jpg — 5 files, in git)
- 3 sections: "The Lucerne Most Visitors See" · "One Hour from Lucerne" (8 subheadings: Meggenhorn, Küssnacht, Hergiswil, Bürgenstock, Stans, Engelberg, Rigi, Stoos) · "Final Thoughts"
- Stoos subheading links to `/photography/stoos-ridge-line`
- Full EN + 中文 bilingual
- Index card: landscape, spans 4 cols; slot 3 (between Oeschinensee and First 5000m placeholder)

**Stoos Ridge Hike (`/photography/stoos-ridge-line`):**
- iPad Safari fix: hero uses `100dvh` + `grid-template-rows: 1fr` + `height: 100%` on grid items (session 23)
- Route map: negative margins removed, contained within article padding (session 23)
- Lightbox moved outside `.article` to fix iOS fixed positioning (session 23)

**Oeschinensee Panorama Trail (`/photography/oeschinensee`) — session 36:**
- Circular loop, 8.5–9 km, ~430–500 m elevation, T2 moderate
- Hero: `IMG_3898.jpeg` — wide panoramic of full lake from above
- webcamUrl: `https://www.oeschinensee.ch/zh/` — also links to trail info + booking
- 4 sections with inline photo galleries: Kandersteg evening (8 photos), Panorama Trail (6), Beauty of Oeschinensee (9), Around the Lake (3 incl. nail polish shot IMG_3908)
- All photos: `public/images/oeschinensee/IMG_3666–3961.jpeg` (32 files total)
- Full EN + 中文 bilingual

**`[slug].astro` article system (session 36):**
- Sections now support `photos?: { src, alt?, full?, pos? }[]` — renders a 2-col grid below the section text, full-bleed with negative margins
- CSS: `.section-gallery` (2-col, 5px gap) · `.sg-img` (aspect-ratio 4/3, object-fit cover) · `.sg-full` (spans both cols, 16/9)
- `ArticleHero`: `webcamHint` / `webcamHintZh` now configurable props (was hardcoded "ridge"); `webcamNote` / `webcamNoteZh` renders a note below the webcam button (13px, `var(--stone)`)

**`photography/index.astro` grid (session 36):**
- `grid-auto-flow: dense` added — fills layout gaps when portrait cards don't fill a full 6-col row
- Entry data now supports optional `note` field → renders as `.card-note` (11px, rgba white 60%) in card overlay below title
- Oeschinensee card: portrait, `IMG_3898.jpeg`, note = "Book in advance — one of the most popular destinations in the Bernese Oberland"
- yunnan-highland-trek placeholder replaced by Oeschinensee
- **Session 38:** "VIEW ALL TRAILS ON THE MAP →" button link added in page header below subtitle → `/trails`; rose border button, hover fills rose

### Trails (`/trails`) ✅ Live (session 34)

Hiking guide overview page, linked from "a foreign country" hover tooltip in `/explorer`.

**Title:** removed (session 57). Only the `← World Explorer` back link remains in the header.
**Back link:** ← World Explorer → `/explorer`

**Map:** Leaflet.js + OpenStreetMap tiles, centered on Switzerland `[46.80, 8.22]` zoom 8.
- Canton boundary overlay: semi-transparent rose tint (GeoJSON from `interactivethings/swiss-maps` GitHub Pages; fails gracefully)
- Map hint overlay (top-left, dark semi-transparent): "★ Click a star to read the travel log"
- **Marker interaction (session 37–38):** hover → text label only; click → popup with full-ratio photo (600px wide, height auto, no cropping); click photo → navigate to article. CSS class `.trail-popup`. maxWidth: 600.
- Lucerne marker (session 37): `[47.050, 8.309]`; red star `#e53935` (22px); photo `DSC08012.jpg`; → `/photography/lucerne`
- Stoos marker: `[47.00, 8.68]`; black star; photo `/images/haute-route-alps.jpeg`; → `/photography/stoos-ridge-line`
- Oeschinensee marker: `[46.484, 7.725]`; black star; photo `IMG_3898.jpeg`; → `/photography/oeschinensee`

**explorer.astro hike CTA (session 35):** Full-width photo card after bento grid → `/trails`. Photo: `public/images/hike-invite.jpg` (hiking in Swiss Alps, person facing mountains). `width:100%; height:auto` — no crop. Bottom gradient overlay + serif italic "Come hiking with me" + white border button "Explore the trails →".

**IMPORTANT — is:inline script:** explorer.astro uses `<script is:inline>` (NOT compiled by Vite). Never use TypeScript syntax (type casts, type annotations) inside this block — it will cause a JS syntax error that breaks the entire page.

**Future:** Add more countries/hikes as new markers on the same map.

### Footer (`src/components/Footer.astro`) ✅ Updated (session 50)

- Left: "Si" serif italic, `var(--stone)`
- Right: single-line copyright — "© year · All photographs are the exclusive property of the author. Unauthorized reproduction or commercial use is strictly prohibited."
- Font: 11px, `var(--stone)`, hidden on mobile (`max-width: 600px`)
- Homepage glass strip also has its own copyright line (same text, purple color to match contact links)
- **`hideFooter` prop (session 57):** `BaseLayout` accepts `hideFooter={true}` to suppress rendering entirely. Homepage uses this — do NOT use CSS to hide the footer on index page, use the prop.

### CV (`/cv`) ✅ Live

Professional profile: photo + summary, 5 work entries with vine bullets, education, capabilities, action bar.

### A Collection of Rabbit Holes (`/reading`) 🟡 Intro written

- No large h1 title (removed session 23)
- Intro quote as large body text: "Looking back, my reading habits make very little sense. And I am perfectly comfortable with that." (clamp 24–38px)
- Content: placeholder "Coming soon."

### Wandering (`/writing`) ⚠️ Index only

2 placeholder posts. No detail pages.

**Session 38 — index page updates:**
- Title changed from "Writing" → "Wandering"
- Intro text added (EN only, 900px wide): 4 paragraphs inviting reader to sit and converse
- Coffee cup SVG easter egg: clicking the cup plays audio (`public/audio/coffee-invite.m4a`); steam wisps animate while playing; stops on click or end. **Session 57: replaced with real recording `Bleicherstrasse 49.m4a`.**
- Coffee cup SVG uses rose palette: `#c17d9d` (cup body), `#d4a0b8` (saucer/handle), `#ecd2e0` (steam wisps)

### Moments (`/moments`) ✅ Live (session 63–71)

Renamed from "Now", route `/now` → `/moments`. Subtitle: *"little moments that touched me, thrilled me, or simply made me smile"*.

**Layout:** **3-column flex** (NOT CSS columns — switched s63 due to Safari stacking bug). `max-width: 1500px`, `gap: 40px`. Each column is a `<div class="scatter-col">`. Col 2 starts at `margin-top: 48px`, col 3 at `20px` for stagger. Cards rotate per column via `.scatter-col:nth-child(N) .card:nth-child(odd/even)`.

**Card display classes (shorthand rules):**
- **短图** = `.moment-crop` — 4:3 landscape crop, `position: absolute; bottom: 0` (like geese card). Physically crop image to 4:3 centered on key area.
- **长图** = `.slides-full` — full height, no crop, `width: 100%; height: auto`. Use for tall portrait images (like grandma temple).
- **Slideshow** = `.slides-cover` — `aspect-ratio: 3/4`, two images with `ms-a`/`ms-b` crossfade (8s). Use for portrait pairs.
- `.slides-landscape` — `aspect-ratio: 4/3`, `object-fit: cover; object-position: center`. For landscape single photos.

**Image processing:** use Python PIL (`from PIL import Image`) for precise cropping — `sips --cropOffset` has a bug with same-file input/output. For HEIC → JPG: `sips -s format jpeg input --out output`. PIL cannot open HEIC directly.

**Click-to-focus interaction (session 71):** click any card → `.card-focused` (rotate 0deg, scale 1.06×, translateY −8px, deep shadow, z-index 100); all others get `.card-dimmed` (opacity 0.45). Click same card or outside to reset. Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)`. No hover transform (removed). Hair dryer easter egg removed (session 71).

**Moments (session 63):**
| Col | Content | Images | Display |
|-----|---------|--------|---------|
| 1 | LUCA Ferris wheel 2026.4.30 | `ferris-1.jpg` + `ferris-2.jpg` crossfade | `.slides-cover` |
| 1 | Grass pollen forecast (Switzerland all red) | `pollen.jpg` (cropped 4:3, map center y≈1250) | 短图 `.moment-crop` |
| 2 | Mother goose family by Lake Lucerne 2026.5.2 | `geese.jpg` | 短图 `.moment-crop` |
| 3 | Dunhuang Milky Way + dusk silhouette 2020.10 | `dunhuang-dusk.jpg` + `dunhuang-milkyway.jpg` | `.slides-cover` |
| 3 | Grandma's 2025 temple donation name | `grandma-temple.jpg` (CW 90° rotated) | 长图 `.slides-full` |

**Images:** `public/images/moments/` — ferris-1/2, geese, dunhuang-dusk, dunhuang-milkyway, pollen, grandma-temple.

---

## 5. Key Design Rules

- **"Nature Never Judges"** always has spaces — never concatenate
- Portrait photos → split hero (42% photo | 58% text), `imagePosition: left|right`
- Landscape photos → full-width hero with text overlay
- Timeline: left = Life (`var(--rose)` = `#A97EC2`), right = Career (`var(--stone)` = `#847B7B`)
- Homepage: 1-screen no-scroll desktop, drum wheel mobile, `hideNav={true}`, full-bleed photo bg
- Nav: 2-row on mobile ≤640px (logo row + scrollable links strip)
- `var(--rule)` NEVER used as text color — minimum = `var(--stone)`
- `strong.hl` (rose inline highlight) in `global.css` for hiking articles (bypasses Astro scoping)
- Bilingual toggle (EN/中文): `html[data-lang="zh"]` attribute, `localStorage` key `sisi-article-lang`
- **Color accent is `var(--rose)` = `#A97EC2`** (warm pink-purple H≈288°) — all inner pages still use this for highlights, badges, active states

---

## 6. Pending Work

- [ ] **Explorer modules** — fill music, books, food, outdoor stats content
- [x] **Nature Never Judges grid** — Oeschinensee ✅ s36; Lucerne city guide ✅ s37; 3 CSS gradient placeholders remain
- [x] **Lucerne city guide** — `/photography/lucerne` ✅ s37; trails map red star marker ✅; bilingual EN/中文 ✅; deployed ✅
- [ ] **Research detail pages** — OGN articles removed from site (session 72); HTML drafts at `~/OGN_financial_analysis.html` and `~/SunPharma_OGN_acquisition.html` remain locally if needed later
- [ ] **Writing detail pages** — `/writing/[slug].astro`
- [ ] **Journey detail pages** — timeline cards link to `#`
- [ ] **MEPS deep-dive analysis pages** — expenditure overview ✅ done; next: INSCOV23 (insurance coverage), DLAYCA42 (delayed care), TOTSLF23 (OOP spending); stubs in `/meps-reports.html`
- [x] **MEPS explorer label fixes (s38)** — Yes/No auto-applied to all {1,2}-only vars; -2 (prev round) and -10 (top coded) added to MISSING_VALS; employment categoricals fully labelled; both main + split JSON regenerated
- [x] **NSFG method trends page** — `/nsfg-method-trends.html` ✅ done session 29; METHX1–192 all badged
- [x] **NSFG age analysis page** — `/nsfg-method-age.html` ✅ done session 31–33; 5 methods (pill/IUD/implant/ring/Depo); citations on pill/IUD/implant findings
- [x] **NSFG reports index** — `/nsfg-reports.html` ✅ session 33; 13 reports in 2 groups (EA + METHX)
- [x] **MEPS reports index** — `/meps-reports.html` ✅ session 33; 2 live + 3 coming-soon stubs
- [x] **MEPS PCSK9 demo** — `/meps-pcsk9-demo.html` ✅ session 68; proportional attribution payer split; linked from meps-reports.html
- [x] **MEPS HRT method + regimen** — `/meps-hrt-method.html` ✅ session 69; female 45–69, 2020–2023, two matrices (method + regimen); linked from meps-reports.html
- [x] **MEPS HRT product frequency table** — ✅ session 70; appended to `/meps-hrt-method.html`; top-10 product types per year, rank arrows, patients only; gen script `gen_hrt_product_v2.py`
- [x] **Explorer report buttons** — filled rose "See all individual reports →" button in both NSFG and MEPS explorer headers
- [x] **NSFG 2017-2019 age split** — ✅ session 40; age counts generated, toggle enabled for both cycles
- [x] **Individual reports 2017-2019 view** — ✅ session 40; all 11 pages have cycle picker; payloads in `nsfg1719_report_payloads.json`
- [x] **NSFG explorer REPORT badge in 1719 mode** — ✅ session 41; fixed `.toUpperCase()` bug; DEEPDIVE_MAP_1719 with correct stats
- [x] **METHX longitudinal pages 2017-2019** — ✅ session 41; method-trends + method-age both have cycle picker; data inlined from raw .dat
- [x] **Moments page** (`/moments`) — 5 cards live ✅ s63; add more as they happen
- [ ] **A Collection of Rabbit Holes** — content not written

---

## 7. Infrastructure Notes (session 72)

**GitHub Actions:** `.github/workflows/deploy.yml` added — deploys via Astro (not Jekyll). Required because GitHub Pages default was using Jekyll and failing on `.astro` files. Cloudflare Pages deploys independently via its own build pipeline.

**Contact email:** Updated to `sisi.zhang.ch@gmail.com` everywhere (previously `giselle.z1989@gmail.com`).

**CV print layout (`/cv`):** `@page { size: A4; margin: 14mm 16mm; }` — 2-page layout. Page break forced before Sanofi (3rd exp-item). Photo hidden in print; replaced by `.print-name-row` (name + email). Capabilities 3-column grid. `viewport-fit=cover` added to BaseLayout viewport meta.

**Mobile homepage (session 72):**
- Night/day background image swap fix: `.m-lock-bg img` display rule was overridden by `.m-lock-bg img { display: block }` (higher specificity). Fixed by scoping to `.m-lock-bg .m-bg-night` / `.m-lock-bg .m-bg-day`.
- Lock screen gap fix: `viewport-fit=cover` added to allow `position:fixed; inset:0` to cover safe areas. `.m-lock-bg { inset: -10px }` to bleed image 10px past container on all sides.
- Mobile night open: link colors lightened to `rgba(230,215,248,0.90)` for readability on dark background.

---

## 8. Development Workflow

```bash
cd ~/Desktop/basis-z.github.io
npm run dev          # http://localhost:4321
npm run build        # verify before push
git add -A && git commit -m "..." && git push origin main

# Journey passcode management (env vars in ~/.zshrc)
node scripts/add-password.js <code> <days>
node scripts/lockdown.js   # emergency: wipe all passwords + sessions
```
