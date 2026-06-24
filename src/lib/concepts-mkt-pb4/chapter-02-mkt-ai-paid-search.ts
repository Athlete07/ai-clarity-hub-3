import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktAiPaidSearch = buildChapter({
  slug: "mkt-ai-paid-search",
  number: 2,
  shortTitle: "AI in Paid Search",
  title: "AI in Paid Search",
  readingMinutes: 24,
  summary:
    "Google Search ads now run on Smart Bidding, Performance Max, AI-generated RSAs, and audience signals that replace manual keyword micromanagement. Marketers who still optimise keyword by keyword without feeding conversion value, asset variety, and search term governance lose auction efficiency. This chapter covers Smart Bidding mechanics, PMax strategy, keyword architecture, ad copy automation, audience signals, Quality Score in the AI era, search terms discipline, and account structure decisions.",
  keyTakeaway:
    "Paid search success in 2026 is signal quality plus creative asset breadth plus structural clarity — not bid modifier artistry. Control what Google still lets you control: conversions, negatives, RSAs, audience signals, and landing experience.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "Smart Bidding Deep Dive",
      subtitle: "Target CPA, Target ROAS, Maximize Conversions, and when each strategy actually works",
      take: "Smart Bidding uses auction-time signals — device, location, time, query, audience, and context — to set bids per search that manual rules cannot match. Target CPA suits stable lead-gen with consistent value; Target ROAS suits e-commerce with varied margins; Maximize Conversions works during learning with budget caps; Portfolio strategies share budgets across campaigns. Each requires sufficient conversion volume and accurate value assignment — otherwise algorithms chase cheap junk.",
      why: "Wrong bidding strategy or premature automation is the top preventable Google Ads failure. Strategy must follow data maturity, not Google's default recommendations.",
      paragraphs: [
        [
          s("Choose bidding strategy based on conversion volume and value variance — not platform defaults. "),
          x(
            "Below ~30 conversions per 30 days per campaign, use Maximize Clicks with bid caps or Manual CPC with Enhanced CPC. Above threshold, graduate to Target CPA with realistic targets set at 10–20% above recent actuals.",
            "Target ROAS needs clean revenue values in the tag or imported — margin-blind ROAS optimises toward low-ticket SKUs.",
          ),
          s(" Document bidding graduation criteria in your search playbook — when to move each campaign tier."),
        ],
        [
          s("Portfolio bid strategies help low-volume campaigns share learning. "),
          x(
            "Combine related non-brand campaigns into one portfolio Target CPA so micro-campaigns pool conversions. Keep brand separate — goals and CPC dynamics differ.",
            "Portfolio strategies need aligned conversion definitions — mixing demo and purchase events breaks learning.",
          ),
          s(" Review portfolio performance biweekly — one weak campaign can drag shared targets."),
        ],
        [
          s("Seasonality adjustments and conversion adjustments steer Smart Bidding without manual bids. "),
          x(
            "Use seasonality adjustments for known spikes — Black Friday, tax season, conference weeks. Conversion adjustments upweight enterprise form submits if value rules are not yet implemented.",
            "These are the legitimate human levers Google still exposes — use them instead of fighting automation.",
          ),
          s(" Log adjustments in a change diary — prove to leadership why CPA moved."),
        ],
      ],
      examples: [
        {
          title: "Target CPA graduation — B2B SaaS",
          body: "A collaboration SaaS waited until each campaign hit 35 monthly conversions before switching from Enhanced CPC to Target CPA. Targets set at 115% of trailing CPA avoided learning-phase whiplash. Blended non-brand CPA fell 18% over two quarters versus premature Smart Bidding attempts the prior year.",
        },
        {
          title: "Portfolio strategy — regional campaigns",
          body: "A home services franchise pooled twelve city campaigns into one portfolio Target CPA. Individually under-powered campaigns gained auction confidence. National CPA stabilised while city-level reporting still flagged underperformers for landing page fixes.",
        },
        {
          title: "Target ROAS margin fix — e-commerce",
          body: "An electronics retailer fed product-level profit margins into custom conversion values. Target ROAS shifted spend toward high-margin categories automatically. Revenue grew 14% at flat ad spend — ROAS target was right strategy only after value accuracy.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch2-smart-bidding",
      type: "flow",
      title: "Smart Bidding Flow",
      caption:
        "Clean conversion events → audience signals → creative variety → Smart Bidding → human oversight on search terms and structure.",
    }),
    buildSection({
      number: "2.2",
      title: "Performance Max Strategy",
      subtitle: "When PMax helps, when it hurts, and how to run it alongside standard Search",
      take: "Performance Max campaigns serve across Search, Shopping, Display, YouTube, Gmail, and Discover from one asset group structure. Google positions PMax as AI-first prospecting and shopping scale; marketers use it for incremental reach, feed-driven retail, and simplified structure — but sacrifice query-level control. Best practice is hybrid: standard Search for high-intent control, PMax for discovery with strict asset quality and negative keyword lists from insights.",
      why: "All-in PMax without guardrails cannibalises branded search and bleeds spend on low-intent placements. Hybrid architecture preserves accountability.",
      paragraphs: [
        [
          s("Structure asset groups around product lines or message themes — not one catch-all blob. "),
          x(
            "Each asset group needs distinct headlines, descriptions, images, and video aligned to one offer. PMax matches assets to inventory; mixed messages confuse delivery.",
            "Listing groups in Shopping feed campaigns should mirror site taxonomy.",
          ),
          s(" Minimum five headlines, five images, and one video per asset group before launch."),
        ],
        [
          s("Weekly search term and placement insights are mandatory governance. "),
          x(
            "PMax search term insights lag but still surface irrelevant queries for account-level negatives. Placement reports show Display and YouTube spend share.",
            "Brand exclusions prevent PMax from bidding on your branded terms if standard brand campaigns exist.",
          ),
          s(" Set calendar reminder: PMax insights review every Monday."),
        ],
        [
          s("Budget PMax as incremental — measure with geo experiments or holdouts. "),
          x(
            "When PMax launches, total account conversions often rise while standard Search stays flat — true incrementality may be smaller.",
            "Google's PMax benchmarks compare against account history — run your own test cells.",
          ),
          s(" Cap PMax at 30–50% of Google spend until incrementality proven for your category."),
        ],
      ],
      examples: [
        {
          title: "Hybrid Search + PMax — insurance leads",
          body: "An insurance broker kept brand and high-intent 'quote' keywords in standard Search. PMax ran on feed-based comparison pages with asset groups per vertical. Lead volume rose 22%; search term negatives blocked 'free' queries. Hybrid preserved intent control.",
        },
        {
          title: "PMax cannibalisation catch — software trial",
          body: "A SaaS company's PMax absorbed branded search impressions. Brand exclusions and separate brand campaign with impression share monitoring recovered branded efficiency. Lesson: PMax default settings favour Google revenue, not your structure.",
        },
        {
          title: "Retail PMax scale — shopping feed",
          body: "A fashion retailer shifted 60% of Google spend to PMax with strong Merchant Center feed and lifestyle video assets. ROAS beat legacy Shopping + Display silos. Success required feed excellence — PMax amplified good catalog data.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Keyword Strategy in the AI Era",
      subtitle: "Exact match expansion, broad match with Smart Bidding, and theme-based structure",
      take: "Google's AI broadens keyword matching — exact is no longer exact, broad match with Smart Bidding finds queries you would not list manually, and close variants merge intent clusters. Keyword strategy shifts from exhaustive lists to theme buckets: brand, competitor, category, problem-aware, and solution-aware. Negatives and search term reviews matter more than adding long-tail variants Google already matches.",
      why: "Keyword hoarding inflates account complexity without improving learning. Theme-based structure aligns with how Smart Bidding and RSA work.",
      paragraphs: [
        [
          s("Consolidate keywords into intent themes per ad group — avoid single-keyword ad groups at scale. "),
          x(
            "One RSA per tight theme with broad or phrase match plus Smart Bidding captures long-tail automatically.",
            "SKAG structures fight automation — they fragment data and limit RSA learning.",
          ),
          s(" Audit ad groups with fewer than 500 monthly impressions for consolidation candidates."),
        ],
        [
          s("Broad match requires Smart Bidding and negative discipline — never broad alone on manual CPC. "),
          x(
            "Google recommends broad + Smart Bidding for discovery. Pair with account-level negative lists for jobs, free, DIY, and irrelevant geos.",
            "Broad without negatives on lead gen invites resume downloads and student traffic.",
          ),
          s(" Maintain shared negative lists by category — update from search term reports weekly."),
        ],
        [
          s("Competitor and brand keywords need separate strategy and bidding. "),
          x(
            "Brand: defend impression share, usually lower CPA. Competitor: expect higher CPA, test conquesting only with pipeline proof.",
            "Do not mix brand and non-brand in one campaign — Smart Bidding cannot optimise two intents.",
          ),
          s(" Report brand and non-brand separately in every executive dashboard."),
        ],
      ],
      examples: [
        {
          title: "Theme consolidation — HR software",
          body: "An HR tech account reduced from 400 ad groups to 40 theme groups with broad match and Target CPA. Management hours dropped 70%; CPA improved 15% as Smart Bidding pooled learning. Keyword strategy became negative governance.",
        },
        {
          title: "Negative list discipline — legal leads",
          body: "A law firm broad-matched 'personal injury lawyer' with Smart Bidding. Weekly search term reviews built a 2,000-term negative list for irrelevant states and case types. Lead quality rose without shrinking match reach.",
        },
        {
          title: "Competitor conquest test — CRM",
          body: "A CRM vendor tested competitor keywords in isolated campaign with pipeline value offline imports. Competitor CPA was 3x brand but opportunity rate justified spend. Theme separation prevented brand CPA inflation.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "AI-Generated Ad Copy",
      subtitle: "RSAs, AI asset suggestions, and human review for brand and compliance",
      take: "Responsive Search Ads are the default — Google mixes up to fifteen headlines and four descriptions per ad using AI to match queries. Google's AI asset generation and third-party tools draft variants from landing pages and briefs. Marketers supply diverse angles, proof points, and CTAs; AI accelerates volume; humans enforce brand voice, legal claims, and differentiation. Pinning headlines should be rare — over-pinning kills RSA optimisation.",
      why: "Weak RSAs with three similar headlines underperform manual ads. AI copy without strategy produces interchangeable fluff.",
      paragraphs: [
        [
          s("Brief RSAs with distinct angles: pain, proof, product, offer, objection handler. "),
          x(
            "Each headline should stand alone — not repeat 'Best Software 2026' five ways. Include numbers, certifications, and specific outcomes.",
            "Google's Ad Strength rating correlates with asset variety — aim Excellent on money ad groups.",
          ),
          s(" Reject AI drafts that lack specifics — feed landing page URLs and case study stats into prompts."),
        ],
        [
          s("Use pinning only for legal mandatory copy — not for control fetish. "),
          x(
            "Pin headline 1 to brand name if required; pin offer in one description if compliance demands exact wording.",
            "Heavy pinning prevents Google's query-matching AI from working — CPA often rises.",
          ),
          s(" A/B test pinned vs unpinned quarterly on top ad groups — measure CPA impact."),
        ],
        [
          s("Refresh RSA assets before fatigue — monitor asset performance labels. "),
          x(
            "Google labels assets Low, Good, Best. Replace Low performers monthly; add two new headlines per quarter on top campaigns.",
            "AI tools batch-generate replacements from wining headline patterns.",
          ),
          s(" Creative refresh cadence belongs in search ops calendar — not only social."),
        ],
      ],
      examples: [
        {
          title: "RSA Ad Strength — fintech lift",
          body: "A payments company rebuilt RSAs from Average to Excellent by adding twelve unique headlines across pain, integration, and security angles. CTR rose 19%; CPA fell 11% on same keywords. AI suggested variants; compliance approved final set.",
        },
        {
          title: "Over-pinning lesson — healthcare",
          body: "A telehealth advertiser pinned five headlines for 'control'. Impression share held but CPA rose 28%. Unpinned all but required disclaimer. RSA optimisation recovered efficiency — control illusion was expensive.",
        },
        {
          title: "AI copy workflow — agency scale",
          body: "An agency used ChatGPT with client brief templates to draft fifty RSA variants weekly. Editors cut to fifteen and scored brand voice. Production time halved; test velocity doubled across forty accounts.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Audience Signals in Search",
      subtitle: "Customer Match, observation audiences, and optimized targeting with Smart Bidding",
      take: "Search audiences are signals, not fences — with Smart Bidding, observation and optimized targeting modes let Google adjust bids for CRM lists, in-market segments, and remarketing pools without restricting reach. Customer Match uploads improve bidding for known prospects; similar segments extend seed quality. Audience strategy in search supplements keywords; it does not replace them except in Performance Max asset groups.",
      why: "Ignoring audience signals leaves bid intelligence on the table; over-restricting audiences shrinks volume Smart Bidding needs to learn.",
      paragraphs: [
        [
          s("Upload Customer Match and set to observation on standard Search campaigns. "),
          x(
            "Let Smart Bidding see which queries convert from known customers vs cold traffic. Use bid adjustments only if not on fully automated bidding.",
            "Refresh lists weekly from CRM — stale emails reduce match rates.",
          ),
          s(" Track Customer Match match rates in Google Ads audience manager."),
        ],
        [
          s("Use optimized targeting in PMax asset groups with seed lists. "),
          x(
            "Add Customer Match, website visitors, and custom segments as audience signals — PMax uses them as hints, not hard targets.",
            "Signals differ from Display remarketing — they inform cross-channel delivery.",
          ),
          s(" Document which lists feed which asset groups — avoid duplicate signals across groups."),
        ],
        [
          s("Exclude converters and low-value segments from prospecting. "),
          x(
            "Add recent purchasers and existing subscribers as exclusions on acquisition campaigns.",
            "B2B: exclude customers and open-opportunity accounts from top-of-funnel.",
          ),
          s(" Sync exclusions from CRM automatically where possible."),
        ],
      ],
      examples: [
        {
          title: "Customer Match observation — enterprise SaaS",
          body: "An analytics platform added target account emails as observation audiences on non-brand Search. Smart Bidding implicitly bid higher on queries from matched firms. Pipeline from named accounts rose without separate campaign bloat.",
        },
        {
          title: "PMax audience signals — DTC repeat buyers",
          body: "A supplement brand seeded PMax with high-LTV buyer list plus cart abandoners as signals. New customer ROAS held while repeat purchase rate in blended metrics improved — signals steered without excluding cold traffic.",
        },
        {
          title: "Exclusion hygiene — subscription churn",
          body: "A streaming service excluded active subscribers from acquisition campaigns. Wasted spend on 'cancel subscription' queries dropped 12%. Audience exclusions are search governance, not just Display tactic.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Quality Score and AI",
      subtitle: "Expected CTR, ad relevance, and landing experience when algorithms set bids",
      take: "Quality Score still influences ad rank and auction eligibility — expected CTR, ad relevance, and landing experience matter even under Smart Bidding. AI-generated RSAs and broad match raise the bar for relevance: ads must match query intent clusters, and landing pages must load fast with message match. Low Quality Score increases effective CPCs and limits impression share — algorithms cannot fully compensate for poor experience.",
      why: "Teams blame bidding when landing pages and ad relevance are the bottleneck. Quality Score diagnostics remain the free audit Google gives you.",
      paragraphs: [
        [
          s("Diagnose Quality Score components before restructuring campaigns. "),
          x(
            "Filter keywords Below Average on expected CTR or ad relevance. Fix RSAs and query mapping before bid strategy changes.",
            "Landing page experience Below Average needs speed, mobile UX, and message match — not more keywords.",
          ),
          s(" Export QS report monthly for ad groups above $1k spend."),
        ],
        [
          s("Message match landing pages to ad group themes — not one generic homepage. "),
          x(
            "Dedicated landing pages per theme improve conversion rate and Quality Score. Dynamic keyword insertion in headlines helps relevance when used honestly.",
            "AI landing page builders accelerate variant creation — test against control.",
          ),
          s(" Core Web Vitals and mobile speed are paid search requirements — check Search Console and PageSpeed."),
        ],
        [
          s("Ad relevance rises with RSA diversity aligned to search themes. "),
          x(
            "Include query-language variants in headlines where accurate — 'AP automation' vs 'accounts payable software' for same ad group theme.",
            "Semantic coverage beats exact-string repetition for BERT-era relevance.",
          ),
          s(" Pair QS fixes with search term reviews — relevance is query-ad-LP triangle."),
        ],
      ],
      examples: [
        {
          title: "Landing page speed — QS recovery",
          body: "A B2B site's mobile LCP was 4.2s on paid landing pages. Below Average landing experience suppressed impression share. CDN and image compression cut LCP to 2.1s; CPA fell 16% without bid changes.",
        },
        {
          title: "Theme LP split — insurance quotes",
          body: "An insurer sent all search traffic to homepage. Theme LPs for auto, home, and life raised average QS from 5 to 7. CPCs dropped; same Smart Bidding targets delivered more volume.",
        },
        {
          title: "RSA relevance fix — below average CTR",
          body: "Keywords flagged Below Average expected CTR received new headline sets with query-specific proof points. Ad Strength went to Excellent; CTR recovered in two weeks. QS followed CTR.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Search Terms Management",
      subtitle: "Query mining, negatives, and the human oversight Smart Bidding cannot replace",
      take: "Search terms reports show what users actually typed before clicking. Smart Bidding optimises toward converting queries but does not know which conversions are junk — humans must negate irrelevant intent, add high performers as themes, and catch brand leakage. PMax insights require the same discipline with delay. Search term management is the highest-ROI weekly task in automated search accounts.",
      why: "Neglecting search terms for 'AI handles it' invites wasted spend on irrelevant queries and trains algorithms on bad conversions.",
      paragraphs: [
        [
          s("Run weekly search term reviews on campaigns with broad or phrase match. "),
          x(
            "Flag queries with spend and zero conversions, irrelevant intent, or wrong geo. Add as account-level or campaign-level negatives.",
            "Use n-gram analysis in scripts or tools like Optmyzr for pattern negatives.",
          ),
          s(" Assign owner — search term review is a person, not a setting."),
        ],
        [
          s("Promote winning queries to themes — do not keyword-stuff ad groups. "),
          x(
            "High-converting novel queries inform new RSA copy angles or new asset groups in PMax — not necessarily new exact keywords.",
            "Document insights in creative briefs for cross-channel use.",
          ),
          s(" Share top new queries with SEO — paid reveals intent SEO should capture organically."),
        ],
        [
          s("Align search terms with conversion quality feedback. "),
          x(
            "A query converting to unqualified leads should be negated even if CPA looks good.",
            "Import offline disqualification data to inform negative decisions.",
          ),
          s(" Sales feedback loop: monthly 'junk lead queries' list from SDRs."),
        ],
      ],
      examples: [
        {
          title: "N-gram negatives — EdTech cleanup",
          body: "An EdTech advertiser used n-gram analysis and found 'free', 'salary', and 'course torrent' patterns wasting 18% of spend. Account-level negative patterns cut junk leads 40% while conversion volume held.",
        },
        {
          title: "PMax insight negatives — B2B software",
          body: "PMax search insights revealed spend on consumer 'personal budget app' queries. Account negatives and asset group message shift fixed leakage. Weekly PMax review became mandatory.",
        },
        {
          title: "SDR feedback loop — cybersecurity",
          body: "SDRs flagged 'entry-level certification' leads as unqualified. Those search terms were negated despite low platform CPA. Pipeline quality rose; finance approved higher CPAs on qualified terms.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Account Structure Lens",
      subtitle: "Six checks before restructuring Google Ads or signing agency search SOWs",
      take: "Before major account restructure, run six checks: (1) Are bidding strategies matched to conversion volume? (2) Is PMax incremental with guardrails, not cannibalising brand? (3) Are keywords organised by intent themes? (4) Do RSAs have Excellent-level variety? (5) Are audience signals and exclusions current? (6) Is weekly search term ownership assigned? Structure serves learning and governance — not aesthetic complexity.",
      why: "Annual 'account restructures' often reset learning without fixing signals. This lens prioritises what moves CPA.",
      paragraphs: [
        [
          s("Checks one and two: bidding and PMax hygiene. "),
          x(
            "If campaigns lack conversion volume, restructure to consolidate — do not split further.",
            "PMax needs brand exclusions and insight review cadence before budget increase.",
          ),
          s(" No restructure without trailing 90-day conversion data per proposed campaign."),
        ],
        [
          s("Checks three and four: keywords and creative assets. "),
          x(
            "Theme consolidation beats SKAG nostalgia.",
            "RSA Ad Strength on top 80% spend ad groups should be Good or Excellent.",
          ),
          s(" Structure changes must include negative list migration plan."),
        ],
        [
          s("Checks five and six: audiences and search terms. "),
          x(
            "Customer Match refresh date within 7 days.",
            "Named owner for weekly search term and PMax insight reviews.",
          ),
          s(" Run six-check lens before QBR and agency performance reviews."),
        ],
      ],
      examples: [
        {
          title: "Restructure pause — learning protection",
          body: "An agency proposed 200-campaign restructure mid-quarter. Six-check revealed low volume per campaign and no search term owner. Client deferred split, consolidated to twelve campaigns. CPA improved 14% — patience beat churn.",
        },
        {
          title: "RSA gate — launch checklist",
          body: "A DTC brand blocked new campaign launch until RSA Ad Strength reached Good. Early launches with thin assets had failed. Gate saved three months of learning waste.",
        },
        {
          title: "Search term owner — role clarity",
          body: "Assigning a dedicated search term reviewer saved a lead-gen account $120k annualised on negatives. Six-check item six became a job responsibility, not a suggestion.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A campaign averages 12 conversions per month. Best bidding approach before full Smart Bidding?",
      options: [
        "Target ROAS immediately.",
        "Manual CPC or Maximize Clicks with caps until volume supports Target CPA.",
        "Portfolio Target CPA across fifty campaigns.",
        "Disable conversion tracking.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Smart Bidding needs sufficient conversion volume. Re-read section 2.1.",
      wrongFeedback:
        "Low volume campaigns need consolidated learning or manual bidding first. Re-read section 2.1.",
    },
    {
      kind: "order",
      q: "Order the PMax governance workflow from setup to ongoing management.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Build themed asset groups with full creative assets",
        "Set brand exclusions and budget caps",
        "Launch alongside standard Search for high-intent control",
        "Review search term and placement insights weekly",
        "Add account-level negatives from insights",
        "Measure incrementality before increasing PMax share",
      ],
      correctFeedback:
        "Right. Assets → guardrails → hybrid launch → insights → negatives → proof. Re-read section 2.2.",
      wrongFeedback:
        "PMax requires guardrails and insight reviews — not set-and-forget. Re-read section 2.2.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into modern AI-era search vs legacy SKAG-era thinking.",
      categories: ["AI-era search", "Legacy SKAG-era"],
      items: [
        { text: "Theme-based ad groups with broad match and Smart Bidding.", category: 0 },
        { text: "One keyword per ad group with exact match only.", category: 1 },
        { text: "Weekly search term negative reviews.", category: 0 },
        { text: "Hourly keyword bid adjustments per term.", category: 1 },
        { text: "RSA with diverse headline angles.", category: 0 },
        { text: "Pinning all RSA headlines for control.", category: 1 },
      ],
      correctFeedback:
        "Right. Modern search emphasises themes, RSAs, and governance. Re-read sections 2.3 and 2.4.",
      wrongFeedback:
        "SKAG and heavy pinning fight Smart Bidding and RSA AI. Re-read sections 2.3 and 2.4.",
    },
    {
      q: "RSA Ad Strength is Poor with three similar headlines. Best fix?",
      options: [
        "Pin one headline and pause RSAs.",
        "Add diverse angles — pain, proof, offer — aiming for Excellent variety.",
        "Switch all keywords to broad match only.",
        "Remove all descriptions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. RSA performance needs asset variety. Re-read section 2.4.",
      wrongFeedback:
        "Weak RSA assets limit AI matching — expand headline diversity. Re-read section 2.4.",
    },
    {
      q: "PMax spends heavily on irrelevant 'free template' queries. First action?",
      options: [
        "Increase PMax budget.",
        "Add account-level negative keywords from search term insights.",
        "Delete all standard Search campaigns.",
        "Ignore because PMax is fully automated.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Search term governance applies to PMax via insights and negatives. Re-read sections 2.2 and 2.7.",
      wrongFeedback:
        "PMax still needs human oversight on query quality. Re-read sections 2.2 and 2.7.",
    },
    {
      kind: "categorize",
      q: "Classify each lever as Smart Bidding input vs outdated manual bid tactic.",
      categories: ["Smart Bidding input", "Outdated manual tactic"],
      items: [
        { text: "Customer Match observation audiences.", category: 0 },
        { text: "Device bid modifier -50% on mobile.", category: 1 },
        { text: "Conversion value rules for enterprise leads.", category: 0 },
        { text: "Keyword-level bid changes twice daily.", category: 1 },
        { text: "Seasonality adjustment for peak week.", category: 0 },
        { text: "Geo bid modifiers for every city.", category: 1 },
      ],
      correctFeedback:
        "Right. Feed signals and adjustments; avoid manual bid micromanagement. Re-read sections 2.1 and 2.5.",
      wrongFeedback:
        "Smart Bidding uses auction-time signals — not spreadsheet bid tweaks. Re-read sections 2.1 and 2.5.",
    },
  ],
});
