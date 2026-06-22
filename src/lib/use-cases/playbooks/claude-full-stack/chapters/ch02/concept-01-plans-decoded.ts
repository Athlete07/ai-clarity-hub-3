import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_PLANS_DECODED: GuideConcept = {
  number: 1,
  title: "Plans Decoded",
  subtitle:
    "Every plan, every limit, every feature — with no ambiguity about what you actually get",
  sections: [
    buildGuideSection({
      id: "free-tier",
      number: "1.1",
      title: "Free tier",
      subtitle:
        "What it includes, what it limits, and the use cases it genuinely serves",
      takeaway:
        "Free Claude is a learning and evaluation surface — not a production workflow. It is enough to master prompting and test fit; it is not enough for daily professional throughput or API-scale automation.",
      why: "Teams that standardise on free accounts hit invisible walls mid-project. Knowing exactly what free is for prevents false starts and surprise upgrade conversations.",
      paragraphs: [
        [
          s("Claude.ai free gives you access to current models with "),
          x(
            "session-based usage limits",
            "Anthropic caps messages and/or compute per time window — exact numbers change; check claude.com/pricing.",
          ),
          s(
            " that reset on a rolling basis. You get core chat, file upload within limits, and basic Projects — enough to validate whether Claude fits your work style.",
          ),
        ],
        [
          s("What free does not give you: priority at peak load, highest throughput, team admin, SSO, extended context tiers on consumer plans, or API credits. "),
          x(
            "API billing",
            "Separate metered product — free Claude.ai does not include API spend.",
          ),
          s(" is always pay-as-you-go with its own free trial credits for new accounts."),
        ],
        [
          s("Genuine free-tier use cases: personal learning, one-off document analysis, interviewing Claude vs competitors, student projects, and piloting prompt templates before asking finance for Pro."),
        ],
      ],
      workflowSteps: [
        "Run your top 5 weekly tasks on free for 3 days — note when you hit limits.",
        "Log limit hits: time of day, task type, file size.",
        "If limited before lunch twice in one week, Pro math likely already wins.",
      ],
      example: {
        title: "Solo consultant — free as sales demo",
        body: "A freelance ops consultant uses free Claude to prototype client workflows in discovery calls — live, in front of the client. She never delivers client work on free; she upgrades to Pro the day a retainer signs. Free is marketing; Pro is delivery.",
      },
    }),
    buildGuideSection({
      id: "claude-pro",
      number: "1.2",
      title: "Claude Pro",
      subtitle:
        "The full feature set, the usage limits, and who actually needs it",
      takeaway:
        "Pro is the default for any individual whose job includes knowledge work more than 1 hour per day on Claude — higher limits, priority access, and early features pay back one saved hour monthly.",
      why: "Pro is the most misunderstood line item: people buy it for 'better AI' when they are really buying throughput and reliability.",
      paragraphs: [
        [
          s("Claude Pro (typically ~$20/month at consumer pricing) raises "),
          x("usage caps", "More messages and/or compute per window vs free — sufficient for most individual daily use."),
          s(
            ", improves availability during peak demand, and often includes access to newer models, extended thinking, artifacts, Projects, connectors, and Skills (per current plan matrix — verify claude.com/pricing).",
          ),
        ],
        [
          s("Who needs Pro: founders writing daily, PMs living in specs, analysts on recurring reports, engineers using Claude.ai alongside IDE tools. "),
          x("Claude Max", "Higher individual tier — substantially raised usage limits and priority access for power users who live in Claude full-time."),
          s(" suits individuals who consistently hit Pro limits. Who can skip: occasional users (<3 sessions/week) and anyone whose work is already 100% API-driven."),
        ],
      ],
      workflowSteps: [
        "Track hours saved per week on Claude tasks for 2 weeks on free.",
        "If saved time × your hourly rate > $80/month, Pro is rational on economics alone.",
        "Enable Pro; re-run heaviest day-of-week task — confirm limit friction disappears.",
      ],
      example: {
        title: "PM on Pro — 6× weekly spec iterations",
        body: "A PM rewrote the same PRD section six times in one week during a pivot. On free she hit limits Thursday afternoon before a exec readout. Pro removed the ceiling; the $20 cost was noise against one delayed decision. She later moved API spend to the company when the feature shipped.",
      },
    }),
    buildGuideSection({
      id: "claude-team",
      number: "1.3",
      title: "Claude Team",
      subtitle:
        "How collaboration features change the value proposition — shared Projects, admin controls, and billing",
      takeaway:
        "Team exists when Claude becomes shared infrastructure — not when five individuals happen to use Claude separately.",
      why: "Buying five Pro seats without Team features duplicates Projects, fragments prompt IP, and creates shadow admin work. Team centralises what teams actually share.",
      paragraphs: [
        [
          s("Claude Team adds "),
          x(
            "organisation billing",
            "One invoice, seat management, usage visibility for admins.",
          ),
          s(
            ", shared workspaces, admin controls, and typically higher per-seat limits than individual Pro. Shared Projects become the team's prompt and knowledge layer.",
          ),
        ],
        [
          s("The value flip: a shared Project with approved prompts, brand voice, and reference docs means new hires inherit best practices on day one — not after six months of watching senior staff."),
        ],
        [
          s("When Team beats individual Pro: 3+ people on the same client/account, compliance need for central billing, or shared corp context (ICP, pricing, tone) used daily."),
        ],
      ],
      workflowSteps: [
        "List prompts/docs reused by 2+ people — if empty, Team may be premature.",
        "Create one Team Project with TEAM_PROMPTS.md — migrate top 3 prompts.",
        "Assign admin; disable personal card expenses for Claude where possible.",
      ],
      example: {
        title: "12-person agency — Projects as client IP boundary",
        body: "Agency moved from individual Pro accounts to Team. Each client got a Project with scope docs and banned phrases. Account managers stopped re-uploading the same PDFs. Finance got one bill. Onboarding dropped from 'ask Sarah' to 'read the Project'.",
      },
    }),
    buildGuideSection({
      id: "claude-enterprise",
      number: "1.4",
      title: "Claude Enterprise",
      subtitle:
        "What custom context windows, SSO, audit logs, and compliance features actually mean in practice",
      takeaway:
        "Enterprise is for regulated organisations that need identity, auditability, and negotiated terms — not for teams that merely want 'more tokens'.",
      why: "Procurement asks for Enterprise; engineers need API. Align both or you overpay for chat seats while underinvesting in integration.",
      paragraphs: [
        [
          s("Enterprise typically includes "),
          x("SSO/SAML", "Employees sign in with company identity — offboarding revokes access centrally."),
          s(
            ", admin analytics, audit logs, data handling commitments, and often expanded context or dedicated support. Custom MSAs replace click-through terms.",
          ),
        ],
        [
          s("'Custom context window' in sales decks means negotiated access to larger context tiers or dedicated capacity — verify in writing what model IDs and limits apply to chat vs API."),
        ],
        [
          s("Enterprise makes sense when: legal requires audit trail of AI use, infosec mandates SSO, or you deploy Claude to 100+ seats with DLP review. It is overkill for a 15-person startup on Notion and Google Workspace alone."),
        ],
      ],
      workflowSteps: [
        "Complete security questionnaire: data retention, training on customer data (Anthropic commercial terms generally exclude training on API inputs — confirm contract).",
        "Map chat seats vs API consumers — separate budgets.",
        "Pilot 30 seats + API sandbox before enterprise-wide rollout.",
      ],
    }),
    buildGuideSection({
      id: "api-pricing",
      number: "1.5",
      title: "API pricing",
      subtitle:
        "Tokens in, tokens out, model pricing by tier — how to calculate what you'll actually spend",
      takeaway:
        "API cost = (input tokens × input price) + (output tokens × output price) × volume. Model choice matters more than coupon hunting.",
      why: "Most bill shock is predictable arithmetic nobody did. This section is the spreadsheet before the PO.",
      paragraphs: [
        [
          s("Anthropic prices the API per "),
          x("million tokens", "MTok — industry standard unit. 1M tokens ≈ 750k words (rough rule of thumb)."),
          s(
            " with separate rates for input and output. Haiku is cheapest; Sonnet mid; Opus premium. Published rates change — always pull current numbers from docs.anthropic.com when budgeting.",
          ),
        ],
        [
          s("Worked example (illustrative structure, not live prices): 1,000 user questions/day, 2k input tokens + 500 output tokens each on Sonnet. Daily tokens: 2M in + 0.5M out. Monthly ≈ 60M in + 15M out. Multiply by your rate card — that is your floor before tools, retries, and failed requests."),
        ],
        [
          s("Hidden multipliers: retries, agent loops (10× tool calls), oversized system prompts, and logging full chat history on every request."),
        ],
      ],
      workflowSteps: [
        "Instrument one production path: log input_tokens, output_tokens, model per request.",
        "Extrapolate to 30 days; add 30% buffer for growth and retries.",
        "Compare Sonnet vs Haiku on quality score — not just price.",
      ],
      artifact: {
        id: "api-cost-estimator",
        title: "API monthly cost estimator",
        description: "Fill with current rates from Anthropic pricing page.",
        content: `MONTHLY API COST (estimate)

Requests per day:        ___
Avg input tokens:        ___
Avg output tokens:       ___
Model:                   [ Haiku | Sonnet | Opus ]

Input MTok/month  = (requests × input × 30) / 1,000,000
Output MTok/month = (requests × output × 30) / 1,000,000

Cost = (Input MTok × $input_rate) + (Output MTok × $output_rate)

Add-ons:
+ 30% retry/agent overhead
+ Batch discount if applicable
+ Prompt cache savings (see 2.6)`,
      },
    }),
    buildGuideSection({
      id: "usage-limits",
      number: "1.6",
      title: "The usage limit reality",
      subtitle:
        "How limits work in practice, when you hit them, and what happens when you do",
      takeaway:
        "Limits are rolling compute budgets, not moral judgments. When you hit them, you wait, upgrade, or move work to the API — plan which before you are blocked.",
      why: "Hitting a limit mid-deadline feels like product failure. Understanding mechanics turns it into an ops event with a playbook.",
      paragraphs: [
        [
          s("Consumer plans use opaque "),
          x("rolling windows", "Limits often reset over hours/days — not always calendar midnight."),
          s(
            ". You may see 'try again later' without exact countdown. Heavy file analysis and long threads consume budget faster than short Q&A.",
          ),
        ],
        [
          s("When blocked: shorten context, switch to smaller model on API, defer non-urgent tasks, or upgrade tier. Do not create five free accounts — violates ToS and fragments IP."),
        ],
      ],
      workflowSteps: [
        "When limited, note timestamp and last action (upload? 100-message thread?).",
        "Keep a LIMIT_LOG for one week — patterns reveal fix.",
        "Pre-stage heavy jobs for off-peak hours if peak triggers throttling.",
      ],
      example: {
        title: "Research sprint — limits as pacing signal",
        body: "Policy team hit Pro limits during a 48-hour legislative review. Instead of panic-upgrading to Enterprise, they split work: Haiku API for chunk summaries overnight; Sonnet in Pro for final synthesis. Limits forced better architecture.",
      },
    }),
    buildGuideSection({
      id: "priority-access",
      number: "1.7",
      title: "Priority access",
      subtitle: "What it means during peak hours and when it matters to your workflow",
      takeaway:
        "Paid tiers buy throughput and queue priority when demand spikes — critical if your work happens in fixed live meetings, not async slots.",
      why: "Free users discovering slowdowns at 2pm US time is a capacity lesson, not a bug. Paid users buy reliability.",
      paragraphs: [
        [
          s("During high global demand, free accounts may see slower responses or tighter limits. Pro/Team/Enterprise get "),
          x("priority access", "Better availability when Anthropic infrastructure is constrained."),
          s(" — the difference between finishing a board deck in the meeting vs waiting 20 minutes."),
        ],
        [
          s("If your workflow is live (workshops, customer calls, war rooms), priority access alone can justify Pro. If you batch work at night, you may never notice."),
        ],
      ],
      workflowSteps: [
        "Note if delays correlate with US business hours.",
        "If yes and work is synchronous, upgrade or shift API batch jobs off-peak.",
      ],
    }),
    buildGuideSection({
      id: "plan-upgrade-framework",
      number: "1.8",
      title: "Plan upgrade decision framework",
      subtitle:
        "The actual usage patterns that justify each tier — not the marketing, the math",
      takeaway:
        "Upgrade when friction cost (limits, slowdowns, admin chaos) exceeds tier price — not when you want to feel premium.",
      why: "This is the decision tree finance and IT can approve.",
      paragraphs: [
        [
          s("Free → Pro when: limit hits ≥2×/week on workdays, or one hour saved weekly exceeds subscription cost."),
        ],
        [
          s("Pro → Team when: ≥3 collaborators need same Projects/prompts, or finance needs one invoice."),
        ],
        [
          s("Team → Enterprise when: SSO/audit/compliance required, or seat count and API spend justify negotiated terms."),
        ],
        [
          s("Parallel track: any production feature → API with its own budget, regardless of chat tier."),
        ],
      ],
      workflowSteps: [
        "Score each trigger 0–2 weekly for 2 weeks.",
        "Any score ≥3 on Pro triggers → upgrade.",
        "Revisit quarterly — teams outgrow tiers fast.",
      ],
      artifact: {
        id: "plan-decision-matrix",
        title: "Plan upgrade scorecard",
        content: `Score 0–2 per week (0=never, 1=once, 2=multiple)

[ ] Hit usage limit on workday
[ ] Delayed deliverable due to Claude slowdown
[ ] Shared prompt copied manually across teammates
[ ] Finance asked for consolidated AI spend
[ ] Security asked for SSO or audit logs
[ ] Shipped customer-facing feature on API

0–2:  Stay on current tier
3–5:  Consider next tier up
6+:   Upgrade + assign owner for API budget`,
      },
    }),
  ],
};
