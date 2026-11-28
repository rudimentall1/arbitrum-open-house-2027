# D-064–D-065 — Carbon-removal reversal liability and marine bunker disputes (28 November 2026)

## Executive result

Both screens are **NO-GO** for an Arbitrum product. No product is selected; no WATCH or GO is created; implementation remains unauthorized.

- **D-064 — Carbon-removal reversal liability:** risk is real and regulation is becoming more explicit, but certification schemes already control buffer pools and insurers already offer reversal/invalidation cover. The unresolved issue is the legal/economic design of long-duration carbon claims, not a missing public ledger. Contractual custody and remedies can be designed under existing law; Arbitrum is not shown to be necessary.
- **D-065 — Marine bunker quantity/quality disputes:** real commercial disputes persist, and port authorities do not adjudicate them. However, the workflow is already served by bunker procurement/claims platforms, digital survey products, and an ARA multi-party initiative with independent audit and tamper-proof delivery data. No unserved buyer workflow or shared-state requirement survives the competitor check.

## D-064 — Carbon-removal reversal liability

### Problem and regulatory context

EU Delegated Regulation 2026/2617 requires a liability mechanism for temporary carbon-removal benefits during the monitoring period. Operators may participate in a certification-scheme buffer pool or maintain sufficient insurance/comparable guarantee coverage. Buffer pools must replace affected units after reversals, with duration constraints; schemes must stress-test sufficiency and publish pool composition. Insurance must compensate unavoidable reversals financially or in kind, while operators remain liable for avoidable reversals.

This is meaningful liability architecture, but it does not create a neutral coordination gap by itself: certification schemes define the rules and operate their registries/pools; insurers underwrite and settle insured events.

### Existing providers and institutional substitutes

- CarbonPool offers carbon reversal insurance and related coverage.
- Kita offers buffer-depletion and other carbon-risk insurance.
- Oka offers carbon-protect/reversal and buffer-pool risk solutions, including cash or credit-based indemnification.
- CFC and Artio advertise carbon cancellation/reversal-related coverage.
- On 27 October 2026, Invert and Marsh announced placement of the first reversal policy under Verra's durability pilot, placed with Oka and underwritten by CarbonPool. This is a concrete market transaction, not merely a concept.
- ACR's ICAO application describes a legally binding reversal-risk mitigation agreement and buffer pool; it says alternative insurance can be approved but no ACR-approved reversal insurance product existed at the time of that application. This is scheme-specific and should not be generalized to all registries.
- A February 2026 Oxford Open Climate Change paper argues that carbon certificates do not themselves create enforceable long-term claims and proposes time-bound carbon-storage leasing and institutional carbon delivery companies. Importantly, the paper explicitly frames its proposed leasing solution as operating under existing contract/property law, not requiring a formal carbon ledger.

### Buyer, willingness to pay, and Arbitrum test

Potential buyers could include certification schemes, project developers, credit buyers, insurers/reinsurers and lenders. The sources establish that insurance and risk-transfer products are being developed and purchased, but do not establish a buyer willing to pay a new independent onchain coordination provider. Nor do they identify a multi-party transaction that cannot be handled by scheme registry records, insurance contracts, conventional custody/escrow, signed evidence and existing claims procedures.

A public chain cannot establish whether a physical reversal occurred, resolve the legal classification of avoidable/unavoidable loss, or create insurer solvency. Those remain offchain evidence, scheme governance and regulated insurance functions. A smart contract would depend on trusted attestations and legal contracts; no material advantage over conventional APIs and contract administration is demonstrated.

**Decision: NO-GO** for a generic reversal registry, tokenized buffer pool, carbon permanence ledger, or onchain insurance/claims settlement layer. Reopen only if a named certification scheme/insurer identifies a recurring cross-scheme reconciliation or collateral-control exception, quantifies its cost, and confirms that a shared state is contractually required rather than merely convenient.

## D-065 — Marine bunker quantity/quality disputes

### Problem evidence

Gard reports handling more than 70 bunker-related claims from January to May 2026, approximately 50% above the same period in 2025. Almost all involved fuel quality. Its dataset is claims handled by Gard, not the market-wide incidence rate. It also reports quantity claims as a small share (3%) of bunker claims in the first five months of 2026, with some ARA disputes involving discrepancies between mass-flow-meter records and vessel-received quantities, calibration and verification concerns.

From 1 January 2026, Rotterdam and Antwerp-Bruges require specified bunker vessels above 300 tonnes to use compliant mass-flow-meter systems for covered fuel deliveries. The port FAQ says the ports are not parties to the private supplier/receiver contract and do not determine the final commercial quantity; their role is limited to checking meter deviation and correct use. Thus, commercial disputes remain with the contracting parties.

### Existing workflow coverage

