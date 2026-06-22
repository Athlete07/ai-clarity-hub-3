import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_PROMPTING_FOUNDATIONS } from "./chapters/ch04/concept-01-prompting-foundations";
import { CONCEPT_02_ADVANCED_PROMPTING } from "./chapters/ch04/concept-02-advanced-prompting";
import { CONCEPT_03_PROMPT_TRAP_CATALOGUE } from "./chapters/ch04/concept-03-prompt-trap-catalogue";
import { CONCEPT_04_COMMAND_GRADE_PROMPTING } from "./chapters/ch04/concept-04-command-grade-prompting";

export const CHAPTER_04_PROMPTING: GuideChapter = {
  slug: "ch04-prompting",
  number: 4,
  title: "Prompting — From Basic to Command-Grade",
  subtitle:
    "The complete prompting curriculum — the foundations, the advanced techniques, and the professional-grade patterns that separate power users from everyone else",
  readingMinutes: 90,
  intro: [
    "Chapters 1–3 gave you the mental model, the economics, and the interface. Chapter 4 is where output quality becomes ",
    x(
      "intentional",
      "Not luck, not charisma, not 'being good at AI' — a repeatable skill with structure and tests.",
    ),
    " — the full prompting curriculum from first principles to team-scale practice.",
    "Most people stop at clever one-liners. Power users build templates, chains, libraries, and audits. This chapter is that ladder.",
  ],
  keyInsight:
    "A prompt is a specification — instructions, context, examples, and format. Master those four, then layer advanced techniques and command-grade systems so quality scales beyond any individual chat.",
  concepts: [
    CONCEPT_01_PROMPTING_FOUNDATIONS,
    CONCEPT_02_ADVANCED_PROMPTING,
    CONCEPT_03_PROMPT_TRAP_CATALOGUE,
    CONCEPT_04_COMMAND_GRADE_PROMPTING,
  ],
  diagrams: [
    {
      id: "prompt-stack",
      title: "Prompt quality stack",
      caption:
        "Foundations first; advanced techniques on top; traps avoided at every layer; command-grade systems make it team-durable.",
      steps: [
        { label: "I/C/E/F", desc: "Four components", tool: "Foundation" },
        { label: "CoT + few-shot", desc: "Advanced", tool: "Technique" },
        { label: "Trap audit", desc: "Failure modes", tool: "Quality" },
        { label: "Templates + RISEN", desc: "Command-grade", tool: "Scale" },
      ],
    },
    {
      id: "iteration-loop",
      title: "Command-grade iteration loop",
      caption:
        "Draft → critique → revise → template — the loop that turns one good session into a reusable asset.",
      steps: [
        { label: "Draft", desc: "First pass", tool: "Chat" },
        { label: "Critique", desc: "Gaps + assumptions", tool: "Rubric" },
        { label: "Revise", desc: "Targeted fix", tool: "Artifact" },
        { label: "Template", desc: "Version + test", tool: "Library" },
      ],
    },
  ],
  mindmap: {
    center: "Command-grade prompts",
    caption: "Four concepts — learn, advance, avoid traps, systematise.",
    branches: [
      {
        id: "foundations",
        label: "Foundations",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Anatomy + specificity", description: "I/C/E/F" },
          { label: "Iteration", description: "Not one-shot" },
        ],
      },
      {
        id: "advanced",
        label: "Advanced techniques",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "CoT + few-shot", description: "Accuracy" },
          { label: "Chains + structure", description: "Scale" },
        ],
      },
      {
        id: "traps",
        label: "Trap catalogue",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "Vague + novel", description: "Common errors" },
          { label: "Compliance", description: "Verify before ship" },
        ],
      },
      {
        id: "command",
        label: "Command-grade",
        description: "Concept 4 — 4.1–4.8",
        children: [
          { label: "RISEN + templates", description: "Structure" },
          { label: "Library + audit", description: "Team scale" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team uses Claude daily but output quality varies wildly — star performers have private prompts in Notes; everyone else gets generic first drafts and blames the tool.",
    "This chapter replaces hero prompting with ",
    x(
      "prompt engineering discipline",
      "Templates, tests, version control, and shared libraries — the same rigour you'd expect for code or copy guidelines.",
    ),
    ". The goal is not longer prompts — it's repeatable specifications that survive handoffs and model updates.",
  ],
  decisionCriteria: [
    {
      question: "Do you use Claude for recurring task types (reports, specs, emails, research)?",
      yesMeans:
        "Yes — prioritise Concept 4 templates and library; ROI is immediate.",
    },
    {
      question: "Have you shipped something from Claude without verifying facts?",
      yesMeans:
        "Yes — read Concept 3 traps before your next customer-facing output.",
    },
    {
      question: "Are you building API features that depend on structured Claude output?",
      yesMeans:
        "Yes — Concepts 2.4, 2.6, and 4.3–4.4 are mandatory.",
    },
    {
      question: "Does more than one person on your team need the same output quality?",
      yesMeans:
        "Yes — Concept 4.8 sharing and prompt audits are your operating system.",
    },
  ],
  architecture: {
    title: "Prompt lifecycle",
    caption:
      "How command-grade teams treat prompts — from draft to tested template in the library.",
    steps: [
      { label: "Draft", desc: "RISEN + I/C/E/F", tool: "Individual" },
      { label: "Test", desc: "5-case eval", tool: "Quality" },
      { label: "Version", desc: "Git or Notion", tool: "Control" },
      { label: "Publish", desc: "Team library", tool: "Scale" },
    ],
  },
  artifacts: [
    {
      id: "prompt-quality-rubric",
      title: "Quick prompt quality rubric",
      description: "Score any prompt in 2 minutes before production use.",
      content: `□ Instructions: single clear task?
□ Context: only what's needed?
□ Examples: 1–3 if task is nuanced?
□ Format: skeleton or schema?
□ Length/tone: numeric or sample?
□ Verification: cite or flag unknown?
□ Tested on 3 inputs in last 30 days?

7/7 → promote to library | <5 → revise first`,
    },
    {
      id: "team-prompt-onboarding",
      title: "Team prompt onboarding (30 min)",
      description: "Run once per new hire or quarterly refresh.",
      content: `1. Tour prompt library — top 5 templates for their role (10 min)
2. Walk one RISEN example live (5 min)
3. Trap catalogue: vagueness + compliance (5 min)
4. Exercise: improve a bad prompt using rubric (10 min)
5. Homework: submit one tested template fork`,
    },
  ],
  caseStudy: {
    title: "B2B marketing org — from prompt chaos to library governance",
    scenario:
      "A 25-person marketing team had 200+ ad hoc Claude chats bookmarked. Brand voice drifted; legal flagged an unverified stat; new hires asked 'which prompt?' in Slack daily.",
    before:
      "No templates, no tests, no owners. Best prompts lived in one senior manager's inbox. Iteration was optional; one-shot was the norm.",
    after:
      "Chapter 4 rollout: 12 audited templates (RISEN structure), prompt guild monthly, library in Team Project, trap poster in onboarding. API-bound workflows got XML-tagged system prompts in git with eval suite.",
    metrics: [
      "Draft-to-approved time → down 38% on recurring assets",
      "Brand voice revision rounds → down from 2.1 avg to 0.8",
      "Compliance flags on published content → 3 in Q1 to 0 in Q2",
      "New hire time-to-first-quality-output → 2 weeks to 3 days",
    ],
  },
  failurePoints: [
    {
      problem: "Collecting prompts without testing — library becomes a junk drawer.",
      fix: "Prompt audit rubric (4.7); nothing enters library without 5 passing test cases.",
    },
    {
      problem: "Over-engineering prompts before understanding the task.",
      fix: "Start Concept 1; add advanced techniques only when foundation fails.",
    },
    {
      problem: "Copying 'mega prompts' from social media without context.",
      fix: "Trap catalogue 3.1 + 3.6; adapt with your I/C/E/F and examples.",
    },
    {
      problem: "Treating system prompts as set-and-forget across model upgrades.",
      fix: "Version control + re-eval on model change (4.6).",
    },
  ],
};
