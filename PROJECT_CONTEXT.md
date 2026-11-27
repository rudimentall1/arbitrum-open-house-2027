# Project context

## Purpose

Source-of-truth repository for evidence-based product discovery and preparation for Arbitrum Open House São Paulo 2027. It preserves research, winner analysis, decisions, exclusions and future implementation context.

## Canonical current conclusion — D-039 (27 November 2026)

**No product selected. No GO decision. No implementation or MVP authorized. RWA is the user's priority research sector.**

- **Only current WATCH: D-029 — cross-border commodity collateral / warehouse-lien verification.** This is RWA-adjacent asset-finance infrastructure, not a validated tokenised-RWA product thesis.
- **D-033:** generic tokenised-fund servicing/transfer agency/NAV reconciliation, private-credit servicing/loan-pool reporting, collateral eligibility/monitoring dashboards and asset/NAV verification are NO-GO due to existing institutional/specialist coverage and absent buyer validation.
- D-033's collateral-realisability-under-stress issue is a residual problem area only, not a candidate or WATCH.
- D-026 generic private-credit servicing remains NO-GO. D-028 stablecoin payment operations remains NO-GO. D-030, D-031 and D-032 remain closed for their respective scopes.
- D-007/D-008 (issue-driven method and old GapGuard WATCH) and D-010–D-024 are historical research/status records, not active product candidates or current WATCH items after D-026.
- D-025's capped validation cycle was completed by D-026.
- Verigate remains explicitly excluded. The earlier generic RWA Servicing Copilot (D-006) is not reopened.

Read [D-034](DECISIONS.md), [the final repository review](docs/FINAL_PROJECT_REVIEW_2026-11-27.md), [D-029 report](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md), and [D-033 report](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md).

## Active next step

Continue **parallel RWA product discovery**, not sequential waiting and not another unbounded generic scan. D-033 collateral realisability remains problem validation; D-038 CVM DLT pilot evidence operations remains exploratory; D-039 SBCE carbon-asset/MRV infrastructure is NO-GO for Arbitrum at this stage; D-040 precatório transfer-eligibility/token-allocation control is exploratory only, not selected or WATCH. D-041 duplicata escritural operational-gap screen is NO-GO as an Arbitrum thesis due to direct incumbent coverage and no material chain role. D-029 remains the only WATCH. None of these statuses blocks discovery of a different, concrete RWA workflow.

Prioritise product hypotheses with a named economic buyer, recurring operational pain, visible alternatives, credible budget/procurement path, a bounded MVP and a material Arbitrum advantage. Score the candidates comparatively rather than waiting for every interview reply. Treat outreach and public regulatory evidence as leads, not customer validation. Continue tracking the four Eurex/CME mailboxes and four CVM pilot contacts in parallel. No product is selected; no implementation is authorised without explicit GO.

Read [D-035 report](research/RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md), [D-037 report](research/RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md), [D-038 report](research/CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md), and [D-039 report](research/BRAZIL_SBCE_CARBON_INFRASTRUCTURE_SCREEN_2026-11-27.md), plus [D-040 report](research/PRECATORIOS_TRANSFER_COMPLIANCE_AND_TOKENIZATION_2026-11-27.md) and [D-041 report](research/BRAZIL_DUPLICATA_ESCRITURAL_OPERATIONAL_GAP_SCREEN_2026-11-27.md).

## Product selection vs implementation GO

Product selection is an evidence-weighted decision, not a gate that must wait for every interview or two customer confirmations. A product hypothesis may be selected provisionally when the comparative scorecard shows the strongest available case; unresolved buyer, budget, competitive and technical assumptions must remain explicit, with a short validation plan. Do not restart the search from zero merely because one outreach thread is unanswered.

The following **implementation GO gate** is required before building an MVP or product code:
1. Named economic buyer and budget-owning role.
2. Two independent buyers/operators corroborating the same recurring problem.
3. Redacted real incidents or workflow examples.
4. Measured frequency and economic/operational impact.
5. A differentiated unmet workflow beyond existing vendors and internal workarounds.
6. Explicit willingness to test a bounded pilot.
7. A material reason Arbitrum shared state is required. If signed attestations, APIs, standards or a conventional database suffice, do not force blockchain.

