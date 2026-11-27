# Session checkpoint — 27 November 2026

## Completed

- Re-read AGENTS, PROJECT_CONTEXT, TASKS, DECISIONS, README, latest checkpoint, RESEARCH_LOG, and WINNER_MAP before continuing.
- Inspected repository root and docs/research/src/tests directories. Source and test folders remain placeholders.
- Remote GitHub branch: main only. Open PRs: 0. Local checkout/status remains unavailable.
- Rechecked Nuthatch current cost documentation against release 5.17.0.
- Reviewed Morpho Blue borrower-feed issue #118 and existing Morpho API / Envio HyperIndex provider alternatives.
- Reviewed Morpho viem-dlc #1 cache OOM report and maintainer's mitigation path.
- Rechecked Nitro #4770 comments and time-aligned snapshots; classified as not a bug, not a second confirmed outage.
- Reviewed current official Arbitrum HA sequencer and sequencer troubleshooting documentation.
- Rechecked Aave #926 against Aave v3.7 source and governance: sentinel checks removed from borrow/liquidation paths; proposal 489 Part 2 executed on Arbitrum on 28 May 2026.
- Added research report: research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md.
- Updated TASKS, PROJECT_CONTEXT, DECISIONS (D-022), RESEARCH_LOG, README, and this checkpoint.

## Findings

- Nuthatch 5.17.0 defaults to a five-minute poll interval. The ~$185/month / ~9,900 CU/min Arbitrum figure applies to a historical every-block configuration. The vendor's own measurements are not independent customer WTP.
- Morpho #118 is one operator's supply-side offer for a 20-minute Base borrower feed; no subscriber, payment, or pilot evidence. Existing Morpho API and hosted Envio HyperIndex paths are documented substitutes. Generic feed is not promoted.
- Morpho viem-dlc #1 is a library-specific historical cache OOM issue with a maintainer mitigation path, not a product candidate.
- Nitro #4770 was closed as not a bug after time-aligned snapshots showed inbox and execution progress. It does not independently confirm #4733.
- Official Arbitrum docs cover generic HA sequencer architecture, chosen-sequencer health checks, feed and sequencer troubleshooting. #4733 remains one operator's source-level correctness report.
- No new product GO; product selection remains undecided; implementation not started.

## Current status

- Indexer RPC cost/reliability: WATCH only.
- Hosted indexer completeness / neutral cross-provider evidence: WATCH only; buyer and recovery-cost evidence missing.
- Nitro HA false-ready #4733: WATCH; one operator, no independent matching recurrence established.
- Morpho borrower alert feed: not promoted; generic feed lacks demand evidence and competes with existing API/indexer paths.
- Aave #926 sentinel false-positive is historical and resolved for upgraded Arbitrum v3.7 deployments; do not count it as current market pain.
- Verigate remains excluded.
- No product selected and no development authorized.

## Remaining priorities

1. Find an independent Morpho/Aave liquidation operator who can identify a missing send-time input, quantify missed opportunities or infrastructure cost, and agree to a bounded test.
2. Find a hosted-indexer owner who quantifies detection/backfill labor, spend, SLA/customer impact, recurrence, and reconciliation automation.
3. Recheck Nitro #4733 only for independent matching operator reports or a confirmed upstream source fix.
4. Continue issue-driven discovery across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure. Filter spam/security-report noise and do not count isolated framework bugs as buyer evidence.

## Evidence boundary

- Public GitHub issues and vendor documentation are not customer interviews.
- Maintainer-owned benchmark data is not independent buyer evidence.
- A supply-side offer asking whether a service is useful is not proof of demand.
- Technical severity does not prove a standalone product gap or willingness to pay.

## Checks

- Research and documentation only.
- No application tests, lint, or build run; no application code changed.
- Documentation was written directly to remote GitHub main using sequential file updates.
- Local git status cannot be verified in this session.

## Git

- Branch: main.
- Open PRs: 0.
- Prior remote HEAD before this follow-up: 56d82278a071e2a3d003889108383c984cd81a35.
- Current remote HEAD will be verified after all updates.

