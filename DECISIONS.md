# Decisions

## D-001 — Evidence-first project scaffold

- **Status:** Accepted
- **Decision:** Keep this repository as the source of truth for buildathon preparation, research evidence, technical decisions, and implementation.
- **Rationale:** Avoid losing research context and avoid committing to an idea before demand and feasibility are demonstrated.
- **Consequences:** Research claims must carry sources and confidence; rejected ideas should retain concise reasons; code and related documentation ship in the same commit.

## D-002 — Minimal Node.js baseline

- **Status:** Accepted
- **Decision:** Use Node.js ES modules and the built-in test runner initially, with no runtime dependencies.
- **Rationale:** Keep the scaffold easy to run and maintain. Add dependencies only when a concrete requirement justifies them.

## D-003 — No GO concept until buyer evidence exists

- **Status:** Accepted
- **Decision:** Do not start a buildathon implementation based only on ecosystem fit, technical novelty, previous hackathon winners, or an internally generated score.
- **Rationale:** Previous searches produced plausible ideas but no sufficiently verified buyer demand. This caused repeated analysis without a decision-quality outcome.
- **Consequences:** The next research step is issue-driven discovery from primary reports, followed by direct validation of a narrow workflow with potential buyers. See `TASKS.md`.

## D-004 — Explicitly exclude Verigate from the Buildathon

- **Status:** Accepted at user's explicit direction
- **Decision:** Verigate is removed from the candidate pool. Do not propose it, revive it, repackage it, or spend further Buildathon research time on it.
- **Rationale:** The user has decided to stop pursuing it after a year without a hackathon win.
- **Consequences:** It is not an active candidate or fallback option.

## D-005 — Previously explored directions are closed

- **Status:** Accepted
- **Decision:** Do not repeat broad exploration of GuardRail Wallet, VeriPay/agent escrow, Stylus zkTLS verifier, generic LatAm payment/split flows, retail DCA/Smart Guard, generic AI CFO, or generic tokenized-stock dashboards.
- **Rationale:** These directions were already assessed and found to have weak differentiation, crowded competition, high execution/CAC/regulatory risk, or no buyer validation. See `RESEARCH_LOG.md`.
- **Reopen only if:** New primary evidence or a materially changed market/technical condition directly addresses the recorded rejection reason.

## D-006 — RWA Servicing Copilot is not an active candidate

- **Status:** Superseded by the user's 26 November 2026 research summary
- **Decision:** Retain the earlier repository proposal as historical research only. It is not the current leading hypothesis and must not displace the user's explicit next step: issue-driven discovery from primary GitHub reports.
- **Rationale:** The latest user-approved summary does not select RWA Servicing Copilot and explicitly directs the next stage toward recurring real problems in GitHub Issues/Discussions across Arbitrum/Nitro/Orbit and relevant protocols.
- **Consequences:** Do not conduct buyer validation or implementation planning for this proposal unless the user explicitly reopens it and new primary evidence supports it.

## D-007 — Issue-driven discovery is the active research method

- **Status:** Accepted at user's explicit direction
- **Decision:** Continue from the completed broad research funnel by mining primary issues/discussions and technical reports for recurring problems. Prioritize Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.
- **Rationale:** Broad sector scans and internally generated ideas did not establish a GO candidate. Primary complaints and operational reports provide a more direct path to observable pain.
- **Consequences:** For each signal, verify status, recurrence, independent reporters, workaround, cost, buyer, competition, and MVP feasibility. A single issue is a lead, not proof of a market. Do not start coding before a GO decision.

## D-008 — Preserve the current candidate statuses

- **Status:** Accepted
- **Decision:** GapGuard remains WATCH only; REJECT directions remain closed absent new decision-relevant evidence; Verigate remains excluded; product selection is undecided.
- **Rationale:** These are the explicit outcomes in the user's 26 November 2026 research summary.

## D-009 — Do not pursue generic RPC monitoring or provider rankings

- **Status:** Accepted based on first-pass competitor review
- **Decision:** Do not turn the current RPC issues into a generic RPC health dashboard, provider ranking, or latency benchmark product.
- **Rationale:** Official Arbitrum monitoring scripts already cover chain/node liveness and protocol-specific alerts. Goldsky publicly compares providers on Arbitrum One and Robinhood Chain, including latency, errors, bad data, block lag, and traces. Other adjacent RPC benchmark products exist.
- **Reopen only if:** Primary operator evidence identifies a specific unserved Orbit/self-hosted/archive-node workflow beyond these products and confirms a reachable buyer.


