import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktGoToMarketStrategyWithAi = buildChapter({
  slug: "mkt-go-to-market-strategy-with-ai",
  number: 3,
  shortTitle: "Go-to-Market Strategy with AI",
  title: "Go-to-Market Strategy with AI",
  readingMinutes: 24,
  summary:
    "Go-to-market strategy aligns market choice, customer definition, product positioning, pricing, channels, and messaging before launch execution. AI compresses market research synthesis, competitive mapping, persona development, pricing analysis, channel modelling, and pre-mortem risk identification — producing in days what consulting decks once took weeks. This chapter maps the six-dimension GTM framework, market analysis, ICP and personas, differentiation, pricing and packaging, channel strategy, risk analysis, and the stress-test review marketers run before committing budget.",
  keyTakeaway:
    "GTM strategy is the bet you make before campaigns go live — AI accelerates evidence gathering and option generation, but leadership owns market choice, positioning, and pricing trade-offs. Run the framework completely; partial GTM (great messaging, weak channel economics) fails at scale. Pre-mortem before launch, not post-mortem after.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "The GTM Strategy Framework",
      subtitle: "Market, customer, product, channel, pricing, and messaging — the six dimensions of a complete go-to-market strategy and how AI assists each",
      take: "Complete GTM spans six dimensions: market (size, timing, segments), customer (ICP, personas, buying process), product (differentiation, proof), channel (route to market and economics), pricing (packaging and willingness-to-pay), and messaging (positioning house). Weakness in any dimension caps outcomes — brilliant messaging cannot fix wrong channel or price. AI assists each dimension with research synthesis, scenario modelling, and draft artifacts; humans integrate dimensions into a coherent plan with executive alignment.",
      why: "Teams often launch with messaging decks but no channel economics or pricing logic. The framework prevents partial GTM that collapses under real market friction.",
      paragraphs: [
        [
          s("Build GTM as an integrated doc, not siloed workstreams. "),
          x(
            "Single source: Notion or Google Doc with six sections, owners, assumptions, and dependencies. AI generates first drafts per section from shared research corpus.",
            "Product, marketing, sales, and finance review together — dimension conflicts surface early.",
          ),
          s(" Version the GTM doc — track assumption changes through launch and first 90 days."),
        ],
        [
          s("Sequence GTM work: market and customer before channel and pricing. "),
          x(
            "Channel and price depend on who buys and how they evaluate. AI can parallelise research, but decision order matters.",
            "April Dunford positioning fits in product + messaging sections — link explicitly.",
          ),
          s(" Gate 'launch ready' on all six dimensions reviewed — checklist sign-off."),
        ],
        [
          s("Use AI for cross-dimension consistency checks. "),
          x(
            "Prompt: 'Given this ICP and pricing, does this channel mix reach them economically?' Surfaces contradictions before spend.",
            "Claude with full GTM doc context acts as challenge partner — not approver.",
          ),
          s(" Executive summary one-pager from full doc — leadership alignment artifact."),
        ],
      ],
      examples: [
        {
          title: "Six-dimension doc — API product launch",
          body: "A API vendor built GTM doc in Notion with AI-drafted sections from customer interviews and competitive scrape. Channel section revealed developer community fit but enterprise pricing — conflict caught in review. Adjusted packaging with self-serve tier plus enterprise sales. Launch hit revenue target 97% versus 62% on prior partial-GTM launch.",
        },
        {
          title: "Cross-check save — vertical SaaS",
          body: "AI consistency check flagged messaging emphasising speed while pricing premium contradicted ICP price sensitivity. Repositioned to ROI payback narrative; channel shifted from broad LinkedIn to industry association partnerships. GTM coherence improved sales cycle length 19%.",
        },
        {
          title: "Executive one-pager — board readiness",
          body: "Series B company distilled 40-page GTM into AI-assisted one-pager for board: market, ICP, differentiation, price, channel, risks. Board approved launch budget in one session — prior launches required three revisions from fragmented decks.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch3-gtm-framework",
      type: "nested",
      title: "GTM Strategy Framework",
      caption:
        "Market + customer foundation → product positioning + messaging → channel + pricing economics → risk pre-mortem. AI assists each layer; leadership owns integrated bet.",
    }),
    buildSection({
      number: "3.2",
      title: "Market Analysis with AI",
      subtitle: "Analysing TAM, competitive landscape, customer segments, and market timing — the research foundation for GTM decisions produced in days rather than weeks",
      take: "Market analysis sizes opportunity (TAM/SAM/SOM), maps growth drivers and headwinds, segments the market by maturity and need, analyses competitor share and momentum, and assesses timing — why now. AI synthesises analyst reports, earnings transcripts, funding news, search trend data, and interview notes into structured market briefs. TAM spreadsheets from AI need human sanity checks — models hallucinate market sizes without sourced inputs.",
      why: "GTM bets on market timing and segment choice. Fast rigorous analysis prevents entering saturated or shrinking spaces with undifferentiated offers.",
      paragraphs: [
        [
          s("Source market data explicitly before AI synthesis. "),
          x(
            "Gartner excerpts, Statista, government data, industry associations, Crunchbase funding, Similarweb traffic trends. Feed sources to Claude with citation requirement.",
            "Bottom-up SOM from ICP count × ACV often beats top-down TAM fantasy.",
          ),
          s(" Document assumptions in market model — board questions will target weakest assumption."),
        ],
        [
          s("Segment market by entry wedge, not just size. "),
          x(
            "Which segment has acute pain, reachable buyers, and weaker competition? AI clusters segments from interview transcripts and review data.",
            "Beachhead segment choice drives first 18 months — not largest TAM slice necessarily.",
          ),
          s(" Map segment to product roadmap — GTM wedge must match what you ship."),
        ],
        [
          s("Monitor competitive momentum continuously pre-launch. "),
          x(
            "AI weekly digest: competitor launches, pricing changes, hiring signals, review sentiment shifts. Meltwater or Crayon plus LLM summary.",
            "Timing window closes when incumbent ships your planned differentiator.",
          ),
          s(" Market analysis is living through launch quarter — not a one-off slide."),
        ],
      ],
      examples: [
        {
          title: "Beachhead choice — vertical CRM",
          body: "A horizontal CRM entrant used AI on G2 reviews and interview data to identify property management as underserved beachhead — high pain on maintenance workflows, weak vertical incumbent. SOM model grounded in countable property managers × ACV. First-year revenue 100% from wedge before horizontal expansion.",
        },
        {
          title: "Timing call — AI feature race",
          body: "Market brief flagged three competitors shipping similar AI features within two quarters. GTM accelerated launch by six weeks; first-mover narrative in trade press. Delay would have made feature table stakes not differentiator.",
        },
        {
          title: "TAM sanity — infrastructure software",
          body: "AI draft claimed $40B TAM from vague 'digital transformation' label. Team rebuilt bottom-up from ICP accounts in ZoomInfo × realistic penetration. Credible $800M SOM secured finance approval without overstating board expectations.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "ICP and Buyer Persona Development",
      subtitle: "Building precise ideal customer profiles and buyer personas from research, win/loss analysis, and CRM data",
      take: "GTM ICP defines firmographic and behavioural fit for the launch — who you pursue first and who you exclude. Buyer personas add human detail: goals, fears, buying role, information sources, and objections. AI clusters CRM and interview data into persona cards linked to ICP segments. Personas for GTM must be actionable for messaging and channel — not decorative names and stock photos.",
      why: "Launch messaging and channel plans scatter without shared customer definition. AI accelerates persona synthesis from evidence already collected for market analysis.",
      paragraphs: [
        [
          s("Derive personas from buying committee reality, not marketing fiction. "),
          x(
            "Gong win-loss, support tickets, and sales notes feed persona jobs and objections. AI outputs role-based cards: economic buyer, technical, user, champion.",
            "Limit to 3–5 personas per GTM — more creates brief chaos.",
          ),
          s(" Sales validates personas in launch prep — reject cards that do not match field experience."),
        ],
        [
          s("Link each persona to channel and content implications. "),
          x(
            "Persona card fields: where they learn, proof they trust, CTA they accept. Informs launch channel mix and asset priority.",
            "HubSpot persona properties enable launch campaign segmentation day one.",
          ),
          s(" Negative persona documented — who looks like fit but fails — prevents launch targeting drift."),
        ],
        [
          s("Refresh personas post-launch from early customer cohort. "),
          x(
            "First 50 customers often differ from hypothesised ICP. AI compares expected vs actual CRM firmographics and usage.",
            "GTM v1.1 persona update at day 90 — common and healthy.",
          ),
          s(" Persona updates trigger messaging and enablement revision — not shelf updates."),
        ],
      ],
      examples: [
        {
          title: "Win-loss personas — cybersecurity",
          body: "Launch personas built from 40 win-loss interviews synthesised by AI. Discovered security engineer as champion not CISO for mid-market — shifted launch content and webinar speakers. Pipeline quality improved; wrong-persona targeting was pre-launch blind spot.",
        },
        {
          title: "PLG persona split — design tool",
          body: "GTM defined designer user persona and manager buyer persona for upgrade path. Free tier optimised for user jobs; sales assist for team plan targeted manager ROI proof. Conversion to paid 23% above forecast — dual persona design intentional.",
        },
        {
          title: "Day-90 refresh — HR analytics",
          body: "Actual customers skewed smaller than enterprise persona hypothesis. AI CRM analysis triggered GTM pivot to mid-market packaging and LinkedIn over executive events. Saved six months wrong motion.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Competitive Differentiation Mapping",
      subtitle: "Using AI to map the competitive landscape and identify the positioning that distinguishes your product most credibly",
      take: "Differentiation mapping compares competitors on capabilities, messaging, pricing, target segment, and proof types — identifying credible white space. AI scrapes websites, G2 grids, review themes, and sales battle intel into comparison matrices and positioning options. Differentiation must be deliverable — AI-generated 'we are the only AI-native platform' claims fail when five rivals say the same. Ground differentiation in customer-verified unique value.",
      why: "Launch into crowded categories without differentiation produces price wars and long cycles. Mapping finds the claim you can own and prove.",
      paragraphs: [
        [
          s("Build feature and message comparison matrix before positioning workshop. "),
          x(
            "Rows: competitors plus 'do nothing'. Columns: capabilities, messaging pillars, price band, ICP focus, proof type. AI populates from public sources; product validates features.",
            "Klue or Crayon feed competitive intel; AI summarises for launch team.",
          ),
          s(" Highlight clusters where everyone claims the same — avoid those messages."),
        ],
        [
          s("Stress-test differentiation with red-team prompts. "),
          x(
            "'Why would a sceptic say this is not different?' 'Which competitor could copy this in six months?'",
            "Durable differentiation ties to data, ecosystem, or delivery model — not adjectives.",
          ),
          s(" Customer proof required for each differentiation pillar in messaging house."),
        ],
        [
          s("Align sales and marketing on launch battle cards from same map. "),
          x(
            "AI drafts battle cards per top three competitors from matrix — sales edits for field language.",
            "Single map prevents marketing launch message contradicting sales objections handling.",
          ),
          s(" Update map monthly through launch quarter — competitors react."),
        ],
      ],
      examples: [
        {
          title: "G2 grid analysis — project management",
          body: "AI mined G2 reviews for five rivals — 'ease of use' saturated; 'client portal for agencies' underclaimed. Launch positioned agency client collaboration — owned niche in crowded market. Category-specific landing pages outperformed generic PM messaging 2.8x on conversion.",
        },
        {
          title: "Red-team reposition — data warehouse",
          body: "Planned launch on 'fastest queries' — AI red-team noted three rivals with benchmark marketing. Pivoted to 'lowest ops burden for small data teams' with customer ops-hour proof. Differentiation credible in sales calls per Gong.",
        },
        {
          title: "Battle card sync — Salesforce CPQ competitor",
          body: "Launch battle cards AI-drafted from competitive matrix; sales training used same doc as marketing ads. Competitive win rate in launch segment 54% versus 41% historical — alignment measurable.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Pricing and Packaging Analysis",
      subtitle: "Analysing pricing models, competitive pricing, and customer willingness-to-pay — the intelligence that informs go-to-market packaging decisions",
      take: "GTM pricing decisions cover model (subscription, usage, seat, hybrid), packaging tiers, competitive price bands, and willingness-to-pay signals from interviews and conjoint-style surveys. AI analyses competitor pricing pages, historical deal data in Salesforce, and interview transcripts for price sensitivity themes — but pricing authority stays with finance and leadership. Packaging should match how buyers budget and compare alternatives.",
      why: "Wrong price or package kills conversion regardless of demand generation quality. AI accelerates analysis; humans own margin and strategic price position.",
      paragraphs: [
        [
          s("Inventory competitor pricing and packaging explicitly. "),
          x(
            "AI scrapes pricing pages; note what's public vs sales-only. Map tiers to persona and segment from GTM doc.",
            "Hidden pricing competitors require win-loss price intel from sales.",
          ),
          s(" Document pricing assumptions for pre-mortem — price shock is common launch failure."),
        ],
        [
          s("Test willingness-to-pay before locking launch price. "),
          x(
            "Van Westendorp or Gabor-Granger surveys; AI drafts survey from persona cards. Five to ten depth interviews on budget process supplement quant.",
            "PLG may use price experiments in product; enterprise may use pilot deals.",
          ),
          s(" Align packaging to value metrics buyers already track — seats, usage, outcomes."),
        ],
        [
          s("Connect pricing to channel economics. "),
          x(
            "Low ACV cannot support high-touch sales; enterprise price needs proof and enablement investment. AI models unit economics scenarios.",
            "Salesforce historical discount patterns reveal packaging friction — address in GTM.",
          ),
          s(" Launch pricing page and internal FAQ must match — confusion delays deals."),
        ],
      ],
      examples: [
        {
          title: "Packaging pivot — usage vs seats",
          body: "Interview synthesis showed buyers budgeted on API volume not headcount. AI analysed competitor models; launch packaged on usage tiers with seat caps secondary. Sales cycle shortened 12 days average — buyer mental model match.",
        },
        {
          title: "Price band positioning — mid-market SaaS",
          body: "Competitive scrape placed rivals at $45–$89 per seat; willingness-to-pay study supported $59 entry with premium $99 tier for advanced governance. AI scenario model showed margin targets met at 18% conversion — achieved 21% launch quarter.",
        },
        {
          title: "Enterprise custom guardrails — launch FAQ",
          body: "AI drafted sales FAQ for pricing exceptions during launch — discount authority, pilot terms, multi-year incentives. Reduced ad-hoc leadership escalations 60%; deal velocity improved.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Channel Strategy Development",
      subtitle: "Evaluating channel options, modelling channel economics, and designing the channel mix for a new product or market entry",
      take: "Channel strategy defines how product reaches buyer: direct sales, inside sales, PLG self-serve, partners, marketplaces, and marketing-led inbound. Each channel has CAC, capacity, time-to-revenue, and control trade-offs. AI models scenarios from assumed conversion rates and costs; historical data from similar products in CRM improves accuracy. Channel mix must match ICP buying behaviour and ACV — enterprise buyers rarely convert from TikTok alone.",
      why: "Channel misalignment is the silent GTM killer — great product, wrong route. Modelling before launch prevents hiring sales before demand exists or scaling ads before conversion works.",
      paragraphs: [
        [
          s("Map channels to ACV and buying motion matrix. "),
          x(
            "Low ACV high velocity: PLG + paid search + content. Mid ACV: inside sales + inbound + webinars. High ACV: field sales + ABM + events.",
            "AI drafts matrix from GTM ICP and price; leadership chooses capacity investments.",
          ),
          s(" Partner channel requires enablement budget — factor before announcing partner GTM."),
        ],
        [
          s("Model unit economics per channel with explicit assumptions. "),
          x(
            "CAC, payback months, capacity per rep, conversion by stage. Sensitivity analysis when AI or spreadsheet — which assumption matters most?",
            "HubSpot and Salesforce historical benchmarks from adjacent products validate assumptions.",
          ),
          s(" Pick primary and secondary channel for launch — sequenced expansion beats simultaneous sprawl."),
        ],
        [
          s("Design launch channel playbook with metrics and owners. "),
          x(
            "Each channel: budget, KPI, creative needs, sales handoff, 90-day success criteria.",
            "AI generates playbook first draft from GTM doc — channel leads edit.",
          ),
          s(" Revise channel mix at day 60 from early data — GTM is hypothesis until market responds."),
        ],
      ],
      examples: [
        {
          title: "PLG + sales assist — collaboration tool",
          body: "GTM model showed PLG for teams under 20, sales assist above. Channel budget 70% product-led growth content and onboarding; 30% ABM on enterprise overlay. Model predicted 14-month payback; achieved 11 — channel sequencing worked.",
        },
        {
          title: "Partner-first — regional expansion",
          body: "APAC GTM chose reseller partners over direct hire year one. AI localised enablement kit; partner pipeline 45% of regional revenue. Direct sales added year two with proven playbook.",
        },
        {
          title: "Channel kill — podcast sponsorship",
          body: "Launch plan included podcast ads; 60-day pilot showed high listenership, zero pipeline. AI attribution plus Salesforce source tracking justified kill; budget to search capture. Launch target still met.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "GTM Risk Analysis",
      subtitle: "Identifying the most likely failure modes in a go-to-market plan before execution — the pre-mortem that prevents avoidable launches",
      take: "GTM pre-mortem imagines launch failed — team lists causes, likelihood, impact, and mitigations. AI accelerates failure mode brainstorming from category case studies, competitive history, and internal weak signals (product gaps, sales capacity, support readiness). Common failures: wrong ICP, weak differentiation, price mismatch, channel economics, product not ready, sales not enabled, support overwhelmed. Mitigations become launch checklist items with owners.",
      why: "Post-mortems are expensive. Pre-mortem while plans are editable saves quarters of wasted spend and reputation damage.",
      paragraphs: [
        [
          s("Run structured pre-mortem workshop with cross-functional attendees. "),
          x(
            "Prompt: 'It is 90 days post-launch; we missed target by 50%. Why?' Silent brainstorm then AI clusters themes.",
            "Include customer success and support — launch breaks onboarding if ignored.",
          ),
          s(" Prioritise risks by likelihood × impact — top five get mitigation owners."),
        ],
        [
          s("Convert mitigations to launch gates. "),
          x(
            "Example risk: sales cannot demo new feature — mitigation: certification before launch day. Gate blocks PR until complete.",
            "AI tracks mitigation checklist status weekly during launch sprint.",
          ),
          s(" Executive sponsor resolves gate conflicts — not marketing alone."),
        ],
        [
          s("Monitor leading risk indicators during launch. "),
          x(
            "Early warning: demo no-shows, support ticket spike, competitor response ad spend, review bombing.",
            "AI anomaly alerts on Salesforce pipeline and social listening.",
          ),
          s(" Pre-agreed pivot triggers — if metric X by day 30, activate plan B channel or message."),
        ],
      ],
      examples: [
        {
          title: "Support capacity risk — viral PLG",
          body: "Pre-mortem flagged onboarding support overwhelm if PLG exceeded forecast. Mitigation: AI chatbot plus doubled CS hours week of launch. Signups 2x forecast; churn from slow support avoided — prior launch had burned users.",
        },
        {
          title: "Competitive response — price undercut",
          body: "Risk register included incumbent price cut. Day 45 rival dropped price 20%; plan B messaging emphasised TCO and migration ease — pre-drafted. Win rate held — team not scrambling.",
        },
        {
          title: "Product readiness gate — integration gaps",
          body: "Pre-mortem listed Salesforce integration gap as deal-breaker for ICP. Launch gated on integration GA; enterprise pipeline waited six weeks but closed at 2x pilot rate versus buggy early access.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Marketer Decision Lens: The GTM Strategy Review",
      subtitle: "Using AI to stress-test the plan before committing — the critical review process that surfaces false assumptions before they become expensive mistakes",
      take: "GTM review is the final gate before budget commit: six dimensions complete, assumptions explicit, risks mitigated, sales and finance aligned, measurement defined. AI stress-tests by challenging assumptions, simulating buyer objections, and comparing plan coherence across sections — humans approve or send back. Marketers facilitate review; they do not own all dimensions but are accountable for messaging and channel coherence.",
      why: "Launching without review confuses activity with strategy. Review lens separates ready from hopeful — saves organisation from public half-baked GTM.",
      paragraphs: [
        [
          s("Use GTM review checklist with mandatory sign-offs. "),
          x(
            "Market sized with sources? ICP validated? Differentiation proven? Price tested? Channel economics modelled? Top risks mitigated? Enablement ready? Metrics defined?",
            "AI generates review memo highlighting gaps and inconsistencies across doc sections.",
          ),
          s(" No sign-off, no launch spend — hard gate for disciplined organisations."),
        ],
        [
          s("Run AI red-team on positioning and channel plan. "),
          x(
            "Prompts: 'Strongest competitor response?' 'Why would ICP ignore us?' 'Where does plan contradict itself?'",
            "Sales leaders respond to red-team output — not defensive marketing slides.",
          ),
          s(" Document review decisions and deferred items — transparency builds trust."),
        ],
        [
          s("Define post-launch GTM learning cadence. "),
          x(
            "Weekly launch metrics, day 30 and 90 GTM retrospectives. AI synthesises data and qualitative sales feedback into v1.1 recommendations.",
            "GTM strategy is versioned living doc — first launch is experiment at scale.",
          ),
          s(" Celebrate learning speed, not only launch day fireworks — iterative GTM wins markets."),
        ],
      ],
      examples: [
        {
          title: "Review block — pricing not tested",
          body: "CFO blocked launch spend until willingness-to-pay study completed — AI had drafted price but no validation. Two-week delay; price adjusted down one tier. Launch conversion exceeded forecast — block was correct.",
        },
        {
          title: "Red-team channel fix — event over-reliance",
          body: "AI red-team noted 50% budget on launch event with no pipeline history. Review shifted 20 points to search and partner. Event still ran smaller; pipeline diversified — weather-related event attendance drop did not kill launch.",
        },
        {
          title: "Day-30 GTM v1.1 — messaging tighten",
          body: "Post-launch review showed buyers confused product with adjacent category. AI analysed Gong calls; messaging house updated in 10 days. Second-month pipeline velocity recovered — review cadence institutionalised.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Complete GTM strategy requires how many core dimensions in this framework?",
      options: [
        "Two: messaging and ads.",
        "Six: market, customer, product, channel, pricing, messaging.",
        "Four: product, price, place, promotion only.",
        "One: positioning statement.",
      ],
      correct: 1,
      correctFeedback:
        "Right. All six dimensions must align. Re-read section 3.1.",
      wrongFeedback:
        "GTM spans market through messaging — six dimensions. Re-read section 3.1.",
    },
    {
      kind: "order",
      q: "Order GTM development decisions from foundation to execution readiness.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Market analysis and segment choice",
        "ICP and persona definition",
        "Differentiation and messaging",
        "Pricing and packaging decisions",
        "Channel strategy and pre-mortem risk review",
      ],
      correctFeedback:
        "Right. Market and customer before price, channel, and risk gates. Re-read sections 3.1–3.7.",
      wrongFeedback:
        "Foundation research precedes pricing, channels, and risk review. Re-read sections 3.1–3.7.",
    },
    {
      kind: "categorize",
      q: "Sort GTM tasks into AI-assist vs human authority required.",
      categories: ["AI can assist", "Human must decide"],
      items: [
        { text: "Competitive messaging matrix draft.", category: 0 },
        { text: "Final launch price approval.", category: 1 },
        { text: "Interview transcript persona clustering.", category: 0 },
        { text: "Beachhead segment strategic choice.", category: 1 },
        { text: "Pre-mortem theme clustering.", category: 0 },
        { text: "Channel capacity investment bet.", category: 1 },
      ],
      correctFeedback:
        "Right. AI drafts and synthesises; leadership owns bets. Re-read section 3.8.",
      wrongFeedback:
        "Strategic bets and approvals stay human. Re-read section 3.8.",
    },
    {
      q: "TAM figures from AI without sourced inputs risk what?",
      options: [
        "Being too conservative always.",
        "Plausible but unsupported market sizes that mislead board decisions.",
        "Automatic legal compliance.",
        "Eliminating need for competitive analysis.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Source data before synthesis; prefer bottom-up SOM. Re-read section 3.2.",
      wrongFeedback:
        "AI market sizing needs sourced inputs and sanity checks. Re-read section 3.2.",
    },
    {
      q: "GTM pre-mortem primary purpose?",
      options: [
        "Celebrate launch team.",
        "Identify likely failure modes and mitigations before spend commits.",
        "Replace customer interviews.",
        "Finalize ad creative only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Pre-mortem prevents avoidable failures while plans are editable. Re-read section 3.7.",
      wrongFeedback:
        "Pre-mortem surfaces risks and mitigations pre-launch. Re-read section 3.7.",
    },
    {
      kind: "categorize",
      q: "Match GTM dimension to primary question it answers.",
      categories: ["Who and why buy", "How we reach and monetise"],
      items: [
        { text: "ICP and personas.", category: 0 },
        { text: "Channel strategy.", category: 1 },
        { text: "Competitive differentiation.", category: 0 },
        { text: "Pricing and packaging.", category: 1 },
        { text: "Market timing and segments.", category: 0 },
        { text: "Unit economics per channel.", category: 1 },
      ],
      correctFeedback:
        "Right. Customer and market define who; channel and price define how. Re-read section 3.1.",
      wrongFeedback:
        "Customer/market vs channel/pricing split the framework. Re-read section 3.1.",
    },
  ],
});
