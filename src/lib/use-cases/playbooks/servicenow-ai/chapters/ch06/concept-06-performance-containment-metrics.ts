import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_METRICS: GuideConcept = {
  number: 6,
  title: "Performance and Containment Metrics",
  subtitle:
    "Containment, value, quality, escalation analysis, utterance mining, A/B tests, improvement cadence, and CIO dashboards",
  sections: [
    buildGuideSection({
      id: "containment-rate",
      number: "6.1",
      title: "Containment rate",
      subtitle:
        "Primary KPI and the three ways it’s measured (and gamed)",
      takeaway:
        "Containment must be tied to record truth. Define it explicitly and track false containment. Otherwise you will get vanity numbers that collapse in production.",
      why: "Containment is the KPI everyone asks for — and the KPI most often misreported.",
      paragraphs: [
        [
          s("Three common measurements: (1) chat session ended without handoff, (2) no ticket created within a time window, (3) user confirmed resolution. Each can be gamed if not combined with guardrails."),
        ],
        [
          s("Best practice: use conservative definition (no ticket within 72h for same intent) plus a confirmation prompt when appropriate."),
        ],
        [
          s("Track false containment: users who later create tickets because they got wrong guidance."),
        ],
      ],
      workflowSteps: [
        "Choose containment definition and publish it to stakeholders.",
        "Instrument ticket creation after VA sessions (72h window).",
        "Report containment by intent category, not one global number.",
      ],
      example: {
        title: "Vanity containment corrected",
        body: "Bot showed 80% 'session success' but only 35% no-ticket containment. Once measured correctly, the team invested in knowledge and NLU fixes and grew real containment steadily.",
      },
    }),
    buildGuideSection({
      id: "deflection-value",
      number: "6.2",
      title: "Deflection value",
      subtitle:
        "Calculating cost savings from each contained conversation",
      takeaway:
        "Deflection value = tickets avoided × cost per ticket + agent time saved − operating cost. Use category-level costs and conservative attribution for CFO credibility.",
      why: "CFOs fund VA programs when value is quantified honestly and repeatably.",
      paragraphs: [
        [
          s("Cost per ticket varies by category. Password reset is cheap; complex app issues are expensive. Segment costs and report deflection value by category."),
        ],
        [
          s("Include operating costs: knowledge upkeep, NLU training, channel integrations, and GenAI consumption."),
        ],
        [
          s("Show a range (best/base/worst). CFOs trust ranges more than point estimates."),
        ],
      ],
      workflowSteps: [
        "Compute fully loaded cost per ticket for top 10 categories.",
        "Multiply by contained conversations per category.",
        "Subtract VA and AI operating costs; report net value monthly.",
      ],
      example: {
        title: "CFO approved expansion",
        body: "Program showed $X per month savings on 5 intents with conservative attribution. Because assumptions were stable and transparent, CFO approved scaling to new channels.",
      },
    }),
    buildGuideSection({
      id: "resolution-quality",
      number: "6.3",
      title: "Resolution quality",
      subtitle:
        "CSAT, post-conversation surveys, and limits of self-report",
      takeaway:
        "Quality is multi-signal: CSAT surveys, reopen rates, repeat contacts, and sentiment. Self-report helps, but record-based signals prevent bias and gaming.",
      why: "Containment without quality is harmful. Wrong answers create future tickets and trust loss.",
      paragraphs: [
        [
          s("Use post-conversation surveys but treat them as noisy. Combine with objective signals: repeat contact within 72h and ticket reopen rates."),
        ],
        [
          s("Quality signals differ by channel: Teams may have lower survey completion; portal can capture more feedback."),
        ],
        [
          s("GenAI adds risk: require citations and measure wrong-answer complaints explicitly."),
        ],
      ],
      workflowSteps: [
        "Add a 1-question 'did this solve it?' check for key topics.",
        "Track repeat contacts and reopen rates tied to VA sessions.",
        "Review negative transcripts weekly for root causes.",
      ],
      example: {
        title: "Quality saved the program",
        body: "Containment was rising but wrong-answer complaints increased. Tightening KB scope and adding escalation on missing sources improved quality and restored trust.",
      },
    }),
    buildGuideSection({
      id: "escalation-analysis",
      number: "6.4",
      title: "Escalation analysis",
      subtitle:
        "Using escalation data to identify topics that need redesign",
      takeaway:
        "Escalations are the backlog. Analyze escalation reasons by topic and channel to decide: retrain NLU, redesign flow, add knowledge, or change policy.",
      why: "If you want containment to rise, you must mine escalations and fix the root causes.",
      paragraphs: [
        [
          s("Break down escalations by reason code (low confidence, missing entity, no KB, tool failure) and by topic."),
        ],
        [
          s("Prioritize by impact: high volume × high cost topics first."),
        ],
        [
          s("Close the loop: every top escalation reason should map to an owner and an action in the next sprint."),
        ],
      ],
      workflowSteps: [
        "Build a dashboard: top 20 escalated topics and reasons.",
        "Assign owners: NLU, knowledge, integrations, policy.",
        "Ship 5 fixes/week; re-measure.",
      ],
      example: {
        title: "Tool failures were the real issue",
        body: "Escalations blamed NLU, but analytics showed tool failures (catalog submission errors). Fixing integration raised containment more than retraining utterances.",
      },
    }),
    buildGuideSection({
      id: "utterance-analysis",
      number: "6.5",
      title: "Utterance analysis",
      subtitle:
        "Mining unrecognised utterances to find training gaps",
      takeaway:
        "Unrecognized utterances are training fuel: cluster them, map them to intents, and update taxonomy, synonyms, and entity dictionaries — continuously.",
      why: "User language changes constantly. Utterance mining is how VA stays accurate over time.",
      paragraphs: [
        [
          s("Collect unrecognized utterances by channel. Teams language differs from portal language; mobile differs too."),
        ],
        [
          s("Cluster and label weekly. Use these labels to add training phrases or create new intents when volume justifies it."),
        ],
        [
          s("Don’t chase the tail endlessly. Long-tail utterances may be better handled by AI Search + GenAI fallback."),
        ],
      ],
      workflowSteps: [
        "Weekly: export top 200 unrecognized utterances.",
        "Cluster into themes; map to existing intents or new ones.",
        "Update synonyms/entities and retrain NLU.",
      ],
      example: {
        title: "Acronym drift fixed quickly",
        body: "New internal tool acronym appeared. Utterance analysis caught it in a week; synonym update and new training phrases prevented widespread failures.",
      },
    }),
    buildGuideSection({
      id: "ab-testing",
      number: "6.6",
      title: "A/B testing in Virtual Agent",
      subtitle:
        "Controlled experiments on topic variations",
      takeaway:
        "A/B test topic variants on cohorts to compare containment, drop-off, and handoff rates. Test one change at a time to attribute impact.",
      why: "Topic design is product design. A/B testing turns it into a measurable engineering practice.",
      paragraphs: [
        [
          s("Define primary metric: completion/containment for the topic. Secondary: abandon rate and time-to-resolution."),
        ],
        [
          s("Keep other variables stable (knowledge, NLU model). Otherwise you can’t attribute changes."),
        ],
        [
          s("Run long enough to cover behavior cycles (weekday/weekend) and channel mix."),
        ],
      ],
      workflowSteps: [
        "Create variant B with one change (clarifier wording).",
        "Split traffic 50/50 for 2 weeks.",
        "Promote winner and log change notes.",
      ],
      example: {
        title: "Clarifier A/B improved completion",
        body: "Variant with 3 quick replies outperformed a free-text clarifier. Completion rose and drop-off fell because choices were clearer.",
      },
    }),
    buildGuideSection({
      id: "continuous-improvement",
      number: "6.7",
      title: "The continuous improvement cycle",
      subtitle:
        "Operating cadence for reviewing metrics and iterating topics",
      takeaway:
        "VA is an operating system: weekly reviews of failures, monthly health checks, quarterly taxonomy refresh. Improvement cadence is what creates sustained containment gains.",
      why: "Bots decay. Without cadence, containment trends to zero as language and services change.",
      paragraphs: [
        [
          s("Weekly: top escalations and unrecognized utterances. Monthly: channel performance and cost/value. Quarterly: taxonomy and persona review."),
        ],
        [
          s("Assign owners: NLU owner, knowledge owner, channel owner, and handoff owner. No owners, no improvement."),
        ],
        [
          s("Tie changes to release notes and stakeholder reporting so trust grows with visibility."),
        ],
      ],
      workflowSteps: [
        "Schedule weekly VA ops review (30 min).",
        "Ship 5 improvements/week (topics, KB, synonyms, boosts).",
        "Quarterly governance review: privacy, retention, persona, guardrails.",
      ],
      example: {
        title: "Containment climbed steadily",
        body: "No big redesign — just weekly fixes. Containment rose from 18% to 39% in 12 weeks on targeted intents. Cadence was the secret.",
      },
    }),
    buildGuideSection({
      id: "reporting-dashboard",
      number: "6.8",
      title: "Reporting to stakeholders",
      subtitle:
        "Dashboard design that tells the VA story to a CIO",
      takeaway:
        "A CIO dashboard should show: containment by intent, deflection value, quality signals, escalation reasons, and the improvement backlog — not vanity chat volume.",
      why: "Stakeholder reporting is what keeps funding and unlocks cross-channel scaling.",
      paragraphs: [
        [
          s("Include both wins and risks: false deflection, wrong-answer incidents, and after-hours escalation load."),
        ],
        [
          s("Show the roadmap: next intents to improve, next channels to launch, and governance status."),
        ],
        [
          s("Use stable definitions and publish assumptions — credibility beats hype."),
        ],
      ],
      workflowSteps: [
        "Define standard metrics and definitions.",
        "Build dashboard with 5–7 tiles maximum.",
        "Review monthly with CIO/CISO/Service owners.",
      ],
      artifact: {
        id: "cio-dashboard-template",
        title: "CIO dashboard tiles (starter)",
        description: "Keep it tight — only what drives decisions.",
        content:
          `Tiles:\n1) Containment by top 10 intents (last 30d)\n2) Deflection value (conservative) + assumptions\n3) Quality: repeat contacts + wrong-answer reports\n4) Escalations by reason code\n5) Channel mix performance (portal/Teams/Slack/mobile)\n6) Improvement backlog (top 10 actions)\n7) Governance status (privacy, retention, audits)`,
      },
    }),
  ],
};

