import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_ANALYSIS_DECISION: GuideConcept = {
  number: 3,
  title: "Analysis & Decision Workflows",
  subtitle:
    "The workflows that make Claude a genuine analytical partner — structured approaches to complex thinking tasks",
  sections: [
    buildGuideSection({
      id: "strategic-analysis",
      number: "3.1",
      title: "The strategic analysis workflow",
      subtitle:
        "Problem framing → framework selection → analysis → options → recommendation — with structured prompting at each stage",
      takeaway:
        "Five-step strategy workflow: frame problem (success metrics, constraints) → pick framework (SWOT, Porter, jobs-to-be-done) → analyze with evidence → generate 3 options → recommendation with risks — one stage per message.",
      why: "Monolithic 'analyze our strategy' prompts produce generic McKinsey cosplay.",
      paragraphs: [
        [
          s("Stage 1: 'Restate problem; list unknowns; define decision deadline.' Stage 2: 'Pick framework; justify fit.' Stage 3: 'Apply framework using only attached data.' Stage 4: 'Three options with trade-offs.' Stage 5: 'Recommend one; dissenting view; next 30 days.'"),
        ],
      ],
      workflowSteps: [
        "Attach market data and internal metrics.",
        "Human picks framework at stage 2.",
        "Challenge recommendation in follow-up pass.",
      ],
    }),
    buildGuideSection({
      id: "competitive-intelligence",
      number: "3.2",
      title: "The competitive intelligence workflow",
      subtitle:
        "Inputs → extraction → comparison matrix → gap analysis → strategic implications",
      takeaway:
        "Collect competitor pages, reviews, pricing, changelogs → structured extraction per competitor → feature/pricing matrix → gap analysis → 'so what' for product and GTM.",
      why: "Comp intel without a matrix becomes a narrative without comparability.",
      paragraphs: [
        [
          s("Extraction fields: positioning, ICP, pricing model, key features, weaknesses, recent moves. Matrix columns: competitors; rows: dimensions. Final: 'Implications for our roadmap — prioritized list.'"),
        ],
      ],
      workflowSteps: [
        "Refresh sources monthly.",
        "Web search + uploads in Project.",
        "Product lead validates matrix cells.",
      ],
    }),
    buildGuideSection({
      id: "data-interpretation",
      number: "3.3",
      title: "The data interpretation workflow",
      subtitle:
        "Raw data → cleaning → analysis → insight extraction → narrative — with code execution enabled",
      takeaway:
        "Upload CSV → Claude cleans (with code) → runs analysis → outputs insight table (metric, delta, significance, hypothesis) → executive narrative strictly from table.",
      why: "Separating computation from narrative keeps numbers honest.",
      paragraphs: [
        [
          x("Code execution", "Claude.ai analysis with Python — aggregates, plots, statistical checks."),
          s(" Prompt: 'Show code for each transform. Insights must reference computed values only.'"),
        ],
      ],
      workflowSteps: [
        "Provide data dictionary.",
        "Review code before trusting insights.",
        "Export charts + narrative artifact.",
      ],
    }),
    buildGuideSection({
      id: "document-review",
      number: "3.4",
      title: "The document review workflow",
      subtitle:
        "Document upload → extraction → flagging → summary → action items — with examples from contracts, reports, and policies",
      takeaway:
        "Review template by doc type: contracts (obligations, dates, liability), reports (claims vs evidence), policies (ambiguity, conflicts) → flagged clauses → summary → owner action items.",
      why: "Generic 'summarize this' misses risk-bearing clauses.",
      paragraphs: [
        [
          s("Contract prompt: 'Table: clause | plain English | risk level | question for counsel.' Policy: 'List conflicting statements with section refs.' Human counsel reviews high-risk flags only."),
        ],
      ],
      workflowSteps: [
        "Select review rubric for doc type.",
        "Chunk long docs (Ch 5).",
        "Route flags to specialist reviewer.",
      ],
    }),
    buildGuideSection({
      id: "decision-framework",
      number: "3.5",
      title: "The decision framework workflow",
      subtitle:
        "Decision context → criteria definition → option evaluation → recommendation → rationale — the structured decision support pattern",
      takeaway:
        "Define decision, stakeholders, criteria with weights → score options with evidence → sensitivity on weights → recommendation + what would change the decision.",
      why: "Weighted criteria make disagreement explicit and auditable.",
      paragraphs: [
        [
          s("Prompt: 'Build decision matrix: criteria (weight %), options (score 1-5 with evidence column). Show weighted totals. List kill criteria — conditions that veto an option.'"),
        ],
      ],
      workflowSteps: [
        "Facilitator sets criteria with group.",
        "Claude scores; humans adjust scores.",
        "Document dissent in decision log.",
      ],
      artifact: {
        id: "decision-matrix-prompt",
        title: "Decision matrix prompt",
        content: `Decision: [question]
Options: A, B, C
Criteria (weights must sum 100%): ...
For each cell: score 1-5 + one-line evidence
Output: weighted table, winner, sensitivity if top weights ±10%, kill criteria check`,
      },
    }),
    buildGuideSection({
      id: "scenario-planning",
      number: "3.6",
      title: "The scenario planning workflow",
      subtitle:
        "Strategic question → scenario generation → implication mapping → response planning — with structured output",
      takeaway:
        "Strategic question → 3-4 scenarios (name, trigger, timeline, key dynamics) → implication map per scenario (revenue, ops, talent) → playbook actions per scenario → early warning signals.",
      why: "Scenarios without implication maps are creative writing, not planning.",
      paragraphs: [
        [
          s("Output schema: Scenario | Probability band | Triggers | Implications by function | Prepared responses | Leading indicators."),
        ],
      ],
      workflowSteps: [
        "Anchor on one strategic uncertainty.",
        "Leadership stress-tests scenarios.",
        "Store in planning Project for quarterly refresh.",
      ],
    }),
    buildGuideSection({
      id: "financial-modelling",
      number: "3.7",
      title: "The financial modelling workflow",
      subtitle:
        "Assumptions → model structure → calculation → sensitivity analysis → narrative — with code execution and artifact output",
      takeaway:
        "Document assumptions table → Claude builds spreadsheet-style model in code → base/bear/bull → sensitivity tornado → narrative for CFO with assumption caveats.",
      why: "Models fail when assumptions are buried; force explicit assumption block first.",
      paragraphs: [
        [
          s("Step 1: assumptions only — human approves. Step 2: build model, show formulas. Step 3: sensitivity on top 3 drivers. Step 4: 'Investor narrative — no new numbers.' Export artifact CSV."),
        ],
      ],
      workflowSteps: [
        "Lock assumptions before calculation.",
        "CFO validates formula logic.",
        "Version model with date stamp.",
      ],
    }),
    buildGuideSection({
      id: "risk-assessment",
      number: "3.8",
      title: "The risk assessment workflow",
      subtitle:
        "Domain → risk identification → likelihood/impact scoring → mitigation options → register output",
      takeaway:
        "Domain context → risk register draft (ID, description, category, L×I score, owner, mitigation, residual risk) → facilitation session edits → export to GRC tool or spreadsheet.",
      why: "Risk workshops need a pre-read register; Claude accelerates draft, humans own scores.",
      paragraphs: [
        [
          s("Prompt: 'Identify risks for [launch/system/vendor]. Use 5×5 L/I. Mitigations must be actionable with owner role, not generic monitor.' Output markdown table for workshop."),
        ],
      ],
      workflowSteps: [
        "Provide architecture or launch plan doc.",
        "Generate draft register.",
        "Workshop scores; update register.",
      ],
    }),
  ],
};
