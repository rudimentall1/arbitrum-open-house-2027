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

## D-007 — Issue-driven discovery method (superseded)

- **Status:** Superseded by D-026 and D-034
- **Decision:** This was the active research method for the November 2026 technical-discovery phase. It is no longer the current method.
- **Rationale:** The capped issue-driven candidate set was closed NO-GO by D-026. The user subsequently prioritized RWA and authorized separately framed market/problem research.
- **Consequences:** Preserve the issue research as historical evidence. The active task is RWA-focused buyer validation under D-034, not continued Nitro/SDK/Morpho issue mining.

## D-008 — Preserve the then-current candidate statuses (superseded)

- **Status:** Superseded by D-026 and D-034
- **Decision:** At the time, GapGuard was WATCH only, rejected directions remained closed, Verigate was excluded, and product selection was undecided. This is a historical status, not a current WATCH.
- **Rationale:** D-026 closed the prior issue-driven candidate set. D-034 establishes D-029 as the only current WATCH and records the RWA priority.

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


## D-031 — Third global niche scan (27 November 2026)

- **Status:** NO-GO for five generic product theses; no new WATCH candidate.
- **Scope:** Insurance claims/subrogation evidence; manufacturing supplier-quality and warranty recovery; distributed-energy flexibility verification/settlement; cross-border eBL interoperability; SME receivables/SCF fraud.
- **Findings:** Claims evidence and cargo chronology are covered by claims cores and specialist evidence/cargo products; parametric sensor-triggered cargo insurance has a live 2026 commercial launch. Supplier nonconformance and warranty recovery are covered by ERP/QMS integrations, supplier portals, warranty suites and RMA platforms. Energy flexibility has documented multi-BRP allocation/compensation complexity, but Piclo provides settlement reports/dispute handling and Elexon has formal verification/settlement rules; no independent buyer gap was found. DCSA interoperability v2 is implemented by five eBL providers, while bank adoption remains low but no specific bank workflow gap was validated. MonetaGo directly covers duplicate financing, receivables/collateral verification and invoice validation.
- **Decision:** Do not build generic claims evidence, warranty/QMS, flexibility marketplace/settlement ledger, eBL registry/interoperability, or SME invoice/receivables registry products. No new candidate met buyer, cost, differentiated gap, and pilot gates.
- **Residual question:** Multi-BRP allocation/compensation disputes in energy remain a research question only, not WATCH. Promote only if an operator provides a real disputed settlement, recurrence, quantified impact, and a pilot path.
- **Arbitrum fit:** None of the generic theses established why shared Arbitrum state is necessary over standards, signed messages, existing platforms, or conventional databases.
- **Evidence limits:** Public desk research only. No buyer interviews, production datasets, buyer-specific cost, paid pilots, or WTP commitments.
- **Relationship:** D-029 commodity collateral remains the sole WATCH hypothesis. D-026, D-028, and D-030 remain closed. Verigate remains excluded.
- **Next step:** Continue discovery in a different problem space, but identify economic buyer and credible access path before deep research. Require two independent operator confirmations, real examples, recurrence, quantified impact, differentiated unmet workflow, and willingness to test.
- **Evidence:** [Third global niche scan](research/GLOBAL_NICHE_SCAN_03_2026-11-27.md).


## D-032 — Fourth global niche scan (27 November 2026)