- **Bunkering Services Initiative (BSI):** launched in ARA operations on 1 December 2025. Founding buyers and suppliers include bp Marine, Cargill, Frontline, Hafnia, Hapag-Lloyd, Mercuria, Minerva Bunkering, Oldendorff, Trafigura, TFG Marine, Unifeeder and Vitol. Lloyd's Register audits the system; ADP Clear supplies technology for multi-party workflows, real-time reporting and verifiable performance metrics. LR describes tamper-proof capture of quantity and quality data through barge transfer to receiving vessels.
- **Nereus:** procurement and post-fixture workflow, including bunker orders, BDNs, lab results and claims. Its site demonstrates quantity/quality/delay claims, evidence attachments, status and vendor review. Vendor-described capabilities; no independent performance validation.
- **BunkerGrid:** advertises eBDN generation/verification, shared counterparty records, claims/disputes tracking, settlement and invoicing. Some modules are explicitly marked coming soon; do not treat all advertised modules as production-proven.
- **GlobalBQS:** launched a digital survey-reporting platform on 2 November 2026. Surveyors can enter measurements online/offline; customers receive standardised reports, searchable operational data, short-delivery tracking and historical letters of protest. Surveyor access was planned for January 2027, so future functionality is not treated as live.
- Existing surveyors, laboratories, P&I clubs, standard bunker terms and ISO 22192 procedures provide further evidence and claims infrastructure.

### Buyer, willingness to pay, and Arbitrum test

The likely economic buyers are shipowners/charterers, bunker suppliers/traders and possibly P&I/FD&D claims teams. There is a genuine cost of disputed quality/quantity, surveyor coordination and evidence preservation. But the exact proposed workflow—capture delivery evidence, share it among buyer/supplier/surveyor, track discrepancy and claims—is already represented by BSI/ADP Clear, Nereus, BunkerGrid and GlobalBQS.

A permissioned or ordinary SaaS system is better suited to confidential commercial documents, role-based access, rapid dispute handling and integration with existing procurement/ERP/claims systems. A public Arbitrum ledger would not make meter readings truthful, validate calibration, determine sample integrity or resolve contractual interpretation. No neutral settlement or escrow requirement has been evidenced.

**Decision: NO-GO** for a generic bunker evidence ledger, BDN registry, claims marketplace, surveyor network or onchain dispute settlement layer. Reopen only with primary evidence from a named buyer outside the BSI coverage showing a specific, recurring failure in interoperability or evidence acceptance that existing platforms cannot solve, quantified economic impact, a budget owner and a contractual need for shared state.

## Source register

1. European Commission Delegated Regulation (EU) 2026/2617: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202602617
2. Oxford Open Climate Change, “The carbon market can’t trade” (27 Feb 2026): https://academic.oup.com/oocc/article/6/1/kgag003/8501377
3. Perspectives Climate Research, “Managing reversal risk” (June 2026): https://perspectives.cc/wp-content/uploads/2026/06/Managing-Reversal-Risk_Report_pdf.pdf
4. Marsh / Invert, first Verra durability-pilot reversal policy announcement (27 Oct 2026): https://invert.world/medias/marsh-invert-carbon-insurance/
5. Oka reversal/invalidation cover: https://carboninsurance.co/policies/reversal-invalidation
6. Port of Rotterdam / Antwerp-Bruges, MFM bunkering FAQ: https://www.portofrotterdam.com/sites/default/files/2026-01/faq-mfm-systems.pdf
7. Gard, “Beyond Specification: Bunker Claims Insights in early 2026”: https://assets.eu.ctfassets.net/jchk06tdml2i/73u5PvrTceAowUKpxlEuFE/820629fdd916ac6e7e1ed58de9fdabac/Beyond_Specification_-_Bunker_Claims_Insights_in_early_2026.pdf
8. Lloyd's Register, Bunkering Services Initiative (15 Dec 2025): https://www.lr.org/en/knowledge/press-room/press-listing/press-release/2025/bunkering-services-initiative-marks-the-start-of-operations-across-the-ara-region/
9. Lloyd's Register, BSI end-to-end tracking (April 2026): https://www.lr.org/en/knowledge/horizons/april-2026/setting-new-standards-for-fuel-quality-and-quantity-for-ara-ports/
10. Nereus: https://www.nereus.tech/
11. BunkerGrid: https://bunkergrid.com/
12. Splash247, GlobalBQS survey-reporting launch (3 Nov 2026): https://splash247.com/globalbqs-rolls-out-digital-solution-for-bunker-survey-reporting/
13. ISO 22192:2021: https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A22192%3Aed-1%3Av1%3Aen
14. Cockett standard bunker terms: https://cockett.com/DBFile/Files/f9183d6c-ac6a-4d4f-bc1f-84b4eda20603/STANDARD%20TERMS%20AND%20CONDITIONS%20FOR%20THE%20SALE%20OF%20MARINE%20BUNKER%20FUELS_2025_final.pdf

## Evidence limitations

- Vendor capabilities and case examples are self-described; no customer references or independent efficacy benchmark was obtained for Nereus, BunkerGrid or GlobalBQS.
- Gard's claims dataset is limited to its own handled cases; it is not a market-wide denominator.
- BSI and LR descriptions establish an operating initiative and named participants, but do not prove universal adoption across all ports or counterparties.
- The EU regulation is binding within its scope; it must not be generalized to all carbon standards or all removal categories.
- This is desk research, not customer validation, actuarial review or legal advice.

## Canonical status

**NO PRODUCT SELECTED · NO WATCH · NO GO · NO IMPLEMENTATION AUTHORIZED.**
