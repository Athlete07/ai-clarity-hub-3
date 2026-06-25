import { buildGuideSection, s } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_INDUSTRY_USE_CASES: GuideConcept = {
  number: 2,
  title: "Industry-specific AI Use Cases",
  subtitle:
    "Vertical patterns that repeat — and a discovery framework to find high-ROI AI opportunities in any industry",
  sections: [
    buildGuideSection({
      id: "financial-services",
      number: "2.1",
      title: "Financial services",
      subtitle: "Risk, compliance AI, fraud detection, regulatory reporting",
      takeaway:
        "FS value clusters around risk and evidence: controlled automation, explainability, and strong audit trails matter more than creative GenAI output.",
      why: "High-risk decisions demand governance, traceability, and human review by design.",
      paragraphs: [
        [
          s("Typical patterns: risk scoring on changes/cases, evidence extraction from documents, compliance workflow automation with approvals, and secure RAG over policies."),
        ],
      ],
      workflowSteps: [
        "Start with low-risk assist (drafting) then add decision support with HITL.",
        "Require structured outputs and evidence fields.",
        "Measure false positives and bias signals explicitly.",
      ],
    }),
    buildGuideSection({
      id: "healthcare",
      number: "2.2",
      title: "Healthcare",
      subtitle: "Workflow automation, patient service, compliance monitoring",
      takeaway:
        "Healthcare AI wins when it reduces coordination overhead while minimizing PHI exposure: strict minimization, residency controls, and role-scoped retrieval are mandatory.",
      why: "Regulated data + many stakeholders makes automation valuable — and risky.",
      paragraphs: [
        [
          s("Patterns: intake triage, service request automation, document extraction, knowledge-grounded answers, and exception queues for low confidence."),
        ],
      ],
      workflowSteps: [
        "Design allowed-field lists and redaction for every capability.",
        "Prefer RAG with curated content over free-form answers.",
        "Implement audit trails and retention controls for outputs.",
      ],
    }),
    buildGuideSection({
      id: "retail",
      number: "2.3",
      title: "Retail and e-commerce",
      subtitle: "Supply chain AI, customer service automation, store ops",
      takeaway:
        "Retail value is scale: high-volume requests need fast deflection, routing, and proactive issue detection. Cost controls and caching are critical.",
      why: "Small improvements at high volume produce large ROI — and high spend if uncontrolled.",
      paragraphs: [[s("Patterns: portal deflection, case summarization, next-best action, incident correlation across stores, and knowledge flywheels.")]],
      workflowSteps: [
        "Start with AI Search + KB hygiene to drive deflection.",
        "Use PI for routing at volume with confidence gating.",
        "Cache stable answers and cap payload sizes.",
      ],
    }),
    buildGuideSection({
      id: "manufacturing",
      number: "2.4",
      title: "Manufacturing",
      subtitle: "Predictive maintenance, safety incidents, quality AI",
      takeaway:
        "Manufacturing AI centers on telemetry + CMDB relationships: event correlation, anomaly detection, and workflow automation for maintenance and safety.",
      why: "Operational data provides strong signals, but must be integrated and normalized.",
      paragraphs: [[s("Patterns: AIOps correlation, work order automation, safety incident triage, and RAG over SOPs and maintenance procedures.")]],
      workflowSteps: [
        "Integrate telemetry into Event Mgmt and normalize signals.",
        "Use CMDB/service maps to ground impact.",
        "Design async processing for heavy analytics workloads.",
      ],
    }),
    buildGuideSection({
      id: "public-sector",
      number: "2.5",
      title: "Public sector",
      subtitle: "Citizen service automation, case management, procurement intelligence",
      takeaway:
        "Public sector success depends on transparency and fairness: structured decisions, explainability, and clear escalation paths protect trust.",
      why: "Citizens and auditors need to understand and contest outcomes.",
      paragraphs: [[s("Patterns: intake triage, document extraction for forms, knowledge-grounded responses, and strict role-based access.")]],
      workflowSteps: [
        "Implement explainability schema for any decision support.",
        "Use HITL for high-impact actions.",
        "Maintain public-friendly transparency messaging and logs.",
      ],
    }),
    buildGuideSection({
      id: "telecom",
      number: "2.6",
      title: "Telecommunications",
      subtitle: "Network ops AI, subscriber service automation, churn prediction",
      takeaway:
        "Telecom AI is event-heavy: correlation and automation reduce alert fatigue, while customer experience uses summarization and guided resolution.",
      why: "Scale and complexity create overwhelming signal volume without AI assistance.",
      paragraphs: [[s("Patterns: event correlation, root-cause workflows, mass-incident handling, and proactive comms drafting with approvals.")]],
      workflowSteps: [
        "Build correlation pipelines with topology grounding.",
        "Automate stakeholder communications with approval gates.",
        "Measure MTTR and alert reduction as primary ROI KPIs.",
      ],
    }),
    buildGuideSection({
      id: "tech-companies",
      number: "2.7",
      title: "Technology companies",
      subtitle: "Internal IT AI, developer productivity, employee experience",
      takeaway:
        "Tech companies differentiate with developer and employee workflows: self-service, fast routing, and automation — plus governance to avoid ‘AI chaos’ in scripts and tools.",
      why: "High autonomy culture needs strong platform guardrails.",
      paragraphs: [[s("Patterns: developer assist, incident automation, internal portal deflection, and agent tools for routine operational tasks.")]],
      workflowSteps: [
        "Standardize capability wrappers so teams don’t embed provider calls in scripts.",
        "Use feature flags and eval packs for prompt/model changes.",
        "Optimize for speed: async processing and caching.",
      ],
    }),
    buildGuideSection({
      id: "use-case-discovery",
      number: "2.8",
      title: "How to identify AI opportunities in any industry",
      subtitle: "Use case discovery framework",
      takeaway:
        "Find AI opportunities by mapping high-volume, high-friction, high-risk workflows and choosing the smallest AI intervention that changes outcomes — then scaling with governance.",
      why: "The best use cases are discovered through workflow observation, not ideation workshops.",
      paragraphs: [
        [
          s("Discovery lens: volume (how often), cost (time/people), risk (errors), latency sensitivity (user tolerance), and data readiness."),
        ],
      ],
      workflowSteps: [
        "Pick 3 workflows with the most rework or escalation.",
        "Choose AI type: rules → PI → GenAI → agent (layered).",
        "Define baseline metrics and build a PDI POC that measures impact.",
      ],
      artifact: {
        id: "industry-use-case-discovery-template",
        title: "AI use case discovery (template)",
        description: "Use for stakeholder discovery and backlog creation.",
        content:
          `Workflow | Volume | Pain | Risk | Data readiness | Best AI type | MVP\n---|---:|---|---|---|---|---\nIncident triage | high | slow routing | med | good | PI + GenAI | classify + summary\nPolicy questions | high | repetitive | low | good | AI Search + RAG | cited answers\nChange risk | med | subjective | high | med | PI + HITL | risk band + approval`,
      },
    }),
  ],
};

