# Global niche scan 03 — 27 November 2026 (D-031)

## Executive result

This pass screened five additional problem spaces: insurance claims/evidence, industrial supplier quality and warranty recovery, distributed-energy flexibility settlement, cross-border electronic trade documents, and SME receivables / supply-chain finance.

**No new product is promoted to GO or WATCH.** The scan found real operating problems, but generic product propositions are already covered by specialist vendors, standards, or infrastructure. Public desk research did not establish a buyer-specific gap, quantified cost, named budget owner, or pilot willingness. No implementation is authorized.

D-029 cross-border commodity collateral / warehouse-lien verification remains WATCH only and is not replaced by this scan. D-026, D-028, and D-030 remain closed for their respective search sets. Verigate remains explicitly excluded.

## 1. Insurance claims evidence and subrogation

### Observed problem
Claims teams reconstruct timelines and collect documents from insured parties, carriers, brokers, surveyors, logistics systems, emails, and sensor records. Disputed custody/handoff timestamps and repeated evidence requests can delay adjustment and recovery.

### Competitive reality
- Guidewire, Duck Creek, Sapiens, Majesco, Five Sigma, Snapsheet, Origami Risk, and other claims platforms cover broad claims workflows and/or recovery.
- Specialist evidence-workflow products such as Ordero structure requests, submissions, responses, and audit history.
- Cargo-specific solutions such as Boni build shipment chronology and evidence packs from documents, movement events, and communications.
- LoadGuard describes shipment-level evidence records and a future claims/dispute workflow.
- On 6 October 2026, TRACinSURED launched a commercial cargo-protection program combining Tag-N-Trac sensor data, Otonomi parametric insurance, and Solent freight lanes. This directly overlaps the generic sensor-trigger-to-insurance proposition.

### Decision
**NO-GO for generic claims evidence, cargo chronology, subrogation workflow, or sensor-triggered payout infrastructure.** The market has full-suite incumbents and focused entrants. A narrow specialty workflow could still exist, but no independent buyer evidence identifies one.

### What would reopen it
A claims director, TPA, marine insurer, or cargo broker must provide redacted examples of a recurring claim class that current systems cannot handle, quantified handling/recovery cost or missed contractual time bars, and willingness to test a bounded workflow. Merely saying claims are document-heavy is insufficient.

## 2. Industrial manufacturing supplier quality, warranty and recovery

### Observed problem
Supplier nonconformance, corrective-action evidence, batch/lot traceability, warranty adjudication, and supplier recovery can span manufacturer ERP, MES, QMS, dealer systems, and supplier portals.

### Competitive reality
- Kinetic Data markets supplier portals and supplier corrective-action workflows integrated with ERP/MES/QMS.
- ShopProof offers nonconformance, CAPA, material review, and document-control workflows.
- Tavant covers warranty administration, dealer claims, part returns, supplier recovery, and AI-assisted adjudication.
- Syncron and PTC cover warranty and service lifecycle workflows.
- Claimlane, ReverseLogix, and other returns/RMA products cover partner claims and returns.

### Decision
**NO-GO for generic batch provenance, supplier-quality evidence ledger, warranty claims, or supplier-recovery workflow.** The core workflow is already served by QMS, ERP extensions, warranty suites, and RMA vendors. A blockchain record does not establish that a physical batch was inspected correctly or that a supplier is legally liable.

### What would reopen it
Require two independent manufacturers/OEMs to identify the same cross-company dispute that persists after ERP/QMS/warranty tools; provide redacted lot/claim records, frequency, cost, and the exact missing shared-state function. No such evidence was found in this pass.

## 3. Distributed-energy flexibility verification and settlement

### Observed problem
Flexibility markets require baselines, telemetry, activation records, allocation of delivered volume, performance verification, and payment/penalty calculations. Multi-BRP scenarios and product-specific corrections can complicate attribution and create disputes. ENTSO-E's 2026–2030 implementation plan explicitly identifies these allocation and compensation complications and regulatory heterogeneity.

