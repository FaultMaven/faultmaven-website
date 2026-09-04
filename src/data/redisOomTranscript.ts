// Generated verbatim from the FaultMaven test-harness transcript
// fm-sre-simulator: transcripts/redis-oom_20260903_012422.json (2026-09-03).
// Every `fm` entry is unedited engine output. `op` entries are the scripted
// operator side; long pasted dumps are truncated, and each says by how much.
// Do not hand-edit: regenerate from the source transcript.

export type TranscriptEntry = {
  kind: 'op' | 'fm';
  turn: number;
  text: string;
  label?: string;
  mono?: boolean;
  truncated?: number;
  status?: string;
  milestones?: string[];
};

export const transcript: TranscriptEntry[] = [
  {
    "kind": "op",
    "turn": 1,
    "label": "Operator — opening report",
    "text": "Our primary Redis (cache-prod-01, single-node, 8GB maxmemory) is rejecting writes with \"OOM command not allowed when used memory > 'maxmemory'\". Web tier is degraded — login works (reads still succeed) but checkout/cart updates intermittently fail because the app can't write session deltas. We tried bumping maxmemory to 12gb about 20 minutes ago and it filled right back up. Started roughly 4 hours ago, no changes to the cache infra in weeks. Need this stable.",
    "mono": false
  },
  {
    "kind": "op",
    "turn": 2,
    "label": "Operator — redis-cli INFO memory",
    "text": "# Memory\nused_memory:12713054208\nused_memory_human:11.84G\nused_memory_rss:13153411072\nused_memory_rss_human:12.25G\nused_memory_peak:12734025728\nused_memory_peak_human:11.86G\nused_memory_peak_perc:99.84%\nused_memory_overhead:198143488\nused_memory_startup:812192\nused_memory_dataset:12514910720\nused_memory_dataset_perc:98.46%\nallocator_allocated:12714782720\nallocator_active:12923174912",
    "truncated": 39,
    "mono": true
  },
  {
    "kind": "op",
    "turn": 3,
    "label": "Operator — storefront application logs",
    "text": "$ kubectl -n web logs -l app=storefront --tail=120 | grep -i 'redis\\|OOM\\|cache'\n\n2026-05-06T13:42:11.084Z ERROR [storefront-7c4b9-h2pq4] CartController - failed to persist cart delta for user=773221: io.lettuce.core.RedisCommandExecutionException: OOM command not allowed when used memory > 'maxmemory'.\n2026-05-06T13:42:11.085Z WARN  [storefront-7c4b9-h2pq4] CartController - falling back to in-flight buffer (cart will reconcile on next successful write)\n2026-05-06T13:42:14.221Z ERROR [storefront-7c4b9-h2pq4] SessionMiddleware - SETEX sess:web:9b1e8 failed: OOM command not allowed when used memory > 'maxmemory'\n2026-05-06T13:42:14.222Z WARN  [storefront-7c4b9-h2pq4] SessionMiddleware - degrading to read-only session for this request\n2026-05-06T13:42:18.617Z INFO  [storefront-7c4b9-jq87n] CheckoutFlow - cart write retry succeeded after 1 attempt\n2026-05-06T13:42:23.901Z ERROR [storefront-7c4b9-jq87n] CartController - failed to persist cart delta for user=441017: OOM command not allowed when used memory > 'maxmemory'\n2026-05-06T13:42:31.005Z ERROR [storefront-7c4b9-jq87n] CheckoutFlow - SETEX cart:user:441017:items failed: OOM command not allowed when used memory > 'maxmemory'",
    "truncated": 10,
    "mono": true
  },
  {
    "kind": "fm",
    "turn": 4,
    "text": "The storefront logs add an important boundary to the existing problem: the failures are confined to Redis write paths. In `pasted text (turn 3)`, lines 3–15 show `CartController` and `SessionMiddleware` failures for cart deltas and `SETEX` session/cart writes, while line 17 records a successful retry. Line 19 shows profile reads still hitting cache, and line 21 notes that the circuit breaker remains inactive because reads and health checks are still passing. This is consistent with the memory snapshot in `pasted text (turn 2)`: 11.84G used against a 12.00G limit, `noeviction`, and zero evictions (lines 2–13, 23–25, and 35). The logs do not identify which writer or key population is responsible for the buildup, so that remains unestablished.\n\nThe proposed problem statement remains unchanged: **cache-prod-01 is an ongoing single-node Redis OOM condition causing intermittent checkout/cart session-write failures and web-tier degradation, despite a recent increase of maxmemory from 8 GB to 12 GB.** Do you want to proceed with focused investigation? I have a relevant Redis OOM runbook available and can apply it after confirmation.\n\n*Sources: [Redis Out of Memory (maxmemory exceeded)]*",
    "status": "inquiry",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 4,
    "label": "Operator",
    "text": "Yes, that's correct. Let's investigate.",
    "mono": false
  },
  {
    "kind": "fm",
    "turn": 5,
    "text": "The investigation is now confirmed. The current evidence establishes the active boundary: Redis is at 11.84G of a 12.00G limit with `noeviction`, and storefront `SETEX`/cart writes are rejected while reads continue (`pasted text (turn 2)`, lines 2–13 and 23–25; `pasted text (turn 3)`, lines 3–21). The remaining key question is what is consuming the dataset and whether cache/session keys have usable TTLs; the submitted snapshot does not identify the responsible key population.\n\nA relevant draft runbook is available for this symptom. It covers the `noeviction` condition and unbounded growth from keys without TTLs; I’ll apply it as the investigation proceeds.\n\nFirst, please collect these read-only diagnostics from `cache-prod-01`:\n\n```bash\nredis-cli INFO keyspace\nredis-cli INFO commandstats | grep -E 'cmdstat_(set|setex|hset|expire|del|unlink|get|mget):'\nredis-cli --scan --pattern 'sess:*' | head -20\nredis-cli --scan --pattern 'cart:*' | head -20\n```\n\nThese outputs will establish database/key counts, write-command activity, and representative session/cart key naming. For representative keys only, also run `TTL` and `MEMORY USAGE`; do not dump values or scan with `KEYS *`. If the instance is shared with durable data, do not change the eviction policy or add expirations until key ownership and TTL behavior are confirmed.",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 5,
    "label": "Operator",
    "text": "That isn't ready yet — I still need to do the prerequisite step we talked about before I can get you that. Let me take care of it and I'll bring it on the next pass.",
    "mono": false
  },
  {
    "kind": "fm",
    "turn": 6,
    "text": "Understood. The prerequisite step is still pending, so there is no new result to analyze and I won’t treat the earlier diagnostic request as completed. Once ready, please provide the outputs from `cache-prod-01` for `INFO keyspace`, filtered `INFO commandstats`, and representative session/cart key names; then include `TTL` and `MEMORY USAGE` for a small sample. Those results are needed to distinguish the consuming key population and TTL behavior before changing eviction or expiration settings. The current evidence only establishes the write-side OOM boundary; it does not identify the buildup source.",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 6,
    "label": "Operator — pasted output",
    "text": "$ redis-cli -h cache-prod-01 MEMORY USAGE rec:features:user:8421995\n(integer) 12914432\n\n$ redis-cli -h cache-prod-01 TTL rec:features:user:8421995\n(integer) -1\n\n$ redis-cli -h cache-prod-01 STRLEN rec:features:user:8421995\n(integer) 12914432\n\n# Notes (not part of command output):\n#   - TTL -1: this key has NO expiry set.\n#   - 12.9 MB raw serialised feature vector, matches the per-key average in the --bigkeys rollup.\n#   - This is a representative sample from the rec:features:user:* prefix (853 keys, ~9.6 GB total).",
    "mono": true
  },
  {
    "kind": "fm",
    "turn": 7,
    "text": "The new sample identifies a concrete memory-growth mechanism: `rec:features:user:8421995` is a 12,914,432-byte string with `TTL -1`, meaning it never expires (pasted text (turn 6), lines 1–12). The sample is reported as representative of 853 `rec:features:user:*` keys consuming about 9.6 GB (line 13). Combined with the earlier `noeviction` policy and 11.84G used against a 12.00G limit, this explains why writes are rejected: a large, non-expiring recommendation dataset occupies most of the budget, leaving little room for checkout/session writes. This is causal evidence, but the sample alone does not prove every one of the 853 keys lacks a TTL or that this is the sole contributor.\n\nThe symptom is now formally verified: the storefront logs contain Redis OOM write failures from 2026-05-06T13:42:11Z through 13:42:49Z, including cart and `SETEX` session writes, while reads continue to succeed (pasted text (turn 3), lines 3–21). Scope is `cache-prod-01` and the storefront write paths represented by the two storefront pods in that excerpt; the broader affected-user count is not established.\n\nNext, please obtain one decisive confirmation: a TTL distribution for a representative sample of `rec:features:user:*` keys on `cache-prod-01`, collected now. The current sample proves one key has no expiry, but not whether missing TTLs are systematic. Avoid changing eviction policy or deleting keys until ownership and retention requirements are confirmed; these recommendation records may be application data rather than disposable cache entries.",
    "status": "investigating",
    "milestones": [
      "symptom_verified"
    ]
  },
  {
    "kind": "op",
    "turn": 7,
    "label": "Operator — pasted output",
    "text": "$ redis-cli -h cache-prod-01 MEMORY USAGE rec:features:user:8421995\n(integer) 12914488\n\n$ redis-cli -h cache-prod-01 TTL rec:features:user:8421995\n(integer) -1\n\n$ redis-cli -h cache-prod-01 STRLEN rec:features:user:8421995\n(integer) 12914432\n\n$ redis-cli -h cache-prod-01 TYPE rec:features:user:8421995\nstring\n\n$ redis-cli -h cache-prod-01 OBJECT ENCODING rec:features:user:8421995\n\"raw\"\n\n# A few more random samples from the same prefix:",
    "truncated": 21,
    "mono": true
  },
  {
    "kind": "fm",
    "turn": 8,
    "text": "The new sample materially strengthens the existing hypothesis: the `rec:features:user:*` records are large, raw strings with no expiration, while the sampled session key is small and expiring. Specifically, in pasted text (turn 7), lines 1–15 show one recommendation record at 12,914,488 bytes with `TTL -1`, and additional sampled records at roughly 9–15 MB each, all with `TTL -1`; lines 33–37 show the comparison session key at 1,843 bytes with `TTL 2417`. The earlier supplied rollup reports 853 such keys totaling about 9.6 GB (pasted text (turn 6)).\n\nThis is an independent causal observation supporting the hypothesis that unbounded recommendation-key growth is consuming the memory budget and leaving `noeviction` unable to reclaim space. It explains why increasing maxmemory from 8 GB to 12 GB only delayed the failures. The OOM failure itself remains anchored to the historical incident window, 2026-05-06 13:42:11–13:42:49 UTC; the new key sample does not establish that the condition is current today.\n\nThe cause is now strongly supported, but I would not yet treat the application-side owner or retention requirement as established. Do not bulk-expire or delete these records without confirming that they are disposable or that a safe replacement path exists. The safest next step is to identify the writer and intended retention policy for `rec:features:user:*`, using data from cache-prod-01 covering the incident window (2026-05-06 13:42:11–13:42:49 UTC): application deployment/configuration records or Redis command/audit telemetry showing which component created or refreshed this prefix and whether an expiry was intended. If that historical attribution is unavailable, say so; the current evidence still supports a TTL-enforcement fix, but not an unreviewed destructive cleanup.\n\nThe KB runbook also cautions that switching to `allkeys-lru` can evict data assumed durable, while `volatile-lru` is only appropriate when cache entries reliably carry TTLs. Because these recommendation keys currently do not, changing eviction policy is not safe to recommend as a permanent fix without workload/ownership confirmation. The KB source is marked draft.\n\n*Sources: [Redis Out of Memory (maxmemory exceeded)]*",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 8,
    "label": "Operator — pasted output",
    "text": "$ git -C /repos/recommendation-engine show v3.2.0:src/cache/feature_writer.py\n# src/cache/feature_writer.py\n# Added in v3.2.0 — per-user ML feature vector cache to skip recompute on hot users.\n# Author: rec-eng team\n# Reviewer: (single approver)\n\nimport logging\nimport pickle\nfrom typing import Iterable, Mapping\n\nfrom redis import Redis\n\nlog = logging.getLogger(__name__)\n\n# Shared Redis cluster used by the rest of the platform.\n# (Per platform README we are supposed to namespace under our service prefix.)",
    "truncated": 38,
    "mono": true
  },
  {
    "kind": "fm",
    "turn": 9,
    "text": "The newly supplied source code makes the mechanism actionable: `FeatureWriter.write_batch()` uses `MSET` without any expiration, and `write_one()` uses `SET` without a TTL. Its own comments describe 8–15 MB serialized values and about 850 distinct hot users per day; this directly explains the earlier observations in pasted text (turn 6) and pasted text (turn 7), where recommendation keys were roughly 9–15 MB, had `TTL -1`, and 853 keys totaled about 9.6 GB. Because the Redis incident logs show writes rejected with `OOM command not allowed when used memory > 'maxmemory'` during 2026-05-06T13:42:11Z–13:42:49Z, the causal chain is now strong: persistent oversized recommendation entries consume the shared budget, and `noeviction` rejects checkout/session writes once the ceiling is reached.\n\nThe safest permanent fix is an application change: replace the unbounded `MSET`/`SET` writes with writes that attach an explicit TTL, add a serialized-size guard, and choose a TTL longer than the refresh interval but short enough to bound retention. Since `MSET` cannot attach TTLs atomically, use a pipeline of `SET(..., ex=TTL)` commands or a Lua script. Existing `rec:features:user:*` keys also need a controlled migration/cleanup; do not mass-delete them until the recommendation-data owner confirms they are disposable cache entries.\n\nA practical staged action is:\n\n```python\nFEATURE_TTL_SECONDS = <approved_ttl>\nMAX_FEATURE_BYTES = <approved_max_bytes>\n\nwith self._redis.pipeline(transaction=False) as pipe:\n    for uid, blob in vectors.items():\n        if len(blob) > MAX_FEATURE_BYTES:\n            raise ValueError(f\"feature vector for {uid} exceeds size limit\")\n        pipe.set(f\"{_KEY_PREFIX}{uid}\", blob, ex=FEATURE_TTL_SECONDS)\n    pipe.execute()\n\n# For the single-user path:\nself._redis.set(f\"{_KEY_PREFIX}{user_id}\", vector,\n                ex=FEATURE_TTL_SECONDS)\n```\n\nBefore choosing the values, obtain approval for the retention and size limits from the recommendation-data owner. As an operational backstop, a cache-only Redis instance can use an eviction policy such as `allkeys-lru`; however, changing `noeviction` changes write-failure semantics and can affect the shared node, so it should be treated as a separately approved, reversible configuration change—not as the primary fix. Any existing-key TTL sweep must also be paced because it adds command load.\n\n**Impact and reversibility:** the code change is reversible by rollback, but it changes retention and may cause recomputation after expiry. Cleanup or TTL assignment affects existing keys on the single Redis node and should be staged; deletion is destructive, whereas assigning a TTL is reversible only until expiry. The eviction-policy change affects the shared Redis service and can discard keys, so it has broader data-impact risk.\n\nAfter applying the code change and controlled cleanup, validate with a write probe (`redis-cli -h cache-prod-01 SET fm_oom_probe ok EX 60`), TTL sampling, `INFO stats` eviction deltas if an eviction policy is enabled, and post-fix checkout/session error logs. The current evidence supports the root cause and fix proposal, but does not verify that the fix has been applied or that the incident is resolved.\n\n*Sources: [Redis Out of Memory (maxmemory exceeded)]*",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 9,
    "label": "Operator",
    "text": "The proposed fix hasn't been shipped yet — there's no deployment of a recommendation-engine build with the TTL/size-guard change, so I have no post-fix memory readings, TTL samples, or checkout/session logs to share. As of the last check the OOM is still live: used_memory 11.84G against the 12.00G ceiling, writes still being rejected. Once the rec-engine owner rolls out the change I can pull fresh `INFO memory`, TTL samples on `rec:features:user:*`, and the storefront error logs to verify.",
    "mono": false
  },
  {
    "kind": "fm",
    "turn": 10,
    "text": "The fix has not been executed, so I’m keeping the case in diagnosis and will not mark the solution accepted or claim resolution. The current evidence still supports the existing mechanism: FeatureWriter writes large recommendation vectors without TTL or size limits (pasted text (turn 8)), while sampled recommendation keys are roughly 9–15 MB with TTL -1 and the rollup reports about 9.6 GB across 853 keys (pasted text (turn 7) and pasted text (turn 6)). The incident window remains 2026-05-06T13:42:11Z–13:42:49Z; the latest 11.84G/12.00G reading and continuing write failures are user-reported current status, but there is no post-fix evidence yet.\n\nThe next decisive data point is the post-deployment verification bundle from cache-prod-01: `INFO memory`, representative `TTL` readings for `rec:features:user:*`, and storefront checkout/session error output covering the original incident window’s corresponding post-fix check. That will show whether the permanent cause—unbounded, non-expiring recommendation data—has been eliminated and whether writes recover. Until the recommendation-engine change is deployed, this case cannot advance to treatment or resolution.",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 10,
    "label": "Operator",
    "text": "The TTL/size-guard build for recommendation-engine hasn't been deployed yet — the rollout is still in progress (v3.2.0 is still live, 5/5 ready, 4h). Until the new build ships and writes through it, there is no post-fix INFO memory, no post-fix TTL sample, and no checkout/session log covering the post-fix window to hand you. The OOM is still active as of the last reading: used_memory 11.84G against the 12.00G ceiling, writes still rejected.",
    "mono": false
  },
  {
    "kind": "fm",
    "turn": 17,
    "text": "The new reading confirms that the mitigation is **not yet verified**. At 13:43:02 UTC, Redis was still at 11.84G of 12.00G with `noeviction` and `evicted_keys:0`; stopping `recommendation-engine` prevents further writes but does not remove the already-resident non-expiring recommendation keys. The previously captured evidence reports those keys occupying about 9.6 GB, with representative TTL `-1`, while the earlier OOM window showed checkout/cart session writes being rejected. Because no successful probe or post-scale checkout/session log is present, I cannot record symptom absence or advance `mitigation_verified`.\n\nThe safest next step is a **read-only/current verification capture** from the same Redis instance, scoped explicitly to the mitigation period:\n\n1. Confirm the deployment remains stopped: `kubectl -n platform get deploy recommendation-engine`\n2. Run the write probe and capture its result: `redis-cli -h cache-prod-01 SET fm_oom_probe ok EX 60`\n3. Capture memory and rejection/eviction counters together: `redis-cli -h cache-prod-01 INFO memory | egrep 'used_memory_human|maxmemory_human|maxmemory_policy'` and `redis-cli -h cache-prod-01 INFO stats | egrep 'evicted_keys|expired_keys|rejected_connections'`.\n4. Export checkout/session logs after the scale-to-zero time, including both successful writes and any remaining OOM errors.\n\nA successful probe alone would establish write acceptance, but it would not prove checkout recovery; the post-scale storefront logs are the decisive symptom check. Do not switch `maxmemory-policy` to `allkeys-lru` as an unreviewed emergency step: it changes Redis behavior and can evict checkout/session or other application data across this shared node. It is reversible with `CONFIG SET`, but the blast radius is the entire Redis instance and the evictions may be operationally destructive. Do not use `FLUSHDB` or `FLUSHALL`; that would destroy live data. Once memory pressure is controlled, the permanent remediation remains to deploy the writer's TTL/size guard, then remove the temporary scale-to-zero workaround only after validation.\n\n*Sources: [Redis Out of Memory (maxmemory exceeded)]*",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 17,
    "label": "Operator",
    "text": "Agreed — keeping recommendation-engine at 0/0, not touching eviction policy, not deleting keys. To be clear on verification: I do NOT have a captured post-scale write probe result or post-scale checkout/session log in my evidence. The last app-log batch I hold is 13:42:xx (still OOM rejections on cart/session writes), and my only Redis reading is 13:43:02 (used 11.84G / max 12.00G, policy noeviction, evicted_keys 0). Stopping the producer halts the ~200 MB/min write growth, but the ~9.6 GB of already-resident, non-expiring rec:features:* keys (TTL=-1) remain — so this relieves the symptom without removing the cause. I cannot claim write acceptance or checkout recovery until a post-scale check is actually captured.",
    "mono": false
  },
  {
    "kind": "fm",
    "turn": 18,
    "text": "The mitigation remains **unverified**, and your correction is important: the only available Redis reading is from 2026-05-06 13:43:02 UTC, while the failure evidence is from 13:42:11–13:42:49 UTC. The producer stop should prevent further recommendation-key growth, but it does not reclaim the approximately 9.6 GB of existing non-expiring keys, so it cannot by itself prove that checkout/session writes recover.\n\nKeep `recommendation-engine` at 0/0 as the narrow, reversible workaround. Do **not** change `maxmemory-policy` or delete recommendation keys under the stated constraints; changing to an eviction policy could evict application data, and deletion would be destructive. The blast radius of the current workaround is the recommendation-engine deployment: recommendation generation is paused, while Redis and checkout remain otherwise unchanged.\n\nThe single decisive next data point is a captured post-scale write probe result, together with the associated post-scale Redis pressure reading. Please run and capture:\n\n```bash\nredis-cli -h cache-prod-01 SET fm_oom_probe ok EX 60\nredis-cli -h cache-prod-01 INFO memory | egrep 'used_memory_human|maxmemory_human|maxmemory_policy'\nredis-cli -h cache-prod-01 INFO stats | egrep 'evicted_keys|expired_keys|rejected_connections'\n```\n\nA returned `OK` would show that Redis accepts at least that write at the captured time; it would not alone prove checkout recovery, so application logs after the scale-to-zero point are still needed for that separate verification. If the probe still returns an OOM error, leave the producer stopped and do not restore replicas. Once the permanent TTL/size-guard fix is deployed and verified, restore the intended recommendation-engine replica count and confirm that new recommendation keys receive TTLs and obey the size guard.\n\nBecause this mitigation has not yet been shown effective, I am not marking `mitigation_verified`. The previously captured evidence still establishes the failure and mechanism: storefront cart/session `SETEX` writes failed during 2026-05-06 13:42:11–13:42:49 UTC, while recommendation keys included large raw strings with `TTL -1`; the code extract shows both batch `MSET` and single-user `SET` paths without expiration. The later 11.84G/12.00G `noeviction` reading confirms pressure but is not a post-mitigation success check.\n\n*Sources: Redis Out of Memory (maxmemory exceeded)*",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 18,
    "label": "Operator",
    "text": "I confirm recommendation-engine will remain at 0/0 until the TTL/size-guard fix and post-fix verification are complete. Frankly, I cannot supply the requested post-scale probe output — a fresh `SET fm_oom_probe ok` result is not captured in my evidence, and the only Redis reading I hold is the 13:43:02 UTC one (already pasted: 11.84G/12.00G, noeviction, evicted_keys:0). Keep it at 0/0; I won't change eviction policy or delete keys.",
    "mono": false
  },
  {
    "kind": "fm",
    "turn": 19,
    "text": "The scale-to-zero mitigation is confirmed as the chosen temporary control, but its effectiveness remains unverified. The available reading at 2026-05-06 13:43:02 UTC still showed `used_memory_human:11.84G` against `maxmemory_human:12.00G`, `maxmemory_policy:noeviction`, and `evicted_keys:0` in the user-provided description; that reading is from the incident window and does not prove the later scale-to-zero state. The earlier evidence also shows the recommendation writer creates 8–15 MB recommendation vectors without TTLs, while representative `rec:features:user:*` keys had TTL `-1`, so keeping the writer stopped is a narrow, reversible mitigation that avoids additional writes without changing eviction policy or deleting data.\n\nBecause you cannot provide a fresh probe or post-scale checkout logs, I cannot mark the symptom absent or mitigation verified. This leaves successful Redis writes and restored checkout/session behavior unproven. I will not repeat that unavailable request. The TTL/size-guard deployment and its validation remain the required follow-up before restoring replicas.\n\nRecommended operating position:\n1. Keep `recommendation-engine` at 0 replicas. This changes only that deployment, is reversible by scaling it back, and prevents its new recommendation writes; the blast radius is the recommendation feature, not Redis data deletion or eviction-policy behavior.\n2. Do not change `maxmemory-policy` or delete existing keys under the stated constraint. Changing policy could evict application data, and deletion would be irreversible without a recovery plan.\n3. After the TTL/size-guard fix is deployed, restore replicas only under a controlled rollout and capture the resulting Redis write probe, memory/policy/stats output, and checkout/session write results. Those outputs are the decisive evidence for mitigation verification.\n4. If the probe or checkout writes still fail after the fixed writer is deployed, stop the rollout and reassess before scaling the writer further.\n\nThe permanent fix should ensure both batch `MSET` and single-user `SET` apply a TTL and enforce a size guard; the current evidence shows neither path does so. The temporary scale-to-zero control must be removed only after that fix and verification are complete.\n\n*Sources: [Redis Out of Memory (maxmemory exceeded)]*\n\n---\n\nThe root cause and fix are documented, but the fix can't be applied or verified during this session — it needs out-of-band implementation (a change request, maintenance window, or another team). Shall I close this case with the solution documented for your team to apply?",
    "status": "investigating",
    "milestones": []
  },
  {
    "kind": "op",
    "turn": 19,
    "label": "Operator — closing",
    "text": "Agreed — close it. The scale-to-zero is a workaround, not a fix: the unbounded writer (no TTL, no size guard in v3.2.0) and the ~9.6GB of already-resident rec:features:* keys persist; a restart or scale-up would refill the ceiling the same way. The permanent fix (TTL + size guard on the writer, or moving feature blobs off the shared cluster) is a rec-eng code change I can't land in this session, so documenting it for that team to apply and tracking as a follow-up is the right disposition.",
    "mono": false
  }
];
