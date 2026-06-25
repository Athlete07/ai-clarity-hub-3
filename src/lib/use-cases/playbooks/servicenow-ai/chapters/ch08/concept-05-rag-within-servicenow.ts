import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_RAG_SERVICENOW: GuideConcept = {
  number: 5,
  title: "RAG within ServiceNow",
  subtitle:
    "Retrieval-augmented generation using KB/CMDB, custom retrieval pipelines, vector stores, chunking/embeddings, evaluation, and a PDI build",
  sections: [
    buildGuideSection({
      id: "what-rag-is",
      number: "5.1",
      title: "What retrieval-augmented generation is",
      subtitle: "And why it matters for enterprise AI",
      takeaway:
        "RAG grounds LLM outputs in retrieved enterprise content, reducing hallucinations and improving accuracy. In ServiceNow, retrieval is the foundation of trustworthy GenAI.",
      why: "Enterprise answers must be correct, current, and attributable to sources — not model memory.",
      paragraphs: [
        [
          s("RAG = retrieve relevant sources → inject into prompt → generate answer with citations. If retrieval is weak, generation is unreliable."),
        ],
      ],
      workflowSteps: [
        "Define the corpus (KB, CMDB, policies).",
        "Define retrieval quality metrics (recall, precision).",
        "Require citations in outputs for high-trust experiences.",
      ],
    }),
    buildGuideSection({
      id: "kb-as-rag-source",
      number: "5.2",
      title: "The knowledge base as a RAG source",
      subtitle: "How articles are retrieved and injected into prompts",
      takeaway:
        "KB is the safest default RAG source: curated, versioned, and governable. Keep KB hygiene high and retrieval tuned before blaming the model.",
      why: "Most “GenAI is wrong” incidents are “KB is stale” incidents.",
      paragraphs: [
        [
          s("Design: improve KB quality, tag articles, measure zero-result queries, and build a knowledge flywheel (Chapter 3)."),
        ],
      ],
      workflowSteps: [
        "Tune AI Search profiles and boosting for KB.",
        "Detect KB gaps via failed queries.",
        "Add lifecycle reviews for high-impact articles.",
      ],
    }),
    buildGuideSection({
      id: "cmdb-as-rag-source",
      number: "5.3",
      title: "The CMDB as a RAG source",
      subtitle: "Grounding in live infrastructure state",
      takeaway:
        "CMDB grounding makes AI operational: it ties answers to current services, owners, dependencies, and risk context — but only if CMDB quality is real.",
      why: "If CMDB data is wrong, AI becomes confidently wrong.",
      paragraphs: [
        [
          s("Use CMDB for: service ownership, CI criticality, dependency impacts, and change windows. Provide only the necessary fields (data minimization)."),
        ],
      ],
      workflowSteps: [
        "Assess CMDB completeness for the target domain.",
        "Define a curated 'CI context bundle' for prompts.",
        "Log which CI attributes were used for audit.",
      ],
    }),
    buildGuideSection({
      id: "custom-rag-pipelines",
      number: "5.4",
      title: "Custom RAG pipelines",
      subtitle: "IntegrationHub + external vector stores",
      takeaway:
        "Custom RAG is justified when corpora live outside ServiceNow or require specialized indexing. Keep retrieval, embeddings, and access control centralized and audited.",
      why: "Decentralized RAG quickly becomes a security nightmare (untracked corpora, leaked embeddings, uncontrolled access).",
      paragraphs: [
        [
          s("Pattern: trigger → fetch docs → chunk → embed → store vectors → retrieve top-k → generate with citations → log evidence."),
        ],
      ],
      workflowSteps: [
        "Centralize document ingestion and access control.",
        "Version embeddings/chunking strategies.",
        "Add a permission filter in retrieval (role/tenant).",
      ],
    }),
    buildGuideSection({
      id: "vector-store-options",
      number: "5.5",
      title: "Vector store options",
      subtitle: "Pinecone, Azure Cognitive Search, Weaviate, and patterns",
      takeaway:
        "Pick vector store by residency, IAM integration, filtering, and ops maturity. The key requirement is secure filtering + observability, not raw speed.",
      why: "Retrieval systems fail when they return the wrong tenant/role’s content.",
      paragraphs: [
        [
          s("Must-haves: metadata filtering, encryption, audit logs, backups, and region support."),
        ],
      ],
      workflowSteps: [
        "Require metadata filters (role, domain, region).",
        "Define retention and deletion for embeddings.",
        "Implement dashboards: retrieval latency, top queries, zero-hit rate.",
      ],
    }),
    buildGuideSection({
      id: "chunking-embeddings",
      number: "5.6",
      title: "Chunking and embedding strategies",
      subtitle: "Preparing content for effective retrieval",
      takeaway:
        "Chunking is the hidden lever of RAG quality. Use semantically coherent chunks, preserve headings, and tune chunk size/overlap for your content type.",
      why: "Bad chunking makes retrieval irrelevant even with good models.",
      paragraphs: [
        [
          s("Guidelines: chunk by sections/headings, keep 200–800 tokens typical, add overlap for continuity, store source ids and titles for citations."),
        ],
      ],
      workflowSteps: [
        "Start with one chunking strategy per corpus type.",
        "Evaluate retrieval relevance on a fixed query set.",
        "Iterate chunk sizes/overlap based on evidence.",
      ],
    }),
    buildGuideSection({
      id: "rag-evaluation",
      number: "5.7",
      title: "RAG quality evaluation",
      subtitle: "Metrics that prove retrieval helps",
      takeaway:
        "Evaluate retrieval and generation separately: retrieval relevance (top-k hit rate) and answer quality (grounded correctness + citation accuracy).",
      why: "If you only score final answers, you can’t diagnose whether retrieval or generation is failing.",
      paragraphs: [
        [
          s("Track: top-3/5 hit rate, citation coverage, hallucination rate, and user feedback/deflection outcomes."),
        ],
      ],
      workflowSteps: [
        "Create an eval set (queries + expected sources).",
        "Score retrieval hit rate and citation alignment.",
        "Run A/B tests when changing chunking or embeddings.",
      ],
    }),
    buildGuideSection({
      id: "pdi-rag-walkthrough",
      number: "5.8",
      title: "PDI implementation walkthrough",
      subtitle: "Build a domain-specific RAG assistant",
      takeaway:
        "PDI lab: pick a domain corpus → enable retrieval (AI Search/KB) → build a 'AnswerWithCitations' capability wrapper → test with an eval set → log evidence + feedback.",
      why: "This is the demo that survives architecture review: grounded answers, citations, and measurable retrieval quality.",
      paragraphs: [
        [s("Step 1: Choose corpus (KB for VPN + onboarding).")],
        [s("Step 2: Ensure tagging and AI Search relevance tuning.")],
        [s("Step 3: Create a flow/subflow: retrieve top-k → inject → generate → return answer + citations.")],
        [s("Step 4: Evaluate with 30 queries; log hit rate and citation accuracy.")],
      ],
      workflowSteps: [
        "Require citations in output schema.",
        "Block answers when retrieval is empty (fallback to ticket).",
        "Capture feedback and iterate retrieval tuning first.",
      ],
      artifact: {
        id: "rag-eval-pack",
        title: "RAG evaluation pack (starter)",
        description: "Use for side-by-side tests of retrieval strategies.",
        content:
          `Metrics:\n- Retrieval top-3 hit rate\n- Citation alignment rate\n- Hallucination rate (answer not supported by citations)\n- Deflection/containment rate\n\nTest set:\n- 30 common user questions\n- Expected KB article ids (or expected CMDB attributes)\n\nGates:\n- Block “answer” if retrieval empty\n- Require citations for production`,
      },
    }),
  ],
};

