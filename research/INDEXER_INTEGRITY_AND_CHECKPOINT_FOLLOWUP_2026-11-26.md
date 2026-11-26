# Indexer integrity and checkpoint-divergence follow-up

Research date: 26 November 2026.

## Executive result

This pass found two useful additions to the evidence base:

1. **RAILGUN TXID index / PPOI divergence:** multiple downstream users and an independent wallet developer described missing RAILGUN events in Squid-derived data on Arbitrum. A separate follow-up described the same omission pattern on Sepolia. The failure blocked TXID synchronization and Private Output (POI) generation until upstream indexed data was corrected and clients rebuilt state. This is a stronger data-integrity lead than ordinary RPC cost amplification, but it is a narrow protocol-specific incident cluster, not proof of a general market.
2. **Allium Robinhood Chain ingestion incidents:** Allium publicly recorded a July 2026 RPC-performance incident that required patching missing data, and a separate September 2026 Robinhood ingestion degradation caused by RPC-provider latency. These are two incidents at one data provider, not two independent customer teams. Neither report quantifies missing rows, customer impact, or financial cost.

**No new GO candidate. No product selection. No implementation.** The search did not establish two additional independent Arbitrum/Orbit indexer buyers with quantified losses or spend. Keep the broader indexer correctness area at WATCH.

## 1. RAILGUN: missing TXID events and downstream state divergence

### Arbitrum incident

