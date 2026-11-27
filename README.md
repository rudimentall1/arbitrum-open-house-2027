# Arbitrum Open House 2027 — Buildathon Lab

Research and product-discovery workspace for Arbitrum Open House São Paulo 2027.

## Current project state

**No product selected. No GO decision. No MVP or implementation authorized. RWA is the user's priority.**

- D-029 cross-border commodity collateral / warehouse-lien verification is the only current WATCH. It is RWA-adjacent asset-finance infrastructure, not a validated tokenised-RWA product.
- D-033 rejected generic tokenised-fund servicing, private-credit servicing, collateral monitoring/orchestration, and asset/NAV verification because existing institutional and specialist providers cover the obvious workflows.
- The D-033 collateral-realisability-under-stress question is a problem area only, not a candidate or WATCH.
- D-026 private-credit servicing and D-028 stablecoin payment operations remain NO-GO. D-030, D-031 and D-032 remain closed for their screened scopes.
- D-007/D-008 (issue-driven method and old GapGuard WATCH) and D-010–D-024 technical leads are historical research, not active product candidates after D-026.
- Verigate is explicitly excluded. The earlier generic RWA Servicing Copilot is not reopened.

## Read this first

1. AGENTS.md — mandatory project and engineering rules.
2. PROJECT_CONTEXT.md — canonical current state and architecture/research context.
3. DECISIONS.md — durable decisions and superseded hypotheses.
4. TASKS.md — the only active work queue.
5. docs/FINAL_PROJECT_REVIEW_2026-11-27.md — full repository audit and final conclusion.
6. RESEARCH_LOG.md and WINNER_MAP.md — consolidated evidence and hackathon context.
7. docs/SESSION-CHECKPOINT.md — latest handoff.

## Repository map

- AGENTS.md — working rules.
- PROJECT_CONTEXT.md — canonical project state.
- TASKS.md — active work queue and GO gate.
- DECISIONS.md — decision history D-001 onward.
- RESEARCH_LOG.md — consolidated historical and current research.
- HISTORY_RECONSTRUCTION.md — recovered earlier project history and evidence limits.
- WINNER_MAP.md — selected Arbitrum/Open House winner analysis.
- docs/FINAL_PROJECT_REVIEW_2026-11-27.md — repository-wide audit.
- docs/SESSION-CHECKPOINT.md — session handoff.
- research/ — 20 supporting research reports.
- package.json — minimal Node.js metadata; no runtime dependencies.
- src/README.md and tests/README.md — intentional placeholders.

## Current next step

Stop broad market scans. Validate D-029 with two independent commodity-finance lenders, collateral managers, warehouse operators or trade-finance operations/risk owners. Ask for real cross-border pledge conflicts or stock/release evidence failures after existing registries and controls, recurrence, measurable loss/delay, budget ownership and willingness to test a read-only workflow.

Only if a concrete buyer case emerges, test whether banks/CCPs have an unmet need to verify tokenised collateral realisability under stress. Do not build before the full GO gate is met.

## GO gate

- Named economic buyer and budget-owning role.
- Two independent buyer/operator confirmations of the same recurring pain.
- Redacted real incidents or workflow examples.
- Measured frequency and economic/operational impact.
- A differentiated gap beyond current vendors, standards and internal workarounds.
- Explicit willingness to run a bounded pilot.
- A material reason Arbitrum shared state is required; do not force blockchain if APIs, signed attestations or conventional databases suffice.

## Open House São Paulo 2027

The official program currently lists an online Buildathon for 8–28 February 2027 ($100K in prizes/grants) and a separate São Paulo Founder House with dates to be announced ($235K). They are independent phases. Recheck official dates, eligibility, deployment and prize conditions before applying.

- Official program: https://openhouse.arbitrum.io/
- Buildathon terms: https://openhouse.arbitrum.io/sao_paulo_version_open_house_buildathon_terms_and_conditions.pdf

## Engineering status

This is currently a research/documentation repository. There is no product implementation, application test suite, runtime dependency, build pipeline or CI workflow. package.json exposes npm test via Node's built-in test runner, but no tests have been added. Do not claim tests pass. No code should be added until a GO decision and explicit implementation authorization.

## Evidence discipline

Public-source desk research is not customer discovery. Vendor statements, regulations, GitHub issues, job postings, hackathon wins and ecosystem growth are not buyer interviews or willingness-to-pay. Keep facts, hypotheses, historical leads and decisions distinct.