- **Status:** NO-GO for three generic product theses; no new WATCH candidate.
- **Scope:** Aircraft component lifecycle / LLP records and transfer; battery second-life SoH, residual value and repurposing evidence; FuelEU Maritime compliance-balance pooling and settlement.
- **Findings:** ATA's Aircraft Transfer Records Working Group is developing a Component Passport / back-to-birth history dataset; IATA's September 2026 guidance clarifies that current-status confirmation, not a complete back-to-birth archive, is the relevant regulatory objective for LLP life status. GE RMS, FLYdocs, transition.aero, TARA and newer AI audit tools cover digitisation, transfer and audit. EU Battery Regulation Article 14 and Battery Passport requirements, the Commission registry/FAQ and numerous passport/BMS vendors cover battery data and second-life access. FuelEU's official database supports formal pool registration/allocation verification, while OceanScore, BetterSea, Zero44 and other providers cover marketplace, pricing and compliance workflows.
- **Decision:** Do not build generic aircraft component passport/records ledger, battery passport/SoH registry/second-life marketplace, or FuelEU pool marketplace/settlement ledger.
- **Residual questions (not candidates):** (1) whether LLP/rotable traders pay for neutral current-status evidence packages that reduce unnecessary back-to-birth requests; (2) whether second-life buyers experience legally permitted but operationally unusable OEM BMS data access; (3) whether FuelEU parties still suffer contract-failure or charterer/owner allocation disputes after existing tools. None is promoted to WATCH without independent buyer examples, quantified impact and pilot willingness.
- **Arbitrum fit:** None of the generic theses requires shared Arbitrum state over existing standards, signed records, regulatory databases, or vendor systems.
- **Evidence limits:** Public desk research only; no interviews, customer-specific cost, production datasets, paid pilots or WTP commitments.
- **Relationship:** D-029 commodity collateral remains the sole WATCH. D-026, D-028 and D-030 remain closed; D-031 and D-032 are NO-GO scans. Verigate remains excluded.
- **Next step:** Continue discovery outside aviation records, battery passports and maritime compliance pools. Start with a reachable economic buyer and observable failure/cost. Require two independent operator confirmations, redacted real examples, recurrence, quantified impact, a differentiated gap and willingness to test.
- **Evidence:** [Fourth global niche scan](research/GLOBAL_NICHE_SCAN_04_2026-11-27.md).


## D-033 — RWA infrastructure scan (27 November 2026)

- **Status:** NO-GO for four generic RWA product shapes; no new WATCH or GO candidate.
- **Scope:** Tokenised fund servicing / transfer agency / NAV reconciliation; tokenised private-credit servicing / loan-pool reporting; tokenised collateral eligibility / monitoring / realisation; independent asset backing / NAV / investor transparency.
- **Findings:** RWA is a real and growing market, and Arbitrum has meaningful deployment activity. However, BNY Digital Transfer Agency, Chainlink DTA, Libertum T-Suite Funds and other providers cover generic fund servicing and reconciliation. D-026 already closed generic post-origination private-credit servicing; Coretos, Brickken and the Black Lake/Nuva Labs mortgage-loan example further demonstrate coverage of servicing and loan-level verification. Chainlink Fulcrum and existing collateral platforms cover generic collateral monitoring and cross-chain repo workflows. Chronicle, RedStone, Dune and other providers cover asset backing, NAV and investor transparency.
- **Residual problem area (not a candidate):** Whether banks/CCPs have an unmet, repeatable need to verify that tokenised collateral can be legally accessed, transferred, converted and realised within a defined stress window. The Bank of England's 2026 consultation provides strong evidence of the risk class, but no software budget, distinct vendor gap, named buyer, quantified incident or pilot willingness was identified.
- **Decision:** Do not build generic tokenised fund administration, NAV oracle, private-credit servicing, waterfall automation, collateral dashboard, proof-of-reserves or RWA analytics products. A blockchain is not justified unless a buyer requires multiple independent parties to rely on shared state for a live workflow that existing APIs, signed attestations or central systems cannot handle.
- **Relationship to prior decisions:** D-026 private-credit servicing remains closed. D-029 cross-border commodity collateral / warehouse-lien verification remains the sole existing WATCH; this scan does not reopen or promote it. D-028, D-030, D-031 and D-032 remain closed for their respective scopes. Verigate remains excluded.
- **Evidence limits:** Public-source desk research only. No buyer interviews, production datasets, buyer-specific quantified costs, paid pilots or WTP commitments were obtained.
- **Next step:** If continuing in RWA, validate only a specific collateral realisability-under-stress workflow with two independent economic buyers, real incidents, quantified exposure/cost, a gap beyond existing providers and explicit willingness to test. Do not perform another broad generic vendor scan or start implementation.
- **Evidence:** [RWA infrastructure scan](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md).


