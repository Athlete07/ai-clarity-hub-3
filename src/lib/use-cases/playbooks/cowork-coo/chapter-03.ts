import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_SCHEDULING_FOUNDATIONS } from "./chapters/ch03/concept-01-scheduling-foundations";
import { CONCEPT_02_AUTOPILOT_WORKFLOWS } from "./chapters/ch03/concept-02-autopilot-workflows";
import { CONCEPT_03_SKILL_PIPELINES } from "./chapters/ch03/concept-03-skill-pipelines";

export const CHAPTER_03_SCHEDULING_AUTOPILOT: GuideChapter = {
  slug: "ch03-scheduling-autopilot",
  number: 3,
  title: "Scheduling Skills on Autopilot",
  subtitle:
    "The automation layer — how to schedule Skills to run without you, what triggers them, and how to manage the results",
  readingMinutes: 150,
  intro: [
    "Chapters 1–2 gave you the COO mental model and Skills as contracts. Chapter 3 turns contracts into ",
    x(
      "autopilot",
      "Tested Skills bound to time, event, or condition triggers — with monitoring, resource limits, and failure policies.",
    ),
    " — workflows that run while you focus on work only you can do.",
    "You will master trigger types, eight reference autopilot workflows, and ",
    x("Skill pipelines", "Chained Skills with manifest handoffs — the architecture behind genuine operational automation."),
    " from intelligence briefings to inbox-to-action and data-to-decision.",
  ],
  keyInsight:
    "Schedule only tested Skills — time, event, and condition triggers each need different guardrails; pipelines fail loud with manifest handoffs, not silent mega-prompts.",
  concepts: [
    CONCEPT_01_SCHEDULING_FOUNDATIONS,
    CONCEPT_02_AUTOPILOT_WORKFLOWS,
    CONCEPT_03_SKILL_PIPELINES,
  ],
  diagrams: [
    {
      id: "trigger-types",
      title: "Three trigger types",
      caption: "Pick trigger by how work arrives — not by what's easiest in the UI.",
      steps: [
        { label: "Time", desc: "Cron / calendar", tool: "Predictable" },
        { label: "Event", desc: "File / folder", tool: "Reactive" },
        { label: "Condition", desc: "Flag / threshold", tool: "Logical" },
      ],
    },
    {
      id: "pipeline-dag",
      title: "Skill pipeline DAG",
      caption: "One TAR per node — manifest handoffs between steps.",
      steps: [
        { label: "Skill A", desc: "Ingest", tool: "Step 1" },
        { label: "manifest", desc: "Handoff", tool: "Contract" },
        { label: "Skill B", desc: "Transform", tool: "Step 2" },
        { label: "QA", desc: "Verify", tool: "Gate" },
        { label: "Notify", desc: "Deliver", tool: "Last mile" },
      ],
    },
  ],
  mindmap: {
    center: "Autopilot",
    caption: "Night shift runs Cowork; morning triage runs you — three minutes on dashboard + history.",
    branches: [
      {
        id: "scheduling",
        label: "Scheduling",
        description: "Triggers + reliability",
        children: [
          { label: "Time / event / condition", description: "Three types" },
          { label: "Resource caps", description: "Tokens + files" },
          { label: "Morning triage", description: "Monitor without PC" },
        ],
      },
      {
        id: "workflows",
        label: "Autopilot workflows",
        description: "8 reference designs",
        children: [
          { label: "Daily brief", description: "Overnight → morning" },
          { label: "Doc inbox", description: "Watch → route" },
          { label: "QA layer", description: "Automated checks" },
        ],
      },
      {
        id: "pipelines",
        label: "Pipelines",
        description: "Chain Skills",
        children: [
          { label: "Handoff manifest", description: "Versioned JSON" },
          { label: "Fail-fast", description: "Contain errors" },
          { label: "Intel → brief", description: "Reference DAG" },
        ],
      },
    ],
  },
  businessContext: [
    "You have Skills that pass manual tests — but you still open Cowork every Monday to kick off the same chain. Chapter 3 is how ",
    x(
      "scheduled automation",
      "Triggers + monitoring + failure policy — automation you trust enough to walk away from.",
    ),
    " replaces heroic calendar rituals.",
    "The scheduling mindset inventory (§1.8) and eight workflow templates (Concept 2) give you copy-paste designs; pipelines (Concept 3) show how to chain Skills without rebuilding monolithic prompts.",
  ],
  decisionCriteria: [
    {
      question: "Does this task happen on a predictable cadence with stable inputs?",
      yesMeans:
        "Start with time-based schedule (§1.2) — stagger away from other heavy jobs.",
    },
    {
      question: "Does work arrive unpredictably when files land in a folder?",
      yesMeans:
        "Event trigger with debounce + idempotency (§1.3) — inbox workflow (§2.2).",
    },
    {
      question: "Does upstream export timing vary but a flag signals readiness?",
      yesMeans:
        "Condition trigger (§1.4) — avoid empty cron runs.",
    },
    {
      question: "Are multiple Skills involved in one operational SOP?",
      yesMeans:
        "Build pipeline with manifest handoffs (§3.3) — fail-fast default (§3.5).",
    },
  ],
  architecture: {
    title: "Autopilot stack",
    caption: "Trigger → pipeline → QA → notify — monitoring wraps every layer.",
    steps: [
      { label: "Trigger", desc: "Time / event / condition", tool: "When" },
      { label: "Pipeline", desc: "Skill chain", tool: "How" },
      { label: "QA", desc: "Automated checks", tool: "Verify" },
      { label: "Staging", desc: "HITL review", tool: "Human" },
      { label: "Notify", desc: "Digest / alert", tool: "Awareness" },
    ],
  },
  artifacts: [
    {
      id: "schedule-inventory-ch3",
      title: "Weekly schedule inventory",
      description: "Map calendar repeats to automate-now vs human-only.",
      content: `| Task | Cadence | Skill | Trigger | HITL |`,
    },
    {
      id: "handoff-manifest-ch3",
      title: "Pipeline handoff manifest",
      description: "Versioned contract between Skills.",
      content: `manifest.json: pipeline_id, run_id, step, producer, schema_version, outputs[]`,
    },
    {
      id: "morning-triage-ch3",
      title: "Morning triage checklist",
      description: "Three-minute dashboard + history review.",
      content: `Dashboard red? History failures? Manifests present? Budget OK?`,
    },
  ],
  caseStudy: {
    title: "Ops lead — Monday without opening exports",
    scenario:
      "A 25-person B2B company ran Monday sales, support, and pipeline rituals manually — three leaders, 4+ hours, frequent 'which CSV is latest?' Slack threads.",
    before:
      "Skills existed but no schedules; event inbox had no debounce; one failed run went unnoticed until the board pre-read.",
    after:
      "Chapter 3 rollout: condition-triggered data refresh, Sunday night weekly aggregation, 5:30am intel-to-brief pipeline, QA gate before notify, morning triage checklist.",
    metrics: [
      "Monday prep → 4 hr collective to 45 min review",
      "Missed refresh SLA → alerted by 7:15am (was discovered at noon)",
      "Pipeline fail-fast → zero downstream reports on bad data",
      "Token spend → predictable; staggered schedules cut overlap 40%",
    ],
  },
  failurePoints: [
    {
      problem: "Cron on flaky upstream — empty runs burn tokens daily.",
      fix: "§1.4 condition triggers; export_ready.flag lifecycle.",
    },
    {
      problem: "File drop triggers 20 overlapping runs.",
      fix: "§1.3 debounce + batch limits + skip_if_running.",
    },
    {
      problem: "Silent pipeline failure — downstream report looks fine, numbers wrong.",
      fix: "§3.5 fail-fast + §2.7 QA_SKILL before notify.",
    },
    {
      problem: "Alert fatigue — team mutes #ops.",
      fix: "§2.8 fail loud / succeed quiet; monthly alert audit.",
    },
  ],
};
