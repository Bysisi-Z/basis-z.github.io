# Claude Handoff — si-lens.me

> Last updated: 2026-06-27 (session 83)
> Read alongside: `CONTEXT.md` + `git log --oneline -20` + `git status`

---

## Current State

- **Current branch:** `main` (only branch; no feature branches)
- **Last deployed commit:** `3e745f3` — fix: rename cookie jauth→jauthv2 to avoid stale session-token collision on iPad
- **Actual deploy platform:** Cloudflare Pages (canonical). Auto-deploys on push to `main`.
- **Is GitHub Pages still enabled? ⚠️ YES — and it's a security bypass.**
  - `.github/workflows/deploy.yml` runs on every push to `main` and deploys the static build to GitHub Pages at `https://bysisi-z.github.io/`.
  - GitHub Pages serves the raw static output **without** running Cloudflare Pages Functions.
  - This means `/career`, `/explorer`, and `/cv` are accessible **without any password** at `bysisi-z.github.io/career` etc.
  - **Action required:** disable GitHub Pages in repo Settings → Pages, and delete or disable `.github/workflows/deploy.yml`.
- **Is Cloudflare Pages the canonical deploy?** Yes. `si-lens.me` points to Cloudflare Pages. All middleware/auth runs there.

---

## Recent Work

- **What changed recently:**
  - Sessions 75–82: OGN stock post-mortem article (`/organon-stock-analysis.html`) heavily expanded — peer comparison table, financial table (FCF/dividends), "Further Reading" sidebar, article restructure (Topics 01 & 02), "Parent stake retained" row, new conclusion paragraph.
  - Session 73: Explorer music module replaced shimmer with "A Life in Sound" narrative + instrument PNGs + pipa photos.
  - Session 73: Password gate extended to `/explorer` and `/cv` (was only `/career`). Cookie `Path=/` (not just `/career`).
  - Session 72: WeChat QR section, Journey CTAs, passcode management scripts.
  - iPad auth: several commits fixing Safari cookie behavior (multipart form-data, 200+JS redirect, cookie rename to `jauthv2`).

- **Files touched (recent sessions):**
  - `public/organon-stock-analysis.html` — primary work surface
  - `functions/_middleware.js` — auth logic
  - `src/pages/explorer.astro` — music module
  - `src/pages/career/index.astro` — CTAs, WeChat
  - `scripts/add-password.js`, `scripts/lockdown.js`

- **Known unfinished items (from CONTEXT.md §6):**
  - Explorer bento modules: Books, Food, Outdoor Stats — still shimmer placeholders
  - Industry Analysis: Series 02 has no content; OGN Sun Pharma draft at `~/SunPharma_OGN_acquisition.html`
  - Writing: only one essay live (`/writing/put-on-the-tie`); no `[slug].astro` template yet
  - Journey detail pages: timeline cards link to `#`
  - MEPS deep-dive pages: INSCOV23, DLAYCA42, TOTSLF23 are stubs in `meps-reports.html`
  - A Collection of Rabbit Holes: under-construction state only
  - `?dbg=1` debug endpoint still active (see Security section)

---

## Security / Privacy

- **Which routes must be protected:** `/career`, `/explorer`, `/cv` — any page with photos of the author or other real people.
- **Which image/assets are sensitive:** ⚠️ The following files live in `public/images/` and are served directly by Cloudflare Pages **without auth** — anyone who knows the URL can access them, even if the page is protected:
  - `explorer-profile.jpg` — mountain hut photo featuring the author
  - `pipa-luthier.jpg` — author with pipa luthier
  - `pipa-teacher.jpg` — author with pipa teacher
  - `cat-first.jpg`, `cat-second.jpg` — personal cat photos (on `/career`)
  - `profile.jpg` — CV headshot
  - `wechat-qr.jpg` — WeChat QR code
  - **Current mitigation:** security by obscurity (URLs are not linked from public pages). True fix would require serving these through an auth-aware proxy or using Cloudflare Access for the `/images/` path. Decide with user before acting.
