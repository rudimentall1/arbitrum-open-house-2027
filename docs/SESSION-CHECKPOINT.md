# Session checkpoint — 26 November 2026 (continued)

## Completed
- Repeated the mandatory repository ritual: read AGENTS, PROJECT_CONTEXT, TASKS, DECISIONS, README, checkpoint, RESEARCH_LOG, and WINNER_MAP. Checked remote branch, commits, and PRs; `main` only, no open PRs. No local checkout/status is available.
- Reviewed additional independent technical indexer reports: Ergo #2600, Ponder #1008, and The Graph Q3 incident summary.
- Recorded findings and evidence limits in a new research note; updated task queue, project context, decisions, research log, and README references.
- No application/architecture changes; product status remains WATCH, no GO.

## Files changed
- `research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md` — new incident and substitute review.
- `TASKS.md` — marks incident review done; keeps qualified hosted operator/cost evidence task open.
- `PROJECT_CONTEXT.md` — adds incident signals and research-note pointer.
- `RESEARCH_LOG.md` — appends follow-up evidence.
- `DECISIONS.md` — adds D-019, evidence boundary.
- `README.md` — adds research-note pointer.
- `docs/SESSION-CHECKPOINT.md` — this updated handoff.

## Findings
- Ergo #2600: about 285 blocks behind at discovery; downstream tx rejection; restart recovered within minutes. Open issue, one reporter, no labor/spend/WTP.
- Ponder #1008: older RPC-failure missing-block incident; database pruning + restart recovered; not new buyer evidence.
- The Graph Q3: ~3-hour gateway outage and later 49/303 allocation impact; adjacent dependency outage, not canonical event completeness loss.
- Substitutes are concrete: Ekubo event-gap audit/backfill/monitoring, DALP checkpoint/backfill/reindex workflows, Envio fallback verification. No standalone product gap established.

## Tests/checks
- No tests, lint, or build run: research-only changes; no local runtime/checkout.
- GitHub remote files were updated successfully through the repository connector. No local working-tree status can be checked.

## Remaining work
- Named Blockscout/Robinhood data-platform owner interview and quantify detection/backfill labor/cost.
- Find a qualified independent hosted explorer/indexer incident with explicit gap and recovery cost; Ergo/Ponder/The Graph do not qualify yet.
- Verify completeness guarantees/substitute workflows in current Blockscout, SQD/HyperSync, Alchemy, Ekubo, DALP, and Envio.
- Continue independent RPC cost and fast-L2 correctness evidence; keep all leads WATCH. No implementation until buyer evidence.

## Git
- Branch: `main`.
- HEAD before this checkpoint update: `62f106e2937ec489ab789a4972a87fee1f8aa1de`.
- Commits made in this session: research note, context, tasks, research log, D-019, README (remote connector commits).
- Open PRs: 0; local status unavailable.

## Exact next step
Investigate Ekubo's gap-audit/backfill/monitoring implementation and current DALP/indexer completeness guarantees as substitutes; then search for a named independent hosted explorer operator with quantified recovery labor/cost.
