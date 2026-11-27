# Brazil warehouse receipts and physical inventory collateral screen — 27 November 2026

## Scope

Screened Brazilian agricultural warehouse receipts, physical inventory verification, collateral monitoring and possible cross-border evidence gaps. This is a desk-research screen, not customer discovery. It tests whether Brazil offers a standalone product opportunity beyond D-029 (cross-border commodity collateral / warehouse-lien verification), D-041 (duplicata escritural) and D-042 (CPR infrastructure).

## Executive conclusion

**D-043: NO-GO for a standalone Brazil warehouse-receipt registry, CDA/WA workflow platform, generic inventory-monitoring dashboard or Arbitrum-native collateral ledger. No new WATCH. D-029 remains the only WATCH.**

Brazil already has:
- a statutory CDA/WA instrument pair, with the warehouse operator responsible for custody, quantity/quality and delivery obligations;
- mandatory central depositary custody for CDA/WA through a Banco Central-authorised central depositary;
- B3 central-depository and product-specific operating rules;
- Conab's warehouse registration/SICARM process, including an in-person technical inspection to complete warehouse information;
- specialist independent collateral-monitoring and stock-audit providers, including Bureau Veritas and Somar Agro;
- an integrated agri-origination/custody/collateral software proposition from INTEGRO.

There is a real underlying risk category—false or duplicated receipts, inflated or missing inventory, unauthorised stock release, commingling and weak inspection—but the obvious local product shapes overlap existing regulated infrastructure and specialist providers. No buyer-backed uncovered workflow, budget owner, measurable local loss or material Arbitrum requirement was established.

## Verified facts

### 1. Legal instrument and regulated market infrastructure

Brazil's CDA (Certificado de Depósito Agropecuário) represents the warehouse operator's promise to deliver the deposited agricultural product. The WA (Warrant Agropecuário) gives the financial institution a pledge right over the corresponding CDA and underlying product. The two are issued simultaneously for the same lot and may be transferred together or separately by endorsement.

The Ministry of Agriculture describes the flow: the producer deposits goods with a warehouse, requests CDA/WA issuance, and arranges registration and custody with an entity authorised by Banco Central. B3's product description likewise states that CDA/WA are issued by the warehouse after the goods are under its custody and that the warehouse is responsible for preserving and delivering the stated quantity and quality.

Law 11.076/2004, as amended by Law 13.986/2020, requires CDA/WA to be deposited with a central depositary authorised by Banco Central within 30 days of issuance. B3's Central Depository documentation describes centralised custody, ownership transfers, asset movements, encumbrances and periodic balance/movement reconciliation, and lists specific CDA/WA rules.

Important distinction: **CDA** is also used in Conab's public service name for *Código de Cadastro do Armazém* (warehouse registration code). That code identifies the warehouse/operator; it is not the same thing as the financial instrument *Certificado de Depósito Agropecuário*.

Sources:
- Ministry of Agriculture — CDA/WA: https://www.gov.br/agricultura/pt-br/assuntos/politica-agricola/comercializacao-e-abastecimento
- B3 — CDA/WA: https://www.b3.com.br/pt_br/antigo/produtos-e-servicos/mercado-de-balcao/titulos-financeiros/certificado-de-deposito-agropecuario-warrant-agropecuario-cda-wa.htm
- Law 11.076/2004, current consolidated text: https://legis.senado.gov.br/norma/570525/publicacao/34620910
- B3 Central Depository: https://www.b3.com.br/pt_br/regulacao/estrutura-normativa/regulamentos-e-manuais/central-depositaria.htm

### 2. Warehouse identification and inspection

Conab's warehouse-registration service says applications are reviewed by technical staff and, after validation, a warehouse code is issued. The warehouse is subsequently subject to an in-person technical inspection to complete its information in SICARM. The code is used to identify warehouses and operators for certification, accreditation and issuance of warrants/warehouse deposit instruments.

This is a warehouse identification/accreditation layer. It does not, based on the reviewed public description, provide a continuously updated public inventory register or prove the quantity/quality of each pledged lot.

Source:
- Conab / gov.br — warehouse registration service (last modified 17 March 2026): https://www.gov.br/pt-br/servicos/solicitar-cadastramento-de-armazem

### 3. Existing physical collateral monitoring and inventory audit providers

**Bureau Veritas Brazil** explicitly markets agricultural collateral monitoring for financing institutions. Its stated scope includes independent audits, monitoring and certification from planting through delivery, production/storage/delivery checks, quantity, quality, date and georeferenced field data, cross-checking and detailed reports for credit and collateral decisions. The company says it classifies about 45% of Brazil's exported grain volume and expanded through acquisitions including Kuhlmann Monitoramento Agrícola (KMA), Schutter and Inspectorate. These are vendor claims, not independently audited performance metrics.

**Somar Agro** publicly offers:
- stock measurement, monitoring and management;
- periodic verification of the actual status of guarantees securing financing;
- warehouse/silo inventory measurement and audit;
- sealing of tanks, warehouses and silos;
- reports on raw-material stock inflows/outflows.

