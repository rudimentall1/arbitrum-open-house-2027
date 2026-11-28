# D-050 — Brazil operational-workflow screen: port demurrage, healthcare claims and electronic duplicatas

**Date:** 28 November 2026  
**Status:** three screened directions; no product selected, no WATCH, no GO, no implementation authorized.

## Executive result

This pass looked for recurring, budget-bearing operational problems outside the previous energy/LRS/minerals tracks. Three signals were real, but each already has a strong incumbent or a regulated infrastructure owner. None currently supports an Arbitrum product.

| Direction | Evidence of pain | Existing coverage | Decision |
|---|---|---|---|
| Container demurrage/detention disputes | ANTAQ mediated 240 cases; 176 agreements (73.3%); R$23.09m improper charges prevented Aug–Dec 2025. | ComexIA/ElloX DetentionZero and DisputAI; e.Mix DemurrageNet; carrier dispute portals. | NO-GO for a new entrant's generic evidence/dispute product. |
| Hospital/health-plan claim denials (glosas) | Anahp hospitals: 15.93% initial glosa rate in 2025; average receipt time 77.35 days; 1.72% gross revenue accepted as glosa loss. | Bionexo acquired prevention/recovery capabilities; Skedia and GlosaAI/MedOps sell RCM/glosa workflows; HIS vendors. | NO-GO for generic RCM/glosa SaaS or tokenized receivables. |
| Electronic trade bills (duplicata escritural) | Large transition, ERP/registry integration work, adoption still early; market estimates R$11–13tn annual instrument volume. | BCB-authorized escrituradoras/registradoras B3, CERC, Núclea and others; Quick Soft and other receivables ERPs/integrators. | NO-GO for a new registry/interoperability ledger; potential implementation services are conventional SaaS/API, not Arbitrum. |

## 1. Container demurrage and detention disputes

### Verified signals
- ANTAQ prevented R$23.09m in improper container detention/demurrage charges assessed Aug–Dec 2025; it held 240 conciliation meetings and reached agreements in 176 cases (73.3%). This is a regulator-reported subset of disputes, not the total addressable market.
- A later ANTAQ procedure requires a prior direct attempt to resolve the charge, evidence of the logistics operation and disputed charge, and a 15-day self-composition window after complaint intake. Each case is tied to one booking confirmation or, for imports without a booking, an MBL.
- The federal service requires a standard PDF form, supporting documents and Fala.BR filing; the evidence is shared with the counterparty. This is a concrete administrative workflow, but ANTAQ already owns the formal process.

### Competition / kill test
- ComexIA / ElloX DetentionZero monitors 15+ shipping lines and 11+ ports, preserves dated screenshots of deadline/gate changes and generates evidence dossiers. Its public page reports 1,600+ containers, 86 companies and R$25m+ saved; these are vendor claims, not independently audited.
- ComexIA's DisputAI analyses invoices, assembles evidence, opens authorised disputes and tracks carrier responses.
- e.Mix DemurrageNet automates free-time/tariff calculations, event history, billing, profitability and ERP integration; it already serves forwarders, brokers, traders and shipping-line commercial teams.
- Maersk provides its own dispute workflow and evidence requirements.

**Decision:** NO-GO for a generic deadline-monitoring, evidence dossier, dispute case-management or demurrage calculation product. The proposed wedge is already directly covered by specialist vendors, and the regulator's own workflow is centralised. No evidence that shipping counterparties need shared on-chain state, escrow or an Arbitrum settlement contract. A narrow uncovered sub-workflow would need named buyers and proof beyond these vendors before reopening.

## 2. Hospital revenue-cycle / glosa operations

### Verified signals
- Anahp's 2026 Observatório reports a 15.93% initial glosa rate against receivables from health plans in 2025 and a 77.35-day average time from invoice to receipt. Accepted glosas represented 1.72% of gross health-plan revenue in 2025. These metrics have different denominators and must not be conflated.
- A separate 2026 industry report describes 60–120 day receipt cycles and significant administrative work to review and appeal rejected claims.
- The pain is recurring and economically meaningful for hospitals, clinics and laboratories.

### Competition / kill test
- Bionexo has acquired companies covering both pre-submission prevention and post-denial recovery/negotiation.
- Skedia markets a connected provider-side financial operating system linking care delivery, guides, billing, glosa risk, reconciliation and professional payouts.
- GlosaAI/MedOps markets pre-submission audit, TISS-based analysis, HIS integrations and a human-reviewed workflow.
- TISS/TUSS standards and existing hospital information systems provide a structured foundation; this is not an unserved cross-party data domain.

**Decision:** NO-GO for generic glosa automation, revenue-cycle dashboards, claim-recovery workflow or tokenized hospital receivables. The best current products are conventional data/AI integrations into HIS and TISS, not Arbitrum. No verified unmet multi-party state/settlement problem or buyer request for blockchain.

