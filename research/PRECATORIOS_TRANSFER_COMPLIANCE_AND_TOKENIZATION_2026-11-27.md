# Brazil precatórios transfer-compliance and tokenisation workflow — 27 November 2026

## Executive summary

**D-040: Exploratory RWA product hypothesis only. Not selected, not WATCH, no GO, no implementation.**

A potentially valuable narrow workflow has emerged from Brazil's new CNJ Resolução 705/2026: **precatório transfer-eligibility and token-issuance reconciliation for professional acquirers, FIDCs and tokenisation platforms.**

The regulation formalises a multi-party chain for assignments of court-ordered government receivables: public deed, notarial communication where applicable, electronic registration, Central National communication, debtor notification and court homologation. It also creates a national chain-of-title/status system designed to prevent duplicate assignment, duplicate liens and payment to the wrong party. It sharply distinguishes an issued/presented precatório from rights still in formation; the latter cannot be represented to the court as a transferable fraction, registered asset, guarantee, unique electronic identifier or payment position.

The market is real and already has tokenised offerings and specialist operators. The CNJ's new national dashboard reports approximately 1.15 million precatórios awaiting payment and more than R$319 billion in outstanding amounts already included in budgets. **This is the size of the public receivables stock, not the addressable market for assignments, tokenisation or software.**

The opportunity is not a new public registry or generic legal-data search. A narrow third-party product might reconcile (a) judicial/registry status, (b) legal assignment workflow completion and (c) the fraction represented by tokens or fund units. But existing providers already cover substantial parts of due diligence and origination, and the CNJ/SisPreq build is being developed with B3, CERC, Núclea and the notarial sector. The actual unmet workflow and buyer budget remain unproven. Arbitrum necessity is also unproven.

## 1. Primary regulatory evidence

### Resolução CNJ 705/2026

The CNJ approved the new rules on 10 November and issued Resolução 705 on 16 November 2026; it was published in the CNJ electronic gazette on 17 November. Article 67 provides that the resolution enters into force 30 days after publication, so as of this research date (27 November) it has been issued but is not yet in force.

Official text: https://atos.cnj.jus.br/atos/detalhar/7184

Key provisions:

- **Art. 6 — cumulative requirements for an assignment to have effects before the court:** (1) public deed of assignment; (2) notarial notice of negotiation, where applicable; (3) electronic registration with an authorised registry entity; (4) communication to the Central National; (5) structured-data notice to the debtor entity; and (6) homologation by the competent court. Missing requirements block title changes, assignee habilitation, payment to the assignee and issuance of a net-available-value certificate in the assignee's name.
- **Arts. 19–20 — pre-precatório rights:** the regulation covers certain transfers of rights in judicial claims before the requisition is presented, but those transactions do not produce effects before the court, debtor or precatório payment process. Before presentation, the claim may not be given the status of a transferable fraction, registered asset, registered guarantee, unique electronic identifier or payment position in the Central National. This is a critical eligibility boundary for any tokenisation or fractionalisation workflow.
- **Art. 24 — transition after presentation:** once the precatório is presented to the court, the change of title follows the formal assignment requirements.
- **Art. 35 — Central National:** a mandatory module linked to SisPreq and governed by CNJ, consolidating the chain of title and events including negotiation, deed, electronic registration, homologation, assignment, liens, guarantees, constrictions, payment, cancellation and inconsistencies. It can classify a credit/fraction by status (e.g. free to negotiate, deed executed, pending homologation, assigned, encumbered, partially paid, paid, blocked, suspended or inconsistent).
- **Art. 35 §4 — duplicate prevention:** the Central National is designed to prevent duplicate assignments, reservations, guarantees, liens or registrations over the same credit/fraction using automated alerts and operational blocks.
- **Art. 65 — staged technical activation:** mandatory electronic registration and court homologation exclusively through the Central National begin only on a date set by a joint CNJ/BCB act, after the Central National (or a compatible transitional solution) is implemented and at least one registry entity is authorised. Transitional communication and registry mechanisms may be used before full deployment.

### System implementation is already underway

- CNJ Portaria Conjunta 6/2026 created an interinstitutional group with CNJ and Banco Central to define the legal, technical and operational model. Its scope includes interoperability among SisPreq, the Central National, court systems, notarial electronic gateways and authorised registrars; data dictionaries; APIs/ports; audit trails; reconciliation; access control; and phased implementation.
  - https://atos.cnj.jus.br/atos/detalhar/6958
