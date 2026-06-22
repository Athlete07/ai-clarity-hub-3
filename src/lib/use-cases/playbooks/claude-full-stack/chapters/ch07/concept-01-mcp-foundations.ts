import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_MCP_FOUNDATIONS: GuideConcept = {
  number: 1,
  title: "MCP Foundations",
  subtitle:
    "What MCP is, why it exists, and the mental model that makes the rest of this chapter make sense",
  sections: [
    buildGuideSection({
      id: "what-is-mcp",
      number: "1.1",
      title: "What MCP is",
      subtitle:
        "The open protocol that standardises how Claude connects to external tools, APIs, and data sources",
      takeaway:
        "Model Context Protocol (MCP) is an open standard for connecting AI hosts (like Claude) to external systems through MCP servers — a USB-C for tools and data.",
      why: "Chapter 1 named MCP as an ecosystem surface. This is how Claude stops being a chat box and starts acting on your stack.",
      paragraphs: [
        [
          s(""),
          x("MCP", "Model Context Protocol — Anthropic-led open standard for AI-tool integration."),
          s(
            " defines how a host application discovers, authorises, and calls capabilities exposed by servers — databases, SaaS APIs, local files, custom business logic.",
          ),
        ],
        [
          s("One MCP server speaks the protocol; any MCP-compatible host can use it — Claude Desktop, Claude.ai connectors, Claude Code, third-party agents."),
        ],
      ],
      workflowSteps: [
        "List systems Claude should read or write (Notion, GitHub, CRM).",
        "Check if an MCP server exists in the catalogue (1.6).",
        "Pilot one read-only connector before write access.",
      ],
    }),
    buildGuideSection({
      id: "why-mcp-exists",
      number: "1.2",
      title: "Why MCP exists",
      subtitle:
        "The N×M integration problem — every AI connecting to every tool through bespoke code — and how MCP collapses it to N+M",
      takeaway:
        "Without MCP, each AI × each tool needs custom glue code. MCP makes each tool implement once (server) and each host connect once (client) — N+M instead of N×M.",
      why: "Platform teams drown in one-off integrations. MCP is the architectural bet on reusable connectors.",
      paragraphs: [
        [
          s("Pre-MCP: Notion integration for Product A, different integration for Product B, different auth, different schemas. MCP: one Notion server, many hosts."),
        ],
        [
          s("For your org: prefer MCP connectors over bespoke scripts when available — maintenance moves to community or vendor."),
        ],
      ],
      workflowSteps: [
        "Inventory current Claude integrations — custom vs MCP.",
        "Flag bespoke scripts that duplicate catalogue servers.",
        "Plan migration where security allows.",
      ],
      example: {
        title: "Platform team — integration backlog collapse",
        body: "Team had 6 internal Slack bots with custom API glue. Adopted MCP Slack server for Claude Desktop pilot — one auth path, shared audit. New tool requests became 'enable MCP server' not 'build integration'.",
      },
    }),
    buildGuideSection({
      id: "how-mcp-works",
      number: "1.3",
      title: "How MCP works",
      subtitle:
        "Client, server, and host — the three roles and how they interact when Claude calls an external tool",
      takeaway:
        "Host (Claude) runs an MCP client; MCP server exposes tools/resources; client negotiates capabilities, auth, and invokes calls on Claude's behalf.",
      why: "Confusing host vs server causes wrong security scoping and debugging blind spots.",
      paragraphs: [
        [
          s(""),
          x("Host", "The AI application — Claude.ai, Desktop, Code — orchestrates the user session."),
          s(". "),
          x("MCP client", "Inside the host — discovers servers, routes tool calls."),
          s(". "),
          x("MCP server", "Adapter to external system — implements protocol, holds credentials scope."),
        ],
        [
          s("Flow: user asks → Claude plans tool use → client calls server → server hits API/DB → result returns to Claude → Claude synthesises answer."),
        ],
      ],
      workflowSteps: [
        "Draw your stack: host → client → server → system.",
        "Identify where credentials live (server side, not in prompt).",
        "Log tool calls in pilot for audit.",
      ],
      artifact: {
        id: "mcp-roles-diagram",
        title: "MCP roles (text diagram)",
        content: `USER → HOST (Claude)
         HOST contains MCP CLIENT
         CLIENT ↔ MCP SERVER (protocol)
         SERVER ↔ EXTERNAL SYSTEM (API/DB/files)

Credentials: server / OAuth — never paste in chat`,
      },
    }),
    buildGuideSection({
      id: "tools-resources-prompts",
      number: "1.4",
      title: "MCP tools, resources, and prompts",
      subtitle:
        "The three things an MCP server can expose to Claude — and when each is used",
      takeaway:
        "Tools = actions (create issue, send message). Resources = readable data (file, record). Prompts = reusable server-side prompt templates. Pick the right primitive.",
      why: "Misusing tools for read-only bulk data wastes calls; resources are better for static context.",
      paragraphs: [
        [
          s(""),
          x("Tools", "Callable functions with side effects — write, update, trigger."),
          s(". "),
          x("Resources", "Addressable content Claude can fetch — docs, rows, configs."),
          s(". "),
          x("Prompts", "Pre-built prompt patterns hosted on server — consistency across hosts."),
        ],
        [
          s("Read customer record → resource or tool with get. Create ticket → tool. Standard escalation brief → prompt."),
        ],
      ],
      workflowSteps: [
        "Classify each integration need: read vs write vs template.",
        "Prefer resources for large read-only context.",
        "Wrap writes in tools with explicit confirmation in workflow design.",
      ],
    }),
    buildGuideSection({
      id: "mcp-vs-function-calling",
      number: "1.5",
      title: "MCP vs function calling vs plugins",
      subtitle:
        "How the three approaches relate and why MCP is the architecture that generalises",
      takeaway:
        "API function calling is host-defined tools in one app. Plugins were early chat extensions. MCP standardises servers reusable across hosts and vendors.",
      why: "Teams on API-only think they've 'done tools' — but without MCP they rebuild per app.",
      paragraphs: [
        [
          s(""),
          x("Function calling", "Messages API tools[] — you define schema, handle execution in your backend."),
          s(" — best for custom product logic. "),
          x("MCP", "External servers — best for connecting to standard SaaS and shared org infrastructure."),
        ],
        [
          s("Many production stacks use both: MCP for SaaS connectors, function calling for proprietary business rules."),
        ],
      ],
      workflowSteps: [
        "Product backend features → API tools.",
        "Off-the-shelf SaaS → MCP connectors.",
        "Document boundary in architecture diagram.",
      ],
    }),
    buildGuideSection({
      id: "connector-catalogue",
      number: "1.6",
      title: "The MCP connector catalogue",
      subtitle:
        "The growing ecosystem of pre-built MCP servers — what's available and how to find it",
      takeaway:
        "Anthropic and partners maintain a growing catalogue — Google, Slack, GitHub, Notion, etc. Search catalogue before building custom servers.",
      why: "Reinventing published servers wastes engineering and skips security review by maintainers.",
      paragraphs: [
        [
          s("Find connectors: Claude.ai integrations settings, Anthropic MCP documentation, community registries (verify source before install). Check enterprise allowlists."),
        ],
        [
          s("Evaluate: official vs community, read/write scope, OAuth vs API key, last updated, org compliance approval."),
        ],
      ],
      workflowSteps: [
        "Browse catalogue for your top 3 systems.",
        "Read permission scope before authorising.",
        "Pilot in personal Desktop before team rollout.",
      ],
    }),
    buildGuideSection({
      id: "mcp-security",
      number: "1.7",
      title: "Security and permissions in MCP",
      subtitle:
        "What it means to let Claude access your systems — auth, scoping, and the audit trail",
      takeaway:
        "MCP access is real system access — scope minimally (read-first), use OAuth where possible, log tool calls, and require human approval for destructive actions.",
      why: "Connector incidents are data exfiltration or accidental writes — not 'AI hallucination'.",
      paragraphs: [
        [
          s("Practices: least-privilege OAuth scopes, separate connectors per environment (prod vs sandbox), no customer PII in prompts when tool can fetch directly, audit logs retained, revoke on offboarding."),
        ],
        [
          s("Enterprise: IT allowlist of approved servers, DLP review, block write tools until policy signed."),
        ],
      ],
      workflowSteps: [
        "Read scope screen before clicking Authorise.",
        "Start read-only; add write after workflow tested.",
        "Quarterly access review — revoke unused connectors.",
      ],
      artifact: {
        id: "mcp-security-checklist",
        title: "MCP connector security checklist",
        content: `□ Official or vetted server source
□ Minimum OAuth scopes
□ Sandbox pilot before prod data
□ Write tools require human confirm in workflow
□ Audit logging enabled
□ Offboarding revokes connector access
□ DLP/legal sign-off for customer data`,
      },
    }),
    buildGuideSection({
      id: "mcp-platform-strategy",
      number: "1.8",
      title: "MCP as a platform strategy",
      subtitle:
        "Why building or connecting to MCP servers makes your tools agent-accessible — the distribution implication",
      takeaway:
        "Publishing an MCP server for your product makes you callable from Claude and other MCP hosts — distribution channel for agent-era software.",
      why: "SaaS without agent interface risks disintermediation. MCP is the integration surface buyers will ask for.",
      paragraphs: [
        [
          s("Build MCP server when: customers want Claude/Cursor to act on your product, you need standard integration vs bespoke per customer, API already exists."),
        ],
        [
          s("Expose read resources first, narrow write tools second, document auth and rate limits — treat like public API launch."),
        ],
      ],
      workflowSteps: [
        "Map customer 'do this in Claude' requests to MCP tools.",
        "Spec minimal read-only server MVP.",
        "List on catalogue / docs when stable.",
      ],
      example: {
        title: "B2B SaaS — MCP as GTM",
        body: "Vendor shipped read-only MCP server for reporting API. Enterprise prospects ran Claude against live dashboards in POC — sales cycle shortened. Write tools gated to admin role with audit.",
      },
    }),
  ],
};
