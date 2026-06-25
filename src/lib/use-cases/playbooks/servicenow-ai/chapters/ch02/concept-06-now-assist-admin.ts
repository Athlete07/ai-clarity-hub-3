import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_NOW_ASSIST_ADMIN: GuideConcept = {
  number: 6,
  title: "Now Assist Administration and Governance",
  subtitle:
    "Licensing, RBAC, monitoring, data handling, audit, incident response, and enterprise policy templates",
  sections: [
    buildGuideSection({
      id: "license-entitlement",
      number: "6.1",
      title: "License and entitlement",
      subtitle:
        "Understanding the Now Assist licensing model and what each SKU unlocks",
      takeaway:
        "Now Assist capabilities map to product SKUs — ITSM, CSM, HR, Platform/Developer packs differ. Entitlement verification on each instance prevents 'enable but not licensed' gaps.",
      why: "Procurement and architects must speak SKU — interviews and renewals depend on it.",
      paragraphs: [
        [
          s("Work with account executive on "),
          x("Now Assist entitlements", "Per-product or suite bundles — confirm before architecture design."),
          s(" — map skills to purchased products. PDI may differ from prod entitlements."),
        ],
        [
          s("Document entitlement matrix in architecture wiki — which region/instance has which pack."),
        ],
        [
          s("Renewal: align skill roadmap to licensed products — don't design HR assist without HR SKU."),
        ],
      ],
      workflowSteps: [
        "Export entitlement report from ServiceNow or partner portal.",
        "Map each planned skill to SKU.",
        "Flag gaps before POC charter sign-off.",
      ],
      example: {
        title: "POC blocked — missing CSM pack",
        body: "CSM team built Now Assist case draft POC on prod-like subprod. Discovery: CSM Now Assist not licensed — only ITSM. Architecture paused; procurement added SKU. Saved 6 weeks of rework on wrong instance.",
      },
    }),
    buildGuideSection({
      id: "rbac-now-assist",
      number: "6.2",
      title: "Role-based access to Now Assist",
      subtitle:
        "Who sees which skills and how access is controlled",
      takeaway:
        "Roles and ACLs gate skill visibility — agents see ITSM skills, HR agents see HR skills, developers see dev assist. Principle of least privilege applies to AI surfaces.",
      why: "Over-broad access causes cross-domain data exposure in assist context.",
      paragraphs: [
        [
          s("Map skills to roles: itil, sn_customerservice_agent, sn_hr_core.admin, admin/developer."),
        ],
        [
          s("Custom roles for pilots — narrow cohort before enterprise rollout."),
        ],
        [
          s("Review quarterly as roles proliferate in large orgs."),
        ],
      ],
      workflowSteps: [
        "RBAC matrix: role × skill × instance.",
        "Test with low-privilege user — verify denied skills hidden.",
        "Align with identity governance joiner/mover/leaver.",
      ],
      example: {
        title: "Contractor role — dev assist without prod HR skills",
        body: "Contractors received developer assist on dev instance only; prod roles excluded HR case skills. Prevented contractor seeing employee case context in error.",
      },
    }),
    buildGuideSection({
      id: "usage-monitoring",
      number: "6.3",
      title: "Usage monitoring",
      subtitle:
        "The dashboards and reports that show consumption, cost, and adoption",
      takeaway:
        "Track: invocations per skill, unique users, accept rate, feedback ratio, cost allocation — executive dashboard on adoption, finops view on spend.",
      why: "You cannot defend renewal without usage proof.",
      paragraphs: [
        [
          s("Adoption metrics: % agents using assist weekly, invocations per ticket, skill ranking."),
        ],
        [
          s("Cost metrics: consumption trends vs ticket volume — spot runaway auto-triggers."),
        ],
        [
          s("Value metrics: handle time, edit distance, CSAT — tie to business case."),
        ],
      ],
      workflowSteps: [
        "Define monthly Now Assist ops review agenda.",
        "Build dashboard (PA or admin reports per release).",
        "Share with product owner and finance.",
      ],
      example: {
        title: "Finops caught runaway skill",
        body: "Usage report showed 3x spike on change summary skill — misconfigured auto-run on every save. Fixed trigger; saved $40k annualised estimate.",
      },
    }),
    buildGuideSection({
      id: "data-handling-retention",
      number: "6.4",
      title: "Data handling and retention",
      subtitle:
        "How Now Assist processes data, what it stores, and deletion controls",
      takeaway:
        "Understand: what leaves instance boundary (managed LLM layer), what logs persist, retention periods, and deletion on request — document in DPIA.",
      why: "Legal asks before InfoSec. Architects bring ServiceNow docs + org policy.",
      paragraphs: [
        [
          s("Clarify with ServiceNow trust docs: customer data isolation, subprocessors, region residency."),
        ],
        [
          s("Minimise sensitive fields in context — design choice, not only product default."),
        ],
        [
          s("Retention: align AI logs with corporate records policy — may differ from incident retention."),
        ],
      ],
      workflowSteps: [
        "Complete DPIA section on Now Assist data flow.",
        "List fields never sent to GenAI context.",
        "Define deletion process for AI interaction logs if applicable.",
      ],
      example: {
        title: "GDPR erasure request — scope defined",
        body: "Employee erasure request triggered playbook: incident PII redacted per policy; AI interaction logs checked against retention schedule. Legal satisfied because architects pre-documented flows.",
      },
    }),
    buildGuideSection({
      id: "audit-compliance",
      number: "6.5",
      title: "Audit and compliance",
      subtitle:
        "The logs that satisfy governance and the export format for auditors",
      takeaway:
        "Audit trail: who triggered assist, on which record, what output was accepted, who edited before send — exportable for SOX, ISO, and internal audit.",
      why: "Regulated industries require demonstrable control — not 'trust the AI.'",
      paragraphs: [
        [
          s("Enable platform logging features per release; integrate with SIEM if required."),
        ],
        [
          s("Quarterly audit sample: random 50 accepted outputs — verify policy compliance."),
        ],
        [
          s("Map controls to framework: SOC2 CC, ISO 27001, internal AI policy."),
        ],
      ],
      workflowSteps: [
        "Define audit evidence package for Now Assist.",
        "Run mock audit with internal compliance.",
        "Remediate gaps before external audit season.",
      ],
      example: {
        title: "SOX ITGC — assist logs in control matrix",
        body: "Now Assist accept events logged with user id and timestamp. Control tested: no customer email sent without human accept event. Auditor passed control on first sample.",
      },
    }),
    buildGuideSection({
      id: "now-assist-admin-role",
      number: "6.6",
      title: "The Now Assist admin role",
      subtitle:
        "The responsibilities, the tools, and the escalation path",
      takeaway:
        "Now Assist admin owns: entitlements, skill config, RBAC, monitoring, feedback loop, promotion pipeline, and liaison with security/legal — not 'the person who clicked enable.'",
      why: "Enterprises need a named role — job descriptions are forming around this.",
      paragraphs: [
        [
          s("Tools: Now Assist admin module, AI Search admin, update sets, feedback reports, skill version log."),
        ],
        [
          s("Escalation: platform issues to ServiceNow support; harmful output to security; policy to legal."),
        ],
        [
          s("Partner with: ITSM/CSM/HR product owners, knowledge manager, finops."),
        ],
      ],
      workflowSteps: [
        "Assign primary and backup Now Assist admin.",
        "Publish RACI for skill changes.",
        "Quarterly skills council meeting.",
      ],
      example: {
        title: "Dedicated AI platform admin — Fortune 500",
        body: "Role split from ServiceNow admin: 0.5 FTE Now Assist admin, 0.5 FTE AI Search/knowledge. Ticket volume to central config team dropped 40%; skill quality improved via ownership.",
      },
    }),
    buildGuideSection({
      id: "incident-response-ai",
      number: "6.7",
      title: "Incident response for AI",
      subtitle:
        "What to do when Now Assist produces incorrect or harmful output",
      takeaway:
        "AI incident playbook: detect → contain (disable skill or degraded mode) → assess scope → notify stakeholders → root cause (config vs retrieval vs model) → fix → postmortem — same rigor as security incidents.",
      why: "Programs without AI incident response learn painfully in public.",
      paragraphs: [
        [
          s("Severity levels: P1 harmful external comms; P2 widespread wrong policy; P3 isolated bad draft."),
        ],
        [
          s("Contain: kill switch skill, force manual workflow, comms to agents."),
        ],
        [
          s("Postmortem: grounding gap, guardrail miss, or user bypass — action items to skill owner."),
        ],
      ],
      workflowSteps: [
        "Draft AI_INCIDENT_RUNBOOK.md before go-live.",
        "Tabletop exercise with security and comms.",
        "Assign severity matrix and on-call rotation.",
      ],
      example: {
        title: "Wrong refund policy in draft — 4-hour contain",
        body: "Agent caught incorrect refund % in draft before send. Reported via feedback. Skill disabled globally in 15 minutes. Root cause: outdated KB article in retrieval. Article retired; skill re-enabled after reindex. No customer impact — process worked.",
      },
    }),
    buildGuideSection({
      id: "governance-framework-template",
      number: "6.8",
      title: "Governance framework template",
      subtitle:
        "The policy document structure that enterprise deployments need",
      takeaway:
        "Enterprise policy covers: purpose, scope, allowed use cases, prohibited use, data classification, human approval rules, roles, monitoring, incident response, vendor/subprocessor, training, and review cycle.",
      why: "Ch 2 closes with the artifact enterprises paste into GRC tools.",
      paragraphs: [
        [
          s("Align policy with Ch 1 trust model and Ch 2 admin practices — one coherent program."),
        ],
        [
          s("Board and works council review for employee-facing AI."),
        ],
        [
          s("Annual policy refresh minimum; quarterly for fast-moving agent features."),
        ],
      ],
      workflowSteps: [
        "Copy template; customise with legal.",
        "Obtain sign-off from CIO, CISO, DPO, HR for HR skills.",
        "Train all assist users on policy acknowledgment.",
      ],
      artifact: {
        id: "now-assist-governance-policy",
        title: "Now Assist governance policy — outline",
        description: "Enterprise policy skeleton for GRC adoption.",
        content: `# Now Assist Governance Policy

## 1. Purpose & scope
## 2. Approved use cases (by product)
## 3. Prohibited uses
## 4. Data classification & field exclusions
## 5. Human approval requirements
## 6. Roles & responsibilities (RACI)
## 7. Skill lifecycle (dev/test/prod)
## 8. Monitoring & metrics
## 9. AI incident response
## 10. Training & acknowledgment
## 11. Vendor & data residency
## 12. Review schedule (annual)

Appendix A: Skill registry
Appendix B: Entitlement matrix
Appendix C: Red-team checklist`,
      },
    }),
  ],
};
