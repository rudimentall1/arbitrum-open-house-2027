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
- [ ] Verify whether reported Nitro/Orbit RPC issues and SDK limitations remain unresolved in current releases and whether workarounds or upstream fixes have shipped.
- [ ] Find independent operators with the same Nitro HA false-ready / sequencer bootstrap problem; determine whether it is limited to one operator topology.
- [ ] Find independent reports of the same operational/developer pain across different Orbit chains; distinguish recurrence from multiple reports on one chain or by one author.
- [ ] For each recurring problem, identify affected role, frequency, operational cost, current workaround, existing commercial tools, and plausible budget owner.
- [x] Recheck merge/release status of OffchainLabs/go-ethereum #668, Nitro #4768, and Nitro #4787; all three remained open and unmerged at this review.
- [ ] Find independent liquidation-bot operators reporting block-time-dependent retry/backoff problems; measure actual API/quote cost or missed liquidations.
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
