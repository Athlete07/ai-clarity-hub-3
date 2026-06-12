import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktModelEvaluationMarketingAi = buildChapter({
  slug: "mkt-model-evaluation-marketing-ai",
  number: 6,
  shortTitle: "Model Evaluation for Marketers",
  title: "How Marketers Evaluate AI Models That Actually Drive Results",
  readingMinutes: 24,
  summary:
    "Model evaluation is how marketers separate impressive demos from reliable revenue impact. This chapter shows what to measure, how to test, and how to decide when a model is production-ready.",
  keyTakeaway:
    "Evaluate AI models against business outcomes, segment behavior, and drift over time, not just single-point benchmark metrics.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "What Good Evaluation Looks Like",
      subtitle: "From vanity metrics to business metrics",
      take: "A good evaluation links model performance to campaign outcomes like CAC efficiency, conversion lift, and revenue impact.",
      why: "Technical scores without business context can hide costly model behavior.",
      paragraphs: [
[
          s("Start by defining success in business terms before opening model dashboards. "),
          x(
            "If your objective is qualified pipeline growth, evaluate for that outcome directly rather than surrogate metrics alone.",
            "Teams that reverse this sequence often optimize for what is easy to measure rather than what matters commercially.",
          ),
          s(" Business objective clarity should drive every evaluation plan."),
        ],
[
          s("Use a balanced scorecard combining model metrics and campaign metrics. "),
          x(
            "Model metrics can detect statistical changes early, while campaign metrics confirm real-world impact.",
            "Together they reduce false confidence from either purely technical or purely commercial lenses.",
          ),
          s(" Dual-lens evaluation improves decision quality."),
        ],

        [

          s("What Good Evaluation Looks Like becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "A good evaluation links model performance to campaign outcomes like CAC efficiency, conversion lift, and revenue impact.",

            "Technical scores without business context can hide costly model behavior.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Lead model scorecard redesign",
          body: "A SaaS team replaced single AUC reporting with a scorecard including sales acceptance rate and pipeline contribution by score tier.",
        },
        {
          title: "Paid media optimization checks",
          body: "A growth team paired prediction metrics with blended CAC and incrementality results to avoid overfitting spend allocation.",
        },
        {
          title: "Lifecycle journey evaluation",
          body: "A retention team combined churn prediction quality with actual retention lift from triggered journeys.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Core Metrics Marketers Should Know",
      subtitle: "Precision, recall, lift, and calibration in plain terms",
      take: "Marketers do not need deep math, but they do need metric literacy to challenge weak AI claims.",
      why: "Metric confusion is one of the easiest ways for bad vendor narratives to survive.",
      paragraphs: [
[
          s("Precision answers: when the model says 'high intent,' how often is it right? "),
          x(
            "Recall answers: of all truly high-intent cases, how many did we capture?",
            "Lift compares model-driven outcomes to baseline approaches, while calibration checks confidence reliability.",
          ),
          s(" Different metrics matter depending on workflow risk and capacity."),
        ],
[
          s("Pick metric emphasis by business constraint. "),
          x(
            "If sales capacity is tight, precision may matter most to avoid noisy routing.",
            "If missing opportunities is costly, recall may deserve higher weight with guardrails for volume control.",
          ),
          s(" Metrics are decisions about trade-offs."),
        ],

        [

          s("Turn metric literacy into decision governance by requiring every model review to state which metric trade-off is being accepted and why. "),

          x(

            "For example, teams should explicitly choose precision-first or recall-first behavior based on sales capacity, compliance exposure, and revenue impact.",

            "Documenting these choices prevents metric cherry-picking in vendor reports and keeps evaluations aligned with business constraints.",

          ),

          s("When trade-offs are explicit, model evaluation becomes an accountable operating process instead of a dashboard debate."),

        ],

      ],
      examples: [
        {
          title: "Precision-first SDR routing",
          body: "A B2B team prioritized precision to protect limited SDR bandwidth and improved meeting quality despite lower total routed volume.",
        },
        {
          title: "Recall-focused upsell modeling",
          body: "A CS team increased recall for expansion signals and added secondary qualification to manage increased outreach load.",
        },
        {
          title: "Calibration-led threshold adjustment",
          body: "A marketing analytics group adjusted score thresholds after calibration analysis showed confidence inflation in one channel.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.3",
      title: "Offline vs Online Evaluation",
      subtitle: "Lab confidence versus live-market reality",
      take: "Offline tests are useful for initial screening, but online tests determine whether a model creates real campaign value.",
      why: "Many model failures are invisible offline and obvious in production.",
      paragraphs: [
[
          s("Offline evaluation uses historical datasets and is fast for comparing model versions. "),
          x(
            "It helps eliminate weak candidates before live deployment.",
            "However, it cannot fully represent current channel dynamics, audience shifts, or execution-side constraints.",
          ),
          s(" Offline wins are eligibility signals, not deployment proof."),
        ],
[
          s("Online evaluation through controlled experiments validates real impact. "),
          x(
            "Use A/B or holdout designs tied to business outcomes, then compare with baseline operations.",
            "Only online evidence should trigger major budget shifts or workflow automation expansion.",
          ),
          s(" Production truth beats retrospective comfort."),
        ],

        [

          s("Offline vs Online Evaluation becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Offline tests are useful for initial screening, but online tests determine whether a model creates real campaign value.",

            "Many model failures are invisible offline and obvious in production.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Lead score model bake-off",
          body: "Two models looked similar offline, but one produced stronger online sales acceptance due to better segment behavior in live traffic.",
        },
        {
          title: "Creative recommendation test",
          body: "A model with better offline ranking metrics underperformed online because recommendations reduced creative diversity.",
        },
        {
          title: "Retention trigger holdout design",
          body: "A holdout group revealed true incremental lift and prevented over-crediting model impact to seasonality.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch6-offline-online",
      type: "comparison",
      title: "Offline vs Online Evaluation",
      caption: "Offline narrows candidates; online proves business value.",
    }),
    buildSection({
      number: "6.4",
      title: "Segment-Level Evaluation",
      subtitle: "Average performance can hide expensive failures",
      take: "Global metrics can look strong while key segments underperform. Always evaluate by audience, geography, and funnel stage.",
      why: "Budget concentration often sits in a few segments where hidden model weakness causes major commercial drag.",
      paragraphs: [
[
          s("Segment-level breakdowns expose where a model is helping and where it is hurting. "),
          x(
            "A model can perform well overall but miss high-value enterprise segments or under-serve new geographies.",
            "Without segment review, teams scale models that quietly erode critical pipeline pockets.",
          ),
          s(" Averages are often misleading in growth decisions."),
        ],
[
          s("Define mandatory segment cuts in every evaluation report. "),
          x(
            "At minimum include channel, region, lifecycle stage, and value band.",
            "Escalate any segment with sustained variance beyond agreed thresholds before further rollout.",
          ),
          s(" Segment governance prevents costly blind spots."),
        ],

        [

          s("Segment-Level Evaluation becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Global metrics can look strong while key segments underperform. Always evaluate by audience, geography, and funnel stage.",

            "Budget concentration often sits in a few segments where hidden model weakness causes major commercial drag.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Geo-specific confidence decay",
          body: "A global campaign model looked healthy overall but underperformed in one region due to language nuance and offer mismatch.",
        },
        {
          title: "SMB vs enterprise split",
          body: "A lead model trained on SMB-heavy history misranked enterprise opportunities until segment-weighted retraining was introduced.",
        },
        {
          title: "Lifecycle-stage variance",
          body: "A retention model worked for early churn signals but weakly for late-stage churn, prompting stage-specific trigger redesign.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Drift Monitoring and Re-Evaluation Cadence",
      subtitle: "Models decay unless watched",
      take: "Model performance changes over time as markets, channels, and behavior shift. Monitoring cadence determines how fast you catch decay.",
      why: "Without drift monitoring, teams discover model failure only after missed targets and wasted spend.",
      paragraphs: [
[
          s("Drift appears as falling lift, unstable calibration, or segment-level degradation. "),
          x(
            "These patterns can emerge gradually and be masked by aggregate reporting.",
            "Set automated alerts and monthly review rituals to detect drift early.",
          ),
          s(" Early detection lowers remediation cost."),
        ],
[
          s("Re-evaluation should be tied to both time and change events. "),
          x(
            "Major pricing shifts, product launches, and channel strategy changes can invalidate prior model assumptions quickly.",
            "Event-triggered reviews complement fixed cadence reviews for stronger control.",
          ),
          s(" Monitoring needs both rhythm and triggers."),
        ],

        [

          s("Drift Monitoring and Re-Evaluation Cadence becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Model performance changes over time as markets, channels, and behavior shift. Monitoring cadence determines how fast you catch decay.",

            "Without drift monitoring, teams discover model failure only after missed targets and wasted spend.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Post-launch behavior shift",
          body: "A major product release changed user journeys and reduced model lift until rapid re-evaluation and feature updates were completed.",
        },
        {
          title: "Channel mix drift detection",
          body: "A media mix change altered traffic quality; drift alerts flagged score instability within days rather than weeks.",
        },
        {
          title: "Quarterly recalibration policy",
          body: "A team institutionalized quarterly recalibration and cut long-tail performance decay across multiple AI modules.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Decision Lens: Promotion, Rollback, or Retrain",
      subtitle: "How marketers decide model lifecycle actions",
      take: "Every evaluation cycle should end with a clear action: promote, rollback, retrain, or hold for more evidence.",
      why: "Action clarity prevents prolonged underperformance and ambiguous ownership.",
      paragraphs: [
[
          s("Define decision gates before tests begin. "),
          x(
            "Specify minimum business lift, acceptable segment variance, and calibration boundaries required for promotion.",
            "Also define rollback triggers so teams do not debate under pressure when metrics deteriorate.",
          ),
          s(" Predefined gates make AI operations reliable."),
        ],
[
          s("Assign lifecycle ownership clearly. "),
          x(
            "One owner approves promotion, one monitors drift, and one coordinates retraining execution.",
            "This avoids common failure modes where everyone is informed but no one is accountable.",
          ),
          s(" Accountability is part of model quality."),
        ],

        [

          s("Decision Lens: Promotion, Rollback, or Retrain becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Every evaluation cycle should end with a clear action: promote, rollback, retrain, or hold for more evidence.",

            "Action clarity prevents prolonged underperformance and ambiguous ownership.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Model promotion checklist",
          body: "A growth org required business-lift and calibration checks before promotion, reducing risky rollouts.",
        },
        {
          title: "Fast rollback protocol",
          body: "A predefined rollback trigger protected spend when a new scoring version degraded performance after deployment.",
        },
        {
          title: "Retraining ownership model",
          body: "Clear owners across analytics and RevOps shortened time from drift detection to retrained deployment.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which evaluation result should trigger the strongest caution before scaling?",
      options: [
        "Strong global metric but weak performance in high-value segments",
        "Slightly lower click-through with higher pipeline quality",
        "Improved calibration in one channel",
        "Higher recall with stable cost",
      ],
      correct: 0,
      correctFeedback:
        "Correct. Segment-level weakness in high-value areas can outweigh strong global averages.",
      wrongFeedback:
        "Always inspect segment behavior; global averages can hide expensive underperformance.",
    },
    {
      kind: "order",
      q: "Order the evaluation lifecycle.",
      prompt: "Arrange from first to last.",
      items: [
        "Define business objective and success gates.",
        "Run offline screening on candidate models.",
        "Validate in online controlled tests.",
        "Decide promote, rollback, retrain, or hold.",
      ],
      correctFeedback:
        "Correct. Objective and gates first, then offline screening, then online proof, then lifecycle action.",
      wrongFeedback:
        "Model evaluation should progress from objective definition to offline and online validation before action decisions.",
    },
    {
      kind: "categorize",
      q: "Categorize each item.",
      categories: ["Offline Evaluation", "Online Evaluation", "Monitoring/Governance"],
      items: [
        { text: "Historical holdout score comparison", category: 0 },
        { text: "A/B campaign impact on qualified pipeline", category: 1 },
        { text: "Monthly drift and calibration alerts", category: 2 },
        { text: "Cross-validation benchmark check", category: 0 },
        { text: "Live holdout group incrementality test", category: 1 },
        { text: "Promotion and rollback trigger policy", category: 2 },
      ],
      correctFeedback:
        "Correct. Offline screens candidates, online proves impact, governance sustains performance over time.",
      wrongFeedback:
        "Separate pre-deployment testing, live validation, and ongoing control mechanisms clearly.",
    },
  ],
});
