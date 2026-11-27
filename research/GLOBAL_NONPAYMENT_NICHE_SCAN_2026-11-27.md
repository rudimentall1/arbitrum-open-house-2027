# Global non-payment niche scan — 27 November 2026

## Executive result

**No new product has GO status. No implementation is authorized.**

This is a new, explicitly authorized market/problem scan outside the closed B2B stablecoin-payment reconciliation cycle (D-028). It does not reopen D-026 or D-028 candidates and does not change the explicit exclusion of Verigate.

The scan reviewed DeFi operations, tokenized-asset operations, supply-chain and trade finance, energy flexibility, EV/battery finance, product passports, reusable packaging, and cold-chain insurance workflows. Most broad categories are already served by specialized platforms, standards, national registries, or incumbent infrastructure. A real problem is not enough; the remaining workflow must be both underserved and reachable by a small team.

**Only one new hypothesis merits a bounded WATCH validation:** cross-border verification of commodity collateral / warehouse liens, focused on gaps between national registries and independent proof of the underlying goods. This is not a recommendation to build a global registry or tokenize warehouse receipts. It is not yet validated buyer demand.

## Scope and event constraints

The target is the Arbitrum Open House São Paulo online Buildathon, scheduled for **8–28 February 2027**, with submission by 28 February at 23:59 BRT. The official Buildathon offers USDG prizes/grants and accepts participants globally, with a South America focus. Projects must deploy on an Arbitrum chain; judging includes smart-contract quality, product-market fit, innovation, and real problem solving. USDG integration receives extra consideration. See:

- https://openhouse.arbitrum.io/
- https://openhouse.arbitrum.io/sao_paulo_version_open_house_buildathon_terms_and_conditions.pdf
- https://arbitrum-nyc.hackquest.io/buildathons/Arbitrum-Open-House-Sao-Paulo-Online-Buildathon

The event fit is not a reason to force every workflow onto a blockchain. Arbitrum should be used only where independently governed parties need a shared, auditable state or programmable settlement that a conventional database/API would not adequately provide.

## Screening results

| Market / workflow | Evidence of problem | Existing substitutes / reason not to clone | Status |
|---|---|---|---|
| Commodity collateral / warehouse-lien verification across jurisdictions | Duplicate and forged receipts, goods pledged to multiple lenders, weak physical stock verification, and no globally searchable cross-jurisdiction registry are documented by trade-finance lawyers and industry sources. | Singapore TFR is already a bank utility with nearly 40 member banks; Brazil B3 has national CPR registry interoperability and collateral-splitting products; Kenya launched a government eWRS central registry in February 2026. Whrrl, Secro, MIT DCI b_verify, FACTOS/WareVault and other platforms address warehouse receipts, inventory finance or collateral records. | **WATCH — narrow cross-border / independent-attestation gap only.** |
| EV battery passport / battery health certification | Battery evidence is increasingly relevant to used-EV trust, valuation, warranty and second-life use. EU passport mandate applies from 18 February 2027 to specified battery classes. | CARA standards and approved testing providers, AVILOO, Moba, Laika Lab, Autel, vsNEW, Mentha, Fawkes Energy, egrid and Cellworth already cover passport, testing, diagnostics or lender-facing risk analytics. Battery-health testing is becoming a normal market feature. | **NO-GO — generic passport or certificate.** |
| EV residual-value underwriting for lenders/lessors | Used-EV residual values are volatile; battery condition is one of several variables affecting residual exposure. | Fawkes Energy and egrid market lender/fleet risk products; Cellworth offers underwriting APIs; other diagnostic and valuation providers exist. Residual-value risk also depends on market pricing, model cycle, warranty, resale liquidity and contract structure, not only battery SoH. | **NO-GO for a generic battery-risk score.** A distinct lender workflow would need new buyer evidence. |
| Distributed energy flexibility / VPP settlement | DSO workflows can include manual activation communications, fragmented data standards and delayed validation/settlement. | Piclo, NODES, GOPACS, UKPN and national flexibility platforms provide procurement and operational APIs. RomeFlex reports blockchain-backed measurement certification; DFLEX research has already demonstrated a blockchain-anchored marketplace pilot. | **NO-GO — generic flexibility marketplace or blockchain settlement.** |
| Reusable packaging / returnable transport items | Regulation creates reuse targets and operators must track asset circulation, deposits and losses. | Rotion, Zerozon, TrackOnline and others handle per-item identity, custody, deposits, asset tracking and reporting. Survey evidence suggests most firms already use asset tracking and many use deposits. | **NO-GO — generic returnable-asset tracker / deposit ledger.** |
| Cold-chain sensor evidence / parametric cargo insurance | Temperature excursions and cargo claims require trustworthy time-series and custody evidence. | Sensitech, Tive, Controlant and others provide monitoring. TRACinSURED already links verified sensor data to parametric cargo cover; ESA-backed pilots and SINMEC address evidence and claims workflows. | **NO-GO — generic sensor-to-insurance payout.** |
| EUDR / smallholder traceability | Smallholders face repeated data requests, verification costs, false positives, weak data rights and exclusion risk. | Koltiva, Meridia.Verify, ICE CoT, Rainforest Alliance, Fairtrade, Farmforce, INTEGRAC and country-specific tools already offer traceability / compliance products. | **NO-GO — generic traceability platform.** Smallholder right-to-correction is a possible research question, not a candidate. |
| Concentrated-liquidity management | Out-of-range positions and unused liquidity can reduce fee capture. | Revert and other LP managers offer position automation, alerts, rebalancing and analytics; many out-of-range positions are intentional limit orders. | **NO-GO — generic LP manager.** |
| DeFi incentive / points ROI analytics | Protocols need attribution and incentive effectiveness measurement. | Formo, Merkl and established analytics products cover campaign analytics, user attribution and rewards segmentation. | **NO-GO — generic incentive dashboard.** |
| Cross-chain solver liquidity rebalancing | Solvers face fragmented liquidity and capital inefficiency. | Everclear's intents/claims/netting design already targets cross-chain rebalancing and cost reduction. | **NO-GO — generic solver rebalancer.** |
| ERC-4337 paymaster abuse monitoring | Paymasters face griefing, sponsorship abuse and policy risk. | Account-abstraction providers, including Alchemy Gas Manager, already provide policies, spending controls, limits and monitoring. Public loss evidence reviewed was not sufficiently corroborated. | **NO-GO — generic paymaster monitor.** |
| DeFi vault / curator risk dashboards | DeFi portfolios face correlated collateral and liquidity risks. | Castle Labs, Compass, Forta and specialist risk/curator platforms already provide risk analytics and monitoring. | **NO-GO — generic vault risk dashboard.** |
| Heavy-equipment passport / hour-meter integrity | Asset history and usage affect resale and financing risk. | OEM telematics and cross-OEM fleet/asset systems dominate the data layer; a public buyer gap was not established. | **NO-GO — generic equipment passport.** |
| Cargo identity / freight fraud detection | Identity theft, false documents, cargo diversion and insider fraud are documented. | A new product centered on actor identity, authority and anti-fraud enforcement would overlap the explicitly excluded Verigate problem frame. | **EXCLUDED — do not repackage Verigate.** |

