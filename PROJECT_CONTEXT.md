# Project context

## Purpose

Working repository for preparation, research, and implementation for Arbitrum Open House São Paulo 2027 / Buildathon.

The repository is the source of truth for prior research, hackathon winner analysis, decisions, rejected directions, and future implementation. Read `RESEARCH_LOG.md`, `WINNER_MAP.md`, and the latest files under `research/` before continuing research.

## Current conclusion

**No product has GO status and no implementation should start.** D-033 is the latest RWA-focused scan. It rejected four generic product shapes: tokenised fund servicing/transfer agency/NAV reconciliation; tokenised private-credit servicing/loan-pool reporting; collateral eligibility/monitoring/realisation; and independent asset backing/NAV/investor transparency. Existing institutional and specialist providers cover the generic workflows. The only residual RWA problem area worth targeted buyer validation is collateral realisability under stress; it is not a candidate or WATCH.

D-029 cross-border commodity collateral / warehouse-lien verification remains the sole existing WATCH. D-026 generic post-origination private-credit servicing remains NO-GO and is not reopened. D-028 and D-030 through D-033 remain closed for their respective scopes. Verigate remains explicitly excluded.

Full latest RWA evidence: [research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md](research/RWA_INFRASTRUCTURE_SCAN_2026-11-27.md). Prior scans: [D-032](research/GLOBAL_NICHE_SCAN_04_2026-11-27.md), [D-031](research/GLOBAL_NICHE_SCAN_03_2026-11-27.md), [D-029](research/GLOBAL_NONPAYMENT_NICHE_SCAN_2026-11-27.md).
## Explicit exclusions

- Verigate is excluded from the Buildathon candidate pool at the user's explicit direction. Do not propose, revive, or spend research time on it.
- Previously explored directions in `DECISIONS.md` remain closed unless new primary evidence directly changes their rejection rationale.

## 2027 market context

- Open House São Paulo's online Buildathon is scheduled for 8–28 February 2027, with a separate Founder House phase.
- Recent Open House winners increasingly focus on tokenized assets, financial primitives, liquidity, collateral, risk, and agentic finance.
- Arbitrum's H1 2026 report describes the network as a leading venue for RWA deployments and reports average monthly stablecoin transfer volume above $70B.
- These ecosystem signals support exploring financial operations on Arbitrum, but do not establish buyer demand for any particular product.

## Repository structure

- `AGENTS.md` — mandatory research and engineering rules.
- `PROJECT_CONTEXT.md` — current project status and verified context.
- `TASKS.md` — prioritized research queue.
- `DECISIONS.md` — durable decisions and exclusions.
- `RESEARCH_LOG.md` — consolidated historical research and current conclusions.
- `HISTORY_RECONSTRUCTION.md` — recovered historical context and evidence limitations.
- `WINNER_MAP.md` — selected Arbitrum/Open House winner analysis.
- `package.json` — minimal private Node.js metadata with the built-in test-runner command.
- `.gitignore` — standard local/dependency/build exclusions.
- `src/README.md` — placeholder; no product code until GO.
- `tests/README.md` — placeholder; no application tests yet.
- `research/ISSUE_RESEARCH_2026-11-26.md` — first-pass primary GitHub issue findings.
- `research/ISSUE_RESEARCH_2026-11-27.md` — follow-up on Nitro false-ready, archive-node RPC issues, historical fixes, and linked PR status.
- `research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md` — Morpho multi-chain backoff, recurring RPC log-range friction, and current Nitro/SDK issue follow-up.
- `research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md` — multi-operator indexer RPC cost/correctness evidence, Envio fixes, and eRPC/provider competition.
- `research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md` — Ponder zero-bloom requests, Nuthatch/rindexer shipped cost fixes, Envio PR status, and fast-L2 event-completeness evidence.
- `research/INDEXER_INTEGRITY_AND_CHECKPOINT_FOLLOWUP_2026-11-26.md` — RAILGUN/Squid event omission and PPOI divergence, Allium Robinhood ingestion incidents, and technical limits of filtered-log integrity checks.
- `research/BLOCKSCOUT_ROBINHOOD_INDEXER_OPERATIONS_2026-11-26.md` — Blockscout's Robinhood scale-up, missing block ranges, API lag, Base gaps, and remediation status.\n- `research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md` — independent Ergo/Ponder incidents, The Graph adjacent outage, and existing completeness/recovery substitutes.

This repository is a research/documentation workspace with minimal Node.js metadata. The source and test directories are placeholders; no application implementation or automated test suite exists. The `npm test` command has not been run in this environment.

## Evidence discipline

Distinguish:
- **Verified** — directly checked against a source, test, repository, or working integration.
- **Unverified** — plausible but not yet confirmed.
- **Hypothesis** — a product direction that has a rationale but still needs primary buyer validation.
- **Rejected / deprioritized** — unsuitable based on current evidence; reopen only if new evidence changes the case.

