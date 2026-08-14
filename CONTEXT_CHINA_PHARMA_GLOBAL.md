# Industry Analysis — China Pharma Globalization ("出海") — Planning Notes

> Status: **framework discussion stage, not yet writing** (started 2026-08-14)
> This is a new standalone Industry Analysis piece, parallel to `organon-stock-analysis.html` —
> NOT part of the `industry.astro` "Series" structure (user doesn't use that framing; it just needs
> to land as another independent article on `/research/industry`, same tier as the Organon post).
> Format decision (confirmed): OGN-style — standalone bilingual HTML in `public/`, interactive
> dashboard elements, Chinese drafted first then English synced (see `feedback-ogn-bilingual-workflow`
> memory — same rule should apply here once drafting starts).

**How to resume:** read this whole file before continuing the discussion. Do not start drafting HTML
until the user explicitly says the framework is settled — as of this writing they've twice said "we're
not at the writing stage yet."

---

## 1. Where the discussion is right now

Two rounds of research (Chinese-language sources, then Western/international sources) produced a raw
inventory of threads (§3 below). The user then pushed back on the headline "$137.7B deal value" framing
as low-resolution, and reframed the analytical core around two things (§4, §5) that are now the most
promising backbone for the eventual article:

1. **Deal-value decomposition** — headline deal value ≠ capital actually received ≠ realized economic
   value. Needs a 10–20 deal comparison table with real structural variables, not just totals.
2. **"Financing-driven" as a core explanatory variable** — is out-licensing a mature-capability choice
   or a capital-market-failure workaround? Proposed as a testable (not binary) hypothesis.

Next decision pending from user: whether to finalize/trim the candidate deal list (§6) before doing the
heavy per-company financial digging, or start deep-diving 2–3 companies they already prefer.

---

## 2. Two framing options surfaced (not yet chosen)

- **A — Mode evolution timeline**: License-out → NewCo → Co-Co → self-build, chronological/logical
  progression, each mode gets 1–2 representative cases, closes on the 2027 inflection-year forecast.
- **B — Narrative clash**: Chinese domestic "victory narrative" (跟随者→全球贡献者) vs. Western split
  narrative (commercial analysts bullish on efficiency arbitrage / security hawks framing it as a
  strategic threat) — closes on which prediction is more likely to hold. Closer to the site's existing
  analytical DNA (same "don't presume a side, dismantle each side's assumptions" method as the Organon
  piece).
- User's structural-decomposition pivot (§4/§5) may end up subsuming both — i.e., the deal-economics
  table becomes the *evidence*, and "financing squeeze vs. capability maturity" becomes the *thesis*,
  with the East/West narrative split as color/context rather than the spine. Not decided.

---

## 3. Raw research inventory (by thread)

### 3.1 Well-researched

**A. Out-licensing model typology (5 mechanisms)**
| Model | Mechanism | Case |
|---|---|---|
| License-out (clean sale) | Upfront + milestones + royalty, ex-China rights fully transferred | 百利天恒×BMS (BL-B01D1, Dec 2023, $800M upfront / up to $8.4B total — "China's first successfully internationalized bispecific ADC") |
| License-out (clean sale) | Same | 康方生物×Akeso×Summit Therapeutics (ivonescimab, signed Dec 2022 / closed Jan 2023, $500M upfront / up to $4.5B; China approval May 2024; US FDA BLA under review, PDUFA 2026-11-14) |
| NewCo | Asset licensed to a newly-formed offshore co funded by PE/VC, in exchange for equity — keeps upside without holding the asset directly | 恒瑞医药×Hercules→Kailera Therapeutics (GLP-1 assets HRS-7535/HRS-9531/HRS-4729, JV formed May 2024, $400M Series A Oct 2024, Nasdaq IPO April 2026 up 60%+ day one). 18+ private biotechs have used this model since early 2025, raising $2.3B+ collectively. Related: Candid Therapeutics acquired by UCB for $2B. |
| Co-Co (co-development + co-commercialization) | Not a clean sale — shared cost, shared profit, retained decision rights in some territories | 信达生物×Pfizer (May 2026, 12 projects / $10.5B total, $650M upfront; mixed structure — 4 projects joint global dev + joint US/EU commercialization + profit share w/ Greater China retained, 4 projects Pfizer ex-China exclusive w/ most costs, 4 projects Pfizer global exclusive all costs — internally spans the whole spectrum, high sample value); 恒瑞医药×BMS (May 2026, 13 preclinical-stage projects / $15.2B total, $600M upfront + $175M×2 anniversary payments — notable: ALL projects preclinical, MNC paying for early discovery capability not de-risked assets) |
| Self-built overseas commercialization | Full autonomy, highest cost/longest timeline, no profit-share ceiling | 百济神州/BeiGene zanubrutinib (Brukinsa) — self-built US/EU teams, Q1 2025 quarterly revenue $792M, now #1 BTK inhibitor by US new-patient-starts, "broke the assumption Chinese-origin drugs can't win in Western markets" |
| Early co-commercialization precedent | Older (2017) precedent, useful as a 10-year lookback data point | 传奇生物×Janssen/J&J (Carvykti, cilta-cel, signed 2017, FDA approved Feb 2022) — Legend manufactures for global ex-Greater-China markets, Janssen leads commercialization, cost/profit split ~50/50, transfer price = cost + markup. Only case with enough history to ask "in hindsight, was retaining rights worth it?" |

