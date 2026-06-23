import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_SCHEDULING_FOUNDATIONS: GuideConcept = {
  number: 1,
  title: "Scheduling Foundations",
  subtitle:
    "How Cowork scheduling works — the mechanics before you set your first automated run",
  sections: [
    buildGuideSection({
      id: "what-scheduling-means",
      number: "1.1",
      title: "What scheduling means in Cowork",
      subtitle:
        "Running a Skill automatically based on time, event, or condition — the three trigger types",
      takeaway:
        "Scheduling attaches a tested Skill to a trigger — time, event, or condition — so Cowork runs your SOP without you opening the app.",
      why: "Operators who skip trigger taxonomy schedule the wrong thing (cron on a reactive task) and wonder why automation feels brittle.",
      paragraphs: [
        [
          s("In Cowork, "),
          x(
            "scheduling",
            "Binding a Skill or workflow to a trigger that fires execution without manual invocation.",
          ),
          s(
            " means a Skill runs on its own when a rule fires. Three trigger families cover almost all ops work: ",
          ),
          x("time-based", "Cron, interval, calendar anchor — 'every Monday 6am.'"),
          s(", "),
          x("event-based", "Filesystem or system event — 'new file in inbox folder.'"),
          s(", and "),
          x("condition-based", "Logical predicate — 'staging folder has >0 unprocessed files AND last run succeeded.'"),
          s("."),
        ],
        [
          s("Each scheduled run creates a "),
          x("run record", "Timestamp, trigger type, Skill version, status, output paths, token usage."),
          s(
            " in history. Scheduling does not change the Skill — it only decides when to invoke it. If the Skill failed manual testing, scheduling amplifies the failure.",
          ),
        ],
      ],
      workflowSteps: [
        "Classify your pilot task: time, event, or condition trigger.",
        "Confirm Skill passed five-run test matrix (Ch 2 §1.8).",
        "Create schedule in sandbox with notify-on-failure only.",
        "Observe three trigger cycles before production paths.",
      ],
      example: {
        title: "Three triggers, one Skill library",
        body: "FINANCE_NORMALISE_INVOICE_v2: event trigger on ~/Finance/inbox/*.pdf. WEEKLY_SALES_MEMO_v1: time trigger Mon 6:30am. PIPELINE_CATCHUP_v1: condition trigger when ~/Sales/staging/has_pending.flag exists.",
      },
    }),
    buildGuideSection({
      id: "time-based-scheduling",
      number: "1.2",
      title: "Time-based scheduling",
      subtitle:
        "Recurring schedules, specific times, and calendar-based triggers — the options and how to configure them",
      takeaway:
        "Time triggers need timezone, blackout windows, and overlap policy — two runs of the same Skill must not stomp each other.",
      why: "Monday 6am jobs that overlap with manual exports or duplicate cron entries are the most common scheduled failure in ops teams.",
      paragraphs: [
        [
          s("Configure: "),
          x("cron expression or picker", "Native UI often offers daily/weekly/monthly — advanced teams map to cron in ops docs (Ch 7 §2.3 pattern)."),
          s(", "),
          x("timezone", "Always explicit — DST shifts break implicit UTC assumptions."),
          s(", "),
          x("max runtime", "Kill or alert after N minutes."),
          s(", and "),
          x("overlap policy", "skip if prior run still active | queue | allow parallel (rare)."),
        ],
        [
          s("Calendar-aware schedules: month-end close, board week, fiscal quarter — use named calendar anchors in workflow metadata rather than magic dates in cron. Document 'does not run on US federal holidays' in workflow SOP."),
        ],
      ],
      workflowSteps: [
        "Pick local timezone and document in WORKFLOW_SOP.",
        "Set overlap: skip if running (default for file writes).",
        "Stagger heavy jobs — not all at 6:00.",
        "Add blackout window during known manual exports.",
      ],
      artifact: {
        id: "time-schedule-spec",
        title: "Time schedule spec block",
        content: `schedule: Mon-Fri 06:30 America/New_York
overlap: skip_if_running
max_runtime_min: 45
blackout: Sun 22:00 - Mon 05:00 (manual export window)
notify: on_failure → #ops`,
      },
    }),
    buildGuideSection({
      id: "event-based-triggers",
      number: "1.3",
      title: "Event-based triggers",
      subtitle:
        "File creation, folder changes, and system events that trigger Skill execution — the reactive automation pattern",
      takeaway:
        "Event triggers need debounce and batch rules — one PDF drop should not spawn twelve overlapping runs.",
      why: "Reactive automation without debounce burns tokens and corrupts outputs when users drag 20 files at once.",
      paragraphs: [
        [
          s("Common events: file created, file modified (use carefully), folder non-empty. Configure "),
          x("glob filter", "Only *.csv, exclude *_draft*."),
          s(", "),
          x("debounce window", "Wait 60s after last event before firing."),
          s(", and "),
          x("batch limit", "Max N files per run — remainder queued."),
        ],
        [
          s("Event triggers pair with document inbox workflows (Concept 2 §2.2). Skill must be idempotent: re-processing same filename should not duplicate outputs — use manifest or move-to-processed pattern."),
        ],
      ],
      workflowSteps: [
        "Define watch path + glob + exclude patterns.",
        "Set debounce 30–120s for bulk drops.",
        "Implement move-to-processed or manifest idempotency.",
        "Test with 1 file, 10 files, and duplicate drop.",
      ],
      example: {
        title: "INBOX_WATCH_v1",
        body: "Watch ~/Ops/inbox/ for *.pdf; debounce 90s; max 5 files/run; on success move to ~/Ops/processing/{run_id}/; on fail leave in place + ERROR sidecar.",
      },
    }),
    buildGuideSection({
      id: "condition-based-triggers",
      number: "1.4",
      title: "Condition-based triggers",
      subtitle:
        "Skills that run when a defined condition is met — the logical trigger",
      takeaway:
        "Condition triggers express business logic in files or flags — readable by humans and Cowork alike.",
      why: "Polling cron for 'maybe there is work' wastes runs; conditions make automation event-like without fragile filesystem watchers.",
      paragraphs: [
        [
          s("Patterns: "),
          x("flag file", "has_pending.flag written by upstream export job."),
          s(", "),
          x("count threshold", "staging/*.json count >= 1."),
          s(", "),
          x("staleness", "last_success older than 24h AND inputs exist."),
          s(". Condition evaluator runs lightweight check every N minutes; only invokes heavy Skill when true."),
        ],
        [
          s("Clear conditions in SOP: who creates the flag, who clears it, what happens if flag stuck true for 48h (alert + auto-expire). Avoid conditions that require subjective judgment — 'CEO seems busy' is not a condition."),
        ],
      ],
      workflowSteps: [
        "Write condition in plain English + machine check.",
        "Define flag lifecycle (create, consume, expire).",
        "Test: condition false (no run), true (run), stuck flag (alert).",
      ],
      artifact: {
        id: "condition-spec",
        title: "Condition trigger spec",
        content: `poll_every: 15m
condition: exists(~/Sales/staging/has_pending.flag)
           AND count(~/Sales/staging/*.csv) > 0
on_true: run PIPELINE_CATCHUP_v1
on_false: noop
stuck_flag_alert: 48h`,
      },
    }),
    buildGuideSection({
      id: "schedule-reliability",
      number: "1.5",
      title: "Schedule reliability",
      subtitle:
        "What happens when a scheduled Skill fails to run, runs late, or encounters an error — the reliability model",
      takeaway:
        "Assume failure — design for missed runs, partial completion, and retry with backoff; never silent skip.",
      why: "Executives trust automation once — a silent miss on board week destroys the program.",
      paragraphs: [
        [
          s("Failure modes: "),
          x("machine asleep", "Laptop closed — schedule missed; use dedicated ops machine or server agent where policy allows."),
          s(", "),
          x("Skill error", "Schema mismatch — run fails, outputs partial."),
          s(", "),
          x("timeout", "Run killed at max_runtime."),
          s(", "),
          x("overlap skip", "Prior run hung — new run skipped, backlog grows."),
        ],
        [
          s("Reliability policy per workflow: retry count, backoff, dead-letter folder, escalate to human. "),
          x("Fail loud", "Notify on failure; success digest only — Ch 1 §2.6."),
          s(". Document 'manual catch-up procedure' when automated run missed."),
        ],
      ],
      workflowSteps: [
        "Define retry: 2 attempts, 15m backoff.",
        "Dead-letter: ~/Cowork/failed/{workflow}/{date}/.",
        "Alert channel + owner on-call rotation.",
        "Write catch-up SOP for missed Monday run.",
      ],
      artifact: {
        id: "reliability-policy",
        title: "Schedule reliability policy",
        content: `retries: 2, backoff 15m
on_final_fail: notify #ops + write FAILED.json
overlap_skip_alert: if 2 consecutive skips
missed_run: manual catch-up SOP link`,
      },
    }),
    buildGuideSection({
      id: "resource-management",
      number: "1.6",
      title: "Resource management in scheduled Skills",
      subtitle:
        "How to prevent scheduled Skills from consuming excessive tokens or system resources",
      takeaway:
        "Cap files per run, model tier per Skill, and weekly token budget per workflow — finance should predict cost, not discover it.",
      why: "Unbounded event triggers on large folders have caused real invoice shocks — resource limits are ops requirements, not optional tuning.",
      paragraphs: [
        [
          s("Controls: "),
          x("max_files / max_pages", "Per-run ingest limits."),
          s(", "),
          x("model routing", "Haiku/Sonnet default; Opus by exception — Ch 1 §2.8."),
          s(", "),
          x("chunking", "Split large PDFs across sub-runs with merge step."),
          s(", "),
          x("weekly budget alert", "Notify if workflow exceeds token threshold."),
        ],
        [
          s("Stagger schedules so CPU-heavy OCR and web-research Skills do not collide. Use condition triggers to avoid empty cron runs that still invoke Claude."),
        ],
      ],
      workflowSteps: [
        "Set per-workflow token estimate from manual runs.",
        "Apply max_files and max_runtime from §1.2.",
        "Weekly digest of token use by workflow to finance.",
        "Review budgets quarterly — adjust or split Skills.",
      ],
    }),
    buildGuideSection({
      id: "monitoring-scheduled",
      number: "1.7",
      title: "Monitoring scheduled Skills",
      subtitle:
        "How to know what ran, when, and what it produced — without being in front of the computer",
      takeaway:
        "Morning triage: dashboard status + run history + output manifest — three minutes to know if the night shift succeeded.",
      why: "Automation without monitoring is optimism — you need the same visibility you'd expect from a human contractor.",
      paragraphs: [
        [
          s("Monitoring stack: Cowork "),
          x("dashboard", "Green/yellow/red per workflow — last run, next run."),
          s(", "),
          x("run history", "Drill into run_id, logs, Skill version, errors."),
          s(", "),
          x("output manifest", "manifest.json per run listing files written."),
          s(", optional "),
          x("digest notification", "Slack/email summary of successes + failures."),
        ],
        [
          s("Define SLI per workflow: 'completed by 7am with ≥1 output file' or 'zero HIGH flags.' Alert when SLI breached two consecutive days."),
        ],
      ],
      workflowSteps: [
        "Pin dashboard workflows by priority.",
        "Subscribe to failure notifications only (default).",
        "Add daily 7:15am calendar triage — 3 min.",
        "Weekly review: failed runs + near-miss timeouts.",
      ],
      artifact: {
        id: "morning-triage-checklist",
        title: "Morning triage checklist",
        content: `[ ] Dashboard: any red workflows?
[ ] History: failures since yesterday?
[ ] Manifest: expected outputs present?
[ ] Staging: human review queue size OK?
[ ] Token digest: within budget?`,
      },
    }),
    buildGuideSection({
      id: "scheduling-mindset",
      number: "1.8",
      title: "The scheduling mindset",
      subtitle:
        "Thinking about your week as a set of recurring workflows that Cowork can run for you — the inventory exercise",
      takeaway:
        "Map your calendar to workflows — if it happens every week at the same rough time, it is a schedule candidate.",
      why: "Random automation ('let's schedule something cool') fails; calendar-driven inventory produces ROI in week one.",
      paragraphs: [
        [
          s("Exercise: list every recurring task for 7 days — who, what input, what output, what day/time. Mark automate-now (tested Skill), automate-next (needs Skill), human-only (judgment/legal). Target 3 automate-now schedules in 14 days."),
        ],
        [
          s("Think "),
          x("night shift", "Cowork runs while you sleep; you review in morning HITL window."),
          s(" not "),
          x("magic replacement", "Automation prepares; humans approve high-stakes outputs."),
        ],
      ],
      workflowSteps: [
        "Download weekly calendar + standup notes — extract repeats.",
        "Fill SCHEDULE_INVENTORY table.",
        "Pick lowest-risk weekly job with existing Skill.",
        "Schedule sandbox; promote after 2 weeks clean.",
      ],
      artifact: {
        id: "schedule-inventory",
        title: "Weekly schedule inventory",
        content: `| Task | Cadence | Input | Output | Skill | Trigger | HITL |
|------|---------|-------|--------|-------|---------|------|
| Sales memo | Mon AM | CSV export | memo.md | WEEKLY_SALES_MEMO_v1 | cron | T2 |`,
      },
    }),
  ],
};
