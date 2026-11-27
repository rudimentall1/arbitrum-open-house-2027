# RWA Infrastructure Scan — 27 November 2026 (D-033)

## Executive summary

**No new RWA product is selected. No implementation is authorized.**

This pass follows the user's explicit priority to focus discovery on real-world assets (RWA), especially tokenized financial assets and their post-issuance operations. It screens four product shapes:

1. Tokenized fund servicing, transfer agency, NAV publication and ledger reconciliation.
2. Tokenized private-credit servicing, loan-pool reporting, arrears and investor distributions.
3. Tokenized collateral eligibility, monitoring, margining and realisation across rails.
4. Independent asset/underlying verification and investor transparency.

The market is real and growing, and Arbitrum has meaningful RWA activity. But the obvious product categories are increasingly occupied by large financial institutions and specialist infrastructure vendors. The only recurring residual problem signal is the dependency between tokenised claims and off-chain assets, especially valuation, redemption, custody and liquidation under stress. Public evidence does not identify a reachable buyer with a distinct budget, a specific unresolved workflow, quantified losses or pilot willingness. This remains a problem area, not a candidate.

D-029 cross-border commodity collateral / warehouse-lien verification remains the sole existing WATCH hypothesis. This pass does not promote it or reopen generic warehouse-receipt tokenisation.

## Market and Arbitrum evidence

- IMF's 2026 tokenisation chapter estimates the public tokenised RWA market, excluding repos, at about **$65B**; tokenised fixed income is about **$48B**, including roughly **$30.4B tokenised credit** and **$17.5B tokenised money-market funds**. Issuance is concentrated, and the market still relies on off-chain custody, legal structures, price data and corporate-action inputs.
- Arbitrum Foundation's H1 2026 update says Arbitrum ranked first by tokenised RWA deployments, with more than **2,000 assets deployed**. It also reports Spiko TVL on Arbitrum near **$500M** and USDai active loans increasing to **$188M**. These are ecosystem traction signals, not proof that an independent workflow product has buyers.
- Wharton WIFPR's May 2026 paper emphasizes that tokenisation does not alter the underlying asset's credit quality, solvency or fundamental liquidity. It highlights valuation quality, custody, redemption design and oracle governance, and argues that token trading speed should match the underlying asset's ability to be valued and redeemed.

## 1. Tokenized fund servicing / transfer agency

### Real workflow

A tokenised fund still needs an authoritative legal register, investor servicing, NAV calculation, subscriptions/redemptions, accounting, tax/regulatory reporting, corporate actions and reconciliation between administrator records, bank/custody records and on-chain balances.

### Existing coverage

- **BNY Digital Transfer Agency** launched on 29 July 2026 for digitally native funds and traditional funds across multiple jurisdictions and blockchains. BNY named Dreyfus, Baillie Gifford and BlackRock among early issuers. BNY combines transfer agency, tokenisation, distribution and custody capabilities.
- **Chainlink Digital Transfer Agent standard** is documented as live in production and supports subscription/redemption processing across multiple chains plus fiat/digital-asset settlement workflows.
- **Libertum T-Suite Funds** explicitly targets administrators and accountants: approved NAV pack publication, on-chain/off-chain register reconciliation, bank-statement reconciliation (camt.053/MT940/CSV), balanced GL journals and role-based approvals. Its public page states a $1,000/month operator price.
- Tokeny, Securitize and other issuance/servicing providers also cover investor registers, compliance, lifecycle and API workflows.

### Decision

**NO-GO for a generic tokenised-fund administration, NAV oracle, transfer-agent, reconciliation or investor-servicing platform.** BNY and Chainlink are substantial institutional infrastructure; specialist SaaS already offers the narrow reconciliation and administration workflow. A new entrant would need a very specific uncovered administrator process and a named distribution channel, neither found in this pass.

## 2. Tokenized private-credit servicing / loan-pool reporting

### Real workflow

Loan-level records, interest/principal calculations, payment collections, arrears, covenant status, collateral, waterfall allocation, recovery events and investor reporting must remain aligned with servicing systems, bank cash movements and tokenised fund/pool records.

