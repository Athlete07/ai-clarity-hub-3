import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_WHAT_CLAUDE_IS } from "./chapters/ch01/concept-01-what-claude-is";
import { CONCEPT_02_ECOSYSTEM } from "./chapters/ch01/concept-02-ecosystem";
import { CONCEPT_03_PLATFORM_CAPABILITIES } from "./chapters/ch01/concept-03-platform-capabilities";

export const CHAPTER_01_MENTAL_MODEL: GuideChapter = {
  slug: "ch01-mental-model",
  number: 1,
  title: "The Claude Mental Model",
  subtitle:
    "Before you touch the interface — the foundational understanding that separates power users from prompt typers",
  readingMinutes: 75,
  intro: [
    "Most people open Claude like a search box with manners. Power users open it like an instrument — they know what it can hear, what it forgets, which surface to use, and why the same prompt sometimes answers differently.",
    "This chapter is not a feature tour. It is the ",
    x(
      "operating system layer",
      "The mental models and ecosystem map you need before tactics, prompts, or integrations make sense.",
    ),
    " for everything that follows in this playbook: interfaces, APIs, agents, office plugins, and production systems.",
  ],
  keyInsight:
    "Claude is a stateless, probabilistic reasoning engine with a finite context window — living inside a growing product ecosystem. Master those four facts and every feature click becomes intentional.",
  concepts: [CONCEPT_01_WHAT_CLAUDE_IS, CONCEPT_02_ECOSYSTEM, CONCEPT_03_PLATFORM_CAPABILITIES],
  diagrams: [
    {
      id: "reasoning-loop",
      title: "How Claude produces an answer",
      caption:
        "Not lookup — prediction. Each step samples from probable continuations until the response completes.",
      steps: [
        { label: "Your prompt", desc: "Text, files, images", tool: "Input" },
        { label: "Context assembly", desc: "System + history + tools", tool: "Window" },
        { label: "Token prediction", desc: "Probabilistic reasoning", tool: "Model" },
        { label: "Your answer", desc: "One sample of many possible", tool: "Output" },
      ],
    },
    {
      id: "ecosystem-map",
      title: "Anthropic Claude surfaces",
      caption:
        "Choose by who acts and where data lives — not by hype. Most organisations need 2–3 surfaces, not all eight.",
      steps: [
        { label: "Claude.ai", desc: "Human knowledge work", tool: "Projects" },
        { label: "API", desc: "Your product backend", tool: "Scale" },
        { label: "Claude Code", desc: "Repo agent", tool: "Terminal" },
        { label: "Chrome / Office", desc: "UI-bound work", tool: "Desktop" },
        { label: "MCP", desc: "Live systems", tool: "Extensibility" },
        { label: "Skills", desc: "Procedures", tool: "Packages" },
      ],
    },
  ],
  mindmap: {
    center: "Pick your surface",
    caption:
      "Start from actor and data sensitivity — not from the newest launch announcement.",
    branches: [
      {
        id: "human",
        label: "Human explores",
        description: "Claude.ai + Projects",
        children: [
          { label: "Strategy & writing", description: "Sonnet in Projects" },
          { label: "File-heavy analysis", description: "Upload + artifacts" },
        ],
      },
      {
        id: "builder",
        label: "Software ships",
        description: "API + Code + MCP",
        children: [
          { label: "Customer-facing AI", description: "Messages API" },
          { label: "Engineering velocity", description: "Claude Code" },
          { label: "Internal tools", description: "MCP connectors" },
        ],
      },
      {
        id: "desktop",
        label: "Desktop & web UIs",
        description: "Chrome, Excel, Cowork",
        children: [
          { label: "No API on portal", description: "Claude in Chrome" },
          { label: "Models & decks", description: "Excel / PowerPoint" },
        ],
      },
    ],
  },
  businessContext: [
    "You adopted Claude because everyone else did — but your team still copies prompts from Twitter, hits mysterious refusals, picks the wrong product for the job, and wonders why 'the AI forgot' what you said Tuesday.",
    "The gap is not intelligence. It is ",
    x(
      "architecture literacy",
      "Understanding how the system works — memory, surfaces, models — so you design workflows instead of gambling on chats.",
    ),
    ". This chapter gives you the same foundation Anthropic engineers assume you have — without requiring a machine learning degree.",
  ],
  decisionCriteria: [
    {
      question:
        "Will you use Claude at least 3 times per week for professional work in the next month?",
      yesMeans:
        "Yes — invest 55 minutes in this chapter; it pays back on every future session.",
    },
    {
      question:
        "Do you need Claude inside a product your customers use (not just internal chat)?",
      yesMeans:
        "Yes — pay special attention to sections 1.2, 1.4, 2.2, and 2.7; you'll need API + tools, not only Claude.ai.",
    },
    {
      question:
        "Does your work involve sensitive data (legal, medical, financial, unreleased product)?",
      yesMeans:
        "Yes — read 1.5, 1.8, and 2.8 carefully; surface choice and prompt framing affect compliance.",
    },
    {
      question:
        "Are multiple people on your team using different Claude products without a shared standard?",
      yesMeans:
        "Yes — section 2.8 gives you a surface map to document as team policy.",
    },
  ],
  architecture: {
    title: "Claude reasoning loop",
    caption:
      "The mental model every power user internalises before writing advanced prompts or building integrations.",
    steps: [
      { label: "Prompt + context", desc: "Instructions, files, history", tool: "You own this" },
      { label: "Attention budget", desc: "Finite window", tool: "Manage actively" },
      { label: "Sampled completion", desc: "Probabilistic output", tool: "Verify results" },
      { label: "Persistence", desc: "Projects / API / MCP", tool: "You build this" },
    ],
  },
  artifacts: [
    {
      id: "surface-picker",
      title: "Claude surface picker",
      description: "Paste into your team wiki — one decision per row.",
      content: `| Task | Actor | Data | Surface |
|------|-------|------|---------|
| Draft strategy memo | Human | Internal | Claude.ai Project |
| Customer-facing chatbot | Software | Customer PII | API + your auth |
| Fix failing tests in repo | Engineer | Code | Claude Code |
| Pull data from vendor portal | Ops | Login session | Claude in Chrome |
| Board variance commentary | Finance | Confidential | Excel plugin |
| Live Notion + Slack context | Team | Mixed | MCP + Claude Desktop |

Rule: if two rows match, pick the one with better logging and audit trail.`,
    },
    {
      id: "session-handoff",
      title: "Session handoff template",
      description: "End every long Claude.ai thread with this — paste into next chat.",
      content: `## Session handoff — [DATE]

### Decisions made
- 

### Open questions
- 

### Constraints (do not violate)
- 

### Next actions
1. 

### Context to load
- [files, links, Project name]`,
    },
  ],
  caseStudy: {
    title: "Distributed product org — 90 days to coherent Claude practice",
    scenario:
      "A 180-person product company had engineers on Claude Code, PMs on Claude.ai, marketing on free accounts, and one rogue API key in a side project. Security flagged data risk; leadership flagged inconsistent quality.",
    before:
      "No shared mental model. PMs assumed Claude 'remembered' pricing. Engineers burned Opus tokens on lint fixes. Legal saw unapproved Chrome extension use on client portals.",
    after:
      "Chapter 1 workshop (this content) became mandatory 60-min onboarding. Team published SURFACE_MAP.md, SESSION_HANDOFF template, and model routing (Haiku/Sonnet/Opus). API centralized under platform team with logging.",
    metrics: [
      "Inference spend → down 48% with model routing",
      "Security incidents from shadow tools → 0 in Q2",
      "Self-reported 'Claude confusion' in pulse survey → 34% to 9%",
      "Time to first useful output for new hires → 3 days to 4 hours",
    ],
  },
  failurePoints: [
    {
      problem:
        "Treating Claude like Google — single-shot questions without context or verification.",
      fix: "Adopt Projects + handoff template; require sources for factual claims in team outputs.",
    },
    {
      problem: "Using Opus for every task because 'it's the best'.",
      fix: "Implement Haiku → Sonnet → Opus routing from section 1.7; review monthly spend by task type.",
    },
    {
      problem: "Assuming memory across chats — decisions drift, versions conflict.",
      fix: "Single source of truth doc in a Project; session handoffs mandatory for multi-day work.",
    },
    {
      problem: "Rolling out MCP and Chrome extensions company-wide without allowlists.",
      fix: "Pilot read-only MCP; document approved surfaces in 2.8 before expanding.",
    },
  ],
};
