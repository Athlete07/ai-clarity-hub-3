import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_TECHNICAL_DEVELOPMENT: GuideConcept = {
  number: 4,
  title: "Technical & Development Workflows",
  subtitle:
    "The workflows that connect Claude to code, data, and technical systems — production patterns for builders and technical teams",
  sections: [
    buildGuideSection({
      id: "code-review-workflow",
      number: "4.1",
      title: "The code review workflow",
      subtitle:
        "PR description → code diff → review criteria → structured feedback → GitHub comment — end to end",
      takeaway:
        "PR context + diff (via MCP GitHub or paste) → review rubric (security, tests, API breaks, style) → structured comment: severity-tagged findings → human editor posts or approves.",
      why: "Unstructured reviews miss severity; templates make CI/agent review useful.",
      paragraphs: [
        [
          s("Prompt: 'Review PR #N. Output: Summary | Blockers | Suggestions | Questions. Tag each [BLOCKER|MAJOR|NIT]. Cite file:line.' GitHub MCP posts draft comment; human sends."),
        ],
        [
          s("Combine with Ch 8 — Claude Code can fix blockers on a branch after human approves findings."),
        ],
      ],
      workflowSteps: [
        "Define team review rubric in Project.",
        "Connect GitHub MCP read + comment draft.",
        "Human posts; never auto-approve merge.",
      ],
    }),
    buildGuideSection({
      id: "api-integration-workflow",
      number: "4.2",
      title: "The API integration workflow",
      subtitle:
        "API documentation → requirements → code generation → testing → documentation — with Claude Code",
      takeaway:
        "OpenAPI/spec + requirements → Claude Code scaffolds client, error handling, retries → unit + integration tests → README with examples — TASK.md bounds scope.",
      why: "API integrations are spec-driven — ideal for agent implementation with test gates.",
      paragraphs: [
        [
          s("TASK.md: endpoints needed, auth method, idempotency, rate limits, must-not-touch modules. Agent generates; human reviews auth secret handling and error taxonomy."),
        ],
      ],
      workflowSteps: [
        "Attach OpenAPI to Project or repo.",
        "Claude Code on feature branch.",
        "Integration test against sandbox.",
      ],
    }),
    buildGuideSection({
      id: "data-pipeline-workflow",
      number: "4.3",
      title: "The data pipeline workflow",
      subtitle:
        "Source specification → transformation logic → code generation → testing → deployment",
      takeaway:
        "Spec: sources, schema, SLAs, PII rules → transformation steps in plain language → Claude Code generates pipeline + data tests → dry-run → deploy with human approval.",
      why: "Data bugs are silent — tests on row counts, null rates, and key uniqueness are mandatory.",
      paragraphs: [
        [
          s("Include sample rows (sanitized). Require: great expectations or dbt tests, rollback plan. Review joins and timezone handling explicitly."),
        ],
      ],
      workflowSteps: [
        "Write pipeline spec in TASK.md.",
        "Generate + run tests locally.",
        "Deploy to staging; compare checksums.",
      ],
    }),
    buildGuideSection({
      id: "debugging-workflow",
      number: "4.4",
      title: "The debugging workflow",
      subtitle:
        "Error message → codebase context → diagnosis → fix → test → documentation",
      takeaway:
        "Repro package: stack trace, logs, env, recent commits → Claude Code traces call path → root cause hypothesis → fix + regression test → one-line changelog entry.",
      why: "This is Ch 8 bug workflow operationalized as a team SOP with documentation step.",
      paragraphs: [
        [
          s("Add post-fix: 'Update RUNBOOK.md with symptom → cause → fix for on-call.' Prevents same incident twice."),
        ],
      ],
      workflowSteps: [
        "Paste error into TASK with repro.",
        "Require root cause in PR description.",
        "Merge only with regression test.",
      ],
    }),
    buildGuideSection({
      id: "architecture-decision",
      number: "4.5",
      title: "The architecture decision workflow",
      subtitle:
        "Requirements → option generation → trade-off analysis → recommendation → ADR document",
      takeaway:
        "Requirements doc → 3 architecture options → trade-off table (cost, latency, ops, risk) → recommendation → ADR markdown in docs/adr/ — human architecture review before build.",
      why: "ADRs capture why; agents accelerate option generation and first draft.",
      paragraphs: [
        [
          s("Prompt in Project with constraints: 'Options must include boring default. Table: option | pros | cons | when to choose.' Output ADR template: Context, Decision, Consequences."),
        ],
      ],
      workflowSteps: [
        "Gather NFRs and constraints.",
        "Generate options + ADR draft.",
        "Tech lead signs ADR; then TASK for build.",
      ],
      artifact: {
        id: "adr-template",
        title: "ADR output template",
        content: `# ADR-NNN: [title]
## Status: Proposed
## Context
## Decision
## Options considered
## Consequences
## Follow-ups`,
      },
    }),
    buildGuideSection({
      id: "sql-workflow",
      number: "4.6",
      title: "The SQL workflow",
      subtitle:
        "Business question → schema context → query generation → result interpretation → insight narrative",
      takeaway:
        "Business question + schema DDL/sample → Claude writes SQL with comments → human runs in read-only warehouse → results back → insight narrative with caveats on sample bias.",
      why: "SQL workflow separates write (reviewable) from execute (controlled) from interpret.",
      paragraphs: [
        [
          s("MCP database read-only where available. Prompt: 'Explain query plan assumptions. Flag full table scans. If ambiguous schema, ask before guessing joins.'"),
        ],
      ],
      workflowSteps: [
        "Load schema doc in Project.",
        "Review SQL before production run.",
        "Narrative cites result columns only.",
      ],
    }),
    buildGuideSection({
      id: "infrastructure-as-code",
      number: "4.7",
      title: "The infrastructure-as-code workflow",
      subtitle:
        "Requirements → template generation → validation → deployment → documentation",
      takeaway:
        "Infra requirements → Terraform/Pulumi module draft → validate/plan in CI → human apply → README with diagram and rollback — never auto-apply from chat.",
      why: "Infra mistakes are expensive; plan-only automation with human apply is the floor.",
      paragraphs: [
        [
          s("Claude Code generates modules; CI runs terraform plan; human reviews diff for security groups, public exposure, IAM scope. Document inputs/outputs."),
        ],
      ],
      workflowSteps: [
        "Spec resources and environments.",
        "Generate IaC on branch.",
        "Plan in CI; apply manually.",
      ],
    }),
    buildGuideSection({
      id: "incident-response",
      number: "4.8",
      title: "The incident response workflow",
      subtitle:
        "Alert → context gathering → diagnosis → remediation steps → post-mortem draft — with PagerDuty and GitHub integration",
      takeaway:
        "Alert via PagerDuty MCP → gather logs, recent deploys, dashboards (links in Project) → timeline + hypothesis → remediation checklist → post-mortem draft (5-whys, action items) — human commands all production changes.",
      why: "Incidents need speed with guardrails — automate context, not remediation clicks.",
      paragraphs: [
        [
          s("Workflow: on-call pastes alert → Claude pulls GitHub recent merges + runbook → suggests checks ranked by likelihood → drafts comms template → after resolution, post-mortem skeleton. MCP: PagerDuty acknowledge notes, GitHub blame."),
        ],
      ],
      workflowSteps: [
        "Maintain RUNBOOK.md + service map in Project.",
        "Use read-only MCP during triage.",
        "Human executes remediation; Claude drafts PM.",
      ],
      example: {
        title: "Incident context prompt",
        body: "Alert: elevated 5xx on checkout API. Gather: deploys last 2h, error log patterns, dependency status. Output: timeline table, top 3 hypotheses with checks, draft status page text — no shell commands executed.",
      },
    }),
  ],
};
