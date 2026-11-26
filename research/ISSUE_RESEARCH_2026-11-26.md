# Issue-driven research — 26 November 2026

## Scope and method

First-pass review of primary GitHub issue threads in OffchainLabs Nitro and SDK repositories, Morpho's liquidation-bot repository, and selected Aave/GMX/Uniswap repositories. The goal is to find repeated operational or developer pain, not to turn every bug into a product.

A GitHub issue proves that someone reported a problem. It does not by itself prove recurrence, severity, buyer demand, willingness to pay, or that the problem remains unfixed. Dates and states below were checked on 26 November 2026.

## Cluster A — Orbit/Nitro RPC and archive-node operations

### A1. Archive-node tracing and log-query reliability

[OffchainLabs/nitro #4736](https://github.com/OffchainLabs/nitro/issues/4736) — open; created 6 September 2026; updated 27 September 2026.

An Orbit operator running five independent archive nodes (chain ID 4663, blob DA, path state scheme) reports two separately reproducible problems:

1. debug_traceBlockByNumber can trigger a fatal concurrent-map-write/read race in the historical state reader and crash the node.
2. Broad eth_getLogs queries can cause unbounded memory growth and node restarts.

A second Orbit operator commented that full-range topic-filtered eth_getLogs requests hit a 10,000-range refusal and parallel scripts receive HTTP 429 within seconds. The thread points to an upstream --execution.rpc.filter-range-limit change/backport for limiting wide queries before historical scans. This mitigates the memory side, not proof that the whole issue is resolved. The tracing race was reportedly addressed in an upstream Geth PR with race-detector verification; inclusion in the deployed Nitro version still needs checking.

**Assessment:** Stronger-than-single-complaint operator evidence, but technical workarounds/fix paths exist. The remaining gap, if any, is not simply adding a range limit. It would need to be an operator-facing reliability/diagnostic/compatibility workflow not already covered by node monitoring, RPC providers, or managed infrastructure.

**Next checks:** confirm Nitro release inclusion for both fixes; test current behavior on a representative Orbit archive node; quantify downtime, infra cost, and operator time; identify whether operators pay for third-party tooling.

### A2. Arbitrum One public RPC returns zero log timestamps

[OffchainLabs/nitro #4780](https://github.com/OffchainLabs/nitro/issues/4780) — open; created 1 November 2026; updated 7 November 2026; six comments at review.

The report says eth_getLogs from the public Arbitrum One endpoint returns blockTimestamp: 0x0, while block headers and receipt methods return correct timestamps. The same queries against other Arbitrum providers return correct values.

The reporter compared EIP-234 blockHash queries with block-number range filters for the same blocks. Log identities matched, but timestamps differed. A follow-up comment reports 1,647 mismatches in 1,689 cross-provider comparisons over roughly four days. This is the reporter's own measurement, not an independently audited benchmark.

Comments narrow possible causes to a range-query/log-cache/serving path but do not establish a confirmed root cause. The blockHash query is a workaround for the reproducer, not evidence the public endpoint is fixed.

**Assessment:** Concrete data-correctness problem with plausible consequences for indexers and analytics consumers. One author and one endpoint-specific report are not enough to establish a broad product opportunity. The question is whether teams need provider-neutral RPC correctness monitoring and whether existing observability products already cover it.

**Next checks:** monitor issue/PR resolution; search for independent reports of incorrect logs, receipts, timestamps, chain heads, or provider divergence; inspect Tenderly, QuickNode, Alchemy, Blocknative, Goldsky, Envio, and open-source RPC health tools.

### A3. Nitro feed reconnect behavior

[OffchainLabs/nitro #4785](https://github.com/OffchainLabs/nitro/issues/4785) — open; created 5 November 2026; updated 9 November 2026.

A report describes feed WebSocket reconnects that ignore configured backoff after short-lived successful connections, omit jitter, and retry indefinitely. It estimates roughly 60 dials per 15 minutes during a long outage, or about 280 in 15 minutes when a server accepts and resets every three seconds.

A contributor commented that they were implementing a fix using existing backoff settings, jitter, and deterministic tests.

**Assessment:** Real reliability bug, but likely an upstream code fix rather than a standalone product. Recheck release status; do not count it as an unresolved market gap.

## Cluster B — Arbitrum SDK and Orbit deployment workflow friction

### B1. RPC range assumptions in Orbit SDK utilities

[OffchainLabs/arbitrum-chain-sdk #642](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/642) — open; created 12 February 2026.

upgradeExecutorFetchPrivilegedAccounts reportedly fails against many RPC endpoints with “query range is too big” or an invalid fromBlock value when set to earliest.

Historical recurrence: [#205](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/205) and [#206](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/206), both closed in October 2024 / February 2025, describe the same general 10k-block eth_getLogs provider limit affecting rollup transaction discovery. Those issues led to a bounded/deployed-at-block variant.

**Assessment:** Recurring class of RPC-range compatibility friction across Orbit deployment utilities and providers. Exact #642 is one report with no comments; not evidence of a market by itself. Broader problem area to test: robust, provider-aware historical log scanning and diagnostics for Orbit operators.

### B2. SDK missing direct dependencies

[OffchainLabs/arbitrum-sdk #657](https://github.com/OffchainLabs/arbitrum-sdk/issues/657) — open; created 16 November 2026.

The reporter says published @arbitrum/sdk@4.1.0 imports @ethersproject packages not declared as direct dependencies, causing imports to fail in Yarn Plug'n'Play and non-hoisted dependency layouts. The issue includes a reproducible install/import command and package/runtime versions. No comments at review.

**Assessment:** Specific developer-experience bug, but one report and likely a straightforward package fix. Not a product candidate absent wider recurrence.

### B3. Other Orbit SDK workflow gaps

- [#636](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/636), open, asks to include fee-token-pricer contract deployment in the SDK. The author says their team currently hand-rolls deployment code in internal tooling.
- [#222](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/222), open, reports a fast-withdrawal setup helper that assumes access to a private-key account even when production chain ownership has moved to a multisig.
- [arbitrum-sdk #639](https://github.com/OffchainLabs/arbitrum-sdk/issues/639) asks for a retryable-ticket encoding primitive for pre-chain-startup workflows; [arbitrum-chain-sdk #684](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/684) tracks Viem wrappers and an example.

**Assessment:** Concrete integration/deployment workflow frictions, each narrow. Possible pattern: tooling gap around production Orbit lifecycle management, multisig-safe administration, and repeatable deployment/upgrade workflows. Need independent teams and workflow interviews.

## Cluster C — Morpho liquidation tooling

### C1. Morpho Vault V2 discovery compatibility

[morpho-blue-liquidation-bot #117](https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/117) — open; created 1 July 2026; updated 19 July 2026.

The bot's data providers discover Vault V1 markets via withdrawQueueLength()/withdrawQueue(i). Vault V2 does not expose that interface, so a whitelisted Vault V2 can silently yield zero watched markets. The issue proposes on-chain adapter/allocation enumeration or an API-backed/hybrid approach.

Two contributors commented, one stating they were implementing the on-chain enumeration approach with tests.

**Assessment:** Concrete protocol-version compatibility issue in an open-source liquidation tool, but a narrow bug with a contributor working on it. It does not establish a broad data-infrastructure market.

### C2. Borrower-position data feed

[morpho-blue-liquidation-bot #118](https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/118) — open; created 19 July 2026; updated 29 August 2026.

An independent builder says they scan 2,586 Morpho Blue borrowers across 212 Base markets every 20 minutes and asks whether other liquidation-bot operators would use a webhook/data API instead of polling RPCs independently. They are seeking feedback and potential data partnerships.

Only one substantive independent report was found in this pass. The discussion asks what gap makes the scanner necessary versus Morpho API, HyperIndex, or RPC, and what freshness guarantee is required; no confirmed paying user or subscription demand is shown.

**Assessment:** Worth further validation because it describes a recurring operator workflow and a possible data product. Still weak evidence: one builder's proposed feed, no demonstrated demand, and no Arbitrum-specific evidence yet.

## Low-confidence / excluded signals

- Recent GMX Synthetics issues #320–#323 contain dramatic security claims but had no substantive discussion at review and appear to be unverified third-party reports. Do not treat them as confirmed vulnerabilities, protocol-endorsed problem statements, or market evidence. Security reports belong in responsible disclosure channels.
- Aave V3 core/origin results in this pass were mostly older, generic developer support or documentation issues; no compelling repeated commercial workflow surfaced.
- Uniswap v4-core results were a mix of older design discussions and unverified security claims; no robust customer-pain cluster was established.
- Morpho #121 is an operator-question thread posted by the same account conducting this research, so it is not independent validation.

## Existing tooling and competitive reality

The early Orbit/Nitro operations cluster has substantial existing coverage. This materially narrows the whitespace.

### Official Arbitrum monitoring

- [Arbitrum monitoring documentation](https://developer.arbitrum.io/launch-arbitrum-chain/operate/monitoring) documents metrics and monitoring for sequencer, batch poster, validator, chain fees, retryables, ArbOS versions, and node sync.
- [OffchainLabs/arbitrum-monitoring](https://github.com/OffchainLabs/arbitrum-monitoring) is an open-source suite of scripts for retryable lifecycle, batch poster, assertion, ArbOS version, and node-sync monitoring. The documented node-sync monitor compares operator nodes against a trusted reference RPC.
- Official docs explicitly warn that a reference RPC can itself fail or lag, making node-sync comparisons inaccurate. The chain verification script is described as work-in-progress and potentially producing false positives.

**Implication:** Generic “Orbit chain monitoring dashboard” is not whitespace. A potential gap would need to be specific and proven: semantic RPC correctness across providers, archive trace/data completeness, or diagnosis of cross-provider inconsistencies beyond the existing liveness/metrics checks.

### RPC provider observability and benchmarking

- [Goldsky live RPC provider comparison](https://goldsky.com/compare/rpc-providers) explicitly supports Arbitrum One and Robinhood Chain. It compares latency, errors, bad data, block lag, and method groups including logs, calls, receipts, and traces, across regions and time windows. Its measurements are from Goldsky Edge traffic, not an independent universal probe network.
- [RPCNode.IO](https://rpcnode.io/) offers continuous provider comparison for latency, availability, response correctness, and chain-head freshness, but its currently documented chain coverage is Ethereum, BNB Chain, and Solana — not Arbitrum. It is nevertheless a direct category competitor / adjacent solution.
- [Alchemy's RPC benchmark methodology](https://www.alchemy.com/blog/how-we-benchmark-rpc-performance) includes Arbitrum and compares method latency and request success across providers, but it does not claim to test full customer workflows or all RPC semantics.
- [QuickNode eth_getLogs documentation](https://www.quicknode.com/docs/ethereum/eth_getLogs) documents provider-specific range limits (5 blocks on free trial, 10,000 on paid plans) and recommends splitting requests. Range-limit handling is a known RPC-provider constraint, not a novel Arbitrum-specific problem.

**Implication:** Do not pursue generic RPC benchmarking, provider rankings, or basic health monitoring. Goldsky already directly overlaps on Arbitrum and includes bad-data/block-lag metrics. Any residual wedge must be validated against real operator workloads and the limits of current tools, especially for self-hosted Orbit RPCs, custom chain configurations, archive/debug methods, and reproducible semantic consistency checks.

## Current ranking of problem clusters (not product ideas)

| Cluster | Evidence strength | Why it matters | Main missing evidence |
|---|---|---|---|
| Orbit/Nitro RPC and archive-node reliability | Medium problem evidence; low product whitespace | Multiple operator reports and reproducible failure modes; official and commercial monitoring already covers much of the category | Remaining unserved workflow, independent operator count, budget owner, differentiation from Goldsky / official monitoring |
| Orbit SDK deployment and RPC compatibility | Low–medium | Several distinct workflow-friction reports over time | Independent recurrence, affected-team scope, willingness to pay |
| Morpho liquidation data freshness/coverage | Low | One live scanner builder and a specific feed concept | Independent liquidator demand, freshness SLA, economics, Arbitrum fit |
| SDK package dependency hygiene | Low | Clear reproducible developer bug | Broader recurrence and productizable scope |

These are research clusters only. None is GO.

## Next research steps

1. Check linked PRs, upstream commits, changelogs, and Nitro/SDK releases for the listed issues. Reclassify resolved issues and retain only remaining pain.
2. Search for independent operators describing the same RPC/indexing failures across multiple Orbit chains, not only chain 4663.
3. Search GitHub Discussions, Arbitrum forum posts, public community support threads, and provider status/support threads for corroboration.
4. Compare current solutions: hosted RPC providers, indexers, node monitoring, trace infrastructure, and Orbit deployment tooling.
5. Identify who pays: Orbit chain operators, infrastructure teams, protocol engineering teams, indexer operators, or liquidation searchers.
6. Only then shortlist at most three problem statements and seek direct buyer validation.

## Sources reviewed

- https://github.com/OffchainLabs/nitro/issues/4736
- https://github.com/OffchainLabs/nitro/issues/4780
- https://github.com/OffchainLabs/nitro/issues/4785
- https://github.com/OffchainLabs/arbitrum-sdk/issues/657
- https://github.com/OffchainLabs/arbitrum-sdk/issues/639
- https://github.com/OffchainLabs/arbitrum-sdk/issues/521
- https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/642
- https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/636
- https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/222
- https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/205
- https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/206
- https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/117
- https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/118
- https://github.com/gmx-io/gmx-synthetics/issues/320
- https://github.com/gmx-io/gmx-synthetics/issues/321
- https://github.com/gmx-io/gmx-synthetics/issues/322
- https://github.com/gmx-io/gmx-synthetics/issues/323
