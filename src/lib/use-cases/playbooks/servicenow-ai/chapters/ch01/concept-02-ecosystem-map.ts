import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_ECOSYSTEM_MAP: GuideConcept = {
  number: 2,
  title: "The Now Platform AI Ecosystem Map",
  subtitle:
    "Now Assist, Predictive Intelligence, AI Search, Virtual Agent, AI Agents, and more — where each lives and what problem each owns",
  sections: [
    buildGuideSection({
      id: "now-assist",
      number: "2.1",
      title: "Now Assist — the generative AI product layer",
      subtitle:
        "What it covers across ITSM, CSM, HR, and development — and what it does not replace",
      takeaway:
        "Now Assist is the GenAI experience layer for agents, employees, and builders — summaries, drafts, code assistance, and in-flow suggestions tied to ServiceNow records and knowledge.",
      why: "Most market confusion is 'we bought Now Assist — are we done?' No. Now Assist is one layer in the ecosystem map.",
      paragraphs: [
        [
          s("Now Assist surfaces in the "),
          x("agent workspace", "ITSM, CSM, HR agent consoles — contextual suggestions on the record."),
          s(", "),
          x("employee experience", "Portals and mobile — self-service assistance."),
          s(", and "),
          x("creator tools", "Flow Designer, App Engine, code — builder productivity."),
          s(". SKU and scope vary by product — verify entitlements on your instance."),
        ],
        [
          s("It does not replace PI for routing, AI Search index configuration, or Flow for deterministic automation. It augments human and employee actions with language and reasoning."),
        ],
        [
          s("POC tip: start with one Now Assist skill tied to approved knowledge — measure edit distance and time saved on work notes, not vanity chat volume."),
        ],
      ],
      workflowSteps: [
        "Identify one agent task with high text workload (work notes, summaries).",
        "Configure Now Assist with scoped knowledge sources on PDI.",
        "Baseline handle time for 20 tickets before/after.",
      ],
      example: {
        title: "CSM — Now Assist on case work notes",
        body: "Agents spent 6 minutes average writing customer-facing updates. Now Assist drafts from case history + KB articles; agents edit 15% of words on average. Handle time dropped to 4.2 minutes. Success required clean KB tagging — not just enabling the toggle.",
      },
    }),
    buildGuideSection({
      id: "predictive-intelligence",
      number: "2.2",
      title: "Predictive Intelligence — the native ML engine",
      subtitle:
        "Classification, similarity, and routing problems PI is purpose-built to solve — and problems it cannot",
      takeaway:
        "Predictive Intelligence trains on your historical ServiceNow data for supervised ML tasks — assignment, category, priority, similar records — with models managed inside the platform.",
      why: "Architects must know when PI beats GenAI (cheaper, deterministic scores) and when labels are insufficient.",
      paragraphs: [
        [
          s("PI needs "),
          x("labelled outcomes", "Historical records where the correct category, group, or resolution is known."),
          s(" and sufficient volume. Typical sweet spot: thousands of examples per class, stable process."),
        ],
        [
          s("PI outputs "),
          x("scores and recommendations", "Probabilities surfaced on forms, usable in Flow conditions."),
          s(" — not prose. Use PI when the decision is 'which bucket' not 'what paragraph.'"),
        ],
        [
          s("Common interview scenario: improve routing without LLM cost — PI first; add Now Assist for narrative after routing is correct."),
        ],
      ],
      workflowSteps: [
        "Export 90 days of incidents with assignment group — check class balance.",
        "Train PI solution on PDI — inspect confusion matrix.",
        "Wire PI output to assignment rule or Flow branch.",
      ],
      example: {
        title: "Hardware vs software incident routing",
        body: "40% misroutes on new laptop rollout. PI retrained on 8k incidents with CI class features. Accuracy 84%. Flow auto-assigns above 0.75 confidence; else queue for human. LLM was never needed for routing — PI was the right layer.",
      },
    }),
    buildGuideSection({
      id: "ai-search",
      number: "2.3",
      title: "AI Search — semantic search across the platform",
      subtitle:
        "How semantic search replaces keyword matching — and why knowledge hygiene is the real project",
      takeaway:
        "AI Search indexes approved content and records for meaning-based retrieval — powering portals, agents, Now Assist, and Virtual Agent with relevant context instead of brittle keyword hits.",
      why: "Bad search undermines every GenAI surface. Search architecture is AI architecture on ServiceNow.",
      paragraphs: [
        [
          s("Keyword search fails on "),
          x("vocabulary mismatch", "User says 'VPN broken'; article titled 'Remote access troubleshooting'."),
          s(". Semantic embeddings close that gap when indexes are curated."),
        ],
        [
          s("You configure "),
          x("search sources", "Knowledge, catalog, cases — with filters, boosting, and ACL respect."),
          s(". Garbage in: outdated articles rank high and poison GenAI answers."),
        ],
        [
          s("POC: measure search success rate and click-through before blaming Now Assist for hallucinations — often the retrieval layer is wrong."),
        ],
      ],
      workflowSteps: [
        "Audit top 20 searched terms — do articles exist and match intent?",
        "Configure AI Search sources on PDI — test semantic queries.",
        "Link search analytics to knowledge retirement workflow.",
      ],
      example: {
        title: "Portal deflection blocked by search",
        body: "Virtual Agent containment stalled at 22%. AI Search returned 2019 printer articles for 'laptop encryption' queries. Knowledge cleanup + reindex lifted relevant retrieval to 78% on test set. Containment rose to 41% without changing the bot script — search was the bottleneck.",
      },
    }),
    buildGuideSection({
      id: "virtual-agent",
      number: "2.4",
      title: "Virtual Agent — conversational AI layer",
      subtitle:
        "Topics, NLU, and GenAI integration — how the conversational layer connects to the rest of the stack",
      takeaway:
        "Virtual Agent is the branded conversational front door — intent routing, scripted flows, live agent handoff, and increasingly GenAI-powered dialog grounded in ServiceNow data.",
      why: "Deflection economics live here — but only when connected to records, search, and escalation paths.",
      paragraphs: [
        [
          s("Classic Virtual Agent uses "),
          x("topics and dialog flows", "Structured conversations with slots, conditions, and actions."),
          s(". Modern releases integrate "),
          x("GenAI dialog", "LLM-grounded responses with guardrails and topic boundaries."),
          s(" for broader utterances without authoring thousands of intents."),
        ],
        [
          s("Every deflected conversation should answer: what record was created or updated? If none, you measured chat success, not operational success."),
        ],
        [
          s("Handoff to live agent must pass context — incident sys_id, transcript, AI Search results — or you pay twice."),
        ],
      ],
      workflowSteps: [
        "Map top 10 contact drivers to Virtual Agent topics or GenAI domains.",
        "Define escalation: create incident? attach to existing? live chat?",
        "Measure containment AND record creation rate.",
      ],
      example: {
        title: "Password reset — deflection that counts",
        body: "Virtual Agent walks user through self-service reset, creates no incident on success, logs interaction. On failure, creates incident with transcript attached and routes to Identity team. Containment 67% with correct audit trail — vs 90% 'chat success' with no records on failure path.",
      },
    }),
    buildGuideSection({
      id: "ai-agents",
      number: "2.5",
      title: "AI Agents (Agentic AI) — autonomous action capability",
      subtitle:
        "Where agents sit in the product stack — tools, plans, approvals, and the line between assist and act",
      takeaway:
        "AI Agents go beyond suggesting text — they plan multi-step work, call tools (flows, integrations), and execute within policy. This is the fastest-moving layer of the ServiceNow AI stack.",
      why: "Agentic AI is what interviewers ask about in 2026. You need a crisp mental model before touching PDI agent studio.",
      paragraphs: [
        [
          s("An "),
          x("AI Agent", "Orchestrated LLM with tool access — search records, update fields, trigger flows, ask clarifying questions."),
          s(" operates with a "),
          x("persona and policy", "Role, allowed tools, data scope, approval requirements."),
          s(" defined by builders — not unconstrained chat."),
        ],
        [
          s("Stack position: Virtual Agent / Now Assist may invoke agents; agents call Flow and IntegrationHub actions as tools. The system of record stays ServiceNow."),
        ],
        [
          s("Start agent POCs on read-only tools — search and summarise — before write tools. Production agents need kill switches and audit."),
        ],
      ],
      workflowSteps: [
        "Define agent goal in one sentence — 'resolve password incidents under policy X.'",
        "List tools: search KB, create task, escalate — mark read vs write.",
        "Require human approval on first 100 write actions in POC.",
      ],
      example: {
        title: "Agent-assisted major incident coordinator",
        body: "Agent monitors P1 incidents, summarises timeline, drafts stakeholder comms, proposes task list from runbook — human comms lead approves send. Agent does not close incidents autonomously. 30% faster comms cadence without autonomy on high-risk writes.",
      },
    }),
    buildGuideSection({
      id: "document-intelligence",
      number: "2.6",
      title: "Document Intelligence — intelligent document processing",
      subtitle:
        "Extracting structure from PDFs, forms, and attachments — where it fits in workflow automation",
      takeaway:
        "Document Intelligence turns unstructured attachments into fields and decisions — invoice lines, form data, contract clauses — feeding Flow and records without manual re-keying.",
      why: "HR, procurement, and legal workflows on ServiceNow often die on attachments. This capability unlocks them.",
      paragraphs: [
        [
          s("Use when process input arrives as "),
          x("documents", "PDFs, scans, images — not structured portal fields."),
          s(". Pairs with Flow: extract → validate → route → human exception queue."),
        ],
        [
          s("Not a replacement for knowledge search or conversational deflection — complementary for paper-heavy processes."),
        ],
        [
          s("Accuracy depends on template consistency — highly variable documents need human-in-the-loop thresholds."),
        ],
      ],
      workflowSteps: [
        "Pick one document type with consistent layout (e.g. vendor invoice).",
        "Define extraction fields mapped to ServiceNow table columns.",
        "Route low-confidence extractions to manual review queue in Flow.",
      ],
      example: {
        title: "Employee onboarding — ID document capture",
        body: "New hires upload ID scans. Document Intelligence extracts name, ID number, expiry into HR profile staging fields. Flow triggers verification task for HR. 85% straight-through on clear scans; rest to manual queue. Cut onboarding data entry from 12 minutes to 2.",
      },
    }),
    buildGuideSection({
      id: "process-automation-ai",
      number: "2.7",
      title: "Process Automation & AI — Flow Designer, IntegrationHub, and AI actions",
      subtitle:
        "How deterministic automation and AI actions combine into production-grade workflows",
      takeaway:
        "Flow Designer is the orchestration backbone — call PI, invoke Now Assist skills, trigger subflows, call IntegrationHub spokes. AI without Flow is a demo; Flow without AI is 2019.",
      why: "Implementation interviews test whether you can wire AI into real automation — not just configure admin modules.",
      paragraphs: [
        [
          s("Pattern: "),
          x("Flow triggers on record", "Created/updated conditions — predictable entry point."),
          s(" → "),
          x("AI action", "Classify, summarise, extract, agent tool."),
          s(" → "),
          x("branch on confidence", "Automate high confidence; queue low."),
          s(" → update record / notify / integrate."),
        ],
        [
          s("IntegrationHub brings external systems as steps — agent or Flow can call ServiceNow-approved integrations without custom glue code for every POC."),
        ],
        [
          s("On PDI, build one 'AI action' subflow reused across parent flows — standardises logging and error handling."),
        ],
      ],
      workflowSteps: [
        "Sketch swimlane: trigger → AI → decision → action.",
        "Build subflow for AI call with error handling and logging.",
        "Test with 10 synthetic records on PDI before UAT.",
      ],
      example: {
        title: "Vendor risk intake — Flow + Document Intelligence + PI",
        body: "Email attachment creates case via inbound. Document Intelligence extracts vendor metadata. PI classifies risk tier from historical cases. Flow routes tier 3 to manual GRC queue; tier 1 auto-creates assessment tasks. End-to-end without agent leaving ServiceNow.",
      },
    }),
    buildGuideSection({
      id: "ecosystem-decision-framework",
      number: "2.8",
      title: "The ecosystem decision framework",
      subtitle:
        "Which AI capability to use for which business problem — the one-page map architects carry",
      takeaway:
        "Route by problem type: language → GenAI; classification → PI; findability → AI Search; conversation → Virtual Agent; documents → Document Intelligence; multi-step execution → AI Agents; orchestration → Flow.",
      why: "This framework is the answer to 'what should we use?' in steering committees and architecture boards.",
      paragraphs: [
        [
          s("Ask four questions: Is the input structured? Is the decision categorical or narrative? Must it run unattended? What is the cost of error?"),
        ],
        [
          s("Combine capabilities in sequence — rarely does one suffice. Document the chosen stack on the architecture slide, not just the buzzword."),
        ],
        [
          s("Revisit quarterly — ServiceNow ships fast; agents may absorb tasks you previously assigned to point solutions."),
        ],
      ],
      workflowSteps: [
        "Write problem statement for your top initiative.",
        "Score each capability 0–3 on fit — pick primary + secondary.",
        "Validate with security and data readiness before build.",
      ],
      artifact: {
        id: "ecosystem-picker",
        title: "ServiceNow AI capability picker",
        description: "Paste into workshop whiteboard or Confluence.",
        content: `| Problem pattern | Primary capability | Secondary | Avoid |
|-----------------|-------------------|-----------|-------|
| Route ticket to team | Predictive Intelligence | Flow rules | GenAI alone |
| Answer employee how-to | Virtual Agent + AI Search | Now Assist | PI |
| Summarise long thread | Now Assist | AI Agent read-only | Keyword search |
| Process PDF forms | Document Intelligence | Flow | Manual VA topics |
| Multi-step resolution | AI Agents | Flow + approvals | Unscoped GenAI |
| Find similar incidents | AI Search | PI similarity | External chat |

Rule: if two rows match, you need orchestration (Flow) — not two disconnected pilots.`,
      },
    }),
  ],
};
