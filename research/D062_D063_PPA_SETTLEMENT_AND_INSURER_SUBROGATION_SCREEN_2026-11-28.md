# D-062–D-063 — Renewable PPA settlement and inter-insurer subrogation screen

**Date:** 28 November 2026  
**Status:** Desk-research screen only. No product candidate, WATCH, GO or implementation authorization.

## D-062 — Corporate renewable PPA settlement, invoice reconciliation and negative-price allocation

### Hypothesis
A neutral settlement/evidence layer could help renewable generators, corporate offtakers, utilities and balancing parties calculate complex PPA obligations, reconcile meter data and invoices, allocate negative-price/curtailment risk, and settle disputes.

### Evidence of a real problem
- European Commission Recommendation (EU) 2026/917 describes physical PPAs as carrying balancing/scheduling obligations and volume/imbalance risk, while financial PPAs settle against reference prices and leave physical supply and imbalance management separate. Pay-as-produced contracts transfer production/profile risk differently from shaped/baseload products.
- Eurelectric's 2 October 2026 interview with LevelTen describes negative prices and renewable cannibalisation as drivers of more complex PPA clauses: non-settlement thresholds, price floors, curtailment rights, replacement Guarantees of Origin and settlement caps. The parties need to understand each other's risk exposure.
- Pexapark's 2026 market outlook reports 13.1 GW of disclosed European PPA capacity across 247 deals in 2025, down from 15.3 GW in 2024; it reports growth in flexibility purchase agreements and battery optimisation. These are vendor-reported market figures.
- Pexapark's negative-price analysis documents multiple contractual approaches: full compensation by buyer, limited-hour/price-floor compensation, or no compensation with seller curtailment. The exact trigger and allocation depend on negotiated terms.
- CFEX publishes a detailed customer case where an enterprise with 12+ virtual PPAs and more than $5m annual spend previously spent days manually checking invoices. CFEX imports invoices and meter data, recalculates settlement and flags discrepancies above $300. This is a vendor-reported case, not an independent benchmark.
- CFEX also documents a renewable developer with 2+ GW of solar/storage and 23 PPA, tolling and hedging contracts. Its prior monthly process relied on analyst-maintained Excel workbooks; wholesale market revisions required recalculation and adjustment invoices. CFEX integrated with CRM, ERP and ETRM and automated daily accrual and monthly billing. Vendor-reported case.
- ACER's 2026 PPA market landscape lists operating public and private platforms across the EU, including LevelTen Energy, Pexapark, 3 Degrees/Zeigo, Otark, Renewable Exchange, Enmacc, FlexPower, ICAP and others.

### Buyer and competitive boundary
Likely budget owners are renewable IPPs, utilities/aggregators and large corporate energy buyers: commercial operations, energy procurement, finance/settlement and risk teams.

The problem is commercially meaningful, but the generic product shape is already directly served:
- CFEX: contract modelling, meter-data ingestion, daily settlement, billing, invoice reconciliation, EAC inventory and ERP/ETRM integration.
- LevelTen, Pexapark, Zeigo/3 Degrees and other ACER-listed platforms: PPA procurement, market access, pricing intelligence and contract workflows.
- Existing ETRM, ERP, metering and market settlement systems remain the authoritative sources for prices, meter data, imbalance and accounting.

The specific evidence of manual reconciliation is strong enough to establish a pain point, but it is already productised by a specialist vendor. No public evidence identifies an uncovered exception beyond those platforms or a buyer asking for a neutral shared ledger.

### Arbitrum fit
Not established. Meter revisions, market prices, balancing responsibility and PPA interpretation are sourced from market operators, meters and bilateral legal contracts. A smart contract cannot make a disputed meter value final or replace a balancing responsible party. A shared settlement contract could only execute after both parties accept verified inputs and the legal payment mechanics; no buyer evidence shows that this is preferred over CFEX-style SaaS, ERP integration or bank payments.

### Decision
**NO-GO** for generic PPA settlement, invoice reconciliation, negative-price allocation, renewable certificate inventory or tokenized energy marketplace on Arbitrum.

Reopen only if a named group of counterparties identifies a repeated cross-platform exception (for example, post-publication meter revisions across multiple PPAs, multi-entity allocation or disputed curtailment adjustments) that incumbent systems cannot handle, quantifies the trapped cash/effort, identifies the budget owner and demonstrates a legally meaningful shared execution requirement.

---

## D-063 — Inter-insurer motor subrogation and recovery settlement

### Hypothesis
A shared claims-evidence and payment layer could coordinate insurer-to-insurer subrogation demands, liability acceptance, arbitration evidence, recovery allocation and settlement after one insurer compensates its policyholder.

