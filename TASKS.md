# Tasks

## Current priority — issue-driven problem discovery

- [ ] Continue systematic review of primary GitHub Issues/Discussions in Arbitrum Nitro, arbitrum-sdk / arbitrum-chain-sdk, Orbit tooling, Morpho, Aave, GMX, and Uniswap.
- [x] First-pass review of Nitro #4733, #4736, #4766, #4770, #4771, #4780, #4785, #4789, #4208, #738; arbitrum-sdk #657, #639, #521; arbitrum-chain-sdk #642, #636, #222, #205, #206, #684; Morpho liquidation bot #114, #117, #118, #121.
- [x] Review existing tooling: official Arbitrum monitoring scripts/docs, community Helm charts, Nitro HA/feed-relay guides, Goldsky RPC comparison, RPCNode.IO, Alchemy benchmarks, and Morpho liquidation-bot architecture.
- [x] Compare the RPC-monitoring cluster against official Arbitrum monitoring, Goldsky, RPCNode.IO, Alchemy, and provider-native tooling; generic monitoring/provider ranking is not a candidate.
- [ ] Verify whether reported Nitro/Orbit RPC issues and SDK limitations remain unresolved in current releases and whether workarounds or upstream fixes have shipped.
- [ ] Find independent reports of the same operational/developer pain; distinguish repeat incidents from multiple reports by one author.
- [ ] For each recurring problem, identify affected role, frequency, operational cost, current workaround, existing commercial tools, and plausible budget owner.
- [ ] Inspect issue comments, linked PRs, releases, docs, and code before classifying a problem as unresolved.
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

- [x] Establish repository structure and mandatory research rules.
- [ ] Create an application/runtime/test setup only after a product reaches GO and implementation is authorized.

## GO criteria for a concept

A concept cannot move to implementation until all are true:
1. Named ICP and buyer.
2. Specific, recurring, expensive problem supported by primary evidence.
3. Existing workaround and why it fails.
4. At least one credible design partner or equivalent commitment to test.
5. Clear reason the solution needs Arbitrum / its specific capabilities.
6. Demo scope achievable by a small team within the event timeline.
7. Differentiation from existing products demonstrated, not asserted.
