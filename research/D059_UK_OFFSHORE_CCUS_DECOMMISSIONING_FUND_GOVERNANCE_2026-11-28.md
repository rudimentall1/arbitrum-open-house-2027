# D-059 — UK offshore CO2 transport and storage decommissioning fund governance (28 November 2026)

## Status

**Exploratory regulatory workflow; NO-GO for a generic Arbitrum product.** No buyer interview, budget, paid pilot, incumbent gap or material Arbitrum requirement established. No outreach or implementation authorized.

## Why this is a distinct direction

This is not the UK oil-and-gas DSA model in D-055. The Carbon Dioxide Transport and Storage (Financing of Costs of Offshore Decommissioning) Regulations 2026 (SI 2026/632), in force from 10 July 2026, establish a mandatory, ring-fenced offshore decommissioning fund for section 7 CO2 transport-and-storage licensees.

The framework is materially more prescriptive than the traditional oil-and-gas DSA:
- A licensee must propose a UK fund holding arrangement, identify the fund holder and day-to-day fund administrator, explain governance, insolvency protection, deposit takers, costs and winding-up.
- The Secretary of State must approve the holding arrangement and funding/investment strategy.
- Fund estimates require a work breakdown, infrastructure-level accounting codes, cost categories, nominal spend timing, assumptions and evidenced allocation of shared costs.
- The estimate includes a contingency of at least 10% of estimated decommissioning costs before contingency.
- Licensees must pay monthly contributions, ordinarily one twelfth of the approved annual contribution.
- Fund assets are ring-fenced, independently managed, subject to strict investment restrictions and cannot be used as general collateral.
- Payments out require the statutory approval process; safeguard measures can include staged payments, escrow or direct contractor payments.
- Material changes, deficits, revisions, accounts, fund governance and remedial measures create a continuing compliance and reporting lifecycle.

The legal rules create a real multi-party workflow between the T&S licensee, fund holder, fund administrator, investment manager/deposit taker, Secretary of State and regulators. It is not simply an annual spreadsheet.

## Market timing and scale

- The first Track 1 CCUS projects are Northern Endurance Partnership (East Coast Cluster) and HyNet/Liverpool Bay. The Department stated in July 2026 that it anticipates the first funds will not be established until closer to commercial operation, from 2028.
- Northern Endurance is a large project with BP as operator on behalf of BP, TotalEnergies and Equinor; the public project record describes phase-one infrastructure and 5+ Mtpa initial storage capacity, with expansion potential.
- The government says the framework is being put in place now to give licensees time to prepare holding-arrangement and funding/investment-strategy proposals.
- The regulations therefore create an upcoming compliance market, but not an immediate high-volume fund-administration market. Initial addressable customer count is small and the fund operational period is long-dated.

## Potential buyer and workflow

Potential budget owners:
1. T&S licensee CFO/treasury or financial-control lead.
2. Fund holder / independent fund administrator.
3. Potentially a specialist investment manager or professional-services provider serving the licensee.

A narrow SaaS hypothesis would be a **fund compliance and evidence control plane**:
- version the fund estimate, infrastructure work breakdown, cost assumptions, contingency and shared-cost allocation;
- reconcile approved annual contributions to monthly payments and bank/fund statements;
- track the approved investment strategy, permitted assets, limits and revisions;
- link drawdown requests to approved decommissioning work, cost categories, approvals and payees;
- detect and evidence material estimate changes, shortfalls, late contributions and reporting deadlines;
- generate regulator-ready audit packs and preserve approvals/change history.

This is not a fund, custodian, payment rail, investment manager or legal decision-maker. It must not hold assets or make unauthorised payments.

## Competitive and substitute landscape

- The statutory fund administrator and fund holder are mandatory roles, and the holding arrangement must identify them. Existing trust, fund administration, investment operations, accounting, treasury and enterprise risk systems are natural substitutes.
- The regulations allow professional third-party providers to execute investment strategy, but the licensee remains responsible for statutory compliance and approvals.
- The government expects the first funds only near commercial operation from 2028. This creates a timing risk: incumbents may already be selected as part of project financing and procurement well before fund operations begin.
- The official public register and statutory reporting framework reduce the case for a new public registry.
- No dedicated independent CCUS decommissioning-fund compliance SaaS vendor was identified in this desk screen. That is not evidence of whitespace; the category may be handled by fund administrators, asset managers, trustees, accountants and project-specific systems.

## Arbitrum fit

**Not established; likely poor.**
- The fund must be UK-managed, governed under UK law, insolvency-remote, independently managed and controlled by approved legal arrangements.
- Fund assets are held by approved financial institutions and subject to restricted investment and payment rules.
- Secretary of State approvals and bank/fund statements are authoritative off-chain records. Smart contracts cannot replace fund-holder duties, regulated custody, investment mandates or statutory payment approval.
- A public chain would expose commercially sensitive cost estimates, investment positions, counterparties and project data. Hash anchoring alone is not enough.
- A permissioned SaaS with signed audit exports, controlled access and bank/administrator integrations is the more plausible product architecture.

Arbitrum would only merit reconsideration if multiple independent licensees, administrators and regulators require a shared state that existing approved fund structures cannot provide, and legal counsel confirms that a smart-contract action has an enforceable role. No such evidence exists.

## Falsification gates

Before any product promotion:
1. Identify the appointed fund holder, administrator and investment manager for each Track 1 T&S licensee; establish whether selection is complete.
2. Determine which fund-estimate, contribution, investment-compliance and payment-control tasks remain spreadsheet/manual after their existing systems are deployed.
3. Find at least two independent users with the same recurring exception, measured hours/value and a named budget owner.
4. Establish whether the administrator or licensee would pay for a separate system rather than extend existing fund-accounting/treasury software.
5. Prove a multi-party shared-state requirement that cannot be met with signed APIs and audit logs. If not, reject for Arbitrum.

No organisations contacted. No implementation authorized.

## Decision

Keep as a **regulatory workflow lead for further desk research only**, not a product candidate, WATCH or GO. Do not build a tokenised decommissioning fund, public fund registry, custody product, payment rail or generic ESG dashboard. The most plausible commercial shape is conventional compliance SaaS, which currently fails the Arbitrum-specificity test.

## Sources

- SI 2026/632, official legislation: https://www.legislation.gov.uk/uksi/2026/632/contents/made
- Energy Act 2023, section 92: https://www.legislation.gov.uk/ukpga/2023/52/body/2026-09-30
- UK Parliament Joint Committee report on SI 2026/632, including government explanation that first Track 1 funds are expected closer to commercial operation from 2028: https://publications.parliament.uk/pa/jt5902/jtselect/jtstatin/47/report.html
- CMS legal analysis of the 2026 regulations (24 Jun 2026): https://cms.law/en/gbr/legal-updates/planning-for-the-end-building-out-a-new-regime-for-uk-offshore-ccus-decommissioning
- Northern Endurance Partnership project record: https://energypathfinder.nstauthority.co.uk/projects/484
- NSTA first UK carbon storage permit / project context: https://www.nstauthority.co.uk/news-publications/nsta-awards-endurance-first-ever-uk-carbon-storage-permit/
- D-055 oil-and-gas DSA screen (separate regime): research/D054_D058_NEW_RWA_WORKFLOW_SCREEN_2026-11-28.md
