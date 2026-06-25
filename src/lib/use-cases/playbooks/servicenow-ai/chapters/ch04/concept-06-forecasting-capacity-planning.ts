import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_FORECASTING: GuideConcept = {
  number: 6,
  title: "Forecasting and Capacity Planning",
  subtitle:
    "Time series forecasts, demand planning, SLA risk prediction, capacity and budget forecasts, evaluation, and proactive staffing",
  sections: [
    buildGuideSection({
      id: "pa-forecasting",
      number: "6.1",
      title: "Time series forecasting in ServiceNow",
      subtitle:
        "Built-in forecasting in Performance Analytics and how it fits the AI stack",
      takeaway:
        "ServiceNow forecasting typically lives in Performance Analytics (PA): time series predictions for volumes, trends, and KPI trajectories — used for planning rather than per-record routing.",
      why: "Many orgs treat forecasting as 'extra'. In reality it’s how you staff, budget, and avoid SLA failures proactively.",
      paragraphs: [
        [
          s("Forecasting differs from PI classification: it predicts future values over time (ticket volume next week) rather than labels for a single record."),
        ],
        [
          s("Use forecasts as decision inputs: staffing, shift planning, and backlog management. Don’t treat them as exact truths."),
        ],
        [
          s("Forecasting accuracy depends on seasonality, change events, and business cycles. Include context signals when possible."),
        ],
      ],
      workflowSteps: [
        "Pick one KPI time series (incidents/day).",
        "Establish baseline forecast and error on last 8–12 weeks.",
        "Integrate forecast into weekly ops planning meeting.",
      ],
      example: {
        title: "Weekly incident volume forecast improved staffing",
        body: "A service desk used PA forecasting to predict volume spikes after patch Tuesdays. Staffing adjustments reduced backlog growth and improved SLA compliance.",
      },
    }),
    buildGuideSection({
      id: "demand-forecasting",
      number: "6.2",
      title: "Demand forecasting",
      subtitle:
        "Predicting ticket volumes to inform staffing and capacity",
      takeaway:
        "Demand forecasts turn historical ticket trends into staffing plans: expected volume by category, channel, and time — enabling proactive capacity decisions.",
      why: "If you can forecast demand, you stop firefighting and start running operations like a product.",
      paragraphs: [
        [
          s("Segment forecasts: overall volume hides spikes in specific categories (VPN, onboarding) and channels (chat vs email)."),
        ],
        [
          s("Include change calendar signals: major deployments, onboarding seasons, and business events often explain variance better than pure time series."),
        ],
        [
          s("Use forecasts to plan staffing buffers and training. Forecasts without staffing actions are just charts."),
        ],
      ],
      workflowSteps: [
        "Forecast volume by top 5 categories and by channel.",
        "Define staffing response playbook for high-risk weeks.",
        "Track forecast error and refine monthly.",
      ],
      example: {
        title: "Onboarding season prepared in advance",
        body: "Forecast predicted a 30% spike in access requests during hiring season. Desk added a temporary queue and self-service actions, preventing SLA breaches.",
      },
    }),
    buildGuideSection({
      id: "sla-breach-prediction",
      number: "6.3",
      title: "SLA breach prediction",
      subtitle:
        "Identifying at-risk tickets before they breach",
      takeaway:
        "Breach prediction flags records likely to miss SLA based on age, queue, category, and historical resolution patterns — enabling escalation and workload redistribution.",
      why: "SLA breaches damage trust. Predicting them early is one of the highest-leverage operational ML use cases.",
      paragraphs: [
        [
          s("Signals: time in state, assignment group load, complexity proxies, and historical breach patterns. Predictions should trigger action: reassignment, escalation, or automation."),
        ],
        [
          s("Governance: avoid gaming. Breach prediction should not incentivise closing tickets prematurely — tie to quality metrics too."),
        ],
        [
          s("Measure: reduction in breaches and impact on reopen rate."),
        ],
      ],
      workflowSteps: [
        "Baseline SLA breach rate by category/group.",
        "Deploy breach risk flags as agent dashboard + escalation flow.",
        "Measure: breaches reduced without increasing reopen rate.",
      ],
      example: {
        title: "Breach risk dashboard prevented misses",
        body: "Desk used breach risk predictions to rebalance work mid-shift. Breach rate fell 18% in 8 weeks without sacrificing quality.",
      },
    }),
    buildGuideSection({
      id: "infra-capacity-forecasting",
      number: "6.4",
      title: "Infrastructure capacity forecasting",
      subtitle:
        "Using CMDB and metrics to anticipate resource exhaustion",
      takeaway:
        "Capacity forecasting uses metric trends (CPU, disk, latency) mapped to CIs and services to predict exhaustion windows — enabling proactive remediation and change planning.",
      why: "Many incidents are predictable: capacity runs out. Forecasting turns them into planned work.",
      paragraphs: [
        [
          s("Map metrics to CIs and services. Without CMDB mapping, capacity signals stay siloed in monitoring tools."),
        ],
        [
          s("Use forecasts to trigger planned changes (scale up, add storage) before the breach window."),
        ],
        [
          s("Anomaly detection and forecasting complement each other: anomalies flag sudden spikes; forecasts flag gradual exhaustion."),
        ],
      ],
      workflowSteps: [
        "Pick one capacity metric and one CI class (databases).",
        "Forecast exhaustion date; validate against historical capacity incidents.",
        "Create proactive change template for scaling actions.",
      ],
      example: {
        title: "Disk exhaustion incidents eliminated",
        body: "Forecast identified hosts reaching 80% disk within 14 days. Automated cleanup and planned storage expansion removed an entire category of incidents.",
      },
    }),
    buildGuideSection({
      id: "budget-forecasting",
      number: "6.5",
      title: "Budget forecasting",
      subtitle:
        "Predicting IT spend based on consumption trends",
      takeaway:
        "Budget forecasts estimate spend trajectories from usage signals (tickets, changes, cloud consumption, AI usage) — helping finance and IT align before surprises occur.",
      why: "AI and cloud costs are variable. Forecasting spend prevents mid-quarter panic and trust erosion.",
      paragraphs: [
        [
          s("Treat cost drivers as time series: incidents volume, change throughput, cloud usage, and AI invocations. Forecast each and roll up."),
        ],
        [
          s("Use scenario planning: best/base/worst. Finance trusts scenario ranges more than point estimates."),
        ],
        [
          s("Governance: tie forecast deviations to root causes (new product launch, outage, usage spike)."),
        ],
      ],
      workflowSteps: [
        "Identify top 5 cost drivers and their telemetry sources.",
        "Build base forecast and scenario variants.",
        "Review monthly with finance and service owners.",
      ],
      example: {
        title: "AI usage forecast prevented surprise bill",
        body: "Now Assist usage was growing 12% weekly due to a new portal rollout. Forecast highlighted budget overrun risk; triggers were tuned and budgets adjusted before quarter end.",
      },
    }),
    buildGuideSection({
      id: "forecast-accuracy",
      number: "6.6",
      title: "Forecast accuracy evaluation",
      subtitle:
        "Measuring and reporting accuracy over time",
      takeaway:
        "Forecast evaluation uses backtesting (rolling windows) and error metrics (MAE, MAPE) — plus qualitative review for known events that explain misses.",
      why: "Without evaluation, forecasts become astrology. With evaluation, they become planning instruments.",
      paragraphs: [
        [
          s("Use rolling backtests: train on history, predict next period, compare. Repeat. This produces realistic error estimates."),
        ],
        [
          s("Pick error metric aligned to decision: staffing cares about absolute error; budget may care about percent error."),
        ],
        [
          s("Track accuracy by segment (category, channel) — overall accuracy can hide poor performance in critical segments."),
        ],
      ],
      workflowSteps: [
        "Run 12-week rolling backtest; compute MAE/MAPE.",
        "Publish forecast accuracy scorecard monthly.",
        "Annotate major misses with causal events (outage, release).",
      ],
      example: {
        title: "Accuracy improved after segmentation",
        body: "Overall forecast was acceptable but chat volume forecast was poor. Segmenting by channel improved staffing decisions and reduced overtime spikes.",
      },
    }),
    buildGuideSection({
      id: "forecasts-with-thresholds",
      number: "6.7",
      title: "Combining forecasts with thresholds",
      subtitle:
        "Alerts that fire on predicted future state, not current state",
      takeaway:
        "Predictive alerts trigger when forecasted future values breach thresholds (SLA risk, capacity exhaustion) — enabling earlier intervention than reactive monitoring.",
      why: "Reactive alerts arrive after users are impacted. Predictive alerts buy time.",
      paragraphs: [
        [
          s("Design: define threshold, forecast horizon, and required confidence. Too many predictive alerts create fatigue; use only for high-impact signals."),
        ],
        [
          s("Tie alerts to action playbooks: staffing buffer, scale-up change, or escalation."),
        ],
        [
          s("Monitor false alarms and adjust — predictive alerts need tuning like any model."),
        ],
      ],
      workflowSteps: [
        "Pick one predictive alert use case (SLA breach risk).",
        "Define horizon (next 24h) and threshold.",
        "Pilot with one team; track precision and response outcomes.",
      ],
      example: {
        title: "Predictive SLA alert saved the day",
        body: "Forecast predicted breach spike in a queue due to staffing shortage. Desk reallocated agents for 4 hours and avoided breach wave.",
      },
    }),
    buildGuideSection({
      id: "staffing-case-study",
      number: "6.8",
      title: "Real use case: proactive staffing for a service desk",
      subtitle:
        "Model, integration, and operational outcome",
      takeaway:
        "Proactive staffing combines demand forecasting + SLA risk prediction + staffing playbooks — reducing breaches and overtime while improving CSAT.",
      why: "This is the forecasting story executives understand: fewer breaches and better staffing economics.",
      paragraphs: [
        [
          s("Model: forecast volume by category and channel; predict SLA risk for open tickets; combine to recommend staffing shifts."),
        ],
        [
          s("Integration: PA dashboards + alerts + Flow tasks to managers. Predictions become operational actions, not reports."),
        ],
        [
          s("Outcome: fewer breaches, less overtime, more predictable operations. The win is operational discipline, not perfect prediction."),
        ],
      ],
      workflowSteps: [
        "Baseline: SLA breaches and overtime hours for 8 weeks.",
        "Pilot: forecast-driven staffing for 4 weeks.",
        "Measure: breach reduction, overtime reduction, and forecast error.",
      ],
      example: {
        title: "SLA breaches −16%, overtime −12%",
        body: "Desk used forecasts to add temporary coverage during predicted spikes. Breaches and overtime dropped. Forecasts weren’t perfect — but they were good enough to guide better decisions.",
      },
    }),
  ],
};

