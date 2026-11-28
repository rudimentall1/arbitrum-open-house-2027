# D-052 — Private-credit collateral integrity and double-pledge prevention screen

**Date:** 28 November 2026  
**Status:** high-severity problem confirmed; generic product thesis NO-GO; no WATCH/GO/implementation.

## Executive result

The 2026 MFS collapse and wider private-credit scrutiny exposed a serious operational problem: lenders may not have an independently verified, current view of loan-level collateral, collections, liens and cross-facility asset reuse. But this is not open product whitespace. Setpoint PledgeCheck, Credibur's Verification Agent, Cascade Debt, Validis, and emerging verification products already address most of the workflow. A new generic collateral-verification or loan-tape reconciliation product would enter a directly contested category.

The potential remaining gap is narrower: independently verifiable cross-originator / cross-lender collateral state for asset classes where no authoritative registry exists, especially physical warehouse receipts and commodities. That overlaps earlier D-029/D-043 work, which is closed NO-GO; this report does not reopen those decisions. Reopening would require a named lender group, asset class, jurisdiction, legal registry gap and buyer-backed pilot evidence.

## 1. Problem and market signals

### MFS / UK bridging finance
- Market Financial Solutions (MFS), a UK specialist mortgage/bridging lender, entered administration on 25 February 2026.
- Creditor allegations reported by Bloomberg described possible double-pledging of collateral, with a potential £930m shortfall against £1.2bn of debts. These are creditor allegations, not a final judicial finding.
- CMS's 16 March 2026 legal analysis describes the risk: an originator may pledge the same collateral to multiple lenders, each believing it has a valid first-ranking claim. CMS recommends independent collateral verification on entry, regular Companies House/Land Registry searches and continued lender monitoring.
- The administrators' Companies House report describes a large-scale data preservation and forensic investigation involving more than 1,150 electronic data sources. This underlines the evidentiary complexity but does not prove a specific software gap.

### Broader private credit
- EBA's June 2026 Risk Assessment Report describes growing borrower leverage, defaults/refinancing pressures, opaque valuations, limited transparency and fragmented reporting in private credit; it notes that data gaps constrain assessment of exposures and concentration.
- The FSB's May 2026 report is referenced by regulators as identifying a roughly US$1.5–2.0tn private-credit sector at end-2024; broader industry definitions produce larger estimates. Do not mix these definitions.
- These market conditions support demand for stronger controls, but do not by themselves establish a viable new product.

### Asset-based lending control problem
- OCC's Asset-Based Lending handbook explains that borrowing-base monitoring depends on current borrower data, receivables aging, inventory reports, field audits and reconciliation of collateral and cash receipts. It recommends that lenders understand and verify borrower reporting systems.
- HFW's 2026 warehouse receipt fraud briefing identifies lack of a central searchable receipt/title register as a structural cause of duplicate financing in commodities. It notes forged receipts, compromised warehouse operators, commingled stock, weak inspections and cross-border lender information gaps.
- HFW recommends independent physical inspections, independent collateral managers and protocols for sharing collateral information among co-lenders. A blockchain receipt alone cannot establish that goods exist or are not substituted.

## 2. Competitive landscape — direct overlap

### Setpoint / PledgeCheck
- Setpoint launched PledgeCheck in October 2025 specifically to identify double pledging across facilities.
- It builds an originator-level asset ledger from borrower systems and facility reports, checks asset identifiers and cross-facility duplication, reconciles collections, and issues a collateral-integrity certification.
- Setpoint states that borrowers need not be full Setpoint users; they can upload data for cross-facility checks. It says cross-counterparty checks preserve confidentiality.
- Setpoint reports more than $550bn in financed assets on its platform and lists major capital providers. These are company-reported claims, not independently audited.
- This is direct competition, not an adjacent dashboard.

### Credibur
- Berlin-based Credibur reports more than €2bn of debt-facility volume connected six months after launch, with clients including Montold, Nivoda and Greenleaze.
- Its Verification Agent checks assets against bank data, documents and the originator's other facilities before and after each draw; it claims to flag the same asset appearing in two facilities.
- It supports multiple lenders/SPVs, borrower data feeds, bank-account reconciliation, eligibility/covenant checks, waterfall calculations and backup servicing.
- Credibur is a direct competitor in structured-credit operational controls and has public customer/volume signals. Its stated focus is Europe and selected additional markets.

### Cascade Debt
- Cascade's Deal Infrastructure Suite covers loan verification, payment reconciliation, collateral verification, collateral registration, cash monitoring/sweeping and backup servicing.
- It provides a direct substitute for loan-tape, cash and collateral operational workflows.

### Validis and specialist field examiners
- Validis supplies source-system AR/AP and general-ledger data for ABL borrowing-base calculations and dilution/ineligibility monitoring.
- Independent field exam providers physically inspect inventory/equipment and reconcile book-to-floor / floor-to-book records.
- These services are necessary because digital attestations do not prove physical inventory exists.

