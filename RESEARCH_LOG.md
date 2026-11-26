# Research log — Arbitrum Open House São Paulo 2027

## Executive conclusion

**No GO concept has been established. Product selection remains undecided.** The broad idea-generation and sector-screening stage is complete. The active phase is issue-driven problem discovery using primary GitHub Issues/Discussions and technical reports from Arbitrum SDK, Nitro, Orbit, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.

GapGuard remains WATCH only. Previously rejected directions stay closed unless new primary evidence directly changes the rejection rationale. Verigate is explicitly excluded. The previous repository proposal RWA Servicing Copilot is not an active candidate and is retained only as historical research.

## Scope

This log combines:
- The three earlier Arbitrum/Buildathon topic discussions archived in the project.
- Public winner announcements for Open House India 2025, NYC 2026, London 2026, and Singapore 2026.
- Selected Arbitrum-specific hackathons (Allo on Arbitrum 2023–24 and Bucharest 2024).
- 2026 market and regulatory signals relevant to a February 2027 buildathon.

The winner inventory and source links are in `WINNER_MAP.md`. Public archives do not expose every historical submission and some event pages are incomplete; this is a review of the major verifiable winner sets, not a claim that every Arbitrum-branded hackathon ever held has been exhaustively enumerated.

## What winner patterns show

1. **Financial primitives dominate recent Open House winners.** Tokenized assets, lending, trading, yield, liquidity, collateral, and risk infrastructure repeatedly appear in top projects.
2. **A narrow use case beats a generic protocol.** Winners usually explain a specific workflow: tokenized-stock lending, liquidity for stablecoin issuers, collateral mobility, credit risk, escrow for high-value purchases, insurance claims, or private payments.
3. **AI agents are being judged as financial products, not generic chatbots.** Recent winners focus on trading, portfolio automation, privacy, and agentic financial coordination. This space is already crowded.
4. **Privacy and compliance matter when attached to a real workflow.** Shinobi.Cash, ReineiraOS, CanHav, and GuardChain demonstrate privacy/claims/agentic use cases, not privacy for its own sake.
5. **Arbitrum-specific value must be visible.** Stylus performance, Arbitrum liquidity, Robinhood Chain tokenized assets, and programmable settlement are credible differentiators when the product actually needs them.
6. **Winning is not proof of a durable market.** Prize announcements validate jury fit and execution at an event; they do not establish retention, revenue, or long-term product-market fit.

## 2027 trend signals and caveats

### Tokenized assets and institutional operations

- The Arbitrum Foundation's H1 2026 progress update reported average monthly stablecoin transfer volume above $70B and described Arbitrum as the leading platform for RWA deployments.
- Open House winners have already covered tokenized stock markets, RWA yield, liquidity, collateral, risk ratings, and credit exits.
- The likely next layer to investigate is not another token issuance or trading venue, but the operations required after issuance: repayment reconciliation, loan servicing, arrears, covenant/condition monitoring, cashflow distribution, and investor reporting.

### Agentic commerce

- Agentic AI is a clear 2026–27 theme, including agentic trading, payments, and financial operations.
- One October 2026 public tracker reported millions of tracked x402 transactions but only about $274K of tracked stablecoin volume. The same report warned that x402 coverage changed and ERC-8004 registrations were highly concentrated on one domain. Treat this as an early signal with measurement caveats, not proof of mass commercial demand.
- Do not pursue generic agent identity, generic agent wallets, agent payment rails, or autonomous trading as the main product. A vertical workflow with a paying business owner would be required.

### Latin America and stablecoins

- A 2026 Ripple survey of 160 finance leaders in Brazil and Mexico reported strong intent to use stablecoins, while respondents also cited compliance complexity and lack of in-house technical skills.
- Brazil's Central Bank has introduced a VASP framework. Resolution 520/2025 establishes information-transfer requirements in phases, with domestic VASP-to-VASP information exchange due by 2 February 2027 and international coverage by 2 February 2028.
- Do not assume that a generic PIX-to-stablecoin or cross-border stablecoin settlement product is viable: Resolution 561/2026 restricts stablecoin/crypto settlement of the offshore leg for regulated eFX providers. This is a material regulatory constraint.

