# Independent hosted indexer incident — FLOP Devnet explorer/faucet (26 November 2026)

## Summary

Flop Labs' hosted Devnet explorer/indexer and faucet dependency is a newly reviewed, independent hosted-service incident cluster. Public reports document a sustained indexing backlog, user onboarding/faucet grants blocked, and recurring readiness failures. This strengthens the technical/operator evidence beyond Blockscout, but it **does not quantify engineer-hours, infrastructure spend, SLA cost, or willingness to pay**. Keep the product hypothesis WATCH only.

## Primary reports

- https://github.com/flop-labs/network/issues/8 — initial Oct 30 stale-indexer 503 and follow-ups.
- https://github.com/flop-labs/network/issues/339 — recurring stale-indexer episodes and measured lag.
- https://github.com/flop-labs/network/issues/375 — sponsorship readiness dependency, separate from indexing symptoms.

## Evidence

### Initial sustained backlog (Oct 30–Nov 3)

- Oct 30: faucet grants and agent credential onboarding failed with HTTP 503 while faucet health/RPC remained connected and the chain continued producing blocks. The report persisted for at least six hours.
- Oct 31: explorer health showed ~61,574 blocks behind (~17 hours at the reported ~1-second block cadence). A later sample estimated ~70,732 blocks lag and a rate slightly below chain production, meaning the backlog was increasing rather than closing.
- Nov 1–2: after an indexer image update, reported lag began shrinking. Samples moved from ~80,520 lag to ~48,992; the reporter's estimated catch-up time was ~40 hours, explicitly an extrapolation, not a confirmed ETA.
- Nov 3: a follow-up said the lag had cleared, but the exact recovery crossing time was not established. A later health endpoint exposed indexed head, chain head, lag, and timestamps, improving observability.

### Recurrence after closure

- The scoped #8 issue was closed Nov 11 after health endpoints showed the indexer near head.
- #339 reports eight readiness/stale-indexer windows across Nov 16–17, lasting roughly 5–60 minutes each; some samples showed 155–354 blocks of lag and a growing backlog. A verified faucet grant was refused during a stale window.
- Nov 22 read-only observation again reported indexer unavailable while signer/funding health remained otherwise available.
- Observers distinguish indexer symptoms from sponsorship timeouts, faucet caps, and unrelated readiness gates. Do not attribute every degraded state to indexer failure.

## Qualification and limits

| Dimension | Evidence |
|---|---|
| Independent operator | Flop Labs hosted Devnet explorer/faucet/indexer cluster, distinct from Blockscout |
| Reproducibility | Multiple public observations/reports, including recurrence after issue closure |
| Duration/backlog | At least 6-hour initial grant-blocking report; ~61k–71k blocks behind, estimated 17+ hours; catch-up estimate ~40 hours; later recurrence episodes 5–60 minutes |
| Business impact | Developer onboarding/grant workflow blocked; users could not distinguish indexer freshness from other outages |
| Recovery | Backlog improved following deployment; endpoint later exposed lag metrics. Exact time to full catch-up is not pinned |
| Cost/labor/WTP | Not disclosed; no named budget owner/interview or willingness-to-pay |
| Status | Technical incident and recurrence signal; not a qualified cost/buyer validation |

## Substitute review update

- Ekubo: public indexer repository has direct settled-range verification against RPC (verifyLogStream), read-only historical event-gap auditing (auditEventGaps), dry-run/apply backfill scripts with safeguards, and recent-history monitor/webhook alerting. This is a concrete substitute for the proposed gap-detection-and-repair workflow, not merely generic lag monitoring.
- SettleMint DALP: current docs expose chain/indexer health, lag/stall/finality, historical-sync and reindex state; troubleshoot transaction/checkpoint/contract-registration/backfill before rebuilding. Reindex can be controlled and served read models replaced while rebuilding. These are platform-native operational controls, not an external canonical-completeness guarantee.
- This review does not yet establish the current completeness guarantees of Blockscout, SQD/HyperSync, or Alchemy in full. Keep that comparison task open.

## Assessment

The hosted-indexer incident evidence now includes Blockscout and Flop Labs as separate operator clusters, plus technical corroboration from Ergo and Ponder. However, the exact gap-audit workflow is already implemented concretely by Ekubo and platform-native monitoring/reindexing is covered by DALP. No validated external buyer, quantified remediation labor/cost, or differentiated workflow is established.

**Decision: WATCH only. No product selection and no implementation.**

## Next validation

1. Find a named owner at Blockscout/Robinhood or Flop Labs and ask for engineer-hours, infrastructure cost, support impact, recurrence frequency, and existing reconciliation automation.
2. Complete the current Blockscout/SQD-HyperSync/Alchemy guarantee and substitute comparison.
3. Seek an operator whose incident includes measured recovery labor/spend or an explicit budget/commitment; lag duration alone is insufficient.