## D-010 — Keep Nitro false-ready as a problem lead, not a product candidate

- **Status:** Accepted for current research phase
- **Decision:** Keep Nitro #4733 as the strongest current problem lead, but do not promote it to a product candidate or GO concept without independent operator confirmation and buyer evidence.
- **Rationale:** The report describes a severe quantified outage and the current `SyncMonitor` source is consistent with its warm-database false-ready mechanism. However, the issue has one reporting operator, zero comments, and no independent matching report was found in the follow-up search. Historical fixes #3180 and #3538 do not appear to close this edge case.
- **Consequences:** Continue targeted validation of recurrence, topology, cost, and buyer. Prefer an upstream Nitro correctness fix if that fully resolves the issue; do not build a generic monitoring product.

## D-011 — Do not productize isolated Orbit archive-node bugs

- **Status:** Accepted for current research phase
- **Decision:** Treat Nitro #4736, #4766, and #4785 as separate technical leads to monitor for upstream resolution, not as a unified archive-node reliability product.
- **Rationale:** The trace race in #4736 appears fixed upstream and present in Nitro v3.12.1; the log-range cap and archive capability metadata fixes have open upstream PRs; feed reconnect behavior has an open Nitro PR. Independent evidence is limited and no buyer or willingness to pay is established.
- **Consequences:** Recheck merge/release status and current-version behavior. Reopen product exploration only if operators demonstrate a recurring, unserved workflow that persists after upstream fixes and has a reachable budget owner.

## D-012 — Keep Morpho Blue block-time mismatch as a code-level WATCH item

- **Status:** Accepted for current research phase
- **Decision:** Do not promote Morpho bots #4 into a product candidate. Keep it as a technical lead until independent operators report the same timing problem and its operational cost is measured.
- **Rationale:** Current Morpho bots main still applies fixed 2/64-block backoff to Base and Robinhood, but the same repository's block-time table records 200 ms and 100 ms respectively. Replaying the current backoff rule at the issue's 2-second polling cadence gives about 47 versus 79 attempts per 10 minutes (about 1.68x), not the issue's claimed 9x. The current Blue kernel also uses an 8-second wall-clock stuck threshold, and an existing `blocksFor()` helper is already used by another bot in the repository.
- **Consequences:** Prefer the narrow code-level fix of deriving block counts from wall-clock intent. Do not infer a market or willingness to pay from this single issue.

## D-013 — Track RPC log-range friction, but do not create a generic range-adapter product

- **Status:** Accepted for current research phase
- **Decision:** Record repeated `eth_getLogs` range-limit failures as developer friction, but do not build a generic RPC service or indexer around the current evidence.
- **Rationale:** Arbitrum SDK #609, chain SDK #642, and Nitro #4736 contain reports from distinct contexts; the Nitro thread also has a second account reporting range refusal on the same chain endpoint. The direct remedies are adaptive client-side range splitting, SDK fixes, configurable server-side limits, or existing indexing services. No buyer, paid workflow, or unmet requirement beyond these remedies has been demonstrated. OffchainLabs/go-ethereum #668 remains open and unmerged.
- **Consequences:** Reopen only if an identifiable Orbit operator workflow remains costly or broken after the available SDK, provider, and indexing alternatives are tested.

## D-014 — Keep indexer RPC cost/reliability as WATCH; do not build a generic proxy

- **Status:** Accepted for current research phase
- **Decision:** Promote multi-chain indexer RPC cost and reliability to the strongest recurring commercial pain signal found in this pass, but do not select it as a product or start implementation.
- **Rationale:** Independent reports now span Envio, Ponder, Nuthatch, and rindexer. Ponder #2525 reports about 66,000 `eth_getLogs` calls/day on Robinhood Chain, with zero blooms in 8.7% of a 2,000-block sample; a different Ponder contributor's #2491 PR measures factory-filter log requests on Base falling from 99.3% to 80.5% and on Base Sepolia from 64.8% to 0.3%. Nuthatch and rindexer have also documented measured Arbitrum CU/request amplification, but their direct fixes shipped in their own indexers; Nuthatch's several reports are one maintainer/operator, not independent customers. Envio has merged throttle and 429 fixes and has open optimization PRs. eRPC provides request splitting, reorg-aware caching, failover, cross-validation, per-method observability, and CU budget guards. Provider-native quotas and managed indexers are further substitutes. The evidence supports a recurring technical problem, not a standalone product gap.
- **Consequences:** Keep WATCH only. Validate the remaining gap with independent Arbitrum/Orbit indexer teams and named budget owners. Do not build a generic RPC proxy, usage dashboard, or indexer replacement. Reopen only for a specific workload-aware capability not covered by eRPC, provider controls, or indexer-native fixes.

