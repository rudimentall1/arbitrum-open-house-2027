# Silent RPC log-result corruption: Nitro, Lasso, and DefiLlama follow-up — 27 November 2026

## Executive conclusion

A recurring technical failure class is now visible across three separate software layers:

1. **RPC node (Nitro):** explicit-height `eth_getLogs` requests above the current head returned logs from the current head instead of an error.
2. **RPC routing layer (Lasso RPC):** a lagging upstream can return a valid-looking empty `eth_getLogs` result (or null block result) for a height it has not reached; the router may accept it without failover.
3. **Indexer SDK/cache (DefiLlama):** a pruned RPC returned `[]` without an error for historical logs; the SDK treated it as complete and persisted the requested range as authoritative, creating durable missing event data.

This is stronger evidence for a *data-ingestion correctness* problem than for generic RPC uptime/latency monitoring. It is **not** a GO candidate: only the DefiLlama report quantifies downstream commercial data loss; the Arbitrum Nitro report and Lasso report do not establish a separate paying buyer. Existing upstream/indexer integrity substitutes also narrow the space. Keep WATCH.

## 1. Nitro #4788 — out-of-range log requests return head logs

Primary source: https://github.com/OffchainLabs/nitro/issues/4788

- Reported on 10 Nov 2026; issue closed 24 Nov with GitHub `state_reason=completed`.
- Reproduced by the reporter against both `arb1.arbitrum.io/rpc` (Arbitrum One) and `rpc.mainnet.chain.robinhood.com` (Robinhood Chain), both reporting Nitro `v3.12.3-rc.4`.
- Numeric `eth_getLogs` requests for a block above the current head returned logs belonging to the current head, rather than an error.
- In an 18-minute sample polling each new block as soon as another provider had it, the reporter recorded 321 wrong-block responses and 33 empty responses on Arbitrum One, and 289 wrong-block responses and 39 empty responses on Robinhood Chain.
- The issue has two user comments, both describing downstream indexer data-loss risks and defensive client handling. No maintainer explanation, linked fix PR, or public release confirmation was found in the reviewed issue/timeline/search results. Therefore closure is not treated as proof that the behavior was fixed.
- Both affected endpoints ran the same Nitro release family; this is one implementation/report cluster, not two independent buyer confirmations.

A client-side guard can reject any returned log whose block number/hash does not match the requested block and keep its cursor unchanged. EIP-234 blockHash-based queries can reduce ambiguity for a known block, but neither guard nor blockHash query proves that a valid-looking empty result is complete.

## 2. Lasso RPC #460 — lagging upstream can return a false empty result

Primary source: https://github.com/jaxernst/lasso-rpc/issues/460

- Opened 27 Nov 2026; author reproduced the issue on the project's main branch using its mock harness.
- In a simulated fleet with a fast head and a lagging upstream five blocks behind, explicit-height `eth_getBlockByNumber` calls could return null and `eth_getLogs` calls could return `[]`.
- The error case caused failover; the valid-looking empty array did not, and was accepted as a successful response.
- Reported wrong answers in the harness: 8 under one strategy and 1 under another in the measured empty-log scenario.
- This is a useful independent codebase reproduction of the *router acceptance* failure mode, but it is not a production incident or a customer loss measurement. It must not be counted as a second paying operator.

## 3. DefiLlama SDK #302 and dimension-adapters #11308 — silent historical omissions persisted in cache

Primary sources:
- https://github.com/DefiLlama/defillama-sdk/issues/302
- https://github.com/DefiLlama/dimension-adapters/issues/11308

The SDK issue reports that `berachain-rpc.publicnode.com` returned an empty array for historical Morpho Blue `CreateMarket` logs while still serving the relevant block and a non-zero logs bloom. A second RPC returned nine events for the same query. The SDK accepted the first valid JSON-RPC array, did not fail over, and cached the requested range as complete.

