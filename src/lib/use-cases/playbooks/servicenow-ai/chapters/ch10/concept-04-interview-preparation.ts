import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_INTERVIEW_PREP: GuideConcept = {
  number: 4,
  title: "Interview Preparation Guide",
  subtitle:
    "What interviews actually test, role-based question banks, demo prep, whiteboarding, behavioral answers, and high-signal questions to ask",
  sections: [
    buildGuideSection({
      id: "interview-landscape",
      number: "4.1",
      title: "The landscape of ServiceNow AI interviews",
      subtitle: "Roles, formats, and what they’re really testing",
      takeaway:
        "Most AI interviews test three things: platform fluency, production judgment (governance/ops), and storytelling (value + risk). Prepare for all three.",
      why: "Candidates fail when they only memorize features and can’t discuss trust, scale, or trade-offs.",
      paragraphs: [
        [
          s("Formats: admin/practitioner (config + troubleshooting), developer (scripts/flows/APIs), architect (reference architecture + controls), lead (roadmap + ROI)."),
        ],
      ],
      workflowSteps: [
        "Pick your target role level and map expected proof (POC, diagrams, metrics).",
        "Prepare 2 demo stories (assist + automation) with governance artifacts.",
        "Practice a 10-minute architecture walk-through with fallbacks.",
      ],
    }),
    buildGuideSection({
      id: "fresher-questions",
      number: "4.2",
      title: "Fresher questions",
      subtitle: "30 common entry-level questions (with model answers)",
      takeaway:
        "Entry interviews reward clarity: define Now Assist vs PI vs AI Search vs VA vs Agents, explain confidence and grounding, and give one safe workflow example.",
      why: "Freshers often overclaim autonomy. Interviewers want safe, correct basics.",
      paragraphs: [
        [
          s("Core themes: AI types, where each fits, what ‘grounding’ means, what confidence means, and how to add a human checkpoint."),
        ],
      ],
      workflowSteps: [
        "Memorize the 60-second ecosystem map (Ch 1 Concept 2).",
        "Practice 5 mini-answers: 'what is PI', 'what is RAG', 'what is HITL'.",
        "Prepare one PDI POC you can explain end-to-end.",
      ],
      artifact: {
        id: "fresher-ai-questions-pack",
        title: "Fresher question pack (starter)",
        description: "High-frequency questions to rehearse.",
        content:
          `1) Now Assist vs Predictive Intelligence vs AI Search\n2) What is grounding and why it matters?\n3) What is confidence and how do you use it?\n4) How do you prevent hallucinations?\n5) What is Virtual Agent and how does it integrate?\n6) What is an AI agent vs automation?\n7) What is a safe POC on PDI?\n8) What are common AI failure modes?`,
      },
    }),
    buildGuideSection({
      id: "mid-level-questions",
      number: "4.3",
      title: "Mid-level questions",
      subtitle: "Scenario questions for hands-on practitioners",
      takeaway:
        "Mid-level interviews test implementation judgment: where to place AI in Flow, how to tune PI, how to measure containment, and how to handle failures.",
      why: "Hands-on candidates are expected to talk about thresholds, overrides, and operations.",
      paragraphs: [
        [
          s("Be ready to answer: confidence banding, degraded mode, model retraining triggers, KB quality loops, and cost controls."),
        ],
      ],
      workflowSteps: [
        "Prepare 3 scenario walkthroughs: routing, deflection, and agent assist.",
        "Bring 2 metrics per scenario and how you’d measure them.",
        "Prepare failure handling: timeout, low confidence, injection.",
      ],
    }),
    buildGuideSection({
      id: "architect-questions",
      number: "4.4",
      title: "Senior and architect questions",
      subtitle: "Design, governance, strategic questions",
      takeaway:
        "Architect interviews test your ability to design a safe system: layers, data flows, residency, HA, upgrade strategy, and ROI evidence.",
      why: "Leadership roles are about risk, trust, and scalable operating models.",
      paragraphs: [
        [
          s("Use Chapter 9 artifacts: reference architecture, security checklist, SLOs, and upgrade checklist."),
        ],
      ],
      workflowSteps: [
        "Practice a 10-minute whiteboard: layers + RAG + provider routing + HITL.",
        "Prepare 3 trade-offs: sync vs async, RAG vs non-RAG, one provider vs multi-provider.",
        "Prepare an executive ROI narrative with baselines.",
      ],
    }),
    buildGuideSection({
      id: "technical-demo-prep",
      number: "4.5",
      title: "Technical demonstration preparation",
      subtitle: "Build and present a live POC in interviews",
      takeaway:
        "A winning demo shows: workflow outcome, gates, logs, and metrics — not just a UI feature. Always demo degraded mode and explain trust boundaries.",
      why: "Interviewers look for production thinking under constraints.",
      paragraphs: [[s("Use the PDI POC rubric: value + safety + ops + reproducibility + narrative.")]],
      workflowSteps: [
        "Script the demo (5 minutes) + the architecture explanation (5 minutes).",
        "Pre-load data and show one failure case (timeout/low confidence).",
        "Show monitoring: logs, overrides, and key KPI.",
      ],
    }),
    buildGuideSection({
      id: "whiteboard-prep",
      number: "4.6",
      title: "Architecture whiteboard preparation",
      subtitle: "Diagrams you should draw from memory",
      takeaway:
        "Know 3 diagrams: layered reference architecture, RAG pipeline, and HA fallback stack. Draw them cleanly and narrate the controls.",
      why: "Whiteboards reveal whether you understand systems, not features.",
      paragraphs: [
        [
          s("Your diagrams should include: data boundaries, retrieval, provider routing, validation gates, and observability."),
        ],
      ],
      workflowSteps: [
        "Practice drawing each diagram in under 90 seconds.",
        "Attach 3 common failure modes and how your design handles them.",
        "Explain trade-offs clearly (cost vs latency vs risk).",
      ],
    }),
    buildGuideSection({
      id: "behavioral",
      number: "4.7",
      title: "Behavioral questions for AI roles",
      subtitle: "AI failure, ethics, and stakeholder management",
      takeaway:
        "Behavioral answers should show maturity: acknowledge uncertainty, show safeguards, and communicate how you handled failures with transparency and learning loops.",
      why: "AI systems fail. Leaders are judged on how they respond and prevent repeats.",
      paragraphs: [
        [
          s("Use STAR, but add ‘controls’ and ‘metrics’: what guardrail you added and how you measured improvement."),
        ],
      ],
      workflowSteps: [
        "Prepare 3 stories: hallucination incident, cost spike, security/injection concern.",
        "Explain containment (kill switch), remediation, and prevention.",
        "Show how you aligned stakeholders with evidence and dashboards.",
      ],
    }),
    buildGuideSection({
      id: "questions-to-ask",
      number: "4.8",
      title: "Questions to ask the interviewer",
      subtitle: "Questions that signal seniority and strategic thinking",
      takeaway:
        "Ask about governance, measurement, and operating cadence — not just features. Seniority is shown by curiosity about controls and outcomes.",
      why: "Great questions reveal you think like an owner, not an implementer.",
      paragraphs: [
        [
          s("Examples: ‘How do you measure AI quality drift?’, ‘What are your HITL gates?’, ‘How do you handle upgrades and provider changes?’"),
        ],
      ],
      workflowSteps: [
        "Pick 5 questions aligned to the role level.",
        "Tailor 2 questions to their domain and constraints.",
        "Use answers to propose a 30/60/90-day plan if asked.",
      ],
      artifact: {
        id: "interviewer-questions-pack",
        title: "Questions to ask interviewers (high-signal)",
        description: "Use to show strategic thinking.",
        content:
          `- What are your top 3 AI use cases and how do you measure ROI?\n- What are your guardrails (HITL, ACL, retention, kill switch)?\n- How do you evaluate model/prompt changes (eval packs)?\n- How do you handle provider outages and degraded mode?\n- What does your AI operating cadence look like (monthly review)?`,
      },
    }),
  ],
};

