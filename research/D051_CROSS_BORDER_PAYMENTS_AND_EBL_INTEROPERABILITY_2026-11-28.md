# D-051 — Cross-border payment exceptions and electronic bill of lading interoperability screen

**Date:** 28 November 2026  
**Status:** two strong operational signals screened; no product selected, no WATCH, no GO, no implementation authorized.

## Executive result

This screen examined:
1. Latin American SME cross-border B2B payment exception handling; and
2. global electronic bill of lading (eBL) portability and bank acceptance.

Both have credible, recurring friction. Neither currently supports a differentiated Arbitrum product. The payment visibility/reconciliation layer is already substantially served by SWIFT GPI, Visa B2B Connect, bank APIs and specialist payment infrastructure. The eBL interoperability gap is now being addressed by DCSA's standards-based network, including PINT, a multilateral legal framework and a Control Tracking Registry (CTR). These are not blank spaces waiting for another ledger.

| Direction | Strongest signal | Existing substitute / structural answer | Decision |
|---|---|---|---|
| LATAM cross-border B2B payment exceptions | Mastercard/FXC qualitative panel: about 1 in 9 payments requires investigation/correction/follow-up; problematic payments can consume up to 3.5 staff hours. | SWIFT GPI tracking, investigation APIs, GPI for Corporates; Visa B2B Connect; Mastercard Move; licensed payment APIs and local rails. | NO-GO for generic tracking, reconciliation, routing or exception dashboard on Arbitrum. |
| eBL portability and bank acceptance | FIT Alliance 2026 survey: 51.1% partial/any eBL adoption, 11.2% exclusive use; only 22.2% of bank respondents report partial use. Interoperability/platform fragmentation is the most-cited concern. | DCSA PINT API + MSPIA/Standard Annex + Control Tracking Registry; five major platforms adopted DCSA Annex v2 with IGP&I approval. | NO-GO for generic eBL registry, transfer or control-tracking chain. |

## 1. Latin American cross-border B2B payment exceptions

### Problem evidence
- Mastercard/FXC Intelligence's 30 June 2026 research reports SME cross-border payments generate approximately US$23bn annual revenue for banks/payment companies in Latin America and the Caribbean. This is provider-side revenue, not a measure of customer savings or a TAM for a new entrant.
- In a qualitative panel of SMEs in Brazil, Mexico and Colombia, 9 in 10 said they would consider changing cross-border payment provider; the panel is directional, not statistically representative.
- The report states that about 1 in 9 payments requires investigation, correction or follow-up, and problematic payments can consume up to 3.5 hours of staff time.
- The report highlights uncertainty about arrival time, net amount and deductions, plus manual internal coordination.

### Existing coverage
- SWIFT GPI provides end-to-end payment status, delivery confirmation, rejection/on-hold status, fee/routing visibility and investigation/case-resolution APIs.
- SWIFT GPI for Corporates integrates multi-bank pay-and-trace and inbound tracking into TMS/ERP workflows, uses a common end-to-end reference, and provides structured payment advice to accelerate reconciliation.
- Visa B2B Connect provides bank-to-bank cross-border B2B payments, payment status callbacks and API access to payment and FX information.
- Mastercard Move provides cross-border payment infrastructure and partner integrations.
- Regional providers such as Localpayment, Lumx and Caliza offer multi-currency/local-rail APIs; Ripple Payments offers fiat/stablecoin payments, custody, treasury and liquidity through APIs. Providers already integrate local payout rails, KYC/KYB and payment orchestration.

### Arbitrum test
A neutral shared ledger could theoretically record a cross-provider payment case, status, FX quote, deductions and final beneficiary confirmation. But:
- payment status is already exposed by SWIFT and provider APIs;
- sensitive payment, beneficiary and compliance data should not be placed on a public chain;
- fiat finality is determined by regulated banks/payment institutions and local rails, not by an Arbitrum transaction;
- no evidence shows independent PSPs or banks want a shared on-chain exception state;
- no named buyer, recurring uncovered exception class, budget owner or paid-pilot path has been found.

**Decision:** NO-GO for generic payment tracking, reconciliation, routing, exception management or stablecoin/fiat bridge dashboard on Arbitrum. The underlying pain is real; the proposed product is not differentiated. Reopen only if a named PSP/bank/corporate identifies an exception that remains unresolved across existing GPI/provider APIs and agrees to quantify and sponsor a bounded pilot. Conventional API-first integration is the default.

## 2. Electronic bill of lading interoperability and bank adoption

