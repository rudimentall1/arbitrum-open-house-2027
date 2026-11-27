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
