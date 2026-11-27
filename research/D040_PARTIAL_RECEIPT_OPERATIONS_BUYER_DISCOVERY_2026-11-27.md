# D-040 follow-up — partial-receipt operations buyer discovery (27 November 2026)

## Scope

Test only this adjacent discovery question: how do Brazilian FIDCs with portfolios of multiple precatórios allocate and reconcile partial cash receipts, corrections, reversals and final discharge across claim-level records, fund accounting and quota-holder reporting.

This is not a product candidate, does not reopen the original D-040 transfer/diligence thesis, and does not establish demand or Arbitrum fit.

## Three priority interview leads

### 1. Oliveira Trust — highest priority
- NACIONAL 2 FIDC, CNPJ 61.753.889/0001-72, objective: precatórios; started 25 July 2025.
- Public fund information identifies Oliveira Trust DTVM as administrator and custodian, and Oliveira Trust Servicer S.A. as manager. Public 2026 quota reports are available.
- This makes the institution a strong operations interview lead spanning fund administration, custody and servicing/management.
- Contact: official form https://www.oliveiratrust.com.br/contato ; São Paulo +55 (11) 3504-8100; Rio +55 (21) 3514-0000.
- Sources: https://api-app-ext.oliveiratrust.com.br/novo/fundos-captacao/81567 ; https://api-site.oliveiratrust.com.br/novo/informe-mensal/
- Caveat: no public evidence reviewed describes the internal partial-receipt workflow or a software gap.

### 2. Hemera DTVM — administrator/custodian lead
- Homma Prec FIDC, CNPJ 57.660.538/0001-40, is publicly described as administered by Hemera DTVM and managed by Monetiza Investimentos; Homma Capital is specialised credit consultant.
- Hemera publicly offers fiduciary administration, custody, asset bookkeeping, escrow, electronic formalisation and a proprietary collections system designed for integrations.
- This is a direct reason to test incumbent capabilities first, not evidence of a gap.
- Contact: atendimento@hemeradtvm.com.br; +55 (41) 3122-7300; https://hemeradtvm.com.br/
- Sources: https://www.hommacapital.com.br/hommaprec ; https://hemeradtvm.com.br/
- Caveat: public descriptions do not confirm claim-level partial-receipt allocation or unresolved exceptions.

### 3. Monetiza Investimentos — manager lead
- Public Homma Prec FIDC page identifies Monetiza as manager.
- Manager is a relevant interviewee for allocation rules, cash waterfall, quota amortisation, system of record and delegation boundaries.
- Contact: contato@monetiza.com.br; https://www.monetiza.com.br/
- Sources: https://www.hommacapital.com.br/hommaprec ; https://www.monetiza.com.br/
- Caveat: fund relationship is public; current operational pain is not.

## Secondary leads / competitive boundary

- Limine DTVM is administrator, custodian, registrar and distributor for Precatórios BR FIDC-NP. Public contacts include adm.fundos@liminedtvm.com.br and custodia@liminedtvm.com.br. The fund documents surfaced here are older (2023–2024), so confirm current relevance before prioritising. https://liminedtvm.com.br/ativos/precatorios-br-fidc-np/ ; https://liminedtvm.com.br/fale-conosco/
- Sonar Investimentos is named manager of Precatórios BR FIDC-NP; contact@sonarinvestimentos.com.br, +55 (31) 3215-0200. https://www.sonarinvestimentos.com.br/fale-conosco
- Oriz Jus I discloses a partnership with Preks. Preks already covers FIDC precatório origination, diligence, digital assignment, e-signature, Ethereum assignment record and conditional escrow. This excludes the original D-040 product shape; do not treat Oriz as whitespace. https://www.orizasset.com.br/jusfidc ; https://preks.com.br/para-gestoras/

## Discovery questions

