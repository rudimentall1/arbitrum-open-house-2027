# Tasks

## Current priority — issue-driven problem discovery

- [ ] Continue systematic review of primary GitHub Issues/Discussions in Arbitrum Nitro, arbitrum-sdk / arbitrum-chain-sdk, Orbit tooling, Morpho, Aave, GMX, Uniswap, and adjacent infrastructure.
- [x] First-pass review of Nitro #4733, #4736, #4766, #4770, #4771, #4780, #4785, #4789, #4208, #738; arbitrum-sdk #657, #639, #521; arbitrum-chain-sdk #642, #636, #222, #205, #206, #684; Morpho liquidation bot #114, #117, #118, #121; Uniswap v4-periphery #589, #596, #531; Uniswap SDK #763, #141.
- [x] Review existing tooling: official Arbitrum monitoring scripts/docs, community Helm charts, Nitro HA/feed-relay guides, Goldsky RPC comparison, RPCNode.IO, Alchemy benchmarks, and Morpho liquidation-bot architecture.
- [x] Compare the RPC-monitoring cluster against official Arbitrum monitoring, Goldsky, RPCNode.IO, Alchemy, and provider-native tooling; generic monitoring/provider ranking is not a candidate.
- [x] Compare Nitro #4733 against current master and v3.11.3 source; the code still lacks an explicit non-local sync-target provenance check.
- [x] Check historical SyncMonitor fixes #3180 and #3538; neither closes the warm-database false-ready case described by #4733.
- [x] Search for independent reports of the same #4733 false-ready / HA bootstrap failure; none found in this bounded GitHub search pass.
- [x] Follow Nitro #4736, #4766, and #4785 through comments and linked PRs; separate upstream fixes from residual problems.
- [x] Review Morpho bots #4 against current main; correct the reported Base/Robinhood backoff ratio using the repository's own 200 ms / 100 ms block-time table and identify stale stuck/cooldown claims.
- [x] Recheck current status of Nitro #4784/#4771, Arbitrum SDK #657, chain SDK #609/#642, Orbit setup issues #68/#69, and linked upstream PRs #668/#4768/#4787.
- [x] Expand RPC/indexer research across Envio, The Graph, Ponder, and Nitro; cluster independent reporters and separate operator pain from repeated reports by the same author.
- [x] Verify Envio mitigation PRs #1764/#1791/#1801/#1804/#1861 and open requests #1851/#1812/#1840; assess eRPC and provider-native budget controls.
- [x] Review Nitro #4788 and #3666 plus Envio/Ponder empty-log protections; distinguish eventual consistency from stale/wrong log responses.
- [x] Cross-check Ponder #2525/#2526 and #2491 against current main; verify zero-bloom handling, request-rate evidence, and upstream mitigation status.
- [x] Recheck Nuthatch #765/#1173/#1190 and merged fixes #804/#1176/#1191; distinguish one maintainer's repeated measurements from independent customers.
- [x] Recheck rindexer #199/#203 and Envio #1851/#1812/#1840/#1861; confirm shipped versus open request-reduction work.
- [x] Check fast-L2 event completeness evidence in Ponder #2359 and the linked HCTDIP listener commit; verify current Ponder reorg-window implementation before treating the old issue as unresolved.
- [x] Review Blocksquare #45 as a self-hosting buyer-role signal; no paid commitment or confirmed switch found.
- [ ] Verify whether reported Nitro/Orbit RPC issues and SDK limitations remain unresolved in current releases and whether workarounds or upstream fixes have shipped.
- [ ] Find independent operators with the same Nitro HA false-ready / sequencer bootstrap problem; determine whether it is limited to one operator topology.
- [ ] Find independent reports of the same operational/developer pain across different Orbit chains; distinguish recurrence from multiple reports on one chain or by one author.
- [ ] For each recurring problem, identify affected role, frequency, operational cost, current workaround, existing commercial tools, and plausible budget owner.
- [x] Recheck merge/release status of OffchainLabs/go-ethereum #668, Nitro #4768, and Nitro #4787; all three remained open and unmerged at this review.
- [ ] Find independent liquidation-bot operators reporting block-time-dependent retry/backoff problems; measure actual API/quote cost or missed liquidations.
- [ ] Find two additional independent Arbitrum/Orbit indexer teams with quantified RPC read amplification or provider spend; exclude already-reviewed Envio, Ponder, Nuthatch, rindexer, HCTDIP, and the RAILGUN/Squid incident cluster.
- [ ] Find two independent fast-L2/Orbit operators with a measured event-loss or checkpoint-advancement incident caused by lagging/empty RPC responses; Allium's July/September reports count as one operator, not two.
- [ ] Track Ponder #2526 and #2491, Ponder #2305, and Envio #1851/#1812/#1840 through merge and release; compare before/after RPC request counts.
- [ ] Interview indexer operators using eRPC, Goldsky Cloud Edge, provider quotas, or native throttling to identify a remaining workflow those products cannot solve.
- [x] Review RAILGUN Engine #142/#143 and wallet #134/#135; verify the Arbitrum TXID omission, third-party RailOxide operator report, PPOI divergence, recovery, and separate Sepolia follow-up.
- [x] Review Allium's July and September 2026 Robinhood Chain ingestion incidents; separate repeated incidents by one provider from independent customer evidence.
- [x] Review Envio's September 2026 technical explanation of silent event omissions, HyperSync fallback verification plans, and eRPC's limits on validating filtered eth_getLogs responses.
- [ ] Identify the RAILGUN Squid/PPOI data pipeline owner and establish whether late-backfill reconciliation/rebuild is routine or manual.
- [ ] Track Railgun-Community/engine #142's Sepolia follow-up and verify whether the missing source event was corrected.
- [ ] Recheck Envio #1851, #1812, #1840, and #1884 after the next release; determine whether upstream fixes close the reported cost gap.
- [ ] Determine whether Arbitrum SDK/chain SDK log-range helpers are adopting adaptive range splitting; confirm whether operators still have a material unserved workflow.
- [ ] Build a shortlist of no more than three evidence-backed problem clusters; do not convert isolated bugs into product concepts.
- [ ] Do not start implementation until a specific user/buyer and a real workflow are validated.

## Research guardrails

- [x] Review prior idea research and consolidate it in `RESEARCH_LOG.md`.
- [x] Review major Arbitrum hackathon/Open House winners and record them in `WINNER_MAP.md`.
- [x] Remove explicitly excluded projects from the candidate pipeline.
- [x] Replace the stale RWA Servicing Copilot priority with the user-approved issue-driven discovery stage.
- [x] Record previously rejected directions to prevent duplicate searches.
- [ ] Do not restart broad market scans without a defined unresolved question.
- [ ] Do not treat hackathon winners, ecosystem narratives, or subjective score matrices as proof of customer demand.

## Engineering baseline

- [x] Establish repository structure, mandatory research rules, minimal package metadata, and source/test placeholders.
- [ ] Add application code and real tests only after a product reaches GO and implementation is authorized.

## GO criteria for a concept

A concept cannot move to implementation until all are true:
1. Named ICP and buyer.
2. Specific, recurring, expensive problem supported by primary evidence.
3. Existing workaround and why it fails.
4. At least one credible design partner or equivalent commitment to test.
5. Clear reason the solution needs Arbitrum / its specific capabilities.
6. Demo scope achievable by a small team within the event timeline.
7. Differentiation from existing products demonstrated, not asserted.
