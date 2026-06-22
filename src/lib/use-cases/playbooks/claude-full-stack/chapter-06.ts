import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_PROJECTS_VS_CHATS } from "./chapters/ch06/concept-01-projects-vs-chats";
import { CONCEPT_02_DESIGNING_PROJECTS } from "./chapters/ch06/concept-02-designing-projects";
import { CONCEPT_03_SHARED_PROJECTS } from "./chapters/ch06/concept-03-shared-projects";

export const CHAPTER_06_PROJECTS: GuideChapter = {
  slug: "ch06-projects",
  number: 6,
  title: "Projects — The Power User's Operating System",
  subtitle:
    "The most underused feature in Claude — how Projects transform Claude from a chat tool into a persistent work environment",
  readingMinutes: 75,
  intro: [
    "Chapters 3 and 5 introduced Projects as settings and memory layers. Chapter 6 treats Projects as your ",
    x(
      "operating system",
      "A configured environment — instructions, knowledge, conversations — for serious recurring work.",
    ),
    " — the feature that separates casual Claude use from professional daily practice.",
    "Most users stay in ephemeral chats. Power users live in Projects: role, client, domain, and workflow environments that compound every session.",
  ],
  keyInsight:
    "A Project is not a folder — it is configured Claude. Instructions are your system prompt; knowledge is your corpus; conversations are scoped work. Design Projects deliberately and they eliminate re-explaining forever.",
  concepts: [
    CONCEPT_01_PROJECTS_VS_CHATS,
    CONCEPT_02_DESIGNING_PROJECTS,
    CONCEPT_03_SHARED_PROJECTS,
  ],
  diagrams: [
    {
      id: "project-anatomy",
      title: "Project anatomy",
      caption:
        "Three persistent layers every power-user Project includes.",
      steps: [
        { label: "Instructions", desc: "System prompt", tool: "Behaviour" },
        { label: "Knowledge", desc: "Files + INDEX", tool: "Memory" },
        { label: "Chats", desc: "Scoped threads", tool: "Work" },
      ],
    },
    {
      id: "project-portfolio-types",
      title: "Project portfolio types",
      caption:
        "Role, client, domain, workflow — four Project archetypes most professionals need.",
      steps: [
        { label: "Role", desc: "Your job", tool: "Daily" },
        { label: "Client", desc: "Boundary", tool: "Account" },
        { label: "Domain", desc: "Subject depth", tool: "Reference" },
        { label: "Workflow", desc: "Recurring SOP", tool: "Process" },
      ],
    },
  ],
  mindmap: {
    center: "Projects as OS",
    caption: "Three concepts — distinction, design, team collaboration.",
    branches: [
      {
        id: "distinction",
        label: "vs Chats",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "When Project", description: "Compound context" },
          { label: "Design mindset", description: "Environment not folder" },
        ],
      },
      {
        id: "design",
        label: "Design craft",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Archetypes", description: "Role/client/domain" },
          { label: "Portfolio", description: "Organise many" },
        ],
      },
      {
        id: "team",
        label: "Team sharing",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "Governance", description: "Owner + curator" },
          { label: "Metrics", description: "Effectiveness" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team uses Claude but everyone configures from scratch — re-uploading brand guides, re-explaining voice, inconsistent deliverables, client context in wrong threads.",
    "This chapter turns Projects into ",
    x(
      "shared infrastructure",
      "Configured environments with instructions, knowledge, governance, and metrics — not personal chat history.",
    ),
    " — the highest-leverage Claude.ai feature for individuals and teams.",
  ],
  decisionCriteria: [
    {
      question: "Do you paste the same background or rules more than once per week?",
      yesMeans:
        "Yes — create a Project (Concept 1.4) before the third re-paste.",
    },
    {
      question: "Do multiple people need the same Claude configuration?",
      yesMeans:
        "Yes — Concept 3 shared Projects with governance.",
    },
    {
      question: "Do you work with multiple clients or products needing isolation?",
      yesMeans:
        "Yes — separate client Projects (2.3); never mix in one chat.",
    },
    {
      question: "Has output quality varied wildly across team members?",
      yesMeans:
        "Yes — shared instructions as team standards (3.2) + canonical tests (2.7).",
    },
  ],
  architecture: {
    title: "Project lifecycle",
    caption:
      "From charter to team-scale configured Claude.",
    steps: [
      { label: "Charter", desc: "Purpose + tests", tool: "Design" },
      { label: "Configure", desc: "Instructions + KB", tool: "Build" },
      { label: "Test", desc: "Canonical prompts", tool: "Quality" },
      { label: "Scale", desc: "Share + govern", tool: "Team" },
    ],
  },
  artifacts: [
    {
      id: "project-kickoff-checklist",
      title: "New Project kickoff checklist",
      description: "Run before declaring any Project production-ready.",
      content: `□ Charter (purpose, users, boundary)
□ Instructions from template (2.1)
□ INDEX.md + first knowledge files
□ 5 canonical test prompts defined
□ 90% pass on tests
□ Naming convention applied
□ Owner assigned (solo or team)
□ Review date in calendar`,
    },
    {
      id: "client-project-starter",
      title: "Client Project starter pack",
      description: "Files and instructions for new client engagement.",
      content: `KNOWLEDGE:
- SOW / contract summary
- Brand & tone guide
- Org chart + stakeholders
- DECISION_LOG.md (empty)
- TIMELINE.md

INSTRUCTIONS:
- Client voice rules
- Confidentiality: no other clients
- Default artifact for deliverables
- Escalation: legal/finance to [human]`,
    },
  ],
  caseStudy: {
    title: "Agency — Projects as client operating system",
    scenario:
      "A 35-person digital agency had senior staff with great Claude setups in personal chats. Juniors got generic output. Client context leaked between accounts in rushed threads.",
    before:
      "No Project standard. Re-uploaded briefs. No shared instructions. Account leads as bottlenecks.",
    after:
      "CLIENT_[name] Project template mandatory. Shared brand Project for agency voice. Governance: curator uploads, owner edits instructions. Onboarding Project for juniors. Canonical tests per client vertical.",
    metrics: [
      "Junior draft acceptance rate → up 45%",
      "Client context incidents → zero in 2 quarters",
      "Account lead time on AI setup → 2h/client to 20 min (template)",
      "Team Claude adoption → 88% using Projects vs stray chats",
    ],
  },
  failurePoints: [
    {
      problem: "Projects as file dumps — no instructions, no INDEX.",
      fix: "Project design mindset 1.8; instruction template 2.1 first.",
    },
    {
      problem: "One Project for everything — context bleed.",
      fix: "Portfolio archetypes 2.8; client isolation 2.3.",
    },
    {
      problem: "Shared instructions edited by everyone — chaos.",
      fix: "Governance charter 3.4; version control 3.7.",
    },
    {
      problem: "Never testing configuration — drift undetected.",
      fix: "Canonical tests 2.7; effectiveness scorecard 3.8.",
    },
  ],
};
