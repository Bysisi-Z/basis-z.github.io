# Context — Homepage (`/`)

> Part of si-lens.me project context. Read alongside `CONTEXT.md`.
> Last updated: 2026-06-27 (session 83)

## Concept

Three-column desktop layout. Two independent HTML sections (`#homeNight` / `#homeDay`) — no shared CSS overrides. JS detects time and shows the correct one; both start `display:none`. `≤600px`: both hidden, `#homeMobile` shown instead.

**Switch logic:** 06:00–18:00 = `#homeDay`; 18:00–06:00 = `#homeNight`
**Preview override:** `?preview=day` or `?preview=night`

**Column proportions (both modes):**
- Left photo: `flex: 1 1 0` (≈1/3)
- Middle glass: `flex: 1.3 1 0`
- Right strip: `flex: 0.7 1 0`

**Responsive breakpoints:**
- `≥901px`: full three-column
- `601–900px`: two-column, strip hidden
- `≤600px`: `#homeNight` / `#homeDay` hidden (`display:none !important`); `#homeMobile` shown

**Code structure:** `n-` prefix = night classes, `d-` prefix = day classes. `<style is:global>` in `index.astro`.

**Fonts loaded via head slot:** Great Vibes · Ma Shan Zheng · Barlow Condensed (200;700) · Cormorant Garamond · Nunito

---

## Night Mode (`#homeNight`, 18:00–06:00)

- **Left photo:** `homepage-ferris-original.jpeg`, `object-fit: cover; object-position: center 25%`
- **Glass:** `rgba(15,10,30,0.25)` + `blur(32px) brightness(0.55) saturate(1.2)` — dark purple
- **Si logo:** `#C4A8E0` with purple glow; "sense": `#C4A8E0`
- **Module bullet:** `◆` purple with twinkle animation on hover
- **Module hover:** `n-meteor` sweep (bottom 1px line)
- **Right strip:** `#000` black — Swisscom/WiFi/battery, greeting scroll, clock, date, weather, cats, floor lamp

### Night right strip elements

- Status bar (Swisscom · WiFi · battery)
- Greeting scroll (3.6s visible per greeting, `transitionend` logic — see Greeting section)
- Clock + date + weather+location
- **Floor lamp easter egg:** `#nLamp` click toggles `.n-lamp-on`
- **Cat blink easter egg:** `public/images/cats-illustration.png`, two grid layers, `brightness(0.65) contrast(3)`, blink 5s/2s
- **Cat scratch easter egg (s55):** click left (big) cat → large purple scratch; click right (small) cat → small scratch. Image: `public/images/cat-scratch.png` (`mix-blend-mode: screen`). Animation: `clip-path` top→bottom + opacity, 0.38s. Disabled when lamp on. Elements: `#nScratchA` (22% wide, `bottom:63%`) / `#nScratchB` (16% wide, `bottom:54%`) inside `#nCatsContainer`.
- ~~Shooting star easter egg (s64, click `#nStrip`)~~ — **removed s88 (2026-10-16)** at the user's request (the strip is now the room photo + flashlight); JS + `.n-meteor-click` CSS deleted. The hover meteor on menu items (`.n-mod:hover::after`, `n-meteor`) is separate and stays.
- `.n-clockwrap` `top: 17%` (adjusted s61)

---

## Day Mode (`#homeDay`, 06:00–18:00)

- **Left photo:** `homepage-morning.jpg`, `object-fit: cover; object-position: center 35%`
- **Glass:** `rgba(110,123,129,0.36)` + `blur(32px) brightness(0.56) saturate(0.85)` — lake-blue-grey
- **Si logo:** `#A8D4B8` (sage green) with green glow; "sense": `#A8D4B8`
- **Module bullet:** leaf SVG in `#A8D4B8` with green `drop-shadow` glow; hover: `d-leaf-glow` pulse
- **Module hover:** morning light beam (`::after`, 1.6s, plays once) + expanding highlight (`::before`, `clip-path` left→right, 1.5s, tail fades transparent); highlight collapses on mouse-leave
- **Right strip:** `#D4DCE2`

### Day right strip elements

- Status bar, greeting, clock, date, weather
- **Search bar** at `top: 47%` — Pagefind full-site search, lazy-loaded, fixed-position results
- ~~Notification cards ("Latest Update")~~ — **removed s88 (2026-10-16)** at the user's request, markup and `.d-notif*` CSS deleted; don't add them back.
- **Dandelion easter egg (s64–66):** `public/images/dandelion.jpg`, `position: absolute; bottom: 0; right: clamp(6px,1cqw,14px)`, `mix-blend-mode: multiply`. Click → spawns `.d-seed` (`position: fixed`, `z-index: 9999`, `public/images/dandelion-seed.png`). Physics: gust target updates every 2.2s; velocity eases at rate 0.022; zero per-frame random (no jitter); GPU transform only. Seeds drift 60s (fade from 54s). Origin: `dRect.top + height*0.20`.
- `max-height: 750px/620px`: search bar position adjusted

