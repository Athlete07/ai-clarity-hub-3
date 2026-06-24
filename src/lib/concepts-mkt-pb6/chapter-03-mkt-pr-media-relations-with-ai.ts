import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktPrMediaRelationsWithAi = buildChapter({
  slug: "mkt-pr-media-relations-with-ai",
  number: 3,
  shortTitle: "PR & Media Relations with AI",
  title: "PR & Media Relations with AI",
  readingMinutes: 24,
  summary:
    "PR wins when it is relevant, timely, and personal — qualities that suffer when teams drown in manual monitoring and generic pitches. AI accelerates media intelligence, angle discovery, journalist research, pitch drafting, press release production, list management, and coverage analysis. Humans own relationships, news judgment, and the edit that makes a pitch land. This chapter maps the full AI-assisted PR workflow with governance for reputational sensitivity.",
  keyTakeaway:
    "AI replaces manual scanning and first-draft production in PR — not relationship capital or news judgment. Always-on intelligence from Meltwater and Cision, personalised pitches with human edits, and coverage tracking that informs strategy. Speed without personalisation and accuracy is spam.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Media Intelligence with AI",
      subtitle: "Monitoring news, tracking journalist activity, and identifying emerging narratives with AI — the always-on intelligence that replaces manual media scanning",
      take: "Media intelligence is always-on monitoring: news mentions, journalist bylines, competitor coverage, industry narrative shifts, and emerging themes. Meltwater, Cision, Brandwatch, and Muck Rack aggregate feeds; AI summarises daily briefs, flags relevance, and clusters stories by narrative. Manual morning scans become structured intelligence pushing to Slack or email — PR teams act on insight instead of searching for it.",
      why: "Stories break on social before newswires. Teams without intelligence infrastructure pitch yesterday's news and miss journalist windows when competitors own the narrative.",
      paragraphs: [
        [
          s("Configure intelligence feeds around brand, category, and journalist lists. "),
          x(
            "Boolean queries in Meltwater or Cision: company name variants, executive names, product categories, competitor set, regulatory keywords.",
            "Over-broad queries flood noise; refine weekly from relevance feedback — thumbs up/down trains alert quality.",
          ),
          s(" Separate feeds for brand monitoring, proactive opportunity, and crisis early warning."),
        ],
        [
          s("AI daily briefs synthesise volume into actionable items. "),
          x(
            "Prompt structure: top five relevant stories, journalist activity on beats, competitor mentions, emerging themes, recommended actions.",
            "Meltwater GenAI and Cision summaries accelerate briefs; humans verify facts before pitching angles.",
          ),
          s(" Brief lands by 8am in team's timezone — journalists start early."),
        ],
        [
          s("Connect intelligence to pitch and content calendars. "),
          x(
            "Trending narrative matching your data asset becomes same-day outreach opportunity.",
            "Intelligence without workflow integration dies in inbox — pipe highlights to Asana or Monday PR board.",
          ),
          s(" Archive intelligence weekly — pattern analysis informs quarterly PR strategy reviews."),
        ],
      ],
      examples: [
        {
          title: "Meltwater AI briefs — fintech PR",
          body: "A fintech PR team configured Meltwater with competitor and regulatory feeds plus AI morning summary to Slack. Team spotted open banking narrative spike 48 hours before rival's report launch. Pre-briefed data commentary published same day — earned twelve pickups versus typical three. Intelligence subscription ROI proven in one news cycle.",
        },
        {
          title: "Cision journalist tracking — B2B SaaS",
          body: "A SaaS comms lead used Cision to track journalist moves and beat shifts. AI flagged three target writers changing beats to AI governance — timely pivot on company's ethics framework story. Two exclusive briefings booked; one became profile piece. Relationship team credited intel for timing, not cold pitch volume.",
        },
        {
          title: "Brandwatch narrative cluster — consumer health",
          body: "A consumer health brand used Brandwatch to cluster social and news around ingredient safety conversation. Intelligence showed misinformation theme rising. Proactive myth-busting press kit and expert commentary reduced negative sentiment 18 points in two weeks per Meltwater sentiment track.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch3-pr-workflow",
      type: "flow",
      title: "AI-Assisted PR Workflow",
      caption:
        "Media intelligence → story angle → journalist research → personalised pitch → coverage tracking. Human judgment at angle selection and final pitch edit.",
    }),
    buildSection({
      number: "3.2",
      title: "Story Angle Development",
      subtitle: "Using AI to identify PR-worthy angles in product launches, company milestones, data assets, and industry developments",
      take: "Story angles connect what your organisation has — product news, data, customer outcomes, executive expertise — to what journalists cover today. AI mines internal assets and external news cycles for intersections: 'your Q3 usage data supports the remote work trend piece three outlets published this week.' Humans judge newsworthiness, competitive sensitivity, and spokesperson readiness. Angle development is where PR strategy meets newsroom reality.",
      why: "Weak angles waste journalist relationships. AI broadens option generation and timeliness; experienced PR pros eliminate angles that are self-serving, stale, or factually thin.",
      paragraphs: [
        [
          s("Inventory PR assets quarterly: data, customers, executives, milestones. "),
          x(
            "Maintain asset doc: embargoed launches, survey data, anonymised case metrics, expert credentials.",
            "AI cross-references asset inventory against Meltwater trend clusters for angle prompts.",
          ),
          s(" Legal and customer approval status tagged per asset — prevents pitching unapproved proof."),
        ],
        [
          s("Run angle workshops with AI-generated option lists. "),
          x(
            "Prompt: given assets X and trending narratives Y, propose ten angles with target outlets and risk flags.",
            "Score angles: timeliness, exclusivity potential, spokesperson strength, competitive reveal risk.",
          ),
          s(" Kill self-congratulatory angles — 'company celebrates anniversary' fails without news hook."),
        ],
        [
          s("Align angles with messaging hierarchy and brand narrative. "),
          x(
            "PR angles should reinforce positioning pillars, not invent parallel stories sales cannot support.",
            "Product marketing and PR share angle doc — conflicting stories confuse analysts and customers.",
          ),
          s(" Document killed angles and why — prevents relitigating in next launch panic."),
        ],
      ],
      examples: [
        {
          title: "Data-led angle — HR analytics",
          body: "An HR analytics firm had annual hiring trends dataset. AI matched dataset themes to journalists covering labour market pieces in Cision. Angled pitch on 'skills-based hiring reversal' tied to data cut. Exclusive to WSJ reporter first; embargoed wider release after. 34 pickups and CEO quote in three tier-one pieces.",
        },
        {
          title: "Kill save — vanity milestone",
          body: "AI suggested '10 million users' angle for app milestone. PR lead killed it — crowded category, no differentiation. Reworked to 'usage pattern shift in rural markets' from same data. Niche trade coverage drove enterprise partnership inbound — vanity number would have been ignored.",
        },
        {
          title: "Newsjacking discipline — cybersecurity",
          body: "After major breach news, AI proposed commentary angles from company's threat research. Team selected two with strong data; rejected three that looked like ambulance chasing. Measured tone in pitches. Four expert quotes placed; brand association 'thoughtful authority' rose in Brandwatch versus prior crisis newsjacking misfire.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "PR Pitch Writing with AI",
      subtitle: "Generating personalised pitch emails at speed — the structure, the personalisation approach, and the human edit that makes pitches land",
      take: "Effective pitches are short, personalised, and news-forward: subject line with hook, two paragraphs max, proof of why this reporter now, clear ask. AI drafts from journalist research and angle briefs; humans edit for relationship context, tone, and factual precision. Personalisation means referencing recent bylines — not mail-merge first names. Muck Rack and Cision journalist profiles feed personalisation inputs.",
      why: "Journalists delete generic pitches in seconds. AI volume without personalisation trains reporters to ignore you. Structure and speed help only when relevance is genuine.",
      paragraphs: [
        [
          s("Use a fixed pitch architecture AI fills per journalist. "),
          x(
            "Subject: news hook + outlet relevance. Para 1: story in one sentence. Para 2: proof and exclusivity offer. Para 3: ask (interview, embargoed brief, data).",
            "Ban attachments in first email — link to asset hub if needed.",
          ),
          s(" Cap AI pitch length at 150 words — editors reward brevity."),
        ],
        [
          s("Personalisation inputs are mandatory fields before AI draft generates. "),
          x(
            "Recent article reference, beat alignment sentence, why not competitor story, spokesperson credential matching beat.",
            "If personalisation fields empty, pitch does not send — governance rule.",
          ),
          s(" Senior PR reviews tier-one journalist pitches regardless of AI draft quality."),
        ],
        [
          s("Track pitch outcomes to improve prompts and angles. "),
          x(
            "Response rate by angle type, journalist tier, subject line pattern. AI analyses winning pitches for template updates.",
            "Low response rate after AI rollout signals personalisation failure, not tool failure.",
          ),
          s(" Respect no-pitch lists and journalist preferences — some ban AI-detected bulk outreach."),
        ],
      ],
      examples: [
        {
          title: "Personalised pitch workflow — climate tech",
          body: "Climate tech PR required Muck Rack article citation in every AI draft. Human edit added prior conference encounter for top five journalists. Response rate rose from 4% to 17% on same angle versus generic AI batch. Two exclusives secured.",
        },
        {
          title: "Brevity edit — enterprise software",
          body: "AI first drafts averaged 280 words. Editor enforced 120-word cap and single CTA. Journalist positive replies citing 'refreshingly short pitch' increased 2x. Lesson: AI defaults verbose; PR governance imposes discipline.",
        },
        {
          title: "Relationship layer — consumer retail",
          body: "AI drafted pitches for product launch; comms director personalised opener for twelve known journalists with relationship notes from CRM. Tier-one pickup rate 42% versus 8% on cold AI-only batch to same list. AI saved prep time; human relationship context closed deals.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Press Release Production with AI",
      subtitle: "The AI-assisted press release workflow — brief, draft, human edit, legal review — and the quality standard that earns editorial pickup",
      take: "Press releases follow inverted pyramid: headline, subhead, dateline, lead paragraph answering who/what/when/where/why, supporting quotes, boilerplate, media contact. AI drafts from structured briefs — facts, quotes, approved boilerplate, embargo terms. Humans edit for news value, quote authenticity, and AP style. Legal reviews claims, forward-looking statements, and regulated language. Distribution via Cision or Business Wire is separate from editorial merit.",
      why: "Wire releases without news value are ignored. AI accelerates production but cannot invent newsworthiness — brief quality determines pickup potential.",
      paragraphs: [
        [
          s("Brief press releases with fact blocks, not vague prompts. "),
          x(
            "Brief fields: news hook, key metrics, approved quotes with attribution, spokesperson title, boilerplate version, embargo, legal flags.",
            "AI hallucinates metrics and quotes without fact blocks — never draft without source doc.",
          ),
          s(" Quote approval workflow before AI includes executive words — prevents fabrication incidents."),
        ],
        [
          s("Edit for news style, not marketing adjectives. "),
          x(
            "Remove 'leading', 'innovative', 'excited to announce'. Lead with the news fact journalists can excerpt.",
            "AP style check via AI or Grammarly; human PR pro final pass.",
          ),
          s(" One release one news — combo releases dilute pickup."),
        ],
        [
          s("Measure pickup and message penetration, not wire send confirmation. "),
          x(
            "Cision or Meltwater track republication, message pull-through, sentiment.",
            "A/B headline tests on owned channels before wire can inform AI headline variants.",
          ),
          s(" Archive releases in DAM with performance tags for future brief training."),
        ],
      ],
      examples: [
        {
          title: "Fact-block workflow — biotech",
          body: "Biotech PR mandated fact-block template before AI draft. Legal pre-approved metrics and quotes. MLR review time dropped 40% — fewer fabricated-sounding AI sentences. Pickup in trade press rose — cleaner leads easier to excerpt.",
        },
        {
          title: "Quote authenticity — public company",
          body: "AI invented enthusiastic CEO quote on earnings release draft. Caught in human edit; replaced with approved verbatim from earnings call. IR policy now prohibits AI-generated quotes entirely — only human-transcribed or executive-approved text.",
        },
        {
          title: "Pickup analysis — retail launch",
          body: "A retail launch used AI draft plus human news edit. Cision tracked 28 pickups; message analysis showed 71% included key product differentiation sentence. Prior launch without message discipline achieved 40% pull-through. Brief and edit quality measurable in coverage.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Journalist Research at Scale",
      subtitle: "Using AI to research journalist beats, recent coverage, and content preferences before pitching — the personalisation that improves response rates",
      take: "Journalist research covers beat, recent articles, tone preferences, social activity, pitch preferences, and relationship history. Muck Rack, Cision, and manual outlet archives supply data; AI synthesises one-page briefs per journalist before pitch writing. Research at scale enables small teams to personalise like large agencies — if research feeds pitches, not just folders.",
      why: "Misaligned pitches — enterprise security story to consumer lifestyle reporter — burn relationships. Research prevents category errors and enables genuine personalisation.",
      paragraphs: [
        [
          s("Automate journalist brief generation from database exports. "),
          x(
            "Export Muck Rack list with recent articles; AI summarises themes, preferred angles, and topics to avoid.",
            "Include pitch preference notes: email vs DM, days to avoid, embargo sensitivity.",
          ),
          s(" Refresh briefs monthly for active targets — beats shift."),
        ],
        [
          s("Relationship CRM layer on top of research. "),
          x(
            "Log last contact, outcome, personal notes — conference meetings, pet topics, past complaints.",
            "AI incorporates CRM notes into pitch personalisation with human review for tone.",
          ),
          s(" Never reference private off-record conversations in AI drafts — human only."),
        ],
        [
          s("Tier journalist lists by relationship warmth and outlet priority. "),
          x(
            "Tier 1: deep research and senior PR author. Tier 3: lighter research, narrower list.",
            "AI research effort scales with tier — do not research 500 journalists equally for one story.",
          ),
          s(" Scrub lists for accuracy — journalists change outlets frequently."),
        ],
      ],
      examples: [
        {
          title: "Muck Rack + AI briefs — edtech",
          body: "Edtech PR generated one-page AI briefs for 40 tier-one education reporters before launch. Briefs cited recent policy articles. Pitches referenced specific prior work. 22% response rate versus 6% historical average on product pitches.",
        },
        {
          title: "Beat mismatch catch — fintech",
          body: "AI research flagged that target writer recently moved from fintech to general tech policy. Pitch angle pivoted from product feature to regulatory implication. Reporter replied same day — wrong angle would have been ignored or annoyed.",
        },
        {
          title: "CRM integration — agency workflow",
          body: "PR agency linked Cision lists to HubSpot journalist objects. AI pitch drafts pulled relationship notes — 'met at SXSW 2024'. Client renewal attributed to measurable response rate lift on AI-research plus human-relationship workflow.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Media List Building and Management",
      subtitle: "Using AI to identify, evaluate, and maintain media contact lists — the intelligence layer over a static contact database",
      take: "Media lists decay: journalists move, outlets pivot, new creators matter. AI identifies relevant journalists by analysing article corpora, social authority, and beat alignment — scoring fit to story angle. Cision, Muck Rack, and Prowly maintain databases; AI layers scoring and deduplication. List hygiene — bounce tracking, unsubscribe respect, duplicate removal — protects sender reputation.",
      why: "Static Excel lists from 2019 waste pitches and damage relationships. Intelligent list building matches story to recipient; hygiene keeps outreach deliverable.",
      paragraphs: [
        [
          s("Build lists per story angle, not one master list. "),
          x(
            "Angle on cybersecurity regulation pulls regulatory reporters; product design angle pulls different set. AI scores journalists by article keyword overlap.",
            "Master database holds contacts; campaign lists are ephemeral slices.",
          ),
          s(" Review list before send — AI may include tangential matches requiring cull."),
        ],
        [
          s("Score outlets by priority tier and audience reach for ICP. "),
          x(
            "Trade press may outweigh national for B2B pipeline. AI reach estimates supplemented by Comscore or outlet media kits.",
            "Niche podcasters increasingly on PR lists — AI identifies rising shows in category.",
          ),
          s(" Document why each contact is on list — audit trail for team handoffs."),
        ],
        [
          s("Maintain hygiene: bounces, opt-outs, duplicates, inactive emails. "),
          x(
            "Cision and mail tools track deliverability. Quarterly list cleanse removes stale contacts.",
            "CAN-SPAM and GDPR apply to PR outreach — lawful basis documented.",
          ),
          s(" Flag journalists who requested no AI bulk outreach — respect preferences."),
        ],
      ],
      examples: [
        {
          title: "AI list scoring — health tech",
          body: "Health tech launch used AI to score 800 Cision contacts on beat fit. Top 120 selected for personalised outreach; 680 excluded with documented reasons. Response rate 19% on curated list versus 3% on prior spray-and-pray launches.",
        },
        {
          title: "Podcast list expansion — consumer app",
          body: "AI identified 45 relevant podcasts with growing download trends in parenting category. Not in legacy print-focused list. Podcast tour generated 2M impressions equivalent at fraction of paid cost — list intelligence uncovered channel.",
        },
        {
          title: "Hygiene save — agency database",
          body: "Agency ran AI dedupe on merged client media lists — 12,000 contacts, 2,400 duplicates removed, 800 hard bounces flagged. Deliverability improved; journalist complaints about duplicate pitches dropped. Client retention improved on measurable ops upgrade.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Coverage Tracking and Analysis",
      subtitle: "Using AI to monitor media coverage, measure share of voice, and analyse sentiment across earned media",
      take: "Coverage tracking collects clips across print, digital, broadcast, and social syndication — measuring volume, reach, sentiment, message pull-through, and share of voice versus competitors. Meltwater, Cision, and Brandwatch automate collection; AI summarises weekly performance and flags narrative drift. Earned media value (EMV) is directional, not gospel — use for trend comparison, not finance booking.",
      why: "PR without measurement cannot prove contribution or learn from campaigns. Analysis turns clips into strategy input — which angles worked, which messages landed, where competitors gained.",
      paragraphs: [
        [
          s("Define coverage KPIs aligned to PR objectives. "),
          x(
            "Tier-one placements, message pull-through %, share of voice, sentiment, referral traffic from coverage.",
            "EMV as secondary metric — methodology inconsistent across vendors.",
          ),
          s(" Baseline competitors in same tool — SOV requires consistent corpus."),
        ],
        [
          s("AI weekly coverage reports narrate performance, not just count clips. "),
          x(
            "Report sections: top placements, message analysis, competitor comparison, recommended follow-up.",
            "Sentiment AI validated on random sample — sarcasm and irony still trip models.",
          ),
          s(" Share reports with leadership in business language — pipeline influence where trackable."),
        ],
        [
          s("Close loop: winning coverage patterns inform next angle development. "),
          x(
            "If data-led angles outperform executive profile pieces, adjust resource allocation.",
            "Tag coverage by campaign, angle type, and spokesperson for meta-analysis quarterly.",
          ),
          s(" Integrate coverage alerts with crisis monitoring — negative spike triggers escalation."),
        ],
      ],
      examples: [
        {
          title: "Message pull-through — enterprise launch",
          body: "Enterprise launch tracked message pull-through via Cision. AI analysis showed 'integration speed' message appeared in 68% of articles versus 31% for secondary message. Next campaign led exclusively with integration proof — pull-through rose to 79%.",
        },
        {
          title: "SOV competitive — two-player market",
          body: "Duopoly market used Meltwater SOV dashboard. AI weekly summary showed competitor gained SOV during their conference week. Counter-programming with customer data story recovered SOV within ten days. Intelligence cadence matched news cycle speed.",
        },
        {
          title: "Referral traffic proof — DTC brand",
          body: "DTC brand linked GA4 referral traffic to coverage spikes. AI report correlated three tier-two placements with 40% referral bump — not vanity EMV. CFO approved PR budget increase on traffic-attributed model.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Marketer Decision Lens: AI in PR Governance",
      subtitle: "The communications tasks where AI creates genuine leverage and the ones where speed creates reputational risk",
      take: "AI creates leverage on monitoring, research synthesis, first drafts, list scoring, and coverage analysis. Speed creates risk on quotes, crisis pitches, sensitive leaks, regulatory stories, and relationship-critical tier-one outreach without senior review. Governance tiers PR tasks: auto-assist intelligence, human-edit pitches, human-only crisis and legal. The lens matches AI speed to communications sensitivity.",
      why: "One AI-fabricated quote or mis-timed newsjack damages years of relationship capital. PR governance is lighter than pharma MLR but heavier than social templating — calibrate to reputational stakes.",
      paragraphs: [
        [
          s("Classify PR workflows by sensitivity and relationship value. "),
          x(
            "Low: monitoring briefs, list hygiene, coverage reports. Medium: pitches, releases with fact blocks. High: crisis, M&A, executive exits, legal matters.",
            "High tier requires named approver; AI assists research only, not outbound copy without sign-off.",
          ),
          s(" Publish PR AI policy — journalists increasingly ask if pitch was AI-written."),
        ],
        [
          s("Prohibit AI-generated quotes and unverified facts in all tiers. "),
          x(
            "Fabricated quotes are career-ending incidents. Policy: quotes from approved transcripts or direct executive approval only.",
            "Fact blocks sourced with links — AI cannot invent metrics.",
          ),
          s(" Audit random sample of outbound pitches monthly for policy adherence."),
        ],
        [
          s("Measure PR AI by outcomes, not email volume. "),
          x(
            "KPIs: response rate, tier-one placements, message pull-through — not pitches sent per day.",
            "Volume KPIs incentivise spam that AI enables dangerously fast.",
          ),
          s(" Train junior staff on research-plus-edit workflow — not prompt-and-blast."),
        ],
      ],
      examples: [
        {
          title: "Quote policy — financial services",
          body: "Financial services firm banned AI-generated executive quotes after near-miss on earnings release. AI now drafts body copy only; quotes inserted from approved document. Regulator inquiry risk avoided; review time still 30% faster than fully manual.",
        },
        {
          title: "Crisis tier gate — retailer",
          body: "Retailer data breach: AI monitored sentiment and drafted internal FAQ; all external statements human-authored with legal. AI speed on internal comms; human authority on external. Brand recovery NPS returned to baseline 90 days — no AI misstatement extended crisis.",
        },
        {
          title: "Volume KPI rollback — B2B agency",
          body: "Agency incentivised pitches sent; AI enabled 5x volume. Journalist blocklist complaints rose. KPIs shifted to response rate and placements. Pitch volume dropped 60%; client results improved. Governance aligned incentives with relationship reality.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "AI-generated pitch without journalist personalisation. Most likely outcome?",
      options: [
        "Higher response due to perfect grammar.",
        "Ignored or blocked — journalists detect generic outreach.",
        "Guaranteed tier-one coverage.",
        "Legal violation automatically.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI speed without personalisation is spam. Re-read sections 3.3 and 3.5.",
      wrongFeedback:
        "Personalisation and relevance matter more than draft speed. Re-read sections 3.3 and 3.5.",
    },
    {
      kind: "order",
      q: "Order the PR campaign workflow from intelligence to learning.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Monitor news and journalist activity",
        "Develop story angle from assets and trends",
        "Research and build scored media list",
        "Draft and human-edit personalised pitches",
        "Distribute release and track coverage",
        "Analyse message pull-through and refine strategy",
      ],
      correctFeedback:
        "Right. Intelligence → angle → list → pitch → coverage → analysis. Re-read section 3.1 diagram flow.",
      wrongFeedback:
        "Pitch before angle and research wastes relationships. Re-read section 3.1.",
    },
    {
      kind: "categorize",
      q: "Sort PR tasks into AI-leverage vs human-only governance.",
      categories: ["AI leverage appropriate", "Human-only or senior approval"],
      items: [
        { text: "Daily Meltwater narrative brief.", category: 0 },
        { text: "Crisis statement to national media.", category: 1 },
        { text: "Journalist beat research synthesis.", category: 0 },
        { text: "Executive quote in earnings release.", category: 1 },
        { text: "Coverage sentiment weekly report.", category: 0 },
        { text: "M&A leak response pitch.", category: 1 },
      ],
      correctFeedback:
        "Right. Research and monitoring leverage AI; crisis and quotes need human authority. Re-read section 3.8.",
      wrongFeedback:
        "High-sensitivity comms and quotes stay human-controlled. Re-read section 3.8.",
    },
    {
      q: "Best practice for AI press release quotes?",
      options: [
        "Let AI write enthusiastic CEO quotes for speed.",
        "Use only approved verbatim quotes from executives or transcripts.",
        "Skip quotes entirely in all releases.",
        "Rotate random AI personas as spokespeople.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Never fabricate quotes — approved text only. Re-read sections 3.4 and 3.8.",
      wrongFeedback:
        "AI-generated quotes create legal and reputational risk. Re-read sections 3.4 and 3.8.",
    },
    {
      q: "Low pitch response rate after AI rollout. First diagnostic?",
      options: [
        "Send more pitches faster.",
        "Audit personalisation inputs and journalist-angle fit.",
        "Switch to larger attachment files.",
        "Remove human editing to increase volume.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Response rate problems usually mean relevance failure, not tool failure. Re-read section 3.3.",
      wrongFeedback:
        "More volume without personalisation worsens reputation. Check fit and edit quality. Re-read section 3.3.",
    },
    {
      kind: "categorize",
      q: "Match PR metric to primary purpose.",
      categories: ["Quality of execution", "Market position"],
      items: [
        { text: "Message pull-through in articles.", category: 0 },
        { text: "Share of voice vs competitors.", category: 1 },
        { text: "Tier-one placement count.", category: 0 },
        { text: "Competitive sentiment trend.", category: 1 },
        { text: "Journalist response rate.", category: 0 },
        { text: "Narrative ownership in category coverage.", category: 1 },
      ],
      correctFeedback:
        "Right. Pull-through and response rate measure execution; SOV and narrative measure position. Re-read section 3.7.",
      wrongFeedback:
        "Separate campaign execution metrics from competitive standing metrics. Re-read section 3.7.",
    },
  ],
});
