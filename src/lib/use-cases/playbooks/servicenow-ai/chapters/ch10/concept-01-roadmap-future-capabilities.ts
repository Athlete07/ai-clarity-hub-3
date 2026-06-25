import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_ROADMAP_FUTURE: GuideConcept = {
  number: 1,
  title: "ServiceNow AI Roadmap and Future Capabilities",
  subtitle:
    "What’s coming, what it implies architecturally, and how to stay ahead as the platform evolves",
  sections: [
    buildGuideSection({
      id: "announced-roadmap",
      number: "1.1",
      title: "The announced roadmap",
      subtitle: "What ServiceNow has publicly committed to",
      takeaway:
        "Treat public roadmap as directional signals, not contracts. Architect for change: capability contracts, provider routing, evaluation gates, and governance that survives product evolution.",
      why: "The specific feature names will change; the architectural themes (agents, retrieval, governance) will persist.",
      paragraphs: [
        [
          s("Roadmap reading method: separate "),
          x("product surface", "new UI features, skills, actions"),
          s(" from "),
          x("platform primitives", "routing, tool calling, retrieval, policy, observability"),
          s(". Invest in primitives."),
        ],
      ],
      workflowSteps: [
        "Create a 12‑month roadmap doc that maps features → primitives → architecture work.",
        "Define ‘no regrets’ foundations: KB hygiene, CMDB quality, wrappers, logging.",
        "Revisit quarterly and update ADRs.",
      ],
    }),
    buildGuideSection({
      id: "agents-at-scale",
      number: "1.2",
      title: "AI Agents at scale",
      subtitle: "Where agentic capability is heading and implications",
      takeaway:
        "At scale, agents become an orchestration layer: tool governance, memory discipline, approval gates, and observability are more important than ‘smart prompts’.",
      why: "Scaling agents without controls creates runaway actions, cost spikes, and audit failures.",
      paragraphs: [
        [
          s("Architectural implications: tool allowlists, scoped service accounts, confidence gating, kill switches, and traceability of every action."),
        ],
      ],
      workflowSteps: [
        "Define an agent autonomy ladder (read → suggest → act w/ approval → limited autonomy).",
        "Standardize tool schemas and error behaviors.",
        "Instrument agent runs (latency, tool calls, approvals, fallbacks).",
      ],
    }),
    buildGuideSection({
      id: "autonomous-enterprise-vision",
      number: "1.3",
      title: "The autonomous enterprise vision",
      subtitle: "ServiceNow positioning and what it means for practitioners",
      takeaway:
        "ServiceNow is positioning AI as workflow autonomy: not chatbots, but end‑to‑end execution with guardrails. Practitioners must become workflow + governance engineers.",
      why: "The winning teams combine process design, data quality, and AI safety — not just prompt skills.",
      paragraphs: [
        [
          s("Your role shifts: from configuring features to designing "),
          x("operating systems for work", "policies, gates, ownership, metrics"),
          s("."),
        ],
      ],
      workflowSteps: [
        "Learn to design workflows with confidence gates and exception queues.",
        "Build trust packs (data flow, retention, controls).",
        "Adopt an SRE mindset: SLOs, alerting, incident response for AI.",
      ],
    }),
    buildGuideSection({
      id: "industry-cloud-ai",
      number: "1.4",
      title: "Industry cloud AI",
      subtitle: "Differentiation across ITSM/HRSD/CSM and verticals",
      takeaway:
        "Industry differentiation will come from domain data + domain guardrails: specialized schemas, curated corpora, and policy‑aware automation per vertical.",
      why: "Models commoditize; domain workflows and data quality create moat.",
      paragraphs: [
        [
          s("Expect more prebuilt skills and agents per domain, but value will still depend on your KB/CMDB, taxonomy, and governance."),
        ],
      ],
      workflowSteps: [
        "Build domain-specific capability catalogs (HR, IT, CSM).",
        "Define policy tables per vertical (e.g., healthcare compliance).",
        "Curate domain corpora for retrieval and evaluation.",
      ],
    }),
    buildGuideSection({
      id: "provider-landscape",
      number: "1.5",
      title: "The model provider landscape",
      subtitle: "How LLM market evolution impacts configuration",
      takeaway:
        "Provider churn is guaranteed. Design as multi-provider by default: capability wrappers, routing rules, side-by-side eval, and explicit fallback policies.",
      why: "Cost, latency, residency, and model quality will shift; your architecture must absorb it without rewrites.",
      paragraphs: [
        [
          s("Treat provider choice as a policy decision (region, sensitivity) and a performance decision (latency, context length) — not a team preference."),
        ],
      ],
      workflowSteps: [
        "Create provider routing policy per region and capability.",
        "Maintain an evaluation pack and rerun quarterly.",
        "Keep rollback ability (previous provider/model pin).",
      ],
    }),
    buildGuideSection({
      id: "skills-two-years",
      number: "1.6",
      title: "Skills that will matter in two years",
      subtitle: "Forward-looking skill investment",
      takeaway:
        "The durable skills are architecture and operations: data readiness, evaluation, governance, integration design, and change management — not memorizing UI clicks.",
      why: "Tools change quickly; fundamentals compound.",
      paragraphs: [
        [
          s("Invest in: RAG evaluation, agent tool governance, SLOs/cost controls, security (injection + least privilege), and business case/ROI modeling."),
        ],
      ],
      workflowSteps: [
        "Choose 3 skill tracks to deepen (architecture, security, ops).",
        "Build 2–3 repeatable demos that show these skills.",
        "Write one ADR and one trust pack per demo.",
      ],
    }),
    buildGuideSection({
      id: "commoditisation",
      number: "1.7",
      title: "The AI commoditisation question",
      subtitle: "What becomes table stakes vs differentiation",
      takeaway:
        "Table stakes: drafting, summarization, basic search. Differentiation: domain workflows, data governance, safe autonomy, and measurable operations at scale.",
      why: "Competitive advantage comes from execution and trust, not model novelty.",
      paragraphs: [
        [
          s("Your differentiator is the system you build: retrieval quality, decision gating, governance, and the improvement loop."),
        ],
      ],
      workflowSteps: [
        "Standardize commodity skills with templates and guardrails.",
        "Focus innovation on high-value workflows and safe automation.",
        "Measure outcomes and iterate monthly.",
      ],
    }),
    buildGuideSection({
      id: "personal-learning-system",
      number: "1.8",
      title: "Building a personal learning system",
      subtitle: "Habits, sources, and community connections",
      takeaway:
        "Staying ahead is a system: track releases, run monthly experiments on PDI, publish learnings, and build community feedback loops.",
      why: "AI evolves faster than certification cycles. Your habits must beat the change rate.",
      paragraphs: [
        [
          s("A simple loop: release notes → hypothesis → PDI lab → write-up → share → incorporate feedback."),
        ],
      ],
      workflowSteps: [
        "Create a monthly PDI experiment backlog (2 items/month).",
        "Maintain an interview notes doc updated per quarter.",
        "Engage in community: answer 1 question/week, post 1 lesson/month.",
      ],
      artifact: {
        id: "personal-learning-loop",
        title: "Personal learning system (template)",
        description: "A repeatable system to stay current for 2+ years.",
        content:
          `Weekly\n- 1 new concept (release note / community thread)\n- 1 small test in PDI\n\nMonthly\n- 1 deep POC improvement\n- 1 write-up (blog/LinkedIn/GitHub)\n\nQuarterly\n- Re-run eval packs\n- Update your ‘architecture diagrams from memory’ list\n- Refresh your interview Q&A bank`,
      },
    }),
  ],
};

