import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_HIDDEN_CAPABILITY_STACK } from "./chapters/ch10/concept-01-hidden-capability-stack";
import { CONCEPT_02_TRAP_CATALOGUE } from "./chapters/ch10/concept-02-trap-catalogue";
import { CONCEPT_03_POWER_USER_MENTAL_MODELS } from "./chapters/ch10/concept-03-power-user-mental-models";
import { CONCEPT_04_ADVANCED_CAPABILITY_TRAPS } from "./chapters/ch10/concept-04-advanced-capability-traps";

export const CHAPTER_10_POWER_USER_HACKS: GuideChapter = {
  slug: "ch10-power-user-hacks",
  number: 10,
  title: "Power User Hacks, Traps & Mental Models",
  subtitle:
    "The accumulated wisdom of heavy Claude use — what nobody tells you until you've wasted enough time finding out yourself",
  readingMinutes: 95,
  intro: [
    "Ten chapters in, you know the stack. Chapter 10 is the ",
    x(
      "field manual",
      "Hidden techniques, failure traps, and mental models that separate heavy users from tourists — without learning each the hard way.",
    ),
    " — the wisdom usually acquired after months of friction.",
    "Capabilities like mid-response steering and self-critique, traps like sycophancy and version drift, and models like configuration-before-conversation tie the whole playbook together.",
  ],
  keyInsight:
    "Power users configure before they chat, iterate instead of vending-machine prompting, verify by risk tier, and promote repeat work to workflows — while knowing exactly which traps to avoid.",
  concepts: [
    CONCEPT_01_HIDDEN_CAPABILITY_STACK,
    CONCEPT_02_TRAP_CATALOGUE,
    CONCEPT_03_POWER_USER_MENTAL_MODELS,
    CONCEPT_04_ADVANCED_CAPABILITY_TRAPS,
  ],
  diagrams: [
    {
      id: "power-user-loop",
      title: "Power user refinement loop",
      caption:
        "Configure → prompt → self-critique → verify → workflow promotion.",
      steps: [
        { label: "Configure", desc: "Project + docs", tool: "Setup" },
        { label: "Prompt", desc: "Steer + iterate", tool: "Draft" },
        { label: "Critique", desc: "Self + red team", tool: "Quality" },
        { label: "Verify", desc: "Risk tier", tool: "Trust" },
        { label: "Systematize", desc: "Workflow", tool: "Scale" },
      ],
    },
    {
      id: "trap-map",
      title: "Trap severity map",
      caption:
        "Hallucination, privacy, injection = high cost; format drift, context drift = fixable with habit.",
      steps: [
        { label: "Hallucination", desc: "Verify facts", tool: "High" },
        { label: "Sycophancy", desc: "Ask dissent", tool: "Medium" },
        { label: "Privacy", desc: "Redact + policy", tool: "High" },
        { label: "Version", desc: "Regression set", tool: "Medium" },
      ],
    },
  ],
  mindmap: {
    center: "Power User Wisdom",
    caption: "Hidden stack → trap catalogue → mental models.",
    branches: [
      {
        id: "hidden",
        label: "Hidden capabilities",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Steer + regenerate", description: "Control" },
          { label: "Self-critique", description: "Quality" },
        ],
      },
      {
        id: "traps",
        label: "Trap catalogue",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Hallucination + privacy", description: "Risk" },
          { label: "Drift + version", description: "Decay" },
        ],
      },
      {
        id: "models",
        label: "Mental models",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "Configure first", description: "Setup" },
          { label: "Total cost", description: "ROI" },
        ],
      },
    ],
  },
  businessContext: [
    "Teams plateau when everyone uses Claude heavily but nobody shares traps, tiers, or workflows — same mistakes, uneven quality.",
    "Chapter 10 is the ",
    x(
      "operating wisdom layer",
      "Codifies what veterans know: when to interrupt, what never to paste, how to think in portfolios and total cost.",
    ),
    " for leads onboarding power users without six months of scrapes.",
  ],
  decisionCriteria: [
    {
      question: "Do outputs vary wildly between team members on the same task?",
      yesMeans:
        "Yes — adopt verification tiers (3.5) and workflow promotion (3.7).",
    },
    {
      question: "Has anyone pasted credentials or PII into Claude?",
      yesMeans:
        "Yes — privacy trap training (2.6) and tier policy immediately.",
    },
    {
      question: "Do users treat first response as final?",
      yesMeans:
        "Yes — teach iteration model (3.4) and self-critique (1.3).",
    },
    {
      question: "Did a prompt break after a model update?",
      yesMeans:
        "Yes — version trap protocol (2.8) with regression prompt set.",
    },
  ],
  architecture: {
    title: "Power user maturity",
    caption:
      "Tourist → habitual → configured → systematic → teaching others.",
    steps: [
      { label: "Tourist", desc: "Ad hoc chat", tool: "Start" },
      { label: "Habitual", desc: "Knows traps", tool: "Ch 10.2" },
      { label: "Configured", desc: "Project portfolio", tool: "Ch 10.3" },
      { label: "Systematic", desc: "Workflows + tiers", tool: "Ch 9–10" },
      { label: "Multiplier", desc: "Trains team", tool: "Scale" },
    ],
  },
  artifacts: [
    {
      id: "power-user-daily-card",
      title: "Power user daily checklist",
      description: "Pin near your Claude workspace.",
      content: `□ Right Project selected?
□ Task: creative or precise mode?
□ External output tier assigned (T0–T3)?
□ Self-critique on high-stakes drafts?
□ Sensitive data redacted?
□ Third repetition → workflow candidate?`,
    },
    {
      id: "trap-response-card",
      title: "Trap quick response",
      content: `Hallucination → require source; verify
Sycophancy → ask steel-man counter-argument
Context drift → compress + new chat
Format drift → re-lock schema + retry
Privacy → stop; redact; check policy
Injection → untrusted-data instruction; no auto-act
Version → run regression set; pin API model`,
    },
  ],
  caseStudy: {
    title: "Consulting firm — from heavy use to heavy leverage",
    scenario:
      "80 consultants, universal Claude access, wildly inconsistent deliverable quality, one client incident from unverified stat in a deck.",
    before:
      "No verification tiers, persona drift on long proposals, chat sprawl, senior partners re-doing junior work silently.",
    after:
      "Ch 10 playbook session: self-critique in all client Projects, T2 verification for external docs, trap catalogue in onboarding, workflow registry for proposals and research (Ch 9).",
    metrics: [
      "Client-facing factual errors → down 90% in two quarters",
      "Proposal first-draft acceptance → up from 40% to 75%",
      "Senior rework hours → down ~30% per engagement",
      "Prompt regression set → catches model update breaks pre-client",
    ],
  },
  failurePoints: [
    {
      problem: "Treating Chapter 10 as optional 'tips' content.",
      fix: "Make trap catalogue + verification tiers mandatory onboarding.",
    },
    {
      problem: "Self-critique theater — Claude rubber-stamps itself.",
      fix: "Separate critic pass; require specific weaknesses (1.3).",
    },
    {
      problem: "Configuration debt — Projects never updated.",
      fix: "Quarterly Project review; version changelog (2.8).",
    },
    {
      problem: "Ignoring total cost — expensive model on cheap tasks.",
      fix: "Tier models per subtask; track human review time (3.8).",
    },
  ],
};
