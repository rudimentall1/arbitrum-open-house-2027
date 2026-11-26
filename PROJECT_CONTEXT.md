# Project context

## Purpose

Working repository for preparation, research, and implementation for Arbitrum Open House São Paulo 2027 / Buildathon.

The repository is the source of truth for previous research, decisions, rejected directions, and future implementation. Read `RESEARCH_LOG.md` before starting another idea search.

## Current conclusion

**No concept has earned GO status. Do not start product implementation yet.**

The previous research explored agent authorization/security, agent payments and escrow, Stylus zkTLS, Latin American payment flows, and Robinhood/tokenized-asset products. The main lesson is that ecosystem fit and technical novelty are not enough: there must be a named buyer, a painful recurring workflow, evidence of willingness to adopt/pay, and a credible Arbitrum-specific reason.

Verigate is not automatically the next buildathon project just because it already exists. Its technical progress is real, but buyer demand, a paid pilot, and a production design partner have not been established in the available evidence.

## Repository structure

- `AGENTS.md` — mandatory engineering, research, and documentation rules.
- `PROJECT_CONTEXT.md` — current project status and verified context.
- `TASKS.md` — prioritized work queue.
- `DECISIONS.md` — durable decisions and rejected directions.
- `RESEARCH_LOG.md` — consolidated record of previous searches; consult before researching.
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
- **Rejected / deprioritized** — unsuitable based on current evidence; reopen only if new evidence changes the case.

Do not describe a prototype, mock, authorization decision, testnet transaction, or simulated execution as production usage or completed external execution. Do not treat a friendly reply as a partnership or a high hackathon score matrix as market validation.

## Known Verigate evidence and limitations

The previous research record indicates:
- The open-source protocol has a meaningful technical implementation, tests, and an Arbitrum Sepolia execution path.
- A Valta sandbox smoke test reached an authorization ALLOW and consumed a one-time token, but the upstream model request then failed with HTTP 429 due to exhausted credits. Successful paid/production execution was not demonstrated.
- A proposed Valta MCP integration did not receive a maintainer response in the reviewed issue history.
- A Circle contact suggested Developer Grants and described Alliance as requiring a live integration; this is not an investment, partnership, or product commitment.
- No paid pilot, paying customer, production design partner, or independently confirmed willingness-to-pay was found in the reviewed material.

These are historical findings from prior research, not a fresh audit of the external services. Re-check before using them in a current application or public claim.

## Current status

- Repository scaffold and mandatory agent rules established.
- Prior research consolidated in `RESEARCH_LOG.md`.
- No buildathon concept selected.
- No production integration or customer validation claimed.
- See `TASKS.md` for the next evidence-gathering step.
