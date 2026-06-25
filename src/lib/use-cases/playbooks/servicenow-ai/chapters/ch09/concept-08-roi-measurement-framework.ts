import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_08_ROI_FRAMEWORK: GuideConcept = {
  number: 8,
  title: "ROI Measurement Framework",
  subtitle:
    "Value model, baselines, time-to-value, productivity, quality, cost, executive dashboard, and a business case template",
  sections: [
    buildGuideSection({
      id: "ai-value-model",
      number: "8.1",
      title: "The AI value model",
      subtitle: "Four categories of value and how to quantify",
      takeaway:
        "ServiceNow AI value typically falls into four buckets: deflection, productivity, quality/risk reduction, and cycle-time acceleration. Pick 1–2 primary buckets per capability.",
      why: "If you try to claim every value bucket, stakeholders won’t believe any of them.",
      paragraphs: [
        [
          s("Deflection: fewer tickets. Productivity: faster handling. Quality: fewer errors/misroutes. Risk: fewer outages/SLA breaches."),
        ],
      ],
      workflowSteps: [
        "Assign each AI capability a primary value bucket.",
        "Define 2–3 KPIs per capability (not 20).",
        "Agree on data sources and attribution rules upfront.",
      ],
    }),
    buildGuideSection({
      id: "baseline-measurement",
      number: "8.2",
      title: "Baseline measurement",
      subtitle: "Capture pre-AI metrics that make the case later",
      takeaway:
        "Baseline before you enable AI: volumes, handle time, routing accuracy, containment, and quality. Without baselines, you cannot prove ROI.",
      why: "Executives accept trend improvements only when they trust the baseline.",
      paragraphs: [[s("Baselines are your ‘before’ photo. Take them first.")]],
      workflowSteps: [
        "Capture 4–8 weeks of baseline KPIs.",
        "Segment by channel (portal/VA/agent).",
        "Document known seasonality (outages, releases).",
      ],
    }),
    buildGuideSection({
      id: "time-to-value",
      number: "8.3",
      title: "Time-to-value metrics",
      subtitle: "Measure how fast AI delivers results",
      takeaway:
        "Track time-to-value as a delivery KPI: time from enablement to measurable improvement, and time from insight to iteration (feedback loop speed).",
      why: "Programs die when value takes too long to show up.",
      paragraphs: [
        [
          s("Good time-to-value metrics: pilot duration, adoption ramp, and iteration cadence (prompt/model updates)."),
        ],
      ],
      workflowSteps: [
        "Set time-to-value targets per capability (e.g., 30/60/90 days).",
        "Track adoption and usage cohorts weekly.",
        "Schedule monthly optimization cycles with measurable goals.",
      ],
    }),
    buildGuideSection({
      id: "productivity-metrics",
      number: "8.4",
      title: "Productivity metrics",
      subtitle: "Capture agent/dev/analyst efficiency gains",
      takeaway:
        "Measure productivity with operational KPIs: average handle time, time-to-triage, time-to-resolution, and rework rate — plus accept/edit rates for drafts.",
      why: "Self-reported ‘time saved’ is weak evidence without workflow metrics.",
      paragraphs: [
        [
          s("For drafts: track acceptance rate and edit distance. For routing: track override rate and misroute rate."),
        ],
      ],
      workflowSteps: [
        "Define metrics per role (agent/dev/analyst).",
        "Instrument acceptance/override events.",
        "Tie improvements to throughput and backlog reduction.",
      ],
    }),
    buildGuideSection({
      id: "quality-metrics",
      number: "8.5",
      title: "Quality metrics",
      subtitle: "Resolution quality, error rate, and satisfaction impact",
      takeaway:
        "Quality is measurable: correct routing, fewer escalations, fewer reopenings, higher FCR, and grounded responses with citations. Use quality gates to justify autonomy expansion.",
      why: "AI that is fast but wrong increases risk and costs.",
      paragraphs: [
        [
          s("For GenAI: groundedness (citation alignment) and hallucination rate. For PI: accuracy/F1 and override rate."),
        ],
      ],
      workflowSteps: [
        "Define a quality rubric per capability.",
        "Set thresholds for automation vs suggestion.",
        "Review quality monthly and adjust routing/thresholds.",
      ],
    }),
    buildGuideSection({
      id: "cost-metrics",
      number: "8.6",
      title: "Cost metrics",
      subtitle: "Track reduction in time, escalations, and headcount pressure",
      takeaway:
        "Cost savings are usually indirect: fewer escalations, shorter handle time, and avoided hiring. Track unit economics per ticket and cost per AI call.",
      why: "If you can’t connect spend to value, Finance will cut the program.",
      paragraphs: [
        [
          s("Measure: cost per contact, cost per resolved ticket, and AI spend per capability. Attribute savings conservatively."),
        ],
      ],
      workflowSteps: [
        "Define cost model with Finance (labor, overhead).",
        "Track AI spend by capability and business unit.",
        "Report savings as ranges with assumptions documented.",
      ],
    }),
    buildGuideSection({
      id: "executive-dashboard",
      number: "8.7",
      title: "The executive dashboard",
      subtitle: "Three-metric summary a CIO needs",
      takeaway:
        "Executives need a simple story: outcomes, cost, risk. Use 3 headline metrics and a drill-down: containment, productivity, and quality/risk reduction — plus spend.",
      why: "Complex dashboards lose executive attention.",
      paragraphs: [
        [
          s("A good exec view shows: ROI summary, trend lines, and confidence that controls are in place (governance)."),
        ],
      ],
      workflowSteps: [
        "Pick three headline metrics and define them precisely.",
        "Add spend and error budget indicators.",
        "Provide drill-down by capability and business unit.",
      ],
      artifact: {
        id: "exec-dashboard-metrics",
        title: "Executive dashboard (3 metrics)",
        description: "Use as a default for CIO-level reporting.",
        content:
          `1) Containment / deflection rate\n2) Productivity (AHT / TTR trend)\n3) Quality/Risk (misroutes, reopenings, SLA breaches)\n+ Spend (AI cost per capability)`,
      },
    }),
    buildGuideSection({
      id: "business-case-template",
      number: "8.8",
      title: "The AI business case template",
      subtitle: "Turn measured outcomes into an investment proposal",
      takeaway:
        "A strong business case includes: baseline, target KPIs, controls, rollout plan, cost model, and risks. It’s a proposal to run an operating system, not buy a feature.",
      why: "Enterprise funding requires structured justification and risk management.",
      paragraphs: [
        [
          s("Include governance artifacts: trust pack, evaluation plan, and rollback runbooks. This is what de-risks executive approval."),
        ],
      ],
      workflowSteps: [
        "Define scope and success metrics per capability.",
        "Attach baselines and evaluation results.",
        "Present phased rollout with risk controls and budget.",
      ],
      artifact: {
        id: "ai-business-case-template",
        title: "AI business case template (one-pager)",
        description: "Copy/paste for steering committees.",
        content:
          `Problem\n- What pain and where (volume, cost, risk)\n\nCapability\n- What AI does (assist/decide/act)\n- Users + channels\n\nBaseline → Target\n- KPIs with definitions\n- Baseline window\n- Target improvements + timeline\n\nControls\n- Residency, PII, ACL, HITL, logging\n- Degraded mode + rollback\n\nCosts\n- Licensing + external model spend\n- Ops and governance staffing\n\nPlan\n- Pilot → scale cohorts\n- Evaluation gates\n\nRisks + mitigations\n- Hallucination, injection, drift, vendor outages`,
      },
    }),
  ],
};

