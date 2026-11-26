# Recovered project history — Arbitrum Open House 2027

## Scope and evidence limits

This reconstruction is based on archived files and terminal/chat excerpts available in the connected Library, dated August–November 2026, plus the existing Buildathon research documents. It is **not** a claim that every ChatGPT conversation in the account was accessible or that every raw log was a complete chat transcript. Facts below are attributed to dated checkpoints, submissions, audit notes, and command logs. Test counts and deployment claims copied from those artifacts are historical claims, not independently re-run in this repository.

The purpose is to prevent duplicate research and to preserve distinctions between separate product lines.

## Chronology

### 10–24 August 2026 — early agent and MCP security work

- An early `agent-guardrail` MCP server was packaged for external hosting. The archived deployment log shows the container failed to start because the configured executable `guardrail-mcp-server` could not be found (`ENOENT`). This was an operational packaging failure, not evidence of product-market fit.
- A separate `MCP-Security-Check-for-GitHub` codebase was being hardened. The August 24 diff changed attack-path detection from a global capability set to per-component analysis and added regression coverage for oversized files and symlink rejection.
- These were adjacent security-tool experiments, not independently validated Arbitrum Open House opportunities.

### 1–21 September 2026 — Agent Guardian / GuardRail Wallet

This was a substantial, separate line of work: an on-chain execution boundary for autonomous agents.

Core flow:
`AI agent → signed EIP-712 intent → AgentExecutionGuard → AgentRegistry / PolicyRegistry → AgentSmartWallet → Arbitrum`.

The archived implementation and submission describe:
- agent identity, registration, activation/deactivation and ownership transfer;
- policies bound to an agent and owner;
- exact target + function-selector authorization;
- per-transaction and daily spend limits;
- owner approval thresholds;
- nonce/deadline/signature validation, including ERC-1271;
- pause and recovery guardian controls;
- a separate wallet-custody path so the Guard itself does not hold user funds.

The September 15 submission states 178 passing tests and deployments on Arbitrum Sepolia and Arbitrum One. A September 21 CWF checkpoint later records 208 Solidity/Hardhat tests plus 20 runtime/API tests, 10,000 local authorization cases, and 100 real Arbitrum Sepolia benchmark executions. These are claims in the archived project artifacts; this repository has not independently rerun those tests or re-verified those deployments.

Important product limitation recorded by the September 21 checkpoint: its Risk Intelligence layer was deterministic on-chain inspection and aggregation, **not an AI risk model**. The project itself explicitly warned not to market it as AI risk scoring.

Status for Open House selection: the generic agent-wallet/policy-engine direction was later assessed as crowded/commodity and closed in the Buildathon decision log. Do not restart it without new primary buyer evidence and a materially differentiated workflow.

### 3–5 September 2026 — AttestGuard (BUIDL CTC / Creditcoin)

AttestGuard was a distinct trade-finance / invoice-financing prototype, not another generic wallet.

Intended flow:
1. Supplier invoice/advance is registered.
2. Buyer confirms delivery/acceptance through a source-chain event.
3. Attestcoin produces a cryptographic proof of that blockchain event.
4. A Creditcoin contract verifies the proof again.
5. Deterministic contract policy chooses automatic advance or human confirmation.
6. Repayment is acknowledged and supplier limits/reputation may be updated.

The September 3 checkpoint describes Solidity contracts, an off-chain worker using the USC SDK, a deterministic policy engine, tests, documentation, and claimed Creditcoin CC3 + Sepolia testnet deployment. It was a working prototype, not a production lending business.

The September 5 independent audit identified material gaps:
- `fundAdvanceFromQuery` and `acknowledgeRepaymentFromQuery` were permissionless, allowing callers to bypass some off-chain BLOCK decisions;
- buyer-default history was effectively hardcoded/unavailable, making a stated protection dead code in the live data path;
- liquidity was custodial, with no LP shares or depositor accounting;
- owner-controlled invoice registration and repayment acknowledgement left major trust assumptions;
- Attestcoin proved that a specified blockchain event occurred, not that a physical delivery or legally valid receivable existed;
- the AI/LLM layer was advisory/explanatory rather than load-bearing for underwriting;
- the real proof-verifier precompile was mocked in ordinary CI tests, so those tests did not prove the cryptographic precompile path itself;
- there were worker reliability and observability gaps.

**Relationship to the current RWA Servicing Copilot:** both touch credit operations, but they are not the same product. AttestGuard attempted to originate/advance invoice financing and automate a funding decision. The current hypothesis is a post-origination operations/reconciliation tool: reconcile borrower-side repayments against on-chain pool activity, track arrears, calculate distributions, and prepare investor reporting. It should not inherit AttestGuard's lending, custody, underwriting, or physical-delivery claims. The old audit is a warning against treating blockchain attestations as proof of off-chain economic truth.

