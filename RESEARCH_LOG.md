# Research log — Arbitrum Open House São Paulo 2027

## Executive conclusion

**No GO concept has been established.** The leading new hypothesis is **RWA Servicing Copilot**: a narrowly scoped operations tool for tokenized private-credit originators and fund administrators. It would reconcile off-chain borrower repayment data with on-chain pool activity, track arrears and loan conditions, calculate distributions, and prepare investor/fund reports.

This is deliberately not another lending protocol, yield vault, tokenization platform, tokenized-stock market, perp DEX, or autonomous trading agent. It remains a hypothesis until a real buyer shares a workflow and agrees to test it.

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

## Leading hypothesis: RWA Servicing Copilot

### Target buyer

- Tokenized private-credit originators.
- RWA fund managers and administrators.
- Onchain credit protocols with off-chain borrowers and repayment schedules.

### Narrow workflow to test

A fund/operator receives borrower statements, loan tapes, repayment records, and on-chain pool activity. Operations staff must reconcile these sources, determine which loans are current or overdue, calculate interest/principal and distribution waterfalls, and prepare investor or fund reports.

Potential product workflow:
1. Import a redacted loan tape and borrower payment/statement files.
2. Match payments and balances against scheduled obligations and on-chain pool events.
3. Flag missing, late, partial, or inconsistent repayments.
4. Calculate arrears and a deterministic distribution schedule for human approval.
5. Produce a traceable investor/fund report.
6. If justified by the buyer workflow, initiate an approved stablecoin distribution through an Arbitrum contract.

Do not automate credit decisions, make legal/compliance determinations, or custody funds in the first MVP.

### Why investigate it

- It is adjacent to the financial and RWA workflows repeatedly rewarded by Arbitrum, but it is not another perp DEX, AMM, tokenized-stock lending market, or yield vault.
- Public DefiLlama-derived tracking showed about $2.72B in active on-chain private-credit loans on 23 November 2026, with roughly 17.4% recorded on Arbitrum. The market was down about 19% over the preceding 30 days and concentrated in a few protocols, so the number is context, not a stable TAM or proof of demand.
- The workflow connects off-chain credit servicing with on-chain asset pools, which creates a plausible reason for an Arbitrum integration.

### Competition and risks

- Tokenized asset platforms such as Securitize and Tokeny already offer broad issuance, management, servicing, transfer, or corporate-action capabilities.
- Traditional/private-credit operations vendors include Allvue, WSO, Loan IQ, Lumonic, Cardo AI, and others.
- Therefore the opportunity is **not** “build a complete loan servicing platform.” The potential wedge is a small, fast integration/reconciliation layer for onchain credit operators whose existing systems do not reconcile borrower-side records with onchain pool activity well.
- This gap is not yet proven. Interview operators and inspect real workflows before committing.

### Validation gate

Before implementation, obtain:
- At least five interviews with people who own loan servicing, portfolio operations, or investor reporting.
- One redacted real loan tape / repayment statement / reconciliation example.
- Evidence that the workflow is frequent, manual, costly, and not already solved by the buyer's current platform.
- One design-partner commitment or permission to test with real workflow data.
- A specific Arbitrum action that materially improves settlement, distribution, or auditability.

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
