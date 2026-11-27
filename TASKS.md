# Tasks

## Active queue — parallel RWA discovery (27 November 2026)

- [ ] Continue searching for distinct RWA workflows in parallel; do not wait for D-033 or D-038 outreach replies before advancing other research.
- [ ] Build a comparative scorecard across live hypotheses: pain severity/recurrence, named buyer and budget owner, existing substitutes, economic impact, procurement path, MVP feasibility, differentiation, GTM and material Arbitrum fit.
- [ ] Make an evidence-weighted product-selection decision when the best available case is sufficiently stronger than alternatives; unresolved assumptions must be explicit and paired with a short validation plan. Do not require every interview to finish before selecting a leading hypothesis.
- [ ] Keep implementation separate: no MVP/code until explicit GO and the implementation GO gate in PROJECT_CONTEXT.md are satisfied.

## D-033 — RWA collateral realisability buyer validation (D-037, 27 November 2026)

- [ ] Validate D-033's residual RWA question: whether tokenised collateral users need independent assurance that collateral can be legally accessed, transferred, converted and realised within required stress windows.
- [ ] Prioritize two independent banks, CCPs or clearing members; interview Heads of Collateral Risk, Collateral Operations, Secured Financing Operations or Default Management.
- [ ] Obtain real redacted incidents involving failed/delayed access, transfer, conversion, custody dependency or liquidation of tokenised collateral under normal or stressed conditions.
- [ ] Measure recurrence, exposure/loss, time-to-realise, manual controls and current workaround.
- [ ] Identify budget owner and prove a specific gap beyond Chainlink Fulcrum, Transcend, custody/TA platforms and internal risk controls.
- [ ] Obtain explicit willingness to test a bounded, read-only evidence workflow.
- [ ] Determine whether shared Arbitrum state is genuinely required; reject the idea if signed attestations, APIs, standards or a conventional database suffice.
- [ ] Keep this as a problem-validation question, not a candidate or WATCH, until the complete GO gate is met. No MVP before GO and explicit authorization.
- [ ] Keep D-029 cross-border commodity collateral as the only current WATCH, but treat it as RWA-adjacent asset finance rather than the primary tokenised-RWA direction. Validate it only if relevant buyers surface a concrete, differentiated case.
- [x] Close the prior issue-driven candidate set under D-026; D-007/D-008 and D-010–D-024 (including GapGuard) are historical evidence, not active product candidates or current WATCH items.
- [x] Close B2B stablecoin payment operations under D-028.
- [x] Complete global screens D-030, D-031 and D-032.
- [x] Complete RWA infrastructure screen D-033; no generic RWA product selected.
- [x] Complete repository-wide audit and canonical-state cleanup under D-034.

### Targeted operator evidence check — D-035 (27 November 2026)

- [x] Recheck the Bank of England and ESMA consultations for the precise legal/operational path from posted tokenised collateral to usable liquidity after default.
- [x] Separate Eurex/HQLAx/Clearstream collateral mobilisation from CCP-held tokenised-collateral liquidation; record the distinction and legal/operational boundaries.
- [x] Verify DTCC/DTC production tokenisation and CCP-margin workflow status, named participants and what the public sources do not establish.
- [x] Map interview targets at Eurex Clearing, J.P. Morgan, DTCC/DTC, CME Clearing and BNP Paribas Securities with participation caveats.
- [x] Record that no buyer interviews, redacted incidents, quantified customer losses, budget owner or pilot commitment were obtained.
- [ ] Conduct two independent primary operator interviews (CCP and clearing-member/bank); obtain one redacted default drill, near-miss or exception from each with timestamps and impact.
- [ ] Identify budget owner, existing controls/workarounds and explicit bounded read-only pilot willingness.
- [ ] Prove a differentiated gap beyond CSD/custody, HQLAx/Clearstream, DTCC infrastructure, collateral platforms and internal default-management controls.
- [ ] Establish whether Arbitrum shared state is materially required; current evidence does not support this.
- [ ] Keep this as a problem-validation question only. No candidate/WATCH/MVP/code until the full GO gate and explicit authorization.

Full evidence: [research/RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md](research/RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md).

### Direct operator outreach and CCP criteria — D-036/D-037 (27 November 2026)