- **How passcodes are created/revoked:**
  - Add: `node scripts/add-password.js <code> <days>` (writes to Cloudflare KV)
  - Emergency revoke all: `node scripts/lockdown.js` (wipes all `pw:*` keys)
  - Env vars required: `CLOUDFLARE_API_TOKEN`, `CF_ACCOUNT_ID`, `KV_NAMESPACE_ID` (set in `~/.zshrc`)
  - KV namespace ID: `253d0a90d7084d3e8794f636b02f7719`
- **Cloudflare KV binding name:** `JOURNEY_AUTH` (declared in Cloudflare dashboard; referenced as `env.JOURNEY_AUTH` in middleware)
- **Debug endpoints still active:** ⚠️ `?dbg=1` on any protected route dumps cookie state in plain text (`cookie: ..., pw: ..., kv: FOUND/NULL`). Intended for iPad debugging; never removed. Safe to delete from `functions/_middleware.js` before next production push.

---

## Deployment

- **Cloudflare project name:** Not stored in repo (no `wrangler.toml`). Check Cloudflare dashboard under Workers & Pages. The project connects to `Bysisi-Z/basis-z.github.io` on GitHub.
- **Build command:** `npm run build` (runs `astro build`)
- **Output dir:** `dist`
- **Production domain:** `si-lens.me`
- **Preview domain:** `basis-z-github-io.pages.dev` (Cloudflare Pages default; also works as canonical when custom domain is unavailable)
- **Env vars / bindings required in Cloudflare dashboard:**
  - KV namespace binding: `JOURNEY_AUTH` → namespace ID `253d0a90d7084d3e8794f636b02f7719`
  - No other env vars needed for build (the KV binding is runtime-only)
- **Local dev note:** `npm run dev` (localhost:4321) does NOT run the middleware. Auth is Cloudflare-only; test auth changes by pushing to a preview branch.

---

## Content Architecture

- **Public sections (no auth):**
  - `/` — Homepage (day/night modes)
  - `/research` — Decoding hub + NSFG/MEPS explorers + data pages
  - `/photography` — Nature Never Judges (index + Stoos + Oeschinensee + Lucerne)
  - `/writing` — Wandering (index + Put on the Tie essay)
  - `/moments` — Moments (16 cards)
  - `/reading` — A Collection of Rabbit Holes (under construction)
  - `/trails` — Interactive hiking map
  - All `public/*.html` analysis pages (NSFG + MEPS + Organon)

- **Private sections (Cloudflare Pages middleware, cookie `jauthv2`):**
  - `/career` — Journey timeline
  - `/explorer` — World Explorer profile
  - `/cv` — CV / Professional profile

- **Draft / placeholder sections:**
  - `/blog/` — `src/pages/blog/index.astro` exists but is not in the nav; appears to be an old page, check before touching
  - `/about` — redirects to `/career` (301); orphan redirect page

- **Public HTML files in `public/` that are intentional:**
  - All NSFG analysis pages: `pill/condom/depo/ec/implant/iud/patch/ring/vasectomy/withdrawal-analysis.html`, `method-comparison.html`, `nsfg-method-trends.html`, `nsfg-method-age.html`, `nsfg-reports.html`
  - All MEPS pages: `meps-hrt-method.html`, `meps-pcsk9-demo.html`, `meps-reports.html`
  - `organon-stock-analysis.html` — OGN industry case study

- **Files that are old experiments and can be safely deleted:**
  - `public/color-preview.html` — design color tool
  - `public/font-preview.html` — design font tool
  - `public/compare-a.html`, `public/compare-b.html` — color scheme comparison
  - `public/opt-a.html`, `public/opt-b.html`, `public/opt-c.html`, `public/opt-d.html` — layout optimization tests
  - `public/preview-v1.html`, `public/preview-v2.html`, `public/preview-v3.html`, `public/preview-v4.html` — homepage design previews
  - `public/images/homepage-ferris-night.png`, `homepage-ferris-night2.png`, `homepage-ferris-wide.png`, `homepage-ferris.jpeg` — older homepage photo variants (only `homepage-ferris-original.jpeg` is used in production)

