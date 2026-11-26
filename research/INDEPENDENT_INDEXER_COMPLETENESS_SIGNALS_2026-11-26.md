# Independent indexer completeness signals — 26 November 2026

## Conclusion

The search found **two additional independent technical incident reports** with missing or stalled indexer state. They broaden the evidence beyond Blockscout, but neither proves a hosted explorer buyer or quantified recovery cost. Keep the hosted-indexer completeness hypothesis at WATCH.

## 1) Ergo ExtraIndexer — current, open incident

Source: [ergoplatform/ergo #2600](https://github.com/ergoplatform/ergo/issues/2600), opened 29 Sep 2026.

- Operator reported on Ergo mainnet, node 6.1.6 (RocksDB), that indexed height stopped progressing while full height continued; at discovery the gap was approximately 285 blocks.
- The report describes a failed block database read followed by a header/tip mismatch; subsequent catch-up was deferred repeatedly.
- Restarting the node resumed indexing and caught up within minutes.
- The downstream oracle-core client then produced transactions with inputs missing from the UTXO set; those transactions were rejected. The client recovered after restart.
- The issue is open. The report is a single operator, not independent recurrence.
- Recovery was a restart and catch-up measured in minutes. No engineering-hours, revenue loss, or WTP is disclosed.

Assessment: independent correctness/liveness signal, but not a hosted explorer incident, not quantified recovery labor, and likely a node/indexer implementation fix.

## 2) Ponder — older independent RPC-failure gap

Source: [ponder-sh/ponder #1008](https://github.com/ponder-sh/ponder/issues/1008), opened 31 Jul 2024, closed.

- An operator using an RPC load balancer reported that blocks were missing in the index after RPC failure at specific heights and switching to a healthy RPC endpoint.
- The gap persisted without database pruning.
- Pruning the database and restarting recovered the missing blocks.
- The report also says the load balancer did not appear to switch endpoint for the failed request.
- No gap size, time spent, engineering labor, or business impact was quantified.
- This is historical and belongs to the Ponder operator cluster, not a new hosted explorer buyer. Ponder itself is already part of prior research.

Assessment: corroborates a known failure mode, but weak as a new independent customer signal and old enough that current-version relevance must be rechecked before counting it.

## 3) The Graph — infrastructure outage, not event-gap proof

Source: [Lodestar's Q3 2026 State of The Graph report](https://www.lodestar-dashboard.com/blog/state-of-the-graph-q3-2026).

- Report describes a malformed manifest causing the network subgraph to fail and the gateway outage to last about three hours.
- Five days later, it reports indexer receipts rejected on 49 of 303 allocations because indexer-service was still reading a local network subgraph frozen at the failure block.
- This is a network/infrastructure dependency outage and delayed recovery, not evidence of canonical event omission or quantified backfill labor.
- The source is an independent ecosystem report, but its author disclosed that they operate related services and office-hours/community activity.

Assessment: adjacent operational reliability signal; do not classify as a clean completeness incident.

## 4) Existing completeness and recovery substitutes

- SettleMint DALP documentation explicitly exposes checkpoint/block lag, contract backfill state, reindex deployment state, and safe replacement of a served read model while rebuilding. This is product documentation, not proof of customer adoption or an independent guarantee.
- Ekubo's public indexer repo describes event-gap auditing, block backfill scripts, and a recent-history monitor with webhook alerts. This is a concrete open-source substitute for an event-gap workflow; it narrows potential differentiation.
- Envio's silent-event report describes an RPC fallback integrity problem and planned cross-checking against HyperSync. This remains a strong technical explanation but is already included in prior Envio evidence.
- Blockscout cluster remains one hosted operator cluster; its reviewed incidents were backfilled/resolved.

## Evidence table

| Signal | Independent operator? | Gap / impact measured | Recovery | Cost / buyer evidence | Status |
|---|---|---|---|---|---|
| Ergo #2600 | Yes, distinct from Blockscout | ~285 blocks behind at discovery; downstream rejected txs | Restart, caught up within minutes | No cost/WTP | Open |
| Ponder #1008 | Separate operator report, but same Ponder framework cluster | Gap exists; size not disclosed | DB pruning + restart | No cost/WTP | Closed, 2024 |
| The Graph gateway | Separate infrastructure cluster | ~3h outage; 49/303 allocations affected 5 days later | Network subgraph dependency repair | No customer cost quantified | Secondary report |
| Blockscout | One vendor/operator cluster | ~7,704 Robinhood blocks; thousands Base blocks; false-green status | Maintainer backfills/resolution | No engineering-hours/spend/WTP | Reviewed/resolved |

## Decision

This is **more evidence for a recurring technical class**, not yet evidence for a product:

- Not two independent hosted explorer buyers with explicit recovery cost.
- No quantified engineering-hours or budget owner.
- Existing indexer-native monitoring, backfill, auditing, and reindex workflows exist.
- A standalone completeness auditor would need to prove cross-framework coverage, actionable recovery, and value beyond native tooling.

## Next targeted tasks

1. Identify named owner at Blockscout/Robinhood and quantify detection/backfill engineering time.
2. Find a hosted explorer/indexer operator report with reproducible missing ranges and recovery cost (Ergo/Ponder/The Graph are not yet qualifying evidence).
3. Inspect Ekubo's gap audit/monitoring workflow and current DALP/EVM offerings as substitutes.
4. Validate whether operators will pay for an independent audit or whether they prefer built-in indexer checks.
