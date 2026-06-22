import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_ADVANCED_CAPABILITY_TRAPS: GuideConcept = {
  number: 4,
  title: "Advanced Capability Traps",
  subtitle:
    "Failure modes specific to Skills, vision, extended thinking, computer use, connectors, and cloud deployment",
  sections: [
    buildGuideSection({
      id: "skill-trust-trap",
      number: "4.1",
      title: "The untrusted skill trap",
      subtitle:
        "Malicious or sloppy SKILL.md and scripts — supply chain risk in Agent Skills",
      takeaway:
        "Skills are code + instructions — vet like dependencies; never install unaudited skills from random repos on machines with prod access.",
      why: "Skills execute scripts — worse than prompt injection alone.",
      paragraphs: [
        [
          s("Defence: internal skills repo, CODEOWNERS, CI sandbox run, block unsigned third-party skills on managed devices."),
        ],
      ],
      workflowSteps: [
        "Review SKILL.md + scripts in PR.",
        "Run in isolated VM.",
        "Allowlist skill sources in policy.",
      ],
    }),
    buildGuideSection({
      id: "vision-misread-trap",
      number: "4.2",
      title: "The vision misread trap",
      subtitle:
        "Confident wrong readings of screenshots, charts, and small text",
      takeaway:
        "Vision confuses similar glyphs, misreads compressed text, invents axis labels — always verify numbers and labels against source file.",
      why: "Screenshots feel like 'ground truth' — they aren't.",
      paragraphs: [
        [
          s("Mitigate: higher resolution crop, ask for confidence per field, require UNREADABLE flag, human verify before tickets or financial use."),
        ],
      ],
      workflowSteps: [
        "Never auto-create tickets from vision alone.",
        "Double-check numeric fields.",
        "Use vector PDF text when available.",
      ],
    }),
    buildGuideSection({
      id: "thinking-overuse-trap",
      number: "4.3",
      title: "The thinking overuse trap",
      subtitle:
        "Burning limits and latency on tasks that don't need extended reasoning",
      takeaway:
        "Always-on thinking wastes usage and trains slow habits — route explicitly.",
      why: "Users enable thinking once and never disable.",
      paragraphs: [
        [
          s("Default fast path; thinking only on tagged HARD tasks. Monitor usage dashboard for thinking token spikes."),
        ],
      ],
      workflowSteps: [
        "Add HARD/FAST label to task template.",
        "Weekly review thinking % of spend.",
        "Disable thinking for content drafts.",
      ],
    }),
    buildGuideSection({
      id: "computer-use-runaway",
      number: "4.4",
      title: "The computer use runaway trap",
      subtitle:
        "Unbounded click loops, wrong-window actions, and production desktop accidents",
      takeaway:
        "Cap steps, use VM, forbid prod accounts, require human confirm on destructive UI actions.",
      why: "Desktop agents can click 'Delete' faster than humans notice.",
      paragraphs: [
        [
          s("Kill switch hotkey. Max steps. Snapshot VM before session. Never run overnight unattended."),
        ],
      ],
      workflowSteps: [
        "VM-only policy.",
        "Step cap in API config.",
        "Record sessions for audit.",
      ],
    }),
    buildGuideSection({
      id: "connector-scope-trap",
      number: "4.5",
      title: "The connector over-scope trap",
      subtitle:
        "OAuth scopes too broad — Claude can access more than the workflow needs",
      takeaway:
        "Minimum scopes at connect time; review quarterly; revoke on role change.",
      why: "Convenience 'allow all' creates blast radius for prompt injection via connector.",
      paragraphs: [
        [
          s("Principle of least privilege per connector. Separate connectors per environment. Audit tool call logs."),
        ],
      ],
      workflowSteps: [
        "Re-auth with reduced scopes.",
        "Log every write tool call.",
        "Offboard revoke within 24h.",
      ],
    }),
    buildGuideSection({
      id: "surface-divergence-trap",
      number: "4.6",
      title: "The surface divergence trap",
      subtitle:
        "Skills uploaded to Claude.ai but not API, MCP only on Desktop, workflow works on laptop only",
      takeaway:
        "Maintain SURFACE_MATRIX: which skills, MCP, plugins work where — test each surface independently.",
      why: "Teams demo on Desktop; production user on mobile web — workflow breaks.",
      paragraphs: [
        [
          s("Document per workflow: claude.ai | Desktop | Mobile | Code | API columns. CI smoke test API path."),
        ],
      ],
      workflowSteps: [
        "Publish surface matrix in wiki.",
        "Test workflow on declared surfaces.",
        "Block rollout if parity gap.",
      ],
    }),
    buildGuideSection({
      id: "cloud-parity-trap",
      number: "4.7",
      title: "The cloud parity trap",
      subtitle:
        "Assuming Bedrock/Vertex feature parity with direct API — missing skills, thinking, or models",
      takeaway:
        "Verify feature parity before cloud migration; pin model IDs per region; regression on platform upgrades.",
      why: "Cloud path wins procurement then loses features silently.",
      paragraphs: [
        [
          s("Quarterly parity checklist against direct API. Staging tests for skills, caching, batch, computer use."),
        ],
      ],
      workflowSteps: [
        "Run eval suite on cloud staging.",
        "Document gaps in ARCHITECTURE.md.",
        "Escalate to vendor if blocking.",
      ],
    }),
    buildGuideSection({
      id: "mcp-app-trust-trap",
      number: "4.8",
      title: "The MCP App UI trap",
      subtitle:
        "Interactive in-chat UI components — phishing-style forms and misleading charts from third-party servers",
      takeaway:
        "MCP Apps can render forms/charts — only allowlisted servers; train users to verify server identity before submitting data in-chat.",
      why: "New attack surface: trusted chat UI from untrusted MCP App.",
      paragraphs: [
        [
          s("Allowlist MCP App servers. Never enter passwords into in-chat forms unless server verified. IT distributes approved bundles only."),
        ],
      ],
      workflowSteps: [
        "Disable unknown MCP Apps by policy.",
        "User training on server name check.",
        "Incident plan for malicious connector.",
      ],
    }),
  ],
};
