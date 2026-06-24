import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktMeasuringAiMarketingImpact = buildChapter({
  slug: "mkt-measuring-ai-marketing-impact",
  number: 7,
  shortTitle: "Measuring AI Marketing Impact",
  title: "Measuring AI Marketing Impact — Metrics That Tell You Whether AI Is Actually Working",
  readingMinutes: 24,
  summary:
    "Marketing leaders are asked to justify AI investment with the same rigour as media spend — but most teams measure activity (drafts generated, tools adopted) instead of outcomes (pipeline influenced, cost per asset, quality maintained). This chapter builds a measurement framework across productivity, quality, cost, attribution, adoption, and the volume-quality trade-off.",
  keyTakeaway:
    "AI marketing ROI is not one number — it is a scorecard: hours saved per asset, engagement versus baseline, cost per lead at constant quality, attribution clarity, and sustained adoption. Marketers who measure honestly know when to scale, when to fix workflows, and when to kill tools that produce busywork.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "7.1",
      title: "The ROI Question for Marketing AI",
      subtitle: "Why 'we use AI now' is not a business case — and what finance actually wants to see",
      take: "AI marketing ROI must answer: did we produce more or better outcomes per dollar and per hour — without degrading brand, compliance, or conversion? Activity metrics (tools licences, drafts generated) are inputs. Finance and leadership care about outputs: pipeline, CAC, content performance, and team capacity redeployed to higher-value work.",
      why: "AI tool spend is growing faster than marketing budgets. Leaders who cannot quantify impact lose budget fights to channels with clearer attribution. Honest measurement — including negative results — builds credibility for the next investment.",
      paragraphs: [
        [
          s("Frame AI ROI in the language your CFO already uses. "),
          x(
            "Cost side: tool licences, implementation, training, curation labour, compliance review time. Benefit side: capacity unlocked (more campaigns, faster time-to-market), unit cost reduction (cost per blog, per ad variant), performance lift (conversion rate, engagement, pipeline velocity) — each isolated where possible.",
            "Blended 'we feel faster' does not survive budget review. Isolated before/after on comparable campaigns does.",
          ),
          s(" Build the business case as a simple model: incremental cost vs incremental outcome over 90 days, then annualise."),
        ],
        [
          s("Distinguish efficiency ROI from effectiveness ROI. "),
          x(
            "Efficiency: same output in less time or at lower cost. Effectiveness: better output — higher conversion, stronger engagement, improved win rates. AI often delivers efficiency quickly; effectiveness requires deliberate experimentation and quality measurement.",
            "Teams celebrating 3x content volume without measuring whether content performs have optimised the wrong variable.",
          ),
          s(" Report both efficiency and effectiveness quarterly — even when effectiveness data is inconclusive. Honesty builds trust."),
        ],
        [
          s("Set a 90-day proof period for every new AI workflow. "),
          x(
            "Hypothesis: 'AI-assisted email drafting reduces time-to-send by 40% without reducing open rate.' Measure baseline for 30 days pre, implement for 60 days, compare. Kill or fix workflows that fail the hypothesis.",
            "Perpetual pilot without measurement is shelfware with a subscription fee.",
          ),
          s(" The 90-day proof period is your defence against tool accumulation — marketers collect AI subscriptions like gym memberships."),
        ],
      ],
      examples: [
        {
          title: "B2B SaaS content ROI model",
          body: "A mid-market SaaS company modelled AI content ROI: £18K annual tool cost + 40 hours/quarter curation labour vs 12 additional blog posts/quarter historically costing £2,400 each in agency fees. Net savings £10K/year on efficiency alone. Effectiveness layer: AI-assisted posts averaged 8% lower organic traffic per post — triggering prompt and curation investment rather than volume scaling. Honest scorecard prevented a visibility mistake.",
        },
        {
          title: "CMO board question",
          body: "A retail CMO presented 'AI transformation' with tool adoption stats. CFO asked: 'What is cost per acquired customer change?' No answer ready. Next quarter presentation led with pipeline influenced, cost per asset, and email revenue per send — AI framed as capacity tool for proven channels, not magic. Budget approved because the narrative matched finance language.",
        },
        {
          title: "Failed ROI — killed the workflow",
          body: "A DTC brand's social team adopted an AI scheduling and caption tool. Ninety-day review: captions required 45-minute average edit time (vs 30-minute human write from scratch), engagement down 12%. ROI negative on both efficiency and effectiveness. Tool cancelled; team reallocated budget to UGC programme with measurable conversion lift. Killing failed workflows is as important as scaling winners.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Productivity Metrics That Matter",
      subtitle: "Hours saved, throughput, and time-to-market — measured honestly including curation",
      take: "Productivity measurement for AI marketing must include the full workflow: briefing, generation, curation, compliance review, and publish — not generation alone. Net time saved per asset type is the metric that matters, and it varies dramatically by content type and prompt maturity.",
      why: "Vendors sell '10x faster content'. Your reality includes the editor fixing hallucinated stats and the brand manager rejecting off-voice drafts. Measuring only generation time produces lying charts.",
      paragraphs: [
        [
          s("Measure end-to-end time-to-publishable-asset, not time-to-first-draft. "),
          x(
            "Baseline: how long did email nurture, blog post, or ad creative take before AI — including revisions? Post-AI: same endpoint, publishable quality. Include all human touchpoints.",
            "Early AI adoption often shows longer end-to-end time (learning curve) before net savings appear at month 3–4 as prompts improve.",
          ),
          s(" Track by asset type — AI excels at some formats (product description variants) and struggles with others (original thought leadership)."),
        ],
        [
          s("Throughput metrics should be quality-gated. "),
          x(
            "Pieces published per week is meaningless if half underperform or require emergency takedowns. Better: approved assets published per week passing voice rubric and fact-check gates.",
            "Internal throughput (drafts generated) is a vanity metric unless correlated with published output.",
          ),
          s(" Dashboard: drafts generated → drafts curated → drafts approved → published. Conversion between stages reveals workflow bottlenecks."),
        ],
        [
          s("Capacity redeployment is the strategic productivity win. "),
          x(
            "If AI saves 10 hours/week on copy production, where do those hours go? Best outcome: strategy, experimentation, customer research, sales enablement partnership. Worst outcome: more mediocre content at the same headcount.",
            "Leadership should ask: 'What did we do with the time?' not just 'How much time did we save?'",
          ),
          s(" Quarterly review: hours saved by function, hours reinvested in higher-value activities, documented examples of redeployment."),
        ],
      ],
      examples: [
        {
          title: "Email workflow time study",
          body: "A fintech marketing team timed 20 nurture emails pre- and post-AI workflow. Pre: 3.2 hours average end-to-end. Post (month one): 3.8 hours (learning). Post (month four): 1.9 hours with mature prompts and claims bank. Reported honestly to leadership including month-one regression. Credibility from transparent measurement enabled expansion to landing page workflows.",
        },
        {
          title: "Agency mix shift",
          body: "An enterprise software company reduced agency copywriting spend 35% by bringing first drafts in-house with AI + senior curator model. Agency retained for strategy and high-stakes campaigns. Productivity metric: cost per published asset down, strategic agency hours up. Finance approved because total spend decreased while output quality scores held.",
        },
        {
          title: "Vanity throughput trap",
          body: "A media company's SEO team celebrated 4x 'content output' after AI adoption. Organic traffic flat, bounce rate up. Investigation: throughput counted published posts; quality gate had been removed to hit volume OKRs. Lesson: never decouple throughput metrics from quality metrics — the combination is the only honest productivity picture.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Quality Metrics — Did Performance Hold?",
      subtitle: "Engagement, conversion, and brand scores as the effectiveness floor",
      take: "AI productivity gains that degrade content performance are net-negative ROI. Quality metrics — open rates, click-through, conversion, time-on-page, brand voice scores, complaint rate — must be tracked in parallel with efficiency metrics, with pre-AI baselines for comparison.",
      why: "It is easier to measure time saved than engagement lost — which is why teams skip quality measurement until traffic drops. Proactive quality tracking catches degradation before revenue impact.",
      paragraphs: [
        [
          s("Establish quality baselines before scaling AI volume. "),
          x(
            "For each channel: 90-day average engagement, conversion, and unsubscribe/complaint rates. Segment by content type. These baselines are your quality floor — AI-assisted content must stay within agreed tolerance (e.g. ±5% engagement).",
            "Without baselines, you cannot prove AI maintained quality — or detect silent degradation.",
          ),
          s(" Baseline capture is a one-week investment that pays off for every future AI scaling decision."),
        ],
        [
          s("A/B test AI-assisted versus human-only where volume allows. "),
          x(
            "Email: 50/50 split on subject lines — AI draft vs human draft, same send time and list. Ads: variant testing with AI-generated creative against historical winners. Landing pages: AI-first draft with human polish vs control.",
            "Not every asset warrants A/B testing — but quarterly tests on high-volume formats build evidence for or against scaling.",
          ),
          s(" Document results in a central 'what works' log — negative results are as valuable as positive."),
        ],
        [
          s("Qualitative quality signals matter alongside quantitative. "),
          x(
            "Sales feedback ('blog leads mention outdated info'), customer support tickets citing misleading ads, social comments ('sounds robotic'), brand voice audit scores — qualitative signals often precede quantitative drops.",
            "Monthly qualitative harvest from sales, support, and social listening supplements dashboard metrics.",
          ),
          s(" If qualitative signals diverge from quantitative (engagement up but sales says content is weak), trust the qualitative — conversion lag may follow."),
        ],
      ],
      examples: [
        {
          title: "AI subject line A/B programme",
          body: "A B2B company's growth team A/B tested AI-generated email subject lines against human-written for 12 weeks. AI won on open rate 58% of tests, lost on click-through 54% of tests — suggesting AI optimised curiosity but not message-market fit. Workflow adjusted: AI generates 10 options, human selects for strategic alignment, then A/B test. Combined approach beat either alone.",
        },
        {
          title: "Brand voice score correlation",
          body: "A consumer app correlated monthly voice audit scores with social engagement rate. Quarters with voice scores above 4.2/5 averaged 22% higher comment rate than quarters below 3.8 — controlling for spend. Quality metric (voice) linked to performance metric (engagement). Gave brand team quantitative ammunition for curation time budgets.",
        },
        {
          title: "Quality floor breach response",
          body: "An e-commerce email programme's click-through dropped 15% over six weeks while send volume doubled via AI. Quality floor protocol triggered: pause volume scaling, audit last 20 sends, discover personalisation tokens misfiring and voice drift. Fix took two weeks; CTR recovered. Without quality floor, team might have scaled further.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Cost Metrics and Unit Economics",
      subtitle: "Licences, labour, and cost per lead — the full P&L picture of AI marketing",
      take: "AI marketing cost is tool subscriptions plus incremental labour (curation, compliance, training) minus avoided cost (agency, freelancer, overtime). Unit economics — cost per blog post, per ad variant, per qualified lead — reveal whether AI improves marketing efficiency at the margin or just shifts spend between line items.",
      why: "CFOs see AI tools as new OpEx. You must show offsetting savings or performance lift — or the next budget cycle cuts AI first because it looks like duplication on top of existing martech.",
      paragraphs: [
        [
          s("Build a fully-loaded cost model per workflow. "),
          x(
            "Direct: AI tool licence allocated by team usage. Labour: hours × loaded rate for curation and review. Indirect: training, prompt library maintenance, legal review. Avoided: agency fees, freelancer spend, contractor hours no longer needed.",
            "Fully-loaded cost often surprises teams who counted only the £20/month subscription.",
          ),
          s(" Update the model quarterly — AI tool pricing and usage patterns change fast."),
        ],
        [
          s("Cost per outcome beats cost per tool. "),
          x(
            "Cost per published blog post. Cost per ad creative variant reaching performance threshold. Cost per MQL when AI assists landing page production. These metrics connect AI spend to funnel economics your leadership already tracks.",
            "If AI reduces cost per post but posts generate fewer leads, unit economics at the funnel level tell the truth.",
          ),
          s(" Trace cost savings to funnel metrics — not just production metrics."),
        ],
        [
          s("Watch for hidden cost escalation at scale. "),
          x(
            "API-based tools charge per token, image, or call. Volume discounts may not apply. A workflow affordable at 50 assets/month may be expensive at 500. Model tier upgrades for quality add cost.",
            "Finance should see projected cost at 2x and 5x volume before approving scale — same discipline as media spend scaling.",
          ),
          s(" Include usage-based cost scenarios in every AI business case — pilot economics lie."),
        ],
      ],
      examples: [
        {
          title: "Fully-loaded blog cost comparison",
          body: "A cybersecurity vendor compared blog production costs: agency route £2,800/post (all-in). In-house AI route: £400 tool allocation + £600 senior editor time + £200 fact-check = £1,200/post. Savings 57%. But lead-per-post from agency content was 2.1x higher — funnel-level unit economics favoured hybrid: AI first draft, agency polish on pillar content only.",
        },
        {
          title: "API cost surprise",
          body: "A marketplace's performance marketing team scaled AI ad copy generation across 10,000 SKUs. API costs rose from £400/month pilot to £6,200/month production — unbudgeted. Renegotiated enterprise tier and reduced variant count per SKU. Lesson: model cost at production volume before rollout.",
        },
        {
          title: "Martech consolidation savings",
          body: "A SaaS company replaced three point-solution writing tools with one enterprise platform — saving £14K/year in licences and 20 hours/month in context-switching. Consolidation savings funded curation headcount. Cost metric improvement came from rationalisation, not generation speed alone.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Attribution in AI-Assisted Campaigns",
      subtitle: "Tagging, tracking, and proving what AI actually contributed",
      take: "Attribution for AI marketing means knowing which assets, tests, and workflows AI touched — and comparing their performance to non-AI equivalents. Without metadata tagging ('AI-assisted', tool used, human edit degree), you cannot isolate AI impact in analytics or defend budget.",
      why: "When leadership asks 'is AI content performing better?', marketers who cannot segment AI-assisted assets in their analytics stack guess — and lose credibility. Attribution discipline is metadata discipline.",
      paragraphs: [
        [
          s("Tag AI involvement in your CMS and marketing automation metadata. "),
          x(
            "Minimum fields: AI tool used (yes/no), human edit level (light/medium/heavy), content type, prompt template version. UTM parameters for campaign tracking inherit these fields where possible.",
            "Tags enable analytics queries: 'show conversion rate for AI-assisted landing pages vs control in Q2'.",
          ),
          s(" Make tagging a publish requirement — assets without metadata do not go live."),
        ],
        [
          s("Holdout groups preserve attribution clarity. "),
          x(
            "Reserve 10–20% of a content type for human-only production as ongoing control. Compare performance quarterly. When AI share reaches 100%, attribution signal is lost.",
            "Holdouts feel inefficient but are the scientific backbone of impact measurement.",
          ),
          s(" Present holdout results in QBR — leadership respects methodological rigour."),
        ],
        [
          s("Multi-touch attribution still applies — AI is rarely the only variable. "),
          x(
            "An AI-assisted blog post sits in a journey with paid media, sales outreach, and product-led growth. AI attribution is asset-level performance within controlled comparisons — not claiming AI 'caused' pipeline alone.",
            "Honest framing: 'AI-assisted assets in this cohort performed within 3% of control on MQL conversion' — not 'AI drove 40% pipeline growth'.",
          ),
          s(" Pair asset-level tagging with campaign-level incrementality tests where budget allows."),
        ],
      ],
      examples: [
        {
          title: "CMS metadata discipline",
          body: "A healthcare tech company added AI metadata fields to Contentful. After two quarters, analysis showed AI-assisted case studies converted 18% lower than human-interview-based studies — insight invisible before tagging. Strategy shifted: AI for formatting and summary, human for customer interviews. Attribution metadata drove strategy correction.",
        },
        {
          title: "Holdout control programme",
          body: "An insurance marketing team maintained 15% human-only email holdout. Over 12 months, AI-assisted emails matched human on open rate, trailed by 4% on quote-request click-through. Data justified human rewrite of CTA sections while keeping AI body drafts — targeted fix instead of abandoning AI or ignoring quality gap.",
        },
        {
          title: "Overclaimed AI attribution",
          body: "A startup CEO claimed 'AI content drove 60% of pipeline' in a board deck. Due diligence: no AI tagging, no holdout, pipeline coincided with new sales hires. Marketing credibility damaged. Rebuilt measurement with tagging and modest claims: 'AI content programme is cost-neutral with equivalent conversion — capacity redeployed to ABM.' Board preferred honesty.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Adoption Metrics — Workflows That Stick",
      subtitle: "Licence activation is not adoption — measuring real behaviour change",
      take: "Adoption means marketers consistently use AI workflows in production — not that licences were purchased. Adoption metrics track active users, workflow completion rates, prompt library usage, repeat utilisation, and voluntary abandonment. Low adoption signals training gaps, tool friction, or workflows that do not actually help.",
      why: "Enterprise AI shelfware is epidemic. Marketing leaders who measure adoption catch failed rollouts at 60 days instead of discovering unused licences at renewal.",
      paragraphs: [
        [
          s("Define adoption by workflow, not by tool. "),
          x(
            "'Uses ChatGPT' is not a workflow. 'Generates nurture email draft via approved prompt template, logs in Asana, passes curation gate' is a workflow. Measure completion rate of defined workflows weekly.",
            "Workflow thinking reveals where friction lives — usually at handoff between AI output and CMS/publish systems.",
          ),
          s(" Map the top five AI workflows your team should run; measure each independently."),
        ],
        [
          s("Leading adoption indicators predict lagging ROI. "),
          x(
            "Leading: weekly active users, prompt library hits, average curation time trending down, voluntary peer sharing of prompts. Lagging: productivity and quality metrics from sections 7.2–7.3.",
            "If leading indicators stall, lagging ROI will disappoint — intervene early with training or workflow redesign.",
          ),
          s(" Review leading indicators in weekly marketing ops standup during rollout quarter."),
        ],
        [
          s("Champions and sceptics both inform adoption strategy. "),
          x(
            "Champions: identify power users, document their workflows, invite them to train others. Sceptics: interview non-adopters — often they tried once, got bad output, and gave up. Fix the first-hour experience for sceptics.",
            "Mandatory adoption fails. Useful adoption spreads from proven workflows with internal case studies.",
          ),
          s(" Celebrate workflow wins publicly — 'Sarah's prompt cut email time 50%' beats 'leadership says use AI'."),
        ],
      ],
      examples: [
        {
          title: "90-day adoption dashboard",
          body: "A retail marketing org tracked: licence assigned (100%), workflow completed at least once (72%), weekly active user at day 90 (48%), prompt library contribution (23% of team). Interventions at day 45 for non-starters: 30-minute buddy session. Day 90 WAU rose to 61%. Adoption metrics preceded ROI proof by one quarter.",
        },
        {
          title: "Shelfware cancellation",
          body: "A B2B company purchased 50 seats of an AI writing platform. After six months, only 4 users active. Root cause: no workflow integration — tool was a separate tab marketers forgot. Cancelled 46 seats, reinvested in embedded AI within existing CMS. Adoption within CMS reached 80% in 60 days because workflow friction was eliminated.",
        },
        {
          title: "Champion programme ROI",
          body: "A global pharma marketing team appointed AI champions per region — not seniority-based, but demonstrated workflow success. Champions ran monthly 'show your prompt' sessions. Adoption rate 2.3x higher in champion regions versus non-champion regions in H1 comparison. Investment: 4 hours/month per champion.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "The Volume-Quality Trade-off",
      subtitle: "When scaling AI output helps — and when it floods your audience with noise",
      take: "AI removes the historical cost constraint on content volume — which creates a new strategic risk: publishing more without earning more attention. The volume-quality trade-off is the curve where additional AI-generated assets produce diminishing or negative returns. Finding your optimal point requires measuring marginal performance per incremental asset.",
      why: "SEO, email, and social algorithms in 2026 reward quality and originality more than raw volume. Marketers who scale AI output without measuring marginal returns often flood channels while damaging list health and brand perception.",
      paragraphs: [
        [
          s("Marginal asset analysis asks: what did asset N+1 contribute? "),
          x(
            "If your 4th weekly blog post earns 10% of the traffic of your 1st, the marginal post may not justify production — AI-assisted or not. Plot traffic, leads, or engagement by publish rank within period.",
            "Volume targets set without marginal analysis assume linear returns that rarely exist.",
          ),
          s(" Quarterly: review bottom quartile performing AI-assisted assets — stop producing what consistently underperforms."),
        ],
        [
          s("Channel-specific volume ceilings differ. "),
          x(
            "Email: list fatigue caps effective frequency — AI enabling 2x sends may halve engagement. Social: platform algorithms may suppress repetitive brand content. SEO: thin content clusters hurt more than help.",
            "AI should raise your quality ceiling and selective volume — not maximise volume by default.",
          ),
          s(" Document channel volume ceilings from historical data before setting AI-enabled cadence targets."),
        ],
        [
          s("Strategic redeployment beats volume maximisation. "),
          x(
            "Best marketing teams use AI savings to improve fewer assets more deeply — research, original data, better creative — rather than publish more average assets.",
            "The trade-off decision is strategic: 'We will publish 20% more with AI, reinvest remaining capacity in original research' is a plan. 'We will 3x output' is often a trap.",
          ),
          s(" Leadership alignment on volume strategy prevents middle managers from optimising local throughput at brand expense."),
        ],
      ],
      examples: [
        {
          title: "Blog frequency experiment",
          body: "A martech blog increased from 2 to 5 posts/week using AI assistance. Total organic traffic rose 8%; per-post traffic fell 35%. Marginal posts ranked poorly and cannibalised internal links. Reverted to 3 posts/week with higher research investment per post — total traffic exceeded the 5-post peak within two months.",
        },
        {
          title: "Email frequency fatigue",
          body: "A subscription box brand used AI to double email campaigns from 2 to 4 per week. Unsubscribe rate doubled; revenue per send dropped 22%. Analysis: incremental sends were promotional filler. Returned to 2 high-quality sends with AI accelerating production of those two — net revenue recovered.",
        },
        {
          title: "Quality-first volume policy",
          body: "A B2B firm's content policy: AI enables faster production of fixed quarterly pillar count — not increased pillar count. Volume constant; depth and promotion investment increased. Pipeline attributed to content rose 28% with same publish volume. Volume-quality trade-off resolved in favour of quality.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "7.8",
      title: "The Marketer Decision Lens — AI Impact Scorecard",
      subtitle: "Six metrics to review quarterly before scaling, cutting, or reinvesting in AI",
      take: "Quarterly scorecard: (1) net time-to-publishable by asset type, (2) quality vs baseline (engagement, conversion, voice score), (3) fully-loaded cost per outcome, (4) AI-tagged attribution vs holdout, (5) workflow adoption rate, (6) marginal performance of incremental volume. Green on all six → scale thoughtfully. Red on any → diagnose before adding tools or volume.",
      why: "This scorecard turns AI marketing from faith-based to evidence-based in a one-hour quarterly review — the same rhythm as media mix and pipeline reviews.",
      paragraphs: [
        [
          s("Productivity and quality rows tell you if the workflow works. "),
          x(
            "Row one: net hours saved per asset type (include curation). Row two: quality metrics vs baseline within tolerance? If productivity up but quality down, fix curation and prompts — do not scale.",
            "These two rows prevent the most common failure mode: faster bad content.",
          ),
          s(" Plot both rows on the same quarterly slide — the intersection tells the story."),
        ],
        [
          s("Cost and attribution rows tell you if the business case holds. "),
          x(
            "Row three: fully-loaded cost per lead or per asset vs pre-AI or vs alternative. Row four: AI-tagged performance vs holdout control. If cost is down but attribution shows underperformance, you are saving money on content that works less hard.",
            "Finance cares about row three; growth cares about row four. Both must pass.",
          ),
          s(" Escalate to leadership when rows three and four diverge — restructure workflow before renewal."),
        ],
        [
          s("Adoption and volume rows tell you if scaling is safe. "),
          x(
            "Row five: workflow adoption above 60% weekly active at day 90? Row six: marginal asset performance still positive? Low adoption → training or tool change. Negative marginal volume → cap output, reinvest in depth.",
            "Six green lights is rare and not required — but red on adoption or marginal volume is a hard stop on scaling.",
          ),
          s(" Schedule the scorecard review the week before AI tool renewal decisions — data beats vendor renewal emails."),
        ],
      ],
      examples: [
        {
          title: "QBR scorecard presentation",
          body: "A software CMO presented a one-page AI scorecard in QBR: 4 green, 1 amber (attribution holdout trailing by 6%), 1 red (social workflow adoption 34%). Decision: scale email workflow, fix social with CMS integration, maintain blog holdout another quarter. Board praised discipline; approved additional curation budget for social fix.",
        },
        {
          title: "Scorecard-driven tool cut",
          body: "Quarterly scorecard showed image AI tool: low adoption (22%), no measurable landing page conversion lift, high per-image API cost. Email AI: high adoption, neutral conversion, strong time savings. Cut image tool, doubled down on email prompt library investment. Saved £9K annual, improved focus.",
        },
        {
          title: "Marginal volume red light",
          body: "Scorecard row six flagged negative marginal returns on 4th and 5th weekly blog posts. Leadership approved volume cap and redeployed editor time to original survey research. Next quarter: fewer posts, one research report, 40% more backlinks and press mentions. Scorecard connected volume discipline to strategic outcomes.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch7-scorecard",
      type: "comparison",
      title: "AI Marketing Impact Scorecard",
      caption:
        "Productivity, quality, cost, and adoption — four dimensions that tell you whether AI is actually working before you scale another channel.",
    }),
  ],
  quiz: [
    {
      q: "Your team reports '3x content output' after AI adoption. What is the first question a marketing leader should ask?",
      options: [
        "Which AI tool produced the best drafts?",
        "Did quality metrics — engagement, conversion, voice scores — hold versus baseline, and what was net time-to-publishable including curation?",
        "How many tool licences were purchased?",
        "Can we scale to 5x output next quarter?",
      ],
      correct: 1,
      correctFeedback:
        "Right. Volume without quality and honest productivity measurement is a vanity metric. Re-read sections 7.2, 7.3, and 7.7.",
      wrongFeedback:
        "Measure publishable output quality and end-to-end time — not drafts generated. Re-read sections 7.2, 7.3, and 7.7.",
    },
    {
      q: "An AI writing tool costs £400/month. What belongs in a fully-loaded cost model?",
      options: [
        "Only the subscription fee.",
        "Subscription + curation labour + compliance review + training − avoided agency/freelancer cost, traced to cost per outcome.",
        "Compare to competitor tool pricing only.",
        "Divide subscription by number of drafts generated.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fully-loaded cost includes labour and offsets, connected to funnel unit economics. Re-read section 7.4.",
      wrongFeedback:
        "Tool subscription is only direct cost. Include labour, indirect costs, and avoided spend — per outcome. Re-read section 7.4.",
    },
    {
      kind: "order",
      q: "Order the six quarterly scorecard metrics from foundational workflow health to scaling safety.",
      prompt: "Drag to arrange from 'does the workflow work?' (top) to 'is scaling safe?' (bottom).",
      items: [
        "Net time-to-publishable by asset type",
        "Quality metrics vs baseline",
        "Fully-loaded cost per outcome",
        "AI-tagged attribution vs holdout",
        "Workflow adoption rate",
        "Marginal performance of incremental volume",
      ],
      correctFeedback:
        "Right. Productivity and quality first, then economics and attribution, then adoption and volume safety. Re-read section 7.8.",
      wrongFeedback:
        "Start with productivity and quality, then cost and attribution, then adoption and marginal volume. Re-read section 7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each metric into the correct scorecard dimension.",
      categories: ["Productivity", "Quality", "Cost", "Adoption"],
      items: [
        { text: "Hours from brief to publishable email including edits.", category: 0 },
        { text: "Open rate vs 90-day pre-AI baseline.", category: 1 },
        { text: "Weekly active users completing defined AI workflow.", category: 3 },
        { text: "Fully-loaded cost per published blog post.", category: 2 },
        { text: "Brand voice rubric score on monthly audit sample.", category: 1 },
        { text: "API spend at 5x projected production volume.", category: 2 },
      ],
      correctFeedback:
        "Right. Productivity = time/throughput. Quality = performance vs baseline. Cost = unit economics. Adoption = sustained workflow use. Re-read sections 7.2–7.6.",
      wrongFeedback:
        "Match each metric to time saved, performance held, money per outcome, or real usage. Re-read sections 7.2–7.6.",
    },
    {
      q: "AI-assisted emails match human on open rate but trail 8% on conversion. Best response?",
      options: [
        "Scale AI to all emails immediately — open rate is fine.",
        "Diagnose conversion gap (CTA, body, offer alignment), adjust workflow — e.g. AI draft body, human owns CTA — and maintain holdout for continued comparison.",
        "Abandon AI entirely.",
        "Stop measuring — 8% is within noise.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Quality metrics at funnel depth matter. Targeted workflow fix with continued holdout. Re-read sections 7.3 and 7.5.",
      wrongFeedback:
        "Open rate is not enough — diagnose conversion gap and fix workflow, don't scale blindly. Re-read sections 7.3 and 7.5.",
    },
    {
      q: "Marginal analysis shows your 4th weekly blog post earns 8% of the traffic of your 1st. What should you do?",
      options: [
        "Add a 5th post — more volume is always better for SEO.",
        "Cap volume at the efficient frontier and redeploy saved capacity to higher-depth content — AI should not default to maximum output.",
        "Switch to a different AI tool.",
        "Ignore — traffic is traffic.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Negative marginal returns signal volume-quality trade-off limits. Re-read section 7.7.",
      wrongFeedback:
        "Marginal performance guides volume decisions — flooding channels with low-impact assets hurts more than helps. Re-read section 7.7.",
    },
  ],
});
