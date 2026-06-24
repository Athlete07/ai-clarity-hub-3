import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktContentPersonalisationScale = buildChapter({
  slug: "mkt-content-personalisation-scale",
  number: 6,
  shortTitle: "Content Personalisation at Scale",
  title: "Content Personalisation at Scale — Relevance Without Chaos",
  readingMinutes: 24,
  summary:
    "AI makes it cheap to produce content variants — but cheap variants without segmentation strategy produce noise, not relevance. Personalisation at scale is a data, governance, and production system: know where you sit on the personalisation spectrum, match depth to data maturity, and use AI for variant production within a matrix your team can actually maintain.",
  keyTakeaway:
    "Personalisation is not 'put everyone's name in the email'. It is a spectrum from merge tags to behavioural dynamic content — and each level demands more data, more governance, and more operational discipline. Marketers who map their personalisation matrix before scaling AI variants earn relevance without drowning in complexity.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "6.1",
      title: "The Personalisation Spectrum",
      subtitle: "From 'Hi {{first_name}}' to real-time behavioural content — knowing where you actually operate",
      take: "Personalisation exists on a spectrum: basic substitution (name, company), segment messaging (role/industry variants), behavioural adaptation (content triggered by engagement history), and real-time dynamic (page and email content that changes per visitor session). Each level requires more data infrastructure, more content variants, and more QA — but delivers diminishing returns if your audience or offer does not justify the complexity.",
      why: "Teams that jump to dynamic personalisation without segment foundations produce broken experiences — wrong industry case study, stale behavioural triggers, embarrassing merge tag failures. Knowing your spectrum position prevents over-engineering and under-delivering.",
      paragraphs: [
        [
          s("Level one — basic substitution — is table stakes, not differentiation. "),
          x(
            "Merge tags for first name, company, and account owner are standard in HubSpot, Marketo, and Mailchimp. Audiences expect them; they rarely drive measurable lift alone. Failure modes: 'Hi {{first_name}}' when the field is empty, wrong company name from bad CRM hygiene.",
            "Before adding AI variant production, fix CRM data quality. Personalisation on dirty data personalises the mess.",
          ),
          s(" Audit merge tag error rates quarterly — any visible failure erodes the trust advanced personalisation tries to build."),
        ],
        [
          s("Level two — segment messaging — is where most B2B marketers should live. "),
          x(
            "Industry, company size, role, and lifecycle stage segments each receive messaging variants: different case studies, pain points, CTAs. AI accelerates variant drafting from one master brief. Humans approve segment-message mapping.",
            "Five to eight core segments with dedicated variants outperform fifty micro-segments nobody maintains.",
          ),
          s(" Segment personalisation is the highest ROI zone for AI-assisted content — enough relevance, manageable variant count."),
        ],
        [
          s("Levels three and four — behavioural and real-time — demand martech maturity. "),
          x(
            "Behavioural: email and onsite content changes based on pages viewed, content downloaded, product usage. Real-time dynamic: CMS or CDP serves different hero copy, social proof, and offers per visitor without manual sends.",
            "These levels require event tracking, identity resolution, content rules engine, and fallback content for unknown visitors. AI generates rules and variants; data platform executes them.",
          ),
          s(" Advance up the spectrum only when the level below performs consistently and data supports the next step."),
        ],
      ],
      examples: [
        {
          title: "Salesforce — segment-first nurture",
          body: "Salesforce's SMB versus enterprise nurture tracks use segment messaging, not real-time dynamic pages, for most campaigns. Industry and role variants within each track — generated with AI from master messaging docs, curated by segment owners. Lift on segment-personalised emails versus generic: 18% higher click-through. They deferred real-time homepage personalisation until CDP data quality scores exceeded internal threshold.",
        },
        {
          title: "DTC skincare — behavioural email triggers",
          body: "A DTC brand triggers post-purchase email sequences based on product category purchased and replenishment cycle. Behavioural rules are simple — three product lines, three timing windows. AI drafts variant copy per line; ops team maintains trigger logic in Klaviyo. Complexity stays bounded. Repeat purchase rate increased 12% versus one-size post-purchase email.",
        },
        {
          title: "Personalisation overreach — B2B startup",
          body: "A 20-person SaaS startup invested six months building dynamic website personalisation for twelve micro-industries with AI-generated landing pages. Traffic per industry was too thin for statistical learning; sales team could not name which variant they sent prospects. Programme shelved. Lesson: match personalisation depth to traffic and sales motion — ABM lists of 500 accounts justify depth; 500 monthly organic visitors do not.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch6-personalisation-spectrum",
      type: "nested",
      title: "Personalisation Spectrum",
      caption:
        "Basic substitution → segment messaging → behavioural adaptation → real-time dynamic. Each level increases data requirements and operational complexity.",
    }),
    buildSection({
      number: "6.2",
      title: "Segmentation Strategy",
      subtitle: "The segments that matter for content — and the ones that are vanity taxonomy",
      take: "Effective segmentation for content personalisation uses variables that change messaging meaningfully: industry, role, company size, lifecycle stage, product interest, and geography when offer varies. Vanity segments — arbitrary lead score bands without message difference — multiply variant work without relevance gain.",
      why: "AI will happily generate variants for fifty segments if you ask. Without segmentation discipline, you produce fifty versions of the same message with different headers — or worse, fifty inconsistent promises.",
      paragraphs: [
        [
          s("Start segmentation from sales and customer insight, not CRM field availability. "),
          x(
            "Interview sales: what differences in pitch exist by industry or role? Review won/lost deals: what messaging correlated? Check support tickets: what pain points cluster by segment?",
            "Segments should answer 'what would we say differently?' — if the answer is nothing, it is not a content segment.",
          ),
          s(" Document segment definitions with inclusion criteria and example accounts — not just demographic labels."),
        ],
        [
          s("Firmographic versus behavioural segments serve different moments. "),
          x(
            "Firmographic (industry, size, region) shapes core nurture and website first visit — you often know these from form fill or enrichment. Behavioural (content consumed, feature used, cart abandoned) shapes trigger communications and sales alerts.",
            "Mixing both in one matrix without clarity produces conflicting rules. Separate firmographic nurture tracks from behavioural trigger programmes.",
          ),
          s(" Map segments to buyer journey stage — a 'finance director at enterprise' message differs in awareness versus evaluation stage."),
        ],
        [
          s("Segment count governance is a marketer's job. "),
          x(
            "Rule of thumb: if your team cannot list all segments and their core message difference from memory, you have too many. Consolidate annually. Sunset segments with fewer than 50 active contacts unless strategically critical (e.g. named ABM accounts).",
            "AI variant generation makes segment proliferation tempting. Resist — maintenance cost grows linearly; relevance does not.",
          ),
          s(" Assign a segment owner responsible for message accuracy and variant freshness per segment."),
        ],
      ],
      examples: [
        {
          title: "HubSpot — lifecycle × persona matrix",
          body: "HubSpot markets to marketers, sales leaders, and customer service leaders across awareness, consideration, and decision stages. Their content matrix is lifecycle × persona — six primary cells, not sixty. AI assists drafting persona-specific examples within each cell. Campaign briefs reference matrix coordinates: 'CS leader, consideration stage'. Writers and AI know exactly which variant family to use.",
        },
        {
          title: "ABM named account segment",
          body: "An enterprise cybersecurity vendor maintains a named account list of 200 target companies. Each has a firmographic segment plus account-specific personalisation layer: logo, recent news reference, relevant case study from same industry. AI drafts first-pass account emails from a research brief template; account executives edit before send. Depth is justified by deal size — six-figure ACV warrants custom effort.",
        },
        {
          title: "Segment sprawl cleanup",
          body: "A marketing automation platform customer had 34 active segments from five years of campaigns nobody retired. Email team spent 40% of time fixing wrong-segment sends. Consolidation project merged to nine segments with documented message differences. AI helped rewrite merged nurture tracks. Deliverability and engagement improved; ops time dropped 25%.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "The Personalisation Matrix",
      subtitle: "A spreadsheet that maps segments × journey stages × channels — your personalisation operating system",
      take: "A personalisation matrix is the operational document that maps which content variants exist for which segment at which journey stage on which channel. It prevents duplicate work, identifies gaps, and gives AI clear coordinates for variant generation. Without a matrix, personalisation is ad hoc requests that do not compound.",
      why: "When product marketing launches a feature, the matrix answers: which segments get which angle, which case study, which CTA — in one view. When AI generates variants, the matrix is the brief. When sales complains messaging is wrong for their vertical, the matrix is the audit trail.",
      paragraphs: [
        [
          s("Build the matrix with four axes minimum. "),
          x(
            "Axis one: segment (industry, role, size — your chosen taxonomy). Axis two: journey stage (awareness, consideration, decision, retention). Axis three: channel (email, landing page, ad, sales deck). Axis four: content asset or message theme.",
            "Cell content: primary message, proof point, CTA, linked assets, owner, last updated date.",
          ),
          s(" Start with one channel — usually email nurture — then expand. A matrix nobody maintains is worse than no matrix."),
        ],
        [
          s("The matrix exposes gaps AI can fill — and conflicts humans must resolve. "),
          x(
            "Empty cells are opportunities: 'no healthcare consideration-stage case study email' → AI drafts from master brief, SME reviews. Conflicting cells — same segment, different promises on email versus landing page — are brand risks the matrix surfaces.",
            "Quarterly matrix review in campaign planning: new product, new segment, retired message.",
          ),
          s(" Version the matrix like a product roadmap — changelog when segments or positioning shifts."),
        ],
        [
          s("Connect the matrix to your DAM and CMS metadata. "),
          x(
            "Tag assets in Bynder, Contentful, or HubSpot with matrix coordinates: industry=healthcare, stage=consideration. Personalisation rules and AI retrieval pull the right asset by tag — not by someone remembering filename.",
            "Metadata discipline is what makes personalisation scalable beyond one marketer's spreadsheet.",
          ),
          s(" If AI tools connect to your content library, matrix tags become RAG filters for variant generation."),
        ],
      ],
      examples: [
        {
          title: "Notion personalisation matrix for product launch",
          body: "A fintech launching three product tiers built a Notion matrix: segment (SMB, mid-market, enterprise) × tier interest × journey stage. Each cell linked to approved messaging doc, case study, and objection handler. AI generated email and landing page variants by pulling cell coordinates from campaign brief. Launch shipped twelve personalised nurture paths in three weeks — previously one generic track. Sales reported 30% fewer 'wrong tier' conversations.",
        },
        {
          title: "Matrix-driven ad creative",
          body: "A B2B data platform mapped LinkedIn ad variants to matrix cells: role × pain point. Six segments, three pain points each, eighteen ad concepts — AI drafted headline and body variants; designer applied templates. Media team could trace performance back to matrix cell, not opaque creative name. Winning cells informed next quarter's content investment.",
        },
        {
          title: "Matrix neglect — conflicting promises",
          body: "A HR software company's matrix was outdated after repositioning from SMB to mid-market. Enterprise prospects received SMB pricing language in behavioural trigger emails while ads promised enterprise security. Matrix audit during rebrand caught eighteen conflicting cells. Single source of truth update propagated to Marketo, Webflow, and sales enablement in two sprints.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Variant Production with AI",
      subtitle: "Master briefs, segment modifiers, and QA that keep fifty variants on-message",
      take: "AI variant production starts from a master brief — core narrative, approved claims, primary proof points — then applies segment modifiers to generate differentiated copy. The workflow is generate, diff against master for claim compliance, human approve per segment or approve template with spot-check. Volume without diff discipline produces segment variants that contradict each other.",
      why: "Manual variant writing does not scale past a handful of segments. AI scales indefinitely — which is the problem if governance does not scale with it.",
      paragraphs: [
        [
          s("Structure master briefs for machine decomposition. "),
          x(
            "Master brief sections: positioning statement (immutable), approved claims list, proof points pool (tagged by segment relevance), CTA options, forbidden claims. Segment modifier: 'for healthcare audience, emphasise HIPAA compliance proof point B; use cautious tone on ROI claims'.",
            "AI generates variant by composing master + modifier — not by freewriting per segment from scratch.",
          ),
          s(" Store master briefs in your prompt library with version numbers tied to product releases."),
        ],
        [
          s("Automated diff checks catch claim drift across variants. "),
          x(
            "Before publish, run variants through a checklist or lightweight AI review: do all variants include required disclaimer? Do any variant introduce unsubstantiated superlative? Does enterprise variant accidentally mention SMB pricing?",
            "Compliance diff is especially critical in financial services, healthcare, and children's products.",
          ),
          s(" Rejected variants feed back into modifier templates — systematic failures update the brief, not just the single asset."),
        ],
        [
          s("Variant production cadence should match campaign rhythm, not continuous churn. "),
          x(
            "Generate variants at campaign kickoff and quarterly refresh — not daily regeneration that nobody reviews. Stable variants allow performance learning; constantly changing copy confounds A/B tests.",
            "Exception: behavioural triggers with dynamic product catalog data — automate within template bounds.",
          ),
          s(" Track variant count and edit burden monthly. If edit time per variant exceeds manual rewrite threshold, improve master briefs."),
        ],
      ],
      examples: [
        {
          title: "Jasper campaign variants — B2B manufacturing",
          body: "A industrial IoT company used Jasper with master brief and six industry modifiers to produce landing page hero sections for manufacturing, logistics, energy, healthcare, retail, and public sector. Total production time: four hours including SME review per industry. Prior manual process: three days per industry with agency. Claim diff checklist caught one variant with unapproved uptime statistic before publish.",
        },
        {
          title: "ChatGPT batch variant workflow",
          body: "A nonprofit marketing team produces year-end appeal emails for four donor segments: major donors, monthly givers, lapsed donors, first-time donors. Master emotional narrative is fixed; AI adjusts tone and ask amount framing per segment modifier doc. Development director spot-checks all four in 30 minutes. Segment-specific open rates beat generic control by 9–21% depending on segment.",
        },
        {
          title: "Variant contradiction — pricing page disaster",
          body: "AI generated enterprise and SMB pricing page variants without a shared master brief. Enterprise page mentioned 'unlimited users'; SMB page capped at ten. Sales discovered during demo when prospect compared both URLs. Master brief now includes immutable pricing facts block that modifiers cannot override.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Email Personalisation",
      subtitle: "Beyond merge tags — dynamic blocks, send-time optimisation, and AI content at scale",
      take: "Email remains the highest-ROI personalisation channel for most marketers. Modern platforms — HubSpot, Braze, Iterable, Klaviyo — support dynamic content blocks, conditional sections, and AI-assisted subject lines and body copy. Effective email personalisation combines segment rules, behavioural triggers, and AI variants within deliverability and consent constraints.",
      why: "Email personalisation failures are immediately visible to recipients — and spam filters punish inconsistent sending patterns. Email is where personalisation strategy meets operational rigour.",
      paragraphs: [
        [
          s("Layer personalisation: subject line, preview text, hero, body blocks, CTA. "),
          x(
            "Not every layer needs segment variants. Often subject line + one dynamic content block delivers most lift. AI generates subject line variants for A/B test; winner informs segment templates.",
            "Send-time optimisation (HubSpot, Mailchimp) personalises delivery time per contact — low content effort, measurable open rate lift.",
          ),
          s(" Test personalisation lift per layer — avoid rebuilding entire emails when one dynamic block suffices."),
        ],
        [
          s("Dynamic content blocks need fallbacks. "),
          x(
            "If industry field is empty, show generic block — not blank or wrong industry. If behavioural trigger data is stale (>90 days), fall back to segment default. Document fallback logic in the matrix.",
            "The most common personalisation embarrassment is empty or nonsensical dynamic block — worse than generic email.",
          ),
          s(" QA emails with test contacts representing each segment edge case: missing fields, maximum field length, special characters."),
        ],
        [
          s("Consent and preference centres gate personalisation depth. "),
          x(
            "GDPR, CAN-SPAM, and CASL require lawful basis for processing data used in personalisation. Preference centre should let contacts choose content topics — those choices become segments.",
            "AI-generated personalisation does not exempt you from consent rules. Behavioural tracking for personalisation needs clear privacy policy disclosure.",
          ),
          s(" Partner with legal on which personalisation data types are fair game for marketing use."),
        ],
      ],
      examples: [
        {
          title: "Braze dynamic content — retail app",
          body: "A retail app uses Braze Canvas to combine behavioural triggers (cart abandon, browse category) with dynamic product recommendation blocks fed by catalog API. AI writes subject line variants per category; product block is data-driven, not AI-generated. Cart abandon recovery revenue increased 28% versus static product image block. Fallback: bestsellers when browse history empty.",
        },
        {
          title: "HubSpot smart content for B2B",
          body: "A B2B services firm uses HubSpot smart content on emails and thank-you pages: industry segment from form fill drives case study module. Three industries, one email template, dynamic middle block. Maintenance: update case study in matrix → propagates to all emails using that smart rule. AI drafts industry intro sentences; case study is human-approved asset.",
        },
        {
          title: "Merge tag catastrophe",
          body: "A SaaS company sent 40,000 emails with 'Hi {{contact.company}}' rendering as 'Hi .' because enrichment failed silently. Support ticket volume spiked; unsubscribe rate doubled for that send. Fix: pre-send rendering test on sample list, suppression rule for contacts missing required personalisation fields, generic salutation fallback.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Landing Page Personalisation",
      subtitle: "UTM-driven variants, ABM pages, and dynamic CMS — when custom URLs beat one generic page",
      take: "Landing page personalisation aligns ad click or email CTA experience with segment message: industry-specific social proof, role-relevant hero copy, account-specific ABM pages. Tools include HubSpot smart pages, Mutiny, Instapage, Webflow with CMS logic, and Salesforce Account Engagement. AI accelerates page variant drafting; martech executes routing.",
      why: "Message match between ad and landing page is one of the highest-leverage conversion factors. Generic landing pages waste personalised upstream work — and ad quality scores suffer.",
      paragraphs: [
        [
          s("Match personalisation mechanism to traffic source. "),
          x(
            "UTM parameters: ad campaign drives industry-specific page variant. Known contact: marketing automation personalises page for returning visitor from CRM data. Named ABM: unique URL per target account with logo and custom proof point.",
            "Anonymous cold traffic rarely justifies real-time dynamic personalisation — segment-specific pages from campaigns perform better.",
          ),
          s(" Document URL strategy in media plan: every paid campaign links to a matrix-aligned page, not homepage."),
        ],
        [
          s("ABM pages are personalisation depth for high-value lists — not for everyone. "),
          x(
            "AI drafts first-pass ABM page from account research template: recent earnings call mention, relevant case study, named executive quote. AE reviews before outbound send. SixSense, Demandbase, and similar tools automate routing when account visits site.",
            "Maintenance burden is real: cap named page count or use modular blocks updated centrally.",
          ),
          s(" Measure ABM page influence on pipeline, not just page views — vanity visits from bots happen."),
        ],
        [
          s("Page speed and SEO interact with personalisation. "),
          x(
            "Too many dynamic rules or heavy personalisation scripts slow load time — hurting conversion and SEO. Prefer server-side or edge personalisation over client-side script bloat where possible.",
            "Personalised pages behind login differ from public SEO pages — do not cloak content for crawlers.",
          ),
          s(" Core Web Vitals test on each major page variant — personalisation must not break performance."),
        ],
      ],
      examples: [
        {
          title: "Mutiny — segment landing pages for paid social",
          body: "A project management SaaS runs LinkedIn ads to three industries with Mutiny personalising homepage hero for visitors with matching firmographic signal. Fallback generic hero for unknown visitors. AI drafted industry hero copy variants; design system ensured layout consistency. Industry-aligned pages converted trial signups 34% higher than generic homepage for paid traffic.",
        },
        {
          title: "Webflow CMS + AI for localised landing pages",
          body: "A franchise brand used Webflow CMS collections to generate location landing pages: AI drafts local intro paragraph from city data template; human franchisee approves. 200 location pages maintained by central team plus local approval workflow. Local paid search quality scores improved; cost per lead dropped 15% in pilot markets.",
        },
        {
          title: "ABM page without sales alignment",
          body: "Marketing created 150 AI-drafted ABM pages and emailed accounts without sales awareness. AEs called prospects referencing outdated page content from wrong product line. Programme paused; new rule: no ABM page goes live without AE sign-off and matrix coordinate assignment.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Data Requirements",
      subtitle: "CRM hygiene, enrichment, event tracking, and the garbage-in garbage-out reality",
      take: "Personalisation quality ceiling is data quality. Required data varies by spectrum level: merge tags need accurate contact fields; segment messaging needs firmographics; behavioural personalisation needs event tracking and identity resolution; real-time dynamic needs CDP-grade unification. AI cannot fix missing or wrong data — it confidently personalises the wrong thing.",
      why: "Marketing invests in personalisation tools and AI variant production while CRM decays. The result is expensive embarrassment. Data readiness assessment should precede personalisation depth increases.",
      paragraphs: [
        [
          s("Audit data before scaling personalisation — score each required field. "),
          x(
            "Contact: email, name, company, role, industry, lifecycle stage — completeness and accuracy rates. Account: firmographics, segment assignment, owner. Behavioural: page views, content downloads, product usage events — coverage and freshness.",
            "Set minimum thresholds: e.g. industry field 85% populated before industry personalisation goes live.",
          ),
          s(" Publish data quality metrics monthly alongside engagement metrics — leadership sees the foundation."),
        ],
        [
          s("Enrichment tools fill gaps — with verification discipline. "),
          x(
            "Clearbit, ZoomInfo, Apollo enrich firmographics on form submit or list upload. Enrichment confidence scores vary. Policy: high-confidence auto-apply; low-confidence queue for human review or use generic fallback.",
            "Wrong industry enrichment personalises to the wrong message confidently — worse than generic.",
          ),
          s(" Re-enrich stale records annually; companies change size, industry, and tech stack."),
        ],
        [
          s("Event tracking is prerequisite for behavioural personalisation. "),
          x(
            "Define standard event taxonomy: page_view, content_download, demo_request, feature_used. Implement via GA4, Segment, or platform-native tracking. Test with Tag Assistant or debugger before triggering campaigns.",
            "Marketing and product must share event definitions — 'active user' means different things in different systems.",
          ),
          s(" Identity resolution — stitching anonymous to known — is the hard part. Advance behavioural personalisation only when match rates are documented."),
        ],
      ],
      examples: [
        {
          title: "Segment CDP — identity resolution project",
          body: "A mid-market software company deferred behavioural email personalisation until Segment CDP implementation unified product usage, marketing engagement, and sales CRM ID. Six-month project. Post-launch: behavioural nurture based on feature adoption increased expansion pipeline 22%. Prior attempt with CRM-only data failed because usage data lived in product database marketing could not access.",
        },
        {
          title: "CRM hygiene sprint before personalisation",
          body: "A professional services firm wanted role-based email variants. CRM role field was 40% populated, often with job titles too granular ('VP, Strategic Initiatives, EMEA'). Data team ran normalisation sprint: map to six role buckets, enrich missing from LinkedIn via Apollo, suppress contacts below 70% confidence. Post-sprint 88% coverage — then AI variant rollout. Skipping sprint would have sent 'CFO track' emails to wrong roles.",
        },
        {
          title: "Stale behavioural trigger",
          body: "E-commerce brand triggered 'still interested?' emails based on product views from 180 days ago without recency filter. Customers who already purchased received nagging emails. Fix: recency window max 14 days, purchase event suppresses browse trigger, preference centre opt-down. Data logic review now part of every behavioural programme launch.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Depth vs Complexity",
      subtitle: "Five questions before you add another personalisation layer or AI variant family",
      take: "Before deepening personalisation: (1) does data quality meet threshold for this level? (2) is the segment count maintainable with named owners? (3) does the matrix document message differences clearly? (4) will AI variants pass claim diff and fallback QA? (5) can you measure lift versus added complexity? Five yes answers → deepen. Any no → fix foundations or stay at current spectrum level.",
      why: "Personalisation has diminishing returns and increasing ops cost. This lens prevents prestige projects that impress in demos but fail in production — applicable in quarterly planning without engineering dependency.",
      paragraphs: [
        [
          s("Check one: data readiness for the target spectrum level. "),
          x(
            "Can you populate required fields for 85%+ of target audience? Are behavioural events firing correctly? If not, invest in data before variant production.",
            "Data projects are unglamorous but determine personalisation ceiling.",
          ),
          s(" Data gate is non-negotiable for behavioural and real-time levels."),
        ],
        [
          s("Checks two and three: segment governance and matrix integrity. "),
          x(
            "Each active segment has an owner and documented message difference. Matrix is current, conflicts resolved, assets tagged. New personalisation maps to matrix cells — not orphan campaigns.",
            "If you cannot explain segment count to sales in five minutes, simplify before AI multiplies variants.",
          ),
          s(" Matrix and segment review should be a standing agenda item in campaign planning."),
        ],
        [
          s("Checks four and five: variant QA and measurable lift hypothesis. "),
          x(
            "Claim diff and fallback logic exist for dynamic content. You have a test plan: what metric proves this personalisation layer worth the maintenance — conversion, pipeline, retention?",
            "Personalisation without measurement is decoration. Kill underperforming layers annually.",
          ),
          s(" Run this lens before martech renewals that upsell 'advanced personalisation' modules you may not need yet."),
        ],
      ],
      examples: [
        {
          title: "CDP purchase deferred — honest assessment",
          body: "A CMO asked for real-time website personalisation. Five-check assessment revealed 52% industry field coverage and no product usage integration. Recommendation: six-month data hygiene and segment messaging optimisation first; CDP budget deferred. Engagement lift from segment email work alone justified year — CDP re-evaluated from stronger foundation.",
        },
        {
          title: "Variant family sunset",
          body: "Annual personalisation audit found four industry variants with no statistically significant performance difference over eight months. Consolidated to two industry groups plus generic fallback. AI variant production time cut 40%; no conversion drop. Complexity lens applied in reverse — simplify when depth does not earn its keep.",
        },
        {
          title: "ABM depth justified by deal size",
          body: "Enterprise software company ran five-check for named account programme: data ready for target list, matrix mapped, AE sign-off workflow defined, claim review for custom proof points, pipeline attribution model in place. All yes — programme launched for 100 accounts with six-figure ACV. Same company rejected micro-industry dynamic pages for inbound traffic — checks two and five failed.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your CRM industry field is 45% populated. Leadership wants industry-personalised nurture emails for all leads. What do you recommend?",
      options: [
        "Launch immediately — 45% is enough.",
        "Run a data hygiene and enrichment sprint to reach agreed threshold (e.g. 85%), with generic fallback for incomplete records, before scaling industry variants.",
        "Use AI to guess industry from email domain without verification.",
        "Remove industry personalisation goals entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Personalisation on incomplete data personalises errors. Fix data and fallbacks first. Re-read sections 6.1 and 6.7.",
      wrongFeedback:
        "Data quality gates personalisation depth. Enrich, normalise, and fallback before scale. Re-read sections 6.1 and 6.7.",
    },
    {
      q: "Where should most B2B marketers focus personalisation effort for highest ROI?",
      options: [
        "Real-time dynamic homepage for all anonymous visitors.",
        "Segment messaging — industry, role, and lifecycle variants with manageable segment count and AI-assisted production.",
        "Maximum micro-segments with AI-generated unique copy per contact.",
        "First-name merge tags only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Segment messaging balances relevance and maintainability. Re-read sections 6.1 and 6.2.",
      wrongFeedback:
        "Segment level is the sweet spot for most B2B teams — not merge tags alone or unlimited micro-segments. Re-read sections 6.1 and 6.2.",
    },
    {
      kind: "order",
      q: "Order personalisation maturity from foundational (first) to advanced (last).",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Basic substitution — name and company merge tags with QA",
        "Segment messaging with documented matrix and variant owners",
        "Behavioural triggers based on verified event tracking",
        "Real-time dynamic content via CDP and rules engine",
      ],
      correctFeedback:
        "Right. Advance up the spectrum only when each level performs and data supports the next. Re-read sections 6.1–6.7.",
      wrongFeedback:
        "Start with merge tags and data hygiene, then segments, then behavioural, then real-time. Re-read sections 6.1–6.7.",
    },
    {
      kind: "categorize",
      q: "Sort each element into the correct personalisation system component.",
      categories: ["Segmentation", "Personalisation matrix", "Variant production", "Data foundation"],
      items: [
        { text: "Documenting that finance directors receive ROI proof point B.", category: 0 },
        { text: "Spreadsheet mapping segment × journey stage × channel assets.", category: 1 },
        { text: "Master brief plus industry modifier for AI email drafts.", category: 2 },
        { text: "Enrichment sprint to reach 85% industry field coverage.", category: 3 },
        { text: "Sunsetting segments with fewer than 50 active contacts.", category: 0 },
        { text: "Claim diff checklist across all generated variants.", category: 2 },
      ],
      correctFeedback:
        "Right. Segments define who; matrix maps what where; variant production creates copy; data enables all layers. Re-read sections 6.2–6.7.",
      wrongFeedback:
        "Match each practice: segments (taxonomy), matrix (mapping), variants (production), data (foundation). Re-read sections 6.2–6.7.",
    },
    {
      q: "Dynamic email content block shows blank for contacts missing industry data. What is missing?",
      options: [
        "Better AI prompts.",
        "Fallback content logic — show generic approved block when personalisation field is empty.",
        "More segments.",
        "Higher email send frequency.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fallbacks prevent personalisation failures from becoming recipient-visible errors. Re-read section 6.5.",
      wrongFeedback:
        "Every dynamic block needs fallback for missing or stale data. Re-read section 6.5.",
    },
    {
      q: "AI generated enterprise and SMB pricing page variants with conflicting user limits. What prevents recurrence?",
      options: [
        "Use a different AI model.",
        "Immutable facts block in master brief that segment modifiers cannot override, plus diff review before publish.",
        "Publish faster to reduce review time.",
        "Let sales explain the discrepancy on calls.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Master briefs with non-negotiable claims and variant diff checks prevent contradiction. Re-read sections 6.3 and 6.4.",
      wrongFeedback:
        "Variant production needs master brief governance and claim diff — not just more generation. Re-read sections 6.3 and 6.4.",
    },
  ],
});