## D-034 — Repository-wide audit and canonical project state (27 November 2026)

- **Status:** Accepted.
- **Decision:** The canonical current state is: no product selected; no GO; no implementation authorized; RWA is the user's priority research sector; D-029 cross-border commodity collateral / warehouse-lien verification is the only current WATCH. D-029 is RWA-adjacent asset-finance infrastructure, not a validated tokenised-RWA product. The collateral-realisability-under-stress question from D-033 remains a problem area only, not a second WATCH.
- **Supersession:** D-007 and D-008 are superseded: issue-driven discovery is no longer the active method and GapGuard is not a current WATCH. D-026 closed the prior issue-driven candidate set. D-010 through D-024 remain preserved as historical technical decisions and evidence, but none is an active product candidate or current WATCH after D-026. D-025's capped validation protocol was completed by D-026. D-027/D-028 and D-030/D-031/D-032/D-033 remain closed for their respective scopes. This supersession does not erase historical technical findings.
- **RWA boundary:** The user's RWA priority does not reopen the generic RWA Servicing Copilot (D-006) or generic private-credit servicing (D-026). It authorizes targeted RWA problem discovery only. Generic fund servicing/transfer agency/NAV reconciliation, private-credit servicing/waterfalls, collateral dashboards/orchestration, and proof-of-asset/NAV products remain NO-GO under D-033.
- **Rationale:** A repository-wide review found conflicting current-state summaries: README, TASKS, RESEARCH_LOG and PROJECT_CONTEXT still contained stale issue-driven/GapGuard WATCH language after D-026 and D-033. The decision ledger also did not explicitly retire D-010–D-024 as active product candidates. The review consolidates the current state without deleting historical evidence.
- **Immediate work:** No broad market scan. For the user's strict RWA priority, validate D-033's residual collateral-realisability-under-stress question with two independent banks, CCPs or clearing members. Require real redacted incidents, recurrence, quantified exposure/delay, a named budget owner, a differentiated gap beyond existing collateral platforms, and explicit bounded-pilot willingness. D-029 remains the only WATCH overall, but is RWA-adjacent asset-finance infrastructure rather than a validated tokenised-RWA product; validate it only if relevant buyer evidence emerges.
- **GO gate:** Named economic buyer; two independent confirmations; redacted production examples; measured frequency and cost; differentiated unmet workflow; explicit bounded-pilot willingness; and a material reason Arbitrum shared state is needed over APIs, signed attestations, standards or a conventional database.
- **Evidence:** [Final repository review](docs/FINAL_PROJECT_REVIEW_2026-11-27.md), [D-029 report](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md), [D-033 report](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md).


## D-035 — Targeted RWA collateral realisability operator evidence check (27 November 2026)

