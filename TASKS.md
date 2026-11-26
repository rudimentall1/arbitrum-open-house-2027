# Tasks

## Current priority — validate the RWA servicing workflow

- [ ] Identify 8–10 potential buyers: tokenized private-credit originators, RWA fund managers, fund administrators, and onchain credit protocols.
- [ ] Interview at least 5 people who own loan servicing, portfolio operations, or investor reporting.
- [ ] Ask for a redacted real example of the current workflow: loan tape, borrower statement, repayment ledger, or investor report.
- [ ] Verify whether reconciliation between off-chain borrower cashflows and on-chain pool activity is manual, frequent, costly, and poorly served by current systems.
- [ ] Map current tools and competitors, including Securitize, Centrifuge, Maple, Allvue, WSO, Loan IQ, Lumonic, and Cardo AI.
- [ ] Obtain one concrete design-partner commitment or access to a real workflow before implementation.
- [ ] If validated, define a narrow demo: ingest loan/repayment data, reconcile against onchain events, calculate arrears and distributions, and produce an auditable investor report.

## Research guardrails

- [x] Review prior idea research and consolidate it in `RESEARCH_LOG.md`.
- [x] Review major Arbitrum hackathon/Open House winners and record them in `WINNER_MAP.md`.
- [x] Remove explicitly excluded projects from the candidate pipeline.
- [x] Record previously rejected directions to prevent duplicate searches.
- [ ] Do not restart broad market scans without a defined unresolved question.
- [ ] Do not treat hackathon winners, ecosystem narratives, or subjective score matrices as proof of customer demand.

## Engineering baseline

- [x] Establish repository structure and mandatory agent rules.
- [x] Add a minimal Node.js test setup.
- [ ] Add CI after the initial implementation workflow is established.

## GO criteria for a concept

A concept cannot move to implementation until all are true:
1. Named ICP and buyer.
2. Specific, recurring, expensive problem supported by primary evidence.
3. Existing workaround and why it fails.
4. At least one credible design partner or equivalent commitment to test.
5. Clear reason the solution needs Arbitrum / its specific capabilities.
6. Demo scope achievable by a small team within the event timeline.
7. Differentiation from existing products demonstrated, not asserted.
