import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_EXECUTIVE_WORKFLOWS: GuideConcept = {
  number: 1,
  title: "Executive & Leadership Workflows",
  subtitle:
    "The operational workflows that give senior leaders back hours every week — complete designs with Skill specifications",
  sections: [
    buildGuideSection({
      id: "exec-morning-brief",
      number: "1.1",
      title: "The executive morning brief",
      subtitle:
        "Calendar + email + news + Slack → prioritised daily briefing delivered by 8am",
      takeaway:
        "Blueprint EXEC_BRIEF_v1: four parallel fetches → JOIN → prioritise → one template — delivered to Drive + Slack link by 7:45am, HITL T2.",
      why: "This is the flagship leadership workflow — proves MCP + pipeline discipline from Chapters 3–5 in one package.",
      paragraphs: [
        [
          s("Pipeline: "),
          x("CAL_FETCH", "Next 24h meetings + conflicts."),
          s(" || "),
          x("GMAIL_FETCH", "Label Priority, max 25."),
          s(" || "),
          x("SLACK_READ", "Allowlisted leadership channels, 24h."),
          s(" || "),
          x("NEWS_SCAN", "Allowlist diff vs yesterday."),
          s(" → JOIN → PRIORITISE_v1 → BRIEF_EXEC_v1 → VALIDATE → DRIVE_WRITE + SLACK_NOTIFY."),
        ],
        [
          s("Schedule: cron 6:30 local. Output sections: Top 3 decisions, Calendar risks, Overnight signals, Waiting on you. Token budget: cap fetches; degrade per Ch 5 §1.4."),
        ],
      ],
      workflowSteps: [
        "Clone blueprint spec; set connector allowlists.",
        "Run manual ×5 with production readiness gate.",
        "Schedule 6:30; notify #exec-brief with Drive link.",
        "Executive reviews by 8am — never auto-forward externally.",
      ],
      artifact: {
        id: "blueprint-exec-brief",
        title: "EXEC_MORNING_BRIEF blueprint",
        content: `Skills: CAL_FETCH | GMAIL_FETCH | SLACK_READ | NEWS_SCAN
       → JOIN → PRIORITISE_v1 → BRIEF_EXEC_v1 → VALIDATE → EMIT
Schedule: 06:30 | HITL: T2 | SLA: brief by 07:45
Output: ~/Briefs/exec/{date}/brief.md`,
      },
    }),
    buildGuideSection({
      id: "board-pack-workflow",
      number: "1.2",
      title: "The board pack preparation workflow",
      subtitle:
        "Multiple input documents → synthesised executive summary → formatted presentation → distributed",
      takeaway:
        "BOARD_PACK_v1: ingest fixed folder → extract metrics per doc type → SYNTH_BOARD → FORMAT_DECK outline — staging until T3 approval before distribution.",
      why: "Board week is the highest-stakes ops window — this blueprint encodes change freeze and validation from Ch 5.",
      paragraphs: [
        [
          s("Trigger: condition board_inputs_ready.flag in ~/Board/inbox/{quarter}/. Skills: INGEST_BOARD_DOCS → EXTRACT_FINANCE | EXTRACT_OPS | EXTRACT_PRODUCT → SYNTH_BOARD_v1 → FORMAT_BOARD_MEMO_v1 + slide_outline.md. QA reconciles financial totals to source."),
        ],
        [
          s("Non-goals: never auto-send to board portal. Distribution only after approval.flag + partner review. Archive prior quarter for regression fixtures."),
        ],
      ],
      workflowSteps: [
        "Define board folder schema + flag lifecycle.",
        "Build extract Skills per document type.",
        "QA gate on financial reconciliation.",
        "T3 approval before any connector write to board share.",
      ],
      artifact: {
        id: "blueprint-board-pack",
        title: "BOARD_PACK pipeline spec",
        content: `INGEST → EXTRACT_* → SYNTH_BOARD → QA → FORMAT → REVIEW_QUEUE
         → (T3) DRIVE_DISTRIBUTE
Freeze: no Skill version bumps 7d before board`,
      },
    }),
    buildGuideSection({
      id: "stakeholder-comms-workflow",
      number: "1.3",
      title: "The stakeholder communication workflow",
      subtitle:
        "Update inputs → personalised stakeholder messages → review queue → approved sends",
      takeaway:
        "STAKEHOLDER_COMMS_v1: segment map in Context → one draft per stakeholder tier → queue — send only with per-recipient approval.flag.",
      why: "Personalised at scale without uncontrolled send is the leadership comms sweet spot.",
      paragraphs: [
        [
          s("Inputs: weekly update bullets, CRM segment export, STAKEHOLDER_MAP.json (tier, tone, channel). CLASSIFY_STAKEHOLDER → DRAFT_TIER_A | DRAFT_TIER_B → QUEUE_REVIEW. Enterprise tier always ESCALATE_HUMAN."),
        ],
      ],
      workflowSteps: [
        "Maintain STAKEHOLDER_MAP with owner.",
        "Drafts-only for 30 days.",
        "approval.flag per recipient before SEND.",
        "Audit log: run_id, approver, recipient hash.",
      ],
    }),
    buildGuideSection({
      id: "strategic-intelligence-workflow",
      number: "1.4",
      title: "The strategic intelligence workflow",
      subtitle:
        "Competitor monitoring → industry signals → weekly intelligence brief → decision-relevant summary",
      takeaway:
        "STRAT_INTEL_v1: extends Ch 4 multi-source intel — competitor diff + industry RSS allowlist → decision-focused weekly brief.",
      why: "Leaders need 'so what for our strategy' not news clippings — blueprint forces decision section.",
      paragraphs: [
        [
          s("Weekly Sunday 8pm: COMPETITOR_SCAN (parallel per entity) → INDUSTRY_SCAN → JOIN → SYNTH_STRATEGY_v1. Required sections: Moves, Implications, Recommended decisions, Unknowns. Citations mandatory for external claims."),
        ],
      ],
      workflowSteps: [
        "Cap competitors at 8; allowlist sources.",
        "Diff-based scans save tokens.",
        "Route to exec review queue Monday AM.",
        "Quarterly prune low-signal sources.",
      ],
      artifact: {
        id: "blueprint-strat-intel",
        title: "STRAT_INTEL weekly brief template",
        content: `## Competitor moves (cited)
## Industry signals
## Implications for us
## Decisions to consider
## Unknowns / gaps`,
      },
    }),
    buildGuideSection({
      id: "performance-review-workflow",
      number: "1.5",
      title: "The performance review workflow",
      subtitle:
        "Data inputs → narrative generation → draft review document → manager review queue",
      takeaway:
        "PERF_REVIEW_DRAFT_v1: structured inputs only — goals JSON, feedback bullets, metrics — never invent ratings; managers own final prose.",
      why: "HR-sensitive workflow demands restricted data class and T3 review — blueprint encodes non-goals.",
      paragraphs: [
        [
          s("Inputs: employee_goals.json, 360_bullets.md, team_metrics.csv (anonymised aggregates). GENERATE_REVIEW_DRAFT fills template sections — does not assign performance ratings. Output to confidential staging; access ACL per manager."),
        ],
      ],
      workflowSteps: [
        "Legal/HR sign-off on template + data classes.",
        "No auto-publish to HRIS.",
        "Manager edits all narrative before file.",
        "Delete staging per retention policy.",
      ],
    }),
    buildGuideSection({
      id: "decision-memo-workflow",
      number: "1.6",
      title: "The decision memo workflow",
      subtitle:
        "Decision context → options analysis → recommendation → formatted memo → distributed for input",
      takeaway:
        "DECISION_MEMO_v1: context pack in → OPTIONS_ANALYSIS → RECOMMENDATION with explicit assumptions → memo.md — circulate for input, not decision by automation.",
      why: "Decision memos fail when options are vague — blueprint requires 2–4 options with tradeoff table.",
      paragraphs: [
        [
          s("Trigger: manual or decision_context/ drop. Skills: INGEST_CONTEXT → OPTIONS_v1 (min 2 options, pros/cons/risks) → RECOMMEND_v1 (states assumptions) → FORMAT_MEMO_v1. Distribute to REVIEW_QUEUE; collecting input is human."),
        ],
      ],
      workflowSteps: [
        "Define DECISION_MEMO_TEMPLATE.",
        "Require assumptions section.",
        "No auto-approve recommendation.",
        "Archive memos with run_id for audit.",
      ],
      artifact: {
        id: "decision-memo-template",
        title: "Decision memo template",
        content: `## Context
## Options (table: option | pros | cons | risk)
## Recommendation + assumptions
## Open questions
## Input requested by {date}`,
      },
    }),
    buildGuideSection({
      id: "travel-meeting-prep-workflow",
      number: "1.7",
      title: "The travel and meeting preparation workflow",
      subtitle:
        "Calendar → pre-read assembly → briefing document → delivered before each meeting",
      takeaway:
        "MEETING_PREP_v1: poll calendar 45–75 min ahead → pull Drive docs by attendee/project heuristics → PREP_DOC per meeting — DM or folder delivery.",
      why: "Extends Ch 4 §2.3 with full Skill spec and validation for executive calendar density.",
      paragraphs: [
        [
          s("Every 30m: CAL_UPCOMING → DRIVE_MATCH_v1 → PREP_ASSEMBLE_v1. Skip all-day/focus. Include: goal, attendees, linked files, last decisions, suggested questions. VALIDATE: ≥1 linked file or explicit 'no files found'."),
        ],
      ],
      workflowSteps: [
        "Tune Drive search heuristics per exec.",
        "Pilot DM-to-self 2 weeks.",
        "Cap 6 preps per scan — overflow digest.",
        "Exclude confidential external titles from auto-search.",
      ],
    }),
    buildGuideSection({
      id: "week-in-review-workflow",
      number: "1.8",
      title: "The week-in-review workflow",
      subtitle:
        "Activity log + outputs + metrics → weekly summary → distributed to team and stakeholders",
      takeaway:
        "WIR_v1: aggregate run manifests + key metrics + human bullet input → WEEKLY_LEADER_SUMMARY — Friday 4pm to staging, Monday optional auto-digest after approval.",
      why: "Closes the loop — leaders see what Cowork did and what the team shipped in one narrative.",
      paragraphs: [
        [
          s("Inputs: COWORK_RUN_MANIFESTS week slice, KPI_CSV, leader_bullets.md. AGGREGATE_WIR → NARRATE_WIR_v1. Sections: Wins, Metrics, Automation summary, Next week focus. T2 review before team Slack post."),
        ],
      ],
      workflowSteps: [
        "Auto-collect manifests from run history export.",
        "Leader adds 3 bullets before Friday cron.",
        "Review queue Friday PM; post Monday if approved.",
      ],
      artifact: {
        id: "blueprint-wir",
        title: "WEEK_IN_REVIEW blueprint",
        content: `AGGREGATE_WIR → NARRATE_WIR → VALIDATE → REVIEW → (approve) SLACK_POST
Schedule: Fri 16:00 | HITL: T2`,
      },
    }),
  ],
};
