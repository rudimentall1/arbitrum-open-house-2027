# Indexer RPC and fast-L2 follow-up

Research date: 26 November 2026.

## Executive conclusion

**The recurring indexer RPC-cost problem is now supported by several independent projects and operator reports, including direct Arbitrum/Robinhood measurements. It remains WATCH, not GO.**

This follow-up checked Ponder's current source and PRs, Nuthatch's measured fixes/releases, rindexer's prior optimization, Envio's outstanding PRs, and a fast-L2 event-completeness report.

The evidence now supports two distinct problem statements:

1. **RPC request amplification and provider spend in self-hosted EVM indexers.** This is recurring across Envio, Ponder, Nuthatch, and rindexer, with quantified request counts and CU spend. The causes differ by framework: polling cadence, per-block header reads, zero-bloom handling, factory filters, concurrency, and 429 retry classification.
2. **Data completeness near the tip on very fast L2s.** One independent Robinhood Chain listener reports that two lagging RPC nodes both returned empty logs for a recent block, causing 61 fills to be skipped until a hard minimum confirmation depth was added. This is a credible correctness lead, but the evidence is not yet broad enough to establish a cross-customer product opportunity.

Neither problem is unique enough to Arbitrum by itself, and indexer vendors are actively fixing the causes in their own software. No new GO candidate is justified.

## 1. Ponder: zero-bloom blocks create unnecessary log requests on Robinhood Chain

