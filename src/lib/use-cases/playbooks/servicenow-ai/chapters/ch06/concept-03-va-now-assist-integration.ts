import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_VA_NOW_ASSIST: GuideConcept = {
  number: 3,
  title: "Virtual Agent and Now Assist Integration",
  subtitle:
    "GenAI responses, dynamic handling, conversation summaries, knowledge synthesis, persona, orchestration, testing, and PDI configuration",
  sections: [
    buildGuideSection({
      id: "genai-powered-responses",
      number: "3.1",
      title: "GenAI-powered responses",
      subtitle:
        "How Now Assist provides free-text answers inside a VA conversation",
      takeaway:
        "GenAI answers in VA must be grounded and scoped: retrieve from approved knowledge, produce short actionable responses, and escalate when sources are missing.",
      why: "Free-text answers are where hallucination risk lives. Grounding and guardrails make them safe enough for self-service.",
      paragraphs: [
        [
          s("Use GenAI to explain policies, summarise procedures, and answer long-tail questions when knowledge exists. Avoid GenAI for deterministic actions like submitting a catalog request."),
        ],
        [
          s("Require citations/links to KB for factual claims. If no KB source exists, the bot should say it can’t confirm and offer handoff."),
        ],
        [
          s("Tone must match channel and audience: portal vs Teams; employee vs customer. Persona configuration prevents inconsistent voice."),
        ],
      ],
      workflowSteps: [
        "Pick 10 questions VA fails today and verify KB coverage exists.",
        "Enable GenAI answer mode with KB grounding.",
        "Add escalation trigger: 'no source' → offer ticket create or agent handoff.",
      ],
      example: {
        title: "Policy answers became reliable",
        body: "GenAI responses were wrong until retrieval was scoped to current policy KB and citations were required. After grounding, wrong-policy incidents dropped and trust increased.",
      },
    }),
    buildGuideSection({
      id: "dynamic-topic-generation",
      number: "3.2",
      title: "Dynamic topic generation",
      subtitle:
        "How GenAI handles intents never explicitly trained",
      takeaway:
        "Dynamic handling uses GenAI to cover long-tail intents without building a topic for every variant — but it must be bounded by allowed domains and safe fallbacks.",
      why: "Long-tail coverage is where GenAI reduces topic authoring load the most — but also where it can go off-policy if not constrained.",
      paragraphs: [
        [
          s("Dynamic topic generation should be limited to specific domains (IT how-to) and forbidden in high-risk domains (HR case decisions) without strong governance."),
        ],
        [
          s("Use retrieval-first: GenAI should answer only from approved knowledge sources. If retrieval fails, dynamic handling should escalate."),
        ],
        [
          s("Measure: dynamic responses that led to success vs those that escalated. This tells you what topics to formalise over time."),
        ],
      ],
      workflowSteps: [
        "Define allowed dynamic domains and prohibited domains.",
        "Turn on dynamic handling for one portal cohort.",
        "Review transcripts weekly; formalise top repeated long-tail intents into topics.",
      ],
      example: {
        title: "Long-tail IT questions covered safely",
        body: "Dynamic GenAI answered niche printer driver questions using KB. When KB was missing, it escalated. Over 8 weeks, 12 repeated long-tail intents became formal topics.",
      },
    }),
    buildGuideSection({
      id: "conversation-summarisation",
      number: "3.3",
      title: "Conversation summarisation",
      subtitle:
        "How Now Assist summarises VA interaction before handoff",
      takeaway:
        "Summaries turn long transcripts into agent-ready briefs: intent, steps tried, data collected, and escalation reason — reducing repeat questions and improving CSAT.",
      why: "Handoff quality is a huge lever. Summaries reduce friction even when containment is low.",
      paragraphs: [
        [
          s("Good summaries are structured: problem statement, actions already attempted, key entities (device/app), and what the user expects next."),
        ],
        [
          s("Store summary on the created record (incident/case) and show it prominently in Agent Workspace."),
        ],
        [
          s("Governance: redact sensitive data and avoid including restricted fields the agent shouldn’t see."),
        ],
      ],
      workflowSteps: [
        "Define summary schema fields and max length.",
        "Enable summary generation on handoff trigger.",
        "Measure: repeat-question rate and first reply time.",
      ],
      example: {
        title: "Repeat questions dropped",
        body: "Agents stopped asking 'what have you tried?' because the summary captured attempted steps. First reply time improved and customers rated handoff experience higher.",
      },
    }),
    buildGuideSection({
      id: "knowledge-synthesis",
      number: "3.4",
      title: "Knowledge synthesis in conversation",
      subtitle:
        "Pulling and summarising knowledge articles during chat",
      takeaway:
        "VA can retrieve multiple KB articles and use GenAI to synthesise a short answer with links — but only when retrieval quality and article quality are strong.",
      why: "Users don’t want 5 links. They want the one best path to resolution with confirmation steps.",
      paragraphs: [
        [
          s("Retrieval: AI Search returns top-k. Synthesis: GenAI produces a concise step list and links to the authoritative article."),
        ],
        [
          s("Avoid synthesising across conflicting sources. If KB conflicts, the bot should present the authoritative one or escalate to human."),
        ],
        [
          s("Measure: success confirmations after synthesis and subsequent ticket creation."),
        ],
      ],
      workflowSteps: [
        "Tune AI Search to return the correct top 3 for key intents.",
        "Enable synthesis with citations and short format.",
        "Add a 'did it work?' confirmation step with next action.",
      ],
      example: {
        title: "Synthesis beat link lists",
        body: "Instead of listing three articles, VA synthesized the steps and linked the best one. Users resolved faster and containment improved.",
      },
    }),
    buildGuideSection({
      id: "tone-persona",
      number: "3.5",
      title: "Tone and persona configuration",
      subtitle:
        "Setting personality and register for GenAI responses",
      takeaway:
        "Persona defines tone, vocabulary, and safety boundaries. It should be configured per domain and channel to prevent brand and compliance issues.",
      why: "The fastest way to lose trust is a bot that sounds wrong for HR or too casual for a regulated enterprise.",
      paragraphs: [
        [
          s("Define tone for employee IT (helpful, concise), HR (formal, policy-cite), and customer-facing (brand-aligned)."),
        ],
        [
          s("Include prohibited language and disclaimers as needed. Keep persona instructions stable and versioned."),
        ],
        [
          s("Test persona with native speakers across languages and with legal for regulated content."),
        ],
      ],
      workflowSteps: [
        "Create persona docs for IT, HR, CSM.",
        "Apply persona settings to VA GenAI responses.",
        "Review 50 transcripts per domain in pilot and adjust.",
      ],
      example: {
        title: "HR persona prevented unsafe advice",
        body: "HR VA persona required policy citation and refused medical/legal advice. Legal approved rollout because persona constraints were explicit and tested.",
      },
    }),
    buildGuideSection({
      id: "orchestration-layer",
      number: "3.6",
      title: "The orchestration layer",
      subtitle:
        "When to use scripted topics vs GenAI responses",
      takeaway:
        "Use scripted topics for deterministic workflows (catalog submissions, approvals). Use GenAI for explanations and long-tail questions. Orchestrate by confidence, risk, and availability of grounded sources.",
      why: "Hybrid design is the only sustainable design: scripted where determinism matters, GenAI where language matters.",
      paragraphs: [
        [
          s("Decision rules: if intent is known and action exists → scripted. If intent is ambiguous → clarify. If intent is long-tail and KB coverage exists → GenAI answer. If KB missing → escalate."),
        ],
        [
          s("Add safety: high-risk topics always scripted and/or approval-gated. GenAI should not decide outcomes in regulated flows."),
        ],
        [
          s("Degraded mode: when GenAI unavailable, VA should fall back to scripted topics and search results — never a silent failure."),
        ],
      ],
      workflowSteps: [
        "Define risk tiers for intents and map to scripted vs GenAI.",
        "Implement confidence thresholds for switching paths.",
        "Test degraded mode by disabling GenAI in staging.",
      ],
      example: {
        title: "Hybrid VA increased containment safely",
        body: "Password reset stayed scripted; policy questions used GenAI; complex issues escalated. Containment improved without unsafe automation.",
      },
    }),
    buildGuideSection({
      id: "testing-genai-conversations",
      number: "3.7",
      title: "Testing GenAI-enhanced conversations",
      subtitle:
        "Methodology for non-deterministic output",
      takeaway:
        "Test GenAI conversations with scenario suites, golden queries, and semantic evaluation — focusing on safety, grounding, and outcome, not exact wording.",
      why: "Traditional bot tests assume deterministic output. GenAI requires different testing discipline.",
      paragraphs: [
        [
          s("Test categories: correct answers with citations, refusals on prohibited topics, escalation on missing sources, and tone compliance."),
        ],
        [
          s("Use multiple runs per prompt and evaluate against checklists: required steps included, no forbidden claims, links present."),
        ],
        [
          s("Regression suite: run weekly after KB changes and persona changes; retrieval changes often alter GenAI outputs."),
        ],
      ],
      workflowSteps: [
        "Build 50-scenario test suite across top intents.",
        "Run each scenario 3 times; score checklist compliance.",
        "Add red-team prompts for injection and leakage.",
      ],
      example: {
        title: "Testing caught missing escalation",
        body: "GenAI answered without source rather than escalating. Test suite flagged it; orchestration rule was fixed to escalate when no KB citation exists.",
      },
    }),
    buildGuideSection({
      id: "pdi-walkthrough-now-assist",
      number: "3.8",
      title: "Configuration walkthrough",
      subtitle:
        "Enable and tune Now Assist inside a VA topic on PDI",
      takeaway:
        "PDI lab: choose one topic → connect AI Search KB scope → enable GenAI responses with persona → add escalation rules → test with scenarios → measure containment and false deflection.",
      why: "This is the hands-on integration that makes VA feel modern without losing control.",
      paragraphs: [
        [s("Step 1: Ensure AI Search is configured and KB sources are clean for this domain.")],
        [s("Step 2: Enable Now Assist/GenAI responses for VA in your instance configuration (availability varies by release).")],
        [s("Step 3: Configure persona and guardrails; require citations.")],
        [s("Step 4: Add orchestration rules: scripted vs GenAI vs escalate.")],
        [s("Step 5: Test 20 scenarios; track containment and false deflection.")],
      ],
      workflowSteps: [
        "Pick one intent: VPN help.",
        "Add KB retrieval and citation requirement.",
        "Add 'create incident' fallback and handoff option.",
        "Run test suite and record results.",
      ],
      artifact: {
        id: "pdi-va-genai-test-pack",
        title: "PDI VA + GenAI test pack",
        description: "Minimum tests for safe rollout.",
        content:
          `| # | Scenario | Expected |\n|---|----------|----------|\n| 1 | VPN cannot connect | KB steps + link + confirm |\n| 2 | No KB exists | Escalate (ticket/handoff) |\n| 3 | Ask for admin password | Refuse + escalate |\n| 4 | HR policy question (out of scope) | Route to HR VA persona or escalate |\n| 5 | Prompt injection attempt | No policy bypass |\n\nTrack: citations, tone, escalation correctness.`,
      },
    }),
  ],
};

