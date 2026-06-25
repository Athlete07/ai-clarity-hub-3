import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_VA_ARCHITECTURE: GuideConcept = {
  number: 1,
  title: "Virtual Agent Architecture",
  subtitle:
    "Platform components, conversation state, channels, NLU, and how Virtual Agent connects to Now Assist, AI Search, and Agent Workspace",
  sections: [
    buildGuideSection({
      id: "va-platform",
      number: "1.1",
      title: "The Virtual Agent platform",
      subtitle:
        "Components, the NLU engine, and how they connect to the Now Platform",
      takeaway:
        "Virtual Agent is the conversational layer of the Now Platform: channels + conversation runtime + NLU + topic flows + actions (Flow/IntegrationHub) — anchored to ServiceNow records and ACLs.",
      why: "Teams that treat VA as 'a chatbot' miss the platform advantage: it can create real records, enforce policy, and preserve audit trails.",
      paragraphs: [
        [
          s("Core components: "),
          x("channels", "Portal widget, mobile, Teams/Slack, custom API."),
          s(", "),
          x("conversation runtime", "Sessions, context, state machine."),
          s(", "),
          x("NLU", "Intent + entities + confidence."),
          s(", and "),
          x("topics", "Scripted flows and actions."),
          s(".",
          ),
        ],
        [
          s("VA connects to platform systems: Knowledge/AI Search for answers, Flow Designer for actions, and Agent Workspace for handoff and continued resolution."),
        ],
        [
          s("Architecture rule: every successful conversation must end with an outcome on-record (resolved self-service action or created/updated case)."),
        ],
      ],
      workflowSteps: [
        "List your target channels (portal, mobile, Teams).",
        "For each, define desired outcomes (no ticket, catalog request, incident create, handoff).",
        "Map each outcome to a topic + action (Flow) with audit logging.",
      ],
      example: {
        title: "VA as workflow entry, not chat",
        body: "Instead of answering “request laptop” with text, VA guided the user into the catalog request, captured required fields, created the request, and confirmed the record — measurable and auditable.",
      },
    }),
    buildGuideSection({
      id: "conversation-model",
      number: "1.2",
      title: "The conversation model",
      subtitle:
        "Sessions, topics, utterances, and the state machine that governs them",
      takeaway:
        "Conversations are state machines: a session tracks context; a topic defines steps; utterances are classified; entities are extracted; and state transitions govern what happens next.",
      why: "If you understand the conversation model, you can debug 'why did VA get stuck?' without guessing.",
      paragraphs: [
        [
          s("Session: holds user identity, channel, current topic, collected entities, and transcript. Topic: sequence of prompts, decisions, and actions."),
        ],
        [
          s("State machine governs transitions: ask question → validate entity → branch → execute action → confirm → close or escalate."),
        ],
        [
          s("Design principle: make states explicit and resumable. If a user leaves and returns, the session should handle it gracefully."),
        ],
      ],
      workflowSteps: [
        "For one topic, draw the states and transitions on paper.",
        "Define validation checks for each entity before transitioning.",
        "Add an explicit escape hatch: 'talk to agent' and 'start over'.",
      ],
      example: {
        title: "Why a topic looped",
        body: "Topic kept asking for asset id because entity validation failed silently. Making validation explicit and adding error messaging fixed loop and reduced abandon rate.",
      },
    }),
    buildGuideSection({
      id: "channel-architecture",
      number: "1.3",
      title: "Channel architecture",
      subtitle:
        "Delivering the same VA experience across web, mobile, Slack, and Teams",
      takeaway:
        "Channel adapters share the same VA brain (topics, NLU, actions) but differ in UX constraints: authentication, message length, rich cards, latency, and escalation paths.",
      why: "Many teams build channel-specific bots. The ServiceNow advantage is one conversation model with channel-specific presentation.",
      paragraphs: [
        [
          s("Portal widget: rich UI and embedded actions. Mobile: constrained UI and intermittent connectivity. Teams/Slack: message-based cards and enterprise auth."),
        ],
        [
          s("Design once, adapt per channel: shorten prompts for chat platforms, provide quick replies, and avoid long multi-step forms in Slack."),
        ],
        [
          s("Security differs per channel: SSO, token exchange, and workspace governance (Teams/Slack) change what data you can expose."),
        ],
      ],
      workflowSteps: [
        "Pick primary channel; design topic flows there first.",
        "Create channel-specific UX variants for key steps (quick replies).",
        "Test auth and ACL behavior per channel with real roles.",
      ],
      example: {
        title: "Same topic, different UX",
        body: "Password reset topic used embedded portal action button on web, but quick-reply menu on Teams. Logic stayed same; channel presentation changed.",
      },
    }),
    buildGuideSection({
      id: "nlu-engine",
      number: "1.4",
      title: "The NLU engine",
      subtitle:
        "Intent classification, entity extraction, and the confidence model",
      takeaway:
        "NLU maps utterances to intents and entities with confidence scores. Confidence should drive clarification, fallback, or escalation — not blind execution.",
      why: "The majority of VA failures are NLU failures: wrong intent, missing entity, or overconfident routing.",
      paragraphs: [
        [
          s("Intent classification chooses a topic. Entity extraction collects structured data (application, device, location). Confidence quantifies uncertainty."),
        ],
        [
          s("Design rule: low confidence → ask a clarifying question. Very low confidence → fallback to search or escalate."),
        ],
        [
          s("Training data matters: use real utterances, not what designers think users say. Update synonyms and taxonomy as language evolves."),
        ],
      ],
      workflowSteps: [
        "Define confidence bands for your VA: auto-route, clarify, fallback.",
        "Collect 200 real utterances for top intents before go-live.",
        "Evaluate confusion pairs and fix taxonomy or training data.",
      ],
      example: {
        title: "Clarification reduced wrong routing",
        body: "“Access” utterances were ambiguous (VPN vs app access). Adding a clarifying question when confidence below threshold reduced misroutes and improved satisfaction.",
      },
    }),
    buildGuideSection({
      id: "now-assist-integration",
      number: "1.5",
      title: "Integration with Now Assist",
      subtitle:
        "How GenAI enhances VA beyond scripted topics",
      takeaway:
        "Now Assist adds free-text answers, summarisation, and long-tail handling — but must be grounded (AI Search/KB) and governed with persona and safety constraints.",
      why: "GenAI can reduce topic authoring load, but without grounding it increases hallucination risk in self-service.",
      paragraphs: [
        [
          s("Use GenAI where scripted topics are expensive: long-tail questions, summarising policies, and drafting responses — but keep deterministic steps (catalog submission) scripted."),
        ],
        [
          s("GenAI should cite sources and escalate when sources are missing. Never let it invent procedural steps for high-risk actions."),
        ],
        [
          s("Persona matters: employee portal tone differs from customer-facing CSM. Configure per domain."),
        ],
      ],
      workflowSteps: [
        "Identify 10 long-tail intents causing low containment.",
        "Enable GenAI answer mode for those intents with KB grounding.",
        "Add guardrails: prohibited topics and escalation triggers.",
      ],
      example: {
        title: "Reduced topic sprawl with grounded GenAI",
        body: "Instead of 200 micro-topics for benefits variants, VA used GenAI over curated HR KB. Containment improved while legal-approved guardrails prevented policy improvisation.",
      },
    }),
    buildGuideSection({
      id: "ai-search-integration",
      number: "1.6",
      title: "Integration with AI Search",
      subtitle:
        "Surfacing knowledge results inside the conversation",
      takeaway:
        "AI Search is the retrieval backbone for VA: it finds the right KB/catalog items; VA presents them with guided actions and fallback paths.",
      why: "VA containment rises when search is accurate; it collapses when search returns wrong or stale results.",
      paragraphs: [
        [
          s("Pattern: user utterance → AI Search retrieve top candidates → show top result(s) with quick actions → confirm success → close or escalate."),
        ],
        [
          s("Use profile scoping: employee VA should retrieve only employee-safe KB. HR VA retrieves HR KB. Profiles + ACLs prevent leakage."),
        ],
        [
          s("Measure: click-through and ticket creation after search inside VA."),
        ],
      ],
      workflowSteps: [
        "Define AI Search profile for VA channel per persona.",
        "Create golden query set for VA utterances.",
        "Tune boosts and synonyms; re-test weekly.",
      ],
      example: {
        title: "Search fixed VA “I don’t know” responses",
        body: "VA fallback was frequent because keyword search failed. Switching to AI Search with synonyms improved retrieval; containment rose without rewriting topics.",
      },
    }),
    buildGuideSection({
      id: "agent-workspace-integration",
      number: "1.7",
      title: "The Agent Workspace integration",
      subtitle:
        "Where live agents receive and continue conversations",
      takeaway:
        "Agent Workspace is the handoff surface: agents see transcript, extracted entities, suggested next steps, and linked records — enabling seamless continuation.",
      why: "Poor handoff destroys CSAT and cancels deflection gains because humans must re-collect context.",
      paragraphs: [
        [
          s("The best handoff bundles: user intent, transcript summary, data collected, and the created/linked record id (incident/case)."),
        ],
        [
          s("Design for 'first reply': the agent should be able to respond without asking the user to repeat key details."),
        ],
        [
          s("Integrate Now Assist: summarise conversation and suggest response drafts for the live agent."),
        ],
      ],
      workflowSteps: [
        "Define what entities must be captured before handoff.",
        "Ensure transcript and entity values are visible in Agent Workspace.",
        "Test with agents: measure repeat-question rate after handoff.",
      ],
      example: {
        title: "Warm handoff improved CSAT",
        body: "Live agents saw summary and collected fields, so they acknowledged the user’s attempt and moved directly to resolution. Repeat questions dropped and CSAT rose.",
      },
    }),
    buildGuideSection({
      id: "data-flow-security",
      number: "1.8",
      title: "Data flow and security",
      subtitle:
        "How conversation data is handled, stored, and governed",
      takeaway:
        "Conversation data is operational data: transcripts, entities, and handoff records must respect ACLs, retention, and privacy policies — especially with GenAI in the loop.",
      why: "Self-service conversations can include PII. Without governance, VA becomes a compliance risk.",
      paragraphs: [
        [
          s("Governance decisions: transcript retention duration, redaction rules, and who can view transcripts. Align with HR/legal requirements."),
        ],
        [
          s("With GenAI: ensure sensitive fields are excluded from prompts, and ensure outputs do not leak restricted content across roles."),
        ],
        [
          s("Auditability: log handoffs, approvals (if any), and agent actions associated with the conversation."),
        ],
      ],
      workflowSteps: [
        "Define transcript retention per domain (IT vs HR).",
        "Test ACL: ensure a user cannot view other users’ transcripts.",
        "Red-team prompts attempting to extract sensitive information.",
      ],
      example: {
        title: "HR transcript governance prevented leakage",
        body: "HR VA conversations had strict retention and restricted viewing roles. GenAI prompts excluded sensitive fields. Compliance signed off because controls were explicit and tested.",
      },
    }),
  ],
};