- [x] Send initial research requests to Eurex Default Management and CME Clearing Risk Management using official public mailboxes.
- [x] Verify and record CME's perfected-security-interest requirement and one-hour cash-liquidation threshold / committed-liquidity-facility fallback.
- [x] Verify Eurex's 2 December 2026 EMIR Fire Drill, participation eligibility, and distinction between the four-hour client-porting prerequisite window and cash realisation.
- [x] Send targeted follow-up requests to Eurex Client Services and CME Clearing Collateral Risk.
- [x] Check connected Gmail for responses to the four outreach messages; no replies found at this checkpoint.
- [ ] Track replies and confirm whether responders have direct collateral/default-management operational responsibility.
- [ ] After the 2 December exercise, inspect public non-confidential outputs; do not infer outcomes merely from the exercise taking place.
- [ ] Obtain one independent clearing-member DMP Coordinator / Collateral Operations account and one CCP operator account, each with a redacted drill/near-miss/exception.
- [ ] Determine whether CME's liquidity-facility fallback and existing CCP/member controls already eliminate the alleged tokenised-collateral gap.
- [ ] Do not send repeated generic messages; follow up once after a reasonable interval and use verified role-specific routes.

Full evidence: [research/RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md](research/RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md).

## GO criteria

A candidate advances only when all conditions are met:
1. Named economic buyer and budget-owning role.
2. Two independent buyers/operators corroborate the same recurring problem.
3. Real redacted incidents or workflow examples.
4. Measured frequency and economic/operational impact.
5. Specific unmet workflow beyond current products and workarounds.
6. Explicit willingness to run a bounded pilot.
7. Material Arbitrum/shared-state requirement.

## Research guardrails

- No broad market scans to avoid making a decision.
- Do not reopen closed decisions without new primary evidence that directly changes their rejection rationale.
- Do not treat vendor claims, regulations, GitHub issues, job postings, ecosystem growth or hackathon wins as buyer validation.
- Preserve historical research; do not present superseded tasks as active work.
- Do not add dependencies, scaffolding, tests or infrastructure without a concrete need.
- No code or MVP until GO and explicit authorization.

## Historical task archive

The earlier issue-driven task backlog and completed scans are retained below for traceability. They are not active work after D-026 and D-034 unless new primary evidence satisfies the reopen criteria.

---
## Research guardrails

- [x] Review prior idea research and consolidate it in `RESEARCH_LOG.md`.
- [x] Review major Arbitrum hackathon/Open House winners and record them in `WINNER_MAP.md`.
- [x] Remove explicitly excluded projects from the candidate pipeline.
- [x] Replace the stale RWA Servicing Copilot priority with the user-approved issue-driven discovery stage.
- [x] Record previously rejected directions to prevent duplicate searches.
- [ ] Do not restart broad market scans without a defined unresolved question.
- [ ] Do not treat hackathon winners, ecosystem narratives, or subjective score matrices as proof of customer demand.

## Engineering baseline

- [x] Establish repository structure, mandatory research rules, minimal package metadata, and source/test placeholders.
- [ ] Add application code and real tests only after a product reaches GO and implementation is authorized.

## GO criteria for a concept

A concept cannot move to implementation until all are true:
1. Named ICP and buyer.
2. Specific, recurring, expensive problem supported by primary evidence.
3. Existing workaround and why it fails.
4. At least one credible design partner or equivalent commitment to test.
5. Clear reason the solution needs Arbitrum / its specific capabilities.
6. Demo scope achievable by a small team within the event timeline.
7. Differentiation from existing products demonstrated, not asserted.

- [x] Review Ekubo event-gap audit/verification/backfill/monitor scripts and current DALP indexer health, checkpoint, backfill, and reindex operational docs as substitutes.


## Follow-up research — 27 November 2026