## Exact next step

Continue searching for an independent liquidation operator with a quantified send-time data gap, and a hosted-indexer owner with quantified recovery cost. Treat Aave #926 as closed for upgraded Arbitrum v3.7. Do not build until a named buyer and differentiated recurring workflow are validated.

## Follow-up — silent RPC log-result corruption (27 November 2026)

### Completed
- Reviewed Nitro #4788, its issue metadata/timeline/comments, and focused fix-PR search.
- Reviewed Lasso RPC #460 as an independent mock-harness reproduction of wrong/empty responses from lagging upstreams.
- Reviewed DefiLlama SDK #302 and dimension-adapters #11308, including the 545-entry audit and reported downstream effects.
- Created `research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md`.
- Added D-024 and updated TASKS, PROJECT_CONTEXT, RESEARCH_LOG, and README.

### Findings
- A recurring technical failure class exists across RPC node, routing, and indexer/cache layers: valid-looking wrong-height or empty log responses can be accepted and then advance a cursor or poison a cache.
- Nitro #4788 was closed as completed on 24 Nov, but the reviewed discussion has no maintainer resolution note or linked fix PR. Closure is not proof of a source fix.
- Lasso #460 is a mock-harness reproduction, not production buyer evidence.
- Existing Morpho liquidation-operator question #121 (opened 29 Aug) remains open with zero comments; it has not produced a design-partner or WTP signal.
- DefiLlama #302 found six short cached entries among 545 checked; two had reporter-quantified downstream metric/fee impact. The related #11308 is the same incident cluster. The Base entry is adjacent L2 evidence, not an Arbitrum-chain incident.
- No named buyer commitment or willingness-to-pay is established. Existing SQD/Envio/indexer-native validation and backfill tools remain strong substitutes.
- Status: narrow silent event-ingestion correctness hypothesis WATCH only; no GO and no implementation.

### Next priorities
1. Verify whether Nitro #4788 has a public source/release fix; do not infer resolution from closed status.
2. Find an independent Arbitrum/Orbit operator with a production wrong/empty log response and quantified loss/recovery cost.
3. Track DefiLlama #302 for maintainer response and remediation.
4. Validate the exact gap left by SQD Portal, Envio HyperSync, and indexer-native tools.
5. Continue the independent liquidation-operator and hosted-indexer-owner validation tasks from the prior checkpoint.

### Evidence limits
- Nitro endpoint counts are reporter-provided and both endpoints ran the same Nitro release family.
- Lasso results are simulated with a mock harness.
- DefiLlama audit and downstream impact figures are reporter-provided and not independently audited here.
- No customer interview, paid pilot, or WTP is claimed.

### Checks
- Research/documentation only; no application code changed.
- No tests, lint, or build run (no implementation changed).
- Remote GitHub updates were made sequentially on main.
- Local checkout/status remains unavailable; verify remote HEAD after updates.

## Final bounded discovery cycle — 27 November 2026 (D-025)

### New competitive findings
- Envio HyperSync verifies complete-block transaction/receipt roots, tracks source provenance, refetches mismatched data from alternate sources, and marks unresolved ranges unverified. HyperIndex uses HyperSync by default on supported chains including Arbitrum.
- eRPC has progressed to release 0.5.0 (27 Oct 2026) and already offers RPC upstream health/selection, retries, consensus, and data-integrity checks. Its filtered eth_getLogs completeness limit is structural, not a generic feature gap waiting for a proxy.
- SQD/Ponder issue #32 found an Arbitrum access-list omission; a later chain-truth comparison found 34 type-0x2 transactions with Portal-missing access lists. Ponder PR #110/#111 fixed fabrication of empty arrays from missing fields by preserving NULL. The upstream dataset gap remains.
- SQD/Ponder #83 records a missing logs_bloom dataset column on Arbitrum/Base/Avalanche and fail-fast behavior; issue closed without explicit public remediation details in the reviewed record.
- Result: silent RPC/indexer integrity remains a real technical class but is downgraded to weak WATCH due to strong existing substitutes and no independent buyer/WTP.

