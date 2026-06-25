import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_NOW_ASSIST_CSM_HR: GuideConcept = {
  number: 3,
  title: "Now Assist for CSM and HR",
  subtitle:
    "Case summaries, response drafting, HR data handling, deflection, coaching, and persona setup",
  sections: [
    buildGuideSection({
      id: "csm-case-summarisation",
      number: "3.1",
      title: "Case summarisation in CSM",
      subtitle:
        "How agents receive context-rich summaries at case open",
      takeaway:
        "CSM summaries emphasise customer identity, product context, SLA, sentiment history, and open commitments — different shape than ITSM incident briefs.",
      why: "CSM agents juggle relationship context, not just technical state. Skills must reflect that.",
      paragraphs: [
        [
          s("Context includes account tier, product entitlements, prior cases, escalations, and comms channel. Output tone is "),
          x("customer-facing aware", "Drafts avoid blaming customer or leaking internal escalation notes."),
          s("."),
        ],
        [
          s("Integrate with Customer Service Management workspace — summary panel at case open."),
        ],
        [
          s("ACL: agents see only accounts in their domain — summary inherits restrictions."),
        ],
      ],
      workflowSteps: [
        "Map CSM case fields required in summary template.",
        "Test on high-touch account with long case history.",
        "Validate no cross-account data leakage in multi-tenant scenarios.",
      ],
      example: {
        title: "Enterprise SaaS — case open in 90 seconds",
        body: "Tier-1 customer with 6 prior cases. Summary highlighted open billing dispute and last exec escalation — new agent avoided tone-deaf response. CSAT saved on reactive call.",
      },
    }),
    buildGuideSection({
      id: "response-drafting",
      number: "3.2",
      title: "Response drafting",
      subtitle:
        "Now Assist composing outbound communication from case context and tone guidelines",
      takeaway:
        "Draft skills produce email, portal reply, or chat response from case facts and brand tone parameters — human sends after review.",
      why: "CSM throughput is communication-bound. Drafting is the killer app if tone is controlled.",
      paragraphs: [
        [
          s("Configure "),
          x("tone guidelines", "Formal, empathetic, concise — per brand and channel."),
          s(" and prohibited phrases (legal liability, competitor mentions)."),
        ],
        [
          s("Include case resolution steps and KB links — grounded citations reduce escalations."),
        ],
        [
          s("Track edit distance by agent tier — juniors benefit most; tune training accordingly."),
        ],
      ],
      workflowSteps: [
        "Collect brand voice examples — feed into skill tuning.",
        "Enable draft for email channel first; chat second.",
        "Supervisor spot-check 20 outbound emails weekly in month one.",
      ],
      example: {
        title: "B2B support — 22% more cases per agent",
        body: "Draft assist on email channel cut composition time. Seniors edited 10%; juniors 35%. Training focused on edit patterns from seniors. Throughput rose without CSAT drop.",
      },
    }),
    buildGuideSection({
      id: "hr-case-assist",
      number: "3.3",
      title: "HR case assist",
      subtitle:
        "Employee experience use cases and special data handling considerations",
      takeaway:
        "HR skills handle sensitive life events — benefits, payroll, conduct — with stricter field exclusion, legal review, and often no external LLM experimentation outside platform controls.",
      why: "HR is highest-risk domain for GenAI. Architects win trust by designing restrictions first.",
      paragraphs: [
        [
          s("Use cases: case summarisation for HR agents, policy-aligned drafts, onboarding checklists — not performance judgment or medical advice."),
        ],
        [
          s("Exclude: disciplinary details, medical notes, compensation fields from GenAI context unless legal approves."),
        ],
        [
          s("Coordinate with works council / union on augmentation messaging — Ch 1 pattern applies stronger here."),
        ],
      ],
      workflowSteps: [
        "Legal review list of prohibited topics for HR assist.",
        "Field-level exclusion on HR case tables.",
        "Human approval mandatory on all employee-facing HR text.",
      ],
      example: {
        title: "HRSD — parental leave cases",
        body: "Assist summarised case and drafted policy-cited responses from approved KB only. Medical details in secure attachment excluded from context. Zero PII leakage in 6-month audit sample.",
      },
    }),
    buildGuideSection({
      id: "self-service-deflection",
      number: "3.4",
      title: "Self-service deflection",
      subtitle:
        "How Now Assist powers the portal experience to contain cases before creation",
      takeaway:
        "Employee and customer portals use Now Assist + AI Search to answer in natural language — creating cases only when intent unresolved or policy requires human.",
      why: "Deflection is a portal design problem dressed as AI. Now Assist is the language layer on search.",
      paragraphs: [
        [
          s("Flow: employee asks question → retrieval → grounded answer → 'did this help?' → case creation on no."),
        ],
        [
          s("Measure deflection with record truth — not chat session end."),
        ],
        [
          s("Stale HR/policy KB kills deflection — content ops before model ops."),
        ],
      ],
      workflowSteps: [
        "Identify top 20 HR/CSM portal queries.",
        "Ensure AI Search returns correct articles.",
        "Enable conversational entry with Now Assist answers.",
        "Track case creation rate before/after.",
      ],
      example: {
        title: "Employee portal — benefits questions",
        body: "41% of benefits cases were password and FAQ variants. Portal assist + KB cleanup deflected 33% before case create. Remaining cases had higher complexity — appropriate escalation.",
      },
    }),
    buildGuideSection({
      id: "agent-coaching",
      number: "3.5",
      title: "Agent coaching",
      subtitle:
        "How GenAI surfaces recommended next steps and knowledge articles in real time",
      takeaway:
        "Coaching skills suggest next best action — check entitlement, offer refund policy, escalate to tier 2 — based on case state and playbooks, not generic advice.",
      why: "Reduces variance between junior and senior agents. Popular in BPO and high-volume CSM.",
      paragraphs: [
        [
          s("Ground coaching in "),
          x("playbooks", "Structured decision trees encoded as knowledge or skill logic."),
          s(" — avoid free-form 'you should' without policy link."),
        ],
        [
          s("Show article links alongside suggestion — agent learns while working."),
        ],
        [
          s("Disable coaching on legal/compliance cases if policy requires specialist-only handling."),
        ],
      ],
      workflowSteps: [
        "Encode top 10 case types as playbook articles.",
        "Enable coaching skill with playbook retrieval.",
        "Measure suggestion acceptance rate.",
      ],
      example: {
        title: "Telco BPO — coaching on billing disputes",
        body: "Coaching suggested credit policy check before escalation. Junior agents followed playbook 2x more often. Escalation rate down 14% on billing category.",
      },
    }),
    buildGuideSection({
      id: "sentiment-analysis",
      number: "3.6",
      title: "Sentiment analysis integration",
      subtitle:
        "Using GenAI to flag emotional signals in case communication",
      takeaway:
        "Sentiment signals — frustration, urgency, churn risk — flag cases for priority handling or supervisor review; not for automated punitive actions.",
      why: "Revenue-at-risk accounts need human judgment; sentiment is a triage input.",
      paragraphs: [
        [
          s("GenAI can infer sentiment from customer messages and case history — surface as field or banner: 'high frustration detected.'"),
        ],
        [
          s("Ethical guardrail: do not use sentiment to deny service or auto-close."),
        ],
        [
          s("Combine with SLA and account tier for routing — sentiment alone is noisy."),
        ],
      ],
      workflowSteps: [
        "Define thresholds for supervisor alert.",
        "Test on historical escalated cases — recall vs false positive.",
        "Train agents on how to respond to sentiment flags.",
      ],
      example: {
        title: "Churn risk — exec outreach trigger",
        body: "Sentiment + enterprise tier triggered supervisor playbook on renewal case. Proactive exec call retained $2.1M account. Flag was input, not auto-decision.",
      },
    }),
    buildGuideSection({
      id: "persona-setup",
      number: "3.7",
      title: "Configuration and persona setup",
      subtitle:
        "Adapting Now Assist tone and scope for HR vs customer service contexts",
      takeaway:
        "Personas bundle tone, vocabulary, allowed topics, and channel defaults — HR empathetic and policy-cite; CSM brand-aligned and commercial-aware.",
      why: "One global persona fails regulated HR and flashy consumer brand alike.",
      paragraphs: [
        [
          s("HR persona: formal, inclusive language, mandatory KB citation, no speculation on individual compensation."),
        ],
        [
          s("CSM persona: brand voice guide, empathy without over-apology, product terminology glossary."),
        ],
        [
          s("Separate personas per region/language where local policy differs."),
        ],
      ],
      workflowSteps: [
        "Workshop with HR comms and CSM marketing on tone docs.",
        "Configure persona parameters per product.",
        "UAT with native speakers for non-English locales.",
      ],
      example: {
        title: "Dual persona — same platform, different guardrails",
        body: "Multinational configured HR persona with strict citation mode and CSM persona with promotional tone limits. Shared platform team, separate skill owners. Audit passed for HR; brand team approved CSM drafts.",
      },
    }),
    buildGuideSection({
      id: "hrsd-transformation-case",
      number: "3.8",
      title: "Real use case: HR service delivery transformation",
      subtitle:
        "What changes, what stays, and what the numbers show",
      takeaway:
        "HRSD transformation: assist augments case handling and portal deflection; humans retain decisions on conduct, medical accommodation, and compensation. Metrics on case duration and employee satisfaction.",
      why: "HR leaders need realistic narrative — not 'AI replaces HR business partners.'",
      paragraphs: [
        [
          s("Changed: faster case summaries, policy-aligned drafts, portal deflection on FAQs, coaching on routine cases."),
        ],
        [
          s("Unchanged: human decision on accommodations, investigations, complex grievances."),
        ],
        [
          s("Numbers: case handle time −15%, employee CSAT +8 points on routine inquiries, zero unsupervised external sends."),
        ],
      ],
      workflowSteps: [
        "Start with top 5 routine case types only.",
        "Legal sign-off on context exclusions.",
        "12-week pilot on one country before global.",
      ],
      example: {
        title: "15,000-employee manufacturer — HRSD pilot",
        body: "Germany-only pilot: benefits and leave cases. Assist + portal deflection. Works council approved augmentation framing. Expanded to UK after DPIA. HR business partners spent saved time on complex employee relations — not headcount reduction.",
      },
    }),
  ],
};
