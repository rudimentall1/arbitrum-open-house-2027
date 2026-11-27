# Project context

## Purpose

Working repository for preparation, research, and implementation for Arbitrum Open House São Paulo 2027 / Buildathon.

The repository is the source of truth for prior research, hackathon winner analysis, decisions, rejected directions, and future implementation. Read `RESEARCH_LOG.md`, `WINNER_MAP.md`, and the latest files under `research/` before continuing research.

## Current conclusion

**No product has GO status and no implementation should start.** The broad idea-generation and rejection stage is complete. The active workstream is issue-driven problem discovery from primary GitHub Issues/Discussions and technical reports across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.

The next decision must come from repeated evidence of a real workflow and a reachable buyer, not from a new sector scan or an isolated technical bug. Nitro #4733 remains the strongest single technical problem lead but still has one reporting operator. Multi-chain indexer RPC cost/reliability has the strongest recurring commercial pain evidence: reports now span Envio, Ponder, Nuthatch, and rindexer, including 66,000 daily `eth_getLogs` calls reported on Robinhood Chain and measured Arbitrum CU amplification. This remains WATCH, not GO: most causes have framework-level fixes shipped or in progress, and eRPC/provider/indexer alternatives cover much of the generic proxy and budget-control space. A separate RAILGUN/Squid integrity lead now documents an Arbitrum TXID event omission that blocked private POI generation, a downstream PPOI divergence affecting a separate wallet implementation, and a similar Sepolia follow-up. The Arbitrum reports are one incident cluster, and the upstream data was corrected in August; no buyer/WTP is established. The Sepolia follow-up remains open in both Engine #142 and Subsquid integration #1, with no public maintainer response or backfill confirmation as of 26 Nov. Public source repo points to Railgun-Community and Subsquid Cloud org `rail-squid`, but no named on-call owner or proof of current deployed-source parity is available. Anon Wallet now provides public RAILGUN liveness/lag monitoring and a PPOI proxy; generic monitoring/proxy is therefore not differentiated. A separate Blockscout operator cluster documents high-throughput Robinhood scaling pressure, a ~7,704-block gap on its hosted Robinhood explorer, transient API lag/500s, and thousands of missing blocks on hosted Base while its indexing status reported 100%. Maintainers backfilled or resolved the reviewed incidents. This is one vendor/operator cluster, not multiple independent buyers; no spend or WTP is known. Anon does not claim event-level completeness verification, which remains a narrow technical hypothesis without buyer validation. Allium also recorded July and September Robinhood ingestion incidents, but these are repeated incidents at one provider and have no public impact/cost quantification. A separate fast-L2 event-completeness lead exists: an HCTDIP listener commit describes 61 fills skipped when two RPC nodes both returned empty logs near the tip; recurrence and buyer evidence remain weak. New independent follow-up reviewed Ergo #2600 (an indexer stalled about 285 blocks behind; restart recovered in minutes, with downstream rejected transactions) and Ponder #1008 (historical missing blocks after RPC failure, recovered by DB pruning/restart). These corroborate the technical failure class but neither provides recovery labor/WTP; the Ponder report is old and framework-associated. The Graph's Q3 report also describes a roughly three-hour gateway outage and later 49/303 allocation impact, but it is an infrastructure dependency outage rather than proven event completeness loss. See research/INDEPENDENT_INDEXER_COMPLETENESS_SIGNALS_2026-11-26.md. Morpho bots #4 remains a narrower technical WATCH item; its 9x estimate conflicts with the same repository's 200 ms Base / 100 ms Robinhood timing table, giving a modelled ~1.68x ratio under the reported polling cadence.

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

See [research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md](research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md).

- Nuthatch's current 5.17.0 docs set the default caught-up poll interval to five minutes; the earlier ~$185/month / ~9,900 CU/min Arbitrum figure applies to an every-block configuration and is not the current default. The maintainer's own deployment measurements are not independent customer WTP.
- Morpho borrower-feed issue #118 is one supply-side offer: 2,586 Base borrowers / 212 markets / 20-minute refresh, with no subscriber, payment, or commitment evidence. Morpho API and hosted Envio HyperIndex are documented alternatives in the Morpho liquidation-bot provider design. Do not promote a generic borrower feed.
- Morpho viem-dlc #1 is a specific cache architecture OOM issue with an in-library mitigation path, not cross-customer product evidence.
- Nitro #4770 was closed as not a bug after time-aligned snapshots showed the node executing all inbox messages; it is not independent confirmation of #4733.
- Official Arbitrum HA and troubleshooting documentation cover much of generic sequencer operations. #4733 remains a single-operator correctness report.
- No new GO candidate; product selection remains undecided and implementation remains blocked pending buyer/workflow validation.