### Existing coverage and prior decision

- D-026 already tested post-origination servicing of tokenised private credit and recorded **NO-GO**: broad servicing pain was credible, but loan-servicing, fund-accounting and tokenisation platforms covered much of the workflow; no tokenised-credit-specific unmet workflow, buyer cost or pilot was found. This is not reopened.
- Current vendors describe coverage of arrears, recovery cases, servicing integrations and investor reporting. Coretos explicitly markets loan servicing integrations, arrears/recovery exception records and controlled investor communications. Brickken's 2026 private-credit guide maps responsibilities across servicing, collateral/covenants, payments and enforcement.
- A June 2026 $25M institutional mortgage-loan tokenisation by Black Lake and Nuva Labs used per-loan policy-hash-locked attestations and permissioned data rooms to verify pool eligibility without exposing borrower data. This is a concrete competing implementation of loan-pool transparency, not whitespace.

### Decision

**NO-GO for generic loan servicing, payment waterfall automation, arrears dashboards, loan-pool transparency or investor reporting.** It overlaps the D-026 closure and active specialist platforms. A future reopening requires a new buyer with a clearly different asset/servicing structure and evidence that existing platforms cannot perform a specific mandatory task.

## 3. Tokenized collateral eligibility, monitoring and realisation

### Real workflow

Institutional lenders and CCPs need to determine whether a tokenised asset is legally eligible collateral, whether the token maps to enforceable rights in the underlying asset, how it is valued, whether it can be mobilised or converted, and whether it can actually be liquidated during normal and stressed conditions.

### Strong problem evidence

- The Bank of England's November 2026 consultation says CCPs accepting tokenised collateral should demonstrate the ability to transfer and realise it within required timeframes, in normal and stressed conditions. It specifically calls out liquidity, valuation, conversion between tokenised/non-tokenised forms, platform/custodian dependencies, ownership records and operational disruption.
- IMF's 2026 work warns that tokenised infrastructure can increase intraday liquidity needs and create new dependencies on data feeds, custody and interoperability.
- ECB's 2026 analysis describes potential liquidity mismatch when tokenised shares are redeemable continuously while the underlying fund processes redemptions only at fixed cut-offs.
- Chainlink Fulcrum, announced in 2026, already targets institutional financing and cross-chain repo/collateral workflows: eligible-asset selection, financing terms, collateral verification, valuation inputs, settlement orchestration and exposure monitoring.
- Transcend and other collateral-management providers are positioned around cross-rail visibility, optimisation and routing.

### Decision

**NO-GO for generic collateral monitoring, eligibility registries, margin-call automation, cross-chain repo orchestration or collateral dashboards.** Chainlink Fulcrum and existing collateral-management providers cover much of the obvious workflow.

### Residual problem area — not a candidate

A narrower assurance workflow may exist around proving that a tokenised collateral position can be legally accessed, transferred, converted and realised within a lender/CCP's required stress window, including third-party failure scenarios. The Bank of England consultation is strong regulatory evidence of the problem class, but not evidence that a new software vendor has a budget owner or a differentiated product gap. It also risks becoming consulting/checklist software rather than a repeatable product. Do not promote to WATCH without two independent collateral-risk/operations buyers, concrete failed or delayed realisation examples, measurable cost/exposure and pilot willingness.

## 4. Independent asset verification / investor transparency

### Real workflow

Investors and collateral users need to verify what backs a token, who holds the underlying asset, whether holdings exist, how valuations are sourced, how often data is updated, and what happens when attestations become stale or providers fail.

### Existing coverage

