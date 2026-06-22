import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_WEB_SEARCH_RESEARCH: GuideConcept = {
  number: 3,
  title: "Web Search & Research Mode",
  subtitle:
    "Claude with eyes on the current world — how to use search effectively and what deep research actually does",
  sections: [
    buildGuideSection({
      id: "how-web-search-works",
      number: "3.1",
      title: "How web search works inside Claude",
      subtitle:
        "What Claude searches, how it selects sources, and how it incorporates results",
      takeaway:
        "Claude searches the live web, selects pages, reads excerpts, and synthesises — you get an answer with sources, not a single link dump.",
      why: "Expecting Google-style exhaustive results leads to mistrust when Claude summarises selectively.",
      paragraphs: [
        [
          s("When enabled, Claude issues "),
          x("search queries", "Generated from your question — you don't see every query unless you ask."),
          s(
            ", retrieves page content, and grounds its reply in what it fetched. Citations point to sources used — not every page on the internet.",
          ),
        ],
        [
          s("Selection is model-judged: reputable docs, recent news, official sites — but mistakes happen on niche topics."),
        ],
      ],
      workflowSteps: [
        "Ask one factual current-events question with search on.",
        "Click each citation — verify relevance.",
        "Note when citations are thin — signal to dig manually.",
      ],
    }),
    buildGuideSection({
      id: "when-to-search",
      number: "3.2",
      title: "When to turn on web search",
      subtitle:
        "The task types that benefit from live information vs the ones where it adds noise",
      takeaway:
        "Search ON for time-sensitive facts, prices, releases, regulations. Search OFF for drafting, coding, and strategy from your own docs.",
      why: "Search adds latency and can pull irrelevant controversy into creative work.",
      paragraphs: [
        [
          s("ON: competitor moves, API changelog, market data, 'what happened this week', verifying a claim."),
        ],
        [
          s("OFF: rewriting your memo, generating code from your repo context, roleplay, brainstorming from first principles."),
        ],
      ],
      workflowSteps: [
        "Tag last 20 tasks: LIVE vs STATIC.",
        "Set default toggle from majority tag.",
        "Override per thread in first message when mixed.",
      ],
    }),
    buildGuideSection({
      id: "directing-search",
      number: "3.3",
      title: "Directing Claude's search",
      subtitle:
        "How to guide what Claude searches for rather than leaving it to default behaviour",
      takeaway:
        "Give domains, date ranges, and forbidden sources — 'search SEC filings only' beats 'tell me about the company'.",
      why: "Default search optimises for answer speed, not your evidentiary standard.",
      paragraphs: [
        [
          s("Direct with: specific entities, site: filters in plain language ('prefer .gov and primary sources'), recency ('since 2025'), and what to ignore (forums, SEO spam)."),
        ],
      ],
      workflowSteps: [
        "Prefix research prompts with SOURCE RULES block.",
        "Ask Claude to list queries it would run before searching.",
        "Reject answer if citations don't match rules — re-prompt.",
      ],
      artifact: {
        id: "search-directive-block",
        title: "Search directive block",
        content: `SOURCE RULES:
- Prefer: [official docs, .gov, primary research]
- Avoid: [affiliate blogs, unsourced forums]
- Recency: [last 12 months unless historical]
- If insufficient sources, say "insufficient" — do not guess`,
      },
    }),
    buildGuideSection({
      id: "deep-research-mode",
      number: "3.4",
      title: "Deep research mode",
      subtitle:
        "What it does differently from a single web search — the multi-source synthesis capability",
      takeaway:
        "Deep research runs broader retrieval and synthesis — closer to an analyst deck than a quick fact check.",
      why: "Users expect PhD-thesis rigor in 30 seconds; deep research needs time and still needs human review.",
      paragraphs: [
        [
          s(""),
          x(
            "Deep research",
            "Extended multi-step search and synthesis — product name and availability may vary by plan.",
          ),
          s(
            " explores multiple angles, compares sources, and produces structured reports. Higher token and time cost than a single search turn.",
          ),
        ],
        [
          s("Use for: market landscapes, policy comparisons, vendor shortlists. Not for: one-number lookups."),
        ],
      ],
      workflowSteps: [
        "Define output schema before starting (sections, tables).",
        "Run deep research in a dedicated thread.",
        "Budget 15–30 min review time for citations.",
      ],
    }),
    buildGuideSection({
      id: "evaluating-research-quality",
      number: "3.5",
      title: "Evaluating Claude's research quality",
      subtitle:
        "How to review sources, check citations, and catch hallucinations in research outputs",
      takeaway:
        "Trust but verify — spot-check every high-stakes claim at its citation; one dead link is a flag to redo that section.",
      why: "Confident wrong synthesis is worse than 'I don't know' — especially in board or legal contexts.",
      paragraphs: [
        [
          s("Review checklist: citation resolves, quote supports claim, date matches your recency rule, no circular sources (blogs citing blogs)."),
        ],
        [
          s("Hallucination pattern: specific numbers without citations, mismatched titles, 'according to reports' with no link."),
        ],
      ],
      workflowSteps: [
        "Highlight uncited numbers — demand source or delete.",
        "Open 3 random citations per report.",
        "Second pass: 'challenge your three weakest claims'.",
      ],
    }),
    buildGuideSection({
      id: "research-workflow-design",
      number: "3.6",
      title: "Research workflow design",
      subtitle:
        "Using Claude as a research assistant for ongoing work — the workflow that replaces hours of manual searching",
      takeaway:
        "Standing research workflows: intake question → source rules → artifact report → human review → archive in Project.",
      why: "Ad hoc search each Monday recreates prompts and inconsistent quality.",
      paragraphs: [
        [
          s("Weekly competitive intel: fixed template, search on, artifact markdown export to Project folder. Monthly: refresh source rules and retire stale memories."),
        ],
      ],
      workflowSteps: [
        "Create RESEARCH_SOP.md in Project.",
        "Schedule recurring calendar block for review, not generation.",
        "Version reports with dates in artifact title.",
      ],
      example: {
        title: "Corp dev — weekly competitor monitor",
        body: "Every Monday: same prompt shell, deep research for three rivals, markdown artifact to Notion. Analyst spends 25 min on citation QA, not 3 hours browsing.",
      },
    }),
    buildGuideSection({
      id: "hybrid-retrieval",
      number: "3.7",
      title: "Combining search with your own documents",
      subtitle:
        "The hybrid retrieval that uses both live web and uploaded context",
      takeaway:
        "Best answers often blend your private docs (Project uploads) with live web — specify which wins on conflict.",
      why: "Without precedence rules, Claude may prefer a random blog over your internal pricing doc.",
      paragraphs: [
        [
          s("Upload internal PDFs to a Project, enable search for external facts. Prompt: 'Internal docs override web on product facts; web for market size only.'"),
        ],
      ],
      workflowSteps: [
        "List facts: INTERNAL vs EXTERNAL.",
        "Upload internals; search for externals.",
        "State conflict resolution in first message.",
      ],
    }),
    buildGuideSection({
      id: "search-limitations",
      number: "3.8",
      title: "Limitations of Claude's web search",
      subtitle:
        "What it misses, what it can't access, and how to supplement it",
      takeaway:
        "Paywalled journals, logged-in portals, local PDFs, and real-time tickers often require human or MCP supplementation.",
      why: "Shipping decisions on incomplete search is a process failure, not a model failure.",
      paragraphs: [
        [
          s("Gaps: paywalls, JS-heavy sites, non-English long tail, niche forums, anything behind your company SSO. Supplement with manual uploads, Claude in Chrome on allowed portals, or API pipelines."),
        ],
        [
          s("When stakes are high, treat Claude research as first draft — expert review mandatory."),
        ],
      ],
      workflowSteps: [
        "Maintain a 'search can't see this' list for your industry.",
        "Route those sources to Chrome extension or manual upload.",
        "Document gaps in research artifact appendix.",
      ],
    }),
  ],
};