## Current phase: issue-driven problem discovery

The current work is not another broad market scan. Search for concrete recurring problems reported by actual developers, users, and protocol operators. Each issue is a lead, not proof of demand.

First-pass findings dated 26 November 2026 are documented in [research/ISSUE_RESEARCH_2026-11-26.md](research/ISSUE_RESEARCH_2026-11-26.md), with follow-up source, issue, and PR checks in [research/ISSUE_RESEARCH_2026-11-27.md](research/ISSUE_RESEARCH_2026-11-27.md). Nitro HA sequencer readiness / false-ready behavior (#4733) remains the strongest problem lead: one operator reports a quantified customer outage and nine test-chain reproductions, and current master source still lacks an explicit non-local sync-target provenance check. A bounded search found no independent report of the same failure, so this is not a product candidate. Historical Nitro fixes #3180 and #3538 do not appear to close the warm-database case. The Orbit archive-node cluster (#4736/#4766) has separate upstream fixes or PRs in progress; the tracer race appears fixed in Nitro v3.12.1, while a range-limit fix and capability metadata fix remain in open PRs. Feed reconnect issue #4785 also has an open fix PR. These are technical leads to monitor, not product opportunities. Generic RPC monitoring/provider ranking remains closed.

Follow-up on 26 November 2026: [research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md](research/ISSUE_RESEARCH_MULTICHAIN_2026-11-26.md) reviewed Morpho bots #4, SDK log-range reports #609/#642, Nitro #4784/#4771, and adjacent Aave/GMX/Morpho signals. Morpho #4's stated 9x retry impact is overstated: the current repository's own timing table says Base 200 ms and Robinhood 100 ms, producing a modelled 47 versus 79 attempts over 10 minutes (about 1.68x) at the issue's poll cadence. Current Blue source still uses fixed block-based backoff, but an existing `blocksFor()` helper provides a direct code-level remedy. `eth_getLogs` range failures recur across different contexts, but the likely remedy is adaptive pagination or upstream SDK changes; no buyer or standalone product gap is established. Nitro #4733 remains the strongest problem lead, still without independent operator confirmation.

Follow-up on 26 November 2026: [research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md](research/INDEXER_RPC_COST_RESEARCH_2026-11-26.md) found the strongest recurring commercial pain signal so far: several independent indexer operators report measured RPC request amplification, 429 retry spirals, and provider-cost spikes. The evidence includes Arbitrum/Robinhood Chain request rates, 8,281 timed-out pages across 102,000 pages on seven chains, and one operator's 800-to-18,000 requests/hour upgrade regression. This is WATCH, not GO: Envio has merged throttle and rate-limit fixes and has additional request-reduction PRs in progress; eRPC already offers caching, failover, request splitting, cross-validation, and CU budget guards, while providers and managed indexers are substitutes. The remaining opportunity, if any, must be a specific indexer workload gap that those tools do not solve.

No product concept is selected from these findings. Before proposing an MVP, verify recurrence across independent operators, whether fixes/workarounds already exist, the affected buyer and cost of pain, competitive tools, and whether a small team can deliver a differentiated solution.

## Directions not selected

### Brazil Travel Rule adapter — not the lead idea

The 2 February 2027 domestic Travel Rule milestone is timely, and the lack of a mandated technical protocol creates implementation complexity. However, Notabene has announced a Brazil-specific Travel Rule testnet and publishes Brazil-specific data requirements; Sumsub already offers protocol interoperability, counterparty discovery, automation, and reporting. A generic Travel Rule product would enter an established competitive field. Reconsider only if interviews reveal a specific underserved workflow beyond existing providers.

### Stablecoin treasury/payments for LATAM — not the lead idea

There is clear institutional interest, but the category is crowded with infrastructure providers, and Brazil's eFX settlement rules make a generic cross-border stablecoin gateway a poor default. The previous generic PIX/USDC and B2B payment-split directions remain closed.

### Agentic trading / generic agent payments — not the lead idea

Several winners already occupy agentic trading and financial automation. Public x402 volume figures also show that transaction counts can be misleading when actual payment volume is small or measurement coverage is incomplete.

## Previously explored and closed directions

Do not restart broad scans of:
- GuardRail Wallet / generic agent policy engines.
- VeriPay / generic agentic payments and escrow.
- Stylus zkTLS / generic zkTLS verifier.
- Generic PIX-to-stablecoin gateways and generic B2B payment splits with yield.
- Retail DCA / stop-loss apps for Robinhood Chain.
- Generic AI CFO / treasury agents.
- Generic tokenized-stock dashboards.
- Generic DEX / lending / NFT / L3 concepts.

Verigate is explicitly excluded from the Buildathon candidate pool by user decision. Do not reintroduce it.

## Reusable lessons

1. Start from a narrow, expensive workflow and the person who owns its budget.
2. Verify the buyer and current workaround before designing the protocol.
3. Treat Arbitrum/Robinhood integration as a product requirement only when it materially improves the workflow, not as a logo or hackathon checkbox.
4. Prefer a small end-to-end demo with a real design partner over a broad platform architecture.
5. Separate hackathon jury fit from commercial viability; neither proves the other.
6. Do not equate repository activity, test counts, a friendly reply, or an award narrative with adoption or revenue.


## Recovered history from earlier project work

The archived history includes two substantial prior product lines that were missing from the previous consolidated summary:

- **Agent Guardian / GuardRail Wallet:** a deterministic on-chain execution boundary for AI-agent transactions, with registry, policies, EIP-712 intents, spending limits, owner approvals, recovery, and an AgentSmartWallet. September 2026 submission/checkpoint artifacts report 178 and later 228 automated tests and Arbitrum Sepolia/One deployments. The later checkpoint explicitly says the Risk Intelligence layer was deterministic inspection/aggregation, not an AI risk model. This line is not an active Buildathon candidate; generic wallet/policy-engine exploration remains closed.
- **AttestGuard:** a separate Creditcoin/Attestcoin invoice-financing prototype. It attempted to prove a buyer's on-chain delivery-confirmation event, then use deterministic contract limits to approve an invoice advance or route it to human review. A September 5 independent audit identified a permissionless funding bypass of off-chain BLOCK logic, non-functional buyer-default history, custodial liquidity without depositor accounting, owner trust assumptions, the gap between an on-chain event and physical delivery, and a non-load-bearing LLM layer. AttestGuard is historical prior work, not an automatically revived candidate.

The September 4 meme-smart-money research also failed to verify a repeatable top-wallet ranking because complete wallet-level realized PnL data was unavailable. Its proposed independent-wallet consensus model remained a hypothesis.

The earlier **RWA Servicing Copilot** proposal was distinct from AttestGuard, but it is not an active candidate under the latest user-approved direction. It remains historical repository research only. The current phase is issue-driven discovery; do not prioritize the proposal without explicit reopening.

See [HISTORY_RECONSTRUCTION.md](HISTORY_RECONSTRUCTION.md) for the dated chronology, exact prior candidate funnel, and caveats about archived test/deployment claims.

## Follow-up — 26 November 2026: indexer RPC and fast-L2 correctness

[research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md](research/INDEXER_RPC_AND_FAST_L2_FOLLOWUP_2026-11-26.md) adds current-source and PR verification. Ponder #2525 reports about 66,000 `eth_getLogs` calls/day on Robinhood Chain, driven in part by zero `logsBloom` blocks; its proposed fix #2526 is open. A different Ponder contributor's #2491 PR also measures avoidable factory-filter requests. Nuthatch and rindexer show the same broad cost class but their direct fixes shipped in their own indexers; repeated Nuthatch reports are one maintainer/operator, not multiple customers. Envio #1851/#1812/#1840 remain open while #1861 is merged. The recurring RPC-cost signal is stronger but remains WATCH because the fixes are framework-specific and competition is substantial.

The same follow-up records a separate fast-L2 data-integrity lead: an HCTDIP listener commit describes 61 fills skipped when two RPC nodes both returned empty logs near the tip, then adds a hard minimum safe depth. Ponder's older Robinhood block-count finality issue is stale against current main, which uses a timestamp-based reorg window. The event-loss signal remains WATCH with only one independent linked incident.