Do not describe a prototype, mock, authorization decision, testnet transaction, or simulated execution as production usage or completed external execution. Do not treat a friendly reply, hackathon prize, ecosystem narrative, or subjective score matrix as proof of market demand.

## Current status

- Prior idea research and winner mapping are retained as historical context.
- No concept has GO status; product selection remains undecided.
- RAILGUN/Squid event omission and PPOI checkpoint divergence is a separate protocol-specific WATCH lead only; Allium Robinhood ingestion reports are supporting operator evidence, not a new candidate.
- GapGuard remains WATCH only and is not a selected product.
- Previously rejected directions remain closed unless new primary evidence directly changes the rejection rationale.
- Verigate is explicitly excluded by the user's decision.
- The active research phase is issue-driven discovery across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.
- First-pass findings and caveats are in [research/ISSUE_RESEARCH_2026-11-26.md](research/ISSUE_RESEARCH_2026-11-26.md); the follow-up status/code/PR review is in [research/ISSUE_RESEARCH_2026-11-27.md](research/ISSUE_RESEARCH_2026-11-27.md); the latest multi-chain/SDK follow-up is in [research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md](research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md). The strongest current problem lead is Nitro HA sequencer readiness / false-ready behavior (#4733), but independent recurrence and a product-shaped gap are not yet established. Morpho Blue backoff mismatch (#4) and RPC log-range failures remain technical WATCH items only.
- Generic RPC monitoring/provider rankings and generic RPC proxy/budget products are not candidates: official Arbitrum monitoring, eRPC, provider-native quotas, and managed indexers already cover much of that category. Indexer-specific optimizations are being shipped by Ponder, Envio, Nuthatch, and rindexer themselves. Any future candidate needs a cross-framework workflow gap those tools do not solve.
- No buyer interviews, customer commitments, paid pilots, or product demand are claimed. Flop Labs adds independent hosted-indexer recurrence and measured backlog-duration evidence, but not quantified engineering or spend.
- No application implementation has started.

## Recovered historical context

The prior project history was not fully represented in the earlier research summary. Read [HISTORY_RECONSTRUCTION.md](HISTORY_RECONSTRUCTION.md) before revisiting any direction. It records the Agent Guardian / GuardRail Wallet line, the separate AttestGuard invoice-financing prototype and its audit findings, the meme smart-money research, and the November 2026 Open House concept funnel. These are historical records, not new GO candidates.

## Repository reality

The repository contains research documentation, minimal `package.json` metadata, and placeholder `src/` / `tests/` directories. No application implementation or test files exist. The `npm test` command is configured but has not been executed in this environment; do not claim tests passed.


## Completeness substitute comparison (26 Nov 2026)

Current vendor comparison is documented in [research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md](research/INDEXER_COMPLETENESS_SUBSTITUTES_COMPARISON_2026-11-26.md). SQD Portal and Envio HyperSync publicly describe block/receipt-root and multi-source validation, making upstream data-integrity checks a strong substitute. Blockscout documents catch-up, retry, and specialized repair workers but no universal public canonical-completeness guarantee was found in the reviewed docs. Alchemy provides RPC/log APIs, subscriptions and request diagnostics, not consumer-database completeness attestation. Ekubo and DALP already cover gap audit/repair and platform operations. Product gap hypothesis is now limited to a neutral cross-provider reconciliation/evidence workflow, still unvalidated; WATCH only.


## 27 November 2026 follow-up

See [research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md](research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md) and [research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md](research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md).

- Nuthatch's current 5.17.0 docs set the default caught-up poll interval to five minutes; the earlier ~$185/month / ~9,900 CU/min Arbitrum figure applies to an every-block configuration and is not the current default. The maintainer's own deployment measurements are not independent customer WTP.
- Morpho borrower-feed issue #118 is one supply-side offer: 2,586 Base borrowers / 212 markets / 20-minute refresh, with no subscriber, payment, or commitment evidence. Morpho API and hosted Envio HyperIndex are documented alternatives in the Morpho liquidation-bot provider design. Do not promote a generic borrower feed.
- Morpho viem-dlc #1 is a specific cache architecture OOM issue with an in-library mitigation path, not cross-customer product evidence.
- Nitro #4770 was closed as not a bug after time-aligned snapshots showed the node executing all inbox messages; it is not independent confirmation of #4733.
- Official Arbitrum HA and troubleshooting documentation cover much of generic sequencer operations. #4733 remains a single-operator correctness report.
- No new GO candidate; product selection remains undecided and implementation remains blocked pending buyer/workflow validation.

- Aave #926 (2023 PriceOracleSentinel daily false-positive) is obsolete for upgraded Arbitrum Aave v3.7: governance proposal 489 Part 2 executed 28 May 2026 on Arbitrum and v3.7 removed sentinel checks from borrow/liquidation paths. Do not treat the still-open legacy issue as current buyer pain. See [research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md](research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md).

## 27 November 2026 — silent RPC log-result corruption follow-up

See [research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md](research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md).

A new narrow technical WATCH signal spans three codebases: Nitro #4788 (Arbitrum One and Robinhood Chain numeric eth_getLogs requests above head returned current-head logs), Lasso RPC #460 (mock-harness demonstration that a lagging upstream can return accepted null/empty results), and DefiLlama SDK #302 (pruned RPC returned an empty historical log response that was persisted as a complete cache range; six short entries found among 545 checked, with two reported downstream data/fee impacts). This is a recurring failure class, not yet a product opportunity: only the DefiLlama incident quantifies production business impact, the Base example is adjacent L2 rather than an Arbitrum incident, and the three issues do not establish multiple paying buyers. Nitro #4788 is closed as completed but no maintainer fix/release evidence was found in the reviewed discussion/search. Keep WATCH; do not build a generic RPC proxy, monitor, or completeness dashboard.

## Final discovery boundary — 27 November 2026

Decision D-025 ends open-ended discovery. Only three remaining passes are allowed: (A) direct validation with an Arbitrum/Orbit indexer operator and a Morpho/Aave liquidation operator; (B) validate the one adjacent existing WINNER_MAP hypothesis, post-origination servicing of tokenized private credit; (C) score at most three finalists and make GO/NO-GO. GO requires a named buyer, independently corroborated recurring pain, measurable cost, an unmet workflow despite substitutes, and a credible bounded-pilot commitment or willingness to test. If none qualifies after Pass C, record NO-GO for the current search set and stop. Do not add sectors or extend discovery indefinitely.

Competitive review downgraded silent RPC/indexer integrity to weak WATCH: Envio HyperSync provides whole-block root validation and alternate-source refetch; eRPC provides proxy health, consensus, and integrity controls; SQD/Ponder has cross-validation and fail-loud schema guards. See [expanded silent RPC report](research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md).


## Pass A operator evidence check — 27 November 2026

See [research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md](research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md). Public-source validation did not produce an independent Arbitrum/Orbit indexer operator or Morpho/Aave liquidator who confirms recurring production pain, quantifies cost, and agrees to a bounded pilot. Nitro #4788 remains one reporter / one Nitro release cluster across two endpoints; its two comments describe defensive client behavior, not buyer demand. Morpho issue #121 remains open with zero comments despite explicitly offering a sponsored 90-day experiment. Morpho API market-health docs disclose a roughly two-minute possible lag for market-level price/interest snapshots, but the documented liquidation bot qualifies candidates with on-chain reads and simulation before sending. Therefore API freshness alone is not a validated execution gap. Keep both hypotheses WATCH; do not build a feed, proxy, monitor, or dashboard. Public issue research is at diminishing returns; proceed to the single pre-authorized Pass B workflow rather than repeating searches.


## Final decision — 27 November 2026 (D-026)

**NO-GO for the current search set. Stop this discovery cycle; do not start implementation.** Pass A did not establish a named RPC/indexer operator or liquidation operator with quantified recurring pain and pilot willingness. Pass B confirmed general private-credit operations pain but found substantial overlap with existing loan-servicing/fund-accounting platforms (including LoanStreet + Entrilia and Allvue), private-debt systems (Broadridge), and tokenization infrastructure (Centrifuge, Coretos, REM). Cross River/Offchain is also building native loan tokenization on Arbitrum from origination. No tokenized-credit-specific unmet workflow, named buyer, independently quantified cost, or bounded-pilot commitment was found. Pass C scored the three allowed candidates; none meets the D-025 GO gate. See [research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md](research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md) and [D-026](DECISIONS.md). Reopen only on new primary buyer evidence or a separately framed market/problem cycle; do not continue broad research or build these candidates.


## New discovery cycle 01 — D-027 (27 November 2026)

D-026 remains final for the prior three candidates; none is reopened. A separate, bounded cycle is now authorized for **B2B stablecoin payment operations**: reconciling a business payment obligation with provider/gateway, blockchain, recipient, treasury/bank and accounting records, including unmatched, partial, duplicate, late, wrong-network and in-transit exceptions. Only two buyer segments may be tested: stablecoin payment processors/fintechs with their own payment stack, and businesses receiving direct stablecoin payments into self-custody wallets. Current status is WATCH, not GO. Utila/Cordant announced a direct design-partner program for fiat/stablecoin reconciliation and discrepancy investigation; Fipto/Kyriba reports a named Ledger production workflow with ~15 minutes saved per payment; Circle describes its own >$10M first-month intercompany USDC activity. These establish relevance but also expose strong competition. No buyer has committed to a new pilot or stated WTP. Generic reconciliation dashboards, invoice matchers and subledgers are not differentiated. One bounded validation pass is allowed: obtain a named buyer, real/redacted exceptions, recurring frequency, quantified cost/loss/SLA impact, a specific gap beyond substitutes and explicit willingness to run a two-week read-only pilot. If not obtained, record NO-GO and stop. See [research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md](research/NEW_CYCLE_01_STABLECOIN_PAYMENT_OPERATIONS_2026-11-27.md). No implementation is authorized.


## D-027 final outcome — 27 November 2026 (D-028)

The bounded public buyer-access pass identified real payment-operations roles at Due (daily fiat/stablecoin reconciliation and break investigations; CEO Robert Sargsian and SVP Operations & Expansion Vasco Moura are public access leads), Pockyt (manual money movement, settlement/reconciliation and operating controls; founder Mason Lin), BPN (abnormal credits, returns, status mismatch and reconciliation breaks), and Taptap Send (stablecoin funding and payment lifecycle troubleshooting). BVNK has dedicated reconciliation and fiat-product roles and is a direct incumbent, not a prospective buyer. DIMOCO/Fipto and Paysecure/Valuno are live/integrated incumbent routes.

The direct-wallet business segment did not produce a named buyer with recurring quantified unresolved reconciliation pain. Abundance360's Coinbase Business case reports reduced manual reconciliation through integrated invoicing and settlement. Job postings establish company staffing priorities, not external-product demand or willingness to pay.

**D-028: NO-GO for D-027.** No buyer supplied redacted production exceptions, recurrence/month, quantified manual cost/loss/SLA impact, a differentiated unmet workflow and explicit willingness for a two-week read-only pilot. Do not build a generic dashboard, matcher, subledger or exception queue. Stop this cycle; reopen only on new primary buyer evidence. No implementation is authorized.


## 27 November 2026 — Third global niche scan (D-031)

See [research/GLOBAL_NICHE_SCAN_03_2026-11-27.md](research/GLOBAL_NICHE_SCAN_03_2026-11-27.md).

Five additional areas were screened: insurance claims/subrogation evidence, manufacturing supplier quality/warranty recovery, distributed-energy flexibility settlement, eBL interoperability, and SME receivables/SCF fraud. No new GO or WATCH candidate emerged. Generic product theses were rejected due to existing claims/evidence vendors, ERP/QMS and warranty platforms, Piclo/Elexon and national flexibility-market infrastructure, DCSA eBL interoperability/control-tracking standards, and MonetaGo/national receivables validation systems.

Energy multi-BRP allocation and compensation disputes remain a documented operational complexity, but no buyer-specific product gap has been established; it is not promoted to WATCH. D-029 cross-border commodity collateral remains the sole WATCH hypothesis. No buyer interviews, production data, quantified buyer-specific costs, paid pilots or WTP commitments are claimed. No implementation is authorized. Continue discovery in a different problem space, with buyer/access mapping before deep research.


## 27 November 2026 — Fourth global niche scan (D-032)

See [research/GLOBAL_NICHE_SCAN_04_2026-11-27.md](research/GLOBAL_NICHE_SCAN_04_2026-11-27.md).

Three additional areas were screened: aircraft component lifecycle/LLP records and transfer; battery second-life SoH, residual value and repurposing; FuelEU Maritime compliance-balance pooling. No new GO or WATCH candidate emerged. ATA is developing a Component Passport and IATA's September 2026 guidance clarifies current-status confirmation for LLPs; established aircraft records/transition vendors cover digitisation and audit. EU Battery Regulation, Commission registry/FAQ and passport/BMS vendors cover battery passport and SoH data. FuelEU's official database and providers such as OceanScore, BetterSea and Zero44 cover pooling, pricing and compliance workflows.

Three residual questions are documented but are not candidates: neutral LLP current-status evidence; operational access to OEM BMS data for second-life valuation; and post-trade FuelEU contractual/allocation disputes. None has independent buyer evidence, quantified impact or pilot willingness. D-029 commodity collateral remains the sole WATCH. No implementation is authorized.


## RWA-focused research status — 27 November 2026 (D-033)

RWA is now the user's priority research sector. This does not change the evidence gate or authorize implementation. The D-033 scan found meaningful market and Arbitrum ecosystem traction, but no new product passed buyer access, differentiated unmet workflow, quantified cost and pilot willingness. Generic fund servicing, private-credit servicing, collateral monitoring and asset verification are already covered by institutional or specialist providers. The only residual question is collateral realisability under stress, requiring targeted buyer validation before it can become WATCH. D-029 commodity collateral remains the sole existing WATCH; D-026 private-credit servicing remains closed. No product selected; no code authorized.
