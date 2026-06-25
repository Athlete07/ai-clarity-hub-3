import { buildGuideSection, s } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_CERT_LEARNING_PATH: GuideConcept = {
  number: 6,
  title: "Certification and Learning Path",
  subtitle:
    "Certification framing, Now Learning sequencing, community leverage, event cadence, and building a public profile",
  sections: [
    buildGuideSection({
      id: "cis-ai",
      number: "6.1",
      title: "The CIS‑AI certification",
      subtitle: "What it covers, tests, and how to prepare",
      takeaway:
        "Prepare for CIS‑AI by mastering platform AI primitives (Now Assist, PI, AI Search, VA, agents), plus governance and measurement basics.",
      why: "Cert exams and real projects increasingly test production judgment, not just navigation.",
      paragraphs: [[s("Preparation method: map each topic to a PDI mini-lab and a one-page summary with pitfalls and metrics.")]],
      workflowSteps: [
        "Create a PDI lab per AI capability.",
        "Write a cheat sheet per lab (controls + KPIs).",
        "Review weekly; retest monthly.",
      ],
    }),
    buildGuideSection({
      id: "cad-path",
      number: "6.2",
      title: "Certified Application Developer (CAD) path",
      subtitle: "How AI features in CAD exams and practice",
      takeaway:
        "For CAD, AI shows up through automation patterns: Flow design, IntegrationHub, scripts, testing, and safe usage of GenAI outputs as structured data.",
      why: "Developers are expected to build reliable workflows around probabilistic outputs.",
      paragraphs: [[s("Key focus: schemas, validation, error handling, and promotion across instances (dev/test/prod).")]],
      workflowSteps: [
        "Build one AI-augmented flow with confidence gating.",
        "Wrap external LLM calls in IntegrationHub actions.",
        "Create test cases for failure modes (timeouts/low confidence).",
      ],
    }),
    buildGuideSection({
      id: "cis-family",
      number: "6.3",
      title: "Certified Implementation Specialist (CIS) path",
      subtitle: "AI content across the CIS family",
      takeaway:
        "CIS success comes from domain workflows: understand where AI fits into ITSM/CSM/HRSD, which metrics matter, and how to configure safely with governance.",
      why: "Implementations are judged by outcomes and adoption, not feature enablement.",
      paragraphs: [[s("Focus: domain use cases + data readiness + change management + measurement.")]],
      workflowSteps: [
        "Pick your domain (ITSM/CSM/HR) and build 2 PDI POCs.",
        "Prepare a metrics and adoption plan per POC.",
        "Practice explaining trade-offs to non-technical stakeholders.",
      ],
    }),
    buildGuideSection({
      id: "cta-path",
      number: "6.4",
      title: "Certified Technical Architect (CTA) path",
      subtitle: "How AI is assessed at architecture level",
      takeaway:
        "At CTA level, AI is evaluated as architecture: data flows, residency, least privilege, HA, upgrade strategy, and ROI frameworks — plus clear diagrams and ADRs.",
      why: "Architecture boards care about risk and scale; AI must meet the same standards as any enterprise subsystem.",
      paragraphs: [[s("Use Chapter 9 artifacts as your default: reference architecture, checklists, SLOs, and upgrade regression approach.")]],
      workflowSteps: [
        "Practice drawing 3 diagrams from memory (layers, RAG, HA).",
        "Prepare an architecture review packet (trust pack).",
        "Prepare an executive dashboard story with baselines.",
      ],
    }),
    buildGuideSection({
      id: "now-learning",
      number: "6.5",
      title: "Now Learning resources",
      subtitle: "Official learning paths and sequencing",
      takeaway:
        "Sequence learning: mental model → domain capability → hands-on PDI POCs → governance and scaling. Avoid ‘random course hopping’.",
      why: "Sequence builds compounding competence and interview readiness.",
      paragraphs: [[s("Use this playbook as your spine; use courses as reinforcement and validation.")]],
      workflowSteps: [
        "Study one chapter, then build one PDI lab per week.",
        "Track gaps and fill them with targeted modules.",
        "Re-run POCs quarterly to stay current.",
      ],
    }),
    buildGuideSection({
      id: "community",
      number: "6.6",
      title: "The ServiceNow community",
      subtitle: "Where practitioners share and how to engage",
      takeaway:
        "Community engagement accelerates learning: ask good questions, answer others, share PDI learnings, and build credibility through helpful artifacts.",
      why: "Community feedback is a fast way to validate real-world patterns and avoid common mistakes.",
      paragraphs: [[s("A good strategy: contribute small, specific learnings consistently.")]],
      workflowSteps: [
        "Answer 1 question/week with a concrete example.",
        "Share 1 PDI lab write-up/month.",
        "Follow domain experts and track release discussions.",
      ],
    }),
    buildGuideSection({
      id: "events",
      number: "6.7",
      title: "Conference and event calendar",
      subtitle: "Knowledge, local groups, and what matters",
      takeaway:
        "Events are for signals: roadmap direction, reference architectures, and patterns. Capture learnings as ADR-style notes and update your PDI backlog.",
      why: "Events are only useful if converted into experiments and artifacts.",
      paragraphs: [[s("Treat events as input to your learning system: what to test next, what to build next, what to publish next.")]],
      workflowSteps: [
        "After each event, pick 2 experiments to run on PDI.",
        "Update your architecture diagrams and interview Q&A bank.",
        "Share one lesson learned publicly.",
      ],
    }),
    buildGuideSection({
      id: "public-profile",
      number: "6.8",
      title: "Building your public profile",
      subtitle: "Writing, speaking, contributing to make expertise visible",
      takeaway:
        "A strong profile is proof of work: diagrams, PDI labs, templates, and measured outcomes. Publish artifacts that show production thinking.",
      why: "Visibility and credibility compound — they attract better roles and opportunities.",
      paragraphs: [[s("High-signal outputs: reference diagrams, POC demos with rubrics, security checklists, and ROI dashboards.")]],
      workflowSteps: [
        "Pick one niche (ITSM AI, agent governance, RAG) and publish monthly.",
        "Open-source a small template pack (checklists, rubrics).",
        "Practice a 10-minute talk on your best POC and its controls.",
      ],
      artifact: {
        id: "career-portfolio-checklist",
        title: "Career portfolio checklist (AI practitioner)",
        description: "What to build to become interview-proof.",
        content:
          `- 2 PDI POCs with metrics (assist + automation)\n- 3 diagrams from memory (layers, RAG, HA)\n- 1 trust pack (data+controls+retention)\n- 1 eval pack (prompt/model regression)\n- 1 business case one-pager\n- 1 public write-up/month (lessons learned)`,
      },
    }),
  ],
};

