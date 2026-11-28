# D-040 — Partial-receipt reconciliation: regulatory and independent-operator recheck

**Date:** 28 November 2026  
**Status:** exploratory discovery lead only. No product selected, no GO, no implementation authorization.

## Scope

Test whether portfolio-level reconciliation of partial precatório receipts and their downstream allocation to FIDC classes/subclasses is an uncovered workflow, or already part of the manager/administrator's regulated operating responsibilities and existing systems.

## Findings

### 1. The workflow is explicitly within the manager's existing responsibility

ANBIMA's *Regras e Procedimentos do Código de Administração e Gestão de Recursos de Terceiros*, version effective 23 March 2026, Annex Complementar V (FIDC), Art. 3 assigns participating managers responsibility to:

- monitor repurchases and settlement of receivables;
- generate financial information and continuously track portfolio assets;
- monitor valuation and liquidation events;
- **monitor reconciliation flows for receivables receipts**;
- monitor payment/prepayment/default performance and judicial progress for judicial-claim-backed receivables.

This is a private self-regulatory requirement for institutions participating in the ANBIMA code, not a universal CVM rule for every FIDC manager. Strivo publicly confirms ANBIMA adherence; Hemera and Monetiza membership has not been verified. For ANBIMA participants, this is direct evidence that broad reconciliation is an assigned manager responsibility, not an unowned workflow. It does **not** prove adequate automation or that cross-provider exceptions are fully resolved.

Sources: https://www.anbima.com.br/data/files/29/64/2F/89/0CD1E9104E6450E9BA2BA2A8/Regras%20e%20Procedimentos_%20AGRT_v_23.03.2026%20-%20assinado.pdf ; https://www.anbima.com.br/pt_br/autorregular/codigos/administracao-de-recursos-de-terceiros.htm ; Strivo's public ANBIMA-adherence statement: https://strivo.com.br/contato/

### 2. A second, independent operator lead is now identified

**WSUL Precatórios Federais FIDC** (CNPJ 63.764.461/0001-50) is publicly shown as operating, with Strivo Gestora de Recursos as manager and ID Corretora de Títulos e Valores Mobiliários as administrator. Its disclosed structure includes senior, mezzanine and subordinated subclasses, with class-specific amortisation rules and an appointed collection agent.

Strivo's March 2026 internal *Manual de Seleção, Aquisição e Monitoramento de Ativos* states that:
- its asset controls use spreadsheets and management systems;
- records include amortisation and interest instalment dates and amounts;
- asset monitoring is continuous/periodic, with events including partial non-payment of interest or amortisation reported immediately;
- the manual describes governance and monitoring controls, but does not disclose the end-to-end cash receipt → claim-level allocation → class/subclass accounting workflow.

This makes Strivo a useful independent interview target, not proof of a product gap. Public contact: **contato@strivo.com.br**; official contact page: https://strivo.com.br/contato/. No message has been sent.

Sources:
- https://strivo.com.br/wsul-precatorios-federais-fidc/
- https://strivo.com.br/documentos/manual-de-selecao-e-monitoramento-de-ativos-strivo-2026.pdf
- https://strivo.com.br/contato/

### 3. Fund documents confirm receipt-linked amortisation is a real operating pattern

Public FIDC descriptions show that some funds distribute through amortisation as underlying receivables are received. For example, Meu Precatório FIDC RL is disclosed with monthly distribution under a cash regime and possible amortisation as credit rights are received; Oliveira Trust is named as administrator/custodian in the fund record. This proves the workflow exists, not that it is difficult or underserved.

Other precatório FIDC structures disclose periodic or conditional amortisation, reinforcing that allocation is fund-specific and governed by each fund's regulation/supplements.

Sources:
- https://tradar.com.br/fidcs/meu-precatorio-fidc-rl
- https://strivo.com.br/wsul-precatorios-federais-fidc/

### 4. Competitive implication

The hypothesis must not be framed as generic FIDC receipt reconciliation, servicing, fund accounting, amortisation calculation, or a compliance dashboard. Those are already assigned responsibilities and likely covered by administrator/manager systems and service providers.

The only remaining testable wedge is a **specific recurring cross-system exception** that operators cannot resolve with current controls—for example, a partial court payment that cannot be reliably mapped to the underlying claim/portfolio record and then reconciled to the correct fund class/subclass allocation, including correction, reversal or discharge.

Required evidence:
1. One redacted, recent real exception and its source records (no confidential customer data).
2. Which system is system of record at each step and which party owns resolution.
3. Frequency per month/quarter, manual hours, delay, financial/control exposure and current workaround.
4. Whether the administrator, manager, servicer or existing software vendor can fix it without a new product.
5. Named budget owner and explicit willingness to test a bounded pilot.

If existing systems handle this without material recurring exceptions, close the hypothesis. Do not force Arbitrum: a normal integration/API and auditable accounting workflow remain the default unless multiple independent parties demonstrate a need for shared state.

## Outreach status

- Hemera DTVM: sent 28 November 2026 to atendimento@hemeradtvm.com.br. No reply found as of this check.
- Monetiza Investimentos: sent 28 November 2026 to contato@monetiza.com.br. No reply found as of this check.
- Oliveira Trust: not sent. Official contact form is available at https://www.oliveiratrust.com.br/contato; no suitable operational mailbox was verified. Do not substitute investor-relations or unrelated compliance addresses.
- Strivo: independent lead identified; no outreach sent.

## Decision

**D-040 remains exploratory only. No product candidate, WATCH, GO, implementation, or Arbitrum requirement established.** This recheck narrows the buyer interview to operational exceptions beyond the responsibilities and controls already expected of a FIDC manager/administrator.
