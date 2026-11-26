# Issue-driven follow-up — multi-chain execution and SDK friction

Research date: 26 November 2026.

## Executive result

**No GO candidate. Product selection remains undecided. No implementation should start.**

This pass moved beyond the previously reviewed Nitro readiness lead and checked current primary issues and source code across Morpho bots, Arbitrum SDK/Orbit tooling, Aave, GMX, and Nitro.

Two recurring technical problem patterns deserve continued observation:

1. **Provider-dependent `eth_getLogs` range failures** appear in multiple SDK/operator contexts and across distinct reporters. The failure is real developer friction, but the immediate remedy is adaptive range splitting or an upstream SDK/RPC fix. No buyer or standalone product gap is established.
2. **Block-count-based retry timing on multi-chain liquidation bots** can produce different wall-clock retry windows on chains with different block intervals. A current Morpho issue reports this for Robinhood Chain, but its headline impact calculation uses a stale Base block-time assumption and materially overstates the difference. The remaining gap is a narrow code correction, not a product opportunity.

Other new Nitro/SDK reports are isolated correctness, packaging, or toolchain issues. They do not establish a recurring buyer workflow.

## 1. Morpho Blue liquidation bot: block-based backoff on Robinhood Chain

Primary issue: [morpho-org/morpho-bots #4](https://github.com/morpho-org/morpho-bots/issues/4).

### What the issue reports

The reporter says `blue-liquidation` uses the same block-count defaults on Base and Robinhood Chain:

- exponential per-position backoff: 2 blocks to 64 blocks;
- settled-position cooldown: 20 blocks;
- stuck-transaction threshold: 4 blocks.

The issue's reproduction assumes Base blocks are 2 seconds and Robinhood blocks are about 103 ms. It reports 9 versus 79 retry attempts in ten minutes and claims roughly 9x more quote/simulation attempts on Robinhood.

The issue remains open. It has one reporter (`hey-research-lab`) and one maintainer comment. There is no independent operator confirmation or buyer commitment in the thread.

### Current-main source check

Inspected the current default-branch source at commit `bc96ffed51661ccf24c62229fad8a197eb947fef`:

- [Blue bot config](https://github.com/morpho-org/morpho-bots/blob/bc96ffed51661ccf24c62229fad8a197eb947fef/bots/blue-liquidation/src/config.ts) still sets `BACKOFF_BASE_BLOCKS=2` and `BACKOFF_MAX_BLOCKS=64` by default. The custom Robinhood chain declares `blockTime: 100`.
- The shared [block-time module](https://github.com/morpho-org/morpho-bots/blob/bc96ffed51661ccf24c62229fad8a197eb947fef/packages/kit/src/block-time.ts) explicitly records Base at 200 ms and Robinhood at 100 ms. Its comment warns that viem's Base metadata still says 2 seconds and should not be trusted.
- [Blue bot settings](https://github.com/morpho-org/morpho-bots/blob/bc96ffed51661ccf24c62229fad8a197eb947fef/bots/blue-liquidation/src/settings.ts) pass the block-based policy into the controller.
- [Controller backoff](https://github.com/morpho-org/morpho-bots/blob/bc96ffed51661ccf24c62229fad8a197eb947fef/framework/controller/src/backoff.ts) doubles the wait in blocks up to the configured maximum.
- Unlike Blue, [Midnight liquidation config](https://github.com/morpho-org/morpho-bots/blob/bc96ffed51661ccf24c62229fad8a197eb947fef/bots/midnight-liquidation/src/config.ts) already converts shared wall-clock intent into chain-specific block counts with `blocksFor()`.

### Corrected impact estimate

The issue's 9x figure does **not** follow from the current repository's own block-time table. It compares 2,000 ms Base blocks with 100 ms Robinhood blocks, while the same repository's measured table says 200 ms versus 100 ms.

Replaying the issue's 2-second polling interval with the current controller's 2-to-64-block exponential backoff gives approximately:

| Assumed block interval | Attempts over 10 minutes |
|---|---:|
| Base — 200 ms | 47 |
| Robinhood — 100 ms | 79 |

That is about **1.68x**, not 9x. This is a modelled reproduction of the current backoff rule and the issue's polling cadence, not a live bot measurement.

The issue's other two claims are stale relative to inspected current-main code: the current Blue kernel uses a wall-clock `stuckMs: 8_000`, not a four-block stuck threshold; I did not find the old `SETTLED_COOLDOWN_BLOCKS` path in current Blue source. The historical `POSITION_LIQUIDATION_COOLDOWN_MS` interim lever mentioned in the thread is also no longer supported by current main's config.

### Assessment

- **Technical validity:** a narrower backoff timing mismatch remains in current Blue source: fixed block counts are passed on chains whose measured block intervals differ.
- **Impact:** real but materially smaller than the issue's stated 9x estimate under the current repository's own timing table. No production API-bill or liquidation-loss measurement was found.
- **Recurrence:** one issue, one reporter. No independent matching operator report found.
- **Buyer:** likely a Morpho bot operator / liquidation infrastructure owner, but not validated.
- **Existing solution:** the same repository already has a wall-clock-to-block conversion helper and uses it in another bot. This is an upstream code-level correction.
- **Productability:** none established.

**Status: WATCH as a technical problem; not a product candidate.** The right next check is whether Blue adopts the existing `blocksFor()` pattern and whether independent operators report measurable consequences.

## 2. Provider-dependent `eth_getLogs` range failures

This is a stronger recurrence signal than a single issue, but still not a product opportunity.

### Independent primary reports

- [OffchainLabs/arbitrum-sdk #609](https://github.com/OffchainLabs/arbitrum-sdk/issues/609), opened by `ColourfulMelon` on 11 August 2025: `getFirstExecutableBlock` fails when an RPC endpoint refuses a range above 10,000 blocks. The reporter explicitly asks for a configurable maximum polling range because provider limits vary.
- [OffchainLabs/arbitrum-chain-sdk #642](https://github.com/OffchainLabs/arbitrum-chain-sdk/issues/642), opened by `antonio-altr` on 12 February 2026: `upgradeExecutorFetchPrivilegedAccounts` fails on many RPC endpoints with a range-too-large error (including Arbitrum Sepolia) and asks for smaller query windows. This reporter also opened other SDK requests, so those issues are not independent evidence from that same person.
- [OffchainLabs/nitro #4736](https://github.com/OffchainLabs/nitro/issues/4736) includes a second account's report of range refusal and 429s on the same Orbit chain's public endpoint. This corroborates friction on that endpoint, not a separate chain/operator deployment.

The SDK issues are open and have no substantive comment discussion at review. The reports come from different dates and at least two distinct reporters; the Nitro thread adds another account but shares one chain/endpoint.

### Upstream status and alternatives

[OffchainLabs/go-ethereum PR #668](https://github.com/OffchainLabs/go-ethereum/pull/668) remains open and unmerged at review. It adds a configurable server-side `--execution.rpc.filter-range-limit` to cap a single query's range. It does not implement automatic client-side pagination in the SDK helpers.

The straightforward developer workaround is bounded, adaptive range splitting with retry/backoff. Indexing systems and subgraph providers are also substitutes for applications that need ongoing event ingestion. No evidence shows operators paying for a separate Arbitrum-specific log-range adapter, nor that existing indexing products fail a critical workflow.

### Assessment

- **Pain:** repeated integration failures when SDK helpers assume a provider accepts a large log range.
- **Recurrence:** moderate technical evidence across distinct reporters and contexts, though one issue is an endpoint-specific comment.
- **Buyer:** not identified. The reporter roles are developers integrating SDK helpers.
- **Workaround:** chunk ranges, reduce polling windows, or use an indexing provider.
- **Productability:** low; likely SDK ergonomics or application integration code, with crowded alternatives.

**Status: WATCH as a recurring developer-friction pattern; not a candidate.** Reopen only if a concrete Orbit operator workflow remains broken after adaptive pagination and existing indexing options are considered.

## 3. Other new Nitro and SDK leads

### Nitro toolchain support — #4784

[OffchainLabs/nitro #4784](https://github.com/OffchainLabs/nitro/issues/4784) reports that Nitro v3.12.2 and master still pin Go 1.25.12 even though the reporter considers Go 1.25 outside the supported security window. The author reports that a Go 1.27.3 build compiled and started successfully, but explicitly did not run the test suite or sync a chain. The issue is open, has one reporter and no comments. This is an upstream maintenance issue, not a product gap.

### Nitro Stylus tracing — #4771

[OffchainLabs/nitro #4771](https://github.com/OffchainLabs/nitro/issues/4771) reports that `prestateTracer` attributes Stylus and certain ArbOS storage writes to the caller rather than the executing contract. The author provides specific block/transaction examples and compares against a custom tracer. A maintainer says an internal issue was created, but no independent operator report or buyer workflow is established. Treat as an upstream tracing correctness issue.

### Arbitrum SDK dependency packaging — #657

[OffchainLabs/arbitrum-sdk #657](https://github.com/OffchainLabs/arbitrum-sdk/issues/657) reports undeclared runtime `@ethersproject/*` dependencies that break installation/import under Yarn Plug'n'Play and non-hoisted pnpm/npm layouts. The issue is open, has one reporter and no comments. This is a concrete packaging bug with a direct dependency-manifest fix, not a standalone product opportunity.

### Orbit setup-script reports — #68 and #69

[Issue #68](https://github.com/OffchainLabs/orbit-setup-script/issues/68) (March 2024) and [issue #69](https://github.com/OffchainLabs/orbit-setup-script/issues/69) (March 2024) report failures in the old Orbit setup script. The latter has two replies suggesting Node 20.11.1 and a different RPC provider. These are old, isolated setup incidents and do not establish a current recurring Orbit deployment problem. Do not elevate them without fresh reports against current tooling.

## 4. Morpho liquidation data and keeper signals

- [Morpho liquidation bot #118](https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/118) describes one operator's 20-minute scanner over 2,586 borrowers in 212 Base markets and asks whether other liquidators want a webhook/data API. No independent buyer demand or subscription commitment appears in the thread.
- [Issue #121](https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/121) asks which send-time input most often blocks a production liquidation loop. It is an exploratory question by a different research account, not evidence of a confirmed missing data source.
- [Strike keeper issue #75](https://github.com/Prashant-thakur77/Strike/issues/75) has 289 comments, but every comment is from the same `github-actions[bot]` and repeats an automated testnet keeper failure template. This is repeated failure telemetry from one project, not 289 independent operators or customer reports.

These are useful prompts for operator discovery, but none establishes a buyer or a sufficiently specific unserved workflow.

## 5. Aave and GMX check

The bounded open-issue search in Aave and GMX surfaced isolated API, oracle, deployment, and security reports, not a repeated operational workflow with independent customers. The GMX issues #320–#323 are separate security submissions, not recurring buyer complaints. No new candidate is promoted from this pass.

## 6. Official coverage and competition

Arbitrum's [official chain monitoring guide](https://developer.arbitrum.io/launch-arbitrum-chain/operate/monitoring) already describes monitoring for sequencer, batch poster, validator, chain fees, retryables, ArbOS version, and node sync against an independent reference RPC. Its [sequencer outage guide](https://docs.arbitrum.io/launch-arbitrum-chain/chain-config/sequencer/sequencer-outages) documents failure modes and recovery paths.

This reinforces the existing decision not to pursue a generic Orbit/Nitro monitoring dashboard or RPC-provider ranking. Any future operator product would need to solve a specific workflow that remains unserved after official monitors, upstream fixes, provider controls, and indexing services.

## 7. Decisions and next checks

1. Keep Nitro #4733 as the strongest problem lead, still WATCH and still unconfirmed by an independent operator.
2. Keep Morpho Blue #4 as a technical WATCH item only. Correct the 9x claim to a modelled ~1.68x comparison using the current repository's own block-time table; the natural remedy is code-level use of `blocksFor()`.
3. Track the `eth_getLogs` range-friction cluster, but do not turn it into a generic RPC service. Verify whether SDK helpers adopt adaptive chunking and whether a concrete Orbit operator still has an unmet workflow.
4. Treat #4784, #4771, #657, #68, and #69 as isolated upstream/tooling fixes, not product opportunities.
5. Do not infer demand from one scanner author, automated CI comments, or repeated issues by the same reporter.
6. Continue searching for independent Orbit/RaaS operator reports and named budget owners. No implementation until the GO criteria in `TASKS.md` are met.

**Final status: no GO; no product selection; no development.**
