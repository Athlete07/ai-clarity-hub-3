import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_MILLION_TOKEN_CONTEXT: GuideConcept = {
  number: 2,
  title: "The 1 Million Token Context — Practical Mastery",
  subtitle:
    "What a 1 million token context window actually enables — and the techniques for using it without wasting it",
  sections: [
    buildGuideSection({
      id: "what-million-holds",
      number: "2.1",
      title: "What 1 million tokens actually holds",
      subtitle:
        "Books, codebases, research corpora, conversation histories — the concrete capacity in human terms",
      takeaway:
        "One million tokens is roughly 750k words — multiple books, a mid-size codebase snapshot, or dozens of long reports — but capacity is not the same as perfect recall.",
      why: "Oversized context invites lazy dumping. Knowing human-scale capacity helps you plan what belongs in-window vs external RAG.",
      paragraphs: [
        [
          s("Rule of thumb: ~1.3 tokens per English word. 1M tokens ≈ 750k words ≈ 1,500 single-spaced pages of prose — or less for dense code/JSON."),
        ],
        [
          s("Concrete fits: full novel + notes, 50–100 substantial PDFs if compressed, entire repo export for architecture review (not every binary). Always verify model tier supports 1M on your plan — see Chapter 2."),
        ],
      ],
      workflowSteps: [
        "Estimate token count before mega-upload.",
        "Ask: does this task need full corpus or targeted sections?",
        "Budget cost — 1M input is not free on API.",
      ],
      artifact: {
        id: "capacity-cheatsheet",
        title: "1M token capacity cheatsheet",
        content: `~750k English words
~3–5 full business books (text only)
~50–80 long PDF reports (varies)
~1 mid-size codebase (source only, no node_modules)
~years of chat if summarised — not raw

Always measure your actual corpus with a token counter.`,
      },
    }),
    buildGuideSection({
      id: "lost-in-middle",
      number: "2.2",
      title: "The lost-in-the-middle problem",
      subtitle:
        "Why Claude's attention degrades on information buried in the middle of a long context — and how to structure documents to counter it",
      takeaway:
        "Models attend strongly to the beginning and end of context; middle sections get under-weighted. Long dumps without structure produce missed details.",
      why: "Teams upload everything, ask one question, and blame the model when mid-document facts vanish.",
      paragraphs: [
        [
          s(""),
          x("Lost in the middle", "Research finding: LLMs retrieve worse from the centre of very long contexts."),
          s(" means critical clauses on page 200 of 400 may be ignored. Mitigations: reposition key facts, summarise middle sections, or retrieve relevant chunks only."),
        ],
        [
          s("Symptoms: contradictory answers, 'I don't see that' when text is present, confident omission of mid-doc requirements."),
        ],
      ],
      workflowSteps: [
        "Put must-read facts in intro and recap sections.",
        "For contracts: extract key clauses to a 2-page SUMMARY.md at top of context.",
        "Test with needle-in-haystack questions before trusting workflow.",
      ],
      example: {
        title: "Procurement — indemnity clause missed",
        body: "200-page MSA uploaded whole. Claude approved terms but missed indemnity cap in middle section. Fix: REQUIREMENTS.md listing 12 must-verify clauses at context start; ask Claude to tick each with page cite.",
      },
    }),
    buildGuideSection({
      id: "document-positioning",
      number: "2.3",
      title: "Document positioning strategy",
      subtitle:
        "Where to place the most important information in a long context — the positioning principles that preserve retrieval quality",
      takeaway:
        "Order context deliberately: instructions first, critical facts next, supporting bulk in the middle, task and recap last.",
      why: "Positioning is free and often beats buying more tokens.",
      paragraphs: [
        [
          s("Optimal stack: (1) system/Project instructions, (2) executive summary of all attachments, (3) full documents, (4) user question, (5) 'Before answering, list which sections you used.'"),
        ],
        [
          s("Repeat critical constraints in the final user message — recency reinforces attention."),
        ],
      ],
      workflowSteps: [
        "Build a CONTEXT_ORDER template for your team.",
        "Never bury the ask — put question after documents or in dual position.",
        "Use XML tags to label sections (Chapter 4).",
      ],
    }),
    buildGuideSection({
      id: "loading-codebase",
      number: "2.4",
      title: "Loading a codebase",
      subtitle:
        "How to structure an entire codebase in context for software work — the format and the order that produces the best results",
      takeaway:
        "For codebase-in-context: exclude noise (node_modules, build artifacts), lead with ARCHITECTURE.md and tree overview, group by module, put target files last before the task.",
      why: "Raw repo dumps waste tokens on irrelevant files and bury the module you need to change.",
      paragraphs: [
        [
          s("Prefer Claude Code for repo work when possible — it navigates natively. For Claude.ai/API: export tree + key files, or use MCP git integration."),
        ],
        [
          s("Include: README, package manifests, entry points, types/interfaces, files under change. Exclude: lockfiles content, minified assets, generated code unless task-specific."),
        ],
      ],
      workflowSteps: [
        "Generate tree: find . -type f -name '*.ts' | head — curate list.",
        "Attach ARCHITECTURE.md written by humans first.",
        "Scope task to one package/service per session.",
      ],
      artifact: {
        id: "codebase-context-pack",
        title: "Codebase context pack order",
        content: `1. TASK + acceptance criteria
2. ARCHITECTURE.md (human-written)
3. Directory tree (paths only)
4. Shared types / API contracts
5. Files directly under change
6. Related tests
7. "Quote file:line for every claim"`,
      },
    }),
    buildGuideSection({
      id: "loading-research-corpus",
      number: "2.5",
      title: "Loading a corpus of research",
      subtitle:
        "Feeding multiple documents and asking cross-document questions — the research workflow that used to require a dedicated tool",
      takeaway:
        "Multi-doc synthesis works when documents are labelled, summarised at the top, and questions specify comparison dimensions — not 'tell me everything.'",
      why: "Cross-doc questions without structure produce shallow summaries that miss disagreements between sources.",
      paragraphs: [
        [
          s("Workflow: ingest docs with consistent naming (AUTHOR_YEAR_TOPIC.md), add 5-line abstract per doc at context start, ask matrix questions ('compare methods, sample size, conclusion across docs A–F')."),
        ],
        [
          s("Use artifacts for synthesis output; keep chat for methodology questions."),
        ],
      ],
      workflowSteps: [
        "Create CORPUS_INDEX.md — one row per source.",
        "Ask for disagreement map before consensus summary.",
        "Require citation format: [Doc ID, section].",
      ],
      example: {
        title: "Corp dev — 40 acquisition memos",
        body: "PM indexed memos, loaded index + 12 most relevant full texts. Question: 'Which targets share regulatory risk pattern X?' Cross-doc table in artifact with cites. Work that previously needed analyst week.",
      },
    }),
    buildGuideSection({
      id: "conversation-history-mgmt",
      number: "2.6",
      title: "Conversation history management",
      subtitle:
        "When to continue a conversation and when to start fresh — the decision that affects quality as context grows",
      takeaway:
        "Continue when thread is focused and under ~60% context; start fresh with handoff when scope shifts, quality drops, or instructions fight earlier messages.",
      why: "Zombie threads accumulate contradictions and dilute instructions — sunk-cost fallacy keeps people in bad chats.",
      paragraphs: [
        [
          s("Fresh start triggers: new sub-project, role change in prompt, repeated corrections of same mistake, unexplained quality cliff."),
        ],
        [
          s("Continue when: same deliverable, iterative refinement, artifact in progress, context still coherent."),
        ],
      ],
      workflowSteps: [
        "End sessions with 10-line HANDOFF block.",
        "New chat starts with HANDOFF + 'confirm before proceeding'.",
        "Archive old threads — don't delete; export conclusions to Project.",
      ],
    }),
    buildGuideSection({
      id: "context-compression",
      number: "2.7",
      title: "Context compression",
      subtitle:
        "Summarising earlier context to preserve the window — the technique for long-running projects",
      takeaway:
        "Compression = structured summaries that preserve decisions, open questions, and constraints — not lossy 'tl;dr' that drops nuance.",
      why: "Long projects exceed any window without compression discipline.",
      paragraphs: [
        [
          s("Pattern: every N turns or daily, ask Claude to update STATE.md sections: Decisions, Open questions, Constraints, Next actions, Key quotes with cites. Replace raw history with STATE in new thread."),
        ],
        [
          s("API: rolling summary in your DB — append new turns, re-summarise when summary exceeds token budget."),
        ],
      ],
      workflowSteps: [
        "Define non-negotiable fields in STATE template.",
        "Human approves compression before it becomes canonical.",
        "Never compress away numbers, dates, or named decisions.",
      ],
      artifact: {
        id: "compression-prompt",
        title: "Context compression prompt",
        content: `Update STATE.md from this thread. Preserve:
- All numeric decisions and dates verbatim
- Open questions (numbered)
- Constraints labelled MUST / MUST NOT
- Remove duplicate reasoning; keep conclusions

Output markdown only. Flag anything ambiguous for human review.`,
      },
    }),
    buildGuideSection({
      id: "million-token-mindset",
      number: "2.8",
      title: "The 1 million token mindset shift",
      subtitle:
        "The work that becomes possible when you stop thinking in single-document chunks — the workflow transformation",
      takeaway:
        "1M context enables portfolio thinking — whole codebases, corpuses, deal rooms — but rewards architects who curate and position, not hoarders who dump.",
      why: "Mindset shift: from 'what fits in one prompt' to 'what system of evidence supports this decision.'",
      paragraphs: [
        [
          s("New workflows: full-library code review, multi-contract comparison, longitudinal chat analysis, cross-team doc harmonisation — tasks that required teams of analysts or bespoke tools."),
        ],
        [
          s("Still combine with verification, chunking for edge precision, and external RAG when corpuses exceed 1M or need real-time updates."),
        ],
      ],
      workflowSteps: [
        "List one task you previously chunked manually — try 1M with structure.",
        "Measure quality vs cost vs latency.",
        "Document when to use 1M vs retrieval — decision tree in Project.",
      ],
      example: {
        title: "Compliance — annual policy harmonisation",
        body: "12 policy PDFs loaded with index. Claude produced conflict matrix across jurisdictions. Legal reviewed matrix, not 400 pages. 1M window + positioning beat six weeks of associate time — with human sign-off on conflicts only.",
      },
    }),
  ],
};
