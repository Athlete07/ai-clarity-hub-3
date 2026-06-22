import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_CLAUDE_AI_CAPABILITIES: GuideConcept = {
  number: 4,
  title: "Claude.ai Capabilities — Complete Surface",
  subtitle:
    "Vision, extended thinking, Skills, code execution, model selection, sharing, and every major Claude.ai feature in depth",
  sections: [
    buildGuideSection({
      id: "vision-workflows",
      number: "4.1",
      title: "Vision workflows in Claude.ai",
      subtitle:
        "Uploading images and screenshots — UI review, diagram extraction, chart reading, and redacted incident photos",
      takeaway:
        "Claude.ai accepts image uploads in chat and Projects — structure prompts for visible-only analysis; verify small text and numeric labels.",
      why: "Vision is buried in 'attach file' — power users need explicit workflows to avoid hallucinated UI details.",
      paragraphs: [
        [
          s("Workflows: mockup → acceptance criteria; whiteboard photo → structured notes; dashboard screenshot → anomaly list (human confirms numbers). Always: 'If unreadable, say UNREADABLE.'"),
        ],
      ],
      workflowSteps: [
        "Crop to relevant UI region.",
        "Request table: element | observation | question.",
        "Designer/engineer validates before ticket creation.",
      ],
      example: {
        title: "Support — error dialog triage",
        body: "User screenshot of error dialog uploaded. Claude extracted error code and visible stack fragment. Engineer matched to known issue in 5 min — full screen not needed after crop.",
      },
    }),
    buildGuideSection({
      id: "extended-thinking-ui",
      number: "4.2",
      title: "Extended thinking in Claude.ai",
      subtitle:
        "When to enable deeper reasoning in the consumer UI — latency trade-offs and task matching",
      takeaway:
        "Toggle extended thinking for multi-step analysis, hard debugging, and strategic trade-offs — keep off for rewriting, formatting, and quick Q&A.",
      why: "Thinking mode left always-on slows every interaction and burns usage limits.",
      paragraphs: [
        [
          s("Start thread with task complexity label. Enable thinking before hard question. Review thinking summary if shown — catch wrong assumptions early."),
        ],
      ],
      workflowSteps: [
        "Default thinking OFF in preferences.",
        "Enable per-thread for HARD tasks.",
        "Compare output quality on one sample before habit change.",
      ],
    }),
    buildGuideSection({
      id: "skills-in-claude-ai",
      number: "4.3",
      title: "Agent Skills in Claude.ai",
      subtitle:
        "Browse, enable, upload, and govern skills — pre-built Office skills and custom zip uploads",
      takeaway:
        "Claude.ai Skills: Customize → Skills → browse Anthropic/partner skills or upload custom zip (requires code execution on supported plans). Per-user — not org-centralized on consumer tiers.",
      why: "Teams assume uploaded skills propagate — they don't without Team/API governance path.",
      paragraphs: [
        [
          s("Pre-built: Excel, PowerPoint, Word, PDF generation workflows. Partner: Notion, Figma, Atlassian skills in directory. Custom: SKILL.md + resources zipped; test in sandbox Project first."),
        ],
        [
          s("Skills require code execution for script-backed skills — align with security policy (Ch 3.1.4)."),
        ],
      ],
      workflowSteps: [
        "Enable one pre-built document skill.",
        "Run golden test document.",
        "Upload custom skill; version in git.",
      ],
      artifact: {
        id: "skills-governance-claude-ai",
        title: "Claude.ai skills governance",
        content: `□ Skill source trusted (Anthropic / partner / internal)?
□ Scripts reviewed for network/exfil risk?
□ Test output on synthetic data first?
□ Version recorded in team registry?
□ Team members know per-user upload model?`,
      },
    }),
    buildGuideSection({
      id: "code-execution-analysis",
      number: "4.4",
      title: "Code execution & analysis mode",
      subtitle:
        "Python analysis in Claude.ai — spreadsheets, charts, data transforms, and security boundaries",
      takeaway:
        "Code execution lets Claude run Python for verified math and charts — enable only when needed; never on raw secrets; export results after review.",
      why: "Analysis mode is the bridge between hallucinated numbers and computed numbers.",
      paragraphs: [
        [
          s("Upload CSV → 'show code for each step' → charts in artifact. Disable on threads with credentials or unreleased financials if policy requires."),
        ],
      ],
      workflowSteps: [
        "Sanitize CSV before upload.",
        "Require code visibility in output.",
        "Human spot-checks first row of results.",
      ],
    }),
    buildGuideSection({
      id: "model-selection-styles",
      number: "4.5",
      title: "Model selection & conversation styles",
      subtitle:
        "Haiku, Sonnet, Opus routing in Claude.ai — speed vs depth, and style presets where available",
      takeaway:
        "Pick model per task in UI: Haiku fast/cheap, Sonnet default workhorse, Opus hardest reasoning — don't default Opus for all work.",
      why: "Ch 2 economics fail in practice when UI always stays on strongest model.",
      paragraphs: [
        [
          s("Match Ch 2 routing: extraction → Haiku; drafting → Sonnet; board-level strategy → Opus or Sonnet + thinking. Styles/presets (if available) encode tone — still verify substance."),
        ],
      ],
      workflowSteps: [
        "Set Sonnet as default.",
        "Switch model in thread header for hard task.",
        "Log model used in exported artifact footer.",
      ],
    }),
    buildGuideSection({
      id: "chat-sharing-collaboration",
      number: "4.6",
      title: "Sharing, starring & conversation management",
      subtitle:
        "Share links, organize chats, search history, and team visibility boundaries",
      takeaway:
        "Share links export conversation snapshots — redact before sharing; canonical deliverables live in artifacts/Projects, not share URLs.",
      why: "Share links leak context; starred chat sprawl becomes unsearchable IP graveyard.",
      paragraphs: [
        [
          s("Use stars for in-progress only; archive to Project on completion. Shared links: no client PII, rotate if leaked. Team plans: understand admin visibility policies."),
        ],
      ],
      workflowSteps: [
        "Export artifact before share link.",
        "Monthly chat archive purge.",
        "Naming convention: [CLIENT]-[TASK]-[DATE].",
      ],
    }),
    buildGuideSection({
      id: "claude-desktop-app-depth",
      number: "4.7",
      title: "Claude Desktop app — full setup",
      subtitle:
        "MCP configuration, desktop extensions (MCPB), menu bar access, and local vs remote connectors",
      takeaway:
        "Desktop app is the MCP power surface — configure mcpServers, install Desktop Extensions from gallery, use for daily connector workflows.",
      why: "Browser Claude.ai lacks full local MCP — Desktop is required for some enterprise integrations.",
      paragraphs: [
        [
          s("Settings → Developer → MCP servers (stdio or remote URL). Desktop Extensions: signed MCP bundles for IT distribution. Keep config in dotfiles or IT package manager."),
        ],
      ],
      workflowSteps: [
        "Install Desktop; sign in work account.",
        "Add one read-only MCP server.",
        "IT packages MCPB for team if needed.",
      ],
    }),
    buildGuideSection({
      id: "mobile-app-capabilities",
      number: "4.8",
      title: "Claude Mobile — capabilities & limits",
      subtitle:
        "Remote MCP on mobile, voice input, photo capture, and what to defer to desktop",
      takeaway:
        "Mobile: quick Q&A, photo capture to vision, remote MCP read — defer artifact builds, skill authoring, and local MCP to desktop.",
      why: "Users attempt full workflows on phone — quality and security suffer.",
      paragraphs: [
        [
          s("Capture whiteboard → continue on desktop Project. Voice dictation for intake; polish on desktop. Remote connectors only — no local MCP on mobile."),
        ],
      ],
      workflowSteps: [
        "Mobile for capture and triage.",
        "Sync via Project continuation.",
        "Never approve connector writes on mobile walking.",
      ],
    }),
  ],
};