- On 5 October, CNJ signed Technical Cooperation Agreement 64/2026 with B3, CERC and CIP/Núclea for collaborative SisPreq development and integration with their financial-market systems.
  - https://www.cnj.jus.br/transparencia-cnj/gestao-administrativa/acordos-termos-e-convenios/termos-de-cooperacao-tecnica/termo-de-cooperacao-tecnica-n-64-2026/
- On 3 November, CNJ announced cooperation with the Colégio Notarial do Brasil and B3, CERC and Núclea to build SisPreq and connect the judicial, notarial and financial-market systems. CNJ retains system governance.
  - https://www.cnj.jus.br/judiciario-e-mercado-financeiro-se-unem-para-modernizar-gestao-de-precatorios/

This is important competitive context: the official integration layer is being designed by the institution that governs the process, with major registry/market operators and the notarial sector. A third-party product must complement this architecture, not assume it can replace or own the Central National.

## 2. Market evidence

- CNJ's public national dashboard reports approximately **1.15 million precatórios awaiting payment** and more than **R$319 billion** in outstanding values already included in budgets (reference dates from 1970 to 2027). It also reports around R$23.9 billion paid in 2026 at the time of publication.
  - https://www.cnj.jus.br/painel-que-apresenta-panorama-de-precatorios-no-brasil-e-e-lancado-durante-sessao-extraordinaria-do-cnj/
- The dashboard is aggregate and explicitly does not identify individual precatórios; specific records still require court-level consultation. The total stock is not the same as freely assignable, unencumbered or tokenisable supply.
- The public market already includes tokenised/structured precatório activity:
  - Mercado Bitcoin partnered with Adianta Jus to structure tokenised precatório exposure for retail investors (reported March 2026).
  - https://startups.com.br/negocios/mb-entra-em-precatorios-em-parceria-com-a-adianta-jus/
  - Preks markets digital acquisition/assignment of issued federal precatórios, works with ORIZ JUS I/IV FIDCs and describes blockchain-based transaction records. Its public materials say it performs more than 30 certificate checks and has served more than 10,000 customers; these are vendor claims, not independently audited figures.
  - https://preks.com.br/
- The existence of tokenised offers does not establish that each token holder is a direct legal assignee of the underlying precatório. Deal documents and the legal wrapper (fund share, investment contract, receivable assignment, etc.) must be examined case by case.

## 3. Existing substitutes and competitive coverage

| Provider | Publicly described coverage | Implication |
|---|---|---|
| CNJ / SisPreq + Central National | Official chain-of-title, assignment events, liens, guarantees, payments, status and duplicate prevention; being developed with B3, CERC, Núclea and notarial partners | Owns the authoritative judicial registry and core integrations; a new registry or duplicate-prevention database would overlap |
| JURISCAN | Reads DataJud/CNJ plus official requisition lists; publicly describes 14 checks per credit, including title holder, payment status, assignments and attachments; reports 795,094 records across 16 courts as of 18 Nov 2026 | Strong substitute for sourcing, public-data reconciliation and pre-acquisition analysis |
| JUDIT | Judicial data API across 90+ courts, continuous monitoring, precatório/pre-precatório search and a dedicated Miner product | Strong substitute for raw court data, monitoring and API enrichment |
| Preks | Originates and acquires issued federal precatórios, performs legal/document checks, digital assignment and blockchain-backed transaction history; works with registered FIDCs | Direct operator and likely to adapt its own workflow; potential buyer only if new requirements create a gap beyond its stack |
| Adianta Jus / Mercado Bitcoin | Originator/acquirer and tokenised distribution partnership | Direct operator and potential buyer for issuance/underlying-claim reconciliation |

Sources:
- JURISCAN checks and methodology: https://www.juriscan.com.br/inteligencia
- JUDIT products and API: https://judit.io/ and https://judit.io/solucoes/
- Preks operations: https://preks.com.br/
- Adianta Jus: https://www.adiantajus.com.br/

## 4. Narrow product hypothesis

**Working label: Precatório Transfer-Eligibility & Token-Allocation Control API.**

Potential customer: a professional acquirer, FIDC manager, tokenisation platform or distributor that needs to ensure a legally transferable claim/fraction is correctly represented in its internal books and any onchain instruments.

A deliberately narrow product could:

1. Classify a record as an issued/presented precatório versus a right still in formation, and enforce the Art. 19–20 boundary in the workflow. It must not mint or assign an onchain asset identifier for a pre-precatório right as if it were a transferable fraction registered with the court.
2. Reconcile the seller's judicial title, prior assignments, fraction, deed, electronic registry event, encumbrances, court homologation, debtor notification and net available amount.
3. Track status changes such as pending homologation, lien/guarantee, blocked, suspended, partially paid, paid, cancelled or inconsistent.
4. Reconcile the legally transferable amount/fraction against the units or tokens issued by a fund/platform, so the platform does not issue or keep outstanding units beyond the legally supported underlying allocation.
5. Produce an evidence package with source, timestamp, provenance and unresolved exceptions for legal/compliance review.

**Boundary:** this is not a replacement for CNJ/SisPreq, an authorised registry, a court, a notary or legal counsel. It should not claim to decide legal validity or guarantee payment. Its potential value is the workflow between an operator's own origination/issuance systems and official legal/registry states.

## 5. Why this may be commercially interesting

- A fresh, specific regulation changes the operational process for professional transfers and creates explicit multi-party steps.
- The legal distinction between issued precatórios and pre-precatório rights can materially affect what may be treated as a transferable fraction or registered asset.
- Tokenised and digitally originated precatório products already exist, so there are identifiable operator classes and named companies to approach.
- The CNJ's national dashboard shows a large underlying stock of public receivables, although only a portion is transferable and a smaller portion may be commercially addressable.
- The target workflow is narrower than a generic RWA dashboard or a generic court-data search API.

## 6. Why this may still be a bad product

- CNJ/SisPreq, B3, CERC, Núclea and the notarial system are already building the official integration and registry layer. They may remove most of the workflow gap.
- JURISCAN and JUDIT already provide extensive judicial data, sourcing and monitoring; Preks already performs deep diligence and digital assignments.
- The new requirements may be handled by each operator's existing legal/compliance team and vendors, with no external software budget.
- The regulatory implementation depends on a future joint CNJ/BCB activation date and authorisation of at least one registry entity. The full API/data standards and operational rollout are not yet evidenced as live.
- The tokenisation structures may be fund shares or investment contracts rather than direct assignments of the underlying judicial claim. The exact mapping between the legal claim, the fund's assets and token holders must be checked for each model.
- **Arbitrum fit is not established.** A signed API, internal database and official registry may be sufficient. A public chain should only be considered if independent operators require a shared, independently verifiable cap/state across multiple issuers, registrars or venues. Do not force Arbitrum into the compliance workflow.

## 7. Buyer discovery initiated

Two transparent Portuguese-language research emails were sent on 27 November 2026:

- Preks — info@preks.com.br — message ID `1a21c65b7af1fd8a`
- Adianta Jus — atendimento@adiantajus.com.br — message ID `1a21c65c1cc127d5`

The messages cite Resolução CNJ 705/2026 and ask about the new operational steps, manual reconciliation, pre-precatório eligibility, integration gaps and existing tooling. They request no customer data, documents or confidential transaction information and ask for routing to operations/legal/technology owners.

**No replies or meetings yet.** These are outreach attempts, not customer discovery.

## 8. Falsifiable validation plan

Keep D-040 exploratory until the following questions are answered:

1. Does Resolução 705 create measurable new manual work for operators, or do Preks/Adianta Jus and the official CNJ partners already cover it?
2. Which exact records are the system of truth for title, fraction, lien, payment and homologation during the transition period before mandatory Central National operation?
3. Do tokenisation platforms issue fund units/investment contracts or direct assignment tokens, and what legal linkage must be reconciled?
4. Is there a recurring exception that existing JURISCAN/JUDIT data plus operator systems do not resolve?
5. Who owns the budget: operations, legal/compliance, fund administration, technology or registry integration?
6. Would two independent operators share a redacted process map/exception and test a read-only eligibility/reconciliation API?
7. Is Arbitrum materially needed for shared supply caps or independent verification, or is a conventional API the right product?

**Kill criteria:** the CNJ/registrar system provides complete interoperable APIs; existing operators/vendors adapt with no material manual burden; no buyer/budget owner appears; no repeatable gap beyond legal review; or Arbitrum is not materially required.

## Decision

**D-040: Exploratory hypothesis only; not a selected product, not WATCH, no GO, no implementation.**

It is a stronger new discovery lead than the SBCE screen because it combines a recent concrete regulatory change, existing commercial activity and identifiable operators. It is not yet a product candidate: incumbents and the official system already cover much of the obvious workflow, and Arbitrum necessity is unproven.