- Chronicle Proof of Asset is reported as providing holdings-level attestations for BUIDL, including asset composition, valuation, custody and existence. The Block reported about $5B total value secured across products, including BUIDL, Janus Henderson Anemoy and Superstate; Securitize also announced Chronicle for its tokenised AAA CLO fund.
- RedStone provides administrator-sourced, cryptographically attested NAV feeds for tokenised funds and is reported as primary oracle for BUIDL, Apollo ACRED, Hamilton Lane and KKR fund products.
- Dune's RWA data guide describes product registries, multi-chain supply/balance tracking, NAV-based valuation, holder concentration and lifecycle-event classification.
- RWA.NGO publicly tracks product-level disclosure and verification status, illustrating an emerging transparency/data-quality layer.

### Decision

**NO-GO for generic proof-of-reserves, asset-existence attestation, NAV feeds, RWA analytics dashboards or investor transparency portals.** Chronicle, RedStone, Dune and public RWA data projects already occupy these categories, including named institutional fund deployments.

## Comparative result

| Area | Evidence of problem | Existing coverage | Decision |
|---|---|---|---|
| Tokenised fund administration / TA / reconciliation | Multi-party servicing and record reconciliation | BNY, Chainlink DTA, Libertum, Tokeny, Securitize | NO-GO generic |
| Private-credit servicing / waterfalls / arrears | Real post-origination complexity | D-026 closure; Allvue/WSO/Loan IQ/Coretos/Brickken; Nuva loan-level attestations | NO-GO generic |
| Collateral eligibility / monitoring / realisation | Strong BoE/IMF/ECB problem evidence | Chainlink Fulcrum, Transcend and existing collateral systems | NO-GO generic; residual problem area only |
| Asset backing / NAV / investor transparency | Strong need for trustworthy off-chain inputs | Chronicle, RedStone, Dune, RWA.NGO | NO-GO generic |
| Commodity inventory / warehouse collateral | Documented double-pledge and release workflow | Secro, national registries and D-029 substitutes | Existing D-029 WATCH only; not reopened |

## Buyer and budget-owner map

These are target roles for future validation, not people contacted or buyers confirmed:

- Fund administrators / transfer agents: COO, Head of Fund Operations, Head of Transfer Agency, Head of Digital Assets Operations.
- Tokenised fund issuers and managers: COO, Head of Product Operations, Fund Controller, Head of Digital Assets.
- Private-credit managers and loan servicers: Head of Loan Operations, Head of Portfolio Operations, Chief Credit Officer, Head of Fund Finance.
- Banks / repo desks / collateral managers: Head of Collateral Management, Head of Secured Financing Operations, Head of Digital Assets Collateral, Chief Risk Officer.
- CCPs and clearing members: Head of Collateral Risk, Head of Default Management, Head of Collateral Operations.

Company-level discovery targets include fund administrators and transfer agents (Apex Group, Alter Domus, SS&C, BNY), tokenised fund/asset issuers and platforms (Securitize, Superstate, Ondo, Spiko, Centrifuge), private-credit servicers/managers (Allvue, WSO/S&P Global, Loan IQ/Finastra, Coretos), and collateral infrastructure (Chainlink, Transcend). These names indicate where relevant roles exist; they do not establish access, buyer pain or willingness to pay.

## Arbitrum fit

Arbitrum has genuine RWA deployment and stablecoin activity, so an RWA product can be ecosystem-relevant. But the screened generic workflows do not require Arbitrum specifically. A normal API, administrator integration, signed attestation or existing oracle could perform most proposed functions.

A credible Arbitrum-specific product would need multiple independent parties to rely on shared, tamper-evident state for a live workflow—such as collateral status transitions, transfer restrictions, release approvals or settlement evidence—where existing systems cannot provide the same coordination. No such buyer-confirmed case was found.

## Evidence limits

- This is public-source desk research only.
- Vendor capability statements are not independently verified customer outcomes.
- Regulatory consultation and policy papers establish risks and expectations, not software purchase intent.
- No buyer interviews, production datasets, buyer-specific quantified costs, paid pilots or WTP commitments were obtained.
- No new GO or WATCH candidate emerged. D-029 remains the sole existing WATCH; D-026 private-credit servicing remains closed.
- No product selected; no implementation authorized.

## Sources

