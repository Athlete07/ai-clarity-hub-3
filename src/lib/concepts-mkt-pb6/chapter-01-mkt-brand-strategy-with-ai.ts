import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktBrandStrategyWithAi = buildChapter({
  slug: "mkt-brand-strategy-with-ai",
  number: 1,
  shortTitle: "Brand Strategy with AI",
  title: "Brand Strategy with AI",
  readingMinutes: 24,
  summary:
    "Brand strategy is the set of decisions that make your company meaningfully different — not just visually consistent. AI compresses research synthesis, competitive mapping, and narrative drafting, but cannot replace the cultural intuition that chooses which positioning to own. This chapter maps brand research at scale, positioning workshops with AI, audience synthesis, narrative development, competitive landscape analysis, architecture decisions, health measurement, and the governance line where human judgment must lead.",
  keyTakeaway:
    "Use AI as a research and challenge partner for brand strategy — not as the strategist. Synthesise interviews, reviews, and social listening into intelligence; stress-test positioning options; map competitive white space. Humans own distinctiveness, cultural fit, and the final positioning bet. AI accelerates evidence; marketers own judgment.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "Brand Research at Scale",
      subtitle: "Processing customer interviews, review data, social listening, and competitive content with AI to build the brand intelligence foundation",
      take: "Brand research at scale combines qualitative depth with quantitative breadth: customer interviews, NPS verbatims, G2 and Trustpilot reviews, social listening from Brandwatch or Sprout Social, and competitive messaging audits. AI clusters themes across thousands of data points in hours — surfacing language customers use, emotional associations, and perception gaps. The foundation informs every downstream brand decision; garbage inputs produce confident but wrong synthesis.",
      why: "Traditional brand research cycles take months and sample sizes that miss niche segments. AI synthesis lets marketers refresh brand intelligence quarterly — but only when inputs are curated and validated, not scraped blindly.",
      paragraphs: [
        [
          s("Curate a research corpus before opening generative tools. "),
          x(
            "Export six months of support tickets, win-loss notes, and interview transcripts. Pull Brandwatch or Meltwater sentiment themes by audience segment. Scrape competitor homepage and campaign copy into a structured doc. Feed anonymised samples to Claude with a synthesis prompt: cluster by perception, emotion, and unmet need.",
            "Asking AI to 'describe our brand perception' without data produces plausible fiction — the same generic insights every category receives.",
          ),
          s(" Tag every insight with source type and confidence: verbatim quote, frequency count, or inference pending validation."),
        ],
        [
          s("AI excels at pattern finding across volume humans cannot read. "),
          x(
            "Forty hours of customer interviews become theme maps in an afternoon. G2 review analysis surfaces phrases buyers repeat — 'easy onboarding' versus 'enterprise-ready' — that positioning workshops miss when relying on memory.",
            "Brandwatch Iris and Meltwater Explore AI summarise trending narratives; marketers validate whether trends affect your ICP or adjacent categories.",
          ),
          s(" Run synthesis monthly for fast-moving categories; quarterly for established B2B brands."),
        ],
        [
          s("Research outputs must be brief-ready, not slide wallpaper. "),
          x(
            "Strong artifacts: 'Mid-market CFOs associate us with speed but question security posture' with five verbatim quotes and competitor comparison. Weak: 'Customers value innovation' with no proof.",
            "Structure AI templates to force quotes, segment tags, and sentiment direction. Positioning and narrative teams paste blocks directly into workshop prep.",
          ),
          s(" Archive research snapshots — brand intelligence is a time series, not a one-off deck."),
        ],
      ],
      examples: [
        {
          title: "Brandwatch + interview synthesis — fintech rebrand",
          body: "A payments fintech fed 28 customer interviews and six months of Brandwatch mentions into Claude. AI clustered three perception gaps: developers loved API docs; finance leaders feared compliance ambiguity; competitors owned 'enterprise trust'. Workshop focused on compliance narrative without abandoning developer voice. Rebrand research phase cut from ten weeks to three — insights validated by sales before creative brief.",
        },
        {
          title: "G2 review mining — HR software positioning",
          body: "An HR platform exported 2,400 G2 reviews across five competitors. AI tagged themes by company size segment. Finding: mid-market buyers praised implementation speed for one rival but criticised support — white space for 'fast deploy plus white-glove onboarding'. Positioning statement drafted from evidence, not brainstorm. Sales win-rate on mid-market deals rose 14% post-launch.",
        },
        {
          title: "Meltwater competitive content audit — CPG challenger",
          body: "A challenger snack brand used Meltwater to scrape competitor press, social, and campaign themes. AI mapped 'indulgence' versus 'functional nutrition' territory. Incumbents owned indulgence; functional space had messaging gaps. New brand platform targeted guilt-free functional — research-backed, not creative guess. Shelf velocity in test markets exceeded forecast 22%.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch1-strategy-research",
      type: "flow",
      title: "Brand Strategy Research Flow",
      caption:
        "Research synthesis → positioning options → competitive map → narrative framework → ongoing brand health tracking. AI accelerates each step; humans own distinctiveness bets.",
    }),
    buildSection({
      number: "1.2",
      title: "Positioning Development with AI",
      subtitle: "Generating, stress-testing, and differentiating positioning options — the competitive positioning workshop with AI as research and challenge partner",
      take: "Positioning defines the mental space you own: target segment, frame of reference, point of difference, and reason to believe. AI generates positioning territories from research synthesis, drafts option statements, and plays devil's advocate — 'a competitor could claim the same; what is defensible?' Humans choose the bet, test with customers, and commit. Workshop flow: feed research → generate 5–8 options → stress-test → narrow → validate.",
      why: "Positioning workshops without evidence devolve into loudest-voice wins. AI brings competitive challenge and option breadth; marketers bring judgment about what the company can authentically deliver.",
      paragraphs: [
        [
          s("Run positioning as a structured workshop, not a prompt-and-pick exercise. "),
          x(
            "Input: research synthesis, competitive map, business strategy constraints. Prompt AI for positioning territories using April Dunford's components: competitive alternatives, unique attributes, value, target market, category.",
            "Generate options in batches; human facilitators eliminate options that contradict product reality or sales motion before the room debates aesthetics.",
          ),
          s(" Document eliminated options and why — prevents relitigating rejected territories quarterly."),
        ],
        [
          s("Use AI as challenger, not advocate. "),
          x(
            "For each candidate positioning, prompt: 'Argue why a sceptical buyer would reject this. Which competitor messaging overlaps? What proof is missing?'",
            "Red-team prompts surface weak differentiation before launch — cheaper than repositioning after a failed campaign.",
          ),
          s(" Require sales and product in the workshop — positioning must survive field objections."),
        ],
        [
          s("Validate finalists with customers, not internal polls. "),
          x(
            "AI drafts survey or interview guides testing positioning comprehension and preference. Five to eight customer conversations beat fifty Slack reactions.",
            "Positioning that resonates internally but confuses buyers fails at first sales call.",
          ),
          s(" Lock positioning in a one-page doc: statement, proof points, anti-positioning (what we are not)."),
        ],
      ],
      examples: [
        {
          title: "AI positioning workshop — cybersecurity vendor",
          body: "A cybersecurity startup fed win-loss data and competitor pages into GPT. AI proposed four territories: compliance-first, developer-native, managed service, and AI-detection leader. Red-team pass eliminated AI-detection (incumbents owned narrative) and managed service (no delivery capacity). Customer interviews validated developer-native with compliance proof. Positioning doc shipped in two weeks versus typical eight-week agency cycle.",
        },
        {
          title: "Stress-test save — healthcare SaaS",
          body: "Leadership favoured 'patient-centric platform' positioning. AI challenger noted three competitors used identical language and NPS verbatims showed buyers cared about billing integration. Workshop pivoted to 'revenue integrity for specialty practices' — narrower but defensible. Rebrand campaign CTR doubled versus generic patient-centric draft ads.",
        },
        {
          title: "Cision media narrative alignment — B2B data",
          body: "A data analytics firm aligned positioning with earned media strategy. AI compared positioning options against journalist coverage themes in Cision. Option emphasising 'decision intelligence' matched emerging trade press language; 'big data platform' overlapped saturated coverage. PR and brand teams launched unified narrative — share of voice in target category rose 31% in two quarters.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Audience Insight Synthesis",
      subtitle: "Using AI to synthesise research across multiple sources into the audience understanding that informs brand decisions",
      take: "Audience insight for brand strategy goes beyond demographics: psychographic drivers, category entry triggers, brand switching barriers, and emotional jobs-to-be-done. AI merges CRM segments, social listening cohorts, survey data, and qualitative research into unified audience models. Sprout Social listening, HubSpot lifecycle data, and brand tracker cuts each tell partial stories — synthesis connects them for positioning and messaging decisions.",
      why: "Brand teams often inherit a persona deck from product marketing that predates current market dynamics. AI-powered synthesis keeps audience understanding current without commissioning new research panels every quarter.",
      paragraphs: [
        [
          s("Map audience insight sources to brand decision types. "),
          x(
            "Perception and association → social listening and brand tracker. Switching behaviour → win-loss and review data. Emotional resonance → interview verbatims and NPS open-ends. Media consumption → Cision journalist and publication analysis for B2B.",
            "A synthesis matrix prevents over-weighting one source — CRM behaviour without stated preference misses motivation.",
          ),
          s(" Update the audience model when positioning, product, or competitive set shifts materially."),
        ],
        [
          s("AI clustering should output segment-specific insight cards. "),
          x(
            "Each card: segment name, primary job-to-be-done, brand associations (positive/negative), language they use, channels they trust, proof they require.",
            "Generic 'enterprise buyer' cards fail creative briefing — sub-segment by industry or maturity where data supports.",
          ),
          s(" Sales validates cards against live pipeline — one objection capture call can invalidate an inference."),
        ],
        [
          s("Connect audience insight to messaging hierarchy, not just persona posters. "),
          x(
            "Insight cards feed pillar messages: what each segment must believe to consider, evaluate, and choose you.",
            "AI drafts message matrices from cards; strategists edit for voice and proof availability.",
          ),
          s(" Share audience synthesis with PR and content teams — brand is cross-functional, not a deck in a folder."),
        ],
      ],
      examples: [
        {
          title: "Sprout + CRM synthesis — DTC beauty",
          body: "A beauty brand merged Sprout Social audience demographics with Klaviyo purchase cohorts. AI identified 'ingredient-educated millennials' as high-LTV segment — cared about transparency, sceptical of influencer hype. Brand shifted from celebrity partnerships to chemist-led education content. Segment revenue grew 40% while overall ad spend held flat.",
        },
        {
          title: "Win-loss + listening — enterprise IT",
          body: "An IT services firm synthesised Gong win-loss themes with Brandwatch competitor mention analysis. Buyers who chose rivals cited 'single throat to choke' integration narrative. Audience insight card updated; messaging added unified operations story. Competitive displacement rate improved 12% in six months.",
        },
        {
          title: "Survey + social — nonprofit rebrand",
          body: "A nonprofit combined annual donor survey open-ends with social listening on cause conversation. AI found younger donors wanted impact transparency, not emotional appeal alone. Rebrand emphasised measurable outcomes. Donor acquisition cost among under-35 cohort fell 18%.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Brand Narrative Development",
      subtitle: "Using AI to develop and pressure-test brand story, messaging hierarchy, and narrative framework — with human creative judgment providing the distinctiveness",
      take: "Brand narrative is the story that connects purpose, positioning, and proof into a coherent arc: origin, tension, resolution, and invitation. AI drafts narrative frameworks, messaging hierarchies (brand → product → campaign), and story variations for different audiences. Distinctiveness comes from human creative choices — which tension to emphasise, which proof to lead with, which metaphors fit culture. AI accelerates iteration; marketers own the soul.",
      why: "Narrative without structure becomes tagline tourism. A framework ensures every touchpoint tells the same story at appropriate depth — from billboard to sales deck.",
      paragraphs: [
        [
          s("Start narrative from positioning and audience insight, not from AI story prompts. "),
          x(
            "Input locked positioning, proof points, and audience emotional jobs. Prompt AI for three narrative arcs: challenger, guide, and transformation frameworks.",
            "Evaluate arcs against authenticity — a challenger story fails if the company behaves like an incumbent.",
          ),
          s(" Choose one arc; AI expands into messaging hierarchy and channel-specific variants."),
        ],
        [
          s("Pressure-test narrative for comprehension and differentiation. "),
          x(
            "AI simulates buyer reactions: 'Summarise what this company does and why it matters in one sentence.' Confusing outputs signal narrative gaps.",
            "Competitive narrative comparison — paste rival About pages — highlights cliché overlap to eliminate.",
          ),
          s(" Test narrative with five customers before creative production begins."),
        ],
        [
          s("Messaging hierarchy prevents campaign chaos. "),
          x(
            "Level 1: brand promise (stable). Level 2: pillar messages (semi-stable). Level 3: campaign hooks (rotating). AI drafts Level 2 and 3 from Level 1; governance approves.",
            "Without hierarchy, every product launch invents new brand language — equity never compounds.",
          ),
          s(" Publish hierarchy in brand portal accessible to agencies and sales enablement."),
        ],
      ],
      examples: [
        {
          title: "Narrative workshop — climate tech",
          body: "A climate tech company used AI to draft three narrative arcs from positioning on 'grid reliability'. Leadership chose transformation arc — utilities as heroes, not villains. Messaging hierarchy built in Notion; AI generated campaign variants. Creative agency received locked hierarchy — production time cut 30%, message consistency scores rose in post-campaign tracker.",
        },
        {
          title: "Cliché filter — professional services",
          body: "AI first draft of consulting firm narrative included 'trusted partner' and 'innovative solutions' — phrases appearing on twelve competitor sites. Red-team prompt flagged overlap; human rewrite led with industry-specific outcome proof. Brand tracker unprompted association with specialty expertise rose 9 points.",
        },
        {
          title: "Multi-audience narrative — dual-sided marketplace",
          body: "A marketplace needed distinct narratives for supply and demand sides without splitting brand. AI drafted parallel hierarchies sharing brand promise but different proof pillars. PR used supply narrative for trade press; consumer campaign used demand arc. Earned and paid messaging aligned without contradictory stories.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Competitive Brand Mapping",
      subtitle: "Analysing competitor brand positioning, tone, visual identity, and messaging with AI — the landscape analysis that defines the white space",
      take: "Competitive brand mapping visualises how rivals occupy positioning territory, tone registers, visual codes, and message frequency. AI scrapes and analyses competitor websites, social feeds, ads libraries, and press coverage — clustering themes and identifying saturated versus open space. Meltwater, Brandwatch, and manual ad library exports feed the analysis. White space informs positioning bets and creative direction.",
      why: "Brands that mimic category leaders blend into noise. Mapping reveals where everyone says the same thing — and where your distinctiveness can live.",
      paragraphs: [
        [
          s("Build a competitive brand matrix across five dimensions. "),
          x(
            "Positioning claim, tone (formal/casual/technical), visual identity codes (colour, imagery style), primary proof type (data/testimonial/authority), and channel emphasis.",
            "AI tags competitor assets against dimensions; strategists validate misclassifications before drawing conclusions.",
          ),
          s(" Update matrix semi-annually or when a major competitor rebrands."),
        ],
        [
          s("Identify white space with evidence, not wishful thinking. "),
          x(
            "White space exists where customer needs appear in research but no competitor messaging addresses them — not merely where rivals are silent.",
            "AI heatmaps show message density; research validates whether density equals demand.",
          ),
          s(" Document 'occupied territory' to avoid — chasing rival strength wastes budget."),
        ],
        [
          s("Share competitive map with creative and PR teams. "),
          x(
            "Designers see visual clustering — if every rival uses blue gradients, differentiation opportunity exists in another visual territory if it fits positioning.",
            "PR sees narrative gaps for thought leadership and news angles competitors cannot credibly own.",
          ),
          s(" Competitive map is a living doc — link from brand portal and campaign brief templates."),
        ],
      ],
      examples: [
        {
          title: "Brandwatch competitive listening — insurance",
          body: "An insurtech mapped five incumbents' social and press themes via Brandwatch. AI clustered 'price' and 'trust heritage' as saturated; 'proactive prevention' barely appeared despite customer interview demand. New brand platform owned prevention narrative. Unaided awareness in target demo rose 11 points year one.",
        },
        {
          title: "Meta Ad Library + AI — DTC fitness",
          body: "A fitness apparel brand exported competitor Meta ads into analysis. AI tagged creative hooks: transformation before/after dominated; community belonging underrepresented. Brand campaign shifted to community-led creative. Engagement rate 2.3x category benchmark; CAC improved 15%.",
        },
        {
          title: "Visual territory map — B2B SaaS",
          body: "A project management SaaS used AI to analyse competitor homepage screenshots and ad creative. Visual clustering showed illustration-heavy sameness. Rebrand adopted photography-led human workflow imagery — distinctive in category without abandoning professional tone. Brand recognition in tracker surveys improved versus pre-rebrand baseline.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Brand Architecture Decisions",
      subtitle: "Using AI to evaluate naming, portfolio structure, and sub-brand decisions — the strategic options and their implications for brand clarity and market coverage",
      take: "Brand architecture governs how products, sub-brands, and endorsements relate: branded house, house of brands, endorsed brands, or hybrid. AI evaluates naming options for trademark conflict risk signals, semantic clarity, SEO collision, and portfolio coherence — but legal and strategic judgment remain human. Architecture decisions affect every touchpoint for years; AI accelerates option generation and implication analysis.",
      why: "Portfolio sprawl confuses buyers and dilutes marketing spend. Architecture clarity lets AI and humans produce consistent expressions across products without reinventing identity per launch.",
      paragraphs: [
        [
          s("Frame architecture decisions with business strategy constraints. "),
          x(
            "Will products be sold together or separately? Do acquisitions need integration or independence? Does one buyer committee purchase all products?",
            "AI generates architecture models with pros/cons per constraint — marketers and leadership choose trade-offs.",
          ),
          s(" Document decision rationale — future product launches reference architecture rules."),
        ],
        [
          s("Use AI for naming option stress-testing, not final selection. "),
          x(
            "Generate naming territories; check semantic associations, pronunciation across markets, and obvious negative connotations. Flag SEO and social handle availability for manual verification.",
            "Trademark clearance requires legal counsel — AI cannot replace USPTO search.",
          ),
          s(" Test finalist names with customers for comprehension — coined names need extra validation."),
        ],
        [
          s("Architecture impacts creative and PR production systems. "),
          x(
            "Branded house simplifies AI voice guides and templates; house of brands requires per-sub-brand systems.",
            "Migration plans matter — renaming products confuses existing customers without transition messaging.",
          ),
          s(" Publish architecture diagram in brand portal — agencies and product marketing align launches."),
        ],
      ],
      examples: [
        {
          title: "Post-acquisition architecture — martech rollup",
          body: "A martech acquirer used AI to model three architectures: full endorsement, separate brands with master brand footer, and gradual migration. Analysis weighed customer overlap and sales bundling. Chose endorsed brands — unified parent credibility, preserved product equity. AI drafted migration messaging by audience segment. Customer confusion tickets stayed below 2% during transition.",
        },
        {
          title: "Naming sprint — new product line",
          body: "A hardware company generated 80 naming options via AI, filtered for international pronunciation and category fit. Legal cleared five; customer survey selected one with highest comprehension. Launch avoided rename — previous rebrand cost $400K in wasted collateral.",
        },
        {
          title: "Portfolio simplification — enterprise software",
          body: "A software vendor had twelve product names in market. AI mapped customer journey touchpoints and support ticket confusion themes. Recommendation: collapse to four pillars with descriptive sub-names. Rebrand reduced creative production variants 60%; sales deck consistency improved in enablement audits.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Brand Health Measurement with AI",
      subtitle: "Processing social listening, NPS data, and brand tracking surveys into a coherent ongoing view of brand health",
      take: "Brand health combines awareness, consideration, preference, sentiment, and association metrics across tracking surveys, social listening, and NPS verbatims. AI processes qualitative feedback at scale — thematic NPS analysis, sentiment trend detection, association shifts in listening data — into dashboards marketers act on. Brandwatch, Sprout, and tracker platforms (Kantar, YouGov, or DIY panels) feed the system. Measurement without action is reporting theatre.",
      why: "Leadership asks whether brand investment works. A coherent health view connects perception shifts to campaigns, crises, and competitive moves — justifying spend and triggering corrective action.",
      paragraphs: [
        [
          s("Define a minimum viable brand health stack. "),
          x(
            "Core: aided/unaided awareness, consideration, preference (tracker or pulse survey). Layer: social sentiment and share of voice (Brandwatch, Meltwater). Layer: NPS and review themes quarterly.",
            "AI synthesises qual layers into themes; quant layers show trend direction.",
          ),
          s(" Align metrics to brand objectives — awareness-heavy for challengers, preference for mature brands."),
        ],
        [
          s("Automate thematic analysis on open-ended feedback. "),
          x(
            "NPS verbatims and survey open-ends processed by AI into driver trees: what promoters cite versus detractors.",
            "Human review catches novel themes AI misses — especially post-crisis vocabulary shifts.",
          ),
          s(" Report health monthly internally; quarterly to leadership with narrative, not spreadsheet dumps."),
        ],
        [
          s("Connect health signals to action triggers. "),
          x(
            "Predefined thresholds: sentiment drop >10 points triggers war room; association drift triggers message audit.",
            "Without triggers, dashboards become wallpaper during slow erosion.",
          ),
          s(" Post-campaign pulse surveys measure short-term lift — attribute carefully, avoid over-claiming."),
        ],
      ],
      examples: [
        {
          title: "Brandwatch sentiment dashboard — retail",
          body: "A national retailer built Brandwatch dashboard tracking sentiment, volume, and topic association versus two rivals. AI weekly summary flagged 'shipping delays' theme spike before exec escalation. Ops fix plus comms response limited sentiment recovery to 21 days versus 45-day prior incident. Health monitoring paid for platform cost in one avoided crisis.",
        },
        {
          title: "NPS thematic AI — B2B SaaS",
          body: "A SaaS vendor ran AI thematic analysis on 3,000 quarterly NPS verbatims. Promoters cited integration reliability; detractors cited billing confusion — not product bugs leadership assumed. Brand and product comms aligned on billing transparency campaign. NPS rose 8 points in two quarters.",
        },
        {
          title: "Tracker + listening fusion — CPG launch",
          body: "A CPG brand fused brand tracker waves with Meltwater launch coverage analysis. AI correlated PR burst with awareness lift by region. Underperforming regions lacked earned coverage — PR budget reallocated mid-campaign. Launch hit awareness target 94% versus 78% in prior launch without fused analysis.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Marketer Decision Lens: Where AI Assists Brand Strategy and Where It Must Not Lead",
      subtitle: "The brand decisions that require human cultural intuition and creative vision that no AI can replicate",
      take: "AI assists brand strategy on synthesis, option generation, competitive mapping, and measurement processing. Humans must lead on positioning bets, narrative distinctiveness, cultural nuance, architecture trade-offs, and anything touching identity crisis or values. Gate advanced AI use behind research quality and strategist review. The lens: if the decision defines who you are for a decade, AI informs — humans decide.",
      why: "Vendor demos position AI as 'brand strategy in a box.' Teams that delegate judgment ship generic positioning indistinguishable from rivals — and discover too late that authenticity cannot be prompted back.",
      paragraphs: [
        [
          s("Classify brand tasks into AI-assist, AI-draft-human-approve, and human-only. "),
          x(
            "AI-assist: research clustering, competitive tagging, health dashboards. AI-draft: narrative variants, naming longlists, workshop prep. Human-only: final positioning, values statements, crisis repositioning, mascot/character choices.",
            "Publish classification in brand governance — agencies and interns inherit rules.",
          ),
          s(" Review classification annually as model capabilities shift — not every upgrade changes human-only list."),
        ],
        [
          s("Require strategist sign-off before any AI output enters workshops or briefs. "),
          x(
            "Raw AI positioning reads fluent and forgettable. Sign-off checklist: grounded in research, differentiated on matrix, deliverable by product, approved by sales sample.",
            "Skip sign-off for internal brainstorming only — never for external-facing launch materials.",
          ),
          s(" Track rework rate — high rework signals weak inputs or wrong AI task classification."),
        ],
        [
          s("Invest in human craft where AI commoditises output. "),
          x(
            "When every rival uses AI for the same research synthesis, distinctiveness moves to interpretation and creative courage.",
            "Budget for strategist time, customer validation, and cultural consulting on global launches — not more tokens.",
          ),
          s(" Measure brand outcomes — preference, pricing power, retention — not AI usage volume."),
        ],
      ],
      examples: [
        {
          title: "Human-only gate — values campaign",
          body: "A consumer brand's AI-drafted values campaign aligned with every competitor's DEI language. CMO blocked launch; facilitated employee listening sessions for authentic language. Final campaign used verbatim employee stories. Engagement 4x AI draft; criticism volume lowest in category that quarter per Brandwatch.",
        },
        {
          title: "AI-assist success — research cadence",
          body: "A B2B brand instituted quarterly AI research synthesis with human strategist interpretation only. Positioning unchanged for 18 months — intentional stability — but messaging refreshed twice from insight shifts. Pipeline influenced by brand campaigns rose 16% without repositioning whiplash.",
        },
        {
          title: "Governance save — global naming",
          body: "AI favoured short coined name for APAC product launch. Regional marketer flagged unfortunate homophone in key market. Human-only cultural review selected alternative. Avoided launch embarrassment costing far more than naming sprint savings.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Team wants AI to pick final positioning without customer validation. Best guidance?",
      options: [
        "Accept AI recommendation for speed.",
        "Use AI for options and stress-testing; humans validate with customers before committing.",
        "Skip positioning — let creative drive the rebrand.",
        "Copy the market leader's positioning and optimise with AI.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI generates and challenges options; humans own the strategic bet with customer proof. Re-read sections 1.2 and 1.8.",
      wrongFeedback:
        "Positioning without validation and human judgment produces generic or undeliverable claims. Re-read sections 1.2 and 1.8.",
    },
    {
      kind: "order",
      q: "Order the brand strategy workflow from foundation to ongoing management.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Curate research corpus and synthesise insights",
        "Develop and stress-test positioning options",
        "Build narrative and messaging hierarchy",
        "Map competitive brand landscape for white space",
        "Resolve architecture and naming decisions",
        "Track brand health and trigger corrective action",
      ],
      correctFeedback:
        "Right. Research → positioning → narrative → competitive context → architecture → measurement. Re-read sections 1.1 and 1.7.",
      wrongFeedback:
        "Strategy builds on research before narrative and measurement. Re-read sections 1.1 and 1.7.",
    },
    {
      kind: "categorize",
      q: "Sort each task into AI-assist vs human-only brand decisions.",
      categories: ["AI-assist appropriate", "Human-only required"],
      items: [
        { text: "Cluster interview themes for workshop prep.", category: 0 },
        { text: "Final positioning bet for decade-long platform.", category: 1 },
        { text: "Competitive messaging density heatmap.", category: 0 },
        { text: "Corporate values statement for global launch.", category: 1 },
        { text: "NPS verbatim thematic analysis.", category: 0 },
        { text: "Cultural review of product naming in APAC.", category: 1 },
      ],
      correctFeedback:
        "Right. Synthesis and analysis assist; identity-defining judgments stay human. Re-read section 1.8.",
      wrongFeedback:
        "If it defines who you are culturally or strategically for years, humans lead. Re-read section 1.8.",
    },
    {
      q: "AI brand research without curated customer data produces what risk?",
      options: [
        "Too much specificity for creative teams.",
        "Plausible but fictional insights that mislead positioning.",
        "Legal trademark conflicts automatically.",
        "Guaranteed competitive differentiation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Generative-only research invents generic category insights. Curate inputs first. Re-read section 1.1.",
      wrongFeedback:
        "Without real data, AI produces fluent fiction — not evidence. Re-read section 1.1.",
    },
    {
      q: "Competitive brand map shows all rivals using same message territory. Best response?",
      options: [
        "Match leader messaging for safety.",
        "Validate white space against customer research before owning open territory.",
        "Ignore competitors entirely.",
        "Let AI pick random differentiation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. White space must connect to customer need, not just competitor silence. Re-read section 1.5.",
      wrongFeedback:
        "Silence in competitor messaging does not prove demand — validate with research. Re-read section 1.5.",
    },
    {
      kind: "categorize",
      q: "Match each brand health input to its primary insight type.",
      categories: ["Perception & association", "Customer relationship quality"],
      items: [
        { text: "Social listening sentiment trends.", category: 0 },
        { text: "NPS promoter vs detractor themes.", category: 1 },
        { text: "Brand tracker consideration lift.", category: 0 },
        { text: "G2 review recurring praise and complaints.", category: 1 },
        { text: "Share of voice versus competitors.", category: 0 },
        { text: "Support ticket emotional language clusters.", category: 1 },
      ],
      correctFeedback:
        "Right. Listening and trackers measure market perception; NPS and reviews measure relationship experience. Re-read section 1.7.",
      wrongFeedback:
        "Separate market perception metrics from direct customer experience signals. Re-read section 1.7.",
    },
  ],
});
