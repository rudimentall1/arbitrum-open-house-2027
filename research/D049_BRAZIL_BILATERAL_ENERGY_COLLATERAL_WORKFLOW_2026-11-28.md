# D-049 — Brazil bilateral electricity-trading credit and collateral workflow

**Date:** 28 November 2026  
**Status:** exploratory problem lead only. Not a product candidate, WATCH or GO. No outreach or implementation authorized.

## Hypothesis

Brazil's free electricity market has bilateral energy contracts without a central counterparty. Recent trader distress, defaults and liquidity contraction may create a recurring need for counterparties to coordinate credit limits, margin/collateral calls, substitutions, disputes and release across bilateral contracts.

A possible product wedge to test is not another ETRM or credit-risk dashboard. It would be a neutral, multi-party collateral-workflow and evidence layer for a narrowly defined class of bilateral contracts, potentially with programmable escrow only if counterparties need shared state and legal counsel confirms eligible collateral and settlement mechanics.

## Evidence of a material problem

- Reuters reported on 6 February 2026 that Brazilian energy companies were retreating from trading as credit concerns, volatility and lower liquidity increased risks. CPFL and CTG Brasil reduced/exited directional trading; Capitale forecast a 30% decline in trading volume in 2026; Trinity's activity had fallen to roughly one-tenth of prior levels. The market relies on bilateral contracts without a central counterparty, making counterparty creditworthiness central. Gold Energia's 2024 billion-real default heightened scrutiny.
- Reuters reported on 10 August 2026 that global commodity and financial firms were expanding into Brazil as domestic traders faced financial distress and judicial recovery; market participants and regulators were considering stronger collateral rules and an exchange-traded market.
- FGV Energia's July 2026 sector report states that June 2026 CCEE short-term market settlement had R$2.35bn in debits, of which R$439.39m (18.7%) remained unsettled. This is the centralized short-term market settlement, not the bilateral contract book, and must not be conflated with bilateral default exposure.
- CCEE rules require agents to arrange financial guarantees for their centralized settlement obligations. The CCEE is not itself the settlement counterparty; an authorized bank performs the financial netting/settlement.
- CCEE prudential monitoring and regulatory reforms already address market-wide exposure and agent risk. They do not automatically prove that bilateral counterparties lack private credit and collateral controls.

Sources:
- https://www.reuters.com/business/energy/brazil-power-firms-retreat-trading-risks-rise-2026-02-06/
- https://www.reuters.com/business/energy/global-traders-financial-groups-expand-into-brazils-power-market-2026-08-10/
- https://fgvenergia.fgv.br/sites/default/files/uploads/arquivos/2026-11/informe-setor-eletrico-jul-2026-vfinal.pdf
- https://www.ccee.org.br/en/web/guest/mercado/liquidacao
- https://www2.aneel.gov.br/cedoc/ren2021957.pdf

## Buyer and competitor reality

Potential buyer roles:
- Head of Credit Risk / Credit Manager at an energy trading company;
- Head of Middle Office / Collateral Operations;
- CFO/Treasury at a mid-sized generator, retailer or trader;
- potentially a bilateral counterparty group seeking standardised collateral and dispute workflow.

Existing substitutes are substantial:
- **Thunders Trading** advertises integrated CCEE/BBCE/N5X/ERP connections, contract management, bilateral guarantees, credit risk, exposure, prudential monitoring and financial reconciliation.
- **GRisk Energy** offers market and credit risk, counterparty limits/exposure and CCEE integration.
- **Navarrah Energy Risk** was built for Eletrobras to rate counterparties using Receita Federal, CCEE, ANEEL and audited financial statements.
- Global platforms such as Brady CRisk and MCG Paragon already manage energy counterparty credit, collateral, margin calls, letters of credit, cash support and disputes.

Sources:
- https://www.thunders.com.br/trading/
- https://griskenergy.com.br/
- https://eletrobrasinnovationgrid.com/en/navarrah-energy-risk-rating-automatico-agentes-comerc-energia/
- https://www.bradytechnologies.com/bradycrisk/
- https://www.mcgenergy.com/credit-risk-management-software/

## Arbitrum fit — not established

Potential value, if validated:
- counterparties jointly observe a contract-specific collateral balance and margin-call state;
- collateral substitution/release follows agreed conditions;
- disputes and approvals are time-stamped and auditable;
- a smart contract can enforce a limited escrow waterfall for legally eligible tokenised cash-equivalent collateral.

Major blockers:
- Brazilian legal enforceability and insolvency treatment of onchain collateral/escrow are unverified;
- existing guarantees often take the form of bank credit, surety or other regulated instruments, not freely transferable tokens;
- custody, fiat rails, key control, privacy and market-operational cutoffs may make conventional escrow/API integration better;
- existing ETRM and credit-risk products already cover much of the workflow;
- no bilateral counterparties have asked for shared ledger or programmable collateral.

If the problem is merely credit scoring, MTM, exposure or guarantee tracking, this is a conventional SaaS/ETRM feature and must be rejected for this Arbitrum buildathon.

## Falsification questions

Before any candidate status:
1. Do two independent Brazilian traders/generators describe the same recurring bilateral collateral exception not handled by Thunders/GRisk/ETRM?
2. What is the actual exception: delayed margin call, disputed exposure, substitution delay, release after close-out, lack of collateral visibility, or failed enforcement?
3. How often does it occur, what amount is trapped/exposed, and what is the operational/credit cost?
4. Which party owns the budget and can sponsor a paid, bounded pilot?
5. Would both counterparties accept a neutral shared workflow, and what legal instrument would make collateral/escrow enforceable?
6. Why would an Arbitrum contract be materially superior to an API, bank escrow, guarantee or existing bilateral agreement?

No new organisations have been contacted. No customer examples, buyer commitment, willingness to pay, legal opinion or Arbitrum requirement were obtained.

## Decision

Keep as **exploratory problem lead only** because the bilateral credit/collateral workflow is tied to a real market stress signal and has identifiable budget-owning roles. Do not build an ETRM, rating engine, generic credit dashboard or tokenized electricity marketplace. Close the lead if existing systems fully handle bilateral margin/collateral operations or if no two counterparties support a shared neutral workflow. No product selected, no GO, no implementation authorized.
