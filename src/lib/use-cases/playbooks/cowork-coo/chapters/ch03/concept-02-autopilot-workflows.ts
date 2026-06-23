import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_AUTOPILOT_WORKFLOWS: GuideConcept = {
  number: 2,
  title: "Designing Autopilot Workflows",
  subtitle:
    "The workflows that run while you're doing other things — the design principles and the concrete examples",
  sections: [
    buildGuideSection({
      id: "daily-briefing-workflow",
      number: "2.1",
      title: "The daily briefing workflow",
      subtitle:
        "Cowork reads your inputs overnight and delivers a structured morning briefing — the complete design",
      takeaway:
        "Briefing workflow = ingest overnight inputs → synthesise one template → deliver to staging + notification — never 12 separate chats.",
      why: "Leaders drown in tabs; a single morning brief with consistent sections beats five different AI summaries.",
      paragraphs: [
        [
          s("Inputs: calendar export, overnight emails flagged, CRM snapshot, news watch output, yesterday's run manifests. Schedule: 5:30am weekdays. Skills chain: INGEST_OVERNIGHT → SYNTH_BRIEF_v1 → NOTIFY_DIGEST."),
        ],
        [
          s("Output template sections: "),
          x("Today", "Top 3 priorities from calendar + backlog."),
          s(", "),
          x("Overnight", "What Cowork processed + failures."),
          s(", "),
          x("Risks", "Flags from analysis Skills."),
          s(", "),
          x("Decisions needed", "Items waiting HITL."),
        ],
      ],
      workflowSteps: [
        "List true overnight inputs — remove vanity feeds.",
        "Define BRIEF_TEMPLATE.md with word limits.",
        "Schedule 90 min before your work start.",
        "HITL T1: read brief, do not auto-send externally.",
      ],
      artifact: {
        id: "daily-brief-template",
        title: "Daily brief output template",
        content: `# Brief — {date}
## Today (3 bullets max)
## Overnight automation
## Risks / flags
## Decisions waiting on you
## Calendar highlights`,
      },
    }),
    buildGuideSection({
      id: "document-inbox-workflow",
      number: "2.2",
      title: "The document inbox workflow",
      subtitle:
        "A folder-monitored Skill that processes every document dropped into it — extraction, summary, and filing",
      takeaway:
        "Inbox workflow: watch → extract → summarise → route to domain folders — with move-to-processed idempotency.",
      why: "Shared 'drop zone' folders without automation become digital piles; inbox workflow is the highest-ROI pattern for document-heavy teams.",
      paragraphs: [
        [
          s("Architecture: "),
          x("~/Cowork/inbox/", "Single drop zone — read-only for most staff."),
          s(" event trigger → CLASSIFY_DOC_v1 → EXTRACT_* by type → SUMMARY_v1 → ROUTE_v1 to ~/Finance|Legal|Ops/."),
        ],
        [
          s("Sidecar outputs: {filename}.json (structured), {filename}.summary.md, processing.log. Failed files stay in inbox with ERROR.md — never silent delete."),
        ],
      ],
      workflowSteps: [
        "Create inbox + processed + failed folders.",
        "Deploy classify + extract Skills per doc type.",
        "Train team: drop only, never edit in inbox.",
        "Weekly failed-folder review.",
      ],
      example: {
        title: "INBOX_PIPELINE_v1",
        body: "PDF invoice → Finance/staging; contract → Legal/staging; misc → Ops/review with classification confidence in json.",
      },
    }),
    buildGuideSection({
      id: "weekly-report-workflow",
      number: "2.3",
      title: "The weekly report workflow",
      subtitle:
        "Aggregating inputs from the week and producing a structured summary report — the recurring intelligence workflow",
      takeaway:
        "Weekly report = defined input window (Mon–Sun) + aggregation Skill + narrative Skill + staging for leadership review.",
      why: "Friday panic reports are a calendar problem — Monday-ready reports come from scheduled aggregation, not heroics.",
      paragraphs: [
        [
          s("Collect inputs from fixed paths: sales CSV, support export, project status md files. AGGREGATE_WEEK_v1 produces metrics.json; NARRATE_WEEKLY_v1 fills report template. Schedule Sunday 8pm or Monday 5am based on when exports land."),
        ],
        [
          s("Include week-over-week and 'data completeness' section — list missing inputs so readers trust the narrative."),
        ],
      ],
      workflowSteps: [
        "Document which exports must land before schedule fires.",
        "Use condition trigger if upstream export is flaky.",
        "Golden test against last manual report.",
        "Publish to ~/Reports/weekly/{iso_week}/ only after HITL.",
      ],
    }),
    buildGuideSection({
      id: "email-draft-workflow",
      number: "2.4",
      title: "The email draft workflow",
      subtitle:
        "Scheduled Skills that prepare draft responses or outreach based on defined criteria",
      takeaway:
        "Email workflows stop at draft in staging — criteria-driven, sensitivity-guarded, never auto-send in v1.",
      why: "One automated send to a customer or board member ends the Cowork program — drafts-only is the production default.",
      paragraphs: [
        [
          s("Patterns: weekly customer check-in drafts from CRM segment; follow-up drafts from stale opportunities; internal status from pipeline analysis. Inputs: CRM export + style card. Output: drafts/{recipient_id}.md with subject line suggestion."),
        ],
        [
          s("Sensitivity guard (Ch 2 §3.6): legal, HR, termination keywords → REVIEW_REQUIRED.txt instead of draft. Schedule after analysis workflows complete."),
        ],
      ],
      workflowSteps: [
        "Define recipient criteria in SQL-like plain language.",
        "Output to drafts folder only.",
        "Human sends from mail client after edit.",
        "Pilot DM-to-self or drafts mailbox 2 weeks.",
      ],
    }),
    buildGuideSection({
      id: "content-monitoring-workflow",
      number: "2.5",
      title: "The content monitoring workflow",
      subtitle:
        "Skills that track specified topics, sources, or competitors and surface relevant developments",
      takeaway:
        "Monitoring = scheduled research Skill with allowlist + diff against yesterday — surface only what changed.",
      why: "Daily full re-research duplicates noise; diff-based monitoring respects token budgets and attention.",
      paragraphs: [
        [
          s("Configure topic list, allowlisted domains, competitor URLs. COMPETITOR_SCAN_v1 runs daily; writes scan/{date}.json; DIFF_v1 compares to prior day; digest includes only new items with citations."),
        ],
        [
          s("Store raw fetches for audit; cap sources per run. Pair with briefing workflow (§2.1) as Overnight section input."),
        ],
      ],
      workflowSteps: [
        "Define 5–10 monitored entities max for v1.",
        "Allowlist domains; require citations.",
        "Diff against previous scan artifact.",
        "Feed digest into daily brief — do not separate alert spam.",
      ],
      artifact: {
        id: "monitoring-diff-output",
        title: "Monitoring diff output shape",
        content: `{
  "date": "2026-06-22",
  "new_items": [{ "entity", "headline", "url", "relevance" }],
  "unchanged_count": 12
}`,
      },
    }),
    buildGuideSection({
      id: "data-refresh-workflow",
      number: "2.6",
      title: "The data refresh workflow",
      subtitle:
        "Skills that pull updated data, process it, and update a report or dashboard on schedule",
      takeaway:
        "Refresh workflow: fetch or wait for drop → validate schema → transform → update canonical staging → regenerate dependent report.",
      why: "Stale dashboards erode trust; automated refresh with schema gates beats manual export when the export is already automated.",
      paragraphs: [
        [
          s("Two variants: (A) external pull via MCP/API where allowed; (B) watch folder for BI export. VALIDATE_SCHEMA always runs before transform. Dependent REPORT_REGEN_v1 triggers via condition on successful refresh flag."),
        ],
        [
          s("Version data files with date suffix — never overwrite sole copy. Keep last 4 weeks for rollback."),
        ],
      ],
      workflowSteps: [
        "Map data lineage: source → clean → metrics → report.",
        "Schema test on every refresh.",
        "Condition-trigger report regen on success flag.",
        "Alert if refresh misses SLA (e.g. by 8am).",
      ],
    }),
    buildGuideSection({
      id: "quality-check-workflow",
      number: "2.7",
      title: "The quality check workflow",
      subtitle:
        "Skills that review outputs from other processes and flag issues — the automated QA layer",
      takeaway:
        "QA Skill runs after primary workflow — rule-based checks + spot anomalies — writes QA_REPORT not fixed silently.",
      why: "Automation without QA ships confident errors; a lightweight QA Skill is cheaper than executive distrust.",
      paragraphs: [
        [
          s("QA checks: row counts vs prior week, totals reconcile, required fields non-null, filename conventions, banned PII patterns in outputs. QA_SKILL_v1 reads staging outputs; emits qa/{run_id}.json with PASS/FAIL per check."),
        ],
        [
          s("On FAIL: block promote-to-production step in pipeline; notify owner. QA does not auto-fix — flags for human or upstream Skill revision."),
        ],
      ],
      workflowSteps: [
        "List 5 deterministic checks for pilot workflow.",
        "Run QA after primary, before notify.",
        "Define FAIL → stop pipeline policy.",
        "Review QA false positives weekly — tune thresholds.",
      ],
      artifact: {
        id: "qa-checklist-block",
        title: "QA check definitions",
        content: `checks:
  - row_count_within: 0.2 of prior_week
  - total_revenue_matches: source_csv.sum
  - no_null: [region, amount]
  - no_pii_pattern: email in output`,
      },
    }),
    buildGuideSection({
      id: "notification-workflow",
      number: "2.8",
      title: "The notification workflow",
      subtitle:
        "Skills that generate summaries or alerts and push them to specified destinations on a schedule",
      takeaway:
        "Notification workflow is the last mile — summarise run manifests, respect quiet hours, fail loud / succeed quiet.",
      why: "Alert fatigue and alert silence are the same mistake at different volumes — notification design is ops policy.",
      paragraphs: [
        [
          s("Patterns: failure → immediate Slack #ops; success → daily digest at 8am; HIGH flags → @owner. Include run_id, workflow name, links to output paths, one-line status. Never attach full PDFs to chat — link to staging."),
        ],
        [
          s("Quiet hours: no non-critical pings 10pm–7am. Critical = money-moving failure, security, missed board input."),
        ],
      ],
      workflowSteps: [
        "Map severity tiers to channels.",
        "Digest bundles successes; failures always immediate.",
        "Template notifications — consistent parseable format.",
        "Monthly alert audit: mute or fix noisy workflows.",
      ],
      artifact: {
        id: "notification-template",
        title: "Notification message template",
        content: `[Cowork] {workflow} — {status}
run_id: {id} | Skill: {version}
outputs: {paths}
action: {review_link | none}`,
      },
    }),
  ],
};
