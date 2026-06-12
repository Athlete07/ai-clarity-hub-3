import type { DiagramDef } from "./diagram-registry";

export const BL_FOUNDER_DIAGRAM_REGISTRY: Record<string, DiagramDef> = {
  "ch1-dl-flow": {
    "type": "flow",
    "steps": [
      {
        "title": "Start with broad AI",
        "desc": "Define the full automation opportunity before selecting methods."
      },
      {
        "title": "Narrow to machine learning",
        "desc": "Identify tasks where prediction from historical data creates value."
      },
      {
        "title": "Apply deep learning",
        "desc": "Use neural networks for language, vision, or speech complexity."
      },
      {
        "title": "Price the trade-off",
        "desc": "Balance capability gains against cost, opacity, and dependency risk."
      },
      {
        "title": "Deploy with controls",
        "desc": "Set evaluation, fallback paths, and monitoring before scaling."
      }
    ]
  },
  "ch1-ai-hierarchy": {
    "type": "nested",
    "layers": [
      {
        "title": "Artificial Intelligence (outer set)",
        "desc": "Any system that performs tasks requiring human-like intelligence.",
        "items": "Rules engines, search, optimization, machine learning"
      },
      {
        "title": "Machine Learning (inside AI)",
        "desc": "Models learn patterns from data instead of hard-coded rules.",
        "items": "Supervised learning, unsupervised learning, reinforcement learning"
      },
      {
        "title": "Deep Learning (inside ML)",
        "desc": "Neural-network methods for high-dimensional, unstructured signals.",
        "items": "Transformers, large vision models, speech models"
      }
    ]
  },
  "ch1-paradigm-shift": {
    "type": "comparison",
    "cards": [
      {
        "label": "Model Confidence",
        "title": "How sure the model sounds",
        "desc": "Probability-like confidence can remain high even when answers are wrong."
      },
      {
        "label": "Actual Correctness",
        "title": "What users truly need",
        "desc": "Ground-truth accuracy must be measured independently of model self-belief.",
        "accent": true
      },
      {
        "label": "Calibration Controls",
        "title": "How to close the gap",
        "desc": "Use abstention rules, verification steps, and human review thresholds."
      }
    ]
  },
  "ch2-training-loop": {
    "type": "flow",
    "steps": [
      {
        "title": "Initialize parameters",
        "desc": "Start with trainable weights that encode model behavior."
      },
      {
        "title": "Run forward pass",
        "desc": "Generate predictions from current weights on training examples."
      },
      {
        "title": "Compute loss",
        "desc": "Measure prediction error against labeled outcomes."
      },
      {
        "title": "Backpropagate gradients",
        "desc": "Calculate how each weight contributed to the error."
      },
      {
        "title": "Update and repeat",
        "desc": "Adjust weights over many batches until validation performance stabilizes."
      }
    ]
  },
  "ch2-fitting-comparison": {
    "type": "comparison",
    "cards": [
      {
        "label": "Model Metrics",
        "title": "Technical quality signal",
        "desc": "Track precision, recall, latency, and drift for reliability."
      },
      {
        "label": "Business Metrics",
        "title": "Commercial value signal",
        "desc": "Track conversion, cost-to-serve, cycle time, and retention outcomes.",
        "accent": true
      },
      {
        "label": "Decision Metrics",
        "title": "Governance signal",
        "desc": "Track override rates, incident levels, and escalation quality."
      }
    ]
  },
  "founder-training-inference-split": {
    "type": "comparison",
    "cards": [
      {
        "label": "Training (CapEx)",
        "title": "Upfront model creation",
        "desc": "Compute-heavy runs produce model weights before revenue."
      },
      {
        "label": "Inference (OpEx)",
        "title": "Continuous serving cost",
        "desc": "Each user request consumes tokens and scales with usage.",
        "accent": true
      }
    ]
  },
  "founder-unit-economics-trap": {
    "type": "flow",
    "steps": [
      {
        "title": "Launch AI feature",
        "desc": "Product demand increases quickly."
      },
      {
        "title": "Usage scales",
        "desc": "Inference volume rises with engagement."
      },
      {
        "title": "Revenue lags",
        "desc": "Monetization does not match variable cost."
      },
      {
        "title": "Margins compress",
        "desc": "COGS outpaces contribution per user."
      },
      {
        "title": "Corrective action",
        "desc": "Reprice, optimize, or redesign workload."
      }
    ]
  },
  "ch2-data-flywheel": {
    "type": "flow",
    "steps": [
      {
        "title": "Grow adoption",
        "desc": "More users create more real workflow events."
      },
      {
        "title": "Capture proprietary data",
        "desc": "Usage creates unique learning signal."
      },
      {
        "title": "Improve model quality",
        "desc": "Retraining converts signal into performance gains."
      },
      {
        "title": "Upgrade product experience",
        "desc": "Better output improves customer outcomes."
      },
      {
        "title": "Reinforce growth",
        "desc": "Improved outcomes attract more usage."
      }
    ]
  },
  "bl-pb1-ch04-4-4-data-quality-is-a-leadership-decision": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind data quality is a leadership decision.",
        "items": "Data quality is a leadership decision"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize data quality is a leadership decision through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb1-ch05-5-1-ai-outputs-are-probabilities-not-facts": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai outputs are probabilities, not facts matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: machine learning models do not look up facts or reason to conclusions."
      }
    ]
  },
  "bl-pb1-ch05-5-2-confidence-scores-what-they-mean-and-what-th": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind confidence scores - what they mean and what they don't.",
        "items": "which may be well-calibrated or poorly"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize confidence scores - what they mean and what they don't through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb1-ch06-6-1-why-accuracy-is-the-wrong-metric": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why accuracy is the wrong metric appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb1-ch06-6-2-precision-and-recall-in-business-language": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why precision and recall in business language matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: precision answers: of the cases the ai flagged, what fraction were correct."
      }
    ]
  },
  "bl-pb1-ch07-7-1-what-ai-bias-means-for-business-leaders": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what ai bias means for business leaders."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb1-ch07-7-2-how-bias-enters-ai-systems": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how bias enters ai systems."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb1-ch08-8-1-the-ai-value-chain": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the ai value chain matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the ai value chain runs from compute hardware through foundation model training, cloud api distribution, and."
      }
    ]
  },
  "ch8-cost-latency-frontier": {
    "type": "comparison",
    "cards": [
      {
        "label": "Exact Cache Hits",
        "title": "Lowest cost profile",
        "desc": "Serve repeated requests instantly with near-zero incremental inference."
      },
      {
        "label": "Semantic Cache Reuse",
        "title": "Balanced frontier point",
        "desc": "Reuse nearby answers with validation to cut latency and cost together.",
        "accent": true
      },
      {
        "label": "Fresh Generation",
        "title": "Highest quality profile",
        "desc": "Run full generation when context is novel or quality risk is high."
      }
    ]
  },
  "bl-pb2-ch01-1-2-the-value-feasibility-matrix": {
    "type": "comparison",
    "cards": [
      {
        "label": "High Value / High Feasibility",
        "title": "Prioritize immediately",
        "desc": "Best candidates for funded execution.",
        "accent": true
      },
      {
        "label": "High Value / Low Feasibility",
        "title": "Sequence as strategic bets",
        "desc": "Build enablers before scaling."
      },
      {
        "label": "Low Value / High Feasibility",
        "title": "Use selectively",
        "desc": "Capture tactical wins without overinvesting."
      },
      {
        "label": "Low Value / Low Feasibility",
        "title": "Defer",
        "desc": "Do not consume scarce AI bandwidth now."
      }
    ]
  },
  "bl-pb2-ch01-1-3-process-mapping-for-ai": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why process mapping for ai matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai acts on processes."
      }
    ]
  },
  "bl-pb2-ch02-2-1-the-three-categories-of-ai-use-cases": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the three categories of ai use cases matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: every ai use case in a business context belongs to one of three archetypes: automation (ai."
      }
    ]
  },
  "bl-pb2-ch02-2-2-running-discovery-workshops-that-work": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why running discovery workshops that work matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a discovery workshop is a structured conversation, not a brainstorm."
      }
    ]
  },
  "bl-pb2-ch03-3-1-why-ai-roi-is-hard": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai roi is hard appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb2-ch03-3-2-building-a-scoring-model": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why building a scoring model matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a scoring model forces explicit trade-off decisions before anyone is invested in a specific initiative."
      }
    ]
  },
  "founder-build-buy-partner": {
    "type": "tree",
    "root": "Do you own proprietary data that creates durable model advantage?",
    "branches": [
      {
        "answer": "NO",
        "label": "Buy",
        "action": "Use external models and differentiate through workflow, distribution, and UX."
      },
      {
        "answer": "YES",
        "label": "Is the task narrow and high-volume?",
        "children": [
          {
            "answer": "YES",
            "label": "Build",
            "conclusion": {
              "title": "Internal model path",
              "action": "Invest in training, eval operations, and retraining cadence."
            }
          },
          {
            "answer": "NO",
            "label": "Partner",
            "conclusion": {
              "title": "Hybrid path",
              "action": "Combine vendor models with retrieval and strict quality gates."
            }
          }
        ]
      }
    ]
  },
  "bl-pb2-ch04-4-2-the-true-cost-of-building": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the true cost of building matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: internal build estimates consistently undercount four cost categories: opportunity cost of engineering talent, the ongoing maintenance."
      }
    ]
  },
  "bl-pb2-ch05-5-1-why-ai-roadmaps-are-different-from-software-": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai roadmaps are different from software roadmaps appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb2-ch05-5-2-the-initiative-lifecycle": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the initiative lifecycle matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: every ai initiative moves through six phases: problem definition, data assessment, design and build, pilot, production."
      }
    ]
  },
  "bl-pb2-ch06-6-1-why-ai-programmes-fail-to-connect-to-strateg": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why ai programmes fail to connect to strategy.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why ai programmes fail to connect to strategy through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb2-ch06-6-2-mapping-ai-to-strategic-priorities": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why mapping ai to strategic priorities matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: every ai initiative in your portfolio must trace to a stated strategic priority."
      }
    ]
  },
  "bl-pb2-ch07-7-1-why-quick-wins-matter": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why quick wins matter appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb2-ch07-7-2-what-makes-a-good-quick-win": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what makes a good quick win."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb2-ch08-8-1-what-the-board-actually-wants": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind what the board actually wants.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize what the board actually wants through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb2-ch08-8-2-presentation-structure": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why presentation structure matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the most effective ai board presentation has six sections in a specific sequence: strategic context (why."
      }
    ]
  },
  "bl-pb2-ch09-9-1-the-ai-initiative-failure-rate": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the ai initiative failure rate matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: enterprise ai initiative failure rates of 70-80% are well-documented and consistent across industries."
      }
    ]
  },
  "bl-pb2-ch09-9-2-the-pilot-trap": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the pilot trap matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the pilot trap is when an ai initiative succeeds in a controlled, resourced, monitored pilot environment."
      }
    ]
  },
  "bl-pb2-ch10-10-1-why-ai-needs-a-faster-review-cadence": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why ai needs a faster review cadence.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why ai needs a faster review cadence through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb2-ch10-10-2-the-quarterly-review": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the quarterly review matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the quarterly review is the primary governance event for an ai programme: it is where gate."
      }
    ]
  },
  "bl-pb2-ch11-11-1-why-ai-investment-is-inherently-political": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai investment is inherently political appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb2-ch11-11-2-building-the-stakeholder-map": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why building the stakeholder map matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a stakeholder map for an ai programme identifies: who has formal authority over investment decisions, who."
      }
    ]
  },
  "bl-pb3-ch01-1-2-the-four-categories-of-ai-value": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four categories of ai value matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai value falls into four categories: cost reduction, productivity gain, revenue growth, and risk reduction."
      }
    ]
  },
  "bl-pb3-ch01-1-3-measurement-frameworks-before-after-control-": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why measurement frameworks: before/after, control groups, and attribution models matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: before/after measurement is cheap and often misleading."
      }
    ]
  },
  "bl-pb3-ch02-2-1-the-full-cost-inventory-for-ai-projects": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the full cost inventory for ai projects matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai project cost inventory has eight categories: software licensing, implementation and integration, data preparation, infrastructure, change."
      }
    ]
  },
  "bl-pb3-ch02-2-2-one-time-vs-recurring-costs-building-the-mul": {
    "type": "comparison",
    "cards": [
      {
        "label": "One-time",
        "title": "One-time profile",
        "desc": "Where one-time creates stronger fit."
      },
      {
        "label": "recurring costs: building the multi-year model",
        "title": "recurring costs: building the multi-year model profile",
        "desc": "Where recurring costs: building the multi-year model creates stronger fit.",
        "accent": true
      }
    ]
  },
  "bl-pb3-ch03-3-1-why-productivity-and-revenue-roi-need-differ": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why productivity and revenue roi need different models appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb3-ch03-3-2-measuring-productivity-gains-precisely": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why measuring productivity gains precisely matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: productivity measurement requires four steps: measure the baseline task time, measure the ai-assisted task time, calculate."
      }
    ]
  },
  "bl-pb3-ch04-4-1-defining-hard-roi-in-the-ai-context": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why defining hard roi in the ai context matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: hard ai roi meets three criteria: it is directly traceable to a specific financial line, the."
      }
    ]
  },
  "bl-pb3-ch04-4-2-defining-soft-roi-and-strategic-value": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why defining soft roi and strategic value matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: soft ai roi includes: employee experience and retention, decision quality improvement, brand and customer trust, speed."
      }
    ]
  },
  "bl-pb3-ch05-5-1-structure-of-a-winning-ai-business-case": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why structure of a winning ai business case matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a winning ai business case has seven components in a specific order: executive summary, problem statement,."
      }
    ]
  },
  "bl-pb3-ch05-5-2-stakeholder-mapping-for-the-business-case": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why stakeholder mapping for the business case matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: every ai business case goes through multiple decision-makers with different frames: the ceo cares about strategic."
      }
    ]
  },
  "bl-pb3-ch06-6-1-why-baselines-determine-business-case-credib": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why baselines determine business case credibility appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb3-ch06-6-2-what-to-measure-before-deploying-ai": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what to measure before deploying ai."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb3-ch07-7-1-why-attribution-is-the-hardest-ai-roi-proble": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why attribution is the hardest ai roi problem appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb3-ch07-7-2-types-of-attribution-challenges": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why types of attribution challenges matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: attribution challenges fall into five patterns: concurrent improvement (other changes happening at the same time), selection."
      }
    ]
  },
  "bl-pb3-ch08-8-1-how-to-size-an-ai-investment-correctly": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how to size an ai investment correctly."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb3-ch08-8-2-portfolio-approach-to-ai-investments": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why portfolio approach to ai investments matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: managing ai as a portfolio rather than as a collection of independent projects produces better resource."
      }
    ]
  },
  "bl-pb3-ch09-9-1-how-cfos-think-about-ai-investments": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how cfos think about ai investments."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb3-ch09-9-2-the-financial-language-of-ai-roi": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the financial language of ai roi matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: cfos lose confidence when ai sponsors use imprecise financial language - or when they use financial."
      }
    ]
  },
  "bl-pb3-ch10-10-1-why-post-deployment-tracking-fails": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why post-deployment tracking fails appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb3-ch10-10-2-setting-up-the-roi-tracking-infrastructure": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why setting up the roi tracking infrastructure matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: roi tracking infrastructure has three components: a data pipeline that collects and processes the right signals,."
      }
    ]
  },
  "bl-pb4-ch01-1-2-the-eight-ai-vendor-categories-by-function": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the eight ai vendor categories by function matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: eight functional categories account for 90% of enterprise ai spend: sales intelligence, marketing personalisation, finance automation,."
      }
    ]
  },
  "bl-pb4-ch01-1-3-horizontal-platforms-vs-vertical-point-solut": {
    "type": "comparison",
    "cards": [
      {
        "label": "Horizontal platforms",
        "title": "Horizontal platforms profile",
        "desc": "Where horizontal platforms creates stronger fit."
      },
      {
        "label": "vertical point solutions",
        "title": "vertical point solutions profile",
        "desc": "Where vertical point solutions creates stronger fit.",
        "accent": true
      }
    ]
  },
  "bl-pb4-ch02-2-1-why-standard-rfps-fail-for-ai-vendors": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why standard rfps fail for ai vendors appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb4-ch02-2-2-the-ai-rfp-structure-three-stages": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the ai rfp structure: three stages matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: an ai rfp runs in three sequential stages: a written functional brief that vendors respond to,."
      }
    ]
  },
  "bl-pb4-ch03-3-1-the-five-dimensions-of-ai-vendor-due-diligen": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the five dimensions of ai vendor due diligence matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: standard software due diligence covers financial stability, security certification, and service continuity."
      }
    ]
  },
  "bl-pb4-ch03-3-2-financial-and-operational-stability-checks": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why financial and operational stability checks matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai vendor financial stability is more volatile than traditional software because the market is consolidating rapidly."
      }
    ]
  },
  "bl-pb4-ch04-4-1-the-demo-to-production-gap": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the demo-to-production gap matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai vendor demos are designed to show the model at its best: curated data, optimal prompts,."
      }
    ]
  },
  "bl-pb4-ch04-4-2-benchmark-manipulation-and-statistical-red-f": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why benchmark manipulation and statistical red flags matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai vendor benchmarks are almost universally presented in the most favourable possible light: cherry-picked tasks, optimal."
      }
    ]
  },
  "bl-pb4-ch05-5-1-why-ai-contracts-are-different-from-software": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai contracts are different from software contracts appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb4-ch05-5-2-model-performance-warranty-and-accuracy-thre": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why model performance warranty and accuracy thresholds matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a model performance warranty is an ai contract's most important provision and its most commonly absent."
      }
    ]
  },
  "bl-pb4-ch06-6-1-why-standard-slas-fail-for-ai-products": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why standard slas fail for ai products appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb4-ch06-6-2-accuracy-sla-metrics-thresholds-and-measurem": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why accuracy sla: metrics, thresholds, and measurement matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: an accuracy sla requires four elements: the metric (f1 score, precision, recall, mape, or agreement rate),."
      }
    ]
  },
  "bl-pb4-ch07-7-1-how-ai-changes-the-gdpr-landscape": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how ai changes the gdpr landscape."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb4-ch07-7-2-the-data-processing-agreement-for-ai-vendors": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the data processing agreement for ai vendors matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: article 28 gdpr requires a data processing agreement with every vendor who processes personal data on."
      }
    ]
  },
  "bl-pb4-ch08-8-1-the-four-levels-of-ai-vendor-lock-in": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four levels of ai vendor lock-in matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai lock-in operates at four levels that compound over time: data lock-in (data in proprietary formats."
      }
    ]
  },
  "bl-pb4-ch08-8-2-assessing-lock-in-risk-before-contract-signa": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why assessing lock-in risk before contract signature matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: lock-in risk assessment before contract signature converts an abstract risk into a quantified exit cost estimate."
      }
    ]
  },
  "bl-pb4-ch09-9-1-what-a-pilot-is-and-what-it-is-not": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what a pilot is and what it is not."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb4-ch09-9-2-defining-success-criteria-before-the-pilot-b": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why defining success criteria before the pilot begins matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: success criteria written before a pilot begins are the commitment that makes the pilot evidence-based."
      }
    ]
  },
  "bl-pb4-ch10-10-1-why-pilot-success-does-not-guarantee-enterp": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why pilot success does not guarantee enterprise success appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb4-ch10-10-2-technical-scaling-infrastructure-integratio": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why technical scaling: infrastructure, integration, and performance at volume matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: technical scaling from pilot to enterprise requires three infrastructure changes that pilots rarely reveal: compute and."
      }
    ]
  },
  "bl-pb5-ch01-1-2-the-four-dimensions-of-ai-literacy": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four dimensions of ai literacy matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai literacy is not a single competency - it is a profile across four dimensions, and."
      }
    ]
  },
  "bl-pb5-ch01-1-3-skills-gap-assessment-methods-and-tools": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why skills gap assessment methods and tools matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a skills gap assessment uses four complementary methods: self-report surveys for scale and speed, role-capability analyses."
      }
    ]
  },
  "bl-pb5-ch02-2-1-the-upskill-vs-hire-decision-framework": {
    "type": "comparison",
    "cards": [
      {
        "label": "The upskill",
        "title": "The upskill profile",
        "desc": "Where the upskill creates stronger fit."
      },
      {
        "label": "hire decision framework",
        "title": "hire decision framework profile",
        "desc": "Where hire decision framework creates stronger fit.",
        "accent": true
      }
    ]
  },
  "bl-pb5-ch02-2-2-when-upskilling-is-the-right-answer": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for when upskilling is the right answer."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb5-ch03-3-1-the-new-ai-roles-every-function-leader-needs": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the new ai roles every function leader needs to know matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai is not just changing what functions do - it is changing what roles functions need."
      }
    ]
  },
  "bl-pb5-ch03-3-2-prompt-engineers-and-ai-workflow-designers": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why prompt engineers and ai workflow designers matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: prompt engineers and ai workflow designers are the roles most directly responsible for the quality of."
      }
    ]
  },
  "bl-pb5-ch04-4-1-what-ai-engineers-actually-do": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what ai engineers actually do."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb5-ch04-4-2-the-language-barrier-translating-business-ne": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the language barrier: translating business need to technical spec matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai engineers cannot build what they cannot specify."
      }
    ]
  },
  "bl-pb5-ch05-5-1-what-a-centre-of-excellence-actually-does": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what a centre of excellence actually does."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb5-ch05-5-2-centralise-vs-federate-coe-governance-models": {
    "type": "comparison",
    "cards": [
      {
        "label": "Centralise",
        "title": "Centralise profile",
        "desc": "Where centralise creates stronger fit."
      },
      {
        "label": "federate: CoE governance models",
        "title": "federate: CoE governance models profile",
        "desc": "Where federate: coe governance models creates stronger fit.",
        "accent": true
      }
    ]
  },
  "bl-pb5-ch06-6-1-why-ai-change-management-is-different": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai change management is different appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb5-ch06-6-2-the-adkar-model-applied-to-ai-adoption": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the adkar model applied to ai adoption matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: adkar - awareness, desire, knowledge, ability, reinforcement - is the most validated individual change model for."
      }
    ]
  },
  "bl-pb5-ch07-7-1-why-generic-ai-training-programmes-fail": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why generic ai training programmes fail appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb5-ch07-7-2-three-tiers-of-ai-literacy": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why three tiers of ai literacy matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai literacy exists at three tiers with distinct learning objectives, programme designs, and time investments."
      }
    ]
  },
  "bl-pb5-ch08-8-1-why-most-ai-adoption-metrics-are-vanity-metr": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why most ai adoption metrics are vanity metrics appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb5-ch08-8-2-four-categories-of-meaningful-ai-adoption-me": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why four categories of meaningful ai adoption metrics matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: meaningful ai adoption metrics fall into four categories that together describe the full adoption journey: usage."
      }
    ]
  },
  "bl-pb5-ch09-9-1-the-sources-of-ai-resistance-in-organisation": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the sources of ai resistance in organisations matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai resistance originates from three sources that require different responses: fear (job security, status loss, uncertainty),."
      }
    ]
  },
  "bl-pb5-ch09-9-2-fear-based-vs-capability-based-resistance": {
    "type": "comparison",
    "cards": [
      {
        "label": "Fear-based",
        "title": "Fear-based profile",
        "desc": "Where fear-based creates stronger fit."
      },
      {
        "label": "capability-based resistance",
        "title": "capability-based resistance profile",
        "desc": "Where capability-based resistance creates stronger fit.",
        "accent": true
      }
    ]
  },
  "bl-pb5-ch10-10-1-what-an-ai-champion-network-is-and-why-it-w": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what an ai champion network is and why it works."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb5-ch10-10-2-identifying-and-recruiting-ai-champions": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why identifying and recruiting ai champions matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: champion selection is the most consequential design decision in a champion network - more important than."
      }
    ]
  },
  "bl-pb6-ch01-1-2-the-four-tier-risk-classification": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four-tier risk classification matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the eu ai act classifies ai systems into four tiers with fundamentally different compliance obligations."
      }
    ]
  },
  "bl-pb6-ch01-1-3-high-risk-ai-what-compliance-actually-requir": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind high-risk ai - what compliance actually requires.",
        "items": "risk management system"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize high-risk ai - what compliance actually requires through clear responsibilities.",
        "items": "data governance"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch02-2-1-gdpr-and-ai-why-they-are-inseparable": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind gdpr and ai - why they are inseparable.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize gdpr and ai - why they are inseparable through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch02-2-2-lawful-basis-for-ai-processing": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why lawful basis for ai processing matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: every ai processing activity on personal data requires a lawful basis."
      }
    ]
  },
  "bl-pb6-ch03-3-1-what-ai-bias-is-and-what-it-is-not": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what ai bias is - and what it is not."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb6-ch03-3-2-sources-of-bias-in-ai-systems": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why sources of bias in ai systems matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: bias enters ai systems at multiple stages: biased training data, biased feature selection, biased labelling, biased."
      }
    ]
  },
  "bl-pb6-ch04-4-1-what-explainability-means-for-business-leade": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind what explainability means for business leaders.",
        "items": "Explainability in AI means being able to communicate"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize what explainability means for business leaders through clear responsibilities.",
        "items": "in terms meaningful to a non-technical person"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch04-4-2-the-legal-explainability-requirements": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the legal explainability requirements matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: three distinct legal frameworks create explainability obligations for business leaders: gdpr article 22 (right to explanation."
      }
    ]
  },
  "bl-pb6-ch05-5-1-why-most-ai-governance-fails": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why most ai governance fails appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb6-ch05-5-2-component-one-the-ai-inventory": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind component one: the ai inventory.",
        "items": "you cannot classify risk"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize component one: the ai inventory through clear responsibilities.",
        "items": "assign accountability"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "or apply governance"
      }
    ]
  },
  "bl-pb6-ch06-6-1-what-makes-ai-risk-different": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind what makes ai risk different.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize what makes ai risk different through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch06-6-2-the-six-ai-risk-categories": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the six ai risk categories matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a complete ai risk register must cover six categories: technical and model risk, data risk, bias."
      }
    ]
  },
  "bl-pb6-ch07-7-1-why-third-party-ai-risk-is-different": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why third-party ai risk is different.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why third-party ai risk is different through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch07-7-2-third-party-ai-due-diligence": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why third-party ai due diligence matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: third-party ai due diligence requires seven questions beyond standard software procurement assessment: training data provenance, bias."
      }
    ]
  },
  "bl-pb6-ch08-8-1-why-boards-need-ai-risk-oversight": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why boards need ai risk oversight.",
        "items": "expected by institutional investors"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why boards need ai risk oversight through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch08-8-2-what-boards-need-to-understand-about-ai-risk": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what boards need to understand about ai risk."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb6-ch09-9-1-how-ai-incidents-differ-from-standard-it-inc": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind how ai incidents differ from standard it incidents.",
        "items": "they are often silent"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize how ai incidents differ from standard it incidents through clear responsibilities.",
        "items": "they are often slow performance degrades"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch09-9-2-ai-incident-classification": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai incident classification matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai incident classification determines everything: how quickly you respond, who you escalate to, whether you halt."
      }
    ]
  },
  "bl-pb6-ch10-10-1-why-most-ethical-ai-policies-fail": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why most ethical ai policies fail.",
        "items": "they have no enforcement mechanism"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why most ethical ai policies fail through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "bl-pb6-ch10-10-2-the-three-tier-policy-architecture": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the three-tier policy architecture matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ethical ai policy requires three tiers: principles define what you stand for, standards translate principles into."
      }
    ]
  },
  "bl-pb7-ch01-1-2-ai-powered-forecasting-and-fp-a": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai-powered forecasting and fp&a matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ml forecasting is the single highest-value ai application for most finance functions."
      }
    ]
  },
  "bl-pb7-ch01-1-3-ai-in-audit-and-internal-controls": {
    "type": "comparison",
    "cards": [
      {
        "label": "AI in Audit and Internal Controls - Baseline",
        "title": "Current-state view",
        "desc": "How performance looks before intervention."
      },
      {
        "label": "AI in Audit and Internal Controls - Target",
        "title": "Desired-state view",
        "desc": "What stronger execution should achieve.",
        "accent": true
      },
      {
        "label": "AI in Audit and Internal Controls - Trade-offs",
        "title": "Decision view",
        "desc": "Cost, speed, quality, and risk implications."
      }
    ]
  },
  "bl-pb7-ch02-2-1-the-hr-ai-landscape-opportunity-and-obligati": {
    "type": "comparison",
    "cards": [
      {
        "label": "The HR AI Landscape - Opportunity and Obligation - Baseline",
        "title": "Current-state view",
        "desc": "How performance looks before intervention."
      },
      {
        "label": "The HR AI Landscape - Opportunity and Obligation - Target",
        "title": "Desired-state view",
        "desc": "What stronger execution should achieve.",
        "accent": true
      },
      {
        "label": "The HR AI Landscape - Opportunity and Obligation - Trade-offs",
        "title": "Decision view",
        "desc": "Cost, speed, quality, and risk implications."
      }
    ]
  },
  "bl-pb7-ch02-2-2-ai-in-talent-acquisition": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai in talent acquisition matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai in talent acquisition delivers measurable efficiency - 50-70% reduction in screening time in high-volume contexts."
      }
    ]
  },
  "bl-pb7-ch03-3-1-the-marketing-ai-landscape-in-2026": {
    "type": "comparison",
    "cards": [
      {
        "label": "audience intelligence",
        "title": "audience intelligence lens",
        "desc": "Evaluate audience intelligence as part of the marketing ai landscape in 2026.",
        "accent": true
      },
      {
        "label": "campaign optimisation",
        "title": "campaign optimisation lens",
        "desc": "Evaluate campaign optimisation as part of the marketing ai landscape in 2026."
      },
      {
        "label": "customer journey",
        "title": "customer journey lens",
        "desc": "Evaluate customer journey as part of the marketing ai landscape in 2026."
      }
    ]
  },
  "bl-pb7-ch03-3-2-ai-in-content-creation-and-brand": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai in content creation and brand matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai content tools can increase marketing content output by 3-10x while reducing production costs by 50-70%."
      }
    ]
  },
  "bl-pb7-ch04-4-1-the-sales-ai-landscape-what-drives-revenue": {
    "type": "comparison",
    "cards": [
      {
        "label": "pipeline quality",
        "title": "pipeline quality lens",
        "desc": "Evaluate pipeline quality as part of the sales ai landscape - what drives revenue.",
        "accent": true
      },
      {
        "label": "forecast accuracy",
        "title": "forecast accuracy lens",
        "desc": "Evaluate forecast accuracy as part of the sales ai landscape - what drives revenue."
      },
      {
        "label": "rep productivity better time",
        "title": "rep productivity better time lens",
        "desc": "Evaluate rep productivity better time as part of the sales ai landscape - what drives revenue."
      }
    ]
  },
  "bl-pb7-ch04-4-2-ai-in-lead-generation-and-prospecting": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai in lead generation and prospecting matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai prospecting tools that identify buyers showing active purchase intent signals - rather than matching an."
      }
    ]
  },
  "bl-pb7-ch05-5-1-the-operations-ai-landscape": {
    "type": "comparison",
    "cards": [
      {
        "label": "The Operations AI Landscape - Baseline",
        "title": "Current-state view",
        "desc": "How performance looks before intervention."
      },
      {
        "label": "The Operations AI Landscape - Target",
        "title": "Desired-state view",
        "desc": "What stronger execution should achieve.",
        "accent": true
      },
      {
        "label": "The Operations AI Landscape - Trade-offs",
        "title": "Decision view",
        "desc": "Cost, speed, quality, and risk implications."
      }
    ]
  },
  "bl-pb7-ch05-5-2-ai-in-demand-forecasting-and-inventory": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai in demand forecasting and inventory matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai demand forecasting reduces forecast error by 20-50% compared to manual or statistical methods in most."
      }
    ]
  },
  "bl-pb7-ch06-6-1-the-customer-service-ai-landscape": {
    "type": "comparison",
    "cards": [
      {
        "label": "The Customer Service AI Landscape - Baseline",
        "title": "Current-state view",
        "desc": "How performance looks before intervention."
      },
      {
        "label": "The Customer Service AI Landscape - Target",
        "title": "Desired-state view",
        "desc": "What stronger execution should achieve.",
        "accent": true
      },
      {
        "label": "The Customer Service AI Landscape - Trade-offs",
        "title": "Decision view",
        "desc": "Cost, speed, quality, and risk implications."
      }
    ]
  },
  "bl-pb7-ch06-6-2-conversational-ai-and-chatbots": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why conversational ai and chatbots matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: conversational ai that is honest about its capabilities, maintains appropriate scope, and escalates gracefully builds customer."
      }
    ]
  },
  "bl-pb7-ch07-7-1-the-legal-and-compliance-ai-landscape": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind the legal and compliance ai landscape.",
        "items": "Legal AI delivers efficiency in high-volume"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize the legal and compliance ai landscape through clear responsibilities.",
        "items": "knowledge-intensive tasks - contract review"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "regulatory research"
      }
    ]
  },
  "bl-pb7-ch07-7-2-ai-in-contract-management-and-review": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai in contract management and review matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai contract review - extracting, categorising, and flagging key clauses across large contract portfolios - is."
      }
    ]
  },
  "bl-pb7-ch08-8-1-the-product-and-engineering-ai-landscape": {
    "type": "comparison",
    "cards": [
      {
        "label": "AI as a development tool",
        "title": "AI as a development tool lens",
        "desc": "Evaluate ai as a development tool as part of the product and engineering ai landscape.",
        "accent": true
      },
      {
        "label": "AI as a product",
        "title": "AI as a product lens",
        "desc": "Evaluate ai as a product as part of the product and engineering ai landscape."
      }
    ]
  },
  "bl-pb7-ch08-8-2-ai-assisted-engineering-productivity-without": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai-assisted engineering - productivity without technical debt matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai code generation delivers real productivity gains - but requires governance to prevent it from accelerating."
      }
    ]
  },
  "bl-pb7-ch09-9-1-why-ai-creates-cross-functional-dependencies": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai creates cross-functional dependencies appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb7-ch09-9-2-shared-data-infrastructure-and-the-customer-": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why shared data infrastructure and the customer data foundation matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: customer data is the foundation of ai deployments across marketing, sales, customer service, finance, and product."
      }
    ]
  },
  "bl-pb7-ch10-10-1-why-ai-transformation-measurement-fails": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai transformation measurement fails appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb7-ch10-10-2-measuring-ai-roi-by-function": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why measuring ai roi by function matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai roi metrics are function-specific - the right metric for finance ai is not the right."
      }
    ]
  },
  "bl-pb8-ch01-1-2-why-leadership-misalignment-kills-ai-project": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why leadership misalignment kills ai projects appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb8-ch01-1-3-the-technology-first-trap": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the technology-first trap matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: technology-first ai deployment gives people a powerful tool in a workflow that was not designed to."
      }
    ]
  },
  "bl-pb8-ch02-2-1-why-ai-change-is-different-from-past-technol": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai change is different from past technology change appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb8-ch02-2-2-the-three-horizon-ai-change-model": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the three-horizon ai change model matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai transformation cannot be managed as a single change event or a series of unconnected deployments."
      }
    ]
  },
  "bl-pb8-ch03-3-1-the-cost-of-ai-overcommunication-and-underco": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the cost of ai overcommunication and undercommunication matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai overcommunication - overstating capability, projecting certainty about outcomes that are not yet proven, claiming competitive."
      }
    ]
  },
  "bl-pb8-ch03-3-2-structuring-the-initial-ai-announcement": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why structuring the initial ai announcement matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the initial ai announcement sets the tone for the entire programme's communication relationship with the organisation."
      }
    ]
  },
  "bl-pb8-ch04-4-1-understanding-where-resistance-actually-come": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why understanding where resistance actually comes from matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai resistance has five distinct root sources: job security fear, professional identity threat, competence anxiety, trust."
      }
    ]
  },
  "bl-pb8-ch04-4-2-the-fear-spectrum-in-ai-transformation": {
    "type": "comparison",
    "cards": [
      {
        "label": "The fear spectrum in AI transformation - Baseline",
        "title": "Current-state view",
        "desc": "How performance looks before intervention."
      },
      {
        "label": "The fear spectrum in AI transformation - Target",
        "title": "Desired-state view",
        "desc": "What stronger execution should achieve.",
        "accent": true
      },
      {
        "label": "The fear spectrum in AI transformation - Trade-offs",
        "title": "Decision view",
        "desc": "Cost, speed, quality, and risk implications."
      }
    ]
  },
  "bl-pb8-ch05-5-1-the-augmentation-versus-replacement-spectrum": {
    "type": "comparison",
    "cards": [
      {
        "label": "The augmentation",
        "title": "The augmentation profile",
        "desc": "Where the augmentation creates stronger fit."
      },
      {
        "label": "replacement spectrum",
        "title": "replacement spectrum profile",
        "desc": "Where replacement spectrum creates stronger fit.",
        "accent": true
      }
    ]
  },
  "bl-pb8-ch05-5-2-role-anatomy-what-ai-can-do-versus-what-huma": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why role anatomy: what ai can do versus what humans must do matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: human advantage in ai-augmented roles does not lie in doing tasks faster or more accurately than."
      }
    ]
  },
  "bl-pb8-ch06-6-1-the-strategic-workforce-planning-imperative": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the strategic workforce planning imperative matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai workforce planning that begins after ai deployment has already changed the workforce need is remediation,."
      }
    ]
  },
  "bl-pb8-ch06-6-2-skills-inventory-for-an-ai-augmented-organis": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why skills inventory for an ai-augmented organisation matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a skills inventory is not a training needs assessment - it is a strategic view of."
      }
    ]
  },
  "bl-pb8-ch07-7-1-why-psychological-safety-is-the-prerequisite": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why psychological safety is the prerequisite for ai adoption appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb8-ch07-7-2-how-ai-erodes-psychological-safety-and-how-t": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how ai erodes psychological safety - and how to prevent it."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "bl-pb8-ch08-8-1-why-leader-behaviour-is-the-strongest-adopti": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why leader behaviour is the strongest adoption signal appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb8-ch08-8-2-visible-ai-use-by-leaders": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why visible ai use by leaders matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: visible ai use is not about showing off ai capability - it is about normalising ai."
      }
    ]
  },
  "bl-pb8-ch09-9-1-why-milestone-frameworks-prevent-transformat": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why milestone frameworks prevent transformation drift appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "bl-pb8-ch09-9-2-the-five-stages-of-enterprise-ai-transformat": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the five stages of enterprise ai transformation matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: enterprise ai transformation follows five stages: stage 1 (readiness and foundation), stage 2 (first pilots and."
      }
    ]
  },
  "bl-pb8-ch10-10-1-the-momentum-trap-why-ai-transformations-st": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the momentum trap: why ai transformations stall after year one matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: year one ai momentum is driven by novelty, visible quick wins, and concentrated leadership attention."
      }
    ]
  },
  "bl-pb8-ch10-10-2-building-institutional-ai-memory": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why building institutional ai memory matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: institutional ai memory is the organisation's accumulated knowledge about what works, what does not work, and."
      }
    ]
  },
  "ch2-epochs-nested": {
    "type": "nested",
    "layers": [
      {
        "title": "Batch updates (inner loop)",
        "desc": "Weights are updated after each mini-batch using gradient signals.",
        "items": "Forward pass, loss, backward pass, optimizer step"
      },
      {
        "title": "Epoch cycle (middle loop)",
        "desc": "One epoch processes the full training set through many batches.",
        "items": "Shuffle data, run batches, aggregate training metrics"
      },
      {
        "title": "Training program (outer loop)",
        "desc": "Multiple epochs continue until validation no longer improves.",
        "items": "Early stopping, checkpointing, generalization checks"
      }
    ]
  },
  "founder-api-vs-own": {
    "type": "comparison",
    "rows": [
      {
        "label": "API dependency",
        "steps": [
          "Fast launch",
          "Low setup burden",
          "Vendor-priced inference",
          "Lower control"
        ]
      },
      {
        "label": "Model ownership",
        "steps": [
          "Higher setup burden",
          "Dedicated infra",
          "Lower marginal cost at scale",
          "Higher control"
        ]
      }
    ]
  },
  "founder-inference-optimisation": {
    "type": "flow",
    "steps": [
      {
        "title": "Route requests",
        "desc": "Match workload to cheapest model that clears quality."
      },
      {
        "title": "Reduce context",
        "desc": "Pass only relevant evidence into prompts."
      },
      {
        "title": "Cache repeated work",
        "desc": "Avoid paying twice for identical answers."
      },
      {
        "title": "Batch non-urgent jobs",
        "desc": "Shift throughput work to efficient windows."
      },
      {
        "title": "Distill and tune",
        "desc": "Keep quality while lowering serving cost."
      }
    ]
  },
  "founder-ch04-4-1-why-data-is-the-only-durable-moat-in-ai": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why data is the only durable moat in ai.",
        "items": "In a world of commoditized foundation models"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why data is the only durable moat in ai through clear responsibilities.",
        "items": "cheap API access"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "proprietary data - user behaviour"
      }
    ]
  },
  "founder-ch05-5-1-ai-outputs-are-probability-distributions-not": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai outputs are probability distributions, not facts matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai models never truly know an answer - they calculate the probability that an output is."
      }
    ]
  },
  "founder-ch06-6-2-precision-vs-recall-a-business-decision-disg": {
    "type": "comparison",
    "cards": [
      {
        "label": "Precision",
        "title": "Precision profile",
        "desc": "Where precision creates stronger fit."
      },
      {
        "label": "recall - a business decision disguised as a technical one",
        "title": "recall - a business decision disguised as a technical one profile",
        "desc": "Where recall - a business decision disguised as a technical one creates stronger fit.",
        "accent": true
      }
    ]
  },
  "founder-ch07-7-1-what-is-model-bias": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what is model bias."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-ch07-7-3-types-of-bias-to-know": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why types of bias to know matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: bias enters through four distinct vectors: representation (missing groups), measurement (flawed labels), aggregation (one model for."
      }
    ]
  },
  "founder-ch08-8-3-inference-hosting-and-tooling": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why inference, hosting, and tooling matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: between foundation models and applications sits a growing tooling layer: vector databases, retrieval pipelines, agent orchestration,."
      }
    ]
  },
  "ch1-feedback-loop": {
    "type": "flow",
    "steps": [
      {
        "title": "User action",
        "desc": "Product usage generates signal."
      },
      {
        "title": "Capture signal",
        "desc": "Clicks, edits, and outcomes are logged."
      },
      {
        "title": "Label and train",
        "desc": "Signals become structured training data."
      },
      {
        "title": "Model improves",
        "desc": "Quality gains ship into production."
      },
      {
        "title": "Better product",
        "desc": "Retention and usage compound over time."
      }
    ]
  },
  "founder-ai-native-spectrum": {
    "type": "nested",
    "layers": [
      {
        "title": "AI-washed",
        "desc": "AI language exceeds true product dependency.",
        "items": "Surface features, limited differentiation"
      },
      {
        "title": "AI-powered",
        "desc": "AI improves value but is not existential.",
        "items": "Workflow acceleration, moderate moat"
      },
      {
        "title": "AI-native",
        "desc": "Core value collapses if model capability is removed.",
        "items": "Compounding data loop, durable advantage"
      }
    ]
  },
  "ch3-ai-stack": {
    "type": "flow",
    "steps": [
      {
        "title": "Foundation model",
        "desc": "Choose base intelligence layer."
      },
      {
        "title": "Knowledge layer",
        "desc": "Add retrieval and vector context."
      },
      {
        "title": "Orchestration",
        "desc": "Coordinate prompts, tools, and policies."
      },
      {
        "title": "Serving layer",
        "desc": "Deliver low-latency, reliable inference."
      },
      {
        "title": "Observability",
        "desc": "Track quality, cost, and drift."
      }
    ]
  },
  "ch4-feedback-cycle": {
    "type": "flow",
    "steps": [
      {
        "title": "Generate output",
        "desc": "Model responds inside the workflow."
      },
      {
        "title": "Collect reaction",
        "desc": "Users accept, edit, or reject responses."
      },
      {
        "title": "Convert to labels",
        "desc": "Reactions become training and eval signal."
      },
      {
        "title": "Ship improvements",
        "desc": "Refinements return better output quality."
      }
    ]
  },
  "founder-pb2-ch05-5-2-experimentation-as-a-core-operating-principl": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why experimentation as a core operating principle matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai products require hypothesis-driven experiments: model a vs b, prompt variants, retrieval configs - each with."
      }
    ]
  },
  "founder-pb3-ch01-1-1-the-difference-between-an-ai-feature-list-an": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind the difference between an ai feature list and an ai strategy.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize the difference between an ai feature list and an ai strategy through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb3-ch01-1-3-why-most-startup-ai-strategies-are-just-prod": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why most startup ai strategies are just product roadmaps appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb3-ch02-2-1-what-is-a-wedge-in-an-ai-context": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind what is a wedge in an ai context.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize what is a wedge in an ai context through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb3-ch02-2-2-how-to-identify-your-wedge": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how to identify your wedge."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-pb3-ch03-3-2-the-five-real-moats-in-ai-businesses": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind the five real moats in ai businesses.",
        "items": "data others cannot get"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize the five real moats in ai businesses through clear responsibilities.",
        "items": "distribution others cannot buy cheaply"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "switching costs others"
      }
    ]
  },
  "founder-pb3-ch03-3-3-data-moats-the-strongest-and-the-slowest": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind data moats - the strongest and the slowest.",
        "items": "Data moats require volume"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize data moats - the strongest and the slowest through clear responsibilities.",
        "items": "label quality"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "slow moats reward patience"
      }
    ]
  },
  "founder-pb3-ch04-4-1-the-ai-value-chain-where-the-money-flows-and": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind the ai value chain - where the money flows and where it doesn't.",
        "items": "Foundation models capture platform economics"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize the ai value chain - where the money flows and where it doesn't through clear responsibilities.",
        "items": "R D scale Infrastructure captures serving"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "observability rents Applications capture"
      }
    ]
  },
  "founder-pb3-ch04-4-2-why-the-application-layer-is-both-the-opport": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why the application layer is both the opportunity and the danger zone appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb3-ch05-5-1-why-founders-need-to-attack-their-own-strate": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind why founders need to attack their own strategy.",
        "items": "Competitors will argue your wedge is thin"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize why founders need to attack their own strategy through clear responsibilities.",
        "items": "your data moat is imaginary"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "in every investor meeting you"
      }
    ]
  },
  "founder-pb3-ch05-5-2-the-three-killer-questions-for-any-ai-strate": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the three killer questions for any ai strategy matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: every ai strategy must survive three questions: commoditised capability, missing data moat, incumbent/native feature."
      }
    ]
  },
  "founder-pb4-ch01-1-2-what-vcs-look-for-that-most-founders-don-t-t": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what vcs look for that most founders don't talk about."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-pb4-ch01-1-3-the-questions-every-serious-ai-investor-will": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the questions every serious ai investor will ask matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: serious ai investors skip technology tourism."
      }
    ]
  },
  "founder-pb4-ch02-2-1-what-the-ai-premium-actually-is": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what the ai premium actually is."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-funding-valuation": {
    "type": "comparison",
    "cards": [
      {
        "label": "Premium signals",
        "title": "Compounding economics",
        "desc": "Evidence of defensibility, quality gains, and margin improvement.",
        "accent": true
      },
      {
        "label": "Discount signals",
        "title": "Commodity exposure",
        "desc": "Weak moat, high dependency, and fragile cost structure."
      }
    ]
  },
  "founder-pb4-ch03-3-1-why-standard-saas-metrics-are-insufficient-f": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why standard saas metrics are insufficient for ai companies appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb4-ch03-3-2-model-improvement-rate": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why model improvement rate matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: model improvement rate measures whether your product intelligence compounds over time - via held-out eval scores,."
      }
    ]
  },
  "founder-pb4-ch04-4-1-why-ai-founders-overpromise-and-the-long-ter": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai founders overpromise - and the long-term cost appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb4-ch04-4-2-the-components-of-a-credible-ai-narrative": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the components of a credible ai narrative matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: a credible ai narrative has five components: the problem worth solving, the proprietary data advantage, the."
      }
    ]
  },
  "founder-pb4-ch05-5-1-technical-due-diligence-for-ai-companies-wha": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why technical due diligence for ai companies - what investors hire firms to find matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: technical diligence examines architecture reality vs pitch claims: model stack, eval rigour, loop implementation, infrastructure costs."
      }
    ]
  },
  "founder-pb4-ch05-5-2-data-due-diligence-the-questions-about-your-": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why data due diligence - the questions about your data you must be able to answer matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: data diligence asks: provenance, ownership, consent, exclusivity, quality, labelling methodology, and deletion rights."
      }
    ]
  },
  "founder-ai-roles-map": {
    "type": "comparison",
    "cards": [
      {
        "label": "ML Engineer",
        "title": "Model lifecycle",
        "desc": "Owns training, serving, and production reliability."
      },
      {
        "label": "AI Engineer",
        "title": "Product intelligence",
        "desc": "Builds prompts, retrieval, and agent workflows.",
        "accent": true
      },
      {
        "label": "Data Scientist",
        "title": "Measurement and decisions",
        "desc": "Runs experiments, analysis, and performance diagnosis."
      }
    ]
  },
  "founder-pb5-ch01-1-6-ai-research-scientist-only-for-late-stage-co": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ai research scientist - only for late-stage companies matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: research scientists push the frontier: new architectures, novel training methods, publishable results."
      }
    ]
  },
  "founder-pb5-ch02-2-1-the-ai-talent-market-in-2025": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the ai talent market in 2025 matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: top ai talent competes with openai, google, anthropic, and well-funded startups offering $300k-$500k+ total comp."
      }
    ]
  },
  "founder-pb5-ch02-2-2-how-to-evaluate-ai-candidates-as-a-non-techn": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for how to evaluate ai candidates as a non-technical founder."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-pb5-ch03-3-1-when-to-make-your-first-ai-hire": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for when to make your first ai hire."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-pb5-ch03-3-2-generalist-ai-engineer-vs-specialist": {
    "type": "comparison",
    "cards": [
      {
        "label": "Generalist AI engineer",
        "title": "Generalist AI engineer profile",
        "desc": "Where generalist ai engineer creates stronger fit."
      },
      {
        "label": "specialist",
        "title": "specialist profile",
        "desc": "Where specialist creates stronger fit.",
        "accent": true
      }
    ]
  },
  "founder-org-design-stages": {
    "type": "flow",
    "steps": [
      {
        "title": "Founder-led phase",
        "desc": "Small team validates core AI behavior."
      },
      {
        "title": "Generalist build phase",
        "desc": "One team ships end-to-end AI product loops."
      },
      {
        "title": "Specialization phase",
        "desc": "Platform, product, and reliability roles separate."
      },
      {
        "title": "Scaled operating model",
        "desc": "Governance and shared standards support velocity."
      }
    ]
  },
  "founder-pb5-ch05-5-1-why-ai-talent-leaves-startups": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why ai talent leaves startups appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb5-ch05-5-2-technical-challenge-as-retention": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why technical challenge as retention matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: assign problems that stretch: new architectures, proprietary data challenges, scale milestones."
      }
    ]
  },
  "founder-pb6-ch02-2-1-what-api-dependency-actually-means-for-your-": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind what api dependency actually means for your business.",
        "items": "model behaviour"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize what api dependency actually means for your business through clear responsibilities.",
        "items": "terms of use"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb6-ch02-2-2-the-four-vendor-risk-scenarios": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four vendor risk scenarios matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: plan explicitly for four scenarios: vendor raises price, vendor deprecates your model, vendor changes terms (data."
      }
    ]
  },
  "founder-pb6-ch03-3-1-the-ai-vendor-landscape-a-founder-s-map": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the ai vendor landscape - a founder's map matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the ai vendor landscape has four layers: foundation model apis (openai, anthropic, google, mistral), infrastructure (vector."
      }
    ]
  },
  "founder-pb6-ch03-3-2-what-a-rigorous-ai-vendor-evaluation-looks-l": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for what a rigorous ai vendor evaluation looks like."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "prompting-vs-finetuning-ladder": {
    "type": "flow",
    "steps": [
      {
        "title": "Strengthen prompting",
        "desc": "Improve instructions, structure, and examples."
      },
      {
        "title": "Add retrieval",
        "desc": "Ground output with trusted domain data."
      },
      {
        "title": "Upgrade base model",
        "desc": "Use higher-capability model when needed."
      },
      {
        "title": "Fine-tune",
        "desc": "Train on proprietary patterns after eval evidence."
      }
    ]
  },
  "pb4-rag-pipeline": {
    "type": "flow",
    "steps": [
      {
        "title": "Chunk source content",
        "desc": "Split documents into retrievable units with stable metadata."
      },
      {
        "title": "Create embeddings",
        "desc": "Convert chunks into vectors and index them for fast similarity search."
      },
      {
        "title": "Retrieve candidates",
        "desc": "Fetch top-k passages relevant to the user query."
      },
      {
        "title": "Rerank and filter",
        "desc": "Prioritize highest-evidence passages and remove weak context."
      },
      {
        "title": "Generate grounded answer",
        "desc": "Compose response using retrieved evidence and cite source-backed facts."
      }
    ]
  },
  "founder-pb6-ch05-5-1-data-ownership-clauses-the-non-negotiable": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why data ownership clauses - the non-negotiable matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: contract must state: you retain all ownership of inputs, outputs, and derived insights from your data."
      }
    ]
  },
  "founder-pb6-ch05-5-2-training-data-opt-out": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why training data opt-out matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: default for many apis: vendor may train on customer inputs unless enterprise no-training addendum signed."
      }
    ]
  },
  "founder-pb7-ch01-1-2-how-ai-risk-materialises-for-startups": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind how ai risk materialises for startups.",
        "items": "user discovers failure social amplification"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize how ai risk materialises for startups through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb7-ch01-1-4-the-risk-reward-calibration": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the risk-reward calibration matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the goal is not zero ai risk - that means zero ai product."
      }
    ]
  },
  "founder-pb7-ch02-2-1-what-the-eu-ai-act-is-and-when-it-applies": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind what the eu ai act is and when it applies.",
        "items": "purpose, scope"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize what the eu ai act is and when it applies through clear responsibilities.",
        "items": "process, ownership"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb7-ch02-2-2-the-four-risk-tiers": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four risk tiers matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: four tiers define your compliance burden: unacceptable (banned outright), high-risk (conformity assessment and ongoing obligations), limited."
      }
    ]
  },
  "founder-pb7-ch03-3-1-the-federal-ai-landscape-in-2025": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the federal ai landscape in 2025 matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: us federal ai policy combines executive orders mandating agency ai use standards, nist's voluntary ai risk."
      }
    ]
  },
  "founder-pb7-ch03-3-2-ftc-scrutiny-of-ai-companies": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why ftc scrutiny of ai companies matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: the ftc enforces against unfair and deceptive practices in ai - overclaiming capabilities, undisclosed ai use,."
      }
    ]
  },
  "founder-pb7-ch04-4-1-when-hallucination-becomes-legal-liability": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for when hallucination becomes legal liability."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-pb7-ch04-4-2-real-cases-what-has-happened-to-companies-al": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why real cases - what has happened to companies already matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai liability is not theoretical."
      }
    ]
  },
  "founder-pb7-ch05-5-2-the-minimum-viable-governance-stack-for-a-st": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind the minimum viable governance stack for a startup.",
        "items": "risk register with scored residual risk"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize the minimum viable governance stack for a startup through clear responsibilities.",
        "items": "pre-launch safety checklist with enforcement"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb7-ch05-5-3-red-teaming-your-own-ai-product": {
    "type": "nested",
    "layers": [
      {
        "title": "Concept layer",
        "desc": "Define the core concept behind red-teaming your own ai product.",
        "items": "deliberately probing your AI for harm"
      },
      {
        "title": "Execution layer",
        "desc": "Operationalize red-teaming your own ai product through clear responsibilities.",
        "items": "policy violations It is not standard QA -"
      },
      {
        "title": "Governance layer",
        "desc": "Sustain performance with monitoring and accountability.",
        "items": "metrics, controls"
      }
    ]
  },
  "founder-pb8-ch01-1-3-the-three-cost-levers-at-scale": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the three cost levers at scale matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: before you call your api vendor or raise prices, exhaust three levers: route requests to the."
      }
    ]
  },
  "founder-pb8-ch02-2-1-why-model-performance-degrades-at-scale": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why model performance degrades at scale appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb8-ch02-2-2-distribution-shift-the-silent-killer": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why distribution shift - the silent killer matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: distribution shift is the gradual or sudden divergence between training/eval data and production traffic."
      }
    ]
  },
  "founder-pb8-ch03-3-1-why-data-quality-degrades-as-you-scale": {
    "type": "flow",
    "steps": [
      {
        "title": "Situation",
        "desc": "Frame where why data quality degrades as you scale appears in your operating model."
      },
      {
        "title": "Failure pattern",
        "desc": "Identify the structural reasons this issue persists."
      },
      {
        "title": "Business impact",
        "desc": "Quantify impact on growth, cost, risk, and trust."
      },
      {
        "title": "Corrective actions",
        "desc": "Implement controls, process changes, and ownership."
      },
      {
        "title": "Operating cadence",
        "desc": "Review outcomes regularly and adjust strategy."
      }
    ]
  },
  "founder-pb8-ch03-3-2-training-data-contamination": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why training data contamination matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: training data contamination occurs when incorrect, adversarial, biased, or out-of-policy examples enter fine-tuning or retraining pipelines."
      }
    ]
  },
  "founder-pb8-ch04-4-1-the-ai-team-structure-that-works-at-10-peopl": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the ai team structure that works at 10 people and fails at 50 matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: at 10 people, a centralised ai team with direct founder access ships fast."
      }
    ]
  },
  "founder-pb8-ch04-4-2-when-to-move-from-a-centralised-ai-team-to-e": {
    "type": "flow",
    "steps": [
      {
        "title": "Define objective",
        "desc": "Set a clear business objective for when to move from a centralised ai team to embedded ai engineers."
      },
      {
        "title": "Map baseline",
        "desc": "Document current performance and constraints."
      },
      {
        "title": "Design method",
        "desc": "Choose the approach that fits your context."
      },
      {
        "title": "Pilot execution",
        "desc": "Run a controlled rollout with measurable gates."
      },
      {
        "title": "Scale with governance",
        "desc": "Expand what works and keep accountability explicit."
      }
    ]
  },
  "founder-pb8-ch05-5-1-the-four-unit-economics-inflection-points-in": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the four unit economics inflection points in ai product scaling matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: ai products hit four predictable inflection points: (1) api volume unlocks negotiation leverage, (2) usage crosses."
      }
    ]
  },
  "founder-pb8-ch05-5-2-the-model-negotiation-threshold": {
    "type": "flow",
    "steps": [
      {
        "title": "Strategic context",
        "desc": "Define why the model negotiation threshold matters now."
      },
      {
        "title": "Decision frame",
        "desc": "Align leaders on scope, assumptions, and trade-offs."
      },
      {
        "title": "Execution design",
        "desc": "Translate strategy into practical workflows."
      },
      {
        "title": "Measurement model",
        "desc": "Track value, quality, and operational risk."
      },
      {
        "title": "Iteration loop",
        "desc": "Refine continuously: api negotiation leverage typically begins at meaningful committed volume - often hundreds of millions of tokens."
      }
    ]
  },
  "bl-pb1-ch01-1-5-rules-based-vs-learned-systems": {
    type: "comparison",
    cards: [
      { label: "Rules-based", title: "Explicit if-then logic", desc: "Auditable, deterministic, scales with engineering headcount." },
      { label: "Learned systems", title: "Pattern inference from data", desc: "Adaptive, probabilistic, scales with labelled signal quality.", accent: true },
    ],
  },
  "bl-pb1-ch02-2-5-fine-tuning-making-a-general-model-specific": {
    type: "flow",
    steps: [
      { title: "Start from base model", desc: "Rent a strong general-purpose foundation model" },
      { title: "Curate domain data", desc: "Collect labelled examples for your target task" },
      { title: "Fine-tune weights", desc: "Continue training on domain-specific corpus" },
      { title: "Evaluate lift", desc: "Compare against prompt-only baseline on golden set" },
      { title: "Deploy with monitoring", desc: "Track drift and retrain when performance drops" },
    ],
  },
  "bl-pb1-ch08-8-2-foundation-model-providers": {
    type: "comparison",
    cards: [
      { label: "Capability tier", title: "Frontier models", desc: "Highest quality, highest cost, fastest capability churn." },
      { label: "Commercial terms", title: "Pricing & limits", desc: "Per-token fees, rate caps, and deprecation windows shape TCO.", accent: true },
      { label: "Strategic risk", title: "Dependency exposure", desc: "Policy changes, training rights, and competitive overlap with your product." },
    ],
  },
  "founder-ch01-1-5-rule-based-systems-vs-learned-systems": {
    type: "comparison",
    cards: [
      { label: "Rule-based", title: "Codified behaviour", desc: "If you can write if-statements, you do not need ML." },
      { label: "Learned", title: "Inferred behaviour", desc: "Patterns discovered from examples; improves with proprietary data.", accent: true },
    ],
  },
  "founder-ch02-2-2-parameters-and-weights": {
    type: "nested",
    layers: [
      { title: "Input layer", desc: "Raw features enter the network", items: "Tokens, pixels, tabular fields" },
      { title: "Hidden layers", desc: "Combinations of signals", items: "Millions to billions of weights" },
      { title: "Output layer", desc: "Final prediction or generation", items: "Class probabilities, next token, embedding" },
    ],
  },
  "founder-ch05-5-4-overconfident-models": {
    type: "comparison",
    cards: [
      { label: "Stated confidence", title: "How certain the model sounds", desc: "Softmax scores can peak even when answers are wrong." },
      { label: "Verified accuracy", title: "Ground-truth performance", desc: "Measured on held-out tests and production feedback.", accent: true },
    ],
  },
  "founder-ch06-6-5-evaluation-in-production-what-to-measure-aft": {
    type: "flow",
    steps: [
      { title: "Define business KPIs", desc: "Revenue, retention, support cost — not just model accuracy" },
      { title: "Instrument live traffic", desc: "Log inputs, outputs, overrides, and downstream outcomes" },
      { title: "Segment performance", desc: "Break metrics by cohort, channel, and edge cases" },
      { title: "Detect drift", desc: "Alert when distributions or error rates shift" },
      { title: "Iterate or roll back", desc: "Retrain, change prompts, or revert based on business impact" },
    ],
  },
  "founder-ch08-8-2-foundation-model-providers": {
    type: "comparison",
    cards: [
      { label: "Platform power", title: "Capability & roadmap", desc: "Model quality ceilings and release cadence set your product bounds." },
      { label: "Unit economics", title: "Token pricing", desc: "Inference cost is COGS — negotiate before scale.", accent: true },
      { label: "Portability", title: "Multi-vendor design", desc: "Abstraction layers reduce lock-in when terms change." },
    ],
  },
  "founder-pb5-ch04-4-2-the-ai-centre-of-excellence-model": {
    type: "nested",
    layers: [
      { title: "Central CoE", desc: "Standards, tooling, and governance", items: "Playbooks, eval frameworks, vendor reviews" },
      { title: "Embedded squads", desc: "Practitioners in product teams", items: "Use-case delivery, prompt libraries" },
      { title: "Executive sponsor", desc: "Budget and prioritisation", items: "Portfolio decisions, risk appetite" },
    ],
  },
  "founder-pb5-ch04-4-3-how-ai-teams-interface-with-product-teams": {
    type: "flow",
    steps: [
      { title: "Intake use case", desc: "Product defines problem, metric, and constraints" },
      { title: "Feasibility review", desc: "AI team assesses data, model fit, and cost" },
      { title: "Prototype", desc: "Ship eval-backed MVP with clear success criteria" },
      { title: "Handoff", desc: "Document prompts, monitoring, and ownership" },
      { title: "Operate together", desc: "Shared on-call for quality and drift incidents" },
    ],
  },
  "founder-pb8-ch01-1-5-caching-strategies-for-ai-products": {
    type: "comparison",
    cards: [
      { label: "Exact cache", title: "Identical prompt hits", desc: "Cheapest; works for FAQs and repeated queries." },
      { label: "Semantic cache", title: "Near-duplicate intent", desc: "Embedding similarity reduces cost for paraphrases.", accent: true },
      { label: "Precompute", title: "Batch offline", desc: "Generate once for stable content; serve from store." },
    ],
  },
};
