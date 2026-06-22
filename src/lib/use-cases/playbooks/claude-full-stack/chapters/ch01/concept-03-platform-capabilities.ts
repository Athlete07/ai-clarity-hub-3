import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_PLATFORM_CAPABILITIES: GuideConcept = {
  number: 3,
  title: "Platform Capabilities — Skills, Reasoning & Agents",
  subtitle:
    "Agent Skills, extended thinking, computer use, vision, and cloud deployment — the capabilities that extend Claude beyond chat",
  sections: [
    buildGuideSection({
      id: "agent-skills-overview",
      number: "3.1",
      title: "Claude Agent Skills",
      subtitle:
        "SKILL.md folders, pre-built document skills, and custom skills across Claude.ai, Claude Code, and the API",
      takeaway:
        "Agent Skills are modular packages (SKILL.md + optional scripts/resources) that Claude loads on demand via progressive disclosure — procedural expertise, not just static instructions.",
      why: "Skills are Anthropic's answer to repeatable specialist behaviour without pasting 2,000-word prompts every session.",
      paragraphs: [
        [
          x("Agent Skills", "Folders with SKILL.md (YAML frontmatter + instructions) and optional scripts. Claude scans metadata first, loads full skill only when relevant."),
          s(" ship pre-built for PowerPoint, Excel, Word, and PDF workflows. Custom skills: upload zip in Claude.ai Settings → Features; place in `.claude/skills/` for Claude Code; upload via Skills API for workspaces."),
        ],
        [
          s("Skills stack and compose — Claude may coordinate multiple skills on one task. Distinct from MCP (live tools), Projects (static knowledge), and CLAUDE.md (repo context)."),
        ],
      ],
      workflowSteps: [
        "Browse pre-built skills in Claude.ai Customize → Skills.",
        "Pilot one custom SKILL.md for your top recurring task.",
        "Document skill version in workflow registry (Ch 9).",
      ],
      artifact: {
        id: "skill-md-starter",
        title: "SKILL.md starter template",
        content: `---
name: weekly-competitive-brief
description: Produces structured competitive intel brief from approved sources.
---

# Weekly competitive brief

## When to use
User asks for competitor update, market scan, or weekly brief.

## Steps
1. Confirm competitor list from Project COMPETITORS.md
2. Search + extract facts with citations only
3. Output markdown artifact: Summary | Moves | Implications | Open questions

## Output schema
[required sections]

## Scripts (optional)
./scripts/fetch_rss.sh`,
      },
    }),
    buildGuideSection({
      id: "extended-thinking",
      number: "3.2",
      title: "Extended thinking & adaptive reasoning",
      subtitle:
        "How Claude reasons harder on complex tasks — UI controls, API thinking blocks, and when the extra cost pays off",
      takeaway:
        "Extended thinking lets Claude deliberate before answering — use for hard analysis, multi-step math, architecture trade-offs; skip for simple drafts.",
      why: "Without thinking mode, users blame 'dumb AI' on tasks that need deliberation budget.",
      paragraphs: [
        [
          s("In Claude.ai, enable extended thinking (or adaptive reasoning where available) for complex threads. API: thinking blocks with configurable budget. Trade-off: higher latency and token cost for better structured reasoning on hard problems."),
        ],
        [
          s("Best for: strategy options, debugging subtle logic, financial model review, legal clause comparison. Poor fit: rewrite this paragraph, format this JSON."),
        ],
      ],
      workflowSteps: [
        "Tag tasks HARD vs FAST before starting.",
        "Enable thinking on HARD; use Haiku/Sonnet fast path on FAST.",
        "Ask Claude to show assumptions after thinking completes.",
      ],
      example: {
        title: "Architecture review with thinking on",
        body: "Team enabled extended thinking for ADR drafts. Claude surfaced three non-obvious coupling risks in microservice split that instant mode missed. Extra 40s latency acceptable for 2-hour human review saved.",
      },
    }),
    buildGuideSection({
      id: "computer-use",
      number: "3.3",
      title: "Computer use",
      subtitle:
        "Claude interacting with desktop environments — screenshots, UI actions, and the safety model for agentic desktop automation",
      takeaway:
        "Computer use lets Claude see and act on GUIs (click, type, navigate) — powerful for legacy apps without APIs; requires strict human approval and sandboxed accounts.",
      why: "Ops work trapped in desktop UIs is a major category — computer use is the API-less automation path.",
      paragraphs: [
        [
          s("Available via API and select Claude products. Flow: screenshot → plan action → execute → verify. Never run unattended on production admin, banking, or HR systems."),
        ],
        [
          s("Pair with allowlisted apps, dedicated VM, and session recording for audit. Prefer MCP or Chrome extension when a narrower scope exists."),
        ],
      ],
      workflowSteps: [
        "Pilot on disposable VM with test account.",
        "Define stop conditions and forbidden windows.",
        "Log every action; human approves high-risk clicks.",
      ],
    }),
    buildGuideSection({
      id: "vision-multimodal",
      number: "3.4",
      title: "Vision & multimodal input",
      subtitle:
        "Images, screenshots, diagrams, and PDFs as first-class inputs — what Claude sees and what it can misread",
      takeaway:
        "Claude accepts images and PDFs as input — use for UI mockup review, whiteboard photos, chart interpretation, redacted screenshot debugging; always verify small text and numbers.",
      why: "Vision unlocks design, field ops, and incident triage workflows that text-only cannot serve.",
      paragraphs: [
        [
          s("Upload PNG/JPG/screenshots or PDF pages. Prompt: 'Describe only what is visible; flag unreadable regions.' For diagrams: 'List components and arrows; do not invent labels.'"),
        ],
        [
          s("Limits: tiny text, compressed JPEG artifacts, colour-only encodings. Supplement with typed labels for critical data."),
        ],
      ],
      workflowSteps: [
        "Crop to relevant region before upload.",
        "Ask for structured extraction table first.",
        "Human verifies numbers and labels before action.",
      ],
      example: {
        title: "PM — Figma screenshot to acceptance criteria",
        body: "PM uploaded mobile mockup screenshot. Claude produced accessibility and edge-case checklist from visible UI only. Designer confirmed three items Claude misread due to low-res crop — fixed by re-upload at 2× resolution.",
      },
    }),
    buildGuideSection({
      id: "claude-desktop-mobile",
      number: "3.5",
      title: "Claude Desktop & Mobile",
      subtitle:
        "Native apps, MCP on desktop, remote MCP on mobile, and when to use app vs browser",
      takeaway:
        "Claude Desktop: full local MCP, desktop extensions (MCPB), system integration. Mobile: remote MCP, capture/quick Q&A. Deep work stays on desktop.",
      why: "MCP and extensions are platform-gated — picking wrong surface blocks connector workflows.",
      paragraphs: [
        [
          s("Desktop: install from Anthropic; configure mcpServers in settings; use Desktop Extensions gallery for MCP Bundles. Mobile: remote connectors, voice capture where supported, not full local MCP."),
        ],
      ],
      workflowSteps: [
        "Install Desktop if using local MCP or extensions.",
        "Sync connector auth across devices where policy allows.",
        "Reserve mobile for triage; export to Project on desktop.",
      ],
    }),
    buildGuideSection({
      id: "cloud-deployment-paths",
      number: "3.6",
      title: "Cloud deployment paths",
      subtitle:
        "Amazon Bedrock, Google Vertex AI, and Microsoft Foundry — when to run Claude through hyperscaler marketplaces",
      takeaway:
        "Bedrock, Vertex, and Foundry offer Claude inside existing cloud contracts, IAM, residency, and procurement — same models, different control plane and billing.",
      why: "Enterprise buyers often cannot use console.anthropic.com directly — cloud paths are mandatory.",
      paragraphs: [
        [
          x("Amazon Bedrock", "Claude models in AWS with IAM, VPC endpoints, CloudWatch logging."),
          s(" — fit when stack is AWS-native. "),
          x("Google Vertex AI", "Claude on GCP with VPC-SC and existing GCP billing."),
          s(" — fit for GCP shops. "),
          x("Microsoft Foundry", "Claude via Azure enterprise agreements."),
          s(" — fit for Microsoft-centric orgs."),
        ],
        [
          s("Skills and features availability vary by cloud surface — verify Anthropic release notes per platform. Pin model IDs; run regression suite after platform upgrades."),
        ],
      ],
      workflowSteps: [
        "Map procurement constraint → cloud path.",
        "Pilot one model in sandbox VPC.",
        "Align logging with SIEM before production traffic.",
      ],
      artifact: {
        id: "cloud-path-picker",
        title: "Cloud deployment path picker",
        content: `AWS primary + IAM/VPC needs     → Bedrock
GCP primary + Vertex governance  → Vertex AI
Azure EA + Microsoft stack       → Foundry
Direct API + Anthropic console   → api.anthropic.com
Need Skills API workspace-wide     → verify path supports Skills`,
      },
    }),
    buildGuideSection({
      id: "agent-sdk",
      number: "3.7",
      title: "Claude Agent SDK",
      subtitle:
        "Building production agents with Anthropic's agent runtime — loops, tools, and deployment beyond chat",
      takeaway:
        "Agent SDK packages observe-reason-act loops with tool execution — use when Claude Code patterns become customer-facing or scheduled products.",
      why: "Ch 8 builds agents manually; SDK is the supported path to hardened production agents.",
      paragraphs: [
        [
          s("SDK agents combine Messages API, tool use, MCP, Skills, and optional computer use. Deploy with your auth, rate limits, and eval harness."),
        ],
      ],
      workflowSteps: [
        "Prototype loop in Claude Code first.",
        "Port to Agent SDK with same tool contracts.",
        "Add evals before customer exposure.",
      ],
    }),
    buildGuideSection({
      id: "skills-mcp-plugins-map",
      number: "3.8",
      title: "Skills, MCP, plugins & commands — the extensibility map",
      subtitle:
        "How Agent Skills, MCP connectors, Claude Code plugins, and slash commands relate — and which to use when",
      takeaway:
        "MCP = live tools/data. Skills = procedural packages. Plugins = bundled MCP + skills + commands + sub-agents. Commands = single-shot slash prompts. Use the smallest layer that fits.",
      why: "Teams duplicate the same workflow across four mechanisms — or pick the wrong one and fight the platform.",
      paragraphs: [
        [
          s("Decision: need live Salesforce record → MCP. Need repeatable deck structure → Skill. Need team-shareable eng bundle → Plugin. Need one-off release checklist → slash command."),
        ],
      ],
      workflowSteps: [
        "Draw workflow; label each step LIVE DATA vs PROCEDURE.",
        "LIVE → MCP; PROCEDURE → Skill.",
        "Bundle recurring combos into plugin when mature.",
      ],
      example: {
        title: "Product team extensibility stack",
        body: "Notion MCP for live specs + custom PRD Skill + GitHub MCP for issues. Packaged as plugin for PMs on Claude Code. Claude.ai users get Skills + remote MCP only — documented in team SURFACE_MAP.",
      },
    }),
  ],
};