1. IMF, *Scaling Tokenization: New Efficiencies, New Vulnerabilities*, 2026: https://www.elibrary.imf.org/display/book/9798229055673/CH003.xml?tab_body=fulltext
2. IMF, *The Evolution of Financial Market Infrastructures in a Tokenized Economy*, 2026: https://www.elibrary.imf.org/abstract/journals/001/2026/136/article-A001-en.xml
3. Arbitrum Foundation, H1 2026 progress update, 2 September 2026: https://blog.arbitrum.foundation/arbitrum-foundation-reports-first-half-2026-progress-update/
4. Wharton WIFPR, Cong, Mayer and Rabetti, *Tokenizing Real-World Assets*, May 2026: https://wifpr.wharton.upenn.edu/wp-content/uploads/2026/05/WIFPR-Tokenizing-Real-World-Assets-Cong-Mayer-and-Rabetti.pdf
5. BNY, Digital Transfer Agency launch, 29 July 2026: https://www.bny.com/corporate/global/en/about-us/newsroom/press-release/bny-launches-global-digital-transfer-agency-capabilities-extending-leadership-in-fund-servicing-to-digital-market-130472.html
6. Chainlink, Digital Transfer Agent technical standard: https://docs.chain.link/dta-technical-standard
7. Libertum, Tokenized Fund Administration / T-Suite Funds, updated 22 October 2026: https://libertum.io/en/tokenized-fund-administration/
8. Coretos, Loan Tokenization & Servicing Workflows: https://www.coretos.com/insights/rwa-tokenization/use-cases/loans
9. Brickken, Private Credit Tokenization Guide: https://www.brickken.com/securities/private-credit-tokenization-guide
10. The Block, Black Lake / Nuva Labs $25M mortgage loan tokenisation, 24 June 2026: https://www.theblock.co/news/ecosystems/2026-06-24-black-lake-nuva-labs-tokenize-25-million-in-mortgage-loans-on-provenance-in-rwa-push-405963
11. Bank of England, Consultation on supervisory expectations for CCPs accepting tokenised collateral, November 2026: https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral
12. Chainlink, Fulcrum institutional financing and collateral management: https://chain.link/blog/introducing-chainlink-fulcrum
13. EY / Transcend, *How tokenized collateral changes collateral management*, 2 October 2026: https://www.ey.com/en_us/insights/banking-capital-markets/how-tokenized-collateral-changes-collateral-management
14. ECB, *Towards an efficient and integrated digital capital market in Europe*, 2026: https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202604_02.en.html
15. Chronicle / BUIDL coverage, The Block, 26 March 2026: https://www.theblock.co/news/business/2026-03-26-blackrock-tokenized-buidl-fund-taps-chronicle-new-verification-layer-395173
16. Securitize / Chronicle Proof of Asset for tokenised AAA CLO, 5 February 2026: https://investors.securitize.io/news/news-details/2026/Chronicle-Provides-Proof-of-Asset-Verification-for-Securitizes-Tokenized-AAA-CLO-Fund-Bringing-Institutional-Structured-Credit-On-Chain-02-05-2026/default.aspx
17. RedStone, NAV onchain and institutional fund pricing, 23 April 2026: https://blog.redstone.finance/2026/04/23/nav-onchain-how-tokenized-fund-pricing-works-and-why-oracle-design-matters/
18. Dune, Tokenized Money Market Funds: Institutional Data Guide, updated 17 November 2026: https://dune.com/guides/tokenized-money-market-funds-data-guide
19. RWA.NGO, RWA token transparency and verification dashboard: https://rwa.ngo/en
20. Secro, inventory finance / tokenized warehouse receipt workflow: https://secro.io/solutions/banks

## Next step

Do not start an MVP. The RWA market priority is now recorded, but no generic product shape passed the differentiation gate. If continuing RWA discovery, the only justified next move is targeted buyer validation around **collateral realisability under stress** or a genuinely new post-issuance workflow—not another broad vendor scan. Require two independent economic buyers, real incidents, quantified exposure/cost, proof of a gap beyond existing providers and explicit willingness to test.