## D-015 — Keep fast-L2 event completeness as a separate correctness WATCH lead

- **Status:** Accepted for current research phase
- **Decision:** Track silent event loss near the tip on fast Orbit/L2 chains as a distinct technical problem, but do not promote it to a product candidate without independent operator reports and a buyer.
- **Rationale:** Ponder #2359 reported that a 30-block reorg window represented only about three seconds on Robinhood Chain, but current Ponder main uses a timestamp-based `reorgWindow` in seconds (default 180, max 600), so the old block-count issue is stale against current code. A commenter from HCTDIP linked a separate listener commit describing a 61-fill loss when two RPC nodes both returned empty logs for a recent block; the listener added a hard minimum safe depth of five blocks. This is a credible data-integrity lead, but only one independent linked incident on one chain was found.
- **Consequences:** Seek independent incidents where lagging replicas return empty/stale logs and indexers incorrectly advance checkpoints. Prefer provider/indexer correctness fixes if they fully close the gap. No implementation until buyer and recurrence evidence exist.


## D-016 — Keep RAILGUN/Squid event omission as a protocol-specific WATCH lead

- **Status:** Accepted for current research phase
- **Decision:** Track RAILGUN TXID omissions and downstream PPOI checkpoint divergence as a separate indexer-integrity lead, but do not promote it to a general product candidate or GO.
- **Rationale:** Railgun-Community/engine #142/#143 describe a missing Arbitrum Nullified event that caused TXID synchronization to stop and a private output to remain unspendable. A separate wallet developer reported three omitted transactions and a diverged PPOI index; the upstream data was corrected and the affected wallet recovered after a full resync. A separate Sepolia follow-up in #142 reports the same omission shape. These are meaningful integrity signals, but the Arbitrum reports are one shared incident cluster, the Sepolia follow-up is not another Arbitrum customer, and no budget owner or willingness to pay is established.
- **Consequences:** Monitor the RAILGUN Squid/PPOI reconciliation and rebuild workflow; seek independent incidents and buyer evidence. Do not build a generic RPC monitor or indexer replacement. See `research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md`.


## D-017 — Do not pursue generic RAILGUN liveness or PPOI proxy

- **Status:** Accepted
- **Decision:** Treat generic RAILGUN service monitoring, lag dashboards, and PPOI proxying as covered categories, not product candidates.
- **Rationale:** Anon Wallet publishes a public no-auth RAILGUN liveness API with roughly 30-second snapshots and 14-day history, covering PPOI, its own indexer, Subsquid, broadcasters, and Waku. It also documents a PPOI proxy with read caching. The proxy itself forwards proof submissions once and does not queue them; the paymaster has a separate in-memory retry path for proofs bundled with private fees. These are real existing substitutes. The API is beta and explicitly does not prove per-wallet spendability or event-level index completeness.
- **Remaining hypothesis:** Reconciliation of TXID/indexer records against canonical receipts, including detection of downstream PPOI state built from incomplete data, may be a narrower technical gap. No buyer, willingness to pay, or cross-protocol recurrence is established.
- **Consequences:** Keep RAILGUN/Squid at WATCH only. Do not build a generic liveness dashboard or PPOI proxy. See `research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md`.


## D-018 — Keep hosted-explorer completeness failures at WATCH; do not count one operator as multiple buyers

