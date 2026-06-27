# Codex Handoff — Wandering (`/writing`)

> Last updated: 2026-06-27

## Files Owned
- `CODEX_WRITING.md`
- `src/pages/writing/index.astro`
- `src/pages/writing/put-on-the-tie.astro`

## Current State
- ✅ `/writing` index: live short-essay entrance page with English-only intro and small Chinese title markers.
- ✅ `/writing/put-on-the-tie`: live bilingual essay page with localStorage language preference, source card, and Chinese/English toggle.
- ⬜ Shared writing article template: not started. Current essay is a standalone `.astro` page.
- ⬜ Content collection / frontmatter pipeline: not started. Essay metadata is hardcoded in `src/pages/writing/index.astro`.

## Design Decisions
- Current `/writing` index uses an English-only entrance to avoid the previous bilingual-intro heaviness. Chinese remains as a small marker beside each essay title because the writing origin is still Chinese-first.
- Chinese essay typography uses `Ma Shan Zheng` loaded per page through the `head` slot rather than globally, keeping the font scoped to Wandering.
- The previous `/writing` page felt insufficiently refined and overly explanatory. The new entry treats everything as short essays and uses a literary index layout rather than a blog list, notes wall, or fragments system.
- The coffee/audio invitation from the old entrance page was removed from the live index. It can be reintroduced later only if it supports the essay collection tone rather than making the page feel cute or decorative.
- No public design rules have been changed in this handoff pass.

## Shared Resources Touched
- None.
- Per user rule, do not modify `BaseLayout.astro`, `Nav.astro`, `Footer.astro`, `global.css`, or other shared resources without confirming first.

## Content Schema
- Current schema is informal and hardcoded in `src/pages/writing/index.astro`:
  - `slug`
  - `titleEn`
  - `titleZh`
  - `date`
  - `readTime`
  - `deck`
- Current slug rule: lowercase kebab-case English slug, e.g. `put-on-the-tie`.
- Article pages currently define content directly in `.astro` markup, not frontmatter.
- Suggested future schema if converted to content files:
  - `slug`
  - `title.zh`
  - `title.en`
  - `date`
  - `excerpt.zh`
  - `excerpt.en`
  - `readTime.zh`
  - `readTime.en`
  - `sourceRefs` optional
  - `draft` boolean

## Pending
- High: Decide whether Wandering should stay as standalone `.astro` essays or move to a shared article template/content collection before adding more essays.
- High: If more essays are added, remove hardcoded post metadata from `index.astro` and create a single source of truth.
- Medium: Review mobile typography for long Chinese paragraphs in `put-on-the-tie`.
- Medium: Add graceful handling for coffee audio play failures on browsers that block media playback.
- Low: Add previous/next essay navigation once there is more than one essay.

## Gotchas
- `src/pages/writing/put-on-the-tie.astro` loads `Ma Shan Zheng` through the page head slot. The new `/writing` index does not load it because Chinese appears only as a small title marker.
- `put-on-the-tie` sets `html[data-lang]` before page render using an inline script to avoid language flash. Any refactor must preserve this behavior.
- The global stylesheet already contains `.lang-zh` / `.lang-en` rules, but `put-on-the-tie` uses local `.zh` / `.en` classes instead. Do not mix these without testing visibility behavior.
- Coffee audio `/audio/coffee-invite.m4a` is no longer used by the live `/writing` index, but the asset still exists and may be used elsewhere or revived later.
- `CODEX_WRITING.md` must be updated before every Wandering-related commit.
