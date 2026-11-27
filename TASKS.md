# Tasks

## Current priority — issue-driven problem discovery

- [ ] Continue systematic review of primary GitHub Issues/Discussions in Arbitrum Nitro, arbitrum-sdk / arbitrum-chain-sdk, Orbit tooling, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.
- [x] First-pass review of Nitro #4733, #4736, #4766, #4770, #4771, #4780, #4785, #4789, #4208, #738; arbitrum-sdk #657, #639, #521; arbitrum-chain-sdk #642, #636, #222, #205, #206, #684; Morpho liquidation bot #114, #117, #118, #121; Uniswap v4-periphery #589, #596, #531; Uniswap SDK #763, #141.
- [x] Review existing tooling: official Arbitrum monitoring scripts/docs, community Helm charts, Nitro HA/feed-relay guides, Goldsky RPC comparison, RPCNode.IO, Alchemy benchmarks, and Morpho liquidation-bot architecture.
- [x] Compare the RPC-monitoring cluster against official Arbitrum monitoring, Goldsky, RPCNode.IO, Alchemy, and provider-native tooling; generic monitoring/provider ranking is not a candidate.
- [x] Compare Nitro #4733 against current master and v3.11.3 source; the code still lacks an explicit non-local sync-target provenance check.
- [x] Check historical SyncMonitor fixes #3180 and #3538; neither closes the warm-database false-ready case described by #4733.
- [x] Search for independent reports of the same #4733 false-ready / HA bootstrap failure; none found in this bounded GitHub search pass.
- [x] Follow Nitro #4736, #4766, and #4785 through comments and linked PRs; separate upstream fixes from residual problems.
- [x] Review Morpho bots #4 against current main; correct the reported Base/Robinhood backoff ratio using the repository's own 200 ms / 100 ms block-time table and identify stale stuck/cooldown claims.
- [x] Recheck current status of Nitro #4784/#4771, Arbitrum SDK #657, chain SDK #609/#642, Orbit setup issues #68/#69, and linked upstream PRs #668/#4768/#4787.
- [x] Expand RPC/indexer research across Envio, The Graph, Ponder, and Nitro; cluster independent reporters and separate operator pain from repeated reports by the same author.
- [x] Verify Envio mitigation PRs #1764/#1791/#1801/#1804/#1861 and open requests #1851/#1812/#1840; assess eRPC and provider-native budget controls.
- [x] Review Nitro #4788 and #3666 plus Envio/Ponder empty-log protections; distinguish eventual consistency from stale/wrong log responses.
- [x] Cross-check Ponder #2525/#2526 and #2491 against current main; verify zero-bloom handling, request-rate evidence, and upstream mitigation status.
- [x] Recheck Nuthatch #765/#1173/#1190 and merged fixes #804/#1176/#1191; distinguish one maintainer's repeated measurements from independent customers.
- [x] Recheck rindexer #199/#203 and Envio #1851/#1812/#1840/#1861; confirm shipped versus open request-reduction work.
- [x] Check fast-L2 event completeness evidence in Ponder #2359 and the linked HCTDIP listener commit; verify current Ponder reorg-window implementation before treating the old issue as unresolved.
- [x] Review Blocksquare #45 as a self-hosting buyer-role signal; no paid commitment or confirmed switch found.
- [ ] Verify whether reported Nitro/Orbit RPC issues and SDK limitations remain unresolved in current releases and whether workarounds or upstream fixes have shipped.
- [ ] Find independent operators with the same Nitro HA false-ready / sequencer bootstrap problem; determine whether it is limited to one operator topology.
- [ ] Find independent reports of the same operational/developer pain across different Orbit chains; distinguish recurrence from multiple reports on one chain or by one author.
- [ ] For each recurring problem, identify affected role, frequency, operational cost, current workaround, existing commercial tools, and plausible budget owner.
- [x] Recheck merge/release status of OffchainLabs/go-ethereum #668, Nitro #4768, and Nitro #4787; all three remained open and unmerged at this review.
- [ ] Find independent liquidation-bot operators reporting block-time-dependent retry/backoff problems; measure actual API/quote cost or missed liquidations.
- [x] Review additional independent indexer gap/stall signals: Ergo #2600, Ponder #1008, and The Graph Q3 infrastructure outage; separate corroborating technical failures from hosted-explorer incidents and quantified recovery cost.
- [ ] Find two additional independent Arbitrum/Orbit indexer teams with quantified RPC read amplification or provider spend. Hosted-indexer evidence now includes Blockscout and Flop Labs as separate operator clusters, with reproducible gaps/backlog and measured duration; still seek explicit discovery/recovery labor, spend, SLA/customer impact, or willingness-to-pay. Exclude already-reviewed Envio, Ponder, Nuthatch, rindexer, HCTDIP, RAILGUN/Squid, and avoid double-counting multiple Blockscout/Flop incidents as additional buyers.
- [ ] Find two independent fast-L2/Orbit operators with a measured event-loss or checkpoint-advancement incident caused by lagging/empty RPC responses; Allium's July/September reports count as one operator, not two. Blockscout's missing ranges are one operator's internal indexer-gap cluster, not proof of lagging/empty RPC cause.
- [ ] Track Ponder #2526 and #2491, Ponder #2305, and Envio #1851/#1812/#1840 through merge and release; compare before/after RPC request counts.
- [x] Check RAILGUN-specific substitutes: Anon Wallet's public liveness API covers PPOI/indexer/Squid reachability and lag, with 14-day history; its docs do not claim event-level completeness validation. Generic RAILGUN liveness/proxy is not a differentiated candidate.
- [ ] Interview a named Blockscout/Robinhood or Flop Labs hosted-indexer owner about discovery/backfill engineer-hours, spend, support/SLA impact, recurrence, and whether cross-provider reconciliation is automated or budgeted.
- [x] Compare current Blockscout, SQD Portal, Envio HyperSync, and Alchemy completeness/reconciliation guarantees and substitutes. Remaining hypothesis: neutral cross-provider evidence, still unvalidated. See research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md.
- [ ] Interview indexer operators using eRPC, Goldsky Cloud Edge, provider quotas, or native throttling to identify a remaining workflow those products cannot solve.
- [x] Review RAILGUN Engine #142/#143 and wallet #134/#135; verify the Arbitrum TXID omission, third-party RailOxide operator report, PPOI divergence, recovery, and separate Sepolia follow-up.
- [x] Review Allium's July and September 2026 Robinhood Chain ingestion incidents; separate repeated incidents by one provider from independent customer evidence.
- [x] Review Envio's September 2026 technical explanation of silent event omissions, HyperSync fallback verification plans, and eRPC's limits on validating filtered eth_getLogs responses.
- [ ] Identify a named operator/on-call owner for the RAILGUN Squid/PPOI pipeline and establish whether late-backfill reconciliation/rebuild is routine or manual; public repo points to Railgun-Community and Subsquid Cloud org `rail-squid`, but no named owner or current deployed-source proof was found.
- [x] Review Blockscout's Robinhood Chain month-one scaling report and hosted explorer issues #14767/#14886/#14984/#14598, plus Base hosted gap #14869; distinguish missing blocks, transient API lag, display errors, and internal operator remediation.
- [x] Recheck Railgun-Community/engine #142 and subsquid-integration #1: the Sepolia omission remains publicly unresolved as of 26 Nov 2026; both issues are open and no maintainer response/backfill is recorded.
- [ ] Recheck Envio #1851, #1812, #1840, and #1884 after the next release; determine whether upstream fixes close the reported cost gap.
- [ ] Determine whether Arbitrum SDK/chain SDK log-range helpers are adopting adaptive range splitting; confirm whether operators still have a material unserved workflow.
- [ ] Build a shortlist of no more than three evidence-backed problem clusters; do not convert isolated bugs into product concepts.
- [ ] Do not start implementation until a specific user/buyer and a real workflow are validated.

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
