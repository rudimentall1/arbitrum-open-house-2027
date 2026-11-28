# D-053 — Cross-sector RWA workflow screen

**Date:** 28 November 2026  
**Status:** Completed desk-research screen. No candidate, WATCH or GO.  
**Canonical state:** NO PRODUCT SELECTED · NO GO · NO IMPLEMENTATION AUTHORIZED.

## Executive decision

Four workflow families were screened against recurring pain, buyer clarity, incumbent coverage, legal/operational feasibility and material Arbitrum necessity. All four fail the current product-selection gate.

| Direction | Evidence of pain | Incumbent coverage | Arbitrum necessity | Decision |
|---|---|---|---|---|
| Commodity trade finance / buyer-confirmed receivables | Genuine-trade verification remains difficult | Singapore TFR/SGTraDex, Vabble, Pilon, Commerzbank, SECRO | Not established; source verification and buyer cooperation are the hard parts | NO-GO |
| Reinsurance bordereaux / cash reconciliation | Repeated multi-party data exchange and settlement exceptions | Korra, Brisc, DICEUS, enterprise reinsurance suites; MDS Brasil/IBM/CXP | Not established; signed data/API and conventional audit trails suffice | NO-GO |
| Infrastructure milestone / cash waterfall | Certification and payment are contractually complex | Bank/trust accounts, project controls, Brazil Plataforma +Brasil | Not established; smart contracts cannot replace engineering certification or legal payment rails | NO-GO |
| Private-credit transfers / servicing | Bilateral transfers, consent, settlement and servicing handoffs | Percent/PCTX, FIS, ClearPar, Citco, Debtdomain, WSO, LoanStreet/Entrilia | Not established; legal assignment and agent/borrower consents remain decisive | NO-GO |

No organisations were contacted. No willingness-to-pay evidence or paid-pilot commitment was obtained. D-046 catastrophe-trigger infrastructure remains separate and unchanged.

## 1. Commodity trade finance — buyer-confirmed receivables

Singapore's Association of Banks describes the Trade Finance Registry (TFR) as a national utility for banks to detect multiple financing and validate trade genuineness. Nearly 40 banks have joined. TFR's SGTraDex integration routes bill-of-lading checks to carrier data providers and ocean carriers.

A September 2026 Business Times report distinguishes duplicate financing from fabricated transactions. Existing registry and carrier checks help detect duplicate financing and verify shipping documents, but do not necessarily prove the underlying commercial transaction. Where an invoice is supported only by borrower-supplied records, verification may require the buyer's active cooperation. The report also warns that cryptographic hashing establishes data integrity/uniqueness, not commercial truth. Allegations in the Radiant World matter are not treated as adjudicated facts.

However, buyer confirmation is not an unserved feature:
- Vabble describes mandatory buyer confirmation of obligation, amount and maturity in its receivables-finance workflow.
- Pilon offers bank-facing receivables financing with buyer approval, credit limits, invoice screening, funding and repayment reconciliation.
- Commerzbank Approved Payables Finance requires the buyer to confirm the invoice and an irrevocable unconditional payment obligation on its SCF platform.
- SECRO and the DCSA eBL interoperability work address trade-document/title digitisation and cross-platform movement.

The deeper residual problem is proving that a purported trade actually occurred. That requires independent source evidence (buyer acceptance, PO, delivery/quality acceptance, customs, carrier, warehouse or inspection data). A chain cannot create that truth. A neutral permissioned workflow/API is a more natural first approach; public-chain sharing introduces privacy, consent and onboarding costs.

**Decision: NO-GO** for generic buyer-confirmed invoice finance, trade-document verification, duplicate-financing registry or commodity title ledger on Arbitrum. Do not reopen closed D-029/D-043 warehouse-receipt work.

## 2. Reinsurance — bordereaux, claims cash and settlement

Reinsurance involves cedents, brokers and reinsurers exchanging claims bordereaux, cession records, statements and settlement data. ACORD/Ruschlikon material describes standardised claims bordereaux as a way to improve validation, referential integrity, reduce queries and accelerate cash movement.