---

## Greeting (3-way, 16 languages each)

- 06:00–12:00: Good morning / 早上好
- 12:00–18:00: Good afternoon / 下午好
- 18:00–06:00: Good evening / 晚上好

**Scroll behavior (s55 fix):** transition `0.75s ease-in-out`. Switch uses `transitionend` event (not `setTimeout`) — new text set only after fade-out completes. 3.6s visible per greeting.

---

## QR Card (s59–60)

Both night/day glass panels have **· GET QR CODE & SHARE** button (share arrow SVG + text, ghost pill). Opens modal overlay.

- **Modal:** `id="cardModal"`, toggled via `.open`. `backdrop-filter: blur(28px) saturate(1.4)`.
- **Canvas:** 700×1050 px (2:3 portrait). Rendered at `min(520, vh-200)` px tall in modal.
- **Card design:** Blurred theme photo bg (blur 32px) + high-opacity overlay — night = lavender `rgba(228,220,240,0.86)`, day = green `rgba(238,243,240,0.86)`. Accent: night = deep rose `#9B3A6A`, day = deep green `#2A7A56`. "Si" Great Vibes 110px · Cormorant italic tagline 32px · white rounded rect behind QR (300×300, r16) · QR 300×300 · `si-lens.me` Inter 500 36px · `© year` stone.
- **QR library:** `qrcodejs` from cdnjs. Renders to DOM canvas via `new QRCode(holder, opts)` then `drawImage` after 300ms timeout.
- **Drawing order:** photo bg async → overlay → QR (CDN + 300ms) → white QR backing → fonts.ready → text last.
- **Download:** saves `si-lens-card.png` at 700×1050.
- **Contact strip pills:** `white-space: nowrap`, `flex-wrap: nowrap`, `clamp(…, cqw, …)` scaling — always single row.
- **Cat split seam (s88):** `.n-cat-a` / `.n-cat-b` are the same image clipped so each cat blinks separately. They must meet exactly at the empty gap between the cats (x = 57.8%: `inset(0 42.2% 0 0)` / `inset(0 0 0 57.8%)`). The old 48%/50% split overlapped by 2%, which doubled the lamp-on glow into a bright vertical stripe beside the big cat.
- **Floor lamp (s88, 2026-10-16):** replaced the drawn SVG lamp with the user's photo (`~/Downloads/Elegant Warm-Glow Glass Floor Lamp.png`) → `public/images/lamp/lamp-on.jpg` (crop x190–834, 520×1211, edges feathered) and `lamp-off.jpg` (same photo, halo removed via high-pass + levels, slightly desaturated). `.n-lamp` uses `mix-blend-mode: screen` so the black photo background vanishes on the black strip. Click → off image fades out, on image fades in with a 0.9s two-flicker keyframe (`n-lamp-flicker`), the original warm beams fade in 0.25s later. Beams SVG sits *after* the images inside `#nLamp` (otherwise the photo's black box hides them) and is positioned from the bulb (50% / 14.3% of the image) with `--lw` = old lamp width so the beam scale is unchanged.
- **Lamp brightness + floor line (s88):** lit photo gets `brightness(1.2) saturate(1.1)`; `.n-lamp::after` adds a soft warm radial halo at the bulb (fades in 0.2s after); beam gradient stops roughly doubled. Lamp stays at `bottom: 0`; the **cats are lowered** so their paws sit on the lamp's base line (`bottom: lampW*0.0385 − catW*0.156`, negative) — raising the lamp instead exposed a dark band under its photo box. `.n-strip` is `overflow: clip` (was `overflow-x`) so the cats' empty bottom margin doesn't add scroll.
- **Greeting rotation** is timer-driven (800ms fade, then swap) — it used `transitionend`, which background tabs can skip, leaving the greeting stuck invisible.
- **Room backdrop + flashlight (s88):** night strip background is the user's photo (`~/Downloads/Cozy Midnight Reading Nook.png` → `public/images/night-room.jpg`, 1024×1536, ~190KB). `.n-room` covers the strip from `top: 26%` (the clock) to the bottom — user didn't want the photo stretched over the whole strip (too much crop) — with a linear mask fading its top edge into the black. Two layers of the same image (`85% 0% / cover`): `.n-room-dark` `brightness(0.17)` (outlines only; `0.34` when the lamp is on) and `.n-room-lit` `brightness(1.3)` shown only inside a soft radial mask. The mask is **written by JS every frame** (eased follow + radius grow/shrink) — a CSS-variable-driven mask computed correctly but Chrome didn't repaint it. Mouse: follows pointer, shrinks away on leave; touch: lights at the finger, fades 1.4s after lift. Nothing is baked into the photo. Cats + lamp stay separate layers with their own clicks.
- **Search on every layout (s88):** six `[data-search="n|d"]` boxes, one visible per width — desktop strips (>900px, day `top:47%`, night under the clock); `.search-tablet` inside the left glass panel for 601–900px (strip hidden there); `.search-mobile` in the unlocked mobile panel (≤600px), both under the tagline rule. One script mounts all of them (shared Pagefind load). In-panel boxes (`.search-inline`) anchor results with CSS `position:absolute` under the bar — the glass `backdrop-filter` makes `position:fixed` resolve against the panel, which threw the list off to the side. Inputs are 16px in panels so iOS doesn't zoom on focus. Cats + lamp remain desktop/landscape-only (the strip).
- **Night search bar (s88, 2026-10-16):** `.n-search-wrap` sits *inside* `.n-clockwrap`, right under the clock (in flow, `margin-top: clamp(10px,2.5vh,28px)`) — not %-positioned like the day bar, because the night clock shifts once weather loads and a fixed % overlapped it on short screens. Brighter than first draft at the user's request: bar `rgba(212,203,232,0.20)` + border `0.45`, text `#F3EFFF`, placeholder `0.72`. `.n-clockwrap` z-index 6 so the results panel sits above cats (4) and lamp (3). One shared search script picks `d`/`n` ids and classes by `_isDay`. `#nStrip` no longer `aria-hidden` (it holds an input).
- **Contact links (s88, 2026-10-16):** LinkedIn · Email · Get QR code & share — Red Note (Xiaohongshu) removed from all four versions (desktop/mobile × day/night) at the user's request; don't add it back.