### UMFR
- UMFR markets independent verification for private credit, including deterministic recomputation of reported figures and covenant calculations.
- Its public roadmap includes a future cross-lender pledge register, while acknowledging that public filings cannot identify double pledges across private lenders without a cross-lender record.
- Its registry is roadmap rather than a verified production service; still, it signals that the same prospective whitespace is being pursued.

## 3. Arbitrum fit

A multi-lender shared record could theoretically:
- record a canonical asset/receipt identifier and current pledge/encumbrance state;
- timestamp lender consent, release, substitution and transfer events;
- provide shared evidence of who asserted which interest and when;
- enforce a contractual state transition only after authorised parties approve.

But significant blockers remain:
- Asset identity is difficult across heterogeneous loan tapes and physical goods; identifiers can be altered or incomplete.
- A public chain cannot verify physical existence, quality, quantity, ownership or legal priority without trusted independent data and inspection.
- Existing direct competitors already perform cross-facility duplicate checks without a public chain.
- Confidential borrower, debtor and loan-level data must remain off-chain; permissioned access, selective disclosure and data protection are nontrivial.
- A registry entry does not automatically perfect a security interest, establish priority or bind an insolvency officeholder.
- Lenders may not share data with competitors absent a strong legal basis, governance model and mutual incentive.
- For property-backed loans, Companies House and Land Registry searches remain relevant; for warehouse receipts, local law and any statutory registry control legal status.

**Decision:** NO-GO for generic private-credit collateral monitoring, borrowing-base calculation, loan-tape reconciliation, double-pledge detection or a public collateral registry on Arbitrum. Setpoint PledgeCheck and Credibur are already close to the proposed product; Cascade/Validis and independent field examiners cover further layers. No material on-chain advantage or buyer gap is established.

## 4. What would justify reopening

Only reopen a narrow cross-lender registry/attestation question if all are true:
1. A named lender, warehouse operator, collateral manager or lender consortium identifies a recurring duplicate-pledge problem that Setpoint/Credibur and existing legal searches cannot solve.
2. The asset class has stable, independently verifiable identifiers and a real legal concept of exclusive control/transfer.
3. At least two independent lenders agree to contribute/check records under a defined privacy and governance framework.
4. Physical inspection, source-of-truth data and dispute procedures are defined; chain records are not treated as proof of the underlying goods.
5. Legal counsel confirms how registration/consent affects perfection, priority, transfer and insolvency.
6. A budget owner quantifies loss reduction / diligence cost and agrees to a paid bounded pilot.
7. The parties identify why Arbitrum smart-contract shared state materially improves the workflow over a conventional neutral registry/API.

This is not authorization to contact organisations or implement. No outreach has been made.

## 5. Relation to earlier project decisions

- D-029 CollateralLink remains closed NO-GO. This screen does not reopen it.
- D-043 Brazil warehouse receipts/inventory collateral remains NO-GO for a standalone registry or generic collateral dashboard.
- D-049 Brazil bilateral electricity collateral remains exploratory only and is unrelated to proof of asset uniqueness in private credit.
- The current project state remains NO PRODUCT SELECTED · NO GO · NO IMPLEMENTATION AUTHORIZED.

## Sources
- Bloomberg Law, 27 Feb 2026, MFS creditors' allegations: https://news.bloomberglaw.com/financial-accounting/mfs-creditors-warn-of-930-million-shortfall-from-double-pledges
- CMS, 16 Mar 2026, MFS and double-pledging risk: https://cms.law/en/gbr/legal-updates/mfs-collapse-and-the-double-pledging-risk/
- Companies House, MFS administrators' report: https://find-and-update.company-information.service.gov.uk/company/05994359/filing-history
- EBA, Risk Assessment Report June 2026: https://www.eba.europa.eu/publications-and-media/publications/risk-assessment-report-june-2026
- OCC, Asset-Based Lending Comptroller's Handbook: https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/asset-based-lending/pub-ch-asset-based-lending.pdf
- HFW, Warehouse receipt fraud and duplicate financing: https://www.hfw.com/insights/warehouse-receipt-fraud-and-duplicate-financing/
- Setpoint PledgeCheck: https://setpoint.io/platform/roles/pledgecheck
- Setpoint PledgeCheck launch: https://setpoint.io/company/newsroom/setpoint-launches-industry-standard-to-stop-double-pledging-after-tricolor-and-first-brands-collapse
- Credibur Verification Agent: https://credibur.com/product/verification-agent
- Credibur €2bn connected facilities: https://credibur.com/news/credibur-reaches-2-billion-debt-facility-volume
- Cascade Debt Deal Infrastructure Suite: https://www.cascadedebt.com/products/deal-infrastructure-suite
- Validis specialist lending: https://www.validis.com/product/specialist-lending/
- UMFR: https://umfr.io/
- UNIDROIT/UNCITRAL Model Law on Warehouse Receipts: https://www.unidroit.org/wp-content/uploads/2024/04/C.D.-1039.2-UNCITRAL_UNIDROIT-MLWR-and-GTE-final.pdf