- [x] Recheck Nuthatch's current RPC cost documentation against release 5.17.0; correct the earlier ~$185/month figure as an every-block historical configuration, not the current five-minute default.
- [x] Review Morpho Blue borrower-feed offer #118, the operator's parallel offer, existing Morpho API/Envio HyperIndex provider paths, and whether any subscriber/WTP evidence exists.
- [x] Review Morpho viem-dlc #1 historical cache OOM, root cause, closure, and maintainer mitigation; classify as SDK-specific rather than a product gap.
- [x] Recheck Nitro #4770 with comments and time-aligned snapshots; classify as a false-positive BoLD warning, not an additional confirmed node outage.
- [x] Recheck official Arbitrum HA sequencer and sequencer troubleshooting docs as substitutes for generic operations tooling.
- [ ] Find an independent Morpho/Aave liquidation operator who identifies a missing send-time input, quantifies missed opportunities or infrastructure cost, and agrees to test a bounded feed.
- [ ] Find a hosted-indexer owner who quantifies detection/backfill labor, spend, SLA/customer impact, and current reconciliation automation.
- [ ] Recheck Nitro #4733 only for independent matching reports or a source-level upstream fix; do not broaden into generic monitoring.

- [x] Recheck Aave #926 sequencer sentinel false-positive issue against current Aave v3.7 source and governance deployment; confirm Part 2 executed on Arbitrum on 28 May 2026 and sentinel removed from borrow/liquidation checks.

## Follow-up research — silent RPC log-result corruption (27 November 2026)

- [x] Recheck Nitro #4788: numeric eth_getLogs requests above head returned current-head logs on Arbitrum One and Robinhood Chain; verify closure metadata, discussion, and focused fix-PR search.
- [x] Review independent Lasso RPC #460 reproduction of lagging-upstream null/empty results accepted by a router; classify mock-harness results separately from production evidence.
- [x] Review DefiLlama SDK #302 and dimension-adapters #11308: six short cached event ranges found among 545 checked entries, with reported downstream impact on Maverick V1 BSC and Bend Berachain; identify Base as adjacent L2 evidence, not an Arbitrum incident.
- [ ] Verify a public Nitro release/source fix for #4788; closed state alone is not proof of resolution.
- [ ] Find an independent Arbitrum/Orbit indexer or protocol operator with a production wrong/empty eth_getLogs response and quantified missed events, recovery labor, revenue/SLA impact, or RPC cost.
- [ ] Track DefiLlama #302 for maintainer response, cache rebuild, and fix; do not assume remediation from the issue being open.
- [ ] Validate what SQD Portal, Envio HyperSync, and indexer-native tools already catch in this exact silent-empty/wrong-height workflow before proposing any product.
- [ ] Do not promote a generic RPC proxy, health monitor, provider ranker, or completeness dashboard; require a named operator and a bounded budget-backed workflow.

## Final bounded validation cycle — D-025 (27 November 2026)

This section supersedes open-ended discovery tasks above. Do not add new sectors or candidates outside these three passes.

- [ ] **Pass A — operator validation:** seek direct independent confirmation from one Arbitrum/Orbit indexer operator of a production silent RPC/event-ingestion failure with quantified impact and from one Morpho/Aave liquidation operator of a recurring send-time data gap. Existing public issues and unanswered outreach are not buyer evidence.
- [ ] **Pass B — one adjacent workflow:** validate only the existing WINNER_MAP hypothesis, post-origination servicing of tokenized private credit. Identify economic buyer, recurring work, current software/vendor workaround, measurable cost, and route to a bounded pilot. Do not brainstorm additional sectors.
- [ ] **Pass C — final decision:** compare no more than three finalists using Pain, Evidence, Competition, Buyer, Feasibility, and Distribution. GO only with a named buyer, independently corroborated recurring pain, quantified cost, unmet workflow, and credible pilot commitment/willingness to test.
- [ ] If no candidate meets the GO gate at Pass C, record NO-GO for this search set and stop; change the market/problem frame rather than extending discovery.
- [x] Competitive reality check: Envio HyperSync, eRPC 0.5.0, and SQD/Ponder Portal cross-validation/fail-loud controls reviewed; silent RPC integrity downgraded to weak WATCH.


## D-025 Pass A — public operator evidence check (27 November 2026)

