# D-054–D-058 — New RWA workflow screens: carbon reversal liability, offshore decommissioning security, maritime ETS reimbursement, battery passports and mine reclamation bonds

**Date:** 28 November 2026  
**Status:** Desk research completed. One exploratory problem lead (UK offshore DSA); no product candidate, WATCH or GO.  
**Canonical state:** NO PRODUCT SELECTED · NO GO · NO IMPLEMENTATION AUTHORIZED.  
**Outreach:** None.  
**Implementation:** Not authorized.

## Executive summary

Five additional directions were screened. The strongest new operational lead is UK North Sea decommissioning security agreements (DSAs): annual security calculations and approval/dispute workflows span current licensees, historic owners, operators, trustees and sometimes regulators, with high-value collateral and documented High Court disputes. It is retained only as an exploratory problem lead. The Arbitrum case remains unproven because security is held through trusts, letters of credit, guarantees and surety instruments; the workflow may be better served by conventional private SaaS.

Carbon-removal reversal liability is a fresh regulatory signal, but insurers and certification schemes already operate buffer/insurance products and registries; the real uncovered need may be standardised loss/MRV data for underwriting, not on-chain execution. No buyer or chain requirement is established.

Three directions are NO-GO for generic Arbitrum products:
- EU maritime ETS reimbursement and compliance allocation: OceanScore and Data Ocean already automate exposure, cost allocation, invoicing, EUA procurement, pooling and financial settlement.
- EU Battery Passport: the Commission DPP Registry supports APIs and the vendor ecosystem already covers supplier data collection, lifecycle lineage, access controls and registry submission.
- US mine reclamation bonds: regulator and surety systems, bond-management software, reclamation cost models and new risk-data platforms cover the obvious workflow. Recent GAO evidence shows serious underfunding, but an on-chain register does not fix actuarial estimation or guarantee adequacy.

No direction currently meets the required combination of buyer evidence, competitive whitespace, legal feasibility and material Arbitrum necessity.

---

## D-054 — EU carbon-farming reversal liability and buffer/insurance operations

### Regulatory signal

Commission Delegated Regulation (EU) 2026/2617 was published in the Official Journal on 27 November 2026. It supplements the CRCF Regulation with certification methodologies for carbon-farming activities. For temporary net carbon-removal benefits, it requires a liability mechanism: operators/groups must participate in a certification-scheme buffer pool or maintain sufficient insurance/comparable guarantee coverage. The act describes risk-based buffer contributions after recertification audits, replacement of affected traded units after reversal, replenishment by operators for certain avoidable reversals, annual publication of pool composition and stress testing. Insurance must be provided by a company meeting applicable financial-market rules.

This is a new, concrete financial obligation, but its scope must not be overstated: Regulation 2026/2617 is a carbon-farming methodology act, not a general new rule for every carbon credit or all permanent carbon removals.

### Existing market coverage

- Certification schemes already operate registries and buffer-pool mechanisms. Under Implementing Regulation (EU) 2025/2358, certification registries must track operators/certificates, prevent double issuance and double retirement, and remediate erroneous/fraudulent issuance.
- The Commission recognition process requires schemes to operate reliable certification registries that prevent double counting and ensure traceability through the certificate lifecycle. Isometric, Puro Earth, Rainbow Standard, Oncra and Planet First had applications listed on the Commission page; assessment status was in progress when checked.
- Specialist risk providers include CarbonPool (reversal, shortfall and planting insurance), Kita (buffer depletion and related carbon risk), CFC (cancellation and delivery cover), and brokers/markets including Howden, WTW and Aon. Verra's three-year durability insurance pilot began in December 2025.
- A June 2026 Perspectives Climate Research report describes the market as nascent and identifies lack of standardised, accessible MRV, hazard, project and historical reversal data linked to registries as a barrier to underwriting. It also documents short insurance tenors (often annual or 1–3 years), renewal risk, affordability constraints, and mismatch between insurance duration and 40–100-year permanence expectations.

