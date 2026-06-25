import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_GENAI_SHIFT: GuideConcept = {
  number: 4,
  title: "The Generative AI Shift in Service Management",
  subtitle:
    "What changed in enterprise service delivery, how ServiceNow positioned GenAI, and what practitioners must govern",
  sections: [
    buildGuideSection({
      id: "gpt4-inflection",
      number: "4.1",
      title: "What changed with GPT-4 class models",
      subtitle:
        "Why 2023 was a genuine inflection point for enterprise software — not marketing hype alone",
      takeaway:
        "GPT-4-class models made fluent, instruction-following language generation reliable enough for agent-assist and employee self-service inside operational tools — not just marketing copy experiments.",
      why: "Interviewers ask 'why now?' — this is the credible answer tied to ServiceNow's product bet.",
      paragraphs: [
        [
          s("Before: chatbots needed brittle intent libraries. After: "),
          x(
            "grounded generation",
            "LLM + retrieval from knowledge and records — handles phrasing variety.",
          ),
          s(" reduced authoring cost and improved coverage for long-tail questions."),
        ],
        [
          s("Enterprise constraint shifted from 'can it talk?' to 'can it stay on policy, respect ACLs, and log actions?' — ServiceNow's platform play."),
        ],
        [
          s("Practitioner implication: your job is grounding and governance, not training foundation models."),
        ],
      ],
      workflowSteps: [
        "Compare pre-2023 VA topic count vs current GenAI-assisted coverage on PDI.",
        "List utterances that failed NLU before — retest with grounded GenAI.",
        "Document policy guardrails that replaced thousand-topic trees.",
      ],
      example: {
        title: "Long-tail HR questions",
        body: "Previously 200+ VA topics for benefits variants. Grounded GenAI over 400 curated articles handles 78% of phrasing variations with one domain policy. Topic maintenance dropped 60%; governance moved to KB curation.",
      },
    }),
    buildGuideSection({
      id: "servicenow-genai-position",
      number: "4.2",
      title: "How ServiceNow positioned GenAI",
      subtitle:
        "The strategic bet on AI-augmented workflows, not AI replacement of ITSM",
      takeaway:
        "ServiceNow markets augmentation: agents work faster, employees self-serve better, builders ship quicker — on the same records and processes. Replacement narratives break ITSM reality.",
      why: "Aligning with vendor strategy helps you pass partner/architect conversations and design viable roadmaps.",
      paragraphs: [
        [
          s("Now Assist embeds in "),
          x("existing consoles", "Where agents already work — not a separate chat destination."),
          s(". Virtual Agent meets employees in portal. Builders get assist in Flow and development — reducing time-to-value for automation."),
        ],
        [
          s("AI Agents extend toward autonomous work — still instrumented through platform tools and policies."),
        ],
        [
          s("Positioning for your org: 'copilot for service teams' plus measured deflection — not 'lights-out IT.'"),
        ],
      ],
      workflowSteps: [
        "Rewrite project charter from 'replace L1' to 'augment L1/L2 with measured deflection.'",
        "Set agent productivity KPIs alongside containment.",
        "Engage union/work council early where augmentation messaging matters.",
      ],
      example: {
        title: "Union-sensitive rollout",
        body: "Manufacturing firm framed Now Assist as 'remove copy-paste, not headcount' with transparent metrics. Agents co-designed templates. Union sign-off obtained. Productivity gain reinvested in cross-training — project survived politics that killed a prior RPA initiative.",
      },
    }),
    buildGuideSection({
      id: "new-user-expectation",
      number: "4.3",
      title: "The new user expectation",
      subtitle:
        "Why end users now expect natural language everywhere in enterprise software",
      takeaway:
        "Consumer GenAI raised the bar — employees expect to ask questions plainly and get useful answers in the portal, mobile, and agent chat. Keyword forms feel broken.",
      why: "UX expectations drive Virtual Agent and AI Search funding — design for conversational entry with record-backed outcomes.",
      paragraphs: [
        [
          s("Expectation gap: users compare enterprise portal to ChatGPT speed — without seeing your ACL and audit constraints."),
        ],
        [
          s("Close the gap with fast retrieval, honest 'I don't know' paths, and seamless human handoff — not fake confidence."),
        ],
        [
          s("Measure "),
          x("user effort score", "Did the user resolve in one session without repeat contact?"),
          s(" not just bot session length."),
        ],
      ],
      workflowSteps: [
        "User test five natural language queries on your portal — record failure modes.",
        "Add conversational entry where search box lives.",
        "Publish expected response times and escalation paths.",
      ],
      example: {
        title: "Mobile employee app — NL entry",
        body: "Replacing category trees with 'How can I help?' increased engagement 2.3x. Containment rose only after AI Search index improved — expectation met only when answers were correct.",
      },
    }),
    buildGuideSection({
      id: "genai-ticket-volumes",
      number: "4.4",
      title: "What GenAI does to ticket volumes",
      subtitle:
        "Deflection economics and realistic containment numbers — planning assumptions that survive finance review",
      takeaway:
        "GenAI deflects tickets when self-service actually resolves — not when chat ends. Realistic L1 containment often lands 25–45% after knowledge hygiene; higher claims usually exclude failures or lack audit.",
      why: "Overpromised deflection destroys credibility. Architects bring ranges and assumptions.",
      paragraphs: [
        [
          s("Deflection mechanisms: answered question (no ticket), automated fix (catalog/script), duplicate merge (PI), wrong-path prevention (better search)."),
        ],
        [
          s("GenAI increases "),
          x("attempted self-service", "More users try before calling — can spike tickets if answers wrong."),
          s(" — monitor ticket quality and reopen rates alongside volume."),
        ],
        [
          s("Finance model: volume reduction × cost per ticket + agent time saved − platform AI cost."),
        ],
      ],
      workflowSteps: [
        "Baseline ticket volume by category for 90 days.",
        "Set containment target per category — not one global number.",
        "Track false deflection (reopen within 72h) as counter-metric.",
      ],
      example: {
        title: "Realistic business case — 38% L1 containment",
        body: "ITSM program targeted password, VPN, and software request categories only — 45% of L1 volume. Achieved 38% containment at 90 days. Other categories flat until knowledge phase two. CFO accepted because assumptions were category-specific and measured.",
      },
    }),
    buildGuideSection({
      id: "genai-agent-productivity",
      number: "4.5",
      title: "What GenAI does to agent productivity",
      subtitle:
        "Resolution time, handle time, and satisfaction metrics from real deployment patterns",
      takeaway:
        "Agent-assist GenAI typically impacts handle time and note quality first; MTTR follows when search and routing are already solid. CSAT rises when customers get faster, clearer comms.",
      why: "Most enterprise ROI is agent productivity — not full deflection. Know the metrics.",
      paragraphs: [
        [
          s("Common wins: faster work notes (−20–40% time), quicker context on reopen (−minutes per ticket), better customer updates (fewer clarifications)."),
        ],
        [
          s("Failures: agents don't trust summaries → ignore Now Assist. Fix with citations, editable drafts, and supervisor champions."),
        ],
        [
          s("Measure adoption: % tickets where assist used, edit rate, time saved per use."),
        ],
      ],
      workflowSteps: [
        "Instrument assist usage on PDI/production.",
        "Weekly office hours with top agents — refine templates.",
        "Correlate assist usage with handle time by team.",
      ],
      example: {
        title: "BPO support floor — adoption curve",
        body: "Week 1: 12% assist usage, flat handle time. Week 8: 71% usage after champions and citation UI, 18% handle time reduction. MTTR improved month 4 after PI routing project landed — sequencing mattered.",
      },
    }),
    buildGuideSection({
      id: "risk-side",
      number: "4.6",
      title: "The risk side",
      subtitle:
        "Hallucination, over-reliance, data leakage, and the governance that prevents them",
      takeaway:
        "GenAI risks are real but manageable: ground answers, require human send on external comms, ACL-scope retrieval, log prompts/responses where policy allows, and train agents to verify — not blindly paste.",
      why: "Governance questions dominate enterprise adoption — architects own the control design.",
      paragraphs: [
        [
          x("Hallucination", "Confident wrong answers — mitigate with retrieval, citations, confidence thresholds."),
          s(". "),
          x("Over-reliance", "Agents skip thinking — mitigate with training and mandatory review on high-risk."),
          s(". "),
          x("Data leakage", "Sensitive fields in context — mitigate with field exclusion and DLP review."),
        ],
        [
          s("Agentic risk adds wrongful writes — approval gates and tool allowlists are mandatory."),
        ],
        [
          s("Run periodic red-team: ask for other users' data, policy violations, jailbreaks — fix config not just training."),
        ],
      ],
      workflowSteps: [
        "Define high-risk categories requiring human approval for AI text.",
        "Exclude PII fields from search indexes and skills.",
        "Quarterly red-team with InfoSec — document findings and fixes.",
      ],
      artifact: {
        id: "genai-governance-one-pager",
        title: "GenAI governance one-pager (steering committee)",
        description: "Executive summary of controls — attach to project charter.",
        content: `## We allow
- Grounded answers from approved knowledge
- Draft work notes and internal summaries
- Read-only agents on production data (phase 1)

## We require approval for
- Customer-facing emails and portal posts
- Any autonomous record write
- Cross-domain data access

## We never do
- Index restricted HR/legal fields
- Send GenAI output external without human review (phase 1)
- Disable audit logging for AI actions`,
      },
    }),
    buildGuideSection({
      id: "regulatory-compliance",
      number: "4.7",
      title: "Regulatory and compliance implications",
      subtitle:
        "GDPR, EU AI Act, and what they mean for ServiceNow AI deployments",
      takeaway:
        "Treat employee and customer data in AI context as processing with purpose limitation, retention limits, and documentation. High-risk autonomous decisions may need impact assessments under EU AI Act — design human oversight early.",
      why: "Legal stalls unsigned POCs. Proactive compliance framing accelerates PDI access.",
      paragraphs: [
        [
          s("GDPR: lawful basis for processing in AI features, data minimisation in prompts, right-to-erasure impact on logs and indexes."),
        ],
        [
          s("EU AI Act: classify use cases — many internal assist features differ from autonomous customer-facing eligibility decisions. Document risk tier and controls."),
        ],
        [
          s("Sector rules (HIPAA, FINRA, etc.) may restrict what can enter GenAI context — map before build."),
        ],
      ],
      workflowSteps: [
        "Involve DPO/legal in week 1 — not week 10.",
        "Document processing activities for AI Search indexes and Now Assist.",
        "Maintain model/skill change log for audit.",
      ],
      example: {
        title: "EU subsidiary — AI Act readiness",
        body: "Global firm deployed Now Assist in US first. EU rollout paused for DPIA on employee-facing VA handling payroll questions. Outcome: restricted topics to non-decision info, human handoff for case creation, EU data residency confirmed with ServiceNow — 6-week delay avoided larger fine risk.",
      },
    }),
    buildGuideSection({
      id: "practitioner-position",
      number: "4.8",
      title: "The practitioner's position",
      subtitle:
        "How to think about your own role as AI automates the routine — career lens for freshers to architects",
      takeaway:
        "Value shifts from manual ticket processing to workflow design, data hygiene, AI governance, integration architecture, and change leadership — the playbook skills employers will hire for through 2030.",
      why: "Readers of this playbook are investing in career durability — close Chapter 1 with that clarity.",
      paragraphs: [
        [
          s("Freshers: master PDI, Flow, AI Search basics, and one end-to-end POC — interview differentiator."),
        ],
        [
          s("Mid-career: own PI + Now Assist implementations with metrics — become the 'AI on ServiceNow' person."),
        ],
        [
          s("Architects: ecosystem maps, trust models, agent governance, and cross-product roadmaps — lead enterprise bets."),
        ],
        [
          s("Routine work automates; "),
          x(
            "judgment under policy",
            "Designing what AI may do, proving it safe, and improving it from telemetry.",
          ),
          s(" does not. That is your moat."),
        ],
      ],
      workflowSteps: [
        "Pick one skill to demo on PDI in 30 days (Flow+PI or Now Assist skill).",
        "Publish internal lunch-and-learn using Chapter 1 frameworks.",
        "Track releases — ServiceNow AI ships quarterly; schedule learning blocks.",
      ],
      example: {
        title: "Admin to AI architect — 24-month path",
        body: "ServiceNow admin completed this playbook sequence, shipped PI routing POC, led Now Assist rollout, then designed read-only service agent. Promoted to platform architect — hiring manager cited 'ecosystem thinking, not feature certs' as deciding factor.",
      },
    }),
  ],
};