- [x] Re-read Nitro #4788 issue metadata and all comments; verify close reason, reporter, release family, and whether any comment supplies operator cost/WTP evidence.
- [x] Re-read Morpho Blue liquidation bot #121 and all comments; confirm whether the sponsored 90-day endpoint experiment received an operator response.
- [x] Re-read Morpho #118 and its follow-up; distinguish feed supply from demand and check for a subscriber/pilot.
- [x] Check official Morpho market-position health API freshness semantics and compare them with the published liquidation-bot's on-chain qualification/simulation workflow.
- [x] Record Pass A result without upgrading technical evidence into buyer validation.
- [ ] Pass B only: validate post-origination servicing of tokenized private credit with actual servicing/fund-operations buyers, recurring workload, measurable cost, existing systems, and bounded pilot willingness.
- [ ] Pass C: score no more than three finalists and issue GO/NO-GO under D-025. If none meets the gate, stop this search set.

Pass A evidence report: [research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md](research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md). Public issue research produced no independent buyer confirmation, quantified cost, or pilot commitment. Do not repeat broad issue searches as a substitute for operator access.


## Final discovery result — D-026 (27 November 2026)

- [x] Pass A public operator evidence check completed; no buyer/pilot validation.
- [x] Pass B post-origination tokenized private-credit servicing hypothesis checked against operating-pain evidence and current substitutes.
- [x] Pass C scored the three allowed candidates and applied the D-025 GO gate.
- [x] Record NO-GO for the current search set under D-026.
- [x] Stop this discovery cycle. No implementation authorized.

Do not resume broad issue/sector research or add candidates to this search set. Reopen only on new primary evidence satisfying the buyer, recurring pain, measurable cost, unmet workflow, and bounded-pilot gate, or with a separately framed market/problem cycle. Final report: [research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md](research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md).


## D-027 — New Cycle 01: B2B stablecoin payment operations

- [x] Open a separate, bounded problem frame after D-026; do not reopen the previous candidates.
- [x] Review institutional and SMB evidence for reconciliation across payment intent, gateway, chain, recipient, treasury/bank and accounting records.
- [x] Map direct competitors including Utila/Cordant, Fipto/Kyriba, Circle, Request Finance, Stripe, Ripple Treasury and crypto subledgers.
- [ ] Obtain one named payment processor/fintech buyer or direct-wallet B2B receiver willing to share redacted exception examples.
- [ ] Quantify recurrence and cost: exception count/month, analyst minutes, duplicate-loss exposure, support/SLA impact, close delay.
- [ ] Identify one specific unmet workflow beyond current substitutes and obtain explicit willingness for a two-week read-only pilot.
- [ ] If the buyer/cost/gap/pilot gate is not met in this single validation pass, record NO-GO and stop. Do not add buyer segments or continue generic market research.

Current status: WATCH / not GO. Research: [NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md).


## D-027 closeout — buyer-access validation (27 November 2026)

- [x] Identify named payment-operations prospects and relevant buyer roles: Due, Pockyt, BPN, Taptap Send; classify BVNK as incumbent/competitor.
- [x] Review direct-wallet receiver evidence and existing invoice-linked alternatives; Abundance360/Coinbase Business is a named integrated-substitute case.
- [x] Record public contact paths and role evidence without treating job postings or LinkedIn profiles as interviews.
- [x] Apply the D-027 buyer/cost/gap/pilot gate.
- [x] Record D-028 NO-GO; stop this cycle and do not implement.

Result: named prospects and reachable roles exist, but no redacted production exceptions, quantified recurrence/cost, differentiated gap or two-week pilot willingness was obtained. Do not extend D-027 with generic research. Reopen only on new primary buyer evidence.

## D-029 follow-up — global non-payment niche scan (27 November 2026)

- [x] Review prior D-026 and D-028 closures and preserve explicit Verigate exclusion.
- [x] Review the Arbitrum Open House 2027 format, dates, deployment and judging requirements.
- [x] Conduct a broad global scan outside B2B stablecoin payment reconciliation: DeFi operations, EV/battery finance, EUDR/smallholder traceability, energy flexibility, commodity collateral, reusable packaging, cold chain, and adjacent workflows.
- [x] Map major substitutes and incumbent systems before promoting a candidate.
- [ ] Identify two independent trade-finance lenders, commodity traders, collateral managers or warehouse operators with a cross-border collateral-verification workflow.
- [ ] Obtain redacted real examples, frequency, quantified operational/financial impact, existing registry/provider path and the specific unresolved gap.
- [ ] Test willingness for a read-only, non-binding pilot; do not imply legal enforceability or that on-chain records prove physical stock.
- [ ] If two independent operators do not validate a measurable gap and pilot path, record NO-GO and change the problem frame; do not start implementation.
- [ ] Do not build a generic warehouse-receipt tokenization platform, global lien registry, battery passport, LP manager, incentive dashboard, energy marketplace, packaging tracker or sensor-to-insurance oracle.