### Potential residual workflow

The only plausible wedge worth further falsification is a neutral, insurer-facing, permissioned data exchange for:
1. project-level MRV and geospatial hazard evidence;
2. risk-assessment versions and buffer contribution calculations;
3. verified reversal/loss events and their classification as avoidable/unavoidable;
4. claim evidence, replacement-unit allocation, and buffer replenishment history;
5. evidence portability between project operator, certification scheme, insurer, buyer and lender.

This would be a data-standard/integration problem first. A normal API/data room could be superior. The schemes' own registries are legally responsible for unit lifecycle control, and no evidence shows insurers or schemes want Arbitrum to execute buffer allocations or insurance claims.

### Decision

**Exploratory lead only; not a candidate.** No buyer interview, budget, pilot, claims-volume data or willingness to pay. No material Arbitrum advantage. Reopen only if a named insurer or certification scheme confirms repeated cross-scheme data reconciliation failures and accepts a shared evidence protocol. Do not build a tokenised carbon registry, carbon-credit marketplace or generic reversal dashboard.

Sources:
- Commission Delegated Regulation (EU) 2026/2617: https://eur-lex.europa.eu/eli/reg_del/2026/2617/oj
- Commission certification schemes and recognition requirements: https://climate.ec.europa.eu/areas-action/carbon-removals-and-carbon-farming/certification-schemes_en
- Commission Implementing Regulation (EU) 2025/2358, Article 16: https://eur-lex.europa.eu/eli/reg_impl/2025/2358/oj
- Perspectives Climate Research, *Managing reversal risk: Assessment, mitigation and compensation* (18 Jun 2026): https://perspectives.cc/wp-content/uploads/2026/06/Managing-Reversal-Risk_Report_pdf.pdf

---

## D-055 — UK North Sea decommissioning security agreement (DSA) annual security workflow

### Why this is a real workflow

UK decommissioning liabilities can extend to current and historic owners. Section 29 notice holders can be jointly and severally liable; Section 34 can create liability for former owners. DSAs are widely used to protect current and former licensees through security for future decommissioning costs.

The OEUK standard DSA creates a recurring multi-party process:
- Operator prepares an annual Proposed Plan with schedule, budget, expected net cost, net value and trigger-date estimates.
- Calculations depend on assumptions for currency, cash flows, inflation, tax relief, operating assumptions and future commodity prices; some assumptions require judgment and can be challenged.
- Parties have an initial 60-day window to approve or object. The standard process allows 90 days for amicable resolution, after which an objection may go to expert determination.
- Security can be cash in trust or alternative provision such as letters of credit, parent guarantees or bonds. An independent trustee holds security.
- Non-payment or default can trigger notices to the trustee, realisation of alternative provision and calls on security.

CMS's October 2024 DSA analysis documents the process and notes the standard form does not provide for email service of notices. The OEUK DSA templates are commercially standardised. CMS also explains that when corporate ownership changes, buyer-group security must replace seller-group security so assets are never left undersecured.

### Evidence of expensive disputes

- *Apache UK Investment Ltd v Esso* [2021] EWHC 1283 (Comm) concerned substantial additional security, including letters of credit, and disputes over how the DSA security amount and proposed plan should be calculated.
- *Apache North Sea Ltd v NEO, Esso, Shell and BP* [2023] EWHC 1345 (Comm) concerned annual DSA security calculations and the role of expert determination. The parties disputed cost estimates, inflation, net value and the scope of the expert's remit.
- A 2023 case report describes a DSA for Forties and Brimmond fields with about £238m forecast capex over 2022–2029. This is a case-specific figure, not a market-wide estimate.

### Buyer and product hypothesis

Potential budget owners:
- field operator / DSA administrator;
- finance or treasury lead at current licensee;
- risk/legal teams at historic licensees with second-tier exposure;
- independent security trustee (e.g. Law Debenture) as a workflow participant rather than presumed buyer.

