import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktProbabilityConfidenceRecommendations = buildChapter({
  slug: "mkt-probability-confidence-recommendations",
  number: 5,
  shortTitle: "Probability and Confidence",
  title: "Probability, Confidence, and Recommendations in Marketing AI",
  readingMinutes: 22,
  summary:
    "Marketing AI outputs are probabilities and confidence estimates, not certainty. Teams that understand this avoid false precision and build better human-in-the-loop decision systems.",
  keyTakeaway:
    "Use AI recommendations as ranked likelihoods plus uncertainty, then apply business guardrails before action.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "5.1",
      title: "Probability, Not Promise",
      subtitle: "What model scores actually mean",
      take: "A model score is a likelihood estimate based on historical patterns, not a guaranteed outcome.",
      why: "Misreading probability as certainty leads to overconfidence and poor budget decisions.",
      paragraphs: [
[
          s("A conversion score of 0.74 means the model estimates relatively high likelihood under similar historical conditions. "),
          x(
            "It does not mean 74% guaranteed conversion for that contact.",
            "Context shifts, creative changes, and external factors still influence real outcomes.",
          ),
          s(" Probability should inform prioritization, not replace judgment."),
        ],
[
          s("Better teams use score bands and actions, not raw decimal obsession. "),
          x(
            "For example, high-probability leads receive fast-track outreach while mid bands enter nurture journeys.",
            "This operational framing reduces emotional reactions to individual misses.",
          ),
          s(" Precision in process beats precision theater."),
        ],

        [

          s("Probability, Not Promise becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "A model score is a likelihood estimate based on historical patterns, not a guaranteed outcome.",

            "Misreading probability as certainty leads to overconfidence and poor budget decisions.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Lead score banding in HubSpot",
          body: "A team moved from single-threshold routing to score bands with tailored follow-up paths, improving SDR efficiency and reducing low-fit handoffs.",
        },
        {
          title: "Meta probability-based budget splits",
          body: "A growth team allocated exploration spend by probability buckets instead of binary audience inclusion, improving learning velocity.",
        },
        {
          title: "Salesforce opportunity prioritization",
          body: "RevOps mapped probability tiers to sales playbooks and reduced debate in weekly pipeline prioritization meetings.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "Confidence and Calibration",
      subtitle: "How trustworthy are the probabilities?",
      take: "Confidence estimates are useful only when model probabilities are calibrated against real outcomes.",
      why: "Uncalibrated confidence causes over-automation in weak segments and underinvestment in strong segments.",
      paragraphs: [
[
          s("Calibration checks whether predicted probabilities match observed conversion rates over time. "),
          x(
            "If the model predicts 70% likelihood repeatedly, roughly 70% of those cases should convert in aggregate.",
            "When this relationship breaks, confidence scores mislead decision-making.",
          ),
          s(" Calibration is a business safeguard, not an academic metric."),
        ],
[
          s("Marketers should review calibration by segment, channel, and campaign type. "),
          x(
            "A model may be calibrated globally but miscalibrated in key subgroups where budget concentration is highest.",
            "Segment-level calibration allows targeted retraining or guardrail adjustments.",
          ),
          s(" Aggregates can hide expensive local failures."),
        ],

        [

          s("Confidence and Calibration becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Confidence estimates are useful only when model probabilities are calibrated against real outcomes.",

            "Uncalibrated confidence causes over-automation in weak segments and underinvestment in strong segments.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Email model segment recalibration",
          body: "A lifecycle team found confidence inflation in a high-volume segment and corrected trigger thresholds, reducing over-send and unsubscribe risk.",
        },
        {
          title: "Paid social subgroup drift",
          body: "A brand detected confidence decay for one geo cluster and introduced region-specific adjustments before scaling spend.",
        },
        {
          title: "B2B nurture scoring correction",
          body: "Calibration audits showed mid-tier probabilities were overstated, so sales routing logic was updated to reduce wasted outreach effort.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch5-calibration-curve",
      type: "flow",
      title: "Prediction to Calibration Loop",
      caption: "Model score -> observed outcome -> calibration review -> threshold update.",
    }),
    buildSection({
      number: "5.3",
      title: "Recommendation Engines and Uncertainty",
      subtitle: "Ranked options, not universal truth",
      take: "Recommendation systems rank likely next-best actions but always carry uncertainty and context dependency.",
      why: "Treating recommendations as mandates can erode brand quality and campaign effectiveness.",
      paragraphs: [
[
          s("Recommendations optimize for available objectives and observed behavior. "),
          x(
            "If objectives are narrow, recommendations can become myopic, favoring short-term clicks over long-term value.",
            "Marketers need to ensure recommendation objectives reflect commercial strategy, not just engagement metrics.",
          ),
          s(" Objective design determines recommendation quality."),
        ],
[
          s("Uncertainty handling should be explicit in recommendation workflows. "),
          x(
            "Low-confidence recommendations can be routed to exploration buckets or human review.",
            "High-confidence recommendations can be automated within policy constraints.",
          ),
          s(" This hybrid approach protects quality while preserving scale benefits."),
        ],

        [

          s("Operationally, recommendation systems should run on a confidence-aware policy that defines when to automate, when to explore, and when to escalate to human review. "),

          x(

            "Tie recommendation actions to business guardrails such as margin floors, brand constraints, and channel fatigue limits so rankings do not optimize narrow engagement proxies.",

            "Log overrides and outcomes to improve objective design over time, turning uncertainty handling into a measurable governance loop.",

          ),

          s("This keeps recommendation automation commercially aligned and resilient as audience behavior shifts."),

        ],

      ],
      examples: [
        {
          title: "E-commerce next-best-product routing",
          body: "A team introduced confidence-based recommendation tiers and improved conversion while avoiding repetitive low-diversity suggestions.",
        },
        {
          title: "Content recommendation objective reset",
          body: "A publisher shifted objective from click-through only to engagement depth and reduced low-quality traffic spikes.",
        },
        {
          title: "B2B nurture next-best-action review",
          body: "Low-confidence actions were sent to strategist review queues, improving downstream meeting quality.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Threshold Design for Marketers",
      subtitle: "Where automation starts and stops",
      take: "Thresholds convert probabilities into actions. Bad threshold design causes overspend or missed opportunity.",
      why: "Thresholds are one of the highest-leverage controls in AI-driven campaign execution.",
      paragraphs: [
[
          s("Set thresholds by business impact, not arbitrary model-score cutoffs. "),
          x(
            "Use CAC tolerance, margin constraints, sales capacity, and compliance sensitivity to define action boundaries.",
            "Different actions can use different thresholds even within the same model.",
          ),
          s(" One-size thresholds usually underperform."),
        ],
[
          s("Thresholds should be monitored and revised on a schedule. "),
          x(
            "As market conditions and data distributions change, static thresholds drift out of alignment.",
            "Monthly threshold reviews often catch inefficiencies before quarter-end pipeline surprises.",
          ),
          s(" Threshold governance keeps automation honest."),
        ],

        [

          s("Threshold Design for Marketers becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Thresholds convert probabilities into actions. Bad threshold design causes overspend or missed opportunity.",

            "Thresholds are one of the highest-leverage controls in AI-driven campaign execution.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Sales-capacity-aware lead thresholding",
          body: "A company adjusted routing thresholds by SDR capacity and improved follow-up speed without increasing noise.",
        },
        {
          title: "Margin-sensitive promotional targeting",
          body: "A retailer used stricter thresholds for low-margin categories to reduce unprofitable campaign volume.",
        },
        {
          title: "Compliance-sensitive campaign guardrails",
          body: "A financial services team required higher confidence for regulated message variants, reducing review escalations.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Decision Lens: Acting on Probabilities Responsibly",
      subtitle: "From score to accountable action",
      take: "Reliable AI marketing execution requires calibration checks, clear thresholds, and documented owner accountability.",
      why: "A disciplined decision framework prevents score misuse and supports repeatable performance improvement.",
      paragraphs: [
[
          s("Use a simple framework: interpret score, check confidence, apply threshold, validate business constraints, and log decision owner. "),
          x(
            "This keeps AI-assisted decisions auditable and consistent across teams.",
            "It also makes post-campaign analysis much more actionable.",
          ),
          s(" Structured decisions outperform ad hoc reactions."),
        ],
[
          s("Train teams to challenge outputs without ignoring them. "),
          x(
            "Healthy skepticism means testing and monitoring, not rejecting model input entirely.",
            "Over time, this culture produces higher trust because wins and misses are both understood in context.",
          ),
          s(" Trust in AI grows through disciplined use."),
        ],

        [

          s("Decision Lens: Acting on Probabilities Responsibly becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Reliable AI marketing execution requires calibration checks, clear thresholds, and documented owner accountability.",

            "A disciplined decision framework prevents score misuse and supports repeatable performance improvement.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Weekly calibration standup",
          body: "A growth team introduced a short weekly review of confidence bands and threshold outcomes, improving iteration speed.",
        },
        {
          title: "Campaign decision logs",
          body: "Logging threshold overrides with rationale helped a CMO identify recurring bottlenecks and refine governance policy.",
        },
        {
          title: "Cross-functional score literacy",
          body: "Sales and marketing workshops on probability interpretation reduced conflict over lead-quality expectations.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A model score of 0.80 should be interpreted as:",
      options: [
        "A guaranteed outcome for that individual case.",
        "A high estimated likelihood based on historical patterns, still subject to uncertainty.",
        "Evidence that no human review is needed.",
        "Proof that the model is perfectly calibrated.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Scores are likelihood estimates, not certainty or automatic approval signals.",
      wrongFeedback:
        "Probability is not guarantee; confidence and calibration checks remain essential.",
    },
    {
      kind: "order",
      q: "Order the responsible decision flow.",
      prompt: "Arrange from first to last.",
      items: [
        "Interpret probability score in context.",
        "Check calibration/confidence behavior.",
        "Apply business threshold and constraints.",
        "Log owner and resulting action.",
      ],
      correctFeedback:
        "Correct. Interpret first, validate confidence, apply rules, and maintain accountability records.",
      wrongFeedback:
        "Reliable AI decisions require both statistical checks and operational accountability.",
    },
    {
      kind: "categorize",
      q: "Categorize each statement.",
      categories: ["Probability", "Calibration", "Thresholding"],
      items: [
        { text: "Estimated likelihood of conversion for a lead", category: 0 },
        { text: "Predicted 60% should correspond to about 60% observed over time", category: 1 },
        { text: "Route to SDR when score exceeds business-defined cutoff", category: 2 },
        { text: "Rank next-best actions by expected response", category: 0 },
        { text: "Confidence appears inflated in one segment", category: 1 },
        { text: "Apply stricter score boundary for regulated messages", category: 2 },
      ],
      correctFeedback:
        "Correct. Probability estimates outcomes, calibration tests trustworthiness, thresholding translates scores into actions.",
      wrongFeedback:
        "Separate estimation (probability), reliability checks (calibration), and action rules (thresholding).",
    },
  ],
});
