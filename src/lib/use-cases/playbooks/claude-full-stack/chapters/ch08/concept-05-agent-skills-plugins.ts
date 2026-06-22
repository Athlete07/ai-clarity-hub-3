import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_AGENT_SKILLS_PLUGINS: GuideConcept = {
  number: 5,
  title: "Agent Skills, Plugins & Extensibility",
  subtitle:
    "SKILL.md in Claude Code, plugin marketplace, progressive disclosure, and production skill governance",
  sections: [
    buildGuideSection({
      id: "skills-claude-code",
      number: "5.1",
      title: "Agent Skills in Claude Code",
      subtitle:
        "`.claude/skills/` project skills, `~/.claude/skills/` personal skills, and discovery at session start",
      takeaway:
        "Claude Code discovers SKILL.md in project `.claude/skills/` and user `~/.claude/skills/` — metadata scanned at start, full skill loaded when relevant.",
      why: "Custom commands alone cannot package scripts + resources — skills are the team standard for eng workflows.",
      paragraphs: [
        [
          s("Add skill folder with SKILL.md + optional scripts. Commit project skills to git. Personal skills for experiments only — promote to project when stable."),
        ],
      ],
      workflowSteps: [
        "Create `.claude/skills/release-notes/SKILL.md`.",
        "Test invocation on sample task.",
        "PR skill folder like code.",
      ],
    }),
    buildGuideSection({
      id: "prebuilt-document-skills",
      number: "5.2",
      title: "Pre-built document skills",
      subtitle:
        "PowerPoint, Excel, Word, PDF skills — OOXML workflows, templates, and verification habits",
      takeaway:
        "Anthropic pre-built skills encode document generation (pptx, xlsx, docx, pdf) — use for board decks and reports; human verifies numbers and branding.",
      why: "Raw 'make me a deck' without skill produces generic slides — skills enforce structure.",
      paragraphs: [
        [
          s("Enable document skills in host. Provide template or brand constraints in Project. Output to artifact → human open in Office → verify charts and footnotes."),
        ],
      ],
      workflowSteps: [
        "Enable pptx/xlsx skill.",
        "Attach brand template reference.",
        "QA in native Office app before send.",
      ],
    }),
    buildGuideSection({
      id: "plugins-claude-code",
      number: "5.3",
      title: "Claude Code plugins",
      subtitle:
        "Plugins bundling MCP + skills + commands + sub-agents — install, author, and submit to directory",
      takeaway:
        "Plugins package MCP (.mcp.json), skills, slash commands, and sub-agents — install from marketplace or git; submit to plugin directory when productized.",
      why: "Plugins are how teams ship one-click capability packs — not ad-hoc config per developer.",
      paragraphs: [
        [
          s("Install: plugin add from Anthropic/partner repos. Author: structure per plugin spec — MCP servers, skill folders, commands/. Submit for directory review when stable."),
        ],
      ],
      workflowSteps: [
        "Install official frontend-design or doc plugin.",
        "Run golden task.",
        "Fork internal plugin for company standards.",
      ],
    }),
    buildGuideSection({
      id: "skills-vs-claude-md",
      number: "5.4",
      title: "Skills vs CLAUDE.md vs custom commands",
      subtitle:
        "When to use each Claude Code extensibility mechanism — decision tree with examples",
      takeaway:
        "CLAUDE.md = always-on repo context. Skills = on-demand procedures. Commands = single slash prompt. MCP = live systems. Don't duplicate — cross-reference.",
      why: "Teams stuff skills content into CLAUDE.md and bloat every session.",
      paragraphs: [
        [
          s("CLAUDE.md: stack, test commands, architecture. Skill: 'how to run release' with scripts. Command: `/release-check`. MCP: GitHub issues live lookup."),
        ],
      ],
      workflowSteps: [
        "Audit CLAUDE.md length — move procedures to skills.",
        "One skill per SOP >3 steps.",
        "Link skill from CLAUDE.md index.",
      ],
    }),
    buildGuideSection({
      id: "skill-scripts-security",
      number: "5.5",
      title: "Skill scripts & security review",
      subtitle:
        "Executable scripts in skills — review for network calls, secrets, and supply chain before team adoption",
      takeaway:
        "Skills can include scripts Claude executes — code review skills like application code; no curl-to-unknown URLs; pin dependencies.",
      why: "Malicious or sloppy skill scripts are prompt injection with shell access.",
      paragraphs: [
        [
          s("Review checklist: network egress, file paths, env var reads, subprocess calls. Run in CI sandbox. Sign internal skills; vet third-party like any dependency."),
        ],
      ],
      workflowSteps: [
        "PR review for new skills mandatory.",
        "Run scripts in isolated CI.",
        "Block skills from unverified sources on managed laptops.",
      ],
    }),
    buildGuideSection({
      id: "skills-composition",
      number: "5.6",
      title: "Skill stacking & composition",
      subtitle:
        "Multiple skills on one task — how Claude coordinates and how to avoid conflicting instructions",
      takeaway:
        "Claude may invoke multiple skills — ensure SKILL.md scopes don't conflict; use explicit task prompt to pick primary skill.",
      why: "Overlapping skills cause format wars — two skills both defining output schema.",
      paragraphs: [
        [
          s("Namespace skill outputs. Primary skill in user prompt: 'Use competitive-brief skill as authority.' Test multi-skill tasks in staging."),
        ],
      ],
      workflowSteps: [
        "List active skills per project.",
        "Resolve overlapping descriptions.",
        "Integration test multi-skill workflow.",
      ],
    }),
    buildGuideSection({
      id: "cowork-plugins",
      number: "5.7",
      title: "Cowork & plugins",
      subtitle:
        "Desktop automation with full MCP and plugin support — multi-app workflows beyond Claude Code",
      takeaway:
        "Cowork supports MCP + plugins for cross-app desktop automation — compare to Zapier for UI-reasoning tasks vs event triggers.",
      why: "Ops roles need Cowork doc — not only Claude Code for engineers.",
      paragraphs: [
        [
          s("Map workflow across email, files, browser. Install plugin bundle. Human checkpoints between write steps. Document vs Chrome: Cowork multi-app; Chrome single-browser."),
        ],
      ],
      workflowSteps: [
        "Pilot Cowork on one ops workflow.",
        "Install required plugin.",
        "Measure reliability vs manual.",
      ],
    }),
    buildGuideSection({
      id: "skills-lifecycle",
      number: "5.8",
      title: "Skills lifecycle & versioning",
      subtitle:
        "Authoring, testing, deploying, deprecating skills across Claude.ai, Code, and API",
      takeaway:
        "Skills lifecycle: git version → test golden paths → deploy (upload/API/Code sync) → registry entry → quarterly review → deprecate with migration note.",
      why: "Undeprecated skills become silent SOP drift across surfaces.",
      paragraphs: [
        [
          s("Semantic version in SKILL.md frontmatter. Changelog section. Deprecation: mark description 'DEPRECATED — use X'. Run regression when Anthropic updates pre-built skills."),
        ],
      ],
      workflowSteps: [
        "Skills repo with CODEOWNERS.",
        "CI: lint SKILL.md frontmatter.",
        "Quarterly skill audit in workflow registry.",
      ],
    }),
  ],
};
