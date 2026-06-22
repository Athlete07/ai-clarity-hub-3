import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_CONNECTORS: GuideConcept = {
  number: 2,
  title: "Connectors — The Pre-Built Integration Layer",
  subtitle:
    "The MCP connectors available in Claude.ai — what each does, how to connect it, and how to use it effectively",
  sections: [
    buildGuideSection({
      id: "google-workspace",
      number: "2.1",
      title: "Google Workspace connectors",
      subtitle:
        "Gmail, Calendar, Drive — what Claude can do with access to your Google stack and how to set it up",
      takeaway:
        "Google connectors let Claude read/search Drive, summarise Gmail threads, read Calendar, and draft emails — OAuth scoped minimally; human sends external mail.",
      why: "Knowledge work lives in Google for many teams — connector removes download-upload loops and stale exports.",
      paragraphs: [
        [
          s("Gmail: search threads, summarise, classify priority, draft replies in Project voice — never auto-send v1. Calendar: list conflicts, propose slots, prep meeting briefs. Drive: search by name/content, read Docs/Sheets/PDFs, summarise folders."),
        ],
        [
          s("Setup: Claude.ai → Settings → Integrations → Google → OAuth → deselect unused scopes. Test prompts: 'Find [doc] in Drive', 'Summarise thread with [person]', 'What's on calendar Tuesday?'"),
        ],
        [
          s("Combine with Ch 9.2.2 email workflow and Ch 7.3.3 meeting intelligence. Write scopes (draft create) only after read SOP stable."),
        ],
      ],
      workflowSteps: [
        "Connect Drive first — lowest risk.",
        "Test: 'Find Q2 strategy doc and summarise'.",
        "Add Gmail when draft workflow defined — human sends.",
      ],
      example: {
        title: "Founder — board prep from Drive + Calendar",
        body: "Claude pulled board deck from Drive, cross-checked calendar for conflict on board date, listed open questions from last Gmail thread with execs. Founder reviewed 15 minutes instead of 90.",
      },
    }),
    buildGuideSection({
      id: "productivity-pm-tools",
      number: "2.2",
      title: "Productivity and project management connectors",
      subtitle:
        "Notion, Asana, Jira, Linear — how Claude reads, creates, and updates your work management systems",
      takeaway:
        "Notion, Asana, Jira, Linear, Confluence connectors ground Claude in live tasks and specs — read default; write with ticket template and human approval.",
      why: "Stale uploaded exports die overnight; connectors keep truth in the system of record.",
      paragraphs: [
        [
          s("Notion: search pages, read databases, create rows (approved). Jira/Linear: fetch issue, sprint summary, create issue from artifact. Asana: task lists and status. Confluence: spec search with page URL cite."),
        ],
        [
          s("Prompt pattern: 'Cite issue/page ID. Before create/update, show draft fields and wait for confirmation.' Sandbox project for write pilots."),
        ],
        [
          s("See Ch 7.4.3 for Figma + Atlassian combined workflows. Partner Skills may augment connector (e.g. Notion skill)."),
        ],
      ],
      workflowSteps: [
        "Connect read access to one workspace.",
        "Ask status questions with ticket IDs.",
        "Enable create/update only after write SOP exists.",
      ],
    }),
    buildGuideSection({
      id: "communication-connectors",
      number: "2.3",
      title: "Communication connectors",
      subtitle:
        "Slack, Teams — how Claude accesses conversation history, drafts messages, and surfaces information from team channels",
      takeaway:
        "Slack and Microsoft Teams connectors search channel history, draft posts, and surface decisions — channel allowlists and draft-only default.",
      why: "Channel noise is huge — scope channels, time windows, and confidentiality in Project instructions.",
      paragraphs: [
        [
          s("Slack: search #channels, thread summaries, draft standup posts. Teams: channel read, meeting chat context (per plan). Uses: catch-up, decision archaeology, incident timeline."),
        ],
        [
          s("Policy: no connector on #hr-confidential, #legal, or M&A channels unless compliance signs. Draft-only — human posts. Redact customer names in external shares."),
        ],
      ],
      workflowSteps: [
        "Allowlist channels in Project instructions.",
        "Default to draft-only — human posts.",
        "Redact external sharing of Slack excerpts.",
      ],
    }),
    buildGuideSection({
      id: "crm-sales",
      number: "2.4",
      title: "CRM and sales connectors",
      subtitle:
        "Salesforce, HubSpot — what Claude can do with access to your revenue data",
      takeaway:
        "CRM connectors enable account briefs, pipeline summaries, and draft follow-ups grounded in live opportunity data — PII and accuracy rules mandatory.",
      why: "Wrong CRM write loses deals and violates process; read-first is default.",
      paragraphs: [
        [
          s("Read: opportunity stage, last activity, contacts. Write: log note, update stage — often restricted to sales ops. Never auto-send customer email from CRM tool without review."),
        ],
      ],
      workflowSteps: [
        "Connect sandbox CRM for pilots.",
        "Template account brief prompt with cite fields.",
        "Sales manager approves write tool enablement.",
      ],
    }),
    buildGuideSection({
      id: "developer-connectors",
      number: "2.5",
      title: "Developer tool connectors",
      subtitle:
        "GitHub, GitLab — how Claude accesses repositories, reviews code, and creates issues",
      takeaway:
        "Git connectors let Claude search repos, read files, summarise PRs, open issues — pair with Claude Code for agentic edits vs read-only review in chat.",
      why: "Engineering workflows need live repo truth, not pasted snippets.",
      paragraphs: [
        [
          s("Uses: 'summarise open PRs', 'find usages of deprecated API', 'draft issue from bug report'. GitLab: merge requests, issues, CI status — same patterns as GitHub. Writes (create issue, comment, MR note) need branch protection culture."),
        ],
        [
          s("Prefer Claude Code for multi-file changes; GitHub connector for visibility and issue tracking."),
        ],
      ],
      workflowSteps: [
        "Scope OAuth to required repos.",
        "Read-only trial on one repo.",
        "Issue creation template in Project.",
      ],
    }),
    buildGuideSection({
      id: "data-analytics",
      number: "2.6",
      title: "Data and analytics connectors",
      subtitle:
        "How Claude connects to databases, BI tools, and analytics platforms",
      takeaway:
        "Data connectors range from read-only SQL/BigQuery to BI exports — SQL injection and row-level security are engineering concerns, not prompt tricks.",
      why: "Executives ask 'what's the number' — connector must respect ACLs, not bypass them.",
      paragraphs: [
        [
          s("Patterns: read-only DB user, predefined queries as tools, BI snapshot resources. File storage: Dropbox, Box connectors (where available) for search/read without manual download — same least-privilege rules as Drive."),
        ],
        [
          s("Avoid giving Claude arbitrary SQL on production without guardrails."),
        ],
        [
          s("Always show query or source in output for verification."),
        ],
      ],
      workflowSteps: [
        "Read replica + read-only creds.",
        "Whitelist views or saved queries.",
        "Human validates numbers before decks.",
      ],
    }),
    buildGuideSection({
      id: "first-connector-setup",
      number: "2.7",
      title: "Setting up your first connector",
      subtitle:
        "The step-by-step process for connecting, authorising, and testing an MCP connector",
      takeaway:
        "First connector: pick low-risk read-only → authorise minimum scope → run 3 test prompts → document in Project → expand scope only after pass.",
      why: "Rushing write access on first connect causes incidents.",
      paragraphs: [
        [
          s("Steps: Settings/Integrations → choose connector → OAuth/API key → accept scopes consciously → enable in chat → test retrieval → log failures → add to Project INDEX."),
        ],
      ],
      workflowSteps: [
        "Choose Drive or GitHub read as first connector.",
        "Run test suite: find, summarise, cite.",
        "Document connector + scope in team wiki.",
        "Revoke and reconnect if wrong scope clicked.",
      ],
      artifact: {
        id: "connector-setup-runbook",
        title: "First connector setup runbook",
        content: `1. Select connector (read-only preferred)
2. Review OAuth scopes — deselect unused
3. Authorise in sandbox account if available
4. Test prompts (3): find / summarise / cite
5. Add to Project INTEGRATIONS.md
6. Team announcement with do/don't
7. Schedule 30-day scope review`,
      },
    }),
    buildGuideSection({
      id: "connector-combinations",
      number: "2.8",
      title: "Connector combinations",
      subtitle:
        "The multi-tool workflows that become possible when Claude can access multiple systems simultaneously",
      takeaway:
        "Multi-connector power is orchestration — Claude plans across Gmail, Drive, Notion, GitHub in one thread when hosts allow multiple active servers.",
      why: "Single-connector thinking underuses MCP; combinations are the productivity jump.",
      paragraphs: [
        [
          s("Examples: GitHub issue → Notion spec link → Slack digest. Calendar + Gmail + Drive for meeting prep. Jira + GitHub for sprint review."),
        ],
        [
          s("Design: explicit workflow prompt naming systems in order; human checkpoint between write steps."),
        ],
      ],
      workflowSteps: [
        "Enable two read connectors.",
        "Run one cross-system test workflow.",
        "Add write on one system only after read chain stable.",
      ],
      example: {
        title: "PM — Linear + Notion + Slack",
        body: "Monday brief: Claude pulled sprint from Linear, spec gaps from Notion, blockers from #eng Slack. One artifact for standup. PM validated IDs — 20 min saved, no manual tab switching.",
      },
    }),
  ],
};
