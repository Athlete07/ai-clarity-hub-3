import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_MCP_COWORK_CONTEXT: GuideConcept = {
  number: 1,
  title: "MCP in the Cowork Context",
  subtitle:
    "How MCP works inside Cowork — the integration layer that connects your automation to external systems",
  sections: [
    buildGuideSection({
      id: "mcp-extends-cowork",
      number: "1.1",
      title: "How MCP extends Cowork",
      subtitle:
        "From file automation to connected system automation — the capability expansion MCP enables",
      takeaway:
        "MCP turns Cowork from a local file COO into a connected ops layer — read Gmail, write Drive, post Slack — under the same Skill contracts and run history.",
      why: "Teams plateau on folder automation; MCP is how Cowork participates in the systems where work actually lives.",
      paragraphs: [
        [
          s("Chapters 1–3 automated your disk. "),
          x(
            "MCP",
            "Model Context Protocol — a standard way for Claude to call tools on external systems via connectors.",
          ),
          s(
            " extends Cowork to SaaS and APIs: email, calendar, CRM, chat, repos. Skills gain tool permissions per connector; workflows chain filesystem steps with connector steps in one pipeline.",
          ),
        ],
        [
          s("The mental model shift: from "),
          x("export → process → save", "Manual CSV download, local transform, upload."),
          s(" to "),
          x("pull → process → push", "Connector fetch, Skill transform, connector write — audited in run history."),
          s(". File paths may still be staging; connectors are production handoffs."),
        ],
      ],
      workflowSteps: [
        "List top 5 systems where work stalls outside local folders.",
        "Mark read-only vs write connectors per system.",
        "Pick one read-only pilot workflow before any write connector.",
        "Document expansion in CONNECTOR_ROADMAP.md.",
      ],
      example: {
        title: "Before vs after MCP",
        body: "Before: export Gmail labels to CSV nightly, process locally, paste summary to Slack. After: GMAIL_READ_v1 → PRIORITY_FILTER_v1 → BRIEF_COMPOSE_v1 → DRIVE_WRITE_v1 + SLACK_NOTIFY_v1 — one pipeline, one run_id.",
      },
    }),
    buildGuideSection({
      id: "available-connectors",
      number: "1.2",
      title: "Available connectors in Cowork",
      subtitle:
        "Which MCP connectors work with Cowork and how they differ from Claude.ai connectors",
      takeaway:
        "Cowork connectors run unattended — favour stable, scoped, auditable integrations over experimental chat-only plugins.",
      why: "Assuming Claude.ai connector parity causes failed pilots — Cowork needs connectors that survive schedules and credential persistence.",
      paragraphs: [
        [
          s("Common Cowork connector families: "),
          x("Google Workspace", "Gmail, Drive, Calendar — OAuth, domain-wide policies."),
          s(", "),
          x("Slack", "Read channels, post messages, DM — bot token scoped to channels."),
          s(", "),
          x("Microsoft 365", "Outlook, OneDrive, Teams — parallel to Google Workspace; enterprise SSO."),
          s(", "),
          x("Dev / data", "GitHub, Notion, databases — repo and page read, issue create."),
          s(", "),
          x("Claude in Chrome", "Browser fallback when no connector — interactive only by default; Ch 7 §1.5."),
        ],
        [
          s("Differences from Claude.ai: Cowork connectors persist for "),
          x("scheduled runs", "Credentials and allowlists must survive without browser session."),
          s(", log to "),
          x("run history", "Each tool call should be attributable to workflow + run_id."),
          s(", and respect "),
          x("org IT policy", "Admin approval, DLP, and channel allowlists are stricter in production."),
        ],
      ],
      workflowSteps: [
        "Inventory connectors in Cowork settings vs Claude.ai.",
        "Note read vs write capability per connector.",
        "Align with IT on approved connector list.",
        "Start pilot on IT-approved read-only connector.",
      ],
      artifact: {
        id: "connector-inventory",
        title: "Connector inventory template",
        content: `| Connector | Cowork | Claude.ai | Read | Write | IT approved |
|-----------|--------|-----------|------|-------|-------------|
| Gmail     | yes    | yes       | yes  | draft | pending     |
| Slack     | yes    | partial   | yes  | post  | yes         |`,
      },
    }),
    buildGuideSection({
      id: "setting-up-connectors",
      number: "1.3",
      title: "Setting up connectors in Cowork",
      subtitle:
        "Authentication, permissions, and testing — the connection workflow",
      takeaway:
        "Connect → scope minimally → test manual Skill → document allowlists → then schedule — never reverse the order.",
      why: "Over-scoped OAuth on day one triggers security review shutdowns; under-tested connectors fail silently on first cron.",
      paragraphs: [
        [
          s("Connection workflow: (1) Admin or user OAuth in Cowork connector settings. (2) Define "),
          x("scope allowlist", "Gmail: label X only; Slack: #ops-automation only; Drive: folder ID."),
          s(". (3) Create TEST_CONNECTOR_v1 Skill — one read, one write to sandbox destination. (4) Five manual runs (Ch 2 §1.8). (5) Attach to workflow."),
        ],
        [
          s("Separate service accounts where policy allows — automation identity distinct from personal inbox. Document token owner and renewal date."),
        ],
      ],
      workflowSteps: [
        "Complete OAuth with least scope.",
        "Record connector_id and allowed resources in SKILL_SPEC.",
        "Run TEST_CONNECTOR_v1 read + write to sandbox.",
        "Security sign-off before unattended write.",
      ],
      artifact: {
        id: "connector-setup-checklist",
        title: "Connector setup checklist",
        content: `[ ] OAuth complete — least privilege
[ ] Allowlist documented (folders, labels, channels)
[ ] TEST_CONNECTOR_v1 five passes
[ ] Credential owner + renewal date
[ ] IT approval reference #
[ ] Sandbox write path verified`,
      },
    }),
    buildGuideSection({
      id: "connector-reliability",
      number: "1.4",
      title: "Connector reliability in automated workflows",
      subtitle:
        "What happens when an external service is unavailable during a scheduled Skill run",
      takeaway:
        "Design for outage — retry with backoff, degrade gracefully, never pretend success when the API never responded.",
      why: "Gmail or Slack outages during Monday brief pipelines are inevitable; reliability policy is part of connector design.",
      paragraphs: [
        [
          s("Failure modes: "),
          x("HTTP 5xx / timeout", "Transient — retry 2× with exponential backoff."),
          s(", "),
          x("401 / 403", "Credential or scope — fail loud, no retry, notify owner."),
          s(", "),
          x("429 rate limit", "Throttle — respect Retry-After, queue remainder."),
          s(", "),
          x("partial read", "Pagination interrupted — write PARTIAL.json + flag."),
        ],
        [
          s("Degraded mode: if Gmail unavailable, workflow still writes brief from Drive + local inputs; manifest notes missing_gmail: true. Never post empty brief to Slack as success."),
        ],
      ],
      workflowSteps: [
        "Define per-connector retry policy in PIPELINE_SPEC.",
        "Implement degraded path for critical workflows.",
        "Test by revoking sandbox token — expect clean fail.",
        "Document manual catch-up when API was down.",
      ],
      artifact: {
        id: "connector-reliability-policy",
        title: "Connector reliability policy",
        content: `transient: retry 2, backoff 30s/120s
auth_fail: stop, notify #ops, no retry
rate_limit: wait Retry-After, max 3 waits
degraded: continue without connector X, flag manifest`,
      },
    }),
    buildGuideSection({
      id: "data-flow-connectors",
      number: "1.5",
      title: "Data flow across connectors",
      subtitle:
        "How data moves from an external system through Cowork, through Claude, and back out to a destination",
      takeaway:
        "Data flows: connector fetch → staging artifact → Skill/Claude transform → connector push — never let raw API blobs skip staging.",
      why: "Direct passthrough from API to API without local staging loses audit trail and makes debugging impossible.",
      paragraphs: [
        [
          s("Standard path: "),
          x("FETCH", "Connector returns JSON or files → write ~/Cowork/staging/{run_id}/raw/."),
          s(" → "),
          x("TRANSFORM", "Skills apply TAR; outputs structured json/md."),
          s(" → "),
          x("EMIT", "Connector write or local file + notify."),
          s(". manifest.json lists each hop and byte size — redact PII in logs."),
        ],
        [
          s("Minimise data retention: delete raw/ after successful emit per retention policy. Claude context should reference staging files, not paste entire inboxes into prompts."),
        ],
      ],
      workflowSteps: [
        "Draw data flow diagram for pilot workflow.",
        "Enforce staging folder per run_id.",
        "Log connector call summary in manifest.",
        "Set retention: raw 7d, outputs per compliance.",
      ],
      example: {
        title: "Gmail → brief → Drive flow",
        body: "Gmail API → raw/emails.json → FILTER_v1 → brief.md → Drive API upload to /Briefs/{date}/ → Slack notify with Drive link.",
      },
    }),
    buildGuideSection({
      id: "security-credentials",
      number: "1.6",
      title: "Security and credential management in Cowork MCP",
      subtitle:
        "How Cowork stores and uses API credentials — the security model",
      takeaway:
        "Credentials live in Cowork's secure store — Skills reference connectors by name, never embed secrets in TAR specs.",
      why: "Secrets in Skill markdown end up in git, Slack, and run logs — the fastest path to incident response.",
      paragraphs: [
        [
          s("Rules: no API keys in Skill files; use "),
          x("connector references", "tool: gmail_read with allowlisted label."),
          s("; rotate tokens on schedule; separate prod vs sandbox connectors; revoke on offboarding within 24h."),
        ],
        [
          s("DLP: classify connectors by data sensitivity — customer PII connectors require HITL T2 minimum on writes. Read executive mail only with explicit policy approval."),
        ],
      ],
      workflowSteps: [
        "Audit Skills for hardcoded tokens — remove.",
        "Map connectors to data classification tier.",
        "Calendar quarterly credential rotation.",
        "Offboarding checklist includes Cowork connector revoke.",
      ],
      artifact: {
        id: "connector-security-rules",
        title: "Connector security rules",
        content: `- No secrets in TAR / Skills
- Prod vs sandbox connector profiles
- Write connectors: HITL tier documented
- Revoke tokens on role change
- PII connectors: staging encryption at rest if required`,
      },
    }),
    buildGuideSection({
      id: "rate-limits-quotas",
      number: "1.7",
      title: "Rate limits and API quotas in Cowork workflows",
      subtitle:
        "How to design Skills that respect external service limits — the throttling discipline",
      takeaway:
        "Batch, paginate, cache, and throttle — connector Skills need budgets like token budgets.",
      why: "A scheduled Skill that pages 10,000 emails at 6am gets rate-limited and produces empty briefs — design limits upfront.",
      paragraphs: [
        [
          s("Patterns: "),
          x("pagination caps", "Max N messages per run; remainder next run."),
          s(", "),
          x("incremental sync", "Since last_run_timestamp cursor in manifest."),
          s(", "),
          x("cache", "Store fetched artifacts; diff before re-fetch."),
          s(", "),
          x("stagger", "Do not run Gmail + Drive + Slack heavy jobs at identical minute."),
        ],
        [
          s("Document per-connector QPS budget in WORKFLOW_SOP. On 429, write RATE_LIMITED.json and reschedule +15m — do not hammer API."),
        ],
      ],
      workflowSteps: [
        "Read vendor rate limit docs — note daily + per-minute.",
        "Set max_items per run in Skill Context.",
        "Implement cursor for incremental fetch.",
        "Weekly review connector quota dashboards.",
      ],
      artifact: {
        id: "connector-throttle-spec",
        title: "Connector throttle spec",
        content: `gmail_read: max 50 messages/run, since cursor
drive_list: max 100 files/run
slack_post: max 1 message/run (digest only)
on_429: reschedule +15m, max 3 deferrals`,
      },
    }),
    buildGuideSection({
      id: "auditing-connector-activity",
      number: "1.8",
      title: "Auditing connector activity",
      subtitle:
        "How to review what Cowork accessed, read, and wrote in external systems — the governance layer",
      takeaway:
        "Run history + connector audit log + manifest = who automated what, when, on whose behalf.",
      why: "Compliance and security teams will ask 'what did Cowork touch?' — answer before they ask.",
      paragraphs: [
        [
          s("Audit sources: Cowork run history (workflow, Skill version, status), per-run manifest (connector calls, resource IDs, record counts), external system audit logs (Drive activity, Slack audit). Correlate by "),
          x("run_id", "UUID in manifest and notification template."),
        ],
        [
          s("Monthly governance review: new connectors, scope changes, failed auth, unusual write volume. Export CONNECTOR_AUDIT_SUMMARY for leadership."),
        ],
      ],
      workflowSteps: [
        "Ensure every connector Skill writes manifest footer.",
        "Include run_id in Slack notifications.",
        "Monthly: cross-check Cowork history vs Google/Slack admin logs.",
        "Investigate any write outside allowlist immediately.",
      ],
      artifact: {
        id: "connector-audit-manifest",
        title: "Connector audit manifest footer",
        content: `{
  "run_id": "...",
  "connector_calls": [
    { "connector": "gmail", "op": "list", "scope": "label:Priority", "count": 12 },
    { "connector": "drive", "op": "create", "file_id": "...", "path": "/Briefs/2026-06-22" }
  ]
}`,
      },
    }),
  ],
};
