import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_DATA_ARCHITECTURE: GuideConcept = {
  number: 2,
  title: "Data Architecture for AI",
  subtitle:
    "CMDB as foundation, readiness assessment, normalization, history strategy, governance, synthetic data, lifecycle, and checklists",
  sections: [
    buildGuideSection({
      id: "cmdb-foundation",
      number: "2.1",
      title: "The CMDB as AI foundation",
      subtitle: "Why CMDB quality determines AI quality",
      takeaway:
        "CMDB is not optional for serious AI outcomes: routing, impact assessment, correlation, and agent actions depend on accurate service and CI relationships.",
      why: "AI doesn’t fix bad data — it amplifies it.",
      paragraphs: [
        [
          s("If owners, criticality, and relationships are wrong or missing, impact assessments and recommendations will be wrong."),
        ],
        [
          s("Treat CMDB as a product: defined owners, quality metrics, and continuous remediation."),
        ],
      ],
      workflowSteps: [
        "Define a minimum CMDB dataset for AI (owners, services, relationships).",
        "Implement quality KPIs (completeness, freshness, correctness).",
        "Block high-risk AI use cases until baseline quality is met.",
      ],
    }),
    buildGuideSection({
      id: "ai-readiness-assessment",
      number: "2.2",
      title: "AI readiness assessment",
      subtitle: "Is your instance data ready for training and inference?",
      takeaway:
        "Run an AI readiness assessment before enabling automation: volume, label quality, taxonomy stability, and data access boundaries must be proven.",
      why: "Readiness gaps cause failed pilots and loss of executive trust.",
      paragraphs: [
        [
          s("Assess: record counts, missing fields, label distributions, duplicate rates, KB coverage, and override rates for key workflows."),
        ],
      ],
      workflowSteps: [
        "Pick 2–3 target tables (incident, case, change).",
        "Measure field completeness and label consistency.",
        "Define what 'ready' means and create a remediation backlog.",
      ],
    }),
    buildGuideSection({
      id: "normalization",
      number: "2.3",
      title: "Data normalisation for ML",
      subtitle: "Cleaning, standardisation, and enrichment",
      takeaway:
        "Normalization improves model performance more than tuning: standardize categories, enforce required fields, deduplicate, and enrich with stable reference data.",
      why: "Models learn patterns. If your data encodes chaos, the model learns chaos.",
      paragraphs: [
        [
          s("Focus on: consistent taxonomy, normalized free text (templates), deduplication, and enrichment (CI attributes, service ownership)."),
        ],
      ],
      workflowSteps: [
        "Enforce required fields at intake (portal/VA).",
        "Deduplicate and standardize categories.",
        "Add enrichment steps in flows (CI criticality, service owner).",
      ],
    }),
    buildGuideSection({
      id: "historical-data-strategy",
      number: "2.4",
      title: "Historical data strategy",
      subtitle: "How much history, what quality, for which capabilities",
      takeaway:
        "Different capabilities need different history: PI needs labeled outcomes, similarity needs representative text, forecasting needs stable time series, and RAG needs curated KB versions.",
      why: "Too little history yields weak models; too much low-quality history reduces signal.",
      paragraphs: [
        [
          s("Rule of thumb: start with the most recent stable taxonomy period. Archive or down-weight old data from before major process changes."),
        ],
      ],
      workflowSteps: [
        "Identify when taxonomy/process last changed materially.",
        "Train on post-change data first; expand cautiously.",
        "Document history windows per capability in ADRs.",
      ],
    }),
    buildGuideSection({
      id: "data-governance",
      number: "2.5",
      title: "Data governance for AI",
      subtitle: "Ownership, lineage, standards, and review cadence",
      takeaway:
        "AI needs explicit data ownership: who owns labels, fields, and KB quality. Establish lineage, standards, and a monthly data review cadence tied to AI outcomes.",
      why: "If no one owns the data, no one can fix AI quality.",
      paragraphs: [
        [
          s("Governance roles: platform owner, data owners per domain, and an AI quality lead who connects outcomes to remediation."),
        ],
      ],
      workflowSteps: [
        "Assign data owners per table and critical fields.",
        "Define quality SLAs (e.g., 95% completeness on priority fields).",
        "Run monthly reviews: drift, overrides, data gaps, KB gaps.",
      ],
    }),
    buildGuideSection({
      id: "synthetic-data",
      number: "2.6",
      title: "Synthetic data for training",
      subtitle: "When and how to supplement sparse real data",
      takeaway:
        "Synthetic data is useful for testing pipelines and rare edge cases, but it’s not a substitute for real labels. Use it for evaluation and safety tests first.",
      why: "Synthetic data can introduce unrealistic patterns and bias if treated as real history.",
      paragraphs: [
        [
          s("Best use: generate rare-but-important scenarios for regression testing (prompt injection, PII leakage, edge-case routing)."),
        ],
      ],
      workflowSteps: [
        "Use synthetic data to build eval suites and load tests.",
        "Keep synthetic data isolated from production training unless validated.",
        "Document synthetic generation method and limitations.",
      ],
    }),
    buildGuideSection({
      id: "data-lifecycle",
      number: "2.7",
      title: "Data lifecycle management",
      subtitle: "Handling stale training data and sensitive data",
      takeaway:
        "Define lifecycle for training data and derived artifacts (summaries/embeddings): retention, deletion, access controls, and how stale data is detected and replaced.",
      why: "Stale or sensitive training artifacts create compliance and quality risk.",
      paragraphs: [
        [
          s("Treat embeddings as sensitive derived data; enforce deletion when source is deleted or access changes."),
        ],
      ],
      workflowSteps: [
        "Define retention by artifact type (logs, prompts, outputs, embeddings).",
        "Implement delete propagation from source content.",
        "Set drift detection triggers tied to taxonomy/process changes.",
      ],
    }),
    buildGuideSection({
      id: "data-checklist",
      number: "2.8",
      title: "Data architecture checklist",
      subtitle: "Pre-AI assessment every program should complete",
      takeaway:
        "Use a data checklist before AI go-live: readiness, quality metrics, ownership, history windows, and lifecycle controls. This is your fastest risk reducer.",
      why: "Skipping data readiness is the #1 cause of disappointing pilots.",
      paragraphs: [[s("A checklist forces explicit decisions and owners rather than assumptions.")]],
      workflowSteps: [
        "Run checklist in dev/test and attach to go-live review.",
        "Create remediation backlog with owners and dates.",
        "Re-run quarterly as scope grows.",
      ],
      artifact: {
        id: "ai-data-checklist",
        title: "AI data architecture checklist",
        description: "Use before enabling any production AI capability.",
        content:
          `CMDB\n- Owners, criticality, relationships baseline\n- Quality KPIs and monitoring\n\nRecords\n- Required fields at intake\n- Label quality and stability\n- Duplicate rates\n\nKnowledge\n- Coverage, freshness, zero-result queries\n\nHistory\n- Defined time windows per capability\n- Process/taxonomy change notes\n\nLifecycle\n- Retention for prompts/outputs/embeddings\n- Delete propagation\n\nOwnership\n- Data owners and monthly review cadence`,
      },
    }),
  ],
};

