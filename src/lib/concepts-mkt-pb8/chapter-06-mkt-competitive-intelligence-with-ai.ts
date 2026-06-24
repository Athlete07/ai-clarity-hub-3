import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktCompetitiveIntelligenceWithAi = buildChapter({
  slug: "mkt-competitive-intelligence-with-ai",
  number: 6,
  shortTitle: "Competitive Intelligence with AI",
  title: "Competitive Intelligence with AI — Market Monitoring, Share-of-Voice Analytics, and Strategic Response Playbooks",
  readingMinutes: 24,
  summary:
    "Competitive intelligence turns market signals — competitor messaging, pricing, product launches, review sentiment, share of voice, and win-loss patterns — into marketing decisions that protect positioning and accelerate differentiation. AI monitors thousands of sources, clusters narrative themes, and surfaces anomalies faster than manual research, but strategic value depends on marketer-owned architecture: defined competitor tiers, claim governance, integration with battle cards and campaigns, and feedback loops from sales outcomes. Teams that collect intel without action produce expensive newsletters; teams that wire intel to GTM motions win more competitive deals.",
  keyTakeaway:
    "Competitive intelligence is a GTM system, not a research hobby. The sequence that wins: tier competitors and signal sources → automate monitoring with human-governed publish → analyse share of voice and sentiment → translate intel into battle cards, campaigns, and positioning → measure win-rate impact → run the decision lens before scaling monitoring scope. AI accelerates collection; marketers own prioritisation, accuracy, and revenue linkage.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "6.1",
      title: "CI Strategy & Competitor Tiering",
      subtitle: "Tier 1–3 competitors, signal priorities, and stakeholder map — focus before feeds",
      take: "Competitive intelligence strategy starts with tiering: Tier 1 competitors appear in 30%+ of competitive deals or define category narrative; Tier 2 regional or feature-overlap threats; Tier 3 emerging or adjacent players on watchlist. Each tier gets monitoring depth, refresh SLA, and stakeholder consumers (product marketing, demand gen, sales enablement, executive). AI scales monitoring — marketers prevent feed sprawl that buries Tier 1 deltas.",
      why: "Monitoring every competitor equally produces noise. Tiering aligns CI spend and attention with revenue risk.",
      paragraphs: [
        [
          s("Derive tiers from CRM and win-loss, not executive opinion alone. "),
          x(
            "CRM competitor fields on opportunities, win-loss interview tags, and lost-deal reason codes rank competitors by frequency and revenue impact. AI clusters 'other' entries into emerging names. Quarterly tier review with sales leadership — tiers shift with product and market moves.",
            "Static competitor lists from three years ago miss the rival winning your mid-market deals today.",
          ),
          s(" Tier 1 max 3–5 competitors for most B2B companies — depth over breadth."),
        ],
        [
          s("Map intel consumers and output formats per tier. "),
          x(
            "Tier 1: battle cards, pricing trackers, launch war rooms, executive briefings. Tier 2: monthly digest, campaign counter-messaging. Tier 3: quarterly scan. AI routes signals to right workflow — product launch alert to PMM Slack, pricing change to enablement queue.",
            "One-size CI newsletter for all stakeholders — sales ignores, executives skim, PMM overwhelmed.",
          ),
          s(" Consumer map in CI charter — each output has owner and publish SLA."),
        ],
        [
          s("Legal and ethical boundaries documented upfront. "),
          x(
            "Permitted: public websites, reviews, job postings, press, analyst reports, customer-permitted win-loss. Prohibited: misrepresentation, confidential document solicitation, scraping behind login without ToS review. AI monitoring scope configured within policy — marketers train teams on red lines.",
            "Aggressive CI that crosses legal lines becomes liability — governance before automation scale.",
          ),
          s(" Annual legal review of monitoring sources and battle card claim standards."),
        ],
      ],
      examples: [
        {
          title: "CRM-driven tier reset",
          body: "CI team monitored 22 competitors equally. CRM analysis showed 68% of competitive losses involved 3 names — not on old Tier 1 list. Tier reset; monitoring depth shifted. Tier 1 battle card refresh SLA 5 days; win rate vs top rival improved 11 points in two quarters.",
        },
        {
          title: "Routing fix — launch alert",
          body: "Competitor product launch detected by AI; buried in weekly newsletter. Implemented tier-1 launch routing to war-room channel with PMM, enablement, demand gen. Counter-campaign live in 9 days vs 34 days prior launch. Sales reported 'ready narrative' in 81% of competitive opps in launch month.",
        },
        {
          title: "Legal boundary — review scraping",
          body: "Vendor proposed scraping competitor employee forums. Legal blocked; shifted to public G2 and earnings call transcripts. Ethical CI maintained; avoided ToS violation. Alternative sources covered 90% of intel needs.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch6-competitive-stack",
      type: "nested",
      title: "Competitive Intelligence Stack",
      caption:
        "Competitor tiering → automated signal monitoring → human validation → battle cards and positioning → campaign and content response → win/loss feedback → tier and source refinement.",
    }),
    buildSection({
      number: "6.2",
      title: "Automated Signal Monitoring",
      subtitle: "Web, social, reviews, jobs, and filings — AI collection with human triage",
      take: "Automated monitoring ingests competitor website changes, pricing pages, release notes, social posts, review themes, job postings (hiring signals), patent filings, and analyst mentions. AI diff engines flag material changes; NLP clusters themes across sources. Marketers configure alert thresholds — not every blog post warrants war room; pricing page restructure does.",
      why: "Manual monitoring cannot keep pace with digital GTM velocity. Automation without triage creates alert fatigue and missed critical moves.",
      paragraphs: [
        [
          s("Configure materiality thresholds per signal type. "),
          x(
            "Pricing change: immediate alert. Messaging shift on homepage: daily digest. Job posting spike in AI roles: weekly trend. AI scores change magnitude and novelty — marketers tune thresholds from false positive post-mortems.",
            "Alert everything means respond to nothing — triage rules are CI product design.",
          ),
          s(" Threshold playbook documented — adjust after competitive season or launch windows."),
        ],
        [
          s("Multi-source corroboration before escalation. "),
          x(
            "Single-source rumor does not trigger campaign. AI correlates: press mention + website update + review theme shift = high confidence. Marketers define corroboration rules for tier-1 escalation.",
            "Reacting to unverified social rumor damages credibility — corroborate before GTM response.",
          ),
          s(" Escalation log captures sources — audit trail for positioning decisions."),
        ],
        [
          s("Archive and version for trend analysis. "),
          x(
            "Store historical snapshots: pricing tiers over time, messaging evolution, feature lists. AI trend reports show competitor strategic direction — quarterly strategy input for product marketing.",
            "Point-in-time screenshots without archive lose narrative of competitor evolution.",
          ),
          s(" Retention policy aligned with legal — public data archives generally lower risk than internal docs."),
        ],
      ],
      examples: [
        {
          title: "Pricing page diff — immediate response",
          body: "AI flagged tier-1 competitor removing enterprise SLA from standard tier — corroborated by G2 complaint theme spike. Alert within 4 hours; battle card and email nurture updated same day. Win-loss next quarter: fewer 'SLA gap' losses cited.",
        },
        {
          title: "Threshold tuning — job postings",
          body: "Every competitor job post triggered alert — team ignored channel. Shifted to 50% hiring spike in target geo as threshold. Flagged competitor building APAC sales — informed regional campaign and field marketing 8 weeks before press.",
        },
        {
          title: "Archive trend — messaging pivot",
          body: "Quarterly AI review of 18 months homepage copy showed competitor pivot from SMB to enterprise. Informed ABM tier focus and executive positioning — category narrative preempted in analyst briefing.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Share of Voice & Share of Search",
      subtitle: "Brand visibility versus competitors — quantifying mindshare battles",
      take: "Share of voice (SOV) measures brand mention volume and sentiment across social, news, forums, and analyst coverage relative to competitors. Share of search compares organic and paid search visibility on category keywords. AI aggregates and normalises across noisy sources — marketers contextualise SOV with business outcomes: SOV without pipeline correlation is vanity.",
      why: "Competitive positioning debates need quantified visibility metrics. SOV and SOS link narrative battles to discoverability and demand.",
      paragraphs: [
        [
          s("Define SOV universe matching buyer reality. "),
          x(
            "Include channels buyers use: LinkedIn and industry forums for B2B; TikTok and Reddit for DTC. Exclude irrelevant geos or languages. AI weights by engagement quality where possible — not raw mention count alone.",
            "Global SOV when you compete in three countries dilutes actionable insight.",
          ),
          s(" SOV definition doc shared with PR and demand gen — same competitors, same channels."),
        ],
        [
          s("Pair SOV with sentiment and topic share. "),
          x(
            "Volume SOV 40% with negative sentiment on support themes is not winning. AI topic modelling: pricing, security, ease-of-use share by brand. Marketers prioritise topic gaps where competitor owns positive narrative.",
            "Headline SOV number hides losing the 'security' conversation in enterprise deals.",
          ),
          s(" Monthly SOV dashboard: volume, sentiment, top 5 topics — tier-1 competitors only."),
        ],
        [
          s("Share of search links to SEO and paid strategy. "),
          x(
            "Organic SOS on category terms; paid impression share on high-intent keywords. AI tracks competitor content publishing velocity on target clusters. Gap analysis feeds content and SEM investment.",
            "SOV rising while SOS falling means loud but not findable — fix discoverability.",
          ),
          s(" Joint SEO and CI review quarterly — competitor content map vs your cluster coverage."),
        ],
      ],
      examples: [
        {
          title: "Topic SOV gap — security",
          body: "Overall SOV within 5 points of tier-1 rival but security topic SOV 22% vs 61% theirs. Drove security content pillar and analyst outreach. Six months later security topic SOV 48%; enterprise pipeline creation up 26%.",
        },
        {
          title: "SOS alert — competitor content surge",
          body: "AI flagged competitor publishing 3x cluster articles on 'AI analytics' — SOS gap widened 15 points in 60 days. Accelerated own cluster production and paid search defence on category terms. SOS gap stabilised; organic leads from cluster up 34%.",
        },
        {
          title: "SOV without pipeline — recalibration",
          body: "PR celebrated SOV win after major launch. Pipeline flat — SOV was trade press, not buyer channels. Shifted measurement to LinkedIn + practitioner forums SOV correlated with MQL source. Better alignment with demand gen KPIs.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Review & Sentiment Intelligence",
      subtitle: "G2, Capterra, app stores, and social — voice-of-customer competitive insight",
      take: "Review intelligence extracts competitor strengths and weaknesses from verified buyer voice: feature praise, support complaints, implementation pain, pricing perception. AI sentiment and theme clustering scales across thousands of reviews — marketers validate themes with win-loss and feed product marketing, enablement, and campaign messaging. Response playbooks address false competitor claims ethically.",
      why: "Buyers trust peer reviews over vendor copy. Review themes predict objection patterns in sales cycles.",
      paragraphs: [
        [
          s("Track theme velocity, not just star ratings. "),
          x(
            "Competitor average rating stable but 'integration complexity' mentions up 40% in 90 days — early weakness signal. AI theme trending alerts PMM and enablement before star rating drops.",
            "Star rating lagging indicators — theme velocity is leading.",
          ),
          s(" Theme taxonomy aligned with battle card sections — direct feed to enablement."),
        ],
        [
          s("Mine your reviews for competitive proof. "),
          x(
            "Customers comparing you favourably in public reviews — with permission, atomise into proof points. AI identifies comparative quotes; legal reviews comparative claims before publish.",
            "Ignoring positive comparative reviews wastes authentic competitive ammunition.",
          ),
          s(" Review response SLA for factual inaccuracies — not argumentative engagement."),
        ],
        [
          s("Ethical review programme boundaries. "),
          x(
            "Encourage honest reviews from customers; never astroturf or incentivise false competitor ratings. AI detects anomalous review patterns on your brand too — reputation risk both directions.",
            "Short-term review gaming destroys long-term trust and platform standing.",
          ),
          s(" CI team coordinates with customer marketing on review asks — separate from intel monitoring."),
        ],
      ],
      examples: [
        {
          title: "Theme alert — implementation",
          body: "AI trend: tier-1 competitor 'implementation time' negative themes +55% in G2. Enablement added implementation speed proof to battle card; demand gen campaign 'go-live in weeks.' Win-loss: implementation objection cited 30% less in following quarter.",
        },
        {
          title: "Comparative quote — proof atomisation",
          body: "G2 review: 'Evaluated X and Y — chose us for SSO depth.' Legal-approved quote in email nurture and sales snippet. Competitive segment email CTR up 2.1x vs generic product email.",
        },
        {
          title: "False claim response",
          body: "Competitor review implied unsupported security certification. Factual response posted per playbook; escalated to platform. CI logged for battle card 'accuracy' section — sellers armed with correction talking points.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Product & Pricing Intelligence",
      subtitle: "Feature matrices, packaging changes, and TCO positioning — intel product marketing owns",
      take: "Product and pricing intelligence maintains living comparisons: feature parity matrices, packaging tiers, discount patterns in deals, and TCO narratives. AI scrapes public pricing and docs; product marketing validates technical accuracy; finance validates pricing comparisons. Changes trigger battle card, website comparison page, and RFP response updates.",
      why: "Stale comparison pages lose deals at evaluation stage. Pricing surprises in late-stage procurement erode trust in sales narrative.",
      paragraphs: [
        [
          s("Living feature matrix with owner and refresh SLA. "),
          x(
            "Rows: capabilities buyers evaluate; columns: you and tier-1 competitors. Status: parity, advantage, gap, roadmap. AI drafts from release notes; PMM validates. Public comparison pages lag internal matrix max 14 days.",
            "Annual feature matrix update is obsolete at quarterly release cadence in SaaS.",
          ),
          s(" Gap rows feed product roadmap input — CI connected to product strategy."),
        ],
        [
          s("Pricing intelligence separates list, street, and deal patterns. "),
          x(
            "Public list price scraping plus win-loss 'what they quoted' themes. AI does not see private deals — sales input required. Marketers build TCO counters, not price-matching race to bottom.",
            "List price comparison alone misleads when competitor discounting is aggressive in deals.",
          ),
          s(" Pricing intel section in battle card: 'when they say cheaper' with TCO framework."),
        ],
        [
          s("Launch intelligence war-room protocol. "),
          x(
            "Tier-1 launch: 48-hour cross-functional standup — intel summary, positioning gap, enablement gaps, campaign options. AI pre-reads launch materials and review reaction. Decision log: counter-launch, ignore, or accelerate roadmap messaging.",
            "Ad hoc launch response without protocol produces inconsistent seller and market narrative.",
          ),
          s(" Post-launch 30-day win-rate review — measure response effectiveness."),
        ],
      ],
      examples: [
        {
          title: "Matrix gap to roadmap",
          body: "CI matrix showed 3-quarter gap on audit log export — appearing in 40% of enterprise RFPs. Product prioritised; gap closed. RFP win rate on enterprise segment up 17 points post-release.",
        },
        {
          title: "TCO counter — pricing trap",
          body: "Competitor led with low per-seat price; win-loss showed hidden implementation fees. TCO calculator and battle card section 'true first-year cost.' Losses citing price dropped from 28% to 14% of competitive deals.",
        },
        {
          title: "Launch war room — AI feature",
          body: "Competitor launched 'AI assistant' — tier-1 protocol activated. Intel brief in 6 hours; differentiated positioning on verified capabilities; sellers certified in 10 days. Competitive win rate stable vs dip in prior competitor launch.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Win/Loss Integration",
      subtitle: "Closing the loop from deals to CI priorities — intel sales will trust",
      take: "Win-loss programmes supply ground truth: why you won, why you lost, which competitor narrative worked, which enablement was missing. AI synthesises interview transcripts by competitor and persona — tags auto-link to CI backlog and battle card refresh triggers. Marketers present win-rate trends by competitor in QBR, not intel article counts.",
      why: "CI disconnected from win-loss produces academically interesting research that does not move competitive win rates.",
      paragraphs: [
        [
          s("Interview within 30 days with competitor field mandatory. "),
          x(
            "CRM competitor picklist enforced at close. Win-loss vendor or internal team tags content, pricing, product gaps. AI clusters themes — 'lost on security narrative' spikes trigger CI and enablement sprint.",
            "Win-loss without competitor tagging cannot prioritise tier-1 intel investments.",
          ),
          s(" Win themes feed case study sourcing; loss themes feed battle cards — explicit handoff."),
        ],
        [
          s("Win rate by competitor as north star metric. "),
          x(
            "Track win rate vs each tier-1 competitor quarterly; segment by industry and deal size. AI dashboards flag statistically significant drops — investigation before pipeline impact compounds.",
            "Intel activity metrics without win rate conflate busy work with impact.",
          ),
          s(" Shared marketing-sales OKR on competitive win rate for top rival."),
        ],
        [
          s("Close the loop in enablement council. "),
          x(
            "Monthly: top 3 loss themes, CI actions taken, battle card updates shipped. Sales confirms usability. AI pre-reads win-loss + CI changelog for council agenda.",
            "CI updates without seller confirmation may miss how objections actually sound on calls.",
          ),
          s(" 'Intel to action' SLA: tier-1 loss theme in 3+ interviews → response within 15 business days."),
        ],
      ],
      examples: [
        {
          title: "Loss theme sprint",
          body: "Three consecutive losses vs same competitor cited 'unclear AI differentiation.' CI + PMM sprint: capability comparison page, battle card refresh, demo storyline. Next 8 competitive opps: 5 wins; theme absent in interviews.",
        },
        {
          title: "Win rate dashboard",
          body: "Competitive win rate vs Rival A dropped 12 points in Q1 — alerted before annual planning. Root cause: their analyst report momentum. Counter-analyst briefing and reference customer push. Win rate recovered Q3.",
        },
        {
          title: "Council validation",
          body: "CI updated battle card with technical counters — sellers said 'too long for calls.' Condensed to objection-handler format with SE input. Usage up 3x; correlated with improved win rate in technical evaluator persona.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Campaign & Positioning Response",
      subtitle: "Counter-messaging, conquest programmes, and defensive plays — intel drives demand",
      take: "CI informs campaign strategy: conquest keywords and audiences, comparison landing pages, defensive brand search, nurture tracks for competitor evaluators, and PR rapid response. AI drafts counter-messaging variants from intel briefs — marketers govern claim accuracy and brand tone. Response campaigns measured on competitive segment pipeline and win rate, not impressions alone.",
      why: "Intel that stays in Slack does not protect market share. Campaign integration is where CI meets revenue.",
      paragraphs: [
        [
          s("Conquest with precision, not carpet bombing. "),
          x(
            "Target accounts in CRM evaluating competitor via intent data, comparison page visits, or sales intel. AI audience building from firmographic and behavioural signals — marketers cap frequency and respect brand safety.",
            "Broad trash-talk campaigns damage brand — surgical conquest on evaluators converts.",
          ),
          s(" Conquest creative reviewed for factual comparative claims — legal sign-off on ads."),
        ],
        [
          s("Defensive search and comparison SEO. "),
          x(
            "Bid on competitor brand plus category terms where policy allows; own 'alternative' and comparison queries organically. AI monitors SOS on defensive keyword set — alert when competitor conquest intensifies.",
            "Ignoring defensive search surrenders evaluators mid-funnel to competitor comparison content.",
          ),
          s(" Comparison pages updated from CI matrix — date-stamped 'last verified' builds buyer trust."),
        ],
        [
          s("Measure competitive campaign incrementality. "),
          x(
            "Holdout or geo split on conquest programmes where ethical. Pipeline from competitive campaigns tagged in CRM. AI attributes influenced opps — marketers report cost per competitive opp created vs win rate lift.",
            "Conquest spend without CRM tagging cannot prove CI-driven campaign ROI.",
          ),
          s(" Quarterly competitive campaign retrospective — double down on proven plays, kill vanity SOV projects."),
        ],
      ],
      examples: [
        {
          title: "Evaluator nurture — CRM trigger",
          body: "CRM flag 'evaluating Competitor X' triggered 6-email comparison nurture with CI-sourced proof. Competitive segment opp creation up 22%; email influenced 34% of logged touches on won competitive opps.",
        },
        {
          title: "Defensive search — SOS recovery",
          body: "SOS on 'brand + alternative' dropped 28 points after competitor comparison SEO blitz. Defensive content sprint and SEM bid rules. SOS recovered in 10 weeks; branded pipeline leakage slowed.",
        },
        {
          title: "Conquest holdout",
          body: "LinkedIn conquest on competitor customer list: 50% holdout test. Treated group 1.8x pipeline rate at similar CAC. Scaled with factual comparison creative — win rate in conquest sourced opps 41%.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — CI Investment",
      subtitle: "When to tier competitors, automate monitoring, or launch counter-campaigns — revenue over volume",
      take: "Before expanding CI tools or monitoring scope, run four checks: (1) are competitors tiered from CRM and win-loss — focus before feeds? (2) do alerts have materiality thresholds and human validation — signal before noise? (3) is intel wired to battle cards, win-loss backlog, and campaigns — action before archives? (4) is competitive win rate tracked by rival — outcome before article counts? Invest in tiering and win-loss integration first. Scale AI monitoring when action SLAs and governance hold.",
      why: "AI makes monitoring cheap — tempting teams to watch everything while Tier 1 rivals win deals unchallenged. This lens prioritises investments that move competitive win rates.",
      paragraphs: [
        [
          s("Check one: tiering and consumer map. "),
          x(
            "No CRM-based tier list or 20 competitors monitored equally → tier reset before new data sources. Sales cannot name top 3 rivals → win-loss tagging fix before monitoring expansion.",
            "Breadth without tiering is expensive noise.",
          ),
          s(" Tier workshop gate precedes CI platform renewal or headcount."),
        ],
        [
          s("Check two: triage and governance. "),
          x(
            "Alert fatigue with <10% actionable alerts → threshold tuning before volume. Battle cards without source citations → governance before automated intel publish.",
            "Fast unverified intel damages positioning — validate before campaign.",
          ),
          s(" Legal review on comparative campaign claims mandatory for tier-1 responses."),
        ],
        [
          s("Checks three and four: action loops and metrics. "),
          x(
            "Intel backlog not linked to enablement council → process before scraping expansion. No win rate by competitor → measurement before conquest budget scale.",
            "Action and outcome metrics are prerequisites for CI scale.",
          ),
          s(" Run lens in quarterly competitive review with sales and product marketing."),
        ],
      ],
      examples: [
        {
          title: "Monitoring scope cut",
          body: "Vendor offered 500 global sources. Lens: tier-1 win rate declining, battle cards 90 days stale. Cut scope to 40 sources on tier-1; reallocated budget to win-loss interviews and battle card sprint. Win rate vs top rival +9 points in two quarters.",
        },
        {
          title: "Newsletter killed",
          body: "Weekly CI newsletter 40 pages, 6% open rate. Lens: no action SLA. Replaced with tier-1 alert routing and monthly 1-page executive brief. Seller satisfaction with CI rose from 38% to 72%.",
        },
        {
          title: "Conquest deferred",
          body: "Demand gen proposed broad competitor trash campaign. Lens: comparison page outdated, legal not reviewed. Fixed matrix and pages first; surgical conquest with holdout proof. Avoided brand damage and legal exposure.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "CI team monitors 25 competitors but win rate vs top rival is declining. What should marketing fix first?",
      options: [
        "Add 50 more monitoring sources with AI.",
        "Re-tier competitors from CRM/win-loss, deepen Tier 1 monitoring, and wire alerts to battle cards and campaigns.",
        "Publish a longer weekly newsletter.",
        "Stop all competitive messaging.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tiering, focus, and action loops precede monitoring volume. Re-read sections 6.1 and 6.6.",
      wrongFeedback:
        "Focus Tier 1 rivals and connect intel to enablement and campaigns. Re-read sections 6.1 and 6.6.",
    },
    {
      q: "SOV increased after PR launch but pipeline from target segment is flat. What failed?",
      options: [
        "Battle card refresh cadence.",
        "SOV measured on channels buyers do not use — misaligned SOV universe.",
        "Win-loss interview timing.",
        "Pricing matrix accuracy.",
      ],
      correct: 1,
      correctFeedback:
        "Right. SOV must match buyer channels and tie to pipeline. Re-read section 6.3.",
      wrongFeedback:
        "SOV without buyer-channel alignment is vanity. Re-read section 6.3.",
    },
    {
      kind: "order",
      q: "Order the competitive intelligence system from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Tier competitors from CRM and win-loss data",
        "Monitor signals with triage and validation",
        "Translate intel into battle cards and campaigns",
        "Measure win rate by rival and refine tiers",
      ],
      correctFeedback:
        "Right. Tier → monitor → act → measure. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Start with tiering. Win rate closes the loop. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct CI layer.",
      categories: ["Strategy & monitoring", "Market visibility", "GTM action", "Improvement & lens"],
      items: [
        { text: "Materiality thresholds for pricing alerts.", category: 0 },
        { text: "Topic-level share of voice analysis.", category: 1 },
        { text: "Win-loss themes auto-tag CI backlog.", category: 2 },
        { text: "Competitive win rate by tier-1 rival.", category: 3 },
        { text: "Legal-approved comparative ad claims.", category: 2 },
        { text: "Share of search gap on category terms.", category: 1 },
      ],
      correctFeedback:
        "Right. Strategy = tiering and monitoring. Visibility = SOV/SOS. GTM = campaigns and win-loss action. Improvement = lens and metrics. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Match each practice to strategy, visibility, GTM action, or improvement. Re-read sections 6.1–6.8.",
    },
    {
      q: "A competitor launch is detected but response is slow. What does the lens prioritise?",
      options: [
        "More social listening tools.",
        "Tier-1 launch war-room protocol with routing to PMM, enablement, and demand gen.",
        "Ignore until next quarterly newsletter.",
        "Automatic public attack ads without legal review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Protocol and routing beat raw monitoring volume. Re-read sections 6.5 and 6.8.",
      wrongFeedback:
        "Launch protocol and governed response precede tool expansion. Re-read sections 6.5 and 6.8.",
    },
    {
      q: "Review themes show competitor weakness in implementation but win rate unchanged. What comes first?",
      options: [
        "Archive themes in CI database only.",
        "Feed themes to battle cards, proof, and campaigns with win-rate tracking.",
        "Lower prices across all tiers.",
        "Stop monitoring reviews.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Intel must flow to GTM assets and measured outcomes. Re-read sections 6.4 and 6.7.",
      wrongFeedback:
        "Translate review themes into enablement and campaigns. Re-read sections 6.4 and 6.7.",
    },
  ],
});
