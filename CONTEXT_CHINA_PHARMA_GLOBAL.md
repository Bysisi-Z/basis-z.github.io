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
