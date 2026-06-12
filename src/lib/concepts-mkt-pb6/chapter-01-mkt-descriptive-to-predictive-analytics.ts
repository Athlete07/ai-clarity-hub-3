import { buildChapter, buildSection, s, x, sectionWithDiagram, MKT_CALLOUT } from "../concepts-mkt-helpers";

export const chapter01MktDescriptiveToPredictiveAnalytics = buildChapter({
  slug: "mkt-descriptive-to-predictive-analytics",
  number: 1,
  shortTitle: "Descriptive to Predictive",
  title: "From Descriptive Dashboards to Predictive Marketing Decisions",
  readingMinutes: 20,
  summary:
    "Most teams still report what happened yesterday. Predictive marketing moves budget to what is likely to happen next week. The shift is less about fancy models and more about cleaner data, reliable decision loops, and campaign operations that trust forward-looking signals.",
  keyTakeaway:
    "Descriptive analytics explains performance; predictive analytics changes performance. Start with one forecast that impacts budget allocation, then build confidence with strict measurement and retraining discipline.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "The Four Levels of Marketing Analytics",
      subtitle: "Descriptive, diagnostic, predictive, and prescriptive maturity",
      take: "Analytics maturity progresses through four levels: descriptive (what happened), diagnostic (why it happened), predictive (what is likely next), and prescriptive (what to do now).",
      why: "Teams that know their current level can invest in the right capabilities and avoid overestimating readiness for predictive decisioning.",
      paragraphs: [
        [
          s("Descriptive analytics summarizes historical performance through dashboards and reports. "),
          x(
            "It is essential for governance and accountability because it establishes a shared view of outcomes across teams.",
            "However, descriptive reporting is backward-looking and does not by itself recommend proactive action.",
          ),
          s(" Many teams mistake reporting depth for decision maturity."),
        ],
        [
          s("Diagnostic analytics explains drivers of performance changes by linking outcomes to factors such as channel mix, audience shifts, or message changes. "),
          x(
            "This level is stronger than descriptive reporting because it informs learning and post-mortem planning.",
            "Still, diagnosis remains largely retrospective and often too slow for fast-moving campaign decisions.",
          ),
          s(" Without forward-looking capability, teams react after value is already lost."),
        ],
        [
          s("Predictive analytics estimates future outcomes, and prescriptive analytics recommends next-best actions under constraints. "),
          x(
            "Predictive models can forecast conversion probability, churn risk, or expected channel efficiency before spend is fully committed.",
            "Prescriptive systems then connect predictions to policies such as budget shifts, send suppression, or offer adjustments.",
          ),
          s(" The biggest commercial jump comes when organizations move from explaining the past to acting on probable futures."),
        ],
      ],
      examples: [
        {
          title: "Descriptive-level plateau",
          body: "A retail growth team maintained strong dashboard coverage but relied on weekly reaction cycles. Spend inefficiencies persisted because decisions were made after performance drift had already occurred.",
        },
        {
          title: "Diagnostic-level improvement",
          body: "A B2B SaaS team used diagnostic analysis to identify that pipeline quality declines were tied to a specific campaign mix shift. It improved post-campaign planning but still lacked proactive controls.",
        },
        {
          title: "Predictive-to-prescriptive step",
          body: "A subscription business introduced churn forecasting and then linked scores to retention playbooks. This moved the team from reporting attrition to preventing it in high-risk cohorts.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-1-1-descriptive-vs-predictive",
      type: "comparison",
      title: "Four-Level Analytics Maturity",
      caption: "Progress from reporting the past to prescribing next-best actions.",
    }),
    buildSection({
      number: "1.2",
      title: "What Predictive Analytics Requires",
      subtitle: "Foundations needed before forecasting can influence decisions",
      take: "Predictive analytics requires reliable data definitions, timely pipelines, clear decision ownership, and measurable action policies.",
      why: "Without these prerequisites, prediction outputs become another dashboard artifact instead of a decision engine.",
      paragraphs: [
        [
          s("Prediction quality starts with data consistency and feature relevance. "),
          x(
            "If key definitions such as qualified lead, conversion event, or attribution window vary across systems, models learn unstable patterns.",
            "Clean identity resolution and event contracts are often more important than algorithm sophistication in early stages.",
          ),
          s(" Most predictive failures are data-operational failures, not math failures."),
        ],
        [
          s("Operational design is equally critical. "),
          x(
            "Every prediction should map to a documented action threshold, response owner, and fallback rule.",
            "If teams cannot answer 'what happens when this score changes?', predictive analytics will not change outcomes.",
          ),
          s(" Forecasts create value only when tied to executable decision policies."),
        ],
        [
          s("Finally, predictive systems need trust infrastructure: monitoring, retraining cadence, and transparent communication of uncertainty. "),
          x(
            "Stakeholders must know where the model is reliable, where confidence is lower, and how errors are handled.",
            "A modestly accurate model with strong governance often outperforms a high-accuracy model that nobody operationally trusts.",
          ),
          s(" Predictive readiness is a combination of data discipline, process design, and governance maturity."),
        ],
      ],
      examples: [
        {
          title: "Attribution contract standardization",
          body: "A growth team unified channel attribution windows before launching predictive budget models. Forecast stability improved enough to support weekly allocation changes.",
        },
        {
          title: "Action-threshold design",
          body: "A fintech team connected CPA forecasts to explicit bid and budget thresholds with named owners. This turned model outputs into repeatable paid media actions.",
        },
        {
          title: "Confidence-based rollout",
          body: "A subscription app launched predictive interventions only for high-confidence cohorts initially, then expanded scope as calibration and trust improved.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "High-Value Predictive Use Cases",
      subtitle: "Where forecasts most often improve marketing economics",
      take: "The best predictive use cases influence frequent, high-impact decisions with measurable downstream outcomes.",
      why: "Choosing high-leverage use cases first speeds adoption and improves executive confidence in predictive investments.",
      paragraphs: [
        [
          s("A strong first use case combines high decision frequency, clear intervention options, and fast feedback loops. "),
          x(
            "Examples include paid media budget pacing, lead prioritization, churn-risk intervention, and send-time optimization.",
            "These decisions happen often enough to generate rapid learning and measurable performance signals.",
          ),
          s(" High-frequency use cases allow teams to prove value quickly and refine models continuously."),
        ],
        [
          s("Low-value use cases often look strategic but are difficult to operationalize. "),
          x(
            "Forecasts without clear actions or long feedback cycles can consume analytics resources without changing execution behavior.",
            "Predictive maturity grows faster when teams avoid vanity models and focus on decisions they can actually control.",
          ),
          s(" Adoption follows visible business impact, not model complexity."),
        ],
        [
          s("Use-case selection should include risk and governance considerations alongside expected upside. "),
          x(
            "High-stakes interventions in regulated or sensitive contexts may require stronger oversight and phased rollout.",
            "A balanced portfolio often combines one near-term efficiency use case and one lifecycle value use case for broader credibility.",
          ),
          s(" Predictive roadmap quality depends on choosing use cases that are both valuable and executable."),
        ],
      ],
      examples: [
        {
          title: "Paid media pacing prediction",
          body: "A DTC brand forecasted 72-hour CPA by channel and tied outputs to budget-shift rules. Overspend incidents dropped during auction volatility.",
        },
        {
          title: "B2B lead prioritization",
          body: "A demand-gen team scored lead-to-opportunity likelihood and routed higher-probability accounts to SDR priority sequences. Pipeline efficiency improved with no increase in inbound volume.",
        },
        {
          title: "Retention intervention forecasting",
          body: "A subscription business used churn prediction to trigger save journeys before renewal windows. Retention lift made the predictive program visible to finance leadership.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.4",
      title: "Operationalising Predictions in Marketing",
      subtitle: "Turning forecast outputs into routine execution actions",
      take: "Predictions become valuable when linked to clear policies, owners, SLAs, and rollback protocols.",
      why: "The biggest failure mode in predictive programs is not model quality but lack of operational integration.",
      paragraphs: [
        [
          s("Each predictive output should map to a predefined decision rule. "),
          x(
            "For example, forecasted CAC deterioration can trigger bid cap reductions or channel reallocations at defined thresholds.",
            "Without codified response logic, teams interpret forecasts inconsistently and lose speed.",
          ),
          s(" Decision policy clarity is the foundation of operational prediction."),
        ],
        [
          s("Ownership and cadence are equally important. "),
          x(
            "Teams need explicit owners for prediction monitoring, action execution, and post-action evaluation by channel or lifecycle stream.",
            "SLAs for response time prevent useful signals from decaying before interventions are deployed.",
          ),
          s(" Predictive operations succeed when accountability is visible and distributed correctly."),
        ],
        [
          s("Guardrails should include confidence thresholds, blast-radius controls, and automated fallback behavior. "),
          x(
            "Early rollout can focus on high-confidence interventions, with automation expanding as calibration and trust improve.",
            "Rollback rules are essential during data outages or abnormal market conditions to protect budget and credibility.",
          ),
          s(" Operational resilience determines whether predictive systems survive real-world volatility."),
        ],
      ],
      examples: [
        {
          title: "Threshold-based media execution",
          body: "A B2C growth team only triggered budget shifts when confidence and expected-value thresholds were both met. This avoided overreaction to short-term noise.",
        },
        {
          title: "Lifecycle owner assignment",
          body: "A SaaS company assigned one owner per lifecycle stream to execute and review prediction-triggered actions weekly. Response speed improved and outcomes became easier to attribute.",
        },
        {
          title: "Automatic fallback during outage",
          body: "When a tracking disruption affected forecast inputs, a retailer’s system automatically reverted to baseline bid policies. Budget risk was controlled until data reliability recovered.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-1-4-decision-ops",
      type: "flow",
      title: "Predictive Decision Operating Flow",
      caption: "Forecast -> threshold -> action owner -> measurement -> retrain.",
    }),
    buildSection({
      number: "1.5",
      title: "Accuracy Thresholds for Predictive Decisions",
      subtitle: "How good is good enough to act confidently",
      take: "Prediction accuracy requirements should be set by decision risk, intervention cost, and tolerance for false positives or false negatives.",
      why: "Not every use case needs maximum model accuracy; it needs sufficient reliability for the economic and operational stakes involved.",
      paragraphs: [
        [
          s("Accuracy thresholds should be decision-specific rather than universal across all predictive applications. "),
          x(
            "Low-risk optimization decisions such as email timing can often act on moderate confidence levels.",
            "High-cost or high-stakes interventions, such as large budget reallocations, usually require stronger calibration and tighter error bounds.",
          ),
          s(" The right threshold reflects business consequence, not technical perfectionism."),
        ],
        [
          s("Teams should define acceptable trade-offs explicitly. "),
          x(
            "False positives may increase intervention cost or customer friction, while false negatives may miss value opportunities.",
            "Threshold tuning should optimize expected business value by balancing these outcomes, not simply maximizing model metrics.",
          ),
          s(" Economic trade-off design is part of predictive model governance."),
        ],
        [
          s("Accuracy monitoring must be continuous because model performance drifts over time. "),
          x(
            "Quarterly or monthly recalibration reviews, depending on decision speed, help maintain trust and prevent silent degradation.",
            "When performance drops below threshold, teams should trigger retraining, policy adjustment, or temporary fallback rules.",
          ),
          s(" Threshold governance keeps predictive decisions safe and commercially credible."),
        ],
      ],
      examples: [
        {
          title: "Low-risk threshold in send-time optimization",
          body: "An email team deployed send-time predictions at moderate confidence because downside risk was limited. The policy delivered engagement lift with manageable operational risk.",
        },
        {
          title: "High-stakes threshold for budget shifts",
          body: "A paid media team required stricter confidence and calibration criteria before auto-reallocating significant channel budget. This prevented costly overreaction in volatile periods.",
        },
        {
          title: "Threshold recalibration cycle",
          body: "A subscription marketer reviewed churn-model precision monthly and adjusted intervention thresholds during seasonal demand changes. Retention economics stayed stable despite behavior shifts.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Identifying the Highest-Value Predictive Use Case",
      subtitle: "A practical method to prioritize what to build next",
      take: "The highest-value use case is usually the one with high decision frequency, high economic impact, clear intervention pathways, and manageable governance risk.",
      why: "A rigorous prioritization method prevents teams from investing in impressive models that do not materially improve marketing outcomes.",
      paragraphs: [
        [
          s("Use a scoring framework that evaluates each candidate use case across four dimensions: impact, actionability, data readiness, and risk. "),
          x(
            "Impact asks how much value could be improved if decisions were better.",
            "Actionability asks whether teams can reliably execute interventions when predictions change.",
          ),
          s(" High-impact use cases with low actionability often stall, while moderate-impact use cases with strong actionability can produce faster real gains."),
        ],
        [
          s("Data readiness should include feature availability, signal freshness, and outcome measurability. "),
          x(
            "If data quality is weak, teams should either improve foundations first or choose a different use case to establish momentum.",
            "Risk scoring should account for customer harm, budget volatility, compliance exposure, and reversibility of wrong actions.",
          ),
          s(" A good prioritization process is honest about both upside and execution risk."),
        ],
        [
          s("The final output should be a ranked predictive roadmap with one primary use case and one backup use case for phased rollout. "),
          x(
            "Primary use cases should have clear 60-90 day validation plans and defined success metrics tied to business outcomes.",
            "Backup use cases provide resilience if data or governance constraints delay the primary initiative.",
          ),
          s(" The teams that scale predictive analytics fastest are those that choose use cases with disciplined commercial logic, not just technical appeal."),
        ],
      ],
      examples: [
        {
          title: "Paid media chosen over macro forecasting",
          body: "A DTC team ranked paid budget pacing above a broad demand forecast because intervention pathways and data freshness were stronger. The chosen use case produced measurable CAC stability within one quarter.",
        },
        {
          title: "Lifecycle trigger prioritization",
          body: "A SaaS marketer compared predictive lead scoring with churn intervention and selected churn first due to clearer actions and stronger expected margin impact.",
        },
        {
          title: "Risk-adjusted phased roadmap",
          body: "A financial services team selected low-risk send-time prediction as the first predictive rollout and delayed sensitive offer automation. This built trust while compliance workflows matured.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the strongest first use case for predictive marketing?",
      options: [
        "A quarterly brand health forecast with no action owner",
        "A daily channel budget decision with clear thresholds and measurable CAC impact",
        "A long-term macroeconomic trend model for investor updates",
        "A dashboard redesign project",
      ],
      correct: 1,
      correctFeedback:
        "Correct. High-frequency, high-impact decisions with explicit actions create fast validation and adoption.",
      wrongFeedback:
        "Start where prediction can change recurring decisions and produce measurable business impact quickly.",
    },
    {
      q: "Which issue most often hurts predictive accuracy in marketing teams?",
      options: [
        "Using a linear model instead of a deep model",
        "Too many campaign creatives",
        "Inconsistent event definitions and attribution windows",
        "Having only one dashboard tool",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Taxonomy and attribution inconsistencies create noisy labels and unstable model behavior.",
      wrongFeedback:
        "Data consistency problems usually harm predictive performance more than model-family selection.",
    },
    {
      kind: "order",
      q: "Order the predictive operations loop.",
      prompt: "Arrange from first step (top) to last (bottom).",
      items: [
        "Forecast outcome probabilities",
        "Apply thresholds and assign action owner",
        "Execute campaign action",
        "Measure lift and retrain",
      ],
      correctFeedback:
        "Correct. Predict -> decide -> execute -> measure/retrain is the core operating loop.",
      wrongFeedback:
        "The loop starts with forecasting and ends with measurement-informed retraining.",
    },
    {
      kind: "categorize",
      q: "Categorize each metric as model or business metric.",
      categories: ["Model Metric", "Business Metric"],
      items: [
        { text: "Calibration error", category: 0 },
        { text: "Incremental conversion lift", category: 1 },
        { text: "Precision@K", category: 0 },
        { text: "Contribution margin change", category: 1 },
        { text: "Recall", category: 0 },
        { text: "CAC volatility", category: 1 },
      ],
      correctFeedback:
        "Correct. Teams need both metric classes to prove predictive value and maintain model quality.",
      wrongFeedback:
        "Separate diagnostics (model) from commercial outcomes (business) to evaluate real performance.",
    },
  ],
});
