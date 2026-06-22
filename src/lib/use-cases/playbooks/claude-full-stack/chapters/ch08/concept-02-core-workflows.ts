import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_CORE_WORKFLOWS: GuideConcept = {
  number: 2,
  title: "Core Claude Code Workflows",
  subtitle:
    "The daily workflows that make Claude Code genuinely productive — how to use it for real work, not just demos",
  sections: [
    buildGuideSection({
      id: "explaining-codebase",
      number: "2.1",
      title: "Explaining a codebase",
      subtitle:
        "Loading an unfamiliar project and using Claude Code to understand architecture, dependencies, and logic",
      takeaway:
        "Start with read-only: 'map architecture, entry points, data flow, test layout' — output ARCHITECTURE_NOTES.md for humans.",
      why: "Onboarding is the highest-ROI read-only use — zero merge risk.",
      paragraphs: [
        [
          s("Prompt: scope directory, identify frameworks, diagram module deps, flag legacy areas. Cross-check with CLAUDE.md if present."),
        ],
      ],
      workflowSteps: [
        "Run on onboarding day one.",
        "Ask for sequence diagram of request path.",
        "Human validates with senior engineer.",
      ],
    }),
    buildGuideSection({
      id: "bug-investigation",
      number: "2.2",
      title: "Bug investigation and fixing",
      subtitle:
        "Giving Claude Code a bug report and letting it find, explain, and fix the issue",
      takeaway:
        "Provide repro steps, logs, expected vs actual — agent reproduces, locates root cause, proposes fix, runs tests.",
      why: "Bug tasks are well-bounded — ideal agent shape.",
      paragraphs: [
        [
          s("TASK.md: repro command, stack trace, regression test requirement. Agent loop: reproduce → isolate → fix → test. Human verifies fix isn't band-aid."),
        ],
      ],
      workflowSteps: [
        "Paste error + repro in TASK.",
        "Require new or updated test.",
        "Review root cause explanation before merge.",
      ],
      example: {
        title: "Flaky test — agent trace",
        body: "Agent traced race in async cleanup; added await; flaky test stabilized. Human confirmed no broad timeout increases.",
      },
    }),
    buildGuideSection({
      id: "feature-implementation",
      number: "2.3",
      title: "Feature implementation",
      subtitle:
        "Specifying a feature in plain language and having Claude Code write, test, and integrate it",
      takeaway:
        "Feature spec: user story, API contract, files likely touched, test plan — agent implements behind feature branch.",
      why: "Features fail when spec omits edge cases and integration points.",
      paragraphs: [
        [
          s("Include: mockups or OpenAPI snippet, error cases, logging, feature flag if needed. Agent drafts; human reviews API shape and UX edge cases."),
        ],
      ],
      workflowSteps: [
        "Spec in TASK.md or linked ticket.",
        "List must-not-change modules.",
        "CI green + product sign-off.",
      ],
    }),
    buildGuideSection({
      id: "refactoring-scale",
      number: "2.4",
      title: "Refactoring at scale",
      subtitle:
        "Asking Claude Code to improve code quality across a large codebase — the patterns and the guardrails",
      takeaway:
        "Refactor in slices — one pattern, one directory, mechanical changes with tests green each slice — never 'refactor everything'.",
      why: "Unbounded refactors create unreviewable diffs.",
      paragraphs: [
        [
          s("Pattern: rename with tests, extract module with coverage, migrate API with adapter layer. Cap files per session."),
        ],
      ],
      workflowSteps: [
        "Define mechanical transformation precisely.",
        "Run tests after each commit.",
        "Stop at reviewable diff size (~400 lines).",
      ],
    }),
    buildGuideSection({
      id: "test-writing",
      number: "2.5",
      title: "Test writing",
      subtitle:
        "Using Claude Code to achieve comprehensive test coverage — the prompts and the review process",
      takeaway:
        "Point at module; require unit + edge + failure cases; forbid testing implementation details — review assertions for meaning.",
      why: "Agents generate high-coverage nonsense tests — human judges assertion quality.",
      paragraphs: [
        [
          s("TASK: coverage target for file X, list edge cases, use project test conventions from CLAUDE.md."),
        ],
      ],
      workflowSteps: [
        "Share example test file as style reference.",
        "Run coverage report.",
        "Delete vacuous tests in review.",
      ],
    }),
    buildGuideSection({
      id: "documentation-generation",
      number: "2.6",
      title: "Documentation generation",
      subtitle:
        "Having Claude Code write technical documentation from code — the output quality and the review workflow",
      takeaway:
        "Generate README sections, API docs, ADRs from source — agent reads code truth; human fixes intent and omissions.",
      why: "Docs drift from code; agent-derived docs stay closer if regenerated on change.",
      paragraphs: [
        [
          s("Output to docs/ with PR. Include 'verify against code' step — agent lists files read as cites."),
        ],
      ],
      workflowSteps: [
        "Scope one module per doc pass.",
        "Technical reviewer checks accuracy.",
        "Link from CLAUDE.md.",
      ],
    }),
    buildGuideSection({
      id: "code-review-assistance",
      number: "2.7",
      title: "Code review assistance",
      subtitle:
        "Using Claude Code to review pull requests — what it catches, what it misses, and how to use it alongside human review",
      takeaway:
        "Agent review: style, obvious bugs, missing tests, security smells — not product judgment or subtle domain bugs.",
      why: "Complement human review; never replace required reviewer.",
      paragraphs: [
        [
          s("Prompt: review diff for security, error handling, test gaps. Human owns architecture and product fit."),
        ],
      ],
      workflowSteps: [
        "Run on PR branch locally.",
        "Feed findings into PR comments.",
        "Human reviewer adjudicates.",
      ],
    }),
    buildGuideSection({
      id: "dependency-security-audit",
      number: "2.8",
      title: "Dependency and security audit",
      subtitle:
        "Asking Claude Code to identify outdated dependencies, security vulnerabilities, and technical debt",
      takeaway:
        "Agent runs audit tools (npm audit, etc.), interprets output, proposes bump PRs — human approves version jumps.",
      why: "Automates toil; risky major bumps need human judgment.",
      paragraphs: [
        [
          s("TASK: run org-approved scanners, summarise CRITICAL/HIGH, propose patches with changelog notes."),
        ],
      ],
      workflowSteps: [
        "Read-only audit first.",
        "Separate PR per dependency group.",
        "Run full test suite on bumps.",
      ],
    }),
  ],
};
