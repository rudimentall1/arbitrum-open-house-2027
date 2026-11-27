# Arbitrum Open House 2027 — Buildathon Lab

Repository for evidence-based preparation and research for Arbitrum Open House São Paulo 2027.

## Start here

1. Read `AGENTS.md`.
2. Read `PROJECT_CONTEXT.md`.
3. Read `DECISIONS.md`, `RESEARCH_LOG.md`, `HISTORY_RECONSTRUCTION.md`, and `WINNER_MAP.md`.
4. Read `research/ISSUE_RESEARCH_2026-11-26.md` for the current issue-driven findings.
5. Check `TASKS.md` before starting new research.
6. Read `research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md` for the Morpho, SDK, and Nitro follow-up.
7. Read `research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md` for the current multi-operator indexer RPC cost/reliability assessment.
8. Read `research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md` for current Ponder, Nuthatch, rindexer, Envio, and fast-L2 correctness findings.
9. Read `research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md` for RAILGUN/Squid event omissions, PPOI divergence, and Allium Robinhood ingestion incidents.
10. Read `research/BLOCKSCOUT_ROBINHOOD_INDEXER_OPERATIONS_2026-11-26.md` for Blockscout hosted-explorer scaling, missing-block gaps, API lag, and remediation status. 
11. Read `research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md` for additional Ergo/Ponder incident evidence and completeness-audit substitutes.
12. Read `research/FLOP_HOSTED_INDEXER_INCIDENT_2026-11-26.md` for the independent hosted Flop Labs backlog/recurrence and Ekubo/DALP substitute review.
13. Read `research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md` for the current Blockscout/SQD/Envio/Alchemy comparison and narrowed WATCH hypothesis.

## Current state

No project has GO status. The active phase is issue-driven discovery from primary GitHub Issues/Discussions. GapGuard remains WATCH only; previously rejected directions stay closed absent new evidence. Verigate is explicitly excluded. RWA Servicing Copilot is historical repository research, not an active candidate.

## Repository contents

This repository contains research documentation plus a minimal Node.js project scaffold. `src/` and `tests/` are placeholders only: no product implementation or application tests exist yet. `npm test` invokes Node's built-in test runner, but no test suite has been added.

```text
AGENTS.md
PROJECT_CONTEXT.md
TASKS.md
DECISIONS.md
RESEARCH_LOG.md
HISTORY_RECONSTRUCTION.md
WINNER_MAP.md
package.json
.gitignore
src/README.md
tests/README.md
research/ISSUE_RESEARCH_2026-11-26.md
research/ISSUE_RESEARCH_2026-11-27.md
research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md
research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md
research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md
research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md
research/BLOCKSCOUT_ROBINHOOD_INDEXER_OPERATIONS_2026-11-26.md
README.md
```

## Working agreement

Keep evidence, decisions, historical context, and task status current. Distinguish verified facts from archived claims and hypotheses. Do not claim tests, deployments, customers, or product demand without fresh verification.


- [27 Nov issue-driven follow-up](research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md) — Nuthatch current cost baseline, Morpho borrower-feed demand check, SDK cache OOM, Nitro #4770 false-positive recheck, and Aave v3.7 sentinel removal.