- **Status:** Problem validation remains open; no product candidate, GO or new WATCH.
- **Scope:** Targeted follow-up to D-033/D-034. Test whether banks and CCPs have a recurring, costly gap between legal control of tokenised collateral and conversion into usable liquidity after a clearing-member default. No broad market scan was performed.
- **Evidence:** Bank of England's 29 October 2026 CCP consultation and ESMA's 9 October 2026 Call for Evidence explicitly identify legal access, transfer, conversion, custody/CSD/bridge dependencies, default management and stressed realisation. Eurex/HQLAx/Clearstream has a live DLT-assisted mobilisation workflow; DTCC/DTC has a production tokenisation service and demonstrated CCP-margin workflows in its July 2026 production event.
- **Important distinction:** Eurex's current HQLAx flow mobilises securities from a clearing member's custodian to Clearstream Banking Luxembourg, which remains the CCP collateral location. Eurex states it does not participate in the HQLAx ledger and has no legal relationship with HQLAx. This is not proof that the CCP must liquidate an on-ledger token after default. DTCC's public production materials likewise do not disclose a failed default liquidation or attribute each participant to the CCP-margin leg.
- **Buyer validation:** No interviews, outreach, redacted incidents, buyer-specific quantified losses/delays, named budget owner or pilot willingness were obtained. Eurex Clearing, J.P. Morgan, DTCC/DTC, CME Clearing and BNP Paribas Securities are research/interview targets only, with the participation caveats recorded in the report.
- **Competition/substitutes:** Eurex/HQLAx/Clearstream and DTCC/DTC/Collateral AppChain cover material institutional mobilisation/tokenisation infrastructure. Existing CSD, custody, collateral-management and internal default-management controls may already cover the relevant workflow. A software product gap is not established.
- **Arbitrum fit:** Not established. Publicly described live designs use traditional CSD/custody, HQLAx, Canton and Besu. No buyer has stated a need for Arbitrum shared state.
- **Decision:** Keep collateral realisability under stress as a problem-validation question only. Do not promote to WATCH or candidate, do not reopen generic collateral dashboards/orchestration, and do not implement.
- **Next step:** Obtain two independent operator interviews (CCP and clearing-member/bank) with one redacted default drill, near-miss or operational exception each; record step-level timestamps, legal basis, custody/ledger dependencies, impact, workaround, budget owner and bounded-pilot willingness. If existing controls already prove timely realisation, close the question.
- **Evidence:** [Targeted operator evidence check](research/RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md).


## D-036 — Direct operator outreach initiated (27 November 2026)

- **Status:** Outreach sent; awaiting response. No buyer validation or GO.
- **Action:** Sent two focused research emails from the user's connected Gmail account to the publicly listed Eurex Clearing Default Management Team mailbox (DMP_Inbox@deutsche-boerse.com) and CME Clearing Risk Management (clearing.riskmanagement@cmegroup.com).
- **Purpose:** Request routing to collateral operations/risk/default-management staff and a short discussion of the path from posted collateral to usable liquidity after a clearing-member default.
- **Disclosure and boundaries:** The message identified the sender as an AI assistant supporting independent product-discovery research, requested only anonymised fire-drill/tabletop/near-miss/exception information, and explicitly stated that confidential member data or live-default details were not requested.
- **Evidence:** Eurex publicly directs voluntary fire-drill/default-management inquiries to DMP_Inbox@deutsche-boerse.com. CME publicly lists clearing.riskmanagement@cmegroup.com for Risk Management and performance-bond/margin inquiries.
- **Not done:** No email was sent to an unverified personal address. DTCC's official Tokenization Service page offers a contact form; no submission was made in this pass. LinkedIn name searches did not return reliable profiles for the other targeted executives; Laura Bayley's profile was found but no message was sent.
- **Decision:** Outreach is a discovery action only. No reply or meeting has yet been received; no product candidate, WATCH, GO or implementation is authorized.
- **Next step:** Track replies, follow up once if appropriate, and expand to verified DTCC/J.P. Morgan contacts. Record every response with date, role, evidence quality and whether it independently corroborates a real operational failure.


## D-037 — CCP default-management operational criteria and targeted outreach follow-up (27 November 2026)

