import { x } from "../../explain";
import type { UseCasePlaybook } from "../../types";
import { CHAPTER_01_MENTAL_MODEL } from "./chapter-01";
import { CHAPTER_02_PLANS_PRICING } from "./chapter-02";
import { CHAPTER_03_INTERFACE_POWER_USER } from "./chapter-03";
import { CHAPTER_04_PROMPTING } from "./chapter-04";
import { CHAPTER_05_MEMORY_CONTEXT } from "./chapter-05";
import { CHAPTER_06_PROJECTS } from "./chapter-06";
import { CHAPTER_07_MCP } from "./chapter-07";
import { CHAPTER_08_CLAUDE_CODE } from "./chapter-08";
import { CHAPTER_09_PRODUCTION_WORKFLOWS } from "./chapter-09";
import { CHAPTER_10_POWER_USER_HACKS } from "./chapter-10";

const SERIES_ID = "claude-full-stack";

export const CLAUDE_FULL_STACK: UseCasePlaybook = {
  slug: "claude-full-stack",
  title: "Claude in Production: MCP, Code, and the Practitioner's Roadmap",
  summary:
    "Stop treating Claude like a chatbot with a billing page. Ten chapters take you from mental model to MCP, Claude Code, Agent Skills, and production workflows — the stack practitioners ship, not the hype cycle vendors sell.",
  heroBullets: [
    "10 chapters · read in order or jump to the bottleneck that’s costing you time",
    "Claude.ai → MCP → Claude Code → Agent Skills — one arc, not scattered blog posts",
    "~15 hours of depth — examples, workflows, and copy-paste artifacts you can use today",
  ],
  kind: "tool-guide",
  categoryId: "product-engineering",
  tags: [
    "10 Chapters",
    "Claude",
    "Agent Skills",
    "MCP",
    "Claude Code",
    "Power User",
  ],
  roles: ["pm", "founder", "business-leader", "marketer", "sme-owner"],
  timeToImplement: "10 chapters · ~15 hr read",
  tools: [
    "Claude.ai",
    "Claude API",
    "Claude Code",
    "Claude in Chrome",
    "MCP",
  ],
  costEstimate: "Free tier → Enterprise + metered API",
  readingMinutes: 920,
  updatedAt: "2026-06-22",
  searchKeywords: [
    "Claude",
    "Anthropic",
    "Haiku",
    "Sonnet",
    "Opus",
    "Claude pricing",
    "tokens",
    "Claude Pro",
    "Claude API",
    "MCP",
    "Claude Code",
    "context window",
    "prompt caching",
    "Claude.ai settings",
    "custom instructions",
    "Claude memory",
    "artifacts",
    "web search",
    "deep research",
    "prompting",
    "chain of thought",
    "few-shot",
    "RISEN framework",
    "prompt templates",
    "system prompt",
    "RAG",
    "1 million tokens",
    "lost in the middle",
    "knowledge base",
    "Claude Projects",
    "project instructions",
    "shared projects",
    "Model Context Protocol",
    "MCP connectors",
    "MCP server",
    "CLAUDE.md",
    "agentic coding",
    "AI agents",
    "production workflows",
    "human in the loop",
    "workflow automation",
    "hallucination",
    "prompt injection",
    "sycophancy",
    "power user",
    "Agent Skills",
    "SKILL.md",
    "extended thinking",
    "computer use",
    "vision",
    "multimodal",
    "Amazon Bedrock",
    "Vertex AI",
    "Microsoft Foundry",
    "Claude Desktop",
    "MCP Apps",
    "plugins",
    "Cowork",
    "Microsoft 365",
    "Figma",
    "Salesforce",
    "Claude Max",
    "Dropbox",
    "Box",
    "GitLab",
    "Zendesk",
    "Intercom",
    "Batch API",
  ],
  guide: {
    series: {
      id: SERIES_ID,
      title: "Claude in Production: MCP, Code, and the Practitioner's Roadmap",
      subtitle:
        "Mental model → Claude.ai → MCP → Claude Code → Agent Skills → production workflows. Ten chapters. One stack.",
    },
    chapters: [
      CHAPTER_01_MENTAL_MODEL,
      CHAPTER_02_PLANS_PRICING,
      CHAPTER_03_INTERFACE_POWER_USER,
      CHAPTER_04_PROMPTING,
      CHAPTER_05_MEMORY_CONTEXT,
      CHAPTER_06_PROJECTS,
      CHAPTER_07_MCP,
      CHAPTER_08_CLAUDE_CODE,
      CHAPTER_09_PRODUCTION_WORKFLOWS,
      CHAPTER_10_POWER_USER_HACKS,
    ],
  },
  businessContext: [
    "Most teams adopt Claude in fragments — a pricing spreadsheet here, a prompt doc there, an engineer experimenting with MCP in a side channel. Nobody shares the same mental model, so ",
    x(
      "quality and cost drift",
      "Inconsistent outputs, surprise token bills, and duplicated experiments across people who don’t know what others already tried.",
    ),
    ". This playbook is the single path from “we have Claude seats” to “we know which surface to use, how to prompt, how to connect tools, and how to ship workflows that survive contact with reality.”",
    " Read Chapter 1 if Claude is new. Jump to Ch 2 for pricing, Ch 7 for MCP, Ch 8 for Claude Code, or Ch 10 when you’re ready for traps and mental models that separate power users from prompt typers.",
  ],
  decisionCriteria: [
    {
      question: "You’re paying for Claude but outcomes still feel random?",
      yesMeans:
        "Start with Ch 1 (mental model) and Ch 4 (prompting). Most “Claude doesn’t work for us” complaints trace back to surface choice and prompt structure — not model quality.",
    },
    {
      question: "You need to justify plan tier, API spend, or team rollout?",
      yesMeans:
        "Ch 2 maps plans, tokens, and caching economics so finance and engineering speak the same language before you scale.",
    },
    {
      question: "You want Claude inside your stack — Notion, GitHub, CRM, code?",
      yesMeans:
        "Ch 6–8 cover Projects, MCP connectors, and Claude Code. Ch 9 shows how to wire cross-surface workflows that don’t break in production.",
    },
    {
      question: "You’ve heard about Agent Skills, extended thinking, or Cowork?",
      yesMeans:
        "Ch 1, 3, 8, and 10 cover platform capabilities, interface toggles, Skills/plugins, and the traps that bite teams who enable features without understanding tradeoffs.",
    },
  ],
  architecture: {
    title: "Playbook arc",
    caption:
      "Read in order for full-stack literacy — or jump to the chapter that matches your bottleneck.",
    steps: [
      { label: "Ch 1", desc: "Mental model & ecosystem", tool: "Foundation" },
      { label: "Ch 2", desc: "Plans & token economics", tool: "Budget" },
      { label: "Ch 3", desc: "Claude.ai interface", tool: "Daily use" },
      { label: "Ch 4", desc: "Prompting mastery", tool: "Quality" },
      { label: "Ch 5", desc: "Memory & context", tool: "Architecture" },
      { label: "Ch 6", desc: "Projects OS", tool: "Workspace" },
      { label: "Ch 7", desc: "MCP layer", tool: "Connect" },
      { label: "Ch 8", desc: "Claude Code", tool: "Engineering" },
      { label: "Ch 9", desc: "Production workflows", tool: "Systems" },
      { label: "Ch 10", desc: "Hacks & traps", tool: "Mastery" },
    ],
  },
  phases: [],
  artifacts: [],
  caseStudy: {
    title: "What changes when the stack clicks",
    scenario:
      "A product team had Claude Pro seats, an API key in a vault, and one engineer using Claude Code — but PMs still rewrote the same briefs every week, support couldn’t trust answers, and nobody knew when to use Projects vs. chat vs. MCP.",
    before:
      "Ad hoc prompts in DMs, duplicate context in every thread, no shared project instructions, MCP experiments siloed with engineering.",
    after:
      "Shared mental model, Projects for recurring workstreams, MCP for live data, Claude Code for implementation — with prompting and failure-mode guardrails the whole team understands.",
    metrics: [
      "Pick the right Claude surface on the first try",
      "Estimate token cost before you scale a workflow",
      "Wire MCP and Agent Skills without security surprises",
      "Ship production workflows with human-in-the-loop checkpoints",
    ],
  },
  failurePoints: [
    {
      problem: "Treating Claude like a search box with manners",
      fix: "Ch 1 + Ch 4: understand stateless reasoning and structure prompts for the outcome you need — not the question you’d type into Google.",
    },
    {
      problem: "Surprise bills from API or team usage",
      fix: "Ch 2: map plans, caching, and batch patterns before you automate high-volume flows.",
    },
    {
      problem: "Context rot — answers ignore your docs halfway through a long thread",
      fix: "Ch 5–6: Projects, file strategy, and context architecture beat pasting the same PDF every time.",
    },
    {
      problem: "MCP or Skills enabled without a threat model",
      fix: "Ch 7–8 + Ch 10: connector scope, prompt injection, and capability traps — enable power features with eyes open.",
    },
  ],
};