## Open House São Paulo 2027

The official program currently lists an online Buildathon on 8–28 February 2027 ($100K prizes/grants) and a separate São Paulo Founder House with dates to be announced ($235K). They are independent phases. Recheck official eligibility, dates, deployment and prize terms before applying.

- Official program: https://openhouse.arbitrum.io/
- Terms: https://openhouse.arbitrum.io/sao_paulo_version_open_house_buildathon_terms_and_conditions.pdf

## Repository structure

- AGENTS.md — mandatory working and engineering rules.
- PROJECT_CONTEXT.md — this canonical context.
- TASKS.md — parallel RWA discovery and buyer-validation queue; historical backlog is retained below the archive marker.
- DECISIONS.md — durable decisions D-001 through D-040.
- RESEARCH_LOG.md — consolidated research history and current conclusions.
- HISTORY_RECONSTRUCTION.md — recovered earlier Agent Guardian, AttestGuard, meme-wallet and concept-funnel history.
- WINNER_MAP.md — selected Arbitrum/Open House winner analysis.
- docs/FINAL_PROJECT_REVIEW_2026-11-27.md — repository-wide final audit.
- docs/SESSION-CHECKPOINT.md — latest session handoff.
- research/ — research reports across issue-driven discovery, stablecoin payments, global niche scans and RWA, including D-035/D-037 collateral work, D-038 CVM DLT pilot evidence operations and D-039 SBCE carbon infrastructure screen.
- package.json — minimal private Node.js metadata; npm test uses the built-in Node test runner.
- .gitignore — standard dependency/build/environment/editor exclusions.
- src/README.md and tests/README.md — intentional placeholders.

## Repository reality

This is a research/documentation workspace, not an application repository. No application source, product implementation, test files, runtime dependencies, build pipeline or CI workflow are present. No MVP is authorized. The npm test command exists but no test suite exists; never claim tests passed.

## Evidence discipline

Distinguish verified facts, unverified claims, hypotheses, rejected directions and historical leads. Public-source desk research is not customer discovery. Vendor pages, regulations, GitHub issues, job postings, hackathon wins and ecosystem metrics do not prove buyer demand or willingness to pay. Do not describe prototypes, testnet demos or internal scoring as production usage or PMF.

## Historical context and exclusions

Read HISTORY_RECONSTRUCTION.md before revisiting older work. Agent Guardian / GuardRail Wallet, AttestGuard, meme-wallet research, generic agent payment/escrow, generic zkTLS, generic stablecoin rails, retail DCA and generic AI CFO concepts remain historical/closed. Verigate is explicitly excluded by the user's direction. D-006's generic RWA Servicing Copilot is historical only; the user's RWA priority does not reopen generic servicing.

## Prior decision map

- D-001–D-005: project scaffold, minimal stack, evidence gate and exclusions.
- D-006–D-024: historical product and technical leads; current status superseded as recorded in D-034.
- D-025/D-026: capped validation protocol completed; NO-GO for the original candidate set.
- D-027/D-028: stablecoin payment operations; NO-GO.
- D-029: only current WATCH.
- D-030/D-031/D-032: generic niche screens; NO-GO.
- D-033: generic RWA infrastructure shapes; NO-GO.
- D-034: repository-wide audit and canonical current state.
- D-035: targeted RWA collateral realisability operator evidence check; problem validation only, no new candidate/WATCH.
- D-036: direct outreach initiated to Eurex DMP and CME Clearing Risk Management.
- D-037: CCP default-management criteria and follow-up outreach; problem validation only, no new candidate/WATCH.
- D-038: parallel CVM DLT pilot evidence-operations hypothesis; exploratory only, not candidate/WATCH/GO.
- D-039: Brazil SBCE carbon-asset/MRV infrastructure screen; NO-GO as an Arbitrum product thesis, no new WATCH.
- D-040: precatório transfer-eligibility and token-allocation control; exploratory only, not selected/WATCH/GO.
- D-041: Brazil duplicata escritural operational-gap screen; NO-GO as an Arbitrum product thesis, no new WATCH.