Potential narrow product: a secure DSA workspace that versions annual plans and assumptions, maps each calculation line to source evidence, manages party approvals/objections and expert-determination deadlines, reconciles each licensee's provision amount against trustee-held cash and alternative security, and records substitutions/releases/default notices. It should not itself make legal determinations or replace the trustee.

### Competitive and legal constraints

- OEUK already supplies standard DSA templates and guidance.
- Law Debenture is a commonly used independent trustee; trustees and banks already control cash trusts and letters of credit.
- Marsh and other brokers advise on surety/guarantee alternatives and collateral efficiency.
- Existing operator ERP, treasury, document and legal workflows may cover much of the process; no dedicated DSA SaaS incumbent was identified in this desk screen, but absence of a discovered vendor is not proof of whitespace.
- DSA security calculations depend on expert judgment and forecasts. A deterministic workflow can preserve assumptions and evidence but cannot resolve valuation disputes.
- A public chain is a poor default for commercially sensitive field economics, tax assumptions and party positions. Cash trusts, LOCs and guarantees remain off-chain legal instruments; a token cannot replace the trustee or bank's undertaking.

### Arbitrum assessment

The multi-party approval and evidence trail is real, but Arbitrum necessity is **not established**. A permissioned SaaS with signed exports is likely the simpler first solution. A chain would become plausible only if several independent DSA parties and the trustee explicitly require a shared, tamper-evident state and a legally enforceable on-chain collateral mechanism. No such demand has been found.

### Decision

**Exploratory problem lead only.** This is the strongest operational lead in this screen because the annual workflow, multi-party roles, collateral and dispute path are concrete and court-tested. It is not a product candidate and not a GO. Next falsification must establish actual manual work, frequency/cost of calculation objections and security substitutions, current software coverage, budget owner, and whether a trustee plus multiple licensees would accept shared state. No outreach without approval.

Sources:
- HMRC overview of DSAs, updated 30 Jul 2026: https://www.gov.uk/hmrc-internal-manuals/oil-taxation-manual/ot28601
- CMS, *Decommissioning Security Agreements in the UK – what you need to know* (Oct 2024): https://cms.law/en/media/law-now/files/decommissioning-security-agreements-in-the-uk-what-you-need-to-know
- CMS UK offshore decommissioning guide (25 Nov 2025): https://cms.law/en/int/expert-guides/offshore-oil-gas-decommissioning-international-guide/united-kingdom
- OEUK standard DSA pack: https://oeuk.org.uk/product/decommissioning-security-agreement/
- *Apache UK Investment Ltd v Esso Exploration and Production UK Ltd* [2021] EWHC 1283 (Comm): https://www.bailii.org/ew/cases/EWHC/Comm/2021/1283.html
- *Apache North Sea Ltd v NEO Energy Central North Sea Ltd & Ors* [2023] EWHC 1345 (Comm): https://www.oeclaw.co.uk/images/uploads/judgments/CL-2022-000573_-_Apache_Judgment_%28Approved%29.pdf

---

## D-056 — EU maritime ETS reimbursement between shipowners and charterers

### Problem evidence

The European Commission states that the shipping company remains responsible for surrendering EU ETS allowances. Where another entity is contractually responsible for fuel purchase and/or ship operation, the shipping company is entitled to reimbursement of the allowance costs; Member States must provide an enforceable reimbursement right. Parties are expected to use contractual clauses to pass costs through.

This is a real multi-party financial obligation, but the commercial workflow is already well served:
- OceanScore Compliance Manager offers vessel-level exposure, forecasting, cost allocation, charter-party/SHIPMAN matching, off-hire handling, invoicing and statements to charterers, open-position/dispute handling, EUA trading and FuelEU pooling.
- Data Ocean markets emissions monitoring, allowance procurement, pooling and financial settlement in one platform.
- BIMCO published an ETS clause for BARECON 2026 that allocates compliance and reimbursement responsibilities between owners and charterers.