The author audited 916 reachable `event-logs/*` entries, checked 545 against full-range RPC results or contract counters, and found six short entries (539 complete). The six covered BSC, Berachain, Scroll, Base, and Abstract:
- Maverick V1 / BSC: 8 cached `PoolCreated` logs versus 90 expected.
- Bend / Berachain: 2 Morpho Blue `CreateMarket` logs versus 13.
- Joe V2.1 / BSC: 87 versus 147.
- Morpho / Scroll: 2 versus 19.
- Aerodrome Slipstream / Base: 2,311 versus 2,318.
- Aborean / Abstract: 243 versus 246.

Two cases were reported to have material downstream effects:
- Maverick V1 BSC stored $0 daily volume from 14 Nov, after prior daily figures of roughly $40.6k–$148.8k. The missing factory events excluded a major pool.
- Bend Berachain fees reportedly fell from $372–$469/day to $8–$12/day after 13 Nov, with 11 of 13 markets absent from the cached market list.

The issue links the exposure to a cache behavior change in DefiLlama SDK #296 merged 13 Nov, which made stored entries authoritative before the indexer fills uncovered blocks. The report is one author's audit and two related issues in the same DefiLlama incident cluster, not two independent buyers. The six entries are not six customers. The Base entry is directly relevant to the Arbitrum ecosystem's adjacent L2 market but is not an Arbitrum-chain incident; the Arc example mentioned in #11308 was explicitly unverified.

As of this review, #302 is open with no comments and no matching PR was returned by the focused PR search. The reporter offered to contribute a fix; no maintainer acceptance or remediation is yet established.

## 4. Product boundary and alternatives

The evidence supports a narrow technical hypothesis:

**Before an indexer advances a checkpoint or persists a cache range, verify that the RPC response is consistent with the requested height/hash and that an empty result is credible for that range.**

Potential controls include:
- reject any log outside the requested block range or with a mismatching block hash;
- bind log retrieval to a known block hash where supported;
- keep the checkpoint/cache range uncommitted when upstreams disagree;
- use a second independent source or receipt/block data to validate suspicious empty results;
- record provenance and the exact source/version that supplied each range.

Limits:
- A block-number guard catches wrong-height logs, but not a valid-looking empty array.
- BlockHash queries protect block identity, but do not independently prove a complete event response if a provider silently omits logs.
- Cross-provider agreement is not cryptographic proof if providers share infrastructure/data sources.
- A broad RPC proxy, health dashboard, provider ranker, or generic indexer completeness dashboard remains rejected/crowded.

Existing alternatives already documented in this repository include SQD Portal multi-source/root validation, Envio HyperSync block/receipt-root verification and fallback, indexer-native audit/backfill tooling (Ekubo), DALP checkpoint/backfill/reindex operations, and provider-native RPC diagnostics. A differentiated product would need to sit in a real ingestion workflow and show a measurable failure/cost not covered by those alternatives.

## 5. Assessment

| Dimension | Current evidence |
|---|---|
| Pain | Strong technical severity; one DefiLlama report quantifies lost downstream metrics/fees. |
| Recurrence | Same broad failure class across Nitro, Lasso, and DefiLlama codebases; causes differ (wrong-height logs, lagging upstream, pruned-history empty response). |
| Independent buyers | Not established. The three reports are independent codebases/authors, but only one quantifies production business impact. |
| Buyer / budget | Unknown. |
| Existing workaround | Validate block number/hash, use blockHash queries, cross-check another RPC, repair cache/rebuild missing ranges. |
| Competition / substitutes | Strong upstream, indexer-native and multi-source validation alternatives. |
| Arbitrum fit | Nitro #4788 directly includes Arbitrum One; DefiLlama report includes a Base cache gap, not an Arbitrum chain incident. |
| Status | WATCH — not a product candidate, no GO, no implementation. |

## 6. Next evidence required

