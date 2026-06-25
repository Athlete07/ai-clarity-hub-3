import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_SELF_SERVICE_DEFLECTION: GuideConcept = {
  number: 4,
  title: "Self-service Deflection Workflows",
  subtitle:
    "The portal funnel, proactive answers, measurement, fallbacks, optimisation loops, and an enterprise redesign case study",
  sections: [
    buildGuideSection({
      id: "deflection-economics",
      number: "4.1",
      title: "The deflection economics",
      subtitle: "Cost model that justifies investment in AI search and self-service",
      takeaway:
        "Deflection ROI is a simple equation: tickets avoided × cost per ticket + agent time saved − AI/search operating cost. Credible programs use category-level baselines, not global hype numbers.",
      why: "CFOs fund deflection when you show real math, credible attribution, and a plan to improve over time.",
      paragraphs: [
        [
          s("Start with category segmentation: password resets and access requests behave differently than outage incidents. Each category has different deflection ceiling."),
        ],
        [
          s("Include hidden costs: knowledge maintenance, search tuning, and governance. AI doesn’t remove ops; it changes ops."),
        ],
        [
          s("Use conservative ranges and publish assumptions. Overpromised deflection destroys credibility and kills future funding."),
        ],
      ],
      workflowSteps: [
        "Compute cost per ticket by category (fully loaded).",
        "Pick 3 categories with high volume and clear self-service solutions.",
        "Model deflection at 20%, 35%, 45% scenarios; choose target.",
      ],
      example: {
        title: "Why 70% deflection promises fail",
        body: "The 70% number often excludes complex categories and assumes perfect knowledge. Programs that model category ceilings (e.g., 60% password, 30% VPN, 5% outages) produce believable business cases and sustained investment.",
      },
    }),
    buildGuideSection({
      id: "portal-ai-integration",
      number: "4.2",
      title: "Portal AI integration",
      subtitle: "How AI Search and Now Assist combine in Service Portal",
      takeaway:
        "AI Search retrieves the right sources; Now Assist synthesises and formats the answer; the portal UX guides users to act (reset, request, escalate). All three are required.",
      why: "Many portals deploy GenAI without retrieval or action CTAs — users chat, then still create tickets.",
      paragraphs: [
        [
          s("Pattern: user question → AI Search top candidates → GenAI answer grounded in sources → action cards (catalog, reset flow, contact)."),
        ],
        [
          s("Grounding policy: answers must link to KB or catalog items. If no source exists, the assistant should escalate instead of improvising."),
        ],
        [
          s("Portal design matters: show the answer and the next action on one screen. Minimise clicks between search and resolution."),
        ],
      ],
      workflowSteps: [
        "For one portal, map: search box → results → action → success.",
        "Add action cards for top 10 intents.",
        "Track funnel metrics (search → click → success).",
      ],
      example: {
        title: "Catalog action card beat article reading",
        body: "Users searching “request software” preferred a one-click catalog card. Adding the card increased successful self-service even though the KB article was accurate.",
      },
    }),
    buildGuideSection({
      id: "ticket-funnel",
      number: "4.3",
      title: "The create-a-ticket funnel",
      subtitle:
        "Where AI intervenes in ticket creation and with what success rate",
      takeaway:
        "The funnel has intervention points: before ticket creation (answer), during creation (suggest duplicates/KB), and after creation (routing and summarisation). Deflection requires before/during interventions.",
      why: "Teams often measure AI only after a ticket exists — too late for deflection.",
      paragraphs: [
        [
          s("Before create: portal answers and action flows. During create: suggest KB and detect duplicates. After create: PI routing and Now Assist summaries improve agent productivity, not deflection."),
        ],
        [
          s("Success rates differ: “password reset” has high deflection ceiling; “network outage” does not. Tie funnel interventions to category."),
        ],
        [
          s("Design for honesty: do not block ticket creation behind endless chat. Make escalation easy when needed."),
        ],
      ],
      workflowSteps: [
        "Instrument where tickets originate (portal, email, VA).",
        "Add duplicate suggestion and KB prompts in create form.",
        "Measure: % searches that end without ticket + % tickets created after search.",
      ],
      example: {
        title: "Duplicate detection reduced noise",
        body: "During outage, portal suggested existing major incident and status page. Ticket creation fell, but user satisfaction rose because they got instant status instead of a queue.",
      },
    }),
    buildGuideSection({
      id: "proactive-resolution",
      number: "4.4",
      title: "Proactive resolution",
      subtitle:
        "Surfacing answers before the user finishes typing their request",
      takeaway:
        "Proactive suggestions (typeahead + intent prediction) can solve issues earlier in the funnel, increasing containment and reducing frustration — but must be precise to avoid noise.",
      why: "The best deflection is invisible: users get the answer before they ask fully.",
      paragraphs: [
        [
          s("Proactive works when you have strong patterns and clean content: top intents, stable procedures, and clear action paths."),
        ],
        [
          s("Noise kills it: irrelevant popups train users to ignore the portal. Use strict thresholds and limit to top intents."),
        ],
        [
          s("Pair with accessibility: proactive suggestions must be keyboard and screen-reader friendly."),
        ],
      ],
      workflowSteps: [
        "Enable proactive suggestions for top 5 intents only.",
        "Measure: suggestion click rate and success rate.",
        "Expand only if success stays high and complaints stay low.",
      ],
      example: {
        title: "Typeahead solved VPN queries",
        body: "As users typed “vpn”, portal suggested “Remote access status” and “Reset VPN profile.” Click-to-resolution improved and ticket creation dropped for that category.",
      },
    }),
    buildGuideSection({
      id: "measuring-deflection",
      number: "4.5",
      title: "Measuring deflection",
      subtitle:
        "Metrics, attribution challenges, and reporting CFOs accept",
      takeaway:
        "Deflection measurement must tie to record truth: searches that did not create tickets, tickets created after failed search, and reopen/recall rates. CFOs trust conservative attribution with clear assumptions.",
      why: "Bad measurement creates fake wins and later budget cuts.",
      paragraphs: [
        [
          s("Core metrics: search sessions, zero results, click-through, ticket create rate after search, and deflection by category."),
        ],
        [
          s("Attribution pitfalls: users may search then call; one user may create ticket later; a successful session may still create ticket for compliance reasons."),
        ],
        [
          s("Reporting pattern: show ranges, confidence, and negative signals (false deflection, wrong answers). Mature programs report risks alongside wins."),
        ],
      ],
      workflowSteps: [
        "Define deflection as: no ticket created within 72h after search on same intent.",
        "Track false deflection: ticket created after reading wrong article.",
        "Publish monthly deflection scorecard with assumptions.",
      ],
      example: {
        title: "CFO accepted deflection after assumptions published",
        body: "Team published a conservative definition and reported both deflection and false deflection. CFO funded further knowledge investment because reporting was honest and stable over time.",
      },
    }),
    buildGuideSection({
      id: "fallback-design",
      number: "4.6",
      title: "The fallback design",
      subtitle:
        "What happens when AI cannot answer and how to make handoff seamless",
      takeaway:
        "A good fallback is fast, respectful, and context-preserving: offer ticket creation, chat, or call — while passing transcript, query, and retrieved sources to the agent.",
      why: "Fallback quality determines whether users trust self-service or bypass it forever.",
      paragraphs: [
        [
          s("Fallback triggers: no sources, low confidence, policy-sensitive topic, or explicit user frustration."),
        ],
        [
          s("Context handoff: include the user’s query, what they clicked, and the top retrieved articles — so agents don’t restart from zero."),
        ],
        [
          s("Design rule: never trap users in a loop. Provide “create ticket now” option early."),
        ],
      ],
      workflowSteps: [
        "Define fallback paths per portal: ticket, chat, phone, scheduled callback.",
        "Attach context to the created record automatically.",
        "Train agents to acknowledge prior self-service attempts in first reply.",
      ],
      example: {
        title: "Handoff summary reduced repeat questions",
        body: "Agents received a short summary of the user’s portal attempts and retrieved KB. First message acknowledged steps tried. CSAT improved even when deflection didn’t happen.",
      },
    }),
    buildGuideSection({
      id: "optimising-deflection",
      number: "4.7",
      title: "Optimising for deflection",
      subtitle:
        "Iterative process of improving containment rate over time",
      takeaway:
        "Deflection improves through weekly iteration: fix top gaps, tune ranking, add synonyms, improve action blocks, and retire bad content — the flywheel in action.",
      why: "Deflection is a product, not a project. Optimisation is the work.",
      paragraphs: [
        [
          s("Run the loop: analytics → identify top failures → ship 5 fixes → re-measure. Consistency beats occasional big rewrites."),
        ],
        [
          s("Separate content fixes from ranking fixes. Content fixes improve truth; ranking fixes improve findability. You need both."),
        ],
        [
          s("Build champions: portal owners, knowledge managers, and service desk leads. If operations doesn’t own it, it will die after launch."),
        ],
      ],
      workflowSteps: [
        "Weekly: ship 5 improvements (KB, synonyms, boosts, blocks).",
        "Monthly: review top deflection categories and plateau causes.",
        "Quarterly: portal redesign review and federation audit.",
      ],
      example: {
        title: "Containment rose 22% → 41% in 12 weeks",
        body: "No model changes. Only flywheel work: KB rewrites, synonym expansions, boosting, action cards, and stale article retirement. This is how real programs win.",
      },
    }),
    buildGuideSection({
      id: "portal-redesign-case",
      number: "4.8",
      title: "Real use case: enterprise portal redesign",
      subtitle:
        "Architecture, before-and-after metrics, and lessons",
      takeaway:
        "Portal redesign success requires retrieval quality, action-first UX, and honest measurement. AI Search is the engine; Now Assist is the voice; Flow is the action layer.",
      why: "This is the case study you use in interviews and steering committees.",
      paragraphs: [
        [
          s("Architecture: profile-scoped AI Search + KB flywheel + portal action blocks + fallback handoff summary + analytics dashboards."),
        ],
        [
          s("Before metrics: high zero results, low click-through, high ticket creation after search. After metrics: improved top-1 click-through, reduced zero results, higher deflection in target categories."),
        ],
        [
          s("Lessons: don’t skip knowledge hygiene; don’t launch without analytics; don’t claim universal deflection; invest in fallback UX."),
        ],
      ],
      workflowSteps: [
        "Phase 0: golden query set + analytics baseline.",
        "Phase 1: AI Search sources + ranking tuning for IT portal.",
        "Phase 2: action blocks + proactive suggestions for top intents.",
        "Phase 3: expand to HR/CSM portals with separate profiles.",
      ],
      example: {
        title: "100k-employee enterprise — portal relaunch",
        body: "After 8-week search and knowledge cleanup, top-1 click-through rose 31%. Zero-result rate fell 45%. Deflection for top 5 intents reached 38% with conservative attribution. Ticket volume dropped in those categories while CSAT rose.",
      },
    }),
  ],
};