### Discovery boundary
D-025 ends open-ended research. Three remaining passes only:
1. Pass A — seek direct independent operator validation for Arbitrum/Orbit indexer silent-data failures and Morpho/Aave send-time liquidation data gaps.
2. Pass B — validate only the existing WINNER_MAP hypothesis: post-origination servicing of tokenized private credit.
3. Pass C — score at most three finalists and make GO/NO-GO.
GO requires named buyer, independently corroborated recurring pain, measurable cost, unmet workflow despite substitutes, and credible bounded-pilot commitment/willingness to test. If none qualifies, record NO-GO for this search set and stop; change the market/problem frame instead of extending research. No new sector brainstorming.

### Repository state
- Added competitive review and finite-search protocol to the silent-RPC research report.
- Added D-025 and updated TASKS, PROJECT_CONTEXT, RESEARCH_LOG, WINNER_MAP, and this checkpoint.
- No implementation or tests changed.


## Pass A public operator evidence check — 27 November 2026

### Completed
- Re-read Nitro #4788 issue and all comments through GitHub; confirmed closure metadata and that comments are technical client-side recommendations, not buyer evidence.
- Re-read Morpho Blue liquidation bot #121 and comments; confirmed open since 29 Aug 2026 with zero comments despite explicit offer to sponsor a bounded 90-day experiment.
- Re-read Morpho #118 and comments; confirmed one supply-side scanner offer and no subscriber/pilot evidence.
- Read current Morpho market-position health API documentation and the published liquidation bot README. API market-level price/interest data may be about two minutes stale; the bot's documented workflow reads on-chain state and simulates before sending.
- Added research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md.

### Result
- Arbitrum/Orbit silent RPC/indexer integrity: technical issue is real, but no independent operator with quantified recovery/business cost or pilot willingness found. Nitro #4788 remains one reporter / one Nitro release cluster across two endpoints. Weak WATCH.
- Morpho/Aave send-time liquidation data: Morpho API freshness limitation is documented, but it is not proven to block send-time execution after on-chain reads and simulation. Issue #121 has no operator response; no quantified missed opportunities, cost, or pilot. WATCH / unvalidated.
- No GO candidate. No code, tests, lint, or build changed/run.

### Next step
Proceed to Pass B only: validate the existing post-origination servicing of tokenized private credit hypothesis with real servicing/fund-operations buyers. Do not add a new segment or repeat broad issue searches. Pass C remains the final GO/NO-GO decision under D-025.


## Final discovery outcome — 27 November 2026 (D-026)

### Completed
- Completed bounded Pass A public-source operator validation for RPC/indexer integrity and liquidation send-time data.
- Completed Pass B research on post-origination tokenized private-credit servicing, including actual servicing/accounting providers and tokenization-platform workflows.
- Completed Pass C scorecard for the three permitted candidates.
- Added final report: research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md.
- Added D-026 and updated PROJECT_CONTEXT, TASKS, RESEARCH_LOG, WINNER_MAP and README.

### Decision
**NO-GO for the current search set. Stop this discovery cycle; do not implement.** General private-credit operations pain is real, but current loan servicing/fund accounting systems and tokenization platforms cover much of the workflow. No tokenized-credit-specific unmet workflow, named buyer, independently quantified cost, or bounded-pilot commitment was established. RPC/indexer integrity and liquidation data likewise lack buyer/pilot evidence.

### Reopen criteria
Reopen only if new primary evidence identifies a named buyer/operator, recurring product-specific pain, measurable cost, a clear gap beyond current substitutes, and explicit willingness to run a bounded pilot; or if the market/problem frame is deliberately changed in a new discovery cycle. Do not continue broad research to avoid a NO-GO decision.

### Checks
- Research/documentation only. No application code changed.
- No tests, lint or build run.
- Remote docs were verified after sequential updates. Local checkout/status unavailable.


## New discovery cycle 01 — B2B stablecoin payment operations (D-027, 27 Nov 2026)