Competitive coverage is already substantial:
- Korra offers bordereaux automation, cession summaries, collateral calculations, contract compliance and financial statements.
- Brisc AI offers insurance-native cash reconciliation, bordereaux, claims and reinsurance accounting analysts, with row-level evidence.
- DICEUS markets a reinsurance data-exchange platform covering financial bordereaux, claims finance, settlements, accounting and audit controls.
- Enterprise reinsurance administration vendors cover treaty accounting and claims recoveries.
- MDS Brasil, IBM and CXP publicly described a 2026 automation deployment reporting 7.5x more files processed per day, 10x faster reconciliation and 97.6% financial-data accuracy. These are vendor/customer-reported case outcomes, not an independently audited benchmark, but show active investment in conventional automation.

No residual dispute or settlement exception outside these products was evidenced. A signed record, standard message, API and conventional audit store can meet the proposed evidence requirement without Arbitrum.

**Decision: NO-GO** for generic reinsurance bordereaux, claims reconciliation, cash matching or shared evidence ledger. D-046 remains separate.

## 3. Infrastructure / project finance — milestone certification and cash waterfall

Project-finance structures commonly control revenue through secured accounts and a contractually defined waterfall: operating costs, taxes, senior debt service, reserves, subordinated obligations and distributions. Payment priority is established by transaction documents and administered through bank/trust accounts.

Brazil's public Plataforma +Brasil digitises public-works workflow from project preparation and approval through execution, measurement, verification, attestation, payment and completion. ENAP's training material estimates a 20% reduction in time spent on measurement. Brazilian construction-law analysis also describes public-contract payment tied to measurement attested by the designated contract inspector.

A generic milestone approval or programmable cash waterfall is therefore not whitespace. It competes with project banks, escrow/trust accounts, lender's engineers, contract-management platforms and public-sector systems. Smart contracts cannot replace engineering certification, contractual dispute resolution, statutory withholding, bank account control or fiat payment rails.

A different opportunity would require a named project class with a recurring cross-SPV reconciliation exception not handled by the trust/account bank or project ERP. No such buyer-backed evidence was found.

**Decision: NO-GO** for generic infrastructure milestone certification, project payment workflow or cash-waterfall contracts on Arbitrum.

## 4. Private-credit secondary transfers and servicing

Secondary loan trading and servicing involve transfer eligibility, borrower/agent consents, trade capture, participant allocation, settlement, register updates and servicing handoff. This is a genuine multi-party workflow, but it is a mature institutional software category with active investment:
- Percent launched secondary-market functionality in February 2026 and PCTX, an institutional private-credit electronic trading venue, in September 2026. Its launch release reported more than a dozen managers representing $250bn AUM signed up; this is a company-reported figure.
- FIS Trade & Distribution Manager launched in June 2026 to automate trade capture, settlement, participant allocation and position reconciliation.
- ClearPar provides electronic loan-trade review, execution and settlement. S&P Global reported Q2 2026 private-credit trade activity on ClearPar grew over 110% year-on-year.
- Citco Credit Portal launched in July 2026 for loan agency/servicing clients, consolidating loan, borrower, participant, payment-schedule and servicing information.
- Debtdomain supports structured deal execution and agency workflows; WSO/Broadridge covers loan portfolio administration, servicing, reconciliation, cash management and investor reporting.
- LoanStreet and Entrilia announced in November 2026 an integration connecting loan-level servicing events to fund accounting.

Legal assignment, transfer eligibility, lender-of-record updates, borrower/agent consent and cash settlement remain governed by loan agreements and jurisdiction-specific law. A token transfer alone does not transfer legal rights or guarantee cash settlement. No narrow asset class with an unmet shared-register requirement was identified.

**Decision: NO-GO** for generic private-credit secondary marketplace, loan transfer register, ownership ledger, servicing or investor-distribution infrastructure.

