import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_ECOSYSTEM: GuideConcept = {
  number: 2,
  title: "The Anthropic Ecosystem Map",
  subtitle:
    "Every Claude product and how they connect — the landscape you need to understand before choosing where to work",
  sections: [
    buildGuideSection({
      id: "claude-ai",
      number: "2.1",
      title: "Claude.ai",
      subtitle: "The consumer interface and what it gives you that the API does not",
      takeaway:
        "Claude.ai is the fastest path from idea to result — Projects, artifacts, vision, and team plans without writing code. It is not the same as embedding Claude in your product.",
      why: "Many teams conflate 'we use Claude' with 'we have Claude in our app.' Claude.ai is for human-in-the-loop work; the API is for automated systems. Choosing wrong blocks procurement and architecture.",
      paragraphs: [
        [
          s("Claude.ai provides "),
          x("Projects", "Persistent workspaces with attached files, instructions, and shared team context."),
          s(
            ", conversation history, file upload, analysis artifacts (side-by-side outputs), and optional team billing. You get Anthropic's safety and model updates without managing API keys.",
          ),
        ],
        [
          s("What the API adds: programmatic scale, custom UI, integration with your auth and data, fine-grained logging, and model routing in your backend. What Claude.ai adds: zero engineering, faster iteration for knowledge workers, built-in sharing."),
        ],
      ],
      workflowSteps: [
        "Use Claude.ai for: strategy docs, ad-hoc analysis, personal productivity, pilot before API investment.",
        "Use API for: customer-facing features, batch jobs, strict data residency pipelines.",
        "Run a 2-week pilot in Claude.ai before scoping an API integration — same models, lower setup cost.",
      ],
      example: {
        title: "Product team — Claude.ai as spec lab before API",
        body: "A B2B product team prototyped an AI summary feature entirely in Claude Projects with sample customer PDFs. PM validated UX and failure modes in two weeks. Engineering then replicated the prompt chain via API with confidence — avoiding a 3-month build based on assumptions.",
      },
    }),
    buildGuideSection({
      id: "claude-api",
      number: "2.2",
      title: "Claude API",
      subtitle:
        "What it unlocks for builders and sophisticated users — and when you need it",
      takeaway:
        "The API turns Claude into infrastructure — embeddable, metered, observable. You need it when Claude must run inside your product, on your schedule, at your scale.",
      why: "API literacy separates teams that 'use AI' from teams that ship AI features. This is the builder surface.",
      paragraphs: [
        [
          s("The "),
          x("Messages API", "Send system + user messages; receive completions — the core integration pattern."),
          s(
            " supports streaming, tool use, vision, PDF input, prompt caching, and batch processing. You control temperature, max tokens, and model ID per request.",
          ),
        ],
        [
          s("Enterprise patterns: "),
          x("prompt caching", "Reuse long system prompts cheaply — critical for agents with big instructions."),
          s(
            " for stable system prompts; Batch API for overnight jobs at discount; VPC / Bedrock / Vertex for residency requirements.",
          ),
        ],
      ],
      workflowSteps: [
        "Start with Messages API + one Sonnet model before adding tools.",
        "Add tool definitions only when you need live data — each tool is maintenance.",
        "Instrument: log prompt hash, model, latency, token count per request from day one.",
      ],
      artifact: {
        id: "api-minimal-call",
        title: "Minimal API request pattern (conceptual)",
        description: "Structure every production integration around this shape.",
        content: `POST /v1/messages
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1024,
  "system": "You are... [stable instructions — cache this]",
  "messages": [
    { "role": "user", "content": "User input + retrieved context" }
  ],
  "tools": [ /* only when needed */ ]
}

// Always log: request_id, model, input_tokens, output_tokens, latency_ms`,
      },
    }),
    buildGuideSection({
      id: "claude-code",
      number: "2.3",
      title: "Claude Code",
      subtitle:
        "The agentic coding tool that lives in your terminal — what it is and what it is not",
      takeaway:
        "Claude Code is an agent that reads your repo, runs commands, and edits files — not a chat window in your IDE. It ships software, not snippets.",
      why: "Developers who treat it as autocomplete underuse it; PMs who ignore it miss how eng velocity is changing.",
      paragraphs: [
        [
          s("Claude Code operates with "),
          x(
            "agentic loops",
            "Plan → act (edit file, run test) → observe output → repeat until task complete.",
          ),
          s(
            " in your repository context. It can run tests, fix failures, and open PRs — bounded by permissions you grant.",
          ),
        ],
        [
          s("It is not a replacement for code review or architecture ownership. Best for: scoped tasks with clear success criteria (add endpoint, fix test, refactor module). Risky for: greenfield architecture without human design doc."),
        ],
      ],
      workflowSteps: [
        "Write a TASK.md with acceptance criteria before invoking Claude Code.",
        "Scope to one module or feature branch — not 'improve the whole codebase'.",
        "Require human review on all diffs; run CI before merge.",
      ],
      example: {
        title: "Fintech startup — 3-day API migration",
        body: "Team migrated 12 REST endpoints to a new auth middleware using Claude Code with a written migration checklist. Human architect approved plan; agent executed repetitive edits; engineer reviewed 100% of diffs. Calendar estimate was 2 weeks.",
      },
    }),
    buildGuideSection({
      id: "claude-chrome",
      number: "2.4",
      title: "Claude in Chrome",
      subtitle:
        "The browser agent that can see and act on what you're viewing",
      takeaway:
        "Claude in Chrome is a browser extension agent — reads DOM, navigates multi-step flows, extracts tables, assists forms — with per-action approval on sensitive steps.",
      why: "Huge category of knowledge work is trapped in web UIs without APIs. Browser agents unlock ops, procurement, research, and legacy admin workflows.",
      paragraphs: [
        [
          s("Install Claude in Chrome from official channel. Sign in with work account per policy. The extension gives Claude "),
          x(
            "DOM access",
            "Read page structure, click elements, fill fields — subject to your confirmations and site permissions.",
          ),
          s(
            " on tabs you authorise. Use cases: competitive research, government portals, vendor quotes, internal admin tools without APIs, SSO-gated dashboards (where policy allows).",
          ),
        ],
        [
          s("Workflow pattern: (1) open target tab, (2) prompt with extraction schema, (3) approve each navigation/submit, (4) export artifact CSV/markdown. Never auto-submit payments, legal agreements, or production config."),
        ],
        [
          s("Blockers: CAPTCHA, hardware 2FA, heavy JS SPAs, cross-origin iframes — document 'Chrome can't' list per portal. Supplement with manual upload or MCP when API exists."),
        ],
      ],
      workflowSteps: [
        "List 5 repetitive browser tasks (expense, portal upload, competitor pricing).",
        "Pilot lowest-risk extraction-only task with step approval.",
        "Document portals: WORKS | PARTIAL | BLOCKED (CAPTCHA/2FA).",
        "Pair with Ch 9.5.3 portal workflow and Ch 3 vision for screenshot fallback.",
      ],
      example: {
        title: "Competitive intel — pricing page extraction",
        body: "PM used Chrome to extract visible pricing tiers from three competitor sites into a comparison artifact. No form submits. Citations included URL + capture time. Analyst verified numbers against screenshots before board deck.",
      },
      artifact: {
        id: "chrome-safety-checklist",
        title: "Claude in Chrome safety checklist",
        content: `□ Work account / policy allows extension?
□ Low-risk or sandbox login — not prod admin?
□ Prompt forbids submit without approval?
□ Output schema defined (table columns)?
□ CAPTCHA/2FA exit plan documented?
□ Sensitive pages excluded (banking, HR)?`,
      },
    }),
    buildGuideSection({
      id: "claude-office",
      number: "2.5",
      title: "Claude in Excel and PowerPoint",
      subtitle:
        "The document agents and what office automation actually looks like in practice",
      takeaway:
        "Office integrations (Excel, PowerPoint, Word plugins + document Skills) meet users where models and decks live — Claude as analyst inside the file with formula/deck verification discipline.",
      why: "Finance and strategy teams live in Excel/PPT. Adoption follows the file format; document Skills extend automation to native Office file generation.",
      paragraphs: [
        [
          s("Excel plugin: formula debugging, scenario modelling, variance commentary, range-scoped analysis — select data range explicitly, never whole workbook with hidden sheets. PowerPoint: storyline, speaker notes, slide condensation. Word: contract structure, redline prep (human counsel signs)."),
        ],
        [
          s("Document Agent Skills (pptx, xlsx, docx, pdf) in Claude.ai/Code generate native files — pair with brand template in Project. Limitation: complex macros/VBA need human review."),
        ],
        [
          s("Verification rule: Claude drafts commentary; human owns every number touching external reporting. Export PDF audit trail for board materials."),
        ],
      ],
      workflowSteps: [
        "Select only the data range Claude should see.",
        "Ask for formulas + plain-English logic explanation.",
        "For decks: enable pptx skill → QA in PowerPoint → PDF export.",
        "Cross-reference Ch 8.5.2 pre-built document skills.",
      ],
      example: {
        title: "FP&A team — monthly board pack",
        body: "FP&A reduced board pack prep from 2 days to 6 hours: Claude in Excel drafted variance commentary from structured P&L export; human verified numbers; Claude in PowerPoint tightened narrative on 12 slides. Numbers never unverified.",
      },
    }),
    buildGuideSection({
      id: "cowork",
      number: "2.6",
      title: "Cowork",
      subtitle:
        "The desktop automation layer — where it fits in the ecosystem and who it is for",
      takeaway:
        "Cowork is Anthropic's desktop automation layer — multi-app workflows with full MCP and plugin support when no single integration or browser tab is enough.",
      why: "Ops, EA, and admin roles lose hours copying between email, files, spreadsheets, and calendar — Cowork reasons across apps; Zapier triggers on events.",
      paragraphs: [
        [
          s("Cowork targets "),
          x(
            "cross-application tasks",
            "Workflows spanning email, spreadsheets, file system, browser, and calendar — common in ops, EA, and admin roles.",
          ),
          s(
            " without clean APIs. Supports MCP connectors and plugins (Ch 8.5.7) like Claude Code. Compare: Cowork = UI reasoning across desktop; Zapier = event-triggered recipes; Chrome = single-browser scope.",
          ),
        ],
        [
          s("Example flow: summarise Outlook thread → update Excel tracker → save attachment to SharePoint → calendar hold for follow-up — human approves each write step."),
        ],
      ],
      workflowSteps: [
        "Map workflow as numbered steps across apps before automating.",
        "Install required Cowork plugin bundle.",
        "Pilot read-only path, then add writes with checkpoints.",
        "See Ch 9.5.4 for full Cowork workflow pattern.",
      ],
    }),
    buildGuideSection({
      id: "mcp-ecosystem",
      number: "2.7",
      title: "The MCP ecosystem",
      subtitle:
        "How third-party tools connect into Claude's reasoning — the extensibility layer",
      takeaway:
        "Model Context Protocol (MCP) lets Claude call Notion, GitHub, Slack, databases — with your credentials — in a standard way. It is the USB-C of agent tools.",
      why: "Without MCP, every integration is bespoke. With MCP, your connector story scales — critical for enterprise 'Claude everywhere' strategies.",
      paragraphs: [
        [
          x(
            "MCP",
            "Anthropic-led open protocol: servers expose tools/resources; Claude clients discover and invoke them.",
          ),
          s(
            " servers run locally or remote. Claude Desktop and Claude Code consume MCP today; API tool use is the parallel for custom backends.",
          ),
        ],
        [
          s("PM questions for MCP rollouts: which systems are read vs write? audit log per tool call? who approves new servers on employee laptops?"),
        ],
      ],
      workflowSteps: [
        "Install one read-only MCP server (e.g. GitHub read) on a pilot machine.",
        "Run 10 real queries; log failures and latency.",
        "Draft MCP_ALLOWLIST.md before company-wide rollout.",
      ],
      artifact: {
        id: "mcp-evaluation-checklist",
        title: "MCP server evaluation checklist",
        content: `Before approving an MCP server for team use:

□ Read-only or write? If write, what can it delete?
□ Where do credentials live? (env vars, OS keychain)
□ Is traffic logged with user ID + timestamp?
□ Vendor maintained? Last update date?
□ Test: 5 queries that match our real workflows
□ Fallback when server is down — does work stop?`,
      },
    }),
    buildGuideSection({
      id: "choosing-surface",
      number: "2.8",
      title: "Choosing your Claude surface",
      subtitle: "The decision framework for which product to use for which task",
      takeaway:
        "Pick surface by: who acts (human vs software), data sensitivity, repeatability, and integration depth — not by which product launched most recently.",
      why: "Tool sprawl kills ROI. One decision framework prevents 'everyone picked a different Claude product.'",
      paragraphs: [
        [
          s("Human, exploratory, document-heavy → Claude.ai Projects + Skills. Developer shipping → API/Bedrock/Vertex. Repo engineering → Claude Code + plugins. Web-only legacy → Chrome. Finance decks → Excel/PPT + document skills. Cross-app desktop → Cowork. Live systems → MCP + connectors. Vision/screenshots → Claude.ai upload. Hard reasoning → extended thinking."),
        ],
      ],
      workflowSteps: [
        "For each recurring task, fill: Actor (human/bot), Data class (public/internal/secret), Frequency (daily/once).",
        "Match to surface using the matrix in this section.",
        "Revisit quarterly — Anthropic ships fast; last quarter's answer may change.",
      ],
      example: {
        title: "50-person agency — surface map on one page",
        body: "Creative: Claude.ai for briefs. Dev: Claude Code + API for client portals. Account: Chrome for competitor audits. Finance: Excel plugin. Leadership banned 'random API keys' — central IT runs one API account with logging. Adoption went up because each role had a default front door.",
      },
    }),
  ],
};