### Completed
- Read prior D-026 NO-GO and confirmed the previous three candidates remain closed.
- Opened a separately framed, bounded cycle for B2B stablecoin payment operations.
- Reviewed Utila/Cordant's 19 Nov 2026 cross-system reconciliation design-partner program.
- Reviewed Fipto/Kyriba's named Ledger production supplier-payment case (~15 minutes saved per payment, vendor-reported).
- Reviewed Circle's own USDC intercompany treasury case (> $10M first-month transfers, reporting and multi-entity close workflow).
- Reviewed public accountant/operator discussions describing manual invoice matching, payout reconciliation and duplicate-payment concerns.
- Mapped competition: Utila/Cordant, Fipto/Kyriba, Circle, Request Finance, Stripe, Ripple Treasury, Bitwave/Cryptio and other invoice/accounting tools.
- Added research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md and D-027.

### Result
- Problem relevance: credible. Payment records can diverge across intent/order, gateway, chain, recipient, bank/treasury and accounting systems.
- Competition: strong. Existing platforms already automate invoice linking, payments, reconciliation, accounting export and institutional exception investigation.
- Buyer validation: absent. No named prospect has shared redacted production exceptions, quantified recurring cost or agreed to a pilot.
- Status: WATCH only; no product selection and no implementation.

### Single allowed validation pass
Test only (1) payment processors/fintechs operating their own stablecoin payment stack and (2) businesses receiving direct stablecoin payments into self-custody wallets. Require named buyer, redacted real exceptions, monthly recurrence, quantified manual cost/loss/SLA impact, a specific gap beyond substitutes, and explicit willingness to run a two-week read-only pilot. If this evidence is not obtained, record NO-GO and stop. Do not expand the sector or continue generic vendor research.

### Exclusions
Agentic payment authorization/control is outside this cycle to avoid reviving the explicitly excluded Verigate problem frame. D-026 candidates remain closed.

### Checks
- Research/documentation only; no application code changed.
- No tests, lint or build run.
- Remote GitHub docs were updated sequentially; local checkout/status remains unavailable.


## D-027 buyer-access validation and D-028 closeout — 27 November 2026

### Completed
- Searched for named stablecoin payment processors/fintechs with operating payment stacks and public operations buyer roles.
- Identified Due (CEO Robert Sargsian; SVP Operations & Expansion Vasco Moura; operations/product-ops vacancies), Pockyt (founder/CEO Mason Lin; Head of Payment Operations vacancy), BPN (Payment Operations Lead vacancy), and Taptap Send (Treasury Operations Analyst vacancy).
- Classified BVNK as a direct incumbent/competitor because it is hiring for reconciliation and fiat payment product capabilities.
- Reviewed DIMOCO/Fipto and Paysecure/Valuno as live integrated provider routes.
- Tested the direct-wallet receiver segment against named evidence; no buyer with quantified unresolved recurring pain found. Abundance360/Coinbase Business is an integrated substitute case.
- Added buyer-access evidence and final result to the D-027 research report.

### Findings
- Job descriptions confirm that stablecoin payment operations include reconciliation breaks, abnormal credits, returns/refunds, stuck/returned payments, partner balance mismatch, funding/prefund, exception investigation and automation.
- The strongest interview leads are Due, Pockyt and BPN. These are not validated customers: each is building internal operational systems, and no external-product gap is established.
- Taptap Send is an adjacent stablecoin treasury/payment-operations lead, not yet a specific reconciliation-gap buyer.
- BVNK and integrated platforms are competitors/substitutes.
- No named buyer supplied redacted production examples, recurrence/month, quantified manual cost/loss/SLA impact, a differentiated gap beyond current substitutes, or explicit willingness for a two-week read-only pilot.

### Decision
**D-028: NO-GO for D-027.** Stop this cycle. No product selection, code or implementation. This is an evidence-bound stop, not a claim that operational pain does not exist. Reopen only on new primary buyer evidence satisfying the complete gate. Do not continue generic job/vendor searches.

