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
  title: "Claude — The Full Stack Decoded",
  summary:
    "The complete Claude power-user playbook — mental model, economics, Claude.ai mastery, prompting, tools, and production systems.",
  kind: "tool-guide",
  categoryId: "product-engineering",
  tags: ["Claude", "Anthropic", "AI Tools", "Power User", "Multi-chapter"],
  roles: ["pm", "founder", "business-leader", "marketer", "sme-owner"],
  timeToImplement: "8+ hr series",
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
  guide: {
    series: {
      id: SERIES_ID,
      title: "Claude — The Full Stack Decoded",
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
    "This is a ",
    x(
      "multi-chapter playbook",
      "One catalog entry with many chapters — like a book, not a folder of separate PDFs.",
    ),
    ". Start with Chapter 1 if Claude is new; Ch 2 pricing; Ch 3 Claude.ai; Ch 4 prompting; Ch 5 memory; Ch 6 Projects; Ch 7 MCP; Ch 8 Claude Code; Ch 9 workflows; Ch 10 power user wisdom.",
  ],
  decisionCriteria: [],
  architecture: {
    title: "Playbook arc",
    caption: "Read in order for full stack literacy — or jump to the chapter that matches your bottleneck.",
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
    title: "Why one playbook, many chapters",
    scenario:
      "Teams treated each Claude topic as a separate doc — mental model in Notion, pricing in a finance deck, prompts in Slack pins. Nothing linked; onboarding was archaeology.",
    before:
      "Six disconnected resources, duplicate explanations, no shared progress tracking.",
    after:
      "Single playbook slug in the library; chapter sidebar for navigation; per-chapter completion and comments.",
    metrics: [
      "Onboarding sources → 1 playbook URL",
      "New chapter publish → same slug, new route",
      "Library clutter → 1 entry instead of N",
    ],
  },
  failurePoints: [],
};
