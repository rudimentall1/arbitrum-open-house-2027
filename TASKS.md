# Tasks

## Active priority — RWA buyer validation (D-034, 27 November 2026)

- [ ] Validate D-029 cross-border commodity collateral / warehouse-lien verification with two independent economic buyers/operators.
- [ ] Prioritize commodity-finance lenders, collateral managers, warehouse operators, and trade-finance operations/risk owners.
- [ ] Obtain real redacted examples of cross-border pledge conflicts, duplicate/uncertain liens, stock-existence disputes, or delayed/blocked collateral release that persist after existing registries and controls.
- [ ] Measure recurrence, financial exposure/loss, delay, manual work and existing workaround.
- [ ] Identify the budget owner and verify a specific gap beyond national registries, warehouse-receipt platforms, collateral-management systems and existing providers.
- [ ] Obtain explicit willingness from a buyer to test a bounded read-only workflow.
- [ ] Determine whether any proposed shared state genuinely needs Arbitrum; reject the idea if signed attestations, APIs, standards or a conventional database suffice.
- [ ] Treat D-029 as WATCH only until the full GO gate is met. Do not build or start an MVP before GO and explicit user authorization.
- [ ] Only if buyer access reveals a concrete bank/CCP case, validate D-033's collateral-realisability-under-stress question with collateral-risk/operations buyers. Do not run another generic vendor scan.
- [x] Close the prior issue-driven candidate set under D-026; D-010–D-024 are historical technical evidence, not active product candidates.
- [x] Close B2B stablecoin payment operations under D-028.
- [x] Complete global screens D-030, D-031 and D-032.
- [x] Complete RWA infrastructure screen D-033; no generic RWA product selected.
- [x] Complete repository-wide audit and canonical-state cleanup under D-034.

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
- [ ] Do not start another broad scan or build until this buyer-validation gate is met.

Full evidence: [research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md).
