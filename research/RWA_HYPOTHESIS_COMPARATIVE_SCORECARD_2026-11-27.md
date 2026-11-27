# D-045 — Comparative RWA hypothesis scorecard (27 November 2026)

## Decision

**No product is selected. No GO or implementation is authorized. D-040 precatório transfer-eligibility / token-allocation reconciliation is the strongest remaining near-term discovery lead, but it is not a product candidate or WATCH.**

D-033 has the strongest severity signal, D-040 has the clearest concrete workflow and identifiable operators, and D-038 has the clearest written compliance obligations. None has demonstrated a differentiated paying buyer or a material Arbitrum requirement. The correct decision is to prioritise D-040 for a bounded next validation step while continuing parallel discovery—not to build it.

D-029 is excluded from this comparison: D-044 closed CollateralLink NO-GO after direct competitor overlap and no buyer-validated differentiation.

## Method

A qualitative, evidence-weighted comparison of the three remaining live discovery tracks. Scores are directional judgements based on the existing repository evidence, not measured market statistics. Each criterion is scored 1 (very weak) to 5 (strong); weighted score is out of 5.

| Criterion | Weight | D-033 collateral realisability | D-038 CVM pilot evidence ops | D-040 precatório transfer control |
|---|---:|---:|---:|---:|
| Problem urgency / specificity | 20% | 5 | 4 | 4 |
| Identifiable buyer and budget path | 20% | 2 | 2 | 3 |
| Differentiated whitespace beyond substitutes | 20% | 1 | 2 | 2 |
| Recurring commercial potential | 15% | 3 | 1 | 3 |
| Material Arbitrum fit | 15% | 1 | 1 | 1 |
| Bounded validation / pilot feasibility | 10% | 2 | 3 | 3 |
| **Weighted score** | **100%** | **2.4 / 5** | **2.2 / 5** | **2.7 / 5** |

### Interpretation

- The scores do not establish market size, willingness-to-pay or PMF. They force explicit comparison of the evidence already collected.
- No track scores 3/5 overall. The weak differentiation and Arbitrum-fit scores are decisive constraints.
- D-040's buyer-path score reflects identifiable operators (Preks and Adianta Jus) and outreach already sent—not confirmed buyers, meetings, budgets or demand.
- D-033's urgency score reflects Bank of England and ESMA supervisory attention to tokenised collateral access and stressed realisation. It is not evidence of a software procurement need or tokenisation-caused customer loss.
- D-038's high specificity reflects explicit CVM Resolução 249 obligations. Its unpaid, 60–90 day pilot and uncertain post-pilot budget weaken recurring commercial potential.

## Track-by-track assessment

### D-033 — tokenised collateral realisability under stress

**Strength:** The Bank of England and ESMA identify concrete questions about legal control, transfer, conversion and realisation of tokenised collateral after default. The economic stakes can be high.

**Weakness:** No tokenisation-specific default incident, customer loss, budget owner, independent buyer confirmation or pilot willingness has been established. Eurex/HQLAx/Clearstream already supports a live mobilisation path; DTCC/DTC has tokenisation and collateral infrastructure; existing CCP, CSD, custodian and collateral-management controls may already cover the workflow. Arbitrum fit is unsupported.

**Verdict:** Strongest problem-severity signal, but not a product. Keep as a narrowly scoped problem-validation question only.

Evidence: [D-033](RWA_INFRASTRUCTURE_SCAN_2026-11-27.md), [D-035](RWA_COLLATERAL_REALISABILITY_BUYER_CHECK_2026-11-27.md), [D-037](RWA_CCP_DEFAULT_OPERATIONS_FOLLOWUP_2026-11-27.md).

### D-038 — CVM DLT pilot evidence operations

**Strength:** Resolução CVM 249 specifies read-only regulator access, structured extraction/API, timestamped audit trails, incident notifications and fortnightly/final reporting. The workflow is concrete and testable.

