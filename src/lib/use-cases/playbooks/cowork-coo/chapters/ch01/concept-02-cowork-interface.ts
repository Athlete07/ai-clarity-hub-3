import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_COWORK_INTERFACE: GuideConcept = {
  number: 2,
  title: "The Cowork Interface",
  subtitle:
    "Every element of the Cowork environment — the controls, the views, and the behaviours that experienced users know",
  sections: [
    buildGuideSection({
      id: "cowork-dashboard",
      number: "2.1",
      title: "The Cowork dashboard",
      subtitle: "What you see when you open Cowork and what each element does",
      takeaway:
        "The dashboard is mission control — active workflows, next scheduled runs, recent failures, and quick entry to build or debug; learn it before you build your tenth workflow.",
      why: "Operators who jump straight into the builder lose situational awareness — they do not see that a failed 6am job left downstream folders empty.",
      paragraphs: [
        [
          s("Opening Cowork lands you on the "),
          x("dashboard", "Home surface showing workflow health at a glance — not the editor."),
          s(
            ". Expect a summary of enabled workflows, upcoming schedule triggers, and status chips (success, running, failed, paused). Treat red states like a pager — investigate before building more automation.",
          ),
        ],
        [
          s("Primary navigation typically splits: "),
          x("Workflows", "List of all defined automations."),
          s(", "),
          x("Skills", "Reusable procedure blocks."),
          s(", "),
          x("History", "Execution log."),
          s(", and "),
          x("Settings", "Permissions and account linkage."),
          s(". Power users pin the dashboard until three consecutive weeks of clean scheduled runs — then they live in History for tuning."),
        ],
        [
          s("Customise your morning ritual: open dashboard → scan failures → open History for any warning → only then start creative work. Two minutes prevents silent data drift."),
        ],
      ],
      workflowSteps: [
        "Day 1: click every dashboard widget; note what each links to.",
        "Create a 'dashboard legend' note for your team (screenshots + one-line descriptions).",
        "Set browser/OS shortcut to Cowork if you live there daily.",
      ],
      example: {
        title: "Ops lead morning triage — 4 minutes",
        body: "Every weekday 8:45am: dashboard shows Friday pipeline export failed (missing file). History reveals vendor export delayed. Ops lead pauses dependent workflow, notifies sales, avoids blank CFO pack. Without dashboard habit, Monday leadership meeting runs on stale numbers.",
      },
    }),
    buildGuideSection({
      id: "workflow-builder",
      number: "2.2",
      title: "The workflow builder",
      subtitle: "How to create, edit, and test workflows — the core interface",
      takeaway:
        "Build in layers: trigger → ingest → transform → output → notify; test each layer with dry-run before enabling the next.",
      why: "Monolithic workflows are impossible to debug. Layered builders map to how COOs actually think about SOPs.",
      paragraphs: [
        [
          s("The "),
          x("workflow builder", "Visual or step-based editor where you chain triggers, Claude steps, and file actions."),
          s(
            " is where SOPs become machines. Each block should have one job: watch folder, read files, call Claude with template, write output, send notification.",
          ),
        ],
        [
          s("Use "),
          x("dry-run mode", "Execute without writes or with sandbox paths — verify logic before production."),
          s(
            " religiously. First run always targets sandbox copies. Second run uses production read-only. Third run enables writes with notifications on.",
          ),
        ],
        [
          s("Version workflows in names: "),
          x("v1, v2 suffixes", "BoardPack_v2_2026-06 — never edit live workflow in place without clone."),
          s(
            ". When Claude prompt changes materially, clone workflow, test v-next, swap schedule pointer, retire old version after 2 clean weeks.",
          ),
        ],
      ],
      workflowSteps: [
        "Name workflow: [Domain]_[Task]_v1.",
        "Add trigger (manual first, schedule later).",
        "Add ingest step with explicit glob pattern (*.csv).",
        "Add Claude step with frozen prompt template + output schema.",
        "Add write step to staging folder only.",
        "Dry-run ×3; compare outputs; then promote.",
      ],
      artifact: {
        id: "workflow-block-template",
        title: "Workflow block checklist",
        content: `Per block document:
- Input: path / pattern / precondition
- Claude prompt version: [link]
- Output: path + filename pattern
- On failure: stop | skip | notify
- Owner: name

Never combine ingest + destructive delete in one untested block.`,
      },
    }),
    buildGuideSection({
      id: "skills-library",
      number: "2.3",
      title: "The Skills library",
      subtitle: "Where your defined Skills live and how to manage them",
      takeaway:
        "Skills are reusable procedure modules — normalise invoices, summarise CSV, draft exec email — shared across workflows so you fix once, benefit everywhere.",
      why: "Without Skills, every workflow duplicates prompts and drift diverges quality. Skills are your ops playbooks as code-adjacent assets.",
      paragraphs: [
        [
          s("The "),
          x("Skills library", "Catalogue of named, versioned procedure packages — complements official plugins; see Ch 7 §1.1."),
          s(
            " stores procedures independent of schedules. Example Skill: NORMALISE_VENDOR_CSV — validates headers, maps aliases, outputs canonical schema.",
          ),
        ],
        [
          s("Govern Skills like internal products: owner, changelog, consumers (which workflows call it). Breaking change in a Skill requires regression test on all dependent workflows."),
        ],
        [
          s("Start with 3–5 Skills covering 80% of your file types before building dozens of workflows. "),
          x("Compose workflows from Skills", "Workflow = trigger + Skill chain + routing — not novel prompts every time."),
          s(" + thin routing logic."),
        ],
      ],
      workflowSteps: [
        "Check official/enterprise plugins before custom Skill v1 (Ch 7 §1.1).",
        "Extract repeated Claude prompt from first workflow into Skill v1.",
        "Document Skill contract: input schema, output schema, failure modes.",
        "Refactor second workflow to call same Skill — delete duplicate prompt text.",
        "Monthly Skill review: deprecate unused, merge duplicates.",
      ],
      example: {
        title: "Finance ops — three Skills, twelve workflows",
        body: "Skills: INVOICE_PARSE, GL_VARIANCE_NARRATIVE, EXEC_EMAIL_DRAFT. Twelve workflows differ only by trigger and folder paths. Prompt fix in INVOICE_PARSE propagated everywhere in one deploy.",
      },
    }),
    buildGuideSection({
      id: "schedule-manager",
      number: "2.4",
      title: "The schedule manager",
      subtitle: "Where you set, view, and modify automated execution schedules",
      takeaway:
        "Schedules turn Cowork from a tool you run into infrastructure that runs — but only after manual runs prove reliable.",
      why: "Premature scheduling amplifies bugs. The schedule manager is a privilege you earn with run history evidence.",
      paragraphs: [
        [
          s("The "),
          x("schedule manager", "UI to attach cron-like timing to workflows — timezone-aware."),
          s(
            " shows what fires when, in your local timezone. Align schedules with upstream data arrival — not aspirational times. If Stripe export lands 6:10am, schedule 6:30am not 5:00am.",
          ),
        ],
        [
          s("Use "),
          x("stagger", "Offset heavy workflows so disk and API limits are not contended."),
          s(
            " when many jobs run at midnight. Document dependencies: Workflow B requires Workflow A output file — enforce order via schedule offset or explicit file-exists check.",
          ),
        ],
        [
          s("Pause schedules before holidays or vendor maintenance windows. A one-click pause beats emergency uninstall when finance month-end shifts."),
        ],
      ],
      workflowSteps: [
        "Require 5 successful manual runs before first schedule.",
        "Set schedule 15+ minutes after known upstream job.",
        "Add calendar reminder to review schedules quarterly.",
        "Document pause procedure in on-call runbook.",
      ],
      artifact: {
        id: "schedule-register",
        title: "Schedule register template",
        content: `| Workflow | Cron | TZ | Depends on | Owner | Pause? |
|----------|------|----|------------|-------|--------|
| BoardPack | 0 6 * * 1 | America/New_York | stripe_export | Alex | |
| InvoiceSort | 30 7 * * * | UTC | — | Sam | |

Review monthly. Stagger CPU-heavy jobs ≥10 min.`,
      },
    }),
    buildGuideSection({
      id: "run-history",
      number: "2.5",
      title: "The run history",
      subtitle: "How to review what Cowork has done, what succeeded, and what failed",
      takeaway:
        "Run history is your audit trail and debugger — every serious ops team reviews it weekly and treats unexplained warnings as incidents.",
      why: "Automation without logs is faith-based operations. History converts 'the AI did something' into accountable events.",
      paragraphs: [
        [
          s("Each execution logs: start time, duration, workflow version, files touched, Claude token usage snapshot, exit status, error stack. "),
          x("Run history", "Immutable-ish log of executions — filter by workflow, status, date."),
          s(" is where you answer 'what changed in folder X overnight?'"),
        ],
        [
          s("Filter by failed runs first. Common failures: missing input file, permission denied, prompt schema mismatch, model timeout. Attach run ID to internal tickets for reproducibility."),
        ],
        [
          s("Export history monthly for compliance if you automate finance or HR-adjacent files. Pair with "),
          x("retention policy", "Align log retention with legal hold requirements — typically 30–365 days."),
          s(" documented with legal."),
        ],
      ],
      workflowSteps: [
        "Weekly 15-min history review on calendar.",
        "For each failure: root cause → fix workflow → note in RUNBOOK.",
        "Track MTTR (mean time to repair) for failed scheduled jobs.",
      ],
      example: {
        title: "Silent partial failure caught in history",
        body: "Dashboard showed green — but history revealed Step 3 ran with 0 files ingested (upstream typo in filename pattern). Ops updated glob from *_sales.csv to *sales*.csv. Without history drill-down, leadership would have received empty pack.",
      },
    }),
    buildGuideSection({
      id: "notifications-alerts",
      number: "2.6",
      title: "Notifications and alerts",
      subtitle: "How Cowork communicates with you about execution results and errors",
      takeaway:
        "Notify on failure always; notify on success selectively — alert fatigue kills response time when real failures happen.",
      why: "Teams that alert every success mute channels; teams that alert never miss catastrophic silent failures.",
      paragraphs: [
        [
          s("Configure "),
          x("failure alerts", "Immediate ping on any non-zero exit or validation error."),
          s(" to Slack, email, or SMS for production workflows. Include workflow name, run ID, link to history, and first line of error."),
        ],
        [
          s("Success notifications: use for "),
          x("high-stakes deliverables", "Board pack ready, month-end close file generated — human should know to review."),
          s(" only. Daily hygiene jobs should log quietly unless summary digest is useful."),
        ],
        [
          s("Weekly digest option: aggregate runs, success rate, token spend — CFO-friendly view of automation ROI without noise."),
        ],
      ],
      workflowSteps: [
        "Wire failure alerts before enabling schedule.",
        "Test alert by forcing sandbox failure.",
        "Add #cowork-alerts channel; restrict to ops owners.",
        "Optional Monday digest for leadership metrics.",
      ],
    }),
    buildGuideSection({
      id: "settings-permissions",
      number: "2.7",
      title: "Settings and permissions",
      subtitle: "The configuration that controls what Cowork can access on your system",
      takeaway:
        "Permissions are the security boundary — narrow folders, separate machine users for production vs personal, review quarterly.",
      why: "Cowork with full-disk access is a prompt-injection and malware magnet. Least privilege is non-negotiable.",
      paragraphs: [
        [
          s("Settings hosts: "),
          x("folder allowlist", "Explicit paths Cowork may read/write."),
          s(", integration toggles, notification endpoints, default model, and optional team policy locks (IT-enforced)."),
        ],
        [
          s("Run Cowork on a "),
          x("dedicated ops machine or user account", "Not your personal laptop with family photos and random Downloads."),
          s(" where possible. Sync only business folders via controlled cloud mount."),
        ],
        [
          s("Document every permission change in CHANGELOG with approver. Revoke paths when workflows retire — orphan permissions accumulate silently."),
        ],
      ],
      workflowSteps: [
        "Quarterly permission audit: list paths → map to active workflows → remove orphans.",
        "Deny by default; add paths with ticket reference.",
        "Separate sandbox vs production paths in settings labels.",
      ],
      artifact: {
        id: "permission-audit",
        title: "Quarterly permission audit",
        content: `[ ] Export current allowlist from Settings
[ ] For each path: active workflow? owner?
[ ] Remove retired paths
[ ] Confirm no home-directory wildcard
[ ] Security sign-off`,
      },
    }),
    buildGuideSection({
      id: "cowork-claude-connection",
      number: "2.8",
      title: "The Cowork–Claude.ai connection",
      subtitle:
        "How Cowork connects to your Claude account — model selection, token usage, and billing",
      takeaway:
        "Cowork consumption rolls up to your Claude plan — scheduled workflows are recurring token spend; model choice and prompt efficiency directly hit the invoice.",
      why: "Finance gets surprised when overnight jobs burn Opus tokens on trivial file sorting. Treat Cowork like a utility meter.",
      paragraphs: [
        [
          s("Cowork authenticates with your "),
          x("Claude identity", "Same org billing as Claude.ai / API where applicable — verify with admin console."),
          s(
            ". Model pick per workflow step matters: use fast economical models for classification; reserve premium models for synthesis steps with ambiguity.",
          ),
        ],
        [
          s("Monitor "),
          x("token usage per workflow", "History often surfaces approximate tokens per run — aggregate weekly."),
          s(
            " in run history exports. If a daily job 10×'d after prompt change, you will see it in usage before finance does.",
          ),
        ],
        [
          s("Align with IT on team plans, rate limits, and whether Cowork runs should use shared service account vs individual seats. Document "),
          x("cost allocation", "Chargeback to departments by workflow tag if needed."),
          s(" for multi-team rollouts."),
        ],
      ],
      workflowSteps: [
        "Tag workflows with cost_center in description field.",
        "Monthly: export usage by workflow; flag outliers.",
        "Default new Skills to economical model; escalate step only when needed.",
        "Sync with Claude.ai Projects — design prompts in Projects, paste stable version to Cowork Skills.",
      ],
      example: {
        title: "Token spike traced to run history",
        body: "Team's weekly research digest jumped $400/month. History showed Opus on 200-page PDF batch. Switched ingest to extract text chunk + Haiku classify + Sonnet summarise only on flagged docs — 78% cost drop, same usefulness.",
      },
      artifact: {
        id: "model-routing-cowork",
        title: "Cowork model routing cheat sheet",
        content: `| Step type | Model tier |
|-----------|------------|
| File rename / move | No model — rules only |
| CSV validate | Fast / Haiku |
| Executive summary | Sonnet |
| Ambiguous multi-doc merge | Opus (sparingly) |

Review monthly. Opus scheduled jobs need VP approval.`,
      },
    }),
  ],
};
