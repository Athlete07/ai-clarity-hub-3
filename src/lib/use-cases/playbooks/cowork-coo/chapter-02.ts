import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_WHAT_A_SKILL_IS } from "./chapters/ch02/concept-01-what-a-skill-is";
import { CONCEPT_02_TAR_FRAMEWORK } from "./chapters/ch02/concept-02-tar-framework";
import { CONCEPT_03_SKILL_LIBRARY } from "./chapters/ch02/concept-03-skill-library";

export const CHAPTER_02_SKILLS_TAR_FRAMEWORK: GuideChapter = {
  slug: "ch02-skills-tar-framework",
  number: 2,
  title: "Skills — The TAR Framework",
  subtitle:
    "The core unit of Cowork — how Skills work, what makes a great Skill, and the TAR framework that structures every Skill you write",
  readingMinutes: 150,
  intro: [
    "Chapter 1 gave you the COO mental model and the Cowork control surfaces. Chapter 2 gives you the ",
    x(
      "Skill",
      "The repeatable instruction contract — inputs, steps, outputs, destination — that workflows invoke.",
    ),
    " — the atomic unit every workflow composes.",
    "You will learn what separates a Skill from a chat prompt, how ",
    x("TAR", "Task, Action, Result — the three-part spec that makes Skills auditable and schedulable."),
    " structures reliable automation, and how to grow a Skill library that compounds instead of cluttering.",
  ],
  keyInsight:
    "Skills are contracts, not conversations — Task defines why, Action defines how, Result defines done; schedule only after five clean manual runs.",
  concepts: [
    CONCEPT_01_WHAT_A_SKILL_IS,
    CONCEPT_02_TAR_FRAMEWORK,
    CONCEPT_03_SKILL_LIBRARY,
  ],
  diagrams: [
    {
      id: "skill-anatomy",
      title: "Skill anatomy — five components",
      caption: "Every component must be explicit before scheduling — ambiguity becomes variance.",
      steps: [
        { label: "Trigger", desc: "When it runs", tool: "Schedule" },
        { label: "Context", desc: "Files + schema", tool: "Input" },
        { label: "Instructions", desc: "Ordered steps", tool: "Action" },
        { label: "Output", desc: "Format + quality", tool: "Result" },
        { label: "Destination", desc: "Path + notify", tool: "Emit" },
      ],
    },
    {
      id: "tar-framework",
      title: "TAR framework",
      caption: "Write Task and Result before Action — scope and done-ness prevent instruction bloat.",
      steps: [
        { label: "Task", desc: "Bounded purpose", tool: "Why" },
        { label: "Action", desc: "Steps + VERIFY", tool: "How" },
        { label: "Result", desc: "Format + acceptance", tool: "Done" },
      ],
    },
  ],
  mindmap: {
    center: "Skills = contracts",
    caption: "Prompts explore; Skills execute — TAR makes execution reviewable.",
    branches: [
      {
        id: "what",
        label: "What a Skill is",
        description: "Unit of automation",
        children: [
          { label: "vs prompts", description: "Structure + version" },
          { label: "Anatomy", description: "5 components" },
          { label: "Test before schedule", description: "5-run gate" },
        ],
      },
      {
        id: "tar",
        label: "TAR",
        description: "Task · Action · Result",
        children: [
          { label: "Task", description: "One sentence scope" },
          { label: "Action", description: "VERIFY gates" },
          { label: "Result", description: "Acceptance test" },
        ],
      },
      {
        id: "library",
        label: "Skill library",
        description: "Compound value",
        children: [
          { label: "5 types", description: "File · research · etc." },
          { label: "Naming", description: "DOMAIN_VERB_vN" },
          { label: "Share bundle", description: "TAR + golden tests" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team already has winning Claude.ai prompts — but prompts do not survive schedules. Chapter 2 turns tribal knowledge into ",
    x(
      "versioned Skills",
      "Named, testable procedures with explicit inputs and outputs — reusable across workflows and teammates.",
    ),
    " so Monday morning does not depend on who wrote the best chat thread last week.",
    "The TAR framework is how you review Skills without reading prose novels — and how you debug failures in minutes instead of reverting to manual heroics.",
  ],
  decisionCriteria: [
    {
      question: "Does the same prompt run weekly with the same attachments?",
      yesMeans:
        "Promote to Skill v1 using TAR template (§2.8) — do not keep scheduling chat.",
    },
    {
      question: "Can you state the Task in one sentence with non-goals?",
      yesMeans:
        "Ready to draft Action steps — if not, split into multiple Skills.",
    },
    {
      question: "Do you have golden input/output pairs from a human baseline?",
      yesMeans:
        "Run §1.8 test matrix — five passes unlock scheduling.",
    },
    {
      question: "Will multiple teammates run this Skill?",
      yesMeans:
        "Use §3.8 share bundle — TAR spec + fixtures + PATH_MAPPING before export.",
    },
  ],
  architecture: {
    title: "Skill → workflow composition",
    caption: "One Task per Skill; complex pipelines chain Skills — do not bury chains inside one prompt.",
    steps: [
      { label: "Skill A", desc: "Ingest + extract", tool: "File" },
      { label: "Skill B", desc: "Analyse + flag", tool: "Analysis" },
      { label: "Skill C", desc: "Draft update", tool: "Comms" },
      { label: "Workflow", desc: "Schedule + HITL", tool: "Cowork" },
      { label: "Library", desc: "SKILL_INDEX", tool: "Ops" },
    ],
  },
  artifacts: [
    {
      id: "tar-skill-template-ch2",
      title: "TAR Skill template",
      description: "Copy for every new Skill — fill Task and Result before Action.",
      content: `# SKILL_NAME_v1

## Task
[One sentence + non-goals]

## Action
1. VERIFY / ON FAIL per step

## Result
Format · quality checks · destination · acceptance test`,
    },
    {
      id: "skill-test-matrix-ch2",
      title: "Skill test matrix",
      description: "Five cases before any schedule goes live.",
      content: `Golden · Empty · Bad schema · 2× volume · Idempotent rerun`,
    },
  ],
  caseStudy: {
    title: "Finance ops — from prompt graveyard to Skill library",
    scenario:
      "A 40-person SaaS company had 23 saved Claude.ai prompts for monthly close — different wording, different outputs, no audit trail. Close week took 3 days of spreadsheet archaeology.",
    before:
      "Ad hoc prompts per analyst; scheduled Cowork job failed silently when CSV headers shifted; no owner for 'the invoice prompt.'",
    after:
      "Chapter 2 rollout: 8 TAR Skills (ingest, normalise, variance, memo draft); DOMAIN_VERB_vN naming; SKILL_INDEX owned by finance ops; share bundles for new hires.",
    metrics: [
      "Close prep time → 3 days to 1 day with human review",
      "Scheduled Skill failures → traced to Action VERIFY gaps, fixed in v2",
      "Duplicate prompts → 23 to 8 canonical Skills",
      "New analyst onboarding → sandbox golden test in 2 hours",
    ],
  },
  failurePoints: [
    {
      problem: "Scheduling a chat prompt without SCHEMA — confident wrong summaries.",
      fix: "§1.2 promotion gate + §1.3 anatomy checklist before Cowork UI.",
    },
    {
      problem: "Kitchen-sink Skill — extract, analyse, email, archive in one blob.",
      fix: "§1.5 workflow chaining; one Task per Skill; TAR per node.",
    },
    {
      problem: "Vague Result ('professional tone') — output length and structure drift.",
      fix: "§2.4 templates + acceptance tests; split COMPUTE vs NARRATE Skills.",
    },
    {
      problem: "Exported Skill to teammate without golden fixtures — works on your machine only.",
      fix: "§3.8 share bundle with PATH_MAPPING and SKILL_TEST_LOG.",
    },
  ],
};
