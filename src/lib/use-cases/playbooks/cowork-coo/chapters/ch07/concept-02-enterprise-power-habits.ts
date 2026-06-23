import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_ENTERPRISE_POWER_HABITS: GuideConcept = {
  number: 2,
  title: "Enterprise, Steering & Power Habits",
  subtitle:
    "Delegation-first UX, steering, observability, and the shortcuts experienced Cowork operators use daily",
  sections: [
    buildGuideSection({
      id: "goal-cadence-delegation",
      number: "2.1",
      title: "Goal + cadence delegation",
      subtitle:
        "The first-run UX — describe outcome and cadence; Cowork proposes the plan",
      takeaway:
        "Start with goal + outcome + cadence in plain language — approve Cowork's proposed steps before locking Skills and schedules.",
      why: "Power users who jump straight to Skill editor overwhelm beginners; delegation-first is how the product is designed to be learned.",
      paragraphs: [
        [
          s("Cowork's default loop: you state "),
          x("goal, desired outcome, and cadence", "e.g. 'Every Monday 6am, summarise Priority Gmail + calendar into one brief in ~/Briefs.'"),
          s("; Claude lays out steps; you steer and approve; stable version becomes Skill + schedule."),
        ],
        [
          s("First 10 minutes path: one manual delegation → review plan → run → save as Skill v1 → test matrix → schedule. Do not skip plan approval on first production workflow."),
        ],
      ],
      workflowSteps: [
        "Write one-sentence goal + cadence before opening builder.",
        "Review proposed steps — edit before run.",
        "After 3 identical runs → extract TAR Skill.",
        "Schedule only after Ch 5 readiness gate.",
      ],
      artifact: {
        id: "delegation-starter-prompt",
        title: "Delegation starter template",
        content: `Goal: [one sentence]
Outcome: [file path / connector / format]
Cadence: [manual | daily | weekly]
Non-goals: [what not to do]
Approve plan before first run.`,
      },
    }),
    buildGuideSection({
      id: "steering-mid-run",
      number: "2.2",
      title: "Steering mid-run",
      subtitle:
        "Interrupt, narrow scope, skip a step, approve next step only — power habits",
      takeaway:
        "Steering beats restart — 'skip web scan,' 'only Finance folder,' 'stop before send' — saves tokens and time on long tasks.",
      why: "Operators who only cancel-and-retry lose partial work and duplicate connector calls.",
      paragraphs: [
        [
          s("Use "),
          x("steering", "Mid-run guidance — refine scope, correct course, approve next step without full restart."),
          s(" techniques: pause before external write; request citation on a section; exclude a data source; change output template. Document steering phrases in team wiki."),
        ],
        [
          s("For scheduled unattended runs, steering is pre-encoded in TAR Action failure branches — not live chat."),
        ],
      ],
      workflowSteps: [
        "Practice steering on manual runs before scheduling.",
        "Encode frequent steers as Action ON FAIL branches.",
        "Never steer around T3 approval gates.",
      ],
      example: {
        title: "Steering a runaway research task",
        body: "User: 'Stop fetching — only use files already in ~/Research/inbox.' Cowork continues synthesis from local sources; manifest notes web_skipped: true.",
      },
    }),
    buildGuideSection({
      id: "patterns-vs-native-controls",
      number: "2.3",
      title: "Patterns vs native product controls",
      subtitle:
        "What the playbook teaches as ops architecture vs what the Cowork UI exposes today",
      takeaway:
        "Cron overlap, flag-file conditions, manifest.json handoffs, VALIDATE_* Skills are patterns — native UI offers recurring tasks, connectors, Skills, run history.",
      why: "Hunting for cron fields that don't exist wastes rollout time; patterns are how mature teams implement discipline on top of the product.",
      paragraphs: [
        [
          s("Native today (verify in your build): desktop Cowork mode, folder allowlist, "),
          x("Skills", "Reusable procedures."),
          s(", "),
          x("plugins", "Role packs."),
          s(", "),
          x("scheduled tasks", "Typically daily / weekly / monthly cadence."),
          s(", connectors, run history, notifications."),
        ],
        [
          s("Playbook patterns (implement via Skills + folders): event debounce, condition flags, pipeline DAG manifests, dry-run via sandbox paths, QA validation Skills. Label internal docs "),
          x("PATTERN", "Not a menu item — an ops convention."),
          s(" vs "),
          x("NATIVE", "Shipped UI/control."),
        ],
      ],
      workflowSteps: [
        "Tag each workflow spec: native vs pattern.",
        "Map pattern to implementation (Skill, folder, schedule).",
        "Reconcile quarterly with release notes.",
      ],
      artifact: {
        id: "native-vs-pattern-legend",
        title: "Native vs pattern legend",
        content: `NATIVE: schedule picker, Skills, plugins, connectors, history
PATTERN: cron overlap, export_ready.flag, manifest.json, VALIDATE_*, HITL tiers`,
      },
    }),
    buildGuideSection({
      id: "enterprise-rbac",
      number: "2.4",
      title: "Enterprise RBAC and team governance",
      subtitle:
        "Role-based access for who can create, connect, schedule, and approve",
      takeaway:
        "Enterprise RBAC: admins control connectors, plugins, spend; creators draft; schedulers bind triggers — aligns with Ch 5 §2.6 roles.",
      why: "Cowork at scale without RBAC mirrors 'everyone had root on the file server' — one incident ends the program.",
      paragraphs: [
        [
          s("Enterprise controls: connector enablement, plugin install policy, folder policy templates, model restrictions, "),
          x("role-based access", "Who can use Cowork, install plugins, approve external writes."),
          s(". Pair with internal Creator / Owner / Scheduler / Admin roles."),
        ],
      ],
      workflowSteps: [
        "Map IdP groups to Cowork roles with IT.",
        "Disable consumer OAuth connectors until allowlist approved.",
        "Quarterly access recertification.",
      ],
    }),
    buildGuideSection({
      id: "analytics-otel-spend",
      number: "2.5",
      title: "Analytics API, OpenTelemetry, and spend limits",
      subtitle:
        "Enterprise observability and cost caps beyond run history",
      takeaway:
        "Supplement run history with Analytics API / OpenTelemetry where enabled; set org spend limits — TOKEN_LEDGER (Ch 5) is internal discipline on top.",
      why: "Finance needs org-level meters; ops needs per-workflow — use both layers.",
      paragraphs: [
        [
          s("Enterprise may expose "),
          x("usage analytics", "Admin dashboards for adoption and consumption."),
          s(", "),
          x("Analytics API", "Programmatic usage export."),
          s(", and "),
          x("OpenTelemetry", "OTel observability for integration with Datadog/Splunk where available."),
          s(". Configure spend limits and alerts at org level; tag workflows with cost_center for chargeback."),
        ],
      ],
      workflowSteps: [
        "Enable admin analytics; assign workflow tags.",
        "Wire OTel to SIEM if security requires.",
        "Set org spend cap + 80% warning.",
        "Reconcile OTel with TOKEN_LEDGER monthly.",
      ],
    }),
    buildGuideSection({
      id: "plugin-marketplaces",
      number: "2.6",
      title: "Plugin marketplaces and private registries",
      subtitle:
        "Curated plugin distribution for enterprise — install only what CoE approves",
      takeaway:
        "Private marketplace = approved plugins only; version pin; changelog review before org-wide push.",
      why: "Public plugin install without review is shadow IT for agentic automation.",
      paragraphs: [
        [
          s("Enterprise "),
          x("private plugin marketplace", "Admin-curated catalog — teams install from approved list only."),
          s(" works like internal app store. CoE reviews: data access, connector scopes, update policy. Document installed plugin versions in PLUGIN_REGISTRY.md."),
        ],
      ],
      workflowSteps: [
        "Stand up PLUGIN_REGISTRY with owner + version.",
        "New plugin: security review → pilot → catalog.",
        "Deprecate plugins with breaking updates — notify Skill owners.",
      ],
      artifact: {
        id: "plugin-registry-template",
        title: "PLUGIN_REGISTRY.md",
        content: `| Plugin | Version | Owner | Data class | Approved |
|--------|---------|-------|------------|----------|`,
      },
    }),
    buildGuideSection({
      id: "audit-compliance-reality",
      number: "2.7",
      title: "Audit reality — run history vs Compliance API",
      subtitle:
        "What you can prove today and what enterprise audit is still catching up on",
      takeaway:
        "Today: run history + your manifests + connector vendor logs = audit trail. Cowork activity may not yet appear in org Compliance API — plan accordingly.",
      why: "Compliance teams assume Compliance API covers everything; gap creates false confidence during audits.",
      paragraphs: [
        [
          s("Use Cowork "),
          x("run history", "Per-user execution log in desktop — workflow, status, timing."),
          s(" plus your "),
          x("manifest.json", "Connector calls, paths, approvals — your accountability layer."),
          s(" and external system audit logs (Google, Slack admin)."),
        ],
        [
          s("Important: as of enterprise documentation, "),
          x("Cowork activity is not yet captured in all org audit logs or Compliance API", "Check current admin guide — capability evolving."),
          s(". Export monthly AUDIT_BUNDLE (Ch 5 §2.7) until platform audit matures. Do not claim Compliance API coverage without verification."),
        ],
      ],
      workflowSteps: [
        "Document audit sources in COWORK_GOV.md.",
        "Monthly export run history + manifests.",
        "Quarterly verify Compliance API changelog with legal.",
      ],
      artifact: {
        id: "audit-sources-today",
        title: "Audit sources (today)",
        content: `✓ Cowork run history
✓ Your manifest + approval flags
✓ Connector vendor admin logs
△ Org Compliance API — verify coverage
✓ TOKEN_LEDGER / Analytics API`,
      },
    }),
    buildGuideSection({
      id: "platform-foundry-requirements",
      number: "2.8",
      title: "Platform requirements and cloud desktop",
      subtitle:
        "Desktop-only, paid plans, awake machine, Windows/macOS, Foundry deployments",
      takeaway:
        "Cowork requires desktop app + paid plan + internet + awake machine for schedules/Dispatch; Foundry/cloud desktop for regulated enterprise.",
      why: "Rollouts fail when users expect web Cowork, free tier, or laptop-sleep schedules.",
      paragraphs: [
        [
          s("Requirements: "),
          x("Claude Desktop", "macOS or Windows — Cowork not on web/mobile for full execution."),
          s(", "),
          x("paid Claude plan", "Pro, Max, Team, Enterprise — verify plan features."),
          s(", active internet, allowlisted folders, connectors as needed."),
        ],
        [
          s("For schedules and Dispatch: "),
          x("machine awake", "Dedicated ops workstation with sleep disabled during windows."),
          s(". Enterprise may deploy desktop via "),
          x("AWS / Google Cloud / Microsoft Foundry", "Full desktop experience in regulated cloud — June 2026 enterprise option."),
          s(" for data residency. Microsoft 365 connector for Outlook/Teams/OneDrive — parallel to Google stack (Ch 4)."),
        ],
      ],
      workflowSteps: [
        "Publish PLATFORM_REQ.md: OS, plan, sleep policy, network.",
        "Regulated orgs: evaluate Foundry desktop path with IT.",
        "Document M365 vs Google connector map per workflow.",
      ],
      artifact: {
        id: "platform-requirements-checklist",
        title: "Platform requirements checklist",
        content: `[ ] macOS or Windows desktop app (latest)
[ ] Paid Claude plan (team/enterprise)
[ ] Internet always during runs
[ ] Ops machine: no sleep 5am–8am (or your window)
[ ] Dispatch: mobile paired if used
[ ] Foundry/VPC desktop if required by policy`,
      },
    }),
  ],
};
