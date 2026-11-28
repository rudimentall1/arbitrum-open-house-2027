# D-060–D-061 — Cross-registry carbon transfers and European cross-border capacity screen

**Date:** 28 November 2026  
**Status:** Desk-research screen only. No product candidate, WATCH, GO or implementation authorization.

## D-060 — Article 6 carbon-market registry interoperability and transfer workflow

### Hypothesis
A neutral interoperability or settlement layer could coordinate cross-border transfers of carbon units between national registries, private programme registries, buyers and intermediaries, potentially reducing reconciliation, duplicate-use and delivery-versus-payment risk.

### Evidence and current infrastructure
- UNFCCC announced development of the Article 6 registry infrastructure on 23 January 2026. The planned system includes the Article 6.2 International Registry, the Article 6.4 mechanism registry and an interoperability hub for communication between national and international systems.
- On 17 November 2026, UNFCCC launched the first version of the Article 6.2 International Registry at COP31. The initial version supports country sections/accounts, mitigation activities, issuance linked to authorizations, and recording transfer, acquisition, use and cancellation of ITMOs. Countries will be onboarded in stages; training/testing is expected in early 2027. Further releases are expected to add reporting and interoperability with national registries and the Article 6.4 registry.
- UNFCCC's registry description states that the international registry tracks ITMOs from issuance or transfer from a connected registry through use or onward transfer. The registry also supports additional registry services for outcomes before first transfer.
- Article 6 interoperability guidance expressly addresses consistent transfer data, reconciliation procedures, and non-repudiation of transfer existence, type, time and content. This is a recognised standards/governance problem, not an unowned technical gap.
- In the voluntary/environmental-attribute space, Australia's Clean Energy Regulator began an August 2026 data-sharing trial between its Unit and Certificate Registry and third-party environmental registries. It permits specified ACCU holdings to be viewed subject to account-holder consent and governance arrangements. The registry is API-first and built on Trovio CorTenX.
- I-REC(E) registry integrations are operated through Evident, with API contracts, sandbox and live access arrangements. This is another example of a governed incumbent interface rather than an open transfer vacuum.
- World Bank material highlights that cross-border voluntary environmental-attribute trade must distinguish credits authorised for international transfer with corresponding adjustments from mitigation-contribution claims that do not convey the same asset/use rights. This legal/accounting distinction cannot be solved by a generic token bridge.

### Buyer and competitive boundary
Potential buyers would include host-country authorities, registry operators, carbon programme administrators, project developers, brokers, airlines and corporate buyers. However, the authoritative control points are national authorizations, UNFCCC accounting, programme registries and their governed interfaces. Trovio/CorTenX, UNFCCC's contracted delivery team, national registry providers and existing programme registries already occupy key infrastructure roles.

A private SaaS product might still help a specific developer or buyer manage authorization evidence, corresponding-adjustment status, delivery conditions and transaction documents across counterparties. No public evidence in this screen establishes a recurring exception not already handled by registry APIs, transaction advisers or carbon-market platforms. No named buyer, quantified operational burden, budget owner or willingness to pay was identified.

### Arbitrum fit
Not established. A public chain cannot grant host-country authorization, perform a corresponding adjustment in a national inventory, establish environmental integrity, or replace the authoritative registry entry. A token mirror risks creating a competing representation of legal status. A delivery-versus-payment contract would also require legally reliable unit control, registry-side atomicity or a robust escrow/retirement interface, none of which is demonstrated here.

### Decision
**NO-GO** for a generic Article 6 registry, carbon-credit bridge, tokenized ITMO marketplace, parallel ownership ledger or generic delivery-versus-payment layer on Arbitrum.

Reopen only if a named registry operator or repeat institutional buyer documents a recurring cross-registry exception that is not covered by the UNFCCC interoperability hub or existing registry APIs, quantifies the cost, identifies a budget owner, and demonstrates a legally valid shared execution step that cannot be handled by a conventional integration.

---

## D-061 — European cross-border electricity transmission capacity rights

### Hypothesis
A shared ledger or secondary marketplace could coordinate capacity-right allocation, transfers, collateral, settlement and curtailment evidence across TSOs and electricity traders.

