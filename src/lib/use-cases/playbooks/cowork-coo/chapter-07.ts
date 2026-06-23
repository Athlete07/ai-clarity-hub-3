import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_NATIVE_CAPABILITIES } from "./chapters/ch07/concept-01-native-capabilities";
import { CONCEPT_02_ENTERPRISE_POWER_HABITS } from "./chapters/ch07/concept-02-enterprise-power-habits";

export const CHAPTER_07_PRODUCT_SURFACE: GuideChapter = {
  slug: "ch07-product-surface-power-user",
  number: 7,
  title: "Product Surface & Power User Guide",
  subtitle:
    "Native Cowork capabilities, enterprise observability, steering habits, and patterns vs product controls",
  readingMinutes: 100,
  intro: [
    "Chapters 1–6 teach how to run Cowork as production ops. Chapter 7 maps the ",
    x(
      "actual product surface",
      "Plugins, subagents, Projects, Dispatch, Chrome, VM sandbox, citations — what Anthropic ships today.",
    ),
    " and the ",
    x("power habits", "Goal+cadence delegation, steering, native vs pattern discipline."),
    " that close the gap between our playbook patterns and the desktop app.",
    "Read this chapter before telling your team to find a cron field that does not exist — and before your compliance team assumes Compliance API already covers Cowork.",
  ],
  keyInsight:
    "Plugins accelerate, Skills encode your SOPs, schedules industrialise — delegate first, steer second, crystallise third; audit with run history + manifests until platform audit catches up.",
  concepts: [CONCEPT_01_NATIVE_CAPABILITIES, CONCEPT_02_ENTERPRISE_POWER_HABITS],
  diagrams: [
    {
      id: "product-layers",
      title: "Cowork product layers",
      caption: "Plugin → Skill → Schedule — three layers, one library.",
      steps: [
        { label: "Plugins", desc: "Role packs", tool: "Start" },
        { label: "Skills", desc: "Org TAR", tool: "Customise" },
        { label: "Schedule", desc: "Cadence", tool: "Automate" },
        { label: "Dispatch", desc: "Mobile kickoff", tool: "Ad hoc" },
      ],
    },
    {
      id: "native-vs-pattern",
      title: "Native vs playbook pattern",
      caption: "Patterns are ops discipline implemented on top of native controls.",
      steps: [
        { label: "Native", desc: "UI controls", tool: "Product" },
        { label: "Pattern", desc: "manifest, flags", tool: "Ops" },
        { label: "Audit", desc: "History + bundle", tool: "Today" },
        { label: "Compliance API", desc: "Verify coverage", tool: "Enterprise" },
      ],
    },
  ],
  mindmap: {
    center: "Product + habits",
    caption: "Faithful to the app; rigorous in production.",
    branches: [
      {
        id: "native",
        label: "Native capabilities",
        description: "What ships",
        children: [
          { label: "Plugins", description: "Role packs" },
          { label: "Subagents", description: "Parallel work" },
          { label: "Dispatch + Chrome", description: "Extend reach" },
        ],
      },
      {
        id: "habits",
        label: "Power habits",
        description: "How experts work",
        children: [
          { label: "Goal + cadence", description: "Delegate first" },
          { label: "Steering", description: "Mid-run control" },
          { label: "Citations", description: "Grounded output" },
        ],
      },
      {
        id: "enterprise",
        label: "Enterprise",
        description: "Scale + audit",
        children: [
          { label: "RBAC + marketplace", description: "Govern" },
          { label: "OTel + analytics", description: "Observe" },
          { label: "Audit gap", description: "History now" },
        ],
      },
    ],
  },
  businessContext: [
    "The first six chapters are how we want every customer to operate. Chapter 7 is ",
    x(
      "what the product actually is",
      "So operators use Plugins and Dispatch, security understands VM boundaries, and compliance knows Compliance API limits.",
    ),
    " — the architect sign-off chapter.",
  ],
  decisionCriteria: [
    {
      question: "Are you onboarding non-operators to Cowork?",
      yesMeans:
        "Start §2.1 goal+cadence delegation — not the Skill editor.",
    },
    {
      question: "Does your industry need cited deliverables?",
      yesMeans:
        "§1.7 citation rules in every Result template + QA gate.",
    },
    {
      question: "Will compliance audit Cowork usage?",
      yesMeans:
        "§2.7 audit bundle monthly — do not assume Compliance API alone.",
    },
    {
      question: "Are you hunting UI controls from playbook patterns?",
      yesMeans:
        "Read §2.3 native vs pattern legend before rollout.",
    },
  ],
  architecture: {
    title: "Complete Cowork stack",
    caption: "Ch 7 sits above Ch 1–6 — product truth feeding ops discipline.",
    steps: [
      { label: "Product", desc: "Plugins, VM, Dispatch", tool: "Ch 7" },
      { label: "Skills", desc: "TAR contracts", tool: "Ch 2" },
      { label: "Connect", desc: "MCP + Chrome", tool: "Ch 4" },
      { label: "Schedule", desc: "Autopilot", tool: "Ch 3" },
      { label: "Produce", desc: "Gates + audit", tool: "Ch 5" },
    ],
  },
  artifacts: [
    {
      id: "native-vs-pattern-ch7",
      title: "Native vs pattern legend",
      description: "Avoid confusing ops conventions with menu items.",
      content: `NATIVE: schedule, Skills, plugins, connectors, history
PATTERN: cron overlap, flags, manifest.json, VALIDATE_*`,
    },
    {
      id: "platform-req-ch7",
      title: "Platform requirements checklist",
      description: "Desktop, plan, awake machine, Foundry if needed.",
      content: `Desktop · paid plan · internet · sleep policy · pairing for Dispatch`,
    },
  ],
  caseStudy: {
    title: "Enterprise rollout — product surface closes the gap",
    scenario:
      "A financial services pilot passed ops review (Ch 5) but failed security review because teams described cron UI, assumed Compliance API coverage, and scheduled Chrome steps unattended.",
    before:
      "No plugin registry; Dispatch on sleeping laptops; uncited briefs to executives; 'sandbox' meant only a folder name.",
    after:
      "Chapter 7 rollout: PLUGIN_REGISTRY, PLATFORM_REQ.md, native vs pattern tags, citation QA, monthly AUDIT_BUNDLE, Foundry desktop for traders, M365 connector map.",
    metrics: [
      "Security review passed with VM + Chrome policy documented",
      "Compliance accepted AUDIT_BUNDLE until API coverage ships",
      "Onboarding time → 2 days with goal+cadence path vs 2 weeks Skill-first",
      "Plugin reuse → 40% of workflows started from marketplace packs",
    ],
  },
  failurePoints: [
    {
      problem: "Treating playbook patterns as missing product features.",
      fix: "§2.3 native vs pattern; implement patterns via Skills + folders.",
    },
    {
      problem: "Unattended Chrome or screen control on PII.",
      fix: "§1.5 deny Chrome on schedules; connectors only.",
    },
    {
      problem: "Compliance API assumed — audit gap in due diligence.",
      fix: "§2.7 run history + manifest export; verify API changelog quarterly.",
    },
    {
      problem: "Schedules on laptops that sleep.",
      fix: "§2.8 platform requirements + dedicated ops machine.",
    },
  ],
};