### Decision

**NO-GO** for generic maritime ETS reimbursement, EUA cost allocation, allowance escrow or compliance ledger on Arbitrum. The workflow is already commercialised in specialist SaaS, contractual allocation is standardising, and bank/market rails are the natural settlement path. No unserved payment-default or dispute workflow with a named buyer has been evidenced.

Sources:
- European Commission maritime ETS FAQ: https://climate.ec.europa.eu/areas-action/transport-decarbonisation/reducing-emissions-shipping-sector/faq-maritime-transport-eu-emissions-trading-system-ets_en
- OceanScore Compliance Manager: https://oceanscore.com/solutions/compliance-manager/
- Data Ocean: https://www.dataocean.nl/
- BIMCO BARECON ETS clause 2026: https://www.bimco.org/contractual-affairs/bimco-clauses/current-clauses/ets-barecon-emission-trading-scheme-allowances-2026/

---

## D-057 — EU Battery Passport dynamic data, lifecycle handoff and registration proof

### Regulatory signal

From 18 February 2027, each relevant LMT battery, industrial battery above 2 kWh and EV battery placed on the EU market must have a Battery Passport. Dynamic data must be updated at least when a status change is occurring or being considered, such as remanufacture, repurposing or recycling. Repurposing/remanufacturing normally requires a new passport linked to the prior passport; when a battery becomes waste, responsibility passes to the producer, PRO or selected waste operator, and the passport ceases if recycled.

The Commission's FAQ clarifies that a third party may create/update the passport under written authorisation, but ultimate legal responsibility remains with the economic operator placing the battery on the market. The DPP Registry supports API, manual and bulk upload. The FAQ also notes that proof of registration can be demonstrated to a partner or authority, but no automated mechanism for requesting/exchanging this proof was foreseen at the time of publication.

### Competitive coverage

The market already includes:
- Minespider: lifecycle passport from sourcing/manufacture through repair, second life and recycling.
- Circulor, Circularise, Spherity, Siemens DPP4.0, Narravero, osapiens and others: supply-chain data, confidential sharing, credentials, APIs and enterprise DPP.
- Lower-cost and SME-focused vendors such as Batteriepasswerk, Collecta DPP and Veribl, offering supplier onboarding, data collection, registry submission and APIs.

The official Commission registry and standards are also being established. The unautomated exchange of proof of registration is a narrow gap, but an API or signed credential can address it without a public blockchain.

### Decision

**NO-GO** for generic Battery Passport, battery lifecycle registry, proof-of-registration ledger or second-life passport platform on Arbitrum. The mandatory registry and established vendors cover the core product; Arbitrum adds no demonstrated legal or operational advantage. A narrowly scoped supplier-data integration service might be commercially viable as ordinary SaaS, but it does not fit the chain thesis.

Sources:
- Commission Battery Passport FAQ: https://single-market-economy.ec.europa.eu/single-market/digital-product-passport/eu-digital-product-passport-faq-batteries_en
- Commission battery passport timeline: https://single-market-economy.ec.europa.eu/single-market/digital-product-passport/batteries_en
- EU Batteries Regulation, Article 77: https://eur-lex.europa.eu/eli/reg/2023/1542/2026-08-13/eng/
- Minespider: https://www.minespider.com/platform
- Siemens DPP: https://www.siemens.com/en-us/industries/batteries/digital-product-passport/
- Collecta DPP: https://www.collectadpp.com/

---

## D-058 — US mine reclamation financial assurance and phased bond release

### Problem evidence

The US Government Accountability Office's 2026 report found that in six states, the operator bond amount did not cover full reclamation cost for more than half of 125 permits where reclamation was completed between 2019 and 2024; states used other public funds in those cases. The report also notes operators may delay requesting bond release for years after reclamation is complete, in part because preparing release evidence can be costly.

