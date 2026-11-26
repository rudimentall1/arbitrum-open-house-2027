# Blockscout and Robinhood Chain indexer operations follow-up

Research date: 26 November 2026.

## Executive result

This pass found a useful, evidence-rich operational cluster around Blockscout's hosted Robinhood Chain explorer:

- Blockscout itself says the first-month Robinhood transaction surge pushed its infrastructure to the limit. It reports 190.78M transactions processed by 29 July 2026, a peak above 11M/day, and roughly 9.39M transactions in the 24-hour period. The team traced database CPU pressure to inefficient high-traffic queries, rewrote them, and hardened the indexer.
- A user independently documented a ~7,704-block hole in the hosted Robinhood explorer, with affected CREATE2 deployments misclassified as EOAs. Blockscout confirmed the blocks were fetched and later closed the issue after backfill completed.
- A second user documented transient REST 500s, indexer lag, and WebSocket silence on the same hosted Robinhood service. The maintainer described this as temporary service degradation and closed the issue.
- A third user reported incorrect token supply/holder percentages and apparently incomplete transfer data. After Blockscout corrected total-supply indexing, the reporter confirmed the transfer display was also correct; this was not confirmed as missing canonical transfer logs.
- On hosted Base, another user documented thousands of missing blocks while Blockscout's indexing-status endpoint reported 100%. The gaps were later indexed. This is a separate chain but the same Blockscout hosted operator.

**Interpretation:** this is meaningful evidence of recurring hosted-explorer scaling, indexing-gap, and observability problems. It is one operator (Blockscout), not several independent indexer vendors. All reviewed incidents were marked resolved; no incremental cost, SLA penalty, revenue impact, or willingness to pay was disclosed. Keep indexer completeness at WATCH, not GO.

## 1. Blockscout's own operator report