1. When one of many precatórios pays only part of the expected amount, where is the receipt first recorded and what is the system of record?
2. How is it matched to the specific claim, fund/class, reserve and quota waterfall?
3. How are corrections, reversals, fees, attorney splits, liens and final discharge reflected across servicing/legal records, bank statements, fund accounting and investor reporting?
4. Which exceptions require spreadsheets, email or manual reconciliation? How many per month and how many staff-hours?
5. What is the measurable consequence: delayed amortisation, NAV/reporting corrections, audit findings, cash leakage, investor complaints or operational risk?
6. Which administrator/servicer/fund-accounting system should solve this? What precisely does it fail to cover?
7. Who owns the budget, and could they approve a paid read-only pilot using redacted data?

Do not request confidential portfolio data in first contact. Ask for a 20-minute process interview and a redacted example only if appropriate.

## Outreach drafts — not sent

### Oliveira Trust
**Assunto:** Pesquisa operacional sobre recebimentos parciais em carteiras de precatórios

Olá, equipe Oliveira Trust,

Estou pesquisando como FIDCs com carteiras pulverizadas de precatórios tratam recebimentos parciais de diferentes processos e conciliam esses valores com a escrituração do fundo e a amortização das cotas.

Vi que a Oliveira Trust atua na administração e custódia do NACIONAL 2 FIDC, cujo objetivo público inclui precatórios. Gostaria de entender, em nível de processo e sem solicitar dados confidenciais, como vocês identificam o precatório pago, alocam o recebimento, tratam ajustes ou estornos e refletem o evento na posição do fundo e dos cotistas.

Seria possível conversar por 20 minutos com alguém de operações, controladoria ou servicing? Não estou apresentando um produto nem presumindo que exista uma lacuna; quero entender o fluxo atual e quais sistemas já resolvem essa rotina.

Obrigado.

### Hemera DTVM
**Assunto:** Pesquisa sobre conciliação de recebimentos parciais em FIDC de precatórios

Olá, equipe Hemera,

Estou pesquisando processos operacionais de FIDCs que investem em precatórios, especialmente a conciliação de recebimentos parciais de vários créditos com a escrituração, os controles do fundo e a amortização das cotas.

Encontrei a informação pública de que a Hemera administra o Homma Prec FIDC e oferece administração fiduciária, custódia, formalização e cobrança. Gostaria de entender se recebimentos parciais e ajustes entre créditos da carteira já são tratados integralmente pelos sistemas atuais ou se ainda exigem conciliações manuais entre áreas ou prestadores.

Seria possível uma conversa de 20 minutos com alguém de operações ou administração de fundos? Não preciso de dados de clientes ou documentos confidenciais; busco compreender o processo e as ferramentas existentes.

Obrigado.

### Monetiza Investimentos
**Assunto:** Conversa breve sobre operações do Homma Prec FIDC

Olá, equipe Monetiza,

Estou pesquisando como gestores de FIDC acompanham recebimentos parciais de diferentes precatórios e transformam esses eventos em alocação de caixa, cálculo de posições e amortizações de cotas.

Vi que a Monetiza é a gestora do Homma Prec FIDC. Gostaria de entender como esse processo é dividido entre gestor, administrador, custodiante e consultoria: qual sistema é a fonte oficial, como são tratados ajustes e estornos e se há etapas manuais recorrentes.

Vocês teriam disponibilidade para uma conversa de 20 minutos com alguém responsável por gestão operacional ou controladoria? Não estou presumindo que exista um problema nem oferecendo uma solução; quero validar como o fluxo funciona hoje.

Obrigado.

## Status and next gate

- Three concrete institutional interview leads identified with public contact channels.
- No email, form or phone outreach sent. No interviews or redacted workflows obtained.
- No quantified pain, budget owner, paid-pilot willingness or differentiated product gap established.
- D-040 remains exploratory only: no candidate/WATCH/GO, no implementation.
- Hemera's own collections system and integration capability, plus Oliveira Trust's combined administration/custody/servicing roles, are material incumbent alternatives to test.
- Conventional fund-accounting configuration or API integration is the default. Arbitrum shared-state necessity is not established.
- Close this question if current systems handle the workflow without material recurring manual exceptions.