## 3. Electronic trade bills (duplicata escritural)

### Verified signals
- Banco Central launched the electronic trade-bill ecosystem on 30 June 2026. B3 received authorization as an escrituradora on 25 June and began assisted production on 15 July.
- Rollout is phased: large companies from July 2027, medium from January 2028 and small from July 2028 (B3's published timeline).
- A November 2026 report describes 233 registered issuer establishments and adoption/integration bottlenecks. The count is a snapshot, not market penetration proof or TAM.
- Interoperability testing reportedly exposed technical inconsistencies and delays across infrastructure participants. This is evidence of integration complexity during a regulated rollout, not proof of an enduring independent product gap.

### Competition / kill test
- The authorised infrastructure already includes B3, CERC and Núclea, with other authorised participants in the broader ecosystem.
- B3 advertises direct ERP/platform connections, governance, support and interconnection with other participants.
- Quick Soft and other ERP/formalisation vendors target factorings, FIDCs and securitisers, with existing customer bases and integration products.
- The legal and operational source of truth is the regulated escritural ecosystem. A parallel Arbitrum registry would duplicate authoritative records and create legal reconciliation risk.

**Decision:** NO-GO for a parallel registry, tokenized duplicata ledger or generic interoperability layer. Conventional ERP integration, migration tooling and reconciliation services may be commercially useful, but they are not an Arbitrum thesis unless a buyer demonstrates a cross-institutional shared-state need that authorised registrars and APIs cannot satisfy.

## Cross-track conclusion

This pass found real pain, but not product whitespace. The pattern is important: a large market and a visible operational problem do not establish an entrant opportunity when a specialist vendor or regulated infrastructure owner already owns the workflow. Do not select any of these tracks merely because the public evidence is strong.

## Next discovery direction

Continue searching other sectors and jurisdictions for an independently verifiable workflow where:
1. two or more independent counterparties repeatedly reconcile a legally meaningful asset, obligation, event or collateral state;
2. existing software, official registries and APIs demonstrably fail at a specific recurring exception;
3. a named budget owner bears measurable cost and can sponsor a paid pilot; and
4. shared programmable state on Arbitrum is materially better than signed messages, a conventional database, bank escrow or an existing regulated registry.

No new organisations were contacted. No implementation, code, dependencies, tests, build or deployment were changed.

## Sources

- ANTAQ official service and process: https://www.gov.br/pt-br/servicos/registrar-denuncia-sobre-cobrancas-de-servicos-que-envolvem-o-transporte-aquaviario-de-carga-em-contêineres
- ANTAQ Portaria SFC 1/2026: https://sophia.antaq.gov.br/Terminal/Acervo/Detalhe/42005
- ANTAQ dispute outcomes, reported by DatamarNews: https://datamarnews.com/noticias/brazils-waterway-regulator-blocks-r23-mln-in-disputed-container-detention-charges/
- ComexIA: https://comexia.com.br/ ; DetentionZero: https://comexia.com.br/produtos/detentionzero ; DisputAI: https://comexia.com.br/produtos/disputai
- e.Mix DemurrageNet: https://emix.com.br/en/software/demurragenet/
- Maersk Brazil dispute guide: https://www.maersk.com/~/media_sc9/maersk/local-information/files/latin-america/brazil/overview/maersk-dispute-brasil.pdf
- Anahp Observatório 2026: https://www.anahp.com.br/wp-content/uploads/2026/05/Observatorio2026.pdf
- Accrua Brazil RCM / glosa metrics: https://www.accrua.com.br/en-us/guides/hospital-revenue-leakage/
- Bionexo coverage / acquisitions: https://exame.com/negocios/os-proximos-passos-da-brasileira-que-vendia-remedio-para-hospital-e-agora-movimenta-r-45-bilhoes/
- Skedia: https://skedia.com.br/
- GlosaAI / MedOps: https://www.glosaai.com.br/
- Banco Central electronic trade bill ecosystem: https://www.bcb.gov.br/en/pressdetail/2678/nota
- B3 authorised escrituração and rollout: https://www.b3.com.br/pt_br/noticias/duplicata-escritural.htm ; https://www.b3.com.br/pt_br/noticias/duplicatas-8AA8D0CD9F63414D019F6710EA2A5B81.htm
- Duplicata adoption/integration reporting: https://fronteiraeconomica.com.br/duplicata-escritural-com-potencial-de-r-13-trilhoes-enfrenta-entraves-para-avancar/
- Quick Soft / ERP integration market: https://finsidersbrasil.com.br/reportagem-exclusiva-fintechs/duplicatas-escriturais-aceleram-busca-por-infraestrutura-e-aquisicoes/
- Núclea market estimate and institutional survey reporting: https://www1.folha.uol.com.br/amp/colunas/painelsa/2026/06/mercado-financeiro-espera-ampliacao-da-oferta-de-credito-com-duplicadas-digitalizadas-afirma-nuclea.shtml
