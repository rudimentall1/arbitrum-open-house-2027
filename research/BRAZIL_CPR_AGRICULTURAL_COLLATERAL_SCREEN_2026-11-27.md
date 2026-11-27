# Brazil CPR agricultural-collateral infrastructure screen — 27 November 2026

## Conclusion

**D-042: NO-GO as an Arbitrum Open House product thesis; no new WATCH.**

Brazilian CPR (Cédula de Produto Rural) is a major agribusiness financing instrument, but its core uniqueness and collateral-splitting workflows already have regulated infrastructure and product coverage. B3's interoperability system for CPR uniqueness went live in April 2024 and exchanges data among authorised registrars to prevent the same instrument being offered as collateral in multiple credit/investment operations. In January 2026, B3 launched CPR Guarantee: a digital workflow for Master CPR and related pledged CPRs, splitting collateral, identifying parts, linking obligations, exposing collateral status/value and providing API integration and lifecycle management.

The Bolsa Brasileira de Mercadorias also offers electronic CPR issuance, registry submission, verification and interfaces with authorised registrars. This makes a generic CPR registry, collateral uniqueness layer or CPR splitting/monitoring dashboard a direct duplicate of existing market infrastructure.

## Evidence

1. **CPR interoperability and uniqueness is live.** B3 says its system was launched 29 April 2024 and uses a shared centralised data base across authorised registrars to validate CPR uniqueness, preventing the same instrument from being pledged in more than one credit/investment operation. Status is available through UI and file.
   - https://clientes.b3.com.br/w/interoperabilidade-cpr

2. **Collateral splitting and lifecycle tooling already exists.** B3's CPR Guarantee went live 21 January 2026. It supports Master CPR and linked/sister CPRs, collateral splitting into separately identified parts, API integration, registration, querying, changes and lifecycle monitoring.
   - https://clientes.b3.com.br/en/w/cpr-garantia

3. **Electronic issuance and registry integration are already commercialised.** Bolsa Brasileira de Mercadorias' CPR platform supports digital document management, CPR issuance, electronic signature, BCB registry submission, pre-submission verification and direct communication with authorised entities.
   - https://registrocpr.com.br/

4. **Market relevance is real but not product whitespace.** OECD reports CPR as one of Brazil's key rural-financing instruments and cites BRL 298 billion in CPRs delivered in the stock market by end-2023 (historical market figure, not current TAM).
   - https://www.oecd.org/en/publications/2024/11/agricultural-policy-monitoring-and-evaluation-2024_b4c72370/full-report/component-10.html

## Product shapes rejected

- Generic CPR issuance/registry or uniqueness service: overlaps authorised registrars and B3's inter-registry uniqueness layer.
- CPR collateral splitting, pledge management and monitoring: overlaps B3 CPR Guarantee and existing registry tools.
- Onchain mirror of CPR ownership/pledges: does not replace legal registration, perfection or authorised registry priority; no buyer requirement for Arbitrum was found.
- Generic commodity-collateral dashboard: overlaps prior rejected generic collateral-monitoring shapes and risks duplicating D-029's separate cross-border collateral question.

## Arbitrum fit

**Not established.** The value-bearing functions are legally authoritative registration, inter-registry uniqueness, collateral allocation and API-connected lifecycle operations. These are already implemented by regulated financial-market infrastructure. A public chain does not add a demonstrated legal or operational benefit.

## Decision and reopening criteria

**D-042: NO-GO as an Arbitrum product thesis; no new WATCH.**

Reopen only if a lender, cooperative, warehouse operator or originator identifies a recurring uncovered CPR collateral workflow not handled by B3, BBM or authorised registrars, quantifies the loss/manual work, names a budget owner and demonstrates why existing registry APIs are insufficient. Arbitrum requires separate buyer-backed evidence.

## Research limits

- Public-source desk research only; no interviews or outreach.
- OECD's BRL 298B figure is historical end-2023 stock/market activity, not TAM.
- No code, dependencies, tests, build, CI or deployment changed.
