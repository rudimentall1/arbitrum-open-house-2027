# Brazil duplicata escritural operational-gap screen — 27 November 2026

## Executive conclusion

**D-041: NO-GO as an Arbitrum Open House product thesis; no new WATCH, no product selection, no GO, no implementation.**

This is a real and near-term financial-infrastructure transition, with unusually concrete evidence of operational risk. The Central Bank's electronic trade-receivables ecosystem entered assisted production in July 2026; the official B3 rollout phases interoperability and production through January 2027, with mandatory adoption by company size from July 2027 through July 2028. A V360 operational mapping and reporting on market readiness identify duplicate payments, mismatched values/title, cancelled invoices, delayed goods-receipt confirmation and weak adoption.

However, the obvious product gap is already being addressed by directly relevant vendors:
- V360 markets an ERP-to-registrar product that captures, validates and manifests each duplicate, routes payment to the correct holder, and controls the ten-day response window.
- Monkey offers an orchestration layer for sellers, ERP integration, issuance, registry integration and receivables finance.
- Núclea offers issuer and payer agendas, ERP integrations, collateral management and financing-agent workflows.
- B3 provides the core registry/bookkeeping infrastructure, APIs and integration partners.

This is strong evidence of a commercial pain category, but weak evidence of an unserved buyer problem. No evidence establishes a material need for Arbitrum or permissionless shared state. Do not build a duplicate-receivables ledger, generic ERP connector, payment-routing dashboard or receivables tokenization product on Arbitrum from this evidence.

## 1. Regulatory and implementation facts

### Regulatory basis

- Law 13.775/2018 establishes the electronic-bookkeeping framework for duplicatas escriturais.
- Resolução BCB 339/2023 regulates bookkeepers and the registration/central-depository/negotiation systems.
- Resolução BCB 540/2025 (effective 5 January 2026) added the migration/recognition workflow for pre-existing contracts covering future receivables before the issuer's bookkeeping system goes live. The financing agent must send the contract data within ten business days after the bookkeeper publicly announces readiness for that issuer. The systems route the information to the issuer's bookkeeper and apply it to the issuer's agenda under legal priority criteria.
- In cases of disagreement, the bookkeeper must make available channels and information for contestation and document exchange. Late contracts can only be sent after the issuer's system has started operating, under the relevant post-start procedures.
- Instrução Normativa BCB 775/2026 clarifies that the ten-business-day receipt/redirection step is operational only: it is not itself registration, central deposit, constitution of a lien/encumbrance, prenotation or a reservation of priority. The rule also formalises prioritisation criteria in the market convention.
- BCB Comunicado 45.562/2026 sets 15 July 2026 as the start date for the bookkeeping systems' operations for regulatory timeline purposes.
- B3 says the assisted-production phases run from 15 July 2026; from 13 September 2026, duplicates can be issued to payers registered with any bookkeeper, not only the same bookkeeper. B3 says the boleto dinâmico is expected from February 2027.
- B3's current rollout page gives mandatory adoption by company size: large companies from July 2027, medium companies from January 2028 and small companies from July 2028. Treat this current B3 schedule as the reference; some bank FAQ pages still show older or inconsistent dates.

Sources:
- Law and BCB 339 framework: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=339&tipo=Resolu%C3%A7%C3%A3o+BCB
- Resolução BCB 540/2025: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=540&tipo=Resolu%C3%A7%C3%A3o+BCB
- IN BCB 775/2026: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=775&tipo=Instru%C3%A7%C3%A3o+Normativa+BCB
- BCB start date: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=45562&tipo=Comunicado
- BCB ecosystem launch: https://www.bcb.gov.br/detalhenoticia/21189/nota
- B3 production-assistance phases and mandatory schedule: https://content.b3.com.br/duplicatas-escriturais-producao-assistida/

## 2. Verified operational pain

A V360 mapping published by Capital Aberto on 14 October 2026 identified eight operational risk types in one real corporate workflow, including:
- duplicate payments and payments without underlying support;
- differences in amounts and ownership;
- obligations remaining after cancellation of tax invoices;
- fragmented data across purchase orders, invoices, goods-receipt records and finance systems;
- six categories of discrepancies, eight categories of exceptions and seven types of human intervention.

The mapping followed one operation across five corporate departments. V360's co-CEO explicitly said it was not a statistical study and cannot establish the frequency of each problem across the market.

The report also says physical receipt confirmation took 30–90 days in some cases, while the ten-day window for acceptance/refusal can create a timing mismatch. This is a workflow design risk, not proof that the ten-day statutory period can be ignored or universally causes tacit acceptance.

A separate survey of 355 tax professionals was referenced in the report, but the accessible publication does not provide enough methodological detail to extrapolate market-wide loss rates.

Sources:
- https://www.capitalaberto.com.br/regulacao/2026/10/duplicata-escritural-pode-gerar-risco-financeiro-diz-estudo
- https://www.contabeis.com.br/noticias/79980/nzofel52g86o.jsp

## 3. Market adoption signal

An 8 November 2026 report citing APIIMF data said at least 233 establishments were registered as issuers/sacadores at that point, including branches of large groups such as Nestlé, Chocolates Garoto and Grupo Petrópolis. Market participants described adoption as still limited and preparation/integration as incomplete. The number is a dated snapshot, not the total addressable market or a measure of all participating payers.

