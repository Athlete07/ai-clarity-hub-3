import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_COWORK_FOUNDATIONS } from "./chapters/ch01/concept-01-cowork-foundations";
import { CONCEPT_02_COWORK_INTERFACE } from "./chapters/ch01/concept-02-cowork-interface";

export const CHAPTER_01_UNDERSTANDING_COWORK: GuideChapter = {
  slug: "ch01-understanding-cowork",
  number: 1,
  title: "Understanding Cowork",
  subtitle:
    "What Cowork actually is — the mental model that makes everything else in this playbook make sense",
  readingMinutes: 100,
  intro: [
    "Cowork is not Claude with a different skin. It is Claude wired to your filesystem, your calendar, and your standard operating procedures — able to run while you sleep if you did the hard work of defining what “done” looks like.",
    "This chapter builds the ",
    x(
      "COO mental model",
      "Treat Cowork as an operations manager executing checklists — not a chatbot you persuade.",
    ),
    " and maps every control surface you will live in for the rest of the playbook: dashboard, builder, Skills, schedules, history, and billing.",
  ],
  keyInsight:
    "Cowork automates file-and-task pipelines you can document as SOPs — Claude.ai explores ideas; Cowork runs the Monday morning you already know by heart.",
  concepts: [CONCEPT_01_COWORK_FOUNDATIONS, CONCEPT_02_COWORK_INTERFACE],
  diagrams: [
    {
      id: "cowork-stack",
      title: "Where Cowork sits in the Claude stack",
      caption:
        "Pick by who acts and what persists — not by which launch blog you read last.",
      steps: [
        { label: "Claude.ai", desc: "Think & draft", tool: "Browser" },
        { label: "Cowork", desc: "File ops & schedules", tool: "Desktop" },
        { label: "Claude Code", desc: "Ship software", tool: "Terminal" },
        { label: "API", desc: "Your product", tool: "Backend" },
      ],
    },
    {
      id: "workflow-layers",
      title: "Cowork workflow layers",
      caption: "Build and test one layer at a time — never schedule an untested stack.",
      steps: [
        { label: "Trigger", desc: "Schedule / manual", tool: "When" },
        { label: "Ingest", desc: "Read allowlisted paths", tool: "Input" },
        { label: "Transform", desc: "Skills + Claude", tool: "Logic" },
        { label: "Output", desc: "Write staging", tool: "Artefact" },
        { label: "Notify", desc: "Human review", tool: "HITL" },
      ],
    },
  ],
  mindmap: {
    center: "Cowork = COO",
    caption: "If you cannot write the SOP, you are not ready to schedule the workflow.",
    branches: [
      {
        id: "foundations",
        label: "Foundations",
        description: "What it is / is not",
        children: [
          { label: "File automation", description: "Not chat replacement" },
          { label: "vs Claude.ai", description: "Schedule + disk" },
          { label: "vs Claude Code", description: "Ops vs engineering" },
        ],
      },
      {
        id: "interface",
        label: "Interface",
        description: "Mission control",
        children: [
          { label: "Builder + Skills", description: "Compose SOPs" },
          { label: "Schedule + History", description: "Trust but verify" },
          { label: "Permissions", description: "Least privilege" },
        ],
      },
    ],
  },
  businessContext: [
    "You adopted Claude for thinking work — but you still manually download exports, rename files, and paste summaries into Slack every Monday. Cowork exists so ",
    x(
      "repeatable operations",
      "Tasks with stable inputs, rules, and outputs — not one-off strategy sessions.",
    ),
    " stop depending on you remembering the checklist.",
    "This chapter prevents the two classic failures: treating Cowork like Claude.ai (no schedules, no scope) or like Claude Code (wrong user, wrong security model).",
  ],
  decisionCriteria: [
    {
      question: "Do you run the same file-based process at least weekly?",
      yesMeans:
        "Cowork is a strong fit — finish this chapter, then prototype one workflow in sandbox.",
    },
    {
      question: "Is your work primarily coding in a repository?",
      yesMeans:
        "Prioritise Claude Code; revisit Cowork for business ops adjacent to engineering exports.",
    },
    {
      question: "Will unattended runs touch sensitive folders?",
      yesMeans:
        "Read 1.5, 1.8, and 2.7 before scheduling — narrow permissions and human-in-the-loop tiers are mandatory.",
    },
    {
      question: "Does leadership need audit trails for automated steps?",
      yesMeans:
        "Run history (2.5) and notification policy (2.6) are required design inputs, not optional.",
    },
  ],
  architecture: {
    title: "Cowork execution loop",
    caption: "The loop every scheduled workflow runs — design each stage explicitly.",
    steps: [
      { label: "Trigger fires", desc: "Time or manual", tool: "Schedule" },
      { label: "Ingest files", desc: "Allowlisted paths", tool: "Disk" },
      { label: "Skills + Claude", desc: "Transform", tool: "Model" },
      { label: "Write outputs", desc: "Staging first", tool: "Files" },
      { label: "Log + notify", desc: "History + alert", tool: "Ops" },
    ],
  },
  artifacts: [
    {
      id: "cowork-sop-starter",
      title: "Cowork SOP starter template",
      description: "Fill before opening the workflow builder.",
      content: `## Workflow name
## Owner
## Trigger (manual / cron)
## Input paths (allowlisted)
## Steps (numbered, like onboarding a human COO)
## Output paths (staging vs production)
## Failure behaviour (stop / notify / skip)
## Human approval tier (T0–T3)
## Model tier per step`,
    },
  ],
  caseStudy: {
    title: "20-person agency — Cowork as shared COO",
    scenario:
      "A digital agency ran 14 retainer clients with identical Monday reporting — pull ad CSVs, normalise, draft insights, drop decks in client folders. Three account leads spent 6+ hours each Sunday.",
    before:
      "Manual downloads, inconsistent filenames, Claude.ai chats duplicated per client, no logs when someone was sick.",
    after:
      "Chapter 1 workshop; sandbox → production rollout. Shared Skills library; per-client workflows differed only by folder paths. Dashboard + history owned by ops lead.",
    metrics: [
      "Sunday ops time → 6 hr/person to 45 min review",
      "Missed Monday deliverables → 0 in two quarters",
      "Client NPS on reporting timeliness → +18 points",
      "Claude token spend → predictable weekly digest to finance",
    ],
  },
  failurePoints: [
    {
      problem: "Scheduling before sandbox proof — production data corrupted.",
      fix: "Follow 1.8 checklist: read-only → write sandbox → write production with alerts.",
    },
    {
      problem: "Granting entire home directory — security incident or data leak.",
      fix: "2.7 least privilege; quarterly audits; dedicated ops machine.",
    },
    {
      problem: "Duplicated prompts across workflows — silent quality drift.",
      fix: "2.3 Skills library; single owner per Skill; version changelog.",
    },
    {
      problem: "Opus on every step — finance backlash kills program.",
      fix: "2.8 model routing; default economical tiers; Opus by exception.",
    },
  ],
};
