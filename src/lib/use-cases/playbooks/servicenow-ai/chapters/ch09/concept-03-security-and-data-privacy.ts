import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SECURITY_PRIVACY: GuideConcept = {
  number: 3,
  title: "Security and Data Privacy",
  subtitle:
    "Residency, PII, prompt injection, retention, scoped access, AI pen testing, incident response, and minimum security posture",
  sections: [
    buildGuideSection({
      id: "data-residency",
      number: "3.1",
      title: "The data residency question",
      subtitle: "Where processing happens and localization options",
      takeaway:
        "Residency is a routing problem: choose providers/endpoints per region, enforce policy in the AI Layer, and document processing + logging locations explicitly.",
      why: "Most AI programs stall at security review because residency and retention are unclear.",
      paragraphs: [
        [
          s("Document: where prompts are processed, where logs are stored, and who can access them. Don’t assume “private” equals “no cross-border processing”."),
        ],
      ],
      workflowSteps: [
        "Create region-based routing rules (EU/US/APAC).",
        "Document subprocessors and retention per region.",
        "Test: verify routing and block disallowed fallbacks.",
      ],
    }),
    buildGuideSection({
      id: "pii-handling",
      number: "3.2",
      title: "PII handling",
      subtitle: "Identify, classify, and protect PII in AI workflows",
      takeaway:
        "PII protection requires: identification/classification, redaction/minimization, access control, and retention. Apply to prompts, outputs, and derived artifacts (summaries/embeddings).",
      why: "AI expands the data surface area. The same PII risk now exists in model calls and logs.",
      paragraphs: [
        [
          s("Start with an allowed-field list per capability. If a field isn’t needed, it must not be sent."),
        ],
        [
          s("Store AI outputs in staging fields until approved, and restrict who can view raw outputs where needed."),
        ],
      ],
      workflowSteps: [
        "Define sensitive field inventory for target tables.",
        "Implement redaction before external calls.",
        "Set retention and access controls for AI artifacts.",
      ],
    }),
    buildGuideSection({
      id: "prompt-injection",
      number: "3.3",
      title: "Prompt injection risks",
      subtitle: "Malicious content in records manipulating AI behavior",
      takeaway:
        "Treat record text as untrusted input. Defend with policy separation, tool allowlists, schema validation, and refusal rules — plus security testing for injection cases.",
      why: "Tickets, emails, and KB can contain attacker text. Agents and flows can be manipulated if you don’t harden prompts and tools.",
      paragraphs: [
        [
          s("Defenses: keep system policy separate, ignore user attempts to override, constrain tool actions, and validate outputs strictly."),
        ],
        [
          s("If an agent can act, add approval gates and whitelisted tools only."),
        ],
      ],
      workflowSteps: [
        "Use a standard prompt template with injection rules.",
        "Restrict tools/actions to allowlists.",
        "Add an injection test set and run it before go-live.",
      ],
    }),
    buildGuideSection({
      id: "zero-retention",
      number: "3.4",
      title: "Zero data retention",
      subtitle: "What it means and how to verify configuration",
      takeaway:
        "Zero retention is a provider + logging configuration: ensure provider doesn’t retain content (contractually) and ensure your own logs don’t store sensitive bodies beyond policy.",
      why: "Teams assume zero retention, then discover raw prompts stored in logs or caches.",
      paragraphs: [
        [
          s("Verification requires evidence: provider settings/contract + platform log configuration + retention policies for derived artifacts."),
        ],
      ],
      workflowSteps: [
        "Confirm provider retention policy in writing.",
        "Configure logs to store metadata, not bodies, where required.",
        "Audit storage locations for prompts/outputs/embeddings.",
      ],
    }),
    buildGuideSection({
      id: "scoped-access",
      number: "3.5",
      title: "Scoped access for AI",
      subtitle: "AI can only access what it’s authorized to see",
      takeaway:
        "AI must inherit ACL and role scoping. If a user can’t read a field, the AI acting on their behalf must not receive it either.",
      why: "Data leakage often happens through accidental over-scoping in integrations.",
      paragraphs: [
        [
          s("Design: capability wrappers enforce least privilege and query only necessary fields. Do not build “superuser” AI wrappers."),
        ],
      ],
      workflowSteps: [
        "Define service accounts and roles for AI integrations.",
        "Validate field/table access with ACL tests.",
        "Log access decisions at a safe abstraction level.",
      ],
    }),
    buildGuideSection({
      id: "pen-testing",
      number: "3.6",
      title: "Penetration testing for AI",
      subtitle: "New attack surface and how to test it",
      takeaway:
        "AI introduces new attack classes: prompt injection, data exfiltration via outputs, tool abuse, and indirect prompt injection through retrieved content. Test them deliberately.",
      why: "Traditional pen tests don’t cover AI-specific failure modes.",
      paragraphs: [
        [
          s("Test categories: injection, jailbreaks, over-privileged tool calls, cross-tenant retrieval leaks, and unsafe output rendering (links/scripts)."),
        ],
      ],
      workflowSteps: [
        "Create a red-team prompt set for your domain.",
        "Test tool allowlists and approval gates.",
        "Test retrieval permission filters in RAG.",
      ],
    }),
    buildGuideSection({
      id: "ai-incident-response",
      number: "3.7",
      title: "Incident response for AI security events",
      subtitle: "Playbook for GenAI-related incidents",
      takeaway:
        "AI incident response needs kill switches, log correlation, and rapid containment: disable capability, rotate secrets, purge caches, and notify stakeholders based on severity.",
      why: "AI incidents can spread quickly if the same prompt path is used across many flows.",
      paragraphs: [
        [
          s("Prepare: named owners, escalation paths, kill switch, and runbooks for provider outage, leakage, and unsafe automation."),
        ],
      ],
      workflowSteps: [
        "Implement kill switch per capability/provider.",
        "Define incident severity and notification flow.",
        "Practice a tabletop exercise before go-live.",
      ],
    }),
    buildGuideSection({
      id: "security-checklist",
      number: "3.8",
      title: "The AI security checklist",
      subtitle: "Minimum posture for production deployments",
      takeaway:
        "Minimum posture: residency routing, minimization/redaction, least privilege, schema validation, circuit breakers, monitoring, pen testing, and incident response plan.",
      why: "A checklist is the fastest way to avoid obvious production failures.",
      paragraphs: [[s("Use this as a gate — not a suggestion.")]],
      workflowSteps: [
        "Complete checklist in test before prod.",
        "Attach evidence (configs, dashboards, test results).",
        "Re-run on upgrades and provider changes.",
      ],
      artifact: {
        id: "ai-security-checklist",
        title: "AI security checklist (minimum)",
        description: "Use as a hard go-live gate.",
        content:
          `Residency\n- Region routing + blocked disallowed fallbacks\n\nPII\n- Allowed-field lists\n- Redaction before external calls\n- Retention controls for prompts/outputs/embeddings\n\nAccess\n- Least-privilege roles + ACL validation\n\nIntegrity\n- Schema validation + repair/fallback\n- Prompt injection test set\n\nResilience\n- Timeouts, retries, circuit breaker, degraded mode\n\nAssurance\n- AI pen test completed\n- Incident response runbook + kill switch`,
      },
    }),
  ],
};

