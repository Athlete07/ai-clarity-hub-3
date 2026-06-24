import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktAiEmailCopywriting = buildChapter({
  slug: "mkt-ai-email-copywriting",
  number: 2,
  shortTitle: "AI for Email Copywriting",
  title: "AI for Email Copywriting",
  readingMinutes: 24,
  summary:
    "Email copy is a production system: subject lines earn the open, preview text extends the hook, body copy delivers value and proof, CTAs drive action, and sequences build narrative arcs across days or weeks. AI accelerates every element — Jasper, Klaviyo AI, HubSpot content assistants, and Claude with brand guidelines produce variants at scale. This chapter covers subject line testing frameworks, preview text optimisation, body copy briefs, CTA placement, dynamic block generation, plain text vs HTML, sequence architecture, and the human editing layer that prevents tone errors and brand damage.",
  keyTakeaway:
    "AI multiplies email copy output; marketers own brief quality, message match, compliance, and the editing gate before send. The workflow that wins: structured brief → AI variants → human voice and fact check → A/B test → document winners in a copy playbook.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "Subject Line Generation and Testing",
      subtitle: "Using AI to generate subject line variants at scale — the framework, the testing cadence, and the signals that predict what opens",
      take: "Subject lines are 40-character sales pitches. AI generates dozens of variants from briefs that include audience segment, offer, urgency level, personalisation token, and brand voice constraints. Effective frameworks: curiosity gap, direct benefit, social proof, question, and personalisation. Test 2–4 variants per send on lists above 10k; use Klaviyo A/B, Mailchimp multivariate, or HubSpot automated winner selection. Optimise for clicks and revenue where possible — opens are inflated by Apple Mail Privacy Protection.",
      why: "Manual subject line brainstorming caps testing velocity. AI variants plus disciplined testing compound learning — but unreviewed AI subjects risk spam triggers and off-brand tone.",
      paragraphs: [
        [
          s("Build a subject line brief with five required fields. "),
          x(
            "Audience segment and awareness stage. Core promise or offer in one sentence. Constraints: max length, emoji policy, banned words (FREE in caps, etc.). Personalisation available (first name, company). Test hypothesis — curiosity vs direct benefit.",
            "Briefs without constraints produce generic 'Don't miss out!' variants that train subscribers to ignore you.",
          ),
          s(" Store winning subjects by segment in a playbook — AI prompts reference past winners."),
        ],
        [
          s("Generate variants by framework, not random volume. "),
          x(
            "Ask Claude or Jasper for three subjects each: benefit-led, curiosity-led, proof-led. Klaviyo AI subject suggestions analyse past performance — validate against brand voice before accepting.",
            "Ten undifferentiated variants waste statistical power; four distinct angles test faster.",
          ),
          s(" Pre-screen AI subjects against spam trigger lists and deliverability rules before A/B setup."),
        ],
        [
          s("Establish testing cadence and sample rules. "),
          x(
            "Campaigns: test every major send. Flows: test welcome email 1 monthly. Minimum list split: 20% per variant or platform minimum. Run 4–24 hours for broadcast; flow tests may need two weeks for volume.",
            "Document lift on revenue per recipient when integrated — not opens alone.",
          ),
          s(" Retire losing patterns quarterly — algorithms and audiences fatigue."),
        ],
      ],
      examples: [
        {
          title: "Klaviyo AI subject testing — DTC beauty",
          body: "A beauty brand briefed segment (lapsed 90-day), offer (20% restock), and voice (clinical-friendly). AI generated twelve subjects; team selected four angles. Winner 'Your routine missed you — 20% inside' beat 'SALE: 20% OFF NOW' on revenue per send by 23% despite lower opens — curiosity beat spammy urgency on engaged segment.",
        },
        {
          title: "B2B HubSpot — persona subject frameworks",
          body: "A fintech vendor maintains subject playbooks per persona: CFO (ROI numbers), Controller (compliance ease), IT (integration security). AI drafts within framework; human approves. CFO track CTR 2.4x generic product announcements — framework discipline beat raw AI output.",
        },
        {
          title: "Deliverability catch — Mailchimp retail",
          body: "AI drafted '$$$ FLASH FREE GUARANTEED $$$' variant for flash sale. Spam score tool flagged before send. Replaced with '24-hour access — members only pricing.' Inbox placement test improved from 78% to 94% inbox — human deliverability review is non-optional.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch2-copy-workflow",
      type: "flow",
      title: "AI Email Copy Workflow",
      caption:
        "Brief → subject + preview variants → body + CTA draft → human edit for voice and facts → A/B test and send-time optimisation.",
    }),
    buildSection({
      number: "2.2",
      title: "Preview Text Optimisation",
      subtitle: "The second subject line most marketers underuse — AI for generating preview text that complements and extends the subject line",
      take: "Preview text (preheader) appears beside or below the subject in inbox clients — 40–90 visible characters that extend the hook or deliver the CTA early. Empty preview pulls first body text, often 'View in browser' or boilerplate — wasted inbox real estate. AI generates preview pairs with subjects: subject creates curiosity, preview delivers specificity. Klaviyo, HubSpot, and Mailchimp all support custom preview; many teams still leave it blank.",
      why: "Optimised preview text lifts effective open interest and sets expectation — reducing bounce-from-disappointment and spam complaints when body matches promise.",
      paragraphs: [
        [
          s("Write subject and preview as a pair, not isolated lines. "),
          x(
            "Pattern: subject = hook; preview = proof or offer detail. 'Your Q2 planning template' + preview 'Used by 2,400 finance teams — download in 2 clicks.' AI generates pairs from same brief.",
            "Repeating subject text in preview wastes characters — extend, don't duplicate.",
          ),
          s(" Character-count preview in Litmus or Email on Acid — mobile truncates aggressively."),
        ],
        [
          s("Test preview variants alongside subject tests where platform allows. "),
          x(
            "Some ESPs test subject only — manual pair testing on high-volume sends. Document which preview patterns lift clicks: offer specificity, social proof, or urgency deadline.",
            "B2B previews often work better with value statement than emoji-heavy hooks.",
          ),
          s(" Add preview field to every email brief template — blank is not allowed."),
        ],
        [
          s("Avoid preview spam triggers and hidden text tricks. "),
          x(
            "Stuffing keywords in white text or misleading preview-body mismatch triggers complaints. Preview must reflect actual email content.",
            "AI sometimes over-promise — align preview with body CTA promise.",
          ),
          s(" Compliance review includes preview for regulated industries."),
        ],
      ],
      examples: [
        {
          title: "Preview pair lift — SaaS webinar invite",
          body: "Subject 'Live: cut close time 30%' with preview 'CFO panel + worksheet — register by Thursday.' CTR rose 17% vs subject-only with auto-preview pulling footer address. AI generated five pairs; winner selected by message-match review, not opens.",
        },
        {
          title: "E-commerce restock — Klaviyo",
          body: "Restock alert subject 'Back in stock: ceramic set' + preview 'Ships free today — 12 units left.' Revenue per click rose 14% vs blank preview pulling nav links. Pair approach now standard in production checklist.",
        },
        {
          title: "Mismatch fix — nonprofit appeal",
          body: "AI preview promised '2x match ends tonight' but body led with donor story — complaints spiked. Preview rewritten to match story-first structure; complaints normalised. Preview-body alignment is trust, not trickery.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Email Body Copy with AI",
      subtitle: "Generating email body copy that is concise, on-brand, and conversion-focused — the brief structure that produces usable first drafts",
      take: "Email body copy briefs include: single primary CTA, audience segment, key message in one sentence, proof points (data, testimonial, case), objection to address, word count target, and brand voice sample. AI produces first drafts in PAS, AIDA, or story structures — humans cut fluff, verify facts, and align to template modules. Klaviyo and HubSpot AI draft in-editor; Claude handles long-form nurture with CRM context exports.",
      why: "Unstructured 'write promotional email' prompts produce brochureware. Brief-driven AI drafts land 70% complete — editing time drops from hours to minutes per send.",
      paragraphs: [
        [
          s("One email, one job — encode in brief. "),
          x(
            "Educate, convert, re-engage, or announce — mixing jobs confuses CTA. AI drafts multiply jobs without discipline.",
            "Newsletter format may have multiple links but still needs primary action above fold.",
          ),
          s(" Limit body to scannable blocks: headline, 2–3 short paragraphs, bullet proof, single CTA."),
        ],
        [
          s("Feed AI brand voice with examples, not adjectives. "),
          x(
            "Attach two approved emails and style guide excerpt to Claude. 'Sound like these' beats 'sound professional and friendly.'",
            "Jasper brand voice and HubSpot brand tone settings reduce rewrite cycles.",
          ),
          s(" Flag AI hallucinated stats and customer names — fact-check gate mandatory."),
        ],
        [
          s("Modular copy fits dynamic templates. "),
          x(
            "Write hero block, secondary proof, and CTA as separate modules for dynamic assembly. AI generates module variants per segment.",
            "Monolithic walls of text block personalisation and mobile readability.",
          ),
          s(" Mobile preview every draft — 60%+ opens on mobile in most programmes."),
        ],
      ],
      examples: [
        {
          title: "Brief-driven draft — B2B case study email",
          body: "Brief: MQL segment, job=book demo, proof=Fortune 500 logo strip + 40% stat from verified case study. AI draft required one factual correction and CTA shorten. Production time 25 minutes vs 2 hours manual. Demo bookings per send up 11% on clearer PAS structure.",
        },
        {
          title: "Klaviyo AI in-editor — flash sale",
          body: "Merchandiser used Klaviyo AI to draft sale body from product feed context. Human trimmed 30% word count and fixed tone. Sent within 3 hours of inventory decision — speed captured weekend demand without sacrificing brand voice review.",
        },
        {
          title: "Hallucination catch — healthcare",
          body: "AI invented clinical trial citation in nurture email. Medical affairs blocked send. Brief now requires approved claim library only — AI selects from indexed snippets, not open generation. Compliance-safe workflow slower but sendable.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "CTA Copy and Placement",
      subtitle: "Using AI to generate and test call-to-action variants — the element that most directly affects click-through rate in every email format",
      take: "CTA copy converts interest to action: button text, link text, and secondary CTAs must match funnel stage — 'Start free trial' for prospects, 'Complete your order' for abandoners, 'Update preferences' for re-engagement. AI generates verb-led variants; placement rules put primary CTA above fold and repeat after proof for long emails. Test button copy independently when traffic allows — 'Shop now' vs 'See your picks' can swing CTR 20%+.",
      why: "Strong subject and body with weak CTA wastes opens. CTA is the highest-leverage micro-copy test in most email formats.",
      paragraphs: [
        [
          s("Use action verb + outcome in CTA copy. "),
          x(
            "'Get the template,' 'Book your slot,' 'Finish checkout' — not 'Click here' or 'Learn more' without context. AI variants should differ in verb and outcome, not synonym shuffle.",
            "B2B CTAs often need lower-commitment options: 'Watch 3-min overview' vs 'Book 30-min call.'",
          ),
          s(" One primary CTA per email — secondary links demote visually."),
        ],
        [
          s("Test CTA at button and link level. "),
          x(
            "Some audiences click text links in plain templates; button-heavy HTML works for retail. AI suggests both; brand template dictates format.",
            "HubSpot and Klaviyo click maps show if users reach bottom CTA — add mid-email CTA if drop-off high.",
          ),
          s(" Ensure 44px minimum tap target on mobile buttons — design not copy, but affects CTR."),
        ],
        [
          s("Match CTA to segment readiness. "),
          x(
            "Cold leads: education CTA. Cart abandoners: urgency + cart link. AI must receive segment context or defaults to aggressive 'Buy now' on wrong audience.",
            "Dynamic CTAs in Salesforce and Klaviyo pull from product or deal stage — copy templates per stage.",
          ),
          s(" Log CTA winners by segment in copy playbook."),
        ],
      ],
      examples: [
        {
          title: "CTA A/B — webinar registration",
          body: "IT persona email tested 'Reserve your seat' vs 'See the architecture demo.' Second won 19% higher CTR — specificity beat event generic. AI generated six variants; two distinct outcomes tested.",
        },
        {
          title: "Abandonment CTA — Shopify + Klaviyo",
          body: "Cart flow tested 'Complete your order' vs 'Return to cart — items saved.' Second reduced anxiety on high-AOV purchases; recovery revenue up 8%. Segment-specific CTA mattered more than subject tweaks.",
        },
        {
          title: "Secondary CTA clutter — enterprise nurture",
          body: "AI draft included three equal CTAs: demo, whitepaper, blog. Human cut to one primary demo + text link to resource. Demo CTR doubled — choice paralysis was measurable.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Personalisation Tokens and Dynamic Content Blocks",
      subtitle: "How to use AI to generate the content components that make emails feel genuinely individual at scale",
      take: "Personalisation tokens — first name, company, last product viewed — are baseline. Dynamic content blocks swap entire modules based on segment or behaviour: category hero, regional offer, role-specific proof. AI generates block variants per segment from one master brief: 'write hero for SMB vs enterprise' outputs parallel modules for Klaviyo dynamic templates or HubSpot smart content. Production scales when modules are templated, not one-off emails per segment.",
      why: "Tokens alone feel shallow; dynamic blocks deliver relevance without separate sends. AI makes multi-variant block production feasible for lean teams.",
      paragraphs: [
        [
          s("Map dynamic blocks to data you actually have. "),
          x(
            "Product category affinity needs browse or purchase events. Role personalisation needs CRM job title hygiene. AI cannot personalise on missing fields — audit data coverage first.",
            "Fallback content for empty tokens: 'there' beats broken '{{first_name}}'.",
          ),
          s(" Document required fields per template in ESP — block build if data below 80% coverage."),
        ],
        [
          s("Use AI to generate variant sets, not individual emails. "),
          x(
            "Prompt: 'Write 4 hero blocks for personas: finance, ops, IT, HR — same offer, different proof.' Output drops into dynamic template slots.",
            "Klaviyo universal content and HubSpot modules reuse across campaigns.",
          ),
          s(" Human review ensures no persona gets incompatible claims or tone."),
        ],
        [
          s("Test dynamic vs static on measurable lift. "),
          x(
            "Holdout 10% static control on major personalised campaigns. Prove incremental CTR or revenue before expanding AI block production.",
            "Over-personalisation with creepy specificity backfires — 'We saw you at 2am' is wrong.",
          ),
          s(" Preference centre data beats inferred behaviour for sensitive categories."),
        ],
      ],
      examples: [
        {
          title: "Dynamic hero blocks — B2B software",
          body: "HubSpot smart content swapped hero case study by industry vertical from CRM. AI drafted six vertical intros; legal approved three for launch. CTR on personalised heroes 2.1x generic — production time 1 day vs 1 week manual.",
        },
        {
          title: "Product affinity modules — Klaviyo retail",
          body: "Email template pulled last-viewed category into AI-written intro line and product grid. Fallback to bestsellers when browse data missing. Category match emails drove 18% higher RPE than generic blast.",
        },
        {
          title: "Token failure — messy CRM data",
          body: "Mailchimp campaign used '{{company}}' with 45% blank values. AI-generated awkward 'Acme Corp or your team' fallbacks. CRM cleanup project preceded next personalisation wave — data before copy.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Plain Text vs HTML Email Copy",
      subtitle: "When each format performs better and how AI produces copy that works in both without format-specific rewrites",
      take: "HTML emails deliver design, imagery, and tracked buttons; plain text feels personal and often wins in B2B founder-to-buyer, sales follow-up, and re-engagement 'breakup' emails. Best practice: AI drafts core message once; adapt — HTML gets scannable structure and buttons, plain text gets conversational line breaks and full URLs. Some flows send multipart MIME with both; testing plain-only to engaged B2B segments often lifts replies and meetings.",
      why: "AI that only outputs HTML-minded copy produces stiff plain text. Dual-format workflow respects channel norms and improves deliverability perception in some B2B inboxes.",
      paragraphs: [
        [
          s("Choose format by relationship and goal. "),
          x(
            "Transactional and retail promo: HTML. High-touch B2B nurture, executive outreach, re-engagement: consider plain or minimal HTML. AI brief should specify format — tone differs.",
            "Founder-signed plain text in HubSpot outperformed designed newsletter for enterprise pilots.",
          ),
          s(" Sales-assist emails often plain; marketing broadcasts HTML — document standard per flow type."),
        ],
        [
          s("AI prompt for dual output in one pass. "),
          x(
            "'Write core message, then HTML version with bullets and CTA button label, then plain text under 150 words with URL on own line.' Reduces divergence between versions.",
            "Plain text should not be an afterthought pasted from HTML — reads robotic.",
          ),
          s(" Link placement: plain text spells full URL; HTML uses button — same destination."),
        ],
        [
          s("Accessibility and deliverability intersect with format. "),
          x(
            "HTML needs alt text on images — AI can draft. Heavy image-only HTML fails when images blocked. Plain text avoids image dependency.",
            "Spam filters score HTML/image ratio — balance for retail.",
          ),
          s(" Test plain vs HTML on same segment quarterly where relationship allows."),
        ],
      ],
      examples: [
        {
          title: "Plain text win-back — B2B SaaS",
          body: "Re-engagement tested designed HTML vs plain 'Should we stay in touch?' from customer success tone. Plain drove 2.3x reply rate and 40% more reactivations — felt human. AI drafted plain first; HTML version deprecated for this flow.",
        },
        {
          title: "Dual-format production — e-commerce",
          body: "Retail brand AI workflow outputs HTML modules and plain summary paragraph for multipart. Gmail users seeing plain preview get coherent text; design lovers get full HTML. Complaint rate dropped slightly — format choice reduced surprise.",
        },
        {
          title: "HTML-only failure — transactional confusion",
          body: "Password reset email was image-heavy marketing template. Users missed CTA when images blocked. Plain text alternative added with explicit link — support tickets dropped 22%.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Sequence Copy Architecture",
      subtitle: "Writing a multi-email nurture sequence with AI — the narrative arc, the message progression, and the production workflow",
      take: "Sequence architecture defines narrative arc across emails: email 1 establishes problem and credibility, email 2 delivers value asset, email 3 social proof, email 4 offer with urgency, email 5 breakup or survey. Delays between steps match buying cycle — B2B 3–5 days, DTC 1–2 days for abandonment. AI drafts full sequence from arc outline; humans adjust delays, suppressions, and branch logic. Klaviyo flows, HubSpot workflows, and Mailchimp Customer Journeys host execution.",
      why: "One-off AI emails do not build momentum. Sequence architecture ensures each touch advances relationship — not five versions of 'buy now.'",
      paragraphs: [
        [
          s("Outline arc before AI drafts any single email. "),
          x(
            "Document: goal per email, CTA escalation, proof introduced, objection addressed. Feed outline to Claude: 'Draft 5 emails following this arc for segment X.'",
            "Sequences without arc produce repetitive AI filler — same benefit restated.",
          ),
          s(" Cap sequence length — five emails often beats eight for same conversion."),
        ],
        [
          s("Vary subject framework across sequence steps. "),
          x(
            "Email 1 curiosity, email 2 direct value, email 3 proof story, email 4 offer — AI batch-generates subjects per step role.",
            "Identical subject patterns in sequence trigger fatigue and filter learning.",
          ),
          s(" Review full sequence in one sitting — tone progression must feel intentional."),
        ],
        [
          s("Build production workflow: outline → batch draft → edit pass → ESP build → test profiles. "),
          x(
            "Klaviyo AI can suggest flow improvements from drop-off — pair with copy revisions on weak steps.",
            "Version control sequence copy in shared doc — ESP edits without doc drift cause chaos.",
          ),
          s(" Measure drop-off per step; rewrite lowest converter before adding new flows."),
        ],
      ],
      examples: [
        {
          title: "Five-email nurture — HR software",
          body: "Arc: pain → compliance guide → customer story → ROI calculator → demo offer. AI drafted all five; editor unified voice and cut email 3 by 40%. HubSpot workflow built in 2 days. SQL conversion from nurture rose 16% — arc clarity beat prior random touch collection.",
        },
        {
          title: "Abandonment sequence restructure — fashion DTC",
          body: "Three-email cart flow AI-rebuilt: reminder → social proof + FAQ → incentive last. Delay 1hr, 24hr, 48hr. Recovery rate up 12% vs single reminder with three duplicate urgencies. Sequence architecture fixed message job per step.",
        },
        {
          title: "Breakup email — re-engagement",
          body: "Final sequence email plain-text 'Want fewer emails or different topics?' AI drafted three tone variants. Survey CTA recovered 8% into preference centre; unsubscribes on breakup lower than silent decay — respectful close performs.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Marketer Decision Lens: The Human Editing Layer",
      subtitle: "What always to review before sending — the quality check that catches tone errors, factual mistakes, and brand misalignment in AI-generated email copy",
      take: "Before every send, run five checks: (1) Facts and claims verified against approved sources. (2) Brand voice matches exemplars — not generic AI tone. (3) Personalisation and dynamic fields populate in test profiles. (4) Links, UTMs, and compliance footers correct. (5) Deliverability screen on subject and preview. AI scales drafts; humans own accountability. Regulated, YMYL, and executive-signed emails need expanded legal or leadership review.",
      why: "One AI hallucination or off-brand send erodes trust faster than fifty manual emails. The editing layer is insurance, not bottleneck — checklist keeps it to minutes.",
      paragraphs: [
        [
          s("Check one — facts, offers, and dates. "),
          x(
            "AI invents discounts, stats, and customer names. Cross-check offer codes, expiry, and pricing in commerce platform or CMS.",
            "Calendar errors on 'this Friday' when send is automated — use absolute dates in final copy.",
          ),
          s(" No send without second human eyes on numbers for high-stakes campaigns."),
        ],
        [
          s("Check two — voice and sensitivity. "),
          x(
            "Read aloud for robotic phrasing. Flag culturally insensitive or overly familiar tone for segment. AI defaults to American casual — adjust for market.",
            "Jasper brand voice and custom GPT with style guide reduce but do not eliminate edit need.",
          ),
          s(" Maintain 'banned phrases' list AI prompts must avoid."),
        ],
        [
          s("Checks three through five — technical and compliance. "),
          x(
            "Send test to Gmail, Outlook, Apple Mail. Verify merge tags, unsubscribe link, physical address, GDPR basis. Run subject through spam checker.",
            "Enterprise may require legal ticket per campaign — build lead time into AI-accelerated workflow.",
          ),
          s(" Document checklist sign-off in campaign brief — accountability traceable."),
        ],
      ],
      examples: [
        {
          title: "Pre-send gate — financial services",
          body: "Wealth manager requires compliance tick on every AI-drafted email. Checklist added 15 minutes per send but zero regulatory incidents in 12 months vs one pre-check violation year prior. AI speed retained; risk controlled.",
        },
        {
          title: "Merge tag disaster prevented — retail",
          body: "Test profile caught '{{custom.discount_code}}' rendering blank for loyalty tier. Fix before 200k send. Editing layer test send rule now mandatory — AI does not validate ESP logic.",
        },
        {
          title: "Tone edit — enterprise rebrand",
          body: "Post-rebrand, AI drafts still used old product names. Human edit gate caught 14 instances across weekly campaign. Updated custom GPT with new nomenclature — edit time fell 80% over six weeks.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "AI generated twelve subject lines for a campaign. Best testing approach?",
      options: [
        "Send all twelve in one blast.",
        "Select 2–4 distinct framework-based variants and A/B test on sufficient list split.",
        "Always pick the shortest subject.",
        "Skip testing — AI optimises automatically.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Framework diversity and statistical discipline beat variant volume. Re-read section 2.1.",
      wrongFeedback:
        "Too many variants dilute tests; AI needs human selection. Re-read section 2.1.",
    },
    {
      kind: "order",
      q: "Order the AI email copy production workflow from brief to send.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Complete brief with audience, goal, voice, and constraints",
        "Generate subject, preview, body, and CTA variants",
        "Human edit for facts, voice, and compliance",
        "Configure A/B tests and test profiles across clients",
        "Send with STO or scheduled window",
        "Document winners in copy playbook",
      ],
      correctFeedback:
        "Right. Brief → generate → edit → test → send → learn. Re-read sections 2.1 and 2.8.",
      wrongFeedback:
        "Never skip human edit or test profiles before send. Re-read sections 2.1 and 2.8.",
    },
    {
      kind: "categorize",
      q: "Sort each element into primary open driver vs click/conversion driver.",
      categories: ["Open driver", "Click driver"],
      items: [
        { text: "Subject line curiosity hook.", category: 0 },
        { text: "Primary CTA button copy.", category: 1 },
        { text: "Preview text extending the offer.", category: 0 },
        { text: "Body proof and single-minded CTA placement.", category: 1 },
        { text: "Personalised subject token.", category: 0 },
        { text: "Dynamic product module matching browse behaviour.", category: 1 },
      ],
      correctFeedback:
        "Right. Subject/preview earn attention; body and CTA convert it. Re-read sections 2.3 and 2.4.",
      wrongFeedback:
        "Opens and clicks optimise different elements. Re-read sections 2.3 and 2.4.",
    },
    {
      q: "B2B re-engagement email to dormant enterprise contacts. Format likely to perform best?",
      options: [
        "Image-heavy promotional HTML only.",
        "Plain or minimal HTML with conversational copy and clear preference CTA.",
        "No email — only paid ads.",
        "PDF attachment with brochure.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Plain text often wins high-touch B2B re-engagement. Re-read section 2.6.",
      wrongFeedback:
        "Relationship context favours personal format over brochure HTML. Re-read section 2.6.",
    },
    {
      q: "AI draft includes unverified ROI statistic in nurture email. Correct action?",
      options: [
        "Send immediately — stats sound credible.",
        "Remove or replace with approved proof from claim library before send.",
        "Add more statistics from AI to strengthen copy.",
        "Skip human review to meet deadline.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fact-check gate is mandatory for AI copy. Re-read section 2.8.",
      wrongFeedback:
        "AI hallucinates facts — verify against approved sources. Re-read section 2.8.",
    },
    {
      kind: "categorize",
      q: "Match each sequence email role to its typical position in the arc.",
      categories: ["Early sequence", "Late sequence"],
      items: [
        { text: "Establish problem and credibility.", category: 0 },
        { text: "Direct offer with clear deadline.", category: 1 },
        { text: "Deliver value asset or education.", category: 0 },
        { text: "Breakup or preference survey.", category: 1 },
        { text: "Introduce social proof case study.", category: 0 },
        { text: "Urgency CTA with objection handling.", category: 1 },
      ],
      correctFeedback:
        "Right. Early emails educate; late emails convert or close. Re-read section 2.7.",
      wrongFeedback:
        "Sequence arc progresses from value to offer — order matters. Re-read section 2.7.",
    },
  ],
});