- **Status:** Problem validation only; no candidate, no GO, no new WATCH.
- **New evidence:** CME Clearing's official collateral acceptance guidance requires a perfected security interest and states that if collateral cannot be liquidated to cash within one hour, arrangements such as a committed liquidity facility must support rapid deployment after a clearing-member default.
- **Eurex evidence:** Circular 066/26 says the 2026 EMIR Fire Drill begins 2 December 2026 and includes default-management and client-porting simulations. Voluntary participation is for clearing members and eligible disclosed direct clients; the registration deadline for the specific client-porting simulation was 30 October 2026. We are not a clearing member/client and have not requested access.
- **Timing distinction:** Eurex's four-business-hour porting period is the window for clients and replacement clearing members to fulfil porting prerequisites after the relevant notice/default event. It is not a cash-liquidation SLA.
- **Outreach:** No response was found to D-036's two initial messages. On 27 November, additional focused messages were sent to Eurex Client Services (client.services@eurex.com) and CME Clearing Collateral Risk (CollateralRisk@cmegroup.com). The former requests a non-confidential discussion with staff or a clearing-member DMP coordinator after the exercise; the latter asks how the one-hour/legal criteria apply to tokenised collateral and whether existing liquidity facilities/control frameworks already cover it.
- **Evidence limits:** These official operating criteria establish real constraints, not a tokenisation-specific failure, buyer pain, budget or demand. A committed liquidity facility may already neutralise the timing problem. No interview or meeting has occurred.
- **Decision:** Keep D-033 collateral realisability under stress as a problem-validation question only. D-029 remains the only WATCH. Arbitrum shared-state necessity is not established.
- **Next step:** Track replies from the four official Eurex/CME mailboxes; after the 2 December Eurex exercise, inspect public non-confidential outcomes and seek one independent clearing-member DMP Coordinator/Collateral Operations account. Require two independent operator examples before any product gap is considered.
- **Evidence:** [CCP default-management operational evidence follow-up](research/RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md).


## D-038 — Parallel hypothesis: CVM DLT pilot evidence operations (27 November 2026)

- **Status:** Exploratory hypothesis only; not selected, not WATCH, no GO, no implementation.
- **Why opened:** User rejected waiting for D-033 operator replies as the sole active path. Continue parallel RWA product discovery while existing CCP outreach remains pending.
- **Primary evidence:** CVM received 11 proposals for its DLT Pilot from ABBC, ABcripto, ABFintech, ABToken multichain, ABToken Stellar, ANBIMA, B3, BEE4 & Núclea, CSD, Liqi, and Real Price & Registro de Imóveis do Brasil. Proposal review was still underway; these submitters must not be assumed to be admitted networks or network managers.
- **Specific workflow:** Resolução CVM 249 requires network managers to maintain read-only real-time regulator access, structured machine-readable extraction/API, timestamped audit trails, continuous availability, fortnightly reports, immediate incident notifications and a final report detailing off-chain activities, oracles and off-chain governance.
- **Hypothesis:** A focused evidence-operations kit could collect and correlate on-chain/off-chain test events, preserve provenance and produce regulator-ready evidence/report inputs for network managers or infrastructure operators.
- **Important constraints:** The pilot is 60 days (extendable by up to 30); no real securities, investor funds or client personal data; participation is voluntary and unpaid and costs fall on participants. Eligible network managers are restricted by Art. 7. These facts create a concentrated workflow but may limit procurement and recurring revenue.
- **Outreach:** Sent Portuguese-language research requests to public contact channels at CSD BR, Liqi, Núclea and BEE4. No replies or meetings yet. Message IDs and exact scope are in the D-038 research report.
- **Kill criteria:** Existing API/audit/GRC/SIEM/data tooling already satisfies requirements; no recurring manual burden; no budget owner; no procurement path; or no post-pilot recurring use.
- **Arbitrum fit:** Unproven. A signed event store/API may suffice. No chain-specific architecture until shared state or independent verification is shown to be materially necessary.
- **Decision:** Run D-038 in parallel with D-033; do not wait for Eurex/CME replies to continue discovery. D-029 remains the only WATCH. D-038 is not a new WATCH or GO.
- **Evidence:** [CVM DLT pilot evidence operations report](research/CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md).


## D-039 — Brazil SBCE carbon-asset and MRV infrastructure screen (27 November 2026)

