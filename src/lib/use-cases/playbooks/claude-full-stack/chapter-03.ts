import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_SETTINGS_DEEP_DIVE } from "./chapters/ch03/concept-01-settings-deep-dive";
import { CONCEPT_02_ARTIFACT_SYSTEM } from "./chapters/ch03/concept-02-artifact-system";
import { CONCEPT_03_WEB_SEARCH_RESEARCH } from "./chapters/ch03/concept-03-web-search-research";
import { CONCEPT_04_CLAUDE_AI_CAPABILITIES } from "./chapters/ch03/concept-04-claude-ai-capabilities";

export const CHAPTER_03_INTERFACE_POWER_USER: GuideChapter = {
  slug: "ch03-interface-power-user",
  number: 3,
  title: "The Interface Like a Power User",
  subtitle:
    "Every feature of Claude.ai — the settings, the shortcuts, and the behaviours most users never discover",
  readingMinutes: 95,
  intro: [
    "Chapters 1–2 gave you the mental model and the economics. This chapter is where those ideas meet the ",
    x(
      "Claude.ai interface",
      "The consumer web app — settings, artifacts, search, and daily workflows distinct from API or Claude Code.",
    ),
    " — the layer most professionals stare at for hours but never configure deliberately.",
    "Power users don't discover more features by accident. They treat settings as leverage, artifacts as deliverables, and web search as a directed research instrument — not a magic 'make it current' button.",
  ],
  keyInsight:
    "Configure once (preferences, toggles, privacy), ship in artifacts (not chat scrollback), and search with source rules — three habits that multiply everything else you learned in this playbook.",
  concepts: [
    CONCEPT_01_SETTINGS_DEEP_DIVE,
    CONCEPT_02_ARTIFACT_SYSTEM,
    CONCEPT_03_WEB_SEARCH_RESEARCH,
    CONCEPT_04_CLAUDE_AI_CAPABILITIES,
  ],
  diagrams: [
    {
      id: "interface-stack",
      title: "Claude.ai power-user stack",
      caption:
        "Settings shape every session; artifacts hold deliverables; search extends reach beyond your uploads.",
      steps: [
        { label: "Preferences", desc: "Global style & constraints", tool: "Settings" },
        { label: "Projects", desc: "Scoped knowledge", tool: "Context" },
        { label: "Artifacts", desc: "Reusable outputs", tool: "Deliver" },
        { label: "Web search", desc: "Live sources", tool: "Research" },
        { label: "Export", desc: "Your system of record", tool: "Ship" },
      ],
    },
    {
      id: "artifact-flow",
      title: "Artifact workflow loop",
      caption:
        "Chat negotiates; artifact ships. Export closes the loop.",
      steps: [
        { label: "Brief", desc: "Type + acceptance criteria", tool: "You" },
        { label: "Generate", desc: "Side-panel artifact", tool: "Claude" },
        { label: "Iterate", desc: "Surgical edits in place", tool: "Both" },
        { label: "Export", desc: "Repo, wiki, share", tool: "You" },
      ],
    },
  ],
  mindmap: {
    center: "Own the interface",
    caption: "Three concepts — configure, build, research.",
    branches: [
      {
        id: "settings",
        label: "Settings deep dive",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Preferences & memory", description: "Stop repeating yourself" },
          { label: "Toggles & privacy", description: "Capability + risk" },
        ],
      },
      {
        id: "artifacts",
        label: "Artifact system",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Types & editing", description: "Markdown to React" },
          { label: "Deliverable mindset", description: "Ship, don't scroll" },
        ],
      },
      {
        id: "search",
        label: "Web search & research",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "When & how to search", description: "Source rules" },
          { label: "Verify & supplement", description: "Limits + hybrid" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team lives in Claude.ai daily — but everyone uses default settings, copies from chat bubbles, and turns on web search for tasks that don't need it.",
    "This chapter turns the interface from ",
    x(
      "a chat window",
      "Ephemeral messages with no configuration discipline.",
    ),
    " into a configured workstation: standing instructions, artifact deliverables, and research you can defend in a meeting.",
  ],
  decisionCriteria: [
    {
      question: "Do you open Claude.ai more than once per day for real work?",
      yesMeans:
        "Yes — complete Concept 1 this week; preferences alone save hours monthly.",
    },
    {
      question: "Do you produce documents, specs, or code Claude should reuse?",
      yesMeans:
        "Yes — Concept 2 is mandatory; stop shipping from chat scrollback.",
    },
    {
      question: "Do your questions depend on news, markets, or changing public facts?",
      yesMeans:
        "Yes — Concept 3 with citation review; never single-pass for high stakes.",
    },
    {
      question: "Does your org handle sensitive client or employee data in Claude?",
      yesMeans:
        "Yes — read 1.7 and 1.8 before enabling search or shared artifacts.",
    },
  ],
  architecture: {
    title: "Daily Claude.ai session",
    caption:
      "How configured power users start a session — not 'blank chat, hope for the best'.",
    steps: [
      { label: "Open Project", desc: "Right context loaded", tool: "Scope" },
      { label: "Check toggles", desc: "Search on/off", tool: "Intent" },
      { label: "Work in artifacts", desc: "Deliverable panel", tool: "Output" },
      { label: "Export & log", desc: "Canonical storage", tool: "Persistence" },
    ],
  },
  artifacts: [
    {
      id: "power-user-startup-checklist",
      title: "Claude.ai session startup checklist",
      description: "Pin in your primary Project.",
      content: `[ ] Correct Project open
[ ] Web search: ON only if this thread needs live data
[ ] Artifacts: ON for anything I'll export
[ ] First message states: output type, artifact, source rules (if search)
[ ] Sensitive data check passed`,
    },
    {
      id: "research-qa-checklist",
      title: "Research output QA checklist",
      content: `[ ] Every number has a citation
[ ] 3 random links opened and read
[ ] Recency rule satisfied
[ ] Conflicts with internal docs resolved
[ ] Exported to wiki with date in filename`,
    },
  ],
  caseStudy: {
    title: "Marketing team — from chat chaos to artifact SOPs",
    scenario:
      "A 9-person marketing team used Claude.ai for campaigns, research, and landing copy. Outputs lived in 200+ threads; brand voice drifted; one wrong web stat reached a press release.",
    before:
      "No shared preferences. Search always on. Copy-paste from chat. No citation review.",
    after:
      "Chapter 3 rollout: team custom instructions for brand voice, artifact briefs for every deliverable, search only on 'intel' threads with SOURCE RULES block, Monday citation QA.",
    metrics: [
      "Time to approved draft → down 35%",
      "Off-brand phrasing in reviews → down 60%",
      "Research errors reaching stakeholders → 2 in Q1 to 0 in Q2",
      "Threads used as storage → eliminated via export SOP",
    ],
  },
  failurePoints: [
    {
      problem: "2000-word custom instructions bloating every chat.",
      fix: "Move project content to Projects; keep globals under 400 words (1.2).",
    },
    {
      problem: "Treating React artifacts as production apps with PII.",
      fix: "Prototype only; export code to proper hosting (2.6).",
    },
    {
      problem: "Web search on for creative writing — irrelevant citations.",
      fix: "Toggle matrix in 1.4; default search OFF for drafting.",
    },
    {
      problem: "Sharing chat links instead of exported artifacts.",
      fix: "Artifact export SOP before any external share (2.7–2.8).",
    },
  ],
};
