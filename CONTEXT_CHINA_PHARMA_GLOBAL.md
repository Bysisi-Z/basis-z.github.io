# Industry Analysis — China Pharma Globalization ("出海") — Planning Notes

> Status: **framework discussion stage, not yet writing** (started 2026-08-14)
> This is a new standalone Industry Analysis piece, parallel to `organon-stock-analysis.html` —
> NOT part of the `industry.astro` "Series" structure (user doesn't use that framing; it just needs
> to land as another independent article on `/research/industry`, same tier as the Organon post).
> Format decision (confirmed): OGN-style — standalone bilingual HTML in `public/`, interactive
> dashboard elements, Chinese drafted first then English synced (see `feedback-ogn-bilingual-workflow`
> memory — same rule should apply here once drafting starts).
> **Writing convention (2026-08-14, round 9): whenever a molecule/drug is named in discussion or in this
> file, give both the Chinese and English/INN name together** — e.g. 曲妥珠单抗 (trastuzumab), 贝伐珠单抗
> (bevacizumab). Applies from this point forward in conversation and should carry into the actual bilingual
> article draft too.

## ⚠️ Scope pivot (2026-08-14, round 4) — READ THIS FIRST

**The plan changed.** The user decided the broad "China pharma globalization" article (everything in §1–§10
below) is too large to tackle first. **The first article to actually get written is now narrower: a
standalone biosimilar piece** (built from the §11 thread) — framed explicitly as a pilot/learning exercise
("试水和学习的切入点") to work out research methodology on a more tractable question before attempting the
full out-licensing/NewCo/Co-Co/self-build landscape.

- **Phase 1 (current target): the biosimilar article.** Scope, refined research question, and full working
  plan are now in the expanded §11 below — read §11 in full before doing anything else on this project.
- **Phase 2 (deferred, not active): the broad "出海" article.** Everything in §1–§10 stays valid background/
  research inventory and should NOT be discarded, but is not the immediate writing target. Resume it only
  after Phase 1 ships and the user explicitly says so. §11.8 explains why Phase 1 is expected to feed
  directly into Phase 2 (it establishes a science-risk-controlled baseline for "which barriers are really
  structural").
- Format decision for the biosimilar piece: not yet explicitly confirmed as OGN-style HTML vs. something
  lighter — the format note above was written for the broad piece; **confirm format with the user before
  drafting**, though OGN-style bilingual HTML in `public/` is the reasonable default given site precedent.

**How to resume:** read this whole file before continuing. Do not start drafting HTML until the user
explicitly says the framework is settled — as of this writing they've said multiple times "we're not at
the writing stage yet," though the biosimilar-first pivot is a sign they're getting close to it for §11.

**Why biosimilar first, in the user's own words**: biosimilar is a domain the user is personally more
familiar with than innovative-drug dealmaking, and it's a more tightly scoped topic — starting narrow here
and widening out to innovative-product globalization afterward is, in her words, "a reasonable step." This
means she can likely move faster and catch domain errors herself in §11 specifically — don't over-explain
basic biosimilar mechanics to her, but keep flagging sourcing/verification gaps as usual.

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

**Update 2026-08-14, round 2**: user pushed back on two more things, both now resolved/incorporated:
1. The termination-rate figure (§3.1.C / new §7) needed a baseline, a reason taxonomy, and a non-drug-
   failure contrast case — now has a real taxonomy (§7.2, 11 cases from the 2023 termination wave) and two
   strong contrast-case candidates (§7.3), but still lacks a clean global benchmark rate (§7.1, open gap).
2. The national-security thread (§3.1.F) had conflated three distinct legal mechanisms and gotten dates
   fuzzy — corrected in full in new §8, including a material update the original research missed: **the
   WuXi AppTec 1260H "Chinese military company" designation was preliminarily enjoined by a federal court
   on 2026-08-07** (i.e., a week before this writing) — the single most concrete enforcement action in this
   whole thread is currently blocked as likely unlawful. User also required that Chinese drug assets,
   CRO/CDMO services, and genetic/patient data be treated as three separate objects, since security actions
   land mostly on the latter two — formalized as a confirmed scope decision in new §9.

**Update 2026-08-14, round 3**: user proposed biosimilars as a control group (new §11) — since biosimilar
science/clinical risk is low and well-defined, if Chinese makers still can't self-commercialize in the US/EU
even here, that isolates a commercialization-infrastructure gap from a product-innovation gap. First-pass
research **mostly confirms** the "always license-out" hypothesis the user asked to test rather than assume:
even Henlius (China's most globally-approved biosimilar maker) licensed US/EU rights to Accord/Intas (India)
in 2021; Bio-Thera licensed to Biogen and Sandoz. But research also **corrected the user's own Korea
framing** — Samsung Bioepis is actually partner-reliant like the Chinese cases, only Celltrion is a true
self-build; and confirmed the Biocon/Viatris deal terms ($3B, closed Nov 2022) as a clean answer to "can
commercialization capability be bought via M&A" (yes, precedent exists, price is known). Full benchmark
table (§11.6) not yet built — only 2 of ~6 target companies researched so far.

**Update 2026-08-14, round 4 — major scope pivot, see the box at the top of this file.** User decided to
write the biosimilar thread (§11) as a standalone first article (a deliberate pilot/learning exercise),
deferring the broad "出海" piece (§1–§10) to a later Phase 2. Also sharpened §11 substantially: the research
question changed from "did China self-commercialize or not" to "was global commercialization even the
strategic goal for this specific product," with a six-role taxonomy (§11.9) and a capital-allocation-based
scoring table (§11.10) for sorting companies before comparing them to Korea/India benchmarks. Added a
Company×Product×Geography unit of analysis (§11.11), a deliberately diverse (not just biggest-companies)
first case batch (§11.12), and seven competing hypotheses held open simultaneously (§11.13) — including the
user's own favored candidate, the "invisible participation" hypothesis, that China's low apparent overseas
biosimilar "share" may just mean it's present upstream (R&D/manufacturing/supply) without holding the
visible brand/commercial layer, not that it's genuinely absent from the value chain.

**Update 2026-08-14, rounds 5-8**: extensive case-study depth added to §11 — a full China biosimilar player
map (§11.15), a capital-market-discount hypothesis refined and backed by China's 2021 VBP-driven valuation
collapse plus Celltrion/Samsung's disclosed capital scale (§11.16), a complete Henlius-privatization case
study with price history and a framing correction after user pushback (§11.17-11.18), the Henlius stock
rally's timeline and drivers including a correction to the earlier "harvest mode" R&D reading (§11.19), the
HLX43 within-company contrast case showing self-funded global trials for a differentiated asset vs. licensed-
out biosimilars (§11.20), Henlius's actual pipeline positioning and R&D funding mechanism — biosimilar
licensing cash functions as a direct funding pump for the innovative pipeline (§11.21), and Henlius's
three-tier position inside the Fosun group by revenue and stated strategic role (§11.22), and Henlius's
2009 joint-venture origin story with ex-Amgen founders (§11.23).

**Update 2026-08-14/15, rounds 9-12**: added a full second anchor case, **Bio-Thera Solutions (百奥泰)**, as
a deliberate structural *contrast* to Henlius rather than a second success story — solo-founder origin (no
JV/conglomerate parent), PE-style ownership, still loss-making, stock down ~48% from IPO vs. Henlius's rally,
and a dated EU GMP inspection failure (§11.24). Corrected Henlius's product-turnover attribution (trastuzumab
+ serplulimab drove 2023 profitability; pertuzumab and denosumab launched too late to count) and found
Organon holds *two* full Henlius biosimilar franchises, not one (§11.25). Zoomed out to the global biosimilar
landscape: commercial-stage market concentration and business-model archetypes (§11.26), then the
manufacturing/CDMO side (Lonza/WuXi Biologics/Samsung Biologics) plus a close look at *why* BIOSECURE-style
scrutiny targets China specifically and not Korea/Switzerland (closed 4-country "foreign adversary" list, not
a manufacturing-risk framework) — tested directly against the finding that Henlius's Organon-partnered
products are 100% Shanghai-manufactured and have already passed FDA/EU facility inspections (§11.27). Closed
with a look at EU-specific procurement risk — the Critical Medicines Act (still pre-application) and an
already-in-force medical-device China-exclusion precedent — as a real forward-looking exposure for these
single-sourced products (§11.28). Molecule names should now always be given Chinese + English/INN together
(see the writing-convention note at the top of this file).

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

**C. Risk / downside (domestic-source view) — ⚠️ user flagged (2026-08-14) that the raw termination
rate below is analytically weak on its own; see §7 for the full reframe (baseline comparison, taxonomy,
reversibility, contrast cases). Keeping the raw figures here for reference.**
- Termination rate ~8.6% of ~3,500 outbound deals over the past decade (300+ terminated), and both numerator and denominator are growing — **no clean same-methodology global benchmark found yet to say whether 8.6% is high, low, or normal (see §7.1)**
- Upfront payments are typically a small fraction of headline totals; few companies ever collect meaningful milestone payments
- Case: 宜明昂科×Instil Bio — deal terminated Jan 2026 (all rights, incl. global ex-Greater-China dev/comm rights, reverted to 宜明昂科), company only ever collected $35M (1.7% of total deal value). **Specific reason for termination not yet disclosed in any source found — do not assume "drug failure" without more digging.**
- 2023 saw a wave of 11+ disclosed China-related terminations — full case-by-case list with reasons now compiled in §7.2

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
asymmetry worth noting in the piece) — **⚠️ see §8 for a major correction to this thread (2026-08-14): the
legal mechanisms here were initially conflated/mis-dated. Use §8's corrected timeline, not the bullet points
below at face value — they're kept here only to show what the raw Western commentary claims, which is itself
a data point (the rhetoric runs ahead of the actual legal mechanism).**
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
- **BIOSECURE Act / 1260H list / WuXi designation**: three distinct, easily-conflated legal threads —
  see §8 for the corrected, precisely-dated version before using any of this in the article.

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
5. **Deep case post-mortem of a terminated deal** — candidate list now narrowed, see §7.3. Not yet done.
6. **Deal-structure "tricks"** — formalized in §4 below.
7. ~~CRDMO/services-export vs. drug-asset-export~~ — **RESOLVED, see §9.** User confirmed 2026-08-14: article
   scope is drug-asset globalization; CRDMO (WuXi-type services) is context/policy-risk reference only, never
   folded into deal-total figures.

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

## 7. Termination-rate reframe (user critique, 2026-08-14)

User's objection: "8.6% termination" proves nothing on its own. It needs, at minimum:
- A same-methodology global baseline (is 8.6% high, low, or normal for cross-border pharma licensing?)
- A stage-matched comparison (China deals skew early/preclinical — do early-stage deals terminate more
  often everywhere, not just for China-origin assets?)
- Median signing-to-termination time for China deals vs. global
- A reason taxonomy (molecular/mechanism failure vs. clinical efficacy miss vs. safety signal vs. CMC/
  manufacturing issue vs. buyer-side strategic pivot vs. post-M&A pipeline cleanup vs. funding/priority
  shift vs. development-plan disagreement between partners)
- Whether reverted rights can be re-licensed or continued independently (i.e., is termination fatal to the
  asset, or just a reshuffling)
- At least one contrast case that is **not** a drug-failure story, so "termination" isn't treated as one
  uniform signal

### 7.1 Baseline comparison — status: gap, not resolved

No clean same-methodology global cross-border-licensing termination rate was found to benchmark against
China's ~8.6%. One adjacent (not directly comparable) data point: NIH tech-transfer research found 40%+ of
*exclusive license agreements from 2003–2009* were eventually terminated — but that's academic-to-industry
tech transfer, a different population and a different (older, longer-window) cohort methodology, not
cross-border biopharma out-licensing specifically. **Do not present these two numbers side by side as if
comparable — flag as an open research gap in the article, or find a cleaner benchmark before publishing.**

Adjacent stage-matched context that IS solid (but measures a different thing — trial success, not deal
termination): Phase 1 clinical trial success rates have fallen from ~70–75% (2006–08) to ~40–50% today;
overall end-to-end trial success rate is only ~7.9%. This supports the general point that a large share of
ANY licensed asset — Chinese-origin or not — is expected to fail for ordinary scientific reasons. Useful as
color/context, not as a termination-rate benchmark.

### 7.2 Reason taxonomy — status: well-populated from the 2023 termination wave

Compiled from a "2023年License-out退货清单" roundup (secondary source, cross-check primary filings before
citing exact dollar figures in the final draft):

| Chinese co. | Partner | Asset | Date | Stated/inferred reason | Category |
|---|---|---|---|---|---|
| 诺诚健华 (InnoCare) | Biogen | orelabrutinib 奥布替尼 (BTK inhibitor, MS) | 2023-02-15 | Officially "terminate for convenience," undisclosed — but FDA placed a partial clinical hold ~50 days earlier (2022-12-23) over liver-injury signals in enrolled patients | **Likely safety signal** — best candidate for the "drug-side problem" half of the contrast pair |
| 基石药业 (CStone) | Roche/Blueprint | pralsetinib 普拉替尼 (RET inhibitor) | 2023-02-23 | Roche returned rights "for strategic reasons" (unrelated to the asset itself) | **Buyer strategic reprioritization** |
| 基石药业 (CStone) | EQRx | sugemalimab 舒格利单抗 (PD-L1) + nofazinlimab (PD-1) | 2023-05-09 | EQRx underwent a company-wide strategic reset (Aug 2023 wind-down of most R&D, ~170 layoffs) after abandoning its low-cost-drug business model and finding "no commercially viable path" for sugemalimab in Nov 2022 | **Buyer company collapse — cleanest "not a drug failure" case**, see §7.3 |
| 加科思 (Genfleet) | AbbVie | SHP2 inhibitor | 2023-07-04 | AbbVie cited "portfolio and strategic decision-making" | **Buyer strategic reprioritization** |
| 百济神州 (BeiGene) | Novartis | ociperlimab 欧司珀利单抗 (TIGIT) | 2023-07-11 | Novartis strategic pivot — but coincides with industry-wide TIGIT class doubt (see below) | **Mechanism/target-class doubt, not company-specific** |
| 翰森制药 (Hansoh) | EQRx | almonertinib 阿美替尼 (EGFR) | 2023-08-04 | Same EQRx collapse as above | **Buyer company collapse** |
| 百济神州 (BeiGene) | Novartis | tislelizumab 替雷利珠单抗 (PD-1) | 2023-09-19 | "Mutual termination," no detail disclosed; BeiGene kept $2.2B already received | Undisclosed |
| 天境生物 (I-Mab) | AbbVie | lemzoparlimab (CD47 antibody) | 2023-09-22 | AbbVie cited prior project termination + strategic adjustment — CD47 class also had industry-wide anemia/safety concerns around this period (not yet verified in detail) | **Possible mechanism-class issue, needs more digging** |
| 科伦博泰 (Kelun-Biotech) | Merck | preclinical ADC asset | 2023-10-23 | Merck decided to terminate; company's other clinical-stage collaborations unaffected | Unclear, likely portfolio decision |
| 华东医药 (HTP) | vTv Therapeutics | TTP273 (GLP-1 agonist) | 2023-12-22 | **华东医药 itself initiated** the termination request | **Licensor-initiated — worth noting termination isn't always the buyer walking away** |
| 君实生物 (Junshi) | Coherus | JS006 (anti-TIGIT) | 2024-01-10 | Coherus terminated; Junshi kept $35M received | **Mechanism/target-class doubt (TIGIT again)** |

