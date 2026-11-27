# Brazil SBCE carbon-asset and MRV infrastructure screen — 27 November 2026

## Executive conclusion

**D-039: NO-GO as an Arbitrum Open House product thesis at this stage. No new WATCH, no product selection, no GO, no implementation.**

Brazil's regulated carbon market is a real, near-term infrastructure buildout and carbon units are financial/real-world assets. However, the obvious software opportunities split into (a) industrial emissions MRV/compliance software and (b) integration with the government's central registry and financial-market book-entry infrastructure. The first is an established SaaS category with Brazilian vendors and no demonstrated need for shared onchain state. The second is being designed and built by the government with Serpro, while external integration standards and a private-sector unmet workflow are not yet evidenced. Neither currently supports a differentiated Arbitrum-native product.

This is a screen, not a claim that the SBCE market is unattractive overall. It is a rejection of the product shapes that can be justified from public evidence today.

## Verified market and regulatory facts

1. **The central registry is already an active government build.** The Ministry of Finance announced on 29 January 2026 that Serpro and the Ministry had started product discovery and technical planning for the SBCE Central Registry. The planned platform covers emissions data, decarbonisation targets and issuance/management of regulated carbon assets. The government, Serpro, CVM, B3 and other public/private institutions participated in the inception process.
   - Ministry: https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/janeiro/brasil-inicia-a-construcao-do-sistema-que-viabilizara-o-mercado-regulado-de-carbono
   - Serpro: https://www7.serpro.gov.br/menu/noticias/noticias-2026/sistema-brasileiro-de-comercio-de-emissoes

2. **The rollout is staged, not an immediate liquid asset market.** Official implementation guidance says 2027 is for operators to structure emissions-reporting instruments; 2028–2029 brings compulsory monitoring plans and annual emissions reports; the first National Allocation Plan and start of the CBE asset market are scheduled from 2030. Full implementation follows later.
   - https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono/entenda-o-sbce/implementacao-e-setores-regulados

3. **The first MRV cohort is narrow but economically important.** The October 2026 schedule applies to operators at or above 10,000 tCO2e/year and is expected to affect less than 1% of Brazilian CNPJs. The first 2027 sectors include aluminium, integrated iron and steel, cement, oil and gas production, selected chemicals, iron ore/bauxite mining, pulp and paper, and glass. The Ministry was still developing the PB-MRV rules and planned public consultation on its decree.
   - https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/mercado-regulado-de-carbono-define-cronograma-para-que-setores-da-industria-comecem-a-medir-emissoes

4. **The central registry and financial-market book-entry system have explicit responsibilities.** Law 15.042/2024 assigns the Central Registry the consolidation of emissions/removals and accurate accounting of issuance, acquisition, holding, transfer and cancellation of SBCE assets. It also provides for financial institutions acting as escrituradores to record ownership and encumbrances, with interoperability between escriturador records and the Central Registry to be regulated by the SBCE authority. This is a real future integration surface, but the law does not itself establish an open API or a private software gap.
   - Law: https://www2.camara.leg.br/legin/fed/lei/2024/lei-15042-11-dezembro-2024-796690-normaatualizada-pl.html

5. **Brazil already has a digital carbon-credit registry precedent.** ANP maintains a platform for CBIO escrituração and lists authorised financial-institution escrituradores. This suggests the market is familiar with centralised registry plus regulated book-entry roles; it does not prove the SBCE integration will be frictionless, but it weakens the claim that a new public-chain ledger is inherently required.
   - https://www.gov.br/anp/pt-br/assuntos/renovabio/escrituradores

## Product shapes screened

### A. SBCE MRV compliance workspace for regulated industrial operators

Potential workflow: collect facility-level activity data, map it to approved monitoring plans and SBCE methodologies, preserve source documents and calculation provenance, prepare annual reports and support independent OVV verification.

**Why there is a real need:** regulated operators must prepare monitoring/reporting processes from 2027, with compulsory plans and reports in 2028–2029. Source data collection, auditability and independent verification are meaningful operational requirements.

**Why this is not a differentiated Arbitrum product yet:**
- This is carbon-accounting/MRV SaaS, not an RWA settlement or shared-ledger workflow.
- Existing Brazilian providers already market MRV and emissions-inventory workflows. For example, Integra Carbon publicly offers electronic MRV, document-level traceability, reporting and a carbon-credit broker; WayCarbon is an established Brazilian climate-software/services provider. The GHG Protocol Brazil program also has a long-running corporate inventory and public-registry workflow.
- No evidence was found that industrial operators need a blockchain to prepare or verify emissions reports, or that a multi-party shared state is superior to signed evidence, APIs and a conventional audit database.
- The regulated cohort is fewer than 1% of CNPJs, so this is a concentrated enterprise sales market with existing climate/consulting vendors and long procurement cycles.

