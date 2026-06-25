import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_ROADMAP_FUTURE } from "./chapters/ch10/concept-01-roadmap-future-capabilities";
import { CONCEPT_02_INDUSTRY_USE_CASES } from "./chapters/ch10/concept-02-industry-specific-use-cases";
import { CONCEPT_03_PDI_POC_BLUEPRINTS } from "./chapters/ch10/concept-03-pdi-poc-blueprints";
import { CONCEPT_04_INTERVIEW_PREP } from "./chapters/ch10/concept-04-interview-preparation";
import { CONCEPT_05_STAKEHOLDER_PROPOSALS } from "./chapters/ch10/concept-05-proposing-ai-to-stakeholders";
import { CONCEPT_06_CERT_LEARNING_PATH } from "./chapters/ch10/concept-06-certification-learning-path";

export const CHAPTER_10_FUTURE_CAREER: GuideChapter = {
  slug: "ch10-future-career-mastery",
  number: 10,
  title: "Future of ServiceNow AI and Career Mastery",
  subtitle:
    "What is coming, how to stay ahead, how to pass the interview, and how to lead the practice",
  readingMinutes: 180,
  intro: [
    "This chapter is the bridge from building capabilities to building a career and a practice. It covers what’s coming, how to choose durable skills, how to spot AI opportunities across industries, and how to build PDI POCs that survive architecture review.",
    "You’ll also get interview preparation guidance from fresher through architect, a stakeholder proposal playbook (discovery → pitch → demo → proposal), and a learning/certification path that turns your work into visible proof of expertise.",
    "The goal is simple: become interview-proof and delivery-proof by showing production judgment — not just feature knowledge.",
  ],
  keyInsight:
    "The winners won’t be the people who memorize features — they’ll be the people who build safe, measurable, repeatable AI workflows and can explain them to executives, security, and engineers.",
  concepts: [
    CONCEPT_01_ROADMAP_FUTURE,
    CONCEPT_02_INDUSTRY_USE_CASES,
    CONCEPT_03_PDI_POC_BLUEPRINTS,
    CONCEPT_04_INTERVIEW_PREP,
    CONCEPT_05_STAKEHOLDER_PROPOSALS,
    CONCEPT_06_CERT_LEARNING_PATH,
  ],
  diagrams: [
    {
      id: "career-competency-stack",
      title: "Career competency stack (durable skills)",
      caption:
        "Skills that compound over two years: architecture + governance + ops + storytelling.",
      steps: [
        { label: "Platform", desc: "Now Assist, PI, AI Search, VA, Agents", tool: "Fluency" },
        { label: "Architecture", desc: "Layers, RAG, wrappers, HA", tool: "Design" },
        { label: "Security", desc: "Residency, PII, injection, ACL", tool: "Trust" },
        { label: "Operations", desc: "SLOs, cost controls, eval packs", tool: "Run" },
        { label: "Leadership", desc: "ROI, change mgmt, stakeholder buy-in", tool: "Lead" },
      ],
    },
    {
      id: "pdi-poc-to-proposal",
      title: "PDI POC → proposal pipeline",
      caption:
        "Turn a demo into a funded program with artifacts and metrics.",
      steps: [
        { label: "POC", desc: "Scenario + dataset + demo script", tool: "Build" },
        { label: "Rubric", desc: "Value + safety + ops score", tool: "Prove" },
        { label: "Trust pack", desc: "Data flow + controls", tool: "Approve" },
        { label: "ROI", desc: "Baseline → target KPIs", tool: "Fund" },
        { label: "Rollout", desc: "Pilot → scale → autonomy", tool: "Deliver" },
      ],
    },
  ],
  mindmap: {
    center: "Career mastery",
    caption: "Proof of work beats claims: build, measure, publish.",
    branches: [
      {
        id: "future",
        label: "Future",
        description: "Roadmap signals",
        children: [
          { label: "Agents at scale", description: "Tools + governance" },
          { label: "Provider churn", description: "Routing + eval" },
        ],
      },
      {
        id: "pocs",
        label: "POCs",
        description: "Interview-ready demos",
        children: [
          { label: "Now Assist", description: "draft + approval" },
          { label: "PI routing", description: "confidence bands" },
        ],
      },
      {
        id: "interviews",
        label: "Interviews",
        description: "Role-based preparation",
        children: [
          { label: "Whiteboards", description: "layers + RAG + HA" },
          { label: "Stories", description: "failures + controls" },
        ],
      },
      {
        id: "leadership",
        label: "Leadership",
        description: "Stakeholders + ROI",
        children: [
          { label: "Business cases", description: "baseline → target" },
          { label: "Change mgmt", description: "adoption loop" },
        ],
      },
    ],
  },
  businessContext: [
    "ServiceNow AI is evolving quickly — and the market has a knowledge gap from freshers to architects. Career mastery comes from being able to build safe POCs, explain the architecture, and lead stakeholders through risk, governance, and ROI.",
    "This chapter packages the roadmap lens, industry opportunity discovery, PDI POC blueprint library, interview preparation, stakeholder proposal frameworks, and a learning path that turns you into a visible, credible practitioner.",
  ],
  decisionCriteria: [
    {
      question: "Do you want to become interview-ready fast?",
      yesMeans:
        "Start Concept 3 (PDI POCs) + Concept 4 (interviews). Build one POC and practice the whiteboard diagrams.",
    },
    {
      question: "Do you need to lead a stakeholder pitch or proposal?",
      yesMeans:
        "Concept 5: discovery → business case → pitch → demo → implementation proposal with change management.",
    },
    {
      question: "Are you trying to stay ahead of the product roadmap?",
      yesMeans:
        "Concept 1: invest in durable primitives, not feature names; keep a personal learning loop.",
    },
  ],
  architecture: {
    title: "Career-proof portfolio architecture",
    caption:
      "Your portfolio should prove production thinking: controls, metrics, and repeatability.",
    steps: [
      { label: "POCs", desc: "End-to-end workflows", tool: "Proof" },
      { label: "Artifacts", desc: "Trust packs + ADRs", tool: "Govern" },
      { label: "Metrics", desc: "Baselines + ROI", tool: "Value" },
      { label: "Ops", desc: "SLOs + eval packs", tool: "Run" },
      { label: "Story", desc: "Pitch + interview", tool: "Lead" },
    ],
  },
  artifacts: [
    {
      id: "chapter-10-portfolio-pack",
      title: "Career mastery portfolio pack (starter)",
      description: "What to build to be interview-proof and delivery-proof.",
      content:
        `- 2 PDI POCs with metrics (assist + automation)\n- 3 diagrams from memory (layers, RAG, HA)\n- 1 trust pack (data+controls+retention)\n- 1 eval pack (prompt/model regression)\n- 1 business case one-pager\n- 1 demo script + rubric scorecard`,
    },
  ],
  caseStudy: {
    title: "Landing the role by showing production thinking",
    scenario:
      "A candidate competed against others with similar ServiceNow experience. The differentiator was a portfolio of PDI POCs and production artifacts.",
    before:
      "Feature knowledge and generic answers; no proof of governance, ops, or ROI thinking.",
    after:
      "Two PDI demos (PI routing + VA RAG), plus diagrams, trust pack, eval pack, and a one-page business case. The candidate could explain fallbacks, metrics, and safe rollout.",
    metrics: [
      "Clear interview narrative across fresher → architect loops",
      "Confidence discussing governance and security",
      "Credible stakeholder pitch with measurable outcomes",
      "Evidence of learning system and community contribution",
    ],
  },
  failurePoints: [
    {
      problem: "Memorizing features instead of building proof",
      fix: "Build PDI POCs with metrics, controls, and artifacts.",
    },
    {
      problem: "Overpromising AI autonomy",
      fix: "Use HITL gates, confidence bands, degraded mode, and show them in demos.",
    },
    {
      problem: "No learning system",
      fix: "Use a monthly PDI experiment loop and publish artifacts consistently.",
    },
  ],
};

