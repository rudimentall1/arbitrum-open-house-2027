# Indexer RPC cost and correctness research

Research date: 26 November 2026.

## Executive result

**This is the strongest recurring operator-pain cluster found in the latest search pass, but it is not a GO product candidate.**

Several independent teams running production or near-production indexers report measurable RPC request amplification, provider quota pressure, and rate-limit retry loops. The evidence includes Arbitrum and Robinhood Chain usage, multi-chain deployments, and concrete request/compute-unit counts.

However:

- Much of the pain is tied to Envio's own RPC-source behavior and is already being addressed through upstream changes.
- Generic RPC proxy products already offer request splitting, caching, failover, cross-provider validation, rate limiting, and compute-unit budget controls.
- Existing indexing alternatives include Envio/HyperSync, Goldsky, The Graph, Subsquid, and Ponder.
- No operator has committed to pay for a separate product or validated an unmet workflow after those alternatives.

**Status: WATCH as a recurring operational problem, not a selected product.**

## 1. Evidence of recurring indexer RPC cost and reliability pain

### A. Arbitrum and Robinhood head-fetch volume — Envio #1499

[Envio #1499](https://github.com/enviodev/hyperindex/issues/1499), opened by `imarshallwidjaja`, asks to restore operator-configurable fetch concurrency. The reporter says rate limiting concurrency helps avoid bursts when running multiple indexers.

A later comment reports live HyperSync realtime metrics:

| Chain | `eth_getLogs` per minute | Blocks/s | Events per query |
|---|---:|---:|---:|
| Arbitrum | ~260–360 | ~3.7 | 0 |
| Robinhood Chain | ~620–650 | ~9.6 | ~0.03–0.08 |

The author infers roughly 100 fetch cycles per minute, multiplied by 3 partitions on Arbitrum and 6 on Robinhood. Most queries return no events. They argue that one partition at the head would cut much of the request volume.

This is directly relevant to Arbitrum and an Orbit chain, and it has measured operator data. It is still one operator's deployment, not a cross-customer benchmark.

### B. Concurrency and timeout amplification — Envio #1783

[Envio #1783](https://github.com/enviodev/hyperindex/issues/1783), opened by a different reporter (`prevostc`), says HyperIndex 3.14.1 can send up to 100 requests per chain without exposing that concurrency limit in the `rpc` configuration.

The operator measured one process across seven chains and 102,000 pages:

- 8,281 pages failed with `eth_getLogs took longer than 20 seconds`.
- Failure rates were 27% on Gnosis, 33% on Plasma, and 18% on Lisk.
- A timeout shrinks the block range and retries the page. When the endpoint is congested rather than the range being too large, smaller pages create more requests and can worsen the queue.

The issue asks for per-RPC concurrency and optional request-per-second limits. It remains open.

A comment from another operator (`fredericobianco`) adds a second use case: eight EVM chains, one metered shared provider plan, and a need to cap the worst-minute burst because one chain can consume budget needed by the others. This commenter also supplied the separate production measurements below; do not count those multiple issues as multiple independent operators.

### C. Sub-second head cadence and provider spend — Envio #1758 / #1884 / #1885

[Envio #1758](https://github.com/enviodev/hyperindex/issues/1758), from `fredericobianco`, reports a six-chain production deployment:

- Switching head detection from polling to `newHeads` roughly doubled `eth_getLogs` calls on sub-second chains.
- Total RPC requests rose about 45%.
- A 2-second minimum interval reduced `eth_getLogs` from 3,674 to 1,050 per minute across the measured setup and reduced compute units from 331k to 111k per minute.
- On the fastest chain, the 2-second interval reduced `eth_getLogs` from 593/min to about 30/min.

The issue led to [PR #1764](https://github.com/enviodev/hyperindex/pull/1764), which merged on 30 October 2026 and added the per-chain `block_throttle` setting. [PR #1791](https://github.com/enviodev/hyperindex/pull/1791) moved that behavior into FetchState and merged on 3 November. A separate [issue #1823](https://github.com/enviodev/hyperindex/issues/1823) asked for range polling at the head; the maintainer pointed the author to `block_throttle`, and the author closed it after finding the feature.

The same operator then reported a newer regression:

- [#1884](https://github.com/enviodev/hyperindex/issues/1884) says Envio 3.18.1 increased one real chain's provider traffic from about 800 to about 18,000 requests/hour (roughly 22x) after head-integrity checks were added.
- [#1885](https://github.com/enviodev/hyperindex/issues/1885) says the team rolled back the upgrade and is staying on 3.2.1. They cite HyperSync rate limits, chains not supported by HyperSync, and a database migration that requires a full re-read taking about eight days on their largest chain.
- The user reports a burst of about 50,000 requests/minute on the shared plan in a related comment on #1783.

These are strong pain and cost signals, but #1758/#1884/#1885 are one reporter's environment, not three independent customers.

### D. Rate-limit retry spiral — Envio #1669

[Envio #1669](https://github.com/enviodev/hyperindex/issues/1669), opened by `codewiththeflowxyz`, reports HTTP 429 being treated as a range-too-large failure. Shrinking the range after a rate limit creates more requests and can produce a retry spiral.

This is a separate reporter and a separate concrete failure mode. The fix was merged in [PR #1861](https://github.com/enviodev/hyperindex/pull/1861) on 20 November 2026: preserve the block range when the provider rate-limits.

## 2. Upstream response is active

The problem is real, but indexer maintainers are already shipping targeted fixes:

| Change | Status at review | Meaning |
|---|---|---|
| [#1764](https://github.com/enviodev/hyperindex/pull/1764) `block_throttle` | Merged 30 Oct | Coalesces head fetches on fast chains |
| [#1791](https://github.com/enviodev/hyperindex/pull/1791) move throttle into FetchState | Merged 3 Nov | Applies throttle in the fetch state path |
| [#1801](https://github.com/enviodev/hyperindex/pull/1801) head block integrity checks | Merged 6 Nov | Protects against false-empty logs from lagging RPC replicas; adds reads |
| [#1804](https://github.com/enviodev/hyperindex/pull/1804) skip old boundary reads | Merged 6 Nov | Reduces unnecessary backfill header reads |
| [#1861](https://github.com/enviodev/hyperindex/pull/1861) preserve range on 429 | Merged 20 Nov | Stops rate limits from shrinking ranges |
| [#1851](https://github.com/enviodev/hyperindex/pull/1851) per-RPC concurrency limits | Open | Direct response to #1783 |
| [#1812](https://github.com/enviodev/hyperindex/pull/1812) use log timestamp/hash | Open | Avoids some per-block header reads |
| [#1840](https://github.com/enviodev/hyperindex/pull/1840) cut head recheck and log-page requests | Open | Direct response to request amplification |
| [#1884](https://github.com/enviodev/hyperindex/issues/1884) cost regression | Open | Operator still blocked on 3.18.1 upgrade |

The 3.18.1 cost issue is particularly important: the correctness check added in #1801 addresses a real lost-event risk, but the extra reads create a cost trade-off for metered RPC sources. The right fix is likely an upstream design/configuration choice, not a separate generic service.

## 3. RPC log correctness is a related but distinct risk

### Nitro #4788 — wrong logs for a future block

[Nitro #4788](https://github.com/OffchainLabs/nitro/issues/4788), reported by `pauldelucia`, says a request for a block above the current head returned the current head's logs instead of an error. The author tested both public Arbitrum One and Robinhood Chain endpoints.

In an 18-minute sample, the reporter counted:
- Arbitrum One: 321 responses with another block's logs and 33 empty results.
- Robinhood Chain: 289 responses with another block's logs and 39 empty results.

A client that accepts the response and advances its cursor could skip the requested block's actual logs. Two commenters discussed this downstream data-loss mode and recommended rejecting out-of-range log responses or using block-hash queries.

The issue was closed as `completed` on 24 November 2026. A linked fixing PR did not surface in the bounded search, so do not assume a specific release contains the fix without re-testing.

### Nitro #3666 — eventual consistency after `subscribe_blocks`

[Nitro #3666](https://github.com/OffchainLabs/nitro/issues/3666), from a different operator in September 2025, describes `eth_getLogs` failing immediately after a `subscribe_blocks` notification because the logs are not yet indexed. The operator temporarily added a one-second sleep. A maintainer explained that Nitro is asynchronous and guarantees eventual consistency, recommending retry rather than synchronizing all API calls.

This is a related read-after-notification race, but the observed response was an error rather than stale logs.

### Existing indexer-side protections

- Envio [#1801](https://github.com/enviodev/hyperindex/pull/1801) added header checks to avoid trusting false-empty responses from lagging replicas. The issue body records a real lost event on Arbitrum when Alchemy returned an empty log response from a lagging replica.
- Ponder [#1852](https://github.com/ponder-sh/ponder/issues/1852) reported false-empty `eth_getLogs` responses; it was fixed through [PR #1856](https://github.com/ponder-sh/ponder/pull/1856).
- The Graph and Ponder issue trackers contain older reports of provider-specific range limits and head lag, but these are not fresh independent buyer signals in this pass.

The correctness problem is real, but the market response is already visible inside indexer software: validate log responses against headers/blooms, use block hashes, retry without advancing checkpoints, and fail over providers.

## 4. Competition and substitutes

### RPC proxy / gateway

[eRPC](https://erpc.cloud/) is a direct competitor to any generic RPC reliability or cost-control proxy. Its public feature set includes:

- request splitting and retries;
- failover and multi-chain routing;
- persistent reorg-aware caching;
- cross-provider consensus and stale-response detection;
- per-provider hourly/daily quotas and compute-unit budget guards;
- per-upstream throughput, error, and latency dashboards.

eRPC is open source under Apache 2.0 and is maintained by the Goldsky team. Its public site describes production use by teams including Circle, Polygon, Morpho, Caldera, and others. This is a substantial incumbent, not a hypothetical competitor.

### Provider-side controls

[dRPC plans and billing](https://drpc.org/docs/pricing/plans) expose compute-unit pricing, request-rate limits, usage reporting, and enterprise volume terms. Provider-native quotas and billing controls already cover part of the budget-control requirement.

### Indexing alternatives

Existing alternatives include Envio/HyperSync, Goldsky, The Graph, Subsquid, and Ponder. Teams can also move work to a managed indexing service rather than operate a self-hosted indexer on metered RPC.

These options make a generic "RPC cost optimizer" difficult to differentiate. A proxy can limit and route calls, but it cannot always remove unique reads generated by an indexer's own head-validation algorithm.

## 5. Product assessment

| Criterion | Assessment |
|---|---|
| Pain | Strong. Multiple independent indexer operators report measurable request amplification, 429 retry spirals, and cost spikes. |
| Evidence | Stronger than a single GitHub bug: Arbitrum/Robinhood metrics, 7-chain page failure counts, 6–8 chain production measurements, and a 22x upgrade regression. Some detailed measurements come from the same operator. |
| Buyer | Identifiable role: indexer infrastructure owner / data engineering lead responsible for RPC spend and freshness. No named budget owner or payment commitment. |
| Frequency / cost | Repeated head fetches, empty log queries, provider CU spikes, 429s, and costly full re-indexes. At least one operator reports 800 → 18,000 requests/hour and a 50k requests/minute burst. |
| Workarounds | `block_throttle`, concurrency caps, retry handling, provider failover, HyperSync, custom proxy, or switching indexer. |
| Competition | High: eRPC, Goldsky Cloud Edge, provider-native quotas, and managed indexing services. |
| Arbitrum relevance | Directly observed on Arbitrum and Robinhood Chain, but the wider problem is multi-EVM and not unique to Arbitrum. |
| Feasibility | A narrow proxy or indexer plugin is technically feasible; differentiation and distribution are not established. |

### Verdict

**WATCH — strongest recurring commercial pain signal in this pass, but not GO.**

Do not build a generic RPC proxy, budget dashboard, or indexer replacement. Those categories are already served by eRPC, providers, and indexing platforms. Keep this problem only if interviews reveal a specific workload that those products cannot solve—for example, an indexer operator who needs semantic head-read coalescing or checkpoint-safe log verification that cannot be achieved through existing proxy/indexer configuration.

## 6. Next evidence required

1. Find at least two additional independent indexer teams (not the reporters already listed) with quantified RPC cost or request-amplification problems on Arbitrum/Orbit.
2. Ask operators whether they already use eRPC, Goldsky Cloud Edge, provider quotas, or indexer-native throttling—and exactly what remains unsolved.
3. Separate costs caused by indexer design (unique per-block reads) from provider congestion (429s, queueing, range caps).
4. Identify the actual budget owner and whether they would pay for a separate solution rather than switch indexer/provider or wait for an upstream release.
5. Recheck Envio PRs #1851, #1812, and #1840 and the #1884 issue after the next release.

**No product selection. No implementation.**