### Competitive reality
- Piclo documents seller meter-data submission, monthly settlement reports, invoices, and dispute handling for supported markets.
- Elexon's Flexibility Market Rules v2.3, effective 12 May 2026, define verification and settlement methodology for DNOs and FSPs.
- Existing market platforms include Piclo Flex, NODES, Flexible Power, Enedis tenders, GOPACS, ElectronConnect, and others.
- A 2026 review of European DER participation describes market heterogeneity, baseline, telemetry, qualification, and settlement challenges; these are real ecosystem-level constraints, not proof of a standalone software buyer.
- A 2026 research paper on DFLEX describes a blockchain-anchored marketplace and one-year simulated-production island pilot with 54 DERs and 935,558 settlement records. This is not proof of commercial demand, but it further weakens a generic blockchain-marketplace thesis.

### Decision
**NO-GO for a generic flexibility marketplace, baseline-verification layer, or settlement ledger.** Existing platforms already cover procurement and parts of settlement; rulebooks and national market structures define important processes. No buyer has demonstrated a neutral cross-platform settlement gap that warrants a new shared ledger.

### Residual question (not a candidate)
Could an independent operator need a cross-market audit of multi-BRP volume attribution and compensation where no single platform owns the complete record? This remains an unvalidated question only. Do not promote it to WATCH without an operator providing an actual disputed settlement, recurring frequency, quantified value, and a pilot path.

## 4. Cross-border electronic trade documents / eBL interoperability

### Observed problem
Banks and trade participants need to verify control, authenticity, legal effect, and transfer of electronic bills of lading across platforms and jurisdictions. Adoption and legal recognition remain uneven.

### Competitive reality
- On 4 June 2026, DCSA announced that CargoX, edoxOnline, TradeGo, WaveBL, and eTEU had implemented its Standard Annex v2 with IGP&I approval, enabling cross-platform exchange under a common framework.
- The FIT Alliance's 21 October 2026 survey reported 51.1% eBL adoption, but only 11.2% exclusive use; only 22.2% of bank respondents reported at least partial eBL use. Interoperability/platform fragmentation remained the most-cited concern.
- The DCSA framework includes the PINT API, a Control Tracking Registry, and multilateral legal arrangements. ICE CargoDocs/IQAX also describe an alternative control-tracking route.
- The ecosystem already has 22 listed eBL services, including major approved providers.

### Decision
**NO-GO for another eBL registry, document wallet, or generic interoperability layer.** Standards-based exchange and control tracking are already advancing. Low bank adoption is a meaningful signal but does not by itself identify a product-shaped unmet workflow or a buyer willing to pay.

### What would reopen it
A bank trade-operations or trade-finance team must show a recurring case where a document transfer is technically interoperable but still cannot be accepted, financed, or released because of a specific control, legal, or operational verification gap. Require redacted cases and a named process owner.

## 5. SME receivables finance / invoice fraud / supply-chain finance

### Observed problem
SMEs face onboarding friction and constrained access to working capital. Lenders need to validate invoices, receivables assignments, underlying trade activity, and existing financing interests to reduce duplicate financing and fraud.

### Competitive reality
- MonetaGo directly markets real-time duplicate-financing detection, invoice validation, receivables/collateral verification, and integration with national registries and government data.
- ICC Academy's 2026 analysis identifies SME supply-chain finance constraints and recommends e-invoice, logistics, tax, open-banking, anchor-confirmation, assignment-tracking, and fraud/dilution controls.
- The proposed generic cross-lender invoice/receivables registry overlaps MonetaGo and national collateral/e-invoicing systems.
- This direction is adjacent to D-029 commodity collateral and must not be used to repackage the same global registry thesis.

### Decision
**NO-GO for generic invoice verification, duplicate-financing registry, receivables registry, or SME SCF marketplace.** Strong direct overlap and adjacency to D-029; no new differentiated buyer workflow was demonstrated.

## Comparative conclusion

