# Session checkpoint — 27 November 2026

## Completed

- Re-read AGENTS, PROJECT_CONTEXT, TASKS, DECISIONS, README, latest checkpoint, RESEARCH_LOG, and WINNER_MAP before continuing.
- Inspected repository root and docs/research/src/tests directories. Source and test folders remain placeholders.
- Remote GitHub branch: main only. Open PRs: 0. Local checkout/status remains unavailable.
- Rechecked Nuthatch current cost documentation against release 5.17.0.
- Reviewed Morpho Blue borrower-feed issue #118 and existing Morpho API / Envio HyperIndex provider alternatives.
- Reviewed Morpho viem-dlc #1 cache OOM report and maintainer's mitigation path.
- Rechecked Nitro #4770 comments and time-aligned snapshots; classified as not a bug, not a second confirmed outage.
- Reviewed current official Arbitrum HA sequencer and sequencer troubleshooting documentation.
- Rechecked Aave #926 against Aave v3.7 source and governance: sentinel checks removed from borrow/liquidation paths; proposal 489 Part 2 executed on Arbitrum on 28 May 2026.
- Added research report: research/ISSUE_RESEARCH_FOLLOWUP_2026-11-27.md.
- Updated TASKS, PROJECT_CONTEXT, DECISIONS (D-022), RESEARCH_LOG, README, and this checkpoint.

## Findings

- Nuthatch 5.17.0 defaults to a five-minute poll interval. The ~$185/month / ~9,900 CU/min Arbitrum figure applies to a historical every-block configuration. The vendor's own measurements are not independent customer WTP.
- Morpho #118 is one operator's supply-side offer for a 20-minute Base borrower feed; no subscriber, payment, or pilot evidence. Existing Morpho API and hosted Envio HyperIndex paths are documented substitutes. Generic feed is not promoted.
- Morpho viem-dlc #1 is a library-specific historical cache OOM issue with a maintainer mitigation path, not a product candidate.
- Nitro #4770 was closed as not a bug after time-aligned snapshots showed inbox and execution progress. It does not independently confirm #4733.
- Official Arbitrum docs cover generic HA sequencer architecture, chosen-sequencer health checks, feed and sequencer troubleshooting. #4733 remains one operator's source-level correctness report.
- No new product GO; product selection remains undecided; implementation not started.

## Current status

- Indexer RPC cost/reliability: WATCH only.
- Hosted indexer completeness / neutral cross-provider evidence: WATCH only; buyer and recovery-cost evidence missing.
- Nitro HA false-ready #4733: WATCH; one operator, no independent matching recurrence established.
- Morpho borrower alert feed: not promoted; generic feed lacks demand evidence and competes with existing API/indexer paths.
- Aave #926 sentinel false-positive is historical and resolved for upgraded Arbitrum v3.7 deployments; do not count it as current market pain.
- Verigate remains excluded.
- No product selected and no development authorized.

## Remaining priorities

1. Find an independent Morpho/Aave liquidation operator who can identify a missing send-time input, quantify missed opportunities or infrastructure cost, and agree to a bounded test.
2. Find a hosted-indexer owner who quantifies detection/backfill labor, spend, SLA/customer impact, recurrence, and reconciliation automation.
3. Recheck Nitro #4733 only for independent matching operator reports or a confirmed upstream source fix.
4. Continue issue-driven discovery across Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure. Filter spam/security-report noise and do not count isolated framework bugs as buyer evidence.

## Evidence boundary

- Public GitHub issues and vendor documentation are not customer interviews.
- Maintainer-owned benchmark data is not independent buyer evidence.
- A supply-side offer asking whether a service is useful is not proof of demand.
- Technical severity does not prove a standalone product gap or willingness to pay.

## Checks

- Research and documentation only.
- No application tests, lint, or build run; no application code changed.
- Documentation was written directly to remote GitHub main using sequential file updates.
- Local git status cannot be verified in this session.

## Git

- Branch: main.
- Open PRs: 0.
- Prior remote HEAD before this follow-up: 56d82278a071e2a3d003889108383c984cd81a35.
- Current remote HEAD will be verified after all updates.