**Cross-cutting finding worth building into the article**: the TIGIT target class failed industry-wide, not
just for Chinese-origin assets — Roche's own tiragolumab missed its Phase 3 primary endpoint (SKYSCRAPER-01,
final OS analysis) after already missing PFS in 2022; Gilead/Arcus also halted a TIGIT combo study. BeiGene's
and Junshi's TIGIT terminations landing in the same window is best read as "the whole mechanism came under
doubt across every company that bet on it," not evidence of a China-specific quality problem. This is a
strong, defensible example of "termination ≠ uniform signal" — directly answers the user's ask for a
non-drug-failure-coded pattern.

**Reversibility**: in nearly every disclosed 2023 case, the Chinese licensor recovered full or partial
rights and, in most cases, retained already-collected upfront/milestone payments. This is evidence
termination is a reshuffling event, not a dead end — worth stating plainly rather than implying "returned
deal = failed drug."

### 7.3 Contrast-case candidates for a deeper post-mortem

- **基石药业×EQRx** (best candidate) — EQRx itself dissolved as a company (abandoned its founding low-cost-
  drug thesis, wound down ~2/3 of headcount and nearly its whole pipeline in 2023); nothing about
  sugemalimab's clinical data changed. Clean "buyer died, asset didn't" story, and CStone kept ex-Greater-
  China rights back — worth checking what happened to the asset afterward as the "so what" of the post-mortem.
- **加科思×AbbVie** (second candidate) — pure portfolio-strategy language from AbbVie, no asset-specific
  claim at all in any source found so far.
- **诺诚健华×Biogen** — keep as the "drug/safety-adjacent" half of a contrast pair, but note the causal link
  (FDA hold → termination 50 days later) is circumstantial, not confirmed by either company on the record —
  don't overstate certainty in the draft.
- 宜明昂科×Instil Bio — still under-researched; reason for termination not found in any source yet. Do not
  use as a headline case until the reason is confirmed one way or the other.

---

## 8. National-security legal mechanisms — corrected timeline (2026-08-14)

**This section replaces the earlier (§3.1.F) bullet points, which conflated several distinct legal
mechanisms and got at least one date/status materially wrong. Use only this version when drafting.**

Three *separate* legal instruments, easily confused with each other:

1. **BIOSECURE Act** — signed into law 2025-12-18 as Sec. 851 of the FY2026 NDAA (P.L. 119-60). Confirmed
   accurate. But the actual restriction — federal agencies barred from contracting with, or granting funds
   to, entities that use biotech equipment/services from a designated "biotechnology company of concern"
   (BCC) — has a long implementation runway, not immediate effect:
   - OMB must publish the first BCC list within 1 year of enactment (i.e., by ~Dec 2026)
   - Then a further ~180 days after OMB guidance
   - FAR Council then has up to 1 year to revise federal acquisition regulations
   - The actual contracting prohibition for 1260H-listed entities takes effect 60 days after that FAR update
   - **Estimated real-world effective date: mid-to-late 2028** (per Ropes & Gray analysis)
   - 5-year grandfather clause protects contracts signed before the FAR update, through roughly 2033
   - **Scope**: federal contracts/grants/loans only — this does NOT reach private commercial transactions
     like an MNC licensing a molecule from a Chinese biotech, unless federal funding touches that specific
     chain somewhere. A Pfizer–Xinda or BMS–Hengrui licensing deal is not itself a "federal contract."