| Area | Real problem signal | Existing coverage | Decision |
|---|---|---|---|
| Insurance claims / cargo evidence | High | Claims cores, evidence tools, cargo-specific products, parametric insurance | NO-GO generic |
| Manufacturing supplier quality / warranty | High | ERP/QMS, supplier portals, warranty and RMA suites | NO-GO generic |
| Energy flexibility settlement | High, including documented multi-BRP allocation complexity | Piclo, Elexon rules, NODES, GOPACS, national platforms | NO-GO generic; residual question only |
| eBL interoperability | High; bank adoption still lags | DCSA PINT/CTR/legal framework and established platforms | NO-GO generic |
| SME receivables / SCF fraud | High | MonetaGo, national registries, e-invoicing and lender systems | NO-GO generic |

## Arbitrum fit

None of the screened generic propositions demonstrates why Arbitrum is required. A shared chain is not a substitute for authoritative sensor data, legal title, inspection quality, national market rules, bank acceptance, or source-system integration. Multi-party attestations and shared state could become useful only after a buyer proves that independent organizations need a common, independently verifiable event/settlement record and cannot achieve the required result with signed messages, standards, or a conventional database.

## Evidence boundary

- This is public-source desk research, not customer discovery.
- Vendor claims and launch announcements establish product coverage, not independently verified performance.
- Survey adoption figures do not prove buyer demand for a new entrant.
- Regulatory and standards documents establish process complexity, not willingness to pay.
- No interviews, production datasets, buyer-specific quantified costs, paid pilots, or WTP commitments were obtained.
- No product is selected. No code, MVP, or implementation is authorized.

## Sources

1. ENTSO-E, RDI Implementation Plan 2026–2030 (20 March 2026): https://consultations.entsoe.eu/r-i/innovation-implementation-plan-2026-2030/supporting_documents/260324_entsoe_innovation_implementation-plan_for_public_consultationpdf
2. Piclo settlement documentation: https://support.piclo.com/article/253-settlement
3. Elexon Flexibility Market Rules — Verification and Settlement v2.3: https://rulebook.elexon.co.uk/flex-market/documents/fmr-vsm-verification-settlement-methodology
4. DFLEX blockchain-anchored flexibility marketplace paper: https://doi.org/10.3390/en19153627
5. TRACinSURED launch, 6 October 2026: https://www.prnewswire.com/news-releases/tracinsured-launches-parametric-cargo-insurance-that-pays-on-verified-sensor-data-not-paperwork-302899339.html
6. Boni cargo claims evidence: https://www.boni.one/solutions/logistics-operations/cargo-claims-evidence
7. Ordero insurance evidence management: https://www.atriodocs.com/
8. Kinetic manufacturing supplier workflows: https://www.kineticdata.com/solutions/manufacturing/
9. 2026 warranty claims software comparison: https://cloudsquid.io/blog/best-returns-warranty-claims-management-software/
10. DCSA five eBL platforms interoperability announcement, 4 June 2026: https://dcsa.org/newsroom/five-ebl-platforms-adopt-dcsa-interoperability-annex
11. FIT Alliance / ICC eBL survey, 21 October 2026: https://iccwbo.org/news-publications/news/electronic-bill-of-lading-adoption-grows-as-focus-shifts-to-interoperability/
12. eBL platform directory, verified 16 October 2026: https://www.ebl.com/platforms
13. MonetaGo trade and finance solutions: https://www.monetago.com/what-we-do
14. ICC Academy, SME supply-chain finance gap: https://academy.iccwbo.org/trade-finance/article/smes-supply-chain-finance-gap/

## Next step

Continue discovery in a genuinely different problem space rather than adding another generic registry, dashboard, evidence ledger, or marketplace. Before deep research on any candidate, identify the economic buyer and a credible access path. Require two independent operator confirmations, real examples, recurrence, quantified impact, a specific gap beyond substitutes, and willingness to test. Keep D-029 as the sole existing WATCH hypothesis until primary evidence changes its status.