**B. Scale & trend data**
- Deal value: 2021 $13.9B → 2024 $51.9B (94 deals) → 2025 $137.7B (~157 deals, ~10x jump) → 2026 Q1 alone ~$60B (+73% YoY, nearly half of all 2025 in one quarter)
- 2026 average deal size ~$1.3B, +76% vs 2025 average, ~6x 2021 levels
- China = ~1/3 of all global licensing spend by value in 2025 (Goldman: ~half by value, 26% by deal count)
- Stage front-loading: Hengrui×BMS's 13 projects are ALL preclinical — MNCs now paying for early discovery capability, not just de-risked late-stage assets
- Field broadening: oncology (ADC/bispecifics) → metabolic/GLP-1 (largest single deal: CSPC×AstraZeneca, Jan–Feb 2026, $1.2B upfront / up to $18.5B total, 8 long-acting peptide programs) → autoimmune, rare disease
- US = largest buyer (27 deals, ~$429M... [likely $42.9B, verify]); AstraZeneca, Pfizer, BMS each committed $16B+ to China collaborations since start of 2025

**C. Risk / downside (domestic-source view)**
- Termination rate ~8.6% of ~3,500 outbound deals over the past decade (300+ terminated), and both numerator and denominator are growing
- Upfront payments are typically a small fraction of headline totals; few companies ever collect meaningful milestone payments
- Case: 宜明昂科×Instil Bio — deal terminated, company only ever collected $35M (1.7% of total deal value)
- Also cited as having had terminated collaborations: 诺诚健华 (InnoCare), 和铂医药 (Harbour BioMed) — **specifics not yet verified, need follow-up**
- Still unverified/unresearched as of this writing: 云顶新耀, 基石药业 — flagged as possible termination cases but not confirmed

**D. Domestic industry narrative**
- Official/mainstream framing: "从跟随者到全球创新贡献者" (from follower to global innovation contributor)
- 2027 flagged by analysts as the inflection year — shift from "R&D-licensing monetization" to "global commercial sales realization"; market focus expected to shift from BD-announcement-driven valuation to actual overseas revenue

**E. Western commercial-analyst perspective**
- **Goldman Sachs**: China contributes ~33% of global pharma innovation but Chinese biotech market cap is only ~14–15% of US peers — explicit "valuation mismatch" thesis (source: goldmansachs.com/insights, also covered via Longbridge)
- **Morgan Stanley**: "China Biotech Boom: Generics Producer to Innovation Leader" — capability-transition framing
- **Financial Times** (via Forbion repost): coined "super me-too" — Chinese assets aren't first-in-class breakthroughs, they're engineered improvements on known targets, but win on **trial speed and cost**, "reshaping global dealmaking." Forbion partner Wouter Joustra: China's rise is "based on a new standard of R&D productivity — time and cost." Case cited: Aiolos (Forbion-backed) later acquired by GSK for up to $1.4B.
- **PitchBook (via BioPharma Dive)**: China's early-stage drug-development edge "likely to persist" for at least several years
- **Nature Biotechnology**: ~3/4 of MNC-licensed China assets in 2024 were preclinical/Phase 1 — signals rising trust in Chinese clinical data