Current status: one WATCH hypothesis; no GO candidate. Full report: [research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md).

### D-029 buyer access leads — 27 November 2026

Publicly identified, not yet contacted or validated:
- [ ] Clemence Avril — Global Head of Commodity Trade Finance, Standard Chartered: https://sg.linkedin.com/in/clemence-avril-99a74676
- [ ] Cauê Todeschini — Global Lead, Trade & Commodity Finance, ING: https://www.linkedin.com/in/caue-todeschini
- [ ] Abhay Dandwate — Chief Risk Officer & Head of Strategy, NBHC: https://in.linkedin.com/in/abhay-dandwate-24972887
- [ ] OCBC collateral-management operations role: https://ocbc.wd102.myworkdayjobs.com/en-US/External/job/AVP--Transaction---Collateral-Management-Manager_JR00010266

These are discovery access leads only, not customer commitments. Do not treat seniority, a job posting, or a public profile as proof of demand.

## D-030 follow-up — second global niche scan (27 November 2026)

- [x] Screen construction-loan progress vs subcontractor-payment verification; reject generic product due to direct IPEX offering.
- [x] Screen GPU cloud SLA evidence/dispute resolution; reject generic ledger due to direct GPU Sentinel project.
- [x] Screen durable CDR offtake delivery assurance; reject generic monitor/escrow due to existing delivery data, procurement and contract milestone tools.
- [x] Screen CBAM supplier emissions data; reject generic data exchange due to EU Registry/O3CI and multiple SaaS products.
- [x] Screen biodiversity-credit market infrastructure; reject generic platform because demand is weak and market is very small.
- [x] Screen ocean freight demurrage/detention monitoring and invoice disputes; reject generic product due to established specialist vendors.
- [ ] Continue global discovery in a different problem space, not already screened in D-026, D-028, D-029 or D-030.
- [ ] For every new candidate, identify a budget owner and a route to reach that person before expanding desk research.
- [ ] Require two independent buyer/operator confirmations, real examples, recurrence, quantified impact, unmet workflow, and a plausible paid/read-only pilot.
- [ ] Explain why Arbitrum's shared state or settlement materially improves the workflow; reject projects where a normal database/API is sufficient.
- [ ] Keep D-029 commodity-collateral as WATCH only; do not treat inaccessible LinkedIn messaging as market rejection.
- [ ] No code until a candidate passes the buyer and differentiation gates.

Full evidence: [research/GLOBAL_NICHE_SCAN_02_2026-11-27.md](research/GLOBAL_NICHE_SCAN_02_2026-11-27.md).


## D-031 — Third global niche scan (27 November 2026)

- [x] Screen insurance claims evidence, subrogation and cargo sensor-to-insurance workflows; reject generic products due to claims cores, specialist evidence/cargo products and TRACinSURED.
- [x] Screen manufacturing supplier quality, nonconformance and warranty recovery; reject generic products due to ERP/QMS, supplier portals, warranty suites and RMA products.
- [x] Screen distributed-energy flexibility verification and settlement; document multi-BRP allocation complexity, but reject generic marketplace/ledger due to Piclo, Elexon rules and existing market platforms.
- [x] Screen cross-border eBL interoperability; reject generic registry/interoperability product because DCSA v2 is implemented by five platforms and control-tracking infrastructure exists.
- [x] Screen SME receivables/SCF invoice fraud; reject generic registry due to MonetaGo and national/e-invoicing infrastructure, and avoid duplicating D-029.
- [x] Record that no new WATCH or GO candidate emerged; D-029 remains the only WATCH.
- [ ] Continue discovery in a different problem space; identify economic buyer and credible access path before deep research.
- [ ] Require two independent operator confirmations, redacted real examples, recurrence, quantified impact, a gap beyond substitutes, and pilot willingness.
- [ ] Explain why Arbitrum shared state is materially required; reject if standards, signed messages, APIs, or a conventional database suffice.
- [ ] No code or MVP until the full GO gate is met.

