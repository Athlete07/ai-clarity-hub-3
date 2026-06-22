import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_CLAUDE_CODE_FOUNDATIONS } from "./chapters/ch08/concept-01-claude-code-foundations";
import { CONCEPT_02_CORE_WORKFLOWS } from "./chapters/ch08/concept-02-core-workflows";
import { CONCEPT_03_ADVANCED_PATTERNS } from "./chapters/ch08/concept-03-advanced-patterns";
import { CONCEPT_04_BUILDING_AGENTS } from "./chapters/ch08/concept-04-building-agents";
import { CONCEPT_05_AGENT_SKILLS_PLUGINS } from "./chapters/ch08/concept-05-agent-skills-plugins";

export const CHAPTER_08_CLAUDE_CODE: GuideChapter = {
  slug: "ch08-claude-code",
  number: 8,
  title: "Claude Code — End to End",
  subtitle:
    "The complete guide to Claude Code — from installation to production-grade agentic coding workflows",
  readingMinutes: 110,
  intro: [
    "Chapters 1 and 7 introduced Claude Code and MCP in the stack. Chapter 8 is the ",
    x(
      "full engineering guide",
      "Install, daily workflows, advanced patterns, and building agents — terminal to production.",
    ),
    " — for developers and technical leads shipping software with an autonomous coding agent.",
    "Claude Code is not smarter autocomplete. It is a collaborator with shell access — powerful when bounded by TASK specs, CLAUDE.md, git discipline, and human review.",
  ],
  keyInsight:
    "Treat Claude Code as an implementer, not an architect — give it CLAUDE.md context, bounded TASK.md acceptance criteria, branch/PR/CI gates, and extend outward into custom agents when coding loops become products.",
  concepts: [
    CONCEPT_01_CLAUDE_CODE_FOUNDATIONS,
    CONCEPT_02_CORE_WORKFLOWS,
    CONCEPT_03_ADVANCED_PATTERNS,
    CONCEPT_04_BUILDING_AGENTS,
    CONCEPT_05_AGENT_SKILLS_PLUGINS,
  ],
  diagrams: [
    {
      id: "claude-code-loop",
      title: "Claude Code agent loop",
      caption:
        "Task spec → plan → read/edit/run → observe → repeat until tests pass or human stops.",
      steps: [
        { label: "TASK.md", desc: "Spec + criteria", tool: "You" },
        { label: "Plan", desc: "Files + steps", tool: "Agent" },
        { label: "Execute", desc: "Edit + shell", tool: "Agent" },
        { label: "PR", desc: "Human review", tool: "Team" },
      ],
    },
    {
      id: "agent-build-stack",
      title: "Building agents stack",
      caption:
        "Scaffold → tools → loop → memory — same patterns Claude Code uses internally.",
      steps: [
        { label: "Scaffold", desc: "API loop", tool: "Code" },
        { label: "Tools", desc: "MCP/API", tool: "Integrate" },
        { label: "State", desc: "Memory", tool: "Persist" },
        { label: "Multi-agent", desc: "Supervisor", tool: "Scale" },
      ],
    },
  ],
  mindmap: {
    center: "Claude Code E2E",
    caption: "Foundations → workflows → advanced → build agents.",
    branches: [
      {
        id: "foundations",
        label: "Foundations",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Agent vs assistant", description: "Mindset" },
          { label: "Safety", description: "Approvals" },
        ],
      },
      {
        id: "workflows",
        label: "Core workflows",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Bugs + features", description: "Daily" },
          { label: "Tests + docs", description: "Quality" },
        ],
      },
      {
        id: "advanced",
        label: "Advanced",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "CLAUDE.md", description: "Context" },
          { label: "Git + CI", description: "Production" },
        ],
      },
      {
        id: "agents",
        label: "Build agents",
        description: "Concept 4 — 4.1–4.8",
        children: [
          { label: "Scaffold + tools", description: "Foundation" },
          { label: "Multi-agent", description: "Scale" },
        ],
      },
    ],
  },
  businessContext: [
    "Engineering leaders hear 'AI wrote 80% of the code' but see review bottlenecks, surprise diffs, and incidents from unbounded agent runs.",
    "This chapter codifies ",
    x(
      "agentic engineering discipline",
      "The same rigor as human contributors — specs, branches, tests, review — applied to Claude Code and agents you build with it.",
    ),
    " so velocity gains don't trade off reliability.",
  ],
  decisionCriteria: [
    {
      question: "Are engineers pasting large code blocks into Claude.ai?",
      yesMeans:
        "Yes — pilot Claude Code on bounded repo tasks (Concept 2).",
    },
    {
      question: "Do you need autonomous cross-tool workflows (tickets + code + CI)?",
      yesMeans:
        "Yes — Concepts 3.7 MCP + Concept 4 workflow agents.",
    },
    {
      question: "Has an agent change ever merged without human review?",
      yesMeans:
        "Yes — stop; implement 3.5 git policy and 3.8 production checklist immediately.",
    },
    {
      question: "Is the team building customer-facing AI agents?",
      yesMeans:
        "Yes — Concept 4 full path; Claude Code as dev environment.",
    },
  ],
  architecture: {
    title: "Claude Code adoption path",
    caption:
      "Read-only → bounded tasks → PR discipline → custom agents.",
    steps: [
      { label: "Explain", desc: "Read-only onboarding", tool: "Week 1" },
      { label: "TASK", desc: "Bug/feature SOP", tool: "Week 2–4" },
      { label: "CLAUDE.md", desc: "Team context", tool: "Ongoing" },
      { label: "Agents", desc: "Product loops", tool: "Optional" },
    ],
  },
  artifacts: [
    {
      id: "task-md-template",
      title: "TASK.md template for Claude Code",
      description: "Attach to every agent delegation.",
      content: `# TASK: [title]

## Goal
[one paragraph]

## Acceptance criteria
- [ ] ...

## Scope
Files/modules IN: ...
Files/modules OUT: ...

## Commands
test: \`...\`
lint: \`...\`

## Stop condition
[e.g. all tests green]

## Notes
[links, tickets, constraints]`,
    },
    {
      id: "eng-agent-policy",
      title: "Engineering agent policy (summary)",
      content: `ALLOWED: feature branches, tests, docs, refactors in scope
FORBIDDEN: direct main commits, prod creds, unreviewed merge
REQUIRED: TASK.md, PR review, CI green, CLAUDE.md maintained
MCP: read-only default; writes need charter (Ch 7)`,
    },
  ],
  caseStudy: {
    title: "Fintech API team — Claude Code at scale",
    scenario:
      "40 engineers, legacy Java services, slow onboarding. Copilot helped lines but not cross-file migrations. Ad hoc Claude.ai paste caused inconsistent fixes.",
    before:
      "No CLAUDE.md, no TASK template, agents on main, review fatigue, 2 hotfix reverts from agent PRs.",
    after:
      "Claude Code rollout: CLAUDE.md per service, TASK.md mandatory, feature/agent-* branches, agent PR checklist, read-only week 1. Built internal research agent (Concept 4.4) for compliance doc scans.",
    metrics: [
      "Median bug-fix time → down 35% on bounded tasks",
      "Agent PR revert rate → 8% to <2% after policy",
      "New engineer time-to-first-PR → 10 days to 4",
      "Custom agent compliance scan → 12 hrs/week analyst time saved",
    ],
  },
  failurePoints: [
    {
      problem: "Vague tasks → huge unreviewable diffs.",
      fix: "TASK.md with scope + acceptance criteria (1.8, artifact).",
    },
    {
      problem: "No CLAUDE.md → agent re-discovers repo every session.",
      fix: "3.2 template; owner per service.",
    },
    {
      problem: "Auto-approve destructive shell commands.",
      fix: "1.6 permissions; branch-only policy.",
    },
    {
      problem: "Building multi-agent before single-agent loop works.",
      fix: "4.2 scaffold + 4.4 research agent first.",
    },
  ],
};
