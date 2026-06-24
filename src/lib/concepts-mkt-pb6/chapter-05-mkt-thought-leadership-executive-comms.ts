import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktThoughtLeadershipExecutiveComms = buildChapter({
  slug: "mkt-thought-leadership-executive-comms",
  number: 5,
  shortTitle: "Thought Leadership & Executive Communications",
  title: "Thought Leadership & Executive Communications — Building Credible Executive Voices, Platform Strategy, and Governance That Scales Brand Authority With AI Assistance",
  readingMinutes: 24,
  summary:
    "Executive communications shape how markets, investors, employees, and media perceive your brand — often more powerfully than product advertising. AI accelerates ghostwriting drafts, topic research, platform optimisation, and performance analysis, but credibility depends on marketer-owned architecture: executive voice guidelines, content governance, platform strategy aligned to business priorities, spokesperson readiness, and measurement tied to reputation and pipeline influence. Teams that treat executive comms as occasional LinkedIn posts waste authority; teams that treat it as a governed programme compound trust over years.",
  keyTakeaway:
    "Executive communications is a programme, not a personality project. The sequence that wins: define executive voice and boundaries → map platforms to audience and business goals → govern ghostwriting and approval workflows → train spokespeople for media and live formats → measure reputation and influence, not vanity metrics → run a decision lens before scaling AI ghostwriting or platform expansion. AI accelerates drafting and research; marketers own authenticity, governance, and strategic alignment.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Executive Voice & Brand Alignment",
      subtitle: "Defining tone, boundaries, and proof standards — voice that scales without sounding manufactured",
      take: "Executive voice guidelines document how each leader communicates: tone spectrum (authoritative vs conversational), topic boundaries (what they will and will not comment on), proof standards (data, customer stories, personal experience), and vocabulary preferences. AI can analyse past speeches and posts to draft voice profiles — but voice fails when every executive sounds identical or when ghostwritten content contradicts known leadership positions. Architecture starts with one primary platform voice per executive and explicit alignment to brand positioning.",
      why: "Inconsistent executive voice erodes trust faster than silence. Markets forgive infrequent posting; they do not forgive executives who claim innovation leadership while their content reads like generic AI output with no point of view.",
      paragraphs: [
        [
          s("Separate voice attributes from content themes before drafting. "),
          x(
            "Voice attributes: sentence length, use of first person, humour tolerance, contrarian vs consensus framing. Content themes: industry trends, company strategy, customer outcomes, talent and culture, policy positions. AI drafts from theme briefs filtered through voice attributes — without both layers, output defaults to corporate bland.",
            "Theme without voice produces interchangeable thought leadership — the internet already has enough.",
          ),
          s(" Voice guidelines live in a one-page card per executive — not a 40-page brand book nobody opens."),
        ],
        [
          s("Topic boundaries protect executives and the brand. "),
          x(
            "Green topics: approved without legal review (culture, general industry trends). Yellow: marketing and comms review (competitive claims, customer references). Red: legal and IR required (financial guidance, regulatory matters, litigation). AI flagging can scan drafts against boundary lists — but marketers define the lists and escalation paths.",
            "Executives commenting outside boundaries create crisis comms work — boundaries are risk management.",
          ),
          s(" Quarterly boundary review with legal and IR — market events shift what is safe to discuss."),
        ],
        [
          s("Authenticity requires visible executive input, not just approval. "),
          x(
            "Minimum viable authenticity: executive provides 3–5 bullet points of personal perspective per piece; comms expands. AI structures bullets into platform-native formats. Pure ghostwriting without executive fingerprints reads hollow — audiences and journalists detect it.",
            "Approval without contribution is cosplay leadership — invest in capture workflows, not just editing.",
          ),
          s(" Record 15-minute voice memos monthly — richest source material for authentic long-form content."),
        ],
      ],
      examples: [
        {
          title: "Voice card rebuild — CEO LinkedIn recovery",
          body: "A fintech CEO's posts were ghostwritten entirely by agency copy — engagement down 60% over 12 months, comments cited 'corporate speak.' New voice card: short paragraphs, one contrarian take per post, mandatory personal anecdote or customer conversation reference. CEO records weekly 10-minute memo; comms edits for clarity only. Engagement rate recovered from 0.4% to 1.8%; inbound speaking invitations up 3x.",
        },
        {
          title: "Topic boundary save — regulatory grey zone",
          body: "AI-drafted post for CTO claimed product 'guaranteed compliance' with pending EU regulation. Yellow-topic review caught claim before publish. Revised to 'our approach aligns with draft framework — final certification pending.' Avoided regulatory inquiry and competitor screenshot attack. Boundary taxonomy now embedded in content workflow tool.",
        },
        {
          title: "Multi-executive differentiation",
          body: "Enterprise software company had CEO, CPO, and CRO sounding identical on LinkedIn. Voice workshop assigned distinct lanes: CEO = market vision and culture, CPO = product craft and customer innovation stories, CRO = revenue discipline and buyer psychology. AI drafts tagged by executive ID with lane-specific prompt templates. Follower overlap dropped; combined reach up 45% without posting more.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch5-thought-leadership",
      type: "flow",
      title: "Thought Leadership Programme Workflow",
      caption:
        "Executive voice and boundaries → platform and format strategy → governed content production → spokesperson readiness → publish and amplify → measure reputation and influence → refine voice and priorities.",
    }),
    buildSection({
      number: "5.2",
      title: "Thought Leadership Content Architecture",
      subtitle: "Pillars, proof types, and editorial cadence — building a body of work, not random posts",
      take: "Thought leadership architecture organises executive content into 3–5 pillars aligned to business strategy: market POV, customer transformation, technology craft, leadership philosophy, or policy advocacy. Each pillar has proof types (original research, customer stories, frameworks, predictions), formats (long-form article, keynote, podcast, LinkedIn series), and cadence targets. AI researches pillar gaps and drafts outlines from earnings themes and customer win data — marketers own pillar prioritisation and proof sourcing.",
      why: "Random posting creates no cumulative authority. Architecture ensures each piece reinforces the last — audiences and media begin associating the executive with specific expertise.",
      paragraphs: [
        [
          s("Limit pillars to three for each executive — depth beats breadth. "),
          x(
            "Pillar example: 'AI governance in regulated industries' with proof ladder: (1) proprietary survey data, (2) named customer transformation, (3) regulatory framework commentary, (4) prediction piece annually. AI maps existing content to pillars and flags gaps.",
            "Five pillars with thin proof reads as generalist noise — journalists want a clear beat.",
          ),
          s(" Annual pillar review tied to corporate strategy refresh — comms attends planning offsite."),
        ],
        [
          s("Proof hierarchy determines credibility. "),
          x(
            "Tier 1: original research, audited data, named customer with approval. Tier 2: anonymised case patterns, third-party citations. Tier 3: opinion and prediction without new data. AI drafts across tiers — marketers enforce tier requirements before external publish.",
            "Opinion-only executives plateau — invest in research and customer proof annually.",
          ),
          s(" Customer story bank with legal-approved quotes feeds pillar content — refresh quarterly."),
        ],
        [
          s("Cadence balances visibility with quality bar. "),
          x(
            "Typical B2B executive: 2–4 LinkedIn posts monthly, 1 long-form quarterly, 2–4 speaking slots annually, 1 major research or framework release annually. AI schedules drafts against cadence calendar — but quality gate can skip slots rather than publish filler.",
            "Cadence pressure without proof pipeline produces AI slop — protect empty calendar slots.",
          ),
          s(" Editorial calendar shared with IR and product marketing — avoid surprise narrative conflicts."),
        ],
      ],
      examples: [
        {
          title: "Pillar gap analysis — research investment",
          body: "AI content audit mapped 18 months of CFO posts: 80% reactive commentary, zero original data. Gap identified on 'unit economics discipline in SaaS.' Commissioned lightweight benchmark survey with 200 finance leaders. Launch post + PDF became top inbound asset — 2,400 downloads, 14 media citations. Pillar established; annual refresh budget approved.",
        },
        {
          title: "Proof ladder — customer story escalation",
          body: "CPO pillar 'platform extensibility' started with Tier 3 opinion posts. Comms sourced Tier 2 anonymised patterns from CS team, then secured Tier 1 named customer for case study video. Same pillar, escalating proof — analyst briefings began citing CPO as extensibility reference. Sales reported executive content cited in 22% of enterprise deals.",
        },
        {
          title: "Cadence quality gate",
          body: "CMO insisted on weekly LinkedIn posts; quality dropped, unfollows rose. Shifted to biweekly with mandatory proof tier — empty weeks allowed. Net follower growth turned positive; engagement rate doubled. Lesson: architecture includes permission to not post.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Executive Platform Strategy",
      subtitle: "LinkedIn, keynotes, podcasts, and owned media — matching format to audience and goal",
      take: "Platform strategy assigns each executive to channels by audience, effort, and strategic return: LinkedIn for B2B visibility, keynotes for category definition, podcasts for depth and network, owned blog/newsroom for SEO and IR-safe long form. AI optimises posts per platform — character limits, hook patterns, hashtag norms — but platform choice is strategic, not 'post everywhere.'",
      why: "Platform sprawl dilutes executive time and produces format-mismatched content. A keynote script pasted to LinkedIn underperforms; a tweet thread cannot replace analyst briefing depth.",
      paragraphs: [
        [
          s("Prioritise one primary and one secondary platform per executive. "),
          x(
            "CEO primary: keynotes + LinkedIn; secondary: annual letter on newsroom. CTO primary: technical blog + conference talks; secondary: developer podcast circuit. AI repurposing adapts core narrative across formats — not copy-paste.",
            "Primary platform gets 70% of production investment — secondary gets repurposed highlights.",
          ),
          s(" Platform assignment documented in executive comms charter — reviewed when ICP or GTM shifts."),
        ],
        [
          s("Speaking strategy is pipeline for authority, not vanity. "),
          x(
            "Tier 1 events: category-defining audience (target buyers, analysts, top-tier press). Tier 2: regional or vertical depth. Tier 3: pay-to-play — decline unless strategic exception. AI researches event audience demographics; marketers score fit against ICP.",
            "Executive calendar filled with Tier 3 events burns travel budget without moving perception.",
          ),
          s(" Speaking abstract ties to active pillar — no generic 'future of X' without company POV."),
        ],
        [
          s("Owned media anchors thought leadership for search and permanence. "),
          x(
            "Newsroom or executive microsite hosts long-form, research PDFs, and video — social drives traffic in. AI drafts SEO metadata and internal linking — comms owns information architecture and update cadence.",
            "Social-only thought leadership disappears in algorithmic noise — owned assets compound.",
          ),
          s(" UTM discipline on all social links to owned content — attribute pipeline influence."),
        ],
      ],
      examples: [
        {
          title: "LinkedIn-first CHRO — talent brand lift",
          body: "CHRO designated LinkedIn primary for talent market POV. Secondary: HR conference keynotes only. Biweekly posts with employee story proof; quarterly 'state of work' long-form on careers site. LinkedIn follower growth 12K in 9 months; inbound recruiting inquiries citing posts up 34%. Podcast appearances deferred until pillar proof established.",
        },
        {
          title: "Keynote tier discipline — CEO calendar",
          body: "CEO accepted 11 conference invites in one quarter — 7 were Tier 3 vendor events. Comms implemented tier scoring rubric; declined 6, negotiated main-stage for 2 Tier 1 events with research launch tie-in. Media mentions per speaking hour tripled; prep time per event reduced with reused narrative core.",
        },
        {
          title: "Owned anchor — annual letter",
          body: "Public company CEO revived annual shareholder letter as owned thought leadership anchor — social teasers, full text on IR site, AI-generated pull quotes for press. Letter drove 40% of newsroom traffic in January; sell-side analysts referenced letter themes on earnings calls. Platform strategy: letter first, social second.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Ghostwriting & Content Governance",
      subtitle: "Workflows, approval chains, and AI drafting guardrails — speed without reputational risk",
      take: "Ghostwriting governance defines: who briefs, who drafts (human, AI-assisted, agency), review stages (comms, legal, executive), turnaround SLAs, and version control. AI accelerates first drafts from voice cards and pillar briefs — but governance prevents off-brand claims, competitor disparagement, and executive time sink on line edits. Marketers own workflow design; legal owns red-topic approval.",
      why: "Ungoverned AI ghostwriting scales volume and risk simultaneously. One unreviewed factual error from an executive account becomes a screenshot crisis.",
      paragraphs: [
        [
          s("Standardise brief-to-publish workflow with clear roles. "),
          x(
            "Brief (comms + executive bullets) → AI/human draft → comms edit → legal if yellow/red → executive review (15-minute max) → schedule. SLA: 5 business days standard, 4-hour crisis exception path documented separately.",
            "Ad hoc Slack approvals do not scale and leave no audit trail.",
          ),
          s(" Workflow tool stores approvals — essential for regulated industries and post-incident review."),
        ],
        [
          s("AI drafting guardrails are prompt and policy layers. "),
          x(
            "System prompts embed voice card, topic boundaries, banned phrases, and competitor mention rules. Post-draft AI scan flags superlatives, unverified stats, and boundary violations. Human comms editor remains mandatory — AI guardrails catch patterns, not judgment.",
            "Guardrails reduce rework; they do not replace editorial judgment.",
          ),
          s(" Quarterly prompt audit when voice, product, or regulatory context shifts."),
        ],
        [
          s("Executive time protection is a governance metric. "),
          x(
            "Target: executive spends under 30 minutes per published piece — bullets, voice memo, or final skim. If review cycles exceed target, fix briefing quality, not executive availability. AI summary of changes for approval accelerates sign-off.",
            "Executives who dread the content process stop contributing — governance serves sustainability.",
          ),
          s(" Track executive minutes per piece quarterly — escalate workflow friction to CMO."),
        ],
      ],
      examples: [
        {
          title: "Workflow tool — audit trail win",
          body: "Healthcare CEO post required FDA-sensitive language review. Workflow tool showed draft history, legal approval timestamp, and executive sign-off. When competitor challenged claim, company produced audit trail in 2 hours — claim upheld, no retraction. Previously email-based approvals had no reliable record.",
        },
        {
          title: "AI guardrail catch — stat hallucination",
          body: "AI draft cited '73% of enterprises' without source. Post-draft scan flagged unsourced statistic; comms replaced with approved internal benchmark data. Executive never saw erroneous version. Guardrail rule added: all percentages require footnote link in brief.",
        },
        {
          title: "Executive time SLA",
          body: "CRO spent average 90 minutes per LinkedIn post — programme near collapse. Brief template reduced to 5 bullets + optional 3-minute memo; AI draft, comms edit, 10-minute CRO review. Time per piece dropped to 22 minutes; publish cadence stabilised at biweekly for 14 months.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Media Training & Spokesperson Readiness",
      subtitle: "Briefings, bridging, and crisis spokesmanship — preparing executives for live scrutiny",
      take: "Media training prepares executives for interviews, panels, and crisis statements: message hierarchy, bridging techniques, handling hostile questions, and body/language awareness on video. AI simulates journalist questions from recent coverage and social sentiment — but training is experiential; marketers coordinate sessions, briefing docs, and spokesperson tier assignment (primary, backup, subject-matter).",
      why: "Written thought leadership without live readiness fails when media calls. Executives who improvise off-brand or leak unapproved news undo months of careful positioning.",
      paragraphs: [
        [
          s("Message house per executive ties to pillars and boundaries. "),
          x(
            "Top line: one strategic message. Supporting points: three proof-backed sub-messages. Bridge phrases: redirect from trap questions to approved messages. Briefing doc updated before every Tier 1 interview — AI drafts Q&A from recent news and analyst reports.",
            "Message house without bridges leaves executives answering questions literally instead of strategically.",
          ),
          s(" Briefing doc version shared with IR for earnings-adjacent interviews."),
        ],
        [
          s("Spokesperson tiers clarify who speaks when. "),
          x(
            "Tier 1: CEO for company-wide crisis and major strategy. Tier 2: functional leaders for domain stories. Tier 3: technical experts — no media without comms handler. AI monitoring can flag when Tier 3 employees become de facto spokespeople on social — governance gap.",
            "Unauthorized spokespeople multiply during crises — tier assignment is pre-crisis work.",
          ),
          s(" Annual tabletop crisis exercise rotates spokesperson tiers — test backup readiness."),
        ],
        [
          s("Video and podcast format training differs from print voice. "),
          x(
            "Shorter sentences, explicit signposting, pause tolerance, avoid jargon without definition. AI analyses rehearsal recordings for filler words and pace — coach reviews. Remote podcast quality (mic, lighting, background) affects brand perception.",
            "Strong writers often fail on mic — format-specific prep is not optional.",
          ),
          s(" Rehearsal mandatory for first appearance on new format — comms attends live when possible."),
        ],
      ],
      examples: [
        {
          title: "Bridging save — hostile interview",
          body: "CEO faced repeated questions on layoff rumours in trade press interview. Training bridges ('What I can speak to is our investment in...') redirected to approved workforce development message. Published piece led with strategy quote, not rumour speculation. Comms debrief added rumour-specific bridges to message house.",
        },
        {
          title: "AI Q&A prep — product launch",
          body: "Pre-launch briefing: AI generated 40 journalist questions from competitor launch coverage and analyst notes. Comms pruned to 15 high-probability; CEO practised in mock interview. Real interview hit 11 of 15 themes — CEO rated 'most prepared launch ever.' Zero corrective statements post-publish.",
        },
        {
          title: "Tier 3 leak — social spokesperson drift",
          body: "Engineering director became popular on Twitter, began commenting on industry regulation. Posts reached journalists — quoted as company position without approval. Spokesperson policy communicated; director moved to 'personal account, no company affiliation' protocol. Near-miss prompted tier training for all VPs.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Amplification & Internal Alignment",
      subtitle: "Employee advocacy, sales enablement, and coordinated launch — extending executive reach",
      take: "Executive content gains reach through coordinated amplification: employee advocacy programmes, sales talk tracks, paid boost on high-performing organic posts, and PR pitch alignment. AI identifies posts worthy of paid support and drafts employee share copy — marketers govern timing so amplification does not precede executive publish or conflict with quiet periods (earnings blackouts, crisis).",
      why: "Unamplified executive content reaches single-digit percentage of followers organically. Without sales and employee alignment, thought leadership stays in marketing silo — not in buyer conversations.",
      paragraphs: [
        [
          s("Time amplification to organic signal validation. "),
          x(
            "Wait 24–48 hours post-publish; boost posts exceeding engagement threshold. Paid before organic proof wastes budget on weak creative. AI ranks posts by engagement velocity and sentiment in comments.",
            "Boosting every executive post trains algorithms and audiences to ignore unpaid content.",
          ),
          s(" Amplification budget capped quarterly — prioritise pillar flagship content."),
        ],
        [
          s("Sales enablement translates thought leadership to deal context. "),
          x(
            "Each major executive piece gets one-page 'how to use in conversations' — objection handlers, forwardable summary, CRM link. AI drafts from full piece; product marketing validates claims. Without enablement, sales ignores comms output.",
            "Thought leadership in CRM unused is marketing theatre — enablement is distribution.",
          ),
          s(" Quarterly sales survey: which executive assets appeared in won deals — invest accordingly."),
        ],
        [
          s("Employee advocacy extends reach with authenticity guardrails. "),
          x(
            "Suggested share copy optional — employees add personal intro. Pre-approve graphics and quotes; no mandatory sharing on controversial topics. AI personalisation variants by department — engineering gets technical pull quote, GTM gets customer outcome.",
            "Mandatory advocacy on sensitive posts creates internal backlash — keep voluntary.",
          ),
          s(" Advocacy programme metrics: share rate, click-through, recruiting referral correlation."),
        ],
      ],
      examples: [
        {
          title: "Selective boost — research launch",
          body: "CEO research report post hit 3x average engagement in 48 hours. Comms boosted to ICP job titles on LinkedIn — $4,200 spend, 890 landing page visits, 120 MQLs attributed. Non-boosted routine posts stayed organic only. ROAS justified annual research + boost budget.",
        },
        {
          title: "Sales enablement — CRO pillar",
          body: "CRO series on 'buying committee psychology' packaged into Seismic folder with talk tracks per persona. AE survey: 64% used in active deals within 60 days. Win rate on deals with asset touched 8 points higher — enablement credited in QBR.",
        },
        {
          title: "Advocacy without mandate",
          body: "Company tried mandatory LinkedIn reshares of CEO posts — internal survey backlash, public shares read identically robotic. Revised to optional suggested copy; share rate lower but authentic commentary up. External engagement on advocated posts 2.1x generic reshares.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Measurement & Reputation Impact",
      subtitle: "Share of voice, sentiment, influence, and pipeline — metrics beyond impressions",
      take: "Executive comms measurement tracks: share of voice vs competitors, sentiment and message pull-through in media, engagement quality (comments from ICP titles), inbound opportunities (speaking, press, partnerships), and CRM-attributed influence on pipeline. AI narrates dashboards and detects sentiment shifts — marketers define what 'success' means per executive and pillar, not aggregate vanity metrics.",
      why: "Impression counts justify activity, not impact. Boards and CMOs need evidence that executive voice moves perception, talent attraction, and revenue — not just LinkedIn numbers.",
      paragraphs: [
        [
          s("Share of voice benchmarks executive authority in category. "),
          x(
            "Track mention volume and tone vs 3–5 peer CEOs/functional leaders in trade and business press, plus social SOV in target hashtags. AI media monitoring automates — comms validates source relevance quarterly.",
            "SOV without sentiment context misreads attack coverage as success.",
          ),
          s(" SOV report in quarterly brand review — tie to pillar investment decisions."),
        ],
        [
          s("Engagement quality filters vanity metrics. "),
          x(
            "Weight comments and shares from target personas above raw likes. AI classifies commenter seniority and industry from public profiles — flag posts that attract bot-like engagement patterns.",
            "Viral post from wrong audience can harm ICP perception — quality gates matter.",
          ),
          s(" Monthly engagement quality review — deprioritise formats that attract non-ICP noise."),
        ],
        [
          s("Pipeline and talent attribution close the loop. "),
          x(
            "CRM: opportunities citing executive content in discovery notes. Recruiting: applicants referencing executive posts. Partnership inbound tied to keynote or article. AI tags unstructured CRM notes for content mentions — marketer validates attribution rules.",
            "Attribution is imperfect but directionally essential for programme funding.",
          ),
          s(" Annual executive comms impact summary for board — reputation and commercial indicators."),
        ],
      ],
      examples: [
        {
          title: "SOV shift — analyst recognition",
          body: "18-month pillar investment for CTO on data architecture. Media SOV vs competitors rose from 12% to 31%; sentiment 78% positive. Gartner inquiry citations of CTO up 4x — analyst relations credited executive content programme. Continued investment approved over paid display test.",
        },
        {
          title: "Engagement quality alert",
          body: "CEO post went viral with 500K impressions — AI comment analysis showed 82% outside ICP, including hostile political tangents. Brand risk review; thread moderated. Future controversial takes require yellow-topic pre-clearance. Lesson: impressions without ICP fit can harm.",
        },
        {
          title: "Pipeline attribution — enterprise deal",
          body: "$1.2M opportunity CRM note: 'CFO read CEO annual letter, requested meeting.' Attribution model counted executive content touch in influenced pipeline. Letter production cost $45K — single deal justified annual programme budget in leadership review.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — Executive Comms Investment",
      subtitle: "When to build voice, expand platforms, or scale AI ghostwriting — prioritising authority investments",
      take: "Before scaling executive comms, AI ghostwriting, or platform expansion, run four checks: (1) is executive voice documented with boundaries — authenticity foundation? (2) are pillars defined with proof pipeline — architecture before volume? (3) is governance workflow resourced — legal and executive time protected? (4) can you measure SOV, sentiment, or pipeline influence — impact before amplification spend? Invest in voice and pillars first. Scale AI drafting when governance holds. Expand platforms only when primary channel shows engagement quality, not just cadence.",
      why: "AI makes executive content cheap to produce — tempting teams to post more before fixing voice, proof, and measurement. This lens prioritises investments that compound authority rather than noise.",
      paragraphs: [
        [
          s("Check one: voice and authenticity readiness. "),
          x(
            "No voice card or executive unwilling to contribute bullets → fix capture workflow before AI volume. Executive review time over 45 minutes per piece → fix briefing, not calendar.",
            "Scaling drafts without executive input automates hollow leadership.",
          ),
          s(" Voice workshop gate precedes agency retainer or AI writing tool expansion."),
        ],
        [
          s("Check two: pillar and proof pipeline. "),
          x(
            "Opinion-only cadence for 6+ months → invest in research or customer proof before frequency increase. Pillars undefined → architecture workshop before platform expansion.",
            "Volume without proof erodes rather than builds authority.",
          ),
          s(" Proof pipeline review quarterly — comms + product marketing + CS."),
        ],
        [
          s("Checks three and four: governance and measurement. "),
          x(
            "No approval audit trail → workflow tool before regulated-industry scaling. No SOV or pipeline metric → define measurement before paid amplification budget. Crisis spokesperson tiers undocumented → training before next product launch media cycle.",
            "Governance and metrics are prerequisites for scale, not afterthoughts.",
          ),
          s(" Run lens in annual executive comms planning with CMO, legal, and IR present."),
        ],
      ],
      examples: [
        {
          title: "AI ghostwriting deferred",
          body: "Agency proposed 20 AI posts monthly per executive. Lens: no voice cards, CEO review averaging 2 hours. Deferred AI scale 6 months; built voice cards and briefing SLA. Pilot at 4 posts monthly with guardrails — engagement up, executive time down. Full scale approved after governance proof.",
        },
        {
          title: "Platform expansion blocked",
          body: "Comms wanted CEO on TikTok for 'reach.' Lens: primary LinkedIn engagement quality below benchmark, no pillar proof on culture content. Invested in LinkedIn proof ladder instead. TikTok deferred 12 months — LinkedIn ICP engagement doubled.",
        },
        {
          title: "Amplification gated on measurement",
          body: "CMO requested $200K executive content boost budget. Lens: no attribution model, no CRM content tagging. Built tagging and 90-day pilot on $15K boost with MQL tracking first. Proved 4.2x ROAS on research posts — scaled budget with evidence.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Executive LinkedIn posts sound identical and engagement is declining. What should marketing fix first?",
      options: [
        "Post daily with AI to increase volume.",
        "Build distinct voice cards, topic boundaries, and executive input workflows before scaling drafts.",
        "Move all executives to the same agency template.",
        "Stop executive posting entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Voice, boundaries, and authentic input precede volume. Re-read sections 5.1 and 5.4.",
      wrongFeedback:
        "Fix voice and governance before scaling AI output. Re-read sections 5.1 and 5.4.",
    },
    {
      q: "A CEO wants to comment on pending regulation in a LinkedIn post. What governs this?",
      options: [
        "Publish immediately — executives should be spontaneous.",
        "Route through topic boundary taxonomy — likely yellow or red topic requiring legal or IR review.",
        "Let AI decide if it is safe.",
        "Only post on weekends when lawyers are unavailable.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Topic boundaries and escalation protect the brand. Re-read sections 5.1 and 5.4.",
      wrongFeedback:
        "Regulatory topics require boundary review — not spontaneous publish. Re-read sections 5.1 and 5.4.",
    },
    {
      kind: "order",
      q: "Order the thought leadership programme workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define executive voice, boundaries, and pillar architecture",
        "Produce and govern content through approval workflows",
        "Publish on prioritised platforms with spokesperson readiness",
        "Measure SOV, sentiment, and pipeline influence — then refine",
      ],
      correctFeedback:
        "Right. Voice → produce → publish → measure and refine. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with voice and architecture. Measurement closes the loop. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct executive comms layer.",
      categories: ["Voice & architecture", "Governance & training", "Amplification & platforms", "Measurement & lens"],
      items: [
        { text: "Three-pillar proof ladder per executive.", category: 0 },
        { text: "AI post-draft scan for unsourced statistics.", category: 1 },
        { text: "Boost posts after 48-hour organic validation.", category: 2 },
        { text: "Share of voice vs peer executives quarterly.", category: 3 },
        { text: "Spokesperson tier assignment before crisis.", category: 1 },
        { text: "Primary and secondary platform per executive.", category: 2 },
      ],
      correctFeedback:
        "Right. Architecture = voice and pillars. Governance = approval and training. Amplification = platforms and boost. Measurement = SOV and lens. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Match each practice to architecture, governance, amplification, or measurement. Re-read sections 5.1–5.8.",
    },
    {
      q: "Sales rarely uses executive thought leadership in deals. What does the lens prioritise?",
      options: [
        "More executive posts without sales involvement.",
        "Sales enablement packs and CRM-linked assets before increasing publish cadence.",
        "Mandatory employee reshares of every post.",
        "Switch executives to a new social platform.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Enablement distributes thought leadership into revenue conversations. Re-read sections 5.6 and 5.8.",
      wrongFeedback:
        "Build sales enablement before scaling volume. Re-read sections 5.6 and 5.8.",
    },
    {
      q: "CMO wants $150K paid boost budget but no content attribution exists. What precedes spend?",
      options: [
        "Boost all posts immediately for reach.",
        "Define measurement, CRM tagging, and pilot attribution on a small boost test.",
        "Hire more ghostwriters instead.",
        "Measure impressions only — that is sufficient.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Measurement gate precedes amplification scale. Re-read sections 5.7 and 5.8.",
      wrongFeedback:
        "Build attribution before large amplification spend. Re-read sections 5.7 and 5.8.",
    },
  ],
});
