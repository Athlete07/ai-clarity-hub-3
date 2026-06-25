import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_WHAT_SERVICENOW_AI_IS: GuideConcept = {
  number: 1,
  title: "What ServiceNow AI Actually Is",
  subtitle:
    "ServiceNow as an AI platform — not a bolt-on chatbot — and why that distinction changes every design decision you make",
  sections: [
    buildGuideSection({
      id: "ai-platform-not-feature",
      number: "1.1",
      title: "ServiceNow as an AI platform, not an AI feature",
      subtitle:
        "Why treating AI as a checkbox on a RFP versus a platform layer determines whether projects survive production",
      takeaway:
        "ServiceNow AI is not a single SKU you turn on — it is intelligence woven through data, workflows, search, agents, and automation on the Now Platform. Architects design fabrics; configurators toggle features.",
      why: "Interviewers and enterprise buyers distinguish practitioners who map capabilities to problems from those who say 'we enabled Now Assist.' This section is that distinction.",
      paragraphs: [
        [
          s("A "),
          x(
            "feature mindset",
            "Enable Now Assist, add a Virtual Agent topic, demo in a sprint review — then wonder why adoption flatlines.",
          ),
          s(
            " asks: what did we turn on? A platform mindset asks: where does work enter, what data does the model see, who approves actions, and how do we measure containment without breaking trust?",
          ),
        ],
        [
          s("On ServiceNow, AI consumes the same "),
          x(
            "system of record",
            "Incidents, cases, HR profiles, CMDB, knowledge articles — the tables and workflows your organisation already runs on.",
          ),
          s(
            " as your operational processes. That is the moat: the model does not live in a separate SaaS chat window disconnected from assignment rules, SLAs, and audit trails.",
          ),
        ],
        [
          s("POC implication on PDI: your first success is not a flashy demo — it is one workflow where AI reads platform data, proposes or executes a governed action, and logs evidence on the record. That is platform AI."),
        ],
      ],
      workflowSteps: [
        "List three workflows your org already runs on ServiceNow (incident, case, onboarding).",
        "For each, mark: data source, decision point, human approval gate, metric.",
        "Pick one where AI augments a decision — not replaces the entire process on day one.",
      ],
      example: {
        title: "Global bank — feature rollout vs platform design",
        body: "Team A enabled Now Assist for agents and reported low usage. Team B mapped incident resolution: AI Search for similar incidents, Predictive Intelligence for assignment, Now Assist for work notes, Flow for escalation — all on one record. Team B hit 18% handle-time reduction in 90 days because AI was embedded in the path of work, not parked in a side panel.",
      },
    }),
    buildGuideSection({
      id: "now-platform-ai-fabric",
      number: "1.2",
      title: "The Now Platform as an AI fabric",
      subtitle:
        "How data, workflows, and intelligence unify in a single system of record — and what that means for architecture",
      takeaway:
        "The Now Platform is the integration layer: tables hold truth, workflows enforce policy, AI layers read and act within those boundaries. You architect loops, not islands.",
      why: "Standalone AI tools force brittle sync jobs and duplicate governance. ServiceNow practitioners who understand the fabric win integration and security conversations.",
      paragraphs: [
        [
          s("Think of three planes: "),
          x("data plane", "Tables, CMDB, knowledge, attachments — what exists."),
          s(", "),
          x("process plane", "Flows, business rules, approvals — what must happen."),
          s(", and "),
          x("intelligence plane", "Predictive models, semantic search, LLM skills, agents — what suggests or executes next."),
          s(". AI on ServiceNow only works when all three planes are intentional."),
        ],
        [
          s("The fabric advantage shows up in "),
          x(
            "context assembly",
            "AI pulls record fields, related lists, knowledge, and user role — without custom ETL for every use case.",
          ),
          s(
            ". A senior architect designs which fields are exposed to which capability — over-exposure creates leakage risk; under-exposure creates useless summaries.",
          ),
        ],
        [
          s("On PDI, sketch your fabric before configuring: draw the incident table at the centre, arrows to PI, AI Search, Now Assist, Virtual Agent, and Flow actions. If an arrow has no owner, your POC will stall."),
        ],
      ],
      workflowSteps: [
        "Open PDI → System Definition → Tables for your target process.",
        "Document 10 fields the AI must read and 5 it must never write without approval.",
        "Map one Flow Designer action that calls an AI capability and writes back to the record.",
      ],
      example: {
        title: "ITSM fabric — incident resolution loop",
        body: "Caller opens Virtual Agent → creates incident → Predictive Intelligence suggests assignment group → agent lands on form with Now Assist summary of similar incidents (AI Search) → agent approves suggested resolution → Flow updates CMDB if CI-related. Each step uses the same incident sys_id. No export to external chat.",
      },
    }),
    buildGuideSection({
      id: "gen-predictive-automation",
      number: "1.3",
      title: "Generative AI vs Predictive AI vs Automation",
      subtitle:
        "Where each plays, what each costs, and when each is right — the decision triad every ServiceNow AI architect memorises",
      takeaway:
        "Automation follows rules. Predictive AI scores and classifies from historical data. Generative AI produces language and plans. Wrong-layer choices waste money and create compliance nightmares.",
      why: "This triad appears in certification exams, architecture reviews, and vendor comparisons. Fluency here is non-negotiable.",
      paragraphs: [
        [
          x("Automation", "Flow Designer, business rules, RPA-style scripts — deterministic if-then logic."),
          s(" excels when policy is explicit: route P1 to major incident, close duplicate after merge."),
        ],
        [
          x("Predictive Intelligence", "Native ML for classification, similarity, and routing from labelled history."),
          s(" excels when you have volume and labels: category, assignment group, priority suggestion."),
        ],
        [
          x("Generative AI", "Now Assist, LLM skills, agent reasoning — language, summarisation, drafting, multi-step plans."),
          s(
            " excels when judgment and articulation matter: summarise a 40-comment thread, draft comms, propose resolution steps. It costs more per transaction and needs stronger governance.",
          ),
        ],
      ],
      workflowSteps: [
        "Take one process step — write whether it needs rules, scores, or generated language.",
        "If you wrote 'all three,' sequence them: PI route → GenAI draft → Flow execute on approval.",
        "Estimate: PI trains on historical data; GenAI bills per interaction — note both in business case.",
      ],
      example: {
        title: "HR case routing — triad in practice",
        body: "Employee asks about parental leave. Virtual Agent (GenAI) clarifies intent. PI classifies case type from past cases. Flow assigns to correct HR COE. Now Assist drafts policy-aligned reply from knowledge articles. Human approves before send. Removing any layer breaks either accuracy, speed, or compliance.",
      },
    }),
    buildGuideSection({
      id: "how-servicenow-trains-models",
      number: "1.4",
      title: "How ServiceNow trains and runs its models",
      subtitle:
        "The relationship between your instance data and the models that serve you — without mysticism",
      takeaway:
        "Shared foundation models plus platform orchestration plus your configured data scope — not 'ServiceNow trains on your tickets and sells them to competitors.'",
      why: "Security reviewers and legal ask this first. A crisp answer unlocks POC approval.",
      paragraphs: [
        [
          s("ServiceNow delivers "),
          x(
            "managed model services",
            "Foundation LLMs and specialised models operated by ServiceNow with platform guardrails — you configure skills, prompts, and data access.",
          ),
          s(
            ". Predictive Intelligence trains on your instance's labelled data for your predictions — scoped to your tenant's ML definitions.",
          ),
        ],
        [
          s("Your role: define "),
          x(
            "training datasets",
            "For PI — historical records with outcome fields; quality beats quantity.",
          ),
          s(", tune thresholds, and monitor drift. For GenAI — craft skills, knowledge sources, and agent tools rather than retraining foundation weights."),
        ],
        [
          s("Interview sound bite: 'We do not fine-tune GPT on production HR data in a shadow project — we use ServiceNow's governed skills and PI models with ACL-respecting retrieval.'"),
        ],
      ],
      workflowSteps: [
        "On PDI, open Predictive Intelligence → Solutions — inspect one trained solution's fields.",
        "Open Now Assist admin — note which knowledge sources are in scope for a skill.",
        "Document for security: customer data isolation, retention, and admin controls.",
      ],
      example: {
        title: "PI retrain after process change",
        body: "A retailer changed incident categories. PI assignment accuracy dropped from 82% to 61% over six weeks. Root cause: new categories with few labels. Fix: interim rule-based routing for new categories, retrain PI after 500 labelled examples, then retire the rule. Teaches that ML is not set-and-forget.",
      },
    }),
    buildGuideSection({
      id: "trust-data-model",
      number: "1.5",
      title: "The trust and data model",
      subtitle:
        "How ServiceNow keeps customer data isolated from shared model training — the answer your CISO needs",
      takeaway:
        "Access control, instance isolation, and product-specific data handling — AI inherits ServiceNow security, and still requires your ACL and field-level design discipline.",
      why: "POCs die in InfoSec review without this narrative. Architects who speak trust ship; those who speak only features stall.",
      paragraphs: [
        [
          s("ServiceNow AI capabilities respect "),
          x(
            "ACLs and domain separation",
            "Users and AI tools only see records and fields their role allows — same as the UI.",
          ),
          s(
            ". GenAI retrieval must be configured to trusted sources — not 'index everything.'",
          ),
        ],
        [
          s("Trust also means "),
          x(
            "human-in-the-loop",
            "High-impact writes — close incident, change salary, execute change — require explicit approval unless policy allows autonomy.",
          ),
          s(
            ". Agentic AI amplifies this: more autonomy demands more logging and rollback.",
          ),
        ],
        [
          s("Document a "),
          x("data classification matrix", "Public knowledge vs internal vs restricted fields — which AI features may touch each."),
          s(" before production. Interviewers love candidates who bring this unprompted."),
        ],
      ],
      workflowSteps: [
        "Export ACL model for one critical table — verify AI service account roles.",
        "List fields marked restricted — confirm excluded from AI Search indexes.",
        "Define approval required vs auto-execute for each AI action in your design.",
      ],
      artifact: {
        id: "ai-trust-checklist",
        title: "ServiceNow AI trust checklist (pre-POC)",
        description: "Paste into architecture deck or security questionnaire.",
        content: `## Data scope
- [ ] Knowledge sources indexed are approved and ACL-filtered
- [ ] Restricted fields excluded from GenAI context
- [ ] Cross-domain data verified for agent personas

## Actions
- [ ] Write actions mapped to approval policy
- [ ] Audit fields populated on AI-initiated updates
- [ ] Rollback path documented for agent errors

## Compliance
- [ ] Retention aligned with GDPR / local HR rules
- [ ] EU AI Act risk tier assessed for autonomous actions
- [ ] Logging sufficient for forensic review`,
      },
    }),
    buildGuideSection({
      id: "servicenow-vs-standalone-ai",
      number: "1.6",
      title: "ServiceNow AI vs standalone AI tools",
      subtitle:
        "The integration advantage that justifies the platform approach — and when standalone still wins",
      takeaway:
        "ServiceNow AI wins when the workflow, record, and audit trail must stay on-platform. Standalone LLMs win for greenfield analysis outside ITSM — but pay integration tax returning to the system of record.",
      why: "Stakeholders ask 'why not just ChatGPT Enterprise?' This is your answer.",
      paragraphs: [
        [
          s("Standalone tools offer flexible chat and fast experimentation. They lose on "),
          x(
            "workflow closure",
            "Creating the ticket, assigning, SLA, approval, CMDB update — the last mile enterprise care about.",
          ),
          s(" unless you build custom integrations with ongoing maintenance."),
        ],
        [
          s("ServiceNow AI wins when: deflection must create real records; agents work inside the console; compliance requires field-level ACL on AI context; you need one admin model for IT, HR, and CSM."),
        ],
        [
          s("Hybrid is valid: external LLM for R&D, ServiceNow for production paths — but designate ServiceNow as system of record. Architects prevent two truths for the same incident."),
        ],
      ],
      workflowSteps: [
        "For your use case, list actions that must end on a ServiceNow record.",
        "If >80% of value is off-platform chat only, question ServiceNow AI scope.",
        "If value is resolution, routing, or audit — platform AI is the default.",
      ],
      example: {
        title: "Why the COO killed the shadow ChatGPT pilot",
        body: "Support team loved a standalone bot for fast answers. Compliance found PII in prompts with no ticket linkage. Escalations still required manual incident creation. ServiceNow Virtual Agent + Now Assist replaced the pilot: same UX gain, full ACL, automatic incident on unresolved intents. Integration advantage was audit, not chat quality.",
      },
    }),
    buildGuideSection({
      id: "now-intelligence-lineage",
      number: "1.7",
      title: "The Now Intelligence lineage",
      subtitle:
        "From Performance Analytics to Predictive Intelligence to Now Assist — the evolution arc that explains the product map",
      takeaway:
        "ServiceNow intelligence evolved from descriptive analytics → predictive ML on records → generative assistance and agents. Each generation builds on the same data foundation.",
      why: "Senior hires are expected to know history — it explains why PI and Now Assist coexist and where Investment Protection applies.",
      paragraphs: [
        [
          x("Performance Analytics", "Dashboards and KPIs — what happened."),
          s(" → "),
          x("Predictive Intelligence", "ML on historical records — what is likely."),
          s(" → "),
          x("Now Assist + AI Agents", "Generative and agentic — what to say and do next."),
          s(". Skipping the lineage leads to duplicate analytics projects outside the platform."),
        ],
        [
          s("Migration conversations: customers with mature PI should extend, not replace, with GenAI summaries on top of PI routing — not rip out ML that already works."),
        ],
        [
          s("Future releases will stack more agentic capability on this lineage. Your mental model: each layer reads the same records, adds a different kind of value."),
        ],
      ],
      workflowSteps: [
        "Inventory what your org already owns: PA dashboards, PI solutions, Now Assist SKUs.",
        "Mark gaps: missing labels for PI, missing knowledge hygiene for GenAI.",
        "Propose roadmap: fix data → PI → GenAI → agents — not GenAI first on dirty data.",
      ],
      example: {
        title: "Mature ITSM shop — layering GenAI on PI",
        body: "Ten PI solutions live in production with 78% routing accuracy. Now Assist deployment added agent summaries citing similar incidents — without retraining PI. Handle time dropped 12% because agents trusted PI routing and spent less time searching. Lineage mattered: GenAI did not redo classification.",
      },
    }),
    buildGuideSection({
      id: "why-ai-projects-fail",
      number: "1.8",
      title: "Why most ServiceNow AI projects fail",
      subtitle:
        "Five root causes and the mindset that avoids them — the chapter-one exam question",
      takeaway:
        "Failures cluster around dirty data, wrong capability choice, no adoption design, weak governance, and demo-driven scope. Success looks boring: one workflow, measured, governed, iterated.",
      why: "Interview question: 'Tell me about a failed AI project.' Answer with these five causes and you sound like you've led one — because this pattern is universal.",
      paragraphs: [
        [
          s("Root cause 1 — "),
          x("data unready", "Stale knowledge, missing categories, no labels for PI."),
          s(". Root cause 2 — "),
          x("wrong AI layer", "GenAI where rules suffice; PI where labels don't exist."),
          s("."),
        ],
        [
          s("Root cause 3 — "),
          x("adoption afterthought", "Agents not trained; Now Assist buried in UI; no KPI."),
          s(". Root cause 4 — "),
          x("governance gap", "Autonomous actions without approval or logging."),
          s(". Root cause 5 — "),
          x("demo scope", "Boil the ocean in POC; nothing reaches production."),
          s("."),
        ],
        [
          s("Mindset fix: "),
          x(
            "production-shaped POC",
            "One team, one process, baseline metric, 6-week iteration — same security as prod on PDI.",
          ),
          s(". Architects propose this; feature collectors propose 'enable all Now Assist modules.'"),
        ],
      ],
      workflowSteps: [
        "Score your initiative 1–5 on each root cause — any 4+ is a stop-ship until fixed.",
        "Rewrite POC charter as one workflow + one metric + one governance gate.",
        "Schedule week-6 review with business owner — not just technical demo.",
      ],
      example: {
        title: "Failed 'AI everywhere' program — recovery path",
        body: "A manufacturer enabled Now Assist, Virtual Agent, and Document Intelligence simultaneously across IT and HR. Knowledge was 40% outdated. Containment looked good in demo; production deflection was 8%. Recovery: pause HR, 8-week knowledge cleanup, IT-only incident deflection with measured containment, PI retrain, then expand. Lesson: sequence beats parallelism.",
      },
    }),
  ],
};
