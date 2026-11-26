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

**Assessment:** Stronger-than-single-complaint operator evidence, but technical workarounds/fix paths exist. The remaining gap, if any, is not simply adding a range limit. A narrower unresolved case worth testing is safe readiness/bootstrap of multi-sequencer Kubernetes deployments (#4733), where the existing feed-connected signal can deadlock under headless-service readiness rules. This is still a single-operator report and may require an upstream Nitro fix rather than a third-party product.

**Next checks:** confirm Nitro release inclusion for both fixes; test current behavior on a representative Orbit archive node; quantify downtime, infra cost, and operator time; identify whether operators pay for third-party tooling.

### A2. Arbitrum One public RPC returns zero log timestamps

[OffchainLabs/nitro #4780](https://github.com/OffchainLabs/nitro/issues/4780) — open; created 1 November 2026; updated 7 November 2026; six comments at review.

The report says eth_getLogs from the public Arbitrum One endpoint returns blockTimestamp: 0x0, while block headers and receipt methods return correct timestamps. The same queries against other Arbitrum providers return correct values.

The reporter compared EIP-234 blockHash queries with block-number range filters for the same blocks. Log identities matched, but timestamps differed. A follow-up comment reports 1,647 mismatches in 1,689 cross-provider comparisons over roughly four days. This is the reporter's own measurement, not an independently audited benchmark.

Comments narrow possible causes to a range-query/log-cache/serving path but do not establish a confirmed root cause. The blockHash query is a workaround for the reproducer, not evidence the public endpoint is fixed.

**Assessment:** Concrete data-correctness problem with plausible consequences for indexers and analytics consumers. One author and one endpoint-specific report are not enough to establish a broad product opportunity. The question is whether teams need provider-neutral RPC correctness monitoring and whether existing observability products already cover it.

**Next checks:** monitor issue/PR resolution; search for independent reports of incorrect logs, receipts, timestamps, chain heads, or provider divergence; inspect Tenderly, QuickNode, Alchemy, Blocknative, Goldsky, Envio, and open-source RPC health tools.

### A4. False-ready Nitro nodes during cold start

[OffchainLabs/nitro #4733](https://github.com/OffchainLabs/nitro/issues/4733) — open; created 1 September 2026; updated 1 September 2026; no comments at review.

A Conduit operator reports that a warm-database Nitro node can return eth_syncing=false while still behind the chain during cold start. The issue describes a production incident: approximately 20 seconds with no Ready read replicas and 3,372 client errors, followed by a three-minute window with no Ready sequencers and roughly 8,000 eth_sendRawTransaction failures (100% write failures during that window).

The reporter's read-replica workaround adds arb_feed_sources_connected >= 1 to readiness. It does not solve sequencer readiness: sequencers cross-connect feeds through a Kubernetes headless Service, whose DNS excludes NotReady endpoints. If both sequencers are NotReady, neither can resolve the other's feed, producing a deadlock. The reporter says this was reproduced on nine test chains and remains unmitigated for sequencers. The issue asks for a Nitro-level signal proving syncTarget has included a non-local observation.

Related historical signal: [Nitro #738](https://github.com/OffchainLabs/nitro/issues/738), closed in July 2022, requested a more detailed sync-status report to diagnose sync bottlenecks. This is related observability context, not proof that the same cold-start bug recurred.

**Assessment:** This is the strongest single operator-pain report found in this pass: it quantifies customer-visible impact, gives a reproducible topology-specific failure, and describes an unresolved sequencer workaround. However, it is still one detailed reporter and appears to request an upstream Nitro behavior/health-signal fix rather than a new third-party product.

**Current-source check:** fetched current default-branch `arbnode/sync_monitor.go` on 26 November 2026 (blob `f690f0363e227aba6ed874d12e916d79a9b900d0`). `maxMessageCount()` still takes the maximum of the local tx-streamer count, feed-pending count, optional sync-progress fetcher, and optional coordinator count. `Synced()` still checks only that syncTarget is nonzero and not behind the local message count (plus optional sync-progress fields); it does not explicitly require that syncTarget has ever included a non-local observation. This is consistent with the reported failure mode, although a runtime reproduction is still required.

**Next checks:** determine whether a fix is in an unmerged PR or unreleased branch; inspect the current community Helm chart readiness configuration and high-availability sequencer guide; find independent Orbit operators with multi-sequencer Kubernetes deployments; ask operators how they currently validate readiness before routing writes.

### A5. Archive-node capability metadata is inaccurate

[Nitro #4766](https://github.com/OffchainLabs/nitro/issues/4766) — open; created 14 October 2026; updated 24 November 2026; two comments at review.

On archive nodes, eth_capabilities reports a 128-block state/stateproofs window even when historical state is available. The report says this can cause RPC routers to avoid routing historical state queries to Nitro archive nodes.

A maintainer acknowledged the report and said it is being tracked. A proposed Nitro PR [#4768](https://github.com/OffchainLabs/nitro/pull/4768) pulls in OffchainLabs/go-ethereum#669 to populate archive/history metadata. PR #4768 was still open and unmerged at review.

**Assessment:** Another concrete RPC metadata correctness issue, but an upstream fix is already proposed. Do not treat it as product whitespace unless downstream routing failures persist after the fix ships.

### A6. Other cold-start and relay reports — context, not proof of one common bug

- [Nitro #4208](https://github.com/OffchainLabs/nitro/issues/4208) reported a fresh Orbit node hanging before HTTP startup when an external batch-poster signer was configured. It was closed as stale; a commenter said the issue was still tracked internally but the team lacked capacity to solve it. A proposed code path showed that dialing the external signer during construction could block startup. This is a separate cold-start failure mode, not the same as #4733.
- [Nitro #4789](https://github.com/OffchainLabs/nitro/issues/4789) asks about low-latency sequencer-feed access for a Robinhood Chain relay operator running in AWS. It has no comments at review and is a single operator question.
- [Nitro #4770](https://github.com/OffchainLabs/nitro/issues/4770) looked like a stuck-node report but was closed after time-aligned snapshots showed the node was processing normally; the log was an expected BoLD watchtower INFO message. Keep this as a warning against treating operator interpretation as a confirmed bug.

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

Only one substantive feed-builder report was found in this pass. A separate operator-research question in #121 (author: epistemedeus) asks which input actually blocks every-block liquidation loops and whether existing Morpho API/HyperIndex/RPC paths are sufficient; it has no replies at review. No confirmed paying user or subscription demand is shown.

**Assessment:** Worth a few targeted follow-ups because it describes a recurring operator workflow and a possible data product. However, the bot's own README already supports Morpho API and self-hosted HyperIndex data providers, pluggable pricers and liquidity venues, and RPC-only deployment. The feed proposal has no confirmed demand, no subscription, and no Arbitrum-specific evidence yet.

### C3. Flashbots liquidation execution path

[Morpho liquidation bot #114](https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/114) — open; created 23 June 2026; updated 29 June 2026; two comments at review.

The report says the bot's Flashbots path constructs a bundle transaction incorrectly, so liquidations with useFlashbots enabled fail. It includes a code-level diagnosis: function arguments are spread into the transaction object instead of ABI-encoded calldata, and the transaction fee field is not prepared. Two comments are from a contributor asking to work on the fix / asking for PR review; no maintainer resolution or merged fix was confirmed in this pass.

The repository README already describes a multi-chain RPC-only liquidation bot with pluggable Morpho API / HyperIndex data providers, liquidity venues, pricers, configurable block interval, and optional Flashbots support.

**Assessment:** Real developer bug in an existing tool, not evidence of a new product gap. The bot already packages much of the operator workflow. Further product research should focus on independent liquidation operators' unmet needs, not clone the bot or build a generic borrower feed.

## Cluster D — Uniswap v4 integration and SDK friction

### D1. Hook admission policy for routers and aggregators

[Uniswap/v4-periphery #589](https://github.com/Uniswap/v4-periphery/issues/589) — open; created 13 August 2026; one comment at review (Linear bot only).

An integrator argues that routers/aggregators need to decide which v4 hooks they will route through, especially delta-returning hooks and hooks whose code may change behind proxies or redeployments. The author has already built an open-source, default-closed gate with permission-bit screening, explicit allowlisting, EXTCODEHASH pinning, and a timelocked admission path.

**Existing alternatives are material:**
- [Uniswap's routing allowlist](https://developers.uniswap.org/hook-allowlist) reviews hook code and routing compatibility before Uniswap Labs routes through it; this is explicitly not a security audit or endorsement.
- [Uniswap Hooklist](https://github.com/Uniswap/hooklist) is a public registry of hook deployments, flags, properties, upgradeability, metadata, and audit links across chains including Arbitrum and Robinhood Chain.
- [Uniswap's v4 security framework](https://developers.uniswap.org/docs/protocols/v4/security) gives hook developers a risk-scoring and operational-security framework, while disclaiming any certification or guarantee.

**Assessment:** A real integrator concern, but the reporter's own solution is a public reference implementation, and official routing allowlisting / registry / security guidance already cover much of the workflow. No independent demand, customer, or willingness to pay is shown. Do not revive generic Smart Contract Audit Readiness or create another hook registry. Revisit only if interviews reveal a separate need for independent, continuous runtime admission/upgrade monitoring across third-party routers.

### D2. Robinhood Chain deployment provenance and SDK registry disagreement

[Uniswap/sdks #763](https://github.com/Uniswap/sdks/issues/763) — open; created 20 October 2026; four comments at review.

The reporter questioned the deployment provenance and constructor parameters for a Universal Router address listed for Robinhood Chain (chain ID 4663). A community researcher reconstructed the CREATE2 deployment from public records and identified that the SDK constants/docs still pointed to an instance labelled orphaned in Uniswap's own deployment records, while a replacement production deployment was recorded elsewhere. The reporter then asked maintainers which address/version integrations should use and whether SDK/docs would be corrected. No maintainer confirmation was present in the comments reviewed.

**Assessment:** Concrete integration risk caused by deployment metadata drift across SDK constants, deployment records, and docs. But it is one chain / one report, and public chain data plus deployment artifacts allowed a community researcher to reconstruct the discrepancy. It may justify a small verification checklist or data-quality test for integrations, not a standalone product yet.

### D3. Ethers v5/v6 compatibility friction

[Uniswap/sdks #141](https://github.com/Uniswap/sdks/issues/141) — open; created 3 October 2024; updated 31 December 2025; 16 comments at review.

Multiple developers report that Uniswap SDKs' ethers v5 imports conflict with projects using ethers v6, including Hardhat and other packages. Comments describe dual-installing aliased ethers versions as a workaround and a failed attempt to migrate the SDK. This is a more repeated developer-experience signal than the single Arbitrum SDK dependency issue, but it is broad EVM tooling friction rather than an Arbitrum-specific unmet need.

**Assessment:** Real recurring compatibility pain, but likely belongs to SDK maintenance / migration and is not a differentiated product opportunity. Keep as a developer-infrastructure signal only.

### D4. Other v4 periphery requests

- [#596](https://github.com/Uniswap/v4-periphery/issues/596) proposes a helper to migrate a position NFT from the normal PositionManager to PermissionedPositionManager. It has a design sketch and two comments, but appears to be a narrow recovery workflow rather than a broad market.
- [#531](https://github.com/Uniswap/v4-periphery/issues/531) requests more atomic multi-step position management for bots/strategies, but gives no concrete implementation or customer evidence.

## Low-confidence / excluded signals

- Recent GMX Synthetics issues #320–#323 contain dramatic security claims but had no substantive discussion at review and appear to be unverified third-party reports. Do not treat them as confirmed vulnerabilities, protocol-endorsed problem statements, or market evidence. Security reports belong in responsible disclosure channels.
- Aave V3 core/origin results in this pass were mostly older, generic developer support or documentation issues; no compelling repeated commercial workflow surfaced. Examples include missing NatSpec, a Windows reserved-directory issue, and a consumer question about waEthUSDC share-price mechanics.
- Uniswap v4-core/periphery results were a mix of isolated feature requests, security claims, and the hook-admission concern documented above. Official routing allowlisting, Hooklist, and the security framework are already available; no separate product gap has been validated.
- Morpho #121 is an unanswered operator-research question by a separate GitHub account (epistemedeus); it is not a report of an observed incident and does not validate demand.

## Existing tooling and competitive reality

The early Orbit/Nitro operations cluster has substantial existing coverage. This materially narrows the whitespace.

### Official Arbitrum monitoring

- [Arbitrum monitoring documentation](https://developer.arbitrum.io/launch-arbitrum-chain/operate/monitoring) documents metrics and monitoring for sequencer, batch poster, validator, chain fees, retryables, ArbOS versions, and node sync.
- [Nitro node tuning and monitoring](https://docs.arbitrum.io/run-a-node/nitro/node-tuning-and-monitoring) says the main Nitro binary has no dedicated health endpoint; HTTP JSON-RPC availability is a liveness signal, and the community Helm chart's startup probe can allow up to 28 days for initial sync.
- [High-availability sequencer guide](https://developer.arbitrum.io/launch-arbitrum-chain/run-a-node/high-availability-sequencer) documents chosen-sequencer health checks and Kubernetes/headless-service topology. This is relevant baseline functionality, but does not directly answer the false-ready cold-start case in #4733.
- [Feed relay guide](https://developer.arbitrum.io/run-a-node/run-feed-relay) documents reconnect behavior, warns against connecting fleets directly to the public feed, and recommends alerting on sustained feed disconnection, head lag, and relay disconnect rate.
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
| Nitro HA readiness / cold-start correctness | Medium severity evidence; low recurrence evidence | Quantified customer outage, nine test-chain reproductions, no sequencer workaround in report | Independent operators, upstream fix status, exact buyer and product-shaped gap |\n| Orbit/Nitro RPC and archive-node reliability | Medium problem evidence; low product whitespace | Multiple operator reports and reproducible failure modes; official and commercial monitoring already covers much of the category | Remaining unserved workflow, independent operator count, budget owner, differentiation from Goldsky / official monitoring |
| Orbit SDK deployment and RPC compatibility | Low–medium | Several distinct workflow-friction reports over time | Independent recurrence, affected-team scope, willingness to pay |
| Morpho liquidation data freshness/coverage | Low | One live scanner builder and a specific feed concept | Independent liquidator demand, freshness SLA, economics, Arbitrum fit |
| SDK package dependency hygiene | Low | Clear reproducible developer bug; related SDK ecosystem compatibility reports exist | Broader Arbitrum-specific recurrence and productizable scope |\n| Hook admission / deployment metadata | Low | Specific integration concern and one Robinhood Chain deployment-record discrepancy | Independent integrator demand, official maintainer response, differentiation from Uniswap allowlist / Hooklist |

These are research clusters only. None is GO.

## Next research steps

1. Check linked PRs, upstream commits, changelogs, and Nitro/SDK releases for the listed issues. Reclassify resolved issues and retain only remaining pain.
2. Search for independent operators describing the same RPC/indexing failures across multiple Orbit chains, not only chain 4663.
3. Search GitHub Discussions, Arbitrum forum posts, public community support threads, and provider status/support threads for corroboration.
4. Compare current solutions: hosted RPC providers, indexers, node monitoring, trace infrastructure, and Orbit deployment tooling.
5. Identify who pays: Orbit chain operators, infrastructure teams, protocol engineering teams, indexer operators, or liquidation searchers.
6. Only then shortlist at most three problem statements and seek direct buyer validation.

## Sources reviewed

- https://github.com/OffchainLabs/nitro/issues/4733\n- https://github.com/OffchainLabs/nitro/blob/main/arbnode/sync_monitor.go\n- https://github.com/OffchainLabs/nitro/issues/4766\n- https://github.com/OffchainLabs/nitro/pull/4768\n- https://github.com/OffchainLabs/nitro/issues/4208\n- https://github.com/OffchainLabs/nitro/issues/4789\n- https://github.com/OffchainLabs/nitro/issues/4770\n- https://github.com/OffchainLabs/nitro/issues/738\n- https://github.com/OffchainLabs/nitro/issues/4736
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
- https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/114\n- https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/117
- https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/118
- https://github.com/Uniswap/v4-periphery/issues/589\n- https://github.com/Uniswap/v4-periphery/issues/596\n- https://github.com/Uniswap/v4-periphery/issues/531\n- https://github.com/Uniswap/sdks/issues/763\n- https://github.com/Uniswap/sdks/issues/141\n- https://github.com/gmx-io/gmx-synthetics/issues/320
- https://github.com/gmx-io/gmx-synthetics/issues/321
- https://github.com/gmx-io/gmx-synthetics/issues/322
- https://github.com/gmx-io/gmx-synthetics/issues/323

Additional operator documentation checked:
- https://developer.arbitrum.io/launch-arbitrum-chain/operate/monitoring
- https://docs.arbitrum.io/run-a-node/nitro/node-tuning-and-monitoring
- https://developer.arbitrum.io/launch-arbitrum-chain/run-a-node/high-availability-sequencer
- https://developer.arbitrum.io/run-a-node/run-feed-relay

Morpho liquidation-bot implementation reference:
- https://github.com/morpho-org/morpho-blue-liquidation-bot/blob/main/README.md

Uniswap hook security and routing references:
- https://developers.uniswap.org/hook-allowlist
- https://github.com/Uniswap/hooklist
- https://developers.uniswap.org/docs/protocols/v4/security