### 4 September 2026 — Ethereum / Robinhood Chain meme smart-money research

A research report explored identifying profitable meme-token wallets on Ethereum and Robinhood Chain and building an AI agent around wallet signals.

Key result: the report explicitly refused to claim a verified top-five wallet ranking because the available public indexed data did not support complete transaction history, realized PnL, entry timing, and repeatability. It proposed a consensus basket of independent wallets combined with liquidity, holder-graph, volume-acceleration, and creator-history signals.

A follow-up shortlist contained research candidates, not independently proven repeatable winners. This was a research direction, not a validated trading product. Do not treat the candidate addresses as verified alpha or revive autonomous meme trading without a reliable PnL dataset and a new risk case.

### October 2026 — adjacent ecosystem and implementation work

- October 13 archive: Portaldot Hacker House rules and judging criteria. This was a separate event, not Arbitrum Open House.
- October 27 archive: Verigate / PortalDot technical handoff and implementation work. This product line is excluded from the Arbitrum Buildathon by the user's explicit decision; no revival or repackaging.
- October 28–29 archives: Robinhood Chain token deployment and verification commands for a separate token project. This is not evidence of a viable Open House product.
- Other October/November engineering archives include unrelated automation and marketplace work. They should not be mixed into the Arbitrum candidate funnel unless a concrete connection is demonstrated.

### 25 November 2026 — Arbitrum Open House São Paulo candidate selection

The archived multi-model research screened seven broad segments and narrowed five product hypotheses:

1. **VeriPay / ArbEscrow** — conditional escrow and result verification for agent-to-agent/API services over x402/MCP. Scored as a finalist in the internal matrix, but commercial demand depended on machine-to-machine payment volume and was not validated.
2. **GuardRail Wallet** — semantic firewall / account-abstraction controls for AI-agent treasuries, using transaction simulation and intent-versus-state-diff checks. This overlapped the existing Agent Guardian line and was later closed as a generic security/policy-engine category.
3. **YieldSplit / PayFlow LatAm** — B2B revenue splitting and yield on USDG. Rejected because the differentiation from Request Finance, Superfluid, and 0xSplits was weak, with additional accounting/ERP friction.
4. **Retail Guard / Smart DCA** — Robinhood Chain consumer DCA and stop-loss. Rejected due to customer-acquisition risk, B2C distribution, and overlap with smart-wallet/DCA products.
5. **Stylus zkTLS verifier** — generic on-chain verification of Web2/PIX data. Rejected as a broad direction because of Reclaim/zkPass competition and high cryptographic execution risk.

The same research explicitly screened out tokenized-stock issuance/trading (licensing), direct SMB credit origination (underwriting, collections, and liquidity), parametric insurance (capital requirements), generic stablecoin rails (licensed PSP and regulatory dependencies), generic DeFi vaults (incumbent risk-management competitors), generic AI CFO/treasury agents, and generic tokenized-stock dashboards.

A Grok-generated suggestion proposed an AI agent providing working capital to Brazilian SMBs against Robinhood stock tokens with PIX/BRL rails. It remained an unvalidated concept and did not resolve the capital, underwriting, legal, or regulatory barriers.

Internal score matrices in these documents were judgment calls, not customer evidence. No finalist earned GO status.

## Current state after reconstruction

- No concept has GO status.
- Verigate remains explicitly excluded.
- Generic Agent Guardian / GuardRail Wallet, generic agent escrow/payments, generic Stylus zkTLS, generic PIX/stablecoin gateway and revenue splitting, retail DCA, generic AI CFO, and generic tokenized-stock dashboards remain closed.
- AttestGuard is preserved as historical prior work and a source of failure lessons, not as an automatically revived candidate.
- The earlier RWA Servicing Copilot proposal is retained as historical research only; it is not an active candidate under the latest user-approved direction.
- Before any code: obtain real buyer interviews, a redacted servicing workflow, evidence of current manual pain, and a design-partner commitment.

## Primary archived artifacts

- `Вставленный текст(20260810...)` / MCP guardrail container build logs.
- `Вставленный текст(20260824...)` / MCP Security for GitHub code diff and regression tests.
- `Вставленный текст(20260901...)`, `Вставленный текст(20260906...)`, `Вставленный текст(20260908...)`, `Вставленный текст(20260909...)` / Agent Guardian Arbitrum test and remediation logs.
- `submission.md`, `README.md`, and September 21 Agent Guardian CWF checkpoint.
- `Вставленная уценка(3).md` / AttestGuard project checkpoint.
- `AttestGuard-Independent-Audit.md` / independent audit findings.
- `Вставленная уценка(5).md` and `Вставленная уценка(6).md` / meme-wallet research and candidate shortlist.
- `Вставленный Markdown(3).md` and `Вставленный текст(20261125-103602).txt` / Open House 2027 multi-model market and concept research.