1. Find an independent Arbitrum/Orbit indexer or protocol operator with a production example of a valid-looking empty/wrong `eth_getLogs` response and a missed event, repair effort, revenue/SLA impact, or RPC spend.
2. Verify whether Nitro #4788 was fixed in a public release or closed without a source fix; do not infer resolution from the GitHub closed state alone.
3. Check whether DefiLlama #302 receives maintainer response/fix and whether the six cache ranges are rebuilt; do not assume the reported loss has been repaired.
4. Ask whether operators already validate event completeness through SQD/Envio/native indexer tools and what gap remains.
5. Do not create a generic RPC correctness proxy or indexer dashboard without a named operator and a bounded, budget-backed workflow.

## Related liquidation-operator validation attempt

The existing Morpho liquidation-bot operator question [#121](https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/121), opened 29 Aug 2026 to ask which send-time input is actually missing and to offer a bounded 90-day provider-neutral endpoint experiment, remains open with zero comments. It has produced no public operator response, design-partner signal, or evidence of willingness to pay. This is a validation attempt, not demand evidence.

## Evidence limits

- Public issue reports are not customer interviews.
- The DefiLlama audit and revenue figures are reporter-provided and have not been independently audited here.
- Lasso's results are mock-harness measurements, not production measurements.
- Nitro #4788's closed state has no public maintainer resolution note in the reviewed discussion.
- No buyer commitment, paid pilot, or willingness-to-pay is established.

## 7. Competitive reality check — Envio HyperSync, eRPC, and SQD/Ponder (27 November 2026)

This follow-up materially narrows the product space. The silent-log hypothesis is technically real, but the strongest parts of the stack already have substantial integrity controls.

### Envio HyperSync

- Envio's 7 Sep 2026 engineering article documents multiple real incidents of well-formed but incomplete/inconsistent node responses, including a Robinhood Chain sequencer halt followed by bad Alchemy RPC fallback data, plus historical receipts-store corruption and provider/node-version inconsistencies.
- HyperSync ingests whole blocks, recomputes transactionsRoot and receiptsRoot, validates structural relationships, tracks source provenance, refetches mismatched data from another source, and marks ranges unverified/schedules backfill if patching fails.
- Envio's current docs describe HyperSync as cryptographically verified and list Arbitrum One, Nova, and Sepolia endpoints. Arbitrum's own Envio integration docs say HyperIndex uses HyperSync by default on supported chains.
- Important limitation: HyperSync's guarantee applies to its whole-block ingestion path; Envio's own article says arbitrary filtered eth_getLogs responses cannot be intrinsically proven complete from the response itself.
- Product consequence: an indexer already using HyperSync has a strong native substitute. A product would need to address RPC-only consumers, custom sources, or fallback paths that are not covered by their existing data plane.

Sources:
- https://docs.envio.dev/blog/nodes-silently-miss-events
- https://docs.envio.dev/docs/HyperSync/overview
- https://docs.arbitrum.io/third-party-docs/Envio/envio

### eRPC

- GitHub releases show eRPC 0.5.0 published 27 Oct 2026, after the 0.2.0 data-integrity feature described in Envio's technical comparison.
- eRPC is an existing open-source EVM RPC proxy with upstream health/selection, retries, consensus, and data-integrity controls. Its public project description explicitly covers consensus and data integrity.
- The Envio comparison describes eRPC's limitations honestly: block/receipt response commitments can be recomputed, while a filtered eth_getLogs subset has no self-contained completeness proof. Its current checks can validate returned logs' filter/range and compare against receipts already in memory, but cold backfills or consistent omissions from a shared bad source remain outside that check.
- Product consequence: generic multi-provider proxy, stale-upstream guard, consensus, and block/receipt integrity are crowded. A narrow independent event-completeness service would still need to prove a practical advantage over eRPC plus a complete-block data source.

Sources:
- https://github.com/erpc/erpc/releases/tag/0.5.0
- https://github.com/erpc/erpc
- https://dev.to/envio/nodes-silently-miss-events-1jk0

### SQD Portal / Ponder evidence — Arbitrum access-list omission

Primary issue: https://github.com/subsquid-labs/portal-ponder/issues/32

- A cross-validation investigation found typed Arbitrum transactions where Portal backfill omitted access_list; the Ponder transform converted absent data into a fabricated empty array. A later Portal-vs-chain-truth comparison expanded the finding from an initial one-row discrepancy to 34 type-0x2 transactions in one finalized window, where direct RPC and a public Arbitrum node returned 10–38 entries but Portal omitted the field.
- Root cause was split: SQD Portal's Arbitrum/Avalanche datasets did not serve the access-list column; Ponder's transform incorrectly converted missing/undefined to an empty array.
- Ponder PRs #110/#111 fixed the transform to preserve unknown as SQL NULL, not a fabricated empty list. Their before/after test showed Arbitrum 8/8 pass after the fix (pre-fix 2 pass / 6 fail), Base 16/16 pass after fix, Avalanche 8/8 pass after fix. The upstream dataset column gap remained.
- Related issue #83 documents missing logs_bloom in Portal datasets for Base, Arbitrum One, and Avalanche, causing receipt-enabled backfills to fail fast by design. It was closed as completed on 7 Jul 2026, but the reviewed issue has no maintainer comments or explicit public remediation detail; do not claim the upstream field was restored based only on closure.
- This is strong evidence that dataset schema gaps and false defaults can corrupt downstream data. It is not buyer evidence: the reporter is a developer maintaining a Ponder fork and the fixes are within the open-source integration. It also demonstrates a substitute workflow: cross-validation, fail-loud schema guards, explicit NULL-vs-empty semantics, and upstream issue tracking.

Sources:
- https://github.com/subsquid-labs/portal-ponder/issues/32
- https://github.com/subsquid-labs/portal-ponder/pull/110
- https://github.com/subsquid-labs/portal-ponder/pull/111
- https://github.com/subsquid-labs/portal-ponder/issues/83

### Updated assessment

The technical class is real and has multiple independent public examples, including Arbitrum. However:
- Envio already provides whole-block cryptographic verification and alternate-source repair for its ingestion path.
- eRPC already provides a mature open-source proxy with health, consensus, and integrity features; its known filtered-log limitation is structural.
- SQD/Ponder has an active cross-validation/fail-loud workflow and fixes integration defects in public.
- The strongest Arbitrum SQD example is an upstream schema gap plus a Ponder transform bug, not a demonstrated recurring buyer need for a third-party product.
- No independent operator has confirmed willingness to pay, requested a pilot, or quantified recurring losses from this exact gap.

**Decision:** keep silent event-ingestion correctness at WATCH for now, but mark it as a weak finalist candidate, not a leading product direction. Do not build a proxy, dashboard, or general validator. If no independent RPC-only operator with quantified pain is found in the finite final research cycle, close this hypothesis as NO-GO for product selection.

## 8. Finite search protocol

This repository is no longer in open-ended discovery. The remaining work is capped at three evidence passes, with no expansion of the finalist count beyond three.

1. **Pass A — operator validation:** seek direct, independent evidence from one Arbitrum/Orbit indexer operator for the silent RPC / ingestion-integrity hypothesis, and from one Morpho/Aave liquidation operator for a send-time execution-data gap. A public GitHub issue is not a substitute for operator confirmation.
2. **Pass B — one adjacent buyer workflow:** select only one adjacent segment from existing research (not a fresh brainstorm), identify the economic buyer, recurring workflow, current substitute, quantified cost, and a real route to a bounded pilot.
3. **Pass C — decision:** score no more than three finalists using the existing six dimensions. Promote to GO only if at least one has (a) named buyer/user role, (b) independently corroborated recurring pain, (c) measurable economic/operational cost, (d) an unmet workflow despite existing substitutes, and (e) a credible pilot commitment or explicit willingness to test. Otherwise record NO-GO for the current search set and stop researching these segments; change the market/problem frame rather than extending discovery indefinitely.

A candidate may be replaced by stronger evidence, but the list may never grow beyond three. Technical novelty, issue count, AI usage, and implementation feasibility do not independently satisfy the GO gate.
