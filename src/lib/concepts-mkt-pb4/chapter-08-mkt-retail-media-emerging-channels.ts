import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktRetailMediaEmergingChannels = buildChapter({
  slug: "mkt-retail-media-emerging-channels",
  number: 8,
  shortTitle: "Retail Media & Emerging Paid Channels",
  title: "Retail Media & Emerging Paid Channels — Expanding Beyond Search and Social With Disciplined Pilots",
  readingMinutes: 24,
  summary:
    "Search and social remain core paid media — but retail media networks, CTV, audio, influencer at scale, OOH programmatic, and emerging platforms capture shopper intent and attention search cannot reach. AI assists audience building, creative adaptation, incrementality analysis, and cross-channel expansion planning. Marketers who expand channels with pilot governance — incrementality gates, creative readiness, and concentration limits — capture new demand without fragmenting measurement or budget.",
  keyTakeaway:
    "Channel expansion is a portfolio decision, not a platform trend chase. The framework that wins: assess intent and audience fit → pilot with test reserve budget → validate incrementality before scale → adapt creative and measurement per channel → govern total portfolio concentration. AI accelerates pilots; marketers own fit assessment and graduation criteria.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Retail Media Networks",
      subtitle: "On-site and off-site shopper advertising — Walmart Connect, Instacart, Target Roundel, and the RMN landscape",
      take: "Retail media networks (RMNs) let brands advertise on retailer platforms — search results, product detail pages, off-site display — reaching shoppers at point of purchase with closed-loop sales attribution. AI optimises RMN bidding, keyword targeting, and share-of-shelf. RMNs offer strong purchase attribution but fragmented buying interfaces, retailer-specific tactics, and measurement that does not compare directly to Google or Meta.",
      why: "RMN spend is growing faster than any digital channel — often funded from trade marketing budgets, not performance marketing. Marketers who treat RMNs as shopper marketing with incrementality validation capture high-intent demand; those who blindly shift display budget without retail strategy waste trade funds.",
      paragraphs: [
        [
          s("RMN value proposition is closed-loop purchase data. "),
          x(
            "Unlike social prospecting, RMN ads tie to actual sales on retailer platforms — SKU-level attribution, new-to-brand metrics, and basket analysis. AI bid tools optimise toward retail-specific KPIs: ROAS, new-to-brand %, share of voice on category keywords.",
            "Closed-loop is powerful for CPG and brands sold through retailers — less relevant for DTC-only brands.",
          ),
          s(" RMN strategy starts with distribution map — which retailers matter for your category?"),
        ],
        [
          s("On-site versus off-site RMN tactics differ. "),
          x(
            "On-site: sponsored products, sponsored brands, category banners — high intent, auction-based. Off-site: retailer audience extension on open web — prospecting with retailer data, weaker attribution loop. AI budget split recommendations need separate incrementality treatment per tactic.",
            "On-site RMN competes with organic shelf position — paid and organic retail strategy must align.",
          ),
          s(" Retailer-specific playbooks — Walmart versus Amazon versus Instacart have different auction dynamics."),
        ],
        [
          s("RMN measurement does not replace incrementality. "),
          x(
            "Retail attribution credits ads near purchase — similar to retargeting inflation. Incrementality tests via holdout or geo experiments validate true lift. AI helps design tests; marketer sets graduation criteria from pilot to core budget.",
            "High RMN ROAS may include organic sales that would occur without ads.",
          ),
          s(" Annual RMN incrementality review — especially before trade budget increases."),
        ],
      ],
      examples: [
        {
          title: "CPG brand — Walmart Connect pilot",
          body: "A snack CPG brand piloted Walmart Connect sponsored products on top 10 SKUs with $40K monthly from trade budget. Closed-loop ROAS 3.8x; incrementality geo test showed 1.4x true lift. Graduated to $120K monthly with AI bid optimisation on category keywords. New-to-brand metric informed product launch targeting. RMN became 18% of total marketing spend within 12 months.",
        },
        {
          title: "Instacart for regional distribution",
          body: "A regional dairy brand used Instacart Ads to reach shoppers in distribution expansion markets before shelf placement matured. AI audience targeting by zip code and purchase history. On-site ads drove trial in new markets — correlated with syndicated data showing 12% category share gain in 6 months. RMN as distribution strategy, not just performance channel.",
        },
        {
          title: "RMN without incrementality — trade budget waste",
          body: "A household cleaning brand shifted 40% of display budget to multiple RMNs based on platform ROAS. No incrementality testing. Syndicated sales flat nationally — RMN credited sales that organic shelf placement would have generated. Post-incrementality audit: true lift 0.8x on two of three retailers. Budget rebalanced to on-site only on validated retailer.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch8-channel-expansion",
      type: "comparison",
      title: "Paid Channel Expansion Landscape",
      caption:
        "Core search and social → retail media shopper intent → CTV and audio upper funnel → emerging platforms by audience fit.",
    }),
    buildSection({
      number: "8.2",
      title: "Amazon Ads Ecosystem",
      subtitle: "Sponsored Products, Brands, Display, DSP, and AMC — the retail media platform at scale",
      take: "Amazon Ads spans the full funnel: Sponsored Products for keyword capture, Sponsored Brands for awareness, Sponsored Display for retargeting, Amazon DSP for programmatic reach, and Amazon Marketing Cloud (AMC) for custom audience analytics. AI bidding and dayparting tools are mature. Amazon requires distinct creative, keyword, and attribution literacy — treating it as 'another Google' fails.",
      why: "For brands sold on Amazon, Amazon Ads is often the highest-intent paid channel — but also the most competitive auction. Marketers need Amazon-specific strategy: organic rank interaction, new-to-brand metrics, and DSP incrementality separate from Sponsored Products.",
      paragraphs: [
        [
          s("Sponsored Products is the RMN entry point — but not the exit. "),
          x(
            "Keyword-targeted product ads dominate Amazon spend. AI automates bid management, negative keyword harvesting, and placement modifiers. Success requires catalog hygiene: titles, images, reviews, and inventory — ads amplify listings that convert organically.",
            "Bad listing + good ads = expensive clicks on a page that does not convert.",
          ),
          s(" Catalog optimisation precedes ad scale — retail readiness gate."),
        ],
        [
          s("DSP and AMC for advanced Amazon strategy. "),
          x(
            "Amazon DSP reaches audiences on and off Amazon with programmatic buying. AMC provides SQL-like query access to ad exposure and purchase data — custom attribution, audience building, path analysis. AI assists AMC query generation and audience segmentation.",
            "DSP without AMC analytics is flying blind on cross-campaign attribution.",
          ),
          s(" AMC requires clean campaign naming and tagging — governance from day one."),
        ],
        [
          s("Amazon incrementality has platform-native options. "),
          x(
            "Amazon's conversion lift studies and geo experiments validate Sponsored Products and DSP incrementality. Run before scaling DSP — retargeting-heavy Amazon campaigns often show platform ROAS inflation similar to Meta.",
            "Amazon platform ROAS is directional; incrementality before budget graduation.",
          ),
          s(" Separate incrementality results for Sponsored Products versus DSP — different intent levels."),
        ],
      ],
      examples: [
        {
          title: "Sponsored Products + catalog fix",
          body: "A consumer electronics brand ran Sponsored Products with 0.9x platform ROAS. Catalog audit revealed weak main image and 3.8-star rating versus 4.5+ competitors. Fixed listing first; relaunched ads. ROAS improved to 2.8x at same bids. AI bid tool finally had a convertable page. Lesson: Amazon ads amplify catalog, not replace it.",
        },
        {
          title: "AMC audience for conquest",
          body: "A beauty brand used AMC to build audience: shoppers who viewed competitor ASINs but purchased brand ASINs in 30 days. DSP campaign targeted this audience off-Amazon. New-to-brand purchases 22% above DSP benchmark. AI generated AMC query templates; analyst validated logic. Custom audiences unavailable on standard Sponsored Products.",
        },
        {
          title: "DSP scale without incrementality",
          body: "A supplement brand scaled Amazon DSP to $200K monthly on 4x platform ROAS. Conversion lift study: 0.7x incremental ROAS. Majority of attributed conversions were organic Amazon shoppers. DSP budget cut 60%; reallocated to Sponsored Products with 1.3x incrementality. Channel within channel matters.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Connected TV & Streaming Advertising",
      subtitle: "Hulu, YouTube CTV, programmatic OTT — upper-funnel reach with measurable downstream impact",
      take: "Connected TV (CTV) delivers video ads on streaming platforms — Hulu, Peacock, YouTube on smart TVs, programmatic OTT via The Trade Desk and DV360. AI assists audience targeting, creative versioning for screen size, and reach/frequency optimisation. CTV excels at awareness and consideration; last-click attribution undervalues it — MMM and geo incrementality required.",
      why: "Cord-cutting audiences are unreachable via linear TV but increasingly reachable via CTV. Marketers who add CTV with proper measurement capture upper-funnel demand; those who judge CTV on last-click ROAS abandon it prematurely.",
      paragraphs: [
        [
          s("CTV fits awareness and consideration objectives — not direct response alone. "),
          x(
            "Measure CTV via: brand lift studies, geo holdout incrementality, MMM contribution, and downstream branded search lift. AI tracks branded search correlation post-CTV flight. Platform view-through conversions are supplementary, not primary.",
            "Judging CTV on same-day ROAS guarantees under-investment.",
          ),
          s(" Set CTV KPIs at planning: reach, frequency, cost per completed view, branded search lift."),
        ],
        [
          s("Creative requirements differ from social video. "),
          x(
            "15 and 30-second spots, sound-on assumption, living-room viewing distance, no clickable CTA on many placements. AI adapts social creative to CTV specs — but often needs re-shoot, not just resize. Creative readiness gate before CTV launch.",
            "Repurposed 6-second social vertical rarely works on CTV.",
          ),
          s(" CTV creative library separate from social — budget production accordingly."),
        ],
        [
          s("Programmatic CTV buying needs fraud and quality controls. "),
          x(
            "Open programmatic CTV has inventory quality challenges — spoofed devices, fraudulent apps. Buy via curated marketplaces, premium publishers, or platform-direct (Hulu, YouTube). AI brand safety tools flag suspicious inventory.",
            "Cheap CTV CPMs often mean junk inventory — quality over reach volume.",
          ),
          s(" Quarterly CTV inventory audit — completion rates and viewability by publisher."),
        ],
      ],
      examples: [
        {
          title: "Geo holdout CTV — DTC mattress",
          body: "A DTC mattress brand ran 8-week CTV geo test via Hulu: 6 treatment DMAs, 6 matched controls, $350K spend. Branded search lift 14% in treatment; direct traffic up 9%. Immediate purchase iROAS 0.8; 60-day iROAS 1.4 including lagged conversions. MMM updated with CTV coefficient. CTV graduated to 12% of budget as upper-funnel layer.",
        },
        {
          title: "YouTube CTV reach campaign",
          body: "A automotive brand used YouTube CTV placement for model launch awareness. AI optimised toward efficient reach at 3+ frequency. Brand lift study: 11-point awareness increase in exposed group. Downstream dealer locator searches up 18% in flight markets. No last-click conversions — campaign success on planned upper-funnel KPIs.",
        },
        {
          title: "Repurposed social creative failure",
          body: "A DTC brand ran vertical social UGC as programmatic CTV creative. Completion rate 12% versus 78% on proper 30-second spot. CPA metrics looked catastrophic. Reshoot CTV-native creative: completion 71%, branded search lift positive. Lesson: CTV creative is not a resize job.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Audio Advertising — Podcast & Streaming",
      subtitle: "Spotify, podcast networks, and programmatic audio — reaching audiences in attention-rich environments",
      take: "Audio advertising spans streaming music (Spotify, Pandora), podcast host-read and programmatic spots, and digital radio. AI assists audience targeting, dynamic ad insertion, and creative personalisation by geography or segment. Audio offers high attention and low ad clutter but limited click-through — measurement relies on promo codes, branded search lift, and incrementality.",
      why: "Podcast audiences are growing and highly engaged. Marketers who test audio with proper attribution capture consideration-stage demand unreachable via display. Those who expect display-style click metrics abandon audio too early.",
      paragraphs: [
        [
          s("Podcast and streaming audio serve different roles. "),
          x(
            "Podcast: host-read ads, high trust, niche audience alignment, harder to scale. Streaming: programmatic scale, targeting precision, lower trust than host-read. AI matches podcast shows to audience personas via topic modelling.",
            "Podcast for depth and credibility; streaming for reach and frequency.",
          ),
          s(" Audio strategy by objective — brand story on podcast, promo on streaming."),
        ],
        [
          s("Attribution requires offline-to-online bridges. "),
          x(
            "Vanity URLs, promo codes, post-listen surveys, branded search lift, and geo holdouts. AI tracks code redemption and search correlation. No reliable click attribution — design measurement before launch.",
            "Audio without attribution plan produces 'we spent money and nothing happened' narratives.",
          ),
          s(" Unique promo codes per show or campaign — non-negotiable for podcast."),
        ],
        [
          s("Creative is the targeting in audio. "),
          x(
            "No visual — script, voice, and offer clarity determine performance. AI drafts scripts; human voice talent delivers. 60-second host-read outperforms 30-second announcer spot for consideration; 15-second promo for streaming retargeting.",
            "Audio creative testing is script and offer testing — not thumbnail testing.",
          ),
          s(" Test 2–3 scripts per placement before scaling spend."),
        ],
      ],
      examples: [
        {
          title: "Podcast host-read — B2B SaaS",
          body: "A project management SaaS advertised on 5 productivity podcasts via host-read spots. Unique URL per show. AI tracked signup correlation by show. Two shows drove 70% of attributed signups at $180 CAC versus $320 Google average for same persona. Scaled to 12 shows with AI show-selection model. Audio became 8% of acquisition budget.",
        },
        {
          title: "Spotify streaming audio — retail promo",
          body: "A fast-food chain ran Spotify audio ads with geo-targeting around new store openings. Promo code in ad copy. Redemption rate 2.1% — above benchmark. Branded search lift 8% in opening week markets. Incrementality geo test confirmed 1.2x lift on foot traffic proxy (directional). Audio for localised promo, not national brand.",
        },
        {
          title: "Audio without attribution",
          body: "A fintech brand spent $80K on podcast ads with generic URL. Could not isolate podcast contribution from other channels. Declared audio 'failed.' Retry with unique codes and branded search monitoring: attributed CAC competitive with LinkedIn. First campaign measurement failure, not channel failure.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Influencer Advertising at Scale",
      subtitle: "Creator partnerships, whitelisting, and AI-assisted creator selection and content briefing",
      take: "Influencer advertising at scale moves beyond one-off posts to programmatic creator partnerships: whitelisted ads from creator handles, creator marketplace bulk deals, AI-matched creator selection by audience overlap and engagement quality, and brief generation at volume. Paid influencer combines creator trust with paid media targeting and measurement.",
      why: "Organic influencer reach declined with algorithm changes. Whitelisted paid influencer ads — running ads from creator accounts — combine authenticity with scale. Marketers who systematise creator selection and measurement capture social proof at media efficiency.",
      paragraphs: [
        [
          s("Whitelisting bridges creator trust and paid targeting. "),
          x(
            "Brand gets ad account access to run paid ads from creator's handle — post appears as creator content with paid targeting. AI identifies creators with audience overlap to target personas. Performance often beats brand-handle ads on engagement and CPA.",
            "Whitelisting requires creator contract terms — not all creators permit.",
          ),
          s(" Whitelisting playbook: creator criteria, approval workflow, content rights, performance reporting."),
        ],
        [
          s("AI creator selection at scale. "),
          x(
            "Tools analyse engagement rate, audience authenticity, topic relevance, brand safety, and historical ad performance. AI scores creators against brief; human approves final roster. Avoid follower-count-only selection — micro-influencers often outperform on CPA.",
            "Fake followers and engagement pods corrupt selection — authenticity scoring mandatory.",
          ),
          s(" Creator roster refresh quarterly — audience composition shifts."),
        ],
        [
          s("Measurement: whitelisted ads use platform attribution plus incrementality. "),
          x(
            "Track whitelisted ad performance in Meta/TikTok ads manager. Supplement with promo codes, new customer %, and geo or conversion lift for true incrementality. Creator fee is media cost — include in CPA calculation.",
            "Creator fee omitted from CPA makes influencer look cheaper than it is.",
          ),
          s(" Blended CPA = ad spend + creator fees / attributed conversions."),
        ],
      ],
      examples: [
        {
          title: "Whitelisted Meta ads — skincare DTC",
          body: "A skincare brand whitelisted 8 micro-influencers ($5K–50K followers) with audience overlap to core persona. Ran whitelisted video ads from creator handles. CPA 28% lower than brand-handle ads on same targeting. AI selected creators by engagement quality score. Scaled to 25 creators with templated brief AI generation.",
        },
        {
          title: "Creator marketplace at scale",
          body: "A gaming app used TikTok Creator Marketplace for 50 UGC creators monthly. AI brief generation standardised hooks; creators produced variants. Whitelisted top 10% performers. User acquisition cost 15% below standard TikTok ads. Programme ops: creator CRM, rights management, payment automation.",
        },
        {
          title: "Follower count trap",
          body: "A fashion brand partnered with 3 mega-influencers (1M+ followers) on flat fees. Engagement rate 0.3%; CPA 4x target. AI post-analysis showed audience mismatch and low authenticity scores. Shifted to 30 micro-influencers with AI scoring. Blended CPA hit target. Scale is not reach — it is relevant reach.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Programmatic Out-of-Home & Digital OOH",
      subtitle: "Billboards, transit, and place-based media bought programmatically — reach with geo precision",
      take: "Digital out-of-home (DOOH) and programmatic OOH buy screen inventory — billboards, transit, malls, gyms — via platforms like Vistar, Place Exchange, and Hivestack. AI optimises by location, time of day, weather triggers, and audience mobility data. OOH excels at reach and frequency in physical contexts; measurement via mobile attribution, geo lift, and brand lift studies.",
      why: "DOOH brings physical-world presence to performance marketing programmes — especially for local retail, events, and brand campaigns. Marketers who integrate DOOH with geo-targeted digital capture omnichannel local demand.",
      paragraphs: [
        [
          s("DOOH buying is location and context, not audience cookies. "),
          x(
            "Target by: geographic radius around stores, commuter routes, event venues, weather conditions, daypart. AI recommends screen selection based on mobility patterns. No click — measurement is geo-based.",
            "DOOH complements digital geo campaigns — same DMA, consistent message.",
          ),
          s(" DOOH creative must work at distance — 7 words or fewer on hero message."),
        ],
        [
          s("Programmatic DOOH enables agile creative rotation. "),
          x(
            "Digital screens update remotely — daypart messaging, weather triggers, inventory-linked promos. AI generates variant copy; dynamic creative feeds from product APIs for retail.",
            "Static billboard thinking wastes programmatic DOOH capability.",
          ),
          s(" Test 2–3 creative variants per location cluster before scaling."),
        ],
        [
          s("Geo lift is primary DOOH measurement. "),
          x(
            "Compare foot traffic, branded search, or sales in exposed geos versus matched controls. Mobile attribution partners estimate exposed audience. AI analyses lift by screen cluster.",
            "DOOH without geo measurement is brand spend without accountability.",
          ),
          s(" Minimum 4-week flight for measurable geo lift — shorter flights inconclusive."),
        ],
      ],
      examples: [
        {
          title: "Retail store radius DOOH",
          body: "A grocery chain ran programmatic DOOH within 3 miles of 50 stores promoting weekly deals. Dynamic creative pulled prices from feed. Geo lift study: 6% foot traffic increase in exposed stores versus matched controls. Combined with Meta geo-targeted ads — omnichannel local lift 11%. DOOH 5% of local marketing budget.",
        },
        {
          title: "Weather-triggered DOOH",
          body: "A beverage brand used weather triggers: ads on transit screens when temperature exceeded 25°C. AI managed trigger rules and creative rotation. Redemption via QR code tracked 2.3% scan rate on hot days versus 0.8% on non-triggered days. Contextual relevance beat static scheduling.",
        },
        {
          title: "DOOH without geo measurement",
          body: "A startup spent $60K on DOOH in one city for 'brand awareness' with no geo lift study. Could not correlate to any metric. Declared DOOH ineffective. Retry in 3 cities with geo holdout: 2 showed measurable branded search lift, 1 did not. City selection mattered — measurement enabled learning.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Emerging Platforms — TikTok, Reddit, Threads & Beyond",
      subtitle: "Audience-specific channels requiring native creative, community literacy, and pilot discipline",
      take: "Emerging paid platforms — TikTok Ads, Reddit Ads, Threads, Snapchat, Pinterest — offer audience access unavailable elsewhere but demand native creative, community norms understanding, and separate measurement baselines. AI assists creative generation, comment sentiment monitoring, and audience discovery. Pilots require platform-specific KPIs and incrementality gates before core budget graduation.",
      why: "Chasing every new platform fragments budget and measurement. Marketers who assess audience fit first and pilot with governance capture emerging channel alpha; those who replicate Meta strategy on Reddit get downvoted and wasted spend.",
      paragraphs: [
        [
          s("Audience fit precedes platform hype. "),
          x(
            "TikTok: Gen Z and millennial, entertainment-first, UGC native. Reddit: interest-community, sceptical of ads, comment engagement critical. Pinterest: planning and inspiration, high purchase intent for home, fashion, wedding. AI audience overlap analysis versus your CRM — fit score before pilot.",
            "Platform demographics must overlap your customer — not just trending.",
          ),
          s(" Fit assessment documented in pilot brief — no pilot without >40% audience overlap estimate."),
        ],
        [
          s("Native creative is non-negotiable on emerging platforms. "),
          x(
            "TikTok: vertical, hook in 1 second, lo-fi aesthetic often outperforms polished. Reddit: text-forward, community tone, transparent about being an ad. AI generates platform-native variants; community manager reviews for tone violations.",
            "Repurposed Meta creative on TikTok signals 'brand doesn't get it' — algorithm and users punish.",
          ),
          s(" Platform-native creative budget 30% of pilot — not just media spend."),
        ],
        [
          s("Emerging platform pilots have explicit graduation criteria. "),
          x(
            "Example: $50K over 8 weeks, CPA within 1.5x core channel, incrementality test at $100K cumulative, creative refresh capacity confirmed. AI tracks pilot metrics against criteria; fail fast on misfit platforms.",
            "Graduation criteria prevent zombie pilots that consume budget without decision.",
          ),
          s(" Kill criteria equally important — 2x target CPA for 3 weeks = pause and diagnose."),
        ],
      ],
      examples: [
        {
          title: "TikTok pilot graduation",
          body: "A beauty brand piloted TikTok Spark Ads with UGC-style creative. $40K over 6 weeks. CPA 1.3x Meta benchmark; incrementality at $120K showed 1.15x. Graduated to 10% of social budget. AI creative tools generated hook variants weekly. Native creative team of 2 dedicated — not repurposed Meta assets.",
        },
        {
          title: "Reddit community-native ads",
          body: "A developer tools company ran Reddit Ads in r/programming and r/devops with text-forward ads acknowledging 'yes, this is an ad' tone. Community manager monitored comments. Engagement rate 3x Reddit benchmark; trial signups at competitive CPA. AI sentiment monitoring flagged negative threads for response within 2 hours. Reddit 6% of acquisition — niche but efficient.",
        },
        {
          title: "Platform misfit — B2B on Snapchat",
          body: "A enterprise software company piloted Snapchat based on 'young audience' narrative. Audience overlap analysis post-hoc: 8% ICP match. CPA 5x LinkedIn. Killed after 4 weeks per kill criteria. Lesson: fit assessment before spend, not after. Saved $80K versus open-ended pilot.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — Channel Expansion Portfolio",
      subtitle: "When to pilot, scale, or kill emerging channels — governing expansion without trend-chasing",
      take: "Before adding retail media, CTV, audio, influencer, OOH, or emerging platforms, run four checks: (1) audience fit — does your ICP index on this channel? (2) measurement readiness — can you attribute with promo codes, geo lift, or incrementality? (3) creative and ops capacity — native creative and platform expertise available? (4) portfolio concentration — does expansion stay within channel caps and test reserve policy? Pilot when fit and measurement align. Scale when incrementality confirms. Kill when kill criteria trigger — fast failure preserves budget for better fits.",
      why: "Channel expansion is the highest-risk budget decision after total spend level. This lens prevents both paralysis on proven core channels and reckless fragmentation across every new platform.",
      paragraphs: [
        [
          s("Check one: audience fit with data, not assumptions. "),
          x(
            "CRM overlap, platform demographics, competitive presence, and category behaviour on channel. AI fit scoring from audience tools; strategist confirms business relevance.",
            "Young audience on platform does not mean your young customer is there in buying mode.",
          ),
          s(" No pilot without documented fit score and ICP overlap estimate."),
        ],
        [
          s("Check two: measurement before media spend. "),
          x(
            "Define attribution method per channel type: RMN closed-loop plus incrementality, CTV geo lift, audio promo codes, influencer blended CPA. Measurement plan in pilot brief — not post-hoc.",
            "Channels without measurement plan become faith-based budget.",
          ),
          s(" Incrementality gate at pilot graduation — non-negotiable for channels above test reserve."),
        ],
        [
          s("Checks three and four: capacity and portfolio limits. "),
          x(
            "Native creative production, platform-certified operator, and reporting integration. Total emerging channel spend within test reserve (5–10%) until graduation. No single new channel above 15% of total spend without incrementality proof.",
            "Portfolio concentration limits protect core channel investment from experimental drain.",
          ),
          s(" Quarterly channel expansion review: pilot status, graduation candidates, kill list."),
        ],
      ],
      examples: [
        {
          title: "Graduation portfolio review",
          body: "A CPG brand's quarterly expansion review: Amazon RMN graduated (1.3x incrementality), CTV in pilot month 4 (promising geo lift), TikTok killed (CPA 2.5x), podcast scaling (code attribution positive). Test reserve reallocated from killed TikTok to podcast. Portfolio discipline prevented simultaneous over-expansion across four channels.",
        },
        {
          title: "Measurement-first CTV pilot",
          body: "A DTC brand refused CTV spend until geo holdout design approved. 2-week delay before launch. Holdout results gave confidence to scale — finance approved 15% budget increase on incrementality evidence. Measurement-first delayed launch but accelerated graduation versus ambiguous pilot.",
        },
        {
          title: "Creative capacity kill",
          body: "A brand graduated Reddit pilot on strong CPA but lacked community management capacity for comment engagement at scale. Paused scale-up; hired community manager; relaunched 6 weeks later. Lens check three prevented reputation damage from unmonitored scaled spend.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A CPG brand sees 4x RMN platform ROAS. Before scaling trade budget 3x, what validation is essential?",
      options: [
        "Trust platform ROAS — it's closed-loop.",
        "Incrementality testing — RMN attribution may credit organic sales near purchase.",
        "Copy Meta creative to RMN.",
        "Skip testing — retail intent is always incremental.",
      ],
      correct: 1,
      correctFeedback:
        "Right. RMN needs incrementality validation like other near-purchase channels. Re-read sections 8.1 and 8.2.",
      wrongFeedback:
        "Closed-loop does not guarantee incrementality. Test before scale. Re-read sections 8.1 and 8.2.",
    },
    {
      q: "CTV campaign shows poor last-click ROAS but strong branded search lift. How should you evaluate?",
      options: [
        "Kill immediately — ROAS is the only metric.",
        "Evaluate on upper-funnel KPIs, geo lift, and MMM — CTV value is often lagged and non-click.",
        "Double CTV and ignore search.",
        "Move all budget to retargeting.",
      ],
      correct: 1,
      correctFeedback:
        "Right. CTV requires upper-funnel measurement. Re-read section 8.3.",
      wrongFeedback:
        "CTV is not judged on last-click ROAS alone. Re-read section 8.3.",
    },
    {
      kind: "order",
      q: "Order the channel expansion process from assessment to scale.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Assess audience fit and ICP overlap",
        "Pilot with test reserve and measurement plan",
        "Validate incrementality at graduation threshold",
        "Scale within portfolio concentration limits",
      ],
      correctFeedback:
        "Right. Fit → pilot → incrementality → scale with limits. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Start with fit assessment. Incrementality before scale. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each channel into the correct measurement approach.",
      categories: ["Closed-loop / platform", "Geo lift / incrementality", "Promo code / search lift", "Blended CPA"],
      items: [
        { text: "Amazon Sponsored Products sales attribution.", category: 0 },
        { text: "Hulu CTV geo holdout test.", category: 1 },
        { text: "Podcast unique URL and code redemption.", category: 2 },
        { text: "Whitelisted influencer — ad spend plus creator fees.", category: 3 },
        { text: "Walmart Connect incrementality study.", category: 1 },
        { text: "DOOH foot traffic geo comparison.", category: 1 },
      ],
      correctFeedback:
        "Right. RMN has closed-loop but needs incrementality. CTV/DOOH use geo lift. Audio uses codes. Influencer uses blended CPA. Re-read sections 8.1–8.6.",
      wrongFeedback:
        "Match each channel to its primary measurement method. Re-read sections 8.1–8.6.",
    },
    {
      q: "An enterprise B2B company wants to pilot Snapchat because 'young audience.' What does the decision lens recommend?",
      options: [
        "Launch immediately — youth equals opportunity.",
        "Run audience fit assessment first — low ICP overlap should block or kill pilot early.",
        "Spend entire annual budget on Snapchat.",
        "Skip measurement.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Audience fit precedes pilot. Re-read sections 8.7 and 8.8.",
      wrongFeedback:
        "Fit assessment before pilot spend. Re-read sections 8.7 and 8.8.",
    },
    {
      q: "A brand graduated a TikTok pilot on CPA but has no native creative production capacity. What should happen?",
      options: [
        "Scale immediately — CPA is all that matters.",
        "Pause scale until creative capacity confirmed — lens check three prevents unsustainable expansion.",
        "Repurpose all Meta creative.",
        "Abandon TikTok permanently.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Creative and ops capacity are expansion gates. Re-read sections 8.7 and 8.8.",
      wrongFeedback:
        "Capacity check before scaling emerging channels. Re-read sections 8.7 and 8.8.",
    },
  ],
});