### Evidence
- Due operations roles and public leadership: https://careers.speedinvest.com/companies/due-2-0e6b6eb7-4621-492a-8688-37857866bac8/jobs/100293994-senior-operations-manager-payments ; https://www.linkedin.com/in/robsargsian ; https://es.linkedin.com/in/vasco-moura-6ab526a5
- Pockyt operations role/company: https://careers.xrcventures.com/companies/pockyt/jobs/89182816-head-of-payment-operations ; https://pockyt.io/company
- BPN role/company: https://www.bpn.finance/
- Taptap Send role: https://careers.canaan.com/companies/taptap-send/jobs/98057192-treasury-operations-analyst
- BVNK reconciliation role: https://job-boards.eu.greenhouse.io/bvnk/jobs/4822303101
- Abundance360/Coinbase Business case: https://www.coinbase.com/es-es/business/real-results/case-studies/abundance-360?country=US&currency=USD&japan_bespoke_content=false&logged_in=false&mobile=false&view=marketing

### Checks
- Research/documentation only; no application code changed.
- No tests, lint or build run.
- No buyer interviews, outreach or pilot were performed.
- Remote GitHub updates were made sequentially and all seven updated files were re-read; latest remote HEAD was verified.
- Local checkout/status is unavailable.

## Latest session checkpoint — 27 November 2026 (D-029)

### Completed
- Re-read repository rules, project context, decisions, tasks, README, research log, winner map and prior checkpoint before the new scan.
- Verified latest remote HEAD before updates: c7f7443da5fe064d905b32c94c787f18eabe6790; no open pull requests.
- Opened a new, user-authorized global market/problem scan outside stablecoin payment reconciliation.
- Screened multiple non-payment niches against customer problem evidence and existing competitors.
- Created research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md.
- Recorded D-029 and updated PROJECT_CONTEXT.md, DECISIONS.md, TASKS.md, RESEARCH_LOG.md and README.md.

### Result
- No GO candidate and no implementation.
- One WATCH-only hypothesis: cross-border commodity collateral / warehouse-lien verification across national registries and independent stock attestations.
- Strong substitutes and infrastructure already exist: Singapore TFR, Brazil B3 CPR Interoperability/Guarantee, Kenya eWRS, Whrrl, Secro, MIT DCI b_verify and other providers.
- No buyer interviews, quantified customer costs, pilot commitments or product demand were obtained.
- D-026/D-028 remain closed; Verigate remains excluded.

### Next step
Identify two independent trade-finance lenders, commodity traders, collateral managers or warehouse operators. Obtain redacted incidents, recurrence, measurable impact, existing workflow and willingness for a read-only non-binding pilot. If no real gap survives this check, stop this candidate and change the problem frame again. Do not code before validation.

### Checks and limitations
- Documentation/research only. No application code changed.
- Tests, lint and build not run.
- Remote updates were made sequentially using current file SHAs. All changed files were re-read after the research and buyer-access additions; open PR count was zero. This checkpoint closeout is the final documentation commit.
- Local checkout/status unavailable.

### Additional buyer-access research — 27 November 2026

Identified public outreach leads for the D-029 WATCH hypothesis:
- Clemence Avril, Global Head of Commodity Trade Finance, Standard Chartered.
- Cauê Todeschini, Global Lead Trade & Commodity Finance, ING.
- Abhay Dandwate, Chief Risk Officer & Head of Strategy, NBHC.
- OCBC Transaction & Collateral Management AVP role (operator-role signal; no named person).

These are discovery leads only. None has been contacted or validated. Details and links are in the global scan report.

## Latest session checkpoint — 27 November 2026 (D-030)

### Completed
- Re-read AGENTS.md, PROJECT_CONTEXT.md, TASKS.md, DECISIONS.md, README.md, RESEARCH_LOG.md and SESSION-CHECKPOINT.md before continuing.
- Continued global niche discovery while D-029 outreach remains active.
- Screened six additional problem spaces: construction-loan payment-gap verification; GPU-cloud SLA evidence; durable CDR offtake delivery; CBAM supplier emissions data; biodiversity-credit market infrastructure; ocean freight demurrage/detention.
- Added report research/GLOBAL_NICHE_SCAN_02_2026-11-27.md.
- Recorded D-030 and updated PROJECT_CONTEXT.md, DECISIONS.md, TASKS.md, RESEARCH_LOG.md and README.md.

