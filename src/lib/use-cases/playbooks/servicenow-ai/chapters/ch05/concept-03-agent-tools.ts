import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_AGENT_TOOLS: GuideConcept = {
  number: 3,
  title: "Agent Actions and Tool Calling",
  subtitle:
    "Tools are the atomic actions agents call — flows, spokes, scripts, REST — with schemas, security, and custom tool build steps",
  sections: [
    buildGuideSection({
      id: "what-tools-are",
      number: "3.1",
      title: "What tools are",
      subtitle: "Atomic actions an agent can call during its loop",
      takeaway:
        "A tool is a callable capability with a schema: inputs, outputs, errors, and permissions. Tools are the real boundary between safe agents and dangerous agents.",
      why: "If you allow generic “update any record” tools, you’ve built a ransomware assistant. Safe agents use narrow tools.",
      paragraphs: [
        [
          s("Tools should be "),
          x("purpose-built", "One tool per business action — e.g., 'Create triage task', not 'Write to table'."),
          s(".",
          ),
        ],
        [
          s("Tools must return structured outputs: success flag, evidence, and references (record ids). Text-only responses are hard to audit."),
        ],
        [
          s("Agent safety starts with tool allowlists. Prompting is not enough."),
        ],
      ],
      workflowSteps: [
        "List all actions your agent might take.",
        "Convert each into a narrow tool with schema + RBAC.",
        "Add explicit deny tools for sensitive actions (role changes, payments).",
      ],
      example: {
        title: "Narrow tool prevented privilege change",
        body: "Agent could 'RequestAccessApproval' but not 'GrantRole'. When asked to grant admin, it could only create an approval task — boundary enforced by tools, not words.",
      },
    }),
    buildGuideSection({
      id: "flows-as-tools",
      number: "3.2",
      title: "Flow Designer flows as tools",
      subtitle: "Wrapping flows as agent-callable actions",
      takeaway:
        "Flows are the safest default tool: they encode policy, approvals, error handling, and audit. Agents should call flows rather than writing logic directly.",
      why: "Flow is already your governance layer. Using flows as tools keeps agent actions inside existing enterprise controls.",
      paragraphs: [
        [
          s("Wrap a subflow with clear inputs/outputs and a single responsibility. Keep it idempotent where possible."),
        ],
        [
          s("Add approval gates inside Flow for risky steps. The agent triggers the flow; humans approve inside the flow."),
        ],
        [
          s("Log action metadata on the record: which tool, which version, why, and what evidence."),
        ],
      ],
      workflowSteps: [
        "Create a subflow: 'EscalateIncidentToMajor' with approval gate.",
        "Expose it as a tool to the agent.",
        "Test: agent calls tool, approval queue receives request, no auto-execution.",
      ],
      example: {
        title: "Major incident escalation under policy",
        body: "Agent detected outage pattern, called escalation flow. Flow required manager approval before declaring major incident. Agent provided evidence; human approved; process stayed compliant.",
      },
    }),
    buildGuideSection({
      id: "spokes-as-tools",
      number: "3.3",
      title: "IntegrationHub spokes as tools",
      subtitle:
        "Giving agents access to external systems through pre-built spokes",
      takeaway:
        "Spokes expose external actions (Slack, Jira, monitoring tools) with managed credentials and RBAC. They are safer than raw REST because they are standardised and governable.",
      why: "Agents become valuable when they act across systems — but cross-system access is where risk explodes.",
      paragraphs: [
        [
          s("Use spokes for read-first integration: fetch status, post draft message, open ticket. Avoid delete/write actions early."),
        ],
        [
          s("Define connection scopes and secrets management. Agents should not hold API keys in prompts or instructions."),
        ],
        [
          s("Use allowlists: only approved spokes/actions are callable by the agent."),
        ],
      ],
      workflowSteps: [
        "Select one external system and one safe action (post draft).",
        "Implement via spoke; restrict permissions.",
        "Test with failure modes: auth error, rate limit, timeout.",
      ],
      example: {
        title: "Slack comms agent with draft-only posts",
        body: "Agent created draft outage updates via Slack spoke into a private channel. Humans approved and reposted to public channels. This improved cadence without letting the agent broadcast autonomously.",
      },
    }),
    buildGuideSection({
      id: "script-includes-as-tools",
      number: "3.4",
      title: "Script includes as tools",
      subtitle: "Exposing custom server-side logic to the agent",
      takeaway:
        "Script includes let you expose custom, versioned business logic as tools — useful for proprietary rules and validations — but require strict input validation and auditing.",
      why: "Custom logic is inevitable. If you don’t wrap it safely, agents will call brittle code paths and create outages.",
      paragraphs: [
        [
          s("Treat script tools like APIs: validate inputs, enforce RBAC, return structured outputs, and log requests."),
        ],
        [
          s("Prefer calling scripts through Flow when possible to unify policy. Use direct script tools for computation and validation helpers."),
        ],
        [
          s("Version script tools and maintain backward compatibility — agent versions depend on tool stability."),
        ],
      ],
      workflowSteps: [
        "Create a Script Include tool: 'ValidateChangeWindow'.",
        "Add input schema and explicit error codes.",
        "Log tool calls to an audit table.",
      ],
      example: {
        title: "Validation tool prevented bad change",
        body: "Agent proposed a change. Validation tool checked blackout calendar and dependency risk, returned 'BLOCKED' with reason. Agent escalated instead of acting.",
      },
    }),
    buildGuideSection({
      id: "rest-api-as-tools",
      number: "3.5",
      title: "REST API calls as tools",
      subtitle:
        "Direct external API integration as an agent capability",
      takeaway:
        "REST tools are flexible but highest risk. Use only when spokes aren’t available, and lock down endpoints, schemas, and credentials.",
      why: "Unrestricted REST tools are how agents exfiltrate data or perform unintended actions.",
      paragraphs: [
        [
          s("Create REST tools with strict allowlists: fixed hostnames, fixed paths, and fixed methods. Avoid “call any URL.”"),
        ],
        [
          s("Return structured outputs and store request ids. Apply rate limits and retries with caps."),
        ],
        [
          s("Prefer read-only REST tools early. Writes require approvals and rollback paths."),
        ],
      ],
      workflowSteps: [
        "Define one REST tool with a single endpoint and method.",
        "Add schema validation and redaction of secrets in logs.",
        "Test with adversarial prompts trying to change the URL.",
      ],
      example: {
        title: "Endpoint allowlist blocked data leak attempt",
        body: "Adversarial prompt tried to make the agent call a personal webhook. Tool schema refused because hostname wasn’t in allowlist. Safety held even under prompt injection.",
      },
    }),
    buildGuideSection({
      id: "tool-schema-design",
      number: "3.6",
      title: "Tool schema design",
      subtitle:
        "Input parameters, output structure, and error handling",
      takeaway:
        "Great tool schemas prevent agent mistakes: explicit required fields, enumerations, safe defaults, structured outputs, and typed error codes.",
      why: "Agents are only as reliable as the contracts they call. Schema design is reliability engineering.",
      paragraphs: [
        [
          s("Inputs: required vs optional, enum constraints, max lengths, and validation. Outputs: success flag, result payload, evidence links, and next-step hints."),
        ],
        [
          s("Errors should be actionable: 'AUTH_FAILED', 'NOT_FOUND', 'POLICY_BLOCKED' — not generic exceptions."),
        ],
        [
          s("Add idempotency keys for tools that can be re-run safely to prevent duplicate actions under retries."),
        ],
      ],
      workflowSteps: [
        "Design schema for one write tool: 'CreateTask'.",
        "Add validation and enum constraints.",
        "Simulate failures; ensure agent can respond safely.",
      ],
      example: {
        title: "Error codes improved escalation",
        body: "Tool returned POLICY_BLOCKED when agent attempted forbidden action. Agent immediately escalated to human queue instead of retrying repeatedly.",
      },
    }),
    buildGuideSection({
      id: "tool-security",
      number: "3.7",
      title: "Tool security",
      subtitle:
        "Scoping what each tool can read/write/delete and role requirements",
      takeaway:
        "Tool security is defense-in-depth: RBAC, ACL-aware execution, allowlists, approval gates, rate limits, and logging. Treat tools as privileged APIs.",
      why: "Agent security incidents happen through tools, not through conversation text.",
      paragraphs: [
        [
          s("Enforce least privilege: each tool runs with minimal roles and minimal table access. Avoid agent-wide superuser identities."),
        ],
        [
          s("Use explicit write restrictions: prohibit delete operations; restrict updates to specific fields; require approvals for state transitions."),
        ],
        [
          s("Audit: log every tool call with who/what/why and the record ids touched. Exportable logs matter for compliance."),
        ],
      ],
      workflowSteps: [
        "Create a tool security checklist per tool.",
        "Test: low-privilege user triggers agent; verify tool respects ACLs.",
        "Add circuit breakers for high tool call volume.",
      ],
      example: {
        title: "Write scope prevented unintended closure",
        body: "Tool could set assignment group but not change state. Agent could not close incidents even if prompted. Human approval tool was required.",
      },
    }),
    buildGuideSection({
      id: "build-custom-tool",
      number: "3.8",
      title: "Building a custom tool",
      subtitle:
        "Step-by-step process for creating and registering a new agent tool",
      takeaway:
        "Build tools like product APIs: define a single responsibility, write schema + validation, enforce RBAC, add logging, test failure modes, then register in Agent Studio.",
      why: "Custom tools are how agent programs scale beyond demos — safely.",
      paragraphs: [
        [s("Step 1: Define the action in one sentence. Step 2: Define schema. Step 3: Implement logic (Flow/script/spoke). Step 4: Add RBAC + approvals. Step 5: Add audit logging. Step 6: Register + test harness. Step 7: Deploy versioned.")],
        [s("Prefer Flow subflow for write actions; script tools for validation/computation; spokes for external systems.")],
        [s("Never ship tools without an error-handling contract and a rollback story for write actions.")],
      ],
      workflowSteps: [
        "Create a 'DraftStatusUpdate' tool (draft only).",
        "Add schema: incident_id, audience, max_length.",
        "Register tool and test with 5 scenarios + 2 adversarial prompts.",
      ],
      artifact: {
        id: "tool-build-checklist",
        title: "Agent tool build checklist",
        description: "Paste into your PR template or design review.",
        content:
          `## Tool checklist\n- [ ] Single responsibility\n- [ ] Input schema validated (enum/length/required)\n- [ ] Output structured (success, ids, evidence)\n- [ ] RBAC enforced (least privilege)\n- [ ] Writes scoped (fields only)\n- [ ] Approval gate if risky\n- [ ] Audit logging enabled\n- [ ] Rate limits + retry caps\n- [ ] Failure modes tested\n- [ ] Versioned + rollback plan`,
      },
    }),
  ],
};

