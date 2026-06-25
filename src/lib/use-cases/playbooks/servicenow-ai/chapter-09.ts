import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_REFERENCE_ARCHITECTURE } from "./chapters/ch09/concept-01-reference-architecture";
import { CONCEPT_02_DATA_ARCHITECTURE } from "./chapters/ch09/concept-02-data-architecture-for-ai";
import { CONCEPT_03_SECURITY_PRIVACY } from "./chapters/ch09/concept-03-security-and-data-privacy";
import { CONCEPT_04_LICENSING_ACTIVATION } from "./chapters/ch09/concept-04-activation-licensing";
import { CONCEPT_05_PERFORMANCE_SCALABILITY } from "./chapters/ch09/concept-05-performance-scalability";
import { CONCEPT_06_MULTI_INSTANCE_UPGRADES } from "./chapters/ch09/concept-06-multi-instance-upgrade-strategy";
import { CONCEPT_07_ARCHITECT_PATTERNS } from "./chapters/ch09/concept-07-architect-design-patterns";
import { CONCEPT_08_ROI_FRAMEWORK } from "./chapters/ch09/concept-08-roi-measurement-framework";

export const CHAPTER_09_ENTERPRISE_ARCHITECTURE: GuideChapter = {
  slug: "ch09-architecture-security-deployment",
  number: 9,
  title: "Architecture, Security, and Enterprise Deployment",
  subtitle:
    "The architect's playbook — designing, securing, and scaling ServiceNow AI for enterprise production",
  readingMinutes: 210,
  intro: [
    "This chapter is written for architects and leads who must get ServiceNow AI through security review and into production — reliably, cost-effectively, and at scale. The goal is to make AI a platform subsystem: layered architecture, explicit data flows, high availability, and disciplined upgrades.",
    "You will learn a reference architecture you can reuse across programs, how to prepare data foundations (CMDB + labels + knowledge), how to secure AI against new attack classes like prompt injection, how to manage licensing and feature activation as part of architecture, and how to measure ROI in a way executives believe.",
    "By the end, you’ll have templates you can bring to an architecture board: review questions, security checklist, SLOs, upgrade checklist, and a business case one-pager.",
  ],
  keyInsight:
    "Enterprise AI succeeds when it behaves like enterprise software: layered architecture, least privilege, explicit data flows, HA fallbacks, measurable quality, and a repeatable operating cadence.",
  concepts: [
    CONCEPT_01_REFERENCE_ARCHITECTURE,
    CONCEPT_02_DATA_ARCHITECTURE,
    CONCEPT_03_SECURITY_PRIVACY,
    CONCEPT_04_LICENSING_ACTIVATION,
    CONCEPT_05_PERFORMANCE_SCALABILITY,
    CONCEPT_06_MULTI_INSTANCE_UPGRADES,
    CONCEPT_07_ARCHITECT_PATTERNS,
    CONCEPT_08_ROI_FRAMEWORK,
  ],
  diagrams: [
    {
      id: "four-layer-reference",
      title: "Four-layer ServiceNow AI reference architecture",
      caption:
        "Data → Platform → AI → Experience with a single control plane and capability wrappers.",
      steps: [
        { label: "Data", desc: "CMDB, KB, records, telemetry", tool: "Foundation" },
        { label: "Platform", desc: "ACL, Flow, policy tables", tool: "Control" },
        { label: "AI", desc: "PI, Now Assist, RAG, agents, custom", tool: "Intelligence" },
        { label: "Experience", desc: "Portal, Workspaces, VA, APIs", tool: "Delivery" },
      ],
    },
    {
      id: "ha-fallback-stack",
      title: "HA fallback stack (production pattern)",
      caption:
        "Design for provider outages: timeouts → retries → circuit breaker → alternate route → degraded mode → human queue.",
      steps: [
        { label: "Timeout", desc: "Hard limit by channel", tool: "SLO" },
        { label: "Retry", desc: "Backoff + cap", tool: "Resilience" },
        { label: "Breaker", desc: "Stop runaway failures", tool: "Safety" },
        { label: "Fallback", desc: "Alt provider if allowed", tool: "Routing" },
        { label: "Degrade", desc: "Rules/AI Search/human", tool: "Continuity" },
      ],
    },
  ],
  mindmap: {
    center: "Enterprise deployment",
    caption:
      "Architecture + security + operations + ROI are one system — not separate tracks.",
    branches: [
      {
        id: "architecture",
        label: "Architecture",
        description: "Layers + topology + flows",
        children: [
          { label: "Capability wrappers", description: "Stable contracts" },
          { label: "ADRs", description: "Decisions recorded" },
        ],
      },
      {
        id: "security",
        label: "Security",
        description: "Residency + PII + injection",
        children: [
          { label: "Least privilege", description: "ACL inheritance" },
          { label: "Kill switch", description: "Rapid containment" },
        ],
      },
      {
        id: "ops",
        label: "Operations",
        description: "SLOs + upgrades + monitoring",
        children: [
          { label: "SLO dashboards", description: "Latency/cost/quality" },
          { label: "Upgrade checklist", description: "Regression discipline" },
        ],
      },
      {
        id: "roi",
        label: "ROI",
        description: "Value proof",
        children: [
          { label: "Baselines", description: "Before metrics" },
          { label: "Exec dashboard", description: "3 metrics + spend" },
        ],
      },
    ],
  },
  businessContext: [
    "Enterprise ServiceNow AI programs fail less from “bad models” and more from missing architecture: unclear data flows, over-privileged integrations, no degraded mode, and no operating cadence. Security teams then block scale, and executives lose trust in ROI.",
    "This chapter gives the architect’s operating system: reference architecture artifacts, data readiness and lifecycle controls, AI-specific security hardening, licensing and activation discipline, performance/SLO design, upgrade strategy, and ROI measurement frameworks that survive scrutiny.",
  ],
  decisionCriteria: [
    {
      question: "Do you have to pass an architecture board or security review?",
      yesMeans:
        "Start with Concepts 1–3 and bring the checklists and templates into your review packet.",
    },
    {
      question: "Are you scaling beyond pilots into enterprise rollout?",
      yesMeans:
        "Concepts 5–7: SLOs, queues, degraded modes, and upgrade/regression discipline are mandatory.",
    },
    {
      question: "Do you need funding and executive sponsorship?",
      yesMeans:
        "Concept 8: baselines, value buckets, and an executive dashboard convert outcomes into sustained investment.",
    },
  ],
  architecture: {
    title: "Enterprise go-live stack",
    caption:
      "A repeatable production system: contracts + controls + evidence + operating cadence.",
    steps: [
      { label: "Architecture", desc: "Layers + ADRs + diagrams", tool: "Design" },
      { label: "Security", desc: "PII + injection + ACL", tool: "Trust" },
      { label: "Resilience", desc: "Fallbacks + breakers", tool: "HA" },
      { label: "Ops", desc: "SLOs + dashboards", tool: "Run" },
      { label: "Upgrades", desc: "Eval + rollback", tool: "Change" },
      { label: "ROI", desc: "Baselines + exec metrics", tool: "Value" },
    ],
  },
  artifacts: [
    {
      id: "enterprise-go-live-pack",
      title: "Enterprise go-live pack (starter)",
      description: "Bundle these artifacts to accelerate approvals.",
      content:
        `- Reference architecture diagram\n- Data flow + retention notes\n- AI security checklist + pen test results\n- SLO targets + dashboards\n- Degraded mode + rollback runbooks\n- Eval suites + acceptance thresholds\n- Executive dashboard + baseline metrics`,
    },
  ],
  caseStudy: {
    title: "From pilot to production: the missing architecture",
    scenario:
      "A pilot showed promise but couldn’t scale: security had unanswered questions, costs were unbounded, and upgrades caused unpredictable changes in output quality.",
    before:
      "Ad hoc provider calls, unclear data retention, no fallbacks, no SLOs, and no baselines for ROI.",
    after:
      "Layered architecture with capability wrappers, region routing, redaction policies, circuit breakers and degraded modes, eval suites for prompt/model changes, and an executive dashboard showing containment/productivity/quality with spend attribution.",
    metrics: [
      "Security approval achieved with trust pack artifacts",
      "Stable UX through provider outages via degraded mode",
      "Controlled costs via caching, quotas, and routing",
      "Sustained funding via baseline-based ROI reporting",
    ],
  },
  failurePoints: [
    {
      problem: "Treating AI as a feature, not a subsystem",
      fix: "Use layered architecture and capability wrappers with governance and observability.",
    },
    {
      problem: "No degraded mode",
      fix: "Define how workflows continue without AI; test outages before go-live.",
    },
    {
      problem: "ROI claims without baselines",
      fix: "Baseline first, then measure outcomes by value bucket with agreed definitions.",
    },
  ],
};