Full evidence: [research/GLOBAL_NICHE_SCAN_03_2026-11-27.md](research/GLOBAL_NICHE_SCAN_03_2026-11-27.md).


## D-032 — Fourth global niche scan (27 November 2026)

- [x] Screen aircraft component lifecycle records, LLP traceability and cross-company transfer; reject generic product due to ATA Component Passport work, IATA current-status guidance, and records/transition vendors.
- [x] Screen battery second-life SoH, residual value and repurposing evidence; reject generic passport/registry/marketplace due to EU Battery Regulation, Commission registry and existing passport/BMS providers.
- [x] Screen FuelEU Maritime pooling, allocation and settlement; reject generic marketplace/ledger due to official FuelEU database and OceanScore, BetterSea, Zero44 and other providers.
- [x] Record residual questions without promoting them to WATCH.
- [x] Confirm no new GO or WATCH candidate emerged; D-029 remains the sole WATCH.
- [ ] Continue discovery in new problem spaces outside aviation records, battery passports and maritime compliance pools.
- [ ] Identify economic buyer and credible access path before deep research.
- [ ] Require two independent operator confirmations, redacted real examples, recurrence, quantified impact, differentiated unmet workflow, and pilot willingness.
- [ ] Demonstrate why Arbitrum shared state is materially required over standards, signed attestations, APIs, or a conventional database.
- [ ] No code or MVP until GO gate is met.

Full evidence: [research/GLOBAL_NICHE_SCAN_04_2026-11-27.md](research/GLOBAL_NICHE_SCAN_04_2026-11-27.md).


## D-033 — RWA infrastructure scan (27 November 2026)

- [x] Screen tokenised fund servicing, transfer agency, NAV publication and on/off-chain reconciliation.
- [x] Recheck private-credit servicing against the prior D-026 NO-GO and current servicing/loan-pool verification providers.
- [x] Screen collateral eligibility, monitoring, margining and realisation against 2026 regulatory evidence and current institutional providers.
- [x] Screen independent asset backing, NAV and investor-transparency providers.
- [x] Record Arbitrum RWA traction separately from evidence of buyer demand.
- [x] Preserve D-026 closure and D-029 WATCH without reopening either.
- [x] Record D-033: no new GO or WATCH candidate; no implementation.
- [ ] Only if continuing RWA discovery: obtain two independent bank/CCP collateral-risk or collateral-operations buyers with real collateral realisation failures/delays, quantified exposure/cost, a specific gap beyond Chainlink Fulcrum and existing collateral systems, and willingness for a bounded pilot.
- [x] Superseded by the user's 27 November instruction and D-038: continue bounded, parallel RWA discovery without waiting for this buyer-validation gate. The gate still applies before implementation, not before comparing or selecting a leading hypothesis.

Full evidence: [research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md).


### D-036 — Direct operator outreach (27 November 2026)

- [x] Identify official public contact routes for Eurex Clearing Default Management and CME Clearing Risk Management.
- [x] Send a focused, transparent research request to both official mailboxes; request routing to collateral/default-management operators.
- [x] Keep the request limited to anonymised drills, near-misses and operational exceptions; do not request confidential member data.
- [ ] Track replies and record whether the responder has direct operational responsibility.
- [ ] Arrange a short discussion with at least one CCP operator and one independent clearing-member/bank operator.
- [ ] Expand outreach to DTCC/DTC and J.P. Morgan only through verified official or professional contact routes.
- [ ] Do not treat sent emails, profile discovery or generic replies as buyer validation; no GO without two independent operator confirmations and the full existing GO gate.


## D-038 — Parallel RWA track: CVM DLT pilot evidence operations (27 November 2026)

