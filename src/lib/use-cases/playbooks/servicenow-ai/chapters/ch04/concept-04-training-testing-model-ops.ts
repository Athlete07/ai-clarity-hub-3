import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_MLOPS: GuideConcept = {
  number: 4,
  title: "Training, Testing, and Model Operations",
  subtitle:
    "Dataset design, label quality, imbalance, evaluation, test discipline, drift, retraining, A/B tests, and monitoring",
  sections: [
    buildGuideSection({
      id: "dataset-design",
      number: "4.1",
      title: "Dataset design",
      subtitle:
        "How to build a training dataset that produces a reliable classifier",
      takeaway:
        "Reliable models come from deliberate dataset design: stable labels, representative time windows, minimal leakage, and feature selection aligned to the decision.",
      why: "Most PI projects fail quietly because the dataset is accidental — not because the algorithm is weak.",
      paragraphs: [
        [
          s("Design starts with the decision: what must the model predict at runtime, with what information available at that moment? Don’t train on fields that are filled later by humans."),
        ],
        [
          s("Choose a time window that reflects current process. If the process changed, include only post-change data or label-map older data."),
        ],
        [
          s("Keep features minimal and high-signal. More fields often means more noise and slower inference."),
        ],
      ],
      workflowSteps: [
        "Define runtime-available fields; exclude post-triage fields.",
        "Select dataset window; note any org/process changes inside it.",
        "Create a feature list and justify each feature’s signal.",
      ],
      example: {
        title: "Leakage made the model look perfect",
        body: "A routing model used ‘assignment group’ history fields that were populated after triage. Training accuracy looked great; runtime performance was poor. Fix: restrict to submission-time fields only.",
      },
    }),
    buildGuideSection({
      id: "label-quality",
      number: "4.2",
      title: "Label quality",
      subtitle:
        "Why bad labels produce bad models and how to audit training data",
      takeaway:
        "PI learns your operational truth. If agents assign inconsistently, the model learns inconsistency. Label audits are mandatory before training and after drift.",
      why: "Label noise is the most common root cause of 'PI isn’t accurate' complaints.",
      paragraphs: [
        [
          s("Audit labels by sampling records per class. Look for inconsistent assignment criteria, category misuse, and default fallbacks that hide real intent."),
        ],
        [
          s("Fixing labels is often a process fix: enforce picklists, add validation, train agents, and update KB. ML cannot fix a broken process.",
          ),
        ],
        [
          s("Treat overrides as a signal: if humans frequently override a prediction, either the model lacks features or the label standard is unclear."),
        ],
      ],
      workflowSteps: [
        "Sample 30 records per top class; verify labels are correct.",
        "Find top 3 label failure modes; fix process or field constraints.",
        "Re-train after label cleanup; compare improvements.",
      ],
      example: {
        title: "Assignment labels were political, not factual",
        body: "Teams reassigned tickets to avoid workload. Labels reflected politics. Fix: introduce stable routing label field and train on that; accuracy and trust improved.",
      },
    }),
    buildGuideSection({
      id: "class-imbalance",
      number: "4.3",
      title: "Class imbalance",
      subtitle:
        "Rare categories and techniques to address them inside ServiceNow",
      takeaway:
        "Imbalance causes models to overpredict common classes. Handle rare classes with merging, hierarchical labels, thresholds, or rule-based floors — not wishful training.",
      why: "Service desks often have a long tail of rare categories. Imbalance is inevitable and must be designed for.",
      paragraphs: [
        [
          s("Approaches: merge rare classes into “Other/Triage”, create a two-stage model (broad group then subcategory), or use rules for rare but critical classes."),
        ],
        [
          s("Measure per-class performance. Global accuracy hides poor performance on rare classes."),
        ],
        [
          s("Do not auto-apply predictions for rare classes unless precision is proven — misroutes on rare cases can be very costly."),
        ],
      ],
      workflowSteps: [
        "Plot class counts; identify <1% frequency classes.",
        "Decide policy: merge, two-stage, or rule fallback.",
        "Evaluate per-class metrics after training.",
      ],
      example: {
        title: "Two-stage routing improved tail handling",
        body: "First model predicted broad domain (network, hardware, identity). Second model predicted subteam only within domain. Rare classes improved because the model wasn’t forced to choose among 80 groups at once.",
      },
    }),
    buildGuideSection({
      id: "model-evaluation",
      number: "4.4",
      title: "Model evaluation",
      subtitle:
        "Accuracy, F1, confusion matrices, and what each tells you",
      takeaway:
        "Use confusion matrices and per-class precision/recall to understand failure modes. Accuracy alone is misleading in imbalanced datasets.",
      why: "Evaluation is how you decide whether the model is safe to automate — and what thresholds to set.",
      paragraphs: [
        [
          s("Accuracy answers “how often correct overall.” F1 balances precision/recall. Confusion matrix shows which classes are being confused — often due to overlapping language."),
        ],
        [
          s("Operational evaluation: measure the cost of mistakes. A misroute might cost 2 hours; a false P1 might cost 20 minutes; weight accordingly."),
        ],
        [
          s("Set thresholds using evaluation curves: pick points where precision is high enough for automation.",
          ),
        ],
      ],
      workflowSteps: [
        "Review confusion matrix; pick top 3 confusion pairs.",
        "Fix taxonomy or add features to disambiguate.",
        "Set confidence threshold bands based on precision target.",
      ],
      example: {
        title: "Confusion matrix revealed taxonomy issue",
        body: "“Email” and “Teams” categories were confused because both were under “Collaboration.” Splitting categories and adding application field improved precision significantly.",
      },
    }),
    buildGuideSection({
      id: "test-set-discipline",
      number: "4.5",
      title: "The test set discipline",
      subtitle:
        "Why you must never test on training data and how to enforce the split",
      takeaway:
        "Always evaluate on holdout data. Testing on training data gives false confidence and leads to unsafe automation decisions.",
      why: "This is the core discipline of ML operations and a common interview filter question.",
      paragraphs: [
        [
          s("Training performance measures memorisation; test performance measures generalisation. Your users live in the test world."),
        ],
        [
          s("Use time-based splits when processes drift: train on older window, test on newer window. This simulates real deployment."),
        ],
        [
          s("Document the split in your model version log for audit and repeatability."),
        ],
      ],
      workflowSteps: [
        "Define a fixed evaluation set and keep it stable for comparisons.",
        "Run time-based backtesting for forecasting/similarity models.",
        "Require test-set metrics before model deploy change approval.",
      ],
      example: {
        title: "Model regressed on new data",
        body: "High training accuracy masked poor generalisation. When evaluated on newer holdout data, performance dropped. Time-split testing prevented a bad rollout.",
      },
    }),
    buildGuideSection({
      id: "retraining-drift",
      number: "4.6",
      title: "Model retraining",
      subtitle:
        "When to retrain, how to detect drift, and automated schedules",
      takeaway:
        "Retrain when labels drift, new services launch, or override rate rises. Detect drift through accuracy decay, override spikes, and changes in input distribution.",
      why: "ML is not set-and-forget. Drift is guaranteed in live service organisations.",
      paragraphs: [
        [
          s("Drift signals: increased overrides, increased low-confidence predictions, and changes in category distribution after reorgs or product launches."),
        ],
        [
          s("Retrain cadence: monthly during early rollout; quarterly when stable; ad hoc after major process changes."),
        ],
        [
          s("Automation: schedule retrains but require human approval to deploy new model versions in regulated environments."),
        ],
      ],
      workflowSteps: [
        "Define drift thresholds (override > X%, precision drop > Y).",
        "Schedule retrain jobs; store candidate metrics.",
        "Deploy new model only after evaluation and sign-off.",
      ],
      example: {
        title: "New application launch caused drift",
        body: "Ticket language changed after a product launch. Override rate spiked. Retraining with new labels restored performance in two weeks.",
      },
    }),
    buildGuideSection({
      id: "ab-testing-models",
      number: "4.7",
      title: "A/B testing models",
      subtitle:
        "Running two models in parallel and selecting the winner on production data",
      takeaway:
        "A/B testing compares model versions on real traffic using stable metrics (override rate, misroute cost, precision@threshold) before full cutover.",
      why: "A/B testing prevents regressions and builds confidence with stakeholders.",
      paragraphs: [
        [
          s("Define a primary metric: override rate at fixed threshold, or net cost saved. Secondary: latency and user trust feedback."),
        ],
        [
          s("Keep the automation policy identical between A and B (same thresholds). Otherwise you test policy, not model."),
        ],
        [
          s("Run long enough to cover typical variation (weekdays, patch windows, seasonal peaks)."),
        ],
      ],
      workflowSteps: [
        "Deploy candidate model to 10–20% cohort (suggest-only).",
        "Measure override and precision for 2–4 weeks.",
        "Promote only if metrics improve without new failure modes.",
      ],
      example: {
        title: "New model improved one class but hurt another",
        body: "A/B showed better routing for VPN but worse for identity. Dataset was adjusted; second candidate improved both. A/B prevented a regression rollout.",
      },
    }),
    buildGuideSection({
      id: "model-monitoring",
      number: "4.8",
      title: "Model monitoring",
      subtitle:
        "Dashboards and alerts that detect underperformance",
      takeaway:
        "Monitoring tracks: prediction volume, confidence distribution, override rate, per-class accuracy, and drift signals — with alerts when thresholds are breached.",
      why: "Without monitoring, models fail silently and teams lose trust in AI across the platform.",
      paragraphs: [
        [
          s("Operational dashboards should be owned like any service: uptime, latency, and error rate for inference; quality metrics for predictions."),
        ],
        [
          s("Alert on meaningful signals: sudden shift in top predicted class, override spike, and increased low-confidence cases."),
        ],
        [
          s("Tie monitoring to actions: create retrain task, open investigation, or roll back model version."),
        ],
      ],
      workflowSteps: [
        "Create a PI scorecard: override %, confidence bands, top confusions.",
        "Set alert thresholds and on-call owner.",
        "Run monthly model health review with service owners.",
      ],
      example: {
        title: "Monitoring caught broken label ingestion",
        body: "A data integration changed a category value set unexpectedly. Monitoring flagged distribution shift; model retrain was paused and labels fixed before quality degraded.",
      },
    }),
  ],
};

