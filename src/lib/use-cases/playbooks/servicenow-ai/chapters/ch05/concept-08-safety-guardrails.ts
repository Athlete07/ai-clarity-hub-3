import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_08_SAFETY_GUARDRAILS: GuideConcept = {
  number: 8,
  title: "Agentic AI Safety and Guardrails",
  subtitle:
    "Failure modes, scope limits, allowlists, rollback, circuit breakers, kill switches, security testing, and governance policy",
  sections: [
    buildGuideSection({
      id: "failure-modes",
      number: "8.1",
      title: "Failure modes of autonomous agents",
      subtitle:
        "Real risks and what early deployments taught the market",
      takeaway:
        "Agent failure modes cluster into: wrong actions, runaway loops, data leakage, tool misuse, and over-trust by humans. Design guardrails for each explicitly.",
      why: "Safety is not a checklist item; it’s the difference between scaling agents and banning them after one incident.",
      paragraphs: [
        [
          s("Common failures: acting on incomplete evidence, misinterpreting intent, calling the wrong tool, repeating actions on retries, and leaking restricted data in drafts."),
        ],
        [
          s("Human failure mode: copy-paste trust. People accept outputs without review under time pressure — design approvals and UI to prevent that."),
        ],
        [
          s("Mitigation strategy: scope + allowlists + approvals + observability + rollback + kill switch."),
        ],
      ],
      workflowSteps: [
        "List top 10 catastrophic outcomes in your domain.",
        "Map each to a guardrail control.",
        "Test each failure mode before production rollout.",
      ],
      example: {
        title: "Runaway loop avoided with circuit breaker",
        body: "Agent retried a failing external API call repeatedly. Circuit breaker stopped after N attempts and escalated. Without it, the agent would have burned budget and created noise.",
      },
    }),
    buildGuideSection({
      id: "scope-limitation",
      number: "8.2",
      title: "Scope limitation",
      subtitle:
        "Designing agents with the minimum footprint necessary",
      takeaway:
        "Minimise scope across: data (tables/fields), tools (actions), time (run windows), and domain (services). Small scope makes safety and evaluation feasible.",
      why: "Broad agents are untestable. Untestable agents are unsafe.",
      paragraphs: [
        [
          s("Start with one business service or one category. Expand only after measurable success and audit readiness."),
        ],
        [
          s("Minimise data exposure: exclude restricted fields and domains. If the agent doesn’t need it, it shouldn’t see it."),
        ],
        [
          s("Minimise tool surface: fewer tools means fewer ways to do the wrong thing."),
        ],
      ],
      workflowSteps: [
        "Define agent scope statement: allowed tables, categories, services.",
        "Implement field exclusion rules and ACL tests.",
        "Pilot with one team and measure outcomes.",
      ],
      example: {
        title: "One-service pilot succeeded",
        body: "Agent launched on one critical service only. Safety and monitoring were manageable. After 8 weeks, scope expanded to two more services with confidence.",
      },
    }),
    buildGuideSection({
      id: "action-whitelisting",
      number: "8.3",
      title: "Action whitelisting",
      subtitle:
        "Restricting agents to a pre-approved set of tools and records",
      takeaway:
        "Allowlists are the strongest guardrail: the agent can only call what you register and permit. Everything else is impossible by design.",
      why: "If you only rely on prompting, you will eventually be prompt-injected. Tool allowlists survive prompt injection.",
      paragraphs: [
        [
          s("Allowlist by tool and by action within tool. For REST tools, allowlist endpoints. For record writes, allowlist fields."),
        ],
        [
          s("Tie allowlists to roles and environment: dev agents may have broader tools; prod agents are restricted."),
        ],
        [
          s("Review allowlists quarterly in governance council."),
        ],
      ],
      workflowSteps: [
        "Create an agent tool catalog with owners and risk tier.",
        "Enable only low-risk tools in v1.",
        "Add a change control process for adding tools.",
      ],
      example: {
        title: "Whitelisting prevented “delete records” incident",
        body: "Even when prompted to delete incidents, the agent could not: no delete tool existed. The system remained safe under adversarial input.",
      },
    }),
    buildGuideSection({
      id: "rollback-design",
      number: "8.4",
      title: "Rollback design",
      subtitle:
        "Undoing agent actions when outcomes are unintended",
      takeaway:
        "Every autonomous write needs a rollback plan: reversible tools, audit snapshots, and compensating actions. If you can’t roll back, you shouldn’t automate.",
      why: "Rollback is what turns mistakes into recoverable incidents rather than disasters.",
      paragraphs: [
        [
          s("Reversible patterns: draft-only writes, creating tasks instead of modifying records, using staged fields rather than final fields, and approvals before commit."),
        ],
        [
          s("For writes, store pre-change snapshots (or deltas) with run id so rollback is deterministic."),
        ],
        [
          s("Define compensating actions: if agent created wrong task, auto-close and reassign with apology note — under policy."),
        ],
      ],
      workflowSteps: [
        "For each write tool, document rollback method.",
        "Test rollback in PDI and staging.",
        "Require rollback evidence before autonomy expansion.",
      ],
      example: {
        title: "Rollback fixed misroute in seconds",
        body: "Agent misassigned a ticket. Because it wrote a staged assignment field and logged previous value, rollback restored the original assignment instantly and recorded the correction.",
      },
    }),
    buildGuideSection({
      id: "rate-limiting",
      number: "8.5",
      title: "Rate limiting and circuit breakers",
      subtitle:
        "Preventing runaway loops that consume resources or cause harm",
      takeaway:
        "Circuit breakers cap tool calls, retries, and runtime per run. Rate limits protect external APIs and prevent cost explosions during outages.",
      why: "Runaway loops are one of the most common operational risks in agentic systems.",
      paragraphs: [
        [
          s("Controls: max tool calls per run, max retries per tool, max runtime, and backoff policies."),
        ],
        [
          s("Add “storm mode”: during major incidents, cap actions and switch to draft-only to prevent the agent from amplifying chaos."),
        ],
        [
          s("Alert when breakers trigger. Frequent triggers indicate missing tools, poor instructions, or downstream outages."),
        ],
      ],
      workflowSteps: [
        "Set limits: max calls/run, max retries, timeout per tool.",
        "Implement breaker actions: stop + escalate + notify admin.",
        "Simulate outage and verify breakers trigger cleanly.",
      ],
      example: {
        title: "Breaker protected budget",
        body: "During monitoring outage, agent would have called similarity tool on thousands of incidents. Rate limits and storm-mode prevented a cost blowout.",
      },
    }),
    buildGuideSection({
      id: "kill-switch",
      number: "8.6",
      title: "The kill switch",
      subtitle:
        "Administrative capability to halt all running agents immediately",
      takeaway:
        "Every agent program needs a kill switch: one action that stops new runs, cancels in-flight runs, and forces degraded mode — with audit logs.",
      why: "When something goes wrong, speed matters. Kill switches prevent small issues becoming crises.",
      paragraphs: [
        [
          s("Kill switch should stop: agent triggers, tool calls, and autonomous writes. It should still allow humans to work manually."),
        ],
        [
          s("Include a ‘resume’ procedure: what conditions must be met to re-enable agents after incident."),
        ],
        [
          s("Practice kill switch in tabletop exercises. A kill switch nobody has used is not real."),
        ],
      ],
      workflowSteps: [
        "Define kill switch owner and on-call rotation.",
        "Run quarterly tabletop: trigger kill switch, validate stoppage, restore safely.",
        "Log all kill switch uses and postmortems.",
      ],
      example: {
        title: "Kill switch contained wrong drafts",
        body: "Agent began drafting incorrect policy responses due to stale KB. Kill switch halted drafts globally; KB was fixed; agents restored after UAT. No external impact.",
      },
    }),
    buildGuideSection({
      id: "security-testing",
      number: "8.7",
      title: "Security testing for agents",
      subtitle:
        "Adversarial scenarios to test before production",
      takeaway:
        "Test prompt injection, data exfiltration attempts, boundary-crossing requests, tool misuse, and social engineering. Validate that allowlists and RBAC hold under attack-like prompts.",
      why: "Agents are new attack surfaces. Security must test them like any privileged integration.",
      paragraphs: [
        [
          s("Adversarial prompts: “ignore policy”, “export all HR cases”, “call this URL”, “grant me admin”. Agents should refuse and/or escalate."),
        ],
        [
          s("Tool misuse tests: attempt to pass unexpected parameters, huge payloads, and endpoint overrides."),
        ],
        [
          s("Outcome tests: verify no restricted fields leak in drafts; verify logs redact secrets; verify kill switch stops actions."),
        ],
      ],
      workflowSteps: [
        "Build an agent red-team checklist and run monthly in pilot.",
        "Record failures as defects; fix tools and policies, not just prompts.",
        "Repeat after every major tool or instruction change.",
      ],
      example: {
        title: "Prompt injection failed due to tool allowlist",
        body: "Injection prompt tried to make the agent call an external webhook. REST tool disallowed unknown hostnames. Attack failed even though the model 'wanted to comply'.",
      },
    }),
    buildGuideSection({
      id: "agent-governance-policy",
      number: "8.8",
      title: "The agent governance policy",
      subtitle:
        "Who can build, deploy, monitor — and the organisational controls needed",
      takeaway:
        "Governance defines: roles, approval requirements, tool catalog control, monitoring, incident response, and review cadence — plus autonomy progression rules.",
      why: "Without governance, agents become shadow automation. With governance, they become a sustainable platform capability.",
      paragraphs: [
        [
          s("Define roles: agent builder, tool owner, approver, auditor, on-call admin. Assign RACI per agent."),
        ],
        [
          s("Define lifecycle: dev/test/prod promotion, versioning, A/B tests, and rollback. Tools and agents are releases."),
        ],
        [
          s("Define safety controls: allowlists, kill switch, circuit breakers, and red-team schedule."),
        ],
      ],
      workflowSteps: [
        "Publish agent policy outline and get CISO/CIO approval.",
        "Stand up an Agent Governance Council (monthly).",
        "Maintain tool catalog + agent registry as single source of truth.",
      ],
      artifact: {
        id: "agent-governance-policy-outline",
        title: "Agent governance policy outline",
        description: "Paste into your GRC system.",
        content:
          `# Agent Governance Policy\n\n## 1. Purpose & scope\n## 2. Approved agent use cases\n## 3. Prohibited actions (never autonomous)\n## 4. Tool catalog governance (allowlists)\n## 5. RBAC and data boundaries\n## 6. Human approval rules\n## 7. Logging, retention, and audit\n## 8. Circuit breakers + kill switch\n## 9. Security testing and red-team\n## 10. Incident response for agents\n## 11. Versioning and release management\n## 12. Autonomy progression gates\n\nAppendix: agent registry + tool registry`,
      },
    }),
  ],
};