---

## Known Bugs

- **Mobile issues:** None current. iPad Safari cookie bug was resolved (sessions 72–83): multipart form, 200+JS redirect, cookie rename to `jauthv2`.
- **iPad/Safari issues:** Resolved as above. Monitor if auth breaks again after any middleware changes.
- **Broken links:**
  - `/career` timeline cards link to `#` (detail pages not built yet)
  - Explorer bento modules (Books, Food, Outdoor) show shimmer — not broken but empty
- **Performance issues:** `nsfg1719_age_counts.json` is 1.3 MB. Race condition on load was fixed (re-render after fetch completes).
- **SEO/search issues:** Pagefind full-site search is integrated (astro-pagefind). Protected pages (`/career`, `/explorer`, `/cv`) are indexed in the static build but inaccessible without auth — they will appear in search results but clicking will hit the password gate. This is acceptable behavior.
- **Debug endpoint:** `?dbg=1` on protected routes exposes cookie internals. Remove before any public sharing of the debug URL.
- **GitHub Pages bypass:** Described under Security above. High priority to fix.

---

## Design Rules

- **Current color system (all inner pages):**
  | Token | Hex | Usage |
  |---|---|---|
  | `--bg` | `#FAFAF8` | Page background (warm white) |
  | `--ink` | `#1A1A1A` | Primary text |
  | `--rose` / `--accent` | `#A97EC2` | Main accent (warm pink-purple H≈288°) |
  | `--rose-light` | `#e8c4d4` | Light tint (cards, highlights) |
  | `--stone` | `#847B7B` | Secondary text, metadata |
  | `--rule` | `#E2DEDB` | Borders, dividers only — **never as text color** |

  **Homepage** uses its own inline dual palette (night = purple, day = sage green) — not affected by global tokens.

- **Typography rules:**
  - Display/hero: Cormorant Garamond 300 italic
  - Body (articles): Cormorant Garamond 300–400
  - UI/labels: Inter 200–400 (600 for section labels)
  - Homepage logo: Great Vibes 400 italic
  - Writing essays (Chinese): Ma Shan Zheng (楷书)
  - `var(--rule)` NEVER used as text color — minimum is `var(--stone)`
  - Readable content ≥ `clamp(16px, 1.6vw, 18px)` in `var(--ink)`

- **Homepage day/night rules:**
  - 06:00–18:00 = `#homeDay` shown; 18:00–06:00 = `#homeNight`
  - `?preview=day` / `?preview=night` override for development
  - ≤600px: both hidden, `#homeMobile` shown instead
  - Two completely independent HTML sections — no shared CSS overrides between them

- **Inner page rules:**
  - Max-width: 960px standard / 1040px photography / 1600px explorers
  - Responsive padding: `clamp(20px, 6vw, 80px)`
  - Card border-radius: 14px
  - Portrait photos → split hero (42% photo | 58% text)
  - Landscape photos → full-width hero with text overlay

- **Things tried and abandoned:**
  - Purple "Soft Dusk" scheme (`#A97EC2` bg `#F6F3FC`) for inner pages — tried sessions 45–55, reverted session 56 (too many hardcoded details)
  - Multi-module color scheme (each section own color) — abandoned same session
  - CSS columns for Moments page — abandoned (Safari card stacking bug), replaced with flex columns
  - `jauth` cookie name — renamed to `jauthv2` to clear stale Safari cookies

---

## Open Decisions

