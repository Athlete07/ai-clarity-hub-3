import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_CLAUDE_CODE_FOUNDATIONS: GuideConcept = {
  number: 1,
  title: "Claude Code Foundations",
  subtitle:
    "What Claude Code is, how it works, and the mental model that makes it different from every other coding tool",
  sections: [
    buildGuideSection({
      id: "what-is-claude-code",
      number: "1.1",
      title: "What Claude Code is",
      subtitle:
        "The agentic coding environment that lives in your terminal — not a code completion tool but an autonomous coding agent",
      takeaway:
        "Claude Code is a terminal-native agent that reads your repo, runs commands, edits files, and iterates until a task completes — closer to a junior engineer with shell access than to autocomplete.",
      why: "Chapter 1 placed Claude Code in the ecosystem. This is the surface where software actually ships.",
      paragraphs: [
        [
          s(""),
          x("Claude Code", "Anthropic's agentic coding CLI — operates in your project directory with tool use for files, shell, and git."),
          s(
            " plans steps, executes them, observes output, and continues — write tests, fix failures, open PRs within guardrails you approve.",
          ),
        ],
        [
          s("Not: inline tab completion. Is: task-level delegation with repo context and terminal execution."),
        ],
      ],
      workflowSteps: [
        "Install in a non-production repo first.",
        "Run one read-only task: 'explain module X'.",
        "Graduate to scoped edit tasks with TASK.md.",
      ],
    }),
    buildGuideSection({
      id: "differs-from-claude-ai",
      number: "1.2",
      title: "How Claude Code differs from Claude.ai",
      subtitle:
        "Direct filesystem access, terminal execution, and persistent context — the capabilities that change what's possible",
      takeaway:
        "Claude.ai chats about code; Claude Code operates on code — filesystem, shell, git, tests — in your real environment.",
      why: "Pasting files into chat doesn't scale; agents need native repo and command access.",
      paragraphs: [
        [
          s("Claude.ai: upload snippets, artifacts, advice. Claude Code: traverse tree, run npm test, apply patches, read stderr, retry."),
        ],
        [
          s("Use Claude.ai for design and specs; Claude Code for implementation in repo. Chapter 6 Projects can hold TASK specs Claude Code executes."),
        ],
      ],
      workflowSteps: [
        "Write spec in Project or TASK.md.",
        "Invoke Claude Code in repo root.",
        "Reference TASK.md in first message.",
      ],
    }),
    buildGuideSection({
      id: "installation-setup",
      number: "1.3",
      title: "Installation and setup",
      subtitle:
        "The complete setup process — prerequisites, installation, authentication, and first run",
      takeaway:
        "Prerequisites: supported OS, Node or install path per Anthropic docs, API key or Claude account auth, git repo. First run in trusted directory only.",
      why: "Skipped setup causes permission confusion and auth failures mid-task.",
      paragraphs: [
        [
          s("Follow official install for your platform. Authenticate with Anthropic credentials. Verify with version/help command. Run inside git repo with clean status or dedicated branch."),
        ],
        [
          s("Team: document approved install channel; block unverified forks. Align API billing with Chapter 2."),
        ],
      ],
      workflowSteps: [
        "Install from official source.",
        "Authenticate; confirm org policy allows.",
        "cd into sample repo; run help.",
        "Create agent-test branch.",
      ],
      artifact: {
        id: "claude-code-setup-checklist",
        title: "Claude Code setup checklist",
        content: `□ Official install completed
□ Auth verified (API or subscription per policy)
□ Git repo initialized / cloned
□ Working branch created (not main)
□ CLAUDE.md stub added (see 3.2)
□ Team security policy acknowledged
□ First task: read-only explain`,
      },
    }),
    buildGuideSection({
      id: "interface-commands",
      number: "1.4",
      title: "The Claude Code interface",
      subtitle:
        "Commands, shortcuts, modes, and the terminal interaction model",
      takeaway:
        "Learn core commands: start session, approve/deny tool actions, interrupt, resume context, slash commands for modes — interaction is conversational plus explicit approvals.",
      why: "Approval model is the UX — misunderstanding it causes surprise edits or blocked progress.",
      paragraphs: [
        [
          s("Expect prompts to approve file writes and shell commands. Use deny to redirect approach. Interrupt when scope drifts. Explore built-in help for session controls — exact commands evolve with releases."),
        ],
      ],
      workflowSteps: [
        "Run --help or docs for current command list.",
        "Practice approve/deny on harmless ls.",
        "Note keyboard interrupt behavior.",
      ],
    }),
    buildGuideSection({
      id: "reads-codebase",
      number: "1.5",
      title: "How Claude Code reads your codebase",
      subtitle:
        "What it indexes, how it navigates, and how to help it understand your project structure",
      takeaway:
        "Claude Code discovers structure via directory traversal, file reads, grep-like search, and CLAUDE.md — not magic full-repo embedding on load.",
      why: "Large monorepos need CLAUDE.md and .claudeignore-style discipline so navigation stays focused.",
      paragraphs: [
        [
          s("It reads what it needs iteratively — package manifests, entry points, symbols, tests. Help it: CLAUDE.md architecture summary, consistent module boundaries, TASK.md with paths."),
        ],
        [
          s("Exclude generated artifacts and secrets from scope — never commit API keys; use env files in .gitignore."),
        ],
      ],
      workflowSteps: [
        "Add CLAUDE.md with tree overview.",
        "Point to entry files explicitly in tasks.",
        "Keep tasks scoped to one package/service.",
      ],
    }),
    buildGuideSection({
      id: "permissions-safety",
      number: "1.6",
      title: "Permissions and safety",
      subtitle:
        "What Claude Code can and cannot do without explicit approval — the safety model and the override controls",
      takeaway:
        "Default: ask before destructive ops. You control writes, installs, network, git push. Override sparingly; sandbox for experiments.",
      why: "Agent with shell is production-risk — treat approvals like code review gates.",
      paragraphs: [
        [
          s("Risky: rm -rf, prod deploy, force push, curl | bash, modifying CI secrets. Policy: no auto-approve on main; branch-only; human reviews all diffs."),
        ],
      ],
      workflowSteps: [
        "Never run on prod checkout.",
        "Require diff review before merge.",
        "Log sessions for audit if org requires.",
      ],
    }),
    buildGuideSection({
      id: "existing-tools-integration",
      number: "1.7",
      title: "Claude Code with your existing tools",
      subtitle:
        "How it integrates with your editor, your version control, and your development environment",
      takeaway:
        "Claude Code complements IDE — terminal agent + editor for manual tweak. Git is system of record; MCP extends to external tools (Chapter 7).",
      why: "Teams succeed when Code fits workflow, not replaces it wholesale.",
      paragraphs: [
        [
          s("Pattern: Claude Code on branch → IDE diff view → CI → PR. Some teams run Code inside VS Code terminal. Git hooks and formatters still apply to agent output."),
        ],
      ],
      workflowSteps: [
        "Define team workflow diagram.",
        "Run formatter/linter post-agent.",
        "CI must pass before merge.",
      ],
    }),
    buildGuideSection({
      id: "agentic-mindset",
      number: "1.8",
      title: "The agentic coding mindset",
      subtitle:
        "What changes when you have a coding agent rather than a coding assistant — the task size and type that Claude Code is built for",
      takeaway:
        "Delegate bounded tasks with clear acceptance criteria — migrate module, fix test suite, add endpoint — not 'make app better'. You are tech lead; agent is implementer.",
      why: "Wrong task granularity produces endless loops or reckless diffs.",
      paragraphs: [
        [
          s("Good tasks: defined I/O, existing test harness, <20 files typical. Poor tasks: greenfield architecture without design doc, vague 'clean up code everywhere'."),
        ],
        [
          s("Chapter 4 prompting applies: TASK.md is your spec — instructions, context, format, tests."),
        ],
      ],
      workflowSteps: [
        "Write acceptance criteria as checklist.",
        "Time-box agent runs; interrupt if looping.",
        "Retrospective: what spec was missing?",
      ],
      example: {
        title: "Eng — bounded migration task",
        body: "TASK: migrate auth middleware on 12 endpoints; tests must pass; no unrelated refactors. Claude Code finished in 3 hours; human review caught one edge case. Vague 'improve auth' attempt last month failed after 200-file diff.",
      },
    }),
  ],
};
