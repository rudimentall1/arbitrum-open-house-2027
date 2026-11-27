# CCP default-management operational evidence follow-up (27 November 2026)

## Result

**No product candidate. No GO. No new WATCH. No implementation.**

This is a narrow follow-up to D-035. It checks the public operational criteria and current default-management exercises of Eurex Clearing and CME Clearing, and records direct outreach. It does not repeat the general RWA vendor scan.

## New operator-level public evidence

### CME Clearing: legal perfection and one-hour liquidation threshold

CME Clearing's official collateral acceptance guidance sets three explicit conditions for additional collateral:

1. High-quality assets with minimal credit and market risk must have a liquid and transparent secondary market.
2. A legal framework must clearly establish CME Clearing's perfected security interest in the collateral.
3. If collateral cannot be liquidated to cash within one hour, arrangements must support rapid deployment after a Clearing Member default, such as a committed liquidity facility.

The page directs collateral questions to CollateralRisk@cmegroup.com.

This is stronger than generic regulatory concern: it is an explicit CCP collateral-acceptance criterion combining legal enforceability with a one-hour monetisation threshold and a fallback liquidity arrangement.

**Evidence boundary:** The page does not say how this rule is applied to tokenised or digital-twin collateral. It does not disclose a tokenisation-related failure, actual delay, loss, or unmet workflow. It also suggests that a liquidity facility can substitute for immediate liquidation; any product thesis must test whether such arrangements already neutralise the problem.

Source: https://www.cmegroup.com/solutions/clearing/financial-and-collateral-management/collateral-acceptance-requests.html

### Eurex Clearing: current default-management simulation

Eurex Clearing Circular 066/26, dated 29 September 2026, says its EMIR Fire Drill begins 2 December 2026 and includes:
- default-management simulation;
- hedging auctions for major liquidation groups;
- a Client Porting Simulation for transfer of positions and allocated collateral to a Replacement Clearing Member.

Clearing Members and eligible Disclosed Direct Clients may participate voluntarily in parts of the default-management exercise, by contacting DMP_Inbox@deutsche-boerse.com and their Clearing Member to arrange documentation and user access. The stated deadline for registering as a client or Replacement Clearing Member in the specific Client Porting Simulation was 30 October 2026; that deadline has passed.

We are not a Clearing Member or Eurex client and have not requested or claimed access to the simulation. The actionable route is to request a non-confidential discussion with Eurex staff or a participating member after the exercise.

Source: https://www.eurex.com/ec-en/find/circulars/clearing-circular-5585436

### Eurex: porting window and liquidation mechanics

Eurex's public default FAQ states that for net omnibus segregated clients, the porting period is four business hours after publication of the ECM Porting Notice or occurrence of an insolvency termination event. It also explains that pooled collateral may be assigned to clients and either ported or used to secure losses during liquidation; the assigned collateral may differ in nature and quantity from what the client originally deposited.

**Important:** The four-business-hour period is a client porting-precondition window, not a stated deadline for converting collateral into cash. Do not use it as a collateral realisation SLA.

Source: https://www.eurex.com/ec-en/default-management-process/member-default-faqs

## Outreach status

Prior D-036 outreach to:
- Eurex Default Management Team — DMP_Inbox@deutsche-boerse.com;
- CME Clearing Risk Management — clearing.riskmanagement@cmegroup.com;

has no reply in the connected Gmail search at the time of this check.

Additional targeted messages were sent on 27 November 2026:
- Eurex Client Services — client.services@eurex.com: asked for a non-confidential subject-matter contact or a clearing-member DMP coordinator willing to discuss the process after the 2 December exercise. Explicitly stated that we are not a clearing member/client and are not requesting simulation access.
- CME Clearing Collateral Risk — CollateralRisk@cmegroup.com: asked how the perfected-security-interest and one-hour monetisation criteria apply to tokenised/digital-twin collateral, and whether committed liquidity facilities/current controls already cover the risk. Explicitly stated this is not a collateral acceptance application.

No replies or meetings have been received yet. Sent messages are outreach activity, not customer discovery evidence.

## Updated interview questions

For CME:
1. Are tokenised/digital-twin assets considered under the same one-hour cash-realisation criterion?
2. If not realisable within one hour, are committed liquidity facilities accepted as sufficient, and how are their availability/trigger mechanics verified?
3. Which legal record and control right must be established before default?
4. What exact steps remain between default declaration and committed cash availability?
5. Are any steps dependent on a custodian, CSD, token issuer, bridge, permissioning administrator or settlement venue?
6. Have default drills or exceptions exposed timing gaps? If so, what were the measured times and workarounds?

For Eurex and a clearing member:
1. In the 2 December exercise, which steps test collateral allocation, porting, liquidation and cash realisation separately?
2. Which parts of the exercise involve securities held in traditional CSD/custody infrastructure versus digital-twin/tokenised representations?
3. What evidence proves legal control and the ability to move collateral to a Replacement Clearing Member?
4. What is the operational SLA for porting prerequisites versus sale/repo/cash settlement?
5. Which failures or manual workarounds have appeared in prior drills?
6. Can a clearing-member DMP coordinator discuss a redacted process example after the exercise?

## Decision

The new evidence makes the workflow more concrete:
- CME has an explicit one-hour cash-liquidation criterion or committed-liquidity-facility fallback.
- Eurex has a near-term, formal default-management exercise with a client-porting component and defined participation rules.
- Eurex's four-hour porting period is not a cash-realisation deadline.

However, none of this proves that tokenised collateral creates an unmet problem. It may instead show that existing collateral eligibility rules, legal opinions, CSD/custody controls, porting processes and liquidity facilities already manage the risk.

**Keep the residual D-033 issue as problem validation only.** No candidate, no new WATCH, no GO. D-029 remains the only WATCH overall. Arbitrum shared-state necessity remains unproven.

## Next actions

1. Await and track replies to the four official Eurex/CME mailboxes contacted across D-036 and this follow-up.
2. If no response, make one concise follow-up after a reasonable interval; do not spam the same generic inboxes.
3. Seek an independent clearing-member operator, preferably a DMP Coordinator / Collateral Operations lead, through verified professional contacts or the Eurex member network.
4. After 2 December, inspect only public non-confidential materials from the Eurex exercise; do not infer exercise outcomes from the fact it occurred.
5. Obtain two independent operator accounts and redacted drill/near-miss examples before considering a product gap.

No code, dependencies, tests, build, CI or deployment work is authorized.