- [x] Read Resolução CVM 249 and identify concrete network-manager/participant evidence obligations.
- [x] Verify public list of 11 proposal submitters and preserve caveat that admission/network-manager status is not yet established.
- [x] Define falsifiable product hypothesis and kill criteria; distinguish it from rejected generic fund servicing, NAV, collateral dashboards and proof-of-asset concepts.
- [x] Send Portuguese-language research requests to public contact channels at CSD BR, Liqi, Núclea and BEE4.
- [ ] Track replies and route to DLT architecture, network operations, regulatory integration or pilot owner.
- [ ] Verify CVM's admitted networks and actual network managers when published.
- [ ] Quantify manual evidence/reporting effort, recurring frequency, existing tooling and operational impact.
- [ ] Obtain a redacted process map or evidence/report sample without requesting confidential unpublished pilot results.
- [ ] Identify named budget owner, procurement route and recurring post-pilot use.
- [ ] Compare against existing GRC, SIEM, data warehouse and API monitoring tools; close if they already solve the workflow.
- [ ] Establish material Arbitrum shared-state requirement; do not force blockchain into a conventional evidence workflow.
- [ ] Continue D-038 in parallel with D-033; D-033 replies must not block other product discovery.
- [ ] No code or MVP until a differentiated workflow, buyer, economics, pilot path and Arbitrum fit meet the existing GO gate.

Full evidence: [research/CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md](research/CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md).


## D-039 — Brazil SBCE carbon-asset and MRV infrastructure screen (27 November 2026)

- [x] Verify SBCE Central Registry ownership/build status and Serpro's role.
- [x] Verify phased rollout: 2027 operator preparation, 2028–2029 MRV reporting, first CBE asset market from 2030.
- [x] Verify initial MRV threshold (10,000 tCO2e/year; less than 1% of CNPJs) and initial regulated sectors.
- [x] Review Law 15.042 Central Registry, escriturador and interoperability provisions.
- [x] Compare MRV and registry-integration shapes against Brazilian MRV vendors, ANP CBIO registry precedent and Gold Standard/Trovio API-first registry.
- [x] Record D-039 NO-GO for an Arbitrum product thesis; no new WATCH, no implementation.
- [ ] Reopen only on a named buyer's quantified uncovered integration failure, or independently corroborated MRV evidence burden plus material shared-state need, or published API specs showing a buyer-backed gap.
- [ ] Continue D-033 and D-038 in parallel; do not wait for replies before researching other RWA workflows.
- [ ] Do not force Arbitrum where signed records, APIs or regulated central registries suffice.

Full evidence: [research/BRAZIL_SBCE_CARBON_INFRASTRUCTURE_SCREEN_2026-11-27.md](research/BRAZIL_SBCE_CARBON_INFRASTRUCTURE_SCREEN_2026-11-27.md).


## D-040 — Precatório transfer-eligibility and token-allocation control (27 November 2026)

- [x] Read Resolução CNJ 705/2026, including Arts. 6, 19–20, 24, 35, 65 and 67.
- [x] Review Portaria Conjunta 6/2026 and CNJ cooperation with CNB, B3, CERC and Núclea on SisPreq/Central National integration.
- [x] Verify the CNJ public dashboard's aggregate stock and distinguish it from addressable/assignable supply.
- [x] Map current providers: JURISCAN, JUDIT, Preks, Adianta Jus and Mercado Bitcoin; document existing coverage and overlap.
- [x] Formulate a narrow exploratory hypothesis: eligibility + legal transfer workflow + fraction/token allocation reconciliation API.
- [x] Send transparent discovery email to Preks (message 1a21c65b7af1fd8a) and Adianta Jus (message 1a21c65c1cc127d5); no replies yet.
- [ ] Obtain two independent operator workflow accounts, including current exception/manual work and the effect of Resolução 705.
- [ ] Establish whether tokenised structures represent direct assignments, fund shares or investment contracts; do not assume token holders directly own the underlying claim.
- [ ] Identify the budget owner and any repeatable gap not covered by CNJ/SisPreq, authorised registrars, JURISCAN/JUDIT or operator systems.
- [ ] Determine whether any onchain supply-cap function adds value beyond a signed API and official registry; no Arbitrum requirement established.
- [ ] Monitor the CNJ/BCB joint activation date, Central National deployment, transitional arrangements and authorisation of the first registry entity.
- [ ] Keep D-040 exploratory only until buyer evidence; no candidate/WATCH/GO or implementation.

Full evidence: [research/PRECATORIOS_TRANSFER_COMPLIANCE_AND_TOKENIZATION_2026-11-27.md](research/PRECATORIOS_TRANSFER_COMPLIANCE_AND_TOKENIZATION_2026-11-27.md).
