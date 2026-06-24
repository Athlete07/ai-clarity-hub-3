import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktDemandGenerationStrategy = buildChapter({
  slug: "mkt-demand-generation-strategy",
  number: 1,
  shortTitle: "Demand Generation Strategy",
  title: "Demand Generation Strategy",
  readingMinutes: 24,
  summary:
    "Demand generation is the system that creates, captures, and converts market interest into pipeline — not a collection of campaigns. AI compresses ICP refinement, channel modelling, content production, and funnel analytics, but cannot replace the strategic choice of where to invest between creation and capture. This chapter maps demand creation versus capture economics, the full-funnel model, ICP definition from CRM and intent data, channel selection, content-led and community-led demand, event workflows, and the programme design decisions that must precede execution.",
  keyTakeaway:
    "Design demand generation as a programme — not a channel list. Separate creation from capture investments, define ICP from evidence not assumptions, match channels to buying motion, and wire measurement before scaling spend. AI accelerates research, content, and signal processing; marketers own channel mix, budget allocation, and the quality bar for demand that sales will accept.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "Demand Creation vs Demand Capture",
      subtitle: "The strategic distinction that determines where you invest — and how AI changes the economics of both",
      take: "Demand creation builds net-new interest in a problem and category — content, events, community, and brand programmes that educate buyers who were not yet in-market. Demand capture harvests existing intent — search, retargeting, review sites, and sales outreach on accounts already evaluating. Most teams over-index on capture because it shows faster ROI while starving the creation engine that fills the funnel six months later. AI lowers creation cost (content volume, research synthesis) and improves capture precision (intent scoring, bid optimisation) — but the budget split remains a strategic judgment.",
      why: "Misclassifying spend produces either empty pipelines (all capture, no creation) or unqualified volume (all creation, weak capture). Clarifying the distinction lets you set AI-assisted workflows for each motion and measure them on different timelines.",
      paragraphs: [
        [
          s("Audit every programme as creation, capture, or hybrid. "),
          x(
            "Creation: thought leadership, category education, community, top-of-funnel webinars. Capture: branded search, competitor conquest, 6sense or Demandbase intent campaigns, review-site sponsorship, sales-triggered outreach.",
            "Hybrid programmes — gated reports promoted on LinkedIn — need split attribution; HubSpot multi-touch models help but marketers must tag campaign intent at setup.",
          ),
          s(" Target 60–70% creation for new categories; flip toward capture when category awareness is established."),
        ],
        [
          s("AI changes creation economics more than capture economics. "),
          x(
            "Claude and Jasper accelerate long-form authority content; Descript and Opus clip webinars into dozens of assets. Capture still depends on auction dynamics and sales capacity — AI optimises bids and audiences but cannot invent intent.",
            "6sense Revenue AI and Demandbase One score in-market accounts for capture; ChatGPT does not replace intent data vendors.",
          ),
          s(" Reinvest creation savings into distribution and community — cheap content nobody sees is still waste."),
        ],
        [
          s("Set different success metrics and review cadences for each motion. "),
          x(
            "Creation: engaged accounts, content consumption depth, branded search lift, community growth. Capture: MQL-to-SQL rate, cost per opportunity, pipeline velocity.",
            "Weekly capture dashboards and quarterly creation reviews prevent panic budget shifts when capture CPL spikes during a slow creation quarter.",
          ),
          s(" Sales must agree which metrics define 'quality demand' before programmes scale."),
        ],
      ],
      examples: [
        {
          title: "Creation-heavy reset — data infrastructure startup",
          body: "A Series B data vendor spent 78% of budget on LinkedIn lead-gen forms and Google branded search. Pipeline flatlined as category education stalled. Audit reclassified spend: 45% to creation (podcast, technical blog, practitioner community). AI produced first-draft posts and webinar outlines; editors owned accuracy. Branded search volume rose 34% in two quarters; capture CPL fell 22% on warmer traffic.",
        },
        {
          title: "Capture precision — enterprise cybersecurity",
          body: "A cybersecurity firm layered 6sense intent stages onto Demandbase display and SDR sequences. Creation continued via analyst relations and CISO roundtables. Capture budget targeted only accounts in 'decision' stage with committee engagement. SQL volume held flat but average deal size rose 28% — sales stopped chasing early-stage curiosity.",
        },
        {
          title: "HubSpot attribution split — HR SaaS",
          body: "An HR platform used HubSpot custom properties to tag campaigns creation vs capture. Multi-touch attribution revealed capture looked efficient until creation credit was modelled over 180 days. Leadership approved creation budget protected from quarterly capture pressure. Marketing-sourced pipeline grew 19% year-over-year without increasing total spend.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "The Full-Funnel Demand Model",
      subtitle: "Awareness, consideration, intent, evaluation, and purchase — the stages and the AI-powered tactics that work at each",
      take: "Full-funnel demand maps five stages: awareness (problem recognition), consideration (solution exploration), intent (vendor shortlisting), evaluation (proof and negotiation), and purchase (conversion and expansion). Each stage needs different content, channels, and sales involvement. AI assists at every stage — topic ideation and SEO clusters at awareness, nurture personalisation at consideration, intent scoring at intent, battle-card updates at evaluation — but funnel design is architectural: gaps at consideration cannot be fixed with more awareness spend.",
      why: "Teams that optimise only bottom-funnel metrics discover too late that upper-funnel starvation caps growth. A shared funnel model aligns marketing, sales, and RevOps on stage definitions and handoff rules.",
      paragraphs: [
        [
          s("Define stage entry and exit criteria in CRM, not in slide decks. "),
          x(
            "Awareness: net-new site visit or content engage. Consideration: repeat engagement or form fill. Intent: 6sense/Demandbase stage or pricing page visit. Evaluation: SAL or demo held. Purchase: closed-won.",
            "Salesforce and HubSpot lifecycle stages must match marketing definitions — misaligned stages break attribution and AI scoring models.",
          ),
          s(" Document stage definitions in a single RevOps wiki — update when product or motion changes."),
        ],
        [
          s("Match tactics to stage, not to channel vanity metrics. "),
          x(
            "Awareness: category POV, social, podcasts, community. Consideration: comparison guides, nurture tracks, retargeting. Intent: intent data activation, ABM ads, SDR outreach. Evaluation: demos, ROI tools, customer references.",
            "AI drafts stage-appropriate copy variants; marketers approve proof and compliance before deployment.",
          ),
          s(" Run quarterly funnel diagnostics — where do accounts stall? Fix the stage, not the whole funnel."),
        ],
        [
          s("Measure stage conversion rates, not just volume at the bottom. "),
          x(
            "Awareness-to-consideration rate exposes content-market fit. Consideration-to-intent exposes nurture quality. Intent-to-evaluation exposes sales acceptance rules.",
            "HubSpot funnel reports and Salesforce campaign influence show leaks; AI summaries flag accounts stuck 90+ days in one stage.",
          ),
          s(" Set improvement targets per stage — a 2-point lift at consideration often beats 20% more top-of-funnel leads."),
        ],
      ],
      examples: [
        {
          title: "Funnel repair — B2B payments",
          body: "A payments company had strong awareness from industry reports but weak consideration conversion. AI analysed Gong calls and content paths — buyers wanted implementation timelines, not more trend pieces. New consideration hub with ROI calculator and implementation stories lifted intent-stage entries 41%. Full-funnel model made the leak visible in Salesforce dashboards.",
        },
        {
          title: "Intent layer — manufacturing software",
          body: "A manufacturing SaaS wired Demandbase intent topics to LinkedIn and display only at intent stage. Awareness ran via trade publications and YouTube explainers produced with AI-assisted scripts. Stage-gated spend cut wasted impressions 35% while pipeline influence rose — evaluation-stage content (case studies) refreshed monthly via AI first drafts.",
        },
        {
          title: "Evaluation enablement — Salesforce sync",
          body: "An analytics vendor linked marketing content consumption in HubSpot to Salesforce opportunity stage. Accounts in evaluation without battle-card views triggered automated sales alerts. Win rate in evaluation stage improved 15% — AI-generated objection handlers updated weekly from win-loss themes.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch1-full-funnel",
      type: "flow",
      title: "Full-Funnel Demand Model",
      caption:
        "Awareness → consideration → intent → evaluation → purchase. AI accelerates content and scoring at each stage; marketers own stage definitions and handoff rules.",
    }),
    buildSection({
      number: "1.3",
      title: "ICP Definition with AI",
      subtitle: "Developing precise Ideal Customer Profiles from CRM data, win/loss analysis, and market research — the sharper targeting that improves every downstream activity",
      take: "ICP definition identifies the accounts and buyers most likely to buy, expand, and advocate — firmographics, technographics, behavioural triggers, and disqualifiers. AI synthesises Salesforce win/loss exports, Gong call themes, 6sense fit scores, and third-party firmographic data into ICP hypotheses faster than manual analysis. Precision ICP improves ad targeting, ABM lists, content topics, and sales prioritisation. ICP is a living model — not a one-page persona poster.",
      why: "Broad targeting burns budget and erodes sales trust in marketing-sourced leads. AI-assisted ICP refinement turns CRM evidence into actionable targeting rules every quarter.",
      paragraphs: [
        [
          s("Start ICP from won deals, not from leadership intuition. "),
          x(
            "Export 24 months of closed-won: industry, employee band, tech stack, deal cycle, ACV, churn. Feed anonymised summaries to Claude with clustering instructions.",
            "Supplement with lost-deal patterns — segments that engage but never convert are negative ICP signals.",
          ),
          s(" Validate AI clusters with sales leaders and five customer interviews before activating in ads."),
        ],
        [
          s("Layer intent and fit scores onto firmographic ICP. "),
          x(
            "6sense and Demandbase add buying stage and engagement; ZoomInfo or Clearbit enrich firmographics. ICP becomes a matrix: fit × intent × engagement.",
            "HubSpot predictive lead scoring trains on your outcomes — requires clean CRM hygiene first.",
          ),
          s(" Document disqualifiers explicitly — segments sales refuses should be suppressed in automation."),
        ],
        [
          s("Operationalise ICP in every system that touches accounts. "),
          x(
            "LinkedIn Campaign Manager matched audiences, Demandbase ad groups, Salesforce account tiers, SDR book assignments, and content personalisation rules.",
            "ICP drift happens silently when product pivots — schedule quarterly ICP refresh with product and finance input.",
          ),
          s(" Measure ICP quality: win rate and sales cycle length by tier, not just lead volume."),
        ],
      ],
      examples: [
        {
          title: "Win-loss synthesis — DevOps platform",
          body: "A DevOps vendor exported 180 Gong win-loss summaries and Salesforce fields. AI identified sweet spot: 500–2,000 employees, Kubernetes in stack, prior incident-driven churn from legacy vendor. ICP tier A list uploaded to 6sense and LinkedIn. Tier A win rate 2.4x tier C; marketing spend reallocated within one planning cycle.",
        },
        {
          title: "Negative ICP save — martech vendor",
          body: "AI clustering surfaced high engagement from agencies reselling services — low conversion, high support cost. Negative ICP rule added to HubSpot and paid social exclusions. MQL volume dropped 12% but SQL rate rose 31%; sales NPS on lead quality improved measurably.",
        },
        {
          title: "Technographic layer — integration platform",
          body: "A integration iPaaS combined ZoomInfo technographics with product usage signals. ICP required Salesforce plus at least one ERP connector opportunity. Demandbase custom segments activated display and SDR plays. Pipeline from ICP-matched accounts grew 26% without increasing total impressions.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Demand Generation Channel Selection",
      subtitle: "Using AI to identify which channels produce the highest quality demand for your specific market, product, and customer profile",
      take: "Channel selection matches where your ICP researches, evaluates, and buys — not where your team is comfortable. AI analyses historical pipeline by source, competitive share of voice, keyword and social demand estimates, and cohort performance to recommend channel mix. B2B often blends LinkedIn, search, intent-driven display, events, and community; PLG products weight product-led and content channels. No channel is universal — economics differ by ACV, sales cycle, and category maturity.",
      why: "Spreading budget across every channel produces mediocre results everywhere. AI-assisted channel modelling focuses spend on highest-quality demand sources for your ICP and motion.",
      paragraphs: [
        [
          s("Model channels on pipeline quality, not CPL alone. "),
          x(
            "Compare cost per SQL, cost per opportunity, and win rate by source in Salesforce or HubSpot. AI regression on 12–24 months of data surfaces diminishing returns per channel.",
            "LinkedIn CPL looks high until opportunity conversion is included — spreadsheet models miss sales feedback.",
          ),
          s(" Include sales-sourced and partner channels in the model — marketing is not the only demand engine."),
        ],
        [
          s("Test new channels with bounded experiments before scale. "),
          x(
            "90-day pilots with fixed budget, clear ICP targeting, and agreed success criteria. AI drafts creative and landing variants to accelerate test velocity.",
            "Podcasts, newsletters, and niche communities often outperform broad social for technical buyers — pilots prove before annual contracts.",
          ),
          s(" Kill underperformers fast — sunk cost is the enemy of channel discipline."),
        ],
        [
          s("Align channel mix to buying committee behaviour. "),
          x(
            "Enterprise committees need ABM display, events, and sales touch; SMB may convert on search and product trial. 6sense channel analytics show where accounts engage pre-purchase.",
            "Channel selection revisits when motion shifts from inbound to outbound or vice versa.",
          ),
          s(" Document channel-role map: which channel owns awareness vs intent vs evaluation support."),
        ],
      ],
      examples: [
        {
          title: "Channel rebalance — fintech infrastructure",
          body: "AI analysis of HubSpot and Salesforce data showed events and analyst content drove 44% of enterprise opportunities despite 18% of budget. Paid social generated volume but 8% SQL rate. Budget shifted 22 points toward events and proprietary research. Enterprise pipeline rose 17%; total spend flat.",
        },
        {
          title: "Search vs social test — HR tech",
          body: "An HR tech company ran parallel 90-day pilots: Google demand-gen on ICP keywords vs LinkedIn thought-leadership lead gen. AI produced ad and landing copy for both. Search won on SQL rate; LinkedIn won on brand lift in tracker survey. Final mix: 55% search capture, 45% LinkedIn creation — role clarity ended channel wars.",
        },
        {
          title: "Community channel — developer tools",
          body: "A developer API company piloted Discord and GitHub sponsorships against paid display. Community-sourced trials converted to paid 3.1x display trials. AI monitored community questions for content gaps. Channel became 25% of creation budget — Demandbase still handled capture on in-market enterprise accounts.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Content-Led Demand Generation",
      subtitle: "The organic demand creation strategy that uses AI to produce content at the volume and quality that builds category authority and captures search demand",
      take: "Content-led demand builds authority that compounds — SEO clusters, original research, tools, and POV that attract ICP before they fill out forms. AI accelerates research outlines, first drafts, repurposing webinars into articles and social, and internal linking maps — but editorial judgment, subject-matter expert review, and distinctive POV remain human. Volume without quality damages brand and search performance; quality at scale requires workflow, not just prompts.",
      why: "Algorithm and ad costs rise; owned content is the durable demand asset. AI makes content-led programmes economically viable for lean teams if governance preserves accuracy.",
      paragraphs: [
        [
          s("Build content around ICP jobs-to-be-done and buying questions. "),
          x(
            "Mine Gong calls, support tickets, and sales objections for topic clusters. Ahrefs or Semrush gap analysis against competitors identifies capture opportunities.",
            "AI clusters questions into pillar-and-spoke architecture — marketers assign priority by pipeline impact, not keyword volume alone.",
          ),
          s(" Every pillar ties to a funnel stage and CTA — awareness posts link to consideration assets."),
        ],
        [
          s("Run human-in-the-loop production for technical and regulated categories. "),
          x(
            "AI drafts; SMEs verify claims; legal reviews when required. Claude Projects with style guides and proof libraries reduce rewrite cycles.",
            "Publish cadence matters less than update cadence — refresh top traffic posts quarterly with new data.",
          ),
          s(" Measure content by influenced pipeline and engagement depth, not pageviews alone."),
        ],
        [
          s("Repurpose once, distribute many — AI multiplies format output. "),
          x(
            "One webinar becomes blog, LinkedIn carousel, email nurture, and sales snippet. Descript and Opus clip video; AI writes summaries and pull quotes.",
            "HubSpot content membership and gating strategy balances SEO reach with lead capture.",
          ),
          s(" Track which formats move accounts to intent stage — cut production that does not advance funnel."),
        ],
      ],
      examples: [
        {
          title: "Research-led authority — RevOps SaaS",
          body: "A RevOps vendor published quarterly benchmark report — AI synthesised survey data and anonymised customer metrics. Report drove 8,400 downloads and 340 SQLs in first release. Supporting blog cluster ranked for 120 non-brand keywords. Sales used report slides in 60% of outbound sequences within 30 days.",
        },
        {
          title: "SME workflow — healthcare compliance",
          body: "A compliance SaaS required legal review on all content. AI produced first drafts from regulatory changelogs and customer FAQ exports; SMEs edited in 45 minutes versus 4-hour blank-page starts. Publishing velocity rose 3x; organic traffic grew 52% year-over-year without sacrificing audit trail.",
        },
        {
          title: "Tool-led capture — pricing software",
          body: "A pricing software company launched free ROI calculator — AI helped spec logic and copy. Calculator ranked page one for high-intent terms; 22% of users requested demo. Content-led capture complemented Demandbase ABM on tier-one accounts.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Community-Led Demand Generation",
      subtitle: "How AI helps manage, monitor, and extract signal from community channels — the demand generation approach that algorithm changes cannot disrupt",
      take: "Community-led demand grows through owned or participated spaces where ICP learns from peers — Slack groups, Discord, forums, user conferences, and practitioner networks. Algorithm changes on LinkedIn or Google do not throttle a community you own. AI monitors conversations for themes, drafts responses and resource suggestions, surfaces advocates, and extracts product and content insights — but community trust requires human moderation and genuine value, not automated spam.",
      why: "Communities build switching cost and word-of-mouth pipeline that paid channels cannot replicate. AI makes community intelligence scalable without replacing authentic human connection.",
      paragraphs: [
        [
          s("Choose community model: owned, partnered, or participated. "),
          x(
            "Owned: branded Slack or Circle for customers and prospects. Partnered: co-host with complementary vendors. Participated: active presence in industry forums and subreddits.",
            "AI sentiment and topic tagging scales monitoring — Common Room, Orbit, or custom Claude workflows on export logs.",
          ),
          s(" Start narrow — one persona or use case — before broad 'general marketing' communities fail."),
        ],
        [
          s("Extract demand signals from community activity. "),
          x(
            "Repeated questions become content briefs; active members become beta and reference candidates; buying-intent phrases trigger SDR alerts in Salesforce via integration.",
            "AI weekly digests summarise threads for product and content teams — human moderators validate before acting.",
          ),
          s(" Reward contribution — recognition and early access beat discount codes for practitioners."),
        ],
        [
          s("Connect community to formal demand programmes without hard-selling. "),
          x(
            "Office hours, AMAs, and exclusive research for members; soft CTAs to trials when questions indicate fit.",
            "HubSpot tracks community-sourced contacts with source tags for attribution over long cycles.",
          ),
          s(" Measure community health: active members, referral pipeline, and retention correlation — not member count alone."),
        ],
      ],
      examples: [
        {
          title: "Practitioner Slack — data engineering",
          body: "A data pipeline vendor grew Slack community to 4,200 practitioners. AI weekly summaries flagged rising interest in real-time CDC patterns — product marketing launched guide series; three enterprise deals cited community as first touch. SDR alerts on 'evaluating tools' phrases sourced 28 SQLs in six months.",
        },
        {
          title: "Common Room integration — design tools",
          body: "A design startup used Common Room to score community and social engagement. High-intent members received personalised nurture in HubSpot — not cold outreach. Community-influenced pipeline reached 19% of total marketing-sourced opps; CAC 40% below paid social.",
        },
        {
          title: "User conference flywheel — CRM platform",
          body: "Annual user conference content repurposed via AI into year-round community sessions. Recordings fed certification programme — switching cost rose. Community NPS 72; expansion revenue from community-heavy accounts 1.8x average.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Event and Webinar Demand Generation",
      subtitle: "Using AI to plan, promote, run, and extract value from events — the full event marketing workflow from topic selection to follow-up sequence",
      take: "Events and webinars compress trust-building — live interaction, Q&A, and peer proof accelerate consideration and intent. AI assists topic selection from trend and win-loss data, promotional copy variants, registration nurture sequences, live summarisation, and post-event follow-up personalisation. The workflow spans plan → promote → run → follow-up → repurpose; weak follow-up wastes 80% of event value. Integrate Zoom, ON24, or Hopin with HubSpot and Salesforce for attribution.",
      why: "Events are expensive; AI reduces production friction and ensures post-event demand capture matches pre-event promotion effort.",
      paragraphs: [
        [
          s("Select topics from buyer evidence, not internal product roadmap alone. "),
          x(
            "AI analyses Gong objections, support themes, and search trends to rank webinar topics by predicted registration and pipeline impact.",
            "Panel formats with customers outperform vendor-only pitches — AI drafts moderator questions from customer success stories.",
          ),
          s(" Cap events per quarter — fatigue shows in registration-to-attendance decay."),
        ],
        [
          s("Run promotion as a mini-campaign with segmented nurture. "),
          x(
            "Three-email registration sequence, LinkedIn event ads to ICP, sales invite personalisation from account research. AI drafts variants by persona.",
            "Reminder and show-up rate optimisation — SMS or calendar integrations lift live attendance 15–25%.",
          ),
          s(" No-show nurture matters — recording plus summary email within 24 hours."),
        ],
        [
          s("Post-event follow-up within 48 hours determines ROI. "),
          x(
            "Attended vs no-show tracks; high-engagement attendees (questions, poll responses) route to SDR priority. AI drafts follow-up from session transcript.",
            "Repurpose recording into blog, clips, and sales enablement — one event fuels six weeks of content.",
          ),
          s(" Attribute influenced pipeline in Salesforce campaigns — justify next quarter's event budget with data."),
        ],
      ],
      examples: [
        {
          title: "Webinar factory — security vendor",
          body: "A security company ran biweekly webinars with AI-assisted promotion and follow-up. Transcripts auto-summarised to personalised SDR emails within 12 hours. Webinar-sourced SQL rate 2.1x whitepaper downloads; ON24 engagement scores synced to HubSpot lead scoring.",
        },
        {
          title: "Field event ROI — industrial IoT",
          body: "A industrial IoT firm tracked badge scans and session attendance at trade show via Salesforce Events. AI matched sessions attended to product interest tags. Post-show nurture by interest track converted 14% of scanned leads to meetings — versus 4% generic blast prior year.",
        },
        {
          title: "Executive roundtable — finance software",
          body: "Invite-only CFO roundtables — 12 seats, no slides, facilitated discussion. AI prepped briefing docs from public filings per attendee company. Three roundtables sourced $2.1M pipeline in two quarters; follow-up was handwritten-style emails drafted by AI from discussion notes.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Marketer Decision Lens: Demand Generation Programme Design",
      subtitle: "The channel mix, the content strategy, and the measurement framework that must be in place before execution begins",
      take: "Programme design precedes campaign execution: creation vs capture split, funnel stage ownership, ICP tiers, channel roles, content pillars, community investment, event calendar, and measurement stack. AI can draft the plan and stress-test assumptions — it cannot choose your motion or sales alignment model. Gate spend increases behind leading indicators (engaged accounts, stage conversion) not vanity metrics. The lens: if you cannot explain how a programme moves an account one funnel stage, do not fund it.",
      why: "Teams that jump to tactics without programme architecture rotate agencies and channels annually without compounding learning. Design week saves wasted execution quarters.",
      paragraphs: [
        [
          s("Publish a one-page demand programme charter before Q1 campaigns. "),
          x(
            "Sections: ICP tiers, creation/capture ratio, channel roles, content pillars, event cadence, community goal, metrics, and sales SLA for lead follow-up.",
            "AI drafts charter from prior quarter data; leadership signs off on trade-offs explicitly.",
          ),
          s(" Share charter with sales and finance — alignment prevents mid-quarter blame."),
        ],
        [
          s("Classify AI use by programme layer: research, production, activation, measurement. "),
          x(
            "Research and measurement are highest-ROI AI applications; production needs quality gates; activation needs human approval on targeting changes.",
            "Document in vendor evaluations — 6sense for intent, HubSpot for nurture, Claude for synthesis — avoid duplicate tools.",
          ),
          s(" Review tool stack annually against charter goals — shelfware accumulates silently."),
        ],
        [
          s("Set kill criteria for programmes and channels before launch. "),
          x(
            "Example: if SQL rate below 12% after 90 days and $40K spend, pause and diagnose. AI anomaly alerts on weekly metrics accelerate decisions.",
            "Political attachment to failing programmes is common — pre-agreed criteria depersonalise cuts.",
          ),
          s(" Reinvest savings into winning stages — programme design is iterative, not annual wallpaper."),
        ],
      ],
      examples: [
        {
          title: "Charter discipline — Series C SaaS",
          body: "CMO blocked new channel tests until charter updated with ICP v3 and funnel definitions. Controversial pause lasted three weeks; subsequent campaigns hit SQL targets two quarters running. Sales trust in marketing-sourced leads rose from 42% to 71% in internal survey.",
        },
        {
          title: "Measurement-first launch — APAC expansion",
          body: "US vendor entering APAC built HubSpot and Salesforce attribution before spending on regional events. AI localised content but human regional lead owned charter. When event ROI lagged, kill criteria triggered pivot to partner webinars — avoided six-figure sunk cost.",
        },
        {
          title: "AI governance — regulated industry",
          body: "A financial services firm required compliance review on AI-generated external content. Programme charter included approval workflow and banned fully automated publish. Velocity still rose 40% with draft-assist model — design accommodated risk without banning AI.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Team spends 85% of budget on paid capture; pipeline flatlines. Best diagnosis?",
      options: [
        "Increase capture budget further.",
        "Likely under-investing in demand creation — audit creation vs capture split.",
        "Abandon paid channels entirely.",
        "Let AI auto-allocate without strategy.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Capture harvests existing intent; creation fills the funnel over time. Re-read sections 1.1 and 1.8.",
      wrongFeedback:
        "Flat pipeline with heavy capture often signals creation starvation. Re-read sections 1.1 and 1.8.",
    },
    {
      kind: "order",
      q: "Order the full-funnel demand stages from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Awareness — problem recognition",
        "Consideration — solution exploration",
        "Intent — vendor shortlisting",
        "Evaluation — proof and negotiation",
        "Purchase — conversion",
      ],
      correctFeedback:
        "Right. Awareness through purchase — each stage needs different tactics. Re-read section 1.2.",
      wrongFeedback:
        "Funnel stages progress from awareness to purchase. Re-read section 1.2.",
    },
    {
      kind: "categorize",
      q: "Sort each activity into demand creation vs demand capture.",
      categories: ["Demand creation", "Demand capture"],
      items: [
        { text: "Category thought leadership blog series.", category: 0 },
        { text: "Branded search campaigns.", category: 1 },
        { text: "Practitioner community programme.", category: 0 },
        { text: "6sense intent-stage display ads.", category: 1 },
        { text: "Original industry research report.", category: 0 },
        { text: "Retargeting pricing-page visitors.", category: 1 },
      ],
      correctFeedback:
        "Right. Creation builds interest; capture converts existing intent. Re-read section 1.1.",
      wrongFeedback:
        "Creation educates new demand; capture harvests in-market interest. Re-read section 1.1.",
    },
    {
      q: "ICP definition should start from what evidence source?",
      options: [
        "Leadership gut feel only.",
        "Won-deal CRM data, win/loss analysis, and validated research.",
        "Competitor follower counts.",
        "Maximum addressable market size alone.",
      ],
      correct: 1,
      correctFeedback:
        "Right. ICP comes from closed-won patterns and disqualifiers, not assumptions. Re-read section 1.3.",
      wrongFeedback:
        "Evidence-based ICP starts with CRM wins and losses. Re-read section 1.3.",
    },
    {
      q: "Channel selection should optimise primarily for what?",
      options: [
        "Lowest CPL regardless of downstream conversion.",
        "Pipeline quality metrics like SQL rate and cost per opportunity.",
        "Most creative awards.",
        "Highest social follower growth.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Quality pipeline metrics beat vanity CPL. Re-read section 1.4.",
      wrongFeedback:
        "Channel economics must include sales acceptance and opportunity conversion. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Match each programme element to design-before-execution checklist.",
      categories: ["Must define before scaling spend", "Can iterate during execution"],
      items: [
        { text: "ICP tiers and disqualifiers.", category: 0 },
        { text: "Single email subject line A/B test.", category: 1 },
        { text: "Funnel stage CRM definitions.", category: 0 },
        { text: "Social post hook variant.", category: 1 },
        { text: "Creation vs capture budget ratio.", category: 0 },
        { text: "Webinar slide deck animation.", category: 1 },
      ],
      correctFeedback:
        "Right. Architecture and measurement precede tactical tweaks. Re-read section 1.8.",
      wrongFeedback:
        "Programme architecture must be set before execution scale. Re-read section 1.8.",
    },
  ],
});
