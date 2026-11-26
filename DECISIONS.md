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