- **What should I decide with the user later:**
  1. **GitHub Pages:** disable it now? (Recommend yes — it's a real bypass)
  2. **Private images:** accept security-by-obscurity for `/images/explorer-profile.jpg` etc., or add auth on image paths?
  3. **Organon case study:** stay as `public/organon-stock-analysis.html` in main site, or move to `public/research/` subdirectory as the industry section grows?
  4. **`?dbg=1`:** remove from middleware now? (low risk to remove, just cleanup)
  5. **Old preview files:** delete `color-preview.html`, `font-preview.html`, `compare-*.html`, `opt-*.html`, `preview-v*.html`?
  6. **Explorer bento:** when to fill Books, Food, Outdoor Stats modules?
  7. **Writing `[slug].astro`:** build a shared template, or keep essays as individual `.astro` files?

- **What should not be changed without asking:**
  - Middleware cookie name `jauthv2` — was changed to fix Safari; changing again would break active sessions
  - KV namespace ID — hardcoded in scripts; must match Cloudflare dashboard
  - `public/` HTML file locations — linked from nav badges, `/research/` index, and `meps-reports.html`; moving them breaks links
  - Homepage `index.astro` inline CSS — the day/night dual-palette approach is intentional and complex; do not refactor into global.css without full review
  - `functions/_middleware.js` — auth logic; test any change by pushing to a separate Cloudflare preview deployment before merging to `main`

---

## Answers to Key Questions

### 1. GitHub Pages 是否可以关闭？
**Yes — close it immediately.** `.github/workflows/deploy.yml` deploys the static build to GitHub Pages on every push. GitHub Pages does not run `functions/_middleware.js`, so `/career`, `/explorer`, and `/cv` are fully accessible without a password at `https://bysisi-z.github.io/`. This is a real privacy bypass, not theoretical. To fix: (a) go to repo Settings → Pages → disable GitHub Pages, (b) delete or disable `.github/workflows/deploy.yml`.

### 2. 哪些照片/页面是真私密？
Pages `/career`, `/explorer`, `/cv` are protected by the Cloudflare middleware. However, the image **files** themselves live in `public/images/` and are served directly without auth. The following are accessible to anyone with the direct URL:
- `explorer-profile.jpg`, `pipa-luthier.jpg`, `pipa-teacher.jpg` (people photos on `/explorer`)
- `cat-first.jpg`, `cat-second.jpg` (on `/career`)
- `profile.jpg` (CV headshot)
- `wechat-qr.jpg` (WeChat QR)

Current protection is **security by obscurity** — URLs aren't exposed on any public page. To truly protect them, image paths would also need auth (e.g., adding `/images/private/*` to the middleware's `isProtected` list, or Cloudflare Access). Decide with user before acting.

### 3. public/preview-*、opt-*、compare-* 是否还能删？
**Yes, safe to delete.** These are design experiment files from earlier sessions, not referenced by any production page or nav link:
- `color-preview.html`, `font-preview.html`
- `compare-a.html`, `compare-b.html`
- `opt-a.html`, `opt-b.html`, `opt-c.html`, `opt-d.html`
- `preview-v1.html`, `preview-v2.html`, `preview-v3.html`, `preview-v4.html`

Confirm with user before deleting, then do a single cleanup commit.

### 4. Cloudflare Pages 的真实配置是什么？
No `wrangler.toml` in the repo — everything is in the Cloudflare dashboard. From code:
- **Build command:** `npm run build`
- **Output dir:** `dist`
- **KV binding:** `JOURNEY_AUTH` → namespace `253d0a90d7084d3e8794f636b02f7719`
- **Production domain:** `si-lens.me`
- **Preview domain:** `basis-z-github-io.pages.dev`
- **Env vars (local, in `~/.zshrc`):** `CLOUDFLARE_API_TOKEN`, `CF_ACCOUNT_ID`, `KV_NAMESPACE_ID`
- **Preview deploys:** Cloudflare Pages generates preview URLs for each commit by default. Check dashboard to confirm whether preview deploys are on — if so, every commit gets a public preview URL, which may also bypass GitHub Pages concerns (but Cloudflare previews DO run middleware).

### 5. Organon case study — 主站 public/ 还是单独项目目录？
**Current:** `public/organon-stock-analysis.html` in the main site, served at `si-lens.me/organon-stock-analysis.html`. This is intentional — it's a standalone data-heavy HTML page that's part of the Research section.

**Recommendation:** Keep in `public/` for now. If the Industry Analysis section grows to 5+ articles, consider organizing as `public/research/organon-stock-analysis.html` (or similar). A completely separate Cloudflare Pages project would only make sense if it needs different auth, custom domain, or team access. No action needed now — decide when Series 02 is ready.