## WATCH candidate: cross-border commodity collateral verification

### Why the problem is real

HFW's November 2026 briefing describes forged receipts, duplicated genuine receipts, weak physical inspection, borrower-supplied quantity evidence, commingled stock, compromised warehouse operators, and the lack of a central publicly searchable title/registry system across lenders and jurisdictions. The result can be multiple lenders believing they have first-ranking claims over the same goods.

Sources:
- https://www.hfw.com/insights/warehouse-receipt-fraud-and-duplicate-financing/
- https://www.ifc.org/en/what-we-do/sector-expertise/trade-and-supply-chain-finance/global-warehouse-finance-program

### Why this is not an open market yet

Existing systems already cover substantial parts of the workflow:

- Singapore's Association of Banks describes the Trade Finance Registry as a national industry utility with nearly 40 banks. It aims to detect multiple financing and validate trade genuineness through source APIs; cross-jurisdiction connections are described as a future enhancement. https://www.abs.org.sg/industry-guidelines/compliance-and-risk-management/trade-finance-registry
- Brazil's B3 CPR Interoperability shares data among authorized registrars and validates uniqueness of rural product notes to prevent the same instrument being pledged more than once. CPR Guarantee supports collateral splitting, queries, lifecycle management and APIs. https://clientes.b3.com.br/en/w/cpr-interoperability and https://clientes.b3.com.br/en/w/cpr-garantia
- Kenya launched a government-owned Electronic Warehouse Receipt System Central Registry in February 2026 for certification, issuance, pledging, transfer and settlement. https://wrsc.go.ke/2026/02/26/kenya-launches-the-electronic-warehouse-receipt-system-to-transform-agriculture-commodity-trade-in-the-country/
- Whrrl advertises a multi-country agriculture/warehouse-finance network and reports more than $800M in tokenized commodities and $75M in digital loans. https://whr.loans/
- MIT DCI's open-source b_verify protocol explicitly uses warehouse receipts as its first use case. https://www.dci.mit.edu/projects/bverify-supply-chain-records
- Secro, FACTOS/WareVault and other solutions address digital trade documentation, inventory finance or collateral orchestration.

The 2026 Singapore commodity-finance scrutiny is a reminder that a registry does not prove that the underlying trade or physical goods are genuine. Allegations around specific companies must not be treated as proven wrongdoing. A shared ledger also cannot independently verify physical stock: it needs trusted custodians, surveyors, warehouse operators, inspectors or source-system integrations.

### Narrow product hypothesis to test

A **cross-border evidence and lien-conflict layer** that connects existing national registry and source systems rather than replacing them:

1. A commodity lot / warehouse stock position is represented with a stable, jurisdiction-aware reference.
2. A licensed warehouse operator or independent collateral manager signs custody, quantity, quality and inspection attestations.
3. A lender or secured party records a claim, its scope, priority metadata, and later partial release or discharge.
4. Before extending credit, another lender can request a privacy-preserving conflict check against participating registries and counterparties.
5. Sensitive commercial documents remain off-chain; Arbitrum stores only commitments, attestations, state transitions and access-controlled pointers where appropriate.
6. A conflict result is evidence for human/legal review, not a legal determination that a lien is valid or invalid.

This is only viable if participating institutions and source providers agree to share enough data. On-chain immutability does not make a false inspection true, create legal priority, or force a non-participating lender to query the system.

### Buyer validation gate — before any MVP

Find at least two independent organisations among commodity-finance lenders, commodity traders, collateral managers, warehouse operators or trade-finance insurers. For each, obtain:

- A named operational/risk owner and the jurisdictions/commodity flows they handle.
- A redacted real example where a cross-border lien, warehouse receipt, bill of lading or physical-stock verification mismatch caused delay, loss exposure or manual investigation.
- Frequency per quarter and a measurable financial, operational or SLA impact.
- Which national registries, collateral managers, surveyors and commercial tools are already used, and exactly what remains uncovered.
- A credible route to a read-only, non-binding pilot using synthetic/redacted data and no claim of legal enforceability.

**Stop condition:** if the issue is solved through bilateral checks, legal counsel, existing collateral-manager agreements or national registries, or buyers will not share a test dataset, do not build.

## Explicit limitations

- This is public-source desk research, not customer discovery.
- No bank, lender, trader, warehouse operator, collateral manager or insurer has validated this candidate in an interview.
- No buyer has quantified the workflow cost or committed to a pilot.
- Vendor-reported scale and performance are not independently audited here.
- A blockchain is not a source of truth for physical inventory and does not create legal enforceability across jurisdictions.
- No TAM/SAM/SOM estimate is asserted; the evidence does not yet define a credible addressable buyer population.
- No code, smart contracts, tests, lint or build were changed or run.

## Decision

**WATCH, not GO.** Continue only with targeted primary validation of the cross-border collateral-verification gap. Do not build a generic warehouse-receipt tokenization platform, global lien registry, battery passport, asset tracker, sensor oracle or DeFi dashboard. If no two independent operators confirm a measurable gap and a pilot path, record NO-GO and switch the problem frame again.

## Initial buyer-access leads (27 November 2026)

These are public role-based access leads for discovery, not validated buyers, customers, or pilot commitments.

1. **Clemence Avril — Global Head of Commodity Trade Finance, Standard Chartered.**
   - Role supported by Standard Chartered's 31 March 2026 article and 2026 transaction-banking publication.
   - LinkedIn: https://sg.linkedin.com/in/clemence-avril-99a74676
   - Relevant angle: how commodity finance teams validate warehouse receipts, cargo/title documents, physical inventory and competing security interests across jurisdictions.
   - Sources: https://www.sc.com/en/news/corporate-investment-banking/commodity-trade-finance-opportunity-in-disruption/ ; https://www.sc.com/en/uploads/sites/66/content/docs/sc-bankable-insights-transaction-banking-issue-2-2026.pdf

2. **Cauê Todeschini — Global Lead, Trade & Commodity Finance, ING.**
   - Appointment reported 18 March 2026; previously led TCF Americas.
   - LinkedIn: https://www.linkedin.com/in/caue-todeschini
   - Relevant angle: cross-border commodity finance controls and exposure where lenders rely on local registries, warehouse operators and collateral managers.
   - Source: https://www.gtreview.com/news/on-the-move/ing-appoints-global-head-of-trade-and-commodity-finance/

3. **Abhay Dandwate — Chief Risk Officer & Head of Strategy, National Bulk Handling Corporation (NBHC).**
   - NBHC described this current role in a company LinkedIn post in November 2026. NBHC operates warehousing, collateral management, trade facilitation and commodity services.
   - LinkedIn: https://in.linkedin.com/in/abhay-dandwate-24972887
   - Relevant angle: independent stock/warehouse attestations, inspection frequency, lender access, inventory release controls, and interoperability with banks.
   - Sources: https://www.linkedin.com/company/nbhc-india/ ; https://www.nbhcindia.com/executive-management

4. **Additional operator-role lead — OCBC Transaction & Collateral Management.**
   - An advertised AVP role describes monitoring collateral movement, controlling release of financed goods to warehouses/forwarders/shipping companies, and resolving transaction exceptions. This is a role signal, not confirmation of a current product gap.
   - Vacancy: https://ocbc.wd102.myworkdayjobs.com/en-US/External/job/AVP--Transaction---Collateral-Management-Manager_JR00010266

Outreach must test whether cross-border pledge conflicts or independent proof gaps actually occur after existing national registries and collateral-management agreements are used. Do not pitch a blockchain registry as the answer.
