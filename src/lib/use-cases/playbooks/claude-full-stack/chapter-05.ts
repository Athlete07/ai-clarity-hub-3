import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_HOW_MEMORY_WORKS } from "./chapters/ch05/concept-01-how-memory-works";
import { CONCEPT_02_MILLION_TOKEN_CONTEXT } from "./chapters/ch05/concept-02-million-token-context";
import { CONCEPT_03_CLAUDE_AS_RAG } from "./chapters/ch05/concept-03-claude-as-rag";

export const CHAPTER_05_MEMORY_CONTEXT: GuideChapter = {
  slug: "ch05-memory-context",
  number: 5,
  title: "Memory, Context & the 1 Million Token Mindset",
  subtitle:
    "The complete guide to Claude's memory systems — what persists, what doesn't, and how to architect context for serious work",
  readingMinutes: 80,
  intro: [
    "Chapters 1 and 4 gave you the mental model and prompting craft. Chapter 5 is ",
    x(
      "context architecture",
      "Where information lives, how long it persists, and how Claude retrieves it — the layer beneath good prompts.",
    ),
    " — memory layers, million-token strategy, and native RAG without a vector database.",
    "Power users do not ask 'does Claude remember?' They ask 'which memory layer owns this fact?' and design accordingly.",
  ],
  keyInsight:
    "Memory is layered — in-context, files, memory system, Project instructions. A million tokens is a workspace, not a dump truck: position what matters, compress what ages, and build Projects as knowledge bases when retrieval must persist.",
  concepts: [
    CONCEPT_01_HOW_MEMORY_WORKS,
    CONCEPT_02_MILLION_TOKEN_CONTEXT,
    CONCEPT_03_CLAUDE_AS_RAG,
  ],
  diagrams: [
    {
      id: "memory-layers-stack",
      title: "Four memory layers",
      caption:
        "Assign every fact to a layer — volatility and sensitivity drive the choice.",
      steps: [
        { label: "In-context", desc: "This thread only", tool: "Volatile" },
        { label: "Files", desc: "Project uploads", tool: "Evidence" },
        { label: "Memory", desc: "User prefs", tool: "Personal" },
        { label: "Project", desc: "Instructions", tool: "Team policy" },
      ],
    },
    {
      id: "context-positioning",
      title: "Long context stack order",
      caption:
        "Instructions → summary → bulk → question → recap — fight lost-in-the-middle.",
      steps: [
        { label: "Instructions", desc: "Rules first", tool: "Top" },
        { label: "Summary", desc: "Key facts", tool: "High attention" },
        { label: "Corpus", desc: "Full docs", tool: "Middle" },
        { label: "Ask + recap", desc: "Task last", tool: "Bottom" },
      ],
    },
  ],
  mindmap: {
    center: "Context architecture",
    caption: "Three concepts — memory layers, 1M mastery, native RAG.",
    branches: [
      {
        id: "layers",
        label: "Memory layers",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Four layers", description: "Who owns what" },
          { label: "Team Projects", description: "Shared context" },
        ],
      },
      {
        id: "million",
        label: "1M token mastery",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Lost in middle", description: "Positioning" },
          { label: "Compression", description: "Long projects" },
        ],
      },
      {
        id: "rag",
        label: "Native RAG",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "Project KB", description: "Zero-code RAG" },
          { label: "vs vector DB", description: "When to escalate" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team hits context limits, loses thread continuity, or uploads entire data rooms hoping Claude 'finds the answer.' Quality is inconsistent and API bills spike.",
    "This chapter replaces hope with ",
    x(
      "memory and retrieval design",
      "Explicit layers, document positioning, Project knowledge bases, and clear native-vs-external RAG decisions.",
    ),
    " — the same discipline you'd apply to any data system, applied to how Claude sees your work.",
  ],
  decisionCriteria: [
    {
      question: "Do multi-day Claude sessions lose early decisions or instructions?",
      yesMeans:
        "Yes — Concept 1 in-context + handoffs; Concept 2.6–2.7 compression.",
    },
    {
      question: "Are you loading large document sets (contracts, research, code)?",
      yesMeans:
        "Yes — Concept 2 positioning and Concept 3 retrieval structure are mandatory.",
    },
    {
      question: "Does your team re-upload the same files every week?",
      yesMeans:
        "Yes — Concept 1.7 team Projects and Concept 3.4 knowledge-base pattern.",
    },
    {
      question: "Are you evaluating vector databases for internal Q&A?",
      yesMeans:
        "Yes — read Concept 3.6 before buying infrastructure.",
    },
  ],
  architecture: {
    title: "Context flow for a grounded answer",
    caption:
      "From stored knowledge to cited response — native RAG path in Claude.ai.",
    steps: [
      { label: "Curate", desc: "INDEX + files", tool: "Project" },
      { label: "Position", desc: "Summary + order", tool: "Structure" },
      { label: "Retrieve", desc: "Sections + cites", tool: "Prompt" },
      { label: "Verify", desc: "Spot-check quotes", tool: "Human" },
    ],
  },
  artifacts: [
    {
      id: "session-handoff-v2",
      title: "Session handoff (memory-aware)",
      description: "End every long thread; start the next with this block.",
      content: `## Handoff — [DATE] [PROJECT]

### Decisions (verbatim numbers/dates)
-

### Open questions
-

### Layer map
- In Project files: [list]
- Updated STATE.md: Y/N

### Next chat first message
"Read HANDOFF below. Confirm. Then [task]."`,
    },
    {
      id: "kb-canonical-questions",
      title: "Knowledge base canonical test set",
      description: "20 questions every KB Project must answer with cites.",
      content: `For each question record:
- Q#
- Expected source doc ID
- Pass: cite correct / Fail: reason
- Fix: [doc | prompt | chunk]

Launch threshold: 18/20 pass before team rollout.`,
    },
  ],
  caseStudy: {
    title: "Legal ops — deal room to Project KB",
    scenario:
      "A 60-person company ran M&A diligence in ad hoc chats. Associates re-uploaded the same dataroom PDFs; partners got inconsistent clause summaries; one chat referenced wrong target.",
    before:
      "No memory layers, no INDEX, full PDF dumps, questions without cite requirements.",
    after:
      "Per-deal Project: INDEX, chunk files by section, retrieval prompt shell (3.8), weekly STATE compression. Native RAG for diligence; external vector only for historical deal search across 500+ deals.",
    metrics: [
      "Associate re-upload time → down 70%",
      "Clause summary cite accuracy → 94% on audit sample",
      "Wrong-target context incidents → 2 in H1 to 0 in H2",
      "Vector DB scope → deferred; saved 6-week eng project",
    ],
  },
  failurePoints: [
    {
      problem: "Treating 1M context as perfect memory — middle content ignored.",
      fix: "Positioning strategy 2.3 + lost-in-the-middle awareness 2.2.",
    },
    {
      problem: "Storing company facts only in Claude memory system.",
      fix: "Canonical docs in Project files; memory for prefs only.",
    },
    {
      problem: "Building Pinecone for 15 static policy PDFs.",
      fix: "Native Project KB 3.4–3.7; re-evaluate at scale triggers 3.6.",
    },
    {
      problem: "Never starting fresh threads — zombie context rots quality.",
      fix: "Handoff + compression 2.6–2.7; fresh chat with STATE.",
    },
  ],
};