- **Status:** NO-GO as an Arbitrum product thesis at this stage; no new WATCH, no GO, no implementation.
- **Scope:** Screened (A) SBCE MRV compliance workspace for regulated industrial operators, (B) escriturador/exchange/custody integration with the SBCE Central Registry, and (C) onchain carbon-credit issuance/registry/double-counting layer.
- **Verified market facts:** Serpro and the Ministry of Finance are already developing the government Central Registry. The rollout begins with operator preparation in 2027, compulsory monitoring plans and annual reports in 2028–2029, and the first CBE asset market from 2030. Initial MRV applies to operators at or above 10,000 tCO2e/year and is expected to cover less than 1% of CNPJs. Law 15.042 provides for regulated escrituradores and interoperability with the Central Registry.
- **Competitive/substitute evidence:** Brazilian MRV vendors already market emissions data collection, traceability and reporting; ANP's CBIO platform provides a domestic central-registry/escriturador precedent; Gold Standard/Trovio's API-first registry targets connectivity with national registries, exchanges and marketplaces. These facts do not prove the SBCE will have no gaps, but weaken a generic new-platform thesis.
- **Buyer evidence:** No named buyer, budget owner, redacted integration failure, quantified cost, paid procurement signal or pilot commitment was identified. This is public-source desk research, not customer discovery.
- **Arbitrum fit:** Poor/unproven. Government central registry, regulated book-entry and APIs are the documented architecture. No need for permissionless shared state or Arbitrum was identified; a conventional integration/API would be more defensible if a gap emerges.
- **Decision:** Do not build an MRV dashboard, registry mirror, carbon token bridge or generic carbon ledger. No new WATCH. D-029 remains the only WATCH; D-033 and D-038 continue in parallel.
- **Reopen only if:** an authorised escriturador/depositary/exchange identifies a recurring uncovered integration/reconciliation failure with quantified cost and a budget owner; or two independent operators identify an MRV evidence gap that existing platforms do not solve and a material multi-party shared-state requirement; or published SBCE API specifications reveal a concrete, buyer-backed interoperability gap.
- **Evidence:** [Brazil SBCE carbon-asset and MRV infrastructure screen](research/BRAZIL_SBCE_CARBON_INFRASTRUCTURE_SCREEN_2026-11-27.md).


## D-040 — Precatório transfer-eligibility and token-allocation control (27 November 2026)

- **Status:** Exploratory hypothesis only; not selected, not WATCH, no GO, no implementation.
- **Why opened:** CNJ Resolução 705/2026 (issued 16 Nov, published 17 Nov; Art. 67 provides entry into force 30 days after publication) formalises the assignment chain and creates the Central National Cessões module. Art. 6 requires public deed, notarial notice where applicable, electronic registration, Central National communication, debtor notification and court homologation. Arts. 19–20 prohibit treating certain rights before presentation as transferable fractions, registered assets/guarantees, unique electronic identifiers or payment positions before the court. Art. 35 establishes title-chain/status tracking and duplicate-prevention controls; Art. 65 stages mandatory Central National operation pending deployment and at least one authorised registry entity.
- **Potential product:** a narrow eligibility/reconciliation API for professional acquirers, FIDCs and tokenisation platforms to reconcile issued/presented status, title chain, fraction, deeds, registry events, liens/guarantees, court homologation, debtor notification, net available value and token/fund-unit allocation. It must complement, not replace, CNJ/SisPreq, authorised registrars, courts, notaries or legal counsel.
- **Market signal:** CNJ public dashboard reports ~1.15m precatórios awaiting payment and >R$319B outstanding in amounts already included in budgets. This is public receivables stock, not TAM or freely assignable/tokenisable supply. Tokenised/structured precatório activity exists (Mercado Bitcoin + Adianta Jus; Preks; other structures), confirming identifiable operator classes, not product demand.
- **Competition/substitutes:** CNJ/SisPreq is being built with B3, CERC, Núclea and the notarial sector; JURISCAN covers court/list sourcing and multi-check due diligence; JUDIT offers court-data APIs and precatório mining; Preks offers acquisition, legal diligence, digital assignment and blockchain records; Adianta Jus is an active originator/acquirer and partnered with Mercado Bitcoin. Existing coverage is substantial.
- **Buyer evidence:** public operating companies identified; no interviews or replies yet. Research emails sent 27 Nov: Preks (info@preks.com.br, message 1a21c65b7af1fd8a) and Adianta Jus (atendimento@adiantajus.com.br, message 1a21c65c1cc127d5). These are outreach attempts, not customer validation.
- **Arbitrum fit:** unproven/weak. Official judicial and registry systems are authoritative; signed APIs may suffice. A chain is only potentially relevant if independent parties need shared, independently verifiable limits between legal fractions and token supply. Never issue an onchain identifier for a pre-precatório right as if it were a court-recognised transferable fraction.
- **Kill criteria:** CNJ/registrar APIs and existing vendors cover the flow; no material manual exception burden; no named budget owner; no repeatable gap beyond legal review; or Arbitrum is not materially needed.
- **Next:** validate the actual workflow with two independent operators; clarify legal wrapper (direct assignment vs fund share/investment contract); map transitional sources of truth before Central National activation; identify budget owner and repeatable exception; monitor CNJ/BCB implementation and registrar authorisation.
- **Evidence:** [Precatório transfer-compliance and tokenisation workflow](research/PRECATORIOS_TRANSFER_COMPLIANCE_AND_TOKENIZATION_2026-11-27.md).


