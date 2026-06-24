import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktInternalCommsEmployerBrand = buildChapter({
  slug: "mkt-internal-comms-employer-brand",
  number: 6,
  shortTitle: "Internal Communications & Employer Brand",
  title: "Internal Communications & Employer Brand — Aligning Culture Storytelling, Employee Advocacy, and Change Communications With AI-Assisted Production and Governance",
  readingMinutes: 24,
  summary:
    "Internal communications and employer brand determine whether employees understand strategy, trust leadership, and advocate externally — or become disengaged critics on Glassdoor and LinkedIn. AI accelerates newsletter drafting, sentiment analysis, content personalisation by role and region, and employee advocacy copy — but cultural impact depends on marketer-owned architecture: employer value proposition clarity, channel strategy, leadership message discipline, change comms cadence, and integration with talent acquisition. Teams that treat internal comms as HR announcements waste employer brand investment; teams that treat it as strategic narrative infrastructure compound retention and recruiting advantage.",
  keyTakeaway:
    "Employer brand is experienced internally before it is marketed externally. The sequence that wins: define EVP and culture proof points → architect internal channels by audience and urgency → govern leadership and change communications → enable voluntary employee advocacy → integrate with recruiting marketing → measure engagement and sentiment → run a decision lens before scaling AI content or advocacy mandates. AI accelerates production; marketers own authenticity, timing, and trust.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "6.1",
      title: "Employer Value Proposition & Culture Proof",
      subtitle: "EVP architecture, authenticity standards, and evidence — what you promise employees and candidates",
      take: "The employer value proposition (EVP) articulates why talented people join, stay, and advocate: compensation and benefits, growth, mission, culture, and ways of working. Culture proof points are verifiable evidence — promotion data, learning investment, employee stories, leadership accessibility — not slogan walls. AI can analyse exit interviews and Glassdoor themes to surface EVP gaps and draft narrative variants by persona; marketers own EVP positioning with HR and ensure external recruiting claims match internal reality.",
      why: "EVP disconnect between recruiting ads and daily employee experience is the primary driver of early attrition and public review backlash. Authenticity is not a tone choice — it is evidence alignment.",
      paragraphs: [
        [
          s("Structure EVP in pillars employees can repeat and verify. "),
          x(
            "Example pillars: 'Builder culture' (proof: internal hackathon shipping rate), 'Transparent growth' (proof: published level expectations), 'Customer obsession' (proof: all-hands customer story cadence). AI maps internal survey themes to pillars — marketers prune to three pillars maximum for recall.",
            "Six EVP pillars with no proof reads as HR wallpaper — employees ignore it.",
          ),
          s(" EVP documented in one internal and one external version — same claims, different depth."),
        ],
        [
          s("Authenticity audits compare say vs do quarterly. "),
          x(
            "Cross-check recruiting copy, CEO town hall themes, and anonymous survey sentiment on same topics. AI sentiment analysis on Slack or intranet comments flags divergence — 'leadership says flexibility, teams experience meeting overload.' Marketer facilitates audit; HR and ops own fixes.",
            "Marketing cannot authenticity-wash broken policies — audit drives accountability conversations.",
          ),
          s(" Authenticity audit outcomes shared with leadership — not buried in comms reports."),
        ],
        [
          s("Employee stories are proof, not decoration. "),
          x(
            "Story bank criteria: named employee with consent, specific outcome, ties to EVP pillar, diverse roles and geographies. AI drafts story outlines from interview transcripts — comms edits for dignity and accuracy. Stock-photo culture campaigns fail when employees recognise no one in the imagery.",
            "One authentic peer story outweighs ten polished brand films in trust transfer.",
          ),
          s(" Refresh story bank quarterly — stale stories imply stagnant culture."),
        ],
      ],
      examples: [
        {
          title: "EVP reset — survey-driven pillars",
          body: "Tech company EVP was generic 'innovation and impact.' AI analysis of engagement survey open text surfaced: career clarity, manager quality, and remote flexibility as top themes. Rebuilt EVP around three pillars with HR data proof. Recruiting conversion on careers page up 22%; Glassdoor 'culture and values' rating rose 0.4 stars over 9 months.",
        },
        {
          title: "Say-do gap — flexibility crisis",
          body: "Authenticity audit found recruiting promised 'flexible work' while internal comms celebrated 'return to office momentum.' Slack sentiment negative spike. Leadership aligned messaging; EVP proof updated with published hybrid policy metrics. Internal trust survey 'leadership communicates honestly' recovered 18 points.",
        },
        {
          title: "Story bank — engineering retention",
          body: "Engineering attrition cited 'no growth path.' Comms sourced 6 employee stories on internal mobility with specific level transitions. Stories in town hall, intranet, and recruiting ads. Referral applicants mentioning stories in interviews up 40%; engineering 12-month retention improved 6 points.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch6-employer-brand",
      type: "flow",
      title: "Employer Brand & Internal Comms System",
      caption:
        "EVP and culture proof → internal channel architecture → leadership and change communications → employee advocacy → recruiting integration → engagement and sentiment measurement → EVP and programme refinement.",
    }),
    buildSection({
      number: "6.2",
      title: "Internal Channel Architecture",
      subtitle: "Intranet, email, Slack, town halls, and manager cascades — right message, right channel, right urgency",
      take: "Internal channel architecture maps message types to channels: strategic narrative (town hall + intranet hub), operational updates (email or Slack with read receipts), social/culture (Slack channels, ERG spaces), and manager cascade packs for local context. AI drafts channel-appropriate variants from single source brief — but architecture prevents channel sprawl where employees ignore duplicate announcements across five surfaces.",
      why: "Message fatigue destroys internal comms effectiveness. Employees mute channels when everything is marked urgent or repeated verbatim everywhere.",
      paragraphs: [
        [
          s("Define channel charter with audience and message type. "),
          x(
            "Town hall: quarterly strategy, leadership Q&A, major wins. Intranet: persistent policies, EVP, resources. Slack #announcements: time-sensitive ops, max 3 posts weekly. Email digest: weekly roundup for non-Slack populations. AI routes draft to correct channel template from brief tags.",
            "Without charter, every leader picks favourite channel — employees see chaos.",
          ),
          s(" Channel charter posted internally — employees know where to look for what."),
        ],
        [
          s("Urgency taxonomy prevents alert inflation. "),
          x(
            "P1: all-hands within hours (security, major reorg). P2: same-week awareness (benefits enrollment). P3: FYI digest-eligible. Only P1 bypasses digest. AI cannot set urgency — comms and HR leadership own classification.",
            "Everything-as-P1 trains ignore behaviour — same failure mode as broken email nurture.",
          ),
          s(" Post-incident review when P1 used — was classification correct?"),
        ],
        [
          s("Manager cascade is the last mile for trust. "),
          x(
            "Leadership message + manager talking points + FAQ + localisation notes. Managers deliver team context within 48 hours of town hall. AI drafts manager pack from town hall transcript — people leaders add team-specific implications.",
            "Strategy without manager translation feels abstract — cascade is where belief forms.",
          ),
          s(" Manager cascade completion tracked via short pulse — not surveillance, sample check."),
        ],
      ],
      examples: [
        {
          title: "Channel consolidation — announcement fatigue",
          body: "Company posted identical reorg update on email, Slack, intranet banner, and Yammer within 2 hours. Pulse survey: 67% 'too many channels, unclear priority.' Comms implemented charter — single primary channel per message type with cross-links. Message recall in follow-up survey up 41%.",
        },
        {
          title: "P1 discipline — benefits vs breach",
          body: "Benefits team labelled open enrollment P1 Slack alert alongside genuine security P1. Employees complained alert desensitisation. Urgency taxonomy workshop; benefits moved to P2 digest. Next security P1 had 12% faster acknowledged read rate — urgency restored meaning.",
        },
        {
          title: "Manager pack — reorg clarity",
          body: "Major reorg announced town hall only — frontline confusion persisted 2 weeks. Added AI-drafted manager packs with FAQ and 'what to tell your team' scripts. Manager pulse: 78% held team meetings within 48 hours. Support ticket volume on reorg questions dropped 55%.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Leadership Communications",
      subtitle: "CEO visibility, town hall design, and narrative continuity — leadership as internal brand asset",
      take: "Leadership communications establish tone, transparency, and strategic clarity: town hall cadence, CEO note rhythm, visibility during change, and consistency with external executive brand. AI summarises employee questions, drafts CEO scripts from strategy docs, and analyses Q&A sentiment — but leaders must answer hard questions visibly; scripted evasion destroys internal trust faster than bad news.",
      why: "Employees benchmark leadership communication against best employers in their network. Infrequent, overly polished, or contradictory leadership messages drive quiet quitting and public criticism.",
      paragraphs: [
        [
          s("Town hall design balances broadcast and dialogue. "),
          x(
            "Structure: 10-minute strategy anchor, 15-minute proof (metrics, customer, employee story), 20-minute live Q&A with pre-submitted and live questions, 5-minute actions. AI clusters submitted questions by theme for CEO prep — avoid cherry-picking only easy questions.",
            "Q&A theatre without real answers is worse than no Q&A — employees remember dodges.",
          ),
          s(" Record and transcribe — accessibility and async regions require on-demand replay."),
        ],
        [
          s("Narrative continuity links messages across quarters. "),
          x(
            "Employees track whether leadership remembers prior commitments. Comms maintains 'promise log' from town halls — AI extracts commitments from transcripts for follow-up status in next session.",
            "Broken narrative thread signals leadership amnesia — comms owns continuity discipline.",
          ),
          s(" Promise log shared with ELT monthly — status before next all-hands."),
        ],
        [
          s("Bad news protocol is pre-agreed with legal and HR. "),
          x(
            "Layoffs, performance programme changes, and policy reversals use dedicated templates: what happened, why, what changes for you, when, where to ask questions. AI drafts initial structure — leadership delivers with empathy, not jargon.",
            "Delayed or euphemistic bad news leaks internally before official comms — speed and clarity win.",
          ),
          s(" Bad news tabletop annually — comms, HR, legal rehearse timing and channels."),
        ],
      ],
      examples: [
        {
          title: "Q&A transparency — compensation questions",
          body: "Town hall Q&A cluster on pay equity — CEO unprepared, gave vague answer. Follow-up: comms secured HR-approved talking points, dedicated intranet FAQ, CEO acknowledgment in next town hall. Trust pulse on 'leadership listens' dropped then recovered after transparent FAQ — lesson on Q&A prep investment.",
        },
        {
          title: "Promise log — hybrid work",
          body: "CEO promised quarterly hybrid policy review in January town hall. Promise log flagged no update by April. Comms escalated; May town hall opened with status report and timeline. Employee comment themes shifted from 'broken promise' to 'finally follow-through' — continuity tool prevented reputational damage.",
        },
        {
          title: "Bad news — restructuring comms",
          body: "Restructuring announced within 2 hours of decision via CEO video, manager packs, and live HR office hours. AI drafted FAQ from policy docs; legal approved. Glassdoor spike muted versus prior layoff with 1-week delay and rumour cycle. Comms credited fast bad news protocol in post-mortem.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Change Communications",
      subtitle: "Reorgs, acquisitions, policy shifts, and transformation — sustaining clarity through uncertainty",
      take: "Change communications manage uncertainty during reorgs, M&A, system migrations, and policy updates: stakeholder mapping, phased message calendar, resistance anticipation, and feedback loops. AI models employee question volume from change type and drafts phase-specific FAQs — marketers and HR own timing, audience segmentation, and two-way channels so change does not feel done to employees.",
      why: "Under-communicated change fills vacuum with rumour. Over-communicated change without new information breeds cynicism. Change comms is pacing and proof of listening.",
      paragraphs: [
        [
          s("Phase change comms: prepare, announce, implement, reinforce. "),
          x(
            "Prepare: manager briefing under embargo. Announce: all-hands + written detail. Implement: weekly office hours, tooltips, champions network. Reinforce: success stories, metric transparency on adoption. AI generates phase calendar template — comms customises per change severity.",
            "Single announcement drop for multi-month change is abandonment — phasing is mandatory.",
          ),
          s(" Change severity score (1–5) determines phase length and channel intensity."),
        ],
        [
          s("Segment messages by impact, not org chart alone. "),
          x(
            "Same reorg affects roles differently — segment by 'your team changes' vs 'no direct impact.' AI personalises email opening lines from HRIS role data — human review for accuracy. Wrong segmentation creates panic in unaffected groups.",
            "Generic 'we are all in this together' without specificity reads as dismissal.",
          ),
          s(" Segment QA before send — HR validates affected population lists."),
        ],
        [
          s("Feedback loops prove leadership is listening mid-change. "),
          x(
            "Pulse surveys at announce + 30 + 90 days; themed office hours; anonymous question portal with published answers. AI summarises feedback themes for leadership — comms closes loop publicly on top 5 recurring concerns.",
            "Collecting feedback without visible response is worse than no survey.",
          ),
          s(" Feedback summary in every change reinforcement message — show movement."),
        ],
      ],
      examples: [
        {
          title: "ERP migration — phased comms",
          body: "Global ERP rollout used 4-phase comms over 9 months. Champions in each region, weekly tips, FAQ grew to 80 questions with public answers. Adoption hit 94% on go-live versus 71% on prior tool with announce-only approach. AI drafted tip series from support ticket themes.",
        },
        {
          title: "Segmentation failure — reorg panic",
          body: "Reorg email sent company-wide with subject 'Your role may change' — 40% of recipients unaffected. Support queue exploded. Fix: segmented sends with clear subject lines ('Action required' vs 'FYI — no change to your team'). Segmentation QA checklist now mandatory.",
        },
        {
          title: "Feedback loop — return to office",
          body: "Hybrid policy change prompted 2,000 pulse responses. AI themed: commute burden, childcare, team collaboration. Leadership video addressed top 3 themes with policy adjustments. Subsequent sentiment neutral-to-positive — employees cited 'they actually read it' in focus groups.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Employee Advocacy Programmes",
      subtitle: "Voluntary sharing, content libraries, and governance — amplifying authentic employee voice",
      take: "Employee advocacy programmes provide approved content libraries, suggested share copy, and recognition for employees who amplify company stories on LinkedIn and social. AI personalises suggested posts by role and region — but advocacy must stay voluntary and authentic; mandated sharing on sensitive topics backfires. Marketers govern brand safety, disclosure guidelines, and content freshness.",
      why: "Employee networks collectively outweigh corporate channels in reach and trust. Advocacy done poorly creates robotic reshares; done well it is peer proof of EVP.",
      paragraphs: [
        [
          s("Voluntary participation with clear disclosure rules. "),
          x(
            "#Employee or company affiliation guidelines, no sharing of confidential metrics, pre-approval for crisis-period sharing freeze. AI library tags content by sensitivity level — employees see only green-tier for self-serve share.",
            "Mandatory advocacy programmes produce compliance theatre — optimise for willing advocates.",
          ),
          s(" Legal-reviewed social media policy linked from advocacy platform onboarding."),
        ],
        [
          s("Content library balances corporate and employee-led stories. "),
          x(
            "60% employee story and event content, 40% company news and recruiting. AI suggests posts matching employee's LinkedIn history tone — optional edit before share. Library stale after 30 days triggers refresh alert.",
            "Library of only product launches gets ignored — peer stories drive clicks.",
          ),
          s(" Top advocates interviewed quarterly — understand what content they actually want."),
        ],
        [
          s("Measure advocacy quality, not share count alone. "),
          x(
            "Track: active advocates, click-through to careers or content, hire referrals correlated with advocacy cohort. AI detects copy-paste identical shares — low authenticity score prompts comms coaching.",
            "Thousand identical reshares hurt brand — quality metrics gate programme expansion.",
          ),
          s(" Advocate recognition programme — internal and external — sustains participation."),
        ],
      ],
      examples: [
        {
          title: "Voluntary advocacy — recruiting lift",
          body: "B2B SaaS launched advocacy platform with 340 voluntary participants (12% of workforce). Suggested copy optional; employee stories featured weekly. Referral hires from advocate networks up 28% in year one. No mandatory shares — participation grew organically with recognition.",
        },
        {
          title: "Crisis freeze — advocacy governance",
          body: "During product outage crisis, comms activated advocacy freeze — library locked, advocates notified. One employee manually posted defensive comment; coached privately on policy. Freeze prevented 200+ scheduled shares that would have amplified negative news cycle.",
        },
        {
          title: "Authenticity coaching",
          body: "AI flagged 70% of shares using identical suggested copy verbatim. Comms workshop on personal intro lines; library added 'prompts' not full scripts. Comment engagement on shares up 3x; careers page traffic from advocacy doubled.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Recruiting Marketing Integration",
      subtitle: "Careers site, job ads, and candidate experience — one employer brand across internal and external",
      take: "Recruiting marketing integration aligns careers site, job descriptions, interview collateral, and offer experience with EVP and internal narrative. AI drafts job ad variants and landing pages by persona — marketers ensure claims match internal proof and that recruiters use consistent talking points. Disconnect between glossy careers brand and interview reality drives offer rejection and negative reviews.",
      why: "Candidates compare notes on Glassdoor and LinkedIn with employees they meet in interviews. Integrated employer brand reduces surprise attrition in first 90 days.",
      paragraphs: [
        [
          s("Single source of truth for EVP claims across touchpoints. "),
          x(
            "Careers site, LinkedIn Life, job templates, and recruiter enablement pull from same proof library. AI checks job posts for claims absent from proof bank — flags 'unlimited growth' without evidence.",
            "Recruiters improvising EVP claims creates legal and authenticity risk.",
          ),
          s(" Quarterly sync: comms, TA, and HRBP review top 20 job families for message drift."),
        ],
        [
          s("Candidate experience comms are part of employer brand. "),
          x(
            "Application acknowledgment, interview prep, rejection tone, and offer narrative reflect brand voice. AI drafts templates — human review for empathy on rejection. Silence after final interview damages brand more than polite no.",
            "Candidate experience is employer brand for the 95% you do not hire.",
          ),
          s(" TA metrics include candidate NPS — comms owns template quality."),
        ],
        [
          s("Internal mobility content supports retention and recruiting. "),
          x(
            "Promote internal roles with same story quality as external posts. AI matches internal job alerts to employee skills from HRIS — opt-in. Employees see growth path before external job boards.",
            "External recruiting spend while ignoring internal mobility undermines EVP growth pillar.",
          ),
          s(" Internal mobility campaign quarterly — comms + TA joint KPI."),
        ],
      ],
      examples: [
        {
          title: "Proof library — job ad audit",
          body: "AI audit found 34% of job posts contained superlatives not in EVP proof library. Rewrote templates with approved proof snippets. Candidate survey 'job matched reality' up 19 points at 90 days post-hire.",
        },
        {
          title: "Rejection template — brand save",
          body: "Standard rejection was auto-generated one-liner. New template: personalised opening, constructive closure, talent community invite. Glassdoor 'interview experience' complaints mentioning 'ghosting' dropped 42%.",
        },
        {
          title: "Internal mobility push",
          body: "Quarterly internal roles spotlight in intranet and Slack — same creative as external campaigns. Internal applications up 55%; backfill cost down $380K annually. EVP growth pillar credibly demonstrated.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Measurement & Employee Sentiment",
      subtitle: "Engagement pulses, channel analytics, and review monitoring — internal brand health metrics",
      take: "Internal comms measurement tracks: channel engagement (open, read, attendance), pulse survey trends, eNPS, advocacy participation, referral rates, and external review sentiment correlation. AI analyses open-text survey and Slack themes for emerging issues — marketers report narrative health to leadership, not just activity metrics.",
      why: "High send volume with declining engagement signals distrust or fatigue. Measurement connects comms choices to retention, referrals, and review sentiment.",
      paragraphs: [
        [
          s("Engagement quality beats broadcast volume. "),
          x(
            "Town hall attendance, replay views, digest click-through, manager cascade completion. Declining trend triggers channel or message audit — not more emails. AI benchmarks engagement against prior quarters and flags anomalies.",
            "Celebrating '50 all-company emails sent' without read data is activity theatre.",
          ),
          s(" Monthly internal comms scorecard shared with HR and ELT."),
        ],
        [
          s("Sentiment monitoring bridges internal and external reputation. "),
          x(
            "Correlate pulse themes with Glassdoor and Blind trends — lag often 60–90 days. AI theme extraction on reviews validates whether internal issues are going public. Early internal fix prevents review crisis.",
            "External reviews are lagging indicators — internal sentiment is leading.",
          ),
          s(" Joint comms + HR review when external review velocity spikes."),
        ],
        [
          s("Link employer brand metrics to talent outcomes. "),
          x(
            "Time-to-fill, offer acceptance, quality-of-hire proxy, 90-day retention by source. Advocacy and referral cohorts compared to cold applicants. AI attributes where data allows — marketer tells story in workforce planning forums.",
            "Employer brand investment needs talent KPI connection — not comms vanity alone.",
          ),
          s(" Annual employer brand impact report — recruiting cost and retention indicators."),
        ],
      ],
      examples: [
        {
          title: "Engagement decline — digest redesign",
          body: "Weekly email digest open rate fell from 62% to 38% over 6 months. AI content analysis: duplicate headlines, no employee stories. Redesigned digest with story lead and shorter ops section — open rate recovered to 58% in 8 weeks.",
        },
        {
          title: "Sentiment early warning",
          body: "Internal pulse flagged 'pay transparency' theme rising 3 months before Glassdoor spike on compensation. Leadership accelerated compensation communication plan. External review velocity on pay cut in half versus prior cycle.",
        },
        {
          title: "Advocacy-to-hire attribution",
          body: "Tracked referral hires from advocacy programme participants — 18% of engineering hires year one, 12% lower cost-per-hire than agency channel. Data justified advocacy platform renewal and headcount.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Internal Comms Investment",
      subtitle: "When to fix EVP, scale channels, or launch advocacy — prioritising employer brand resources",
      take: "Before scaling internal comms tools, AI content production, or advocacy programmes, run four checks: (1) is EVP aligned with employee experience — authenticity audit clean? (2) is channel architecture defined — fatigue under control? (3) is leadership comms credible — town hall Q&A and promise log working? (4) can you measure engagement and talent outcomes — metrics before platform spend? Fix EVP and say-do gaps first. Scale AI drafting when governance and channel charter exist. Launch advocacy only when voluntary culture and disclosure rules are ready.",
      why: "AI makes internal newsletters cheap to produce — tempting teams to communicate more before fixing trust and architecture. This lens prioritises investments that compound employee belief.",
      paragraphs: [
        [
          s("Check one: EVP and authenticity readiness. "),
          x(
            "Survey sentiment contradicts recruiting claims → authenticity audit before external employer brand spend. Glassdoor below category median → internal fixes precede glossy careers site redesign.",
            "External polish on internal dysfunction accelerates review backlash.",
          ),
          s(" EVP workshop gate precedes major recruiting marketing campaign."),
        ],
        [
          s("Check two: channel and change discipline. "),
          x(
            "P1 alert inflation or duplicate cross-posts → channel charter before new platform. Major change without phase plan → change comms framework before next transformation.",
            "New channels without charter add noise — fix routing first.",
          ),
          s(" Channel audit quarterly — retire unused surfaces."),
        ],
        [
          s("Checks three and four: leadership trust and measurement. "),
          x(
            "Town hall trust scores declining → leadership comms coaching before advocacy push. No engagement or talent metrics → build scorecard before advocacy SaaS expansion. Mandatory sharing proposed → reject; invest in voluntary library instead.",
            "Advocacy and AI volume require trust foundation and measurement.",
          ),
          s(" Run lens in annual workforce planning with HR, TA, and comms leadership."),
        ],
      ],
      examples: [
        {
          title: "Careers site deferred for EVP fix",
          body: "TA requested $120K careers site redesign. Lens: authenticity audit showed flexibility EVP gap. Invested in policy clarity and internal proof stories first. Redesign launched 6 months later with verified claims — offer acceptance up 11% versus prior redesign projection.",
        },
        {
          title: "Advocacy pilot gated",
          body: "Vendor pitched enterprise advocacy licence for 5,000 employees. Lens: no disclosure policy update, crisis freeze untested. Pilot with 200 volunteers, governance built. Scaled after 2 quarters — avoided crisis-period mass reshares.",
        },
        {
          title: "AI newsletter scale blocked",
          body: "Proposal to AI-generate daily Slack announcements. Lens: digest engagement already declining. Fixed charter and digest format first. Then AI for manager pack drafts only — engagement recovered before any volume increase.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Recruiting promises 'flexible culture' but employees report meeting overload. What should marketing prioritise?",
      options: [
        "More glossy careers videos.",
        "EVP authenticity audit and alignment with HR on real ways of working before external campaigns.",
        "Mandatory employee LinkedIn posts about flexibility.",
        "Ignore internal sentiment — focus on candidates only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Say-do alignment precedes external employer brand spend. Re-read sections 6.1 and 6.8.",
      wrongFeedback:
        "Fix EVP authenticity before polishing external recruiting. Re-read sections 6.1 and 6.8.",
    },
    {
      q: "Identical announcements posted to email, Slack, intranet, and Yammer simultaneously. What fixes fatigue?",
      options: [
        "Add more channels for redundancy.",
        "Implement channel charter mapping message types and urgency to primary surfaces.",
        "Mark every message P1 urgent.",
        "Stop all internal communications.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Channel architecture reduces duplicate noise. Re-read sections 6.2 and 6.8.",
      wrongFeedback:
        "Use a channel charter — not more duplicate posts. Re-read sections 6.2 and 6.8.",
    },
    {
      kind: "order",
      q: "Order the employer brand system from foundation to refinement.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define EVP with verifiable culture proof points",
        "Architect internal channels and leadership communications",
        "Enable advocacy and integrate with recruiting marketing",
        "Measure engagement, sentiment, and talent outcomes",
      ],
      correctFeedback:
        "Right. EVP → channels → advocacy/recruiting → measure. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Start with EVP proof. Measurement closes the loop. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct internal comms layer.",
      categories: ["EVP & proof", "Channels & change", "Advocacy & recruiting", "Measurement & lens"],
      items: [
        { text: "Quarterly say-do authenticity audit.", category: 0 },
        { text: "Phased comms for multi-month ERP rollout.", category: 1 },
        { text: "Voluntary advocacy with disclosure guidelines.", category: 2 },
        { text: "Correlate pulse themes with Glassdoor trends.", category: 3 },
        { text: "Manager cascade packs within 48 hours.", category: 1 },
        { text: "Single proof library for careers site and job ads.", category: 2 },
      ],
      correctFeedback:
        "Right. EVP = proof. Channels = change and cascades. Advocacy = voluntary sharing and recruiting integration. Measurement = sentiment and lens. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Match each practice to EVP, channels, advocacy, or measurement. Re-read sections 6.1–6.8.",
    },
    {
      q: "Leadership avoids hard questions in town hall Q&A. What does the lens prioritise?",
      options: [
        "More AI-polished CEO scripts.",
        "Q&A prep, promise log discipline, and transparent bad news protocols before scaling comms volume.",
        "Cancel town halls entirely.",
        "Mandate employee advocacy to offset trust loss.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Leadership credibility precedes volume and advocacy. Re-read sections 6.3 and 6.8.",
      wrongFeedback:
        "Fix leadership trust mechanics before scaling output. Re-read sections 6.3 and 6.8.",
    },
    {
      q: "Comms wants mandatory employee social sharing. What should precede programme scale?",
      options: [
        "Mandatory sharing for all hands immediately.",
        "Voluntary pilot, disclosure rules, crisis freeze, and quality metrics.",
        "Only share product launch news.",
        "Skip governance — trust employees completely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Voluntary advocacy with governance beats mandates. Re-read sections 6.5 and 6.8.",
      wrongFeedback:
        "Build voluntary advocacy governance before scale. Re-read sections 6.5 and 6.8.",
    },
  ],
});
