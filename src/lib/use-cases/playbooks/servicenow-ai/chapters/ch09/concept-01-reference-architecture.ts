import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_REFERENCE_ARCHITECTURE: GuideConcept = {
  number: 1,
  title: "Reference Architecture for ServiceNow AI",
  subtitle:
    "Layered architecture, topology, data flows, HA, hybrid integration, canonical diagram, ADRs, and go-live review",
  sections: [
    buildGuideSection({
      id: "four-layer-architecture",
      number: "1.1",
      title: "The four-layer architecture",
      subtitle: "Data, Platform, AI, Experience — and how they interact",
      takeaway:
        "Architect ServiceNow AI as four layers with clear contracts: Data → Platform workflows → AI capabilities → Experiences. This keeps governance and change control manageable.",
      why: "Without layers, AI becomes scattered features with inconsistent controls and fragile integrations.",
      paragraphs: [
        [
          s("Data: CMDB/KB/records/telemetry. Platform: Flow, policies, ACLs, integrations. AI: PI/Now Assist/RAG/custom models/agents. Experience: Portal, Workspaces, VA, APIs."),
        ],
        [
          s("Design rule: experiences never call providers directly; they call platform capabilities that enforce policy."),
        ],
      ],
      workflowSteps: [
        "List your AI capabilities and assign each to one layer owner.",
        "Define capability contracts (inputs/outputs) at the AI layer boundary.",
        "Enforce all calls through the platform wrapper (Flow/IntegrationHub).",
      ],
    }),
    buildGuideSection({
      id: "integration-topology",
      number: "1.2",
      title: "The AI integration topology",
      subtitle: "Where LLMs, ML models, and AI agents sit relative to Now",
      takeaway:
        "Place models outside the Now Platform as services, but place control inside the platform: routing, gating, audit, and approvals belong in ServiceNow.",
      why: "If control lives outside, you lose platform governance and create a shadow decision system.",
      paragraphs: [
        [
          s("Topology: Now Platform orchestrates; PI runs in-platform; external LLMs/custom models are called via IntegrationHub/provider layer; agents operate via governed tools and approval gates."),
        ],
        [
          s("Keep a single control plane: policy tables, role scopes, logging, and kill switches in ServiceNow."),
        ],
      ],
      workflowSteps: [
        "Decide which capabilities must be in-platform (PI routing) vs external (specialized LLM).",
        "Wrap external calls behind capability APIs/subflows.",
        "Add HITL gates for writes and high-impact decisions.",
      ],
    }),
    buildGuideSection({
      id: "data-flows",
      number: "1.3",
      title: "Inbound and outbound data flows",
      subtitle: "Data movement architecture for AI capabilities",
      takeaway:
        "Design data flows explicitly: what leaves the instance, what is derived (summaries/embeddings), where it’s stored, and how it’s deleted. Treat derived data as data.",
      why: "Security and compliance review hinges on clear data flow and retention, not on the model choice.",
      paragraphs: [
        [
          s("Inbound: external signals → Event Mgmt/Integrations → records. Outbound: selected fields → redaction → provider → result → stored metadata + outputs."),
        ],
        [
          s("Add purpose limitation: each capability has an allowed field list and retention policy."),
        ],
      ],
      workflowSteps: [
        "Create a data flow diagram per capability.",
        "Define redaction + minimization per capability.",
        "Define retention and deletion for prompts, outputs, embeddings.",
      ],
    }),
    buildGuideSection({
      id: "high-availability",
      number: "1.4",
      title: "The high-availability design",
      subtitle: "Survive provider outages without breaking workflows",
      takeaway:
        "HA for AI is not just multi-region providers. It’s circuit breakers, degraded modes, queues, and explicit fallback paths so operations continue when AI is down.",
      why: "If AI outage blocks ticket intake or change approval, the program will be disabled.",
      paragraphs: [
        [
          s("Required patterns: timeouts, retries with caps, circuit breaker, alternate provider (if allowed), and degraded mode (rules/humans)."),
        ],
        [
          s("Design by workflow criticality: intake must never block; drafts can be delayed; decisions require fallback to deterministic policy."),
        ],
      ],
      workflowSteps: [
        "Define degraded mode per workflow (what happens without AI).",
        "Implement circuit breaker for repeated failures.",
        "Alert on fallback rate spikes and latency p95 breaches.",
      ],
    }),
    buildGuideSection({
      id: "hybrid-architecture",
      number: "1.5",
      title: "The hybrid architecture",
      subtitle: "On‑prem, private cloud, and public cloud integration patterns",
      takeaway:
        "Hybrid is the default in enterprises. Use IntegrationHub spokes and secure network patterns to connect on‑prem systems while keeping AI controls centralized.",
      why: "Most AI value requires cross-system context and action (identity, monitoring, ERP).",
      paragraphs: [
        [
          s("Patterns: private endpoints, outbound proxies, on‑prem connectors, and data residency routing (EU vs US)."),
        ],
        [
          s("Keep secrets and endpoints centralized; never embed keys in scripts."),
        ],
      ],
      workflowSteps: [
        "Document network path and trust boundaries for each integration.",
        "Implement endpoint allowlists and credential rotation.",
        "Add observability for integration latency and failures.",
      ],
    }),
    buildGuideSection({
      id: "reference-diagram",
      number: "1.6",
      title: "The reference architecture diagram",
      subtitle: "Canonical drawing for a full Now AI deployment",
      takeaway:
        "Use a canonical diagram that shows layers, capability wrappers, providers, RAG sources, and governance controls. This is the artifact that accelerates security review.",
      why: "A shared diagram prevents weeks of misalignment across architecture, security, and delivery teams.",
      paragraphs: [
        [
          s("Your diagram should include: experiences, capability wrappers, retrieval sources (KB/CMDB/external), providers/models, logs/metrics, and approval gates."),
        ],
      ],
      workflowSteps: [
        "Create one diagram used in every steering committee.",
        "Attach data flow and retention notes to the diagram.",
        "Use it as the backbone of your go-live review.",
      ],
    }),
    buildGuideSection({
      id: "adrs",
      number: "1.7",
      title: "Architecture decision records (ADRs)",
      subtitle: "Decisions, alternatives, and rationale per layer",
      takeaway:
        "Capture the big AI decisions as ADRs: provider selection, routing rules, RAG design, retention, HITL gates, and evaluation metrics. This keeps upgrades and audits sane.",
      why: "AI systems change often. Without ADRs, teams forget why choices were made and repeat mistakes.",
      paragraphs: [
        [
          s("ADR format: context → decision → options considered → trade-offs → consequences → review date."),
        ],
        [
          s("Minimum ADRs: provider/residency, capability schemas, fallback policy, logging/retention, and governance gate."),
        ],
      ],
      workflowSteps: [
        "Write ADRs for provider routing and fallback.",
        "Write ADR for RAG vs non-RAG per capability.",
        "Review ADRs quarterly with security and platform owners.",
      ],
    }),
    buildGuideSection({
      id: "architecture-review-template",
      number: "1.8",
      title: "Architecture review template",
      subtitle: "Questions an architect must answer before go-live",
      takeaway:
        "A production go-live review should be a checklist: data boundaries, access controls, fallbacks, evaluation, monitoring, and rollback. AI doesn’t get a special exemption.",
      why: "Most enterprise failures are missing basics: ownership, monitoring, and rollback.",
      paragraphs: [
        [
          s("Use a standardized review: scope, data, providers, logging, SLOs, failure modes, security testing, and governance sign-off."),
        ],
      ],
      workflowSteps: [
        "Run the review in dev/test before production.",
        "Attach trust pack + eval results + rollback plan.",
        "Block go-live if degraded mode is undefined.",
      ],
      artifact: {
        id: "ai-architecture-review-questions",
        title: "AI architecture review (questions)",
        description: "Minimum questions for go-live approval.",
        content:
          `Scope\n- What capability and who uses it?\n- What decisions/actions can it trigger?\n\nData\n- What fields leave the instance?\n- What is redacted/minimized?\n- What is retained (prompts/outputs/embeddings) and for how long?\n\nControls\n- ACL scope, roles, approvals, HITL gates\n- Circuit breaker, timeouts, retries\n\nQuality\n- Eval set + acceptance thresholds\n- Monitoring dashboards + alerts\n\nOperations\n- Owner/on-call, incident response, kill switch\n- Rollback plan + versioning`,
      },
    }),
  ],
};

