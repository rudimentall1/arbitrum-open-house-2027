# D-044 — D-029 competitive recheck: cross-border collateral verification (27 November 2026)

## Executive decision

**D-029 is closed NO-GO as a product/WATCH thesis in its proposed form. CollateralLink must not be built. No replacement candidate is selected, no GO is issued, and no implementation is authorized.**

The underlying warehouse-receipt and duplicate-financing fraud problem is real. The proposed generic cross-border evidence/lien-conflict layer, however, is not differentiated enough against current commercial products and institutional utilities. The latest review found direct overlap in warehouse-receipt digitisation, collateral control, inventory-finance workflows and cross-platform document verification. No buyer interview, quantified customer impact, budget owner or pilot commitment exists. Arbitrum's necessity is also unproven.

This decision supersedes D-029's WATCH status. It does not invalidate the documented fraud problem; it rejects the proposed product framing absent a specific uncovered buyer workflow.

## Competitive evidence reviewed

### Direct and adjacent competitors

1. **Secro — direct overlap.**
   - Secro markets digital trade-document and bank workflows, including warehouse receipts, tokenised collateral, title/collateral control, partial releases and audit evidence.
   - Secro published a commodity-finance bank case describing a move from PDF warehouse receipts and manual lien/partial-release reconciliation to a tokenised instrument and real-time balance.
   - Secro announced Crédit Agricole CIB and ING adoption for digital commodity trade finance in May 2026. Its published scale figures (including digitised shipment value, participants and countries) are vendor-reported and not independently audited in this review.
   - On 28 October 2026, Secro said its inventory-finance solution was in pilots with banking and trading partners. This is a vendor statement, not proof of production adoption.
   - Sources: https://secro.io/solutions/banks ; https://secro.io/solutions ; https://secro.io/news/credit-agricole-ing-digital-trade-finance ; https://secro.io/news/secro-wins-the-finance-innovation-award-at-the-commodities-innovation-awards-2026
   - Independent trade press on Crédit Agricole CIB and ING: https://tradetreasurypayments.com/news/credit-agricole-cib-and-ing-transitioned-tokenised-documents-of-title-from-pilot-to-production-on-secro

2. **Crodax — direct overlap.**
   - Public product materials describe warehouse-receipt sealing at issuance, lender checks before funding, duplicate-presentation detection and a shared record for warehouse/trader/lender/buyer/inspector participants.
   - Sources: https://crodax.com/industries/warehouse-receipts/?lang=en ; https://www.crodax.com/

3. **FACTOS WareVault — adjacent collateral orchestration.**
   - Markets warehouse-credit collateral orchestration, logical compartments, eligibility gates and a live borrowing base. The product describes funders checking a live collateral book rather than relying only on periodic reports.
   - Its public materials describe a pioneer/pilot programme; this review does not establish scaled adoption.
   - Sources: https://factos.co/ ; https://new.factos.co/

4. **TradeTrust — cross-platform digital-document verification.**
   - Singapore's government-backed framework supports verification of digital trade documents across platforms and jurisdictions. Public trial materials describe cross-border participants and MLETR-aligned workflows.
   - Sources: https://www.tradetrust.io/community/trials/ ; https://www.tech.gov.sg/products-and-services/for-businesses/trade-transactions/ ; https://mag.wcoomd.org/magazine/wco-news-107-issue-2-2025/tradetrusts-journey-since-2021/

5. **Singapore Trade Finance Registry — institutional utility.**
   - The Association of Banks in Singapore describes a registry with nearly 40 bank members, designed to detect multiple financing and validate trade genuineness through source-system APIs. Cross-border connections are described as a future enhancement, not an already universal global registry.
   - Source: https://www.abs.org.sg/industry-guidelines/compliance-and-risk-management/trade-finance-registry

### Underlying problem remains real

HFW's November 2026 legal briefing describes forged and duplicated warehouse receipts, missing or overstated goods, weak inspections, compromised warehouse operators and competing lender claims. This validates a risk category, not demand for a new software product.

- Source: https://www.hfw.com/insights/warehouse-receipt-fraud-and-duplicate-financing/

### Adjacent invoice/receivables verification pivot is not a validated escape route

A narrower idea—independent confirmation of invoice existence, unpaid status, buyer identity/authority and assignment—was considered as an adjacent problem frame. It is not promoted to a candidate:
- Existing providers include MonetaGo, TFI TradeCore, TradeSun, AssureLocker and Riskernel, with overlapping duplicate-financing checks, document validation, debtor confirmation, lien searches or pre-funding workflows.
- The Business Times' September 2026 reporting notes that duplicate-financing tools do not necessarily establish that the underlying trade is real; buyer confirmation may still be required. That is a real control gap, but no evidence here establishes that buyers will pay a new entrant to solve it or that the listed providers fail in a repeatable way.
- Sources: https://www.gtreview.com/news/global/invoice-registries-key-to-fighting-damaging-trade-finance-fraud-itfa-says/ ; https://www.tradefinance-intelligence.com/solutions/factoring-supply-chain-finance/ ; https://www.tradesun.ai/ ; https://p-api.assurelocker.com/lender/invoice-factoring ; https://www.riskernel.com/products/pre-funding-invoice-check/ ; https://www.businesstimes.com.sg/companies-markets/energy-commodities/commodity-finance-risks-back-focus-amid-radiant-world-scrutiny/

## Why D-029 is NO-GO

- **Differentiation:** Secro and Crodax directly overlap the warehouse-receipt / lender-check / collateral-control shape. FACTOS and TradeTrust cover adjacent collateral and document-verification workflows. A thin cross-border registry connector is not enough differentiation by itself.
- **Buyer evidence:** No two independent buyers/operators have confirmed an uncovered workflow. No redacted incident, measured frequency/cost, budget owner, willingness-to-pay or pilot commitment has been obtained.
- **Network adoption:** A conflict-check network only sees participating registries, lenders and source providers. It cannot claim global coverage or prevent a non-participant from financing the same goods.
- **Physical truth and legal effect:** A ledger cannot establish that goods exist, are of the stated quality/quantity, or create enforceable lien priority across jurisdictions. Trusted inspection/custody sources and legal processes remain necessary.
- **Arbitrum fit:** No material shared-state or settlement requirement has been demonstrated beyond signed attestations, APIs and conventional audit records.
- **Commercial access:** Previously identified senior contacts are access leads only; they are not validated buyers, and no interviews or outreach messages were sent as part of this competitive recheck.

## Reopen conditions

Reopen only if a named lender, commodity trader, collateral manager or insurer provides:
1. A recurring, redacted cross-border incident that persists after use of its existing registry, collateral manager and document platforms.
2. Quantified delay, loss exposure, investigation cost or credit impact.
3. A specific missing workflow not already covered by Secro, Crodax, TradeTrust, national registries or internal controls.
4. A named budget owner and credible procurement route.
5. Willingness to run a bounded pilot with at least one independent counterparty.
6. A concrete reason shared Arbitrum state is required rather than a signed API/event store.

Do not reopen by merely renaming CollateralLink as invoice verification, proof-of-stock, registry interoperability or RWA infrastructure.

## Scope and verification limits

- Public-source competitive desk review only; no customer interviews were conducted.
- Vendor capability/adoption statements are attributed to vendors unless an independent source is explicitly identified.
- No TAM/SAM/SOM is asserted.
- No product, code, smart contracts, dependencies, tests, build, CI or deployment changed as part of this review.
- This report is a decision addendum to D-029 and D-043, not proof that the global warehouse-receipt fraud problem has disappeared.
