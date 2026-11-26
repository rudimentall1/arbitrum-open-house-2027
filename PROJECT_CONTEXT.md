# Project context

## Purpose

Working repository for preparation, research, and implementation for Arbitrum Open House São Paulo 2027 / Buildathon.

The repository is the source of truth for prior research, hackathon winner analysis, decisions, rejected directions, and future implementation. Read `RESEARCH_LOG.md`, `WINNER_MAP.md`, and the latest files under `research/` before continuing research.

## Current conclusion

**No product has GO status and no implementation should start.** The broad idea-generation and rejection stage is complete. The active workstream is issue-driven problem discovery from primary GitHub Issues/Discussions and technical reports across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.

The next decision must come from repeated evidence of a real workflow and a reachable buyer, not from a new sector scan or an isolated technical bug. Nitro #4733 remains the strongest single technical problem lead but still has one reporting operator. The strongest recurring commercial pain signal is now multi-chain indexer RPC cost/reliability: independent Envio operators report quantified request amplification, 429 spirals, and provider spend on Arbitrum/Robinhood and other EVM chains. This remains WATCH, not GO: Envio is actively shipping upstream fixes, and eRPC/provider/indexer alternatives already cover much of the generic proxy and budget-control space. Morpho bots #4 remains a narrower technical WATCH item; its 9x estimate conflicts with the same repository's 200 ms Base / 100 ms Robinhood timing table, giving a modelled ~1.68x ratio under the reported polling cadence.

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
- GapGuard remains WATCH only and is not a selected product.
- Previously rejected directions remain closed unless new primary evidence directly changes the rejection rationale.
- Verigate is explicitly excluded by the user's decision.
- The active research phase is issue-driven discovery across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.
- First-pass findings and caveats are in [research/ISSUE_RESEARCH_2026-11-26.md](research/ISSUE_RESEARCH_2026-11-26.md); the follow-up status/code/PR review is in [research/ISSUE_RESEARCH_2026-11-27.md](research/ISSUE_RESEARCH_2026-11-27.md); the latest multi-chain/SDK follow-up is in [research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md](research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md). The strongest current problem lead is Nitro HA sequencer readiness / false-ready behavior (#4733), but independent recurrence and a product-shaped gap are not yet established. Morpho Blue backoff mismatch (#4) and RPC log-range failures remain technical WATCH items only.
- Generic RPC monitoring/provider rankings and generic RPC proxy/budget products are not candidates: official Arbitrum monitoring, eRPC, provider-native quotas, and managed indexers already cover much of that category. Any future candidate needs a specific workload gap those tools do not solve.
- No buyer interviews, customer commitments, paid pilots, or product demand are claimed.
- No application implementation has started.

## Recovered historical context

The prior project history was not fully represented in the earlier research summary. Read [HISTORY_RECONSTRUCTION.md](HISTORY_RECONSTRUCTION.md) before revisiting any direction. It records the Agent Guardian / GuardRail Wallet line, the separate AttestGuard invoice-financing prototype and its audit findings, the meme smart-money research, and the November 2026 Open House concept funnel. These are historical records, not new GO candidates.

## Repository reality

The repository contains research documentation, minimal `package.json` metadata, and placeholder `src/` / `tests/` directories. No application implementation or test files exist. The `npm test` command is configured but has not been executed in this environment; do not claim tests passed.