### Evidence and current infrastructure
- Joint Allocation Office (JAO) describes itself as the Single Allocation Platform for EU TSOs. It operates e-CAT auctions for long- and short-term cross-border transmission rights and provides accounting, clearing/settlement, contracting, reporting and IT services.
- JAO reports 500+ registered market participants, 26,000+ auctions annually, service to 50 TSOs, and auctions across 41 bidding zones. These are operator-reported figures.
- JAO's service description states that it performs yearly, seasonal, quarterly, monthly, weekly, daily and intraday auctions. It also organises shadow auctions as a backup to day-ahead market coupling.
- Regulation (EU) 2016/1719 establishes the Single Allocation Platform framework for long-term cross-zonal capacity rights. Its requirements include participant registration, auction operation, financial settlement, collateral management, return of rights and facilitation of transfers between market participants.
- JAO's published rules and services therefore cover much of the apparent multi-party coordination problem. TSOs calculate available capacity; regulated allocation platforms assign rights; settlement and collateral processes are part of the existing framework.
- For gas transmission, EU network rules similarly require joint booking platforms and coordinated allocation at interconnection points. This is not an ungoverned transfer environment either.

### Buyer and competitive boundary
Potential buyers include TSOs, electricity traders, utilities and market participants. But JAO is the incumbent platform provider mandated by the regulatory architecture, with existing market access, contracts, auctions and financial settlement. A new entrant would face network effects, regulatory integration and incumbent replacement barriers.

No evidence was found of a recurring, material operational exception that JAO or the applicable allocation/booking platforms fail to handle. No buyer request, budget owner, paid pilot or evidence of manual reconciliation costs was identified.

### Arbitrum fit
Poor. Allocation and transfer of regulated capacity rights are already embedded in central platform and TSO processes. On-chain representation cannot create a valid capacity entitlement or override allocation rules, network constraints, gate closures or curtailment decisions. A blockchain marketplace would risk conflicting with the regulated allocation framework. If a separate bilateral reconciliation problem exists downstream, it should first be addressed through APIs and existing market systems.

### Decision
**NO-GO** for a generic cross-border capacity-rights registry, tokenized capacity marketplace, collateral ledger or settlement contract on Arbitrum.

Reopen only on evidence of a narrowly defined downstream exception outside JAO/TSO allocation and settlement, supported by multiple independent market participants, quantified operational/financial impact, a budget owner and a legally valid shared execution requirement.

---

## Comparative conclusion

Both hypotheses describe real multi-party markets, but neither reveals an unowned authoritative state:
- Article 6 carbon transfers are being operationalized through UNFCCC's international registry, national registries, authorization processes and interoperability standards.
- EU cross-border electricity capacity is already allocated and financially settled through the regulated Single Allocation Platform and TSO processes.

Neither meets the minimum product gate: recurring uncovered operation, named budget owner, measurable willingness to pay, incumbent gap, legally executable rights and material Arbitrum advantage. These are **NO-GO screens**, not product candidates.

**Canonical project status remains: NO PRODUCT SELECTED · NO GO · NO IMPLEMENTATION AUTHORIZED.**

No organisations contacted. No implementation, code, dependency, infrastructure or deployment changes authorized.

## Sources
1. UNFCCC, *Development of Paris Agreement Article 6 registry infrastructure begins*, 23 Jan 2026: https://unfccc.int/news/development-of-paris-agreement-article-6-registry-infrastructure-begins
2. UNFCCC, *COP31 Sees Launch of First Version of Article 6.2 International Registry*, 17 Nov 2026: https://unfccc.int/news/cop31-sees-launch-of-first-version-of-article-62-international-registry
3. UNFCCC, *International registry and additional registry services*: https://unfccc.int/process-and-meetings/the-paris-agreement/article-6/article-62/international-registry-and-ars
4. Article 6 Implementation Partnership, *Interoperability Guidance under Article 6*, 2026 training material: https://unfccc.int/sites/default/files/resource/Slide%20Deck_Day04_CPATrainingCourse_2026.pdf
5. World Bank, *Cross-border ERC Trade*: https://ppp.worldbank.org/cross-border-erc-trade
6. Australian Clean Energy Regulator, *Interoperability with the Unit and Certificate Registry*, August 2026 update: https://cer.gov.au/markets/interoperability-unit-and-certificate-registry
7. I-REC(E), *Guidance for API users and Platform Operators*, 2026: https://www.trackingstandard.org/wp-content/uploads/Guidance-for-API-users-and-Platform-Operators_2026.pdf
8. Joint Allocation Office: https://www.jao.eu/
9. JAO, *About us*: https://www.jao.eu/about-us
10. Regulation (EU) 2016/1719: https://eur-lex.europa.eu/eli/reg/2016/1719/oj/eng
11. Regulation (EU) 2017/459: https://eur-lex.europa.eu/eli/reg/2017/459/oj/eng
12. Swissgrid, *Congestion management*: https://www.swissgrid.ch/en/home/customers/topics/congestion-mgmt.html

*Source caveats:* UNFCCC registry rollout statements describe the November 2026 soft launch and planned future releases, not full production interoperability across all national registries. JAO participant/auction figures are self-reported by the operator. This is desk research, not legal advice or customer validation.
