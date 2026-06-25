import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_LIVE_HANDOFF: GuideConcept = {
  number: 5,
  title: "Live Agent Handoff",
  subtitle:
    "When to escalate, how to transfer context, what agents see, routing queues, warm vs cold handoff, after-hours, re-engagement, and analytics",
  sections: [
    buildGuideSection({
      id: "handoff-trigger",
      number: "5.1",
      title: "The handoff trigger",
      subtitle:
        "When and how VA decides to escalate to a human",
      takeaway:
        "Escalation should be driven by confidence, policy, and user signals: low NLU confidence, missing knowledge, high-risk topic, repeated failure, or explicit user request.",
      why: "If VA escalates too late, users get angry. If it escalates too early, containment collapses. Trigger design is a core lever.",
      paragraphs: [
        [
          s("Trigger categories: NLU uncertainty, tool failures, prohibited topics, user frustration signals, and explicit 'talk to agent'."),
        ],
        [
          s("Add escalation ceilings: after N failed attempts or N clarification loops, escalate automatically."),
        ],
        [
          s("Always capture reason code for escalation — it fuels redesign and training."),
        ],
      ],
      workflowSteps: [
        "Define escalation rules and ceilings per topic category.",
        "Implement reason codes: low confidence, no KB, policy, user request.",
        "Monitor escalation rate and adjust thresholds carefully.",
      ],
      example: {
        title: "Ceilings reduced user frustration",
        body: "After two failed clarifications, VA escalated with context. Users stopped looping and CSAT improved even though containment decreased slightly — trust increased.",
      },
    }),
    buildGuideSection({
      id: "context-transfer",
      number: "5.2",
      title: "Context transfer",
      subtitle:
        "Packaging conversation history so the live agent starts informed",
      takeaway:
        "A handoff must include transcript, extracted entities, intent, attempted steps, and relevant knowledge links — attached to the created record and visible in Agent Workspace.",
      why: "Handoff is where most conversational ROI is won or lost. Context transfer prevents duplicate questioning and reduces handle time.",
      paragraphs: [
        [
          s("Transfer packet: user goal, entities, what was tried, what failed, and why escalation happened."),
        ],
        [
          s("Include retrieval evidence: which KB articles were surfaced and whether the user clicked them."),
        ],
        [
          s("Keep it structured and short; full transcript remains available as reference."),
        ],
      ],
      workflowSteps: [
        "Define a handoff summary schema (fields + max length).",
        "Attach transcript and entity values to the record.",
        "Test: live agent can reply without asking for repeated basics.",
      ],
      example: {
        title: "Transcript + summary cut handle time",
        body: "Agents spent less time collecting info and more time resolving because they saw the user’s device, app, and attempted steps already captured.",
      },
    }),
    buildGuideSection({
      id: "agent-workspace-experience",
      number: "5.3",
      title: "The Agent Workspace experience",
      subtitle:
        "What the agent sees when they receive a handoff",
      takeaway:
        "Agent Workspace should surface the handoff summary at the top: intent, entities, recommended next steps, and links — plus easy access to the transcript.",
      why: "If context is buried, agents ignore it and ask again. UX drives adoption of handoff benefits.",
      paragraphs: [
        [
          s("Show: escalation reason, user sentiment (if available), and top suggested actions or KB links."),
        ],
        [
          s("Integrate Now Assist: draft first response using the summary and KB sources, with human edit/approve."),
        ],
        [
          s("Train agents: ‘acknowledge the user’s attempt’ improves trust immediately."),
        ],
      ],
      workflowSteps: [
        "Configure Workspace layout to highlight handoff summary.",
        "Add quick actions: assign, create task, send response draft.",
        "Run agent training for handoff etiquette.",
      ],
      example: {
        title: "Agents stopped repeating questions",
        body: "Workspace layout changed to show summary and entities. Agents acknowledged the user’s prior steps and moved directly to resolution, improving CSAT.",
      },
    }),
    buildGuideSection({
      id: "queue-management",
      number: "5.4",
      title: "Queue management",
      subtitle:
        "Routing handoffs to the right agent group based on context",
      takeaway:
        "Handoff routing should use extracted entities and intent to pick the right queue — ideally leveraging Predictive Intelligence routing and business rules.",
      why: "Wrong queue destroys the point of VA and increases wait time.",
      paragraphs: [
        [
          s("Routing signals: intent, app entity, CI/service, location, priority, and sentiment."),
        ],
        [
          s("Use PI for routing when labels exist; use rules for policy (e.g., VIP users)."),
        ],
        [
          s("Log reroutes after handoff — it’s the metric for routing quality."),
        ],
      ],
      workflowSteps: [
        "Define mapping from intents/entities to queues.",
        "Deploy PI routing suggestions for handoff tickets.",
        "Monitor reroute rate and tune.",
      ],
      example: {
        title: "Handoff reroutes dropped",
        body: "Using entity-driven routing reduced reroutes from 18% to 9%. Users waited less and agents trusted the system more.",
      },
    }),
    buildGuideSection({
      id: "warm-vs-cold",
      number: "5.5",
      title: "Warm vs cold handoff",
      subtitle:
        "Design choices and customer impact",
      takeaway:
        "Warm handoff keeps continuity (agent joins live). Cold handoff creates a record for later. Choose based on urgency, staffing, and channel constraints — but always preserve context.",
      why: "The wrong handoff design creates broken experiences and kills trust in self-service.",
      paragraphs: [
        [
          s("Warm handoff is best for high-urgency or sensitive cases. Cold handoff is best for async support and after-hours."),
        ],
        [
          s("Always set expectations: wait time, next step, and confirmation record number."),
        ],
        [
          s("If wait time is long, offer alternatives: callback, ticket, or self-service links."),
        ],
      ],
      workflowSteps: [
        "Define warm/cold thresholds by intent and urgency.",
        "Design UX: explicit wait estimates and fallback options.",
        "Measure: user satisfaction on each handoff type.",
      ],
      example: {
        title: "Warm handoff for security",
        body: "Security incidents used warm handoff; routine requests used cold. Clear rules avoided confusion and improved experience.",
      },
    }),
    buildGuideSection({
      id: "after-hours-handling",
      number: "5.6",
      title: "After-hours handling",
      subtitle:
        "What happens when no live agents are available",
      takeaway:
        "After-hours design should offer: create ticket with transcript, schedule callback, or provide self-service steps — with clear SLAs and next-contact expectations.",
      why: "After-hours is where self-service either shines or creates anger. Clear expectations are everything.",
      paragraphs: [
        [
          s("Use on-call policies: P1 issues may still escalate; routine issues create tickets for next business day."),
        ],
        [
          s("Offer proactive status: acknowledge and provide reference number; avoid pretending a live agent is available."),
        ],
        [
          s("Capture after-hours intent analytics — it often reveals knowledge gaps and opportunities for automation."),
        ],
      ],
      workflowSteps: [
        "Define after-hours rules by priority and topic.",
        "Implement callback scheduling option if available.",
        "Measure after-hours CSAT and repeat contacts.",
      ],
      example: {
        title: "After-hours expectations reduced repeat pings",
        body: "VA created a ticket with transcript and told the user when they’d be contacted. Repeat contacts dropped because expectations were clear and evidence was preserved.",
      },
    }),
    buildGuideSection({
      id: "re-engagement",
      number: "5.7",
      title: "Re-engagement",
      subtitle:
        "Pulling users back to self-service if the queue wait is long",
      takeaway:
        "If wait is long, re-engage users with self-service options: top KB, guided action flows, or alternate channels — without forcing them to restart or lose their place.",
      why: "Queue times are costly. Re-engagement converts waiting into resolution.",
      paragraphs: [
        [
          s("Show: 'While you wait, try this' with the best action card or KB link."),
        ],
        [
          s("Preserve state: if the user resolves themselves, close the handoff request cleanly."),
        ],
        [
          s("Measure re-engagement success rate and avoid spamming users with irrelevant suggestions."),
        ],
      ],
      workflowSteps: [
        "Define re-engagement trigger (wait > X minutes).",
        "Offer 1–3 high-confidence self-service actions.",
        "Track: re-engagement click-through and successful resolution.",
      ],
      example: {
        title: "Queue wait reduced with self-service",
        body: "When wait exceeded 15 minutes, VA offered a known fix flow. Many users solved the issue and cancelled handoff, reducing queue load.",
      },
    }),
    buildGuideSection({
      id: "handoff-analytics",
      number: "5.8",
      title: "Handoff analytics",
      subtitle:
        "Measuring volume, reason, and resolution rate of handoffs",
      takeaway:
        "Track handoffs by reason code, topic, channel, queue, and outcome. Handoff analytics is the fastest way to find broken topics and missing knowledge.",
      why: "Escalations are signal. If you don’t measure them, you don’t improve containment.",
      paragraphs: [
        [
          s("Key metrics: handoff rate, reason distribution, time to first agent response, reroute rate, and post-handoff resolution success."),
        ],
        [
          s("Use reason codes to drive action: 'no KB' → write KB; 'low confidence' → train NLU; 'tool failure' → fix integrations."),
        ],
        [
          s("Report by channel and intent. Teams and portal behave differently; don’t average away the truth."),
        ],
      ],
      workflowSteps: [
        "Ensure every handoff has a reason code.",
        "Build dashboard: top handoff topics and reasons.",
        "Run weekly handoff review and backlog improvements.",
      ],
      artifact: {
        id: "handoff-reason-codes",
        title: "Handoff reason codes (starter)",
        description: "Standardize these to make analytics actionable.",
        content:
          `Reason codes:\n- LOW_NLU_CONFIDENCE\n- MISSING_ENTITY\n- NO_KB_SOURCE\n- POLICY_RESTRICTED\n- TOOL_FAILURE\n- USER_REQUEST\n- USER_FRUSTRATION\n- AFTER_HOURS\n\nUse these to drive redesign and training backlog.`,
      },
    }),
  ],
};

