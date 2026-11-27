# Follow-up research: RPC economics, Morpho liquidation data, and Nitro false-ready checks

Research date: 27 November 2026.

## Executive result

No new GO candidate. This pass produced three useful corrections:

1. Nuthatch's earlier public ~$185/month Arbitrum figure is explicitly a historical every-block polling configuration, not its current default. Nuthatch 5.17.0 (checked 4 Nov 2026) defaults to a five-minute poll interval and reports roughly 100 CU/min for the same example nest at that setting. The current cost is workload/freshness dependent.
2. A Morpho Blue operator publicly offered a 20-minute borrower-health feed covering 2,586 Base borrowers across 212 markets, but the post asks whether anyone wants it; it does not show a subscriber, customer, payment, or willingness to pay. The Morpho liquidation bot already supports Morpho API and hosted Envio HyperIndex data providers.
3. A fresh Nitro Robinhood "stuck batch" report (#4770) was closed as not a bug after time-aligned progress snapshots showed the node fully executing its inbox. Do not count the original warning as an additional confirmed outage or independent recurrence.

The existing WATCH leads remain WATCH. No product selected; no implementation.

## 1. Nuthatch: correct the current RPC cost baseline

Primary source: https://nuthatch-indexer.com/docs/operate/costs

The current operator cost page says it was checked against Nuthatch 5.17.0 on 4 November 2026.

### Current facts from the maintainer's documentation

- Since Nuthatch 4.15.2, an unset `--poll-interval` defaults to five minutes (or the chain block time if longer); a new row may therefore take up to five minutes to appear.
- Operators can choose a shorter interval, such as two seconds, to buy fresher data at the cost of more RPC requests.
- The current docs say the same example Arbitrum nest spends on the order of 100 CU/min at the five-minute default.
- The often-quoted ~9,900 CU/min / ~$185 per month figure is for a nest polling every block, measured against a paid endpoint on 6 September 2026. The docs explicitly say this is not the current default.
- The earlier ~$93/month calculation is retained as a historical model and is explicitly marked as a model the current software no longer follows.
- The page describes an earlier 7x amplification experiment: 12 logical indexer calls became 84 HTTP requests when 429 responses triggered retries across a three-endpoint pool. This is a bounded replay experiment, not a general multiplier.
- The reference deployment's 11.8M requests/week against ~100 HTTP requests served is the maintainer's own four-nest deployment, not a customer benchmark. A temporary nest used 2.8M requests in five days and was stopped after the audit.

### Interpretation

This is unusually transparent operator-cost evidence and confirms that freshness-versus-RPC-spend is a real engineering tradeoff. But it is not evidence of a separate product buyer:
- the maintainer has already shipped configurable polling/finality controls;
- current metrics expose per-method RPC counts;
- the old ~$185/month number must not be presented as a current baseline;
- the measurements are from the vendor/maintainer's own reference setup, not independent paying customers.

**Assessment:** retain indexer RPC economics at WATCH. No generic RPC cost optimizer or dashboard.

## 2. Morpho Blue: borrower health feed offer is supply-side, not demand proof

Primary issue: https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/118

A user posted on 19 July 2026 that they had run a scanner for several weeks across:
- 2,586 Morpho Blue borrowers;
- 212 active markets;
- Base only;
- a 20-minute refresh cadence.

They offered to share the output through a webhook or data API and explicitly asked whether liquidation operators would find it useful. The issue had one subsequent comment in the reviewed thread, asking what gap the scanner addresses and what freshness/fields another operator would trust. No subscriber, paid trial, customer commitment, or response demonstrating demand was found in the reviewed material. A similar offer appears in the author's own Liquidator-Morpho repository, so it is the same supply-side signal, not an independent second operator.

### Existing alternatives

The Morpho Blue liquidation bot's data-provider documentation describes:
- `morphoApi`: queries the Morpho API for liquidatable positions with pagination, reads vault markets on-chain, and requires no infrastructure; it does not support pre-liquidations.
- `hyperIndex`: queries an Envio HyperIndex, supports liquidations and pre-liquidations, and reads oracle prices on-chain. The README recommends hosted Envio deployment because it handles backfill and avoids local infrastructure.

Source: https://github.com/morpho-org/morpho-blue-liquidation-bot/blob/main/apps/data-providers/README.md

The repository page reports that the Morpho liquidation-bot repository was archived on 10 September 2026. Treat its provider README as evidence of available architecture/substitutes, not proof of an actively maintained product today.

A separate Morpho issue in the same archived repository asks which external input blocks an every-block liquidation loop, but no operator response is recorded. That is an unanswered discovery question, not demand evidence.

### Product assessment

A 20-minute alert feed may help broad borrower discovery, but it is not obviously sufficient for send-time liquidation execution, where position health, oracle state, executable liquidity, and transaction conflicts can change between scans. Morpho API and hosted HyperIndex already cover much of baseline candidate discovery.

**Assessment:** do not promote a generic Morpho borrower scanner/feed. Keep the narrow question open only if an independent liquidator identifies a recurring gap in coverage/freshness that current API/indexer paths do not solve and commits to test or pay.

## 3. Morpho SDK cache OOM: real technical issue, narrow ownership

Primary issue: https://github.com/morpho-org/viem-dlc/issues/1

A Morpho SDK issue describes an Arbitrum historical indexing workload over roughly 100M–140M blocks that reached out-of-memory failure. Follow-up analysis identified the main cause as ShardedCache storing thousands of bins in one grouped JSON value, causing read/parse/re-serialize cycles. The maintainer estimated transient allocations above 1 GB per operation and up to 8 GB peak with concurrent filters.

The issue was closed on 14 September 2026. The maintainer said MemoryStore had been deprecated in favor of LruStore, which partially addresses the problem, and that removing ShardedCache was already a pending task.

**Assessment:** credible technical friction for a specific SDK/cache implementation, not evidence of a cross-customer product opportunity. The natural fix is inside the library.

## 4. Nitro #4770: do not count a false-positive stuck-batch report as an outage

Primary issue: https://github.com/OffchainLabs/nitro/issues/4770

The reporter initially described a Robinhood Chain Nitro node as stuck on BoLD message "required batch not yet in the inbox tracker: batch 305465". The maintainer clarified that the line is INFO-level BoLD watchtower output and is not, by itself, proof of execution stall.

The reporter later supplied two time-aligned snapshots on 21 October:
- execution head advanced by 1,500 blocks in 3m05s;
- InboxTracker advanced six batches / 1,500 messages;
- both snapshots had `eth_syncing=false`;
- the node's execution head was `messageCount - 1`, meaning it had executed all messages then present in its inbox.

The maintainer closed the issue as not a bug and said the blob errors pointed to an unreliable beacon endpoint but did not stop sync.

One earlier observation had the local node about 173 blocks behind a public RPC while reporting `eth_syncing=false`, but it was not a time-aligned comparison and later progress snapshots did not establish a persistent sync failure. Do not treat it as independent confirmation of Nitro #4733's warm-database false-ready mechanism.

**Assessment:** counterevidence against interpreting the warning as a second confirmed outage. #4733 remains one detailed operator report, not a repeated multi-customer failure.

## 5. Official Nitro operations guidance and substitute boundary

Current Arbitrum documentation now has:
- a production high-availability sequencer architecture with multiple sequencers, Redis coordination, sequencer relays, external relays, and batch poster;
- a chosen-sequencer health endpoint returning 200 for the chosen sequencer and 503 otherwise;
- detailed troubleshooting for feed stalls, broadcast backlog, sequencer lockout, and block-production halts.

Sources:
- https://developer.arbitrum.io/launch-arbitrum-chain/run-a-node/high-availability-sequencer
- https://developer.arbitrum.io/launch-arbitrum-chain/operate/sequencer-troubleshooting

These guides are strong substitutes for generic HA setup and operational runbooks. They do not, based on the reviewed pages, establish that the specific #4733 local-head provenance bug is fixed; keep the upstream correctness issue separate from the generic monitoring category.

## Updated evidence ledger

| Lead | New evidence | Buyer / WTP | Status |
|---|---|---|---|
| Indexer RPC cost | Current Nuthatch default and cost metrics corrected; historical high-cost mode remains configurable | No independent buyer commitment | WATCH |
| Hosted indexer completeness | No new independent hosted operator with quantified recovery cost | No | WATCH |
| Morpho borrower alert feed | One operator offering 20-minute Base feed; no subscriber evidence; native API/HyperIndex substitutes | No | Do not promote |
| Nitro HA false-ready | #4770 is a false-positive warning report, not another confirmed outage | #4733 still one operator | WATCH |
| SDK historical cache OOM | One Morpho SDK implementation; maintainer-level fix path | No | Technical only |

## Next research questions

1. Find an independent Morpho/Aave liquidation operator who can name a missing send-time input, quantify missed opportunities or infrastructure cost, and agree to test a bounded feed.
2. Find an independent hosted-indexer owner who quantifies detection/backfill labor, spend, SLA/customer impact, and current reconciliation automation.
3. Recheck Nitro #4733 only for independent matching operator reports or an upstream fix; do not broaden into generic monitoring.
4. Continue issue-driven discovery across Arbitrum SDK/Nitro/Orbit and adjacent protocol repositories, but reject spam/security-report noise and framework-specific bugs without a buyer.

## Decision

No new product GO. No implementation. Existing research remains focused on finding a named buyer and a recurring workflow that existing provider/indexer tools do not already solve.


## 6. Aave #926: historical sentinel false-positive issue is obsolete on upgraded v3.7 Arbitrum

Primary historical issue: https://github.com/aave/aave-v3-core/issues/926

The November 2023 issue reports that `PriceOracleSentinel` used Chainlink's `lastUpdateTimestamp` rather than `startedAt`, which could cause borrowing and liquidations to be blocked for about an hour during a routine daily feed heartbeat even when the sequencer was healthy. The issue remains open in the legacy `aave-v3-core` repository with no comments; its open state is not evidence that the problem remains active in current deployments.

### Current upstream resolution

- Aave v3.7 removes `PriceOracleSentinel` and `SequencerOracle` from the Pool borrow/liquidation validation path entirely. The v3.7 migration notes explain that inconsistent sequencer uptime signals across L2s caused false positives, including blocked liquidations and unnecessary borrow downtime.
- Aave governance proposal 473 upgraded a first set of deployments to v3.7 and explicitly removed configured sentinels.
- Governance proposal 489, **Upgrade Aave instances to v3.7 Part 2**, was executed on 28 May 2026 and includes Arbitrum among the networks upgraded. Its payload also unsets any configured sentinel before updating the Pool and PoolConfigurator implementations.
- Current Aave documentation states that since v3.7 the Pool no longer reads the sentinel address; the stored getter/setter is inert for borrow/liquidation gating.

Sources:
- https://github.com/aave-dao/aave-v3-origin/blob/main/docs/3.7/sentinel-removal.md
- https://app.aave.com/governance/v3/proposal/?proposalId=473
- https://app.kvorum.watch/daos/aave/proposals/aave_governance_v3/489
- https://aave.com/docs/aave-v3/smart-contracts/pool-addresses-provider

### Assessment

This is a historical, technically credible failure mode with a protocol-level resolution already deployed to Arbitrum. It is not a live product gap for upgraded Aave v3.7 markets. Older forks or deployments that remain on v3.6 may differ, but no evidence of a current affected buyer was found.

**Status: closed as an opportunity for current Arbitrum Aave v3.7.** Do not build a sentinel monitor or alerting product around issue #926.