[Blockscout — Robinhood Chain Month 1](https://mail.blockscout.com/p/robinhood-chain-month-1-blockscout-newsletter), 31 July 2026:
- Nearly 200M transactions in under one month.
- 190.78M total transactions processed through 29 July.
- More than 11M transactions/day at the early peak; 9.39M in the reported 24-hour period.
- The surge pushed Blockscout infrastructure to its limit.
- The team traced database pressure to a handful of inefficient queries on high-traffic endpoints, rewrote them for more efficient index scans, reported a dramatic reduction in database CPU, and hardened the indexer.
- Blockscout says it worked closely with Robinhood to keep indexing throughout the surge.
- Pro API registered users rose more than 70% in the month and daily API call volume more than doubled.

This is direct operator evidence of production scale pressure and substantial engineering work. It does not quantify cloud/database spend, engineer-hours, incident duration, or customer churn.

## 2. Hosted Robinhood explorer: missing block range and downstream impact

[Blockscout #14767](https://github.com/blockscout/blockscout/issues/14767), opened 2 Sep 2026 by `0xjume`:
- The hosted Robinhood Chain explorer (chain ID 4663) had a discrete missing range from block 52,157,498 through 52,165,201: about 7,704 blocks.
- The reporter independently checked the public RPC and Sourcify. The public RPC had the blocks and contract bytecode; Blockscout returned 404 for those blocks.
- Three CREATE/CREATE2 deployments inside the gap were shown as EOAs (`is_contract=false`, `creator_address_hash=null`), so the explorer could not surface Sourcify matches or allow contract verification.
- One additional isolated missing block was reported.
- On 3 Sep, Blockscout maintainer `vbaranov` said the missing blocks had been fetched and internal transactions were catching up.
- On 8 Sep, the maintainer confirmed backfill was finished and the issue was closed.

This is a concrete integrity failure with a user-visible downstream consequence, not merely a slow API. It is one reporter and one hosted service incident; no financial loss was quantified.

## 3. Hosted Robinhood explorer: API degradation and lag

[Blockscout #14886](https://github.com/blockscout/blockscout/issues/14886), opened 30 Sep 2026:
- On 30 Sep, 6 of 12 random recent block API requests returned HTTP 500; all six succeeded on retry. This indicates backend saturation/transient availability, not missing underlying block data in that sample.
- Latest indexed block lagged the RPC head by about 300 blocks (~30 seconds at ~0.1-second blocks) at one sample and about 80 blocks (~8 seconds) 15 minutes later.
- Some transactions surfaced in the API 45–79 seconds after mining.
- The PRO WebSocket stayed connected but went silent for 10–13 minutes several times; the reporter says events were delayed, not dropped.
- The public indexing-status endpoint continued to report `finished_indexing: true` and `indexed_blocks_ratio: 1.00`.
- The issue explicitly distinguishes this from the earlier missing-block gap #14767: this case was data present but API responses intermittent and late.
- Blockscout maintainer `vbaranov` closed it on 1 Oct, stating temporary service degradation was resolved.

This is a separate user report and symptom on the same operator/chain. Do not count it as a second independent operator or a second missing-data event.

## 4. Related data-quality reports and cross-chain recurrence

### Robinhood token-page data

[Blockscout #14598](https://github.com/blockscout/blockscout/issues/14598), opened 20 Jul by the $STONKS token community:
- Holder percentages and total supply were incorrect; transfer history appeared incomplete.
- Blockscout asked for a transaction hash demonstrating a missing transfer.
- The reporter then confirmed the apparent transfer issue was caused by total supply being indexed incorrectly; once supply and holder percentages were fixed, transfer display also appeared correct.
- Closed on 20 Jul.

This is not evidence of missing canonical transfer events. It is evidence of a derived-index/display correctness issue, and should not be counted as a separate event-loss incident.

### Base hosted explorer

[Blockscout #14869](https://github.com/blockscout/blockscout/issues/14869), opened 25 Sep:
- A user sampled multiple Base ranges and found thousands of blocks missing from the hosted explorer, while the indexing-status endpoint reported 100%.
- The report counted 207 missing blocks in one 10k range, 798 in a 14k range, 1,792 (~16%) in an 11k range, and 706 in a later 1k range.
- Canonical RPCs returned the missing blocks; Blockscout's API returned 404 and address transaction lists silently omitted transactions.
- On 15 Oct, Blockscout maintainer `vbaranov` confirmed the missing block gaps had been indexed and closed the issue.

This is a separate L2 chain and separate user, but still the same hosted Blockscout operator. It strengthens the case that completeness checks can miss holes across multiple deployments, not that there are multiple vendor buyers.

### Contract verification API

[Blockscout #14984](https://github.com/blockscout/blockscout/issues/14984), opened 28 Oct:
- Hosted Robinhood explorer contract verification returned HTTP 500 after ~20 seconds and rate-limited requests (limit 1, cooldown 6.5–15 minutes).
- Blockscout resolved it on 28 Oct.
- This is a product/API reliability issue, not an indexing-completeness incident.

## 5. Low-cost workaround from a separate builder

[FOMO Robinhood Radar](https://github.com/cvxv666/fomo-robinhood-radar) is a separate, one-person Robinhood Chain analytics project. Its README says it:
- tracked 187,306 fills from 562 wallets across 28,524 tokens during 6 Aug–6 Oct 2026;
- read fills every 20 seconds directly from the chain;
- used two `eth_getLogs` calls to cover its wallet roster, batched receipts, and estimated roughly 30 free RPC requests for a full pass over 302 wallets;
- ran on a €5/month server (the README badge says $0/month infrastructure beyond that box);
- was archived on 6 Oct 2026, with its server, site, and bot switched off.

This is not an independent paying buyer or a scalable hosted-indexer replacement. It is evidence that a narrow, event-filtered application workload can sometimes avoid a paid indexer and keep RPC usage low. That weakens the case for a generic RPC-cost product aimed at small consumers.

## 6. Weak downstream signal: tax/portfolio import

[Koinly's Robinhood Chain integration report](https://koinly.canny.io/integrations/p/robinhood-chain-integration-is-broken), opened 30 Aug:
- A user reported skipped transactions and token-swap ETH legs not recognized; some records later appeared after backfill, while the user manually edited other transactions.
- Koinly support attributed one missing-ETH example to a bridge with no counterpart deposit visible on the Robinhood explorer, and requested a transaction hash for the swap-decoding complaint.
- The remaining complaint was partly about Koinly's transaction grouping (Send + Deposit + Cost legs), not necessarily missing source logs.

Do not treat this as proof of an indexer completeness failure. It is a weak downstream data-quality/support burden signal only.

## 7. Official RPC caveat

Robinhood's [Chain Terms of Service](https://docs.robinhood.com/chain/terms-of-service/) say the public RPC is rate-limited and not intended for production-grade, high-throughput, or latency-sensitive use; Robinhood disclaims uptime and data-completeness guarantees. Its [connection guide](https://docs.robinhood.com/chain/connecting/) recommends Alchemy for production and also lists Chainstack and QuickNode.

This is useful deployment guidance, not evidence of a customer paying a specific amount or a standalone product gap.

## 8. Buyer and competition assessment

| Criterion | Assessment |
|---|---|
| Pain | Real: missing block ranges, false-green indexing status, API 500s, lag, derived token data errors, and substantial high-volume query optimization |
| Evidence | Strong for Blockscout's hosted operation; several public reports and operator acknowledgement |
| Independence | One infrastructure operator (Blockscout), several reporters, multiple chains/symptoms; not several independent indexer vendors |
| Recurrence | Multiple incidents over July–October, with missing gaps on both Robinhood and Base; resolved through internal engineering/backfill |
| Buyer | Possible buyer is an explorer/indexer platform owner or chain data operations lead; no named budget owner interviewed |
| Cost / WTP | No spend, engineer-hours, SLA penalties, churn, or willingness to pay disclosed |
| Workaround | Internal query optimization, indexer hardening, block-range discovery/backfill, retries and re-import |
| Competition | Blockscout operates its own indexer and fixes/backfills internally; SQD/HyperSync and managed data providers offer alternate ingestion paths; Anon liveness covers coarse RAILGUN service/lag monitoring |
| Product gap | External completeness audit could detect holes that a height-based green status misses, but no buyer validation or differentiated repeatable workflow yet |

**Status: WATCH as a cross-indexer completeness/observability problem cluster.** Do not build a generic monitoring dashboard. A product hypothesis would need to demonstrate automated block/log completeness reconciliation, false-green detection, and repair guidance across more than one indexer stack, then validate a budget owner.

## 9. Decision and next steps

- Blockscout adds strong operator evidence, but not a second independent indexer team with quantified spend.
- The missing Robinhood range (#14767) was backfilled; the API degradation (#14886), token-page issue (#14598), Base gap (#14869), and verification issue (#14984) were also marked resolved.
- Do not count multiple Blockscout reports as multiple buyers or as independent provider failures.
- Keep the wider indexer correctness cluster at WATCH. No GO and no implementation.

Next:
1. Identify a named Blockscout or Robinhood Chain data-platform owner and ask about the internal cost of gap discovery/backfill, the false-green status issue, and recurrence after the July scale-up.
2. Seek one more independent explorer/indexer operator with a reproducible block/log gap and an explicit recovery cost.
3. Determine whether completeness reconciliation is already automated in Blockscout's current release and whether SQD/HyperSync/Alchemy provide a comparable completeness guarantee.
4. Do not promote the hypothesis without a buyer, repeatable workflow, and evidence that existing platform-level backfills/health checks do not solve it.
