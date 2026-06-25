import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_INTEGRATIONHUB_AI_SPOKES: GuideConcept = {
  number: 2,
  title: "IntegrationHub and AI Spokes",
  subtitle:
    "Spokes, actions, auth, streaming, cost controls, pattern library, and testing for external AI integrations",
  sections: [
    buildGuideSection({
      id: "ih-architecture",
      number: "2.1",
      title: "IntegrationHub architecture",
      subtitle:
        "How spokes, actions, and steps connect ServiceNow to external systems",
      takeaway:
        "IntegrationHub is ServiceNow’s integration runtime: spokes bundle reusable actions; actions become Flow steps; connections manage credentials; and executions are logged and governable.",
      why: "Agentic AI and AI-augmented workflows are only as powerful as their tool access. IntegrationHub is the safest way to reach external systems at scale.",
      paragraphs: [
        [
          s("Think in layers: connection (credentials) → spoke (package) → action (unit of work) → flow step (or tool). Keep each layer versioned and owned."),
        ],
        [
          s("Governance advantage: IntegrationHub provides execution logs, error handling, and centralized credential management — better than embedding API keys in scripts."),
        ],
        [
          s("Design rule: treat spokes like APIs. Stable contracts, strict schemas, and change control prevent breaking production flows."),
        ],
      ],
      workflowSteps: [
        "Inventory external systems you need (Slack, monitoring, CRM, LLMs).",
        "Prefer spokes over ad hoc REST whenever possible.",
        "Define a spoke ownership and versioning policy.",
      ],
      example: {
        title: "One spoke, many workflows",
        body: "A 'StatusPage Draft Update' spoke action was reused across incident comms flows, VA handoffs, and agent tools. Governance improved because the integration was centralized.",
      },
    }),
    buildGuideSection({
      id: "ai-platform-spokes",
      number: "2.2",
      title: "AI platform spokes",
      subtitle:
        "Pre-built spokes for OpenAI, Azure OpenAI, Hugging Face, and others",
      takeaway:
        "AI spokes wrap common LLM providers into reusable actions. Use them when you need external AI beyond Now Assist — but apply strict governance and cost controls.",
      why: "External AI calls are powerful but risky: data exposure, cost spikes, and provider outages. Spokes help standardize.",
      paragraphs: [
        [
          s("Use external LLM spokes for: niche models, specialized embeddings, or when corporate policy mandates a specific provider."),
        ],
        [
          s("Do not use external AI spokes to bypass Now Assist governance for core ITSM/HR workflows. Keep system-of-record workflows on-platform."),
        ],
        [
          s("Always define what data leaves ServiceNow. Many AI integrations fail in security review because data flow is undocumented."),
        ],
      ],
      workflowSteps: [
        "Define which use cases require external AI and why.",
        "Implement data minimization: send only needed fields.",
        "Add fallback path when provider is unavailable.",
      ],
      example: {
        title: "Embeddings for niche corpus",
        body: "Company used an external embeddings model for a large engineering doc corpus not in ServiceNow. Spoke returned embeddings; ServiceNow stored only IDs and retrieval snippets — minimizing data exposure.",
      },
    }),
    buildGuideSection({
      id: "custom-ai-spoke",
      number: "2.3",
      title: "Building a custom AI spoke",
      subtitle:
        "Wrapping an external AI API as a reusable IntegrationHub action",
      takeaway:
        "Custom AI spokes should be designed like product integrations: fixed endpoints, strict schemas, redacted logs, retries with caps, and versioned actions.",
      why: "Most integration failures are caused by loose contracts. A good spoke makes AI callable safely from any flow or agent.",
      paragraphs: [
        [
          s("Define action contract: inputs (prompt/context), outputs (structured fields), and error codes. Avoid returning unstructured text that downstream steps can’t validate."),
        ],
        [
          s("Credential management belongs in connections. Never embed keys in scripts or flow variables that get logged."),
        ],
        [
          s("Add safety: allowlist endpoints and enforce payload size limits to prevent accidental data dumps."),
        ],
      ],
      workflowSteps: [
        "Define the action: 'Generate_Summary_From_Incident'.",
        "Add schema validation and max payload constraints.",
        "Return: summary + confidence + citations + request_id.",
      ],
      example: {
        title: "Custom spoke used across multiple domains",
        body: "One spoke action generated customer comms drafts. It returned a structured response and always required approval before send. It was reused across ITSM and CSM safely.",
      },
    }),
    buildGuideSection({
      id: "streaming",
      number: "2.4",
      title: "Streaming responses",
      subtitle:
        "Handling token-by-token output in flow context",
      takeaway:
        "Streaming improves UX for interactive channels but complicates Flow. Most background automations should use non-streaming calls and treat outputs as single artifacts.",
      why: "Streaming is seductive but often unnecessary for back-end workflows. Use it only when humans are waiting on the response in a UI.",
      paragraphs: [
        [
          s("For Flow, streaming usually means: accumulate partial tokens into a buffer, update a draft field progressively, and handle mid-stream failure gracefully."),
        ],
        [
          s("For background processes, streaming adds complexity without value. Generate once, validate, then write."),
        ],
        [
          s("If streaming is used, enforce timeouts and maximum tokens to avoid runaway costs."),
        ],
      ],
      workflowSteps: [
        "Decide: interactive UI vs background flow.",
        "If interactive, stream into a draft field with cancel option.",
        "If background, disable streaming and validate output structure.",
      ],
      example: {
        title: "Streaming in agent workspace",
        body: "Agents liked seeing drafts appear progressively for customer emails. For incident routing flows, streaming was removed to simplify and reduce failure modes.",
      },
    }),
    buildGuideSection({
      id: "auth-patterns",
      number: "2.5",
      title: "Authentication patterns for AI APIs",
      subtitle:
        "OAuth, API keys, and credential management",
      takeaway:
        "Use connection objects for credentials; prefer OAuth where supported; scope secrets minimally; rotate keys; and ensure logs redact sensitive values.",
      why: "Credential mistakes are the fastest path to security incidents in AI integrations.",
      paragraphs: [
        [
          s("API keys are simple but risky: rotation and scope control are harder. OAuth provides better control and revocation."),
        ],
        [
          s("Never pass secrets through prompts. Keep secrets out of LLM context entirely."),
        ],
        [
          s("Implement rate limits per credential to prevent cost spikes and provider bans."),
        ],
      ],
      workflowSteps: [
        "Create least-privilege connection credentials.",
        "Enable rotation schedule and owner.",
        "Test redaction: ensure logs do not store secrets.",
      ],
      example: {
        title: "Key leak avoided",
        body: "A flow accidentally logged request headers. Redaction policy ensured API keys were not stored. Without it, incident response would have been required.",
      },
    }),
    buildGuideSection({
      id: "pattern-library",
      number: "2.6",
      title: "The AI spoke pattern library",
      subtitle:
        "Five common spoke patterns and when to use each",
      takeaway:
        "Common patterns: draft generation, classification, extraction, retrieval/embedding, and evaluation. Choose pattern by output type and governance needs.",
      why: "Patterns make integration design repeatable and reviewable.",
      paragraphs: [
        [
          x("Draft generation", "Emails, summaries, reports."),
          s(" "),
          x("Classification", "Route, tag, prioritize."),
        ],
        [
          x("Extraction", "Documents/tickets to fields."),
          s(" "),
          x("Retrieval/embedding", "Search corpora and ground answers."),
        ],
        [
          x("Evaluation", "Check output quality, policy compliance."),
          s(" — especially important before autonomous actions."),
        ],
      ],
      workflowSteps: [
        "For each AI integration, label which pattern it is.",
        "Apply standard schema + monitoring per pattern.",
        "Create reusable subflows for each pattern.",
      ],
      example: {
        title: "Evaluation gate prevented unsafe email",
        body: "Draft generation action was followed by an evaluation action that checked for forbidden claims. Unsafe drafts were routed to human review automatically.",
      },
    }),
    buildGuideSection({
      id: "cost-management",
      number: "2.7",
      title: "Cost management for external AI calls",
      subtitle:
        "Token counting, rate limiting, and caching in spoke design",
      takeaway:
        "External AI spend scales with context size and call frequency. Control it with payload caps, model routing, rate limits, caching, and batch processing where possible.",
      why: "The #1 operational surprise with external AI is cost. Design cost controls before you scale.",
      paragraphs: [
        [
          s("Cap inputs: truncate notes, limit retrieved chunks, and store summaries for reuse. Most flows don’t need the full transcript every time."),
        ],
        [
          s("Cache stable outputs: policy summaries and known responses shouldn’t be regenerated for every user."),
        ],
        [
          s("Add circuit breakers: if cost spikes or provider errors increase, degrade to non-AI flow paths."),
        ],
      ],
      workflowSteps: [
        "Add max input size and max token output to actions.",
        "Implement caching for repeated requests (by key).",
        "Set monthly cost dashboard and alert thresholds.",
      ],
      example: {
        title: "Caching cut spend by half",
        body: "Policy answers were regenerated constantly. Caching by policy version reduced LLM calls significantly while keeping responses consistent and grounded.",
      },
    }),
    buildGuideSection({
      id: "testing-debugging",
      number: "2.8",
      title: "Testing and debugging spokes",
      subtitle:
        "Tools and techniques for validating spoke behaviour",
      takeaway:
        "Test spokes like APIs: unit tests for schema, integration tests for auth/latency, failure injection, and log inspection — before embedding in critical flows.",
      why: "Spoke defects cascade across every workflow that depends on them.",
      paragraphs: [
        [
          s("Test success and failure modes: auth failures, timeouts, rate limits, and malformed outputs. Ensure downstream flows handle each safely."),
        ],
        [
          s("Observe logs: request_id, latency, token usage (if available), and error codes. Debugging without telemetry becomes guesswork."),
        ],
        [
          s("Version actions: never change output structure without bumping version and updating dependent flows."),
        ],
      ],
      workflowSteps: [
        "Create test harness flow that calls the spoke action.",
        "Inject failures and verify degraded mode behavior.",
        "Document action contract and version history.",
      ],
      artifact: {
        id: "spoke-test-checklist",
        title: "AI spoke test checklist",
        description: "Minimum validations before production use.",
        content:
          `## Spoke tests\n- [ ] Auth success + auth failure\n- [ ] Timeout handling\n- [ ] Rate limit handling\n- [ ] Output schema validation\n- [ ] Redaction of secrets in logs\n- [ ] Payload size limits\n- [ ] Retry caps + backoff\n- [ ] Cost telemetry captured\n- [ ] Versioned outputs + rollback`,
      },
    }),
  ],
};

