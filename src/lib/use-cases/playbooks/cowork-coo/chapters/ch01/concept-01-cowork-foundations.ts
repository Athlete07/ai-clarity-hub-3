import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_COWORK_FOUNDATIONS: GuideConcept = {
  number: 1,
  title: "Cowork Foundations",
  subtitle:
    "What Cowork is, what it is not, and why the distinction matters before you spend a minute configuring it",
  sections: [
    buildGuideSection({
      id: "what-cowork-is",
      number: "1.1",
      title: "What Cowork is",
      subtitle:
        "A desktop automation tool that gives non-developers the ability to automate file and task management using Claude — the definition in plain language",
      takeaway:
        "Cowork is Claude with hands — it runs on your computer, reads and writes files you authorise, and executes repeatable workflows on a schedule or trigger, not just answers in a chat pane.",
      why: "Teams that skip this definition treat Cowork like another Claude tab, then wonder why nothing runs overnight. Cowork is operations software: inputs, steps, outputs, logs.",
      paragraphs: [
        [
          s("At its core, "),
          x(
            "Cowork",
            "Anthropic's desktop automation layer for Claude — workflows that act on your machine's files and apps within permissions you grant.",
          ),
          s(
            " is a local automation environment powered by Claude. You define what should happen — organise downloads, rename invoice PDFs, compile weekly reports from folders, draft follow-up emails from CRM exports — and Cowork executes those steps against real files on disk, not hypothetical examples in a chat bubble.",
          ),
        ],
        [
          s("The product sits between "),
          x("conversational AI", "Claude.ai — great for thinking, drafting, and ad-hoc analysis."),
          s(" and "),
          x(
            "developer agents",
            "Claude Code — repo-aware coding agent for engineers with terminal and git workflows.",
          ),
          s(
            ". You do not need to write Python or configure CI pipelines. You need a clear process, access to the folders that process touches, and willingness to test before you schedule anything mission-critical.",
          ),
        ],
        [
          s("Think of each Cowork workflow as a "),
          x("standard operating procedure", "SOP — documented steps a competent operator would follow, now executed by Claude with audit logs."),
          s(
            " you would hand a sharp operations hire: where files live, naming rules, what to do when a file is missing, who to notify on failure. Cowork does not invent your process — it industrialises the one you already have.",
          ),
        ],
      ],
      workflowSteps: [
        "List one recurring weekly task that touches files (reports, invoices, exports).",
        "Write the human steps in a numbered list — no AI yet.",
        "Circle steps that are rule-based (rename, move, summarise, email draft) vs judgment-heavy (fire someone, sign a contract).",
        "Cowork candidates are rule-based chains with clear inputs and outputs.",
      ],
      example: {
        title: "Founder weekly board pack — from 90 minutes to 12",
        body: "A seed-stage founder exported Stripe, bank CSV, and pipeline spreadsheet every Sunday. Cowork workflow: ingest three files from ~/BoardPack/inbox, validate column headers, produce variance summary markdown, drop PDF into ~/BoardPack/out, ping Slack #leadership. Human still reviews numbers before the board call — Cowork eliminated copy-paste and folder archaeology.",
      },
    }),
    buildGuideSection({
      id: "who-cowork-is-for",
      number: "1.2",
      title: "Who Cowork is for",
      subtitle:
        "Knowledge workers, operators, and business users who want Claude to act on their computer, not just respond in a chat window",
      takeaway:
        "Cowork rewards people who own repeatable operations — finance ops, chiefs of staff, agency producers, solo founders — not engineers building products.",
      why: "Wrong buyer personas create wrong workflows. Developers should use Claude Code; strategists brainstorming should use Claude.ai Projects; operators moving files on a cadence should use Cowork.",
      paragraphs: [
        [
          s("Primary fit: "),
          x(
            "knowledge workers with file-heavy rituals",
            "Roles where work product is documents, spreadsheets, exports, and email — not primarily source code.",
          ),
          s(
            ". If your week includes 'download three exports, combine them, send summary to leadership,' you are the audience. If your week is 'ship features in a monorepo,' you are not — use Claude Code instead.",
          ),
        ],
        [
          s("Secondary fit: "),
          x("fractional operators", "COOs, chiefs of staff, virtual assistants, agency ops leads who standardise client deliverables."),
          s(
            " who template the same deliverables across clients. Cowork shines when folder structures repeat and naming conventions are enforceable.",
          ),
        ],
        [
          s("Poor fit: real-time customer chat, sub-second API latency, or workflows requiring arbitrary web browsing without guardrails. Cowork is batch and scheduled operations — your "),
          x("COO on a hard drive", "Autonomous within defined lanes; not an always-on concierge for every ad-hoc question."),
          s(", not a replacement for your entire stack."),
        ],
      ],
      workflowSteps: [
        "Score your role: % of week on repeatable file tasks vs one-off creative work.",
        "If repeatable file work > 25%, pilot one Cowork workflow this month.",
        "Identify who owns approvals — Cowork runs; humans still sign off on external sends.",
      ],
      example: {
        title: "Marketing ops lead — campaign post-mortems",
        body: "A B2B marketing ops lead pulled ad platform CSVs, GA exports, and Salesforce campaign members every Monday. Cowork normalised formats, flagged campaigns with CPL > 2× target, drafted internal post-mortem skeleton. Creative strategy stayed human; data wrangling became unattended.",
      },
    }),
    buildGuideSection({
      id: "cowork-vs-claude-ai",
      number: "1.3",
      title: "How Cowork differs from Claude.ai",
      subtitle:
        "File system access, scheduled execution, and automation triggers — the capabilities that make it a different product entirely",
      takeaway:
        "Claude.ai thinks with you; Cowork works for you while you are elsewhere — provided you gave it folders, rules, and a schedule.",
      why: "The #1 configuration mistake is rebuilding Cowork workflows as giant Claude.ai prompts that someone must manually run every time.",
      paragraphs: [
        [
          s("Claude.ai lives in the browser (or app) with "),
          x("session-based interaction", "You prompt; it responds; you paste results elsewhere — no persistent execution loop on your disk."),
          s(
            ". Uploads are manual. Triggers are you opening a tab. Cowork binds Claude to paths on disk — ~/Finance/invoices, ~/Reports/weekly — and can wake up without you.",
          ),
        ],
        [
          s("Cowork adds three primitives Claude.ai lacks for operators: "),
          x("filesystem scope", "Explicit allowlisted directories Cowork may read/write."),
          s(", "),
          x("schedules", "Cron-like runs — daily 6am, every Friday, on folder change where supported."),
          s(", and "),
          x("run history", "Logs of what ran, what changed, what failed — essential for trust and debugging."),
          s("."),
        ],
        [
          s("Use Claude.ai for exploration — 'help me design this workflow.' Use Cowork for execution — 'run this workflow every Monday at 7am.' Many power users design in Projects, then crystallise the stable version into Cowork."),
        ],
      ],
      workflowSteps: [
        "Take a workflow you run manually in Claude.ai weekly.",
        "Extract the fixed steps (file paths, output format, recipients).",
        "Prototype once in Cowork manually; only then attach a schedule.",
        "Keep Claude.ai Project as the 'lab' — Cowork as 'production'.",
      ],
      artifact: {
        id: "surface-picker-cowork",
        title: "Claude.ai vs Cowork — quick picker",
        description: "Paste in your ops wiki.",
        content: `| Need | Use |
|------|-----|
| Brainstorm, draft, analyse ad hoc | Claude.ai / Projects |
| Same file pipeline every week | Cowork |
| Live chat with customers | Your product + API |
| Refactor codebase | Claude Code |
| Overnight folder hygiene | Cowork + schedule |
| One-off PDF summary | Claude.ai upload |

Rule: if you said "I wish this ran while I slept" → Cowork.`,
      },
    }),
    buildGuideSection({
      id: "coo-mental-model",
      number: "1.4",
      title: "The COO mental model",
      subtitle:
        "Thinking of Cowork as an operations manager that executes defined processes autonomously — the mindset that shapes how you configure it",
      takeaway:
        "You are not prompting a genius; you are hiring a meticulous COO who follows checklists, escalates exceptions, and never improvises outside scope.",
      why: "Creative prompting produces creative chaos in automation. COO framing forces SOPs, exception handling, and measurable outputs.",
      paragraphs: [
        [
          s("A real COO does not guess your filing system. They ask for the org chart, approval matrix, and weekly rhythm — then execute. Cowork needs the same: "),
          x("explicit inputs", "Which folders, which file patterns, which templates."),
          s(", "),
          x("explicit outputs", "Where results land, what format, who gets notified."),
          s(", and "),
          x("explicit stop conditions", "When to halt and alert instead of guessing."),
          s("."),
        ],
        [
          s("The COO model also sets expectations on "),
          x("judgment boundaries", "Cowork should flag anomalies — not auto-send client emails or delete files without human tier."),
          s(
            ". Automate preparation; keep commitment human. Draft the board email in Cowork; you click send.",
          ),
        ],
        [
          s("When something fails, a good COO leaves a paper trail. Configure notifications and review run history like you would a standup report from ops — not like debugging a mysterious chat."),
        ],
      ],
      workflowSteps: [
        "Write a one-page SOP for your target workflow as if onboarding a human COO.",
        "Translate each SOP step into a Cowork workflow block.",
        "Add an 'exception' branch: if input missing → notify, do not proceed.",
        "Review run history after three manual trials before scheduling.",
      ],
      example: {
        title: "Chief of staff — investor update pipeline",
        body: "SOP: collect metrics CSV + narrative bullets from founders by Thursday 5pm; merge into template; flag if MRR row missing; output draft in ~/InvestorUpdates/drafts. Cowork runs Thursday 6pm; chief of staff edits Friday morning. COO prepared; human committed.",
      },
    }),
    buildGuideSection({
      id: "automation-scope",
      number: "1.5",
      title: "What Cowork can and cannot automate",
      subtitle:
        "The automation scope and the boundaries that matter for realistic expectations",
      takeaway:
        "Cowork excels at structured file pipelines inside allowed paths; it struggles with opaque UIs, irreversible external actions, and tasks requiring live human negotiation.",
      why: "Scope clarity prevents 'we tried to automate everything' failures that kill executive trust in the whole program.",
      paragraphs: [
        [
          s("Strong fits: "),
          x(
            "deterministic file operations",
            "Rename, move, merge CSVs, extract text, generate summaries from known templates, populate slides from structured data.",
          ),
          s(
            "; classification and routing (sort invoices by vendor folder); generating drafts saved locally for human review; aggregating exports from tools that already write files.",
          ),
        ],
        [
          s("Weak fits: clicking through legacy ERPs with no export; real-time Slack conversation; legal commitments; deleting source-of-truth data without backup; anything requiring credentials you cannot safely scope."),
        ],
        [
          s("Gray zone — proceed with guardrails: email drafts (save to drafts folder, never auto-send); cloud sync folders (test conflict behaviour); large binary files (watch disk and model context limits). Document "),
          x("human-in-the-loop tiers", "T0 auto; T1 notify; T2 human approve before external effect."),
          s(" in every workflow spec."),
        ],
      ],
      workflowSteps: [
        "Classify proposed automation: files only / files + notifications / external commit.",
        "Only schedule T0 (files only) for first month.",
        "Promote to T1 after 10 clean runs logged in history.",
        "Never auto-send external email in v1 — industry-agnostic safe default.",
      ],
      artifact: {
        id: "hitl-tiers",
        title: "Human-in-the-loop tiers for Cowork",
        content: `T0 — Safe unattended: read/write inside allowlisted folders; no external APIs; no send.
T1 — Notify: same as T0 + Slack/email ping with summary link.
T2 — Approve: output to staging; human clicks confirm in Cowork or companion UI.
T3 — Restricted: legal, HR, payments — Cowork prepares only; never executes.

Default new workflows to T1 until trust is earned.`,
      },
    }),
    buildGuideSection({
      id: "cowork-vs-claude-code",
      number: "1.6",
      title: "Cowork vs Claude Code",
      subtitle:
        "The distinction between automation for non-technical users and agentic coding for developers — when to use each",
      takeaway:
        "Claude Code edits repositories; Cowork runs business operations on files. Same model family, different contracts with your organisation.",
      why: "Engineering teams sometimes force Cowork into dev workflows or ban it while reimplementing file ops in scripts — both waste leverage.",
      paragraphs: [
        [
          s("Claude Code assumes "),
          x("git", "Version control, tests, PRs — the software delivery loop."),
          s(", terminals, and code review culture. Cowork assumes folders, calendars, and business stakeholders who never open VS Code."),
        ],
        [
          s("Choose Claude Code when output is a merged PR. Choose Cowork when output is a folder of board-ready PDFs. Some teams use both: Code ships the feature that writes exports; Cowork consumes those exports downstream."),
        ],
        [
          s("Security posture differs: Code needs repo secrets management; Cowork needs "),
          x("directory allowlists", "Only ~/Ops/Automations in scope — not entire home directory."),
          s(" and audit logs for compliance teams who do not speak git."),
        ],
      ],
      workflowSteps: [
        "Ask: is the artefact code or a business document?",
        "Code → Claude Code + CI. Document pipeline → Cowork.",
        "If engineers script file ops repeatedly, evaluate Cowork for the ops user instead of maintaining brittle cron scripts.",
      ],
      example: {
        title: "SaaS company — both surfaces, zero overlap",
        body: "Engineering used Claude Code for API integration generating nightly usage CSV to S3. Finance ops used Cowork on a synced local folder to build CFO dashboard pack. Same data; different surfaces. PM documented handoff: S3 sync lands by 5am; Cowork schedule 6am.",
      },
    }),
    buildGuideSection({
      id: "product-roadmap",
      number: "1.7",
      title: "The Cowork product roadmap",
      subtitle:
        "Where the product is now, where it is going, and how to plan your workflows around the current capability ceiling",
      takeaway:
        "Ship workflows on today's documented capabilities; design for extension — not on rumoured features or beta toggles without fallbacks.",
      why: "Roadmap betting strands workflows when features slip. Conservative design keeps ops running when Anthropic ships incrementally.",
      paragraphs: [
        [
          s("Today, plan around: desktop install (macOS/Windows), folder permissions, Skills, "),
          x("plugins", "Role-specific workflow packs — see Ch 7 §1.1."),
          s(", scheduled tasks, connectors, run history, subagents, Projects, Dispatch (preview), Claude in Chrome. Treat "),
          x("connector expansion", "Slack, Drive, M365, GitHub — check release notes monthly."),
          s(" as additive — build file-based fallbacks."),
        ],
        [
          s("This playbook also teaches "),
          x("ops patterns", "manifest handoffs, flag-file conditions, VALIDATE Skills — conventions you implement, not guaranteed menu items."),
          s(". See Ch 7 §2.3 native vs pattern before hunting UI controls. Keep workflows modular: ingest → transform → notify."),
        ],
        [
          s("Subscribe to Anthropic release notes; quarterly review which workflows can shed manual export steps as integrations mature. Maintain a "),
          x("capability register", "Internal doc: workflow name, depends on feature X, fallback if X unavailable."),
          s(" owned by ops, not only IT."),
        ],
      ],
      workflowSteps: [
        "Document each live workflow's critical dependencies (folder paths, schedule, model tier).",
        "Quarterly: compare against Cowork changelog — upgrade one workflow per quarter if safe.",
        "Keep manual runbook for top 3 workflows if Cowork unavailable 24h.",
      ],
      artifact: {
        id: "native-vs-pattern-callout",
        title: "Native vs playbook pattern (read Ch 7 §2.3)",
        content: `NATIVE: Skills, plugins, schedule picker, connectors, run history
PATTERN: cron overlap, export_ready.flag, manifest.json, VALIDATE_*
When in doubt → Ch 7 Product Surface`,
      },
    }),
    buildGuideSection({
      id: "setting-up-cowork",
      number: "1.8",
      title: "Setting up Cowork",
      subtitle:
        "Installation, authentication, permissions, and the first-run configuration — the complete setup process",
      takeaway:
        "Setup is one focused hour: install, sign in with Claude account, allowlist folders narrowly, run a harmless test workflow, then expand scope deliberately.",
      why: "Over-broad permissions on day one trigger security blocks or real data incidents that kill the pilot before value appears.",
      paragraphs: [
        [
          s("Install Claude Desktop (macOS or Windows) from Anthropic — Cowork runs in desktop, not web. Sign in with your "),
          x("paid Claude plan", "Pro, Max, Team, or Enterprise — Cowork on paid plans; verify features for your tier."),
          s(". Requires active internet. For schedules/Dispatch: keep ops machine awake — see Ch 7 §2.8."),
        ],
        [
          s("First-run permissions: grant "),
          x("minimum viable folders", "e.g. ~/CoworkSandbox only for week one — not Documents entire tree."),
          s(". Create a sandbox with sample files mirroring production structure. Run a read-only workflow (list + summarise) before any write step."),
        ],
        [
          s("Configure notifications to a channel you actually read. Enable run history retention aligned with compliance (30–90 days typical). Document setup in SETUP.md: version, allowlisted paths, owner, escalation contact."),
        ],
      ],
      workflowSteps: [
        "Download Cowork from official Anthropic source; verify checksum if provided.",
        "Create ~/CoworkSandbox with fake CSVs/PDFs structurally matching real inputs.",
        "Allowlist only sandbox; build 'hello world' workflow: list files → summary markdown.",
        "Run 3 times; inspect history; then clone structure to production paths with change control.",
        "Add calendar reminder: monthly permission audit.",
      ],
      artifact: {
        id: "first-run-checklist",
        title: "Cowork first-run checklist",
        description: "Complete before first production schedule.",
        content: `[ ] Installed official Cowork build
[ ] Signed in — Claude plan confirmed (model + limits)
[ ] Sandbox folder created and allowlisted
[ ] Test workflow: read-only — passed 3x
[ ] Test workflow: write to sandbox — passed 3x
[ ] Notifications route to #ops-automation (or email)
[ ] Run history reviewed — timestamps make sense
[ ] SETUP.md committed to internal wiki
[ ] Security: no credentials in workflow prompts — use OS keychain/integration
[ ] Owner named for on-call when scheduled job fails`,
      },
    }),
  ],
};
