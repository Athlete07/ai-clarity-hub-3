import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_CLAUDE_AS_RAG: GuideConcept = {
  number: 3,
  title: "Claude as a RAG System — Hidden Architecture",
  subtitle:
    "Using Claude's native features to build retrieval-augmented workflows without external infrastructure",
  sections: [
    buildGuideSection({
      id: "rag-in-claude-context",
      number: "3.1",
      title: "What RAG means in a Claude context",
      subtitle:
        "Using Claude's context window as a retrieval layer without a vector database",
      takeaway:
        "Native Claude RAG = curated documents in context + prompts that force grounded answers — no Pinecone required for many knowledge-work tasks.",
      why: "Teams over-build vector DBs before exhausting Project-based retrieval. Claude's window is the retrieval layer when corpus fits and updates are infrequent.",
      paragraphs: [
        [
          s(""),
          x("RAG", "Retrieval-Augmented Generation — fetch relevant evidence, then generate answer grounded in it."),
          s(" traditionally: embed chunks, vector search, inject top-k. In Claude.ai: you are the retriever — attach the right files, structure the ask, demand citations."),
        ],
        [
          s("Works when: corpus < context limit, updates weekly not per-second, team can curate files. Breaks when: millions of docs, strict ACL per chunk, sub-second fresh data."),
        ],
      ],
      workflowSteps: [
        "Try Project RAG before proposing vector infra.",
        "Define success: citation accuracy on 10 test questions.",
        "If fail, note whether size, freshness, or ACL caused it.",
      ],
    }),
    buildGuideSection({
      id: "document-upload-retrieval",
      number: "3.2",
      title: "Document upload as retrieval",
      subtitle:
        "How to structure uploaded documents so Claude retrieves from them accurately",
      takeaway:
        "Retrieval-quality uploads have: descriptive filenames, headings, page/section markers, and a top-of-file summary — Claude reads like a human skimmer, not a DB.",
      why: "Unstructured PDF exports are retrieval poison.",
      paragraphs: [
        [
          s("Before upload: add cover page with doc ID, date, 5-bullet abstract. Use H1/H2 hierarchy. For scans, OCR with structure preserved."),
        ],
        [
          s("Prompt pattern: 'Answer using only [DOC_ID]. Quote section headers. If not found, say NOT IN SOURCE.'"),
        ],
      ],
      workflowSteps: [
        "Rename files: ROLE_TOPIC_vDATE.ext",
        "Add 10-line summary file per large upload.",
        "Run 3 needle tests after upload.",
      ],
    }),
    buildGuideSection({
      id: "multi-document-synthesis",
      number: "3.3",
      title: "Multi-document synthesis",
      subtitle:
        "Loading multiple sources and asking Claude to compare, synthesise, and reason across all of them",
      takeaway:
        "Multi-doc synthesis needs an index layer, explicit comparison axes, and output format that forces per-source attribution.",
      why: "Without axes, Claude averages sources into mushy consensus.",
      paragraphs: [
        [
          s("Load CORPUS_INDEX first, then full texts or summaries. Ask: 'Build comparison table: Source | Claim | Evidence | Conflicts with.'"),
        ],
        [
          s("For conflicting sources, instruct: 'Do not merge — list disagreement explicitly.'"),
        ],
      ],
      workflowSteps: [
        "Cap active full texts — summarise peripheral docs.",
        "One synthesis question per thread.",
        "Export matrix to artifact; verify 3 random cells.",
      ],
      example: {
        title: "Strategy — three analyst reports",
        body: "CEO wanted one view of market size. Three reports disagreed. Claude produced attributed table — not blended number. CEO picked assumption set consciously. Native RAG + synthesis prompt avoided false precision.",
      },
    }),
    buildGuideSection({
      id: "project-knowledge-base-pattern",
      number: "3.4",
      title: "The project-as-knowledge-base pattern",
      subtitle:
        "Using a Claude Project with uploaded documents as a persistent knowledge base",
      takeaway:
        "A Project with INDEX.md, curated files, and retrieval prompts functions as a zero-code knowledge base for a role or domain.",
      why: "Cheapest path to team-wide grounded Q&A without engineering sprint.",
      paragraphs: [
        [
          s("Structure: INDEX (what's here), POLICY (how to answer), CORPUS (files), PROMPTS (saved question templates). New chat always starts in same Project."),
        ],
        [
          s("Maintenance: owner reviews uploads monthly; deprecate files to ARCHIVE/ subfolder listing in INDEX."),
        ],
      ],
      workflowSteps: [
        "Clone template Project per domain (Legal KB, Product KB).",
        "Add 5 canonical docs before inviting team.",
        "Pin retrieval prompt in Project description.",
      ],
      artifact: {
        id: "project-kb-index",
        title: "Project knowledge base INDEX.md",
        content: `# [Domain] Knowledge Base
Last reviewed: [DATE]
Owner: [name]

## Files
| ID | File | Summary | Use when |
|----|------|---------|----------|
| A1 | pricing_2025.pdf | … | pricing questions |

## Retrieval rules
- Cite file ID + section
- NOT IN SOURCE if missing
- Escalate legal to [human]`,
      },
    }),
    buildGuideSection({
      id: "chunking-for-claude",
      number: "3.5",
      title: "Chunking for Claude",
      subtitle:
        "How to split large documents before upload for better retrieval quality",
      takeaway:
        "Chunk by semantic boundary (chapter, clause, module) — not arbitrary token splits — with chunk headers that repeat parent context.",
      why: "Arbitrary 512-token chunks lose legal and technical meaning.",
      paragraphs: [
        [
          s("Each chunk file: CHUNK_META (parent doc, section, date) + content. INDEX maps questions → chunk IDs."),
        ],
        [
          s("For API at scale, mirror same boundaries in vector DB — semantic chunks beat random splits."),
        ],
      ],
      workflowSteps: [
        "Split at H1/H2 boundaries.",
        "Prefix each chunk: 'From CONTRACT_X, Section 4.2 Indemnity:'",
        "Load only relevant chunks when corpus exceeds window.",
      ],
    }),
    buildGuideSection({
      id: "native-vs-external-rag",
      number: "3.6",
      title: "Native RAG vs external RAG",
      subtitle:
        "When Claude's built-in context window replaces a vector database and when you need the real thing",
      takeaway:
        "Native wins for curated, bounded, human-maintained knowledge. External RAG wins for huge, dynamic, permissioned, or embedding-optimised corpora.",
      why: "Wrong choice wastes months — vector DB for 12 PDFs, or Projects for 10M support tickets.",
      paragraphs: [
        [
          s("Choose native Project RAG: <100 docs, same team access, weekly updates, Q&A workflow."),
        ],
        [
          s("Choose external RAG: per-user ACL, >1M tokens corpus, sub-minute data freshness, production customer-facing at scale, hybrid keyword+semantic needs."),
        ],
      ],
      workflowSteps: [
        "Score corpus on size, freshness, ACL, query volume.",
        "Prototype native in one afternoon.",
        "External only if scorecard fails 2+ criteria.",
      ],
      artifact: {
        id: "rag-decision-matrix",
        title: "Native vs external RAG matrix",
        content: `NATIVE (Project) if:
□ Corpus fits in context with room for Q&A
□ Shared or single-user access OK
□ Updates manual/weekly
□ Internal power users

EXTERNAL if:
□ Millions of chunks or strict per-user ACL
□ Real-time DB / ticket stream
□ Customer-facing SLA + logging
□ Need hybrid search / reranking pipeline`,
      },
    }),
    buildGuideSection({
      id: "knowledge-base-project",
      number: "3.7",
      title: "The knowledge base Project",
      subtitle:
        "Building a Claude Project that functions as an always-available knowledge base for a domain or role",
      takeaway:
        "A KB Project is a product: INDEX, owners, test questions, retrieval constitution, and changelog — not a folder of uploads.",
      why: "KB Projects without governance become stale and untrusted.",
      paragraphs: [
        [
          s("Rollout: define 20 canonical questions, gather source docs, build INDEX, write retrieval constitution, test pass rate ≥90% on canonical set, train team on prompts, schedule quarterly audit."),
        ],
        [
          s("Pair with Chapter 4 prompt templates for consistent retrieval behaviour."),
        ],
      ],
      workflowSteps: [
        "Write KB_CHARTER.md: scope, owner, review cadence.",
        "Run canonical Q test suite before launch.",
        "Log failed questions — fix doc or prompt, not blame user.",
      ],
      example: {
        title: "HR — internal policy KB Project",
        body: "40 policies chunked, INDEX maintained by HR ops. Employees ask leave, equity, travel questions. Retrieval prompt requires policy ID cite. Escalation path for edge cases. IT ticket volume for basic HR Q down 35%.",
      },
    }),
    buildGuideSection({
      id: "hidden-retrieval-hacks",
      number: "3.8",
      title: "Hidden retrieval hacks",
      subtitle:
        "The prompt structures, document formats, and context positioning techniques that improve Claude's retrieval from long documents",
      takeaway:
        "Retrieval hacks: quote-and-answer, section IDs, dual-position questions, negative scope ('ignore appendix'), markdown tables for facts, and forced uncertainty.",
      why: "Small prompt and format changes often double retrieval accuracy without new infrastructure.",
      paragraphs: [
        [
          s("Hack 1: 'List relevant sections first, then answer' — forces browse before generate. Hack 2: Number every section in source; ask for §3.2. Hack 3: Put question after docs AND repeat in final line."),
        ],
        [
          s("Hack 4: Markdown tables beat prose for numeric facts. Hack 5: 'If confidence < high, say UNCERTAIN' reduces false retrieval."),
        ],
      ],
      workflowSteps: [
        "Add 'sections used' step to every retrieval template.",
        "Number headings in source docs automatically on ingest.",
        "A/B test with and without hacks on 10 questions.",
      ],
      artifact: {
        id: "retrieval-prompt-shell",
        title: "Retrieval prompt shell",
        content: `SOURCES: [attached / Project files]
RULES:
1. List section IDs you'll use (before answering)
2. Quote then interpret
3. NOT IN SOURCE if missing
4. Ignore: [appendix, marketing fluff]

QUESTION: [your question]

Repeat question: [your question]`,
      },
    }),
  ],
};
