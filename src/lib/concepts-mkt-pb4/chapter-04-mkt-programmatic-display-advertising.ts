import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktProgrammaticDisplayAdvertising = buildChapter({
  slug: "mkt-programmatic-display-advertising",
  number: 4,
  shortTitle: "Programmatic & Display Advertising",
  title: "Programmatic & Display Advertising",
  readingMinutes: 24,
  summary:
    "Programmatic advertising automates buying across exchanges, DSPs, and supply paths — with AI bidding, dynamic creative, and audience onboarding replacing insertion-order negotiations. Display, video, native, and CTV inventory flows through real-time auctions governed by first-party data, contextual signals, and brand safety rules. This chapter explains how programmatic works, AI bidding in DSPs, DCO, post-cookie targeting, brand safety, CTV, reporting honesty, and investment criteria.",
  keyTakeaway:
    "Programmatic success is stack literacy plus data hygiene plus inventory quality — not set-and-forget banners. Marketers win by curating supply paths, feeding conversion signals to DSP AI, and measuring incrementality on display and CTV.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "How Programmatic Works",
      subtitle: "DSPs, SSPs, exchanges, ad servers, and the real-time bidding flow marketers must understand",
      take: "Programmatic connects advertisers through a DSP to publisher inventory via SSPs and ad exchanges in milliseconds. A user loads a page; bid requests flow; the DSP evaluates audience, context, and goal; the highest eligible bid wins; the ad serves. Marketers set campaign goals, budgets, creatives, audiences, and brand safety — algorithms execute bids. Understanding the stack prevents opaque fees, MFA inventory, and duplicate data costs.",
      why: "You cannot govern what you cannot map. Programmatic waste often hides in supply path complexity and unclear vendor roles.",
      paragraphs: [
        [
          s("Map your programmatic supply path from advertiser to impression. "),
          x(
            "List DSP (The Trade Desk, DV360, Amazon DSP), any managed service layer, data onboarders, ad server (CM360, Flashtalking), and verification (IAS, DoubleVerify).",
            "Each hop may add cost and latency — consolidate where quality allows.",
          ),
          s(" Annual supply path audit: who touches each dollar of programmatic spend?"),
        ],
        [
          s("Deal types balance control and scale: open auction, PMP, programmatic guaranteed. "),
          x(
            "Open exchange maximises reach; private marketplace deals secure premium publisher access; PG fixes price and volume for tentpole campaigns.",
            "AI bidding works across deal types — but inventory quality differs materially.",
          ),
          s(" Tier inventory strategy: PG for premium video, PMP for trusted publishers, open for scale retargeting."),
        ],
        [
          s("Ad serving and creative trafficking sit outside the bid — but affect measurement. "),
          x(
            "CM360 tracks impressions and clicks; DSP tracks bids and wins. Align naming conventions and UTM parameters for clean reporting.",
            "Creative approval workflows prevent last-minute launch delays on DCO sets.",
          ),
          s(" Document trafficking checklist — creative specs, pixels, click tags, brand safety applied."),
        ],
      ],
      examples: [
        {
          title: "Supply path simplification — CPG brand",
          body: "A CPG marketer discovered three reseller paths to the same exchange inventory. Consolidating to direct DSP seat reduced CPM 11% and improved win-rate transparency. Stack literacy saved media without cutting reach.",
        },
        {
          title: "PMP premium news — financial services",
          body: "A bank combined open exchange retargeting with PMP deals on top financial publishers via DV360. Brand suitability rose; viewability exceeded open exchange by 22 points. Deal type strategy matched funnel stage.",
        },
        {
          title: "Trafficking error catch — pixel misfire",
          body: "A B2B campaign launched with DSP conversion pixel on wrong event — AI optimised toward page views. CM360 vs DSP reconciliation caught issue day three. Stack understanding shortened failure window.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch4-programmatic-stack",
      type: "nested",
      title: "Programmatic Stack",
      caption:
        "DSP bidding, DCO creative, first-party audiences, and brand safety layers stack into every programmatic buy.",
    }),
    buildSection({
      number: "4.2",
      title: "AI Bidding in DSPs",
      subtitle: "Goal-based bidding, Koa, bid strategies, and conversion signal requirements",
      take: "DSPs use machine learning for goal-based or performance bidding — The Trade Desk's Koa, DV360 automated bidding, and Amazon DSP's optimization toward CPA or ROAS. Algorithms evaluate bid request features, audience match, historical conversion probability, and creative performance. Like Google Smart Bidding, DSP AI needs conversion volume, accurate attribution windows, and unified pixel implementation — otherwise it optimises toward cheap clicks.",
      why: "Switching from manual CPM deals to AI bidding without signal readiness repeats search's early automation mistakes at display scale.",
      paragraphs: [
        [
          s("Implement unified conversion tracking across display, video, and site. "),
          x(
            "DSP pixels or Floodlight activities must fire on valuable events — purchase, lead, qualified action. Align view-through windows with sales cycle.",
            "Cross-device graphing improves when first-party logged-in data exists.",
          ),
          s(" Minimum monthly conversions per line item varies by DSP — confirm threshold before goal-based bidding."),
        ],
        [
          s("Choose optimisation goals that match business outcomes — not proxy metrics. "),
          x(
            "Optimise toward CPA on lead gen only if CRM feedback confirms lead quality. ROAS for e-commerce with cart value in pixel.",
            "Maximize clicks is for learning-only budgets.",
          ),
          s(" Quarterly goal review with finance — proxy metrics drift."),
        ],
        [
          s("Layer frequency caps and bid floors as guardrails on AI bidding. "),
          x(
            "Algorithms chase converters — frequency can explode on small retargeting pools.",
            "Bid floors prevent race to bottom MFA inventory when CPA targets aggressive.",
          ),
          s(" Monitor win rate and CPM alongside CPA — diagnosing auction dynamics."),
        ],
      ],
      examples: [
        {
          title: "Koa goal-based — automotive retargeting",
          body: "An automotive brand enabled Koa Optimizations on retargeting with configurator completion as conversion. CPA per qualified lead fell 19% vs rule-based bidding. Required clean Floodlight tags and 500+ monthly conversions.",
        },
        {
          title: "DV360 CPA — travel booking",
          body: "A travel company switched display prospecting to tCPA after pixel stabilised booking value. AI shifted spend toward evening mobile inventory converting above average. Manual placement bets never found the pattern.",
        },
        {
          title: "Wrong goal lesson — pageview optimisation",
          body: "A SaaS vendor optimised toward page views — CPL looked great, pipeline empty. Reconfigured to qualified lead event with offline import. CPA rose on paper; pipeline CPA halved. Goal selection was the lever.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Dynamic Creative Optimization",
      subtitle: "DCO components, feeds, and personalised display at scale",
      take: "DCO assembles ad creative from templates plus data feeds — product images, prices, locations, offers — per impression. Travel, retail, finance, and automotive use DCO heavily. AI selects best component combinations based on engagement and conversion signals. Marketers supply modular assets, feed accuracy, and fallback rules; broken feeds show empty frames and erode trust.",
      why: "DCO is programmatic's creative-as-targeting equivalent — relevance scales only when data and design systems are modular.",
      paragraphs: [
        [
          s("Build creative templates with swappable components — headline, image, price, CTA, legal. "),
          x(
            "Design systems define safe zones for dynamic text length. Product catalog feeds must match live site pricing.",
            "Flashtalking, Celtra, and native DSP DCO tools each have spec requirements.",
          ),
          s(" Feed QA automation — alert on missing images or stale prices before serve."),
        ],
        [
          s("Segment DCO rules by audience and context. "),
          x(
            "Retargeting shows viewed products; prospecting shows bestsellers; geo variants show nearest store.",
            "Weather and event triggers add relevance — with brand approval on automation rules.",
          ),
          s(" Document rule logic — black-box DCO still needs human-readable strategy."),
        ],
        [
          s("Test static hero vs DCO on same audience before full swap. "),
          x(
            "DCO wins when catalog breadth and personalisation matter; static wins when brand story is singular.",
            "Measure incrementality — DCO CPMs often run higher.",
          ),
          s(" Archive component performance — which product shots and headlines win?"),
        ],
      ],
      examples: [
        {
          title: "Retail DCO — cart abandon",
          body: "A fashion retailer DCO retargeting pulled live inventory and applied dynamic discount tiers. ROAS beat static retargeting 1.4x. Feed sync with Shopify every fifteen minutes prevented out-of-stock embarrassments.",
        },
        {
          title: "Travel feed — geo personalisation",
          body: "An airline DCO campaign swapped destination imagery by user's nearest hub airport from first-party data. CTR rose 35% vs generic creative. Component rules documented for seasonal updates.",
        },
        {
          title: "Broken feed fire drill — auto parts",
          body: "A parts retailer DCO showed '$0.00' on 200 SKUs after feed mapping error. Automated QA alert now runs hourly. DCO governance is ops discipline, not set-and-forget.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Audience Targeting Post-Cookie",
      subtitle: "First-party segments, contextual AI, seller-defined audiences, and clean rooms",
      take: "Third-party cookie deprecation pushes programmatic toward first-party onboarded segments, contextual targeting revived by NLP, publisher seller-defined audiences, and data clean rooms for matched insights. DSPs integrate CRM, loyalty, and retail media data. Contextual AI reads page content and video transcripts for brand-safe relevance without personal IDs. Marketers blend pools — no single replacement for deprecated cookies exists.",
      why: "Programmatic prospecting without first-party or contextual strategy faces shrinking reach and rising CPMs.",
      paragraphs: [
        [
          s("Onboard first-party segments with identity partners and refresh frequently. "),
          x(
            "LiveRamp, UID2 where consented, retailer IDs, and loyalty programs extend addressability.",
            "Segment by value and intent stage — not one blob 'website visitors'.",
          ),
          s(" Match rates and consent status dashboard monthly."),
        ],
        [
          s("Contextual AI targets content adjacency — not keywords from 2010. "),
          x(
            "IAS, DoubleVerify, Oracle Contextual Intelligence, and DSP native contextual classify page semantics and sentiment.",
            "Suitability for finance differs from reach maximisation — set tiers explicitly.",
          ),
          s(" Combine contextual prospecting with first-party retargeting in full-funnel plans."),
        ],
        [
          s("Clean rooms enable aggregated partner insights without raw PII export. "),
          x(
            "Advertiser and publisher or retailer match in AWS Clean Rooms, Habu, or platform-native tools for overlap and attribution.",
            "Legal and technical setup is heavy — reserve for strategic partnerships.",
          ),
          s(" Pilot one clean room use case before enterprise rollout."),
        ],
      ],
      examples: [
        {
          title: "Contextual prospecting — B2B tech",
          body: "A devtools company replaced third-party intent segments with contextual bundles on developer documentation and CI/CD articles. CPL within 10% of cookie-era baseline with better brand safety. Contextual AI carried intent signal.",
        },
        {
          title: "Retail media onboarding — CPG",
          body: "A CPG brand onboarded loyalty card segments via retailer DSP. Lookalike prospecting on open web used retailer seed. First-party collaboration beat deprecated cookie segments on ROAS.",
        },
        {
          title: "Clean room pilot — telecom and streaming",
          body: "A telecom advertiser matched subscriber overlap with streaming inventory in clean room. Refined CTV frequency caps for existing customers. Post-cookie targeting became partnership problem, not only tech.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Brand Safety",
      subtitle: "MFA avoidance, inclusion lists, verification tools, and suitability vs reach",
      take: "Brand safety blocks ads from appearing alongside harmful, fraudulent, or off-brand content. Made-for-advertising sites, hate speech, and low-quality AI content farms drain budgets. Tools like IAS, DoubleVerify, and MOAT score inventory; DSP exclusion lists and inclusion lists curate supply. Over-aggressive blocking reduces reach; under-blocking risks reputation crises. Suitability tiers should match campaign type — performance retargeting vs flagship brand launch differ.",
      why: "Programmatic's scale cuts both ways — without safety governance, AI bidding optimises toward cheap junk inventory.",
      paragraphs: [
        [
          s("Maintain exclusion lists: MFA domains, user-generated risk, geopolitical sensitivity. "),
          x(
            "Review quarterly placement reports from DSP and verification vendor. Industry MFA lists update frequently.",
            "Category exclusions for news tragedy and UGC platforms when brand sensitive.",
          ),
          s(" Subscribe to TAG Certified Against Fraud standards for partners."),
        ],
        [
          s("Inclusion lists for premium campaigns — explicit allow, not only block. "),
          x(
            "Top publisher PMP deals and curated bundles trade reach for certainty.",
            "Brand campaigns may accept higher CPM for known environments.",
          ),
          s(" Document suitability tier per campaign type in media policy."),
        ],
        [
          s("Verification metrics in reporting — viewability, invalid traffic, brand risk incidents. "),
          x(
            "Block rates without impression volume context mislead — track incident rate per million impressions.",
            "Align agency guarantees to verified metrics, not DSP self-report alone.",
          ),
          s(" Brand safety review in monthly programmatic QBR."),
        ],
      ],
      examples: [
        {
          title: "MFA purge — consumer goods",
          body: "IAS flagged 14% of impressions on MFA sites after AI bidding scaled. Domain exclusion list update and bid floor raise cut MFA to under 2%. CPA rose slightly; brand team approved tradeoff.",
        },
        {
          title: "Inclusion list launch — luxury brand",
          body: "A luxury watchmaker ran display only on 200-domain inclusion list plus PG video. Reach dropped 60%; brand suitability incidents zero. Campaign goal was halo, not cheapest CPA.",
        },
        {
          title: "News adjacency policy — insurance",
          body: "An insurer used DoubleVerify tragedy exclusion on open exchange but allowed trusted finance news via PMP. Balanced reach and suitability — blanket news block had over-suppressed performance.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Connected TV",
      subtitle: "CTV programmatic, household targeting, and measuring streaming TV ads",
      take: "CTV delivers video ads on streaming platforms — Hulu, Peacock, FAST channels — bought programmatically via DSPs with data-driven linear and household-level targeting. AI optimises frequency across devices and measures via IP-based attribution, lift studies, and MMM. CTV bridges brand and performance — upper funnel with downstream search and site lift. Creative must be TV-quality; 15s and 30s spots need QR codes or clear search prompts for attribution.",
      why: "Linear TV budgets shift to CTV — marketers need programmatic video literacy separate from display banners.",
      paragraphs: [
        [
          s("Buy CTV through DSP with premium supply paths — avoid low-quality app bundles. "),
          x(
            "Curated CTV marketplaces, publisher direct, and verified OTT lists reduce fraud.",
            "Frequency caps across household IDs prevent annoyance on shared devices.",
          ),
          s(" Separate CTV reporting line — do not blend with display metrics in dashboards."),
        ],
        [
          s("Creative adaptation for streaming — not repurposed tiny banners. "),
          x(
            "15-second vertical and horizontal cuts; loudness standards; end-card with memorable URL or QR.",
            "AI video tools resize and caption linear assets for CTV specs.",
          ),
          s(" Test brand lift and site traffic lift — CTV attribution is multi-week."),
        ],
        [
          s("Integrate CTV with search and retargeting for full-funnel coherence. "),
          x(
            "Exposure audiences retarget on display and search brand campaigns. MMM captures CTV assist over quarters.",
            "Immediate ROAS expectations undervalue CTV — set KPIs by campaign role.",
          ),
          s(" Document CTV role in media mix model — brand vs performance."),
        ],
      ],
      examples: [
        {
          title: "CTV + search lift — DTC mattress",
          body: "A DTC mattress brand ran CTV on The Trade Desk with Amazon audience data. Branded search rose 28% in exposed geos vs holdout. CPA on Google brand improved — CTV assist visible in geo test.",
        },
        {
          title: "QR end-card — regional QSR",
          body: "A quick-service restaurant added QR to CTV spot linking to mobile offer. Direct response signal supplemented view-through. Creative designed for second-screen behavior.",
        },
        {
          title: "Premium supply — pharma brand safety",
          body: "A pharma marketer bought CTV only via publisher PG deals and health-tier contextual. CPM premium accepted. Zero suitability incidents — CTV governance mirrored brand TV standards.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Programmatic Reporting",
      subtitle: "Reconciling DSP, ad server, analytics, and the honesty gap in view-through credit",
      take: "Programmatic reporting splinters across DSP dashboards, CM360, GA4, and verification vendors — numbers rarely match. View-through conversions inflate channel credit; cross-device gaps undercount. Marketers build reconciliation routines, label metrics by source, and triangulate with incrementality tests. Reporting honesty prevents display from being cut for wrong reasons — or kept for wrong reasons.",
      why: "CFO-ready reporting requires discipline programmatic platforms will not provide out of the box.",
      paragraphs: [
        [
          s("Weekly reconcile impressions, clicks, and conversions across DSP and ad server. "),
          x(
            "Discrepancy thresholds trigger trafficking audits — wrong pixels, duplicate tags, timezone mismatches.",
            "UTM discipline on click-through paths aids GA4 alignment.",
          ),
          s(" Reconciliation template with acceptable variance bands per metric."),
        ],
        [
          s("Separate view-through and click-through reporting in leadership decks. "),
          x(
            "View-through dominates display — show both but decide which optimises bidding vs which proves finance value.",
            "Align view-through window to category research cycle.",
          ),
          s(" Finance agrees official attribution window document."),
        ],
        [
          s("Incrementality and MMM validate programmatic contribution quarterly. "),
          x(
            "Geo holdouts, PSA tests, and vendor MMM show true lift beyond last-touch dashboards.",
            "Display and CTV often assist — multi-touch models in analytics show assist paths.",
          ),
          s(" Programmatic QBR includes verification metrics and incrementality summary."),
        ],
      ],
      examples: [
        {
          title: "Discrepancy root cause — duplicate floodlight",
          body: "DSP reported 2x conversions vs CM360 — duplicate Floodlight activities fired on SPA route change. Fix clarified true CPA; bidding AI retrained on accurate volume. Reporting hygiene was technical SEO for ads.",
        },
        {
          title: "View-through policy — B2B split",
          body: "A B2B company reported click-through only to sales; view-through shown separately to media team for optimisation. Politics settled; budget decisions improved. Transparency reduced channel warfare.",
        },
        {
          title: "MMM cut display — then restore",
          body: "Annual MMM suggested cutting display 40%. Geo holdout showed 18% true pipeline lift missed by last-click. Restored half the cut — reporting stack prevented costly error.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Investment Criteria Lens",
      subtitle: "Six checks before scaling programmatic, CTV, or signing DSP agency contracts",
      take: "Before increasing programmatic investment, run six checks: (1) Is supply path mapped and simplified? (2) Are DSP conversion goals aligned to business value? (3) Is DCO feed and template QA live? (4) Do first-party and contextual audiences replace cookie dependence? (5) Are brand safety tiers defined per campaign? (6) Does reporting reconcile and triangulate incrementality? Programmatic rewards operational maturity.",
      why: "Programmatic fails when treated as banner wallpaper — these checks ensure AI bidding and DCO have foundation.",
      paragraphs: [
        [
          s("Checks one and two: stack and bidding goals. "),
          x(
            "Unknown supply hops tax every impression.",
            "Pageview optimisation disguises weak strategy — fix goals before scaling.",
          ),
          s(" No programmatic scale-up without supply map and conversion definition sign-off."),
        ],
        [
          s("Checks three and four: creative data and audiences. "),
          x(
            "DCO without feed QA risks public errors.",
            "Cookie-era segments need first-party or contextual replacement plan.",
          ),
          s(" Audience transition roadmap dated — not 'we'll figure out cookies later'."),
        ],
        [
          s("Checks five and six: safety and measurement. "),
          x(
            "Suitability tier per campaign documented.",
            "Monthly reconciliation and quarterly incrementality on material spend.",
          ),
          s(" Run lens in annual agency RFP and budget planning."),
        ],
      ],
      examples: [
        {
          title: "RFP six-check — DSP selection",
          body: "A marketer used six-check lens in DSP RFP. One vendor lacked verification integration; another lacked clean room roadmap. Winner aligned on safety and measurement — not lowest CPM promise.",
        },
        {
          title: "DCO gate — retail launch",
          body: "Black Friday DCO blocked until feed QA passed three dry runs. Prior year error cost $40k in wasted spend and customer complaints. Check three became mandatory launch gate.",
        },
        {
          title: "CTV incrementality — budget proof",
          body: "CTV budget doubled only after geo lift study showed branded search lift. Lens check six prevented faith-based CTV scaling. Finance trusted programmatic video line.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "DSP AI bidding optimises toward cheap page views while pipeline stays flat. First fix?",
      options: [
        "Increase CPM bid floors only.",
        "Reconfigure conversion goals toward qualified business outcomes with accurate pixels.",
        "Add more MFA inventory.",
        "Disable all verification.",
      ],
      correct: 1,
      correctFeedback:
        "Right. DSP AI follows the goal you give it — fix conversion definition. Re-read section 4.2.",
      wrongFeedback:
        "Wrong optimisation goal trains bad bidding. Re-read section 4.2.",
    },
    {
      kind: "order",
      q: "Order the programmatic campaign launch workflow from foundation to optimisation.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Map supply path and verification partners",
        "Implement conversion tracking aligned to business goals",
        "Configure audiences — first-party and contextual",
        "Apply brand safety tiers and exclusion lists",
        "Launch with goal-based bidding and frequency caps",
        "Reconcile reporting and run incrementality tests",
      ],
      correctFeedback:
        "Right. Stack → tracking → audiences → safety → bidding → measurement proof. Re-read sections 4.1 and 4.2.",
      wrongFeedback:
        "Tracking and safety precede scaled AI bidding. Re-read sections 4.1 and 4.2.",
    },
    {
      kind: "categorize",
      q: "Sort each tactic into post-cookie programmatic vs deprecated cookie-era reliance.",
      categories: ["Post-cookie programmatic", "Deprecated cookie-era"],
      items: [
        { text: "Contextual AI on developer documentation sites.", category: 0 },
        { text: "Third-party cookie retargeting pools only.", category: 1 },
        { text: "First-party CRM segments onboarded via LiveRamp.", category: 0 },
        { text: "Unlimited open exchange without MFA exclusions.", category: 1 },
        { text: "Retailer loyalty data in clean room partnership.", category: 0 },
        { text: "Buying inventory without verification or suitability tiers.", category: 1 },
      ],
      correctFeedback:
        "Right. First-party, contextual, and curated supply replace cookie arbitrage. Re-read sections 4.4 and 4.5.",
      wrongFeedback:
        "Cookie-dependent open exchange without safety is legacy risk. Re-read sections 4.4 and 4.5.",
    },
    {
      q: "DCO campaign shows wrong prices on live ads. Most likely root cause?",
      options: [
        "AI bidding too aggressive.",
        "Product feed mapping or sync failure — fix QA before scaling.",
        "Remove all dynamic creative.",
        "Switch to CTV only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. DCO depends on feed accuracy and QA discipline. Re-read section 4.3.",
      wrongFeedback:
        "Dynamic creative fails on broken feeds — governance first. Re-read section 4.3.",
    },
    {
      q: "Luxury brand launch prioritises suitability over cheapest reach. Best inventory approach?",
      options: [
        "Open exchange maximize reach.",
        "Inclusion lists, PMP premium publishers, and verification-heavy tiers.",
        "Remove all brand safety blocks.",
        "MFA sites for low CPM.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Brand safety tiers match campaign goals — inclusion for premium. Re-read section 4.5.",
      wrongFeedback:
        "Premium brand campaigns trade reach for suitability. Re-read section 4.5.",
    },
    {
      kind: "categorize",
      q: "Match each channel to its primary programmatic role.",
      categories: ["Display programmatic", "CTV programmatic"],
      items: [
        { text: "DCO retargeting with product catalog feed.", category: 0 },
        { text: "15-second streaming spot with household frequency cap.", category: 1 },
        { text: "Contextual prospecting on article pages.", category: 0 },
        { text: "Geo holdout measuring branded search lift.", category: 1 },
        { text: "MFA domain exclusion on open exchange.", category: 0 },
        { text: "Publisher programmatic guaranteed video deal.", category: 1 },
      ],
      correctFeedback:
        "Right. Display excels at DCO and contextual; CTV at streaming video and household reach. Re-read sections 4.3 and 4.6.",
      wrongFeedback:
        "Match format strengths — display for dynamic web; CTV for streaming video. Re-read sections 4.3 and 4.6.",
    },
  ],
});
