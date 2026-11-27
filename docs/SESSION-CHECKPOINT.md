# Session checkpoint — 27 November 2026

## Completed

- Re-read AGENTS, PROJECT_CONTEXT, TASKS, DECISIONS, README, latest checkpoint, RESEARCH_LOG, and WINNER_MAP before continuing.
- Inspected repository root and docs/research/src/tests directories. Source and test folders remain placeholders.
- Remote GitHub branch: main only. Open PRs: 0. Local checkout/status remains unavailable.
- Rechecked Nuthatch current cost documentation against release 5.17.0.
- Reviewed Morpho Blue borrower-feed issue #118 and existing Morpho API / Envio HyperIndex provider alternatives.
- Reviewed Morpho viem-dlc #1 cache OOM report and maintainer's mitigation path.
- Rechecked Nitro #4770 comments and time-aligned snapshots; classified as not a bug, not a second confirmed outage.
- Reviewed current official Arbitrum HA sequencer and sequencer troubleshooting documentation.
- Added research report: research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md.
- Updated TASKS, PROJECT_CONTEXT, DECISIONS (D-022), RESEARCH_LOG, README, and this checkpoint.

## Findings

- Nuthatch 5.17.0 defaults to a five-minute poll interval. The ~$185/month / ~9,900 CU/min Arbitrum figure applies to a historical every-block configuration. The vendor's own measurements are not independent customer WTP.
- Morpho #118 is one operator's supply-side offer for a 20-minute Base borrower feed; no subscriber, payment, or pilot evidence. Existing Morpho API and hosted Envio HyperIndex paths are documented substitutes. Generic feed is not promoted.
- Morpho viem-dlc #1 is a library-specific historical cache OOM issue with a maintainer mitigation path, not a product candidate.
- Nitro #4770 was closed as not a bug after time-aligned snapshots showed inbox and execution progress. It does not independently confirm #4733.
- Official Arbitrum docs cover generic HA sequencer architecture, chosen-sequencer health checks, feed and sequencer troubleshooting. #4733 remains one operator's source-level correctness report.
- No new product GO; product selection remains undecided; implementation not started.

## Current status

- Indexer RPC cost/reliability: WATCH only.
- Hosted indexer completeness / neutral cross-provider evidence: WATCH only; buyer and recovery-cost evidence missing.
- Nitro HA false-ready #4733: WATCH; one operator, no independent matching recurrence established.
- Morpho borrower alert feed: not promoted; generic feed lacks demand evidence and competes with existing API/indexer paths.
- Verigate remains excluded.
- No product selected and no development authorized.

## Remaining priorities

1. Find an independent Morpho/Aave liquidation operator who can identify a missing send-time input, quantify missed opportunities or infrastructure cost, and agree to a bounded test.
2. Find a hosted-indexer owner who quantifies detection/backfill labor, spend, SLA/customer impact, recurrence, and reconciliation automation.
3. Recheck Nitro #4733 only for independent matching operator reports or a confirmed upstream source fix.
4. Continue issue-driven discovery across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure. Filter spam/security-report noise and do not count isolated framework bugs as buyer evidence.

## Evidence boundary

- Public GitHub issues and vendor documentation are not customer interviews.
- Maintainer-owned benchmark data is not independent buyer evidence.
- A supply-side offer asking whether a service is useful is not proof of demand.
- Technical severity does not prove a standalone product gap or willingness to pay.

## Checks

- Research and documentation only.
- No application tests, lint, or build run; no application code changed.
- Documentation was written directly to remote GitHub main using sequential file updates.
- Local git status cannot be verified in this session.

## Git

- Branch: main.
- Open PRs: 0.
- Prior remote HEAD before this follow-up: 56d82278a071e2a3d003889108383c984cd81a35.
- Current remote HEAD will be verified after all updates.

## Exact next step

Continue searching for an independent liquidation operator with a quantified send-time data gap, and a hosted-indexer owner with quantified recovery cost. Do not build until a named buyer and differentiated recurring workflow are validated.