2. **Section 1260H list** ("Chinese military companies" list) — a *different, older, broader* mechanism,
   originating from the FY2021 NDAA, applied across ALL industries (not biotech-specific), published
   annually by the Department of Defense. WuXi AppTec was added on **2026-06-08**, in the same update as
   BGI Group, MGI Tech, and Complete Genomics — notably, three of those four additions (BGI/MGI/Complete
   Genomics) are genomics/**data** companies, not drug-asset licensors, which supports the user's category
   separation in §9 below. DoD's stated rationale: alleged indirect SASAC ownership and ties to SASTIND/PLA
   (denied by WuXi).
   - **Immediate legal effect of 1260H listing alone**: DoD itself is barred from contracting with or
     procuring from listed entities — narrow, DoD-procurement-only.
   - 1260H listing also satisfies one *prerequisite* toward eventual BCC designation under BIOSECURE — but
     is not the same as being on the BIOSECURE BCC list, which doesn't exist yet (OMB hasn't published it).

3. **The WuXi 1260H listing is currently enjoined** — on **2026-08-07**, Chief Judge James Boasberg (US
   District Court, D.D.C.) granted a preliminary injunction barring DoD from "enforcing, implementing, or
   otherwise giving effect" to WuXi's 1260H designation, finding WuXi had shown the designation was "likely
   arbitrary and capricious" (the court found DoD officials had misread their own evidence). WuXi had sued
   in June 2026, citing "substantial reputational, commercial, and operational harm" — customers/suppliers
   reportedly cancelled contracts and shifted business to competitors even before the injunction. **As of
   this writing (2026-08-14), the designation is legally blocked while litigation proceeds** — i.e., the
   single most concrete enforcement action taken so far in this whole thread has already been judicially
   stayed.

**Framing takeaway for the article**: the security-hawk narrative (CEPA, STAT News) reads as far more
urgent/settled than the actual legal mechanism currently supports — the BIOSECURE Act's real teeth are
~2 years away and narrowly scoped to federal procurement, and the one aggressive move made under a related
(but distinct) statute was just blocked in court as likely unlawful. Meanwhile, commercial drug-asset
licensing (category 1 in §9) kept accelerating right through all of this — 2026 Q1 alone hit ~$60B, a
record pace. That simultaneity is itself the user's point: commercial demand and security posturing can run
on separate tracks without one actually constraining the other, at least so far, at least for drug assets
specifically (as opposed to CRO/CDMO services or genomic data, see §9).

---

## 9. Three-category separation (user framing, 2026-08-14) — confirmed scope decision

The security narrative (CEPA/STAT/BIOSECURE/1260H) should **not** be treated as a single undifferentiated
threat to "China pharma going global." Three objects get conflated in casual coverage and need to be kept
separate:

1. **Chinese innovative drug assets** (license-out, NewCo, Co-Co, self-build — the actual subject of this
   article)
2. **CRO/CDMO and supply-chain services** (WuXi AppTec, WuXi Biologics-type companies — sell R&D/
   manufacturing *capacity*, not IP)
3. **Genetic, patient, and biological data** (BGI, MGI Tech, Complete Genomics-type companies — the 1260H
   June 2026 additions skew heavily toward this category)

BIOSECURE/1260H/military-linkage allegations land almost entirely on categories 2 and 3, not category 1.
Continued MNC dealmaking with category-1 companies through the same period (accelerating, in fact) is
itself evidence these tracks aren't the same fight — commercial appetite for Chinese drug assets and
national-security scrutiny of Chinese services/data infrastructure appear to be able to coexist rather than
one automatically choking off the other, at least in the data gathered so far.

**Confirmed article-scope decision**: this piece is about category 1 (drug-asset globalization). Category 2
(CRDMO) appears only as supporting context / policy-risk reference — e.g., to explain why the security
narrative exists at all, and to make the categorical separation itself part of the argument — and is never
folded into deal-total or headline-value figures for category 1. Category 3 (data) gets at most a passing
mention to explain the 1260H additions, not independent treatment.

**Why the categories differ economically (user's framing, keep for the article)**:

| | Drug-asset globalization | CRDMO service export |
|---|---|---|
| Sells | IP / development rights | R&D and manufacturing services |
| Risk profile | High failure rate, high upside | Order-driven; capacity utilization + customer stickiness |
| Value depends on | Clinical success | Utilization, quality, delivery |
| Main exposure | Asset valuation, control rights | Supply chain, data, policy risk |
| What it represents | Innovation-output capability | Industrial-infrastructure capability |

---

## 11. Biosimilar as a control group (user framing, 2026-08-14, round 3)

User's proposal: biosimilars make an unusually clean "low-innovation-variable" control group, because the
science/clinical risk is low and the product definition is well-established — so if Chinese companies still
can't independently commercialize in the US/EU even for biosimilars, that isolates a **commercialization-
infrastructure** gap from a **product-innovation** gap. Framed explicitly as a hypothesis to test (whether
Chinese biosimilar makers "always" license out), not an assumed conclusion — and the first research pass
below mostly confirms it, with one important nuance.

### 11.1 First-pass test of the hypothesis — mostly confirmed, one nuance flagged

- **复宏汉霖/Henlius** — the flagship case (China's most globally-approved biosimilar maker: trastuzumab
  biosimilar HANQUYOU/HERCESSI™(US)/Zercepac®(EU) approved in 40+ countries incl. China/US/EU). **Even here,
  US and EU commercialization rights were exclusively licensed out in 2021** — to Accord BioPharma / Accord
  Healthcare, both part of **Intas Pharmaceuticals (India)**, not a Western big-pharma partner. Henlius
  developed and manufactures the product; Accord/Intas holds the US/Canada and EU commercialization rights
  and runs the actual launch/sales. This is a clean license-out, structurally identical to the innovative-
  drug pattern.
  - **Nuance not yet resolved**: separate coverage claims Henlius "has established a specialized commercial
    team" overseas and cites 162.3% YoY overseas revenue growth — this is very likely referring to
    self-commercialization in **emerging markets** (Southeast Asia, Latin America, Middle East — HANQUYOU is
    approved in Argentina, Brazil, Thailand, Singapore etc.), NOT the US/EU, where Accord/Intas holds the
    rights. **Needs a market-by-market breakdown before the article claims either "Henlius self-
    commercializes" or "Henlius only license-outs" — likely the true story is bifurcated by market
    maturity**, which would itself support the user's thesis (self-build is viable in less-contested/lower-
    access-complexity markets, license-out is the default for the hardest markets).
- **百奥泰/Bio-Thera Solutions** — tocilizumab biosimilar (Shirely, approved China/US/EU/Switzerland/UK)
  licensed to **Biogen** for commercialization (2020 deal). Bevacizumab biosimilar (Pubeixi, approved China/
  US/EU/Brazil) licensed to **Sandoz** for US/Europe/Canada/most international markets (2021 deal). Clean
  license-out in both cases, to specialist biosimilar commercializers rather than innovator big pharma —
  same pattern as Henlius.
- **Working finding**: the license-out pattern holds even for China's two most globally-approved biosimilar
  makers, specifically in the US/EU. But the *type* of overseas partner is notably different from the
  innovative-drug pattern — biosimilar partners are commercialization/channel specialists (Accord/Intas,
  Sandoz, Biogen's biosimilars unit) rather than full innovator pharma (BMS/Pfizer/AZ) — worth building into
  the article as evidence for the "channel/payer/tender infrastructure, not brand or R&D" explanation (the
  user's category 2 in §11.3 below).
- **Still unresearched**: 齐鲁制药 (ranibizumab biosimilar, EU approval "early this year" per one source,
  needs date/partner verification), 海正药业 (claimed to have the most approved biosimilar products
  domestically — overseas commercialization structure not yet checked), 信达生物/正大天晴/君实生物's
  biosimilar-specific programs (as distinct from their innovative-drug deals already covered in §3.1.A).

### 11.2 Korea/India comparator — important correction to the user's own framing

The user's proposal treated Korea as one model. First-pass research shows Korea needs to be split at the
**company** level, not treated as a single national pattern:
- **Celltrion**: genuinely self-built — runs its own sales networks, pricing, tender responses, and brand-
  building directly in major markets; internalizes R&D + manufacturing + sales; reportedly in talks to
  acquire an Eli Lilly biologics manufacturing facility in the US. This is the closest real-world example of
  the "self-build" end of the spectrum the article wants to test China against.
- **Samsung Bioepis**: **leans on partners for most products** — commercial relationships with Biogen,
  Organon, Harrow, Teva across its portfolio. This is structurally much closer to the Henlius/Bio-Thera
  license-out pattern than to Celltrion's self-build pattern, despite both being "Korean." **The article
  should not cite "Korea" as a self-commercialization success story without naming which of the two very
  different companies it means** — this was a gap in the user's own initial framing, now corrected.
- Combined, Samsung Bioepis + Celltrion hold the most approved antibody biosimilars in the US/EU (11 each,
  per one source) — the two together account for a large share of the historically US/EU-dominant (~80% of
  world biosimilar market) footprint, but via two different commercial models.

**India — Biocon Biologics case, deal terms now confirmed**: this directly answers the user's own question
("must global commercialization capability be grown organically, or bought via M&A?") — Biocon did not build
its US/EU commercial infrastructure from scratch. On 2022-02-27 it agreed to acquire Viatris's entire global
biosimilars business (trastuzumab, pegfilgrastim, bevacizumab, insulin glargine, insulin aspart, pertuzumab)
for up to $3.335B; the deal closed 2022-11-29 at $3B total consideration ($2B cash — $1.2B of it funded via
the largest sustainability-linked loan to an APAC pharma/biomanufacturing company at the time — plus ~$1B/
~12.9% equity stake to Viatris, with a further $335M contingent in 2024). This gave Biocon Viatris's existing
products, commercial teams, and market access relationships in one transaction, rather than years of organic
build-out. **Strong candidate to cite directly** when the article addresses "can commercialization capability
be bought rather than grown" — the answer for at least one major case is yes, at a specific, disclosed price.

### 11.3 Role decomposition template (user's framing) — to apply per case

For each biosimilar case, separate: molecule/cell-line development · clinical development · drug-substance
manufacturing · drug-product/fill-finish · FDA/EMA filing entity · marketing authorization holder · brand
owner · payer/tender negotiation · sales & distribution — and note which party holds each role. Not yet
systematically filled in for the cases above; flagged as the next concrete piece of work if this thread
gets prioritized (would require reading each licensing deal's actual terms, not just headline press
releases).

### 11.4 Six structural constraints proposed by the user (kept as the working list, not yet independently
verified against data — treat as hypotheses to check case-by-case, not established fact)

1. Late market entry — first-movers already hold payer contracts and hospital purchasing pathways; later
   entrants compete on discount alone in markets that may already have 5–6 competing biosimilars
2. Commercialization complexity — US biosimilar access runs through PBMs, GPOs, wholesalers/specialty
   pharmacy, Medicare Part B/D reimbursement mechanics, and rebate structures that can't be replicated by a
   small overseas office
3. Patent-litigation cost/uncertainty — reference-product patent thickets (process, formulation, device,
   indication patents), launch-timing negotiations, at-risk-launch capital exposure; India's biosimilar/
   generic makers have decades of Paragraph-IV-style litigation experience Chinese companies mostly lack
4. Regulatory/manufacturing track record — CMC comparability, cell-line/process consistency, facility
   inspection history, change-control, global pharmacovigilance; a China-approved dossier doesn't
   automatically satisfy FDA/EMA — re-development cost can approach starting a new program
5. Capital-return logic — self-commercializing means carrying global clinical/analytical development,
   filing costs, plant upgrades/inspections, litigation, pre-launch inventory, channel fees, rebates, a
   sales force, and ongoing price erosion in a structurally low-differentiation product; license-out trades
   long-term upside for a more certain near-term cash profile — **may be a rational choice for cash-
   constrained companies, not necessarily a capability failure** (ties directly to the financing-squeeze
   thread in §5)
6. Geopolitics/supply-chain risk — single-China-source concerns, inspection/data access, government
   procurement restrictions, dual-/local-sourcing requirements — may not block approval but can shape
   partner selection and inventory/procurement decisions (ties to §9's category-2/3 separation — this
   constraint applies more to manufacturing/supply than to the licensing transaction itself)

### 11.5 Framing warning (user's own caution, worth preserving verbatim in spirit)

Don't presuppose self-build > license-out. Biosimilars are a scale/channel/cost-driven business; even
holding a good product, self-building a US sales infrastructure may not generate sufficient return. The
article should distinguish **forced licensing** (no registration/litigation/access/sales capability) from
**deliberate division of labor** (retain manufacturing/supply profit, hand local commercialization to a
channel-advantaged partner) — judged by: does the Chinese company keep global manufacturing rights, does it
become the exclusive long-term supplier, is the supply pricing cost-plus or profit-share, does it get a
sales royalty, does it carry further R&D cost, does it retain self-commercialization rights in any region,
and does the partnership let it accumulate its own registration/commercial capability over time.

### 11.6 Proposed benchmark set (user's list, for whenever this thread gets built out)

China: 复宏汉霖/Henlius, 百奥泰/Bio-Thera (+ others with FDA/EMA filings or overseas licenses, TBD) · Korea:
Celltrion, Samsung Bioepis · India: Biocon Biologics, Dr. Reddy's · Western reference: Sandoz, Amgen. Per-
company metrics proposed: year of first overseas biosimilar approval, FDA/EMA approval count, self-
commercialized vs. partnered ratio, overseas revenue, drug-substance manufacturing location, whether it has
its own local sales team, whether commercial infrastructure was grown organically or acquired (Biocon/
Viatris precedent), how many competitors already in-market at time of entry, and the manufacturing/
licensing/direct-sales split of overseas revenue. **Not yet built — first-pass research above only covers
2 of the ~6+ target companies.**

### 11.7 How this connects to the me-too / cutting-edge spectrum (user's structural argument, worth keeping
as a candidate closing framework for the whole article, not just the biosimilar section)

Biosimilar (known molecule, low scientific risk) → still can't self-commercialize globally → suggests the
commercialization barrier is independent of scientific innovation level. Me-too/fast-follower (moderate
product risk, mechanism already validated) → currently mostly license-out (§3.1.A-C). Best-in-class/first-
in-class (highest innovation and clinical risk) → if these are *also* mostly sold off ex-China (which the
current deal data in §3.1.A-B suggests, pending the decomposition work in §4), that would indicate the
shared constraint sits in global registration/IP/market-access/commercialization infrastructure, not in
product quality — a stronger, more falsifiable version of the article's core question than either the
"mode evolution" or "narrative clash" framings alone. Alternative reading if the data instead shows Chinese
companies retaining more control on higher-differentiation assets: that would suggest a rational economic
sorting (low-margin/channel-driven products get licensed out, high-differentiation products are worth
self-building for) rather than a uniform capability ceiling — **both readings are analytically valid; the
point is to let the case data decide, not assume either answer going in.**

### 11.8 Refined research question (round 4, 2026-08-14) — this is now THE question for Phase 1

User's key correction to the round-3 framing: not self-commercializing a given biosimilar does **not** by
itself prove a capability gap. First need to establish what role that biosimilar plays in the company's
overall strategy — it may simply never have been intended as a vehicle for building global commercial
infrastructure. Don't fall into a "why doesn't China have a Celltrion" comparison before checking whether a
given Chinese company was ever trying to be one.

**Working research question (replaces the round-3 framing "did China self-commercialize or not"):**

> 中国biosimilar企业为什么没有在欧美市场形成与印度、韩国企业相当的商业存在：是进入时间、市场结构和能力
> 约束所致，还是企业本来就没有把biosimilar视为建立全球商业体系的核心战略？

Both explanations can be simultaneously true across different companies — but they lead to very different
evaluations of each company, so cases need to be sorted by *strategic intent* before being judged on
*commercial outcome*.

Broken into four sub-questions to research in order:
1. Where do Chinese companies actually sit in the overseas biosimilar value chain? (Not brand alone — look
   at R&D, manufacturing, MAH, sales, and where the profit actually accrues — this is what §11.3's role-
   decomposition template is for.)
2. Which companies are genuinely trying to become global biosimilar players, vs. opportunistic licensors?
   (Sort by strategic role first — see §11.9.)
3. For the companies that ARE genuinely trying to globalize, what's actually stopping them? (Registration,
   litigation, launch timing, channel access, payer negotiation, capital, geopolitics — the six constraints
   in §11.4, but now only applied to the subset that has real global ambition.)
4. Where does the gap vs. Korea/India actually come from — timing, commercial infrastructure, M&A capacity,
   national industrial policy, or just a different product-portfolio mix?

### 11.9 Why a company develops a biosimilar — six possible strategic roles (must sort cases into these
before judging any of them against Celltrion/Samsung Bioepis/Biocon)

1. **Core business** — the company intends to run biosimilars as a real global business at scale: multiple
   blockbuster-reference biosimilars in the pipeline (a portfolio, not a one-off), heavy biologics capacity
   buildout, continuous FDA/EMA filing activity, self-built or acquired overseas commercial infrastructure,
   biosimilar revenue treated as a core growth line. **Only this category is fairly comparable to Celltrion/
   Samsung Bioepis/Biocon.**
2. **Cash-flow / capability-training tool** — used to build biologics CMC competence, train clinical/
   regulatory/pharmacovigilance teams, establish domestic hospital channel relationships, and generate
   steady cash to fund innovative-drug R&D. Primary market is domestic; may never have been worth building
   overseas commercial infrastructure for.
3. **Technology-platform validation** — proves antibody development, cell-line construction, process scale-
   up, analytical/QC, commercial-scale manufacturing, and FDA/EMA-grade quality-system capability. The
   company's real destination may be innovative biologics or CDMO services, not a global biosimilar brand.
4. **Outbound-licensing / capacity-export vehicle** — never intended to self-sell; the plan from day one was
   to license overseas rights to a local partner, keep manufacturing, and earn supply/royalty income while
   raising plant utilization and entering a regulated-market supply chain. This is a deliberate B2B model,
   not "failure to commercialize" — should be benchmarked against supply margin, capacity utilization, and
   partner-network breadth, not overseas brand market share.
5. **Domestic defensive product** — developed mainly to prevent a competitor's biosimilar from eroding the
   company's position in a therapeutic area, or to round out an existing domestic sales-team's portfolio.
   May never have had a serious global development plan at all — comparing it to Korea's globally-designed-
   from-inception programs would be a category error.
6. **Transitional asset toward innovative drugs** — biosimilar work builds capability early on, after which
   capital and management attention shift to biologics improvements, bispecifics, ADCs, cell therapy, or
   first-in-class programs. Licensing out the biosimilar's overseas rights here may be freeing up capital/
   management bandwidth, not a globalization failure.

### 11.10 Strategic-weight signal table — how to sort a company into one of the six roles above

Don't rely on how a company markets itself — look at where it actually puts capital, people, capacity, and
management time. Score each company/product against these signals:

| Signal | Points toward "core business" | Points toward "peripheral" |
|---|---|---|
| Pipeline count | Multiple biosimilars, continuous investment | Few, legacy/one-off products |
| R&D spend direction | Continues funding new biosimilars | R&D shifting toward innovative drugs |
| Management commentary | Explicitly named as a long-term growth pillar on earnings calls | Rarely discussed |
| Capex | Capacity built specifically around biosimilars | Capacity shared across multiple business lines |
| Overseas registration | Proactive, continuous FDA/EMA filing activity | Filing mostly handled by the partner |
| Rights structure | Retains rights in major markets | Broadly licenses overseas rights away |
| Commercial team | Self-built, expanding, or acquired | Relies on local partners |
| Revenue contribution | High actual or targeted share of company revenue | Low, or not separately disclosed |
| KPIs used | Market share, sales volume, overseas revenue | Milestones, licensing fees, supply volume |
| Product selection | Coherent therapeutic-area or channel portfolio | Single opportunistic project |
| Org structure | Dedicated biosimilar business unit | Folded into a general pipeline |
| Follow-on activity | New biosimilar projects keep being added after approval | Nothing follows after the first approval |

### 11.11 Unit of analysis: Company × Product × Geography (not "country")

Do not use "country" as the base unit — it collapses cases like Henlius (US/EU licensed to Accord/Intas,
possibly self-commercialized in emerging markets — see the unresolved nuance in §11.1) into a single
misleading label. Track each project at the **Company × Product × Geography** level, recording: Company,
Biosimilar product, Reference biologic, Target market, Development origin, Manufacturing location,
Regulatory applicant, Approval date, Launch date, Commercialization partner, Brand owner, Rights retained by
the Chinese company, Revenue model, Market share, and the strategic role from §11.9. This is the schema to
use once real data-gathering starts — not yet built into a table, this is the target structure.

### 11.12 First case batch (kept deliberately small and diverse, not "biggest companies only")

**Group 1 — China**, selected for *strategic-type diversity*, not just scale:
- A company where biosimilar is genuinely core business (Henlius is the likely anchor case, but should not
  be the only one studied — risk of over-generalizing from one company)
- A company visibly transitioning from biosimilar toward innovative drugs
- A company whose model is mainly overseas-licensing/capacity-export (candidate: Bio-Thera, pending role
  classification via §11.10)
- A company that has actually attempted FDA or EMA filing (as a base filter — separates real global
  attempts from purely domestic players)

**Group 2 — Korea**, specifically to prove "the Korea model" is not one thing (already partly shown in
§11.2): Celltrion (self-brand, self-commercialize direction) vs. Samsung Bioepis (partner-commercialized).

**Group 3 — India**, same internal-contrast logic: Biocon Biologics (grew global infrastructure partly via
the Viatris M&A, §11.2) vs. one more India-based company that relies mainly on partners/regional licensing,
as an internal control — candidate not yet chosen (Dr. Reddy's was the user's original suggestion, not yet
researched for this specific angle).

### 11.13 Competing hypotheses to hold open simultaneously (do not pre-select one before the case data is in)

1. **Capability-gap hypothesis** — Chinese companies lack US/EU patent-litigation experience, payer-access
   relationships, and commercial networks, so licensing is close to the only option.
2. **Strategic-choice hypothesis** — biosimilar margins don't justify the cost of building expensive
   overseas commercial infrastructure; licensing is the rational choice even where capability exists.
3. **Timing hypothesis** — Chinese entrants arrived too late; first-movers already control the major
   contracts and channels.
4. **Domestic-market path-dependency hypothesis** — China's huge domestic market removed the incentive to
   design to FDA/EMA standard from a project's inception, the way Korea's export-oriented programs did.
5. **Transition hypothesis** — biosimilar work is just a stage for accumulating CMC competence, capacity,
   and cash flow; the company's real destination is innovative drugs, so global biosimilar commercialization
   was never the point.
6. **Policy-and-capital hypothesis** — Korean and Indian companies benefited from longer-horizon capital,
   stronger M&A capacity, or explicit national industrial policy support that Chinese companies didn't have
   to the same degree.
7. **Invisible-participation hypothesis (user's favored candidate)** — China's apparent low overseas
   "share" may be a measurement artifact: Chinese companies may already be participating extensively through
   R&D, drug-substance manufacturing, and supply, just without appearing as the visible end-market brand or
   commercial owner. Under this reading, **"China hasn't gone global in biosimilars" may itself be a false
   impression** — the more accurate description would be "present upstream in the value chain, absent from
   the terminal brand/commercial-profit layer." User flagged this as the hypothesis she finds most promising,
   but it is explicitly NOT to be assumed true going in — same evidentiary bar as the other six.

### 11.14 Why Phase 1 (biosimilar) is expected to inform Phase 2 (the broad "出海" piece)

Once biosimilar cases are sorted by strategic role (§11.9) and role-adjusted comparisons are made, the
project establishes a **science-risk-controlled baseline**: after removing "the product itself was too
risky/novel to succeed" as a possible explanation, whatever barriers remain (registration, litigation,
channel access, capital allocation, path dependency) are more likely genuine structural constraints on
Chinese pharma globalization generally — not artifacts of any single product's clinical uncertainty. Phase 2
can then test whether higher-margin, higher-differentiation innovative drugs let Chinese companies clear
those same barriers (self-build, Co-Co, NewCo) more often than biosimilars do, which would be a much
stronger, better-evidenced version of the "financing squeeze vs. capability maturity" question in §5 than
starting from the innovative-drug side alone.

---

### 11.15 China biosimilar player map (round 5, 2026-08-14)

Direct answer to "who are the main domestic players, and which participate globally." China's biosimilar
market is intensely crowded domestically — bevacizumab alone has **12 approved biosimilar makers** in China,
~RMB 9.9B/year in sample-hospital sales in 2023 — which matters for §11.9 role-sorting (a market this
saturated may itself explain why some companies never treated biosimilar as a global-ambition product).

| Company | Domestic position | Global engagement | Likely §11.9 role |
|---|---|---|---|
| 复宏汉霖/Henlius | Top tier — 4 biosimilars = ~75% of product revenue | Most active: trastuzumab→Accord/Intas; **pertuzumab (POHERDY) →Organon** (2022 license+supply deal, US approval Nov 2025, EU approval 2026 — first pertuzumab biosimilar globally) | Role 1, core business |
| 百奥泰/Bio-Thera | Top tier | Tocilizumab→Biogen, bevacizumab→Sandoz | Role 1 or 4, needs finer sorting |
| 信达生物/Innovent | First tier (with Hengrui/BeiGene) | Bevacizumab licensed to **ETANA** for Indonesia (2021 deal, 5 indications approved 2022-06) — **notably, even an emerging-market deal is license-out, not self-build**, complicating a pure "US/EU is just too hard" reading | Needs more data, but not Role 1 |
| 齐鲁制药/Qilu | Top tier, 8 approved biosimilars, leads domestic bevacizumab share | Ranibizumab EU approval ~early 2026; overseas commercial partner not yet identified | TBD |
| 三生国健 | Former top tier (adalimumab/Yisaipu) | **Essentially no global attempt** — after Humira's 2019 83% VBP price cut plus a flood of domestic adalimumab biosimilars, explicitly pivoted to "innovation is the only way to manage risk," licensed out non-autoimmune early-stage assets to an affiliate for cash, refocused on autoimmune innovative drugs | **Textbook Role 6** (transition asset) — clean, well-documented case |
| 迈威生物/MabWorks | Mid-tier | Overseas licensing explicitly targets **South America, Southeast Asia, Belt & Road countries** — deliberately not competing in US/EU | Role 4, but the market-selection itself is a distinct pattern worth its own category note |
| 神州细胞/Sinocelltech | Mid-tier (安佳润 adalimumab, approved 2023) | No overseas activity found | Role 5 candidate, unconfirmed |
| 华兰生物/华兰基因 | Mid-tier | No overseas activity found | Role 5 candidate, unconfirmed |

**Cross-reference worth building into the article**: Henlius's pertuzumab commercialization partner is
**Organon** — the same company the site's existing `organon-stock-analysis.html` post-mortem covers in
depth. Not a coincidence: Organon's spinoff portfolio from Merck included a large legacy biosimilars business
(Renflexis/infliximab, Ontruzant/trastuzumab, Hadlima/adalimumab), so partnering with Chinese biosimilar
makers is a direct extension of Organon's own core business, not an opportunistic one-off. This gives a
natural internal link between the two articles once both are published.

**Working pattern observed across the player map**:
1. US/EU deals are almost uniformly license-out, and notably to biosimilar/generics specialists (Accord/
   Intas, Sandoz, Biogen's biosimilars unit, Organon) rather than full innovator pharma — different partner
   profile than the innovative-drug deals in §3.1.A, worth using as evidence for the "channel/payer/tender
   infrastructure, not brand or R&D" explanation
2. License-out also shows up in easier, emerging markets (Innovent×ETANA/Indonesia) — undercuts a pure "only
   US/EU is hard enough to force licensing" reading; looks more like a general commercialization-strategy
   preference than a market-specific capability wall
3. Domestic crowding (12-way bevacizumab competition) may be diverting management attention entirely away
   from "should we build an overseas commercial team" for some companies — a candidate explanation not yet
   in the §11.13 hypothesis list, worth adding as an 8th: **domestic-saturation-as-distraction hypothesis**

### 11.16 Capital-market discount hypothesis (user's framing, round 5, 2026-08-14) — refines hypothesis #6

User's hypothesis: unlike big pharma (ample internal cash) or VC-backed biotech (investor capital
injections), leading Chinese biosimilar makers face a capital gap for self-building overseas commercial
teams that is both too large and not attractive enough to capital markets to fill. First-pass research
**strongly supports this, with an important refinement**: the mechanism looks less like "literally cannot
raise cash" and more like **capital markets specifically refuse to reward investment in biosimilar
commercialization with a growth multiple**, making it a rational non-investment rather than a forced one.

- **Domestic mechanism**: around 2021, China's centralized procurement (集采/VBP) becoming routine directly
  **halved valuations** of biosimilar-focused companies; capital that had chased the sector largely left.
  This is sector-specific (a biosimilar-heavy revenue mix gets discounted), not a general Chinese-biotech
  financing winter — the two need to be kept analytically separate.
- **General valuation theory backs the mechanism**: multiples are driven by pipeline optionality and
  blockbuster potential; a biosimilar-heavy revenue base is priced like a "mature, low-margin business"
  without a growth story, and reference-product patent cliffs are known to erode biosimilar/generic revenue
  80–90% within 2–3 years once several competitors enter — investors apply a structural discount rate to
  this profile versus a protected, differentiated pipeline.
- **Henlius's own numbers complicate a pure "no cash" reading**: turned profitable in 2023; H1 2024 revenue
  +9.82% YoY, attributable profit +60.97% YoY — not a company in cash crisis. But R&D spend is falling
  (RMB 2.183B in 2022 → RMB 1.434B in 2023 → RMB 826M in H1 2024, i.e., a declining trend), consistent with
  harvest-mode rather than aggressive global-expansion investment. **Refined framing for the article**: not
  "too poor to self-build" but "generates real cash, and still doesn't get rewarded for spending it on
  overseas commercialization" — a sharper, more falsifiable claim than a blanket poverty story.
- **Korea contrast reframes hypothesis #6 (§11.13) more precisely**: this isn't really about Korean
  *government* policy support vs. Chinese policy support — it's about **chaebol-style patient capital**.
  Celltrion's chairman publicly committed **$33.6B over a decade** (announced 2019) to its pharma business;
  Samsung pledged **$22B** (2018) across bio/AI/auto-electronics. These are conglomerate-scale, decade-long
  commitments backed by cross-subsidization capacity that a standalone HK-listed Chinese biotech — even a
  leading one like Henlius, whose own parent Fosun Pharma is nowhere near Samsung's total scale — cannot
  match. **Revise hypothesis #6 in §11.13 to: "chaebol/conglomerate patient-capital access vs. standalone
  public-biotech capital access," not simply "national policy support."**

### 11.17 Case study: the Henlius privatization standoff (2024–2025) — strong candidate for a dedicated
article vignette

A concrete, dated, named test of §11.16's hypothesis, where both sides put real money behind opposing
valuation judgments. **Important framing correction from round 6 discussion (below): don't present this as
"the market didn't value biosimilar commercialization" — present it as a price/valuation dispute between a
conflicted controlling shareholder and dispersed minority holders. See the "framing correction" subsection
near the end of this entry before drafting.**

**Full price history (round 6, 2026-08-14)**:
- **IPO**: 2019-09, HK$49.6/share (first-day open HK$47.45), raised ~HK$3.425B, market cap ~HK$26.7B
- **2024-05-23** (trading halt ahead of the privatization announcement): HK$18.84/share, market cap ~HK$10.2B
  — **down ~62% from IPO price, ~HK$15B of market cap gone**
- **Privatization offer**: HK$24.60/H-share (36.67% premium to an HK$18.00 "undisturbed price" reference —
  close to but not identical to the HK$18.84 halt price; sources don't perfectly reconcile which reference
  date was used, don't over-precisely quote both figures as if interchangeable)
- **2025-01-22**, deal voted down: stock fell further on the news (down ~28% YTD at that point), not up —
  see the framing-correction note below on why this matters
- **Stated reasons for the multi-year decline** (from Chinese financial press, not just the scheme document):
  (1) broad HK market malaise — macro, not company-specific; (2) **the business-model point stated explicitly
  in coverage: Henlius's products are "mostly biosimilars, low competitive moat," naming 海正生物 and 正大天晴
  as later entrants crowding the same products** — this is a direct, named link between the domestic-
  saturation pattern in §11.15 and the valuation-discount pattern in §11.16, worth quoting almost verbatim in
  the draft; (3) "advantages of listed-company status not realized," matching Fosun's own scheme-document
  language.

**Fosun's stated rationale (from Henlius's own scheme documents)** — reads as a direct, named instance of
§11.16's thesis:
- Cites 集采/regulatory reform, geopolitical tension, and macro headwinds as industry context
- States Henlius expects to **increase commercialization investment (R&D + marketing) in coming years**
- States the stock has traded below expectations with low volume since listing — **"the advantages of being
  a listed company have not been realized"**, i.e., public-market financing benefits aren't materializing
- Fosun already holds 59.56% (rising to 63.43% after the failed deal via further open-market purchases) —
  control was never at stake; this was about capital-structure/financing logic, not a control grab
- **Reading for the article**: Fosun's own words amount to "the public market won't fund what we think this
  business needs to spend next, so let's do it privately instead" — almost a direct confirmation of the
  capital-discount hypothesis, in the controlling shareholder's own stated logic.

**Minority shareholder rejection**: needed 75%+ approval AND <10% rejection among a *separate* class vote of
only independent/disinterested H-share holders (mechanism explained in §11.18) — actual result was 19.25%
rejecting, well over the 10% cap, killing the deal. An industry analyst's stated reason: shareholders simply
believed **"it was being sold too cheap"** — i.e., minority holders were betting Henlius's true/future value
(likely including future commercialization upside) exceeded even the 36.67%-premium buyout price.

**Why this is a strong vignette candidate**: it's the same asset, same information set, with the party
closest to operations (Fosun) reading it as "the market won't pay for our growth plan" and the dispersed
minority holders reading it as "you're trying to buy us out below what this is actually worth" — two
sophisticated, financially-motivated parties reaching opposite conclusions with real cash on the table. This
is a much stronger evidentiary device than any single analyst's opinion, and directly dramatizes the article's
central capital-market question without needing to resolve who was "right."

**Framing correction (round 6, 2026-08-14) — apply this before drafting**: the user pushed back on an
apparent contradiction — if staying listed really does impose a real cost (compliance/disclosure overhead)
that minority shareholders are also worse off for, why would rational minority shareholders vote to keep
bearing it? Resolution: **the vote was never "should this company be listed," it was "is HK$24.60 the right
price."** Those are compatible positions to hold simultaneously — a shareholder can agree listing overhead
is a real (probably small, relative to company revenue) cost AND still believe the offered price undervalues
the shares by more than that overhead is worth, in which case rejecting the offer and continuing to bear the
listing cost is the rational choice. Three reasons this isn't self-contradictory:
1. **Conflict of interest**: Fosun is simultaneously the controlling shareholder and the buyer in this
   transaction — its own stated rationale ("the market won't fund our plans, listing isn't earning its keep")
   has an obvious self-serving reading (talking the company down helps justify a lower buyout price), so
   minority holders have good reason to discount it rather than treat it as neutral fact. This is the
   canonical conflict in controlling-shareholder freeze-out/going-private deals globally, not something
   specific to this case — and it's exactly why the H-share independent-class-vote mechanism in §11.18
   exists: to stop a controlling shareholder's economic majority from imposing its own (self-interested)
   valuation narrative on minority holders.
2. **Rejecting a low offer preserves optionality**: staying listed keeps the shares tradeable at whatever
   price the market sets going forward; accepting a fixed buyout price permanently extinguishes any upside.
   A shareholder who believes there's a real (even if uncertain) chance of higher future value can rationally
   prefer to keep that option alive rather than crystallize a possibly-too-low fixed payout now — independent
   of whether listing costs are real.
3. **Relative magnitude**: for a company Henlius's size (multi-billion-RMB revenue), compliance/disclosure
   overhead is very likely small next to the multi-billion-HKD valuation gap minority holders were implicitly
   asserting — so even granting Fosun's cost argument fully, it may simply be a much smaller number than the
   perceived-undervaluation argument, meaning rejecting the deal isn't "shareholders harming themselves," it's
   "shareholders trading a small, certain cost for a chance at a much larger payoff."

**Complication worth keeping in the draft, not smoothing over**: the market's *actual* reaction cuts against
a simple "minority shareholders were obviously right" reading — Henlius stock fell further (not up) after the
rejection was announced on 2025-01-22, part of a ~28% YTD decline at that point. If the broader market shared
the blocking shareholders' conviction that HK$24.60 undervalued the company, the standalone share price
should have reasserted near or above that level once the "sell cheap" risk was removed; instead it kept
falling. This doesn't prove the minority holders were wrong (value can take years to show up, and the holders
who blocked the deal may differ from the average trader setting the post-rejection price), but the article
should present this as a live, unresolved dispute — a real disagreement about price under genuine uncertainty
— not as a morality tale about which side "understood the business better."

### 11.18 Why privatization couldn't just be done via open-market buybacks (background/footnote material,
not core to the article's argument — keep to one sentence in the actual draft)

User asked why Fosun didn't simply buy back shares on the open market instead of running a formal
privatization process, given it already held a clear majority. Three separate reasons, verified:
1. **HK Takeovers Code "creeper rule"**: a shareholder holding 30–50% can only add up to 2% via ordinary
   market purchases per rolling 12 months before triggering a mandatory general offer to all shareholders —
   large stake accretion via simple buying is capped by design, not just slow in practice.
2. **Open-market buying can never force out an unwilling holder** — it only captures shares from sellers
   willing to transact at the prevailing price. If minority holders believe (as they did here) the stock is
   undervalued, they simply don't sell, and the acquirer can buy indefinitely without ever reaching 100%.
3. **The real structural blocker is specific to H-share companies**: Henlius is incorporated in mainland
   China (an H-share company, HK-*listed* but not HK-*incorporated*), and **mainland Chinese company law does
   not grant an offeror compulsory-acquisition rights** the way a HK-incorporated company's privatization
   could use — this is why the deal was structured as an "absorption merger" (吸收合并) requiring a specific
   exemption, and why it required **two separate votes**: an ordinary EGM (passed easily, 2/3+, given Fosun's
   majority) AND a *separate class meeting of only independent H-share holders* (needing 75%+ approval, <10%
   rejection) — a minority-protection mechanism specifically designed so a controlling shareholder's economic
   majority cannot itself force out dissenting minority holders. This second vote is exactly where the deal
   failed (19.25% rejected). **Bottom line for the article**: it was never about Fosun lacking enough shares
   for control — it already had that — it was that HK/mainland cross-border listing rules deliberately carve
   out a minority veto that a controlling stake cannot override, and open-market buybacks structurally cannot
   reach the legal mechanism (a passed scheme/compulsory-acquisition right) needed to force a clean delisting.

---

### 11.19 Henlius stock price rally (round 7, 2026-08-14) — timeline, drivers, and a correction to §11.16

**Full price timeline**: HK$18-25 range through the Jan-2025 privatization rejection → steady 2025 climb →
late July 2025 single-day pop >7% approaching then-ATH ~HK$67 → **August 2025: new all-time high HK$85.95,
YTD gain >250%, Citi raised target price to HK$95 and upgraded to Buy** → pulled back since to **HK$67.30 as
of 2026-08-14 close** (down ~22% from the Aug-2025 peak, but still ~2.7x the rejected HK$24.60 privatization
offer, and even the 52-week low of HK$50.25 is more than double that offer price).

**Drivers — both sector-wide and company-specific, need to be kept separate**:
- Sector-wide: Hang Seng Biotech/Healthcare indices opened 2026 up 11.06%/10.26%; a further +6.66% single-day
  Hang Seng Biotech pop on 2026-06-29 on China's medical-insurance drug directory news; ASCO 2026 conference
  catalysts — this is the same broad China-pharma-reappraisal wave documented throughout §1–§10, not
  Henlius-specific.
- Company-specific: 2025 revenue RMB 6.667B (+16.5%), **2025 R&D spend RMB 2.492B, +35.4% YoY** — this
  **reverses and corrects** the "declining R&D, harvest-mode" reading in §11.16 (which was based on 2022→H1
  2024 data only; the trend turned around in 2025 and should not be cited as a continuing decline); H1 2025
  overseas profit up >200% YoY; 10 products approved across 60 countries (4 FDA, 4 EU).
- **Single catalyst Citi named specifically for the target-price upgrade: HLX43 data.** Important: **HLX43 is
  not a biosimilar** — it's a first-in-class-track PD-L1-targeting ADC (fully human IgG1 anti-PD-L1 antibody +
  novel linker-topoisomerase-inhibitor payload), with no approved global competitor on the same target as of
  this writing. **Reading for the article**: this arguably *strengthens* rather than weakens the capital-
  discount hypothesis in §11.16 — the market re-rating tracks most closely to Henlius demonstrating it can
  produce genuinely differentiated innovation, not to biosimilar-commercialization success being newly
  rewarded. The stock took off once Henlius offered investors a story capital markets already know how to
  price (novel-mechanism oncology asset), not because the market changed its mind about biosimilars.

### 11.20 HLX43 as a clean within-company contrast case (round 7, 2026-08-14)

**Rights/partnership status**: as of this writing, **no overseas licensing deal has closed** for HLX43 —
Henlius is self-funding and independently running global development. (2025 press reports describe deal
*talks* with both Johnson & Johnson and Roche, potentially involving several-hundred-million-dollar upfronts
plus milestones, called a possible "biggest oncology licensing deal of 2025" — **this is reported negotiation
status only, no confirmed signed/closed transaction found; do not present as completed in the draft**.)

**Clinical stage**: international multicenter Phase II/III program (HLX43-NSCLC302, advanced squamous NSCLC)
running simultaneously in China, US, Japan, and Australia — the Phase 3 portion is expected to be HLX43's
first pivotal registrational trial. 700+ patients enrolled across the program (NSCLC ~60%/~400 cases).
Multiple parallel Phase II studies in HNSCC, HCC, TNBC, pancreatic, cervical, esophageal, nasopharyngeal, and
colorectal/gastric cancers. US FDA Orphan Drug Designation granted for thymic epithelial tumors. Phase 1 data
presented at ASCO/WCLC 2025.

**Why this is a strong internal contrast case for the article's core thesis**: same company, same period —
every biosimilar asset (trastuzumab→Accord/Intas, pertuzumab→Organon, tocilizumab→Biogen, bevacizumab→
Sandoz, ipilimumab→Sandoz) was licensed out early, well before or around approval. HLX43, the one asset with
genuine global differentiation, is instead being **self-funded through an expensive international
multi-country registrational program**, with an overseas licensing deal still only at the talking stage. This
is a controlled, single-company data point directly supporting the "economic sorting" alternative reading
flagged back in §11.7: the constraint isn't that Henlius *can't* run global trials (HLX43 proves it can) — a
sufficiently differentiated asset gets self-funded, while comparatively undifferentiated biosimilars get
licensed out early. Capability isn't the limiting factor here; expected differentiation/return is.

### 11.21 Henlius pipeline positioning and R&D funding mechanism (round 8, 2026-08-14)

**Is Henlius becoming an innovative-drug company, or is it still primarily biosimilar?** Neither cleanly —
the company's own framing is an explicit **two-stage, dual-engine strategy, not a pivot away from
biosimilars**:
- Company's own words: **"生物类似药为基本盘"** (biosimilar is the base/foundation) — 2024 biosimilar segment
  revenue RMB 3.6B vs. innovative-drug segment (led by serplulimab/汉斯状, launched 2022-03) RMB ~1.3B —
  biosimilar still the larger revenue line as of 2024 (H1 2025 biosimilar sales alone: RMB 1.86B).
- Official 2025 strategic label: **"Globalisation 2.0"** — company's own stated narrative is that biosimilar
  was the beachhead ("出海起点是生物类似药... 积累了自身全球化的体系、人才和经验，现在把手中的成果复用到
  后续创新管线上") that built the global regulatory/commercial capability now being redeployed for
  innovative assets — i.e., biosimilar is presented as capability-building infrastructure that continues
  alongside innovation, not something being wound down (§11.9 Role 3 elements mixed with Role 1, not a clean
  single-role case).
- **Biosimilar pipeline is still actively expanding, not shrinking**: new CTLA-4 and CD38 biosimilars in
  development with overseas trials underway; a nivolumab biosimilar (HLX18) just got FDA IND clearance; an
  ipilimumab biosimilar was just licensed to **Sandoz**. The forward "10+ products launching overseas in the
  next 3-5 years" list explicitly mixes biosimilars (HLX11/pertuzumab, HLX14/denosumab) with innovative
  assets (HLX22, HLX43) — the company is taking both categories overseas together, not sequencing away from
  biosimilars.
- **Conclusion for the article**: don't frame Henlius as "a biosimilar company becoming an innovative-drug
  company." Frame it as a company that treats biosimilar revenue/capability as permanent infrastructure
  funding and derisking a parallel innovative pipeline — which sets up §11.21's funding-mechanism finding
  below as the mechanical link between the two.

**Where does the money for expensive global registrational trials come from?** — H1 2025 figures give a
fairly precise, well-sourced answer:
- Operating cash flow: RMB 770.9M in H1 2025, +206.8% YoY, continuously positive
- **BD (licensing) cash inflows: over RMB 1B in H1 2025, +280% YoY** — this line is overwhelmingly upfront/
  milestone payments from *out-licensing deals*, i.e., predominantly the biosimilar licensing deals (Accord/
  Intas, Organon, Biogen, Sandoz, etc.)
- R&D spend H1 2025: RMB 995.4M, expensed R&D +21.3% YoY, explicitly directed at "differentiated innovative
  molecules' preclinical development and core innovative platform building"
- Balance sheet: cash & bank balances only RMB 772M at period-end (roughly flat YoY — **not a large pre-
  funded war chest**); current liabilities RMB 4.941B, of which **interest-bearing borrowings RMB 2.247B**
- **No evidence found of a large fresh equity raise or direct Fosun capital injection funding this specific
  R&D program** — Fosun's post-privatization-failure share purchases were Fosun buying into Henlius as an
  investor (raising its stake to 63.43%), not an operating-capital injection into the company.
- **Core finding, worth building into the article as a central mechanism, not a footnote**: BD/licensing cash
  inflow growth (+280%) is outpacing and roughly matching operating cash flow growth (+206.8%) as a funding
  source — **biosimilar out-licensing revenue is functioning as a direct cash pump funding the innovative
  pipeline's expensive global trials**, supplemented by bank borrowing, not by equity markets or parent-
  company injection. This is the most precise available answer to "what strategic role does biosimilar play
  in this company" (§11.9): not purely core business, not purely a transition asset to be abandoned, but an
  **ongoing internal financing engine** for the innovation side of the same company.

### 11.22 Henlius's position inside the Fosun group (round 8, 2026-08-14)

Three-tier revenue structure, all 2025 fiscal-year figures:
- **Fosun International** (复星国际, the top holding conglomerate — also owns Club Med, insurance, Lanvin/
  fashion, real estate; not a pharma-focused entity at this level): total revenue RMB 173.43B, adjusted
  industrial operating profit RMB 40B. Four core subsidiaries generate RMB 128.2B (74% of group revenue);
  Fosun Pharma is one of these four, sitting under the group's "Health" (大健康) segment.
- **Fosun Pharma** (复星医药, 600196/2196.HK — Henlius's direct parent, holds 63.43% of Henlius): 2025
  revenue RMB 41.662B (+1.45%), net profit attributable to parent RMB 3.371B (+21.69%). **≈24% of Fosun
  International's total revenue.** Fosun Pharma is itself mid-transition on the same axis as Henlius:
  innovative-drug revenue RMB 9.893B (+29.59% YoY, now 33.16% of its pharma-business revenue), overseas
  revenue RMB 12.977B (+14.87%), while mainland China revenue fell 3.64% to RMB 28.685B (share shrinking from
  72.49% to 68.85%) — i.e., **Fosun Pharma's own group-level narrative is the same "domestic base under
  pressure, innovation + overseas taking over" story Henlius tells about itself**, just one level up.
- **Henlius**: 2025 revenue RMB 6.667B, net profit RMB 827M. **≈16% of Fosun Pharma's total revenue, ≈3.8%
  of Fosun International's total revenue.**

**Fosun's own stated positioning of Henlius**: explicitly called **"复星医药的核心创新资产"** (Fosun Pharma's
core innovation asset) and "an important antibody technology platform" the group will "firmly support...to
deepen innovative R&D and strengthen global competitiveness." Fosun Pharma's own 2025 headline strategic
label — **"创新药和全球化双引擎驱动高质量发展"** (innovative drugs + globalization, dual-engine driven
high-quality growth) — is *the same phrase structure* Henlius uses for itself ("Globalisation 2.0," dual
biosimilar+innovation engine). This is not an independently-invented subsidiary narrative — Henlius's
strategic story is a direct instantiation, one level down, of Fosun Pharma's own group-wide strategic theme.

**Why this matters for the article**: Henlius is financially small within the group (~16% of Fosun Pharma,
under 4% of Fosun International) but strategically central — explicitly labeled the group's core innovation/
biologics platform. This resolves the earlier apparent tension around the privatization episode (§11.17):
Fosun's willingness to spend HK$5.4B trying to take private, and its continued open-market accumulation up to
63.43% after the deal failed, makes more sense as a *strategic-platform* commitment than a *revenue-
contribution* decision — Fosun is not optimizing for Henlius's share of group revenue, it's defending and
building out its group-wide biologics/innovation flagship.

### 11.23 Henlius origin story: joint venture, not organic build or acquisition (round 8, 2026-08-14)

Answers "did Fosun found Henlius itself, or acquire it, and what's the backstory":
- **2009-02**: 刘世高 (Scott Liu) and 姜伟东 (Jason Jiang) — both former **Amgen** executives — incorporated
  an entity called "Henlius" in the US.
- **2009-12**: Fosun Pharma signed a cooperation agreement with this US-based Henlius team and **jointly
  established** Shanghai Henlius as a **joint venture** — registered capital RMB 390M, focused on monoclonal-
  antibody biosimilars, biobetters, and innovative antibodies. Early operations: Shanghai HQ, R&D centers in
  Taipei and California.
- **Neither organic Fosun build-out nor acquisition of an existing operating company** — it's a founding-era
  JV: Fosun supplied capital and domestic-market/regulatory platform access; the founding team supplied
  global pharma R&D/registration experience from Amgen. This is the same "returnee-scientist-team + domestic
  capital" JV pattern that produced BeiGene, Innovent, and other companies from the same 2009-2011 founding
  wave of Chinese biotech.
- **Possible framing point for the article**: Henlius carried built-in multinational-pharma R&D/registration
  DNA from day one via its founders' Amgen background — a different starting endowment than a purely
  domestically-grown biosimilar maker, which may partly explain why it was able to execute FDA/EMA filings
  and a broad partner network (Accord/Intas, Organon, Sandoz, Biogen) relatively fluently compared to peers.
  Worth testing against other companies in the §11.15 player map (e.g., was 三生国健 or 神州细胞's founding
  team similarly credentialed, or more domestically grown?) before asserting this as a general explanatory
  factor — currently only confirmed for Henlius specifically.

### 11.24 Second anchor case: Bio-Thera Solutions (百奥泰) — a structural contrast, not a second success story
(round 9, 2026-08-14)

Picked as the "second chair" in China biosimilar globalization (most FDA approvals + real partner deals with
Biogen and Sandoz after Henlius), following the same research framework used for Henlius. Turned out to be a
much more useful **contrasting** case than a parallel success story — genuinely different on nearly every
axis, which gives the biosimilar/§11.16-capital-discount thesis real variance to test against instead of a
second confirming data point.

**Origin**: founded 2003-07-28 in Guangzhou by Dr. 李胜峰 (Shengfeng Li) — six years before Henlius. Li was
co-founder/Chief Scientific Officer of Abmaxis, a Bay Area antibody-technology company (founded Sept 2000,
acquired by **Merck** in 2006) — same "Western big-pharma alum returns to found a China biotech" pattern as
Henlius's founders, but **solo scientist-led founding, not a joint venture with an existing domestic pharma
conglomerate**. This is the key structural difference from Henlius from day one.

**Ownership/capital structure**: controlling shareholder is **七喜集团 (Qixi Group)**; actual control runs
through several investment vehicles (启奥兴, 粤创三号, 兴昱投资, 晟昱投资, 中科卓创) — reads as a PE/
investment-platform holding structure, **not an industrial pharma conglomerate with cross-subsidization
capacity like Fosun**. Directly relevant to testing §11.16's "chaebol/conglomerate patient capital vs.
standalone biotech capital access" hypothesis — Bio-Thera lacks the Fosun-equivalent parent entirely.

**Listing venue**: IPO'd 2020-02-21 on Shanghai's STAR Market (科创板), using its 5th listing standard
(designed for pre-profit biopharma). IPO price RMB 32.76/share. **Important correction to an initial framing
error this session**: this is NOT a clean "Henlius chose HK, Bio-Thera chose STAR Market" binary. Both
companies pursued dual "A+H" listings:
- Henlius: HK IPO first (2019-09) → filed for a STAR Market A-share listing too (accepted 2020-04) → **withdrew
  that A-share plan 2023-07-03**, ending up HK-only.
- Bio-Thera: STAR Market IPO first (2020-02) → board approved an H-share/HK listing plan just 117 days later
  (2020-06-16), targeting 15-25% of post-issue share capital on HKEX → **completion status not confirmed in
  research done so far** — don't assert either that it completed or that it was abandoned without checking a
  current source.
- Henlius CEO 刘世高's stated rationale for the HK leg specifically: legitimacy/compliance certification via
  an international platform, easier access to international capital and talent, and — explicitly — that it
  would make future cross-border BD dealmaking more efficient ("对公司日后进行商务拓展会起到事半功倍的作
  用"). No equivalent explicit rationale found yet for Bio-Thera's HK ambitions specifically.

**Stock price — moves opposite to Henlius**: as of 2026-07-31 close, RMB 17.11/share, market cap RMB 7.085B
— down ~48% from the RMB 32.76 IPO price (near-halved), and down ~27% YTD in 2026 alone (the same period
Henlius was near its post-rally highs). 52-week/recent trend has been a continued slide, not a rally.

**Financial health — still loss-making, unlike Henlius (profitable since 2023)**: 2025 Q3 cumulative: R&D
expense RMB 557M = **81.4% of total revenue**, net margin -32.75%, net loss RMB 224M. 2026 guidance: H1 2026
expected loss RMB 230-290M. Cumulative losses now exceed RMB 2B. H1 2025 revenue RMB 441.9M (+9.84% YoY),
explicitly attributed in the company's own reporting to **domestic** adalimumab (阿达木单抗/adalimumab) and
tocilizumab (托珠单抗/tocilizumab) sales growth — i.e., unlike Henlius (funded substantially by *overseas BD
cash inflows*, §11.21), Bio-Thera's current revenue engine is **domestic biosimilar sales**, not overseas
licensing cash.

**A concrete negative regulatory event**: on **2026-06-14**, Bio-Thera disclosed that an **EU GMP on-site
compliance inspection failed** specifically on the drug-product/formulation manufacturing side. This is a
real, dated instance of exactly the "regulatory/manufacturing track record" constraint listed abstractly in
§11.4 — strong, concrete evidence to cite rather than a general claim about CMC risk. Likely a contributor to
the 2026 YTD stock decline.

**Self-positioning and pipeline mix**: Bio-Thera's own stated strategy is a **"双轨竞速" (dual-track racing)**
approach — but structured **by therapeutic area, not company-wide** like Henlius's mixed-within-oncology
approach: **autoimmune/inflammation is mainly biosimilar-led, oncology is mainly innovative-drug-led.**
Chairman 李胜峰 has stated the company must keep investing heavily in new technology/methods to stay
competitive in preclinical and clinical R&D scope and quality.
- Approved products (4): **adalimumab (阿达木单抗) biosimilar** (格乐立/BAT1406), **tocilizumab (托珠单抗)
  biosimilar** (施瑞立/BAT1806), **bevacizumab (贝伐珠单抗) biosimilar**
  (普贝希/BAT1706), and **贝塔宁 (a novel small-molecule antiplatelet drug, not a biologic)** — China's first
  independently-developed dual-mechanism antiplatelet drug, the company's only approved genuinely innovative
  asset so far.
- Phase 3 / filing-stage (6): 巴替非班 (small molecule, NDA-stage) + three more biosimilars — **ustekinumab
  (乌司奴单抗) biosimilar** (BAT2206), **secukinumab (司库奇尤单抗) biosimilar** (BAT2306), **golimumab
  (戈利木单抗) biosimilar** (BAT2506) — plus two innovative assets, an anti-CD20 mAb (BAT4406F) and a
  next-gen anti-VEGF mAb for wet AMD (BAT5906).
- Early-stage: two more biosimilars in Phase 1 — **dupilumab (度普利尤单抗) biosimilar** (BAT2406),
  **mepolizumab (美泊利珠单抗) biosimilar** (BAT2606) — plus a substantial oncology innovative pipeline: Trop-2
  ADC (BAT8008), FRα ADC (BAT8006, the most advanced of these), HER2 ADC (BAT8010), a HER2 mAb (BAT1006), and
  a PD-1 mAb (BAT1308).
- Rough count: **~8 biosimilars vs. ~8 innovative assets** across the full pipeline — a genuinely balanced
  count, unlike the revenue split, which is still almost entirely biosimilar-driven.

**Licensing deal territory structure — notably more fragmented than Henlius's pattern**:
- **Tocilizumab (托珠单抗, BAT1806) → Biogen**, 2021-04, one global deal excluding Greater China (mainland +
  HK + Macau + Taiwan) — a single broad-territory partner, similar in shape to Henlius's deals. **Update:
  2025-04-01, Organon acquired Biogen's specific US rights** to BAT1806 (US brand TOFIDENCE®); Bio-Thera
  retained manufacturing/supply responsibility. **This is the second time Organon appears as a downstream
  rights-holder in this research thread** (first via Henlius's pertuzumab/POHERDY deal, §11.15) — worth
  treating as a genuine cross-cutting pattern, not a coincidence, and a natural link back to the site's
  existing Organon post-mortem article.
- **Bevacizumab (贝伐珠单抗, BAT1706) → four separate territorial partners**, not one: Sandoz (US, Europe,
  Canada + most other uncovered international markets; up to $155M: $27.5M upfront + up to $127.5M milestones
  + double-digit royalty), 百济神州/BeiGene (Greater China), Biomm S.A. (Brazil, exclusive commercialization,
  2020-12 deal, later expanded 2021+ to include BAT2206/ustekinumab too), and Mega Lifesciences (Indonesia,
  exclusive distribution/sales). This fragmented, multi-partner-per-molecule structure is a meaningfully
  different BD pattern from Henlius's "one partner covers broad multi-region territory" approach — worth
  flagging as a distinct strategic style, not just a smaller-scale version of the same thing.

**Brazil PDP question (user's specific ask, round 9)**: does the Biomm deal give Bio-Thera "PDP" status
(Parceria para o Desenvolvimento Produtivo — Brazil's government productive-development-partnership program,
which requires partnering with a *public* lab, commits to technology transfer/local manufacturing, and in
exchange guarantees 5-10 years of government procurement)? **Working answer: likely no — treat as inferred,
not confirmed.** The Bio-Thera/Biomm deal (BusinessWire, 2020-12) is described as a standard commercial
licensing/distribution/marketing agreement, not a PDP structure. Separately, research found an **actual PDP
specifically for bevacizumab manufacturing localization in Brazil, but with an entirely different consortium
— Bahiafarma (public lab) + Bionovis S.A. + Samsung Bioepis** (~R$1.104B Ministry of Health investment in
year one). If accurate, this means **Samsung Bioepis secured the deeper, government-backed local-
manufacturing/guaranteed-procurement tier of Brazilian market access for the same molecule, while Bio-Thera
only secured ordinary commercial distribution** — a concrete, single-market data point potentially supporting
§11.13's hypothesis #6 (Korean firms having stronger government/policy-partnership access than Chinese
peers). **This needs verification against a primary Brazilian Ministry of Health source before being used as
a firm claim in the article** — it is currently a reasonable inference from two separately-sourced facts, not
a confirmed single statement.

### 11.25 Henlius profitability attribution + pertuzumab/denosumab timelines (round 10, 2026-08-14)

**What actually drove Henlius's 2023 first-ever full-year profit** (RMB 546M net profit, RMB 5.395B revenue,
+67.8% YoY) — direct answer to "which product(s) turned Henlius profitable":
- **HANQUYOU (汉曲优®, trastuzumab/曲妥珠单抗 biosimilar)** — the largest single contributor: RMB 2.737B total
  2023 sales (domestic RMB 2.644B +56.1% YoY; overseas RMB 92.6M +162.3% YoY, i.e. Henlius's own supply/
  royalty share from the Accord/Intas licensing arrangement, not direct sales).
- **HANSIZHUANG (汉斯状®, serplulimab/斯鲁利单抗)** — Henlius's first genuinely innovative drug (anti-PD-1,
  launched 2022-03, world's first anti-PD-1 mAb approved for first-line SCLC): RMB 1.1198B 2023 sales,
  **+230.2% YoY** — smaller absolute number than trastuzumab but by far the faster-growing line.
- Company's own attribution also credits "降本增效" (cost reduction / management efficiency), not sales
  growth alone.
- **Correction to keep in mind for the article**: the 2023 profitability turnaround was **not** purely "the
  biosimilar business funding an emerging innovative pipeline" (that framing fits the 2025 R&D-funding
  mechanism in §11.21 instead) — for the *profitability* threshold specifically, a mature biosimilar
  (trastuzumab, the volume/scale anchor) and a young innovative drug (serplulimab, the growth-rate story)
  crossed the line together in the same year. Biosimilar and innovation have been in a continuous relay
  relationship at Henlius, not a one-time "transition."

**Pertuzumab (帕妥珠单抗/pertuzumab biosimilar, HLX11, brand POHERDY®) — did NOT contribute to the 2023
turnaround, still ramping**: NMPA NDA accepted 2024-12 → EMA MAA accepted 2025-03 → Health Canada NDS accepted
2025-05 → **US FDA approval 2025-11** → EMA CHMP positive opinion 2026-02 → EU approval followed. Reference
product is Roche's Perjeta (global pertuzumab sales ~$3.304B in 2024, per IQVIA MIDAS). 2025 revenue for the
whole HER2-positive-breast-cancer product family (trastuzumab + pertuzumab combined) was RMB 3.2675B, of
which trastuzumab alone was RMB 2.9645B (+5.5% YoY) — implying pertuzumab's own 2025 contribution was only
roughly RMB 300M, consistent with a product still in its launch year.

**Denosumab (地舒单抗/denosumab biosimilar, HLX14, brands BILDYOS®/BILPREVDA®) — also did not contribute to
2023, launched even later**: **US FDA approval 2025-09-02**, **EU EC approval 2025-09-19** (UK followed in the
same window) — called the first internationally-approved "Chinese" denosumab. Reference products are Amgen's
Prolia®/Xgeva®. Notably, the **China NMPA filing was only accepted 2025-12** — i.e., international approval
came *before* the domestic filing was even accepted, reversing the usual China-first sequencing seen in most
other Henlius products. No standalone revenue figure found yet (too newly launched).

**Organon correction — it's not one deal, it's two full franchises**: Henlius's 2022 licensing+supply deal
with Organon covers **both** pertuzumab (POHERDY, ex-China) **and** denosumab (BILDYOS/BILPREVDA, ex-China) —
not just the pertuzumab deal flagged earlier in §11.15/§11.20. Trastuzumab is the one major Henlius biosimilar
that instead went to Accord/Intas. **Organon is Henlius's most important single overseas biosimilar partner
by product-line count** (two full franchises vs. Accord/Intas's one) even though trastuzumab-via-Accord
remains the single largest revenue line today. Worth foregrounding this relationship more prominently in the
eventual article — it's a strong, natural bridge back to the site's existing `organon-stock-analysis.html`
piece, reinforced further by §11.26 below (Organon's own core business model is built around exactly this
kind of legacy-biosimilar-plus-established-brands portfolio, explaining *why* it keeps showing up as a
downstream partner, not just documenting *that* it does).

### 11.26 Global biosimilar competitive landscape — US/EU players and market structure (round 11, 2026-08-14)

Zooming out from Chinese players to the global competitive backdrop they're entering.

**Market size**: global biosimilar market ~$38.7B (2025) → ~$46.4B (2026) → projected ~$185.2B by 2035
(~16.6% CAGR).

**Concentration**: **Sandoz, Pfizer, and Amgen together control ~50% of the global market**; the top 5
(adding **Celltrion** and **Biocon**) control ~55%. Sandoz alone leads with 18%+ share.

**Business-model archetypes — this typology is worth building directly into the article, since it explains
*why* certain companies keep appearing as Chinese biosimilar makers' overseas partners**:
1. **Pure-play biosimilars+generics company**: **Sandoz** — spun off from Novartis 2023-10, explicitly
   markets itself as the only "pure-play" biosimilars/generics company; generics = 70% of 2025 global sales,
   funding a higher-value biosimilar layer on top; recently created a standalone biosimilars business unit
   for faster decision-making.
2. **Legacy-brand-plus-biosimilar spinoff**: **Organon** — spun off from Merck 2021-06, *inherited Merck's
   biosimilars portfolio* alongside women's-health brands and other established/off-patent products. **This
   directly explains the recurring Organon pattern found in §11.15/§11.20/§11.25** — Organon isn't randomly
   choosing to license Chinese biosimilars, biosimilars-plus-legacy-brands is its core business model by
   design since spinoff. Natural, well-grounded bridge to the site's existing Organon post-mortem article.
3. **Diversified off-patent giants using biosimilars as one growth lever**: Teva, Viatris — large generics
   cash bases funding expansion into biosimilars/innovative brands, but not pure-play biosimilar companies.
4. **Big innovator pharma running a biosimilars division**: Amgen, Pfizer, Biogen — biosimilars are one
   segment inside a much larger innovative-pharma company, not a standalone or spun-off entity.
5. **Korean vertically-integrated specialists**: Celltrion (self-build) and Samsung Bioepis (partner-reliant)
   — already covered in depth in §11.2.
6. **Smaller specialist biosimilar-focused biotechs**: Alvotech (Iceland — 5 approved biosimilars covering
   Humira/adalimumab, Stelara/ustekinumab, Simponi/golimumab, Eylea/aflibercept, and Prolia·Xgeva/denosumab
   reference products, 9 more candidates in development), Coherus BioSciences, Fresenius Kabi (Germany,
   "Vision 2026" strategy expanding its Biopharma segment), Boehringer Ingelheim (Germany, known specifically
   for adalimumab/阿达木单抗 biosimilar manufacturing quality).

**US vs. EU are structurally different competitive environments — should not be treated as one "the West"
bucket in the article, this materially changes how §11.4's constraint #2 (commercialization complexity)
should be written**:
- **Approval pace gap**: as of 2024, EU had approved 100+ biosimilars vs. only 12 commercially launched in
  the US. In 2025 alone, **EMA authorized 44 biosimilars vs. FDA's 26**.
- **Regulatory framework**: FDA requires a biosimilar to prove **"interchangeability"** before automatic
  pharmacy-level substitution is allowed — an extra evidentiary hurdle. **EMA has no formal "interchangeable"
  designation at all** and defers switching/substitution decisions to individual member states — a
  structurally lower bar to real-world market conversion.
- **Payer/procurement structure — the deeper driver**: the EU is largely single-payer or highly consolidated
  payer systems that can force rapid biosimilar adoption via national "winner-takes-all" tenders and
  mandatory-switching policies. The **US has a fragmented private-payer/PBM system where "rebate walls" create
  a perverse incentive to favor high-list-price originator products over cheaper biosimilars** (PBMs profit
  more from rebates tied to higher list prices).
- **Net effect**: despite the US having the larger underlying biologics market, **Europe has achieved
  significantly greater biosimilar market penetration** than the US.
- **Implication for the article**: earlier discussion (§11.4) treated "US/EU market entry difficulty" as one
  combined constraint. This should be split — **the US market is structurally hard for *any* biosimilar
  entrant** (including Western ones) because of the PBM/rebate-wall dynamic, not because of anything specific
  to Chinese companies; **the EU's tender-driven, price-sensitive system is comparatively more open to a
  credible low-cost new entrant** who can clear the regulatory/manufacturing bar. This may partly explain why
  Henlius's and Bio-Thera's EU approval timelines and momentum look at least as strong as their US progress
  (e.g., HLX14/denosumab getting EU approval essentially simultaneously with US, and 44 total EMA approvals
  in 2025 alone creating far more available "slots" than the FDA's 26) — this could be a market-structure
  effect available to any capable entrant, not specific evidence of Chinese-company success in the harder US
  market. Worth testing this reading against the actual China-biosimilar approval-timeline data already
  gathered (§11.1, §11.15, §11.20, §11.25) before asserting it as a firm conclusion.

### 11.27 Global biosimilar manufacturing/CDMO landscape (round 12, 2026-08-14) — the production side, not just
commercial-stage companies

User clarified §11.26 was incomplete: "global players" should include manufacturing/CDMO companies, not only
commercialization-stage biosimilar owners.

**Global biologics CDMO ranking (by revenue; different sources order #2/#3 differently)**:
- **Lonza** (Switzerland) — #1 by sales, strong across biologics and cell/gene therapy manufacturing
- **WuXi Biologics** (药明生物, China) — 2025 record results: RMB 21.8B revenue, 209 new integrated projects
  signed, 945 total integrated projects; 580,000+ L installed/planned bioreactor capacity across China,
  Ireland, Germany, US — a top-3 global single-use mammalian capacity provider; CMAB Biopharma acquisition
  added Suzhou capacity. **Distinct listed entity from WuXi AppTec** (the company covered in §8's BIOSECURE/
  1260H thread) — same "WuXi" lineage/brand, different business (biologics CDMO vs. broader CRO/CDMO), and as
  of this research, **not confirmed to be separately named on the DoD 1260H list or otherwise directly
  targeted** — don't conflate the two entities' regulatory exposure without checking WuXi Biologics
  specifically.
- **Samsung Biologics** (Korea) — world's largest biopharma manufacturing capacity at a single site (Songdo);
  ranks #1 specifically in CDMO sales *growth rate* (a different metric than absolute revenue share).
- Other major players: Catalent, Boehringer Ingelheim BioXcellence, Fujifilm Diosynth Biotechnologies, Thermo
  Fisher Scientific, Recipharm, AGC Biologics, Siegfried.

**Market size**: global biologics CDMO market ~$22B (2024) → ~$25.41B (2025) → projected ~$92.79B by 2034
(~15.48% CAGR). Within biologics contract manufacturing, drug-substance/API manufacturing is the largest
segment (~41.3% share projected for 2026). Regional split (2026 projection): North America ~37.7%, Asia
Pacific ~28.2%.

**Samsung Biologics as a claimed BIOSECURE beneficiary — treat as reported/anticipatory, not confirmed**: one
industry article's headline framed Samsung Biologics as "climbing to global top 3" specifically *because of*
US restrictions on Chinese CDMOs. On closer reading: the mechanism cited is indeed the BIOSECURE Act; the
article names WuXi Biologics only in passing (noting WuXi AppTec is divesting some China clinical-research
services to "focus on core CRDMO strategy") and does **not** name a specific confirmed instance of Chinese
CDMO capacity being targeted or excluded; the Samsung benefit is described as expected market-share capture
"through 2030" via risk-hedging — i.e., **forward-looking positioning, not a documented completed customer
shift**. A separate, more concrete claim (different source): Samsung Biologics reports **inquiries have
doubled since BIOSECURE discussions began** — a real but early-stage business-development signal, not
confirmed contract wins. **Cross-reference to §8**: this is the same pattern already established there — the
security-hawk narrative and anticipatory industry positioning are running well ahead of BIOSECURE's actual
legal teeth (~2028 effective date) and ahead of the one concrete related enforcement action (WuXi AppTec's
1260H designation), which was itself judicially enjoined 2026-08-07.

**Why national-security scrutiny targets China specifically and not Korea/Switzerland/other major
manufacturing locations (user's question, round 12)** — most US biosimilar/biologics manufacturing is
genuinely offshore (Korea, Switzerland, Ireland, Germany all have major capacity), yet only China (plus
Russia/North Korea/Iran) is captured by BIOSECURE-style mechanisms. This is **not** a generic "offshore-
manufacturing-risk" framework — it's a narrow, nationality-of-control legal trigger:
- The statutory definition of "biotechnology company of concern" requires the entity be under the
  administrative governance, direction, or control of, or operate on behalf of, a **"foreign adversary"**
  government — and "foreign adversary" is a **closed list of exactly four countries: China, Russia, North
  Korea, Iran**. Korea and Switzerland are treaty-allied/non-adversarial nations by separate, pre-existing US
  government classification and are **structurally outside this mechanism's scope regardless of how much
  manufacturing happens there** — they were never eligible for exclusion, not excluded-then-cleared.
- US justification for China specifically centers on two claimed features of China's political/legal system,
  not manufacturing quality or location risk: (1) **军民融合/military-civil fusion** — the US DoD's own 2020
  China Military Power Report states China's civilian and military economies lack a clear boundary, meaning
  ostensibly-commercial biotech firms could be structurally drawn into PLA modernization; (2) implicit
  reliance on China's legal environment (e.g., obligations for organizations/citizens to cooperate with state
  intelligence work when compelled) as a structural risk that doesn't have an equivalent in Korean or Swiss
  law.
- **Confirmed direct beneficiaries, consistent with §11.26's finding**: Korean CDMOs (Samsung Biologics
  specifically) are named as the most immediate beneficiaries (doubled inquiries since BIOSECURE discussions
  began); Lonza (Switzerland) is positioned as best-placed to capture share given significant service overlap
  with Chinese manufacturers in biologics and cell/gene therapy.
- **Framing point for the article**: the "double standard" the user's question points at isn't really a
  double standard within the law's own logic — the mechanism was designed from the outset as a nationality-
  of-adversary-government trigger, not a manufacturing-risk-assessment framework. If it were the latter, Korea
  and Switzerland would need to be assessed too. Making this distinction explicit prevents the article from
  either (a) implying the US is neutrally assessing manufacturing risk across all countries (it isn't), or
  (b) implying the exclusive China focus is manufacturing-quality-driven (the evidence, e.g. Henlius's FDA/EMA
  facility inspections below, argues against that reading too).

**Henlius-Organon products: where they're actually manufactured (user's question, round 12) — a concrete case
testing all of the above**: **both pertuzumab (HLX11/POHERDY) and denosumab (HLX14/BILDYOS+BILPREVDA) are
manufactured entirely in China**, at Henlius's own Shanghai-area facilities — Xuhui Facility, Songjiang First
Plant (24,000L, China GMP 2022, **FDA Pre-License Inspection passed 2023-08**), and Songjiang Second Plant
(adding 96,000L, bringing total capacity to 144,000L by 2026; current total ~48,000L). Organon holds only the
ex-China *commercialization* rights — manufacturing and supply stay entirely with Henlius in Shanghai.
Specific regulatory confirmation for these two products: **HLX14's production facilities passed an FDA
Pre-License Inspection and are cGMP-compliant**; in **2025-06** the **Belgian federal medicines agency**
(FAMHP) issued two GMP certificates confirming EU-GMP equivalence for the HLX14 production line. **This is a
concrete, dated case where FDA/EU regulators physically inspected and passed Chinese manufacturing facilities
for products now sold under a Western brand (Organon) in the US and EU** — directly complicating any
narrative that treats "Chinese-manufactured biologic" as inherently a quality/safety problem. The security
concern being legislated (BIOSECURE, 1260H) is about corporate-control/nationality, not about facility
inspection outcomes — this Henlius/Organon case is good concrete evidence for keeping those two questions
separate in the article, exactly as flagged in §9's three-category framework.

### 11.28 EU procurement policy risk for China-manufactured biosimilars (round 12, 2026-08-14)

Direct follow-up to §11.27: given Henlius's pertuzumab and denosumab are 100% single-sourced from Shanghai
with no disclosed dual-sourcing/EU-based backup capacity, could this affect competitiveness in EU tenders?
**Current answer: not yet under any confirmed, currently-applicable rule — but the EU has already shown it
will use blunt country-of-origin exclusion tools once it decides to, and a pharma-specific version is in
active legislative development.**

- **EU Critical Medicines Act (CMA)**: political agreement reached 2026-05-12; final legal text not yet
  published (expected in the Official Journal toward end of 2026), application date still unconfirmed —
  **same "rhetoric ahead of legal effect" timing pattern already seen with BIOSECURE in §8**. Motivating data:
  60-80% of API production for generic medicines has moved to China/India; **China specifically supplies 67%
  of EU antibiotic API imports and 95% of vitamin C derivative imports**. Once applicable, the CMA will
  require supply-chain-resilience criteria in public procurement of "critical medicines" — shifting away from
  pure lowest-price tendering toward "Most Economically Advantageous Tender" (MEAT) criteria that weight
  security of supply, and the European Parliament is pushing for **preferential tender treatment for
  companies with a "significant proportion" of EU-based production**. Political framing is explicitly
  security-coded: in spring 2025, **11 EU health ministers jointly warned that European dependence on Chinese
  medicines is "the weak point in Europe's defence."**
- **Already-in-force precedent, but scoped to medical devices, not pharmaceuticals**: on **2025-06-19**, the
  EU's International Procurement Instrument (IPI) was used for the first time to **fully exclude Chinese
  medical-device suppliers from EU public contracts above €5M for five years** (effective 2025-06-30); other
  bidders (US, UK, Swiss, EU, etc.) must keep China-manufactured content under 50% of contract value. **No
  evidence found that this IPI mechanism has been extended to pharmaceuticals or biosimilars** — it remains a
  medical-device-specific measure as of this research, but it demonstrates the EU is willing to move from
  rhetoric to a hard, quantified exclusion rule once it decides a sector warrants it.
- **No evidence found of country-of-origin exclusion criteria currently used in actual EU biosimilar tenders**
  — biosimilar-procurement literature discusses "manufacturing/supply security" as a consideration in the
  abstract, but nothing concrete tying tender outcomes to country of origin has surfaced yet.
- **Reading for the article**: Henlius's/Organon's pertuzumab and denosumab are not disadvantaged by any
  confirmed current EU rule, but they carry a real, single-source, all-China-manufacturing forward risk once
  the Critical Medicines Act's procurement provisions are finalized and if they end up applying to biologics/
  biosimilars (not just small-molecule generic APIs) — worth flagging as a genuine unresolved exposure rather
  than either dismissing it or overstating it as an active constraint today.

---

## 12. Key source URLs (for citation when drafting)

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

**Added 2026-08-14 (termination taxonomy + national-security correction round):**
- 证券时报 2023年License-out退货清单 (primary taxonomy source for §7.2): https://finance.sina.cn/stock/med/2024-01-20/detail-inaecprk7706682.d.html?vt=4&cid=76524&node_id=76524
- 证券时报 诺诚健华×Biogen termination + FDA hold timeline: https://www.stcn.com/article/detail/795600.html
- FierceBiotech, Roche tiragolumab SKYSCRAPER-01 final failure: https://www.fiercebiotech.com/biotech/roches-tigit-prospect-fails-another-phase-3-lung-cancer-test
- BioPharma Dive, Roche TIGIT SKYSCRAPER-01 negative OS: https://www.biopharmadive.com/news/roche-tigit-skyscraper-01-survival-negative-failure/733999/
- BioPharma Dive, EQRx strategic reset / wind-down: https://www.biopharmadive.com/news/eqrx-reset-restructuring-layoffs-pipeline/649740/
- FierceBiotech, EQRx pipeline cuts and partnership endings: https://www.fiercebiotech.com/biotech/eqrx-culls-pipeline-down-1-program-ends-2-partnerships-and-lays-170
- Baker McKenzie, BIOSECURE Act becomes law (signing date confirmation): https://www.bakermckenzie.com/en/insight/publications/2026/01/united-states-the-biosecure-act-becomes-law
- Holland & Knight, WuXi AppTec added to DoD's 1260H list — mechanism explainer (source for §8's legal-relationship clarification): https://www.hklaw.com/en/insights/publications/2026/06/wuxi-apptec-added-to-dows-1260h-list
- WilmerHale, Pentagon adds 65 new entities to 1260H list (June 2026 update context): https://www.wilmerhale.com/en/insights/client-alerts/20260611-pentagon-adds-65-new-entities-to-the-1260h-list-of-chinese-military-companies
- Endpoints News, judge blocks enforcement of WuXi AppTec's 1260H designation (Aug 7 2026 injunction): https://endpoints.news/judge-blocks-enforcement-of-wuxi-apptecs-designation-as-chinese-military-company/
- South China Morning Post, US judge blocks Pentagon's "Chinese military" label for WuXi AppTec: https://www.scmp.com/news/us/article/3363369/us-judge-blocks-pentagons-chinese-military-label-wuxi-apptec
- Bloomberg, WuXi AppTec gets temporary reprieve of Chinese military label: https://www.bloomberg.com/news/articles/2026-08-08/wuxi-apptec-gets-temporary-reprieve-of-chinese-military-label

**Added 2026-08-14 (biosimilar benchmark round):**
- Henlius press release, HERCESSI granted to Accord BioPharma (US/Canada exclusive rights, 2021 deal): https://www.henlius.com/en/NewsDetails-2779-26.html
- Henlius/Accord Healthcare, Zercepac EMA approval (EU rights): https://www.henlius.com/en/NewsDetails-2670-26.html
- PR Newswire, Accord BioPharma FDA approval of HERCESSI 420mg: https://www.prnewswire.com/news-releases/accord-biopharma-inc-announces-us-food--drug-administration-approval-of-420mg-strength-of-hercessi-trastuzumab-strf-a-biosimilar-to-herceptin-trastuzumab-for-the-treatment-of-several-forms-of-her2-overexpressing-cance-302251163.html
- Biogen press release, Biogen×Bio-Thera tocilizumab biosimilar commercialization/license agreement: https://investors.biogen.com/news-releases/news-release-details/biogen-and-bio-thera-solutions-announce-commercialization-and
- BusinessWire, Bio-Thera×Sandoz BAT1706 (bevacizumab) commercialization/license agreement: https://www.businesswire.com/news/home/20210908005540/en/Bio-Thera-Solutions-Announces-Commercialization-and-License-Agreement-for-BAT1706-a-Proposed-Biosimilar-Referencing-Avastin%C2%AE-Bevacizumab
- Biocon, Viatris global biosimilars acquisition — deal announcement: https://www.biocon.com/biocon-biologics-to-acquire-viatris-global-biosimilars-assets-in-transformational-deal/
- Biocon, Viatris deal completion (Nov 29 2022) + terms: https://www.biocon.com/biocon-biologics-completes-acquisition-of-viatris-global-biosimilars-business/
- KED Global, Samsung/Celltrion biosimilar commercialization model comparison (partner-reliant vs. self-built): https://www.kedglobal.com/bio-pharma/newsView/ked202503100007
- 经济观察网, 中国生物类似药井渐"出海"欧美市场潮起 (Henlius/Bio-Thera/Qilu overseas approval roundup): http://www.eeo.com.cn/2024/0509/659940.shtml

**Added 2026-08-14 (player map + capital-discount + Henlius privatization round):**
- Henlius/Organon, EC approval of POHERDY (pertuzumab biosimilar, EU): https://www.organon.com/news/european-commission-ec-approves-henlius-and-organons-poherdy-pertuzumab-the-first-approved-biosimilar-to-perjeta-pertuzumab-in-europe/
- Henlius/Organon, US FDA approval of POHERDY: https://www.organon.com/news/henlius-and-organon-announce-us-fda-approval-of-poherdy-pertuzumab-dpzb-the-first-perjeta-pertuzumab-biosimilar-in-the-us/
- Bioon, Innovent bevacizumab/adalimumab new-indication approvals (background on Innovent's biosimilar line): https://news.bioon.com/article/71aae095200e.html
- Phirda, 三生国健's post-2019-VBP pivot away from biosimilar toward autoimmune innovative drugs: https://www.phirda.com/artilce_36905.html?module=trackingCodeGenerator
- Phirda, 三生国健 licensing non-autoimmune early assets to an affiliate for cash: https://m.bjnews.com.cn/detail/1740047421168304.html
- Pedaily/投资界, "生物类似药的命运沉浮" — 2021 VBP-driven valuation collapse for biosimilar-focused companies: https://news.pedaily.cn/202305/513552.shtml
- Fierce Pharma, Celltrion/Samsung "duel" — both pledging billions to biologics (capital-commitment scale): https://www.fiercepharma.com/manufacturing/celltrion-and-samsung-duel-shaping-up-as-both-pledge-billions-dollars-to-biologics
- 上海证券报, 复星医药拟54亿港元私有化复宏汉霖 (privatization deal terms + stated rationale): https://paper.cnstock.com/html/2024-06/26/content_1934882.htm
- 证券时报, 独立H股股东不买账？复宏汉霖私有化方案未通过 (rejection vote details, 19.25%): https://finance.stockstar.com/IG2025012200043915.shtml
- 财联社, 独立股东"不答应"！复宏汉霖私有化计划告吹 (vote mechanics, 75%/10% thresholds): https://www.cls.cn/detail/1927191
- 新浪财经, 复星医药私有化复宏汉霖不予实施 (H-share listing status retained after failed vote): https://www.stcn.com/article/detail/1505969.html
- 财联社, 私有化复宏汉霖未果后复星医药出手增持 (Fosun's stake rising to 63.43% post-failure via open-market purchases): https://www.cls.cn/detail/2010383
- HKCGI (香港公司治理公会), 浅议香港上市公司之私有化 (2024) — mechanics of privatization vs. buyback, compulsory acquisition rights, H-share exemption requirement: https://www.hkcgi.org.hk/files/publication/2573/Guideline%20for%20Privatization%20of%20Hong%20Kong%20Listed%20Companies%202024_(CHI)_Digital_final.pdf
- 金杜律师事务所, 以退为进：H股上市公司私有化之路 (H-share-specific privatization mechanics): https://www.kingandwood.com/cn/zh/insights/latest-thinking/the-road-to-privatization-of-h-share-listed-companies.html
- 华盛通, 复宏汉霖港股IPO首发49.6港元/股 (2019 IPO price): https://www.hstong.com/news/detail/19091907440551554
- 经济观察网, 创新药企复宏汉霖消亡史 (full price-history narrative, IPO to 2024 halt): http://www.eeo.com.cn/2024/0629/669537.shtml
- Investing.com (cn), 私有化宣告失败！复宏汉霖股价大跌 (stock fell, not rose, after rejection): https://cn.investing.com/news/stock-market-news/article-2645987

**Added 2026-08-14 (stock rally, HLX43, pipeline mix, Fosun group structure round):**
- Investing.com (cn), Shanghai Henlius Biotech equity page (2026-08-14 dated snapshot, HK$67.30 close): https://www.investing.com/equities/shanghai-henlius-biotech-inc
- Tencent News, Henlius 2025 interim results — overseas profit +200%+, global commercialization signal: https://news.qq.com/rain/a/20250826A02MIJ00
- Sina Finance, Henlius 2025 full-year results — RMB 6.667B revenue, +16.5% YoY: https://finance.sina.com.cn/roll/2026-03-21/doc-inhrtpvz6054467.shtml
- Sina Finance, Henlius stock hit HK$85.95 all-time high Aug 2025, YTD +250%+, Citi target HK$95/Buy (via search synthesis, original stockstar-family sourcing)
- business-news-today.com, Henlius HLX43 deal talks with J&J and Roche (reported, unconfirmed as closed): https://business-news-today.com/why-henlius-biotechs-hlx43-deal-talks-with-johnson-johnson-and-roche-are-shaking-up-global-oncology/
- ClinicalTrials.gov, HLX43-NSCLC302 global Phase II/III study record: https://clinicaltrials.gov/study/NCT07459751
- PharmExec, Henlius global exclusive license agreement with U-mab Biopharma (IL-1RAP mAb, in-licensing, context on Henlius's BD activity pattern): https://www.pharmexec.com/view/henlius-enters-global-exclusive-license-agreement-umab-biopharma-best-in-class-potential-anti-il-1rap-mab
- Henlius 2025 interim results investor presentation (PDF, H1 2025 cash flow/R&D figures): https://www.henlius.com/upload/202508/25/%E5%A4%8D%E5%AE%8F%E6%B1%89%E9%9C%962025%E5%B9%B4%E4%B8%AD%E6%9C%9F%E4%B8%9A%E7%BB%A9%E6%8E%A8%E4%BB%8B.pdf
- Henlius, ipilimumab biosimilar license agreement with Sandoz: https://www.henlius.com/en/NewsDetails-4992-26.html
- Henlius, nivolumab biosimilar HLX18 FDA IND clearance: https://www.henlius.com/en/NewsDetails-5802-26.html
- Fosun Group, Henlius H1 2025 results (fosun.com corporate news): https://www.fosun.com/content/details46_4870.html
- Fosun Pharma, statement on Henlius as "core innovation asset" post-failed-privatization: https://www.fosunpharma.com/content/details37_13576.html
- Fosun Group, Fosun International 2025 total revenue RMB 173.43B announcement: https://www.fosun.com/content/details46_4978.html
- Fosun Group, Fosun Pharma 2025 results — "innovative drug + globalization dual-engine" framing: https://www.fosun.com/content/details46_4975.html
- 知乎/药时代, 复宏汉霖的故事——医药界的中国合伙人 (founding story, Scott Liu/Jason Jiang, Amgen background, 2009 JV): https://zhuanlan.zhihu.com/p/385627098
- Forbes China, "Grown Up" Drug Maker Shanghai Henlius Targets Global Fight To Beat Cancer (English-language founding/company profile): https://www.forbes.com/sites/forbeschina/2025/06/24/grown-up-drug-maker-shanghai-henlius-targets-global-fight-to-beat-cancer/
- Fierce Pharma, Henlius CEO scouts for US PD-1 partner amid Fosun unit's pivot to innovative drugs from biosimilars (English coverage of the biosimilar→innovation narrative): https://www.fiercepharma.com/pharma/fosuns-henlius-ceo-scouts-us-pd-1-partner-amid-pivot-innovative-drugs-biosimilars

**Added 2026-08-14 (Bio-Thera second-anchor-case round):**
- 搜狐/中国生物制药 coverage, 百奥泰董事长李胜峰 on R&D/globalization focus: https://www.sohu.com/a/901210926_122014422
- 七喜集团, 李胜峰专访 — "生物创新药、改良药与类似药的多点布局" (founding background, Abmaxis/Merck): https://www.hedy.com.cn/cn/qiyetoutiao/meitibaodao/208.html
- 上海证券报, BAT1806 (tocilizumab) business-development update incl. Organon's 2025 acquisition of Biogen's US rights: https://paper.cnstock.com/html/2025-04/02/content_2043726.htm
- BusinessWire, Bio-Thera Solutions Partners with Biomm to Market BAT1706 (bevacizumab) in Brazil: https://www.businesswire.com/news/home/20201217005376/en/Bio-Thera-Solutions-Partners-with-Biomm-to-Market-BAT1706-in-Brazil
- BioSpace, Bio-Thera expands Biomm partnership in Brazil with BAT2206 (ustekinumab) addition: https://www.biospace.com/bio-thera-solutions-expands-partnership-with-biomm-in-brazil-with-addition-of-bat2206-a-stelara-biosimilar
- 北京日报/bjnews, 1.55亿美元 Bio-Thera bevacizumab licensed to Sandoz (deal terms): https://m.bjnews.com.cn/detail/1631174772122604.html
- Biológicos Brasil, "O que são PDPs?" — Brazilian Productive Development Partnership mechanism explainer: https://biologicosbrasil.com.br/o-que-sao-pdps/
- CONASS, Bahiafarma/Bionovis/Samsung Bioepis PDP context (South Korea mission, biosimilar manufacturing localization): https://www.conass.org.br/duas-pdps-para-producao-de-medicamentos-na-bahiafarma-sao-assinadas-em-missao-na-coreia-do-sul/
- 界面新闻, 科创板上市117天后，百奥泰再赴港交所上市 (H-share listing plan announcement, 2020-06): https://www.jiemian.com/article/4539582.html
- 21世纪经济报道, 百奥泰盘中一度跌超7%，累计亏损超20亿元 (2026 stock decline, cumulative losses, EU GMP inspection failure): https://www.21jingji.com/article/20260616/herald/8a209b1bd741ee161d0bb4aa56c8c232.html

**Added 2026-08-14/15 (global CDMO landscape, China-specific national-security logic, Henlius manufacturing location, EU procurement round):**
- Mordor Intelligence, Top Biologics CDMO Companies: https://www.mordorintelligence.com/industry-reports/biologics-contract-development-and-manufacturing-organization-cdmo-market/companies
- Morningstar, China's Biggest Biologics CDMO WuXi Biologics Becoming a Global Leader: https://www.morningstar.com/company-reports/1145740-chinas-biggest-biologics-cdmo-wuxi-biologics-becoming-a-global-leader
- KoreaBioMed, Samsung Biologics climbs to global top 3 as US advances bioindustry limits on Chinese CDMOs: https://www.koreabiomed.com/news/articleView.html?idxno=29468
- Congress.gov, H.R.8333 BIOSECURE Act (118th Congress) full bill text: https://www.congress.gov/bill/118th-congress/house-bill/8333
- Baker McKenzie, BIOSECURE Act potential implications for collaborations with Chinese companies ("biotechnology company of concern" definition, foreign-adversary list): https://sanctionsnews.bakermckenzie.com/the-biosecure-act-potential-implications-for-biotechnology-collaborations-with-chinese-companies/
- RFA 普通话, 美国会警示中国在生物科技与人工智能的领先地位 (军民融合 congressional testimony coverage): https://www.rfa.org/mandarin/zhengzhi/waijiao/2025/02/06/china-biotechnology-aviation-ai-competition-us/
- 金杜律师事务所, "军民融合"视角下的跨国管制·制裁与风控合规: https://www.kwm.com/cn/zh/insights/latest-thinking/cross-border-control-sanctions.html
- 投资界/动脉网, FDA批准HLX11(POHERDY) — production/GMP system background: https://www.vbdata.cn/intelDetail/836812
- 腾讯新闻, FDA批准HLX14 (BILDYOS/BILPREVDA) 8项适应症 — includes PLI/facility inspection detail: https://news.qq.com/rain/a/20250901A07MO700
- Henlius (Media), Songjiang First Plant QP Declaration of EU-GMP equivalence: https://www.henlius.com/en/NewsDetails-3633-26.html
- Henlius (Media), Xuhui Facility passes PIC/S member ANVISA GMP inspection: https://www.henlius.com/en/NewsDetails-4297-26.html
- PharmTech, The Critical Medicines Act's Impact on Pharmaceutical Manufacturing and Supply Resilience in Europe: https://www.pharmtech.com/view/the-critical-medicines-act-s-impact-on-pharmaceutical-manufacturing-and-supply-resilience-in-europe
- Consilium (EU Council), Critical Medicines Act: Council and Parliament reach provisional deal (2026-05-12): https://www.consilium.europa.eu/en/press/press-releases/2026/05/12/critical-medicines-act-council-and-parliament-reach-provisional-deal/
- White & Case, EU imposes first International Procurement Instrument measure restricting Chinese access to medical devices procurement: https://www.whitecase.com/insight-alert/eu-imposes-first-international-procurement-instrument-measure-restricting-chinese
- PwC Switzerland, EU sets 50% threshold for Chinese content in medical device tenders: https://www.pwc.ch/en/insights/tax/pharma-life-sciences/eu-ipi-50-percent-limit-medical-devices.html
- CFR (Council on Foreign Relations), The Pharma Choke Point (EU API dependency framing): https://www.cfr.org/reports/the-pharma-choke-point
