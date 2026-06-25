import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_OMNICHANNEL: GuideConcept = {
  number: 4,
  title: "Omnichannel Deployment",
  subtitle:
    "Service Portal, Teams, Slack, mobile, API channels, cross-channel context, channel design, and analytics",
  sections: [
    buildGuideSection({
      id: "service-portal-deploy",
      number: "4.1",
      title: "Service Portal deployment",
      subtitle: "Embedding the VA widget and configuring portal behavior",
      takeaway:
        "Service Portal is the default VA surface: embed widget, bind to profiles, configure branding, escalation, and analytics. Portal UX heavily influences containment.",
      why: "Most deflection happens here. If portal VA UX is clunky, users bypass it and create tickets.",
      paragraphs: [
        [
          s("Portal deployment choices: when to auto-open, where to place the widget, and how to present quick actions (catalog, status, contact)."),
        ],
        [
          s("Bind to AI Search profiles and persona rules. Portal VA should retrieve employee-safe sources only."),
        ],
        [
          s("Instrument the funnel: portal entry → VA session → outcome (self-service vs ticket vs handoff)."),
        ],
      ],
      workflowSteps: [
        "Configure widget placement and entry points for top pages.",
        "Add top 5 quick actions based on analytics.",
        "Measure containment and abandon rates after launch.",
      ],
      example: {
        title: "Widget placement doubled engagement",
        body: "Moving VA entry to the search box area increased sessions and enabled higher containment because more users tried self-service before creating tickets.",
      },
    }),
    buildGuideSection({
      id: "teams-integration",
      number: "4.2",
      title: "Microsoft Teams integration",
      subtitle: "Channel setup and enterprise authentication requirements",
      takeaway:
        "Teams deployment requires strong auth: SSO, tenant governance, and bot permissions. Design conversations for chat constraints and short-turn interactions.",
      why: "Teams is often the 'front door' for employees. Without proper auth and governance, Teams bots get blocked by security.",
      paragraphs: [
        [
          s("Auth is the hard part: ensure the bot operates as the user and respects roles. Avoid service accounts that leak data."),
        ],
        [
          s("Teams UX: short prompts, quick replies, and minimal form-like sequences. Deep forms belong in portal via links."),
        ],
        [
          s("Governance: define which workspaces/tenants can install the bot and what data it may access."),
        ],
      ],
      workflowSteps: [
        "Define Teams auth flow and role mapping.",
        "Pilot with one department and one set of intents.",
        "Review security and privacy before scaling tenant-wide.",
      ],
      example: {
        title: "Teams bot approved after scoped pilot",
        body: "Security approved Teams rollout because pilot restricted to IT intents and employee-safe KB. Expansion happened only after logs and ACL tests passed.",
      },
    }),
    buildGuideSection({
      id: "slack-integration",
      number: "4.3",
      title: "Slack integration",
      subtitle: "Slack app configuration and workspace governance model",
      takeaway:
        "Slack bots require workspace governance: app scopes, installation approvals, and channel policies. Conversations should use interactive components and avoid long flows.",
      why: "Slack is easy to deploy poorly and hard to govern after the fact. Do governance first.",
      paragraphs: [
        [
          s("Slack scopes should be minimal (read messages only where installed, post replies, interactive buttons). Avoid broad workspace scopes unless required."),
        ],
        [
          s("Channel design: support channels behave differently from IT broadcast channels. Decide where VA is allowed to operate."),
        ],
        [
          s("Use Slack as triage entry and link to portal for complex forms and approvals."),
        ],
      ],
      workflowSteps: [
        "Define Slack installation policy and approved workspaces.",
        "Configure minimal scopes and audit logs.",
        "Pilot in one support channel; measure containment and handoffs.",
      ],
      example: {
        title: "Slack VA reduced support interrupts",
        body: "Employees used Slack VA to request access; the bot launched the right catalog item and confirmed request id — fewer random pings to IT channels.",
      },
    }),
    buildGuideSection({
      id: "mobile-deployment",
      number: "4.4",
      title: "Mobile deployment",
      subtitle:
        "ServiceNow mobile VA experience and mobile-specific design",
      takeaway:
        "Mobile VA needs mobile-first flows: fewer turns, larger buttons, low typing, and tolerance for intermittent connectivity — with safe fallback to ticket creation.",
      why: "Field teams live on mobile. If mobile VA is not excellent, self-service fails for high-impact users.",
      paragraphs: [
        [
          s("Mobile constraints: small screen, slow typing, context switching. Use quick replies and prefilled entities where possible."),
        ],
        [
          s("Use device context: location, device type, and assigned assets can reduce questions."),
        ],
        [
          s("Offline handling: if connection fails mid-topic, preserve state and resume later."),
        ],
      ],
      workflowSteps: [
        "Redesign top 5 mobile topics with <6 turns each.",
        "Use quick actions instead of free text when possible.",
        "Test on real mobile devices and networks.",
      ],
      example: {
        title: "Mobile redesign increased completion",
        body: "Reducing turns and adding quick replies doubled completion rate on mobile for facilities requests.",
      },
    }),
    buildGuideSection({
      id: "api-channel",
      number: "4.5",
      title: "API channel",
      subtitle:
        "Building custom front-end experiences on the VA API",
      takeaway:
        "Custom channels use the VA API to embed conversation in your own UI (in-app support, kiosks). Preserve the same NLU and topic logic while enforcing auth and analytics.",
      why: "Many enterprises need VA inside custom apps. API channels make VA reusable across products.",
      paragraphs: [
        [
          s("Key design: authentication and identity. The VA API must operate as the real user to preserve ACL and personalization."),
        ],
        [
          s("Preserve analytics: custom channels must emit events so you can measure containment and failure modes."),
        ],
        [
          s("Don’t fork logic: keep topics central in ServiceNow; custom UI should be presentation only."),
        ],
      ],
      workflowSteps: [
        "Define custom channel requirements and auth method.",
        "Implement VA API integration with session persistence.",
        "Instrument analytics events aligned to portal/Teams metrics.",
      ],
      example: {
        title: "In-app support VA",
        body: "A custom app embedded VA for device support. Users stayed in app; VA created incidents when needed with transcript attached. Analytics matched portal reporting.",
      },
    }),
    buildGuideSection({
      id: "cross-channel-context",
      number: "4.6",
      title: "Cross-channel context",
      subtitle:
        "Preserving state when a user switches channels",
      takeaway:
        "Cross-channel continuity requires a shared session id and record-backed state so a user can start on Teams and finish on portal without repeating information.",
      why: "Channel switching is common. If state isn’t preserved, users abandon and call support.",
      paragraphs: [
        [
          s("Use record-backed state: collected entities and stage stored on a session record. Channel adapters reference the same session."),
        ],
        [
          s("Security: ensure session continuity doesn’t leak to other users on shared devices or shared channels."),
        ],
        [
          s("UX: show a short summary when switching: 'I have your laptop model and issue type — continuing…'"),
        ],
      ],
      workflowSteps: [
        "Design session id strategy across channels.",
        "Store entity values and stage on session record.",
        "Test: start in Teams, continue in portal, complete outcome.",
      ],
      example: {
        title: "Teams → portal completion",
        body: "User started request in Teams but needed a form. Portal opened with fields prefilled from session state; completion rate improved.",
      },
    }),
    buildGuideSection({
      id: "channel-specific-design",
      number: "4.7",
      title: "Channel-specific design",
      subtitle:
        "Adapting topic flows for voice, chat, and embedded widget contexts",
      takeaway:
        "Channels are different products. Adapt prompts, turn limits, and fallback UX per channel while keeping the underlying intent and outcome consistent.",
      why: "One-size-fits-all conversation design produces mediocre experiences everywhere.",
      paragraphs: [
        [
          s("Voice: fewer choices, confirmation steps, and error tolerance. Chat: quick replies and short turns. Widget: can use richer UI and forms."),
        ],
        [
          s("Avoid channel mismatch: don’t ask 10-question forms in Slack. Link to portal for complex data collection."),
        ],
        [
          s("Use the same outcome contract across channels: record created/updated and confirmation message."),
        ],
      ],
      workflowSteps: [
        "Define channel constraints (max turns, message length).",
        "Create channel-specific variants for top topics.",
        "A/B test prompt length and quick reply design.",
      ],
      example: {
        title: "Short prompts improved Teams success",
        body: "Reducing prompt verbosity and using quick replies improved Teams completion rate and reduced user frustration.",
      },
    }),
    buildGuideSection({
      id: "channel-analytics",
      number: "4.8",
      title: "Channel analytics",
      subtitle:
        "Measuring performance and containment across channels",
      takeaway:
        "Omnichannel analytics require consistent event definitions: session started, intent resolved, ticket created, handoff, abandon — comparable across portal, Teams, Slack, and mobile.",
      why: "If you can’t compare channels, you can’t prioritise investment or defend ROI.",
      paragraphs: [
        [
          s("Standardize metrics: containment, handoff rate, drop-off rate, average turns, and time to resolution."),
        ],
        [
          s("Segment by channel and intent — portal may contain better than Teams for certain topics."),
        ],
        [
          s("Use analytics to guide channel-specific redesign and topic prioritization."),
        ],
      ],
      workflowSteps: [
        "Define a single event taxonomy across channels.",
        "Build dashboards by channel and by intent.",
        "Review monthly: which channel performs best for which intent.",
      ],
      example: {
        title: "Channel strategy became data-driven",
        body: "Analytics showed Teams worked best for simple requests while portal handled complex troubleshooting better. Investment shifted accordingly and overall containment rose.",
      },
    }),
  ],
};

