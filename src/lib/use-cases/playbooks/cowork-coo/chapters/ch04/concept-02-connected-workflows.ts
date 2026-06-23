import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_CONNECTED_WORKFLOWS: GuideConcept = {
  number: 2,
  title: "Connected Workflow Examples",
  subtitle:
    "The end-to-end connected workflows that show what Cowork with MCP can actually do — complete designs with example Skills",
  sections: [
    buildGuideSection({
      id: "gmail-to-brief",
      number: "2.1",
      title: "The Gmail-to-brief workflow",
      subtitle:
        "Gmail read → priority filter → draft brief → save to Drive → notify on Slack — end to end",
      takeaway:
        "Reference connected pipeline — fetch only priority label, synthesise one brief template, write Drive, link in Slack — drafts never auto-reply.",
      why: "Inbox overload is the universal pilot; this workflow proves MCP value in week one if scoped tightly.",
      paragraphs: [
        [
          s("Nodes: GMAIL_FETCH_v1 (label:Priority, max 30, since cursor) → FILTER_DEDUPE_v1 → BRIEF_COMPOSE_v1 → DRIVE_UPLOAD_v1 (/Briefs/{date}/) → SLACK_NOTIFY_v1 (#ops-digest). Schedule 6am weekdays; degraded path if Gmail down (Ch 4 §1.4)."),
        ],
        [
          s("HITL T2: human scans brief before forwarding. Skill never sends email replies. manifest logs message IDs read — not full body in Slack."),
        ],
      ],
      workflowSteps: [
        "OAuth Gmail + Drive + Slack with allowlists.",
        "Golden test on sandbox label with 5 fixtures.",
        "Schedule 6am; notify with Drive link only.",
        "Review audit manifest weekly.",
      ],
      artifact: {
        id: "gmail-brief-pipeline",
        title: "Gmail → brief pipeline spec",
        content: `GMAIL_FETCH → FILTER → BRIEF_COMPOSE → DRIVE_UPLOAD → SLACK_NOTIFY
scope: label Priority, max 30
output: /Briefs/{date}/brief.md
HITL: T2 — no auto-reply`,
      },
    }),
    buildGuideSection({
      id: "drive-to-report",
      number: "2.2",
      title: "The Drive-to-report workflow",
      subtitle:
        "Folder monitoring → document processing → synthesis → formatted report → save and share",
      takeaway:
        "Drive folder watch replaces local inbox — same document Skills, connector handoff for delivery and sharing.",
      why: "Teams already collaborate in Drive; meeting them there beats forcing local drop zones.",
      paragraphs: [
        [
          s("Trigger: Drive folder X new file event (or poll every 15m with cursor). DOWNLOAD_TO_STAGING_v1 → CLASSIFY_DOC_v1 → EXTRACT_v1 → SYNTH_REPORT_v1 → FORMAT_REPORT_v1 → DRIVE_CREATE_v1 in /Reports/{week}/ + optional share link generation."),
        ],
        [
          s("Reuse Ch 2 document Skills — only ingest/emit change. QA_SKILL reconciles extracted totals before publish."),
        ],
      ],
      workflowSteps: [
        "Pick single Drive intake folder.",
        "Map file types to extract Skills.",
        "QA gate before write to /Reports prod folder.",
        "Share link only after HITL approval.",
      ],
      example: {
        title: "Weekly client folder → report",
        body: "Watch /Clients/Acme/Intake → extract metrics from PDFs + sheets → weekly_acme.md → /Clients/Acme/Reports/ — notify account lead.",
      },
    }),
    buildGuideSection({
      id: "calendar-to-prep",
      number: "2.3",
      title: "The Calendar-to-prep workflow",
      subtitle:
        "Calendar read → context pull from Drive → briefing document → pre-meeting notification",
      takeaway:
        "Prep doc per meeting — attendees, agenda, linked Drive files, open questions — delivered 30 min before start.",
      why: "Executives lose prep time searching Drive; calendar-triggered pull assembles context automatically.",
      paragraphs: [
        [
          s("Schedule: every 30m scan calendar for meetings in 45–75 min window. CAL_READ_v1 → MATCH_DRIVE_v1 (search by meeting title / attendee project folder) → PREP_DOC_v1 → DRIVE_WRITE_v1 + SLACK_DM_v1 to owner."),
        ],
        [
          s("Exclude all-day and focus blocks. Max 8 meetings per scan — overflow to digest. Never include confidential calendar notes in shared prep without classification check."),
        ],
      ],
      workflowSteps: [
        "Connect Calendar read-only.",
        "Define Drive search heuristics per team.",
        "Template PREP_DOC with fixed sections.",
        "Pilot DM-to-self before team DMs.",
      ],
      artifact: {
        id: "prep-doc-template",
        title: "Meeting prep doc template",
        content: `# Prep: {meeting_title}
## When / who
## Goal
## Linked files (Drive)
## Last decisions
## Open questions
## Suggested talking points`,
      },
    }),
    buildGuideSection({
      id: "crm-to-outreach",
      number: "2.4",
      title: "The CRM-to-outreach workflow",
      subtitle:
        "CRM read → context assembly → personalised draft → queue for review → send on approval",
      takeaway:
        "CRM workflow stops at queue — send requires approval.flag per contact; personalisation from CRM fields + style card only.",
      why: "CRM write/send automation without approval is a compliance and brand disaster — queue is the product.",
      paragraphs: [
        [
          s("Nodes: CRM_FETCH_v1 (segment: stale 14d, max 20) → CONTEXT_ASSEMBLE_v1 (deal history, last touch) → DRAFT_OUTREACH_v1 → QUEUE_REVIEW_v1 (review.md per contact) → optional CRM_SEND_v1 only if approval/{contact_id}.flag exists."),
        ],
        [
          s("Log segment criteria in manifest for audit. Banned: auto-send to enterprise tier accounts — route to human only."),
        ],
      ],
      workflowSteps: [
        "CRM read-only OAuth; document segment SQL-like criteria.",
        "Draft to queue folder only — week 1–4.",
        "Approval flag per contact after manager review.",
        "Enable send node only with legal sign-off.",
      ],
    }),
    buildGuideSection({
      id: "slack-to-summary",
      number: "2.5",
      title: "The Slack-to-summary workflow",
      subtitle:
        "Channel monitoring → message extraction → daily summary → formatted report → posted back to Slack",
      takeaway:
        "Summarise allowlisted channels to one digest — post to #summary, not threads; redact secrets and HR channels.",
      why: "Channel overload hurts remote teams; daily digest restores signal if boundaries are strict.",
      paragraphs: [
        [
          s("SLACK_READ_v1 (#product, #sales — allowlist only, 24h window, max 500 messages) → EXTRACT_THREADS_v1 → DAILY_SUMMARY_v1 → FORMAT_DIGEST_v1 → SLACK_POST_v1 (#daily-digest). Exclude DMs and #random by policy."),
        ],
        [
          s("Include 'decisions' and 'action items' sections with message permalinks. On rate limit, defer post + notify ops."),
        ],
      ],
      workflowSteps: [
        "IT approves channel allowlist.",
        "Bot scoped to read allowlist + post digest channel.",
        "Schedule 5pm local; test with quiet channel.",
        "Monthly review for leaked sensitive content.",
      ],
      artifact: {
        id: "slack-digest-template",
        title: "Slack daily digest template",
        content: `*Daily digest — {date}*
*Decisions* (with links)
*Action items*
*Themes*
*Volume:* N messages across M channels`,
      },
    }),
    buildGuideSection({
      id: "github-to-update",
      number: "2.6",
      title: "The GitHub-to-update workflow",
      subtitle:
        "Repository monitoring → change detection → plain-language summary → stakeholder update",
      takeaway:
        "Translate commits and PRs for non-engineers — schedule after standup, post to Slack or Drive, link to GitHub.",
      why: "Founders and PMs want shipping visibility without living in git; this bridges engineering and ops.",
      paragraphs: [
        [
          s("GITHUB_FETCH_v1 (repos allowlist, since last_run) → DIFF_SUMMARISE_v1 (plain language, no jargon) → STAKEHOLDER_UPDATE_v1 → SLACK_POST_v1 (#shipping) or DRIVE_WRITE for board folder."),
        ],
        [
          s("Filter bots and dependency bumps optional. Include 'user-visible changes' section. Cowork complements Claude Code — does not replace engineering tools."),
        ],
      ],
      workflowSteps: [
        "Allowlist 1–3 repos for pilot.",
        "Store cursor commit SHA in manifest.",
        "Schedule daily 9am after US standup.",
        "PM reviews before board variant posts.",
      ],
      example: {
        title: "GITHUB_SHIPPING_DIGEST_v1",
        body: "Last 24h: 12 PRs merged — highlights checkout fix, new export API; links to PRs; 'no customer-facing changes' when true.",
      },
    }),
    buildGuideSection({
      id: "multi-source-intelligence",
      number: "2.7",
      title: "The multi-source intelligence workflow",
      subtitle:
        "Web search + Drive + Slack → synthesis → briefing → delivery",
      takeaway:
        "Intel pipeline combines connectors — diff-based fetches, single synthesis Skill, one delivery path.",
      why: "Leadership briefs need external news + internal docs + team signal — multi-source is the capstone connected workflow.",
      paragraphs: [
        [
          s("Parallel fetch: WEB_SCAN_v1 (allowlist) || DRIVE_FETCH_v1 (intel folder) || SLACK_READ_v1 (#competitive). JOIN_v1 → SYNTH_INTEL_v1 → FORMAT_BRIEF_v1 → DRIVE_WRITE + SLACK_NOTIFY. Extends Ch 3 §3.6 with connectors."),
        ],
        [
          s("Citations required for web; internal refs link Drive/Slack. QA checks source count ≥ 3 before notify."),
        ],
      ],
      workflowSteps: [
        "Build each fetch branch with manifest handoffs.",
        "JOIN then single SYNTH Skill — avoid duplicate narratives.",
        "Schedule 5:30am; condition force_run for quiet days.",
        "HITL on external-forward variant only.",
      ],
      artifact: {
        id: "multi-source-pipeline",
        title: "Multi-source intel pipeline",
        content: `(WEB_SCAN || DRIVE_FETCH || SLACK_READ) → JOIN → SYNTH → QA → BRIEF → DELIVER
citations: required for web
schedule: 05:30 weekdays`,
      },
    }),
    buildGuideSection({
      id: "build-connected-workflow",
      number: "2.8",
      title: "Building your own connected workflow",
      subtitle:
        "The design process for a custom multi-connector workflow — from use case to running automation",
      takeaway:
        "Use case → systems map → TAR per Skill → connector allowlists → staging data flow → test → schedule — the same discipline as file-only, with connector reliability layered in.",
      why: "Custom workflows fail when teams skip the design doc and wire connectors ad hoc in the builder.",
      paragraphs: [
        [
          s("Design process: (1) One-sentence outcome + non-goals. (2) System diagram — which connectors read/write. (3) TAR per Skill node. (4) CONNECTOR_ALLOWLIST.md. (5) Staging + manifest schema. (6) Test matrix including outage simulation. (7) Schedule with degraded mode. (8) 30-day audit review."),
        ],
        [
          s("Start read-only across all connectors for v1; add write nodes as separate workflow version v2 after HITL proof."),
        ],
      ],
      workflowSteps: [
        "Fill CONNECTED_WORKFLOW_DESIGN.md (artifact below).",
        "IT + security review on allowlists.",
        "Implement read path end-to-end.",
        "Add writes one connector at a time.",
        "Promote to schedule after five clean runs.",
      ],
      artifact: {
        id: "connected-workflow-design",
        title: "Connected workflow design template",
        content: `# Workflow name / owner / version

## Outcome (1 sentence)
## Non-goals

## Systems map
read: [gmail, drive, ...]
write: [drive, slack, ...]

## Pipeline DAG
(node list + handoff manifest schema)

## Connector allowlists
(per connector: scopes, folders, channels)

## Reliability
retry / degraded / catch-up SOP

## Security
HITL tier per write; data classification

## Test log
| run_id | case | pass |`,
      },
    }),
  ],
};
