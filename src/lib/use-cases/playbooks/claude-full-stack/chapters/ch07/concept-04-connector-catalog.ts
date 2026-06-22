import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_CONNECTOR_CATALOG: GuideConcept = {
  number: 4,
  title: "Complete Connector & Integration Catalog",
  subtitle:
    "Every major connector type — prebuilt, directory, Microsoft 365, design, dev, data, MCP Apps, and enterprise distribution",
  sections: [
    buildGuideSection({
      id: "prebuilt-first-party",
      number: "4.1",
      title: "Prebuilt first-party integrations",
      subtitle:
        "Anthropic-native connectors — Google Workspace, GitHub, Slack, and Microsoft 365 setup and scope patterns",
      takeaway:
        "First-party connectors: authenticate once in Claude.ai/Desktop → minimum OAuth scopes → test read → enable write only with SOP.",
      why: "These are the default enterprise connectors — teams should standardize on this list before custom MCP.",
      paragraphs: [
        [
          s("Google: Gmail, Calendar, Drive. Microsoft 365: Outlook, Calendar, OneDrive, Teams (availability per plan/region). GitHub: repos, issues, PRs. Slack: channels, search, draft posts."),
        ],
      ],
      workflowSteps: [
        "Integrations settings → connect service.",
        "Deselect unused scopes at OAuth.",
        "Run 3-test prompt suite per connector.",
      ],
      artifact: {
        id: "first-party-connector-matrix",
        title: "First-party connector matrix",
        content: `Gmail       | read threads, draft (human send)
Calendar    | read events, propose slots
Drive       | search, read docs, summarize
GitHub      | search code, PR summary, issues
Slack       | channel search, draft message
Microsoft   | mail, files, calendar, Teams`,
      },
    }),
    buildGuideSection({
      id: "microsoft-365-depth",
      number: "4.2",
      title: "Microsoft 365 connector — depth",
      subtitle:
        "Outlook, Teams, OneDrive, SharePoint — workflows for Microsoft-centric enterprises",
      takeaway:
        "M365 connector grounds Claude in Outlook threads, Teams decisions, and SharePoint docs — critical for orgs not on Google Workspace.",
      why: "Playbooks skew Google — M365 is half the enterprise market.",
      paragraphs: [
        [
          s("Workflows: Teams thread → decision log; Outlook → draft reply queue; SharePoint → policy search with cite. Respect DLP labels — do not exfiltrate restricted sites."),
        ],
      ],
      workflowSteps: [
        "Connect OneDrive/SharePoint read first.",
        "Add Outlook draft workflow with HITL.",
        "Teams: allowlist channels in Project.",
      ],
      example: {
        title: "Enterprise PM — Teams + SharePoint brief",
        body: "Claude pulled PRD from SharePoint, summarized #product Teams debate, drafted stakeholder email. PM verified SharePoint version ID — 30 min Monday brief vs 2 hours.",
      },
    }),
    buildGuideSection({
      id: "design-atlassian-connectors",
      number: "4.3",
      title: "Design & Atlassian connectors",
      subtitle:
        "Figma, Notion, Jira, Confluence, Linear — specs, design handoff, and ticket workflows",
      takeaway:
        "Figma MCP/skills for design context; Notion for docs; Jira/Linear for tickets — combine for spec-to-ticket pipelines with human approval on writes.",
      why: "Product/engineering glue is these four systems — connectors must be documented together.",
      paragraphs: [
        [
          s("Figma: read frames/comments for implementation briefs. Notion: search pages, create database rows. Jira/Confluence: ticket context, spec search. Linear: sprint status. Partner skills may augment MCP."),
        ],
      ],
      workflowSteps: [
        "Read Figma + Notion in research thread.",
        "Create Linear/Jira issue only after spec approval.",
        "Link artifact URLs in ticket body.",
      ],
    }),
    buildGuideSection({
      id: "crm-support-connectors",
      number: "4.4",
      title: "CRM, support & revenue connectors",
      subtitle:
        "Salesforce, HubSpot, Intercom, Zendesk — account intelligence and support workflows",
      takeaway:
        "CRM/support connectors: account briefs, ticket summarization, draft replies — PII rules and sandbox pilots mandatory.",
      why: "Customer data + AI without connector discipline causes compliance incidents.",
      paragraphs: [
        [
          s("Salesforce/HubSpot: opportunity context, activity timeline. Zendesk/Intercom: ticket thread summary, suggested response — agent reviews before send. Log connector access for audit."),
        ],
      ],
      workflowSteps: [
        "Sandbox CRM for pilot.",
        "Redact customer PII in prompts when possible.",
        "Manager approves write tools.",
      ],
    }),
    buildGuideSection({
      id: "data-warehouse-connectors",
      number: "4.5",
      title: "Data warehouse & BI connectors",
      subtitle:
        "BigQuery, Snowflake, Databricks, Postgres — read-only analytics and governed query patterns",
      takeaway:
        "Data connectors: read-only roles, predefined views, query in output for verification — never production write creds in Claude host.",
      why: "Ad-hoc SQL from LLM on raw production DB is a data breach waiting to happen.",
      paragraphs: [
        [
          s("Patterns: semantic layer views, saved queries as MCP tools, row-level security enforced at DB. Output includes SQL + row count + caveats."),
        ],
      ],
      workflowSteps: [
        "Create claude_readonly DB user.",
        "Expose views not raw tables.",
        "Analyst validates SQL before exec if manual.",
      ],
    }),
    buildGuideSection({
      id: "automation-zapier-connectors",
      number: "4.6",
      title: "Automation & iPaaS connectors",
      subtitle:
        "Zapier, Make, and custom webhooks — when MCP bridges to existing automation stacks",
      takeaway:
        "Zapier/Make MCP servers expose thousands of apps — use for long-tail integrations; prefer first-party MCP when available for tighter auth.",
      why: "Not every SaaS has first-party MCP — iPaaS fills the long tail at maintenance cost.",
      paragraphs: [
        [
          s("Use for: niche SaaS, legacy internal APIs wrapped as Zapier actions. Avoid: duplicating first-party connector with fragile Zap chain."),
        ],
      ],
      workflowSteps: [
        "Check Connectors Directory first.",
        "If missing, evaluate Zapier MCP with least actions.",
        "Document zap ownership and failure alerts.",
      ],
    }),
    buildGuideSection({
      id: "mcp-apps-bundles",
      number: "4.7",
      title: "MCP Apps, Bundles & Desktop Extensions",
      subtitle:
        "Interactive UI in chat, MCPB distribution, and enterprise desktop extension rollout",
      takeaway:
        "MCP Apps render charts/forms/maps in chat. MCP Bundles (MCPB) package local servers for Desktop Extensions gallery — IT-friendly distribution.",
      why: "Text-only tool results underserve exec dashboards and form approvals — MCP Apps close the gap.",
      paragraphs: [
        [
          x("MCP Apps", "Servers return UI components rendered inside Claude.ai/Desktop chat."),
          s(" MCPB: signed bundles with deps for enterprise Desktop deployment. Local npm servers → package as MCPB or plugin, not directory-listed raw."),
        ],
      ],
      workflowSteps: [
        "Pilot one MCP App connector in sandbox.",
        "IT tests MCPB install via MDM.",
        "Version pin bundles like production deps.",
      ],
    }),
    buildGuideSection({
      id: "connectors-directory-governance",
      number: "4.8",
      title: "Connectors Directory & team governance",
      subtitle:
        "Verified third-party servers, allowlists, custom remote MCP, and plugin directory submissions",
      takeaway:
        "Connectors Directory = vetted third-party MCP. Teams publish ALLOWLIST.md, vet custom servers, submit internal plugins to directory when ready.",
      why: "Ungoverned connector sprawl is the MCP era's shadow IT.",
      paragraphs: [
        [
          s("Process: security review → pilot → allowlist → document scopes → quarterly recertify. Custom remote MCP for internal APIs — OAuth, audit log, rate limits required."),
        ],
      ],
      workflowSteps: [
        "Maintain CONNECTORS_ALLOWLIST.md.",
        "Block unlisted servers on managed devices.",
        "Recertify on OAuth scope changes.",
      ],
      artifact: {
        id: "connector-allowlist-full",
        title: "Enterprise connector allowlist template",
        content: `| Connector | Type | Read/Write | Owner | Review date |
|-----------|------|------------|-------|-------------|
| GitHub    | 1st party | R/W | Eng | 2026-09 |
| Salesforce| Directory | R | Sales Ops | 2026-06 |
| Internal CRM MCP | Custom remote | R | Platform | 2026-07 |`,
      },
    }),
  ],
};
