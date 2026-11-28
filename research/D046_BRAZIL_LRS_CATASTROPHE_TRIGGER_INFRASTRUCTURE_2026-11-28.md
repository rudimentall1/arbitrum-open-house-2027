# D-046 — Brazilian catastrophe-risk LRS: trigger verification and settlement infrastructure

**Date:** 28 November 2026  
**Status:** exploratory discovery lead only. Not a selected product, WATCH or GO. No implementation authorized.

## Hypothesis

Brazil's new Insurance Risk Letter (LRS) market may need a specialised, independently verifiable risk-data and trigger-execution layer to help licensed insurers/cedants and SSPEs transfer selected catastrophe exposures to institutional capital.

Initial use-case to test: hydrological/flood risk, including run-of-river hydropower generation and potentially state/municipal catastrophe protection.

This is **not** a proposal to become an insurer, create an SSPE, or launch another generic tokenized-reinsurance platform. The possible product is a B2B service for an existing licensed insurer/SSPE/broker:
1. ingest confidential exposure and policy/portfolio data;
2. connect physical hazard observations to the financial loss being transferred and quantify basis risk;
3. preserve reproducible, versioned data snapshots and independent trigger calculations;
4. publish signed event/trigger attestations and auditable payout calculations;
5. optionally coordinate a transaction-specific collateral pool and payout waterfall on Arbitrum, while the legal LRS, regulated underwriting, custody and BRL fiat payment remain with licensed counterparties.

Arbitrum is only justified if the insurer/SSPE, collateral agent and qualified investors need a shared, independently auditable collateral/trigger state and the smart contract materially executes the agreed waterfall. A hash-only dashboard or conventional data API is not enough.

## Evidence for a real market

### 1. Brazil has an active but very early LRS regime

- LRS was created under Lei 14.430/2022; the first Brazilian issue closed in May 2025.
- By October 2026, four issues had been completed, totalling up to approximately R$273 million. All were financial risks: surety, credit insurance or tax contingency. No natural-catastrophe risk had yet been transferred through a Brazilian LRS.
- The largest disclosed transaction was R$126 million, issued by Galápagos Capital SSPE with Avla Seguros, Tivio Capital and Marvin. Marvin acted as collateral agent and co-structurer.
- SUSEP and Receita Federal published Portaria Conjunta 748 on 18 November 2026, setting transaction-specific CNPJ registration procedures for LRS operations. SUSEP says this is another step in completing the regulatory/operational framework and supporting new issues.

Sources:
- https://www.insurtech.com.br/guia/emissoes-lrs-letra-de-risco-de-seguro/
- https://www.gov.br/susep/pt-br/central-de-conteudos/noticias/2026/novembro/mercado-de-letras-de-risco-de-seguro-avanca-no-brasil
- https://www.artemis.bm/news/galapagos-capital-sspe-issues-largest-lrs-at-r126m-the-fourth-under-brazils-ils-regime/

### 2. A public-sector catastrophe-risk buyer signal exists, but is not a mandate

On 19 November 2026, Artemis reported that Rio Grande do Sul's government was considering using LRS to transfer natural-catastrophe risk to capital markets after the May 2024 flood. The reported loss estimate was R$85 billion and roughly 90% of the state's 497 municipalities were affected. The Secretary of Reconstruction said the objective was to make funds available quickly after a disaster without relying solely on budget reallocations.

Important limitations:
- no transaction structure, size, trigger or investor group has been defined;
- no specific insurers had yet been approached individually;
- this is exploratory government interest, not a purchase order or confirmed issuance.

Source: https://www.artemis.bm/news/rio-grande-do-sul-considering-ils-through-brazils-lrs-regime-secretary-capeluppi/

### 3. The missing link may be translating physical events into investable financial risk

In a September 2026 interview, Santé's founder said the central challenge is not merely finding a weather/hydrology index. The index must be demonstrably representative of the financial loss in the actual portfolio. Brazil cannot be modelled as one homogeneous catastrophe exposure; basis risk changes by geography, sector and portfolio. A workable ILS transaction requires coordination among insurers/reinsurers, brokers/structurers, modelling capabilities, SSPEs and investors.

The same interview cited CNseg/EY estimates of R$184 billion in economic losses from 67 significant climate events during 2022–2024, with only 9% insured. These are aggregate climate losses, not an addressable LRS market estimate.

Source: https://www.artemis.bm/news/brazils-growing-lrs-market-broadens-the-range-of-risks-available-to-ils-capital-pereira-sante/

### 4. Hydropower is a testable first peril, not a proven market

A peer-reviewed September 2026 study designed parametric drought cover for Brazilian run-of-river hydroelectric plants. It used monthly data for 151 plants from 2006–2022, modelled upstream/downstream hydrological dependencies and found ONS affluent flow a plausible trigger for run-of-river plants. Water-storage plants showed higher basis risk because operational flexibility weakens the relationship between flow and insured loss.

