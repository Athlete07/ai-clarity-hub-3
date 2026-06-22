import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_ADVANCED_PATTERNS: GuideConcept = {
  number: 3,
  title: "Advanced Claude Code Patterns",
  subtitle:
    "The techniques that unlock Claude Code's full capability — multi-file operations, agent loops, and production-grade engineering",
  sections: [
    buildGuideSection({
      id: "multi-file-operations",
      number: "3.1",
      title: "Multi-file operations",
      subtitle:
        "How Claude Code edits across multiple files simultaneously — the capability and the coordination discipline",
      takeaway:
        "Multi-file edits need shared types, imports, and tests updated atomically — cap scope; require single logical commit per task.",
      why: "Wide edits without coordination break builds mid-session.",
      paragraphs: [
        [
          s("List affected paths in TASK.md upfront. Agent should run build/tests before declaring done. Human reviews cross-file contracts."),
        ],
      ],
      workflowSteps: [
        "Name all files expected to change.",
        "Reject unrelated file touches in review.",
        "One PR per coherent change.",
      ],
    }),
    buildGuideSection({
      id: "claude-md-file",
      number: "3.2",
      title: "The CLAUDE.md file",
      subtitle:
        "How to write the project context file that makes Claude Code understand your codebase the moment it loads",
      takeaway:
        "CLAUDE.md is repo-level system prompt: architecture, commands, conventions, test instructions, don't-touch zones — loaded automatically for context.",
      why: "Best ROI file in agentic coding — saves re-explaining every session.",
      paragraphs: [
        [
          s("Include: stack, how to run tests/lint, directory map, naming rules, env setup, common gotchas, link to ADRs."),
        ],
      ],
      workflowSteps: [
        "Start from template artifact.",
        "Update when architecture changes.",
        "Team reviews in onboarding.",
      ],
      artifact: {
        id: "claude-md-template",
        title: "CLAUDE.md template",
        content: `# Project context for Claude Code

## Stack
[language, framework, versions]

## Commands
- install: \`...\`
- test: \`...\`
- lint: \`...\`

## Architecture
[5–10 lines + key paths]

## Conventions
[style, branching, commit format]

## Do not modify
[generated dirs, vendor, secrets]

## Testing
[how to run, coverage expectations]`,
      },
    }),
    buildGuideSection({
      id: "custom-commands",
      number: "3.3",
      title: "Custom commands",
      subtitle:
        "Building your own Claude Code commands for recurring operations — the automation layer inside the agentic tool",
      takeaway:
        "Custom commands encode recurring prompts — release prep, migration checklist, security scan. For multi-step SOPs with scripts, prefer Agent Skills (Ch 8.5) — commands are single-shot; skills are progressive packages.",
      why: "Repeatable eng rituals need the right layer — don't stuff scripts into slash commands when SKILL.md fits.",
      paragraphs: [
        [
          s("Define commands per `.claude/commands/` or official extensibility docs — wrap TASK templates. Version in repo. Document in CLAUDE.md index alongside skills."),
        ],
        [
          s("Use command when: one prompt template. Use skill when: multi-step procedure + optional scripts + resources. Use plugin when: bundling MCP + skills + commands for distribution."),
        ],
      ],
      workflowSteps: [
        "Identify third recurring team task.",
        "Encode as command + TASK template.",
        "Document in CLAUDE.md.",
      ],
    }),
    buildGuideSection({
      id: "agent-loops",
      number: "3.4",
      title: "Agent loops in Claude Code",
      subtitle:
        "How to run Claude Code in extended autonomous mode — what to delegate and how to monitor",
      takeaway:
        "Extended loops: clear stop condition, max iterations, checkpoint commits, human review at milestones — watch for thrashing on same error.",
      why: "Unmonitored autonomy burns tokens and can spiral on wrong approach.",
      paragraphs: [
        [
          s("Set: 'stop when tests pass' or 'max 10 attempts'. Interrupt if same error repeats 3 times. Checkpoint git commits when green."),
        ],
      ],
      workflowSteps: [
        "Define stop condition in TASK.",
        "Monitor terminal output.",
        "Interrupt and narrow scope if stuck.",
      ],
    }),
    buildGuideSection({
      id: "version-control",
      number: "3.5",
      title: "Claude Code with version control",
      subtitle:
        "The Git workflow that integrates Claude Code safely — branch discipline, commit review, and rollback",
      takeaway:
        "Branch per task → small commits → PR → human review → CI → merge. Never agent-commit directly to main; revert via git.",
      why: "Git is your safety net when agent errs.",
      paragraphs: [
        [
          s("Conventional commits optional. Squash or not per team. Tag agent-generated PRs for metrics. Rollback: git revert, not manual memory."),
        ],
      ],
      workflowSteps: [
        "feature/agent-* branch naming.",
        "Require PR template checklist.",
        "Revert script ready.",
      ],
    }),
    buildGuideSection({
      id: "cicd-integration",
      number: "3.6",
      title: "Claude Code in CI/CD",
      subtitle:
        "Using Claude Code as part of your deployment pipeline — automated review, test generation, and quality gates",
      takeaway:
        "CI use cases: optional PR comment bot, test gap suggestions, doc sync checks — sandboxed, read-mostly, no prod credentials in agent.",
      why: "Pipeline agents need stricter bounds than local sessions.",
      paragraphs: [
        [
          s("Run in ephemeral CI container with least privilege. No auto-merge from agent. Human required for production deploy."),
        ],
      ],
      workflowSteps: [
        "Pilot on non-blocking PR comments.",
        "Measure false positive rate.",
        "Expand scope if signal high.",
      ],
    }),
    buildGuideSection({
      id: "mcp-in-claude-code",
      number: "3.7",
      title: "MCP integration in Claude Code",
      subtitle:
        "Connecting Claude Code to external tools — databases, APIs, and services it can call during coding tasks",
      takeaway:
        "Claude Code + MCP (Chapter 7): query staging DB schema, read ticket from Jira, check API spec — while editing code in repo.",
      why: "Coding tasks often need live external truth, not stale README.",
      paragraphs: [
        [
          s("Configure MCP servers per Claude Code docs. Read-only DB in dev. Never prod write without human gate."),
        ],
      ],
      workflowSteps: [
        "Add one MCP server (e.g. GitHub issues).",
        "TASK references ticket ID.",
        "Verify tool output in PR description.",
      ],
    }),
    buildGuideSection({
      id: "production-grade-discipline",
      number: "3.8",
      title: "Production-grade Claude Code",
      subtitle:
        "The discipline, the checkpoints, and the human oversight that makes Claude Code safe for real production work",
      takeaway:
        "Production-grade = TASK specs + CLAUDE.md + branch/PR/CI + human review + audit + no secrets in prompts + incident retros.",
      why: "Velocity without discipline becomes production incidents.",
      paragraphs: [
        [
          s("Team policy doc: allowed tasks, forbidden paths, review requirements, logging. Measure: PR acceptance rate, revert rate, incident count."),
        ],
      ],
      workflowSteps: [
        "Publish Claude Code eng policy.",
        "Monthly retro on agent PRs.",
        "Update CLAUDE.md from incidents.",
      ],
      artifact: {
        id: "agent-pr-checklist",
        title: "Agent PR review checklist",
        content: `□ TASK.md / ticket linked
□ Diff size reviewable
□ Tests added/updated meaningfully
□ No secrets / env committed
□ CI green
□ Human reviewer (not agent-only)
□ Security-sensitive paths double-reviewed`,
      },
    }),
  ],
};