- **Status:** Accepted
- **Decision:** Track Blockscout's hosted Robinhood/Base indexer gaps and scaling issues as one operator-level evidence cluster. Do not promote this to GO or count each public issue as an independent customer.
- **Rationale:** Blockscout reported 190.78M Robinhood transactions processed in month one and database/indexer pressure requiring query optimization and hardening. Public issues documented a ~7,704-block Robinhood gap, transient API failures/lag, a token-data display issue, and thousands of missing Base blocks despite a 100% indexing-status indicator. Maintainers confirmed backfills or service recovery and closed the issues. No spend, engineering-hours, SLA penalties, churn, or willingness to pay is disclosed.
- **Remaining hypothesis:** An external completeness auditor could detect holes and false-green indexing status across explorer/indexer stacks, but no buyer or differentiated workflow is validated. SQD/HyperSync, provider data products, and platform-native repair remain substitutes.
- **Consequences:** Interview an owner at Blockscout or Robinhood; seek another independent indexer operator and quantify repair cost before considering a product. See `research/BLOCKSCOUT_ROBINHOOD_INDEXER_OPERATIONS_2026-11-26.md`.


## D-019 — Independent indexer incident reports strengthen technical recurrence, not product evidence

- **Status:** Accepted for current research phase
- **Decision:** Keep hosted-explorer/indexer completeness and false-ready recovery at WATCH. Treat Ergo #2600 and Ponder #1008 as additional independent technical reports, but do not count them as qualified hosted-explorer buyers or evidence of willingness to pay.
- **Rationale:** Ergo #2600 describes a roughly 285-block indexing lag, downstream rejected transactions, and recovery after node restart within minutes. Ponder #1008 describes missing blocks after RPC failure and recovery after database pruning/restart, but it is historical and associated with an already-reviewed framework. The Graph Q3 report describes a three-hour gateway outage and delayed allocation recovery, an adjacent dependency incident rather than proven canonical event loss. None quantifies recovery engineering labor, spend, or buyer commitment. Existing substitutes include indexer-native gap audit/backfill, monitoring, checkpoint and reindex workflows.
- **Consequences:** Continue the WATCH hypothesis only. The open validation task remains finding an independent hosted explorer/indexer incident with a reproducible gap and explicit recovery cost, and interviewing a named owner. See `research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md`.


## D-020 — Hosted indexer completeness remains WATCH despite a second operator cluster

- **Status:** Accepted for current research phase
- **Decision:** Add Flop Labs Devnet explorer/faucet #8/#339 as an independent hosted-service incident cluster; do not promote completeness auditing to GO.
- **Rationale:** Public reports document a ~61k–71k-block backlog, onboarding/faucet grant blockage for at least six hours, estimated catch-up around 40 hours (an extrapolation), and recurring 5–60 minute lag/readiness windows after closure. This strengthens recurrence across hosted operators beyond Blockscout. However, engineer-hours, infrastructure spend, SLA/customer cost, and WTP are absent. Ekubo already implements direct verification, event-gap audit, guarded backfill, and webhook monitoring; DALP provides indexer health, checkpoints, backfill and reindex controls.
- **Consequences:** Keep WATCH only. Replace the open evidence task with a named owner interview and explicit remediation labor/spend/budget evidence. Complete the Blockscout/SQD-HyperSync/Alchemy comparison. See research/FLOP_HOSTED_INDEXER_INCIDENT_2026-11-26.md.


## D-021 — Completeness auditing is crowded by upstream validation; WATCH narrowed to neutral cross-provider workflow

- **Status:** Accepted for current research phase
- **Decision:** Do not pursue a generic hosted-indexer completeness auditor. Keep WATCH only for a vendor-neutral reconciliation/evidence workflow across providers, and only if operators show a recurring cost or budgeted requirement that native tools do not satisfy.
- **Rationale:** SQD Portal documents multi-RPC, cryptographic and worker validation; Envio HyperSync documents full-block transaction/receipt-root verification, parent-hash checks, and source fallback. Blockscout has catch-up/retry/specialized repair; Alchemy has request diagnostics and subscriptions; Ekubo has gap-audit/verify/backfill/monitor; DALP has operational checkpoint/backfill/reindex. No buyer or WTP is proven for duplicating these.
- **Consequences:** Complete the vendor comparison task. The open evidence work is now a named operator interview and cost/WTP validation. See research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md.


## D-022 — Do not promote generic Morpho borrower alert feeds without independent demand

