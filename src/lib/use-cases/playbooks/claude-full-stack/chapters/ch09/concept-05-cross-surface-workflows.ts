import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_CROSS_SURFACE_WORKFLOWS: GuideConcept = {
  number: 5,
  title: "Cross-Surface Workflows",
  subtitle:
    "End-to-end workflows combining Skills, vision, Chrome, Cowork, computer use, and connectors",
  sections: [
    buildGuideSection({
      id: "skill-powered-content",
      number: "5.1",
      title: "Skill-powered document workflow",
      subtitle:
        "Brief → research skill → pptx/docx skill → human QA → MCP publish to Drive/SharePoint",
      takeaway:
        "Chain: Project brief → research skill with citations → document skill for deck → human QA → MCP upload to Drive or SharePoint.",
      why: "Demonstrates Skills + MCP production pattern from Ch 1 and Ch 8.",
      paragraphs: [
        [
          s("Prompt: 'Run competitive-brief skill then pptx skill using BRAND.md.' Export artifact. MCP write to folder only after HITL tier T2 pass."),
        ],
      ],
      workflowSteps: [
        "Enable skills + Drive MCP.",
        "Run pipeline on synthetic data first.",
        "Production with citation QA gate.",
      ],
    }),
    buildGuideSection({
      id: "vision-connector-workflow",
      number: "5.2",
      title: "Vision + connector workflow",
      subtitle:
        "Screenshot → vision extraction → Jira ticket → Slack notification",
      takeaway:
        "Capture UI bug screenshot → vision extracts repro steps → GitHub/Jira MCP creates ticket → Slack MCP drafts #eng post — human submits.",
      why: "Common eng/QA path — ties Ch 3 vision to Ch 7 connectors.",
      paragraphs: [
        [
          s("Mobile capture → desktop Project continuation. Vision: structured repro table. MCP: create issue with image link. Slack: draft only."),
        ],
      ],
      workflowSteps: [
        "Photo → upload to Project.",
        "Vision extraction prompt.",
        "MCP ticket + Slack draft.",
      ],
    }),
    buildGuideSection({
      id: "chrome-portal-workflow",
      number: "5.3",
      title: "Claude in Chrome — portal workflow",
      subtitle:
        "Legacy web portal data extraction, form assist, and competitive site research with approval gates",
      takeaway:
        "Chrome extension: navigate SSO portal → extract table → artifact CSV → verify → internal wiki — step-by-step approval on submit actions.",
      why: "Ch 1 introduced Chrome — this is the operational workflow.",
      paragraphs: [
        [
          s("Use low-risk account. Prompt: 'Extract visible table only; do not submit forms.' For submissions: explicit per-field approval. Log portal URL in artifact."),
        ],
      ],
      workflowSteps: [
        "List 5 portal tasks without API.",
        "Pilot lowest-risk extraction.",
        "Document CAPTCHA/2FA blockers.",
      ],
      example: {
        title: "Procurement — vendor quote portal",
        body: "Chrome agent extracted quote line items from vendor portal into CSV artifact. Human verified against PDF email. Saved 45 min copy-paste — no auto-submit used.",
      },
    }),
    buildGuideSection({
      id: "cowork-multi-app",
      number: "5.4",
      title: "Cowork multi-app workflow",
      subtitle:
        "Email → spreadsheet → file system → calendar — desktop automation with plugins",
      takeaway:
        "Cowork: intake email summary → update Excel model → save to folder → calendar hold — plugin provides MCP glue; human approves writes.",
      why: "EA/ops workflows span apps — Cowork is the intended surface.",
      paragraphs: [
        [
          s("Number steps across apps before starting. Use read steps to validate state before write. Record macro failures for IT."),
        ],
      ],
      workflowSteps: [
        "Map apps and accounts.",
        "Install Cowork plugin bundle.",
        "Pilot read-only full path first.",
      ],
    }),
    buildGuideSection({
      id: "computer-use-ops",
      number: "5.5",
      title: "Computer use — controlled ops workflow",
      subtitle:
        "VM sandbox, legacy desktop app automation, and incident reproduction",
      takeaway:
        "Computer use in VM: reproduce bug in legacy app → screenshot log → artifact steps → engineer handoff — max steps capped.",
      why: "API-less internal tools need computer use with strict sandbox.",
      paragraphs: [
        [
          s("Dedicated VM snapshot. No credentials in prompt. Session recording on. Escalate to human if unexpected dialog."),
        ],
      ],
      workflowSteps: [
        "Snapshot clean VM.",
        "Define max 15 steps.",
        "Engineer validates repro doc.",
      ],
    }),
    buildGuideSection({
      id: "extended-thinking-decision",
      number: "5.6",
      title: "Extended thinking — executive decision workflow",
      subtitle:
        "Complex decision memo with thinking enabled — options, kill criteria, sensitivity",
      takeaway:
        "Enable thinking → structured decision prompt (Ch 9.3.5) → critique pass → board artifact — thinking surfaces trade-offs invisible in fast mode.",
      why: "Cross-chapter tie: thinking + analysis workflows.",
      paragraphs: [
        [
          s("Load decision context docs to Project. Thinking on. Output decision matrix artifact. Separate critic message before export."),
        ],
      ],
      workflowSteps: [
        "Tag thread EXEC-DECISION.",
        "Enable thinking.",
        "Two-pass critique before export.",
      ],
    }),
    buildGuideSection({
      id: "api-skill-product",
      number: "5.7",
      title: "API + Skills customer-facing workflow",
      subtitle:
        "Product feature using Messages API + workspace skills + MCP tools",
      takeaway:
        "Customer feature: API hosts skill-enabled agent + your MCP tools + caching on policy doc — eval before ship.",
      why: "Bridges Ch 2 API economics to Ch 8 agent building.",
      paragraphs: [
        [
          s("Cache stable policy prefix. Attach workspace skills. Tool use for user-specific data only. Log skill invocations for debug."),
        ],
      ],
      workflowSteps: [
        "Staging eval with golden questions.",
        "Load test with cache on.",
        "Progressive rollout with kill switch.",
      ],
    }),
    buildGuideSection({
      id: "cloud-deployed-agent",
      number: "5.8",
      title: "Cloud-deployed agent workflow",
      subtitle:
        "Bedrock/Vertex agent with IAM, VPC, and connector proxy — enterprise deployment pattern",
      takeaway:
        "Bedrock/Vertex: Claude in VPC → internal MCP proxy → corporate IAM → audit to SIEM — no direct internet tool access without proxy policy.",
      why: "Enterprise agents require cloud chapter patterns in practice.",
      paragraphs: [
        [
          s("MCP proxy inside VPC. Secrets from vault. Model via Bedrock with CloudWatch. Skills deployed via approved pipeline."),
        ],
      ],
      workflowSteps: [
        "Architecture review with security.",
        "Deploy MCP proxy HA pair.",
        "Pen test before prod traffic.",
      ],
    }),
  ],
};
