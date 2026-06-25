import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_TOPIC_NLU: GuideConcept = {
  number: 2,
  title: "Topic Design and NLU Training",
  subtitle:
    "Intent taxonomy, utterance collection, entities, clarification, fallback design, training/testing, and performance analytics",
  sections: [
    buildGuideSection({
      id: "topic-anatomy",
      number: "2.1",
      title: "Topic anatomy",
      subtitle:
        "Intent, utterances, conversation flow, and the resolution action",
      takeaway:
        "A topic is a mini-application: intent definition + training utterances + entity capture + stateful flow + resolution action (Flow/record create) + success confirmation.",
      why: "Teams write topics like scripts and forget outcomes. Topics must resolve, not just chat.",
      paragraphs: [
        [
          s("Topic components: trigger intent, user prompts, entity collection/validation, branching, action execution (catalog/incident), and completion check."),
        ],
        [
          s("Design rule: end every topic with a clear outcome: 'your request number is…' or 'I’m transferring you with context.'"),
        ],
        [
          s("Anti-pattern: topics that ask many questions then do nothing. Users abandon and call support."),
        ],
      ],
      workflowSteps: [
        "Pick one high-volume use case and define the outcome record.",
        "Design entity collection with validation.",
        "Add a success confirmation step and a fallback escalation step.",
      ],
      example: {
        title: "Password reset topic success criteria",
        body: "Topic ended only when reset completed (self-service) or incident created with transcript attached. No ambiguous 'done' messages.",
      },
    }),
    buildGuideSection({
      id: "intent-taxonomy",
      number: "2.2",
      title: "Intent taxonomy design",
      subtitle:
        "Structuring a topic hierarchy for a large service catalogue",
      takeaway:
        "Good taxonomy is stable and user-oriented: group by user goals, not by internal teams. Use 10–30 top-level intents and push specificity into entities and follow-up questions.",
      why: "Taxonomy determines NLU confusion and maintenance burden. Bad taxonomy creates endless retraining work.",
      paragraphs: [
        [
          s("Design top-level intents around user goals: 'reset password', 'request access', 'device issue' — not internal queue names."),
        ],
        [
          s("Avoid overly granular intents. Use entities (application, device) to specialise inside a topic."),
        ],
        [
          s("Keep taxonomy versioned and reviewed quarterly. Service catalogs evolve; taxonomy must evolve with governance."),
        ],
      ],
      workflowSteps: [
        "Cluster top 200 utterances into 15–25 goals.",
        "Define entity-based specialisation inside each goal.",
        "Create a taxonomy change process (add/merge/retire).",
      ],
      example: {
        title: "Access taxonomy simplified",
        body: "Instead of 40 app-specific access intents, one 'request access' intent captured app entity and routed to correct catalog item. NLU confusion decreased and containment increased.",
      },
    }),
    buildGuideSection({
      id: "utterance-collection",
      number: "2.3",
      title: "Utterance collection",
      subtitle:
        "Gathering real user language to train NLU",
      takeaway:
        "Real utterances come from search logs, chat transcripts, ticket descriptions, and call center notes. Synthetic utterances are a weak substitute.",
      why: "NLU models fail when trained on designer language instead of user language.",
      paragraphs: [
        [
          s("Sources: portal search queries, email subject lines, incident short descriptions, VA transcripts, and agent notes."),
        ],
        [
          s("Privacy: redact PII before using utterances for training datasets, especially in HR and healthcare domains."),
        ],
        [
          s("Balance: include regional language, acronyms, and device differences. Language drift is constant in enterprises."),
        ],
      ],
      workflowSteps: [
        "Collect 500 utterances for top intents (redacted).",
        "Label them into taxonomy; identify ambiguous clusters.",
        "Update synonyms and clarification rules before retraining.",
      ],
      example: {
        title: "Real utterances fixed confusion",
        body: "Users said “auth app” not “MFA”. Training on real language improved intent classification and reduced fallback rate.",
      },
    }),
    buildGuideSection({
      id: "entity-design",
      number: "2.4",
      title: "Entity design",
      subtitle:
        "Extracting structured data and driving flows",
      takeaway:
        "Entities turn free text into structured inputs (application, device, location). Good entity design reduces user friction and improves automation quality.",
      why: "Without entities, topics ask too many questions or execute the wrong action.",
      paragraphs: [
        [
          s("Define entities with controlled vocabularies: application names, device types, locations. Use synonyms to map user terms to canonical values."),
        ],
        [
          s("Validate entities before action. Wrong entity = wrong catalog item or wrong assignment group."),
        ],
        [
          s("Use entities to route to Flows and catalog items. Entities are the bridge between conversation and workflow."),
        ],
      ],
      workflowSteps: [
        "Pick 3 entities for your top topic; define canonical list and synonyms.",
        "Add validation prompts ('Did you mean…?').",
        "Log entity extraction failures for training improvements.",
      ],
      example: {
        title: "App entity drove correct access request",
        body: "User said “need Salesforce access”. Entity extractor mapped “Salesforce” to app id and launched the correct catalog request flow automatically.",
      },
    }),
    buildGuideSection({
      id: "clarification-design",
      number: "2.5",
      title: "Clarification design",
      subtitle:
        "Handling ambiguous input without frustrating users",
      takeaway:
        "Clarification is a UX discipline: ask the minimum question needed to disambiguate, offer quick replies, and remember prior answers so users don't repeat themselves.",
      why: "Over-clarifying kills containment. Under-clarifying causes wrong actions and escalations.",
      paragraphs: [
        [
          s("Use confidence bands: if intent confidence is low, ask a disambiguation question with 2–4 options."),
        ],
        [
          s("Keep prompts short. In chat channels, long questions feel like forms. Use quick replies and progressive disclosure."),
        ],
        [
          s("Provide escape hatch: 'talk to agent' and 'show me search results'. Users need control."),
        ],
      ],
      workflowSteps: [
        "Identify top 5 ambiguous utterances and design clarifiers.",
        "A/B test clarifier wording and option order.",
        "Measure: drop-off rate at clarification step.",
      ],
      example: {
        title: "Access clarifier reduced escalation",
        body: "VA asked: 'Is this about VPN, app access, or password?' Quick replies reduced misroutes and improved containment.",
      },
    }),
    buildGuideSection({
      id: "fallback-oos",
      number: "2.6",
      title: "Fallback and out-of-scope handling",
      subtitle:
        "What VA does when it cannot understand",
      takeaway:
        "Fallback is a designed path: show search results, ask a different question, create a ticket, or hand off — with context preserved.",
      why: "Fallback quality determines whether users trust VA or abandon it permanently.",
      paragraphs: [
        [
          s("Out-of-scope should be explicit: 'I can help with X and Y.' Then offer top actions and a human escalation option."),
        ],
        [
          s("Use AI Search as fallback: show top KB and catalog actions, not just apologies."),
        ],
        [
          s("Record truth: if fallback leads to ticket create, attach transcript and extracted entities so agents start informed."),
        ],
      ],
      workflowSteps: [
        "Design fallback ladder: clarify → search → create ticket → live agent.",
        "Instrument drop-off and ticket creation after fallback.",
        "Review top out-of-scope utterances weekly and decide add topic vs keep OOS.",
      ],
      example: {
        title: "Fallback ladder improved retention",
        body: "Users stopped abandoning because fallback offered search + one-click ticket creation with transcript. Agents saw context and resolved faster, improving overall experience.",
      },
    }),
    buildGuideSection({
      id: "nlu-training-testing",
      number: "2.7",
      title: "NLU training and testing",
      subtitle:
        "Training cycle, test set evaluation, iteration",
      takeaway:
        "NLU needs an ML discipline: labeled dataset, holdout test set, confusion review, retraining cadence, and regression suite — not ad hoc tweaks.",
      why: "Without test discipline, changes regress other intents and your containment drifts downward silently.",
      paragraphs: [
        [
          s("Maintain a stable test set of utterances per intent. Evaluate before and after every taxonomy or utterance update."),
        ],
        [
          s("Use confusion analysis: which intents are confused? Fix taxonomy and entities before adding more utterances."),
        ],
        [
          s("Retrain cadence: weekly during early rollout; monthly after stability. Track drift through fallback rate changes."),
        ],
      ],
      workflowSteps: [
        "Create training set and test set (never overlap).",
        "Train model; review confusion matrix for top confusions.",
        "Deploy to pilot cohort and monitor fallback/clarification rates.",
      ],
      example: {
        title: "Regression suite prevented drop",
        body: "Adding utterances improved one intent but hurt another. Test set caught it. Adjusting taxonomy fixed both. Without test discipline, production would have regressed.",
      },
    }),
    buildGuideSection({
      id: "topic-performance-analysis",
      number: "2.8",
      title: "Topic performance analysis",
      subtitle:
        "Dashboards: which topics work, which fail, and why",
      takeaway:
        "Performance analysis tracks containment, fallback reasons, drop-off steps, and handoff rates per topic — enabling targeted redesign and retraining.",
      why: "You can’t improve what you don’t measure. Topic-level telemetry is how VA becomes a product, not a project.",
      paragraphs: [
        [
          s("Metrics by topic: success rate, abandon rate, escalation rate, average turns, and common unrecognized utterances."),
        ],
        [
          s("Look for step-level failures: entity validation steps that cause drop-off, or clarification that frustrates users."),
        ],
        [
          s("Operational rhythm: weekly review top failing topics and ship fixes. Tie to knowledge flywheel and NLU training cycle."),
        ],
      ],
      workflowSteps: [
        "Build a topic scorecard (top 20 topics).",
        "Pick top 3 failure modes and assign owners.",
        "Ship improvements weekly and re-measure.",
      ],
      artifact: {
        id: "topic-scorecard-template",
        title: "Topic scorecard template",
        description: "Use weekly for continuous improvement.",
        content:
          `| Topic | Containment | Escalation | Drop-off step | Top unrec utterance | Owner |\n|------|------------|------------|---------------|----------------------|-------|\n| reset_password | | | | | |\n| request_access | | | | | |\n| vpn_help | | | | | |`,
      },
    }),
  ],
};

