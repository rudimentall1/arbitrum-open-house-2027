# Session checkpoint — 26 November 2026 (continued)

## Completed
- Repeated mandatory repo ritual: read AGENTS, PROJECT_CONTEXT, TASKS, DECISIONS, README, checkpoint, RESEARCH_LOG, and WINNER_MAP. Checked remote branch and open PRs: only main, 0 open PRs. No local checkout/status available.
- Reviewed Ekubo's event verification/audit/backfill/monitor implementation and current DALP health/checkpoint/backfill/reindex documentation.
- Identified Flop Labs hosted Devnet explorer/faucet #8/#339 as an independent hosted indexer incident cluster distinct from Blockscout: ~61k–71k block lag, at least six-hour grant/onboarding blockage, catch-up estimate ~40h after deployment (not confirmed ETA), and recurrent 5–60 minute windows.
- Recorded new report and updated research log, context, task queue, decision log, README, and checkpoint.
- Product remains WATCH, no GO; no implementation.

## Files changed
- research/FLOP_HOSTED_INDEXER_INCIDENT_2026-11-26.md — new Flop Labs incident and substitute review.
- TASKS.md — marks Flop incident-duration evidence and Ekubo/DALP substitute review complete; labor/spend/WTP task remains open.
- PROJECT_CONTEXT.md — updates current indexer evidence and pointers.
- DECISIONS.md — adds D-020, WATCH boundary.
- RESEARCH_LOG.md — appends new hosted operator evidence.
- README.md — adds report pointer.
- docs/SESSION-CHECKPOINT.md — this handoff.

## Evidence and limitations
- Flop Labs #8/#339: recurrent hosted indexer lag/readiness symptoms, measured block backlog and service interruption; no engineering labor, infra cost, SLA penalty or WTP.
- Ekubo has direct verification, audit, guarded backfill and monitoring. DALP has health/lag/checkpoint/backfill/reindex controls.
- Current completeness guarantees for Blockscout, SQD/HyperSync, and Alchemy are not yet fully compared.

## Checks
- Research/docs only; no tests, lint, build run.
- GitHub remote updated through connector. Local checkout/status unavailable.

## Remaining
- Interview named Blockscout/Robinhood or Flop Labs operator; quantify detection/backfill engineer-hours, infrastructure spend, support/SLA/customer impact, recurrence, and automation.
- Finish Blockscout/SQD-HyperSync/Alchemy completeness/substitute comparison.
- Seek explicit cost or buyer evidence beyond lag duration; keep product WATCH.
- Continue other indexer RPC cost and fast-L2 correctness research.

## Git state
- Branch: main. Open PRs: 0. Local status unavailable.
- This checkpoint was based on remote HEAD ab695029e9b72363ae210ee71f460086a95ea8e4 before sequential documentation commits.

## Exact next step
Complete the current Blockscout/SQD-HyperSync/Alchemy completeness comparison, then seek a named operator interview with quantified remediation labor/spend or explicit willingness-to-pay; no implementation before GO.