The paper's results are not a commercial validation:
- only four large plants are shown in its premium/payout summary;
- observed and expected claim frequencies differ materially for some plants (e.g. Belo Monte and Xingó), showing calibration risk;
- portfolio diversification and reinsurance are required;
- the paper's annual premium/payout estimates are large and need independent actuarial review.

Sources:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13542624/
- https://doi.org/10.1111/risa.70347

Brazil has 428 PCHs and 690 CGHs in operation in the EPE 2025 baseline, but this count does not prove that these plants are suitable or willing buyers. The study's run-of-river design must not be extrapolated to all hydro plants.

Source: https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-894/topico-831/An%C3%A1lise%20socioambiental%20das%20fontes%20energ%C3%A9ticas%20do%20PDE%202035.pdf

## Arbitrum and data feasibility

- ONS operates an open-data portal with hydrological, reservoir, ENA, generation and other energy datasets, available in structured formats and via API.
- ONS states that several datasets are subject to recurring consistency updates and may be revised after publication. A trigger service must therefore preserve the exact source version/snapshot, timestamp, transformation and contract-defined finality/dispute window. A simple "read current API value" oracle is unsafe for an insurance contract.
- A smart contract could hold a transaction-specific collateral pool and execute an agreed, capped payout waterfall after an independently signed trigger assertion. The legal LRS and insurer's policy remain offchain with the regulated parties.

Sources:
- https://dados.ons.org.br/
- https://dados.ons.org.br/dataset/ena-diario-por-reservatorio

## Competitive boundary — do not build a generic clone

- **Lockton Re** launched a dedicated Brazil LRS/ILS platform in May 2026, with structuring, regulatory advisory, investor access and locally licensed SSPE arrangements. This is a direct incumbent in deal origination/structuring.
  - https://global.lockton.com/re/en/news-insights/lockton-re-launches-dedicated-insurance-linked-securities-ils-platform-for-brazil
- **Marvin** is a tech-native collateral agent with proprietary collateral-management technology; it acted as collateral agent/co-structurer for the R$126m Galápagos/Avla LRS. Do not build generic LRS collateral administration.
  - https://marvin.com.br/company
- **Santé** already positions itself in Brazilian risk intelligence and is actively discussing the LRS catastrophe-risk opportunity.
  - https://www.artemis.bm/news/brazils-growing-lrs-market-broadens-the-range-of-risks-available-to-ils-capital-pereira-sante/
- **Helios Re** publicly markets hydropower parametric insurance, using river discharge or catchment precipitation indices. It is a direct competitor for the insurance product, although no Brazil-specific deployment was verified.
  - https://www.helios-re.com/products/hydropower-insurance.html
- **OnRe** offers regulated onchain reinsurance through a Bermuda structure; **NextBlock** is building institutional tokenized reinsurance vaults on Base. Generic tokenized reinsurance is therefore already competitive and not a whitespace.
  - https://docs.onre.finance/for-insurers/introduction
  - https://www.nextblock.finance/docs

## Candidate product wedge to test

**Independent trigger-evidence and payout-execution layer for Brazilian LRS catastrophe portfolios**, initially hydrological/flood risk.

Potential buyer: an existing SSPE, cedant/insurer or broker/structurer that needs an independent and reproducible calculation agent plus auditable collateral/payout state. Potential integrations/partners—not confirmed customers—include IRB SSPE, Galápagos Capital SSPE, Ariel SSPE, BTG Pactual SSPE, Lockton Re and existing risk-modelling providers.

Potential revenue: annual platform/API contract plus per-portfolio/per-event calculation and servicing fees. No willingness to pay is established.

## Kill criteria / unanswered questions

1. Does a licensed cedant/SSPE have a real recurring problem with exposure-data preparation, independent trigger calculation, data revisions, collateral visibility or payout disputes that its current broker/actuary/collateral agent does not solve?
2. Can the product link physical observations to financial loss with acceptable basis risk, independently validated by an actuary? A public index alone is insufficient.
3. Is there a portfolio with enough scale and geographic/sector diversification to make the risk investable?
4. Can a legal LRS remain offchain while Arbitrum smart contracts coordinate a legally valid collateral/payout process? What is the legal status of any onchain representation? Obtain specialist Brazilian securities/insurance counsel before any implementation.
5. Would an existing provider such as Lockton Re, Marvin or Santé buy/license this layer or build it internally?
6. Is the need genuinely shared-state/programmable settlement, or would signed APIs, conventional escrow and an auditable database suffice? If the latter, reject Arbitrum fit.
7. Does a buyer have budget and a specific paid pilot path?

## Preliminary judgement

This is a more interesting discovery lead than generic RWA issuance or D-040 partial-receipt reconciliation, because it combines an emerging Brazilian securities wrapper, an explicit catastrophe-liquidity problem and a plausible smart-contract role. It is **not yet a product candidate**: the market is tiny and early, direct incumbents are strong, catastrophe LRS has not yet been issued, hydropower pricing/basis risk is unresolved, and the Arbitrum/legal fit is unproven.

**Canonical project status remains: NO PRODUCT SELECTED · NO GO · NO IMPLEMENTATION AUTHORIZED.**
