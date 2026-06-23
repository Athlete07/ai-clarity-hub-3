import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_NATIVE_CAPABILITIES: GuideConcept = {
  number: 1,
  title: "Native Product Capabilities",
  subtitle:
    "Plugins, subagents, Projects, Dispatch, Chrome, and the security model — what Cowork ships beyond filesystem automation",
  sections: [
    buildGuideSection({
      id: "plugins-vs-skills",
      number: "1.1",
      title: "Plugins vs Skills vs workflows",
      subtitle:
        "Three layers of reuse — when to install a plugin, when to write a Skill, when to schedule a workflow",
      takeaway:
        "Plugins = curated role packs from Anthropic/marketplace; Skills = your org's TAR contracts; workflows = triggers + composition — use all three, don't duplicate.",
      why: "Teams write custom Skills for everything plugins already solve, or install plugins without governance — both waste time and create audit gaps.",
      paragraphs: [
        [
          x("Plugins", "Packaged Cowork capabilities for roles — marketing, PM, finance, legal — with pre-built procedures and connector patterns."),
          s(" accelerate onboarding. "),
          x("Skills", "Your versioned TAR procedures — FINANCE_NORMALISE_v1 — organisation-specific."),
          s(" encode your SOPs. "),
          x("Workflows / scheduled tasks", "Trigger + composition — when work runs unattended."),
          s(" industrialise what plugins and Skills prepare."),
        ],
        [
          s("Decision tree: start with a plugin if Anthropic or your enterprise marketplace has a role match → customise via Skills for paths/schemas → schedule when five-run gate passes. Enterprise: "),
          x("private plugin marketplace", "Admin-curated plugin registry — only approved plugins installable."),
          s(" with CoE approval (Ch 5 §3.5, Ch 7 §2.6)."),
        ],
      ],
      workflowSteps: [
        "Browse official + enterprise plugin catalog before writing Skill v1.",
        "Fork plugin procedure into org Skill only where paths differ.",
        "Document: plugin version + dependent Skills in SKILL_INDEX.",
      ],
      artifact: {
        id: "plugin-skill-workflow-matrix",
        title: "Plugin · Skill · Workflow matrix",
        content: `| Layer | Owns | Example |
|-------|------|---------|
| Plugin | Role template | Marketing campaign brief pack |
| Skill | Org SOP | ACME_CRM_EXPORT_NORMALISE_v2 |
| Workflow | When it runs | Mon 6:30 + connectors |`,
      },
    }),
    buildGuideSection({
      id: "subagents",
      number: "1.2",
      title: "Subagents and parallel work",
      subtitle:
        "How Cowork fans out subagents for long multi-step tasks — scope, cost, and control",
      takeaway:
        "Subagents parallelise branches (research, per-file extract) — parent task owns merge; cap branches and token budget per run.",
      why: "Unbounded subagent fan-out is the fastest path to invoice shock and inconsistent merges.",
      paragraphs: [
        [
          s("Cowork uses "),
          x("subagents", "Child agent instances for parallel subtasks — e.g. one per competitor or per PDF — coordinated by the parent run."),
          s(" for long-running knowledge work. You see parent progress in run history; subagent work should appear in logs or step summaries."),
        ],
        [
          s("Ops rules: max N parallel branches (Ch 3 §1.6); explicit JOIN Skill; never parallel-write same output folder. For scheduled unattended jobs, prefer sequential unless branches are read-only."),
        ],
      ],
      workflowSteps: [
        "Design parallel only when branches are independent reads.",
        "Add JOIN + VALIDATE before emit.",
        "Log branch count in manifest.",
        "Load-test token cost with max parallelism once.",
      ],
      example: {
        title: "COMPETITOR_SCAN with subagents",
        body: "Parent spawns SCAN_A, SCAN_B, SCAN_C subagents → each writes branch json → JOIN_DIGEST merges → single SYNTH Skill. Scheduled run caps at 3 branches.",
      },
    }),
    buildGuideSection({
      id: "cowork-projects",
      number: "1.3",
      title: "Cowork Projects",
      subtitle:
        "Session persistence for multi-day work — distinct from Claude.ai Projects",
      takeaway:
        "Cowork Projects keep context across sessions for one initiative — design and iterate in a Project, then crystallise stable procedures into Skills and schedules.",
      why: "Without Projects, multi-day board prep resets; without Skills, Project knowledge doesn't become reusable automation.",
      paragraphs: [
        [
          s("Cowork "),
          x("Cowork Projects", "Persistent workspace within Cowork for an ongoing initiative — files, plan, partial outputs carry across sessions."),
          s(" differ from "),
          x("Claude.ai Projects", "Browser-side prompt and file context for chat — design lab, not production execution."),
          s(". Use Cowork Projects for week-long deliverables; promote repeatable steps to Skills when stable."),
        ],
        [
          s("Handoff path: Project exploration → TAR Skill draft → sandbox test → workflow schedule. Archive Project when initiative ships; Skill remains in library."),
        ],
      ],
      workflowSteps: [
        "Open Project per major initiative (board week, RFP, launch).",
        "End each session with plan.md update in Project folder.",
        "When step repeats 3× identically → extract Skill.",
      ],
    }),
    buildGuideSection({
      id: "dispatch",
      number: "1.4",
      title: "Dispatch — mobile to desktop",
      subtitle:
        "Assign Cowork tasks from your phone; execution happens on your desktop",
      takeaway:
        "Dispatch is kickoff + notify — desktop must be awake, paired, and on a paid plan; not a substitute for schedules or server-side automation.",
      why: "Users expect phone to run overnight jobs; Dispatch requires an awake ops machine — document this or miss SLAs.",
      paragraphs: [
        [
          x("Dispatch", "Research-preview feature: assign tasks from Claude mobile; desktop Cowork executes and messages result back."),
          s(" needs: latest desktop + mobile apps, pairing, computer awake, active internet. Rolling out gradually on Pro/Max."),
        ],
        [
          s("Use Dispatch for ad-hoc 'start this while I'm commuting.' Use "),
          x("scheduled tasks", "Native recurring cadence — daily, weekly, monthly — for predictable automation."),
          s(" for Monday 6am brief. Dedicated always-on ops machine for reliable schedules (Ch 5 §3.4)."),
        ],
      ],
      workflowSteps: [
        "Pair mobile + desktop once; verify in settings.",
        "Document: Dispatch = human trigger, not cron.",
        "For reliability, prefer schedule over Dispatch for recurring work.",
        "Ops machine: prevent sleep during schedule windows.",
      ],
      artifact: {
        id: "dispatch-vs-schedule",
        title: "Dispatch vs scheduled task",
        content: `Dispatch: ad-hoc, you assign, desktop executes, phone notified
Schedule: recurring, unattended, desktop must be awake
Server automation: not Cowork — use API/backend if 24/7 required`,
      },
    }),
    buildGuideSection({
      id: "claude-in-chrome",
      number: "1.5",
      title: "Claude in Chrome and connector fallback",
      subtitle:
        "When Cowork uses the browser because no direct connector exists",
      takeaway:
        "Chrome is the fallback path for web apps without MCP — allowlist domains, never for unattended PII or auth flows on scheduled runs.",
      why: "Chrome access increases injection and exfiltration surface — default deny in production schedules.",
      paragraphs: [
        [
          s("Cowork picks the fastest path: connector for Slack/Drive, "),
          x("Claude in Chrome", "Browser connector — Claude acts in Chrome for web research or apps without native integration."),
          s(" when no direct integration exists. Product also may use "),
          x("screen/app control", "Open desktop apps when neither connector nor Chrome suffices — highest risk tier."),
          s(" as last resort — restrict for scheduled unattended workflows."),
        ],
        [
          s("Policy: interactive sessions may use Chrome with domain allowlist; scheduled jobs = connectors + files only unless security approves Chrome step."),
        ],
      ],
      workflowSteps: [
        "Map each workflow step: connector | Chrome | file-only.",
        "Deny Chrome on scheduled T0–T2 external-facing outputs.",
        "Log Chrome fetches in manifest with URL list.",
      ],
    }),
    buildGuideSection({
      id: "vm-sandbox-security",
      number: "1.6",
      title: "VM sandbox and filesystem security",
      subtitle:
        "How Cowork isolates execution — not the same as a ~/Sandbox folder",
      takeaway:
        "Cowork runs in a sandboxed VM with mounted allowlisted folders — folder sandbox in ops docs is practice; VM boundary is the actual security model.",
      why: "Operators think 'sandbox folder' equals security; real boundary is VM + allowlist + no password handoff.",
      paragraphs: [
        [
          s("On macOS Cowork uses a "),
          x("sandboxed virtual machine", "Isolated execution environment — files you allowlist are mounted in; rest of system stays outside."),
          s(". Windows has analogous isolation. This is why "),
          x("allowlisting matters", "Only mount paths Cowork needs — VM limits blast radius but mounted data is fully readable."),
          s(" — not because Cowork browses your entire disk by default."),
        ],
        [
          s("Product claim: "),
          x("no passwords handed off", "Credentials stay in connector OAuth — not pasted into tasks."),
          s(". Your ~/CoworkSandbox convention (Ch 1 §1.8) is ops best practice on top of VM isolation — test paths before production mounts."),
        ],
      ],
      workflowSteps: [
        "Distinguish VM sandbox (product) vs path sandbox (ops) in SETUP.md.",
        "Allowlist minimum paths on first run.",
        "Never mount entire home directory.",
      ],
    }),
    buildGuideSection({
      id: "citations-grounded-outputs",
      number: "1.7",
      title: "Citations and source-grounded outputs",
      subtitle:
        "Cowork's differentiator — deliverables that cite actual files and messages",
      takeaway:
        "Every production Result template includes a Sources section — file paths, message IDs, URLs, retrieval dates — validated in QA.",
      why: "Uncited synthesis erodes executive trust; citations are a product promise and a compliance requirement.",
      paragraphs: [
        [
          s("Cowork returns "),
          x("citations to source files and messages", "Inline or appendix pointers — not unattributed summaries."),
          s(". Encode in TAR Result: "),
          x("CITATION_RULES", "Each factual claim links to source_id; external web requires URL + date."),
          s(". QA Skill fails if HIGH claims lack citations."),
        ],
      ],
      workflowSteps: [
        "Add ## Sources to every external-facing template.",
        "QA check: count(citations) >= count(claims) for flagged sections.",
        "Store source manifest alongside output.",
      ],
      artifact: {
        id: "citation-block-template",
        title: "CITATION_RULES block",
        content: `## Sources
- [claim] → file://path or message_id or url (retrieved YYYY-MM-DD)
QA: no uncited numbers in Executive section`,
      },
    }),
    buildGuideSection({
      id: "long-running-work",
      number: "1.8",
      title: "Long-running work",
      subtitle:
        "Progress, interruption, resume, and timeouts for multi-step agentic tasks",
      takeaway:
        "Long runs need max_runtime, checkpoint manifests, and interrupt policy — partial outputs must be labeled PARTIAL, not SUCCESS.",
      why: "Board-week jobs exceed default patience; without checkpoint discipline, reruns duplicate work or lose progress.",
      paragraphs: [
        [
          s("Cowork supports "),
          x("long-running multi-step work", "Tasks that span many tool calls — subagents, large doc batches — with progress in the desktop app."),
          s(". Set "),
          x("max_runtime", "Per workflow — alert or graceful stop (Ch 3 §1.2)."),
          s("; write checkpoint manifest every N steps; on interrupt, resume from last checkpoint not step 1."),
        ],
        [
          s("If user steers mid-run (Ch 7 §2.2), Cowork should narrow scope — not restart entire pipeline silently."),
        ],
      ],
      workflowSteps: [
        "Set max_runtime on heavy workflows.",
        "Checkpoint to staging/{run_id}/checkpoint.json each phase.",
        "PARTIAL status + review queue on timeout.",
      ],
    }),
  ],
};