### Problem evidence
- FIT Alliance's 2026 global survey, conducted with Shanghai Maritime University and DSCI, used 190 cleaned responses.
- 51.1% of respondents report using eBLs in some capacity, compared with 49.2% in 2024 and 33.0% in 2022.
- Exclusive eBL use is 11.2%, up from 7.5% in 2024.
- Only 22.2% of banking respondents report at least partial eBL use, essentially unchanged from 21.1% in 2024.
- Interoperability and platform fragmentation were the most-cited concerns; legal effectiveness/authenticity and onboarding at scale followed.
- Banks require confidence that control, status and transfer can be verified across platforms and participants, not only within one provider.

### Existing industry answer
- DCSA's eBL interoperability framework has three explicit components:
  1. PINT API for standardised platform-to-platform eBL transfer;
  2. MSPIA and Standard Annex for a multilateral legal framework;
  3. Control Tracking Registry (CTR), recording in real time which platform controls a specific interoperable eBL.
- On 4 June 2026, DCSA announced that CargoX, edoxOnline, TradeGo, WaveBL and eTEU implemented Standard Annex v2 and obtained IGP&I approval. This enabled cross-platform exchange under a common framework.
- DCSA says the framework supports secure access and verification by shippers, carriers, banks and regulators; receiver validation and CTR help manage control and duplicate risk.
- The remaining banking adoption gap is not proof that banks need a new ledger. Bank onboarding, legal acceptance, risk policy, internal TMS integration, partner coverage and local-law recognition may remain binding constraints.
- UNCITRAL MLETR is a model law, not automatically applicable domestic law. Each relevant jurisdiction's legal adoption and implementation must be checked independently.

### Arbitrum test
- The key shared state—who controls an eBL—is already represented by DCSA's Control Tracking Registry.
- DCSA's PINT API and multilateral legal framework are purpose-built for cross-platform transfer; replacing them with a public chain would introduce an additional network and legal control model.
- A public chain cannot by itself establish the legal equivalence of an electronic transferable record in each jurisdiction or compel a bank to accept it as collateral.
- No named bank, carrier, exporter or platform has been identified as willing to pay for a parallel registry or blockchain bridge.
- No evidence shows that Arbitrum offers better control finality, legal enforceability, privacy or integration economics than the DCSA framework.

**Decision:** NO-GO for an eBL registry, title-transfer chain, control-tracking network or generic interoperability layer on Arbitrum. DCSA is directly addressing the cross-platform control problem. A narrow conventional integration/implementation service for banks or exporters may be a separate business, but it is not an Arbitrum thesis absent a specific shared-state gap.

## Cross-track conclusion

This is a useful falsification result. The strongest pain signal is not enough: both domains have strong industry-level infrastructure responses. Do not confuse slow adoption with absence of vendors, standards or solutions. The project still has no product candidate.

## Next discovery direction

Continue outside payment tracking and eBL. Prioritise workflows involving legally meaningful assets, collateral or contingent obligations where:
1. multiple independent counterparties need to agree on the same state;
2. existing registries, standards and APIs do not already solve it;
3. a recurring exception has measurable financial/operational cost;
4. a named budget owner can sponsor a paid pilot; and
5. Arbitrum materially improves execution or shared-state guarantees.

No organisations contacted. No implementation authorized. No code, dependencies, tests, build, CI or deployment changed.

## Sources
- Mastercard / FXC Intelligence, 30 June 2026: https://www.mastercard.com/co/es/news-and-trends/press/2026/july/cross-border-payments-loyalty-latin-america-caribbean.html
- SWIFT GPI: https://www.swift.com/products/swift-gpi
- SWIFT GPI for Corporates API: https://docs.developer.swift.com/api-catalogue/gpi-for-corporates-api/documentation/getting-started/overview
- SWIFT API catalogue, including investigation and payment-status APIs: https://docs.developer.swift.com/api-catalogue
- Visa B2B Connect: https://developer.visa.com/capabilities/vba
- Ripple Payments LATAM study, Oct 2026: https://ripple.com/insights/stablecoins-in-latin-america-mexico-and-brazil/
- FIT Alliance 2026 survey release, 21 Oct 2026: https://fiata.org/n/press-release-electronic-bill-of-lading-adoption-grows-as-focus-shifts-to-interoperability/
- BIMCO survey summary: https://www.bimco.org/news-insights/bimco-news/2026/10/21-ebl/
- DCSA eBL interoperability framework (PINT, MSPIA, CTR): https://dcsa.org/our-mission/ebl-interoperability-platform
- DCSA Standard Annex v2 adoption, 4 June 2026: https://dcsa.org/newsroom/five-ebl-platforms-adopt-dcsa-interoperability-annex
- DCSA implementation guide for banks and providers: https://dcsa.org/standards/booking/adoption-guide-booking-and-bill-of-lading
- UNCITRAL MLETR: https://uncitral.un.org/en/texts/ecommerce/modellaw/electronic_transferable_records