**INTEGRO** markets a connected platform spanning agronomic planning, georeferenced sampling, field telemetry, warehouse receipt/classification/custody by lot or batch, CDA/WA and CPR collateral governance, and origination/data rooms. It positions the platform as an operational evidence trail from field to grain and credit origination.

These providers substantially overlap the intuitive product idea of a digital inventory/collateral-monitoring layer. Their public pages do not establish that every lender, commodity or warehouse is covered, nor do they prove that cross-provider data reconciliation or cross-border lien conflict checks are solved.

Sources:
- Bureau Veritas — collateral monitoring: https://www.bureauveritas.com.br/pt-br/servicos/monitoramento-de-garantias
- Bureau Veritas — agribusiness and commodities: https://www.bureauveritas.com.br/pt-br/mercados-servicos/agronegocio-commodities
- Somar Agro — solutions: https://somaragro.com.br/solucoes
- INTEGRO — platform: https://d-integro.com.br/en/platform/

### 4. Underlying fraud and operational risk is real, but not a new Brazil-specific discovery

HFW's November 2026 briefing describes warehouse receipt fraud and duplicate financing patterns: forged or duplicated receipts, goods that do not exist or are materially overstated, inadequate physical inspections, reliance on borrower-provided evidence, commingled goods, stock rotation/removal, compromised warehouse operators, and competing lender claims. It notes the lack of a generally searchable central title/registry system across all jurisdictions and relationships.

That evidence supports the broad D-029 problem frame, but it is not proof that a Brazilian CDA/WA buyer has an uncovered workflow. Brazil's statutory central-depositary mechanism and specialist monitoring providers must be evaluated separately from cross-border jurisdictions with fragmented receipt/title systems.

Source:
- HFW — Warehouse receipt fraud and duplicate financing: https://www.hfw.com/insights/warehouse-receipt-fraud-and-duplicate-financing/

## Product-shape assessment

| Product shape | Assessment | Reason |
|---|---|---|
| Brazil CDA/WA issuance, transfer or registry mirror | NO-GO | Statutory instrument and B3/authorised central-depositary infrastructure already exist. |
| Warehouse registry / warehouse identity directory | NO-GO | Conab/SICARM already provides warehouse registration and identification. |
| Generic inventory, stock or collateral-monitoring dashboard | NO-GO | Bureau Veritas, Somar Agro and INTEGRO publicly cover monitoring, audits, stock movement, custody and reporting. |
| Generic proof-of-stock / proof-of-warehouse app | NO-GO | Physical proof requires trusted inspection, custody and operator access; specialist providers already sell this service. A ledger cannot independently establish physical quantity or quality. |
| Cross-border lien-conflict and evidence interoperability | KEEP UNDER D-029 WATCH ONLY | Potential gap may persist across jurisdictions and non-participating systems, but no buyer or measurable uncovered workflow has yet been validated. Do not create a Brazil-only candidate from it. |

## Arbitrum fit

No material Arbitrum requirement was found for Brazilian CDA/WA issuance, warehouse accreditation, stock inspection or lender monitoring. The legal instrument and central depositary are authoritative. Signed inspection attestations, source-system APIs and conventional audit trails are more natural for the local workflows reviewed.

A shared chain could only become relevant if multiple independent lenders, collateral managers, warehouse operators and registries agree to record or verify cross-organisation claim state, and if that shared state demonstrably prevents a real conflict that bilateral checks and existing systems miss. No such participation or requirement is evidenced.

A blockchain record cannot prove that grain exists, measure its quantity or quality, prevent a warehouse operator from lying, create legal priority, or bind a lender that does not participate.

## Commercial evidence and gaps

- No named Brazilian lender, trader, warehouse operator, collateral manager or insurer has validated a specific uncovered workflow in an interview.
- No local buyer has supplied a redacted incident, frequency, quantified loss/delay, budget owner, procurement path or pilot willingness.
- Public vendor pages establish competitive coverage, not customer satisfaction or complete market coverage.
- No TAM/SAM/SOM is asserted; available market/commodity volumes do not define software spend.
- No outreach was sent as part of D-043. This screen does not create a new contact campaign until a sharper buyer-specific gap is identified.

## Decision D-043

**NO-GO as a standalone Brazil Arbitrum product thesis. No new WATCH, no product selection, no GO and no implementation.**

Keep D-029 as the sole WATCH. This research adds Brazil-specific context and a clear local competitive map; it does not validate D-029's cross-border commercial opportunity. D-029 still requires two independent operator/buyer accounts, redacted examples, measured impact, a specific gap beyond national registries and collateral managers, and a credible bounded pilot path.

Reopen a Brazil-specific angle only if a named buyer identifies a recurring gap beyond B3/authorised depositaries, Conab/SICARM and specialist monitoring providers, quantifies the cost, identifies the budget owner, and explains why existing signed APIs and conventional systems are insufficient.

## Research limitations

- Public-source desk research only; no interviews or customer discovery.
- Vendor capability descriptions are self-published and not independently audited.
- No confidential operational data or customer contracts reviewed.
- No product implementation, code, dependencies, tests, build, CI or deployment changed or run.
