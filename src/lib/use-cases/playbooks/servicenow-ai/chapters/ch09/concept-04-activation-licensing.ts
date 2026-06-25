import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_LICENSING_ACTIVATION: GuideConcept = {
  number: 4,
  title: "AI Feature Activation and Licensing",
  subtitle:
    "Licensing model, plugin dependencies, feature flags, custom AI costs, entitlement audits, upgrade impacts, partner considerations, and optimization levers",
  sections: [
    buildGuideSection({
      id: "now-assist-licensing",
      number: "4.1",
      title: "The Now Assist licensing model",
      subtitle: "How SKUs, users, and consumption interact",
      takeaway:
        "Treat licensing as a product architecture constraint: who can use which skills, which domains are enabled, and what usage patterns drive consumption and cost.",
      why: "Many programs fail after a great pilot because licensing assumptions were wrong.",
      paragraphs: [
        [
          s("Plan by capability and audience: agent assist, self-service deflection, developer assist, and governance/ops dashboards."),
        ],
        [
          s("Design usage guardrails: limit high-cost actions to where they change outcomes."),
        ],
      ],
      workflowSteps: [
        "Map use cases to SKUs and target user groups.",
        "Estimate volume: calls per user per day per capability.",
        "Set quotas and monitor adoption vs spend.",
      ],
    }),
    buildGuideSection({
      id: "plugin-dependencies",
      number: "4.2",
      title: "Plugin dependencies",
      subtitle: "The activation chain for AI capabilities",
      takeaway:
        "AI capabilities often depend on multiple plugins and foundational modules (e.g., KB/AI Search/VA). Activate in a controlled sequence and document dependencies.",
      why: "Uncoordinated activation creates inconsistent environments and broken features across instances.",
      paragraphs: [
        [
          s("Treat plugin activation as change management: approvals, testing, rollback plan, and documentation."),
        ],
      ],
      workflowSteps: [
        "Create an activation plan per capability (dev→test→prod).",
        "Document dependencies and required roles.",
        "Validate with a standard smoke test pack.",
      ],
    }),
    buildGuideSection({
      id: "feature-flags",
      number: "4.3",
      title: "Feature flag management",
      subtitle: "Control which AI features are available to whom",
      takeaway:
        "Use feature flags/roles to roll out AI safely: start with read-only assist, then expand to suggestions, then to controlled actions with HITL gates.",
      why: "Broad enablement without training and governance causes misuse and trust loss.",
      paragraphs: [
        [
          s("Rollout pattern: pilot group → early adopters → general. Use flags to stage new prompts/models/providers."),
        ],
      ],
      workflowSteps: [
        "Define rollout cohorts and training requirements.",
        "Gate higher autonomy behind approvals and audit logs.",
        "Measure outcomes before expanding access.",
      ],
    }),
    buildGuideSection({
      id: "custom-ai-licensing",
      number: "4.4",
      title: "Licensing for custom AI",
      subtitle: "How external LLM spend relates to ServiceNow licensing",
      takeaway:
        "Custom AI adds a second cost plane: external model spend (tokens/requests) plus platform licensing. You need unified cost governance and chargeback.",
      why: "Programs are shut down when costs are surprising or unallocated.",
      paragraphs: [
        [
          s("Unify reporting: cost per capability, per channel, per business unit. Apply quotas and caching to control burn."),
        ],
      ],
      workflowSteps: [
        "Tag every AI call with capability + owner.",
        "Implement monthly cost dashboards and alerts.",
        "Use routing to cheaper models where acceptable.",
      ],
    }),
    buildGuideSection({
      id: "entitlement-verification",
      number: "4.5",
      title: "Entitlement verification",
      subtitle: "Audit what you’re licensed for before building",
      takeaway:
        "Before engineering, verify entitlements and environment readiness. Build a license and plugin inventory and keep it updated per release.",
      why: "Teams waste weeks building designs for features they don’t actually have.",
      paragraphs: [
        [
          s("Create a single source of truth: what’s licensed, what’s activated, and what’s allowed by policy."),
        ],
      ],
      workflowSteps: [
        "Inventory licenses and plugins across dev/test/prod.",
        "Identify gaps and procurement lead times.",
        "Align scope to entitlements for the first release.",
      ],
    }),
    buildGuideSection({
      id: "upgrade-consideration",
      number: "4.6",
      title: "Upgrade considerations",
      subtitle: "How licensing and behavior change per release",
      takeaway:
        "Upgrades can change AI behaviors, available skills, and licensing packaging. Treat each release as an AI regression event with re-validation of key workflows.",
      why: "AI changes are often non-deterministic and can shift quality silently.",
      paragraphs: [
        [
          s("Maintain a regression suite: critical prompts, RAG queries, and PI models. Re-run after upgrades and provider/model changes."),
        ],
      ],
      workflowSteps: [
        "Track release notes relevant to AI capabilities.",
        "Re-run eval suites and compare quality/cost/latency.",
        "Use feature flags to stage new behavior gradually.",
      ],
    }),
    buildGuideSection({
      id: "partner-considerations",
      number: "4.7",
      title: "Licensing for partners and implementations",
      subtitle: "What SIs and partners need to know",
      takeaway:
        "Partners must design within the client’s entitlements and policy. Deliverables should include trust packs, eval packs, and governance runbooks — not just configured features.",
      why: "Implementations fail when governance and cost controls are not part of the deliverable.",
      paragraphs: [
        [
          s("Demand architecture artifacts: data flows, ADRs, security checklist, and rollout plan with metrics."),
        ],
      ],
      workflowSteps: [
        "Confirm entitlements early in discovery.",
        "Deliver governance artifacts with the build.",
        "Hand over ownership and monitoring dashboards.",
      ],
    }),
    buildGuideSection({
      id: "cost-optimization",
      number: "4.8",
      title: "Cost optimisation",
      subtitle: "Levers to reduce licensing and consumption costs",
      takeaway:
        "Cost is managed through architecture: caching, routing, payload caps, async processing, cohort rollouts, and measuring where AI truly changes outcomes.",
      why: "Cost without measurable ROI triggers program cuts.",
      paragraphs: [
        [
          s("Optimize the biggest spend first: self-service flows and high-volume agent assists. Use caching and smaller models for low-risk tasks."),
        ],
      ],
      workflowSteps: [
        "Add payload caps and context budgets per capability.",
        "Cache stable answers and reuse record summaries.",
        "Route by task type; use premium models only when needed.",
      ],
      artifact: {
        id: "ai-cost-levers",
        title: "AI cost optimization levers (checklist)",
        description: "Use when cost spikes or during annual planning.",
        content:
          `- Cache stable outputs (policy answers)\n- Reuse stored summaries on records\n- Route by task to cheaper models\n- Cap context and enforce templates\n- Move non-critical calls async\n- Add quotas and circuit breakers\n- Attribute spend by capability + owner\n- Kill unused features with low ROI`,
      },
    }),
  ],
};

