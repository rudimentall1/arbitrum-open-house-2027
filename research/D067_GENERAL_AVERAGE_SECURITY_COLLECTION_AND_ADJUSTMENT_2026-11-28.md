# D-067 — General average security collection and adjustment workflow

**Date:** 28 November 2026  
**Scope:** International maritime general average (GA), focusing on cargo security collection, release coordination, later adjustment and contribution settlement.  
**Decision:** **NO-GO** for a generic Arbitrum product.

## Executive conclusion

General average is a real, multi-party and operationally expensive maritime process. After a casualty, shipowners may declare GA and appoint an average adjuster. Cargo interests generally provide an Average Bond and, where insured, an insurer's Average Guarantee; uninsured interests may provide a cash deposit. The carrier can release cargo once satisfactory security is received, while the final adjustment is prepared later.

However, this is not an unserved workflow. Specialist adjusters already operate security-collection portals and dedicated technology for large-scale collections. CMI, IUMI and ICS have published and approved standard security forms and guidance. Marine claims administrators and carriers provide adjacent support. The core professional judgement and calculation remain with the appointed average adjuster.

No named buyer-side residual exception, quantified incremental cost beyond existing portals, budget owner, willingness to pay or legally meaningful Arbitrum shared-state requirement was established. A permissioned adjuster portal, electronic guarantees, bank/trust accounts and signed documents are better default tools.

## 1. Workflow and pain

1. A casualty occurs and the shipowner declares general average where applicable.
2. An average adjuster is appointed and issues notices to cargo interests.
3. Cargo interests submit a signed Average Bond and commercial invoice; cargo insurers provide an Average Guarantee. Uninsured cargo may be required to lodge a cash deposit.
4. Security is checked and accepted; cargo is released without waiting for the final GA calculation.
5. The adjuster gathers casualty evidence, invoices, salvage/towage accounts, survey reports, cargo values and claims for sacrifices/expenses.
6. The adjuster determines allowable GA items, contributory values and each party's share; contributions and deposits are then settled/refunded.

CMI guidance states that security is normally required to lift the shipowner's lien while the adjustment is prepared. It also distinguishes the bond from the insurer guarantee and cash deposit. The 2022 guidance explains the document collection expected from cargo interests and insurers. York-Antwerp Rule E places the burden of proof on parties claiming GA and sets information-submission timelines; Rule XVII governs contributory values; Rule XXII addresses cash deposits.

**Where pain occurs:** high-volume security collection after major container-ship casualties; missing or inconsistent bonds, guarantees and invoices; coordination across cargo owners, insurers, carriers, agents and adjusters; and long-running evidence collection and adjustment. Cargo release can be delayed while security is incomplete. Final adjustments can take years in complex cases.

The existence of a long process does not by itself prove a software gap: much of the duration arises from casualty investigation, salvage/repair accounts, third-party claims and valuation, not merely document routing.

## 2. Existing providers and substitutes

- **Richards Hogg Lindley (RHL):** publishes a security-collection workflow instructing cargo interests to log into its portal, complete required documents and submit the bond, guarantee and invoice. RHL says it manages security provision and later calculates how GA expenses are shared.
- **Charles Taylor:** describes dedicated technology for large-scale salvage-security collections and provides a client portal for large GA and salvage cases. It explicitly notes that security collection workload grows with the number of cargo interests and that portals are used to streamline the process.
- **Average adjusters and marine claims administrators:** specialist adjusters manage the process and calculation; W K Webster / Gallagher Bassett supports marine claims, GA and salvage across the claims lifecycle.
- **Carriers:** Maersk provides customer guidance and a Value Protect product that can remove the customer's need to place GA/salvage security within its coverage limit, subject to documentation.
- **Industry standards:** CMI's GA Guidelines and standard bond/guarantee forms have been approved by IUMI and ICS. The forms still require case-specific information supplied by the shipowner or appointed adjuster.

This is direct workflow coverage, not merely adjacent generic claims software. Vendor capability statements are vendor-reported; public evidence does not independently audit portal adoption or processing performance.

## 3. Buyer, budget and economics

Potential buyers for workflow software would be average-adjusting firms, marine insurers/claims administrators, shipowners or carriers handling large casualty collections. But the economic buyer is not established:

- No named adjuster or carrier disclosed a recurring failure that remains after using its portal.
- No quantified cost per case, security-processing delay, cargo demurrage/warehousing exposure attributable specifically to the software gap, or administrative cost was found.
- No budget owner, procurement signal, buyer interview, paid pilot or willingness-to-pay evidence was obtained.
- A large casualty may create a temporary surge, but GA events at major scale are not frequent enough to assume a high recurring software budget for every participant.

A standalone product would need to prove incremental value over the adjuster's existing portal and the carrier/insurer claims systems, not merely restate the complexity of GA.

## 4. Arbitrum fit and legal boundary

The multi-party nature of GA is not sufficient justification for a public blockchain.

- The adjuster is the professional authority for collecting evidence and preparing the adjustment; a public chain cannot decide which expenses are allowable or verify the underlying casualty facts.
- The bond and guarantee are contracts. Their enforceability comes from their wording, signatories, applicable law and contractual framework—not from a token or ledger entry.
- Cash deposits are held under applicable trust/client-money or banking arrangements. York-Antwerp Rule XXII addresses the custody and release of deposits; an onchain representation does not replace the required legal account or custody arrangement.
- Cargo release is operationally controlled by the carrier/shipowner after satisfactory security. A smart contract cannot compel a carrier, port or customs authority to release physical cargo.
- Confidential invoices, cargo values, insurance details and casualty evidence favor controlled access. A portal, API, electronic signature, document hash and conventional audit log can provide the necessary traceability.

**Arbitrum fails the material-advantage test:** no legally required shared state or cross-party execution step has been identified that cannot be handled by the appointed adjuster's portal, insurer guarantee, bank/trust account and ordinary contract/evidence infrastructure.

## 5. Decision

**NO-GO** for:
- a generic GA security-collection portal or parallel registry on Arbitrum;
- tokenized GA bonds or insurer guarantees;
- onchain cash-deposit custody or contribution settlement;
- a general-average claims/adjustment marketplace;
- an immutable casualty-evidence ledger marketed as a replacement for adjuster records.

Reopen only if a named adjuster, insurer or carrier provides a recent redacted case showing all of the following:
1. a recurring exception that persists across at least two incumbent systems or counterparties;
2. measurable delay, cost or recovery loss attributable to that exception;
3. a named budget owner and willingness to pilot/pay;
4. a legally valid shared state or conditional execution requirement that existing portals, APIs, e-signatures, bank guarantees and trust accounts cannot provide.

## 6. Evidence limitations

- This is desk research, not interviews with adjusters, shipowners, cargo insurers or carriers.
- RHL and Charles Taylor descriptions establish that portals and dedicated technology exist; their public pages do not quantify customer counts, adoption, error rates or processing-time improvements.
- CMI guidance and York-Antwerp Rules describe the process and contractual framework; the applicable rules and law vary by contract and jurisdiction.
- Long adjustment timelines are documented in industry guidance and educational sources, but the reviewed material does not isolate the portion caused by software/document workflow.
- No market-wide GA incident frequency, total addressable software spend or willingness to pay is established.

## Sources

1. Comité Maritime International, GA Guidelines and Security Forms: https://comitemaritime.org/work/cmi-general-average-guidelines-and-security-forms/
2. CMI Guidelines relating to General Average, 2nd edition 2022 (IUMI-hosted PDF): https://iumi.com/document/view/CMI_GA_Guidelines_and_Security_Forms__6422a6b569b3d.pdf
3. York-Antwerp Rules 2016, Russian Maritime Law Association (Rules E, XVII and XXII): https://rumla.org/en/documents/1-2025-160-177.html
4. Richards Hogg Lindley, Security Collection: https://www.richardshogglindley.com/security-collection/
5. Charles Taylor, Average Adjusting: https://www.charlestaylor.com/en/claims-solutions/adjusting/marine/marine-adjusting/average-adjusting/
6. Charles Taylor, “GA is as relevant as ever to cargo claims management”: https://www.charlestaylor.com/en/news/news-post/ga-is-as-relevant-as-ever-to-cargo-claims-management/
7. Gard, “General Average: Managing the process and protecting the recovery” (2026): https://www.gard.no/en/insights/general-average-managing-process-protecting-recovery/
8. Maersk, General Average FAQ: https://www.maersk.com/de-de/support/faqs/how-does-general-average-work
9. Gallagher Bassett / W K Webster, Ocean Marine Claims Management: https://www.gallagherbassett.com/solutions/claims-management/ocean-marine-claims-management/

## Canonical status

**NO PRODUCT SELECTED · NO WATCH · NO GO · NO IMPLEMENTATION AUTHORIZED.**