**F. Western national-security / policy-hawk perspective** (near-absent from Chinese coverage — a genuine
asymmetry worth noting in the piece)
- **CEPA** (think tank, "The West Must Confront China's Biotech Offensive"): frames out-licensing entirely
  as national strategy, not commerce — cites 军民融合 (military-civil fusion), the 十五五规划 (15th Five-Year
  Plan) listing biomanufacturing alongside quantum computing as a strategic priority, and argues Chinese
  commercial contracts can't override state expropriation power under China's National Defense Mobilization
  Law. Also cites specific IP-dispute incidents (a GSK scientist case, an Oxford Nanopore–BGI dispute) and
  "illegal biolab" incidents (Reedley CA, Las Vegas pathogen discoveries) as evidence of risk.
- **STAT News** (op-ed, May 2026, author co-chairs the Council on Foreign Relations' China Strategy
  Initiative): argues US pharma executives are "destroying their own industry" chasing short-term
  licensing revenue. Cites MNC spend on China-licensed assets: ~$9B (2020) → $137B+ (2025); ~60% (some
  estimates 80–90%) of generic drug active ingredients now sourced from China.
- **BIOSECURE Act**: signed into law Dec 2025 (via NDAA FY2026). 16 Chinese firms flagged as immediately
  at risk of being cut off from the US biotech ecosystem. **June 2026: WuXi AppTec (药明康德) added to the
  US DoD's "Chinese military companies" list** — a specific, recent, potentially game-changing event (WuXi
  is a CRDMO/services player, distinct from asset-licensing biotechs — see open thread G7 below on why
  this distinction matters).

**G. Forecast anchor**
- 2027 is repeatedly named (both domestic and Western sources) as the year the "BD-announcement valuation"
  story either gets validated or falsified by actual overseas sales revenue from the earliest-licensed
  assets reaching market.

### 3.2 Flagged but not yet researched

1. **Domestic financing-squeeze thesis** — now promoted to a core explanatory variable, see §5
2. **MNC patent-cliff specifics** — which blockbusters, which years, how large the revenue gap — currently only cited as a vague "patent cliff pressure" claim, no hard numbers gathered yet
3. **China regulatory supply-side reform** — NMPA reform, ICH accession, faster trial approvals — the enabling condition on the China side, not yet researched
4. **Historical analogy** — Japan's pharma outbound wave in the 1980s–90s, or Israel/India generics-export
   playbooks, as a reference frame for "where does this model eventually land"
5. **Deep case post-mortem of a terminated deal** — e.g. 宜明昂科×Instil Bio — reconstructing which side's
   assumptions broke and by how much (would mirror the Organon post-mortem method)
6. **Deal-structure "tricks"** — systematic breakdown of upfront vs. near-term milestone vs. far-out sales
   milestone vs. royalty within headline totals (this is now formalized in §4 below, no longer just a flag)
7. **CRDMO/services-export vs. drug-asset-export are different dimensions** — WuXi AppTec sells *services*
   (manufacturing/development capacity), not a drug asset; this gets conflated with license-out deals in
   media coverage but is structurally unrelated. Framework should explicitly separate these before using
   WuXi-DoD-blacklist as evidence about the licensing trend.

---

## 4. Deal-value decomposition framework (user's framing, 2026-08-14)

Headline "$137.7B" type figures conflate:
- Upfront payment
- Near-term development/regulatory milestones
- Far-out sales milestones (the largest share of most headline totals, and the least likely to ever be paid)
- Tiered sales royalties
- Equity investment components
- R&D cost-sharing obligations
- "Maximum scenario" payments that may never trigger

