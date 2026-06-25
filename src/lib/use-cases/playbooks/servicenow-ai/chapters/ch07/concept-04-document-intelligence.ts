import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_DOCUMENT_INTELLIGENCE: GuideConcept = {
  number: 4,
  title: "Document Intelligence",
  subtitle:
    "Intelligent document processing in the Now Platform — extraction, classification, validation, and record mapping",
  sections: [
    buildGuideSection({
      id: "what-is-doc-intel",
      number: "4.1",
      title: "What Document Intelligence is",
      subtitle:
        "Intelligent document processing within the Now Platform",
      takeaway:
        "Document Intelligence extracts structured fields from unstructured documents (PDFs, scans, forms) and routes them into workflows with confidence thresholds and exception handling.",
      why: "Attachments are where automation dies. Document Intelligence turns “a PDF in an email” into a runnable workflow.",
      paragraphs: [
        [
          s("It’s the bridge from unstructured inputs to structured records: extract invoice fields, classify request types, and trigger downstream approvals and tasks."),
        ],
        [
          s("Document Intelligence pairs naturally with Flow: extract → validate → map to table → route → human exception queue."),
        ],
        [
          s("Success depends on template consistency and governance: define what you will auto-process vs route to humans."),
        ],
      ],
      workflowSteps: [
        "Pick one document type with stable layout (invoice).",
        "Define extraction fields and table mapping.",
        "Set confidence threshold and exception queue.",
      ],
      example: {
        title: "Invoice intake became straight-through",
        body: "Invoices used to require manual re-keying. With extraction + validation, most invoices were processed automatically; low-confidence cases went to a review queue.",
      },
    }),
    buildGuideSection({
      id: "supported-types",
      number: "4.2",
      title: "Supported document types",
      subtitle:
        "Formats, constraints, and accuracy expectations",
      takeaway:
        "Document processing works best on consistent formats. Accuracy varies by scan quality, layout variance, and field complexity — design thresholds and human review for safety.",
      why: "Overpromising accuracy kills adoption. Real systems are hybrid: straight-through + exceptions.",
      paragraphs: [
        [
          s("Common best-fit types: invoices, purchase orders, standardized HR forms, ID documents, and compliance checklists."),
        ],
        [
          s("Hard cases: handwritten text, highly variable contracts, low-quality scans. Use human-in-the-loop and narrow scope."),
        ],
        [
          s("Set expectations: measure field-level accuracy and define what counts as “good enough” per field."),
        ],
      ],
      workflowSteps: [
        "Collect 50 sample documents; grade quality variance.",
        "Choose fields that matter and define acceptable error tolerance.",
        "Define which fields require human verification always (amounts).",
      ],
      example: {
        title: "Handwriting excluded from v1",
        body: "HR tried to process handwritten forms and failed. Narrowing v1 to typed forms achieved success and built momentum.",
      },
    }),
    buildGuideSection({
      id: "extraction-training",
      number: "4.3",
      title: "Extraction model training",
      subtitle:
        "Training an extraction model for your document type",
      takeaway:
        "Training is about labeling fields on representative samples and validating performance across variance. Template changes require retraining or model updates.",
      why: "Extraction models fail when trained on too-narrow samples and deployed on messy reality.",
      paragraphs: [
        [
          s("Use representative samples: include different vendors, versions, and scan qualities. Avoid training only on the cleanest samples."),
        ],
        [
          s("Labeling discipline: define field definitions precisely (net vs gross amount). Ambiguity creates inconsistent extraction."),
        ],
        [
          s("Evaluate per-field accuracy and confidence calibration. Some fields can be auto; others require review."),
        ],
      ],
      workflowSteps: [
        "Select 50–200 representative docs for training/validation.",
        "Label fields and train model; evaluate per-field accuracy.",
        "Set confidence thresholds by field criticality.",
      ],
      example: {
        title: "Amount field required review",
        body: "Model extracted amounts well most of the time, but finance required 100% correctness. Amount field was always routed to review; other fields were auto-mapped.",
      },
    }),
    buildGuideSection({
      id: "classification-models",
      number: "4.4",
      title: "Classification models",
      subtitle:
        "Auto-routing documents to the right process based on content",
      takeaway:
        "Classification routes documents into the correct workflow: invoice vs contract vs HR form; or subtypes that determine approvals and queues.",
      why: "Routing is the hidden ROI: the right process starts automatically, and humans handle only exceptions.",
      paragraphs: [
        [
          s("Use classification when you have multiple document types entering the same intake channel (email, portal upload)."),
        ],
        [
          s("Combine with decision tables: ML predicts type; decision table enforces policy and assigns queue."),
        ],
        [
          s("Measure: routing precision and the cost of misroutes. For high-risk types, require human validation."),
        ],
      ],
      workflowSteps: [
        "Define document classes and routing outcomes.",
        "Train classifier and set confidence gating.",
        "Route low confidence to intake triage queue.",
      ],
      example: {
        title: "Contracts separated from invoices",
        body: "Classifier correctly routed contracts to legal workflow and invoices to AP workflow, reducing manual sorting and avoiding policy violations.",
      },
    }),
    buildGuideSection({
      id: "validation-exceptions",
      number: "4.5",
      title: "Validation and exception handling",
      subtitle:
        "What happens when extraction confidence is below threshold",
      takeaway:
        "Exception handling is mandatory: low-confidence extractions go to review queues with highlighted fields, evidence, and correction workflows.",
      why: "Straight-through processing without exception handling is how document automation creates financial errors.",
      paragraphs: [
        [
          s("Design review UX: show extracted value, confidence, and the source snippet. Make approval and correction fast."),
        ],
        [
          s("Set thresholds by risk: low-risk fields auto-fill; high-risk fields require review. This balances speed and safety."),
        ],
        [
          s("Capture correction data to improve training sets and model versions over time."),
        ],
      ],
      workflowSteps: [
        "Define confidence thresholds per field.",
        "Create review task type and queue.",
        "Log corrections and retrain periodically.",
      ],
      example: {
        title: "Review queue prevented wrong payments",
        body: "Low-confidence amount extractions were reviewed. Errors were caught before payment, keeping finance trust while still automating most work.",
      },
    }),
    buildGuideSection({
      id: "record-mapping",
      number: "4.6",
      title: "Integration with ServiceNow records",
      subtitle:
        "Mapping extracted fields to table columns automatically",
      takeaway:
        "Extracted fields must map cleanly into table schemas with validation rules. Store original doc, extracted values, confidence, and reviewer actions for audit.",
      why: "Without clean mapping, you get messy data and broken downstream automation.",
      paragraphs: [
        [
          s("Map to staging tables first when risk is high. Promote to final tables only after validation and approvals."),
        ],
        [
          s("Add data validation: date formats, currency, vendor references. Don’t let extraction write invalid values into core tables."),
        ],
        [
          s("Audit: store extraction outputs and confidence so you can explain automation decisions later."),
        ],
      ],
      workflowSteps: [
        "Define staging table schema for extracted docs.",
        "Add validation rules and reference lookups.",
        "Write to final record on approval only.",
      ],
      example: {
        title: "Staging prevented data pollution",
        body: "Extraction wrote into a staging record. Review validated key fields, then promoted to AP system. Core tables stayed clean and audit-ready.",
      },
    }),
    buildGuideSection({
      id: "use-cases",
      number: "4.7",
      title: "Use cases by domain",
      subtitle:
        "Contracts, invoices, service requests, HR forms, compliance docs",
      takeaway:
        "Document Intelligence unlocks paper-heavy workflows across domains. Start with one stable document type and expand by ROI and risk tier.",
      why: "Trying to automate every document type at once leads to failure. Sequence matters.",
      paragraphs: [
        [
          s("Finance: invoices and POs. Legal: contract clause extraction (often with strong HITL). HR: onboarding forms and ID docs. IT: service request forms and vendor quotes."),
        ],
        [
          s("Compliance: evidence documents can be extracted into structured checklists and routed for review."),
        ],
        [
          s("Pick domain where speed matters and document format is stable. That’s your first win."),
        ],
      ],
      workflowSteps: [
        "Inventory top 5 document types by volume and pain.",
        "Score each by format stability and risk.",
        "Choose one to pilot with thresholds + exception queue.",
      ],
      example: {
        title: "AP invoice first, contracts later",
        body: "Invoices were stable and high-volume, so AP automation succeeded quickly. Contract automation was delayed until legal governance and validation UX were ready.",
      },
    }),
    buildGuideSection({
      id: "pdi-doc-pipeline",
      number: "4.8",
      title: "Configuration walkthrough",
      subtitle:
        "Build a document processing pipeline on PDI",
      takeaway:
        "PDI lab: intake document → classify type → extract fields → validate on confidence → map to staging record → route to approval queue → promote to final record.",
      why: "This lab demonstrates real document automation: not just extraction, but workflow with thresholds and audit.",
      paragraphs: [
        [s("Step 1: Choose a document type and create sample docs.")],
        [s("Step 2: Configure classification and extraction fields.")],
        [s("Step 3: Build Flow: ingest → extract → validate thresholds → create review task.")],
        [s("Step 4: Map approved values to staging table and then final record.")],
        [s("Step 5: Measure straight-through rate and exception rate.")],
      ],
      workflowSteps: [
        "Create 20 sample documents with variance.",
        "Run pipeline; measure field-level confidence distribution.",
        "Tune thresholds and review UX.",
      ],
      artifact: {
        id: "doc-pipeline-test-pack",
        title: "Document pipeline test pack",
        description: "Minimum tests before rollout.",
        content:
          `| # | Scenario | Expected |\n|---|----------|----------|\n| 1 | Clean doc | Straight-through |\n| 2 | Low-quality scan | Review queue |\n| 3 | Missing field | Exception |\n| 4 | Wrong type | Classifier routes to triage |\n| 5 | High-risk field | Always requires review |\n\nTrack: straight-through %, exception reasons, review SLA.`,
      },
    }),
  ],
};

