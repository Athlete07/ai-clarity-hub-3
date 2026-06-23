import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_OPERATIONS_WORKFLOWS: GuideConcept = {
  number: 2,
  title: "Operations & Process Workflows",
  subtitle:
    "The workflows that run business operations — document processing, reporting, and process automation blueprints",
  sections: [
    buildGuideSection({
      id: "document-processing-pipeline",
      number: "2.1",
      title: "The document processing pipeline",
      subtitle:
        "Folder monitoring → extraction → classification → routing → filing → notification",
      takeaway:
        "DOC_PIPELINE_v1: canonical inbox blueprint — event trigger, classify, extract, route, notify — idempotent move-to-processed.",
      why: "Highest-ROI ops pattern; this is the reference implementation of Ch 3 §2.2 with full Skill names.",
      paragraphs: [
        [
          s("Watch ~/Ops/inbox/ → CLASSIFY_DOC_v1 → branch by type → EXTRACT_* → ROUTE_v1 (Finance|Legal|Ops paths) → NOTIFY_v1. manifest per file; failed stay with ERROR sidecar."),
        ],
      ],
      workflowSteps: [
        "Deploy inbox + processed + failed folders.",
        "One extract Skill per MIME family.",
        "Debounce 90s; max 5 files/run.",
        "Weekly failed-folder triage.",
      ],
      artifact: {
        id: "blueprint-doc-pipeline",
        title: "DOC_PIPELINE blueprint",
        content: `WATCH → CLASSIFY → [EXTRACT_PDF|CSV|DOCX] → ROUTE → NOTIFY
Idempotency: move to processed/{run_id}/
QA: classification confidence < 0.7 → review`,
      },
    }),
    buildGuideSection({
      id: "contract-review-workflow",
      number: "2.2",
      title: "The contract review workflow",
      subtitle:
        "Contract upload → clause extraction → risk flagging → summary → review queue",
      takeaway:
        "CONTRACT_REVIEW_v1: extract parties, term, renewal, liability, indemnity → RISK_FLAG against playbook → summary for legal — never legal advice, always review queue.",
      why: "Legal workflows need explicit non-goals and restricted classification — blueprint documents both.",
      paragraphs: [
        [
          s("Trigger: PDF in ~/Legal/inbox/. EXTRACT_CONTRACT_v1 → CLAUSE_MAP_v1 → RISK_FLAG_v1 (known risky patterns) → LEGAL_SUMMARY_v1. Output: contract.json + summary.md + flags[]. Route ALL to legal review queue — T3."),
        ],
      ],
      workflowSteps: [
        "Legal owns RISK_PATTERN library.",
        "Disclaimer in every summary output.",
        "No auto-approve or auto-sign.",
        "Retention per legal policy.",
      ],
    }),
    buildGuideSection({
      id: "vendor-management-workflow",
      number: "2.3",
      title: "The vendor management workflow",
      subtitle:
        "Vendor inputs → evaluation synthesis → comparison matrix → recommendation → filed output",
      takeaway:
        "VENDOR_EVAL_v1: normalise vendor proposals to schema → COMPARE_MATRIX → RECOMMENDATION with criteria weights from Context — filed to ~/Procurement/evals/.",
      why: "Procurement needs comparable columns — blueprint enforces VENDOR_SCHEMA before synthesis.",
      paragraphs: [
        [
          s("Inputs: proposals in ~/Procurement/inbox/{rfp_id}/. NORMALISE_VENDOR_v1 per file → JOIN → MATRIX_v1 → NARRATIVE_REC_v1. Criteria weights in evaluation_rubric.json — human-set, not model-invented."),
        ],
      ],
      workflowSteps: [
        "Define VENDOR_SCHEMA + rubric.",
        "Golden test with 2 past RFPs.",
        "Review queue before procurement lead sign-off.",
        "Archive matrix + manifest per RFP.",
      ],
      artifact: {
        id: "vendor-schema-snippet",
        title: "VENDOR_SCHEMA fields",
        content: `vendor_name, pricing_model, term_months, sla, security_certs, implementation_weeks`,
      },
    }),
    buildGuideSection({
      id: "compliance-monitoring-workflow",
      number: "2.4",
      title: "The compliance monitoring workflow",
      subtitle:
        "Regulatory inputs → change detection → impact assessment → action items → assigned",
      takeaway:
        "COMPLIANCE_MONITOR_v1: diff regulatory feeds → IMPACT_ASSESS per policy map → ACTION_ITEMS with owner hints — assign is human.",
      why: "Compliance automation assists triage — does not certify compliance.",
      paragraphs: [
        [
          s("Daily: REG_FETCH (allowlist) → DIFF vs prior → MATCH_POLICY_MAP_v1 → IMPACT_v1 → ACTIONS.md. Each action: summary, suggested owner role, deadline suggestion, source citation. Route to compliance review queue."),
        ],
      ],
      workflowSteps: [
        "Maintain POLICY_MAP.json with compliance owner.",
        "Citations required on every change item.",
        "Monthly false-positive review.",
        "No auto-close of compliance tickets.",
      ],
    }),
    buildGuideSection({
      id: "project-status-workflow",
      number: "2.5",
      title: "The project status workflow",
      subtitle:
        "Input aggregation → status synthesis → formatted report → stakeholder distribution → archived",
      takeaway:
        "PROJECT_STATUS_v1: collect status md/csv from fixed project folders → SYNTH_STATUS → REPORT_PROJECT_v1 — weekly cron, archive by project/week.",
      why: "PMO reporting is repetitive and structured — ideal Cowork blueprint.",
      paragraphs: [
        [
          s("Monday 7am: scan ~/Projects/*/status_input/ → AGGREGATE → SYNTH_STATUS_v1 (RAG, blockers, milestones) → FORMAT_REPORT → staging → notify PM leads. VALIDATE: every active project has entry or explicit 'no input'."),
        ],
      ],
      workflowSteps: [
        "Define active project list in Context.",
        "PM submits inputs by Sunday 6pm.",
        "Validation flags missing projects.",
        "Archive to ~/Projects/reports/{iso_week}/.",
      ],
    }),
    buildGuideSection({
      id: "expense-financial-review",
      number: "2.6",
      title: "The expense and financial review workflow",
      subtitle:
        "Input documents → extraction → categorisation → anomaly flagging → review queue",
      takeaway:
        "EXPENSE_REVIEW_v1: receipt PDFs + export CSV → extract → categorise per chart → ANOMALY_FLAG (duplicate, threshold) — finance review before ERP.",
      why: "Money-moving workflows stop at queue — blueprint repeats Ch 5 gates.",
      paragraphs: [
        [
          s("Event: files in ~/Finance/expense_inbox/. EXTRACT_RECEIPT → NORMALISE_EXPENSE → MATCH_POLICY_v1 → ANOMALY_v1. Output: expenses.json + review.md for flagged only. No ERP write in v1."),
        ],
      ],
      workflowSteps: [
        "Chart of accounts in Context.",
        "Anomaly thresholds finance-approved.",
        "T3 for any connector write to accounting system.",
        "Reconcile totals to source CSV in QA.",
      ],
    }),
    buildGuideSection({
      id: "onboarding-document-workflow",
      number: "2.7",
      title: "The onboarding document workflow",
      subtitle:
        "New joiner inputs → personalised onboarding pack → delivered to manager → filed",
      takeaway:
        "ONBOARD_PACK_v1: HR form json + role template → ASSEMBLE_ONBOARD_v1 — personalised schedule, links, first-week checklist — to manager Drive folder.",
      why: "HR ops is document assembly with personalisation — low risk, high time savings.",
      paragraphs: [
        [
          s("Trigger: new_hire.json dropped in ~/HR/onboarding/trigger/. MERGE_TEMPLATE (role-based) → PERSONALISE_v1 → PACK.md + links.json → DRIVE_WRITE manager folder + NOTIFY manager. PII: confidential tier."),
        ],
      ],
      workflowSteps: [
        "Maintain role templates per department.",
        "HR triggers via form export json.",
        "Manager review optional T1 notify only.",
        "Delete trigger file after success.",
      ],
    }),
    buildGuideSection({
      id: "kpi-reporting-workflow",
      number: "2.8",
      title: "The KPI reporting workflow",
      subtitle:
        "Data inputs → metric calculation → narrative generation → formatted report → distributed on schedule",
      takeaway:
        "KPI_REPORT_v1: INGEST → CLEAN → COMPUTE_METRICS → INTERPRET_FLAGS → REPORT — full Ch 3 §3.8 data-to-decision blueprint with ops naming.",
      why: "KPI workflow is the analytical pipeline reference most ops teams deploy second after doc inbox.",
      paragraphs: [
        [
          s("Condition: kpi_export_ready.flag. Pipeline: INGEST_KPI → CLEAN → ANALYSE → QA reconcile → NARRATE → DISTRIBUTE to ~/Reports/kpi/{date}/ + Slack digest. SLI: QA PASS by 7am Monday."),
        ],
      ],
      workflowSteps: [
        "METRIC_DEFINITIONS signed by leadership.",
        "Golden test vs spreadsheet.",
        "Separate COMPUTE and NARRATE Skills.",
        "Monthly metric definition audit.",
      ],
      artifact: {
        id: "blueprint-kpi-report",
        title: "KPI_REPORT pipeline",
        content: `INGEST → CLEAN → ANALYSE → QA → NARRATE → DISTRIBUTE
Artifacts: metrics.json, report.md, QA.json
Trigger: condition export_ready.flag`,
      },
    }),
  ],
};