- **Status:** Accepted for current research phase
- **Decision:** Do not promote a generic Morpho borrower-health scanner or alert feed to a product candidate based on the current public evidence. Keep only a narrow validation question around missing send-time inputs for active liquidators.
- **Rationale:** Morpho Blue liquidation-bot issue #118 is one operator's supply-side offer for a 20-minute Base feed covering 2,586 borrowers across 212 markets. The post asks whether operators would use it; no subscriber, payment, pilot commitment, or independent demand is shown. The Morpho bot documents Morpho API and hosted Envio HyperIndex data providers, making broad borrower discovery an existing capability. A 20-minute snapshot is also not proof of send-time freshness for liquidation execution.
- **Consequences:** Do not build a generic scanner, dashboard, or webhook feed. Reopen only if an independent liquidator identifies a specific recurring gap in coverage/freshness beyond Morpho API, HyperIndex, and direct RPC, quantifies the cost or missed opportunity, and commits to a bounded test. See `research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md`.


## D-023 — Do not treat Aave #926 sentinel false positives as a current Arbitrum product gap

- **Status:** Accepted
- **Decision:** Close the legacy Aave #926 sequencer-sentinel false-positive as a current Arbitrum v3.7 product opportunity. Do not build a monitor or alerting product around this issue.
- **Rationale:** The 2023 issue reports daily false-positive blocking of borrow/liquidation due to the sentinel timestamp check. Aave v3.7 removes the sentinel from Pool borrow/liquidation validation because inconsistent L2 uptime signals produced false positives. Governance proposal 489 Part 2 was executed on 28 May 2026 and includes Arbitrum; it unsets configured sentinels and upgrades the Pool/PoolConfigurator. Current Aave docs state that the sentinel address is no longer read by the Pool since v3.7.
- **Consequences:** Treat the issue as historical evidence of a real class of operational failure, not an active buyer problem on upgraded Arbitrum Aave v3.7 deployments. Older v3.6 forks/deployments require separate proof before reconsideration. See `research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md`.

## D-024 — Track silent RPC log-result corruption as a narrow WATCH hypothesis

- **Status:** Accepted for current research phase
- **Decision:** Track wrong-height and valid-looking empty `eth_getLogs` responses that can be accepted by routers/indexers and persisted as complete ranges. Do not promote this to a product candidate or build a generic RPC correctness proxy.
- **Rationale:** Nitro #4788 documents out-of-range requests returning head logs on Arbitrum One and Robinhood Chain; Lasso RPC #460 independently reproduces a lagging upstream returning null/empty results in a mock harness; DefiLlama SDK #302 documents a pruned RPC returning `[]` and a cache treating that as complete, with six short entries found among 545 checked and reported downstream metric/fee impact. These are three separate codebases and distinct failure mechanisms, but only the DefiLlama report quantifies production business impact. The Base cache gap is adjacent L2 evidence, not an Arbitrum-chain incident. Existing SQD/Envio and indexer-native validation/backfill substitutes are substantial.
- **Consequences:** Keep WATCH only. Seek one independent Arbitrum/Orbit operator with a production silent omission, quantified recovery/business cost, and an unmet workflow. Verify Nitro #4788's actual source/release resolution and DefiLlama #302 remediation. Do not count multiple issues from one DefiLlama incident cluster as independent buyers. See `research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md`.

## D-025 — End open-ended discovery; run a capped three-pass final validation

- **Status:** Accepted
- **Decision:** Product discovery is no longer open-ended. Allow only three remaining evidence passes: (A) direct operator validation of the two strongest existing technical/workflow hypotheses — silent RPC/indexer integrity and send-time liquidation execution data; (B) validate one adjacent segment already present in WINNER_MAP, post-origination servicing of tokenized private credit; (C) score at most three finalists and make GO/NO-GO.
- **GO gate:** At least one candidate must have a named buyer/user role, independently corroborated recurring pain, measurable economic or operational cost, a workflow not adequately served by current substitutes, and a credible bounded-pilot commitment or explicit willingness to test. Technical novelty, issue volume, AI usage, and implementation feasibility are insufficient.
- **Stop rule:** If no candidate meets the gate after Pass C, record NO-GO for the current search set and stop researching these segments. Change the market/problem frame rather than extending discovery. Never keep weak ideas alive merely to avoid a decision.
- **Candidate cap:** No more than three finalists at any time. A stronger candidate may replace a weak one; the list may not expand.
- **Competitive correction:** Silent RPC log completeness remains WATCH but is now a weak finalist: Envio HyperSync already verifies complete-block roots and refetches mismatches; eRPC provides upstream health, consensus, and integrity controls; SQD/Ponder has cross-validation and fail-loud schema guards. A filtered eth_getLogs completeness gap is structurally real, but no independent buyer/WTP has been validated. See the expanded 27 Nov silent-RPC report.