**Core distinction to hold onto**: Headline deal value ≠ capital the Chinese company actually receives ≠
economic value ultimately realized. An "$8.4B deal, $800M upfront" is not inherently a red flag — deep
back-loading toward unlikely milestones is the *standard* risk allocation structure in pharma licensing
generally, this is not unique to China deals. **The real question is (a) whether media/markets are treating
the max headline figure as if it were a realized/certain value, and (b) whether Chinese companies are
trading away long-term upside too cheaply because they need the near-term cash.**

**Per-deal variables to extract for the comparison table** (target: 10–20 deals):
- Upfront / total deal value (ratio)
- Upfront / cumulative historical R&D spend on that asset (i.e., did the upfront even cover sunk cost)
- Does the Chinese company retain any ongoing R&D cost obligation post-deal?
- Does the Chinese company retain Greater-China commercial rights?
- Does the Chinese company get an overseas profit share (vs. pure royalty)?
- Does the Chinese company retain any co-decision rights (vs. ceding full control)?
- Did the asset actually advance to the next clinical stage post-deal (a real signal of whether the buyer's
  confidence was genuine, separate from the deal's PR value)?

---

## 5. "Financing-driven" as a core explanatory variable (user's framing, 2026-08-14)

Proposed sharp question for the piece (framed as a hypothesis to test, explicitly **not** as a binary):

> Is Chinese pharma's globalization a *proactive global allocation* by a maturing R&D capability, or a
> *passive financing substitute* for a broken domestic capital market?

User's own caution: avoid false binary. More likely reality — three forces converging in the same window:
1. Chinese R&D supply-side capability has genuinely improved
2. Domestic financing/valuation contraction (HKEX 18A crash, primary market drought) is forcing companies
   to find external cash
3. MNC patent-cliff pressure is independently creating overseas demand

...and the deal boom is what happens when all three coincide, not proof that any single one is "the" cause.

**Observable variables to test this (per company, at time of signing):**
- Cash on balance sheet + cash runway at signing
- Financing history in the 12–24 months before/after the deal (follow-on raises, down-rounds, etc.)
- HKEX 18A sector-wide market cap / refinancing volume trend 2021–2025 (macro backdrop)
- Whether upfront proceeds were mainly used to sustain existing pipeline burn (vs. new investment)
- **Correlation to test**: do cash-tight companies systematically sell full/global rights (clean license-out),
  while cash-rich companies systematically retain more (NewCo equity, Co-Co profit share, self-build)?
  - Note: 石药 and 恒瑞 are both cash-rich, established large-caps — yet 石药 did a clean license-out
    (AstraZeneca GLP-1) while 恒瑞 has done both NewCo (Kailera) and Co-Co (BMS). If large well-capitalized
    companies are choosing different structures, that's evidence financing-squeeze isn't the whole story —
    useful built-in control comparison already in the candidate list.

**Data sources for this (not yet pulled):**
- HKEX/A-share filings (巨潮资讯 for A-share, HKEX disclosure for 18A) — cash & equivalents, operating cash
  flow, financing-activities cash flow around signing dates
- HKEX 18A sector market cap / trading volume / refinancing totals 2021–2025 (may need Wind/东方财富-type
  aggregator, not yet identified which source)

---

## 6. Candidate deal list for the decomposition table (draft, unconfirmed)

| Deal | Model | Data status |
|---|---|---|
| 百利天恒×BMS | License-out clean sale | Deal terms known; cash/financing history NOT yet pulled |
| 康方生物×Summit | License-out clean sale | Deal terms known; cash/financing history NOT yet pulled |
| 石药×阿斯利康 | License-out clean sale | Deal terms known; large established co — control case for financing-squeeze test; cash/financing NOT yet pulled |
| 恒瑞×Hercules/Kailera | NewCo | Deal terms known; large established co — control case; cash/financing NOT yet pulled |
| 恒瑞×BMS | Co-Co | Deal terms known; NOT yet pulled |
| 信达生物×Pfizer | Co-Co (internally mixed structure across its 12 projects) | Deal terms known — high sample value on its own; cash/financing NOT yet pulled |
| 传奇生物×Janssen (Carvykti) | Early co-commercialization, 2017 | Only case with a multi-year outcome to evaluate in hindsight; financials should be very obtainable (long commercial history) |
| 荣昌生物×AbbVie | Unclear — deal structure not yet confirmed | **Needs research from scratch** |
| 宜明昂科×Instil Bio | Terminated | Only the 1.7%-recovery headline fact known; full post-mortem not done |
| 诺诚健华 / 和铂医药 | Termination(s) referenced but unverified | **Needs research from scratch** |
| 云顶新耀 / 基石药业 | Possible termination cases, unconfirmed | **Needs research from scratch — may not even be relevant, verify before including** |

**Open question for user**: trim this list to a firmer ~10 before doing the heavy financial-statement
digging, or proceed to fill in the unresearched rows first and decide the final cut afterward? (Asked
2026-08-14, awaiting answer — check chat before assuming either path.)

---

## 7. Key source URLs (for citation when drafting)

- STAT News (dependency op-ed): https://www.statnews.com/2026/05/12/biotech-pharmaceutical-industry-china-leaders-destroying-industry/
- CEPA ("biotech offensive"): https://cepa.org/article/the-west-must-confront-chinas-biotech-offensive/
- FT via Forbion repost ("super me-too"): https://forbion.com/news-insights/news/financial-times-rapid-trials-prompt-deals-rush-for-chinese-super-me-too-drugs/
- Goldman Sachs (valuation-mismatch thesis): https://www.goldmansachs.com/insights/articles/china-is-increasing-its-share-of-global-drug-development
- Morgan Stanley: https://www.morganstanley.com/insights/articles/china-biotech-boom-generics-to-innovators
- Nature Biotechnology (2024 deal analysis): https://www.nature.com/articles/d41573-025-00068-0
- Nature Biotechnology (2025 deal trends): https://www.nature.com/articles/d43747-025-00113-2
- BioPharma Dive (PitchBook, China's edge "likely to persist"): https://www.biopharmadive.com/news/china-biotech-drug-licensing-trends-pitchbook-cell-gene-therapy/810478/
- BioPharma Dive (deal tracker): https://www.biopharmadive.com/news/china-biotech-drug-licensing-deals-pipeline/758283/
- PharmaSource (2025/2026 record figures): https://pharmasource.global/content/china-biopharma-out-licensing-surges-to-record-137-7b-in-2025-2026-on-pace-to-break-it-again/
- Morgan Lewis (NewCo model explainer): https://www.morganlewis.com/pubs/2024/10/understanding-the-newco-model-a-trending-approach-of-chinese-pharmaceutical-companies
- BioPharma Dive (Kailera launch): https://www.biopharmadive.com/news/kailera-obesity-launch-ron-renaud-hercules-hengrui/728536/
- Arnold & Porter (BIOSECURE Act legal advisory): https://www.arnoldporter.com/en/perspectives/advisories/2026/06/national-security-controls-and-the-life-sciences-sector
- BioSpace (BIOSECURE + IP risk): https://www.biospace.com/business/as-pharma-descends-on-china-for-deals-biosecure-act-raises-intellectual-property-risk
- Endpoints News (topic hub, BIOSECURE + China licensing): https://endpoints.news/topic-hub/china-biotech-licensing-deals-and-the-biosecure-act/
- 证券时报"热潮与暗礁" (risk-side domestic piece): https://www.stcn.com/article/detail/3930997.html
- 财联社 石药×阿斯利康: https://www.cls.cn/detail/2275309
- 腾讯新闻 恒瑞×BMS: https://news.qq.com/rain/a/20260512A06FTF00
- Summit/Akeso deal-closing press release (primary source): https://www.smmttx.com/wp-content/uploads/2023/10/2023_PR_0120_Deal-Closing-Announcement-_-FINAL.pdf
- J&J press release, Legend Biotech/Janssen Carvykti (primary source): https://www.jnj.com/media-center/press-releases/janssen-enters-worldwide-collaboration-and-license-agreement-with-chinese-company-legend-biotech-to-develop-investigational-car-t-anti-cancer-therapy

*(Not exhaustive — many more secondary Chinese-language links surfaced during search; re-search if a
specific figure needs re-verification rather than trusting numbers transcribed into this file.)*