A reported R$13 trillion potential-market figure is a broad market headline, not a validated software TAM, annual financed volume or accessible revenue pool. Do not use it as a product-sizing input without a defensible definition and primary data.

Sources:
- https://www.infomoney.com.br/business/a-promessa-de-r-13-trilhoes-da-duplicata-escritural-esta-travada-por-que/
- https://www.bcb.gov.br/detalhenoticia/21189/nota

## 4. Existing solutions and competitive overlap

| Provider | Publicly described capability | Overlap with a proposed product |
|---|---|---|
| V360 | Connects ERP to authorised registrars; captures, validates and manifests duplicates against a company's CNPJ; updates ERP bank domicile before payment; tracks response deadline; advertises SAP, Oracle, TOTVS and registrar integrations | Directly covers the obvious payer-side exception/reconciliation/payment-routing product |
| Monkey | Orchestrates issuer/supplier onboarding, ERP integration, issuance, registry interactions, financing and investor/lender workflows; supports registration by financing agents and reconciliation IDs | Covers seller-side origination, receivables orchestration and financing integration |
| Núclea | Issuer/payer agenda, ERP integrations, collateral management, qualified receivables agenda, financing-agent/bookkeeping-agent workflows | Covers registry-adjacent data and collateral/financing workflows |
| B3 | Authorised bookkeeper/registrar infrastructure, assisted-production environment, interoperability and technical partners | Owns core market infrastructure and integration surface |

Sources:
- V360: https://v360.io/solucoes/duplicata-escritural/
- Monkey developer documentation: https://developers.monkey.exchange/docs/duplicata-escritural
- Monkey product: https://www.monkey.tech/duplicata-escritural
- Núclea: https://www.nuclea.com.br/duplicata-escritural/
- B3: https://content.b3.com.br/duplicatas-escriturais-producao-assistida/

## 5. Product-shape assessment

### A. Payer-side invoice-to-duplicate exception and payment control

Pain is credible: reconcile purchase orders, invoices, goods receipt, acceptance/refusal, registry ownership, assignments and payment destination.

**NO-GO as a new Arbitrum product:** V360 already markets this exact integration and workflow. An entrant would need a specific uncovered ERP/industry/exception segment and evidence of a buyer willing to replace or supplement V360. None was found.

### B. Issuer-side onboarding, ERP connector and receivables-finance orchestration

Pain and market transition are real, but Monkey and registry operators already market these capabilities. This is a crowded integration and distribution business, not an identified Arbitrum primitive.

**NO-GO as an Arbitrum product** absent a clearly underserved segment and buyer-backed gap.

### C. Pre-existing contract migration / tombamento and exception resolution

Resolução BCB 540/2025 and IN 775/2026 create a concrete transition workflow for existing contracts over future receivables: ten-business-day submission, routing to the issuer's bookkeeper, application to the issuer agenda under priority criteria, and dispute handling. This may create a short-lived operational spike for lenders and bookkeepers.

However:
- the rules explicitly define the operational hand-off and prioritisation convention;
- registrars and bookkeepers are the natural operators of the process;
- no evidence of unresolved failures, recurring manual cost, budget owner or a third-party procurement gap was found;
- the migration burden may be temporary rather than recurring.

**Status:** retain as a narrow discovery question only, not a product candidate or WATCH.

## 6. Arbitrum fit

**Poor / not established.**

The system is deliberately built around BCB-authorised bookkeepers, registrars, interoperable financial-market infrastructure, issuer consent and regulated payment direction. The key workflow is data reconciliation and regulated event processing. Signed API events, audit logs and ERP integrations are sufficient in the documented model.

A public chain does not establish legal ownership, replace the bookkeeper, establish priority or direct payment. No buyer requirement for shared permissionless state, cross-issuer token supply controls or Arbitrum settlement was found.

Do not build:
- an onchain duplicate-receivables registry;
- a mirror of B3/CERC/Núclea data;
- generic dynamic-boleto payment routing;
- a generic ERP/registrar integration connector;
- a receivables tokenisation platform.

## 7. Decision and reopening criteria

**D-041: NO-GO as an Arbitrum Open House product thesis; no new WATCH.**

The market is real and the operational pain is documented, but the obvious product categories are already covered by direct incumbents and no material Arbitrum role exists.

Reopen only if a specific buyer identifies:
1. a repeatable workflow failure that V360, Monkey, Núclea, B3 and its ERP do not cover;
2. measurable loss, manual workload or delayed credit caused by that gap;
3. a named budget owner and procurement path;
4. a segment or exception class that can be served without becoming a generic integration consultancy.

Even then, first test a conventional API/SaaS architecture. Arbitrum requires separate proof of material shared-state value.

## 8. Research status

- Desk research completed from BCB, B3, Capital Aberto, V360, Monkey, Núclea and market reporting.
- No customer interviews or outreach were conducted for D-041.
- V360's risk mapping is one operational case, not statistical evidence of market-wide frequency.
- The 233 establishment count is a dated 8 November snapshot; not TAM.
- No code, tests, dependencies, build, CI or deployment changed.
