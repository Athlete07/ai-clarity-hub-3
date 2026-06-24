import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktEmailDeliverabilityTechnicalExcellence = buildChapter({
  slug: "mkt-email-deliverability-technical-excellence",
  number: 7,
  shortTitle: "Email Deliverability & Technical Excellence",
  title: "Email Deliverability & Technical Excellence — Protecting Inbox Placement Through Authentication, Reputation, and Engagement-Led Sending Discipline",
  readingMinutes: 24,
  summary:
    "The best email copy fails if it never reaches the inbox. Deliverability is a technical and behavioural discipline: SPF, DKIM, and DMARC authentication, sender reputation management, list hygiene, engagement-based segmentation, inbox placement testing, and warm-up protocols for new domains and IPs. AI assists with anomaly detection, subject line spam scoring, and send-time optimisation — but marketers own authentication setup, complaint rate governance, and the strategic choice to suppress unengaged contacts rather than chase list size.",
  keyTakeaway:
    "Deliverability is infrastructure plus behaviour. The stack that protects inbox placement: authenticate sending domains → monitor reputation and complaint rates → hygiene and sunset unengaged contacts → send to engaged segments with tested content → warm new infrastructure gradually → measure placement before scaling volume. AI flags risk patterns; marketers own suppression discipline and authentication governance.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "SPF, DKIM & DMARC Authentication",
      subtitle: "DNS records, alignment, and policy — the non-negotiable foundation for inbox placement",
      take: "SPF authorises which servers can send mail for your domain. DKIM cryptographically signs messages to verify they were not altered in transit. DMARC tells receiving servers what to do when SPF or DKIM fail and provides aggregate reporting on authentication results. All three must align with the From domain — misalignment is a primary spam filter trigger. AI cannot fix authentication; marketers coordinate with IT and ESP to publish correct DNS records.",
      why: "Unauthenticated or misaligned email lands in spam regardless of content quality. Gmail and Yahoo's 2024 bulk sender requirements made SPF, DKIM, and DMARC mandatory for senders above volume thresholds — authentication is table stakes, not advanced optimisation.",
      paragraphs: [
        [
          s("Publish SPF, DKIM, and DMARC in strict alignment with From domain. "),
          x(
            "SPF: include ESP sending IPs in TXT record — avoid >10 DNS lookups. DKIM: ESP provides CNAME or TXT selector records. DMARC: start p=none for monitoring, progress to p=quarantine then p=reject after 30 days clean reports. From domain must match DKIM d= domain and SPF Return-Path domain.",
            "Misalignment — marketing From @company.com but DKIM signs @esp-mail.com without alignment — fails DMARC even when records exist.",
          ),
          s(" Annual authentication audit when changing ESP, adding subdomains, or launching new sending domains."),
        ],
        [
          s("Use dedicated subdomains for marketing versus transactional mail. "),
          x(
            "marketing.company.com for campaigns; notifications.company.com for receipts and password resets. Reputation isolation prevents promotional complaint spikes from affecting transactional delivery. Each subdomain needs full SPF/DKIM/DMARC stack.",
            "Single domain for all mail types means one bad campaign can suppress password reset delivery.",
          ),
          s(" Document subdomain strategy in deliverability playbook — new send types get dedicated subdomain by default."),
        ],
        [
          s("Monitor DMARC aggregate reports weekly. "),
          x(
            "RUA reports show authentication pass/fail by source IP — detects unauthorised senders, forwarding breakage, and ESP configuration drift. AI parses DMARC XML reports and flags new failing sources. Marketer escalates IT tickets on unexplained fail volume.",
            "DMARC p=reject without monitoring blocks legitimate mail from forgotten internal systems.",
          ),
          s(" DMARC report dashboard reviewed before policy escalation to quarantine or reject."),
        ],
      ],
      examples: [
        {
          title: "DMARC alignment fix — B2B SaaS",
          body: "A SaaS company's marketing emails landed 40% spam at Gmail. Audit: SPF pass, DKIM pass, but From domain marketing.company.com misaligned with DKIM signing domain esp.company.com. ESP configured custom DKIM on marketing subdomain; alignment achieved. Gmail inbox placement rose to 94% within 10 days — no content changes required.",
        },
        {
          title: "Subdomain isolation — e-commerce",
          body: "An online retailer separated mail.company.com (promotional) from orders.company.com (transactional). Black Friday campaign spike raised complaint rate on promotional subdomain; transactional delivery unaffected at 99.2% inbox. Without isolation, prior year transactional mail suffered during same campaign.",
        },
        {
          title: "DMARC reject without monitoring",
          body: "IT deployed DMARC p=reject without marketing awareness. Internal newsletter tool sending from @company.com without DKIM was blocked entirely. DMARC reports revealed 12% fail rate from legitimate internal tool. Fix: authenticated internal sender or subdomain exclusion; rolled back to p=quarantine during remediation.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch7-deliverability",
      type: "flow",
      title: "Deliverability Excellence Stack",
      caption:
        "SPF/DKIM/DMARC authentication → reputation monitoring → list hygiene and engagement segmentation → inbox placement testing → warm-up discipline → ongoing governance and suppression.",
    }),
    buildSection({
      number: "7.2",
      title: "Sender Reputation Management",
      subtitle: "Domain and IP reputation, complaint rates, bounce rates, and spam trap hits",
      take: "Sender reputation is the trust score mailbox providers assign to your domain and sending IP based on complaint rate, bounce rate, spam trap hits, engagement rates, and sending volume patterns. AI monitoring tools — Google Postmaster Tools, Microsoft SNDS, Validity — surface reputation trends; marketers respond with volume throttling, list suppression, and content review when metrics degrade.",
      why: "Reputation damage compounds — one aggressive re-engagement blast to cold contacts can suppress inbox placement for weeks. Proactive reputation management is cheaper than recovery.",
      paragraphs: [
        [
          s("Monitor core reputation metrics on weekly cadence. "),
          x(
            "Complaint rate: target <0.1%, hard ceiling 0.3%. Bounce rate: <2% hard, <0.5% ideal. Spam trap hits: zero tolerance — indicates list hygiene failure. Engagement: Gmail spam rate below 0.3% per Google bulk sender guidelines. AI alerts on metric regression beyond 2 standard deviations from 30-day baseline.",
            "Monthly reporting misses reputation cliffs that happen in 48 hours after bad send.",
          ),
          s(" Reputation dashboard shared with marketing leadership — not buried in deliverability ticket queue."),
        ],
        [
          s("Volume consistency matters as much as volume level. "),
          x(
            "Sudden 5x volume spike from new list purchase or re-engagement blast triggers filtering. Ramp volume 15–20% weekly on established infrastructure. AI models safe ramp curves from historical sending patterns. Holiday campaigns planned with gradual volume increase, not single-day explosion.",
            "Reputation algorithms penalise erratic sending as much as absolute complaint rate.",
          ),
          s(" Volume ramp plan required for any send exceeding 150% of 30-day daily average."),
        ],
        [
          s("Separate reputation recovery from business-as-usual sends. "),
          x(
            "Reputation damage: pause bulk sends to affected segment, diagnose root cause, send only to highly engaged subset at reduced volume, monitor recovery over 2–4 weeks. AI identifies highest-engagement recovery cohort. Do not resume full list until complaint rate normalises.",
            "Continuing full-volume sends during reputation crisis deepens filtering.",
          ),
          s(" Reputation incident playbook documented — roles, escalation, and recovery sequence."),
        ],
      ],
      examples: [
        {
          title: "Complaint spike recovery",
          body: "Re-engagement campaign to 18-month inactive contacts generated 0.42% complaint rate — 4x threshold. Gmail spam rate hit 0.8%. Programme paused 14 days; sent only to 30-day engaged at 40% prior volume. Complaint rate normalised in 3 weeks; full volume restored gradually. Root cause: frequency and irrelevant content to cold segment.",
        },
        {
          title: "Google Postmaster domain reputation drop",
          body: "Postmaster Tools showed domain reputation decline from High to Low over 5 days. Correlated with list import of purchased contacts — 12% hard bounce, 3 spam trap hits. List source removed; traps and bounces suppressed. Reputation recovered to High in 21 days with engagement-only sending.",
        },
        {
          title: "Volume spike without ramp",
          body: "Product launch email sent to full 800K list after months of 50K weekly sends. Yahoo deferred 60% of messages. Fix: should have ramped over 3 weeks. Launch re-sent in 4 tranches to engaged segments. Lesson: volume ramp plan now mandatory for all major sends.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "List Hygiene & Suppression",
      subtitle: "Hard bounces, soft bounces, unengaged sunset, and global suppression governance",
      take: "List hygiene removes invalid, unengaged, and risky addresses before they damage reputation: hard bounce immediate suppression, soft bounce retry then suppress, complaint instant global suppress, unengaged sunset after defined inactivity period. AI identifies hygiene risk patterns — role addresses, disposable domains, typo domains — but marketers set sunset policy and enforce global suppression across all send types.",
      why: "List size vanity metrics kill deliverability. A smaller engaged list outperforms a large toxic list on every revenue and placement metric.",
      paragraphs: [
        [
          s("Automate hard bounce and complaint suppression immediately. "),
          x(
            "Hard bounce: permanent suppress on first occurrence. Complaint: suppress globally within minutes — FBL (feedback loop) processing. Soft bounce: suppress after 3 consecutive failures over 30 days. No manual override without deliverability lead approval.",
            "Re-mailing hard bounces is the fastest path to blocklisting.",
          ),
          s(" Suppression list synced across ESP, CRM, and all sending tools — single source of truth."),
        ],
        [
          s("Sunset unengaged contacts on defined inactivity window. "),
          x(
            "Standard: no open or click in 90–180 days → sunset sequence (2–3 re-permission emails) → suppress if no engagement. Gmail and Yahoo reward senders who stop mailing unengaged users. AI recommends sunset window from engagement distribution — aggressive sunset for promotional, lenient for transactional-adjacent.",
            "Sunset is not list shrinkage failure — it is reputation insurance.",
          ),
          s(" Sunset policy published internally — stakeholders understand active vs mailable list distinction."),
        ],
        [
          s("Pre-send hygiene checks on imports and integrations. "),
          x(
            "New list imports: validate format, dedupe against suppression, flag role accounts and disposable domains, reCAPTCHA on signup forms. Integration syncs from CRM: exclude bounced and unsubscribed before ESP upload. AI validation services score list risk pre-import.",
            "One bad import poisons domain reputation for all future sends.",
          ),
          s(" Import approval workflow — deliverability review on any list >5,000 new addresses."),
        ],
      ],
      examples: [
        {
          title: "180-day sunset programme",
          body: "A media company implemented 180-day inactivity sunset with 3-email re-permission series. Mailable list reduced 28% over 6 months. Inbox placement improved from 82% to 96% at Gmail; revenue per email up 34% on smaller engaged base. CFO accepted list size reduction after revenue-per-send dashboard.",
        },
        {
          title: "Spam trap from list purchase",
          body: "Purchased 'opt-in' list of 50,000 contacts contained 8 spam trap addresses. Domain blocklisted at one major ISP within 48 hours. List source permanently banned; traps added to global suppression. Recovery took 6 weeks and $40K in deliverability consulting. Import approval workflow implemented.",
        },
        {
          title: "Suppression sync failure",
          body: "Unsubscribes in ESP did not sync to CRM; CRM-triggered transactional tool continued mailing unsubscribed contacts. Complaint rate spiked 0.35%. Fix: bidirectional suppression sync every 15 minutes; single global suppression table. Complaint rate returned to 0.06% within 2 weeks.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Engagement-Based Sending Strategy",
      subtitle: "Segment by engagement tier, frequency caps, and send-time optimisation",
      take: "Mailbox providers use recipient engagement as a primary filtering signal — if your engaged users open and click, your mail gets inbox priority. Engagement-based sending mails highly engaged contacts more frequently, reduces or stops mail to low-engaged, and uses AI send-time optimisation for individual delivery windows. Marketers define engagement tiers, frequency rules, and re-activation paths before scaling volume.",
      why: "Mailing the full list equally trains providers that most recipients ignore you — bulk folder follows. Engagement segmentation aligns sending behaviour with provider algorithms.",
      paragraphs: [
        [
          s("Define engagement tiers with clear criteria and treatment. "),
          x(
            "Tier 1 (30-day open/click): full campaign frequency. Tier 2 (31–90 day): reduced frequency, re-engagement content. Tier 3 (91–180 day): monthly only or sunset path. Tier 4 (180+ day): sunset sequence then suppress. AI recalculates tier nightly from ESP engagement data.",
            "Binary engaged/unengaged split is too coarse — graduated tiers preserve marginal contacts longer.",
          ),
          s(" Tier definitions in ESP segmentation — campaign defaults exclude Tier 3–4 unless re-engagement."),
        ],
        [
          s("Frequency caps protect engaged subscribers from fatigue. "),
          x(
            "Global cap: max 3 promotional emails per week per contact across all campaigns. Operational emails exempt but counted in user perception. AI monitors frequency versus unsubscribe correlation — optimal frequency varies by vertical. Over-mailing engaged users generates complaints that damage reputation.",
            "Engaged users who complain hurt reputation more than silent unengaged users.",
          ),
          s(" Frequency cap enforced in ESP — campaign manager cannot override without approval."),
        ],
        [
          s("Send-time optimisation within engagement tiers. "),
          x(
            "AI send-time personalisation delivers within individual 2-hour windows based on historical open patterns. Lift typically 8–15% opens — secondary to tier segmentation impact. Disable STO for time-sensitive launches requiring simultaneous delivery.",
            "STO is optimisation, not deliverability fix — unengaged contacts at optimal time still do not help reputation.",
          ),
          s(" A/B test STO on Tier 1 only — measure incrementality, not just open rate."),
        ],
      ],
      examples: [
        {
          title: "Engagement tier rollout",
          body: "A retailer segmented 2.1M list into 4 engagement tiers. Campaigns default to Tier 1–2 only (1.4M contacts). Tier 3 received monthly digest; Tier 4 sunset. Gmail inbox placement rose 11 points. Revenue flat on 33% fewer sends — revenue per email up 41%.",
        },
        {
          title: "Frequency cap complaint reduction",
          body: "SaaS company ran parallel product, marketing, and CS email without global cap. Power users received 12 emails weekly; complaint rate 0.28%. Global 4-per-week cap across promotional categories reduced complaints to 0.07% with no revenue decline on engaged cohort.",
        },
        {
          title: "STO on cold segment waste",
          body: "Team applied send-time optimisation to full list including 180-day inactive. Open lift 3% on inactive segment — no reputation benefit. Reallocated STO budget to Tier 1 only; combined with sunset on Tier 4. Deliverability metrics improved; STO lift on engaged segment 12%.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Inbox Placement Testing",
      subtitle: "Seed testing, spam filter analysis, and pre-send rendering across clients",
      take: "Inbox placement testing sends campaign copies to seed addresses across Gmail, Outlook, Yahoo, Apple Mail, and corporate filters — measuring inbox versus spam folder placement before full deployment. AI tools — Litmus, Email on Acid, GlockApps — automate seed testing and spam score analysis. Marketers run placement tests on new templates, new domains, and high-risk campaigns before scale send.",
      why: "ESP delivery rate is not inbox rate — 99% delivered can mean 70% inbox and 29% spam folder. Placement testing catches authentication, content, and reputation issues before they hit the full list.",
      paragraphs: [
        [
          s("Test placement before every new domain, template, or major campaign. "),
          x(
            "Seed test to 50+ mailbox providers and spam filters. Target: 90%+ inbox placement across major providers before full send. Fail threshold on any primary provider (Gmail, Outlook) → hold and diagnose. AI compares spam score against historical winning campaigns.",
            "Skipping seed test on 'small' campaign still risks reputation if complaints spike.",
          ),
          s(" Placement test checklist in campaign launch process — no bypass without deliverability sign-off."),
        ],
        [
          s("Diagnose spam folder placement by failure category. "),
          x(
            "Authentication failure: fix DNS. Content trigger: spam words, image-heavy, bad link domains. Reputation: reduce volume and audience. Filter-specific: corporate Barracuda versus consumer Gmail need different fixes. AI spam checkers flag content triggers; marketer validates false positives.",
            "Blanket 'rewrite subject line' advice misses authentication and reputation root causes.",
          ),
          s(" Diagnosis log maintained — pattern library of fixes by failure type."),
        ],
        [
          s("Rendering tests complement placement tests. "),
          x(
            "Email client rendering across dark mode, mobile, Outlook versions. Broken rendering increases delete-without-open — negative engagement signal. AI preview tools generate client screenshots; human reviews critical campaigns. Rendering and placement tested together pre-send.",
            "Inbox placement with broken mobile rendering wastes inbox access.",
          ),
          s(" Template certification: rendering + placement pass required before template library publication."),
        ],
      ],
      examples: [
        {
          title: "Pre-send seed test catch",
          body: "Black Friday campaign seed test showed 34% spam at Outlook before full send. Root cause: new promotional subdomain missing DKIM selector in DNS — authentication fail. Fixed in 2 hours; retest 96% inbox. Full send proceeded; estimated 200K Outlook inboxes recovered.",
        },
        {
          title: "Content trigger false positive",
          body: "Spam checker flagged 'free' and 'guarantee' in subject — score 8.2/10. Seed test showed 94% inbox at Gmail despite spam score. Learned: seed placement overrides content score for established reputation. Reduced aggressive subject rewriting that had been hurting brand voice.",
        },
        {
          title: "Rendering failure on Outlook",
          body: "Newsletter used CSS grid unsupported in Outlook desktop — content collapsed to single column of broken images. High delete rate on Outlook users (38% of B2B list) depressed engagement metrics. Rendering test added to template QA; Outlook-specific fallback template deployed.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Subject Line & Content Deliverability",
      subtitle: "Spam triggers, link reputation, image-to-text ratio, and unsubscribe prominence",
      take: "Content affects deliverability: spam trigger words (context-dependent), excessive caps and punctuation, image-heavy layouts with little text, shortened or blacklisted link domains, missing physical address, and buried unsubscribe links. AI spam score tools pre-check content; marketers balance conversion copy with deliverability hygiene — prominent one-click unsubscribe often improves placement by reducing complaints.",
      why: "Content is the deliverability variable marketers control daily. Authentication is set once; every campaign content decision affects filtering.",
      paragraphs: [
        [
          s("Treat spam score as advisory, not absolute. "),
          x(
            "AI spam checkers flag triggers: FREE, $$$$, ALL CAPS, red font, URL shorteners. Established domains tolerate triggers that kill new senders. Use spam score for new domains and reputation recovery; rely on seed testing for mature programmes.",
            "Stripping all promotional language hurts conversion without guaranteed placement gain.",
          ),
          s(" Log spam score alongside seed placement — build correlation for your domain specifically."),
        ],
        [
          s("Link hygiene protects domain and sender reputation. "),
          x(
            "Use branded tracking domains — links.company.com CNAME to ESP. Avoid URL shorteners in email. Audit link domains against blocklists pre-send. UTM parameters do not affect deliverability; redirect chains do. AI link checkers validate all URLs in template.",
            "One blacklisted redirect domain in email body can spam-folder the entire send.",
          ),
          s(" Branded link domain authenticated with same rigour as sending domain."),
        ],
        [
          s("Unsubscribe prominence reduces complaints more than hidden opt-out. "),
          x(
            "One-click unsubscribe header (Gmail/Yahoo requirement for bulk senders) and visible footer link. Making unsubscribe hard increases complaint rate — complaints hurt reputation more than unsubscribes. AI cannot optimise away missing List-Unsubscribe header.",
            "Complaint = reputation damage. Unsubscribe = clean list. Prefer the latter.",
          ),
          s(" List-Unsubscribe-Post header implemented on all marketing mail — compliance and deliverability win."),
        ],
      ],
      examples: [
        {
          title: "Branded tracking domain fix",
          body: "Campaign used default ESP tracking domain shared with other senders — one neighbour's spam activity affected placement. Migrated to links.company.com branded domain with dedicated reputation. Inbox placement improved 8 points; click tracking unchanged.",
        },
        {
          title: "One-click unsubscribe header",
          body: "Implemented RFC 8058 one-click unsubscribe header on marketing mail. Complaint rate dropped from 0.14% to 0.05% over 8 weeks. Unsubscribe rate rose slightly — expected and healthy. Gmail spam rate metric improved below 0.1% threshold.",
        },
        {
          title: "Image-only email failure",
          body: "Luxury brand sent image-only promotional email — 95% image, minimal alt text. Spam filters and accessibility tools flagged; seed test 62% inbox. Rebuilt with 60/40 text-to-image ratio, live text headline. Inbox 91%; open rate also improved with text preview in notification.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Domain & IP Warm-Up Protocols",
      subtitle: "New infrastructure ramp schedules, engaged seed audiences, and migration discipline",
      take: "New sending domains and IPs have no reputation history — mailbox providers throttle unknown senders. Warm-up gradually increases volume over 4–8 weeks, starting with most engaged contacts, monitoring complaint and bounce rates at each ramp stage. AI warm-up tools automate ramp schedules; marketers supply engaged seed list and pause ramp on any metric regression.",
      why: "Launching cold on new infrastructure guarantees spam folder. Warm-up is mandatory for domain migrations, new ESP onboarding, and IP additions — not optional for impatient launches.",
      paragraphs: [
        [
          s("Follow structured warm-up schedule on new infrastructure. "),
          x(
            "Week 1: 500–2,000 most engaged contacts daily. Increase 15–25% weekly if metrics clean. Full volume no sooner than week 4 for established programmes, week 8 for new domains. AI warm-up automation adjusts ramp based on real-time placement feedback.",
            "Sending 100K on day one of new domain is deliverability suicide.",
          ),
          s(" Warm-up schedule documented in ESP migration project plan — marketing cannot override ramp."),
        ],
        [
          s("Seed warm-up audience from highest engagement tier only. "),
          x(
            "30-day openers and clickers first. Never warm with purchased, imported, or re-engagement lists. Engagement during warm-up establishes positive reputation signals. Expand audience only after placement metrics stable at current volume.",
            "Warm-up with cold contacts poisons infant reputation before it forms.",
          ),
          s(" Warm-up audience pre-approved by deliverability — typically Tier 1 only."),
        ],
        [
          s("Domain migration requires parallel sending period. "),
          x(
            "Migrate: warm new domain 4 weeks while old domain continues reduced volume. Gradually shift volume 70/30, 50/50, 30/70, full new. Sunset old domain only after 30 days clean metrics on new. AI monitors comparative placement between domains.",
            "Hard cutover on domain migration loses reputation inheritance entirely.",
          ),
          s(" Migration runbook includes rollback trigger — revert if new domain spam rate exceeds 0.3%."),
        ],
      ],
      examples: [
        {
          title: "ESP migration warm-up",
          body: "Company migrated from legacy ESP to new platform on mail.company.com subdomain. 6-week warm-up: week 1–2 Tier 1 only (12K), week 3–4 Tier 1–2 (45K), week 5–6 full engaged list (180K). Zero reputation incidents. Parallel old domain sunset week 7.",
        },
        {
          title: "Warm-up ramp pause",
          body: "Week 3 warm-up ramp showed complaint rate 0.22% — above 0.1% target. Ramp paused 5 days; content reviewed; audience restricted to 14-day engaged only. Resumed at week 2 volume level; recovered to clean metrics by week 5. Full volume achieved week 9 instead of week 6 — acceptable delay.",
        },
        {
          title: "Cold launch disaster",
          body: "Startup launched on new domain with 50K imported conference list — no warm-up. 73% spam folder at Gmail; domain reputation Low for 3 months. Rebuilt with 8-week warm-up on product signup engaged only. Lesson codified in deliverability policy.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Deliverability Investment",
      subtitle: "When to suppress, warm, test, or escalate — protecting placement over list size",
      take: "Before scaling sends, importing lists, or launching on new infrastructure, run four checks: (1) is authentication complete and aligned — SPF, DKIM, DMARC pass? (2) are reputation metrics within threshold — complaint, bounce, spam rate? (3) is audience engagement-qualified — sunset applied, no cold imports? (4) has placement been seed-tested for new templates or domains? Suppress when metrics degrade. Warm when infrastructure is new. Test before scale. Escalate to deliverability specialist when inbox drops below 85% at primary provider.",
      why: "Marketing pressure to maximise reach conflicts with deliverability discipline. This lens protects long-term inbox access over short-term list size metrics.",
      paragraphs: [
        [
          s("Check one: authentication and infrastructure readiness. "),
          x(
            "New domain or ESP without full auth stack → no send until complete. DMARC misalignment → fix before any volume. Subdomain strategy for new send type → provision before launch.",
            "Authentication gaps are binary blockers — no creative workaround.",
          ),
          s(" Auth checklist gate on campaign launch form."),
        ],
        [
          s("Check two: reputation metric thresholds. "),
          x(
            "Complaint rate >0.1% → pause and diagnose before next send. Spam trap hit → immediate list audit. Gmail spam rate >0.3% → volume reduction and engagement-only sending.",
            "Hope is not a reputation recovery strategy.",
          ),
          s(" Metric dashboard reviewed before weekly campaign approval meeting."),
        ],
        [
          s("Checks three and four: audience quality and placement validation. "),
          x(
            "Import >5K new addresses → hygiene review and approval. Campaign to Tier 3–4 without re-engagement path → reject. New template or domain without seed test → hold. List size KPI conflict → engaged revenue per send wins over total subscribers.",
            "Deliverability lens often means sending less to earn more.",
          ),
          s(" Lens decision logged on major sends — audit trail for incident post-mortems."),
        ],
      ],
      examples: [
        {
          title: "List import rejected",
          body: "Sales requested 30K trade show list import for immediate campaign. Lens: no opt-in proof, no hygiene validation, reputation metrics borderline. Import rejected; opted-in follow-up form deployed at booth instead. Avoided estimated reputation incident; post-show opt-in list 4,200 with 96% inbox placement.",
        },
        {
          title: "Sunset over stakeholder objection",
          body: "CMO resisted 180-day sunset — 'we paid for those contacts.' Lens: Gmail spam rate 0.35%, above threshold. Sunset implemented on 220K inactive; spam rate dropped to 0.08% in 30 days. Revenue per send up 29%. Stakeholder accepted after revenue dashboard.",
        },
        {
          title: "Seed test hold saved launch",
          body: "Product launch campaign bypassed seed test for speed. Deliverability lead enforced lens — test revealed 41% spam at corporate filters due to attachment. Attachment removed; link to resource instead. Retest 93% inbox. Launch delayed 1 day; full list reached versus 40% spam folder.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "SPF and DKIM pass but emails still fail DMARC. Most likely cause?",
      options: [
        "Subject line too long.",
        "From domain misalignment with DKIM signing domain — authentication records exist but do not align.",
        "Sending on Tuesdays instead of Thursdays.",
        "Too many images in email body.",
      ],
      correct: 1,
      correctFeedback:
        "Right. DMARC requires alignment, not just pass. Re-read section 7.1.",
      wrongFeedback:
        "DMARC fails on misalignment even when SPF/DKIM pass individually. Re-read section 7.1.",
    },
    {
      q: "Gmail spam rate is 0.35% and complaint rate is 0.12%. Best immediate action?",
      options: [
        "Import a purchased list to offset unsubscribes.",
        "Reduce volume, send to engaged tiers only, and audit recent sends — metrics exceed bulk sender thresholds.",
        "Remove all unsubscribe links to keep list size.",
        "Double send frequency to engaged users.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Reduce volume and tighten audience when metrics exceed thresholds. Re-read sections 7.2 and 7.4.",
      wrongFeedback:
        "High spam and complaint rates require volume reduction and engagement focus. Re-read sections 7.2 and 7.4.",
    },
    {
      kind: "order",
      q: "Order the deliverability excellence stack from foundation to ongoing governance.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Publish SPF, DKIM, and DMARC with domain alignment",
        "Monitor reputation metrics and maintain list hygiene",
        "Segment sends by engagement tier with frequency caps",
        "Seed test placement and refine suppression policy",
      ],
      correctFeedback:
        "Right. Auth → reputation → engagement → testing. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Authentication comes first. Testing validates before scale. Re-read sections 7.1–7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct deliverability layer.",
      categories: ["Authentication", "Reputation & hygiene", "Sending strategy", "Testing & governance"],
      items: [
        { text: "Dedicated subdomain for marketing vs transactional.", category: 0 },
        { text: "180-day inactivity sunset sequence.", category: 1 },
        { text: "Global 3-per-week promotional frequency cap.", category: 2 },
        { text: "Seed test before new domain launch.", category: 3 },
        { text: "One-click List-Unsubscribe header.", category: 1 },
        { text: "4-week warm-up on new sending domain.", category: 2 },
      ],
      correctFeedback:
        "Right. Auth = DNS and subdomains. Hygiene = sunset and unsubscribe. Strategy = caps and warm-up. Governance = testing. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Match each practice to auth, hygiene, strategy, or governance. Re-read sections 7.1–7.8.",
    },
    {
      q: "New ESP on fresh subdomain, launch in 3 days with full 200K list. What does the lens recommend?",
      options: [
        "Send full list immediately — ESP handles deliverability.",
        "Implement 4–8 week warm-up starting with most engaged tier — delay full volume.",
        "Skip authentication to save setup time.",
        "Buy additional contacts to improve engagement signals.",
      ],
      correct: 1,
      correctFeedback:
        "Right. New infrastructure requires warm-up. Re-read sections 7.7 and 7.8.",
      wrongFeedback:
        "Never cold-launch full volume on new domain. Warm up gradually. Re-read sections 7.7 and 7.8.",
    },
    {
      q: "AI spam checker scores subject 9/10 but seed test shows 95% inbox at Gmail. Best approach?",
      options: [
        "Cancel the campaign.",
        "Trust seed placement over spam score for established domain — spam score is advisory.",
        "Rewrite subject to remove all promotional language regardless of brand.",
        "Remove DKIM to simplify authentication.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Seed placement is ground truth for mature senders. Re-read section 7.6.",
      wrongFeedback:
        "Spam score is advisory; seed test validates actual placement. Re-read section 7.6.",
    },
  ],
});
