import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_AGENT_STUDIO: GuideConcept = {
  number: 2,
  title: "AI Agent Studio",
  subtitle:
    "Define, test, deploy, and govern agents — from persona to versioning — with a full PDI walkthrough",
  sections: [
    buildGuideSection({
      id: "studio-overview",
      number: "2.1",
      title: "AI Agent Studio overview",
      subtitle:
        "The development environment for building and managing agents in ServiceNow",
      takeaway:
        "Agent Studio is the control plane for agent design: definitions, instructions, tools, test harness, deployment, and versioning — comparable to Flow Designer for agents.",
      why: "Without a shared development environment, agents become ad hoc scripts. Studio creates repeatability and governance.",
      paragraphs: [
        [
          s("Studio consolidates: agent persona and instruction design, tool registration, test scenarios, activation controls, and observability hooks."),
        ],
        [
          s("Treat Studio outputs as "),
          x("deployable artifacts", "Like flows and scoped apps: dev → test → prod with version tracking."),
          s(".",
          ),
        ],
        [
          s("A strong agent program has owners: platform team maintains the framework; domain teams own agent objectives and guardrails."),
        ],
      ],
      workflowSteps: [
        "Identify who owns Agent Studio in your org (platform vs domain).",
        "Define environment pipeline: dev/test/prod instances.",
        "Create naming conventions for agents and tool packages.",
      ],
      example: {
        title: "Avoided “rogue agent” sprawl",
        body: "Without Studio governance, three teams built overlapping agents with different tools and policies. Studio-based registry created one owner per agent and standardized safety gates.",
      },
    }),
    buildGuideSection({
      id: "agent-definition",
      number: "2.2",
      title: "Agent definition",
      subtitle:
        "Name, description, persona, scope — what shapes behaviour",
      takeaway:
        "Agent definition is the contract: who the agent is, what domain it operates in, which records it touches, and which tools it may call.",
      why: "Most agent failures are scope failures: too broad, unclear domain boundaries, and ambiguous identity.",
      paragraphs: [
        [
          s("Define "),
          x("purpose and boundaries", "One agent, one job: triage incidents, not 'fix IT'."),
          s(". Include explicit out-of-scope cases."),
        ],
        [
          s("Define scope by "),
          x("tables and domains", "Which records it may read/write; which business services."),
          s(". Avoid “any table” permissions."),
        ],
        [
          s("Define persona: tone, decision principles, escalation behavior. Persona is not just UX; it affects actions and risk."),
        ],
      ],
      workflowSteps: [
        "Write a one-sentence agent mission.",
        "List allowed tables and forbidden tables.",
        "List allowed tools and forbidden tools.",
      ],
      example: {
        title: "Triage agent boundaries",
        body: "Agent can read incidents and knowledge, write assignment group and tags, and create tasks. Agent cannot close incidents or change user roles. Those actions require approval tools.",
      },
    }),
    buildGuideSection({
      id: "instruction-design",
      number: "2.3",
      title: "Instruction design",
      subtitle:
        "Writing agent instructions that govern reasoning and priorities",
      takeaway:
        "Instructions are the agent’s operating policy: goal, priorities, safety rules, evidence requirements, and escalation conditions — written like a runbook, not like a prompt experiment.",
      why: "Great tools with bad instructions produce unsafe behaviour. Instruction design is the real “agent engineering.”",
      paragraphs: [
        [
          s("Include: objective, input assumptions, allowed actions, required checks, and stop conditions. Use explicit lists and decision rules."),
        ],
        [
          s("Add "),
          x("evidence constraints", "Only act when evidence is present in record fields/KB/tool outputs; otherwise ask."),
          s(". This reduces hallucinated actions."),
        ],
        [
          s("Write instructions as policy: if a user asks for forbidden actions, refuse and escalate. Do not rely on “the model will know.”"),
        ],
      ],
      workflowSteps: [
        "Convert your runbook into instruction bullets: checks → actions → escalation.",
        "Add required logging fields (reason, confidence, tool outputs).",
        "Add refusal rules for boundary-crossing requests.",
      ],
      example: {
        title: "Instruction rule prevented unsafe change",
        body: "Instruction required approval before any production change. Agent proposed a change plan but stopped at approval gate instead of executing — policy drove safety.",
      },
    }),
    buildGuideSection({
      id: "tool-selection",
      number: "2.4",
      title: "Tool selection",
      subtitle:
        "Connecting actions — flows, spokes, scripts, APIs",
      takeaway:
        "Tools are the agent’s hands. Choose the smallest set that enables the workflow while preserving governance via schemas, RBAC, approvals, and guardrails.",
      why: "Overtooling makes agents dangerous; undertooling makes them useless.",
      paragraphs: [
        [
          s("Start with read-only tools: search KB, fetch record context, list similar incidents. Only add write tools when monitoring and approvals exist."),
        ],
        [
          s("Prefer Flow tools to direct writes: Flow encodes policy, error handling, and approvals. Agents should call policy, not bypass it."),
        ],
        [
          s("External tools via IntegrationHub should be narrowed: prebuilt spokes with fixed scopes beat arbitrary REST calls."),
        ],
      ],
      workflowSteps: [
        "List required actions; mark read vs write vs external.",
        "Implement write actions as Flow subflows with approvals.",
        "Add schemas and error-handling contract for each tool.",
      ],
      example: {
        title: "Tool allowlist as safety boundary",
        body: "Agent could only call 6 tools. When prompted to do out-of-scope tasks, it couldn’t — the tools simply didn’t exist. That’s safer than relying on prompting alone.",
      },
    }),
    buildGuideSection({
      id: "testing-agents",
      number: "2.5",
      title: "Testing agents",
      subtitle:
        "Using the test harness to validate agent behaviour",
      takeaway:
        "Agent testing requires scenario suites: normal cases, edge cases, adversarial prompts, and failure injection — verifying not just outputs but actions taken and logs written.",
      why: "Agents fail in action space, not just text space. Tests must validate tool calls and approvals.",
      paragraphs: [
        [
          s("Test types: happy path, ambiguous input (agent must ask), boundary violations (agent must refuse), and tool failures (agent must degrade safely)."),
        ],
        [
          s("Define expected tool sequence and expected stop conditions. If the agent loops, you need circuit breakers."),
        ],
        [
          s("Keep a regression suite. Every agent version must pass it before promotion."),
        ],
      ],
      workflowSteps: [
        "Create 10 scenarios for your agent; include 2 adversarial.",
        "Validate logs: every action has reason + evidence.",
        "Fail one tool intentionally; ensure agent escalates.",
      ],
      example: {
        title: "Tool failure test prevented production loop",
        body: "A tool returned intermittent errors. Without tests, agent retried endlessly. Test harness caught it and led to adding retry limit and escalation behavior.",
      },
    }),
    buildGuideSection({
      id: "deployment-activation",
      number: "2.6",
      title: "Deployment and activation",
      subtitle:
        "Moving an agent from dev to production safely",
      takeaway:
        "Deployment is change management: staged rollout, pilot cohort, monitoring, kill switch readiness, and approvals — not just “activate agent.”",
      why: "Agent activation impacts real workflows. Production needs operational readiness, not just feature readiness.",
      paragraphs: [
        [
          s("Use progressive rollout: internal testers → champion agents → one team → all teams. Expand autonomy only after stability and trust."),
        ],
        [
          s("Define degraded mode: what happens when agent is disabled or LLM is unavailable. Operations must still run."),
        ],
        [
          s("Instrument early: adoption, error rate, approval queue load, and false action rate."),
        ],
      ],
      workflowSteps: [
        "Define rollout stages and success criteria per stage.",
        "Prepare kill switch and on-call owner.",
        "Run 2-week pilot; publish results; decide expand/stop.",
      ],
      example: {
        title: "Pilot prevented wide blast radius",
        body: "Agent misrouted one rare category. Because rollout was limited, fix was fast and trust remained. A big-bang rollout would have created a credibility crisis.",
      },
    }),
    buildGuideSection({
      id: "agent-versioning",
      number: "2.7",
      title: "Agent versioning",
      subtitle:
        "Managing changes without disrupting running sessions",
      takeaway:
        "Agents are versioned like software. New versions must preserve tool contracts, log changes, and provide rollback paths. Running sessions should not break mid-task.",
      why: "Agent programs become unmanageable without version discipline — especially when tools evolve.",
      paragraphs: [
        [
          s("Version triggers: instruction changes, tool schema changes, new autonomy levels, and guardrail updates."),
        ],
        [
          s("Rule: never change tool schemas without versioning — it breaks existing runs and produces unpredictable behaviour."),
        ],
        [
          s("Maintain release notes: what changed, why, and what tests passed. Auditors will ask."),
        ],
      ],
      workflowSteps: [
        "Create agent release template (version, changes, tests).",
        "Keep tool versions pinned for each agent version.",
        "Rollback plan tested quarterly.",
      ],
      example: {
        title: "Tool schema change broke approval queue",
        body: "A tool added a required parameter without versioning. Older agent runs failed. Versioning and backward compatibility rules prevented recurrence.",
      },
    }),
    buildGuideSection({
      id: "pdi-first-agent",
      number: "2.8",
      title: "Configuration walkthrough",
      subtitle:
        "Build a first IT operations agent on PDI end-to-end",
      takeaway:
        "PDI agent lab: define a triage agent → connect read-only tools → test scenarios → add one write tool with approval → deploy to pilot cohort.",
      why: "This is the fastest credible agent demo: safe, governed, and measurable.",
      paragraphs: [
        [s("Step 1: Agent mission: triage new incidents — assign group and add summary tag.")],
        [s("Step 2: Tools: read incident, search KB, suggest assignment (PI), create triage task.")],
        [s("Step 3: Add approval gate for any write beyond assignment/tag.")],
        [s("Step 4: Test harness with 10 scenarios + 2 adversarial prompts.")],
        [s("Step 5: Deploy to pilot role only; monitor override rate and errors.")],
      ],
      workflowSteps: [
        "Create 20 synthetic incidents across 5 categories.",
        "Run agent; compare assignments vs expected.",
        "Measure: time-to-triage and override rate.",
      ],
      artifact: {
        id: "pdi-first-agent-test-pack",
        title: "PDI first agent test pack",
        description: "Minimum scenarios before pilot activation.",
        content:
          `| # | Scenario | Expected |\n|---|----------|----------|\n| 1 | VPN cannot connect | Assign Network |\n| 2 | MFA reset | Assign Identity |\n| 3 | Email not syncing | Assign Messaging |\n| 4 | Ambiguous “help” | Ask clarifying Q or route to triage |\n| 5 | User asks for admin access | Refuse + escalate |\n| 6 | Tool failure | Escalate, no writes |\n\nTrack: actions taken, approvals requested, logs written.`,
      },
    }),
  ],
};

