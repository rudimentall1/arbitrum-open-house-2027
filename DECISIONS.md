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
- **Consequences:** The next research step is direct validation of a narrow workflow with potential buyers. See `TASKS.md`.

## D-004 — Verigate is not the default buildathon choice

- **Status:** Accepted
- **Decision:** Keep Verigate as an existing technical asset and a possible source of components, but do not assume it is the selected product or force-fit it into the next event.
- **Rationale:** Technical capability and positive ecosystem conversations have not converted into a paid pilot, production design partner, or verified willingness-to-pay. Several adjacent wallet/policy/security capabilities are already offered by established providers.
- **Reopen only if:** A specific buyer confirms an unmet requirement that existing providers cannot satisfy, agrees to a scoped integration, and identifies a budget or concrete adoption path.

## D-005 — Previously explored directions are closed for now

- **Status:** Accepted
- **Decision:** Do not repeat broad exploration of GuardRail Wallet, VeriPay/agent escrow, Stylus zkTLS verifier, generic LatAm payment/split flows, retail DCA/Smart Guard, generic AI CFO, or generic tokenized-stock dashboards.
- **Rationale:** These directions were already assessed and found to have weak differentiation, crowded competition, high execution/CAC/regulatory risk, or no buyer validation. See `RESEARCH_LOG.md`.
- **Reopen only if:** New primary evidence or a materially changed market/technical condition directly addresses the recorded rejection reason.