OSMRE's rules allow several instruments—surety bonds, cash/collateral, letters of credit and self-bonds—with state-specific acceptance criteria. Bond release occurs in phases after defined reclamation milestones and regulator review. This is a genuine public-finance and operator working-capital issue.

### Competitive coverage

- MineralsMind markets an API-first risk layer normalising public permit/bond/operator data across 45 US and Canadian regulatory systems and scoring forfeiture risk/bond gaps.
- Costmine SHERPA Reclamation models reclamation costs and supports mine closure cost estimates and financial assurance reporting.
- SITEK has delivered reclamation-bond lifecycle and field-inspection software for a surety carrier.
- Coal Software and other mine-permitting systems track permit-level bond information and modifications.
- Surety platforms such as Bond-Pro manage bond issuance, collateral, indemnity, funds control and exposure.
- Regulators have their own permit and case-management systems; California's SMARA-4 procurement, for example, includes financial-assurance cost estimate and mechanism management.

### Decision

**NO-GO** for generic reclamation bond register, bond-release ledger or tokenised financial assurance on Arbitrum. The critical issue is adequacy of the cost estimate, instrument quality, regulatory review and enforceability—not absence of a ledger. Existing risk data and bond-management vendors already cover key adjacent workflows. Smart contracts cannot replace state-accepted surety, letters of credit, collateral custody or regulatory release decisions.

Sources:
- GAO-27-107499, *Coal Mine Reclamation: Additional Actions Needed to Return Mined Lands to Beneficial Uses*: https://www.gao.gov/products/gao-27-107499
- OSMRE reclamation bonds: https://www.osmre.gov/doiu/resources/reclamation-bonds
- MineralsMind: https://mineralsmind.io/
- Costmine SHERPA Reclamation: https://www.costmine.com/sherpa/sherpa-reclamation/
- SITEK reclamation bond management case: https://siteksolutions.com/bond-management-for-cumberland-surety-insurance/
- California SMARA-4 process exhibit: https://govtribe.com/file/government-file/7-dot-exhibit-g-to-be-process-diagrams-dot-pdf

---

## Comparative decision

| ID | Direction | Pain / recurrence | Buyer clarity | Whitespace | Arbitrum necessity | Decision |
|---|---|---:|---:|---:|---:|---|
| D-054 | Carbon-farming reversal liability | 4/5 | 2/5 | 2/5 | 1/5 | Exploratory lead only |
| D-055 | UK North Sea DSA annual security workflow | 4/5 | 3/5 | 3/5 (not validated) | 1/5 | Exploratory problem lead only |
| D-056 | Maritime ETS reimbursement | 4/5 | 4/5 | 1/5 | 1/5 | NO-GO |
| D-057 | Battery Passport lifecycle | 4/5 | 4/5 | 1/5 | 1/5 | NO-GO |
| D-058 | Mine reclamation financial assurance | 5/5 | 3/5 | 2/5 | 1/5 | NO-GO |

Scores are qualitative desk-research judgements, not market measurements. D-055 has the most concrete recurring multi-party legal workflow, but Arbitrum fit is poor. D-054 has a fresh regulatory signal and data gap, but no proven buyer demand. Neither is ready for product selection.

## Next action

Continue searching for high-value multi-party obligations where the shared state itself is operationally necessary, not merely useful for audit. Prioritise:
- cross-party collateral substitution/release where no single existing trustee or bank is the authoritative workflow owner;
- insurance/reinsurance obligations where event evidence and payment allocation are jointly accepted by multiple independent parties;
- asset-transfer liabilities that require simultaneous replacement of security and legal responsibility.

For D-055, the next falsification step is a narrow non-contact desk review of DSA portfolio size, operator workflow systems, trustee data exchange and whether the same operator/participant pain recurs across fields. No organisation outreach without explicit user approval. No implementation without a specific GO gate.
