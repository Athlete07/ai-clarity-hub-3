import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktCrisisCommunicationsWithAi = buildChapter({
  slug: "mkt-crisis-communications-with-ai",
  number: 4,
  shortTitle: "Crisis Communications with AI",
  title: "Crisis Communications with AI",
  readingMinutes: 24,
  summary:
    "Crises compress decision time while amplifying every mistake across social, media, and employee channels. AI accelerates signal detection, holding statement preparation, stakeholder mapping, draft response scale, and post-crisis analysis — but human authority must approve every external word. This chapter maps crisis monitoring, preparation, stakeholder comms, social response, media inquiry management, internal alignment, post-crisis review, and governance that keeps speed from becoming liability.",
  keyTakeaway:
    "AI buys time in crisis — it does not replace judgment. Monitor with Brandwatch and Sprout; prepare holds and FAQs in advance; map stakeholders; draft at scale with human approval on every external message. Crisis governance names who decides, what AI may draft, and what requires legal and executive sign-off.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "Crisis Signal Monitoring",
      subtitle: "Using AI to detect early warning signals of emerging brand crises — social sentiment shifts, media mentions, and customer complaint escalations",
      take: "Crisis signal monitoring detects anomalies before mainstream coverage: sentiment velocity, mention volume spikes, complaint theme clustering, executive social attacks, and employee Glassdoor surges. Brandwatch, Meltwater, Sprout Social listening, and support ticket NLP feed alert systems. AI distinguishes noise from signal — a viral meme versus a product safety pattern — with threshold rules and human escalation.",
      why: "The first six hours shape narrative permanence. Early detection enables prepared response instead of reactive scrambling while hashtags trend.",
      paragraphs: [
        [
          s("Configure crisis-tier alerts separate from brand monitoring. "),
          x(
            "Thresholds: mention volume 3x hourly baseline, sentiment drop >15 points, keyword clusters (injury, lawsuit, boycott, data breach).",
            "Sprout and Brandwatch support anomaly detection; tune false positive rate with comms and support leads.",
          ),
          s(" 24/7 on-call rotation for alert recipients — automation without humans fails weekends."),
        ],
        [
          s("Integrate social listening with support and product signals. "),
          x(
            "Zendesk ticket surge on same theme as Twitter spike confirms product crisis, not isolated troll.",
            "AI correlates cross-channel signals in daily crisis readiness dashboard.",
          ),
          s(" Product and legal on alert distribution — comms alone cannot validate severity."),
        ],
        [
          s("Run monthly false-positive reviews to refine queries. "),
          x(
            "Crisis queries that cry wolf get ignored when real events hit — boy-who-cried-wolf kills programmes.",
            "Document alert history — what triggered, what action taken, outcome.",
          ),
          s(" Simulate crisis drills quarterly using historical signal replays."),
        ],
      ],
      examples: [
        {
          title: "Brandwatch anomaly — food safety scare",
          body: "A food brand's Brandwatch alert fired on 'foreign object' cluster 4 hours before major press pickup. Cross-check with support tickets confirmed multiple reports. Crisis team activated; statement ready when journalist inquiry arrived. Pickup included company's proactive recall narrative — sentiment recovered 40% faster than prior incident without early monitoring.",
        },
        {
          title: "Sprout + Zendesk correlation — SaaS outage",
          body: "SaaS outage showed Twitter spike plus support ticket flood. AI dashboard linked signals; comms pushed status page update and holding tweet within 22 minutes. Prior outage without integrated monitoring took 90 minutes — customer churn spike was 3x worse on slow response incident.",
        },
        {
          title: "False positive tuning — retail boycott hashtag",
          body: "Retailer's crisis alert triggered on boycott hashtag that was 80% bot amplification per Meltwater bot detection. Team held statement; organic volume never crossed threshold. Tuning added bot-filter rule — avoided overreaction that would have amplified non-story.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch4-crisis-response",
      type: "flow",
      title: "Crisis Response Flow",
      caption:
        "Signal detection → prepare holds and stakeholder messages → AI-assisted drafts → human approval → post-crisis playbook update.",
    }),
    buildSection({
      number: "4.2",
      title: "Crisis Response Preparation",
      subtitle: "Using AI to prepare holding statements, stakeholder messaging, and FAQ documents before a crisis fully develops — the preparation that buys response time",
      take: "Crisis preparation means pre-approved templates, scenario playbooks, and draft holds for likely events — outage, executive misconduct, product recall, data breach, layoffs. AI generates scenario variants from risk register: fill-in-the-blank holds, FAQ banks, and channel-specific drafts awaiting facts. Preparation cuts response from hours to minutes when crisis hits — humans insert verified facts and approve.",
      why: "Teams drafting from zero during a crisis produce inconsistent messages across channels and leak uncertainty. Prepared holds express control while facts are confirmed.",
      paragraphs: [
        [
          s("Maintain a crisis playbook with scenario modules. "),
          x(
            "Modules: triggers, first-hour checklist, spokesperson, holding statement template, FAQ skeleton, escalation tree.",
            "AI drafts module variants annually from risk register workshop output.",
          ),
          s(" Legal pre-reviews template language — not crisis-specific facts."),
        ],
        [
          s("Holding statements acknowledge awareness without over-committing. "),
          x(
            "Formula: we are aware, investigating, take seriously, will update by [time], media contact.",
            "AI generates tone variants — empathetic, factual, regulatory — for human selection.",
          ),
          s(" Pre-write social, email, and intranet versions for consistent core message."),
        ],
        [
          s("Refresh playbook after near-misses and industry peer crises. "),
          x(
            "Competitor crisis is free drill — tabletop: what if this happened to us?",
            "AI summarises peer crisis timeline and message choices for lessons learned.",
          ),
          s(" Store playbook offline-accessible — crisis may take down internal systems."),
        ],
      ],
      examples: [
        {
          title: "Data breach module — fintech",
          body: "Fintech updated data breach module after industry peer incident. AI drafted FAQ on credit monitoring, regulatory notification timelines, and customer next steps. When minor breach occurred six months later, first customer email sent in 47 minutes with legal-approved template. Regulatory feedback praised response speed.",
        },
        {
          title: "Layoff holds — tech company",
          body: "Tech firm pre-drafted layoff holds with HR and legal. AI variants for internal vs external tone. Actual reduction event: consistent messaging across all-hands, intranet, and press inquiry. Glassdoor sentiment dip half prior layoff cycle per Brandwatch.",
        },
        {
          title: "Tabletop drill — airline disruption",
          body: "Airline ran quarterly crisis tabletop using AI-simulated social firestorm from historical weather cancellation data. Comms team practised hold release and FAQ updates. Real weather crisis: response time 35% faster than pre-drill baseline; fewer contradictory employee social posts.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Stakeholder Communication Mapping",
      subtitle: "Identifying every stakeholder who needs to receive communications in a crisis — customers, employees, investors, media, regulators — and the different messages each requires",
      take: "Stakeholder mapping lists audiences, message priorities, channels, timing sequence, and approvers for each crisis type. Customers need facts and remediation; employees need honesty and job security clarity; investors need materiality; regulators need compliance language; media need quotable updates. AI drafts audience-specific variants from core fact sheet — humans ensure no audience hears wrong message first.",
      why: "Employees learning from Twitter before internal email destroys trust. Investors surprised by customer-facing apology without context hit stock. Sequence and tailoring matter as much as words.",
      paragraphs: [
        [
          s("Build stakeholder matrix per crisis scenario. "),
          x(
            "Rows: stakeholders. Columns: message emphasis, channel, timing tier (hour 1, 4, 24), approver.",
            "AI populates draft message emphasis from scenario type — data breach emphasises remediation for customers, legal precision for regulators.",
          ),
          s(" Employees almost always tier-one internal — before or simultaneous with external."),
        ],
        [
          s("Core fact sheet is single source of truth for all variants. "),
          x(
            "Approved facts only: what happened, who affected, what doing, what next update time.",
            "AI drafts variants from fact sheet; any new fact updates sheet before any channel publishes.",
          ),
          s(" Version fact sheet with timestamp — prevents teams using stale info."),
        ],
        [
          s("Regulator and legal audiences need pre-cleared language banks. "),
          x(
            "Securities, HIPAA, GDPR notification language in playbook appendix.",
            "AI does not invent regulatory commitments — inserts from legal library only.",
          ),
          s(" Map investor relations workflow — materiality threshold triggers separate process."),
        ],
      ],
      examples: [
        {
          title: "Sequence discipline — product recall",
          body: "Consumer product recall: internal ops alert minute 0, customer email minute 45, press minute 60, investor FAQ hour 4. AI drafted four variants from fact sheet. Employee leak to press avoided — internal had full context first. Cision coverage noted 'coordinated response'.",
        },
        {
          title: "Regulator variant — healthcare",
          body: "Healthcare data incident used legal language bank for regulator notification; customer letter empathetic plain English. AI separated registers from same facts. No regulatory language appeared in customer email — prior incident mistake avoided via matrix governance.",
        },
        {
          title: "Investor materiality — public company",
          body: "Public company crisis matrix flagged materiality review before external statement. AI draft customer message held until IR approved 8-K timing. Stock volatility lower than peer crisis where customer tweet preceded SEC filing.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Social Media Response Management",
      subtitle: "Using AI to draft responses at scale during a social media crisis — with the human approval layer that ensures every response is appropriate",
      take: "Social crises generate reply volume exceeding team capacity. AI drafts responses from approved fact sheet and tone guidelines — empathetic, factual, non-defensive, no legal admissions. Sprout Smart Inbox, Khoros, and Brandwatch publish workflows queue AI drafts for human approval before post. Never auto-publish crisis replies without human review — one wrong reply becomes the story.",
      why: "Silence reads as guilt; wrong replies read as malice or incompetence. AI scale with human gate balances responsiveness and accuracy.",
      paragraphs: [
        [
          s("Pre-approve crisis social tone rules and response templates. "),
          x(
            "Rules: acknowledge concern, point to status page or statement, no debate, no speculating, escalate threats and media requests.",
            "AI drafts within rules; humans approve batches in queue.",
          ),
          s(" Pause scheduled promotional posts immediately — continuation offends during crisis."),
        ],
        [
          s("Tier response approach by comment severity. "),
          x(
            "Tier 1: general concern — template variant. Tier 2: specific allegation — custom review. Tier 3: legal threat, violence, influencer pile-on — escalate, no AI auto-draft.",
            "AI tags incoming comments by tier for routing.",
          ),
          s(" Document decision to not reply on some threads — reply can amplify trolls."),
        ],
        [
          s("Monitor reply performance and narrative shift. "),
          x(
            "Brandwatch sentiment on owned replies — are responses helping?",
            "Adjust tone if drafts feel corporate cold — empathy within facts.",
          ),
          s(" Capture screenshots of handled threads for post-crisis review."),
        ],
      ],
      examples: [
        {
          title: "Sprout approval queue — airline delay",
          body: "Mass cancellation event: 12,000 mentions in 6 hours. AI drafted Sprout queue responses; three comms staff approved 400/hour peak. No off-brand replies published. Sentiment trough shallower than prior event with manual-only replies — speed with governance worked.",
        },
        {
          title: "Escalation save — false allegation",
          body: "AI draft nearly responded to false criminal allegation with generic empathy template — human escalated to legal, no public reply. Influencer later retracted. Auto-publish would have created news cycle.",
        },
        {
          title: "Promo pause — retail backlash",
          body: "Retail controversy: team paused 14 scheduled Sprout posts via governance checklist. Competitor continued promo during own mini-crisis and faced 'tone deaf' pile-on. Discipline as visible as response quality.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Media Inquiry Management",
      subtitle: "Using AI to monitor incoming media questions, draft spokesperson responses, and maintain consistency across a crisis communications operation",
      take: "Media inquiry management centralises journalist requests, tracks deadlines, drafts Q&A and statement updates, and ensures one spokesperson voice. Cision and Meltwater media inquiry tools plus shared inbox; AI drafts responses from fact sheet and prior approved answers. Consistency prevents 'spokesperson contradicted CEO' headlines that extend crises.",
      why: "Journalists pitch multiple executives and employees during crises. Centralised inquiry management with consistent messaging is defensive infrastructure.",
      paragraphs: [
        [
          s("Route all media inquiries through crisis comms war room. "),
          x(
            "Single email and phone tree; auto-forward rules; inquiry log with deadline timestamps.",
            "AI triages inquiries by outlet tier and topic urgency for prioritisation.",
          ),
          s(" Train executives to redirect inquiries — no impromptu parking-lot quotes."),
        ],
        [
          s("Maintain living Q&A document updated with each fact sheet version. "),
          x(
            "AI suggests Q&A additions from new journalist questions and social themes.",
            "Approved answers only in Q&A — spokespeople read from it, not improvise.",
          ),
          s(" Media training refresher on bridge phrases during crisis week."),
        ],
        [
          s("Track what was said to whom — prevents contradictory follow-ups. "),
          x(
            "Inquiry log: journalist, question, answer given, spokesperson, time.",
            "AI summary for leadership: top journalist concerns, gaps in messaging.",
          ),
          s(" Proactive update when facts change — call reporters who received outdated info."),
        ],
      ],
      examples: [
        {
          title: "Q&A centralisation — cybersecurity breach",
          body: "Breach crisis: 85 journalist inquiries in 72 hours. AI-expanded Q&A from 12 to 47 questions. Single spokesperson used approved doc. Zero contradiction headlines versus prior incident with decentralised exec comments.",
        },
        {
          title: "Deadline triage — Cision inbox",
          body: "Cision inquiry dashboard AI-prioritised tier-one deadlines. Team met 100% tier-one response within two hours. Tier-three blogger inquiries batched to daily — appropriate resource allocation during overload.",
        },
        {
          title: "Proactive correction — manufacturing recall",
          body: "Fact update on recall scope required correcting earlier statement. AI flagged seven journalists who received prior scope; comms proactively emailed correction before follow-up stories. Narrative 'company hid expansion' avoided.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Internal Communications During a Crisis",
      subtitle: "Using AI to draft employee communications that are honest, reassuring, and aligned with external messaging",
      take: "Internal crisis comms tell employees truth first, explain what company is doing, give role-specific guidance (support scripts, social media policy), and align with external message. AI drafts from fact sheet in internal register — more direct than press language. HR and legal review; CEO or people leader often delivers. Misaligned internal-external messages leak via Glassdoor and blind.",
      why: "Employees are media and social publishers. Informed staff reduce rumour velocity; uninformed staff become secondary crisis.",
      paragraphs: [
        [
          s("Internal message precedes or matches external — never lags significantly. "),
          x(
            "All-hands email, Slack announcement, manager talking points within same hour as public statement when possible.",
            "AI generates manager FAQ for team questions frontline will face.",
          ),
          s(" Remote and frontline workers need channel-appropriate delivery — not email-only."),
        ],
        [
          s("Social media policy reminder during crisis. "),
          x(
            "Employees must not speak for company; direct media to comms; personal opinion disclaimer if posting.",
            "AI draft internal policy reinforcement — short, non-punitive tone.",
          ),
          s(" Provide official shareable statement for employees who want to signal solidarity."),
        ],
        [
          s("Support and sales enablement with customer-facing scripts. "),
          x(
            "AI drafts talk tracks from FAQ for support macros and sales objection handling.",
            "Customer-facing teams without scripts improvise dangerously under pressure.",
          ),
          s(" Pulse survey 48 hours post-crisis — employee trust and clarity metrics."),
        ],
      ],
      examples: [
        {
          title: "Slack-first internal — tech layoffs",
          body: "Layoffs announced Slack to affected and remaining employees 30 minutes before press. AI-drafted manager scripts with legal-approved talking points. Glassdoor 'leadership transparency' themes less negative than prior cycle per Brandwatch.",
        },
        {
          title: "Support macros — billing error crisis",
          body: "Billing error affected 40k customers. AI generated Zendesk macros from FAQ within hour of fact sheet. Support CSAT during crisis higher than normal — customers felt informed when agents used consistent accurate scripts.",
        },
        {
          title: "Employee leak prevention — M&A rumour",
          body: "M&A rumour crisis: internal hold memo clarified timing of announcement before external leak could spread. AI drafted internal Q&A on job security framework. Leak still occurred but message consistency limited talent flight.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Post-Crisis Analysis",
      subtitle: "Using AI to conduct a comprehensive review of how the crisis developed, how communications performed, and what to change in the playbook",
      take: "Post-crisis review within two weeks: timeline reconstruction, signal detection performance, message consistency audit, channel effectiveness, sentiment recovery curve, and playbook gaps. AI processes clips, social data, internal comms log, and inquiry records into structured report. Blameless debrief culture — goal is system improvement, not scapegoating.",
      why: "Crises repeat in category patterns. Organisations that debrief update playbooks; those that rush on repeat the same failures at higher cost.",
      paragraphs: [
        [
          s("Reconstruct timeline hour-by-hour from alert to resolution. "),
          x(
            "Meltwater and Brandwatch export plus internal decision log. AI aligns events: first signal, first hold, first media pickup, sentiment trough, recovery.",
            "Identify delay points — approval bottleneck, missing fact, tool failure.",
          ),
          s(" Compare timeline to playbook intended sequence — variance analysis."),
        ],
        [
          s("Audit message consistency across channels and spokespeople. "),
          x(
            "AI diff external statements, social replies, employee emails for factual conflicts.",
            "Inconsistency score becomes KPI for next drill.",
          ),
          s(" Survey stakeholders: customers, employees, journalists where relationship allows."),
        ],
        [
          s("Update playbook modules with lessons — assign owners and dates. "),
          x(
            "Each gap becomes action: new alert rule, new FAQ, new approver, new training.",
            "AI drafts updated module text for legal review — institutionalise learning.",
          ),
          s(" Present executive summary to board risk committee for material crises."),
        ],
      ],
      examples: [
        {
          title: "Timeline debrief — outage",
          body: "SaaS outage debrief showed 40-minute delay waiting for engineering fact confirmation — expected, but hold could have released earlier with 'investigating' language. Playbook updated with interim hold authority for comms lead. Next incident: first hold 8 minutes faster.",
        },
        {
          title: "Consistency audit — recall",
          body: "AI audit found three social replies used pre-update scope language. Root cause: agents used old macro. Macro versioning and forced refresh implemented. Consistency score 98% on next drill versus 71% real crisis.",
        },
        {
          title: "Board report — data incident",
          body: "Post-data-incident AI report to board covered detection time, notification compliance, sentiment recovery, and competitive comparison from Meltwater. Approved budget for upgraded Brandwatch crisis tier — business case from debrief data.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Marketer Decision Lens: AI in Crisis Governance",
      subtitle: "The pre-approved processes, escalation triggers, and human decision authority that must remain central during any communications crisis",
      take: "Crisis governance defines: who declares crisis level, who approves external messages, what AI may draft versus publish, escalation to legal and CEO, and war room activation checklist. AI assists monitoring and drafting everywhere; auto-publish nowhere on external crisis comms. Pre-approval beats real-time invention. Named human authority on record — not 'the AI system said'.",
      why: "Crises punish ambiguity. Teams without governance publish conflicting messages, admit liability accidentally, or freeze while debating who decides.",
      paragraphs: [
        [
          s("Publish crisis level matrix with activation criteria and approvers. "),
          x(
            "Level 1: minor social flare — comms lead. Level 2: national media — CCO + legal. Level 3: regulatory or safety — CEO.",
            "AI monitoring recommends level; human declares officially.",
          ),
          s(" Wallet cards for on-call — phone tree, not Confluence link only."),
        ],
        [
          s("Hard rules: no AI auto-publish external; no AI-generated quotes; no new facts in drafts. "),
          x(
            "Drafts from fact sheet only; legal review on admissions and forward-looking statements.",
            "Social replies human-approved in queue — batch approve under time pressure with spot-check audit.",
          ),
          s(" Annual crisis simulation tests governance, not just templates."),
        ],
        [
          s("Document AI use transparently for leadership and post-crisis review. "),
          x(
            "Log which messages AI drafted versus human-only — accountability and learning.",
            "If journalists ask, answer honestly: human-approved messages, AI assisted research and draft speed.",
          ),
          s(" Revisit governance when adding new AI tools — capabilities do not change approval rules."),
        ],
      ],
      examples: [
        {
          title: "Level matrix — retail chain",
          body: "Retail chain crisis matrix assigned store-level issues to regional PR; national safety to CCO. AI flagged store incident trending; regional lead over-declared national crisis — matrix review clarified thresholds. Reduced unnecessary war room activations 60%.",
        },
        {
          title: "Auto-publish ban — financial services",
          body: "Financial services firm explicitly banned AI auto-publish after vendor demo suggested it. Crisis week: 200+ AI-drafted social replies, 100% human-approved. Regulator examination noted controlled comms process favourably.",
        },
        {
          title: "Simulation exposure — healthcare",
          body: "Healthcare crisis drill revealed no offline playbook when EMR down. AI could not access cloud docs. Printed playbook modules now in binder; drill mandatory annually. Governance includes infrastructure failure mode.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "During active crisis, AI-drafted social reply queue. Correct governance?",
      options: [
        "Auto-publish for speed — speed matters most.",
        "Human approves every external reply before publish.",
        "Only reply to verified journalists, ignore customers.",
        "Let AI decide which comments need no response.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Crisis social requires human approval on all external replies. Re-read sections 4.4 and 4.8.",
      wrongFeedback:
        "One wrong auto-published reply becomes the story. Human approval is mandatory. Re-read sections 4.4 and 4.8.",
    },
    {
      kind: "order",
      q: "Order crisis communications sequence for stakeholder alignment.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Detect signal and activate war room",
        "Confirm facts and update core fact sheet",
        "Notify employees with internal message",
        "Release holding statement and customer comms",
        "Manage media inquiries from central Q&A",
        "Conduct post-crisis debrief and update playbook",
      ],
      correctFeedback:
        "Right. Detect → facts → internal → external → media → learn. Re-read sections 4.1 and 4.3.",
      wrongFeedback:
        "Employees and facts before broad external; debrief closes the loop. Re-read sections 4.1 and 4.3.",
    },
    {
      kind: "categorize",
      q: "Sort crisis tasks into AI-assist vs human authority required.",
      categories: ["AI assist appropriate", "Human authority required"],
      items: [
        { text: "Anomaly detection on mention volume.", category: 0 },
        { text: "Declare crisis level and activate war room.", category: 1 },
        { text: "Draft holding statement from template.", category: 0 },
        { text: "Approve external CEO statement.", category: 1 },
        { text: "Correlate social spike with support tickets.", category: 0 },
        { text: "Decide regulatory notification timing.", category: 1 },
      ],
      correctFeedback:
        "Right. AI monitors and drafts; humans declare, approve, and decide materiality. Re-read section 4.8.",
      wrongFeedback:
        "Authority and approval stay human even when AI drafts. Re-read section 4.8.",
    },
    {
      q: "Best purpose of pre-crisis holding statement templates?",
      options: [
        "Replace need for any human involvement during crisis.",
        "Buy response time with pre-legal-reviewed language awaiting verified facts.",
        "Publish immediately on any social mention spike.",
        "Eliminate need for employee communications.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Holds express awareness while facts are confirmed — pre-approved language saves hours. Re-read section 4.2.",
      wrongFeedback:
        "Holds support human-led crisis response; they do not eliminate it. Re-read section 4.2.",
    },
    {
      q: "Core fact sheet during evolving crisis. Critical rule?",
      options: [
        "Each channel may add independent facts for speed.",
        "All messages update from single approved fact sheet version only.",
        "AI may infer facts not yet confirmed to fill gaps.",
        "External message should always precede internal.",
      ],
      correct: 1,
      correctFeedback:
        "Right. One fact sheet prevents contradictory messages across stakeholders. Re-read section 4.3.",
      wrongFeedback:
        "Inconsistent facts across channels extend crises. Single source of truth. Re-read section 4.3.",
    },
    {
      kind: "categorize",
      q: "Match crisis stakeholder to primary message emphasis.",
      categories: ["Remediation & clarity", "Compliance & materiality"],
      items: [
        { text: "Affected customers needing next steps.", category: 0 },
        { text: "SEC-regulated investor disclosure.", category: 1 },
        { text: "Support agents needing talk tracks.", category: 0 },
        { text: "Data protection authority notification.", category: 1 },
        { text: "Employees needing role guidance.", category: 0 },
        { text: "Board risk committee briefing.", category: 1 },
      ],
      correctFeedback:
        "Right. Customers and employees need clarity; regulators and investors need compliance precision. Re-read sections 4.3 and 4.6.",
      wrongFeedback:
        "Match message emphasis to stakeholder needs — remediation vs compliance. Re-read sections 4.3 and 4.6.",
    },
  ],
});