## D-026 — NO-GO for the current discovery set after Pass B and Pass C

- **Status:** Accepted
- **Decision:** Stop the current product-discovery cycle. None of the three evaluated candidates meets the GO gate. Do not start implementation and do not add another sector/candidate to prolong this search.
- **Candidates evaluated:** (1) silent RPC/indexer event integrity; (2) Morpho/Aave send-time liquidation data gap; (3) post-origination servicing of tokenized private credit.
- **Rationale:** Pass A found credible technical failure classes but no independent operator confirmation with quantified cost or pilot willingness. Morpho issue #121, which explicitly offered a sponsored 90-day endpoint experiment, remains unanswered. Pass B found real general private-credit operations pain, but established loan-servicing, fund-accounting, private-debt and tokenization platforms already address major portions of the workflow. No tokenized-credit-specific unmet workflow, named buyer, independently quantified cost, or bounded-pilot commitment was established.
- **GO gate result:** No candidate has a named buyer, independently corroborated recurring product-specific pain, measurable cost, unmet workflow despite substitutes, and credible pilot willingness. Technical novelty and general market pain do not override these missing conditions.
- **Consequences:** Record NO-GO for this current search set. No product selection, no code, no implementation. Reopen only on new primary evidence meeting the buyer/problem/cost/substitute/pilot gate, or begin a separately framed market/problem discovery cycle. Do not continue broad issue/sector scanning as a substitute for buyer access.
- **Evidence:** [Pass A operator evidence](research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md) and [Pass B + final NO-GO](research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md).


## D-027 — Open one bounded new discovery cycle: B2B stablecoin payment operations

- **Status:** Accepted
- **Decision:** Following D-026's NO-GO for the prior candidate set, open a separately framed, tightly bounded discovery cycle focused on operational reconciliation and exception investigation for B2B stablecoin payments. This does not reopen any D-026 candidate and does not authorize implementation.
- **Scope:** Validate only two buyer segments: (a) stablecoin payment processors/fintechs operating their own payment stack; (b) businesses receiving direct stablecoin payments into self-custody wallets and applying them to invoices.
- **Problem hypothesis:** Payment state is fragmented across business obligation/payment intent, provider/gateway, blockchain, recipient delivery, treasury/bank records and accounting ledger. Exceptions include unmatched, partial, duplicate, late, wrong-network/asset and funds-in-transit cases.
- **Evidence status:** WATCH. Utila/Cordant's 19 Nov 2026 design-partner program directly targets cross-system stablecoin/fiat reconciliation and discrepancy investigation; Fipto/Kyriba has a named Ledger production case and reports ~15 minutes saved per payment; Circle documents its own >$10M first-month intercompany USDC flow. These support problem relevance but also show strong competition. No independent prospect has agreed to a pilot or stated WTP.
- **Competitive constraint:** Generic dashboard, invoice matcher, crypto subledger or reconciliation queue is not a candidate. Request Finance, Stripe, Fipto/Kyriba, Circle, Utila/Cordant, Ripple Treasury and crypto accounting vendors overlap materially.
- **Hard stop:** One bounded validation pass only. Seek a named buyer, real/redacted exception examples, recurring frequency, quantified manual cost or loss/SLA impact, a specific gap beyond current substitutes, and explicit willingness to run a two-week read-only pilot. If no such buyer evidence is obtained, record NO-GO and stop this cycle. Do not add segments or extend research with generic market scans.
- **Excluded adjacent theme:** Agentic payment authorization/control is not part of this cycle; it risks reviving the user's explicitly excluded Verigate problem frame. Arbitrum x402 activity is not yet evidence of meaningful autonomous-agent payment demand.
- **Evidence:** [New Cycle 01 research report](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md).


## D-028 — NO-GO for D-027 stablecoin payment operations