### Evidence of a real workflow
- Inter-insurer subrogation is a genuine multi-party obligation: one insurer pays its own insured, then seeks recovery from another carrier believed liable for the loss. Liability, evidence, outlay and payment must be reconciled.
- Arbitration Forums, Inc. is a not-for-profit forum operated for insurer members. Its rules and FAQ describe compulsory and voluntary intercompany arbitration in specified claim categories and monetary limits. The forum is the established dispute-resolution venue for participating members.
- Arbitration Forums' rules state that intercompany arbitration decisions concern signatory companies; an arbitrator's decision does not itself determine the insured's separate rights.
- Industry training material describes bilateral insurer subrogation portals that exchange claim facts, confirm liability, upload outlays and trigger electronic payment. This demonstrates that the workflow can already be automated in bilateral arrangements.
- Commercial claims platforms include Guidewire, Duck Creek, Majesco, Sapiens, Origami Risk and others with claim, payment, recovery/subrogation and litigation capabilities. Specialist workflow vendors also target recovery desks and arbitration case preparation.

### Buyer and competitive boundary
Potential buyers are P&C insurers, self-insured fleets, TPAs and recovery/subrogation operations. However:
- Arbitration Forums already provides the adjudication venue and member rules for relevant US intercompany disputes.
- Carrier claims systems already hold claim files, reserves, payments and recovery tasks.
- Bilateral portals and direct integrations already automate matching, liability confirmation and settlement in participating markets.
- A vendor workflow layer can assemble evidence and track filing clocks without needing a public chain.

No uncovered multi-insurer workflow, quantified delay/float, unserved jurisdiction, buyer budget or paid-pilot signal was identified in this screen.

### Arbitrum fit
Poor. Claims evidence is private and sensitive; liability is often disputed and determined by contractual rules, claims professionals or an arbitration forum. A public ledger does not establish liability, bind non-participating carriers or replace the forum's decision. Payment remains a regulated fiat obligation. A permissioned workflow with access control, audit logs and integrations is the more plausible architecture.

### Decision
**NO-GO** for generic inter-insurer subrogation ledger, claims arbitration marketplace, recovery registry or tokenized settlement layer on Arbitrum.

Reopen only if a specific jurisdiction/line of business has no functioning forum or bilateral portal, multiple carriers identify the same recurring operational gap, the financial cost is quantified, and the proposed shared execution is legally enforceable and materially better than a permissioned claims workflow.

---

## Comparative conclusion

Both directions contain real financial obligations and repeated operations. Neither offers a credible generic Arbitrum wedge:
- PPA settlement has strong buyer pain evidence, but specialist contract/settlement platforms and ETRM/ERP integrations already automate it.
- Inter-insurer subrogation has multi-party evidence and payment workflows, but established arbitration forums, bilateral portals and claims systems own the core process.

No product selected, no candidate promoted, no outreach and no implementation authorized. Canonical project status remains **NO PRODUCT SELECTED · NO GO · NO IMPLEMENTATION AUTHORIZED**.

## Sources
1. European Commission Recommendation (EU) 2026/917 on PPAs, 22 Apr 2026: https://eur-lex.europa.eu/eli/reco/2026/917/oj/eng/pdf
2. Eurelectric / LevelTen interview, *The Next Evolution of Clean Energy Procurement*, 2 Oct 2026: https://www.eurelectric.org/news/levelten-interview-ppa-and-energy-procurement/
3. ACER, *Monitoring the EU PPA market*, 2026 consultation annex: https://www.acer.europa.eu/sites/default/files/documents/Official_documents/Public_consultations/PC-2026-E-05/Market-integration-2026-Annex-EU-PPA-market-EoR.pdf
4. Pexapark, *Renewables Market Outlook 2026*, 27 Jan 2026: https://pexapark.com/blog/price-volatility-accelerates-race-to-value-across-clean-energy-markets-pexapark-market-outlook-2026/
5. Pexapark, *Negative Prices in PPAs*: https://pexapark.com/blog/negative-prices-in-ppas-the-state-of-play-in-2024/
6. CFEX, enterprise PPA invoice reconciliation case: https://cfex.ai/case-studies/enterprise-reconciliation
7. CFEX, renewable developer PPA settlement case: https://cfex.ai/case-studies/CFE_Owners
8. CFEX, product capabilities: https://www.cfex.ai/products
9. Arbitration Forums, Frequently Asked Questions: https://homeqa08.arbfile.org/about-us/frequently-asked-questions
10. Botminds, subrogation demand and arbitration workflow guide, 28 Oct 2026: https://www.botminds.ai/solutions/subrogation-demand-and-arbitration/arbitration-case-management-software
11. RISC, *Insurance Claims Handling*, bilateral insurer subrogation portal example: https://www.riscinstitute.net/site_media/textbooks/WCETB5_2024-25_reference.pdf
12. NAIC Innovation, Cybersecurity and Technology Committee materials, 25 Mar 2026: https://content.naic.org/sites/default/files/national_meeting/Materials-H-Cmte032526.pdf

*Source caveats:* PPA platform capabilities and customer outcomes are vendor-described; do not treat them as independent performance benchmarks. Pexapark market statistics are provider-reported. Arbitration Forums rules and FAQs describe the forum's own scope and procedures. This is desk research, not customer validation or legal advice.