Sources:
- Integra Carbon: https://integracarbon.com.br/
- GHG Protocol Brazil: https://ghgprotocol.org/programs-and-registries/brazil-program
- Ministry MRV schedule: https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/mercado-regulado-de-carbono-define-cronograma-para-que-setores-da-industria-comecem-a-medir-emissoes

### B. Escriturador / exchange / custody integration adapter for the SBCE Central Registry

Potential workflow: connect authorised escrituradores, depositaries, exchanges and voluntary registries to the SBCE Central Registry; reconcile ownership, transfers, encumbrances, cancellation and cross-registry status.

**Why there may be a future integration burden:** Law 15.042 requires interoperability between escriturador records and the Central Registry; the Ministry has described a central registry with MRV and transaction modules and has discussed electronic book-entry assets with ISIN-like identification.

**Why it is premature and weak today:**
- Serpro is already developing the government's central platform; its boundaries and integration contracts are not publicly specified in the sources reviewed.
- No named private-sector buyer has reported failed reconciliation, manual integration cost, delayed settlement or willingness to pay for an external adapter.
- A regulated escriturador or exchange would likely require security, certification, procurement and regulator-approved interfaces; a buildathon prototype would not establish production access.
- The law's interoperability requirement does not imply permissionless blockchain interoperability. Standard APIs and regulated book-entry records may be the intended architecture.
- Gold Standard's new Impact Registry, delivered with Trovio, is already API-first and explicitly targets connectivity with national registries, exchanges and marketplaces. That is an existing specialist competitor signal, not proof of a Brazilian unmet need.
- ANP's existing CBIO platform and escriturador model are relevant domestic precedent.

Sources:
- Ministry architecture discussion: https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/agosto/ministerio-da-fazenda-inicia-debates-sobre-a-arquitetura-financeira-do-mercado-regulado-de-carbono
- Gold Standard / Trovio: https://www.goldstandard.org/news/gold-standard-connects-carbon-markets-with-next-generation-impact-registry
- ANP escrituradores: https://www.gov.br/anp/pt-br/assuntos/renovabio/escrituradores

### C. Onchain carbon-credit issuance, registry or double-counting layer

**Reject.** The statute assigns official accounting and traceability to the Central Registry and defines the process for credits to become CRVEs. A parallel token ledger risks creating a second source of truth rather than solving a verified workflow. Gold Standard/Trovio and other registry systems already provide issuance, transfer, retirement and API-based traceability. No buyer requested an Arbitrum mirror or cross-registry chain state.

## Arbitrum fit

**Not established; currently poor.** The evidence points to a government-operated central registry, regulated escrituradores and financial-market infrastructure. There is no proof that multiple independent parties need to write to a common permissionless state, that a public chain improves legal finality, or that Arbitrum is accepted for regulated SBCE asset records. A conventional integration service would be the more defensible architecture if a real integration gap later appears.

Do not build a token bridge, registry mirror, MRV ledger or generic carbon dashboard on Arbitrum from this evidence.

## Buyer and commercial evidence

- Identified buyer classes: regulated industrial operators (MRV), authorised escrituradores, depositaries, exchanges, carbon registries and project developers.
- No named economic buyer, budget owner, paid procurement signal, redacted incident, integration failure, quantified manual cost or pilot commitment was identified in this screen.
- Public regulations and government plans establish a market and future obligations; they do not establish demand for a third-party product.
- Competitor evidence is based on vendor-published product descriptions and should not be mistaken for independent customer validation.

## Decision and reopening criteria

**D-039: NO-GO for the current Arbitrum product search; no new WATCH.**

Reopen only if one of these concrete signals appears:
1. An authorised escriturador, depositary or exchange identifies a recurring SBCE integration/reconciliation failure not covered by Serpro's interfaces or its existing vendors, quantifies the cost and names a budget owner.
2. Two independent regulated operators show recurring MRV evidence collection/verification costs that existing carbon-accounting platforms do not solve, and identify a specific multi-party trust requirement that makes shared state materially better than signed records/APIs.
3. The SBCE publishes external integration specifications and a real partner requests a testable interoperability component, with an identified procurement route.

Even then, test whether the buyer needs a conventional API/integration product rather than blockchain. Arbitrum is not a requirement.

## Research status

- Desk research completed: official government/legislative sources, registry precedent, and public vendor evidence.
- Customer discovery: none. No outreach was sent as part of D-039.
- No code, tests, dependencies, build, CI or deployment changed.
- This screen does not alter D-029 WATCH or the parallel D-033/D-038 work.