### Result
- No new GO candidate; no implementation.
- D-030 rejects generic product theses in all six screened spaces due to direct incumbents, official infrastructure, a close competing project, or weak demand.
- D-029 commodity-collateral remains WATCH only. User reports one outreach message sent and two LinkedIn profiles did not accept messages; this is not negative buyer evidence.
- D-026/D-028 remain closed; Verigate remains excluded.

### Key competitive findings
- IPEX directly sells construction progress-vs-payment verification and Payment Gap reporting.
- GPU Sentinel is a direct pre-alpha competing project for signed GPU SLA evidence and shared dispute ledger; it has not validated production use.
- CDR.fyi, Frontier and Senseible cover market delivery data, commitment tracking or milestone evidence.
- EU CBAM Registry/O3CI plus commercial SaaS cover supplier emissions data intake and reporting.
- Biodiversity credit demand remains weak and the market small.
- FMC rules and specialist logistics products cover demurrage/detention billing disputes and tracking.

### Next step
Continue discovery in new problem spaces not already screened. Before deepening any niche, identify reachable budget owners and evidence of recurring operational cost. Require independent buyer corroboration and a differentiated workflow. Do not implement without GO.

### Checks and limitations
- Research/documentation only. No application code changed.
- Tests, lint and build not run.
- Public-source desk research only; no buyer interviews, production datasets, paid pilots or WTP commitments.
- Remote documentation updates were made sequentially using current SHAs. All seven changed files were re-read and their D-030 sections verified. Final remote HEAD before this checkpoint closeout: c8592685d1caa4b7d059a411e292b31fcbb56f5e; open PR count: 0.
- Local checkout/status unavailable.


## Third global niche scan — 27 November 2026 (D-031)

### Completed
- Re-read repository rules, context, task queue, decisions, research log, winner map, README and previous checkpoint before research.
- Screened five new problem spaces: insurance claims/subrogation evidence; manufacturing supplier quality and warranty recovery; distributed-energy flexibility verification/settlement; eBL interoperability; SME receivables/SCF fraud.
- Reviewed current specialist vendors and standards, including TRACinSURED, Boni, Ordero, Kinetic Data, Tavant, Piclo, Elexon, DCSA, and MonetaGo.
- Added [research/GLOBAL_NICHE_SCAN_03_2026-11-27.md](../research/GLOBAL_NICHE_SCAN_03_2026-11-27.md).
- Recorded D-031 and updated TASKS, PROJECT_CONTEXT, RESEARCH_LOG, README and this checkpoint.

### Findings
- No new GO or WATCH candidate emerged.
- Generic insurance evidence/cargo claims products overlap claims cores and specialist evidence/cargo tools; sensor-triggered cargo insurance has a 2026 commercial launch.
- Supplier-quality, nonconformance and warranty workflows overlap ERP/QMS, supplier portal, warranty and RMA platforms.
- Energy multi-BRP allocation/compensation complexity is documented, but Piclo provides settlement reporting/dispute workflows and Elexon has formal verification/settlement rules. No buyer-specific unmet product workflow was established.
- DCSA v2 eBL interoperability is implemented by five providers; low bank adoption is a signal, not proof of a new product gap.
- MonetaGo directly covers duplicate-financing, invoice and receivables/collateral verification.
- D-029 commodity collateral remains the sole WATCH hypothesis. Verigate remains excluded.

### Evidence boundary
- Public-source desk research only.
- No buyer interviews, production datasets, buyer-specific quantified costs, paid pilots or WTP commitments.
- No product selected; no code or MVP authorized.

### Checks
- Documentation-only changes. No application tests, lint, or build run.
- No application source or dependencies changed.
- Updates committed sequentially to remote main. Local checkout/status remains unavailable.
