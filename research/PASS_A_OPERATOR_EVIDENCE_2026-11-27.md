# Pass A operator evidence check — 27 November 2026

## Executive result

This public-source pass did **not** validate a buyer or design partner for either Pass A hypothesis. The technical problem classes remain credible, but there is no independent operator response with quantified cost and willingness to test. Do not promote either to GO.

## 1. Arbitrum RPC / indexer integrity

### Nitro #4788 — exact current issue readback

Primary source: https://github.com/OffchainLabs/nitro/issues/4788

Fresh GitHub API readback confirms:
- Opened 10 November 2026; closed 24 November 2026 with `state_reason=completed`.
- Reporter `pauldelucia` observed wrong-height logs on both `arb1.arbitrum.io/rpc` and `rpc.mainnet.chain.robinhood.com`; both advertised Nitro `v3.12.3-rc.4`.
- In the reporter's 18-minute sample, Arbitrum One produced 321 wrong-block and 33 empty responses; Robinhood Chain produced 289 wrong-block and 39 empty responses.
- The issue has two comments, both from other GitHub users, explaining downstream cursor/data-loss failure modes and client-side guards. Neither comment is an operator's quantified recovery-cost or WTP statement.
- No maintainer resolution note, linked fix PR, or public release confirmation was established by this pass. Closed/completed is not proof of a fix.

This is one reporter and one Nitro implementation/release cluster across two endpoints, not two independent customers. The proposed guard (reject out-of-range/mismatched logs and do not advance the cursor) catches wrong-height responses but cannot certify a valid-looking empty result.

### Independent operator signal

No independent Arbitrum/Orbit indexer operator was found in this bounded public-source pass who both:
1. confirms the same production silent omission/corruption in their own deployment; and
2. quantifies recovery labor, customer/SLA impact, lost revenue, infrastructure spend, or budget and agrees to a bounded pilot.

The existing competitive boundary remains decisive: Envio HyperSync, eRPC, SQD/Ponder, and indexer-native repair/verification already cover substantial adjacent workflows. Do not build a generic RPC proxy, monitor, or completeness dashboard.

## 2. Morpho liquidation send-time data

### Morpho operator question #121

Primary source: https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/121

Fresh GitHub API readback confirms the question remains open, was created 29 August 2026, and has **zero comments**. It explicitly asks active operators which input blocks an every-block liquidation loop (candidate coverage, independently fresh pricing, executable venue liquidity, pending-transaction conflict state, or none), requests exact fields/freshness bounds, and offers to sponsor a bounded 90-day provider-neutral endpoint experiment. No operator has accepted, identified a gap, or committed to test in the public thread.

This is a failed public validation attempt, not evidence that the market has no problem. It is also not evidence of demand.

### Morpho feed issue #118

Primary source: https://github.com/morpho-org/morpho-blue-liquidation-bot/issues/118

The author reports a 20-minute scanner covering 2,586 Base borrowers across 212 markets and asks whether other operators want a webhook/API. The only follow-up comment asks what exact gap and freshness guarantee the feed addresses. No subscriber, payment, pilot, or operator commitment is recorded.

### Current Morpho API freshness boundary

Official API documentation: https://docs.morpho.org/api/markets/get-market-positions-health/

The market-position health endpoint documents that:
- position rows are rewritten a few seconds after balance-changing events;
- price, interest, and market-level values use a per-chain refresh about every 30 seconds and can be roughly two minutes behind;
- the API serves a stale snapshot rather than recomputing it live;
- debt excludes interest accrued since the last indexed event, so LTV may be understated, especially in quiet markets.

This is a real freshness limitation for API-based discovery. It is **not yet a proven send-time execution gap**. Morpho's published Blue liquidation bot architecture supports Morpho API and HyperIndex candidate sources, but reads on-chain state and simulates liquidation transactions before submission. Its README also exposes configurable block polling, an RPC retry delay, and optional failed-position cooldown. Therefore, a stale discovery snapshot may delay candidate detection, but the available evidence does not show that a separate data service would outperform the existing on-chain qualification and simulation path.

Official bot repository:
https://github.com/morpho-org/morpho-blue-liquidation-bot

Morpho's current bots overview:
https://docs.morpho.org/developers/ecosystem/bots-and-automations/

### Liquidator competition and workflow

Morpho's docs state that liquidations are permissionless and competitive operators continuously monitor on-chain positions/oracle prices; execution depends on the current oracle and transaction economics. This supports a real time-sensitive workflow, but does not identify an unmet data-provider workflow or a buyer for one.

### Assessment

Do not build a generic borrower feed, scanner, alert dashboard, or "freshness API". A viable narrow opportunity would need an operator to name a specific recurring missed liquidation or wasted execution caused by a missing input that remains unresolved after direct on-chain reads, simulation, Morpho API/HyperIndex, and existing liquidity venues.

## 3. Pass A status

| Hypothesis | Technical evidence | Independent operator confirmation | Quantified cost | Pilot / WTP | Status |
|---|---|---|---|---|---|
| Arbitrum/Orbit silent RPC/indexer integrity | Yes | No | No | No | Weak WATCH |
| Morpho/Aave send-time liquidation data gap | Yes, but API freshness alone is not execution proof | No | No | No | WATCH / unvalidated |

**Pass A is not a GO and is not falsely marked as buyer-validated.** Public GitHub issue review has reached diminishing returns: the key operator question has zero responses and the Nitro comments are technical mitigations, not buyer testimony. If direct operator access is unavailable, proceed to the already-authorized Pass B hypothesis rather than repeating issue searches.

## 4. Next step under D-025

Proceed only to Pass B: post-origination servicing of tokenized private credit. Validate actual servicers/fund operations teams, buyer, recurring reconciliation/arrears/distribution/reporting work, current systems, measurable cost, and a bounded pilot path. Do not add a new adjacent sector. Pass C remains the final GO/NO-GO gate.