Primary reports:
- [Railgun-Community/engine #142](https://github.com/Railgun-Community/engine/issues/142), opened 10 Aug 2026, still open at review.
- [Railgun-Community/engine #143](https://github.com/Railgun-Community/engine/issues/143), opened by a different account on 10 Aug and closed by its reporter on 13 Aug.
- Duplicate reports also exist in [Railgun-Community/wallet #134](https://github.com/Railgun-Community/wallet/issues/134) and [#135](https://github.com/Railgun-Community/wallet/issues/135). These are not independent incidents: they describe the same affected public transaction and the same Arbitrum block.

The reports describe an Arbitrum transaction at block 491612310 containing two Nullified events. The Railgun Graph/Squid query returned the later Railgun transaction but omitted the earlier one. The reporter independently folded the two canonical on-chain nullifiers and reproduced the verification hash returned for the later indexed transaction. The Engine therefore calculated a different hash, stopped TXID synchronization at index 61169, left targetSpent at zero, and could not generate the downstream Private POI. The affected public unshield had succeeded on-chain, but its private change output remained unavailable to spend.

This is a concrete completeness failure: canonical receipt evidence and the indexer's returned rows disagree, and the failure propagates into wallet state and spendability.

### Independent downstream confirmation and recovery

A third-party developer, triamazikamno, commented on #143 while investigating the same incident in [RailOxide](https://github.com/triamazikamno/railoxide), a separate Rust RAILGUN wallet that does not use the official Engine SDK. They reported that Squid had missed events for three transactions, which were later backfilled. However, the PPOI service had already ingested incomplete data and continued building on the divergent state. The developer said the PPOI operator needed to rebuild its index and shared a temporary compatibility-omission list covering three affected transaction locations.

On 13 Aug, the original reporter confirmed that upstream PPOI/indexed data had been corrected. The divergence check then returned false; after wiping local state, re-importing the wallet, and fully resyncing, the previously blocked private output became spendable and was transferred successfully.

Interpretation:
- This is more than a single wallet-local bug: a separate wallet developer reported the same missing-event pattern in three transactions and a persistent downstream PPOI divergence.
- It is still one underlying indexer/PPOI incident cluster, not three independent customers or three independent root causes.
- The downstream impact was delayed spendability and recovery work, not a demonstrated permanent loss of principal.
- The incident appears to have been corrected upstream by 13 Aug. Do not present it as a currently open production outage.

### Second chain / recurrence check

On 12 Oct, a different commenter (bl00dclot) added a separate Sepolia V2 case to #142:
- one Ethereum transaction emitted two Nullified logs;
- the public squid-railgun-eth-sepolia-v2 Graph endpoint served only the later transaction row;
- the returned verification hash matched the two-nullifier sequence, not the single row returned;
- the client repeatedly stopped at TXID index 4188; the report recorded 41 stops in 38 minutes and more than 600 minutes without progress at the time of the follow-up.

This is evidence that the omission shape may recur across more than one chain in the RAILGUN Squid data pipeline. It is not another Arbitrum customer, and the report did not establish why the Squid omitted the first event. The Sepolia report was still visible in the open #142 thread at this review; no maintainer resolution was found in the checked comments.

### Fixes and substitutes

- [Railgun Engine PR #136](https://github.com/Railgun-Community/engine/pull/136) merged 28 May 2026. It changes TXID sync to commit in batches and flush a valid prefix before the invalid-hash recovery path. It does not fix an omitted source event or make a filtered Graph response complete.
- The August recovery was operational: correct/rebuild upstream indexed data, then rebuild the affected wallet's local state. The reporter says repeated proof resync against stale/diverged state did not fix it.
- [triamazikamno/railgun-indexer](https://github.com/triamazikamno/railgun-indexer) is an actively maintained independent Rust implementation. Its README says it mirrors a POI JSON-RPC node, scans chain RPC for RAILGUN events, and publishes chain-indexed artifacts; configured chain IDs include Arbitrum (42161) and Sepolia (11155111). Its latest public commits at review were 22 Nov 2026. It is a relevant technical alternative/workaround, not evidence of a commercial competitor or paid demand.

### Assessment

| Criterion | Assessment |
|---|---|
| Pain | High for affected private-wallet users: POI generation blocked and funds temporarily not spendable |
| Evidence | Strong technical reproduction from canonical receipts; separate wallet developer reports three omissions; a separate Sepolia omission pattern |
| Recurrence | One Arbitrum incident cluster plus one Sepolia follow-up; not broad independent customer recurrence |
| Buyer | Potentially protocol/indexer operator, wallet infrastructure lead, or privacy-wallet team; no named budget owner |
| Cost / WTP | Recovery required index rebuild and wallet resync; no quantified financial cost or willingness to pay |
| Existing alternatives | Upstream data correction/rebuild, wallet resync, independent Railgun indexer, compatibility omissions |
| Product gap | Possible cross-check/reconciliation for protocol-specific indexed artifacts, but narrow and unvalidated |

**Status: WATCH as a protocol-specific indexer integrity lead.** Do not turn this into a generic RPC monitor or data dashboard.

## 2. Allium: Robinhood Chain RPC and ingestion degradation

Official incident reports:
- [8–9 July 2026 incident](https://status.allium.so/incidents/vtwxsfk95hl6): Allium attributed degraded Robinhood Chain data ingestion to RPC performance. It changed RPC configuration, mitigated steady-state ingestion, and explicitly said it was patching missing data. The incident was marked resolved after all affected data had been patched. The status history gives a duration of about 6 hours 12 minutes.
- [4 September 2026 incident](https://status.allium.so/history): Allium reported increased latency from its Robinhood Mainnet RPC providers. Endpoints recovered and the incident was resolved after about 6 hours 18 minutes.

This is an independent data-provider/operator signal on an Orbit chain. It establishes that RPC performance can interrupt a production data-ingestion service and require historical repair. It does not establish:
- how many blocks, events, or customers were affected;
- whether the July and September incidents had the same root cause;
- whether the September incident caused missing data or only elevated latency;
- any revenue loss, SLA penalty, or incremental RPC spend.

The two incidents belong to one operator, Allium. They must not be counted as two independent customers. Allium's incident records are evidence of operator pain and a potential interview target, not evidence that Allium would buy an external product.

## 3. Technical implications and competition

Envio's [“Nodes Silently Miss Events”](https://dev.to/envio/nodes-silently-miss-events-1jk0), published September 2026, provides a useful technical explanation:
- A filtered eth_getLogs response does not contain a cryptographic proof of completeness.
- Full transaction and receipt data can be checked against the block header's transactionsRoot and receiptsRoot.
- Envio describes a Robinhood Chain incident on 4 Sep 2026: after a roughly 14-minute sequencer halt, HyperIndex failed over from HyperSync to Alchemy RPC; the RPC fallback then supplied invalid data during recovery.
- Envio says it is building an additional HyperSync cross-check for the RPC fallback path; the article does not say that this feature had shipped.
- The article also describes older resolved omissions in Nethermind, Erigon, Besu, and Geth. These support the general technical risk, but they are not new Orbit customers.

The same article examines eRPC:
- eRPC 0.2.0 has opt-in integrity checks for block and receipt-shaped RPC responses.
- Its own specification says filtered eth_getLogs cannot be intrinsically verified from the filtered response alone.
- It can compare against receipts already present in its cache, but does not fetch receipts solely to verify every cold log range.
- Full-block ingestion systems such as HyperSync can validate complete receipts before serving indexed data.

This sharpens the possible gap: not generic RPC health, but **reconciliation of indexed event artifacts against canonical receipts or a trusted complete-block source, including detection of downstream checkpoints that have already incorporated incomplete data**. However, HyperSync and protocol-specific indexers already cover parts of this. No buyer has validated a standalone product.

## 4. Search coverage and evidence limits

This pass also checked GitHub issue searches for Arbitrum/Orbit missing logs and events in Graph Node, Subsquid, Goldsky-related repositories, and Nitro. It did not find another fresh, independent Orbit operator report with quantified event loss or RPC spend. Older or unrelated issues were not promoted:
- Graph Node's old Arbitrum Goerli missing-data report is not a current Orbit production incident.
- A BSC incomplete-log report is a useful cross-chain analogue, not Arbitrum/Orbit evidence.
- Generic RPC range-limit documentation and benchmark results do not prove an operator's buyer pain.

The research is bounded to publicly searchable material. It does not include private support tickets, closed customer communities, or direct operator interviews.

## 5. Updated decision

- **Indexer RPC cost amplification:** WATCH. Recurring across Envio, Ponder, Nuthatch, and rindexer, but direct framework fixes and strong substitutes remain.
- **Fast-L2 event completeness:** WATCH. HCTDIP's 61-fill report remains one incident; this pass adds technical corroboration and a separate Allium ingestion incident, but not a second independent fast-L2 customer.
- **RAILGUN/Squid event omission and PPOI divergence:** WATCH. Strong protocol-specific integrity incident with a second-chain follow-up and downstream wallet impact; no demonstrated budget owner or willingness to pay.
- **Allium Robinhood ingestion:** supporting operator evidence, not a separate candidate.

No product reaches GO. Keep product selection undecided and do not start implementation.

## 6. Next research actions

1. Identify the owner/operator of the RAILGUN Squid/PPOI data pipeline and determine whether a repeatable reconciliation/rebuild workflow exists after late backfills.
2. Ask independent RAILGUN wallet/indexer teams whether they have experienced other missing-event or divergent-checkpoint incidents; distinguish separate incidents from duplicate reports of the August case.
3. Track the October Sepolia omission report in Railgun-Community/engine #142 and determine whether the upstream indexer data was corrected.
4. Interview an Allium or other Robinhood/Orbit data-ingestion owner about RPC-provider spend, repair/backfill effort, affected customers, and existing validation controls.
5. Continue seeking two independent Orbit teams with quantified RPC spend or event loss; do not count multiple reports by one operator or one shared outage as independent customers.
6. Do not build a generic RPC proxy, monitoring dashboard, or indexer replacement without a demonstrated cross-framework gap and a buyer.