## D-041 — Brazil duplicata escritural operational-gap screen (27 November 2026)

- **Status:** NO-GO as an Arbitrum Open House product thesis; no new WATCH, no product selection, no GO, no implementation.
- **Market/regulatory evidence:** BCB's electronic trade-receivables ecosystem entered assisted production in July 2026. Resolução BCB 540/2025 and IN BCB 775/2026 govern migration of pre-existing financing contracts over future receivables, ten-business-day submission, routing to the issuer's bookkeeper, application under legal priority criteria and dispute handling. B3's current rollout page says cross-bookkeeper issuance expanded in September 2026, boleto dinâmico is expected from February 2027, and mandatory adoption is phased from July 2027 (large), January 2028 (medium) and July 2028 (small).
- **Pain evidence:** V360's mapping of one real corporate operation identified eight risk types, including duplicate payments, unsupported payments, amount/title discrepancies and obligations related to cancelled invoices; it observed 30–90 day physical goods-receipt confirmation delays against a ten-day response window. V360 explicitly said the mapping was not statistical; do not extrapolate prevalence or loss rates.
- **Adoption signal:** 8 Nov reporting citing APIIMF showed at least 233 establishments registered as issuers at that date. This is a dated snapshot, not total adoption or TAM. The widely reported R$13T potential is not a validated software TAM.
- **Competition:** V360 directly markets ERP-to-registrar validation, payer-side response deadline control and correct-holder payment routing; Monkey markets issuer/ERP/registrar/financing orchestration; Núclea offers issuer/payer agendas, ERP integration and collateral/financing workflows; B3 operates the authorised core infrastructure and partner integrations. The obvious software gap is already served by direct incumbents.
- **Arbitrum fit:** poor/unproven. The process relies on authorised bookkeepers/registrars, regulated interoperability, issuer consent, ERP data and payment direction. Signed APIs and audit logs suffice; a public chain does not establish title, priority or payment destination.
- **Decision:** Do not build an onchain duplicate registry, B3/CERC/Núclea mirror, generic ERP connector, dynamic-boleto router or generic receivables tokenisation product. Keep pre-existing contract migration/tombamento as a discovery question only; no candidate/WATCH.
- **Reopen only if:** a named buyer identifies a recurring uncovered failure not addressed by V360, Monkey, Núclea, B3 and its ERP; quantifies cost; names a budget owner; and shows a bounded segment. Test conventional API/SaaS first; Arbitrum needs independent proof.
- **Evidence:** [Brazil duplicata escritural operational-gap screen](research/BRAZIL_DUPLICATA_ESCRITURAL_OPERATIONAL_GAP_SCREEN_2026-11-27.md).