## Exact next step

Continue searching for an independent liquidation operator with a quantified send-time data gap, and a hosted-indexer owner with quantified recovery cost. Treat Aave #926 as closed for upgraded Arbitrum v3.7. Do not build until a named buyer and differentiated recurring workflow are validated.

## Follow-up — silent RPC log-result corruption (27 November 2026)

### Completed
- Reviewed Nitro #4788, its issue metadata/timeline/comments, and focused fix-PR search.
- Reviewed Lasso RPC #460 as an independent mock-harness reproduction of wrong/empty responses from lagging upstreams.
- Reviewed DefiLlama SDK #302 and dimension-adapters #11308, including the 545-entry audit and reported downstream effects.
- Created `research/ISSUE_RESEARCH_SILENT_RPC_LOG_CORRUPTION_2026-11-27.md`.
- Added D-024 and updated TASKS, PROJECT_CONTEXT, RESEARCH_LOG, and README.

### Findings
- A recurring technical failure class exists across RPC node, routing, and indexer/cache layers: valid-looking wrong-height or empty log responses can be accepted and then advance a cursor or poison a cache.
- Nitro #4788 was closed as completed on 24 Nov, but the reviewed discussion has no maintainer resolution note or linked fix PR. Closure is not proof of a source fix.
- Lasso #460 is a mock-harness reproduction, not production buyer evidence.
- Existing Morpho liquidation-operator question #121 (opened 29 Aug) remains open with zero comments; it has not produced a design-partner or WTP signal.
- DefiLlama #302 found six short cached entries among 545 checked; two had reporter-quantified downstream metric/fee impact. The related #11308 is the same incident cluster. The Base entry is adjacent L2 evidence, not an Arbitrum-chain incident.
- No named buyer commitment or willingness-to-pay is established. Existing SQD/Envio/indexer-native validation and backfill tools remain strong substitutes.
- Status: narrow silent event-ingestion correctness hypothesis WATCH only; no GO and no implementation.

### Next priorities
1. Verify whether Nitro #4788 has a public source/release fix; do not infer resolution from closed status.
2. Find an independent Arbitrum/Orbit operator with a production wrong/empty log response and quantified loss/recovery cost.
3. Track DefiLlama #302 for maintainer response and remediation.
4. Validate the exact gap left by SQD Portal, Envio HyperSync, and indexer-native tools.
5. Continue the independent liquidation-operator and hosted-indexer-owner validation tasks from the prior checkpoint.

### Evidence limits
- Nitro endpoint counts are reporter-provided and both endpoints ran the same Nitro release family.
- Lasso results are simulated with a mock harness.
- DefiLlama audit and downstream impact figures are reporter-provided and not independently audited here.
- No customer interview, paid pilot, or WTP is claimed.

### Checks
- Research/documentation only; no application code changed.
- No tests, lint, or build run (no implementation changed).
- Remote GitHub updates were made sequentially on main.
- Local checkout/status remains unavailable; verify remote HEAD after updates.

## Final bounded discovery cycle — 27 November 2026 (D-025)

### New competitive findings
- Envio HyperSync verifies complete-block transaction/receipt roots, tracks source provenance, refetches mismatched data from alternate sources, and marks unresolved ranges unverified. HyperIndex uses HyperSync by default on supported chains including Arbitrum.
- eRPC has progressed to release 0.5.0 (27 Oct 2026) and already offers RPC upstream health/selection, retries, consensus, and data-integrity checks. Its filtered eth_getLogs completeness limit is structural, not a generic feature gap waiting for a proxy.
- SQD/Ponder issue #32 found an Arbitrum access-list omission; a later chain-truth comparison found 34 type-0x2 transactions with Portal-missing access lists. Ponder PR #110/#111 fixed fabrication of empty arrays from missing fields by preserving NULL. The upstream dataset gap remains.
- SQD/Ponder #83 records a missing logs_bloom dataset column on Arbitrum/Base/Avalanche and fail-fast behavior; issue closed without explicit public remediation details in the reviewed record.
- Result: silent RPC/indexer integrity remains a real technical class but is downgraded to weak WATCH due to strong existing substitutes and no independent buyer/WTP.

