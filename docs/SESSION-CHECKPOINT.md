# Session checkpoint — 26 November 2026 (continued)

## Completed
- Repeated repository ritual: read AGENTS, PROJECT_CONTEXT, TASKS, DECISIONS, README, checkpoint, RESEARCH_LOG, and WINNER_MAP; remote branch main only, 0 open PRs. No local checkout/status available.
- Completed current completeness-substitute comparison: Blockscout, SQD Portal, Envio HyperSync, Alchemy, Ekubo, DALP.
- Findings: SQD and Envio describe upstream root validation/source fallback; Blockscout documents catch-up/retry/repair but no universal public completeness SLA found; Alchemy diagnostics/subscriptions are not consumer indexer completeness proof; Ekubo/DALP provide gap repair and platform operations.
- Added research comparison and updated task queue, project context, decisions, log, README, checkpoint.
- WATCH only. Generic completeness auditor is crowded; narrowed remaining hypothesis to neutral cross-provider reconciliation/evidence if operator cost/buyer requirement is validated. No implementation.

## Files changed
- research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md — new vendor/substitute comparison.
- TASKS.md — marks comparison complete, keeps operator cost/WTP interviews open.
- PROJECT_CONTEXT.md — records substitute landscape and narrowed WATCH hypothesis.
- DECISIONS.md — adds D-021 narrowing candidate.
- RESEARCH_LOG.md — appends comparison conclusions.
- README.md — add research pointer.
- docs/SESSION-CHECKPOINT.md — handoff.

## Evidence boundary
- SQD Portal/Envio validation mechanisms are vendor documentation and claims; not universal guarantees across all chains, workloads, and datasets.
- Blockscout docs describe operational fetcher/catch-up/repair mechanisms; no universal completeness SLA or external reconciliation proof found in this reviewed scope.
- Alchemy's request diagnostics and subscriptions help diagnose and consume data but do not attest to completeness of the user's downstream database.
- No named buyer, remediation labor/spend, SLA cost, WTP, or pilot commitment.

## Checks
- Research/docs only. No tests, lint, build run.
- GitHub remote updated via connector. Local status unavailable.

## Remaining
- Interview a named Blockscout/Robinhood or Flop Labs owner and quantify detection/backfill labor, infra spend, support/customer/SLA impact, recurrence and automation.
- Ask SQD/Envio users whether root-validation/fallback reduced incidents or removed need for reconciliation.
- Continue independent Arbitrum/Orbit RPC amplification and fast-L2 correctness evidence.
- Keep WATCH; no product selection/implementation until buyer/problem/differentiation validated.

## Git
- Branch main, open PRs 0, local status unavailable.
- Previous known remote HEAD: de922532585e755e20ea89c685c5f98c88b870e3; docs updated sequentially after it.

## Exact next step
Interview/seek public quantified recovery-cost evidence from a named hosted indexer owner (Blockscout/Robinhood or Flop Labs), and validate whether upstream SQD/Envio guarantees remove the need for independent completeness reconciliation. Do not build before GO.
