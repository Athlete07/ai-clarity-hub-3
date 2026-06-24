import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktLinkBuildingDigitalPr = buildChapter({
  slug: "mkt-link-building-digital-pr",
  number: 6,
  shortTitle: "Link Building & Digital PR",
  title: "Link Building & Digital PR — Earning Authority in an AI-Accelerated Outreach Landscape",
  readingMinutes: 24,
  summary:
    "Links remain a core authority signal — but the tactics that worked in 2015 (mass guest posts, generic outreach) fail today and risk penalties. AI accelerates prospect research, angle development, and outreach personalisation, yet editorial links still require newsworthy stories, genuine relationships, and reputational judgment. Marketers who combine digital PR craft with AI efficiency earn links that move rankings without burning domain trust.",
  keyTakeaway:
    "Link building is a PR discipline with SEO outcomes: research prospects with AI, lead with differentiated stories backed by original data or expertise, personalise outreach at scale with human quality gates, track link portfolio health, and allocate budget to tactics with measurable authority impact — not volume metrics alone.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "Why Links Still Matter",
      subtitle: "Authority signals, referral traffic, and brand visibility in an era of AI-generated SERPs",
      take: "Backlinks remain among the strongest off-page ranking signals — especially in competitive categories where on-page quality is table stakes. Links also drive referral traffic, brand discovery, and citation in AI-generated answers that synthesise from authoritative sources. The link landscape shifted: quality, relevance, and editorial context matter more than volume; manipulative patterns trigger algorithmic and manual penalties.",
      why: "Marketers who declare link building 'dead' often confused low-quality tactics with the underlying authority need. Competitors who earn editorial links from relevant publications still outrank equivalently optimised pages without them.",
      paragraphs: [
        [
          s("Not all links carry equal weight — relevance and editorial context dominate. "),
          x(
            "A contextual link from a industry publication in body copy outweighs hundreds of footer directory links. Links from topically aligned domains with their own authority pass more value. Nofollow and sponsored links may not pass PageRank directly but still drive traffic and brand signals.",
            "Evaluate links on: domain relevance, page relevance, link placement, anchor naturalness, and referral potential — not just domain authority score.",
          ),
          s(" Maintain a link quality rubric aligned with Google's spam policies — train teams to decline bad links proactively."),
        ],
        [
          s("AI Overviews and answer engines amplify authority concentration. "),
          x(
            "Synthesised answers often cite sources with strong backlink profiles and brand recognition. Earning links from publications that AI systems already trust increases citation likelihood — another reason digital PR links compound beyond traditional rankings.",
            "Link building is partially citation building for the AI search era.",
          ),
          s(" Track brand mention and citation share in AI answer tools alongside traditional ranking metrics."),
        ],
        [
          s("Link velocity and pattern matter as much as individual links. "),
          x(
            "Sudden spikes of low-quality links, exact-match anchor concentration, and paid link networks without disclosure create penalty risk. Natural link profiles grow with varied anchors, mixed follow/nofollow, and editorial diversity over time.",
            "AI can accelerate outreach volume — governance must prevent unnatural velocity spikes.",
          ),
          s(" Quarterly backlink audits: new links, lost links, anchor distribution, toxic link disavow review."),
        ],
      ],
      examples: [
        {
          title: "NerdWallet — editorial authority compounding",
          body: "NerdWallet's SEO moat combines comprehensive on-page content with sustained digital PR earning links from major financial publications. Their original rate data and consumer surveys give journalists cite-worthy hooks. Links from WSJ, NYT, and niche finance blogs compound authority across thousands of money pages. Competitors with similar on-page SEO but weaker link profiles consistently rank below. Links remain the differentiator at scale.",
        },
        {
          title: "B2B SaaS category leader link gap",
          body: "A CRM startup analysed backlink gap versus category leader: leader had 3.2x referring domains from review sites, industry media, and integration partner pages. On-page content scores were comparable. Six-month digital PR programme targeting original benchmark reports closed 40% of the gap; organic traffic for competitive terms up 52%. Proved links mattered when content quality was equalised.",
        },
        {
          title: "Paid link network penalty",
          body: "An e-commerce site bought links from a PBN network for 18 months — rankings improved short-term. Manual action followed; traffic dropped 70% over three months. Recovery required disavow, link removal outreach, and 14 months of legitimate digital PR. Cost of shortcut exceeded what ethical link building would have cost. AI now makes spam outreach cheaper too — penalty risk scales with bad tactics.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.2",
      title: "AI for Link Prospect Research",
      subtitle: "Finding journalists, bloggers, and publications that actually cover your story angle",
      take: "AI link prospect research automates discovery: identifying journalists who wrote about related topics, finding broken link opportunities, mapping competitor backlink sources, and scoring prospects by relevance and contact accessibility. Tools like BuzzStream, Respona, Pitchbox, and custom GPT workflows with media database exports accelerate list building — but human curation separates viable prospects from spam targets.",
      why: "Manual prospect research caps outreach at dozens of contacts per campaign. AI expands the funnel to hundreds — but uncurated lists produce spam-level response rates and reputational damage with journalists.",
      paragraphs: [
        [
          s("Build prospect lists from story angle, not keyword. "),
          x(
            "Start with your digital PR hook — original survey finding, industry trend, expert commentary — then find journalists who covered that topic in the last 12 months. AI semantic search across article archives and Twitter/X beats searching 'write for us' pages.",
            "Prospect relevance predicts placement rate more than domain authority alone.",
          ),
          s(" Require minimum relevance score before a prospect enters outreach — cut lists ruthlessly before personalisation investment."),
        ],
        [
          s("Competitor backlink analysis reveals proven publication relationships. "),
          x(
            "Ahrefs, Semrush, and Moz show which domains link to competitors and to which pages. AI clusters link sources by content type: news, review, resource, community. Filter for editorial links you can realistically earn with your story — not every competitor link is replicable.",
            "Replicable patterns: publications that cover industry surveys, tool comparisons, or expert roundups.",
          ),
          s(" Refresh competitor link analysis quarterly — new publications enter niches constantly."),
        ],
        [
          s("Enrich prospect data for personalisation downstream. "),
          x(
            "AI scrapes recent articles, bylines, social posts, and podcast appearances to build prospect briefs. Store in CRM: beat covered, preferred angle, prior brand mention history. Enrichment quality determines whether outreach feels researched or templated.",
            "One paragraph of genuine article reference beats mail-merge {first_name} personalisation.",
          ),
          s(" Data hygiene: verify emails with validation tools; bounces and wrong contacts burn sender reputation."),
        ],
      ],
      examples: [
        {
          title: "AI journalist matching for fintech survey",
          body: "A payments company released quarterly fraud trend data. Respona AI matched 180 journalists who covered payment fraud in prior 18 months. Human curator reduced list to 62 high-relevance prospects with recent beat alignment. Enrichment added last article summary per journalist. Campaign secured 14 editorial links including two tier-one finance publications. Prospect research AI cut list-building from five days to six hours.",
        },
        {
          title: "Broken link building at scale",
          body: "A marketing education site used AI to identify broken links on resource pages in their niche pointing to defunct competitor content. Generated replacement content matching the original resource intent. Outreach to 40 site owners: 11 updated links, 8 added new links. Lower domain authority than digital PR hits but high relevance and low competition. AI automated broken link detection and draft outreach — human verified resource quality.",
        },
        {
          title: "Spray-and-pray list failure",
          body: "An agency used AI to generate 2,000 prospect contacts from generic 'marketing blog' searches without beat matching. Response rate 0.3%; three journalists publicly tweeted about spam outreach. Client brand associated with nuisance emails. Fix: relevance scoring threshold, list cap at 80 curated prospects per campaign, named sender with PR expertise. Response rate recovered to 8% on next campaign.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch6-link-building",
      type: "flow",
      title: "Digital PR Link Building Workflow",
      caption:
        "AI prospect research → story angle with data or expertise → personalised outreach → earn editorial coverage and links → monitor portfolio health.",
    }),
    buildSection({
      number: "6.3",
      title: "Digital PR Campaigns",
      subtitle: "Story-led outreach that earns editorial coverage and natural backlinks",
      take: "Digital PR campaigns package newsworthy narratives for media placement: data-driven stories, trend commentary, hero customer wins, expert reactions to industry events, and visual assets journalists can embed. Success metrics include coverage count, link acquisition, referral traffic, and brand search lift — not just emails sent.",
      why: "Editorial links from news coverage carry authority and trust signals guest posts rarely match. Digital PR also builds relationships that compound across future campaigns — the second pitch to a journalist who trusted your data is easier than the first.",
      paragraphs: [
        [
          s("Every campaign needs a newsroom-ready asset pack. "),
          x(
            "Press release or media brief, key statistics with methodology, spokesperson availability, high-res images or charts, embeddable graphics, and FAQ for journalists. AI drafts initial copy; PR lead ensures newsworthiness and accuracy.",
            "Journalists work on deadlines — complete asset packs win placements over 'want to write about us?' pitches.",
          ),
          s(" Lead with the story, not the brand — coverage and links follow genuine editorial interest."),
        ],
        [
          s("Campaign timing amplifies pickup. "),
          x(
            "Align with industry news cycles, seasonal trends, regulatory changes, and conference moments when journalists actively seek sources. AI monitors news APIs and social trends to suggest timing windows.",
            "Counter-intuitive data that challenges consensus performs when timed to related breaking news.",
          ),
          s(" Build a 12-month PR calendar mapping data releases and industry events — not random outreach."),
        ],
        [
          s("Measure campaigns holistically, not link-count alone. "),
          x(
            "Track: referring domains earned, follow vs nofollow mix, coverage tier (national, trade, local), referral sessions, branded search lift, and assisted conversions. A campaign with five high-tier links may outperform 50 low-tier directory mentions.",
            "Report business impact to stakeholders — SEO value alone undersells PR to leadership.",
          ),
          s(" Document journalist relationships in CRM for follow-up pitches — relationship ROI spans years."),
        ],
      ],
      examples: [
        {
          title: "Spotify Wrapped as PR archetype",
          body: "Spotify Wrapped generates annual media frenzy — original user data packaged as shareable personal stories. Thousands of editorial links from culture and tech press follow without traditional outreach. Most brands lack Spotify's data scale, but the model applies: proprietary data + visual storytelling + cultural timing = link magnet. Smaller brands adapt with niche industry data releases.",
        },
        {
          title: "Cybersecurity incident response commentary",
          body: "When a major breach hits, a cybersecurity firm's digital PR team publishes expert analysis within four hours — technical breakdown, impact assessment, remediation guidance. AI drafts initial structure from threat intel feeds; CISO approves. Trade publications embed analysis with attribution links. Reactive speed and expertise earn 8–12 high-authority links per major incident without proactive pitching.",
        },
        {
          title: "Self-congratulatory press release flop",
          body: "A SaaS company issued an AI-drafted press release announcing a minor product update as 'industry revolutionising'. Zero pickups, zero links. Journalists ignored because no news value. Rebuilt PR approach around annual customer success benchmark with anonymised usage trends — first release earned six trade publication links. Lesson: brand announcements are not stories; data and insight are.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Original Research for Links",
      subtitle: "Surveys, benchmarks, and data studies that journalists cite and competitors cannot copy",
      take: "Original research — customer surveys, industry benchmarks, aggregated anonymised product data, economic impact studies — is the highest-ROI link building asset for mature marketing teams. Journalists need cite-worthy statistics; AI helps analyse and visualise data but cannot fabricate the underlying dataset without destroying credibility.",
      why: "One well-executed research report can earn hundreds of editorial links over years as journalists cite your statistics. It is the link building equivalent of differentiation in content SEO — information gain for the media ecosystem.",
      paragraphs: [
        [
          s("Research design determines link-worthiness. "),
          x(
            "Strong studies answer questions journalists are already asking: salary benchmarks, adoption rates, trend shifts, regional comparisons. Sample size, methodology transparency, and neutral presentation increase citation rates. Controversial findings with solid methodology outperform bland consensus.",
            "Partner with reputable research firms or academic advisors in sensitive categories for credibility.",
          ),
          s(" Pre-launch journalist briefings under embargo build day-one coverage cluster — links follow fast."),
        ],
        [
          s("AI accelerates analysis and content production from research data. "),
          x(
            "Once data is collected, AI generates segment breakdowns, chart copy, regional summaries, and social assets. Human analysts verify statistical claims and prevent misinterpretation. Speed from data lock to publish determines news cycle capture.",
            "Maintain raw data archive and methodology doc for journalist fact-check requests.",
          ),
          s(" Create a dedicated research landing page optimised for citation — clear stats, embed codes, methodology link."),
        ],
        [
          s("Repurpose research across channels for maximum link surface. "),
          x(
            "Full report, executive summary, infographic, interactive data explorer, regional press releases, and expert commentary blog posts. Each asset targets different publication types and link contexts.",
            "One research investment fuels six months of PR outreach angles.",
          ),
          s(" Update research annually — journalists re-cite updated benchmarks; refresh earns new link waves."),
        ],
      ],
      examples: [
        {
          title: "Buffer State of Remote Work",
          body: "Buffer's annual remote work survey targets a journalists' evergreen need: current remote work statistics. Each year's release generates hundreds of links from HR, business, and lifestyle publications citing Buffer data. AI assists report writing and social assets; survey data is proprietary. Campaign cost is survey platform and analysis time — link value compounds for 12+ months until next release.",
        },
        {
          title: "B2B pricing benchmark study",
          body: "A procurement software company analysed anonymised transaction data from 2,000 customers to publish category pricing benchmarks. Trade press cited statistics in 22 articles within 60 days. Sales team uses report as outbound asset. Competitors cannot replicate without equivalent data scale. Research page became third-highest organic traffic URL on the domain.",
        },
        {
          title: "Fabricated survey scandal",
          body: "A startup published AI-invented survey statistics without running an actual survey. Industry analyst flagged inconsistencies; publication retractions followed; brand credibility damaged in a trust-sensitive category. Legal exposure for false claims. Policy now: all published statistics trace to documented primary research with sample methodology archived. AI assists analysis only on verified datasets.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Outreach Personalisation at Scale",
      subtitle: "AI-drafted pitches that reference real journalist work — without crossing into creepy automation",
      take: "Outreach personalisation at scale means each email demonstrates knowledge of the recipient's beat and recent work while maintaining sending volume impossible with fully manual drafting. AI generates pitch variants from prospect enrichment data; humans review samples and approve templates. The line between personalised and spam is specificity and relevance — not mail merge tricks.",
      why: "Generic outreach gets sub-1% response rates and burns domain sender reputation. Personalised outreach to curated lists achieves 5–15% response rates. AI makes the economics of personalisation viable — but only with quality gates.",
      paragraphs: [
        [
          s("Personalisation hierarchy: relevance beats flattery. "),
          x(
            "Tier 1: reference specific recent article and connect to your story angle. Tier 2: reference beat and publication focus. Tier 3: industry role personalisation only — use sparingly. AI drafts Tier 1 from enrichment briefs; humans spot-check 10% before send.",
            "Fake personalisation ('loved your recent piece on...' when wrong article) is worse than generic.",
          ),
          s(" Ban AI from inventing journalist quotes or article references — enrichment data only."),
        ],
        [
          s("Pitch structure: hook, proof, ask, easy yes. "),
          x(
            "Subject line: data point or news hook. Opening: one sentence connecting to their coverage. Body: three bullet story assets with stats. Ask: exclusive, embargo interview, or data embed — not 'link to our homepage'. Close: spokesperson availability and asset link.",
            "AI generates variants; PR lead maintains master template with brand voice guardrails.",
          ),
          s(" A/B test subject lines on small batches before full send — AI suggests, data decides."),
        ],
        [
          s("Sender identity and follow-up discipline matter. "),
          x(
            "Named PR or content lead outperforms 'marketing@' addresses. Maximum two follow-ups spaced five business days; third touch is relationship damage. AI schedules follow-ups with context from prior thread.",
            "Track reply sentiment — adjust angles when journalists consistently decline a pitch type.",
          ),
          s(" Warm introductions from network beat cold AI-personalised email when connection exists — check LinkedIn first."),
        ],
      ],
      examples: [
        {
          title: "GPT enrichment-to-pitch pipeline",
          body: "A martech company's outreach workflow: journalist name → AI pulls three recent articles → generates two-sentence connection to survey data → human approves batch of 20 → sends via BuzzStream. Response rate 11% versus 2% on prior generic template. Key upgrade was article-specific opening verified by human — not AI alone.",
        },
        {
          title: "Founder-led outreach for startup PR",
          body: "A seed-stage founder personally sent 30 AI-drafted-but-founder-edited pitches to niche newsletter writers referencing specific prior issues. 9 agreed to cover product launch story. Links from newsletters with engaged audiences drove more signups than prior agency mass outreach. Scale limit acknowledged — founder touch does not scale to 500, but quality over volume for early stage.",
        },
        {
          title: "AI hallucinated article reference",
          body: "Agency AI pitch referenced a journalist's 'article on AI ethics' that did not exist — journalist tweeted complaint. Client relationship strained. Fix: enrichment pipeline now requires linked URL verification before pitch generation; unverified references blocked. Human review mandatory for tier-one publications.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Reactive PR Opportunities",
      subtitle: "Newsjacking, HARO alternatives, and rapid response when journalists need sources now",
      take: "Reactive PR captures link opportunities when news breaks: monitoring journalist source requests, trending topics, and competitor crises where your expertise adds context. AI monitors alert feeds, drafts expert quotes, and routes approvals fast — speed wins placements because journalists publish on hours-not-days timelines.",
      why: "Proactive digital PR campaigns take weeks. Reactive opportunities surface daily for brands with genuine expertise and approval workflows fast enough to meet deadlines.",
      paragraphs: [
        [
          s("Build monitoring stack for journalist requests. "),
          x(
            "Tools: Qwoted, HARO successors, Twitter/X journalist request searches, Google Alerts for industry terms, AI-summarised media request digests. Route relevant requests to subject experts by topic tag within two hours.",
            "Response SLA: draft quote within four hours for high-relevance requests during business hours.",
          ),
          s(" Maintain expert quote bank pre-approved for common topics — AI adapts banked quotes to specific questions fast."),
        ],
        [
          s("Newsjacking requires taste and restraint. "),
          x(
            "Commenting on breaking news with genuine expertise adds value. Exploiting tragedies or crises for links destroys brand trust. AI trend monitoring should include sentiment and sensitivity flags — auto-block certain event categories.",
            "Legal and comms review on reactive quotes in regulated industries before send.",
          ),
          s(" Decline opportunities that force expertise beyond your domain — wrong quotes earn links but lose trust long-term."),
        ],
        [
          s("Reactive wins compound into proactive relationships. "),
          x(
            "Journalists who receive useful quotes on deadline remember your brand for future proactive pitches. CRM tag 'responsive source' on journalists who published your commentary.",
            "Track reactive link acquisition separately — proves value of monitoring investment to leadership.",
          ),
          s(" Debrief monthly: which reactive topics earned links? Bias monitoring toward proven categories."),
        ],
      ],
      examples: [
        {
          title: "Qwoted rapid response programme",
          body: "An employment law firm assigned one associate two hours daily to review journalist requests via Qwoted. AI drafts initial quote from pre-approved legal frameworks; associate edits for accuracy. Average 12 placements per month with editorial links from business and HR publications. Cost: partial FTE. Value: links that proactive outreach to same publications had failed to earn for two years.",
        },
        {
          title: "Regulatory change commentary",
          body: "When EU AI Act final text published, a compliance SaaS AI-drafted expert summary within 90 minutes. Outreach to five journalists already covering the story. Three embedded commentary with links before competitors' slower responses. Reactive speed captured news cycle link cluster worth estimated six months of standard outreach.",
        },
        {
          title: "Tasteless newsjack backlash",
          body: "A consumer brand AI-suggested newsjack tying their product to a natural disaster for 'awareness'. Social backlash within hours; outreach cancelled. Added sensitivity filter to reactive monitoring: block disaster, fatality, and political violence categories from auto-suggestions. Reactive PR needs human judgment gate, not automated trend chasing.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Link Profile Monitoring",
      subtitle: "Tracking acquisition, quality, toxicity, and competitive gaps over time",
      take: "Link profile monitoring tracks new and lost backlinks, referring domain quality trends, anchor text distribution, toxic link identification, and competitive authority gaps. AI assists anomaly detection and toxic link scoring — but disavow decisions and competitive strategy remain human judgment calls.",
      why: "You cannot manage what you do not measure. Link building without monitoring produces activity metrics (emails sent) without outcome metrics (authority gained). Monitoring also catches negative SEO and toxic links before they compound.",
      paragraphs: [
        [
          s("Core monitoring metrics on monthly dashboard. "),
          x(
            "New referring domains (count and quality tier), lost links, net authority trend, anchor text distribution vs natural benchmark, top linked pages, and competitor gap delta.",
            "Segment links by acquisition source: digital PR, partnerships, product-led, UGC, unknown — attribute tactics to outcomes.",
          ),
          s(" Alert on sudden anchor text exact-match spikes or referring domain quality drops."),
        ],
        [
          s("Toxic link identification and disavow discipline. "),
          x(
            "AI scoring flags PBN patterns, irrelevant foreign domains, gambling/pharma spam injections. Review before disavow — not every low-quality link warrants disavow. Google ignores most spam links; disavow for clear manipulative patterns or manual action recovery.",
            "Document disavow rationale; update disavow file quarterly, not reactively panicking.",
          ),
          s(" Monitor negative SEO attempts — competitor-linked spam bursts happen in aggressive categories."),
        ],
        [
          s("Connect link data to ranking and traffic outcomes. "),
          x(
            "Correlate referring domain growth on target pages with position changes lagged 4–8 weeks. Attribute PR campaign links to specific URL ranking improvements for stakeholder reporting.",
            "Links are means; rankings and revenue are ends — dashboard both.",
          ),
          s(" Annual link portfolio review: which acquisition channels produced links still live after 24 months?"),
        ],
      ],
      examples: [
        {
          title: "Monthly link committee review",
          body: "A health publisher's SEO and PR teams meet monthly reviewing Ahrefs dashboard: new links by campaign, toxic flags, competitor gap. Q2 review identified competitor surge from annual research report — triggered own survey acceleration. Q4 review caught toxic PBN burst (negative SEO); disavow filed. Disciplined monitoring turned link building from activity to portfolio management.",
        },
        {
          title: "Anchor text naturalisation",
          body: "Monitoring revealed 45% exact-match commercial anchor on new links from aggressive guest post vendor. Paused vendor; diversified outreach toward branded and natural anchors via digital PR. Anchor distribution normalised over six months; no penalty but risk averted. AI anchor analysis flagged anomaly human reviewers had missed in raw lists.",
        },
        {
          title: "Lost link recovery workflow",
          body: "AI alert flagged 23 lost links from domain migrations at partner sites. Outreach team contacted partners with updated URLs; 18 links restored. Simple monitoring workflow recovered authority that passive teams lose silently. Estimated ranking protection on three commercial pages.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Link Building Investment Allocation",
      subtitle: "Where to invest limited budget across digital PR, research, reactive, and partnerships",
      take: "Before funding link building tactics, run four checks: (1) do you have a link-worthy asset — data, expertise, product story? (2) does your category respond to digital PR — journalists covering your space? (3) is your monitoring infrastructure ready to measure ROI? (4) does tactic match timeline — reactive for speed, research for compounding? Allocate to research and digital PR when assets exist; reactive when expertise is deep; pause paid link tactics entirely.",
      why: "Link building budgets scatter across agencies, tools, and guest post vendors without portfolio logic. This lens aligns spend with assets and measurable authority outcomes.",
      paragraphs: [
        [
          s("Check one: link-worthy asset inventory. "),
          x(
            "Audit: proprietary data, customer success stories, executive expertise, product uniqueness, research budget. No asset → build asset before outreach spend. Pitching without story is burning budget.",
            "Asset gap is a product and research problem, not an outreach tool problem.",
          ),
          s(" Quarterly asset inventory update drives PR calendar planning."),
        ],
        [
          s("Check two: media landscape viability. "),
          x(
            "Do journalists and bloggers actively cover your category? Analyse competitor media mentions and publication list depth. Niche B2B with thin media may need partnership and integration links over consumer-style digital PR.",
            "Match tactic to media reality — not every category supports NerdWallet-style research PR.",
          ),
          s(" If media is thin, invest in community, integration, and resource link strategies."),
        ],
        [
          s("Checks three and four: measurement readiness and timeline fit. "),
          x(
            "Monitoring dashboard live before campaign spend. Set 90-day KPIs: referring domains, quality tier, target page impact. Research programmes need 6-month ROI horizon; reactive programmes show results in weeks.",
            "Budget split guideline: 50% asset creation (research, content), 30% outreach execution, 20% tools and monitoring — adjust by maturity.",
          ),
          s(" Run this lens at annual planning and before agency RFP — prevents tactic shopping without strategy."),
        ],
      ],
      examples: [
        {
          title: "Research-first budget reallocation",
          body: "A HR tech company spent 70% of link budget on guest post vendors with marginal ranking impact. Decision lens revealed weak asset inventory. Reallocated: 60% to annual salary benchmark research, 25% digital PR execution, 15% tools. Year-one referring domains from tier-one/trade press up 3x; guest post spend zeroed. Rankings for competitive terms moved after research launch, not before.",
        },
        {
          title: "Reactive programme for expert-heavy brand",
          body: "Management consultancy with 40 partners but no data team. Lens check: deep expertise, moderate media, no research asset. Funded reactive monitoring and quote bank programme — 40% of link budget. Proactive research deferred. Six months: 85 editorial links from expert commentary versus 12 from prior proactive generic outreach. Tactic matched asset reality.",
        },
        {
          title: "Paid link spend stop",
          body: "E-commerce CMO audited link portfolio after lens check three revealed unmeasured vendor spend. 200 paid guest posts, average domain authority 25, zero ranking correlation. Budget redirected to product-led integration pages and one original consumer survey. Toxic link risk reduced; organic growth recovered over two quarters. Lens prevented another year of activity without authority.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A competitor has equivalent on-page SEO but ranks higher. What is the most likely differentiator?",
      options: [
        "They use a faster CMS.",
        "Stronger editorial backlink profile from relevant, authoritative publications.",
        "More social media followers only.",
        "Shorter meta descriptions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Editorial links remain a major authority signal. Re-read section 6.1.",
      wrongFeedback:
        "When on-page is equal, off-page authority often decides rankings. Re-read section 6.1.",
    },
    {
      q: "AI generates a prospect list of 2,000 contacts from generic blog searches. What should you do before outreach?",
      options: [
        "Send immediately to maximise volume.",
        "Curate ruthlessly by beat relevance and story fit — quality prospect lists beat spray-and-pray volume.",
        "Buy more email credits.",
        "Remove all personalization to save time.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI expands discovery; human curation ensures relevance. Re-read section 6.2.",
      wrongFeedback:
        "Uncurated large lists damage sender reputation and response rates. Re-read section 6.2.",
    },
    {
      kind: "order",
      q: "Order the digital PR link building workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "AI-assisted prospect research with relevance scoring",
        "Story angle backed by data or expertise",
        "Personalised outreach with human quality gate",
        "Monitor link portfolio health and outcomes",
      ],
      correctFeedback:
        "Right. Research → story → outreach → monitor. Skipping story or monitoring wastes effort. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Start with prospects and story before outreach. Monitoring closes the loop. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each tactic into the correct link building category.",
      categories: ["Digital PR", "Original research", "Reactive PR", "Monitoring"],
      items: [
        { text: "Annual industry benchmark survey with embargo briefings.", category: 1 },
        { text: "Qwoted journalist request response within four hours.", category: 2 },
        { text: "Monthly referring domain quality dashboard review.", category: 3 },
        { text: "Data-driven press release with journalist asset pack.", category: 0 },
        { text: "Toxic link spike alert and disavow evaluation.", category: 3 },
        { text: "Expert commentary on breaking regulatory news.", category: 2 },
      ],
      correctFeedback:
        "Right. PR = story campaigns. Research = cite-worthy data. Reactive = speed opportunities. Monitoring = portfolio health. Re-read sections 6.3–6.7.",
      wrongFeedback:
        "Match each tactic to its primary function in the link building system. Re-read sections 6.3–6.7.",
    },
    {
      q: "An agency pitches AI-generated outreach referencing a journalist's article that does not exist. What failed?",
      options: [
        "The email subject line length.",
        "Human verification gate — AI must not invent article references; enrichment data requires URL verification.",
        "The journalist's inbox was full.",
        "Links are dead anyway.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Personalisation requires verified references, not AI hallucination. Re-read section 6.5.",
      wrongFeedback:
        "Fake personalisation damages relationships. Verification gates are mandatory. Re-read section 6.5.",
    },
    {
      q: "Leadership wants to spend 80% of link budget on paid guest posts. What does the investment lens recommend?",
      options: [
        "Approve — guest posts are always safe.",
        "Pause paid tactics; audit assets and monitoring; reallocate toward research and editorial PR with measurable authority outcomes.",
        "Double guest post spend for faster results.",
        "Stop all link building forever.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Paid link tactics risk penalties; asset-driven PR compounds. Re-read section 6.8.",
      wrongFeedback:
        "Investment lens prioritises assets, editorial PR, and measurement over paid link volume. Re-read section 6.8.",
    },
  ],
});
