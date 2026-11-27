# RWA collateral realisability — targeted operator evidence check (27 November 2026)

## Executive result

**No product selected. No GO. No new WATCH. No implementation authorized.**

This is a targeted follow-up to D-033/D-034, not a new market scan. It tests whether banks and CCPs have an unmet, recurring operational problem proving that tokenised collateral can be legally controlled and converted into usable liquidity after a clearing-member default.

Public evidence strongly validates the *importance and mechanics* of the problem. It does **not** yet validate a software buyer, a distinct product gap, customer-specific losses, a budget, or pilot willingness. No buyer interviews or outreach were performed in this pass.

## What the current evidence establishes

### 1. Supervisors have isolated the exact default-time workflow

**Bank of England — consultation opened 29 October 2026; responses due 12 February 2027.**

The consultation is specifically about CCPs accepting tokenised versions of otherwise eligible collateral. It says a CCP must be able to access, transfer and realise collateral in required timeframes after a clearing-member default. It distinguishes normal-time transferability from stress-time liquidation and identifies dependencies on CSDs, digital securities depositories, custodians, tokenisers, service providers, token-to-underlying links and liquid repo/sale markets.

For digital-twin arrangements, the CCP may need to convert the tokenised position into a conventional security before sale or repo. Reconciliation or bridge failure can affect availability, integrity, transferability and realisation. The Bank invites firms actively considering tokenised collateral to engage directly with the Post Trade Policy Team.

Sources:
- https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral
- https://www.bankofengland.co.uk/news/2026/october/bank-of-england-sets-out-approach-to-tokenised-collateral-in-central-clearing

**ESMA — Call for Evidence opened 9 October 2026; responses due 15 January 2027.**

The call is explicitly addressed to CCPs, clearing members and clients, CSDs, custodians, triparty agents, tokenisation/DLT providers and legal experts. It asks:
- Q4: how collateral moves from posting to liquidity realisation after default, including bottlenecks/dependencies;
- Q6: whether CCP rights can be exercised effectively and without delay;
- Q11: whether client positions and collateral can be ported on time;
- operational-resilience questions covering default-management simulations, key compromise, platform outage, failed reconciliation and stressed conversion into usable liquidity.

ESMA explains that in digital-twin models, the token layer may only support identification/allocation/pre-positioning; realisation may still depend on custody/CSD processing, reconciliation and confirmation. In native-token models, value depends on ledger availability, market liquidity and settlement links.

Sources:
- https://www.esma.europa.eu/press-news/esma-news/esma-seeks-evidence-use-tokenised-collateral-central-clearing
- https://www.esma.europa.eu/sites/default/files/2026-10/ESMA91-1505572268-4934_-_Call_for_evidence_tokenisation.pdf

These consultations are unusually useful interview maps. They are not customer demand evidence.

### 2. There are two distinct live operator models — do not conflate them

**Eurex Clearing / HQLAx / Clearstream / J.P. Morgan / PGGM**

Eurex's DLT-enabled collateral mobilisation service went live on 30 June 2025. The first live transaction was executed by J.P. Morgan for Dutch pension fund PGGM, moving securities from another custody location to Clearstream Banking Luxembourg (CBL) for use as margin at Eurex.

Important architecture boundary:
- HQLAx is used to mobilise securities from a clearing member's chosen custodian to CBL.
- CBL remains the collateral location vis-à-vis Eurex.
- Eurex states its liabilities/obligations as collateral location remain unchanged.
- The CCP does not participate in the HQLAx ledger and has no legal relationship with HQLAx.
- The service supports pledge and title-transfer regimes.

This is a real, live DLT-assisted collateral-mobilisation workflow. It is **not** evidence that Eurex holds a native tokenised collateral position on HQLAx and must liquidate that token after a member default. It may actually reduce the relevance of the proposed failure mode for this specific design.

Sources:
- https://www.eurex.com/ec-en/find/circulars/clearing-circular-4543944
- https://www.eurex.com/ex-en/find/news-center/news/Eurex-Clearing-becomes-first-CCP-globally-to-launch-DLT-enabled-collateral-mobilization-service-4593252

**DTCC / DTC Tokenization Service and Collateral AppChain**

DTCC reported a 15 July 2026 production event with more than 30 firms and several real production transaction types, including CCP margin workflows. DTC's voluntary Tokenization Service launched on 28 October 2026. The service tokenises DTC-held securities as digital twins, supports conversion between traditional and tokenised forms, and currently connects to Canton Network and Hyperledger Besu; DTCC says it may add other approved networks in 2027. The DTCC Collateral AppChain is a separate product.

Named firms in the July event included CME Group, J.P. Morgan, BNP Paribas Securities Corporation, Goldman Sachs, State Street Investment Management, BlackRock and others. The public release does not map each firm to each individual transaction, so it is not safe to claim that every named bank or CCP participated in the CCP-margin leg.

This gives a second, independent infrastructure/operator environment to investigate. It does **not** disclose a failed default liquidation, a customer loss, a buyer budget or willingness to buy third-party assurance.

Sources:
- https://www.dtcc.com/press-releases/2026/dtcc-turns-tokenization-into-reality
- https://www.dtcc.com/products-and-services/digital-assets/tokenization/hub

### 3. Traditional default-liquidity pressure is real, but not tokenisation-specific

The Federal Reserve has documented that CCPs may need to monetise non-cash collateral within only a few hours during a clearing-member default and volatile market conditions. Eurex's CCP white paper notes intraday margin calls can require fulfilment within about an hour and that collateral spread across multiple custody locations creates operational complexity; manual transfer processing can be time-consuming and error-prone.

These sources establish why time-to-liquidity matters. They do not establish that tokenisation has caused an incident or that a new independent software layer is needed.

