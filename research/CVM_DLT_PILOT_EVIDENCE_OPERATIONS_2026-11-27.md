# Parallel RWA opportunity: CVM DLT pilot evidence operations (27 November 2026)

## Why this track was opened

D-033 and D-035–D-037 remain bounded problem-validation work on collateral realisability. They are no longer a blocker to exploring other RWA workflows. This report opens a parallel, falsifiable hypothesis from a concrete Brazilian regulatory programme rather than waiting for replies from Eurex/CME.

## Primary evidence

### CVM has a live DLT pilot programme with 11 submitted proposals

On 6 November 2026, CVM said it had received 11 proposals from ABBC, ABcripto, ABFintech, ABToken (multichain), ABToken (Stellar), ANBIMA, B3, BEE4 & Núclea, CSD, Liqi, and Real Price & Registro de Imóveis do Brasil. The proposals were still under review for compliance with Resolução CVM 249; this announcement does not establish which networks were admitted or which organisations will be their network managers.

Source: https://www.gov.br/cvm/pt-br/assuntos/noticias/2026/grupo-de-trabalho-de-tokenizacao-da-cvm-recebe-11-propostas-de-pilotos-para-testes

### Resolução CVM 249 creates specific operational obligations

The official resolution is unusually concrete about network operations:

- Art. 3: auditable privacy, traceability, supervisory visibility from design, regulator access, operational resilience, and security checks for smart contracts and oracle integrations.
- Art. 8: network proposals must supply the CVM with a read-only access mechanism, real-time access to all test-operation records including transaction data, smart-contract states and metadata, structured machine-readable extraction/API, complete timestamped audit trails, continuous availability, support and recovery, and no third-party intermediary dependency for regulator access.
- Art. 17: network managers must keep regulator access operating throughout the test, submit fortnightly reports on test progress/problems/solutions, immediately notify CVM of security incidents or relevant failures and their containment/workaround, and ensure participants comply.
- Art. 18: participants must preserve traceability and integrity and may not publicly disclose test results without prior CVM approval.
- Art. 19: within ten business days after testing, network managers must submit a final report covering test results, risks and limitations, detailed off-chain activities, oracles, off-chain governance, and proposed regulatory/legal improvements.
- Art. 21: test period is 60 days, extendable by up to 30 days.

Crucial constraints:
- Tests use fictitious tokens/data only; no real securities, investor money or personal client data.
- CVM participation is voluntary and unpaid; costs are borne by proponents, network managers and participants.
- Network managers are restricted to eligible associations and self-regulatory entities participating in the Tokenisation Working Group. The 11 public proposal submitters must not all be described as network managers or admitted networks.

Official resolution: https://conteudo.cvm.gov.br/legislacao/resolucoes/anexos/200/resol249.htm

### Potential product hypothesis — not a candidate or GO

**Regulatory Evidence Operations Kit for DLT network managers and institutional participants.**

A narrowly scoped operations layer that:
1. Collects read-only evidence from DLT nodes/APIs, smart-contract states, oracle events and approved off-chain workflow sources.
2. Correlates test-case steps with timestamps, actors, state transitions and evidence provenance.
3. Produces regulator-ready, machine-readable audit exports and fortnightly/final report inputs.
4. Tracks operational incidents, containment steps, recovery evidence and SLA breaches.
5. Maintains access-control and confidentiality boundaries so participant data and unpublished test results are not exposed.

This is not a generic blockchain explorer, compliance dashboard, transfer-agent system, NAV tool, or collateral monitor. It targets the specific evidence-production and continuous-supervisory-access duties in CVM 249.

### Why this might be a real workflow

The regulation itself imposes recurring evidence and operational reporting duties on network managers. The short pilot duration creates a concentrated delivery burden. The ECB separately documents that tokenised money-market funds still rely on transfer agents and parallel on/off-chain infrastructure; this is contextual evidence of complexity, not proof that Brazilian CVM pilot teams have a gap.

ECB source: https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202604_04.en.html

### Existing coverage / competition and kill criteria

The hypothesis is weak if:
- Each network manager already has integrated read-only regulator access, structured APIs, complete timestamped audit trails, incident tooling and automated reporting.
- Existing GRC/SIEM/data-platform tools already produce the required outputs with little manual work.
- The reporting work is a one-off pilot cost with no recurring buyer or post-pilot use.
- The eligible network managers will not procure external software or cannot onboard a vendor within the pilot timeline.
- The workflow is better handled by implementation consultancies or existing platform vendors.

A commercial buyer is more likely to be a network manager, infrastructure operator, CSD/market operator or technology provider than CVM itself. No budget owner or willingness to pay has been established.

### Arbitrum fit

Not established. Resolução CVM 249 permits private or public-permissioned test networks, but the network must be proposed by an eligible proponent and meet regulator-access requirements. An evidence product could theoretically anchor evidence hashes on Arbitrum while keeping sensitive records off-chain, but a conventional signed event store/API may be sufficient. Do not force Arbitrum into the architecture. The product must demonstrate a material need for shared state, independent verification or cross-organisation coordination before any Arbitrum-specific design is selected.

## Direct outreach sent — 27 November 2026

A Portuguese-language, transparent research request was sent from the connected Gmail account to public institutional contact channels:
- CSD BR — contato@csdbr.com
- Liqi — contato@liqi.com.br
- Núclea — backoffice@nuclea.com.br
- BEE4 — atendimento@bee4.com.br

The messages identify this as independent product-discovery research, refer to the organisations' public inclusion among the 11 CVM proposal submitters, and ask to be routed to DLT architecture, operations, regulatory integration or pilot leads. They ask how read-only access, APIs, audit trails, fortnightly/final reports and off-chain/oracle/incident evidence are handled; whether there are manual/recurrent gaps; and whether external tooling would help or duplicate existing systems. No confidential data was requested.

Gmail message IDs:
- CSD BR: 1a21c5e0d62043e9
- Liqi: 1a21c5e160bab0af
- Núclea: 1a21c5e202bcb7c5
- BEE4: 1a21c5e31edf9131

No replies or meetings have been received yet. These are outreach attempts, not customer discovery.

## Next validation steps — run in parallel with D-033

1. Track replies from all four organisations; route generic support replies to the correct technical/operations owner.
2. Identify the actual eligible network managers and the admitted networks once CVM publishes the decision; do not assume the 11 proposal submitters are all admitted.
3. For each conversation, quantify manual hours and tooling spend for regulator access, evidence collection, incident handling and reporting.
4. Ask for a redacted sample report, test-case evidence bundle or process map; never request unpublished confidential pilot results.
5. Verify whether the need persists after the 60–90 day pilot and who owns the recurring budget.
6. Compare build vs existing GRC/SIEM/data warehouse/API tooling; if current systems already satisfy the requirements, close the hypothesis.
7. Establish why a shared Arbitrum state is necessary, if at all.

## Decision

**D-038 is an exploratory hypothesis, not a selected product, WATCH or GO.** It is a parallel RWA track; it does not reopen D-033's rejected generic servicing, NAV, collateral dashboard or proof-of-asset shapes. D-029 remains the only WATCH. No code, MVP, dependencies or deployment are authorized.