- **Status:** Accepted
- **Decision:** Close D-027 as NO-GO for product selection and implementation. Do not build a generic stablecoin reconciliation dashboard, invoice matcher, crypto subledger or exception queue.
- **Rationale:** The bounded public buyer-access pass identified real operational responsibilities at Due, Pockyt, BPN, Taptap Send and BVNK. However, these signals are job descriptions and company materials, not buyer interviews. Due, Pockyt and BPN describe internal ledger/API/control/automation work; BVNK is a direct incumbent with dedicated reconciliation and product teams; Fipto/Kyriba and Coinbase show integrated substitutes. The direct-wallet receiver segment produced no named buyer with recurring quantified unresolved pain; Abundance360's Coinbase Business case instead reports reduced manual reconciliation through an integrated invoice/settlement workflow.
- **GO gate:** Not met. No buyer supplied redacted production exceptions, monthly recurrence, quantified manual cost/loss/SLA impact, a differentiated unmet workflow and explicit willingness for a two-week read-only pilot.
- **Consequences:** Stop D-027. No product selected, no code and no implementation. This does not assert that the workflow has no operational pain; it means public evidence did not establish an external product opportunity. Reopen only on new primary buyer evidence that satisfies the complete gate. Do not continue generic public research to avoid the decision.
- **Evidence:** [D-027 buyer-access validation and final NO-GO](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md).

## D-029 — Global non-payment niche scan (27 November 2026)

- **Status:** WATCH / no GO.
- **Decision:** Open a separately framed global market/problem scan outside the closed B2B stablecoin-payment reconciliation cycle. Do not revive D-026 or D-028 candidates and do not reintroduce Verigate.
- **Finding:** No new product met the GO criteria. Cross-border commodity collateral / warehouse-lien verification is the only newly identified WATCH hypothesis worth targeted primary validation. Generic warehouse-receipt tokenization, generic global lien registries, battery passports/SoH scores, EV residual-value dashboards, energy flexibility marketplaces, reusable-packaging trackers, cold-chain sensor-to-insurance payouts, generic EUDR traceability, generic LP/incentive analytics, cross-chain solver rebalancing and generic paymaster/vault monitoring are not selected.
- **Rationale:** Duplicate and forged warehouse receipts and cross-lender collateral opacity are documented risks. However, Singapore TFR, Brazil B3 CPR interoperability/guarantee, Kenya's eWRS central registry, Whrrl, Secro, MIT DCI b_verify and other products cover substantial parts of the workflow. Physical stock truth, legal priority across jurisdictions, source attestations, data-sharing and network adoption remain unresolved. There is no primary buyer evidence, quantified cost or pilot commitment.
- **Consequences:** Do not implement. Validate only with named commodity-finance lenders, traders, collateral managers, warehouse operators or insurers. Require two independent operators, real redacted incidents, recurrence and measurable impact, proof of the gap beyond existing national/commercial systems, and a credible read-only pilot. Stop if those conditions cannot be met.
- **Evidence:** [Global non-payment niche scan](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md).

## D-030 — Second global niche scan (27 November 2026)

- **Status:** NO-GO for the six generic product theses screened; global discovery continues.
- **Scope:** Construction-loan progress/payment verification; GPU-cloud SLA evidence/dispute ledger; durable CDR offtake delivery assurance; CBAM supplier data collection; voluntary biodiversity-credit market infrastructure; ocean freight demurrage/detention audit.
- **Findings:** Each category has a direct incumbent, official platform, close competing project, or insufficient demand. IPEX directly markets the construction payment-gap workflow; GPU Sentinel is a direct pre-alpha project for signed GPU SLA evidence; CDR.fyi/Frontier/Senseible cover delivery intelligence or milestone evidence; EU CBAM Registry/O3CI plus multiple SaaS providers cover supplier data exchange; biodiversity-credit demand remains weak and the market is very small; logistics vendors already cover demurrage/detention monitoring and invoice disputes.
- **Decision:** Do not build generic products in these categories. This is not a claim that the underlying operational problems do not exist. No buyer interviews, production datasets, buyer-specific quantified costs, paid pilots or willingness-to-pay were obtained.
- **Relationship to prior decisions:** D-026 and D-028 remain closed. D-029 commodity-collateral remains WATCH only; the fact that two LinkedIn contacts did not accept messages is an access/channel failure, not a negative market signal. Verigate remains excluded.
- **Next step:** Continue global discovery in distinct problem spaces not covered by this pass. Any candidate must have a named budget owner, independently corroborated recurring problem, quantified cost, clear gap beyond existing products, accessible buyer and a credible reason for shared Arbitrum state.
- **Evidence:** [Second global niche scan](research/GLOBAL_NICHE_SCAN_02_2026-11-27.md).
