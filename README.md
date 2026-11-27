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
research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md
research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md
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

- [27 Nov silent RPC log corruption follow-up](research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md) — Nitro wrong-height logs, Lasso lagging-upstream empty responses, and DefiLlama persistent cache omissions; WATCH only.
- Final discovery boundary: see D-025 in `DECISIONS.md`; only three validation passes remain, with GO/NO-GO at the end and no open-ended sector expansion.


## Current decision

As of 27 November 2026, D-026 records **NO-GO for the current search set** after the bounded Pass A/B/C validation. No candidate met the buyer, recurring pain, measurable cost, unmet-workflow, and pilot gate. No implementation is authorized. See [the final evidence report](research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md).


## New discovery cycle (D-027)

The prior candidate set remains NO-GO under D-026. A separate, bounded cycle now checks B2B stablecoin payment operations: cross-system reconciliation and exception investigation. Status is WATCH, not product selection. Only two buyer segments may be tested, and one validation pass is allowed; no implementation without a named buyer, quantified recurring pain, a gap beyond current substitutes and a two-week read-only pilot commitment. See [research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md) and D-027 in DECISIONS.md.


## Current discovery decision — 27 November 2026

D-027 (B2B stablecoin payment operations) is closed as **NO-GO** under D-028. Public job postings identified operator teams at Due, Pockyt, BPN and Taptap Send, while BVNK and integrated payment providers are strong incumbents. No buyer supplied redacted exceptions, quantified recurring cost, a differentiated gap and two-week pilot willingness. No product is selected and no implementation is authorized. See [the D-027 final report](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md).

## Current product status — 27 November 2026

No product is selected and no implementation is authorized. D-026 and D-028 remain NO-GO for their respective closed research cycles. The latest separate global non-payment scan (D-029) leaves one WATCH-only hypothesis: cross-border commodity collateral / warehouse-lien verification. It is not validated by buyers and must not be implemented before the buyer, cost, competitive-gap and pilot gates are met.

See [the full global niche scan](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md) and [D-029 in Decisions](DECISIONS.md).

## Latest research status — 27 November 2026 (D-030)

No product is selected and no implementation is authorized. D-030 screened six additional global problem spaces and rejected their generic product theses due to direct incumbents, official infrastructure, competing projects or weak market demand. D-029 commodity-collateral remains WATCH only; one of three outreach messages was sent and two LinkedIn profiles did not accept messages, which is not a negative buyer response.

See [the D-030 global niche scan](research/GLOBAL_NICHE_SCAN_02_2026-11-27.md), [D-030 in Decisions](DECISIONS.md), and [D-029 report](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md).


## Latest research status — D-031 (27 November 2026)

The third global niche scan screened insurance claims evidence, manufacturing supplier quality/warranty, distributed-energy flexibility settlement, eBL interoperability, and SME receivables/SCF fraud. No new GO or WATCH candidate emerged; generic product propositions are covered by established vendors, standards, or national infrastructure. D-029 cross-border commodity collateral remains the sole WATCH hypothesis. No product is selected and no implementation is authorized.

See [D-031 full research report](research/GLOBAL_NICHE_SCAN_03_2026-11-27.md), [D-031 decision](DECISIONS.md), and [D-029 report](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md).