Sources:
- https://www.federalreserve.gov/publications/files/financial-stability-report-20211108.pdf
- https://www.eurex.com/resource/blob/4304182/afad77fd7010811b4d9e86f4b7027f18/data/whitepaper_the-role-of-central-counterparties-in-a-dlt-environment.pdf

## Buyer/operator map for the next primary-evidence step

These are **interview targets, not validated buyers or customers**.

| Organisation | Why it is a relevant target | Role to reach | Evidence boundary |
|---|---|---|---|
| Eurex Clearing | Live DLT-assisted mobilisation into CBL; has a defined default-management process | Head of Collateral Management; Head of Default Management; Collateral Risk | Live mobilisation is verified; no public tokenised-collateral liquidation incident or product gap found |
| J.P. Morgan | Named clearing member in the first Eurex live DLT collateral transaction; also named in DTCC production event | Securities Services / Collateral Management Operations; Clearing & Collateral Product; Default Management | Participation in Eurex first transaction is explicit; DTCC event's release does not map J.P. Morgan to a specific CCP-margin transaction |
| DTCC / DTC | Tokenization Service launched; CCP-margin workflow demonstrated in production event | Head of Collateral AppChain; Digital Assets Product Risk; DTC Operations / Risk | Infrastructure operator and potential design partner; not necessarily independent buyer for a third-party product |
| CME Group / CME Clearing | Named DTCC production-event participant; CCP margin was among event use cases | Head of Clearing Risk; Collateral Operations; Default Management | Public release does not identify CME as the participant in the CCP-margin leg |
| BNP Paribas Securities Corporation | Named DTCC production-event participant; relevant large clearing-member/bank context | Collateral Management; Securities Services Operations; Clearing Operations | Firm-level participation only; no disclosed incident or exact CCP-margin leg attribution |

A valid first interview should ask the operator to walk through one *specific* default simulation or near-miss from posted collateral to spendable liquidity, not to discuss tokenisation strategy in general.

## Falsifiable workflow to test

For a single asset and legal model, reconstruct:

1. What legal right does the CCP/secured lender hold at default: title, perfected pledge/security interest, or only a contractual/digital claim?
2. Which record is legally authoritative: DLT, CSD, custodian, issuer register, or more than one?
3. What exact actions are required to freeze, seize, transfer, port, convert, repo or sell the collateral?
4. Which human approvals, legal notices, custodian actions, bridge/reconciliation steps or market-hours constraints remain?
5. What is the contractual and operational deadline from default declaration to usable cash?
6. What happened in the last default drill, tabletop, outage, key-loss or reconciliation exception? How long did each step take?
7. What would fail if the custodian, tokeniser, bridge, permissioning administrator, ledger or settlement venue were unavailable?
8. What is the current workaround, who owns it, how often is it exercised, and what is the cost of keeping buffers or pre-positioning collateral?

The target is not generic token monitoring. It is evidence of a recurring, costly break between **legal control** and **usable liquidity under stress**.

## Competitive and infrastructure implications

- Eurex/HQLAx/Clearstream already covers a meaningful custody-to-CCP mobilisation workflow.
- DTCC's Tokenization Service and Collateral AppChain are institutional infrastructure, not an unserved market.
- Existing CSD, custodian, collateral-management, default-management and internal risk controls may already provide the authoritative records and procedures.
- A new entrant must show a narrow cross-provider failure mode not already covered by these systems or by a CCP's own default-management controls.
- If the issue is legal enforceability, a software dashboard cannot cure defective legal rights.
- If the issue is operational continuity, existing DORA/operational-resilience and third-party-risk controls may be the actual control owner.
- If the issue is conversion/liquidation liquidity, the constraint may be market depth or legal structure rather than missing software.

## Arbitrum fit — currently unsupported

No reviewed operator evidence says Arbitrum shared state is required. The identified live models rely on traditional CSD/custody arrangements, HQLAx, Canton, Besu and institutional infrastructure. DTCC's current supported networks are Canton and Hyperledger Besu, with future network admission subject to security, resilience, governance, observability and compliance criteria.

Arbitrum must not be inserted into the design by default. A buyer would need to explain why independent banks, CCPs and custodians require a shared state that cannot be provided by existing market infrastructure, signed attestations, APIs or a controlled database. Until then, the Arbitrum requirement fails the GO gate.

## Evidence scorecard

| GO requirement | Current evidence |
|---|---|
| Named economic buyer / budget owner | Not found |
| Two independent buyers/operators corroborating same recurring failure | Not found; two operator environments exist, but no buyer interviews |
| Redacted real production incidents | Not found |
| Measured recurrence, delay, exposure or loss | Not found |
| Differentiated gap beyond incumbent systems/workarounds | Not established |
| Explicit bounded-pilot willingness | Not found |
| Material Arbitrum shared-state requirement | Not established; current live designs use other infrastructure |

## Decision and next action

**Keep the issue as a problem-validation question only. Do not create a product candidate, WATCH, MVP or code.**

Next research step: conduct primary conversations with (1) Eurex Clearing collateral/default-management operations and J.P. Morgan collateral operations, and independently (2) DTCC/DTC or CME Clearing collateral/default-management operations. Use ESMA Q4/Q6/Q11 and the Bank of England's default-realisation model as the interview script. Require one redacted drill/near-miss from each independent operator, timestamps for each control/transfer/conversion step, financial/operational impact, budget owner, and pilot willingness.

If both operators report that existing controls already prove timely access and liquidation, close this residual question. If they identify the same recurring cross-infrastructure failure, test whether a bounded evidence workflow is actually budgeted and whether Arbitrum adds anything material. No implementation before the full GO gate and explicit user authorization.