Primary issue: [ponder-sh/ponder #2525](https://github.com/ponder-sh/ponder/issues/2525), opened 24 November 2026 by `frontier159`.

### Reported evidence

- Ponder 0.18.2, with the reporter saying the behavior is unchanged in 0.18.9.
- Robinhood Chain (Arbitrum Orbit, chain ID 4663) has a zero `logsBloom` in 8.7% of a 2,000-block sample.
- The reporter checked 10 of those blocks with `eth_getLogs`; all returned no logs.
- Ponder's own metrics reportedly showed about 66,000 `eth_getLogs` calls per day on Robinhood Chain, approximately one per block.
- The reporter estimates that almost all of these requests were avoidable zero-bloom reads; their 24-hour measurement suggests about 14% of blocks.

This is a measured report by one account. It is not an independently replicated 66,000-call benchmark.

### Current source verification

The current Ponder default branch still treats a zero bloom as missing in `packages/core/src/sync-realtime/index.ts` and issues an `eth_getLogs` request in that case. The code has not yet incorporated the proposed shortcut.

[PR #2526](https://github.com/ponder-sh/ponder/pull/2526) is open and unmerged at review. It proposes a conservative optimization:

- Recompute the block hash from RLP-encoded header fields.
- Only trust a zero bloom if its block hash verifies and the chain has already returned a verified non-zero bloom.
- Keep today's behavior for unknown header layouts, malformed data, unverified blooms, and chains that never populate blooms.
- Add tests for forged zero blooms and unknown/unverified headers.

The PR author reports 49 passing sync-realtime tests and checks on recent Ethereum, Berachain, Plasma, and Robinhood headers. Those are author-reported results; this research did not execute the test suite.

### Related Ponder optimization work

A different author, `emtesenair`, opened [PR #2491](https://github.com/ponder-sh/ponder/pull/2491) on 11 November. It reduces factory-filter log requests by checking known child addresses in the bloom:

| Chain | Before: blocks requesting logs | After |
|---|---:|---:|
| Base | 99.3% | 80.5% |
| Base Sepolia | 64.8% | 0.3% |

The author reports local tests passing, but says they have not run the change in production. The PR remains open.

[PR #2305](https://github.com/ponder-sh/ponder/pull/2305), opened in June and last updated in August, proposes an opt-in range-scan realtime path for high-throughput L2s. It replaces per-block fetches with one ranged `eth_getLogs` request per poll and fetches full blocks only for event-bearing blocks. It is restricted to non-factory log sources and remains experimental/open.

**Interpretation:** Ponder itself is already working on the framework-level remedies. The zero-bloom case is not a generic RPC-provider problem; the indexer has the required header data and can safely avoid the request. A generic proxy cannot assume the chain's bloom semantics without implementing the same validation logic.

## 2. Nuthatch: quantified cost, followed by shipped fixes

The Nuthatch reports are detailed and useful, but most were written by the same maintainer/operator, `cargopete`. Count them as one operator's experience across several workloads, not as multiple independent customers.

### Arbitrum tip-following cost

[Nuthatch #1173](https://github.com/nuthatch-org/nuthatch/issues/1173) measured one Arbitrum cursor against a paid Alchemy endpoint:

- 268 `eth_getBlockByNumber`, 61 `eth_getLogs`, and 84 `eth_blockNumber` calls per minute.
- Approximately 9,900 CU/minute, 430M CU/month, or roughly $185/month at the rates used in the report.

[Nuthatch #1190](https://github.com/nuthatch-org/nuthatch/issues/1190) found that a configured five-minute polling interval was ignored when a fast chain outran a slow endpoint. One free Arbitrum endpoint produced 4,377 CU/minute, with 29 tip polls per minute despite the configured 300-second interval.

The fixes were shipped:
- [PR #1176](https://github.com/nuthatch-org/nuthatch/pull/1176) merged 6 September, adding `--poll-interval` and `--finality-only`.
- [PR #1191](https://github.com/nuthatch-org/nuthatch/pull/1191) merged 6 September, fixing the interval behavior on a moving tip.
- The author then measured the affected free-endpoint nest dropping from 4,377 to 29 CU/minute (about 151x lower); the paid allocation nest measured 121 CU/minute after the change.

The current Nuthatch operator docs say the default polling interval has been five minutes since v4.15.2. This is evidence that the problem can be materially reduced inside the indexer itself, not an open external service gap.

### Backfill header volume

[Nuthatch #765](https://github.com/nuthatch-org/nuthatch/issues/765) measured a 171,509-block Arbitrum catch-up: 61,709 `eth_getBlockByNumber` calls versus 110 `eth_getLogs` calls and 24 `eth_call` calls. The maintainer estimated headers at 99.5% of CU for that workload.

[PR #804](https://github.com/nuthatch-org/nuthatch/pull/804) merged 24 August. It reduced header requests by stamping only kept rows, batching, and using timestamps supplied in logs where available. Later Nuthatch issue #3065 also led to an explicit null-timestamp mode for operators who do not need timestamp columns.

### Evidence that should not be over-counted

- #765, #1173, #1190, #3065, #3121, and #3122 are all from the same Nuthatch maintainer/operator.
- #3122's 10-block range-limit reproduction used a local proxy simulating a provider error. The author explicitly says the actual paid key used in the test did not demonstrate Alchemy's free-plan limit. Treat it as a UX/performance test, not proof of a paying customer being blocked.
- #3121 measured slow bundled Base endpoints during a clean-room run, again by the same maintainer.

## 3. Independent corroboration from rindexer and Envio

### rindexer

[rindexer #199](https://github.com/joshstevens19/rindexer/issues/199), opened by `jaggad` in May 2025, reports repeated `eth_getBlockByNumber("latest")` calls every 50 ms. After adding three networks to a multi-network workload, the operator encountered compute-unit overuse and hard rate limiting. They also found redundant latest-block calls across roughly 11 networks and 20 event types per network.

[PR #203](https://github.com/joshstevens19/rindexer/pull/203) merged 5 June 2025 and added caching/poll-frequency improvements. This is independent historical corroboration, but the specific issue is already fixed and predates the current research window.

### Envio

The earlier Envio reports remain relevant:
- #1783: 8,281 timed-out pages across 102,000 pages on seven chains; another operator commented with a multi-chain shared-provider budget problem.
- #1758/#1884/#1885: one operator's measured request growth and rollback from an upgrade.
- #1669: a different reporter's 429 retry spiral, fixed in merged PR #1861 on 20 November.

At this review:
- [PR #1851](https://github.com/enviodev/hyperindex/pull/1851) per-RPC concurrency limits remains open.
- [PR #1812](https://github.com/enviodev/hyperindex/pull/1812) serving timestamp/hash from logs rather than fetching blocks remains open.
- [PR #1840](https://github.com/enviodev/hyperindex/pull/1840) reducing head-recheck/log-page requests remains open.
- [PR #1861](https://github.com/enviodev/hyperindex/pull/1861) preserving range on 429 is merged.

The same broad category is visible across independent codebases and users, but causes and remedies are framework-specific.

## 4. Fast-L2 event completeness: a separate correctness lead

### Ponder Robinhood finality report

[Ponder #2359](https://github.com/ponder-sh/ponder/issues/2359), opened in August by `exilimz`, reported that Robinhood Chain's ~100 ms blocks made a 30-block reorg window only about three seconds. The reporter wanted a roughly 60-second window and a public configuration override.

Do not treat this as an unresolved current Ponder defect without qualification. The current Ponder source uses a timestamp-based `reorgWindow` measured in seconds (default 180, maximum 600), rather than the old 30-block default. The old issue's block-count calculation is therefore stale against current main.

### Independent listener data-loss report

A commenter `HCTDIP` on #2359 linked a separate [listener v0.3.0-freeze commit](https://github.com/HCTDIP/openship-fork/commit/4f6bd10691ad35e8f9c2f35f695b65ed3d9a270b). Its changelog describes a test where two RPC nodes both returned empty logs for a recent block while both were behind the tip; the listener marked the block `CONFIRMED_EMPTY` and advanced its cursor. The maintainer says the related 24-hour incident skipped 61 fills.

The custom listener added a hard `MIN_SAFE_DEPTH=5` floor: two empty node responses are not accepted as proof of an empty block until the block is sufficiently behind the head. Its T4c test changed from FAIL to PASS.

This is a credible independent correctness signal, but it is one linked operator report, one chain, and a custom listener implementation. It does not prove a broad market. The exact 61-fill incident is described in the commit changelog; it was not independently reproduced in this research.

**Status: WATCH as a fast-L2 indexing correctness lead.** Next verify whether other Robinhood/Orbit operators have lost events due to lagging RPC replicas, and whether the indexer/provider tools they use already prevent checkpoint advancement on unverified empty results.

## 5. Buyer and competitive context

[Blocksquare issue #45](https://github.com/blocksquare/blocksquare-indexer/issues/45) is a useful buyer-role lead: the team is planning to self-host its Envio indexer on AWS to replace a hosted Production Small package, with a cost comparison and explicit ownership questions for uptime, alerts, re-sync, and RPC limits. A Nuthatch maintainer offered a scaffold, but Blocksquare had not confirmed a switch or a paid commitment in the reviewed thread.

This indicates that some teams actively compare hosted indexing costs with self-hosting. It does not validate demand for a new RPC-cost product.

Competition/substitutes remain substantial:
- Envio/HyperSync can remove ordinary JSON-RPC reads on supported chains.
- Ponder is adding framework-native optimizations for bloom filtering, factories, and range scans.
- Nuthatch provides method-level RPC counters, configurable polling/finality behavior, and a self-hosted indexer.
- rindexer has shipped request caching and poll-frequency improvements.
- eRPC provides retries, caching, failover, request splitting, per-method/upstream observability, and provider CU budget guards. See [eRPC](https://erpc.cloud/).
- Provider-native usage and CU reporting expose the bill, even if they do not explain all indexer-level waste. See [Alchemy CU costs](https://www.alchemy.com/docs/reference/compute-unit-costs).

The remaining gap, if any, must be a framework-agnostic way to detect semantic waste or data-integrity risk that is not already addressed by indexer-native fixes. No such gap or buyer has been validated.

## 6. Updated assessment

| Criterion | RPC cost amplification | Fast-L2 event completeness |
|---|---|---|
| Pain | Strong; measured requests/CU and rate limits | Potentially severe; one 61-fill loss report |
| Independent evidence | Multiple indexer projects and reporters | One independent linked listener report plus Ponder finality report |
| Current status | Many direct upstream fixes shipped/in progress | Some old Ponder issue stale against current code; listener has custom guard |
| Buyer | Indexer infra/data engineering owner | Protocol/exchange data or backend operator |
| Existing alternatives | Envio/HyperSync, Ponder, Nuthatch, rindexer, eRPC, provider tools | Time-based reorg windows, checkpoint-safe retries, multi-provider verification |
| Arbitrum-specific value | Direct Robinhood/Arbitrum data, but broad multi-EVM problem | Fast Orbit block cadence is relevant, but not unique enough yet |
| Product verdict | WATCH | WATCH, lower confidence |

**No GO. No product selection. No implementation.**

## 7. Next research actions

1. Find two more independent Arbitrum/Orbit teams with measured RPC costs or data-loss incidents; exclude the existing Envio, Ponder, Nuthatch, rindexer, and HCTDIP reports.
2. For Ponder #2525/#2526, track merge/release and quantify the actual call reduction on Robinhood after release.
3. Recheck Envio #1851/#1812/#1840 and Ponder #2491/#2305 after their next releases.
4. Interview a named indexer infrastructure owner about current provider spend, existing indexer/proxy configuration, and willingness to pay for an independent optimization layer.
5. For fast-L2 correctness, look for independent evidence of lagging replicas returning empty or stale logs and indexers advancing checkpoints incorrectly.
6. Do not build a generic RPC proxy, provider dashboard, or indexer replacement from the current evidence.
