# Completeness substitute comparison: Blockscout, SQD/HyperSync, Alchemy (26 November 2026)

## Executive summary

The candidate "independent hosted indexer completeness auditor" is increasingly crowded. SQD Portal and Envio HyperSync advertise upstream cryptographic/block-root validation and source fallback; Blockscout has robust catch-up/fetcher/retry operations but no public universal canonical-completeness SLA found; Alchemy is primarily RPC/data API, with WebSocket log subscriptions and request logs—not a turnkey cross-indexer completeness auditor.

This narrows the remaining product hypothesis to an independently operated, cross-provider reconciliation workflow with evidence and cost reduction that operators demonstrably cannot or will not implement internally. No buyer/WTP validated. WATCH only.

## Comparison

| Provider/tool | Public completeness/reliability mechanisms | Scope/limits from reviewed docs | Product-substitute strength |
|---|---|---|---|
| Blockscout self-hosted/hosted Explorer | Indexer fetchers and ETL, catch-up mode, buffering/batching, supervision, error handling/retries; specialized temporary workers for missing/incorrect data and re-fetch mismatch cases | Operational repair mechanisms are visible, but no universal canonical-completeness guarantee/SLA or external continuous reconciliation proof found in reviewed docs. Status such as indexing finished should not be treated as cryptographic proof of no interior gaps | Strong native operations/repair substitute; weaker external proof |
| SQD Portal (current data access product) | Vendor documents 6 validation checks; page describes multi-RPC verification, transaction-root reconstruction, log-bloom verification, receipt-root comparison, state-root validation, worker signatures. Claims validated blocks, replicated workers and retry of failed chunks via another worker | Vendor-published claims and independently benchmarked production workload are not universal guarantees for every chain/query. Scope chain-specific handling, finality, dataset start, worker coverage and failures; check API metadata/range coverage and keep pagination/stream continuation client-side | Very strong substitute for data integrity and upstream gap detection |
| Envio HyperSync | Whole-block ingestion; reconstruct transactions/receipts roots and verify against headers, parent-hash continuity, fallback/refetch from another source; clients retry and paginate | Envio's own architecture/docs. Protection is for faulty sources, not adversarial data; chain-specific root handling; client still must consume pages to range completion and handle chain-specific support | Very strong direct substitute for source completeness |
| Alchemy RPC + logs/subscriptions | eth_getLogs, WebSocket logs subscription (re-emits removed logs on reorg), Request Logs dashboard for requests/errors/durations, Notify/API monitoring, historical query APIs | Provider API does not itself verify the consumer's database/indexer coverage. WebSocket consumers need reconnect/cursor/reorg handling and must reconcile missed windows. Request Logs are diagnostics, not completeness proof. Dashboard logs have documented retention (up to 10 days) | Strong RPC/API/observability substitute; not an external completeness auditor |
| Ekubo public indexer scripts | Verify log stream directly against RPC; audit historical gaps; guarded dry-run/apply backfill; recent-history gap monitor/webhook | Repository-specific implementation; doesn't prove a hosted product buyer exists | Strong open-source workflow substitute |
| SettleMint DALP | Indexer health/lag/stall/checkpoint, historical sync, backfill, contract registration, controlled reindex and serving-read-model replacement | Platform operational workflow; not independent external canonical completeness proof | Strong managed-platform operations substitute |

## Sources reviewed

- Blockscout indexer README: https://github.com/blockscout/blockscout/blob/master/apps/indexer/README.md
- SQD Portal product and validation overview: https://sqd.dev/portal/
- SQD Portal current architecture/validation checks: https://sqd.dev/
- SQD Portal API/developer documentation: https://sqd.dev/developers/
- Envio HyperSync missing-events/root-validation explanation: https://dev.to/envio/nodes-silently-miss-events-1jk0
- Envio September 2026 update: https://docs.envio.dev/docs/HyperSync/hypersync-clients
- Alchemy Request Logs: https://www.alchemy.com/docs/alchemy-request-logs
- Alchemy log subscription API: https://www.alchemy.com/docs/reference/subscription-api
- Alchemy historical events/log API: https://www.alchemy.com/docs/how-to-get-on-chain-events
- Ekubo indexer: https://github.com/EkuboProtocol/indexer
- DALP monitoring: https://dalp-sepolia.settlemint.com/docs/developers/operations/blockchain-monitoring
- DALP indexer: https://dalp-sepolia.settlemint.com/docs/architects/data-availability/chain-indexer

## Assessment

1. Cross-provider proof-of-completeness is not an obvious empty market. SQD and Envio already validate data upstream using block/receipt roots, and SQD additionally describes multi-source validation/replication.
2. Blockscout's gap is more operational than cryptographic based on the docs reviewed: catch-up, specialized repair workers, retry and re-fetch; hosted incidents show operational gaps but not buyer cost.
3. Alchemy's logs/RPC tools are not complete-data attestations; they diagnose API calls and support subscriptions. A consumer still needs durable cursor/reconnect/reorg reconciliation.
4. Ekubo has a concrete open-source audit/backfill/monitor. DALP covers operational recovery inside its platform.
5. No evidence found yet that operators need to pay for a neutral third party to duplicate those checks. A possible remaining wedge is vendor-neutral proof and report across several indexer providers, with automated incident evidence and cost attribution, but that's a hypothesis—not a candidate GO.

Decision: keep hosted-indexer completeness WATCH; do not build. Prioritize interview evidence and quantify whether a cross-provider audit is a must-have and why existing native tooling is insufficient.

## Next validation

- Interview a named Blockscout/Flop Labs owner about detection and recovery workflow, labor/spend, support impact, and whether they compare sources or validate receipts/roots.
- Ask SQD/Envio users if built-in validation changed their incident frequency or removed a reconciliation need.
- Identify any paid/compliance/SLA requirement for neutral completeness evidence. If none, deprioritize.
