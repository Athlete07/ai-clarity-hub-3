import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktBrandMeasurementReputationIntelligence = buildChapter({
  slug: "mkt-brand-measurement-reputation-intelligence",
  number: 8,
  shortTitle: "Brand Measurement & Reputation Intelligence",
  title: "Brand Measurement & Reputation Intelligence — Building Brand Health Frameworks, Share of Voice, Sentiment Systems, and Executive Reporting That Connect Perception to Business Outcomes",
  readingMinutes: 24,
  summary:
    "Brand investment competes for budget against performance channels that report ROAS in dashboards. Brand measurement and reputation intelligence make perception legible: brand health tracking, share of voice, sentiment and narrative analysis, equity studies, and crisis recovery metrics tied where possible to pipeline, pricing power, and talent outcomes. AI accelerates media monitoring synthesis, survey analysis, anomaly detection, and executive narrative drafts — but credibility depends on marketer-owned architecture: metric definitions, benchmark discipline, integrated data sources, and reporting rhythms leadership trusts. Teams that report impressions alone lose brand budget; teams that build reputation intelligence compound strategic influence.",
  keyTakeaway:
    "Brand measurement is an intelligence system, not a vanity dashboard. The sequence that wins: define brand health metrics and data sources → benchmark share of voice and sentiment → run periodic equity and perception studies → connect reputation signals to commercial and talent outcomes → build executive narratives with anomaly response → run a decision lens before tool sprawl or metric proliferation. AI accelerates analysis; marketers own definitions, benchmarks, and decision-ready reporting.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Brand Health Measurement Framework",
      subtitle: "Metric hierarchy, definitions, and data sources — what you track and why it matters",
      take: "A brand health framework tiers metrics: leading indicators (awareness, consideration, sentiment, share of voice), behavioural proxies (branded search, direct traffic, review velocity), and lagging business outcomes (win rate, pricing premium, talent acceptance). AI aggregates disparate sources into unified views — marketers define metric dictionary, calculation rules, and refresh cadence so year-over-year comparisons mean something.",
      why: "Undefined metrics produce dashboard debates instead of decisions. Framework discipline makes brand reporting comparable to finance and sales reporting.",
      paragraphs: [
        [
          s("Metric dictionary prevents 'brand awareness' arguments. "),
          x(
            "Define each metric: formula, source, segment, frequency, owner. Example: 'Unaided awareness' = survey question X among ICP sample n≥300 quarterly. 'Branded search' = Google Search Console brand query index monthly. AI cannot define — leadership agrees dictionary.",
            "Same label, different calculation destroys trust in brand reporting.",
          ),
          s(" Dictionary published internally — changes versioned with migration notes."),
        ],
        [
          s("Balance leading and lagging indicators in one scorecard. "),
          x(
            "Leading shifts first — sentiment drop precedes revenue impact by quarters. Scorecard shows both so leadership does not panic on lagging alone or ignore leading warnings. AI correlates leading to lagging over historical windows — marketer validates causation claims.",
            "Lagging-only reporting makes brand look irrelevant until crisis.",
          ),
          s(" Quarterly scorecard rhythm — monthly for crisis or launch periods only."),
        ],
        [
          s("Segment brand health by audience, not company average alone. "),
          x(
            "Enterprise vs SMB, geography, persona, customer vs prospect. Aggregate brand health can hide enterprise sentiment collapse while SMB stable. AI segments monitoring and survey data — comms acts on segment deltas.",
            "Average brand health is a dangerous summary statistic.",
          ),
          s(" Segment definitions align with GTM — same segments sales and marketing use."),
        ],
      ],
      examples: [
        {
          title: "Metric dictionary — board reporting fix",
          body: "Board deck used 'awareness' from three sources inconsistently year over year. Comms led metric dictionary workshop; single survey vendor and branded search index adopted. Board brand section debate time cut 70%; CMO secured multi-year tracking budget.",
        },
        {
          title: "Leading indicator save — sentiment drop",
          body: "Q2 sentiment on product reliability dropped 12 points among enterprise segment — leading indicator. Lagging revenue not yet affected. Product comms and fix roadmap accelerated. Q4 win rate in segment held versus competitor gains — early action credited in post-review.",
        },
        {
          title: "Segment reveal — geographic split",
          body: "Global brand health score flat. AI segment analysis showed APAC sentiment up 8 points, NA down 15. Root cause: support SLA regional gap. Targeted NA comms and ops fix — aggregate mask would have delayed response 2 quarters.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch8-reputation-stack",
      type: "flow",
      title: "Reputation Intelligence Stack",
      caption:
        "Brand health framework and definitions → share of voice and competitive benchmarks → sentiment and narrative monitoring → equity and perception studies → commercial and talent linkage → executive reporting and crisis recovery tracking.",
    }),
    buildSection({
      number: "8.2",
      title: "Share of Voice & Competitive Benchmarking",
      subtitle: "Volume, quality, and narrative share — how loud you are versus competitors in category conversation",
      take: "Share of voice (SOV) measures brand mention volume relative to competitors across media, social, and analyst channels — weighted optionally by reach, sentiment, or message pull-through. AI automates SOV collection and competitor topic maps — marketers choose competitor set, channel weights, and whether to track share of voice or share of positive voice.",
      why: "SOV without competitive context is noise. Benchmarking answers whether you are gaining or losing category narrative share — essential for PR, content, and executive comms investment.",
      paragraphs: [
        [
          s("Competitor set discipline keeps benchmarks actionable. "),
          x(
            "Track 3–5 direct competitors plus category leader if you are challenger. Revise annually when market shifts. AI suggests emerging competitors from mention co-occurrence — marketer approves additions.",
            "Tracking 20 competitors dilutes signal — focus beats completeness.",
          ),
          s(" Competitor list agreed with sales and product — reflects deal reality."),
        ],
        [
          s("Weight SOV by channel relevance to ICP. "),
          x(
            "B2B enterprise: trade press and LinkedIn weighted above consumer social. DTC: Instagram and TikTok matter more. Raw mention volume across all channels misranks B2B brands.",
            "Channel-weighted SOV aligns measurement with GTM motion.",
          ),
          s(" Weighting model documented in metric dictionary — stable year over year."),
        ],
        [
          s("Message SOV tracks narrative ownership, not just mentions. "),
          x(
            "Tag mentions by theme: innovation, security, price, support, culture. AI classifies themes — human validates taxonomy quarterly. Winning SOV on 'price' may be negative — message SOV adds quality dimension.",
            "Volume leadership on wrong message is strategic loss.",
          ),
          s(" Message SOV in quarterly competitive review with product marketing."),
        ],
      ],
      examples: [
        {
          title: "SOV shift — PR programme ROI",
          body: "12-month PR investment tracked SOV in trade press vs 4 competitors. SOV rose from 19% to 34%; message SOV on 'AI governance' pillar from 8% to 41%. Correlated with inbound analyst inquiries up 2x — PR budget renewed with SOV targets.",
        },
        {
          title: "Weighted SOV — channel correction",
          body: "Raw SOV showed brand leading — but weighted B2B model revealed trailing on LinkedIn and industry podcasts where ICP engages. Shifted executive podcast strategy; weighted SOV caught up in 2 quarters.",
        },
        {
          title: "Negative message SOV alert",
          body: "SOV up 20% during outage — message SOV showed 78% on 'reliability concerns.' Comms separated volume from sentiment in board report — avoided false celebration. Recovery tracked via message SOV return to baseline.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Sentiment & Narrative Monitoring",
      subtitle: "Polarity, themes, and velocity — detecting reputation shifts before they become crises",
      take: "Sentiment monitoring tracks polarity (positive, negative, neutral) and narrative themes across social, reviews, forums, and news. AI classifies at scale and detects velocity spikes — marketers define alert thresholds, theme taxonomy, and human validation samples because sarcasm, context, and bot noise break naive classifiers.",
      why: "Reputation crises begin as theme velocity shifts, not single viral posts. Narrative monitoring provides early warning when product, support, or leadership issues compound in public conversation.",
      paragraphs: [
        [
          s("Theme taxonomy aligns with business risk categories. "),
          x(
            "Themes: product quality, support experience, pricing, leadership, ethics, security, workplace culture. AI assigns themes — comms spot-checks 5% weekly for classifier drift. New themes emerge from quarterly review.",
            "Generic positive/negative without themes hides actionable problems.",
          ),
          s(" Theme list shared with product, HR, and support — owners per theme."),
        ],
        [
          s("Velocity alerts complement absolute sentiment scores. "),
          x(
            "Alert when negative theme mention rate exceeds 2 standard deviations from 30-day baseline or competitor-relative spike. AI calculates velocity — humans confirm before crisis escalation.",
            "Slow sentiment drift matters; sudden velocity matters more for crisis.",
          ),
          s(" Alert thresholds tuned post false-positive review — document in playbook."),
        ],
        [
          s("Human validation on high-stakes classifications. "),
          x(
            "Sample review on executive mentions, regulatory topics, and viral threads. AI sentiment on sarcasm and industry jargon errors common — human override feeds model retraining where vendor supports.",
            "Fully automated sentiment for board reporting is reckless.",
          ),
          s(" Monthly validation report — accuracy rate and correction themes."),
        ],
      ],
      examples: [
        {
          title: "Velocity alert — support theme",
          body: "AI velocity alert: 'support wait times' theme up 4x in 72 hours on Twitter and Reddit. Confirmed human review — regional staffing issue. Comms + support proactive thread and status page. Peak negative sentiment contained — prior similar issue without monitoring became week-long crisis.",
        },
        {
          title: "Classifier correction — sarcasm",
          body: "Automated sentiment marked employee thread positive — human review found sarcastic criticism of return-to-office policy. Taxonomy updated; vendor retrained on sample. Lesson: validation sample non-negotiable for HR-related themes.",
        },
        {
          title: "Theme owner routing",
          body: "Negative 'data privacy' theme spike routed to legal and product per theme owner map. Response coordinated within 6 hours. Theme owner model reduced cross-functional Slack chaos during incident.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Brand Equity & Perception Studies",
      subtitle: "Survey programmes, tracking waves, and attribute maps — structured perception beyond monitoring",
      take: "Brand equity studies use structured surveys to track awareness, consideration, preference, attribute ratings, and NPS among target audiences — typically quarterly or semi-annual tracking waves plus ad hoc deep dives. AI analyses open text and drivers of preference — marketers own questionnaire design, sample representativeness, and competitive attribute maps.",
      why: "Passive monitoring captures vocal minorities; surveys measure perception among defined audiences including silent majority. Equity studies justify positioning shifts and budget.",
      paragraphs: [
        [
          s("Tracking questionnaire stability enables trend analysis. "),
          x(
            "Core questions unchanged wave-to-wave; modular section for new topics. Changing questions every wave destroys trending — AI can suggest new modules but core stays.",
            "Novelty-chasing questionnaires make multi-year charts meaningless.",
          ),
          s(" Questionnaire change control — version and effective date documented."),
        ],
        [
          s("Attribute maps position brand vs competitors on key dimensions. "),
          x(
            "Dimensions: innovation, trust, value, ease, support — category-specific. Plot your brand and competitors; gap analysis drives comms and product narrative. AI visualises from survey data — strategy team interprets.",
            "Attribute gaps are the bridge between brand research and positioning decisions.",
          ),
          s(" Attribute map in annual strategy offsite — not archived in research folder."),
        ],
        [
          s("Sample quality gates study credibility. "),
          x(
            "ICP representativeness, n size per segment, response bias checks. AI panel tools speed fielding — marketer rejects convenience samples that flatter results.",
            "Survey of existing customers only lies about market perception.",
          ),
          s(" Methodology appendix in every brand study deck — sample and margin of error."),
        ],
      ],
      examples: [
        {
          title: "Attribute gap — positioning pivot",
          body: "Tracking showed 'innovative' attribute strong but 'trusted for enterprise' lagging competitor by 18 points among enterprise prospects. Repositioned comms toward security proof and customer logos. Trust gap closed to 6 points in 3 waves — sales cited improved enterprise conversations.",
        },
        {
          title: "Core question stability",
          body: "New CMO wanted to replace entire questionnaire. Analysis showed 4-year trend on consideration metric — invaluable. Compromise: 80% core retained, 20% new sustainability module. Trend continuity preserved.",
        },
        {
          title: "Sample fix — prospect inclusion",
          body: "Prior studies surveyed customers only — awareness among prospects overstated. Added prospect panel 50% of sample. True unaided awareness half prior estimate — reset growth targets and media investment model.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Connecting Reputation to Commercial Outcomes",
      subtitle: "Pipeline influence, win rate, pricing, and talent — linking perception to P&L where possible",
      take: "Reputation intelligence gains budget authority when connected to commercial outcomes: brand-influenced pipeline, win/loss themes citing brand, price sensitivity, churn correlated with sentiment, and offer acceptance. AI tags CRM and win/loss notes for brand mentions — marketers define attribution rules and avoid overclaiming causation.",
      why: "CMOs lose fights when brand is only soft metrics. Commercial linkage is imperfect but directionally essential — same standard performance marketing accepts for multi-touch.",
      paragraphs: [
        [
          s("Win/loss brand theme analysis informs positioning investment. "),
          x(
            "Sales notes coded for 'brand trust,' 'thought leadership,' 'reputation concern.' AI extracts themes quarterly — product marketing and comms prioritise fixes. Losing deals on security perception is brand-measurable.",
            "Win/loss data sitting in sales tools unanalysed wastes research gold.",
          ),
          s(" Joint win/loss review quarterly — brand themes on agenda."),
        ],
        [
          s("Brand-influenced pipeline uses defined touch rules. "),
          x(
            "Opportunities with brand content, PR, or event touch in 180 days before create = influenced. Track value, win rate, cycle length vs non-influenced. Rules agreed with finance — consistency beats perfect attribution.",
            "Influenced pipeline metric makes brand legible in revenue conversations.",
          ),
          s(" Influenced pipeline in CMO dashboard alongside SOV and sentiment."),
        ],
        [
          s("Talent and pricing proxies extend reputation ROI. "),
          x(
            "Offer acceptance, cost-per-hire from brand channels, Glassdoor trend vs competitors. Pricing: win rate on premium tier when brand trust high in segment. AI correlates — leadership interprets cautiously.",
            "Reputation affects hiring and pricing power — not only marketing funnel top.",
          ),
          s(" Annual reputation ROI narrative for board — multi-outcome, conservative claims."),
        ],
      ],
      examples: [
        {
          title: "Win/loss — trust theme",
          body: "Win/loss analysis showed 23% of enterprise losses mentioned 'vendor stability concerns.' Reputation programme emphasised financial health and customer longevity proof. Mention rate dropped to 11% in 2 quarters; enterprise win rate up 5 points.",
        },
        {
          title: "Influenced pipeline — board approval",
          body: "$6.1M influenced pipeline from brand touches in FY — 42% win rate vs 29% non-influenced. CFO accepted brand budget increase. Attribution rules unchanged 2 years — credibility from consistency.",
        },
        {
          title: "Talent correlation",
          body: "Glassdoor improvement tracked alongside referral hire percentage — correlation 0.72 over 18 months. Employer brand investment credited in workforce plan — not siloed as HR metric only.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Crisis Reputation Recovery Tracking",
      subtitle: "Baseline, trough, recovery milestones, and narrative repair — measuring comeback discipline",
      take: "Crisis recovery tracking documents pre-crisis baseline metrics, trough during incident, and recovery milestones at 30/60/90 days: sentiment, SOV message mix, branded search, review velocity, and sales impact proxies. AI monitors recovery slope and flags stalled themes — marketers define recovery success criteria before crisis, not during.",
      why: "Crises without recovery metrics end when PR says they end. Disciplined tracking proves narrative repair and guides continued investment or apology pivots.",
      paragraphs: [
        [
          s("Pre-crisis baseline snapshot enables honest recovery math. "),
          x(
            "Store monthly sentiment, SOV, review score, branded search 12-month rolling. When crisis hits, compare to baseline not arbitrary goals. AI archives baseline automatically — comms activates crisis dashboard.",
            "Inventing baseline during crisis enables premature 'we recovered' claims.",
          ),
          s(" Baseline refresh monthly — crisis dashboard template pre-built."),
        ],
        [
          s("Recovery milestones mix leading and lagging signals. "),
          x(
            "30-day: sentiment velocity stabilised. 60-day: negative theme SOV below crisis peak 50%. 90-day: review score trajectory toward baseline. Lagging: win rate normalisation. Milestones agreed with leadership upfront.",
            "Declaring victory at sentiment plateau while reviews still toxic fails stakeholders.",
          ),
          s(" Public recovery comms aligned to milestone evidence — not wishful."),
        ],
        [
          s("Narrative repair actions logged against metric movement. "),
          x(
            "Track: CEO apology, product fix, policy change, customer compensation programme. Correlate actions to theme sentiment shifts. AI timelines actions vs metrics — post-mortem learns what worked.",
            "Recovery without action linkage repeats same crisis playbook failures.",
          ),
          s(" Crisis post-mortem mandatory — metrics + actions + gaps documented."),
        ],
      ],
      examples: [
        {
          title: "Recovery dashboard — data breach",
          body: "Security incident crisis dashboard tracked sentiment, 'security' theme SOV, and enterprise pipeline stall rate. 90-day milestone: sentiment 85% of baseline, pipeline velocity restored. Board received milestone-based updates — not comms optimism alone.",
        },
        {
          title: "Stalled recovery — review lag",
          body: "Social sentiment recovered 60 days post-crisis but Glassdoor reviews still 0.6 stars below baseline. Identified review surge from affected customers — targeted outreach programme. Full baseline recovery at 120 days — lesson on lagging indicator patience.",
        },
        {
          title: "Post-mortem — action correlation",
          body: "Crisis post-mortem showed sentiment inflection 48 hours after CEO video apology, not press release. Future crisis playbook prioritises video leadership message. Evidence-based playbook update.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Executive Reporting & Narrative Intelligence",
      subtitle: "Dashboards, anomaly narration, and decision-ready briefings — brand data leadership acts on",
      take: "Executive brand reporting distils frameworks into decision-ready narratives: what changed, why it matters, recommended actions, and confidence level. AI drafts briefing narrations and anomaly summaries from dashboards — CMO owns storyline, avoids data dumps, and connects to strategic choices (invest, hold, fix, escalate).",
      why: "Leaders ignore 40-slide brand decks. One-page narrative with clear ask drives resourcing and cross-functional action.",
      paragraphs: [
        [
          s("Report structure: signal, implication, action, ask. "),
          x(
            "Signal: enterprise sentiment -8 pts QoQ. Implication: win rate risk in top segment. Action: proof campaign + sales enablement. Ask: $200K and PMM alignment. AI fills signal from data — CMO edits implication and ask.",
            "Data without ask wastes executive attention.",
          ),
          s(" One-page brand brief monthly for ELT — deep appendix optional."),
        ],
        [
          s("Anomaly detection prioritises executive time. "),
          x(
            "AI flags statistically unusual moves in SOV, sentiment, search, reviews. Only anomalies in brief unless steady positive trend worth celebrating. Reduces noise fatigue.",
            "Reporting everything means highlighting nothing.",
          ),
          s(" Anomaly thresholds calibrated — too many alerts ignored like P1 spam."),
        ],
        [
          s("Cross-functional distribution prevents brand silo. "),
          x(
            "Share theme summaries with product, support, HR as relevant. Brand intelligence is company signal — not comms trophy metrics.",
            "Brand report locked in marketing folder fails organisational learning.",
          ),
          s(" Quarterly cross-functional brand review — themes drive functional OKRs."),
        ],
      ],
      examples: [
        {
          title: "One-page brief — budget win",
          body: "CMO replaced 35-slide brand deck with one-page brief format. ELT discussion time on brand went from 5 minutes to 25; approved competitive SOV investment. CEO cited 'finally understand what you need from us.'",
        },
        {
          title: "Anomaly — search collapse",
          body: "AI anomaly: branded search index down 22% week-over-week. Investigation: paid search campaign paused accidentally. Caught in 3 days vs prior month-long blind spots. Anomaly system paid for itself.",
        },
        {
          title: "Cross-functional theme routing",
          body: "Q3 brief highlighted 'onboarding confusion' theme from reviews and social. CS and product adopted OKR to reduce theme mentions 30%. Q4 theme down 28% — brand measurement drove product priority.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — Reputation Intelligence Investment",
      subtitle: "When to add tools, run studies, or expand metrics — prioritising measurement that drives decisions",
      take: "Before buying monitoring tools, launching new metrics, or commissioning equity studies, run four checks: (1) is metric dictionary and baseline established — definitions before dashboards? (2) are competitor benchmarks and theme taxonomy stable — SOV and sentiment actionable? (3) is commercial linkage attempted — influenced pipeline or win/loss themes? (4) does leadership consume reports — narrative format before tool sprawl? Fix definitions and baseline first. Add tools when taxonomy and alert owners exist. Expand metrics only when current scorecard drives quarterly decisions.",
      why: "AI monitoring vendors sell infinite metrics — tempting teams to measure everything before fixing definitions and executive use. This lens prioritises intelligence that changes strategy.",
      paragraphs: [
        [
          s("Check one: definition and baseline readiness. "),
          x(
            "No metric dictionary → workshop before any new dashboard. No pre-crisis baseline → archive baseline before next launch season.",
            "Tools without definitions produce expensive arguments.",
          ),
          s(" Dictionary gate precedes monitoring vendor renewal or expansion."),
        ],
        [
          s("Check two: taxonomy and benchmark discipline. "),
          x(
            "SOV without competitor set → agree list before tool config. Sentiment without theme owners → assign owners before alert scale.",
            "Unowned alerts become noise — fix taxonomy first.",
          ),
          s(" Taxonomy review annual — competitor and risk landscape shifts."),
        ],
        [
          s("Checks three and four: commercial link and executive use. "),
          x(
            "No influenced pipeline or win/loss theme review → build linkage before equity study spend. ELT ignores brand deck → fix narrative format before adding metrics. Tool sprawl with <50% utilisation → consolidate before new purchase.",
            "Measurement must drive decisions and resourcing — or simplify.",
          ),
          s(" Run lens in annual brand planning and vendor review cycle."),
        ],
      ],
      examples: [
        {
          title: "Vendor consolidation",
          body: "Three overlapping monitoring tools — 40% feature duplication. Lens: dictionary stable, team used one tool 90% of time. Consolidated to single platform; saved $85K; alert quality improved with unified taxonomy.",
        },
        {
          title: "Equity study deferred",
          body: "Requested $120K ad hoc brand study. Lens: tracking wave due in 2 months — duplicate spend. Deferred ad hoc; added module to planned wave. Saved cost; maintained trend continuity.",
        },
        {
          title: "Commercial linkage first",
          body: "CMO wanted SOV dashboard for board. Lens: no win/loss brand themes or influenced pipeline. Built linkage in 60 days first. SOV dashboard launched with commercial context — board approved SOV target tied to pipeline goal.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Board debates 'awareness' numbers that change definition each quarter. What fixes this?",
      options: [
        "Use more data sources for awareness.",
        "Establish a metric dictionary with stable definitions, sources, and calculation rules.",
        "Stop measuring awareness.",
        "Let AI pick the best awareness metric each quarter.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Metric dictionary enables trusted trending. Re-read sections 8.1 and 8.8.",
      wrongFeedback:
        "Define metrics consistently before expanding dashboards. Re-read sections 8.1 and 8.8.",
    },
    {
      q: "Share of voice increased during a product outage, but sentiment crashed. What reporting approach is correct?",
      options: [
        "Celebrate SOV increase in board deck.",
        "Separate volume SOV from sentiment and message SOV — report narrative risk, not volume alone.",
        "Stop tracking SOV.",
        "Only report positive mentions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Message and sentiment context qualify raw SOV. Re-read sections 8.2 and 8.3.",
      wrongFeedback:
        "SOV volume without sentiment context misleads leadership. Re-read sections 8.2 and 8.3.",
    },
    {
      kind: "order",
      q: "Order the reputation intelligence stack from foundation to executive use.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define brand health metrics and baselines",
        "Benchmark SOV and monitor sentiment themes",
        "Link reputation signals to commercial and talent outcomes",
        "Report anomalies with narrative and recommended actions",
      ],
      correctFeedback:
        "Right. Framework → benchmark/monitor → commercial link → executive narrative. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Start with definitions. Executive narrative comes after linkage. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct reputation intelligence layer.",
      categories: ["Framework & equity", "SOV & sentiment", "Commercial & crisis", "Reporting & lens"],
      items: [
        { text: "Stable core questions in tracking waves.", category: 0 },
        { text: "Channel-weighted SOV vs competitor set.", category: 1 },
        { text: "90-day crisis recovery milestones vs baseline.", category: 2 },
        { text: "One-page brief: signal, implication, action, ask.", category: 3 },
        { text: "Velocity alert on negative theme spike.", category: 1 },
        { text: "Win/loss brand theme quarterly review.", category: 2 },
      ],
      correctFeedback:
        "Right. Framework = dictionary and equity. SOV/sentiment = benchmarks and alerts. Commercial/crisis = linkage and recovery. Reporting = narrative and lens. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Match each practice to framework, SOV/sentiment, commercial/crisis, or reporting. Re-read sections 8.1–8.8.",
    },
    {
      q: "Social sentiment recovered 60 days post-crisis but Glassdoor remains depressed. What does recovery tracking imply?",
      options: [
        "Declare crisis over — sentiment is enough.",
        "Continue recovery actions — lagging review indicators need targeted repair before full baseline recovery.",
        "Delete Glassdoor profile.",
        "Only track Twitter sentiment going forward.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Recovery milestones must include lagging indicators. Re-read sections 8.6 and 8.8.",
      wrongFeedback:
        "Lagging review metrics can stall recovery — track multiple milestones. Re-read sections 8.6 and 8.8.",
    },
    {
      q: "Team wants a third monitoring tool before win/loss brand analysis exists. What does the lens prioritise?",
      options: [
        "Buy tool immediately for more data.",
        "Build commercial linkage and metric dictionary before tool sprawl.",
        "Replace all metrics with impressions.",
        "Skip executive reporting until tools are purchased.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Definitions and commercial linkage precede tool expansion. Re-read sections 8.5 and 8.8.",
      wrongFeedback:
        "Fix definitions and commercial linkage before adding tools. Re-read sections 8.5 and 8.8.",
    },
  ],
});
