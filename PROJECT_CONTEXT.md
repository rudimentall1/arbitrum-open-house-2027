# Project context

## Purpose

Working repository for preparation, research, and implementation for Arbitrum Open House São Paulo 2027 / Buildathon.

The repository is the source of truth for prior research, hackathon winner analysis, decisions, rejected directions, and future implementation. Read `RESEARCH_LOG.md` and `WINNER_MAP.md` before proposing or researching another idea.

## Current conclusion

**No concept has earned GO status. Do not start product implementation yet.**

The leading new hypothesis to validate is **RWA Servicing Copilot**: a workflow tool for tokenized private-credit originators and fund administrators that reconciles off-chain borrower repayment data with on-chain pool activity, tracks arrears and loan conditions, and prepares investor/fund reports. It is not a lending protocol, yield vault, tokenization platform, or autonomous trading agent.

This is a research hypothesis, not a validated business. Existing competitors in private-credit operations and tokenized-asset servicing are material. The key unanswered question is whether smaller onchain credit originators have a specific cross-ledger servicing/reconciliation problem that existing systems do not solve well.

## Explicit exclusions

- Verigate is excluded from the Buildathon candidate pool at the user's explicit direction. Do not propose, revive, or spend research time on it.
- Previously explored directions in `DECISIONS.md` remain closed unless new primary evidence directly changes their rejection rationale.

## 2027 market context

- Open House São Paulo's online Buildathon is scheduled for 8–28 February 2027, with a separate Founder House phase.
- Recent Open House winners increasingly focus on tokenized assets, financial primitives, liquidity, collateral, risk, and agentic finance.
- Arbitrum's H1 2026 report describes the network as a leading venue for RWA deployments and reports average monthly stablecoin transfer volume above $70B.
- These ecosystem signals support exploring financial operations on Arbitrum, but do not establish buyer demand for any particular product.

## Repository structure

- `AGENTS.md` — mandatory engineering, research, and documentation rules.
- `PROJECT_CONTEXT.md` — current project status and verified context.
- `TASKS.md` — prioritized work queue.
- `DECISIONS.md` — durable decisions and excluded directions.
- `RESEARCH_LOG.md` — consolidated research conclusions and candidate analysis.
- `WINNER_MAP.md` — winner-by-winner map of major Arbitrum hackathons and Open House editions reviewed.
- `src/` — application and research-support code.
- `tests/` — automated tests.

## Technical baseline

- Runtime: Node.js (ES modules).
- Dependencies: none at scaffold creation.
- Tests: Node.js built-in test runner (`node --test`).
- Main entry point: `src/index.js`.

## Evidence discipline

Distinguish:
- **Verified** — directly checked against a source, test, repository, or working integration.
- **Unverified** — plausible but not yet confirmed.
- **Hypothesis** — a product direction that has a rationale but still needs primary buyer validation.
- **Rejected / deprioritized** — unsuitable based on current evidence; reopen only if new evidence changes the case.

Do not describe a prototype, mock, authorization decision, testnet transaction, or simulated execution as production usage or completed external execution. Do not treat a friendly reply, hackathon prize, ecosystem narrative, or subjective score matrix as proof of market demand.

## Current status

- Repository scaffold and mandatory agent rules established.
- Previous Arbitrum idea research consolidated.
- Major Open House and selected Arbitrum hackathon winners mapped in `WINNER_MAP.md`.
- RWA Servicing Copilot is the leading hypothesis for validation, not a selected product.
- No customer validation, production integration, or paid pilot is claimed.
- See `TASKS.md` for the next step.