## Source register

1. Singapore Association of Banks, Trade Finance Registry: https://abs.org.sg/industry-guidelines/compliance-and-risk-management/trade-finance-registry
2. The Business Times, commodity-finance risks, 10 Sep 2026: https://www.businesstimes.com.sg/companies-markets/energy-commodities/commodity-finance-risks-back-focus-amid-radiant-world-scrutiny/
3. The Business Times, bill-of-lading genuineness check, 12 Feb 2025: https://www.businesstimes.com.sg/companies-markets/banking-finance/abs-introduces-digital-tool-banks-verify-trade-financing-documents
4. Global Supply Chain Finance Forum, receivables discounting: https://supplychainfinanceforum.org/techniques/receivables-discounting/
5. Vabble: https://www.vabble.io/
6. Pilon: https://www.pilon.sg/receivables-financing/
7. Commerzbank Approved Payables Finance: https://www.commerzbank.com/financing-foreigntrade/products/financing/approved-payables-finance/
8. ICC/FIT Alliance eBL survey, 21 Oct 2026: https://iccwbo.org/news-publications/news/electronic-bill-of-lading-adoption-grows-as-focus-shifts-to-interoperability/
9. ACORD/Ruschlikon claims bordereaux: https://www.acord.org/docs/default-source/ruschlikon-documents-newsletters/ruschlikon-newsletters/faster-claims-turn-around-based-on-uniform-template.pdf
10. Korra: https://www.korra.com/
11. Brisc AI: https://brisc.ai/
12. DICEUS reinsurance platform: https://diceus.com/insurance/solutions/reinsurance-platform/
13. IBM Brazil, MDS Brasil automation case, 19 Mar 2026: https://brasil.newsroom.ibm.com/IBM-e-CXP-implementam-solucoes-de-IA-na-MDS-Brasil%2C-melhorando-drasticamente-a-eficiencia-19-03-2026
14. IFB structured-finance accounts and waterfalls: https://infiba.org/banking-services/speciality-accounts/structured-finance/
15. ENAP Plataforma +Brasil works module: https://repositorio.enap.gov.br/jspui/bitstream/1/7570/5/M%C3%B3dulo%203%20-%20Operando%20a%20Plataforma%20%2BBrasil.pdf
16. Chambers Brazil Construction Law 2026: https://chambers.com/practice-guides/guides/construction-law-2026/brazil/law-and-practice
17. Percent PCTX launch, 30 Sep 2026: https://www.prnewswire.com/news-releases/percent-unveils-pctx-the-private-credit-electronic-trading-venue-built-to-unlock-liquidity-302893860.html
18. Percent secondary markets launch, 26 Feb 2026: https://www.prnewswire.com/news-releases/percent-launches-secondary-markets-bringing-liquidity-and-infrastructure-to-the-2-1t-private-credit-industry-302697996.html
19. FIS Trade & Distribution Manager, 16 Jun 2026: https://uk.marketscreener.com/news/fidelity-national-information-services-launches-trade-distribution-manager-platform-for-secondary-ce7f5cdfdc8df22c
20. Citco Credit Portal, 27 Jul 2026: https://www.citco.com/insights/citco-launches-citco-credit-portal-to-deliver-greater-transparency-and-efficiency-as-private-credit-complexity-increases
21. S&P Global, Private Credit at Scale, 2026: https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/08/private-credit-at-scale-building-the-operational-foundation-for-the-next-phase-of-growth
22. LoanStreet/Entrilia integration, 10 Nov 2026: https://loan-street.com/resources/entrilia-loanstreet-private-credit-loan-servicing-fund-accounting/

## Next action

Continue discovery outside generic tokenisation, trade-document registries, payment tracking, private-credit verification/servicing and the already closed Brazilian screens. Prefer specific non-standardised legal/operational obligations with at least two independent counterparties, a named budget owner and a credible route to paid pilot. No outreach without user approval. No implementation without explicit GO.
