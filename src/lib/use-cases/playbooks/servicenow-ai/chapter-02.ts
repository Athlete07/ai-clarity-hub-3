import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_NOW_ASSIST_ARCHITECTURE } from "./chapters/ch02/concept-01-now-assist-architecture";
import { CONCEPT_02_NOW_ASSIST_ITSM } from "./chapters/ch02/concept-02-now-assist-itsm";
import { CONCEPT_03_NOW_ASSIST_CSM_HR } from "./chapters/ch02/concept-03-now-assist-csm-hr";
import { CONCEPT_04_NOW_ASSIST_DEVELOPERS } from "./chapters/ch02/concept-04-now-assist-developers";
import { CONCEPT_05_SKILL_CONFIGURATION } from "./chapters/ch02/concept-05-skill-configuration";
import { CONCEPT_06_NOW_ASSIST_ADMIN } from "./chapters/ch02/concept-06-now-assist-admin";

export const CHAPTER_02_NOW_ASSIST: GuideChapter = {
  slug: "ch02-now-assist",
  number: 2,
  title: "Now Assist (GenAI Core)",
  subtitle:
    "The deepest dive into ServiceNow's flagship AI capability — from architecture to production configuration",
  readingMinutes: 140,
  intro: [
    "Chapter 1 gave you the ecosystem map. This chapter goes inside ",
    x(
      "Now Assist",
      "ServiceNow's generative AI layer — skills, grounding, product-specific use cases, developer assist, tuning, and enterprise governance.",
    ),
    " — the capability most organisations license first and configure last. You will learn how skills are built and routed, how ITSM/CSM/HR skills differ, how developers use assist without creating security debt, and how admins run a governed program.",
    " By the end you can activate skills on PDI, explain the prompt pipeline in an interview, and publish a governance policy your CISO will sign.",
  ],
  keyInsight:
    "Now Assist is not one feature — it is a skill framework on a managed LLM layer with ACL-grounded context. Production value comes from skill selection, retrieval quality, human approval on output, and admin discipline — not from enabling every toggle.",
  concepts: [
    CONCEPT_01_NOW_ASSIST_ARCHITECTURE,
    CONCEPT_02_NOW_ASSIST_ITSM,
    CONCEPT_03_NOW_ASSIST_CSM_HR,
    CONCEPT_04_NOW_ASSIST_DEVELOPERS,
    CONCEPT_05_SKILL_CONFIGURATION,
    CONCEPT_06_NOW_ASSIST_ADMIN,
  ],
  diagrams: [
    {
      id: "now-assist-pipeline",
      title: "Now Assist request pipeline",
      caption:
        "Every assist invocation walks this path. Debugging bad output means tracing which stage failed — not re-prompting blindly.",
      steps: [
        { label: "Trigger", desc: "Agent action or flow", tool: "Surface" },
        { label: "Context", desc: "Record + ACL + retrieval", tool: "Grounding" },
        { label: "Prompt", desc: "Skill template assembly", tool: "Pipeline" },
        { label: "LLM", desc: "Managed model layer", tool: "GenAI" },
        { label: "Render", desc: "Draft in workspace", tool: "UX" },
        { label: "Accept", desc: "Human review + audit", tool: "Governance" },
      ],
    },
    {
      id: "now-assist-products",
      title: "Now Assist by product domain",
      caption:
        "Skills are product-bound. Architecture maps entitlements to workflows — not one global chat.",
      steps: [
        { label: "ITSM", desc: "Summary, resolve, change", tool: "Agents" },
        { label: "CSM", desc: "Case draft, coaching", tool: "Customer" },
        { label: "HR", desc: "Policy assist, portal", tool: "Employee" },
        { label: "Platform", desc: "Code, Flow, ATF", tool: "Builders" },
        { label: "Admin", desc: "RBAC, monitor, govern", tool: "Ops" },
      ],
    },
  ],
  mindmap: {
    center: "Now Assist rollout",
    caption:
      "Sequence: architecture literacy → one skill POC → tune → govern → scale by product.",
    branches: [
      {
        id: "architect",
        label: "Architecture first",
        description: "Skills, pipeline, grounding",
        children: [
          { label: "Prompt assembly", description: "Context + template" },
          { label: "Token discipline", description: "Cost and quality" },
        ],
      },
      {
        id: "product",
        label: "Product skills",
        description: "ITSM → CSM/HR → Dev",
        children: [
          { label: "ITSM POC", description: "Incident summary" },
          { label: "HR restrictions", description: "Field exclusion" },
        ],
      },
      {
        id: "govern",
        label: "Govern & scale",
        description: "Admin + policy",
        children: [
          { label: "RBAC + SKU", description: "Entitlement matrix" },
          { label: "AI incident runbook", description: "Kill switch ready" },
        ],
      },
    ],
  },
  businessContext: [
    "Most enterprises bought Now Assist before they understood skills, grounding, or governance. The result: low adoption, security stalls, and finance asking why GenAI spend rose without MTTR moving. This chapter is the ",
    x(
      "flagship deep dive",
      "Architecture through admin — the reference chapter for ServiceNow's GenAI core.",
    ),
    ". Pair it with Chapter 1's ecosystem map and future AI Search chapter when retrieval underperforms.",
  ],
  decisionCriteria: [
    {
      question: "Are you the Now Assist admin or platform owner?",
      yesMeans:
        "Read Concepts 5–6 fully — skill tuning and governance are your job. Concepts 1–2 for architecture credibility.",
    },
    {
      question: "Are you rolling out ITSM agent assist?",
      yesMeans:
        "Concept 2 + section 2.7 PDI walkthrough — start with incident summary only; expand after knowledge hygiene.",
    },
    {
      question: "Is your scope CSM, HR, or employee portal deflection?",
      yesMeans:
        "Concept 3 — persona, field exclusion, and legal review before any employee-facing send.",
    },
    {
      question: "Are you a ServiceNow developer or platform builder?",
      yesMeans:
        "Concept 4 — code/Flow/ATF assist with mandatory peer review; never skip ATF on accepted code.",
    },
  ],
  architecture: {
    title: "Now Assist production stack",
    caption:
      "Reference architecture for enterprise rollout — one skill at a time, always grounded, always audited on accept.",
    steps: [
      { label: "Entitlement", desc: "SKU verified per product", tool: "Procurement" },
      { label: "Knowledge", desc: "AI Search index clean", tool: "Prerequisite" },
      { label: "Skill", desc: "One workflow enabled", tool: "POC" },
      { label: "RBAC", desc: "Least privilege roles", tool: "Security" },
      { label: "Monitor", desc: "Adoption + cost dashboard", tool: "Ops" },
      { label: "Govern", desc: "Policy + incident runbook", tool: "GRC" },
    ],
  },
  artifacts: [
    {
      id: "skill-registry-starter",
      title: "Now Assist skill registry (starter)",
      description: "Central register — one row per skill before production.",
      content: `| Skill | Product | Owner | Status | Context sources | Approval required |
|-------|---------|-------|--------|-----------------|-------------------|
| incident_summary | ITSM | @lead | POC | incident fields, KB-IT | internal only |
| resolution_draft | ITSM | @lead | planned | work notes, resolution codes | yes external |
| case_draft | CSM | @csm | disabled | case, account, KB-CSM | yes always |`,
    },
    {
      id: "ai-incident-runbook-stub",
      title: "AI incident response — quick stub",
      description: "Paste into ops wiki before go-live.",
      content: `## Detect
Feedback spike, harmful draft reported, policy violation

## Contain (15 min)
Disable affected skill globally | Notify agents | Degraded mode SOP

## Assess
Records affected, external send? | Retrieval or guardrail root cause?

## Recover
Fix KB/config | Reindex | UAT | Re-enable with comms

## Postmortem
Owner, timeline, preventive action in skill version log`,
    },
  ],
  caseStudy: {
    title: "Regional IT + HR — unified Now Assist program",
    scenario:
      "A multinational enabled Now Assist on ITSM and HRSD without shared admin, skill registry, or retrieval hygiene. IT agents ignored summaries; HR legal blocked rollout after one draft cited wrong leave policy.",
    before:
      "Parallel pilots, no grounding standard, no kill switch, developer assist enabled in prod without review policy.",
    after:
      "Central Now Assist admin, skill registry, Ch 2 governance policy, IT incident summary POC first, HR pilot with field exclusions and legal-approved KB only. Developer assist restricted to subprod.",
    metrics: [
      "IT incident summary accept rate 71% after UX fix",
      "HR pilot: 0 policy violations in 90-day audit sample",
      "GenAI cost per ticket tracked — 18% under budget after trigger tuning",
      "AI incident runbook used once — contained in 4 hours, no customer impact",
    ],
  },
  failurePoints: [
    {
      problem: "Enabling all ITSM skills without knowledge or search prerequisite",
      fix: "Concept 1.4 grounding + Ch 1 AI Search warning — clean KB before scale.",
    },
    {
      problem: "HR or CSM drafts sent without human approval",
      fix: "Concepts 3.3, 6.5 — field exclusion and mandatory accept on external comms.",
    },
    {
      problem: "Developers accept generated code without review or ATF",
      fix: "Concept 4 — peer review and ATF mandatory; assist is pair programmer, not deploy button.",
    },
    {
      problem: "No owner, no monitoring, no AI incident runbook",
      fix: "Concept 6 — dedicated admin role, usage dashboard, governance policy template.",
    },
  ],
};