---

## Mobile Homepage (`#homeMobile`, ≤600px only)

Independent mobile-first section, never shown on desktop. JS sets `#homeMobile.day` class based on `_isDay`.

**Day/Night detection:**
- `_realHour = new Date().getHours()` — always real clock (never overridden by `?preview`)
- `_isDay = _hour >= 6 && _hour < 18` — controls layout; greetings/messages always use `_realHour`

**Lock screen (`.m-lock`):**
- `position: fixed; inset: 0; z-index: 100`
- Two `<img>`: `.m-bg-night` (`homepage-ferris-original.jpeg`) / `.m-bg-day` (`homepage-morning.jpg`, `object-position: center 30%`)
- Clock `id="mTime"`: Barlow Condensed 700, `font-size: 36vw`
  - Night gradient: `rgba(230,235,252,0.95) → rgba(215,200,238,0.88)` (purple)
  - Day gradient: `rgba(165,174,184,0.95) → rgba(110,123,129,0.88) → rgba(48,64,60,0.82)` 175deg
- Status bar / date / weather: night = `rgba(255,255,255,0.92)` · day = `#6E7B81`
- **Dismiss:** swipe up ≥40px or scroll wheel → `.dismissed` → slides up. `/#open` hash skips lock + notice directly to menu.
- **Safari fix (s72):** `.m-lock-bg img` display rule needed scoping to `.m-lock-bg .m-bg-night/.m-bg-day`. `inset: -10px` bleeds image past container. `viewport-fit=cover` in BaseLayout viewport meta.

**Message card (`.m-msg-card`):**
- Night: purple tint `rgba(196,168,224,0.18)` · Day: sage tint `rgba(168,212,184,0.18)`
- Structure: `[Opening] [Weather sentence] [Closing]`
- Opening from `_realHour`: Good morning (<12) / Good afternoon (12–18) / Good evening (18+)
- Closing: day = "Hope you enjoy this little corner of the internet!" · night = "Thanks for stopping by. Make yourself comfortable!"
- Shared `_pickWeatherMsg(temp, code, wind, city, pool, isDay)` function

**Weather condition pools:**
- `_WM_NIGHT` (9): clear / warm / cool / cold / rain / snow / fog / wind / thunderstorm
- `_WM_DAY` (9): sunny / warm(≥26°) / mild(20–26°) / cool(<20°) / rain / thunderstorm / fog / snow / wind
- Day priority: thunderstorm > snow > rain > fog > wind(>30) > temp≥26→warm > clear(WMO 0/1)→sunny > temp≥20→mild > cool

**Screen-size notice (`.m-notice`):**
- Night: dark purple overlay + purple card border/button
- Day: dark green overlay `rgba(8,22,14,0.90)` + sage green `#A8D4B8` card

**Content sections:**
- `.m-open-night` — `homepage-ferris-original.jpeg` blurred + `rgba(15,8,38,0.48)` overlay + `n-glass m-glass`; QR button `id="mNightCardBtn"`
- `.m-open-day` — `homepage-morning.jpg` blurred + `rgba(8,28,15,0.48)` overlay + `d-glass m-glass`; QR button `id="mDayCardBtn"`
- Both QR buttons bound to `_openModal` alongside desktop `nCardBtn`/`dCardBtn`
