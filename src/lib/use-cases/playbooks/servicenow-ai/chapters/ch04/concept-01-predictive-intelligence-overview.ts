import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_PI_OVERVIEW: GuideConcept = {
  number: 1,
  title: "Predictive Intelligence Overview",
  subtitle:
    "What PI is, the ML problem types it solves, how solutions/models relate, and how it complements Now Assist",
  sections: [
    buildGuideSection({
      id: "what-pi-is",
      number: "1.1",
      title: "What Predictive Intelligence is",
      subtitle:
        "The native ML capability in ServiceNow since Kingston — and why it still matters in the GenAI era",
      takeaway:
        "Predictive Intelligence (PI) is ServiceNow’s native machine learning layer for record-based prediction: classification, similarity, clustering, and recommendations trained on your historical platform data.",
      why: "Most teams jump to GenAI for problems that PI solves cheaper and more reliably. PI is the backbone for routing and operational predictions at scale.",
      paragraphs: [
        [
          s("PI is built for "),
          x(
            "high-volume operational decisions",
            "Route incidents, predict categories, recommend knowledge — based on labeled history.",
          ),
          s(
            ". It produces scores and recommendations you can wire into Flow Designer and business rules.",
          ),
        ],
        [
          s("Unlike GenAI, PI is "),
          x("supervised and measurable", "You can evaluate accuracy, confusion matrices, drift, and retraining impact."),
          s(
            ". It’s often the fastest path to credible ROI because outcomes are categorical and auditable.",
          ),
        ],
        [
          s(
            "A mature ServiceNow AI stack uses PI for prediction and Now Assist for language and synthesis — not one tool for everything.",
          ),
        ],
      ],
      workflowSteps: [
        "List 5 decisions in your workflow that are categorical (team, category, priority).",
        "Check if you already have labels for them in historical records.",
        "Prioritise PI before GenAI where the decision is a label, not a paragraph.",
      ],
      example: {
        title: "Routing wins without LLM spend",
        body: "A service desk used PI to route incidents with 82% accuracy and confidence thresholds. Now Assist was added later to draft work notes. The largest cost savings came from PI routing, not GenAI text.",
      },
    }),
    buildGuideSection({
      id: "three-problem-types",
      number: "1.2",
      title: "The three ML problem types",
      subtitle:
        "Classification, similarity, and clustering — what each solves and when to use each",
      takeaway:
        "Classification chooses a label (assignment group). Similarity finds nearest neighbors (duplicates). Clustering groups unlabeled records (themes). Picking the right type is the first architecture decision.",
      why: "Wrong problem typing is the #1 cause of wasted PI work: training classifiers with no labels, or using similarity where a classifier is cheaper.",
      paragraphs: [
        [
          x("Classification", "Predict a discrete label: category, group, priority band."),
          s(" is for decisions with known outcomes and training labels."),
        ],
        [
          x("Similarity", "Find similar historical records for dedup, suggestions, and reuse."),
          s(" is for “have we seen this before?” problems."),
        ],
        [
          x("Clustering", "Group records without labels into themes."),
          s(
            " is for discovery: identify new categories, emerging issues, or long-tail patterns to create taxonomy.",
          ),
        ],
      ],
      workflowSteps: [
        "Write problem statement; underline the output type (label vs neighbor vs theme).",
        "If label exists → classification. If duplicates/similarity needed → similarity. If no labels → clustering first.",
        "Define success metric per type (accuracy vs precision@k vs cluster coherence).",
      ],
      example: {
        title: "Using clustering before taxonomy refresh",
        body: "A company’s incident categories were chaotic. Clustering revealed 9 natural themes, which became a new category taxonomy. Only then did classification training become viable.",
      },
    }),
    buildGuideSection({
      id: "training-data-requirements",
      number: "1.3",
      title: "Training data requirements",
      subtitle:
        "Minimum record counts, data quality standards, and label distribution",
      takeaway:
        "PI is only as good as your labels and volume. You need enough examples per class, stable processes, and consistent field usage — otherwise PI learns noise.",
      why: "Most PI disappointments are data disappointments: sparse labels, drifting categories, and inconsistent assignment behavior.",
      paragraphs: [
        [
          s("Minimums depend on class count, but a safe rule: hundreds of examples per major class and "),
          x("balanced distribution", "If one class dominates, models overpredict it."),
          s(". Rare classes need special handling (merge, rules, or thresholds)."),
        ],
        [
          s("Quality standards: consistent descriptions, clean categories, and controlled vocabularies. If agents free-type categories, the model learns inconsistency."),
        ],
        [
          s("Process stability matters: if your org structure changes monthly, assignment-group labels become moving targets and models drift fast."),
        ],
      ],
      workflowSteps: [
        "Export last 90–180 days of target table records with labels.",
        "Plot label counts; identify rare classes and noisy labels.",
        "Define data cleanup actions before training (merge classes, enforce picklists).",
      ],
      example: {
        title: "Model failed due to label drift",
        body: "Assignment groups were renamed and reorganised quarterly. PI accuracy dropped. Fix: map old groups to stable “routing groups” field used for training; keep org changes separate from training labels.",
      },
    }),
    buildGuideSection({
      id: "prediction-framework",
      number: "1.4",
      title: "The Prediction Framework",
      subtitle:
        "How solutions, definitions, and models relate to each other in the platform",
      takeaway:
        "PI structures ML as: definitions (what to predict) → solutions (where it applies) → models (trained artifacts) → predictions (runtime results). Learn the hierarchy to debug problems fast.",
      why: "Admins who don’t understand the hierarchy cannot explain why a model isn’t firing or why predictions changed after retraining.",
      paragraphs: [
        [
          s("A "),
          x("definition", "The prediction target + inputs: e.g., predict assignment group from short description and category."),
          s(" is the core spec."),
        ],
        [
          s("A "),
          x("solution", "A packaged configuration applying one or more definitions to a table/workflow."),
          s(" ties the definition to real records and UI/Flow usage."),
        ],
        [
          s("A "),
          x("model", "Trained weights produced from a dataset split and evaluation."),
          s(
            " is the output of training. Multiple models can exist for the same definition (versions, A/B tests).",
          ),
        ],
      ],
      workflowSteps: [
        "Pick one PI use case (routing). Identify: definition, solution, model.",
        "Document where predictions surface (form fields, Flow, UI policy).",
        "Record model version and training dataset window for audit.",
      ],
      example: {
        title: "Debugging “model not firing”",
        body: "A model existed but predictions were blank. Root cause: solution wasn’t applied to the target table/view. Understanding the framework hierarchy made the fix obvious in minutes.",
      },
    }),
    buildGuideSection({
      id: "training-pipeline",
      number: "1.5",
      title: "The training pipeline",
      subtitle:
        "Data extraction, feature engineering, model training, and evaluation inside ServiceNow",
      takeaway:
        "PI training is an internal pipeline: extract labeled records, transform text/fields into features, train model, evaluate on holdout set, then publish a version.",
      why: "If you can explain the training pipeline, you can explain model failure modes — and pass architect interviews.",
      paragraphs: [
        [
          s("Extraction: choose record window and fields. Feature engineering: text is vectorised; categorical fields encoded. The platform handles most of this, but your input selection defines quality."),
        ],
        [
          s("Evaluation: accuracy is not enough. You need per-class precision/recall, confusion matrix, and threshold behavior for auto-actions."),
        ],
        [
          s("Publish discipline: training produces a candidate model. You decide whether to deploy, A/B test, or reject based on metrics and business risk."),
        ],
      ],
      workflowSteps: [
        "Define dataset window and label field.",
        "Select minimal high-signal features (avoid noisy free-text fields).",
        "Evaluate with confusion matrix; set confidence thresholds for automation.",
      ],
      example: {
        title: "Feature choice fixed misroutes",
        body: "Model used ‘work notes’ which contained irrelevant chatter. Removing it and focusing on short description + CI class improved routing accuracy and reduced misroutes.",
      },
    }),
    buildGuideSection({
      id: "inference-pipeline",
      number: "1.6",
      title: "The inference pipeline",
      subtitle:
        "How predictions are served at runtime and attached to records",
      takeaway:
        "Inference runs when records are created/updated: the model scores inputs, returns probabilities, and writes predictions to fields or recommendations — which can trigger Flow branches.",
      why: "Operational impact is determined by inference timing and write policy (suggest vs auto-apply).",
      paragraphs: [
        [
          s("Trigger points: record create, field change, or agent action. Predictions can be displayed as recommendations or auto-populated when confidence is high."),
        ],
        [
          s("Governance: use "),
          x("confidence thresholds", "Auto-apply only above a threshold; otherwise suggest and allow override."),
          s(". Log overrides for retraining feedback."),
        ],
        [
          s("Performance: inference should be fast and reliable. If it slows record creation, users will disable it. Keep models scoped and features minimal."),
        ],
      ],
      workflowSteps: [
        "Decide: suggest-only vs auto-fill for each field.",
        "Set threshold bands (auto / suggest / manual queue).",
        "Log overrides and low-confidence cases for retraining.",
      ],
      example: {
        title: "Auto-assign only above 0.82 confidence",
        body: "Routing model used three bands: ≥0.82 auto-assign; 0.65–0.82 suggest; <0.65 triage queue. Misroutes fell and agents trusted the system because it didn’t overreach.",
      },
    }),
    buildGuideSection({
      id: "pi-workbench",
      number: "1.7",
      title: "The Predictive Intelligence workbench",
      subtitle:
        "Admin interface for managing the ML lifecycle",
      takeaway:
        "The workbench is where you define solutions, train models, evaluate results, deploy versions, and monitor drift — it is your ML control tower inside ServiceNow.",
      why: "Running PI well requires operational discipline and ownership; the workbench is the interface for that ownership.",
      paragraphs: [
        [
          s("Treat the workbench like a deployment tool: model versions, evaluation results, and rollout notes belong in change control."),
        ],
        [
          s("Use it to answer: which model version is active, when was it trained, what dataset window, and how did it perform on the test set?"),
        ],
        [
          s("In mature teams, PI workbench ownership sits with a platform ML admin partnered with service owners — not ad hoc per project."),
        ],
      ],
      workflowSteps: [
        "Inventory current PI solutions and owners.",
        "Document active model versions and last training date.",
        "Schedule monthly review: metrics, overrides, drift signals.",
      ],
      example: {
        title: "Model version governance prevented silent regression",
        body: "A retrain introduced worse performance for one class. Because versions were tracked, the team rolled back within hours and adjusted the dataset. Without governance, the regression would have lasted weeks.",
      },
    }),
    buildGuideSection({
      id: "pi-vs-now-assist",
      number: "1.8",
      title: "Predictive Intelligence vs Now Assist",
      subtitle:
        "Choosing the right tool — and why they are complementary",
      takeaway:
        "Use PI for categorical predictions and measurable routing decisions. Use Now Assist for summarisation and drafting. Use both together in layered workflows.",
      why: "This is a common interview question and a common enterprise architecture decision.",
      paragraphs: [
        [
          s("PI: cheaper per transaction, deterministic scoring, explainable via metrics. Now Assist: higher cost, better language and synthesis, requires grounding."),
        ],
        [
          s("Complementary pattern: PI routes ticket → Now Assist drafts summary and resolution → Flow enforces policy. Each layer does what it’s best at."),
        ],
        [
          s("Anti-pattern: using GenAI to classify when you have labels. Another anti-pattern: using PI for narrative summaries. Pick the right layer."),
        ],
      ],
      workflowSteps: [
        "For each workflow step, label output type: label vs text.",
        "If label → PI; if text → Now Assist; if action → Flow/rules.",
        "Document the layered architecture in your POC deck.",
      ],
      example: {
        title: "ITSM stack: route + write + enforce",
        body: "PI predicts assignment group and category. Now Assist summarises the timeline and drafts closure notes. Flow enforces CAB policy and audit logging. The result is faster, cheaper, and safer than GenAI-only.",
      },
    }),
  ],
};

