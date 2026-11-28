# D-047 — Brazil critical-mineral traceability and low-carbon certification screen

**Date:** 28 November 2026  
**Status:** exploratory screen; generic traceability is NO-GO as a standalone Arbitrum product. No product selected, no GO, no implementation authorized.

## Question

Does Brazil's new National Policy for Critical and Strategic Minerals create a differentiated, buyer-funded workflow for a new entrant, or does it simply expand a market already served by traceability vendors and future government infrastructure?

## Regulatory signal

Lei 15.506/2026 establishes:
- a national traceability system covering mineral composition and origin, environmental impact, circularity, licences, mining concessions, responsible parties and deposits;
- mandatory recording of transactions and involved agents, with auditability;
- the possibility of private implementation, but only through entities accredited under ANM supervision;
- a requirement to separate collection, verification, audit and certification functions;
- independent periodic audits and continuous regulatory supervision of system operators;
- technology-neutral implementation: DLT is expressly permitted, but so are equivalent technologies;
- confidentiality, data protection and interoperability requirements to be specified in regulation.

The law also creates a low-carbon mineral certificate (CMBC) issued exclusively by accredited certification companies. The certification system includes an authority, regulator, certifier, accreditor, registrar, producer and buyer. Further regulation is required to define operating institutions and responsibilities.

Brazil approved a list of 27 critical/strategic minerals in November 2026, including lithium, graphite, nickel, cobalt, copper, rare earths, niobium, manganese and others.

Sources:
- https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15506.htm
- https://legis.senado.gov.br/norma/44332135/publicacao/44332591
- https://www.spglobal.com/energy/en/news-research/latest-news/metals/110926-brazil-approves-list-of-27-critical-strategic-minerals
- https://www.gov.br/anm/pt-br/assuntos/noticias/politica-de-minerais-criticos-preve-rastreabilidade-e-agregacao-de-valor-1

## Why this is not yet a product opportunity

1. **The law creates a regulated operator/credentialing boundary.** A startup cannot assume it may operate the statutory system or issue CMBC certificates. Accreditation rules, technical standards, data interfaces and transition dates are not yet sufficiently specified in the reviewed sources.
2. **The technology is not blockchain-mandated.** Article 44(7) permits DLT or equivalent solutions. A conventional interoperable data platform may satisfy the law.
3. **Direct product overlap exists.** Minespider markets mineral/product passports, chain-of-custody, supplier onboarding, controlled data sharing, emissions/ESG data and ERP/API integration. It publishes annual plan prices from €11,900 to €34,500. Minespider's own 2021 announcement says Brazilian mineral marketplace Minery adopted its traceability for responsible mines on the platform.
4. **Other established global providers** include Circulor, MineHub, OPTEL, Everledger, Peer Ledger and RCS Global/Better Mining. The EU Parliament and IPIS surveys describe a developed supplier landscape rather than an empty category.
5. **Demand and premium remain uncertain.** OECD's 2026 lithium traceability analysis reports that operators see uptake as dependent on stronger demand from importing jurisdictions or a price premium for responsibly produced lithium; it also identifies gaps around downstream processing and physical characterisation. This is a warning against treating regulation or export narratives as proof of willingness to pay.
6. **No Arbitrum necessity established.** A shared ledger may help independent parties attest custody events, but the statutory system can use equivalent technologies and incumbents already offer blockchain-backed or permissioned approaches. No multi-party buyer has stated that Arbitrum settlement/state is required.

Sources:
- https://www.minespider.com/pt/platform
- https://www.minespider.com/pt/tracking-tool
- https://www.minespider.com/pt/press/mineral-marketplace-minery-to-integrate-minespiders-blockchain-traceability
- https://www.europarl.europa.eu/cmsdata/297032/Traceability%20of%20critical%20raw%20materials.pdf
- https://ipisresearch.be/wp-content/uploads/2026/05/Assessing-digital-traceability-systems-for-critical-mineral-value-chains.pdf
- https://www.oecd.org/en/publications/enhancing-resilience-through-traceability_a898687d-en/full-report/lithium_c523fa54.html

## Possible narrow residual question (not a candidate)

The only defensible follow-up is not another mine-to-market passport. It is whether a Brazilian processor/exporter faces a specific, recurring reconciliation failure between:
- its plant-level batch/mass-balance and assay records;
- accredited low-carbon certification evidence;
- customer-specific downstream product-passport requirements; and
- the future ANM-supervised transaction/traceability system.

A product would need a concrete exception that Minespider, MineHub, ERP integrations, auditors and the future government interfaces do not already solve. No such exception, buyer, budget, volume or paid-pilot path has been found. Do not start outreach or build on this hypothesis without explicit user approval.

## Decision

**NO-GO for generic critical-mineral traceability, product passports, custody ledger or low-carbon certificate registry on Arbitrum.** The law is a market-creation signal, not whitespace evidence. Reopen only if a named Brazilian processor/exporter or accredited operator identifies a recurring, quantified integration/reconciliation failure beyond current vendors and confirms a paid pilot. Any Arbitrum role must be justified by multiple independent parties needing shared transaction state or programmable settlement; otherwise use conventional integration.

## Evidence boundary

- Statute and official announcements establish regulatory direction, not actual implementation dates, procurement, budget or buyer demand.
- Vendor pages and pricing are vendor-published evidence, not independent proof of adoption or efficacy.
- OECD interviews are qualitative; do not generalise one country's lithium observations to all 27 minerals.
- No Brazilian operator interview, redacted incident, measured burden, willingness to pay or Arbitrum requirement was obtained.