**Weakness:** The pilot is voluntary and unpaid, lasts 60 days with a possible 30-day extension, and uses fictitious data. The eligible network-manager pool is narrow. The need may be a one-off implementation burden handled by existing GRC/SIEM/data platforms or consultancies. No recurring budget owner or material Arbitrum requirement exists.

**Verdict:** Easy to explain and prototype, but weak commercial durability. Do not select merely because the regulation is specific.

Evidence: [D-038 CVM DLT pilot evidence operations](CVM_DLT_PILOT_EVIDENCE_OPERATIONS_2026-11-27.md).

### D-040 — precatório transfer-eligibility and token-allocation control

**Strength:** Resolução CNJ 705/2026 creates a concrete, multi-step assignment process and eligibility boundaries. Tokenised/structured precatório operators already exist. Preks and Adianta Jus are identifiable operator access points; research emails were sent.

**Weakness:** CNJ/SisPreq and the Central National module are being developed with B3, CERC, Núclea and the notarial sector. JURISCAN and JUDIT cover substantial judicial data/diligence workflows; Preks performs acquisition and legal diligence. The future official API/data model may remove the apparent gap. No replies, buyer interviews, manual-work measurements, budget owner or pilot willingness have been obtained. Arbitrum fit is weak: signed APIs and operator databases may be sufficient.

**Verdict:** Best next discovery lead, not a selected product. The only defensible wedge to test is a reconciliation exception between official legal/registry state and an operator's internal fund-unit/token allocation—not another registry, court-data API or legal-diligence portal.

Evidence: [D-040 precatório transfer-compliance and tokenisation](PRECATORIOS_TRANSFER_COMPLIANCE_AND_TOKENIZATION_2026-11-27.md).

## Next bounded validation for D-040

1. Check for replies from Preks and Adianta Jus; route to an operations, legal/compliance or technology owner. Do not count generic acknowledgements as validation.
2. Ask each operator to walk through one redacted case under Resolução 705: issued/presented status, assignment chain, fraction, liens, court homologation, debtor notice and the amount/units represented by tokens or fund shares.
3. Identify the exact point where the operator's internal allocation can diverge from official judicial/registry state. Quantify frequency, manual hours, delayed issuance, over-allocation risk or legal remediation cost.
4. Determine the authoritative sources and transitional workflow before the Central National becomes operational; verify whether official APIs and current vendors will cover the exception.
5. Ask for a bounded read-only reconciliation test using synthetic or redacted data.
6. Kill the hypothesis if the exception is rare, handled by legal review, covered by CNJ/registrar APIs or existing providers, or lacks a budget owner.
7. Separately test whether multiple independent parties require shared, independently verifiable supply/allocation state. If not, design as conventional API/SaaS and do not force Arbitrum.

## Explicit no-go boundaries

- Do not build a generic precatório registry, court-data API, diligence portal, tokenisation marketplace or legal-advice product.
- Do not imply that a token holder directly owns a court claim unless the legal wrapper and assignment chain support that statement.
- Do not represent a pre-precatório right as a court-recognised transferable fraction or registered guarantee.
- Do not deploy smart contracts or add dependencies before a product GO and explicit user authorization.

## Current state

- D-029: NO-GO by D-044.
- D-033: problem-validation question only.
- D-038: exploratory hypothesis only.
- D-040: leading discovery hypothesis only; not candidate/WATCH/GO.
- No product selected; no implementation authorized.
- Public-source research and previous outreach only. No customer interviews or willingness-to-pay evidence established in this scorecard.


## Outreach status check — 27 November 2026

Checked connected Gmail for replies from Preks and Adianta Jus after the two discovery emails. Adianta Jus sent an automated acknowledgement only, registering the request under support protocol **44** and saying the team would respond later. This is not a substantive operator response or customer validation. No reply from Preks was found in the checked period. No follow-up message was sent.