### Discovery boundary
D-025 ends open-ended research. Three remaining passes only:
1. Pass A — seek direct independent operator validation for Arbitrum/Orbit indexer silent-data failures and Morpho/Aave send-time liquidation data gaps.
2. Pass B — validate only the existing WINNER_MAP hypothesis: post-origination servicing of tokenized private credit.
3. Pass C — score at most three finalists and make GO/NO-GO.
GO requires named buyer, independently corroborated recurring pain, measurable cost, unmet workflow despite substitutes, and credible bounded-pilot commitment/willingness to test. If none qualifies, record NO-GO for this search set and stop; change the market/problem frame instead of extending research. No new sector brainstorming.

### Repository state
- Added competitive review and finite-search protocol to the silent-RPC research report.
- Added D-025 and updated TASKS, PROJECT_CONTEXT, RESEARCH_LOG, WINNER_MAP, and this checkpoint.
- No implementation or tests changed.


## Pass A public operator evidence check — 27 November 2026

### Completed
- Re-read Nitro #4788 issue and all comments through GitHub; confirmed closure metadata and that comments are technical client-side recommendations, not buyer evidence.
- Re-read Morpho Blue liquidation bot #121 and comments; confirmed open since 29 Aug 2026 with zero comments despite explicit offer to sponsor a bounded 90-day experiment.
- Re-read Morpho #118 and comments; confirmed one supply-side scanner offer and no subscriber/pilot evidence.
- Read current Morpho market-position health API documentation and the published liquidation bot README. API market-level price/interest data may be about two minutes stale; the bot's documented workflow reads on-chain state and simulates before sending.
- Added research/PASS_A_OPERATOR_EVIDENCE_2026-11-27.md.

### Result
- Arbitrum/Orbit silent RPC/indexer integrity: technical issue is real, but no independent operator with quantified recovery/business cost or pilot willingness found. Nitro #4788 remains one reporter / one Nitro release cluster across two endpoints. Weak WATCH.
- Morpho/Aave send-time liquidation data: Morpho API freshness limitation is documented, but it is not proven to block send-time execution after on-chain reads and simulation. Issue #121 has no operator response; no quantified missed opportunities, cost, or pilot. WATCH / unvalidated.
- No GO candidate. No code, tests, lint, or build changed/run.

### Next step
Proceed to Pass B only: validate the existing post-origination servicing of tokenized private credit hypothesis with real servicing/fund-operations buyers. Do not add a new segment or repeat broad issue searches. Pass C remains the final GO/NO-GO decision under D-025.


## Final discovery outcome — 27 November 2026 (D-026)

### Completed
- Completed bounded Pass A public-source operator validation for RPC/indexer integrity and liquidation send-time data.
- Completed Pass B research on post-origination tokenized private-credit servicing, including actual servicing/accounting providers and tokenization-platform workflows.
- Completed Pass C scorecard for the three permitted candidates.
- Added final report: research/PASS_B_AND_FINAL_NO_GO_2026-11-27.md.
- Added D-026 and updated PROJECT_CONTEXT, TASKS, RESEARCH_LOG, WINNER_MAP and README.

### Decision
**NO-GO for the current search set. Stop this discovery cycle; do not implement.** General private-credit operations pain is real, but current loan servicing/fund accounting systems and tokenization platforms cover much of the workflow. No tokenized-credit-specific unmet workflow, named buyer, independently quantified cost, or bounded-pilot commitment was established. RPC/indexer integrity and liquidation data likewise lack buyer/pilot evidence.

### Reopen criteria
Reopen only if new primary evidence identifies a named buyer/operator, recurring product-specific pain, measurable cost, a clear gap beyond current substitutes, and explicit willingness to run a bounded pilot; or if the market/problem frame is deliberately changed in a new discovery cycle. Do not continue broad research to avoid a NO-GO decision.

### Checks
- Research/documentation only. No application code changed.
- No tests, lint or build run.
- Remote docs were verified after sequential updates. Local checkout/status unavailable.
