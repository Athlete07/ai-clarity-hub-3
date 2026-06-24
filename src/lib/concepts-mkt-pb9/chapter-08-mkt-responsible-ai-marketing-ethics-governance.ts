import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktResponsibleAiMarketingEthicsGovernance = buildChapter({
  slug: "mkt-responsible-ai-marketing-ethics-governance",
  number: 8,
  shortTitle: "Responsible AI Marketing — Ethics, Governance & Trust",
  title: "Responsible AI Marketing — Ethics, Governance & Trust — Transparency, Privacy, Bias Audits, and Culture",
  readingMinutes: 24,
  summary:
    "Responsible AI marketing is the trust infrastructure of the AI era: transparent disclosure when AI shapes customer experiences, rigorous claim verification before publish, ethical personalisation that respects privacy boundaries, bias auditing for inclusive output, and governance councils with audit trails. AI scales every ethical failure — a hallucinated claim, a creepy inference, a biased image reaches millions faster than human-only workflows. Marketers who treat ethics as legal checkbox invite regulatory, brand, and customer trust crises; marketers who embed responsibility in briefs, QA, and culture turn trust into competitive advantage.",
  keyTakeaway:
    "Trust is a marketing asset, not a compliance afterthought. The sequence that wins: establish ethical foundation and principles → operationalise transparency and disclosure → verify claims and block hallucination publish → design ethical personalisation → audit bias and inclusion → install governance and oversight → build culture of default responsibility → apply the decision lens before scaling customer-facing AI. AI amplifies reach; marketers own what reaches customers.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Ethical Foundation for AI Marketing",
      subtitle: "Principles, stakes, and why marketing owns customer-facing AI risk",
      take: "Ethical foundation starts with explicit principles: humans accountable for customer-facing output; transparency when AI materially shapes messaging or personalisation; privacy by design in data used for AI; inclusion and fairness in who marketing reaches and how; honesty in claims and substantiation. Marketing owns most customer-touching AI — ads, emails, chat, content, dynamic creative — making ethics a core marketing competency, not only legal's problem.",
      why: "Regulators, customers, and employees increasingly punish organisations that treat AI ethics as optional. Foundation principles guide fast decisions when playbooks do not exist yet.",
      paragraphs: [
        [
          s("Marketing is the customer-facing AI front line. "),
          x(
            "Touchpoints: generative copy, dynamic ads, chatbots, recommendation engines, social automation, influencer AI tools. Each carries claim, privacy, and representation risk. CIO governs infrastructure; marketing governs what customers see and feel.",
            "Delegating customer-facing AI ethics entirely to legal creates slow approvals and shadow marketing AI.",
          ),
          s(" Marketing ethics charter co-signed by CMO, General Counsel, and Chief Privacy Officer."),
        ],
        [
          s("Principles translate values into decision rules. "),
          x(
            "Example rules: no publish without human accountable editor; no sensitive inference in personalisation; disclose AI-generated imagery where regulation or policy requires; diverse representation review for campaign assets. AI cannot choose principles — leadership encodes them.",
            "Vague 'be ethical' guidance fails at 6pm Friday launch pressure.",
          ),
          s(" Principle cards in workflow tools — quick reference at brief and QA stages."),
        ],
        [
          s("Trust is cumulative and fragile. "),
          x(
            "Years of brand trust damaged by one AI error: false health claim, leaked inference, biased exclusion. AI accelerates reach of mistakes. Ethical foundation invests in prevention — cheaper than crisis comms and churn.",
            "Near-misses ignored become public incidents — track and fix near-misses religiously.",
          ),
          s(" Near-miss log reviewed monthly by marketing ethics council — trend analysis mandatory."),
        ],
      ],
      examples: [
        {
          title: "Ethics charter — co-sign",
          body: "CMO, GC, and CPO co-signed marketing AI ethics charter with 8 decision rules. Referenced in agency MSAs and employee onboarding. First year: 2 escalations resolved in 48h with clear rule citation — no press incidents. Charter became hiring differentiator.",
        },
        {
          title: "Principle card — launch save",
          body: "Junior marketer unsure about AI-generated stat in ad — principle card: 'substantiate or remove.' Escalated to editor; stat removed. Competitor same month published similar hallucination — regulatory inquiry. Principle at point of work beat policy PDF.",
        },
        {
          title: "Near-miss log — pattern fix",
          body: "Three near-misses on gendered personalisation assumptions logged in 60 days. Council triggered prompt library update and training. Escapes zero following quarter. Near-miss system prevented incident class.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch8-ethical-foundation",
      type: "flow",
      title: "Responsible AI Marketing Foundation",
      caption:
        "Transparency and disclosure → verify claims (no hallucination publish) → respect privacy in personalisation → audit bias for inclusive output → embed culture of default responsibility across workflows.",
    }),
    buildSection({
      number: "8.2",
      title: "Transparency & Disclosure Norms",
      subtitle: "When and how to tell customers AI shaped their experience",
      take: "Transparency norms define when marketing discloses AI use: synthetic imagery, AI-written copy in regulated contexts, chatbot non-human identity, personalised offers driven by automated scoring. Disclosure requirements vary by jurisdiction and platform policy — marketers maintain disclosure playbook aligned with legal, brand, and customer expectation research. Transparency builds trust when done clearly; performative or buried disclosure erodes it.",
      why: "Customer backlash often targets deception, not AI itself. Clear disclosure prevents 'they hid it' narratives.",
      paragraphs: [
        [
          s("Map disclosure triggers by touchpoint and region. "),
          x(
            "Triggers: AI-generated human likeness, automated social response presented as human, personalised pricing, synthetic voice, chatbot without bot label. EU AI Act, FTC guidance, platform ad policies — legal maintains matrix; marketing operationalises in templates.",
            "One global footnote fails when Germany requires explicit synthetic media label.",
          ),
          s(" Disclosure matrix in DAM and MAP — auto-insert where trigger tags present."),
        ],
        [
          s("Disclosure language is brand opportunity, not apology. "),
          x(
            "Framing: 'Created with AI tools, reviewed by our team' vs hidden metadata only. Test customer comprehension — jargon disclosures confuse. AI drafts variants; brand and legal approve tone.",
            "Buried 6pt grey text satisfies lawyer, fails customer trust test.",
          ),
          s(" A/B test disclosure copy where volume allows — comprehension and trust metrics."),
        ],
        [
          s("Internal transparency precedes external. "),
          x(
            "Employees know when AI shapes customer comms — reduces whistleblower surprises. Internal docs label AI assist level per campaign. Sales and support briefed on what to say if customers ask.",
            "Sales learns from Twitter that marketing uses undisclosed AI — trust breaks internally and externally.",
          ),
          s(" Internal campaign registry: AI assist level, disclosure status, approver."),
        ],
      ],
      examples: [
        {
          title: "Synthetic imagery disclosure",
          body: "Campaign used AI-generated models. Added clear visual disclosure per EU market rules; US used platform-required labels. Customer survey: comprehension 78%, trust neutral-to-positive vs fear of hidden AI. Competitor undisclosed synthetic faced backlash hashtag.",
        },
        {
          title: "Chatbot identity",
          body: "Support-marketing chatbot initially posed as 'team member.' Complaints rose. Renamed with bot identity and capability limits in first message. CSAT recovered; regulatory risk avoided. Transparency fix cost one afternoon.",
        },
        {
          title: "Sales briefing",
          body: "Lifecycle AI personalisation launched without sales briefing. Rep promised manual curation — customer caught mismatch. Post-fix: sales enablement one-pager on what AI personalises and disclosure script. Internal alignment prevented repeat.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Claim Verification & Anti-Hallucination Publishing",
      subtitle: "Substantiation, source discipline, and QA gates — never publish confident fiction",
      take: "AI hallucinates plausible statistics, fake testimonials, nonexistent certifications, and fabricated case outcomes. Anti-hallucination publishing requires substantiation links for quantitative claims, verified quotes and permissions, banned-term lists, human editor accountability, and automated checks flagging unsourced numerals. Marketing ops embeds verification in workflow — not ad hoc legal panic pre-launch.",
      why: "Regulatory action and class actions increasingly target false advertising enabled by generative AI speed. Verification is liability control and brand protection.",
      paragraphs: [
        [
          s("Every quantitative claim requires a source token. "),
          x(
            "Workflow blocks publish if stat lacks citation ID linking to approved source doc. AI drafts stats — humans attach source or remove. Footnotes in external copy map to substantiation repository.",
            "'AI said 47% improvement' without study is false advertising regardless of intent.",
          ),
          s(" Substantiation repository searchable by claim text — legal and product marketing maintain."),
        ],
        [
          s("Testimonials and case studies need permission trail. "),
          x(
            "AI fabricates plausible quotes and logos. Rule: no customer name, logo, or quote without CRM permission flag and signed release on file. Automated logo detection in creative QA.",
            "Hallucinated testimonial is fraud — criminal exposure beyond marketing discipline.",
          ),
          s(" Case study template requires permission ID field — blocked without valid ID."),
        ],
        [
          s("Editor accountability is named, not 'the team.' "),
          x(
            "RACI: accountable editor signs external copy — not tool vendor. AI assist noted in internal log; liability stays with brand. Escalation path for uncertain claims before deadline pressure wins.",
            "Anonymous approval chains fail regulatory inquiry 'who knew?'",
          ),
          s(" Sign-off log retained 7 years per records policy — editor name, timestamp, version."),
        ],
      ],
      examples: [
        {
          title: "Source token — ad save",
          body: "Automated check flagged '3x faster' claim without source in AI draft ad. Blocked upload. PM attached benchmark study ID; approved. Competitor ad with similar unsourced claim subject to NAD challenge — avoided class.",
        },
        {
          title: "Hallucinated logo caught",
          body: "AI creative included fictitious customer logo collage. Logo detection QA flagged unapproved marks. Removed before launch. Legal estimated six-figure misappropriation exposure avoided.",
        },
        {
          title: "Editor sign-off — inquiry ready",
          body: "Regulator questioned health-adjacent claim. Sign-off log showed named editor, substantiation link, legal Tier 3 review. Inquiry closed quickly. Accountability trail proved diligence.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Privacy & Ethical Personalisation",
      subtitle: "Consent, minimisation, and boundaries — personalisation without surveillance creep",
      take: "Ethical personalisation uses data customers reasonably expect, respects opt-out and sensitivity categories, avoids creepy inference (health, financial distress, pregnancy, sexuality from proxies), and minimises data sent to third-party AI tools. Marketers map data flows: what enters prompts, what logs persist, what trains vendor models. Privacy-by-design in lifecycle and ad personalisation is competitive trust differentiator.",
      why: "Personalisation backlash destroys NPS faster than generic messaging. Ethical boundaries prevent 'how did they know that?' moments.",
      paragraphs: [
        [
          s("Data minimisation for AI prompts and tools. "),
          x(
            "Strip PII and sensitive attributes before external AI unless enterprise contract prohibits training and permits use case. Use internal models or redacted summaries where possible. Document what leaves your boundary per tool.",
            "Pasting customer lists into consumer ChatGPT is data breach pattern — not innovation.",
          ),
          s(" Approved tool list with data classification per tool — blocked paste of restricted fields."),
        ],
        [
          s("Sensitive inference firewall. "),
          x(
            "Prohibited: inferring health condition, financial hardship, protected class proxy for targeting or copy tone. Allowed: declared preferences, purchase behaviour, explicit segment membership. Council reviews edge cases.",
            "Proxy targeting for protected classes invites discrimination claims and press scandal.",
          ),
          s(" Segment definition review quarterly — legal and privacy sign-off on lifecycle audiences."),
        ],
        [
          s("Consent and preference centres must match practice. "),
          x(
            "If preference centre says no profiling, AI personalisation must respect. Sync MAP, CDP, and ad platforms — consent flags propagate. AI accelerates personalisation — consent drift accelerates liability.",
            "Marketing personalises while legal preference centre says otherwise — FTC and GDPR exposure.",
          ),
          s(" Consent audit semi-annual — sample journeys vs preference state."),
        ],
      ],
      examples: [
        {
          title: "Prompt redaction — tool policy",
          body: "Blocked lifecycle team from using non-enterprise AI on full customer records. Deployed redaction layer — summaries only. Privacy audit clean; personalisation performance within 3% of prior — acceptable trade for risk reduction.",
        },
        {
          title: "Inference firewall — segment ban",
          body: "Proposed 'financial stress' segment from payment behaviour. Council rejected — used declared plan downgrade intent only. Avoided press comparison to predatory targeting case study in industry.",
        },
        {
          title: "Consent drift fix",
          body: "Audit found 12% of AI-personalised emails sent to opted-out profiling cohort. Emergency sync fix; apology and process patch. Near-miss escalated to council — now weekly consent reconciliation job.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Bias Auditing & Inclusive Output",
      subtitle: "Representation, language, and audience exclusion — testing who AI leaves out",
      take: "Bias auditing examines AI marketing output for stereotypical representation, exclusion of audience segments, offensive language, accessibility failures, and unequal offer distribution. Tests include diverse review panels, checklist scans, synthetic persona review, and statistical parity checks on who receives campaigns. Inclusion is not political optional — it affects market reach, brand perception, and legal risk.",
      why: "AI trained on historical marketing data reproduces historical biases — excluding segments and reinforcing stereotypes at scale.",
      paragraphs: [
        [
          s("Representation review for generative creative. "),
          x(
            "Check: diverse ages, bodies, abilities, ethnicities in imagery; stereotype tropes; cultural symbols used appropriately. AI image tools default to narrow aesthetics — intentional direction and review required.",
            "All AI-generated campaign families looking identical excludes vast addressable market.",
          ),
          s(" Representation checklist signed by brand and DEI partner for Tier 3 campaigns."),
        ],
        [
          s("Language inclusivity and harm scanning. "),
          x(
            "Scan for gendered assumptions, ableist phrases, cultural insensitivity, outdated terminology. AI assists scan — human judgment on context. Localisation review for idioms that do not travel.",
            "English AI defaults embed US-centric idioms — global campaigns need local review.",
          ),
          s(" Inclusive language guide linked in prompt library — deprecated terms auto-flagged."),
        ],
        [
          s("Distribution parity — who gets excluded from offers. "),
          x(
            "Audit lifecycle and ad audience: are protected or rural or low-bandwidth segments systematically excluded by model optimise for short-term conversion? Ethical marketing monitors exclusion, not only top-line ROI.",
            "Model optimises away 'hard' segments — silent discrimination in who sees opportunity.",
          ),
          s(" Quarterly parity report: reach and offer rates by key segments — council reviews outliers."),
        ],
      ],
      examples: [
        {
          title: "Image diversity audit",
          body: "AI ad set generated 24 variants — audit found 22 similar demographics. Creative direction added diversity prompts and human art direction. Engagement in under-indexed segments rose 34%; brand sentiment up in targeted communities.",
        },
        {
          title: "Language scan — product launch",
          body: "Inclusive language scan caught ableist phrase in AI release notes marketing repurposed. Fixed pre-launch. Disability community advocate praised proactive fix — small audit, large trust dividend.",
        },
        {
          title: "Parity report — rural exclusion",
          body: "Parity audit showed email personalisation model suppressed rural zip codes due to lower historical click rate. Adjusted with minimum reach floor and separate creative test. Market share in region recovered 2 points year-over-year.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Governance Frameworks & Oversight",
      subtitle: "Council, policies, audits, and vendor diligence — structure that survives turnover",
      take: "Governance operationalises ethics: marketing AI council charter, tiered risk classification for use cases, vendor security and data processing review, incident response playbook, annual audit sampling customer journeys, and integration with enterprise AI governance. Frameworks survive employee turnover when embedded in tools and rituals — not only slide decks.",
      why: "Ad hoc ethics fails when teams scale or regulators knock. Governance makes responsibility durable and auditable.",
      paragraphs: [
        [
          s("Tiered risk classification for AI use cases. "),
          x(
            "Tier 1 internal draft low risk. Tier 2 external standard marketing. Tier 3 regulated, personalisation, synthetic media, major brand — enhanced review. New use cases submit intake form — council assigns tier before build.",
            "Treating all AI as low risk or all as max review paralyses or endangers — tiering calibrates.",
          ),
          s(" Risk tier in project tool mandatory — workflow routes approvals automatically."),
        ],
        [
          s("Vendor diligence beyond feature demos. "),
          x(
            "Review: data retention, model training on your data, subprocessors, SOC2, breach notification, output indemnity limits. Marketing procures many AI tools — shadow vendors bypass diligence.",
            "Vendor trains on your customer copy — competitive and privacy nightmare.",
          ),
          s(" Approved vendor list — procurement blocks non-listed for customer-data use cases."),
        ],
        [
          s("Incident response with clock speeds. "),
          x(
            "Playbook: contain (pause campaign), assess (scope, regulatory), communicate (customer, regulator if required), remediate (root cause, process fix), report (council, board if material). 24h internal containment SLA for Tier 3.",
            "Slow incident response turns bug into scandal — clock defined in advance.",
          ),
          s(" Annual tabletop exercise — marketing, legal, comms, IT — simulated AI incident."),
        ],
      ],
      examples: [
        {
          title: "Tier intake — blocked shadow tool",
          body: "Team built Tier 3 personalisation in unapproved vendor. Intake review caught; paused until diligence complete. Vendor failed data retention test — project moved to approved stack. Shadow build prevented production liability.",
        },
        {
          title: "Vendor diligence — training clause",
          body: "Negotiated no-training clause and EU data residency in gen-AI contract. Legal cited in enterprise RFP win — governance as commercial asset. Marketing-led diligence saved company from standard vendor terms.",
        },
        {
          title: "Tabletop exercise",
          body: "Simulated hallucinated health claim in email to 2M list. Team contained in exercise 4 hours; real incident months later contained in 6 hours — playbook muscle memory. CEO noted governance ROI.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Building a Culture of Default Responsibility",
      subtitle: "Rituals, incentives, and leadership modeling — ethics as how we work daily",
      take: "Culture makes ethics stick: leaders model escalation without penalty; incentives reward catches and quality not only speed; onboarding teaches responsibility before tool access; retros include ethical near-misses; agency partners bound by same standards. Default responsibility means the easy path is also the compliant path — workflows make right action frictionless.",
      why: "Policy without culture produces checkbox compliance and hidden violations under deadline pressure.",
      paragraphs: [
        [
          s("Incentives align with responsible outcomes. "),
          x(
            "Performance reviews include quality, escape rate, ethics escalation — not only volume and ROAS. Team celebrations for 'good catch' on hallucination. Speed KPIs balanced with zero-defect tiers on regulated content.",
            "Pure output KPIs silently instruct team to skip verification.",
          ),
          s(" Revise marketing OKRs to include governance metrics — leadership visible commitment."),
        ],
        [
          s("Agency and freelancer governance parity. "),
          x(
            "MSA clauses: approved AI tools only, substantiation rules, disclosure compliance, audit rights. Freelancers get same brief and QA as FTE. Weak agency chain broke many public AI incidents.",
            "Internal ethics with unethical agency partner exports risk — parity required.",
          ),
          s(" Agency onboarding kit — ethics charter, tool list, QA tiers — annual re-cert."),
        ],
        [
          s("Leader modeling on escalation. "),
          x(
            "CMO escalates uncertain claim publicly in staff meeting; shares own correction stories. Punitive response to escalation drives shadows; curiosity response builds culture.",
            "Leader skips QA 'just this once' — organisation learns ethics is optional.",
          ),
          s(" Ethics moment in monthly all-hands — one near-miss, one good catch, one process fix."),
        ],
      ],
      examples: [
        {
          title: "OKR — governance metric",
          body: "Added 'external content escape rate' and 'ethics training completion' to marketing OKRs at 15% weight. Escapes down 40% year one; training 100%. Culture signal from leadership weights.",
        },
        {
          title: "Agency MSA — tool breach",
          body: "Agency used non-approved AI for copy; audit found in QA sample. MSA penalty and mandatory re-training. Second agency incident zero in 18 months — parity enforced.",
        },
        {
          title: "CMO modeling",
          body: "CMO pulled own keynote slide day-before event — unsourced stat found. Told story at all-hands. Escalations rose next month 2x — permission granted. Escapes fell — modeling beat policy memo.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — Ethics Investment",
      subtitle: "When to scale AI touchpoints, add tools, or launch personalisation — responsibility gates",
      take: "Before scaling customer-facing AI, run four checks: (1) are transparency and disclosure matrix current for target markets — clarity before reach? (2) is anti-hallucination workflow enforced with named editors — verification before volume? (3) is personalisation within consent and inference firewall — privacy before creep? (4) is council active with tiered risk and incident playbook — governance before novelty? Scale when audit and escape metrics stable. Pause when near-miss trend rises.",
      why: "AI makes unethical reach cheap. This lens gates scale on trust infrastructure that protects customers and careers.",
      paragraphs: [
        [
          s("Check one: transparency readiness. "),
          x(
            "New market or format without disclosure matrix update → legal-marketing sync before launch. Synthetic media without label plan → pause until playbook ready.",
            "Launch first, disclose later is press headline pattern.",
          ),
          s(" Disclosure checklist gate on Tier 3 creative upload."),
        ],
        [
          s("Check two: verification discipline. "),
          x(
            "Rising unsubstantiated claim near-misses → QA fix before spend scale. Named editor sign-off skipped on rush jobs → culture fix before new AI copy tool.",
            "Scaling unverified AI copy multiplies regulatory surface area.",
          ),
          s(" Zero launches without source token on quantitative claims — non-negotiable gate."),
        ],
        [
          s("Checks three and four: privacy and governance. "),
          x(
            "Personalisation model uses new data source → council tier review before send. Vendor contract lacks no-training clause → diligence before customer data ingest.",
            "Governance gaps become crises at million-send scale — gate at thousand-send pilot.",
          ),
          s(" Run lens in council agenda for every Tier 3 scale decision."),
        ],
      ],
      examples: [
        {
          title: "Scale deferred — verification",
          body: "Proposed 10x AI email volume. Lens: escape rate ticked up, source token compliance 84%. Deferred scale; 60-day QA sprint to 98%. Scaled without incident — deferred growth beat public mistake.",
        },
        {
          title: "Personalisation paused",
          body: "New behavioural signal proposed for copy personalisation. Lens: inference firewall unclear; council Tier 3 review. Paused 30 days; defined allowed signals. Launched with opt-out and disclosure — no backlash.",
        },
        {
          title: "Vendor blocked",
          body: "Creative team wanted viral AI video tool. Lens: no enterprise DPA, training opt-out unknown. Blocked for customer assets; approved for internal brainstorm only. Vendor later breached peer — diligence vindicated.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "AI draft ad includes impressive statistics with no source. What must happen before publish?",
      options: [
        "Publish quickly — speed matters most.",
        "Attach substantiation or remove claims; named editor signs off with verification workflow.",
        "Assume AI trained on truth.",
        "Let legal discover issues after launch.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Anti-hallucination publishing requires sources and accountable editors. Re-read sections 8.1 and 8.3.",
      wrongFeedback:
        "Verify every claim before publish — AI hallucinates plausible stats. Re-read sections 8.1 and 8.3.",
    },
    {
      q: "Lifecycle team wants to use payment behaviour to infer financial stress for copy tone. What does ethical personalisation require?",
      options: [
        "Proceed if ROI is high.",
        "Reject sensitive inference; use declared preferences and council-approved segments within consent.",
        "Hide the practice from customers.",
        "Outsource to avoid internal liability.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Inference firewalls and consent boundaries protect privacy and trust. Re-read section 8.4.",
      wrongFeedback:
        "Sensitive inference crosses ethical and legal lines — use allowed data only. Re-read section 8.4.",
    },
    {
      kind: "order",
      q: "Order the responsible AI marketing foundation from first principle to embedded culture.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Establish ethical principles and marketing ownership",
        "Operationalise transparency, verification, and privacy",
        "Install governance council and tiered risk",
        "Build culture of default responsibility at scale",
      ],
      correctFeedback:
        "Right. Principles → operational norms → governance → culture. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Start with principles and operational gates before scaling culture and touchpoints. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct responsible AI layer.",
      categories: ["Transparency", "Verification", "Privacy & inclusion", "Governance & culture"],
      items: [
        { text: "Disclosure matrix by region and touchpoint.", category: 0 },
        { text: "Source token required for statistics.", category: 1 },
        { text: "Representation checklist for AI imagery.", category: 2 },
        { text: "Marketing AI council with tiered risk.", category: 3 },
        { text: "Consent audit vs personalisation practice.", category: 2 },
        { text: "Good-catch celebration for flagged hallucination.", category: 3 },
      ],
      correctFeedback:
        "Right. Transparency = disclosure. Verification = claims. Privacy/inclusion = consent and representation. Governance/culture = council and rituals. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Match each practice to transparency, verification, privacy/inclusion, or governance/culture. Re-read sections 8.1–8.8.",
    },
    {
      q: "AI-generated campaign imagery lacks diversity versus target audience. What investment comes first?",
      options: [
        "Ignore — AI default is fine.",
        "Bias auditing with representation review and creative direction in prompts.",
        "Reduce audience diversity goals.",
        "Remove all AI imagery without review process.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Bias auditing and inclusive creative direction prevent exclusion and brand harm. Re-read section 8.5.",
      wrongFeedback:
        "Audit representation and direct AI output toward inclusion. Re-read section 8.5.",
    },
    {
      q: "Team proposes 10x AI email volume while escape rate is rising. What does the lens recommend?",
      options: [
        "Scale immediately to capture AI productivity.",
        "Defer scale; fix verification and QA until escape and near-miss metrics stabilise.",
        "Remove human editors to match volume.",
        "Switch vendors only without process change.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Responsibility gates scale when verification discipline holds. Re-read sections 8.3 and 8.8.",
      wrongFeedback:
        "Fix verification and escape trends before scaling customer-facing AI. Re-read sections 8.3 and 8.8.",
    },
  ],
});