Continue D-040 in parallel with D-033 and D-038. D-039 remains NO-GO as an Arbitrum product thesis. D-029 remains the only WATCH. Product selection may be made from the best available comparative evidence without waiting indefinitely for all interview replies; no MVP/code without explicit GO.

## Sources

- CNJ Resolução 705/2026: https://atos.cnj.jus.br/atos/detalhar/7184
- CNJ Portaria Conjunta 6/2026: https://atos.cnj.jus.br/atos/detalhar/6958
- CNJ Technical Cooperation Agreement 64/2026: https://www.cnj.jus.br/transparencia-cnj/gestao-administrativa/acordos-termos-e-convenios/termos-de-cooperacao-tecnica/termo-de-cooperacao-tecnica-n-64-2026/
- CNJ SisPreq cooperation announcement: https://www.cnj.jus.br/judiciario-e-mercado-financeiro-se-unem-para-modernizar-gestao-de-precatorios/
- CNJ national dashboard: https://www.cnj.jus.br/painel-que-apresenta-panorama-de-precatorios-no-brasil-e-e-lancado-durante-sessao-extraordinaria-do-cnj/
- JURISCAN methodology: https://www.juriscan.com.br/inteligencia
- JUDIT: https://judit.io/
- Preks: https://preks.com.br/
- Adianta Jus / Mercado Bitcoin partnership: https://startups.com.br/negocios/mb-entra-em-precatorios-em-parceria-com-a-adianta-jus/

## Research status and checks

- Public-source legal, market, competitor and product research completed.
- Outreach sent to two potential operators; no replies yet.
- No implementation, code, dependencies, tests, build, CI or deployment changed.
- No tests/lint/build run; this is a research-only repository.


## Outreach status update — 27 November 2026

A mailbox check found one automated acknowledgement from Adianta Jus for the 27 November research request, registered under support protocol **44**. It says the request will be handled and a response may follow; it contains no operational answers and is not buyer validation. No reply from Preks was found in the checked period. No follow-up was sent.


## Regulatory implementation recheck — 27 November 2026

A fresh check of the official CNJ publication materially sharpens the transition risk:

- CNJ's 3 November announcement confirms cooperation agreements with Colégio Notarial do Brasil (CNB/CF) and the market-system operators B3, CERC and Núclea to develop the national SisPreq solution. This is not merely a hypothetical future competitor; the official ecosystem build is underway. Source: https://www.cnj.jus.br/judiciario-e-mercado-financeiro-se-unem-para-modernizar-gestao-de-precatorios/
- Resolução CNJ 705/2026, Art. 35, establishes the Central Nacional as a mandatory national module linked to SisPreq, consolidating title chain and lifecycle events including assignments, deeds, registrations, liens, guarantees, payments, cancellations and inconsistencies. It also provides duplicate-operation alerts and operational blocks.
- Crucially, Art. 65 makes exclusive electronic registration and court homologation through the Central National conditional: they become required from a date set by a joint CNJ/BCB act, after (i) deployment of the Central National or a compatible transitional solution and (ii) authorisation of at least one registry entity. Until full deployment, transitional solutions and tribunal/CNJ-designated communication and registration channels are permitted, subject to traceability, security, structured migration and data protection. Source: official resolution https://atos.cnj.jus.br/atos/detalhar/7184; searchable full text: https://cnj.farolregistral.com.br/ato/341739
- CNJ's public explanation says the resolution enters into force 30 days after publication, while the exclusive Central National workflow will start only on the later joint activation date after technical conditions are met. Source: https://www.cnj.jus.br/nova-resolucao-do-cnj-cria-central-de-controle-e-protege-credores-de-precatorios/

**Implication for D-040:** do not describe the Central National as already live or assume that an operational API exists. The transition period may create temporary reconciliation work across tribunal-specific systems, registrars and operator ledgers, but that is only a hypothesis. It may equally be handled by the official transitional channels and the operators' existing legal/technology teams. A temporary migration gap is not sufficient product whitespace unless a buyer demonstrates recurring exceptions, measurable cost and a paid post-transition need.

## Outreach status recheck — 27 November 2026

- Preks: the sent message remains the only message in the thread; no reply.
- Adianta Jus: only an automated receipt acknowledgement is present, under support protocol **44**. No substantive operational answer, referral to an owner or meeting was received.
- No follow-up email was sent. Automated receipt is not customer validation.

**Status unchanged:** D-040 remains the leading discovery lead only, not a product candidate, WATCH or GO. No implementation is authorised.

