# Research log — Arbitrum Open House São Paulo 2027

## Executive conclusion — D-044 (27 November 2026)

**No product has GO status. Product selection remains undecided and implementation is not authorized. RWA is the user's priority research sector.**

There is currently no WATCH or selected product. D-044 closes D-029's cross-border commodity collateral / warehouse-lien verification hypothesis after a competitive recheck found direct overlap with Secro and Crodax and adjacent coverage from FACTOS, TradeTrust and Singapore's Trade Finance Registry. The underlying fraud problem is real, but no differentiated buyer workflow, quantified impact or material Arbitrum requirement was established. D-033 rejected generic fund servicing/transfer agency/NAV reconciliation, private-credit servicing, collateral dashboards/orchestration and asset/NAV verification because existing institutional and specialist providers cover the obvious workflows. Collateral realisability under stress remains a problem area only, not a candidate.

D-026 closed the prior issue-driven candidate set. D-010–D-024 remain historical technical research and are not active product candidates or current WATCH items. D-028 closed generic B2B stablecoin payment operations. D-030, D-031 and D-032 rejected their respective generic product theses. Verigate remains explicitly excluded; the earlier generic RWA Servicing Copilot is not reopened.

**Next action:** continue bounded, parallel RWA discovery and compare the remaining exploratory/problem-validation tracks; do not treat D-029 as open. Continue primary operator validation of D-033's residual RWA question. D-036/D-037 outreach has been sent to four official Eurex/CME mailboxes; no responses yet. CME's published collateral rules require a perfected security interest and cash liquidation within one hour or a committed liquidity facility. Eurex's 2026 default-management exercise starts 2 December and includes client-porting simulation; its four-hour porting prerequisite window is not a cash-realisation SLA. Obtain two independent operator accounts and redacted drill/near-miss examples, then determine whether existing controls and liquidity facilities already solve the workflow. D-029 was closed NO-GO by D-044. No current WATCH; no code before GO.

Full repository conclusion: [docs/FINAL_PROJECT_REVIEW_2026-11-27.md](docs/FINAL_PROJECT_REVIEW_2026-11-27.md).

## Scope

This log combines:
- The three earlier Arbitrum/Buildathon topic discussions archived in the project.
- Public winner announcements for Open House India 2025, NYC 2026, London 2026, and Singapore 2026.
- Selected Arbitrum-specific hackathons (Allo on Arbitrum 2023–24 and Bucharest 2024).
- 2026 market and regulatory signals relevant to a February 2027 buildathon.

The winner inventory and source links are in `WINNER_MAP.md`. Public archives do not expose every historical submission and some event pages are incomplete; this is a review of the major verifiable winner sets, not a claim that every Arbitrum-branded hackathon ever held has been exhaustively enumerated.

## What winner patterns show

1. **Financial primitives dominate recent Open House winners.** Tokenized assets, lending, trading, yield, liquidity, collateral, and risk infrastructure repeatedly appear in top projects.
2. **A narrow use case beats a generic protocol.** Winners usually explain a specific workflow: tokenized-stock lending, liquidity for stablecoin issuers, collateral mobility, credit risk, escrow for high-value purchases, insurance claims, or private payments.
3. **AI agents are being judged as financial products, not generic chatbots.** Recent winners focus on trading, portfolio automation, privacy, and agentic financial coordination. This space is already crowded.
4. **Privacy and compliance matter when attached to a real workflow.** Shinobi.Cash, ReineiraOS, CanHav, and GuardChain demonstrate privacy/claims/agentic use cases, not privacy for its own sake.
5. **Arbitrum-specific value must be visible.** Stylus performance, Arbitrum liquidity, Robinhood Chain tokenized assets, and programmable settlement are credible differentiators when the product actually needs them.
6. **Winning is not proof of a durable market.** Prize announcements validate jury fit and execution at an event; they do not establish retention, revenue, or long-term product-market fit.

## 2027 trend signals and caveats

### Tokenized assets and institutional operations

- The Arbitrum Foundation's H1 2026 progress update reported average monthly stablecoin transfer volume above $70B and described Arbitrum as the leading platform for RWA deployments.
- Open House winners have already covered tokenized stock markets, RWA yield, liquidity, collateral, risk ratings, and credit exits.
- The likely next layer to investigate is not another token issuance or trading venue, but the operations required after issuance: repayment reconciliation, loan servicing, arrears, covenant/condition monitoring, cashflow distribution, and investor reporting.

### Agentic commerce

- Agentic AI is a clear 2026–27 theme, including agentic trading, payments, and financial operations.
- One October 2026 public tracker reported millions of tracked x402 transactions but only about $274K of tracked stablecoin volume. The same report warned that x402 coverage changed and ERC-8004 registrations were highly concentrated on one domain. Treat this as an early signal with measurement caveats, not proof of mass commercial demand.
- Do not pursue generic agent identity, generic agent wallets, agent payment rails, or autonomous trading as the main product. A vertical workflow with a paying business owner would be required.

### Latin America and stablecoins

- A 2026 Ripple survey of 160 finance leaders in Brazil and Mexico reported strong intent to use stablecoins, while respondents also cited compliance complexity and lack of in-house technical skills.
- Brazil's Central Bank has introduced a VASP framework. Resolution 520/2025 establishes information-transfer requirements in phases, with domestic VASP-to-VASP information exchange due by 2 February 2027 and international coverage by 2 February 2028.
- Do not assume that a generic PIX-to-stablecoin or cross-border stablecoin settlement product is viable: Resolution 561/2026 restricts stablecoin/crypto settlement of the offshore leg for regulated eFX providers. This is a material regulatory constraint.

## Current phase: issue-driven problem discovery

The current work is not another broad market scan. Search for concrete recurring problems reported by actual developers, users, and protocol operators. Each issue is a lead, not proof of demand.

