import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktSocialMediaStrategyManagement = buildChapter({
  slug: "mkt-social-media-strategy-management",
  number: 7,
  shortTitle: "Social Media Strategy & Management",
  title: "Social Media Strategy & Management — Building Platform Operating Systems, Community Protocols, and Integrated Organic-Paid Programmes With AI-Assisted Content and Listening",
  readingMinutes: 24,
  summary:
    "Social media is where brand promise meets real-time public conversation — amplification, criticism, trends, and community loyalty in one feed. AI accelerates content drafting, scheduling optimisation, social listening synthesis, and response suggestion — but programme impact depends on marketer-owned architecture: platform strategy tied to business goals, content pillars and editorial governance, community management protocols, paid-organic integration, and measurement beyond vanity metrics. Teams that post without an operating system chase algorithms; teams that build a social system compound reach, reputation, and pipeline influence.",
  keyTakeaway:
    "Social media is an operating system, not a posting calendar. The sequence that wins: define platform roles and audience fit → establish content pillars and editorial workflow → govern community response and escalation → integrate paid boost with organic proof → listen and adapt to trends with brand guardrails → measure business outcomes → run a decision lens before platform expansion or AI volume scale. AI accelerates production and listening; marketers own strategy, voice, and crisis readiness.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "Social Operating System & Governance",
      subtitle: "Roles, workflows, brand guardrails, and crisis protocols — infrastructure before content volume",
      take: "A social operating system defines: platform ownership, content workflow (brief → draft → approve → schedule → engage), brand voice and visual standards per platform, escalation paths for negative comments and viral moments, and tooling stack. AI slots into draft, schedule, and listen layers — but governance prevents off-brand posts, unauthorized replies, and slow crisis response when volume scales.",
      why: "Social without governance is reputational roulette. One intern's off-brand reply or delayed crisis response costs more than a year of content production.",
      paragraphs: [
        [
          s("RACI clarity prevents channel ownership fights. "),
          x(
            "Marketing owns strategy and calendar; comms owns crisis escalation; product marketing owns launch posts; support may own DM triage with scripts. AI drafts do not change RACI — approval routes stay human-defined.",
            "Unclear ownership produces duplicate posts or silent periods during launches.",
          ),
          s(" RACI chart in social playbook — reviewed when org restructures."),
        ],
        [
          s("Workflow enforces brand and legal gates by content type. "),
          x(
            "Green: culture and tips, comms auto-approve within voice guide. Yellow: product claims, PMM review. Red: financial, political, or competitor comparisons — legal review. AI pre-scan flags yellow/red triggers before human queue.",
            "Skipping gates for speed is how comparative claims become legal letters.",
          ),
          s(" Workflow tool stores approvals — required for regulated and public companies."),
        ],
        [
          s("Crisis social protocol is pre-documented and drilled. "),
          x(
            "Pause scheduled posts, elevate mentions above sentiment threshold to war room, single approver for outbound crisis statements, dark period length defined. AI monitoring alerts on velocity spikes — humans decide pause.",
            "Improvising crisis social response in Slack threads adds hours and errors.",
          ),
          s(" Semi-annual tabletop: social crisis simulation with comms, legal, support."),
        ],
      ],
      examples: [
        {
          title: "RACI fix — launch duplication",
          body: "Product launch saw identical announcement from brand, product, and CEO accounts within 1 hour — audience fatigue, algorithmic suppression. RACI assigned single lead account per launch with others resharing after 4 hours. Launch engagement consolidated 2.3x on primary post.",
        },
        {
          title: "Yellow gate save — comparative claim",
          body: "AI-drafted LinkedIn post claimed 'only platform with X.' PMM review flagged unsubstantiated superiority. Revised to customer-outcome framing with approved stat. Competitor legal team had screenshot the original draft from preview leak — gate prevented publication disaster.",
        },
        {
          title: "Crisis pause — outage response",
          body: "Service outage triggered 4,000 negative mentions in 2 hours. Crisis protocol paused 12 scheduled promotional posts within 15 minutes. Single-threaded support + comms replies from approved FAQ. Sentiment recovery 40% faster than prior outage with ad hoc responses.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch7-social-system",
      type: "flow",
      title: "Social Media Operating System",
      caption:
        "Governance and RACI → platform and pillar strategy → editorial production → publish and community management → paid-organic integration → listening and trends → measurement and system refinement.",
    }),
    buildSection({
      number: "7.2",
      title: "Platform Strategy & Audience Fit",
      subtitle: "Channel selection, format norms, and resource allocation — be excellent somewhere, not mediocre everywhere",
      take: "Platform strategy matches channels to ICP behaviour and content strengths: LinkedIn for B2B authority, Instagram/TikTok for visual consumer brands, X for news and tech discourse, YouTube for long-form education. AI analyses competitor platform mix and engagement benchmarks — marketers decide where to invest production, not which trendy platform to chase without audience fit.",
      why: "Platform sprawl dilutes quality and burns team capacity. Absent channels often outperform forced presence on every network.",
      paragraphs: [
        [
          s("Score platforms on audience fit, content fit, and business goal. "),
          x(
            "Audience: ICP concentration. Content: can you sustain native format quality weekly? Business: brand awareness, recruiting, support deflection, commerce? Score 1–5; invest in top two platforms first.",
            "TikTok because competitors are there is not strategy — ICP scroll behaviour is.",
          ),
          s(" Annual platform review when ICP or product motion shifts — sunset underperformers."),
        ],
        [
          s("Format-native content beats cross-posted resize. "),
          x(
            "LinkedIn: document carousels and narrative posts. Instagram: Reels with hook in 2 seconds. YouTube: chapters and search titles. AI adapts core narrative to format specs — not identical copy on all surfaces.",
            "Link-preview dumps on every platform signal lazy social — algorithms deprioritise.",
          ),
          s(" Format playbook per active platform — examples of on-brand vs off-brand."),
        ],
        [
          s("Resource model matches platform ambition. "),
          x(
            "Minimum viable LinkedIn B2B: 3 posts weekly, 1 carousel monthly, daily comment engagement 30 min. Consumer TikTok: 4–6 videos weekly with trend participation. AI reduces draft time — engagement and video production still need humans.",
            "Under-resourced platform presence harms brand more than silence.",
          ),
          s(" Capacity plan in social strategy doc — hire or cut platforms honestly."),
        ],
      ],
      examples: [
        {
          title: "Platform sunset — Snapchat exit",
          body: "B2B analytics firm maintained Snapchat for 2 years — 200 followers, no ICP engagement. Platform score audit recommended sunset. Resources reallocated to LinkedIn video series. LinkedIn pipeline influence up 18%; no measurable loss from Snapchat exit.",
        },
        {
          title: "Format-native lift — carousel series",
          body: "Shifted LinkedIn from link-only posts to native carousels summarising research. Average engagement 4.2x; link clicks via final slide CTA maintained traffic. AI drafted carousel copy from long-form reports — designer templated visuals.",
        },
        {
          title: "TikTok test with capacity gate",
          body: "DTC brand tested TikTok with dedicated 0.5 FTE videographer — 90-day pilot, clear ICP youth segment hypothesis. Hit followership target; scaled to 1 FTE. Without capacity gate, would have AI-slop video damaging brand.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Content Pillars & Editorial Calendar",
      subtitle: "Themes, mix ratios, and cadence — predictable value for followers and algorithms",
      take: "Social content pillars organise the feed: education, proof, culture, product, and community spotlight — typically 3–4 pillars with target mix ratios (e.g., 40% education, 30% proof, 20% culture, 10% product). Editorial calendar maps pillars to campaigns, launches, and cultural moments 4–6 weeks ahead. AI drafts calendar slots from pillar briefs and flags gaps — marketers own mix discipline and avoid product-only feeds.",
      why: "Random posting trains followers and algorithms to ignore you. Pillars create recognisable brand rhythm — audiences know what value to expect.",
      paragraphs: [
        [
          s("Mix ratios prevent product spam and culture fluff extremes. "),
          x(
            "Audit quarterly: actual mix vs target. Product-heavy feeds underperform in B2B trust; culture-only feeds fail to convert interest. AI classifies published posts by pillar — drift alerts weekly.",
            "Launch season often breaks mix — plan pillar buffer around launches.",
          ),
          s(" Mix dashboard in monthly social review — adjust next month calendar."),
        ],
        [
          s("Campaign arcs span multiple posts, not single announcements. "),
          x(
            "Launch arc: teaser → proof → demo clip → customer quote → FAQ thread. AI sequences arc from launch brief — comms ensures narrative continuity across 2 weeks.",
            "Single launch post is wasted momentum — arcs build algorithmic and human attention.",
          ),
          s(" Arc templates in playbook for product, hiring, and research launches."),
        ],
        [
          s("Evergreen pillar content buffers volatile weeks. "),
          x(
            "Bank of education and proof posts ready when news cycle quiet or team capacity low. AI refreshes evergreen stats quarterly — outdated data worse than silence.",
            "Evergreen bank prevents panic posting or week-long gaps.",
          ),
          s(" Minimum 2-week scheduled buffer maintained — crisis pause exempt."),
        ],
      ],
      examples: [
        {
          title: "Mix audit — product overload",
          body: "B2B SaaS feed ran 68% product posts in Q2 launch quarter. Engagement down 35%, unfollows up. Q3 reset to 40/30/20/10 mix with evergreen education bank. Engagement recovered to baseline in 6 weeks.",
        },
        {
          title: "Launch arc — research report",
          body: "Research launch used 5-post arc over 10 days: stat teaser, carousel deep dive, customer reaction quote, live AMA announcement, recap thread. Report downloads 2.8x prior single-post launch. AI drafted arc from report outline.",
        },
        {
          title: "Evergreen buffer — holiday week",
          body: "Team OOO last week of December; evergreen bank auto-scheduled education carousels. No engagement drop versus prior year gap week. Bank refreshed January with updated benchmarks.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Community Management & Response Protocols",
      subtitle: "Comment triage, DM handling, and escalation — conversation is half the programme",
      take: "Community management defines response SLAs, tone guides, triage categories (praise, question, complaint, troll, crisis), and escalation to support or legal. AI suggests reply drafts and sentiment tags — humans approve outbound brand voice. Unanswered comments and hostile threads signal brand indifference; over-automated replies feel hollow.",
      why: "Publishing without engagement is broadcast, not social. Response quality directly affects sentiment, loyalty, and crisis trajectory.",
      paragraphs: [
        [
          s("Response SLA by severity and platform. "),
          x(
            "Complaint with product impact: 2-hour first response, support handoff. General question: same business day. Praise: optional like or short thank. Troll: hide/block per policy, no engagement fuel. AI queues by severity — humans meet SLA.",
            "SLA breach on viral complaint post multiplies damage — monitor velocity.",
          ),
          s(" Weekly SLA compliance report — social + support joint accountability."),
        ],
        [
          s("Tone guide distinguishes empathy from defensiveness. "),
          x(
            "Acknowledge issue, clarify facts without legalese, offer next step (DM, support link). Banned: arguing, sarcasm, copying legal statements into public threads. AI drafts empathetic openers — comms reviews edge cases.",
            "Defensive replies become screenshots — train for de-escalation.",
          ),
          s(" Reply template library with personalisation slots — not identical boilerplate."),
        ],
        [
          s("Proactive community building beyond reactive replies. "),
          x(
            "Spotlight user-generated content, ask questions, poll community on relevant topics, thank advocates by name. AI identifies high-value engagers for outreach list — marketer approves recognition.",
            "Reactive-only programmes miss loyalty-building moments.",
          ),
          s(" Monthly proactive engagement quota per platform — comment, UGC reshare, DM thank."),
        ],
      ],
      examples: [
        {
          title: "SLA save — viral complaint",
          body: "Customer complaint tweet reached 50K views in 3 hours. Severity queue alerted; support + comms responded in 47 minutes with fix status and DM invite. Thread resolved publicly; sentiment shifted positive in follow-up replies. Prior similar incident with 8-hour delay became PR headache.",
        },
        {
          title: "Tone training — defensive reply",
          body: "Junior social manager replied 'actually you're wrong' to confused customer. Screenshot circulated. Tone guide workshop; AI drafts now require comms approval on negative threads until certified. Zero defensive incidents 12 months post-training.",
        },
        {
          title: "UGC spotlight programme",
          body: "Monthly #CustomerWin reshare with permission DMs. AI flagged 40 candidate posts; comms selected 8. UGC series drove highest save rate on Instagram — authentic proof pillar content without production cost.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Paid Social & Organic Integration",
      subtitle: "Boost strategy, creative testing, and full-funnel alignment — paid amplifies proof, not replaces strategy",
      take: "Paid social integrates with organic: boost top-performing organic posts to ICP, run structured creative tests for prospecting, retarget engagers, and align messaging with landing pages and CRM attribution. AI optimises audience and bid suggestions — marketers set budget caps, creative standards, and rules that paid cannot outrun broken organic.",
      why: "Paid without organic proof pays for reach of weak creative. Integrated programmes use organic as testing ground — paid scales winners.",
      paragraphs: [
        [
          s("Boost organic winners after engagement validation. "),
          x(
            "Wait 48–72 hours; boost posts above engagement threshold to lookalike or ICP job titles. Creative is pre-validated — lower CPA than cold ads. AI ranks boost candidates by engagement velocity and comment sentiment.",
            "Boosting every post trains paid dependency — selective amplification only.",
          ),
          s(" Boost budget separate from prospecting — typically 20–30% of social paid."),
        ],
        [
          s("Prospecting creative tests mirror organic pillars. "),
          x(
            "Test 3–4 variants per pillar hypothesis — education hook vs proof hook vs offer. Kill losers at 72 hours with statistical discipline. AI generates variant copy within voice guide — designer owns thumb-stop visual.",
            "Paid-only creative disconnected from organic confuses returning visitors.",
          ),
          s(" Winning paid creative feeds back into organic library — closed loop."),
        ],
        [
          s("Attribution connects social to pipeline and commerce. "),
          x(
            "UTM discipline, platform pixel/CAPI health, CRM campaign fields on inbound forms. Multi-touch model for long B2B cycles. AI flags broken tracking before budget scale.",
            "ROAS dashboards on broken attribution misallocate millions.",
          ),
          s(" Monthly paid-organic review — shared learnings doc across performance and brand teams."),
        ],
      ],
      examples: [
        {
          title: "Organic boost — webinar promo",
          body: "Organic LinkedIn post on webinar exceeded engagement benchmark 2.1x. Boosted to target titles — $2,800 spend, 340 registrations at $8.24 vs $34 CPA on cold creative test. Boost playbook now default for event promos.",
        },
        {
          title: "Creative test loop",
          body: "Prospecting test: customer quote video vs stat carousel. Video won 40% lower CPL; adapted as organic Reels series. Paid informed organic — not separate agencies siloed.",
        },
        {
          title: "Tracking fix before scale",
          body: "Planned Q4 paid scale; attribution audit found 38% conversion path broken post site migration. Fixed CAPI and UTM persistence before spend. Avoided false ROAS that would have entrenched losing creative.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Influencer & Creator Partnerships",
      subtitle: "Selection, briefing, disclosure, and measurement — borrowed trust with brand control",
      take: "Influencer and creator partnerships extend reach through trusted voices: micro-influencers for niche B2B, creators for consumer lifestyle, employee-creator hybrids. AI researches audience authenticity and overlap with ICP — marketers own contracts, disclosure (#ad), creative briefs, approval rights, and brand safety clauses.",
      why: "Wrong influencer match or undisclosed paid content damages trust and invites regulatory scrutiny. Partnerships are brand extensions — govern accordingly.",
      paragraphs: [
        [
          s("Selection criteria beyond follower count. "),
          x(
            "Audience demographics, engagement authenticity, content adjacency, past controversy scan, overlap with existing customers. AI flags fake follower patterns and sentiment on sponsor posts — human makes final selection.",
            "Macro reach with wrong audience is wasted spend and brand mismatch.",
          ),
          s(" Preferred creator roster by pillar — refresh annually."),
        ],
        [
          s("Brief for creator voice, not script recitation. "),
          x(
            "Provide: key message, must-include proof, must-not claims, disclosure requirement, approval timeline. Creators deliver in their voice — heavy scripting kills performance. AI drafts brief from campaign doc — legal reviews claims.",
            "Over-scripted influencer posts underperform and feel inauthentic.",
          ),
          s(" First-time partners get sample content review before full campaign."),
        ],
        [
          s("Measure partnerships on business outcomes, not impressions alone. "),
          x(
            "Track: tracked links, promo codes, brand lift survey if budget allows, sentiment in comments. Compare creator cohort CPA to paid social benchmark. AI aggregates performance — marketer decides renew or cut.",
            "Impression-heavy creator deals are vanity — tie to conversion or lift.",
          ),
          s(" Post-campaign debrief with creator when relationship ongoing — improve briefs."),
        ],
      ],
      examples: [
        {
          title: "Micro-influencer B2B — niche win",
          body: "Cybersecurity firm partnered with 12 micro-influencers (5K–20K followers) in security engineering niche. Combined reach smaller than one macro — but demo requests 3.2x macro pilot CPA. AI helped identify authentic engagers from conference speaker lists.",
        },
        {
          title: "Disclosure failure — regulatory near-miss",
          body: "Creator posted sponsored content without #ad — comms caught in approval queue before publish. Contract updated with disclosure checklist and penalty clause. Legal training for marketing on FTC/ASA rules.",
        },
        {
          title: "Creator brief iteration",
          body: "First creator campaign used 800-word script — performance weak. Revised brief: 3 bullet messages + proof link. Creator-produced video hit 2.4x engagement. Lesson: brief outcomes, not words.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Social Listening & Trend Response",
      subtitle: "Monitoring, sentiment, and newsjacking guardrails — participate without pandering",
      take: "Social listening tracks brand mentions, competitor moves, category trends, and crisis signals across platforms and forums. AI synthesises volume, sentiment, and emerging themes — marketers define when to respond, when to monitor silently, and newsjacking guardrails (on-brand, non-exploitative, pre-approved escalation). Trend-chasing without guardrails produces cringe and backlash.",
      why: "Markets move in social feeds before press releases. Listening informs product, comms, and content — but reactive posting needs discipline.",
      paragraphs: [
        [
          s("Listening tiers separate signal from noise. "),
          x(
            "Tier 1: brand and executive mentions — immediate alert. Tier 2: competitor and category keywords — daily digest. Tier 3: cultural trends — weekly review for optional participation. AI classifies mention severity — humans set tiers.",
            "Alert fatigue from Tier 3 treated as Tier 1 wastes comms capacity.",
          ),
          s(" Listening taxonomy in social playbook — aligned with crisis monitoring."),
        ],
        [
          s("Trend participation checklist before newsjack. "),
          x(
            "Relevant to pillar? Risk of tone-deaf association? Legal/reputational exposure? Resource to execute well in 4 hours? If any fail — skip. AI drafts trend-response options — comms approves or kills.",
            "Forced memes from B2B brands erode authority — skip more than chase.",
          ),
          s(" 'Skip log' documents declined trends — learning for team judgment."),
        ],
        [
          s("Close the loop from listening to product and content. "),
          x(
            "Monthly listening report to product marketing and support: top pain themes, feature requests, confusion points. Social insights feed FAQ, content pillars, and roadmap input — not only reactive replies.",
            "Listening without internal distribution is expensive monitoring wallpaper.",
          ),
          s(" Quarterly listening review with PMM and CS leadership."),
        ],
      ],
      examples: [
        {
          title: "Tier 1 alert — executive mention",
          body: "CEO mentioned in industry controversy thread — Tier 1 alert to comms within 12 minutes. Monitored 4 hours; no company response needed. Prepared statement ready if tagged. Early alert prevented panic post from junior staff.",
        },
        {
          title: "Trend skip — disaster newsjacking",
          body: "Team proposed trend post during natural disaster news cycle. Checklist failed relevance and tone risk — skipped. Competitor brand criticized for insensitive post — skip log cited in team training.",
        },
        {
          title: "Listening to content — feature confusion",
          body: "AI themed 200 social mentions: 'integration setup confusing.' Fed content pillar: 4-post education arc + help article update. Support tickets on integration down 22% next quarter — listening drove proactive content.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Social Programme Investment",
      subtitle: "When to add platforms, scale AI content, or increase paid — prioritising social system investments",
      take: "Before adding platforms, scaling AI post volume, or increasing paid budget, run four checks: (1) is governance and crisis protocol documented — RACI and escalation ready? (2) are pillars and mix healthy on current platforms — quality before expansion? (3) is community response meeting SLAs — engagement capacity before publish scale? (4) is attribution and organic proof working — measurement before paid scale? Fix governance first. Optimise pillars and community on existing platforms before new channel. Scale paid only after organic validation and tracking health.",
      why: "AI makes social content abundant — tempting teams to post more and expand platforms before fixing response capacity and measurement. This lens prioritises system health over activity metrics.",
      paragraphs: [
        [
          s("Check one: governance and crisis readiness. "),
          x(
            "No crisis pause protocol → document before next product launch. Unauthorized replies occurred → RACI and approval workflow before AI draft scale.",
            "Volume without governance multiplies risk linearly.",
          ),
          s(" Governance gate precedes new headcount or agency scope expansion."),
        ],
        [
          s("Check two: pillar and platform discipline. "),
          x(
            "Product mix over 50% sustained → fix calendar before new platform. Platform score below 3 on ICP fit → sunset or pilot with capacity, not permanent stretch.",
            "New platform rarely fixes weak pillar strategy on existing ones.",
          ),
          s(" Platform scorecard annual — honest sunset decisions."),
        ],
        [
          s("Checks three and four: community capacity and attribution. "),
          x(
            "SLA compliance under 70% → hire or tool support before post frequency increase. Broken UTM/CAPI → fix before Q4 paid scale. Boost budget request without organic winners → invest in content quality first.",
            "Paid scale on weak organic and broken tracking burns budget.",
          ),
          s(" Run lens in quarterly marketing ops review with brand and performance leads."),
        ],
      ],
      examples: [
        {
          title: "Platform expansion blocked",
          body: "Leadership wanted Threads presence day one. Lens: LinkedIn SLA at 62%, mix drifted product-heavy. Fixed community staffing and pillar mix first. Threads pilot deferred 2 quarters — LinkedIn engagement up 28% without new platform.",
        },
        {
          title: "AI volume deferred",
          body: "Vendor offered AI 30 posts weekly. Lens: yellow/red approval gates not in workflow. Implemented gates and 2-week human review sample. Then scaled to 12 posts weekly with stable quality — not 30.",
        },
        {
          title: "Paid scale gated",
          body: "Requested 3x paid budget. Lens: attribution audit 41% path loss. Fixed tracking; pilot 1.5x with boost-only on organic winners. Proved efficiency — full 3x approved next quarter with data.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Brand, product, and CEO accounts post identical launch content within an hour. What fixes this?",
      options: [
        "Post more frequently on all accounts.",
        "Implement RACI and launch arc with single lead account and staggered reshares.",
        "Delete all but one social account.",
        "Use AI to make posts slightly different.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Governance and launch choreography prevent duplication. Re-read sections 7.1 and 7.3.",
      wrongFeedback:
        "Use RACI and coordinated launch arcs — not more duplicate posts. Re-read sections 7.1 and 7.3.",
    },
    {
      q: "B2B feed is 70% product posts and engagement is declining. What should marketing adjust?",
      options: [
        "Add TikTok immediately.",
        "Reset content pillar mix toward education and proof with target ratios and evergreen bank.",
        "Double product post frequency.",
        "Stop responding to comments to save time.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Pillar mix discipline restores feed value. Re-read sections 7.3 and 7.8.",
      wrongFeedback:
        "Fix pillar mix on current platform before expanding. Re-read sections 7.3 and 7.8.",
    },
    {
      kind: "order",
      q: "Order the social operating system from foundation to refinement.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Establish governance, RACI, and crisis protocols",
        "Define platforms, pillars, and editorial calendar",
        "Publish, engage community, and integrate paid amplification",
        "Listen, measure outcomes, and refine the system",
      ],
      correctFeedback:
        "Right. Governance → strategy → execute → listen and refine. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Start with governance. Measurement closes the loop. Re-read sections 7.1–7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct social layer.",
      categories: ["Governance & platforms", "Content & community", "Paid & partnerships", "Listening & lens"],
      items: [
        { text: "Crisis pause on scheduled promotional posts.", category: 0 },
        { text: "48-hour SLA on product-impacting complaints.", category: 1 },
        { text: "Boost organic posts after engagement validation.", category: 2 },
        { text: "Trend participation checklist before newsjack.", category: 3 },
        { text: "Creator brief with disclosure requirements.", category: 2 },
        { text: "Evergreen content bank for low-capacity weeks.", category: 1 },
      ],
      correctFeedback:
        "Right. Governance = crisis and RACI. Content = community and calendar. Paid = boost and creators. Listening = trends and lens. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Match each practice to governance, content, paid, or listening. Re-read sections 7.1–7.8.",
    },
    {
      q: "Paid social CPA is rising but organic engagement is weak. What does the lens prioritise?",
      options: [
        "Triple paid budget immediately.",
        "Improve organic pillar content and community SLAs before scaling paid.",
        "Add three new platforms.",
        "Replace community team with AI replies only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Organic proof and engagement capacity precede paid scale. Re-read sections 7.4, 7.5, and 7.8.",
      wrongFeedback:
        "Fix organic and community before paid scale. Re-read sections 7.4, 7.5, and 7.8.",
    },
    {
      q: "Attribution audit shows 40% broken conversion paths. What precedes paid budget increase?",
      options: [
        "Increase spend — platforms will optimize.",
        "Fix UTM, pixel/CAPI, and CRM tracking; then pilot scaled spend on proven creative.",
        "Stop all social activity.",
        "Measure impressions only going forward.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tracking health gate precedes paid scale. Re-read sections 7.5 and 7.8.",
      wrongFeedback:
        "Fix attribution before increasing paid budget. Re-read sections 7.5 and 7.8.",
    },
  ],
});
