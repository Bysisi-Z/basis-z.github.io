# Codex Handoff — Wandering (`/writing`)

> Last updated: 2026-06-27

## Files Owned
- `CODEX_WRITING.md`
- `src/pages/writing/demo.astro`
- `src/pages/writing/index.astro`
- `src/pages/writing/put-on-the-tie.astro`

## Current State
- ✅ `/writing` index: live bilingual landing page with intro, coffee/audio interaction, and a hardcoded post list.
- 🟡 `/writing/demo`: exploratory replacement entrance page for Wandering; v3 is a short-essay index with English-only intro and small Chinese title markers.
- ✅ `/writing/put-on-the-tie`: live bilingual essay page with localStorage language preference, source card, and Chinese/English toggle.
- ⬜ Shared writing article template: not started. Current essay is a standalone `.astro` page.
- ⬜ Content collection / frontmatter pipeline: not started. Post metadata is hardcoded in `src/pages/writing/index.astro`.

## Design Decisions
- Current `/writing` module uses a bilingual-first presentation because the site frames Chinese as the author's thinking language and English as the translated working language.
- The index keeps both English and Chinese intro copy visible, while individual essays use a language switch. This matches the current content model: the section explains the bilingual approach, then each article lets the reader choose.
- Chinese essay typography uses `Ma Shan Zheng` loaded per page through the `head` slot rather than globally, keeping the font scoped to Wandering.
- Demo v1 was too clean and monotonous. Demo v2 incorrectly introduced "fragments", which does not match the user's content plan. Demo v3 treats everything as short essays and uses a literary index layout rather than a blog list or notes wall.
- Demo page intentionally does not include the coffee/audio invitation yet. The idea is to first settle the core information architecture and tone, then decide whether the invitation belongs as a small secondary element or should be retired.
- No public design rules have been changed in this handoff pass.

## Shared Resources Touched
- None.
- Per user rule, do not modify `BaseLayout.astro`, `Nav.astro`, `Footer.astro`, `global.css`, or other shared resources without confirming first.

## Content Schema
- Current schema is informal and hardcoded in `src/pages/writing/index.astro`:
- Demo schema in `src/pages/writing/demo.astro` is also hardcoded, with a slightly more editorial shape:
  - `slug`
  - `type`
  - `titleEn`
  - `titleZh`
  - `date`
  - `readTime`
  - `line`
- Existing production schema in `src/pages/writing/index.astro`:
  - `slug`: route segment under `/writing/`
  - `titleZh`: Chinese title
  - `titleEn`: English title
  - `date`: ISO date string
  - `month`, `day`, `year`: display date parts
  - `excerptZh`: Chinese excerpt
  - `excerptEn`: English excerpt
  - `readTime`: display read time
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
- High: Review `/writing/demo` with the user and decide whether it should replace the current `/writing` entry page.
- High: Decide whether Wandering should stay as standalone `.astro` essays or move to a shared article template/content collection before adding more essays.
- High: If more essays are added, remove hardcoded post metadata from `index.astro` and create a single source of truth.
- Medium: Review mobile typography for long Chinese paragraphs in `put-on-the-tie`.
- Medium: Add graceful handling for coffee audio play failures on browsers that block media playback.
- Low: Consider whether the language toggle should also exist on the `/writing` index.
- Low: Add previous/next essay navigation once there is more than one essay.

## Gotchas
- `src/pages/writing/index.astro` and `src/pages/writing/put-on-the-tie.astro` both load `Ma Shan Zheng` through the page head slot. Avoid moving this to global styles unless the whole site typography strategy changes.
- `put-on-the-tie` sets `html[data-lang]` before page render using an inline script to avoid language flash. Any refactor must preserve this behavior.
- The global stylesheet already contains `.lang-zh` / `.lang-en` rules, but `put-on-the-tie` uses local `.zh` / `.en` classes instead. Do not mix these without testing visibility behavior.
- Coffee audio uses `/audio/coffee-invite.m4a`; if the file is moved or replaced, update the index page.
- `CODEX_WRITING.md` must be updated before every Wandering-related commit.
