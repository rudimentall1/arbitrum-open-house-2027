# Decisions

## D-001 — Evidence-first project scaffold

- **Status:** Accepted
- **Decision:** Keep this repository as the source of truth for buildathon preparation, research evidence, technical decisions, and implementation.
- **Rationale:** Avoid losing research context and avoid committing to an idea before demand and feasibility are demonstrated.
- **Consequences:** Research claims must carry sources and confidence; rejected ideas should retain concise reasons; code and related documentation ship in the same commit.

## D-002 — Minimal Node.js baseline

- **Status:** Accepted
- **Decision:** Use Node.js ES modules and the built-in test runner initially, with no runtime dependencies.
- **Rationale:** Keep the scaffold easy to run and maintain. Add dependencies only when a concrete requirement justifies them.

## D-003 — No GO concept until buyer evidence exists

- **Status:** Accepted
- **Decision:** Do not start a buildathon implementation based only on ecosystem fit, technical novelty, previous hackathon winners, or an internally generated score.
- **Rationale:** Previous searches produced plausible ideas but no sufficiently verified buyer demand. This caused repeated analysis without a decision-quality outcome.
- **Consequences:** The next research step is issue-driven discovery from primary reports, followed by direct validation of a narrow workflow with potential buyers. See `TASKS.md`.

## D-004 — Explicitly exclude Verigate from the Buildathon

- **Status:** Accepted at user's explicit direction
- **Decision:** Verigate is removed from the candidate pool. Do not propose it, revive it, repackage it, or spend further Buildathon research time on it.
- **Rationale:** The user has decided to stop pursuing it after a year without a hackathon win.
- **Consequences:** It is not an active candidate or fallback option.

## D-005 — Previously explored directions are closed

- **Status:** Accepted
- **Decision:** Do not repeat broad exploration of GuardRail Wallet, VeriPay/agent escrow, Stylus zkTLS verifier, generic LatAm payment/split flows, retail DCA/Smart Guard, generic AI CFO, or generic tokenized-stock dashboards.
- **Rationale:** These directions were already assessed and found to have weak differentiation, crowded competition, high execution/CAC/regulatory risk, or no buyer validation. See `RESEARCH_LOG.md`.
- **Reopen only if:** New primary evidence or a materially changed market/technical condition directly addresses the recorded rejection reason.

## D-006 — RWA Servicing Copilot is not an active candidate

- **Status:** Superseded by the user's 26 November 2026 research summary
- **Decision:** Retain the earlier repository proposal as historical research only. It is not the current leading hypothesis and must not displace the user's explicit next step: issue-driven discovery from primary GitHub reports.
- **Rationale:** The latest user-approved summary does not select RWA Servicing Copilot and explicitly directs the next stage toward recurring real problems in GitHub Issues/Discussions across Arbitrum/Nitro/Orbit and relevant protocols.
- **Consequences:** Do not conduct buyer validation or implementation planning for this proposal unless the user explicitly reopens it and new primary evidence supports it.

## D-007 — Issue-driven discovery is the active research method

- **Status:** Accepted at user's explicit direction
- **Decision:** Continue from the completed broad research funnel by mining primary issues/discussions and technical reports for recurring problems. Prioritize Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.
- **Rationale:** Broad sector scans and internally generated ideas did not establish a GO candidate. Primary complaints and operational reports provide a more direct path to observable pain.
- **Consequences:** For each signal, verify status, recurrence, independent reporters, workaround, cost, buyer, competition, and MVP feasibility. A single issue is a lead, not proof of a market. Do not start coding before a GO decision.

## D-008 — Preserve the current candidate statuses

- **Status:** Accepted
- **Decision:** GapGuard remains WATCH only; REJECT directions remain closed absent new decision-relevant evidence; Verigate remains excluded; product selection is undecided.
- **Rationale:** These are the explicit outcomes in the user's 26 November 2026 research summary.