First-pass findings dated 26 November 2026 are documented in [research/ISSUE_RESEARCH_2026-11-26.md](research/ISSUE_RESEARCH_2026-11-26.md), with follow-up source, issue, and PR checks in [research/ISSUE_RESEARCH_2026-11-27.md](research/ISSUE_RESEARCH_2026-11-27.md). Nitro HA sequencer readiness / false-ready behavior (#4733) remains the strongest problem lead: one operator reports a quantified customer outage and nine test-chain reproductions, and current master source still lacks an explicit non-local sync-target provenance check. A bounded search found no independent report of the same failure, so this is not a product candidate. Historical Nitro fixes #3180 and #3538 do not appear to close the warm-database case. The Orbit archive-node cluster (#4736/#4766) has separate upstream fixes or PRs in progress; the tracer race appears fixed in Nitro v3.12.1, while a range-limit fix and capability metadata fix remain in open PRs. Feed reconnect issue #4785 also has an open fix PR. These are technical leads to monitor, not product opportunities. Generic RPC monitoring/provider ranking remains closed.

Follow-up on 26 November 2026: [research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md](research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md) reviewed Morpho bots #4, SDK log-range reports #609/#642, Nitro #4784/#4771, and adjacent Aave/GMX/Morpho signals. Morpho #4's stated 9x retry impact is overstated: the current repository's own timing table says Base 200 ms and Robinhood 100 ms, producing a modelled 47 versus 79 attempts over 10 minutes (about 1.68x) at the issue's poll cadence. Current Blue source still uses fixed block-based backoff, but an existing `blocksFor()` helper provides a direct code-level remedy. `eth_getLogs` range failures recur across different contexts, but the likely remedy is adaptive pagination or upstream SDK changes; no buyer or standalone product gap is established. Nitro #4733 remains the strongest problem lead, still without independent operator confirmation.

Follow-up on 26 November 2026: [research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md](research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md) found the strongest recurring commercial pain signal so far: several independent indexer operators report measured RPC request amplification, 429 retry spirals, and provider-cost spikes. The evidence includes Arbitrum/Robinhood Chain request rates, 8,281 timed-out pages across 102,000 pages on seven chains, and one operator's 800-to-18,000 requests/hour upgrade regression. This is WATCH, not GO: Envio has merged throttle and rate-limit fixes and has additional request-reduction PRs in progress; eRPC already offers caching, failover, request splitting, cross-validation, and CU budget guards, while providers and managed indexers are substitutes. The remaining opportunity, if any, must be a specific indexer workload gap that those tools do not solve.

No product concept is selected from these findings. Before proposing an MVP, verify recurrence across independent operators, whether fixes/workarounds already exist, the affected buyer and cost of pain, competitive tools, and whether a small team can deliver a differentiated solution.

## Directions not selected

### Brazil Travel Rule adapter — not the lead idea

The 2 February 2027 domestic Travel Rule milestone is timely, and the lack of a mandated technical protocol creates implementation complexity. However, Notabene has announced a Brazil-specific Travel Rule testnet and publishes Brazil-specific data requirements; Sumsub already offers protocol interoperability, counterparty discovery, automation, and reporting. A generic Travel Rule product would enter an established competitive field. Reconsider only if interviews reveal a specific underserved workflow beyond existing providers.

### Stablecoin treasury/payments for LATAM — not the lead idea

There is clear institutional interest, but the category is crowded with infrastructure providers, and Brazil's eFX settlement rules make a generic cross-border stablecoin gateway a poor default. The previous generic PIX/USDC and B2B payment-split directions remain closed.

### Agentic trading / generic agent payments — not the lead idea

Several winners already occupy agentic trading and financial automation. Public x402 volume figures also show that transaction counts can be misleading when actual payment volume is small or measurement coverage is incomplete.

## Previously explored and closed directions

Do not restart broad scans of:
- GuardRail Wallet / generic agent policy engines.
- VeriPay / generic agentic payments and escrow.
- Stylus zkTLS / generic zkTLS verifier.
- Generic PIX-to-stablecoin gateways and generic B2B payment splits with yield.
- Retail DCA / stop-loss apps for Robinhood Chain.
- Generic AI CFO / treasury agents.
- Generic tokenized-stock dashboards.
- Generic DEX / lending / NFT / L3 concepts.

Verigate is explicitly excluded from the Buildathon candidate pool by user decision. Do not reintroduce it.

## Reusable lessons

1. Start from a narrow, expensive workflow and the person who owns its budget.
2. Verify the buyer and current workaround before designing the protocol.
3. Treat Arbitrum/Robinhood integration as a product requirement only when it materially improves the workflow, not as a logo or hackathon checkbox.
4. Prefer a small end-to-end demo with a real design partner over a broad platform architecture.
5. Separate hackathon jury fit from commercial viability; neither proves the other.
6. Do not equate repository activity, test counts, a friendly reply, or an award narrative with adoption or revenue.


## Recovered history from earlier project work

The archived history includes two substantial prior product lines that were missing from the previous consolidated summary:

- **Agent Guardian / GuardRail Wallet:** a deterministic on-chain execution boundary for AI-agent transactions, with registry, policies, EIP-712 intents, spending limits, owner approvals, recovery, and an AgentSmartWallet. September 2026 submission/checkpoint artifacts report 178 and later 228 automated tests and Arbitrum Sepolia/One deployments. The later checkpoint explicitly says the Risk Intelligence layer was deterministic inspection/aggregation, not an AI risk model. This line is not an active Buildathon candidate; generic wallet/policy-engine exploration remains closed.
- **AttestGuard:** a separate Creditcoin/Attestcoin invoice-financing prototype. It attempted to prove a buyer's on-chain delivery-confirmation event, then use deterministic contract limits to approve an invoice advance or route it to human review. A September 5 independent audit identified a permissionless funding bypass of off-chain BLOCK logic, non-functional buyer-default history, custodial liquidity without depositor accounting, owner trust assumptions, the gap between an on-chain event and physical delivery, and a non-load-bearing LLM layer. AttestGuard is historical prior work, not an automatically revived candidate.

The September 4 meme-smart-money research also failed to verify a repeatable top-wallet ranking because complete wallet-level realized PnL data was unavailable. Its proposed independent-wallet consensus model remained a hypothesis.

The earlier **RWA Servicing Copilot** proposal was distinct from AttestGuard, but it is not an active candidate under the latest user-approved direction. It remains historical repository research only. The current phase is issue-driven discovery; do not prioritize the proposal without explicit reopening.

See [HISTORY_RECONSTRUCTION.md](HISTORY_RECONSTRUCTION.md) for the dated chronology, exact prior candidate funnel, and caveats about archived test/deployment claims.

## Follow-up — 26 November 2026: indexer RPC and fast-L2 correctness

[research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md](research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md) adds current-source and PR verification. Ponder #2525 reports about 66,000 `eth_getLogs` calls/day on Robinhood Chain, driven in part by zero `logsBloom` blocks; its proposed fix #2526 is open. A different Ponder contributor's #2491 PR also measures avoidable factory-filter requests. Nuthatch and rindexer show the same broad cost class but their direct fixes shipped in their own indexers; repeated Nuthatch reports are one maintainer/operator, not multiple customers. Envio #1851/#1812/#1840 remain open while #1861 is merged. The recurring RPC-cost signal is stronger but remains WATCH because the fixes are framework-specific and competition is substantial.

The same follow-up records a separate fast-L2 data-integrity lead: an HCTDIP listener commit describes 61 fills skipped when two RPC nodes both returned empty logs near the tip, then adds a hard minimum safe depth. Ponder's older Robinhood block-count finality issue is stale against current main, which uses a timestamp-based reorg window. The event-loss signal remains WATCH with only one independent linked incident.


## 26 November 2026 — Indexer integrity and checkpoint-divergence follow-up

A further issue-driven pass found a protocol-specific RAILGUN/Squid integrity cluster and independent Robinhood Chain ingestion evidence. Full details and source links are in [research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md](research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md).

- Railgun-Community/engine #142/#143 describe an omitted Arbitrum Nullified event that caused TXID synchronization to stop and a private output to remain unavailable. A separate wallet developer reported three missing events and a diverged downstream PPOI index. Upstream data was later corrected and a full wallet resync restored spendability. Duplicate reports refer to one incident cluster, not independent customer incidents.
- A separate October follow-up in #142 describes the same omission pattern on Sepolia. This supports a repeated source/indexer failure shape across chains, but does not establish a second Arbitrum buyer.
- Allium's July and September 2026 Robinhood incidents document RPC-performance-related ingestion degradation; July explicitly required patching missing data. Both are one provider's incidents and do not quantify data loss or cost.
- Envio's September article explains why filtered eth_getLogs results cannot be intrinsically proven complete from the response alone, documents a Robinhood fallback-data incident, and compares full-block verification with eRPC's receipt-cache checks. HyperSync and protocol-specific indexers already address parts of the problem.

**Assessment:** Keep RAILGUN/Squid event omission and PPOI divergence at WATCH. Treat Allium as supporting operator evidence. No additional two independent Orbit teams with quantified spend or loss were found; no buyer, willingness to pay, or differentiated standalone product is established. No GO and no implementation.


## 26 November 2026 — RAILGUN/Squid follow-up recheck

Rechecked the October Sepolia evidence and identified the public operator escalation path and existing monitoring substitutes. Details are in [research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md](research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md), section 7.

- Engine #142 remains open with one comment from 12 Oct; the detailed Sepolia report identifies a missing Nullified log at index 0x62, a single failing verificationHash link (row 4187 → 4188), and 41 repeated sync stops in 38 minutes.
- The same reporter opened [Railgun-Community/subsquid-integration #1](https://github.com/Railgun-Community/subsquid-integration/issues/1), requesting a Sepolia backfill/re-index. It remains open with zero comments and no public maintainer response as of 26 Nov.
- The public Subsquid integration repository has one initial commit from 11 Mar 2025. Its README documents deployment to Subsquid Cloud organization `rail-squid`; chain config defines Arbitrum/Sepolia RPC secrets. This identifies the public source organization and documented cloud namespace, not a named on-call operator or proof that the deployed service still runs this exact source.
- Anon Wallet's public RAILGUN liveness API covers PPOI, indexer, Subsquid, broadcasters, and Waku with ~30-second snapshots and 14-day history. Its PPOI proxy caches reads but forwards proof submissions once without queuing; a separate paymaster path retries proofs bundled with private fees in memory for up to one hour. This removes generic RAILGUN liveness/proxy as a differentiated candidate. The API does not claim to prove event-level completeness; Sepolia is explicitly unmonitored for Subsquid.
- The possible remaining gap is semantic TXID/event reconciliation against canonical receipts and detection of downstream PPOI checkpoints built from incomplete data. No named budget owner, WTP, or cross-protocol recurrence has been validated.

**Assessment unchanged:** RAILGUN/Squid remains WATCH, not GO. The Sepolia report is strong technical evidence but is one reporter in the same Railgun Squid deployment family. Do not begin implementation.


## 26 November 2026 — Blockscout hosted-explorer/indexer operations

A new public-source pass found a substantial Blockscout operator cluster. Full evidence and issue links are in [research/BLOCKSCOUT_ROBINHOOD_INDEXER_OPERATIONS_2026-11-26.md](research/BLOCKSCOUT_ROBINHOOD_INDEXER_OPERATIONS_2026-11-26.md).

- Blockscout's 31 July newsletter says Robinhood Chain processed 190.78M transactions by 29 July, peaked above 11M/day, and caused its infrastructure to hit limits. Blockscout traced database CPU pressure to inefficient high-traffic queries, rewrote them, and hardened the indexer.
- Hosted Robinhood explorer #14767 documented a ~7,704-block hole and CREATE2 deployments misclassified as EOAs; Blockscout fetched the blocks and completed backfill by 8 Sep.
- #14886 documented intermittent API 500s, ~8–300 block lag, 45–79 second transaction visibility delays, and WebSocket silence; Blockscout closed it as temporary service degradation on 1 Oct. The report says the data was delayed, not dropped, in this incident.
- #14598's apparent missing token transfers were clarified by the reporter as a derived-display issue caused by incorrectly indexed total supply; fixed on 20 Jul.
- Hosted Base #14869 documented thousands of missing blocks while indexing status said 100%; Blockscout confirmed backfill on 15 Oct.
- #14984 was a separate contract-verification 500/rate-limit issue, resolved 28 Oct.

These are multiple user reports across chains and symptoms, but one hosted operator (Blockscout); do not count them as independent indexer vendors or buyers. The reviewed incidents were resolved. No cost, engineering-hour, SLA, churn, or willingness-to-pay figure was disclosed.

A separate one-person Robinhood analytics project, FOMO Robinhood Radar, archived 6 Oct after processing 187k fills from 562 wallets. Its README describes a low-cost direct-RPC workaround (two filtered eth_getLogs calls for the roster, roughly 30 free requests per full pass). This is not a buyer, but it is evidence that small application workloads can avoid paid indexers.

Koinly's public Robinhood integration complaint mentions skipped imports and backfilled swaps, but the thread mixes bridge transactions absent from the explorer with swap parsing/grouping issues; it is not counted as verified missing on-chain data.

**Assessment:** Hosted-explorer completeness/false-green status is a stronger operator problem lead, but remains WATCH. No second independent operator with quantified repair cost or buyer WTP was found. No GO and no implementation.


## Follow-up: independent indexer completeness incidents (26 November 2026)

See [research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md](research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md). Two additional technical reports were reviewed: Ergo #2600 (current, ~285-block indexing lag at discovery, restart recovery in minutes, downstream transaction rejection) and Ponder #1008 (historical RPC-failure gap recovered by pruning/restart). The Graph Q3 2026 report describes an adjacent three-hour gateway outage and subsequent allocation impact, but not canonical event omission. These broaden technical evidence, but no hosted explorer operator with quantified recovery labor/cost or willingness-to-pay was found. Existing substitutes include indexer-native gap audit/backfill/monitoring (Ekubo), checkpoint/backfill/reindex signals in DALP documentation, and Envio's planned fallback verification. Keep completeness hypothesis WATCH; do not select or implement.


## Follow-up: independent hosted Flop Labs indexer backlog and recurrence (26 November 2026)

See [research/FLOP_HOSTED_INDEXER_INCIDENT_2026-11-26.md](research/FLOP_HOSTED_INDEXER_INCIDENT_2026-11-26.md). Flop Labs Devnet explorer/faucet #8/#339 adds a hosted operator distinct from Blockscout: ~61k–71k blocks of backlog, grant/onboarding blockage for at least six hours, an estimated ~40-hour catch-up window after an indexer deployment (not a confirmed ETA), and recurring 5–60 minute lag windows. These are measured outage/backlog durations, not quantified labor or spend. Ekubo's direct event verification, audit, guarded backfill, and webhook monitor; DALP's health/checkpoint/backfill/reindex controls; and indexer-provider services narrow differentiation. Product remains WATCH; no GO.


## Follow-up: current completeness substitute comparison (26 November 2026)

See [research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md](research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md). SQD Portal and Envio HyperSync publish upstream validation mechanisms based on multiple sources and cryptographic block/receipt roots. Blockscout documents catch-up/retry and specialized repair fetchers; no universal public canonical-completeness guarantee was found in reviewed documentation. Alchemy RPC/log/subscription/request-log tools are operational observability and data access, not a completeness attestation for a consumer's indexer. Ekubo and DALP already provide gap-audit/backfill/monitoring and operational recovery substitutes. Narrow hypothesis: neutral cross-provider reconciliation/evidence, only if cost and buyer need are validated. Status WATCH, no GO.


## 27 November 2026 — RPC economics, Morpho feed, and Nitro false-ready follow-up

See [research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md](research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md).

- Corrected Nuthatch cost baseline: current 5.17.0 defaults to a five-minute poll interval; the ~$185/month and ~9,900 CU/min Arbitrum measurement is for a prior every-block configuration, not the current default. The reference deployment and 7x retry amplification experiment are maintainer-owned measurements, not independent customer demand.
- Morpho #118 offers a 20-minute Base borrower-health feed for 2,586 borrowers across 212 markets. No subscriber or WTP evidence; Morpho API and hosted Envio HyperIndex already cover much of baseline candidate discovery. Do not promote generic feed.
- Morpho viem-dlc #1 reports a real cache OOM on long Arbitrum history sync, but the issue is closed and the maintainer described LRU mitigation / planned cache removal. Treat as a library-specific technical issue.
- Nitro #4770 was a false-positive interpretation of an INFO-level BoLD warning; time-aligned snapshots showed inbox and execution progressing and the maintainer closed it as not a bug. Do not count it as another confirmed false-ready incident.
- Official Arbitrum HA and troubleshooting guides provide substantial substitutes for generic sequencer operations, though they do not by themselves prove the #4733 source-level false-ready issue fixed.
- **Assessment:** no new GO. Indexer RPC economics and Nitro #4733 remain WATCH; Morpho feed is not promoted; no implementation.


## 27 November 2026 — Aave sequencer sentinel false-positive recheck

Aave v3-core #926 (opened 14 Nov 2023) described routine daily false-positive sentinel checks blocking borrow and liquidation for about an hour. The issue remains open in the legacy repository, but it is not a current Arbitrum v3.7 gap: Aave v3.7 removed sentinel checks from borrow/liquidation validation because inconsistent L2 uptime signals caused false positives. Governance proposal 489 Part 2 was executed 28 May 2026 and includes Arbitrum; it unsets configured sentinels and upgrades Pool/PoolConfigurator. Current Aave docs state the Pool no longer reads the sentinel since v3.7.

Sources: [Aave v3.7 sentinel-removal rationale](https://github.com/aave-dao/aave-v3-origin/blob/main/docs/3.7/sentinel-removal.md), [Aave proposal 473](https://app.aave.com/governance/v3/proposal/?proposalId=473), [proposal 489 execution/network scope](https://app.kvorum.watch/daos/aave/proposals/aave_governance_v3/489), [current PoolAddressesProvider docs](https://aave.com/docs/aave-v3/smart-contracts/pool-addresses-provider).

**Assessment:** close as a current Arbitrum Aave v3.7 product lead; do not build sentinel monitoring. Legacy v3.6 forks need separate evidence.

## 27 November 2026 — silent RPC log-result corruption follow-up

See [research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md](research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md).

- Nitro #4788 reports `eth_getLogs` requests above head returning the current-head logs on both Arbitrum One and Robinhood Chain. The reporter measured 321 wrong-block and 33 empty responses on Arbitrum One, and 289 wrong-block and 39 empty responses on Robinhood Chain over an 18-minute sample. The issue was closed as completed on 24 Nov, but the reviewed discussion has no maintainer resolution note or linked fix PR; do not infer the fix from closure.
- Lasso RPC #460 independently demonstrates in a mock harness that a lagging upstream can return null blocks or valid-looking empty logs, and a router can accept the empty response without failover. This is not a production incident.
- DefiLlama SDK #302 reports a pruned RPC returning `[]` for historical logs while still serving the block, and a cache persisting the range as complete. Its author checked 545 entries and found six short ranges; two were associated with reported material metric/fee loss. The related Maverick V1 #11308 and SDK #302 are one DefiLlama incident cluster, not separate buyers. The Base example is adjacent L2 evidence, not an Arbitrum-chain incident.
- **Assessment:** recurring technical failure class across three codebases, but only one quantified production business-impact report and no validated buyer/WTP. Keep a narrow silent event-ingestion correctness hypothesis at WATCH; generic RPC monitoring/proxy and generic completeness dashboard remain rejected/crowded. No GO and no implementation.

## 27 November 2026 — competitive review and finite search decision

The expanded silent-RPC report now includes a competitive reality check: Envio HyperSync's whole-block root validation/refetch path; eRPC 0.5.0's existing proxy health, consensus, and data-integrity controls; and SQD/Ponder's Arbitrum access-list omission investigation, fail-loud semantics, cross-validation, and PR #110/#111 fix. The Arbitrum access-list example demonstrates a real dataset/transform correctness failure, but not third-party buyer demand. Silent RPC completeness remains a real technical class but is downgraded to a weak WATCH hypothesis because strong substitutes exist and no independent buyer/WTP is confirmed.

D-025 caps discovery at three remaining passes: (A) direct operator validation for silent RPC/indexer integrity and send-time liquidation data; (B) validate only the existing post-origination tokenized private-credit servicing hypothesis from WINNER_MAP; (C) final scoring of no more than three finalists and GO/NO-GO. If no candidate meets the buyer/pain/cost/unmet-workflow/pilot gate, stop this search set and change the market/problem frame. No further sector brainstorming.


## 27 November 2026 — Pass A public operator evidence check

See [research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md](research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md).

- Nitro #4788 fresh readback: closed 24 Nov as completed; two comments are technical advice about cursor safety, not independent production operator evidence. Both reported endpoints used the same Nitro v3.12.3-rc.4 release family. No public maintainer fix/release confirmation was established.
- Morpho Blue liquidation bot #121 remains open with zero comments. The question explicitly offers a sponsored 90-day endpoint experiment, but no operator identified a recurring send-time data gap or accepted the pilot.
- Morpho #118 remains one supply-side feed offer; its only follow-up asks for the missing workflow/freshness requirements. No subscriber, payment, or pilot evidence.
- Official Morpho market-position health API docs disclose a ~30-second market-level refresh and possible ~2-minute staleness, serving stale snapshots rather than recomputing live. This is a candidate-discovery freshness limitation, not proof of a send-time gap: the published bot architecture performs on-chain qualification and transaction simulation before submission.
- **Assessment:** neither Pass A hypothesis has a named buyer, quantified cost, or pilot commitment. Keep silent RPC integrity at weak WATCH and liquidation-data gap at WATCH. No product GO and no implementation. Public GitHub research is at diminishing returns; proceed to the one authorized Pass B workflow.


## 27 November 2026 — Pass B and final NO-GO

See [research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md](research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md).

Pass B confirmed general private-credit operations pain: fragmented systems, manual notice processing, amendments, cash/position reconciliation and investor reporting. KPMG's 2025 report describes four-plus system environments, manual reconciliation, and repayment renegotiations not propagating consistently between systems. This is not tokenized-credit-specific and does not quantify a new product buyer's cost.

Competition is substantial:
- LoanStreet + Entrilia announced on 10 Nov 2026 a direct servicing-to-fund-accounting integration with loan events, ledger posting, bank cash matching and audit trail.
- Allvue launched Intelligent Loan Operations in Aug 2026 for loan notices, accounting, cash reconciliation and GL posting.
- Broadridge Sentry covers private-debt administration, covenants, notices, reconciliation and investor reporting.
- Fundtec offers outsourced loan operations; Zolvo offers servicing-side reconciliation/reporting.
- Centrifuge documents hub-level double-entry accounting, NAV, investor requests and cross-chain fund operations; Coretos and REM explicitly market servicing/lifecycle integration and reconciliation for tokenized assets.
- Cross River and Offchain announced native loan tokenization on Arbitrum One from origination, with POC complete and production targeted early 2027.

No named buyer agreed to a pilot; no tokenized-credit-specific recurring cost or unmet workflow was established. The three D-025 candidates were scored in the final report; none meets the GO gate. **Decision D-026: NO-GO for the current search set; stop discovery and do not implement.** This is an evidence-bound decision, not a claim that no private-credit operational pain exists. Reopen only on new primary buyer evidence or a separately framed problem cycle.


## 27 November 2026 — New Cycle 01: B2B stablecoin payment operations

See [research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md).

New problem frame after D-026: payment exceptions and reconciliation across business obligation/payment intent, provider/gateway, blockchain, recipient delivery, treasury/bank and accounting records. Evidence includes Utila/Cordant's 19 Nov design-partner program for cross-system fiat/stablecoin discrepancy investigation; Fipto/Kyriba's named Ledger production case with a vendor-reported ~15 minutes saved per payment; Circle's own >$10M first-month intercompany USDC flow; and low-engagement operator/accountant discussions describing manual invoice matching and payout reconciliation. Arbitrum's H1 2026 stablecoin activity establishes ecosystem relevance but not B2B-specific TAM or product demand.

Competition is already strong: Utila/Cordant, Fipto/Kyriba, Circle, Request Finance, Stripe, Ripple Treasury, Bitwave/Cryptio and other payment/invoicing tools. No named prospect, independently quantified unmet cost or pilot willingness has been established. Generic reconciliation dashboard or invoice matcher is not differentiated. Status WATCH only.

D-027 allows one bounded validation pass across two buyer segments only: stablecoin payment processors/fintechs operating their own stack, and businesses receiving direct stablecoin payments into self-custody wallets. Need a named buyer, real/redacted exception examples, recurrence, quantified manual cost/loss/SLA impact, a gap beyond substitutes, and explicit willingness for a two-week read-only pilot. Otherwise NO-GO and stop. Agentic payment authorization/control is excluded from this cycle to avoid reviving the explicitly excluded Verigate frame.


## 27 November 2026 — D-027 buyer-access validation and D-028 NO-GO

The bounded buyer-access pass identified named operator teams and roles:
- Due's recent operations vacancies explicitly cover daily fiat/stablecoin reconciliation, breaks, investigations, stuck/returned/recalled payments and back-office automation. Public access leads include CEO Robert Sargsian and SVP Operations & Expansion Vasco Moura. The vacancy's rob@due.network address is an application contact, not a confirmed sales/discovery channel.
- Pockyt's Head of Payment Operations vacancy describes high-touch/manual money movement, partner settlement/reconciliation and building controls; the company says it has a unified ledger/API. Founder/CEO Mason Lin is a public leadership contact.
- BPN's Payment Operations Lead vacancy explicitly names abnormal credits, returns, account freezes, settlement failures, reconciliation breaks and mismatched transaction/fund status. It also describes building its own APIs and operational controls.
- Taptap Send's Treasury Operations Analyst role covers stablecoin funding, payment lifecycle tracking and troubleshooting.
- BVNK has open reconciliation and fiat product roles; classify it as a direct incumbent/competitor, not a target buyer. DIMOCO/Fipto and Paysecure/Valuno are existing integrated payment routes.

For direct-wallet invoice receivers, no named business with quantified recurring unresolved pain was found. Abundance360's Coinbase Business case reports reduced manual reconciliation via an integrated invoice/settlement workflow, supporting the strength of existing substitutes.

These are public job descriptions and company/vendor case studies, not customer interviews. No redacted production exceptions, recurrence/month, quantified cost/loss/SLA impact, unmet workflow after substitutes, or two-week pilot willingness was obtained. Therefore D-028 records **NO-GO for D-027**. Stop this cycle; do not build or continue generic public research. Reopen only on new primary buyer evidence. Full report: [research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md).

## Global non-payment niche scan — 27 November 2026 (D-029)

Opened a separate global market/problem scan after the D-027/D-028 stablecoin payment-operations NO-GO. The user explicitly authorized a new market frame; this is not a reopening of prior closed candidates. Verigate remains excluded.

Reviewed DeFi operations, incentive analytics, ERC-4337 paymaster risk, cross-chain solver liquidity, vault risk, EV/battery passports and lender analytics, EUDR/smallholder traceability, distributed energy flexibility, reusable packaging, cold-chain insurance evidence, commodity warehouse collateral and adjacent asset-finance workflows.

Most broad segments were rejected because named incumbents, national infrastructure, standards or commercial platforms already cover the proposed generic product. One narrow WATCH hypothesis remains: cross-border commodity collateral / warehouse-lien verification across national registries, combined with independently signed custody/inspection attestations. The underlying problem is documented by HFW and IFC; Singapore TFR, Brazil B3 CPR interoperability/guarantee, Kenya eWRS, Whrrl, Secro, MIT DCI b_verify and other platforms demonstrate that the space is not greenfield.

**D-029: WATCH, not GO.** No buyer interview, production exception, quantified cost, pilot commitment or TAM estimate was obtained. Physical stock, authenticity and legal priority cannot be established by a blockchain alone. Require two independent operators and a read-only pilot path before considering an MVP. If the buyer/gap/pilot gate fails, stop.

Evidence: [research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md).

## Second global niche scan — 27 November 2026 (D-030)

Continued global discovery while D-029 commodity-collateral outreach remains active. User reports only one of three D-029 LinkedIn messages could be sent; two profiles did not accept messages. This is an access/channel failure, not a negative response or market rejection.

Screened six additional problem spaces:
- Construction lending payment gap: real problem described by IPEX, but IPEX directly sells progress-vs-payment verification and Payment Gap reports to lenders.
- GPU cloud SLA evidence: real renter/provider reliability and billing disputes, but public GPU Sentinel project directly proposes signed provider/tenant evidence, SLA replay and shared ledger; it is pre-alpha and unvalidated on production, but generic cloning is not differentiated.
- Durable CDR offtake delivery: 50.5M contracted vs 1.7M delivered as of 19 Oct 2026; existing CDR.fyi, Frontier progress, Senseible milestone tracking and contract remedies already cover much of generic monitoring.
- CBAM supplier emissions data: EU Registry/O3CI already supports third-country installation data sharing; multiple SaaS providers cover supplier intake and reporting.
- Biodiversity credits: academic work identifies integrity and governance issues, but OECD and 2026 market survey indicate very small market and weak buyer demand.
- Ocean freight demurrage/detention: real charge dispute workflow, but FMC has formal billing/dispute rules and specialist products already provide tracking, audit and invoice review.

D-030 records NO-GO for generic product theses in these six categories. This does not deny underlying operational pain; it rejects the proposed generic product in light of substitutes or demand conditions. No primary buyer interviews, buyer-specific cost data, paid pilots or WTP evidence were obtained.

Full report: [research/GLOBAL_NICHE_SCAN_02_2026-11-27.md](research/GLOBAL_NICHE_SCAN_02_2026-11-27.md).


## Third global niche scan — 27 November 2026 (D-031)

See [research/GLOBAL_NICHE_SCAN_03_2026-11-27.md](research/GLOBAL_NICHE_SCAN_03_2026-11-27.md).

Screened insurance claims/subrogation evidence, manufacturing supplier quality and warranty recovery, distributed-energy flexibility settlement, eBL interoperability, and SME receivables/SCF fraud. No new GO or WATCH candidate emerged. Claims evidence is served by claims cores and specialist tools; supplier quality/warranty by ERP/QMS, supplier portals and warranty/RMA suites; energy settlement by existing market platforms and formal Elexon methodology; eBL interoperability by DCSA v2 and control-tracking systems; and duplicate-financing/receivables validation by MonetaGo and national infrastructure.

A multi-BRP energy allocation/compensation dispute gap is described in ENTSO-E material, but there is no named buyer, production dispute, quantified cost, or pilot path. It remains a question, not a candidate. D-029 commodity collateral remains the sole WATCH hypothesis. Desk research is not buyer validation; no interviews, production datasets, paid pilots, or WTP are claimed. No product selected and no code authorized.


## Fourth global niche scan — 27 November 2026 (D-032)

See [research/GLOBAL_NICHE_SCAN_04_2026-11-27.md](research/GLOBAL_NICHE_SCAN_04_2026-11-27.md).

Screened aircraft component lifecycle/LLP records, battery second-life SoH/residual value, and FuelEU Maritime pooling. No new GO or WATCH candidate emerged. ATA is developing a Component Passport; IATA's September 2026 guidance emphasizes current-status confirmation rather than unnecessary full back-to-birth archives. GE RMS, FLYdocs, transition.aero, TARA and AI audit vendors already cover records workflows. EU Battery Regulation, Commission registry/FAQ and passport/BMS providers cover the battery passport and second-life data space. FuelEU's official database and OceanScore, BetterSea, Zero44 and other specialists cover pool registration, marketplace, pricing and compliance workflows.

Residual questions are not promoted to WATCH because there are no independent buyer interviews, redacted cases, quantified buyer-specific costs, paid pilots or WTP commitments. D-029 remains the sole WATCH; no product selected and no code authorized.


## RWA infrastructure scan — 27 November 2026 (D-033)

User explicitly prioritized RWA, so this pass narrowed discovery to tokenised financial assets and post-issuance operations. The market is material: IMF's 2026 chapter estimates approximately $65B in public tokenised RWAs excluding repos, including approximately $30.4B tokenised credit and $17.5B tokenised money-market funds. Arbitrum Foundation reports more than 2,000 RWA asset deployments and meaningful RWA product growth on Arbitrum. These are market/ecosystem signals, not buyer demand.

Four generic product shapes were screened:
- Fund servicing / transfer agency / NAV / reconciliation: BNY Digital TA, Chainlink DTA and Libertum T-Suite Funds cover the obvious workflow.
- Private-credit servicing / waterfalls / arrears / loan-pool reporting: D-026 already rejected the generic thesis; Coretos, Brickken and the Black Lake/Nuva Labs $25M mortgage-loan example provide additional evidence of existing servicing and loan-level verification coverage.
- Collateral eligibility / monitoring / margining / realisation: the Bank of England's 2026 consultation documents real operational and legal dependencies for tokenised collateral, but Chainlink Fulcrum and existing collateral-management platforms cover generic cross-chain repo and collateral workflows.
- Asset backing / NAV / investor transparency: Chronicle Proof of Asset, RedStone, Dune and public RWA analytics products cover holdings verification, NAV attestation and market data.

D-033 records NO-GO for generic product shapes and no new WATCH candidate. The only residual problem area is collateral realisability under stress (legal access, transfer, conversion and liquidation within required time windows). This is regulatory/problem evidence, not a validated product gap. No named buyer, independent buyer confirmations, customer-specific quantified loss, budget or pilot willingness were obtained.

D-029 cross-border commodity collateral remains the sole existing WATCH and was not reopened. D-026 private-credit servicing remains closed. No implementation authorized. Full report: [research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md).


## D-035 — Targeted RWA collateral realisability operator evidence check (27 November 2026)

Follow-up to D-033/D-034; no broad sector or vendor scan.

- Bank of England's 29 October 2026 consultation and ESMA's 9 October 2026 Call for Evidence explicitly describe the post-default path from tokenised collateral to usable liquidity: legal rights, custody/CSD records, transfer, conversion, repo/sale markets, operational resilience and third-party dependencies.
- ESMA asks respondents to describe default handling from posted collateral to liquidity realisation (Q4), whether CCP rights can be exercised without delay (Q6), and timely porting of client collateral (Q11). Its stress-testing examples include key compromise, platform outage, failed token/underlying reconciliation and stressed conversion.
- Eurex/HQLAx/Clearstream went live in June 2025. The first live transaction by J.P. Morgan moved securities for PGGM from another custody location to Clearstream Banking Luxembourg for margin at Eurex. This is DLT-assisted mobilisation into a traditional CCP collateral location, not proof of a token that Eurex must liquidate after default; Eurex says it is not on the HQLAx ledger and has no legal relationship with HQLAx.
- DTCC/DTC reported production CCP-margin workflows in its 15 July 2026 production event and launched its Tokenization Service on 28 October 2026. Public materials list more than 30 participating firms, including CME Group, J.P. Morgan, BNP Paribas Securities Corporation and Goldman Sachs, but do not attribute each firm to the CCP-margin transaction. Current supported networks are Canton and Hyperledger Besu; DTCC may add approved networks later.
- Traditional CCP liquidity pressure is documented: non-cash collateral may need to be monetised within hours during default, but that evidence is not tokenisation-specific.
- Interview targets: Eurex Clearing, J.P. Morgan, DTCC/DTC, CME Clearing and BNP Paribas Securities, with participation caveats documented in the report.
- No buyer interviews or outreach, redacted production incidents, buyer-specific cost/loss, budget ownership, differentiated gap or pilot commitment were obtained. No Arbitrum shared-state requirement was identified.
- **Result:** problem importance confirmed; commercial/product validation not confirmed. No candidate, no new WATCH, no GO, no implementation. Keep D-029 as the only current WATCH.
- Next step: two independent primary operator interviews (CCP and clearing-member/bank), each with a redacted default drill/near-miss/exception, timestamps, legal basis, dependencies, impact, workaround, budget owner and pilot willingness.

Full report: [research/RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md](research/RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md).


## 27 November 2026 — D-037 CCP default-management operational criteria and outreach follow-up

A targeted follow-up to D-035 checked official CCP operating criteria and current default-management exercises; no broad RWA or vendor scan was repeated. Full details: [research/RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md](research/RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md).

- CME Clearing's public collateral acceptance guidance requires a perfected security interest and says collateral that cannot be liquidated to cash within one hour must have arrangements (e.g. a committed liquidity facility) supporting rapid deployment after a clearing-member default. This is an explicit CCP operational criterion, but the public page does not explain how it applies to tokenised/digital-twin collateral or disclose an incident.
- Eurex Circular 066/26 describes the EMIR Fire Drill starting 2 December 2026, including default-management and client-porting simulations. Voluntary participation is limited to clearing members and eligible disclosed direct clients. The deadline for registration as a client/Replacement Clearing Member for the client-porting simulation was 30 October 2026.
- Eurex's FAQ describes a four-business-hour porting-precondition window for net omnibus segregated clients. This is not a collateral-to-cash realisation SLA.
- No replies were found to D-036's two initial emails. Two targeted emails were then sent to Eurex Client Services and CME Collateral Risk. No replies or meetings have yet been received.
- The new evidence may indicate that current eligibility rules, legal opinions and committed liquidity facilities already manage the risk. Tokenisation-specific pain, budget, product gap and Arbitrum necessity remain unproven.
- **Result:** problem validation only; no product candidate, no GO, no new WATCH. D-029 remains the only WATCH. No implementation.


## 27 November 2026 — D-038 parallel RWA hypothesis: CVM DLT pilot evidence operations

D-038 was opened so product discovery does not stop while D-033 operator outreach is pending. This is a focused new workflow, not a repeat of generic RWA servicing or collateral scans.

CVM's Resolução 249 specifies read-only real-time regulator access, machine-readable APIs, complete timestamped audit trails, continuous availability, fortnightly progress/problem reports, immediate incident notifications, and a final report describing off-chain activities, oracles and off-chain governance. CVM announced 11 submitted proposals from ABBC, ABcripto, ABFintech, ABToken multichain, ABToken Stellar, ANBIMA, B3, BEE4 & Núclea, CSD, Liqi, and Real Price & Registro de Imóveis do Brasil. The public announcement did not establish admission or network-manager roles.

Exploratory hypothesis: a narrow evidence-operations kit for DLT network managers/infrastructure operators to correlate on-chain/off-chain test events and generate regulator-ready evidence/report inputs. Key kill criteria are mature existing API/audit/GRC/SIEM tooling, no recurring manual burden, no buyer/budget, one-off pilot demand only, or no procurement path. Arbitrum fit remains unproven.

Portuguese-language research requests were sent from connected Gmail to CSD BR (contato@csdbr.com), Liqi (contato@liqi.com.br), Núclea (backoffice@nuclea.com.br), and BEE4 (atendimento@bee4.com.br). No replies or meetings yet. This is outreach, not customer discovery.

**Result:** D-038 exploratory hypothesis only; not a candidate, WATCH or GO. Continue in parallel with D-033. D-029 remains the sole WATCH. Full report: [research/CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md](research/CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md).


## 27 November 2026 — D-039 Brazil SBCE carbon-asset and MRV infrastructure screen

Brazil's regulated carbon market is a real upcoming RWA/financial-asset market, but the obvious software shapes do not currently support an Arbitrum-native product thesis. The Ministry of Finance and Serpro are already developing the SBCE Central Registry. The rollout is staged: operator preparation in 2027, compulsory MRV plans/reports in 2028–2029, and the first CBE asset market from 2030. The first MRV cohort covers operators at or above 10,000 tCO2e/year and is expected to affect less than 1% of CNPJs.

Three shapes were screened: industrial MRV compliance software; integration adapters for authorised escrituradores/exchanges/depositories and the Central Registry; and an onchain carbon issuance/registry layer. MRV is an established SaaS category with Brazilian providers such as Integra Carbon and WayCarbon. ANP's CBIO platform provides an existing central-registry/escriturador precedent. Gold Standard/Trovio's API-first Impact Registry already targets connectivity with national registries, exchanges and marketplaces. The SBCE law's interoperability requirement does not establish a need for a permissionless chain or an external product; Serpro's integration contracts are not yet publicly specified in the reviewed evidence.

No named buyer, budget owner, redacted incident, quantified cost, paid procurement signal or pilot commitment was found. Arbitrum fit is poor/unproven; a conventional API/integration service would be more defensible if a concrete gap emerges. **D-039: NO-GO as an Arbitrum product thesis at this stage; no new WATCH.** Reopen only on buyer-backed integration failure or an MRV gap that existing vendors do not solve plus a material shared-state requirement. Full report: [Brazil SBCE carbon-asset and MRV infrastructure screen](research/BRAZIL_SBCE_CARBON_INFRASTRUCTURE_SCREEN_2026-11-27.md).


## 27 November 2026 — D-040 Precatório transfer-eligibility and token-allocation control

A fresh RWA lead emerged from CNJ Resolução 705/2026. The regulation formalises the transfer chain for precatórios and creates a Central National module linked to SisPreq. Art. 6 requires public deed, notarial notice where applicable, electronic registration, Central National communication, debtor notification and court homologation. Arts. 19–20 establish a sharp boundary for rights before a precatório is presented: these cannot be represented before the court as a transferable fraction, registered asset/guarantee, unique electronic identifier or payment position. Art. 35 provides for title-chain/status tracking and duplicate-prevention; Art. 65 delays mandatory exclusive Central National operation until a joint CNJ/BCB act after deployment and at least one registry entity is authorised; Art. 67 says the resolution enters into force 30 days after publication (as of 27 Nov it has been published but the 30-day period has not elapsed).

The system is already being developed with B3, CERC, Núclea and the notarial sector. The CNJ public dashboard reports about 1.15m precatórios awaiting payment and more than R$319B outstanding in amounts already included in budgets; this is not TAM or freely transferable supply. Existing operators include Preks and Adianta Jus/Mercado Bitcoin. Existing data/diligence substitutes include JURISCAN (official court lists and 14 checks, vendor-published) and JUDIT (court data API and precatório mining). These competitors cover much of the obvious workflow.

Exploratory product hypothesis: a narrow eligibility and reconciliation API for professional acquirers, FIDCs and tokenisation platforms to reconcile issued/presented status, legal title chain, fraction, deeds, registry events, liens, court homologation, debtor notice, net available value and the corresponding token/fund-unit allocation. It must complement CNJ/SisPreq and legal counsel, not replace them. Arbitrum fit is weak/unproven; signed APIs may suffice. Never mint a chain identifier for a pre-precatório right as if it were a court-recognised transferable fraction.

Discovery outreach sent to Preks (info@preks.com.br, message 1a21c65b7af1fd8a) and Adianta Jus (atendimento@adiantajus.com.br, message 1a21c65c1cc127d5). No replies or meetings yet. **D-040 remains exploratory only, not selected, not WATCH, no GO.** Full report: [Precatório transfer-compliance and tokenisation workflow](research/PRECATORIOS_TRANSFER_COMPLIANCE_AND_TOKENIZATION_2026-11-27.md).


## 27 November 2026 — D-041 Brazil duplicata escritural operational-gap screen

Brazil's electronic trade-receivables ecosystem is a real, near-term infrastructure transition. BCB Comunicado 45.562/2026 sets 15 July 2026 as the start date for bookkeeping-system operations; BCB Resolução 540/2025 and IN 775/2026 define the migration/routing of pre-existing financing contracts over future receivables, including a ten-business-day submission window and clarification that receipt/redirection is operational only, not registration or reservation of priority. B3's current assisted-production page says cross-bookkeeper issuance expanded from September 2026, boleto dinâmico is expected in February 2027, and mandatory adoption is phased from July 2027 for large companies, January 2028 for medium and July 2028 for small.

There is concrete pain evidence: a V360 mapping of one real corporate operation identified duplicate payments, unsupported payments, amount/title discrepancies and obligations related to cancelled invoices; physical goods-receipt confirmation took 30–90 days in some cases against a ten-day response window. V360 explicitly said the mapping was not statistical, so it cannot support market-wide frequency or loss estimates. Reporting on 8 Nov citing APIIMF counted at least 233 issuer establishments; this is a dated snapshot, not TAM. The R$13T potential-market headline is not a validated software TAM.

The obvious product gap is crowded: V360 markets the payer-side ERP-to-registrar exception/manifestation/payment-routing workflow; Monkey offers issuer/ERP/registrar/financing orchestration; Núclea offers agendas, ERP integrations and collateral workflows; B3 runs the core authorised infrastructure and integrations. Arbitrum fit is poor: regulated bookkeepers, registrars, issuer consent, ERP records and payment direction dominate. Signed APIs and audit logs suffice. **D-041: NO-GO as an Arbitrum Open House product thesis; no new WATCH.** Keep pre-existing contract migration/tombamento as a discovery question only unless a named buyer proves a recurring uncovered exception and budget. Full report: [Brazil duplicata escritural operational-gap screen](research/BRAZIL_DUPLICATA_ESCRITURAL_OPERATIONAL_GAP_SCREEN_2026-11-27.md).


## 27 November 2026 — D-042 Brazil CPR agricultural-collateral infrastructure screen

Screened CPR (Cédula de Produto Rural) as another Brazil RWA/collateral direction. B3's CPR inter-registry uniqueness system has been live since 29 April 2024 and prevents the same instrument being pledged across multiple credit/investment operations. B3 CPR Guarantee went live 21 January 2026 and already provides Master CPR/linked CPR collateral splitting, unique part identification, API integration, query and lifecycle management. Bolsa Brasileira de Mercadorias offers electronic CPR issuance, signature, verification and registry submission. OECD cites BRL 298B in CPRs delivered in the stock market by end-2023; historical market figure, not TAM. **D-042: NO-GO as an Arbitrum product thesis; no new WATCH.** Reopen only on a buyer-backed gap beyond B3, BBM and authorised registrars. Full report: [Brazil CPR agricultural-collateral infrastructure screen](research/BRAZIL_CPR_AGRICULTURAL_COLLATERAL_SCREEN_2026-11-27.md).


## 27 November 2026 — D-043 Brazil warehouse receipts and physical inventory collateral

Screened Brazilian CDA/WA, warehouse identification, physical stock verification and collateral monitoring. Brazil already has a statutory CDA/WA instrument pair, mandatory central-depositary custody via a Banco Central-authorised central depositary, B3 central-depository/product rules, and Conab/SICARM warehouse registration and in-person inspection. Important naming distinction: Conab's CDA means *Código de Cadastro do Armazém*; the financial instrument CDA means *Certificado de Depósito Agropecuário*.

Direct competitive coverage is substantial: Bureau Veritas Brazil markets independent agricultural collateral monitoring and storage/quantity/quality/delivery verification; Somar Agro offers stock monitoring, periodic guarantee verification, warehouse/silo audits and stock-movement reports; INTEGRO markets a field-to-warehouse custody evidence platform with CDA/WA and CPR collateral governance. HFW's November 2026 fraud briefing supports the general risk category—false/duplicated receipts, missing or overstated stock, weak inspection, commingling and competing claims—but does not prove a Brazil-specific uncovered buyer workflow.

**D-043: NO-GO for a standalone Brazil CDA/WA registry mirror, warehouse directory, generic inventory/collateral dashboard or Arbitrum ledger. No new WATCH.** D-029 remains the sole WATCH; D-043 adds local regulatory/competitive context but does not validate D-029's cross-border commercial opportunity. No interviews or outreach were conducted for D-043; no buyer, budget, quantified impact or pilot willingness was established. Arbitrum fit is unproven; signed attestations, APIs and conventional audit trails are more appropriate absent evidence of a shared multi-party claim-state requirement.

Full report: [Brazil warehouse receipts and physical inventory collateral screen](research/BRAZIL_WAREHOUSE_RECEIPTS_AND_INVENTORY_COLLATERAL_SCREEN_2026-11-27.md).


## D-044 — D-029 competitive recheck and closure (27 November 2026)

- Competitive review found direct overlap from Secro and Crodax in warehouse-receipt digitisation, lender checks and collateral control; FACTOS WareVault and TradeTrust cover adjacent workflows, while Singapore's Trade Finance Registry is an established bank utility.
- HFW's November 2026 briefing supports the underlying warehouse-receipt fraud problem, but not demand for another product.
- An adjacent invoice/receivables-verification pivot also overlaps MonetaGo, TFI TradeCore, TradeSun, AssureLocker and Riskernel; no differentiated buyer gap was validated.
- No independent buyer interviews, redacted incidents, quantified costs, budget owner, willingness-to-pay or pilot commitment were obtained. Senior contact leads remain unvalidated access leads.
- **Decision: D-029 WATCH superseded; CollateralLink NO-GO. No replacement candidate, no GO, no implementation.** Arbitrum shared-state necessity remains unproven.
- Full evidence: [D-044 competitive recheck](research/D029_COMPETITIVE_RECHECK_NO_GO_2026-11-27.md).


## D-045 — Comparative RWA hypothesis scorecard (27 November 2026)

- Compared D-033 collateral realisability under stress, D-038 CVM DLT pilot evidence operations and D-040 precatório transfer-eligibility/token-allocation control.
- Qualitative weighted scores: D-040 2.7/5; D-033 2.4/5; D-038 2.2/5. Scores are directional judgements based on existing evidence, not market measurements.
- D-040 ranks first because it combines a concrete new regulatory workflow, identifiable operators and an outreach path. It remains only a discovery lead: CNJ/SisPreq/Central National, B3/CERC/Núclea, JURISCAN/JUDIT and operator systems already cover substantial parts of the workflow.
- D-033 has the strongest problem-severity signal but no tokenisation-specific incident, buyer budget or differentiated product gap. D-038 has explicit regulatory duties but a short voluntary/unpaid pilot and uncertain recurring budget.
- All three have weak/unproven Arbitrum fit. No track reaches the product-selection threshold.
- **Decision:** no product selected, no WATCH, no GO, no implementation. Prioritise a bounded D-040 validation of the reconciliation exception between official legal/registry state and operator-side token/fund-unit allocation. Kill if official APIs, current providers or legal review already solve it.
- Full evidence: [D-045 comparative RWA hypothesis scorecard](research/RWA_HYPOTHESIS_COMPARATIVE_SCORECARD_2026-11-27.md).


D-040 outreach status check: Adianta Jus returned an automated receipt acknowledgement under support protocol 44 only; no substantive operator response. No reply from Preks was found in the checked period. This does not change D-040's exploratory status or establish customer validation.


## 27 November 2026 — D-040 CNJ implementation and outreach recheck

- Rechecked the official Resolução CNJ 705/2026 and CNJ's 3 November SisPreq cooperation announcement.
- Art. 35 establishes a mandatory Central Nacional module linked to SisPreq, with chain-of-title and lifecycle status, duplicate-operation alerts and operational blocks.
- Art. 65 is the key transition constraint: exclusive Central National registration/homologation starts only on a future joint CNJ/BCB activation date, after the Central National (or compatible transitional solution) is deployed and at least one registry entity is authorised. Until then, approved transitional tribunal/CNJ channels may be used.
- CNJ's official announcement identifies CNB/CF, B3, CERC and Núclea as cooperation partners for SisPreq development. Therefore the official replacement infrastructure is actively being built, but public evidence reviewed does not establish that the Central National API or exclusive operating model is live today.
- This creates a possible temporary reconciliation burden, not proven whitespace. Any product must survive the transition and provide recurring value beyond the official Central National, authorised registrars and operator systems.
- Mailbox recheck: Preks has no reply; Adianta Jus sent only an automated receipt under protocol 44. No substantive answer, referral or meeting. No follow-up sent.
- **D-040 status unchanged:** leading discovery lead only; not candidate/WATCH/GO. No product selected, no implementation.
- Sources: https://atos.cnj.jus.br/atos/detalhar/7184 ; https://www.cnj.jus.br/judiciario-e-mercado-financeiro-se-unem-para-modernizar-gestao-de-precatorios/ ; https://www.cnj.jus.br/nova-resolucao-do-cnj-cria-central-de-controle-e-protege-credores-de-precatorios/


## 27 November 2026 — D-040 competitor boundary recheck

- Reviewed Preks' public FIDC SaaS page in detail: digital assignment, seller tax/legal diligence, 20+ certificates, e-signature, Ethereum assignment record, conditional escrow, origination/diligence, and disclosed ORIZ JUS I/IV relationships. This directly overlaps the original D-040 transfer-workflow proposition. Source: https://preks.com.br/para-gestoras/
- Rechecked Portaria Conjunta CNJ/BCB 6/2026: its executive-group mandate includes architecture, event/status IDs, audit trails, logs, reconciliation, discharge, duplicate prevention, national data dictionary and interoperability. Source: https://atos.cnj.jus.br/atos/detalhar/6958
- **Conclusion:** do not build a generic precatório transfer-eligibility, diligence, registry, duplicate-check or blockchain assignment product. Preks and the official CNJ/SisPreq programme cover the core proposition.
- Identified one adjacent question, not a product thesis: portfolio-level allocation/reconciliation of partial receipts from multiple precatórios to FIDC quotas or contractual token/sub-cession holders. A 2022 Foxbit product sheet documents a seven-claim basket with fractional exposure and partial BRL distributions as individual claims pay; historical evidence only, not proof of current demand. Source: https://statics.foxbit.com.br/tokens/FTPCL-0053.pdf
- Next validation, if pursued: ask fund manager/administrator/servicer how partial receipts, corrections, reversals and discharge are allocated; measure exception frequency, manual hours and financial/control impact; identify system of record, budget owner and paid-pilot path. Kill if current fund accounting/custody systems already automate it.
- D-040 remains exploratory; no new candidate/WATCH/GO. No implementation. Arbitrum fit unproven and should not be forced.



## 27 November 2026 — D-040 partial-receipt operations buyer-access pass

- Identified Oliveira Trust through NACIONAL 2 FIDC (precatórios; Oliveira Trust DTVM administrator/custodian; Oliveira Trust Servicer manager; fund began 25 July 2025; public 2026 quota reports).
- Identified Hemera DTVM and Monetiza Investimentos through Homma Prec FIDC (Hemera administrator/custodian; Monetiza manager). Hemera publicly offers administration, custody, asset bookkeeping, escrow, formalisation, collections and integrations, including a proprietary collections system.
- Verified official contact channels and drafted three Brazilian Portuguese discovery emails. No outreach sent.
- Limine/Sonar retained as lower-priority comparison; Oriz/Preks is a competitor-boundary reference, not whitespace.
- Question remains narrow: partial cash receipt allocation/reconciliation across multiple precatórios, corrections/reversals/discharge, fund accounting and quota-holder reporting.
- Evidence boundary: public roles and contact channels do not prove workflow, pain, manual burden, willingness to pay or product gap. No interview, redacted workflow, quantified impact, budget owner or pilot commitment obtained.
- Status: D-040 exploratory only; no candidate/WATCH/GO and no implementation. Arbitrum fit unproven; conventional accounting/API integration is the default.
- Full report: [D-040 partial-receipt operations buyer discovery](research/D040_PARTIAL_RECEIPT_OPERATIONS_BUYER_DISCOVERY_2026-11-27.md).


## D-040 continuation — partial-receipt regulatory and independent-operator recheck (28 November 2026)

- ANBIMA's FIDC rules effective 23 March 2026 explicitly assign the manager responsibility to monitor reconciliation flows for receivables receipts (Annex Complementar V, Art. 3, VIII), along with tracking settlement, portfolio assets, liquidation events and payments/prepayments/defaults. Generic FIDC reconciliation is therefore not an unowned workflow; any product thesis must identify recurring exceptions beyond current controls.
- Identified Strivo as an independent interview lead through WSUL Precatórios Federais FIDC (manager Strivo; administrator ID Corretora). Strivo's March 2026 internal manual discloses spreadsheets and management systems for asset controls, amortisation/interest instalment records and periodic monitoring, but does not disclose the detailed cash-receipt-to-claim-to-class/subclass allocation workflow.
- Public fund records confirm cash-receipt-linked or conditional amortisation patterns. They do not prove an operational gap.
- Outreach: Hemera DTVM and Monetiza Investimentos emails sent 28 November; both threads checked and contain no reply yet. Oliveira Trust not sent because only the official contact form/switchboard was verified, not an appropriate operations email. Strivo identified but not contacted.
- D-040 remains exploratory only; no candidate/WATCH/GO, no implementation and no Arbitrum requirement. Conventional accounting/API integration remains the default.
- Full evidence: [research/D040_PARTIAL_RECEIPT_REGULATORY_OPERATOR_RECHECK_2026-11-28.md](research/D040_PARTIAL_RECEIPT_REGULATORY_OPERATOR_RECHECK_2026-11-28.md).
