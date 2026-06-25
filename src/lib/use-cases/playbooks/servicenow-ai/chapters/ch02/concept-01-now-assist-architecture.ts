import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_NOW_ASSIST_ARCHITECTURE: GuideConcept = {
  number: 1,
  title: "Now Assist Architecture",
  subtitle:
    "Skills, LLM routing, prompt assembly, grounding, and the full stack from request to rendered output",
  sections: [
    buildGuideSection({
      id: "skill-framework",
      number: "1.1",
      title: "The Now Assist skill framework",
      subtitle:
        "How skills are defined, packaged, and activated per product domain",
      takeaway:
        "A Now Assist skill is a governed unit of GenAI capability — prompt template, context sources, output schema, and product binding — activated per domain (ITSM, CSM, HR, Platform).",
      why: "Interviewers ask 'what is a skill vs a plugin?' Architects who answer with the framework design implementations; admins who answer 'it's a toggle' create fragile rollouts.",
      paragraphs: [
        [
          s("Skills are "),
          x(
            "product-scoped packages",
            "Each skill targets a specific workflow — incident summary, resolution note, case draft — with pre-built context contracts.",
          ),
          s(
            ". ServiceNow ships platform skills; enterprises extend with custom skills where the framework allows. Activation is entitlement + admin configuration + role visibility.",
          ),
        ],
        [
          s("Packaging layers: "),
          x("definition", "Prompt, inputs, output format, guardrails."),
          s(" → "),
          x("context binding", "Which tables, fields, and knowledge sources feed the skill."),
          s(" → "),
          x("surface binding", "Agent workspace, portal, Script Editor — where output appears."),
        ],
        [
          s("POC discipline: enable one skill per workflow, measure adoption, then expand — not all ITSM skills on day one."),
        ],
      ],
      workflowSteps: [
        "On PDI: Now Assist Admin → list available skills by product.",
        "Map each skill to a workflow step and owning team.",
        "Document activation status in a SKILL_REGISTRY spreadsheet.",
      ],
      example: {
        title: "Skill registry prevents duplicate pilots",
        body: "A global IT org had three regions independently enabling incident summary with different KB scopes. Central architecture published SKILL_REGISTRY.md — one owner per skill, standard context sources, shared guardrails. Reduced config drift and made security review repeatable.",
      },
    }),
    buildGuideSection({
      id: "llm-connection-layer",
      number: "1.2",
      title: "The LLM connection layer",
      subtitle:
        "How ServiceNow routes to model providers and what the fallback chain looks like",
      takeaway:
        "ServiceNow operates managed LLM connectivity — you configure skills and policies; the platform handles provider routing, failover, and operational SLAs rather than you wiring raw API keys in production.",
      why: "Security and procurement ask 'which model?' and 'what if it's down?' This layer is your answer.",
      paragraphs: [
        [
          s("Enterprises typically do not point Now Assist at arbitrary public endpoints. ServiceNow's "),
          x(
            "managed connection layer",
            "Platform-operated integration to approved foundation models with contractual and security boundaries.",
          ),
          s(" abstracts provider details while exposing admin controls for skill behaviour."),
        ],
        [
          s("Fallback thinking: if primary model latency spikes or a region is unavailable, the platform may route to alternate capacity — exact behaviour is release-dependent. Architects document "),
          x("degraded mode", "Human-only workflow when GenAI unavailable — no silent failures."),
          s(" in runbooks."),
        ],
        [
          s("Contrast with IntegrationHub calling external LLM APIs: possible for custom apps, but Now Assist skills use the native layer — different governance path."),
        ],
      ],
      workflowSteps: [
        "Confirm with ServiceNow account team which AI SKUs and regions apply.",
        "Define degraded-mode SOP: what agents do when assist panel errors.",
        "Never build production dependency on unaudited external LLM keys for core ITSM.",
      ],
      example: {
        title: "Regional outage — degraded mode saved the shift",
        body: "EU instance experienced temporary GenAI latency. Runbook switched agents to manual templates for external comms; incident summaries deferred. No policy violations from rushed paste jobs. Recovery in 90 minutes — architecture had planned for absence, not just presence.",
      },
    }),
    buildGuideSection({
      id: "prompt-construction-pipeline",
      number: "1.3",
      title: "The prompt construction pipeline",
      subtitle:
        "How context, schema, record data, and user input assemble into a prompt",
      takeaway:
        "Now Assist builds prompts dynamically: system instructions + skill template + ACL-filtered record context + optional retrieval snippets + user action — not a single static string.",
      why: "Debugging bad output starts here. 'Fix the prompt' without knowing assembly order wastes weeks.",
      paragraphs: [
        [
          s("Pipeline stages: "),
          x("system layer", "Platform safety, tone defaults, output format constraints."),
          s(" → "),
          x("skill template", "Task-specific instructions and field mappings."),
          s(" → "),
          x("record context", "Incident/case fields, work notes, related lists — ACL-scoped."),
          s(" → "),
          x("retrieval", "AI Search / knowledge snippets when skill is retrieval-augmented."),
          s(" → "),
          x("user input", "Agent refinement request or trigger action."),
        ],
        [
          s("Schema awareness: skills often receive structured field metadata so the model knows field labels vs values — reducing confusion on custom tables."),
        ],
        [
          s("Interview tip: draw this pipeline on a whiteboard — instant senior signal."),
        ],
      ],
      workflowSteps: [
        "Pick one skill and list every input source (fields, KB, user text).",
        "On PDI, trigger skill on a test record — note which fields change output.",
        "Remove a context source — observe hallucination increase (grounding lesson).",
      ],
      example: {
        title: "Custom field not in skill context",
        body: "Now Assist summaries ignored u_business_impact on incidents. Root cause: field not in skill context contract. Added to context mapping — summaries suddenly aligned with exec reporting. Pipeline literacy turned a 'bad AI' ticket into a config fix.",
      },
    }),
    buildGuideSection({
      id: "grounding-strategy",
      number: "1.4",
      title: "The grounding strategy",
      subtitle:
        "How Now Assist anchors responses in instance data rather than model hallucination",
      takeaway:
        "Grounding = retrieval + record context + output constraints. Ungrounded skills answer from parametric model knowledge — dangerous for policy, pricing, and technical procedures.",
      why: "Hallucination complaints are usually grounding complaints. This section is how you fix them.",
      paragraphs: [
        [
          s("Grounding sources: "),
          x("record fields", "Authoritative for this ticket."),
          x("knowledge articles", "Policy and procedure — must be curated."),
          x("similar records", "Historical patterns — cite sys_id or number."),
          s(". Skills should instruct the model to prefer sources over invention."),
        ],
        [
          s("Techniques: require citations, 'answer only from context' instructions, refusal when context insufficient, and human review on external-facing text."),
        ],
        [
          s("Pair grounding with AI Search index quality — Ch 1 warned; Ch 2 implements."),
        ],
      ],
      workflowSteps: [
        "Audit top 10 KB articles used by assist — retire outdated.",
        "Enable citation-style output where product supports it.",
        "Red-team: ask for policy not in KB — verify refusal or uncertainty.",
      ],
      example: {
        title: "VPN policy hallucination — grounding fix",
        body: "Assist cited obsolete split-tunnel policy. Retrieval indexed 2019 article. Fix: retire article, boost 2025 policy, add skill guardrail 'if no matching KB, say unknown and link HR portal.' Hallucinations on policy dropped to near zero in UAT.",
      },
    }),
    buildGuideSection({
      id: "token-management",
      number: "1.5",
      title: "Token management in Now Assist",
      subtitle:
        "How ServiceNow controls context window consumption and cost at scale",
      takeaway:
        "Long work notes, huge related lists, and bloated retrieval eat context budget — causing truncation, higher cost, and quality drop. Architects design what enters the window.",
      why: "Finance asks why AI spend scaled linearly with ticket volume. Token discipline is the answer.",
      paragraphs: [
        [
          s("Context window is finite. ServiceNow applies "),
          x(
            "summarisation and truncation strategies",
            "Platform may compress older work notes or limit retrieval chunk count — behaviour varies by skill.",
          ),
          s(" to fit limits. Custom skills must explicitly limit inputs."),
        ],
        [
          s("Cost drivers: number of assist invocations × context size × skill complexity. High-volume L1 summary on every refresh burns budget — trigger on open or on demand, not every keystroke."),
        ],
        [
          s("Design pattern: summarise history once, store in a field, feed summary to subsequent assists — amortise tokens."),
        ],
      ],
      workflowSteps: [
        "Measure assist invocations per ticket type in POC.",
        "Limit retrieval to top-k chunks with relevance threshold.",
        "Trigger assist on agent action, not auto on every form load — unless ROI proves out.",
      ],
      example: {
        title: "Auto-summary on every save — cost surprise",
        body: "Team enabled incident summary on every work-note save. 400% increase in GenAI consumption in one month. Changed to 'on open' + manual refresh. Quality unchanged; cost normalised. Token management is product design.",
      },
    }),
    buildGuideSection({
      id: "output-rendering",
      number: "1.6",
      title: "The output rendering layer",
      subtitle:
        "How GenAI responses surface in forms, portals, and workspaces",
      takeaway:
        "Now Assist outputs render as inline suggestions, editable drafts, side panels, or inserted field values — UX shape affects adoption more than model quality.",
      why: "Agents ignore assist that fights their workflow. Rendering design is change management.",
      paragraphs: [
        [
          s("Agent workspace: typically "),
          x("draft in panel", "Agent reviews, edits, accepts into work notes or email."),
          s(" — never silent auto-post to customer without policy."),
        ],
        [
          s("Portals and employee experience: shorter responses, links to KB, escalation CTAs. Developer surfaces: code blocks in Script Editor with accept/reject."),
        ],
        [
          s("Accessibility and mobile: rendering must work on small screens — field teams adopt mobile-first designs."),
        ],
      ],
      workflowSteps: [
        "Shadow agents for one shift — watch where assist appears and whether they use it.",
        "Adjust UX: move panel, reduce clicks to accept, show citations inline.",
        "Track accept rate vs ignore rate per skill.",
      ],
      example: {
        title: "Accept rate 12% → 68% after UX change",
        body: "Resolution note draft required 4 clicks to insert. Moved to one-click 'insert and edit' with citation footnotes. Adoption followed UX, not model upgrade.",
      },
    }),
    buildGuideSection({
      id: "feedback-loop",
      number: "1.7",
      title: "The feedback loop",
      subtitle:
        "How thumbs-up/down data feeds into skill quality improvement",
      takeaway:
        "Explicit feedback signals (helpful / not helpful) plus implicit signals (edit distance, accept without edit) guide skill tuning — not automatic retraining of foundation models.",
      why: "Continuous improvement programs need a feedback story. This is how ServiceNow skills get better operationally.",
      paragraphs: [
        [
          s("Thumbs feedback aggregates to skill owners — patterns of dislike on certain categories indicate grounding or tone issues."),
        ],
        [
          s("Implicit signals often matter more: "),
          x("edit distance", "How much agents change drafts before sending."),
          s(", time-to-accept, abandon rate. High edit distance → fix template or context, not 'retrain AI.'"),
        ],
        [
          s("Close loop: weekly review with top agents; feed quotes into prompt/guardrail updates; version skills in dev → test → prod."),
        ],
      ],
      workflowSteps: [
        "Export feedback metrics weekly in POC.",
        "Tag negative feedback by category and missing KB.",
        "Assign owner to iterate skill monthly.",
      ],
      example: {
        title: "Feedback drove guardrail on legal language",
        body: "CSM agents thumbs-downed 34% of drafts for overly casual tone. Added system tone parameter and prohibited phrases guardrail. Thumbs-down fell to 8% in three weeks.",
      },
    }),
    buildGuideSection({
      id: "now-assist-api",
      number: "1.8",
      title: "Now Assist in the API",
      subtitle:
        "How developers call GenAI capabilities programmatically from scripts and flows",
      takeaway:
        "Platform APIs and Flow actions expose GenAI for custom apps — same governance, different surface. Use for bespoke UX, batch jobs, and integration patterns skills don't cover.",
      why: "Builders interview on 'can I call Now Assist from Flow?' Yes — with architecture discipline.",
      paragraphs: [
        [
          s("Patterns: "),
          x("Flow AI actions", "Orchestrated steps in record-triggered automation."),
          s(", "),
          x("scripted calls", "Server-side when supported by release and entitlement."),
          s(", "),
          x("custom UI", "Portal or Workspace components invoking platform GenAI endpoints."),
        ],
        [
          s("Same rules apply: ACL context, logging, rate limits, human approval on external output. API is not a bypass for governance."),
        ],
        [
          s("POC: wrap GenAI call in subflow with error handling and audit field updates."),
        ],
      ],
      workflowSteps: [
        "Identify use case not covered by native skill — justify custom vs configure.",
        "Build subflow: gather context → GenAI action → parse output → conditional update.",
        "Log request id and output hash on record for audit.",
      ],
      artifact: {
        id: "genai-subflow-pattern",
        title: "GenAI subflow pattern (conceptual)",
        description: "Architecture checklist for Flow + Now Assist integration.",
        content: `## Subflow: GenAI_Assist_IncidentSummary
1. Input: incident sys_id
2. Validate ACL + entitlement
3. Assemble context (fields, notes cap, KB retrieval)
4. Invoke GenAI action / API
5. Parse structured output
6. Write to u_ai_summary + u_ai_summary_at
7. On error → log + notify + skip write

Never auto-close incident from GenAI output in v1.`,
      },
    }),
  ],
};
