import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktCustomerRetentionLoyaltyMarketing = buildChapter({
  slug: "mkt-customer-retention-loyalty-marketing",
  number: 6,
  shortTitle: "Customer Retention & Loyalty Marketing",
  title: "Customer Retention & Loyalty Marketing — Extending Customer Lifetime Value Through Email-Led Retention Programmes and AI-Assisted Health Monitoring",
  readingMinutes: 24,
  summary:
    "Acquiring customers costs five to seven times more than retaining them — yet many email programmes overweight acquisition nurture and underinvest in post-purchase lifecycle. Retention marketing uses email to monitor customer health, predict churn, trigger save campaigns, drive expansion, and build loyalty and advocacy loops. AI accelerates health scoring, churn prediction, and personalised retention content — but durable retention comes from marketer-owned economics, segment-specific playbooks, and cross-functional alignment with customer success and product.",
  keyTakeaway:
    "Retention is a measurable programme, not a welcome email. The loop that compounds LTV: model retention economics → monitor health signals from product and email → predict and intervene on churn risk → run save and expansion campaigns → design loyalty and advocacy mechanics → allocate budget by incremental retention ROI. AI flags risk and drafts interventions; marketers own segment playbooks and offer governance.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "Retention Economics & LTV Modelling",
      subtitle: "Cohort retention curves, payback periods, and email programme ROI in customer lifecycle",
      take: "Retention economics quantifies what a retained customer is worth: cohort retention rate by month, average revenue per user, expansion rate, and churn cost. Email retention programmes justify investment when incremental retention lift × customer LTV exceeds programme cost. AI models LTV from behavioural and transactional data; marketers define cohorts, churn definitions, and acceptable payback windows for retention offers.",
      why: "Without retention economics, email teams send 'we miss you' campaigns with no ROI framework. CFOs fund retention when marketers speak in LTV impact, not open rates.",
      paragraphs: [
        [
          s("Build cohort retention curves as your north star metric. "),
          x(
            "Monthly cohort: customers acquired in January, percentage still active at month 3, 6, 12. Segment by acquisition channel, plan tier, and industry. Email retention impact measured as cohort curve lift versus holdout. AI forecasts curve trajectory from early engagement signals.",
            "Aggregate churn rate hides segment-specific crises — enterprise month-6 cliff invisible in blended average.",
          ),
          s(" Cohort dashboard reviewed monthly — retention marketing priorities follow curve inflection points."),
        ],
        [
          s("Calculate incremental retention ROI before scaling campaigns. "),
          x(
            "Formula: (retained customers in test − control) × gross margin LTV − programme cost including discounts. Holdout groups mandatory — 5–10% no-retention-email control per segment. AI estimates lift confidence intervals from historical campaign performance.",
            "Campaigns without holdout prove activity, not incrementality.",
          ),
          s(" Retention offers with discount cost included in ROI — free months are not free."),
        ],
        [
          s("Payback period gates offer generosity. "),
          x(
            "Aggressive save offers (30% discount, free upgrade) justified only when payback within 12 months on retained ARR. AI simulates offer scenarios against churn probability and expansion likelihood. Marketer sets offer ceiling by segment — enterprise save offers differ from SMB.",
            "Over-discounting retains unprofitable customers — negative LTV retention is worse than churn.",
          ),
          s(" Offer playbook documents max discount by churn risk tier and customer value band."),
        ],
      ],
      examples: [
        {
          title: "Cohort cliff discovery — SaaS",
          body: "A project management SaaS cohort analysis revealed 34% churn between month 2 and 3 — post-onboarding abandonment. Retention email programme shifted budget from win-back to month-2 activation sequence. Month-3 retention improved 11 points; incremental LTV $1.2M annually on 8,000-customer cohort. Holdout confirmed 7 points were email-driven, not seasonal.",
        },
        {
          title: "Holdout-proven save campaign ROI",
          body: "A subscription box brand tested 20% save offer on cancellation flow email. Test group retention 28%; holdout 19%. Incremental 9% × $340 annual LTV × 4,000 at-risk = $122K gross margin minus $31K discount cost = $91K net. Programme scaled; holdout maintained at 8% for ongoing measurement.",
        },
        {
          title: "Negative LTV retention trap",
          body: "An SMB SaaS offered 50% annual discount to all churn-risk customers. Retention rate rose 15% but support ticket volume doubled on discounted accounts with 8-month average remaining tenure. LTV analysis showed segment was negative margin. Fix: tiered offers — high-LTV gets white-glove save; low-LTV gets self-serve resources only.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Customer Health Monitoring",
      subtitle: "Product usage, email engagement, support sentiment, and composite health scores",
      take: "Customer health combines product usage frequency, feature adoption depth, email engagement trend, support ticket sentiment, NPS, and payment behaviour into a composite score. AI calculates health scores and detects slope changes — declining login frequency plus rising support tickets signals risk before cancellation. Marketers define health inputs, weighting, and alert thresholds aligned with customer success workflows.",
      why: "Reactive retention — emailing after cancellation — recovers a fraction of proactive intervention. Health monitoring triggers email and CS outreach while the customer is still salvageable.",
      paragraphs: [
        [
          s("Define health score components by business model. "),
          x(
            "SaaS: DAU/MAU ratio, core feature usage, integration count, admin login recency. E-commerce: purchase frequency, AOV trend, category breadth. Subscription: content consumption, skip/pause rate. Email: open/click trend slope, support email reply sentiment. Weight components by correlation to churn from historical analysis.",
            "Copying another company's health model ignores your product's activation milestones.",
          ),
          s(" Health score methodology documented — CS and marketing share single definition."),
        ],
        [
          s("Monitor engagement slope, not snapshot scores. "),
          x(
            "Customer at 70 health dropping 15 points monthly is higher risk than stable 55. AI trend detection flags negative slope across product and email signals. Alert tiers: yellow (watch), orange (automated retention email), red (CS outreach within 24 hours).",
            "Snapshot scores miss deteriorating accounts that still look 'okay' on absolute scale.",
          ),
          s(" Weekly health digest to CS for red-tier accounts — email triggers orange tier automatically."),
        ],
        [
          s("Email engagement as early warning when product data lags. "),
          x(
            "Declining email opens often precedes product disengagement by 2–4 weeks — especially for low-frequency-use products. Email health sub-score: 30-day open rate versus personal baseline. Sudden drop triggers re-engagement sequence before product usage hits zero.",
            "Product usage data may batch nightly — email engagement is near-real-time health signal.",
          ),
          s(" Combine product and email health — either signal can trigger intervention."),
        ],
      ],
      examples: [
        {
          title: "Composite health score — B2B SaaS",
          body: "A CRM vendor built health score from 6 inputs: weekly active users, reports created, integration status, email engagement slope, support CSAT, days to renewal. Score 0–100; below 40 triggers orange retention sequence. Churn in 90 days pre-renewal dropped 23% versus prior year's unmonitored cohort. AI recalibrated weights quarterly from churn correlation.",
        },
        {
          title: "Email slope alert — media subscription",
          body: "A news subscription added email engagement slope to health model. Contacts with 50%+ open rate decline over 60 days flagged 3 weeks before pause rate spike. Proactive 'what you're missing' email reduced pause requests 18% in flagged cohort. Product team lacked daily usage signal — email filled gap.",
        },
        {
          title: "Health score without CS handoff failure",
          body: "Marketing automated orange-tier emails but red-tier CS alerts went to unmonitored inbox. Customers deteriorated from orange to churn without human touch. Fix: red-tier SLA with CS manager escalation; weekly joint marketing-CS health review. Red-tier save rate improved from 12% to 34%.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.3",
      title: "Churn Prediction & Early Intervention",
      subtitle: "AI risk models, intervention triggers, and save campaign timing",
      take: "Churn prediction models estimate cancellation probability from health signals, tenure, plan type, and macro patterns. AI trains on historical churned versus retained cohorts; marketers set intervention thresholds, channel mix (email, in-app, phone), and offer escalation paths. Early intervention at 60% churn probability beats last-chance email at 95% — but requires prediction accuracy validation to avoid alert fatigue.",
      why: "Random save emails to healthy customers train ignore behaviour and erode margin. Prediction focuses retention spend on accounts where intervention changes outcomes.",
      paragraphs: [
        [
          s("Validate model accuracy before automating interventions. "),
          x(
            "Minimum viable: 0.65 AUC on holdout churn within 90 days. Review precision at top decile — what percentage of flagged accounts actually churn? Low precision wastes CS and discount budget. AI retrains monthly; marketer approves threshold changes.",
            "Models without validation create 500 'high risk' alerts weekly — CS stops reading them.",
          ),
          s(" Model card documents features, accuracy, and known blind spots — e.g. cannot predict competitor switch."),
        ],
        [
          s("Tier interventions by predicted churn probability and LTV. "),
          x(
            "60–70% risk: educational re-engagement email, no offer. 70–85%: personalised value reminder + feature tip. 85%+: save offer or CS call for high-LTV. AI drafts intervention content from customer's underused features and past engagement. Escalation path documented per tier.",
            "Leading with discount on 65% risk customers teaches wait-for-offer behaviour.",
          ),
          s(" Intervention history logged in CRM — prevent duplicate save offers within 90 days."),
        ],
        [
          s("Measure intervention incrementality with control cohorts. "),
          x(
            "High-risk holdout: 10% receive no intervention to measure natural churn versus treated. Incremental save rate = treated retention − holdout retention. AI analyses which intervention types work per segment — phone for enterprise, email for SMB.",
            "Without holdout, you attribute retained customers to campaigns they would have survived anyway.",
          ),
          s(" Quarterly intervention playbook update from incrementality results."),
        ],
      ],
      examples: [
        {
          title: "Tiered intervention — productivity SaaS",
          body: "Churn model flagged 1,200 accounts monthly at >70% risk. Tier 1 (70–80%): 3-email feature re-engagement, no discount. Tier 2 (80–90%): CS chat offer. Tier 3 (90%+): 15% renewal discount. Incremental save rate: Tier 1 +4%, Tier 2 +11%, Tier 3 +19%. Discount cost concentrated on highest-risk highest-LTV accounts only.",
        },
        {
          title: "Prediction precision fix",
          body: "Initial model had 0.58 AUC — alerts ignored after 6 weeks. Feature engineering added 'days since last admin login' and 'support ticket unresolved >5 days.' AUC rose to 0.71; top-decile precision 68%. CS trust restored; intervention follow-through rate up 3x.",
        },
        {
          title: "Holdout revealed over-attribution",
          body: "Save campaign claimed 25% retention on at-risk cohort. Holdout analysis showed 17% natural retention — incremental lift only 8%. Campaign still positive ROI but offer generosity reduced. Shifted to lighter-touch Tier 1 for 70–80% risk; saved $180K annual discount cost.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch6-retention-loop",
      type: "flow",
      title: "Retention Marketing Loop",
      caption:
        "Health monitoring and churn prediction → tiered email interventions → save and expansion campaigns → loyalty and advocacy → cohort LTV measurement and playbook refinement.",
    }),
    buildSection({
      number: "6.4",
      title: "Retention Campaign Design",
      subtitle: "Save sequences, win-back flows, renewal reminders, and re-engagement architecture",
      take: "Retention campaigns are structured email programmes: pre-churn intervention sequences, cancellation flow save offers, post-churn win-back, renewal countdown series, and dormancy re-engagement. AI drafts copy variants personalised to usage gaps and tenure; marketers govern offer rules, frequency caps, and brand tone during sensitive save moments.",
      why: "Generic 'we miss you' emails underperform segment-specific campaigns that reference actual product value the customer is not using. Campaign architecture determines whether retention email helps or annoys.",
      paragraphs: [
        [
          s("Map campaigns to churn moment, not calendar. "),
          x(
            "Pre-churn: health-triggered sequence. At-cancel: real-time save offer in cancellation flow. Post-churn: win-back at 30, 90, 180 days. Pre-renewal: 60/30/7-day value reinforcement. Dormancy: no login 14/30/60 days. Each campaign has entry, exit, and suppression rules — active users never receive win-back.",
            "Calendar-based retention blasts hit engaged customers — training ignore behaviour.",
          ),
          s(" Campaign trigger matrix in ESP — QA suppression rules before every launch."),
        ],
        [
          s("Personalise save content to usage gap, not demographics. "),
          x(
            "AI analyses underused features versus customer's historical pattern: 'You haven't run a report in 60 days — here's a template for your role.' More effective than generic discount. Include social proof from similar customers who renewed.",
            "Discount-first save emails attract price-sensitive churners who leave at next renewal anyway.",
          ),
          s(" Value-first, offer-second sequence — offer only on email 2–3 if no product re-engagement."),
        ],
        [
          s("Frequency caps across retention programmes. "),
          x(
            "Max 2 retention emails per week per customer across all active save, renewal, and re-engagement tracks. Global cap prevents pile-up when health alert, renewal reminder, and dormancy trigger coincide. AI flags cap breaches in QA.",
            "Retention email overload accelerates cancellation — the opposite of intent.",
          ),
          s(" Cap configuration reviewed when adding new retention trigger — common oversight."),
        ],
      ],
      examples: [
        {
          title: "Cancellation flow save — tiered offer",
          body: "A streaming service rebuilt cancellation flow: step 1 pause option, step 2 content recommendation based on watch history, step 3 25% off only if steps 1–2 declined. Save rate improved from 8% to 19% versus immediate discount offer. AI generated personalised 'coming next month' content hooks from viewing data.",
        },
        {
          title: "Usage-gap personalisation — analytics SaaS",
          body: "At-risk emails referenced specific unused features per account — dashboards for users who only ran exports, alerts for users who only viewed reports. Re-engagement on referenced feature up 42% versus generic product email. Churn in personalised cohort down 14% over 6 months.",
        },
        {
          title: "Frequency cap failure",
          body: "Customer received health alert, renewal reminder, and win-back test email same week — cancelled citing 'too many emails.' Root cause: three teams owned triggers without global cap. Unified retention frequency rule in ESP; complaint rate dropped 55%.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Expansion & Upsell Email Programmes",
      subtitle: "Cross-sell, upgrade, and seat expansion triggers from product and engagement signals",
      take: "Expansion email programmes target healthy customers for upgrade, add-on, cross-sell, and seat expansion — distinct from save campaigns. Triggers: usage approaching plan limits, feature gate hits, adjacent product fit score, renewal window, and champion engagement. AI identifies expansion propensity; marketers define eligibility (minimum health score, tenure) to avoid upselling fragile accounts.",
      why: "Retention without expansion leaves LTV on the table. Email is the highest-ROI expansion channel for existing customers — if timed to value realisation moments, not arbitrary quarters.",
      paragraphs: [
        [
          s("Gate expansion emails on health and activation milestones. "),
          x(
            "Minimum health score 60+, core feature activated, 90+ days tenure for upgrade ask. Expansion to at-risk accounts feels predatory and accelerates churn. AI expansion propensity model excludes bottom health quartile automatically.",
            "Upselling struggling customers is the fastest way to turn retention problem into PR problem.",
          ),
          s(" Expansion eligibility rules in CRM — ESP syncs daily health score."),
        ],
        [
          s("Trigger on value realisation moments, not calendar quarters. "),
          x(
            "Usage at 80% of plan limit, team invite accepted, integration completed, positive NPS response — each triggers relevant expansion email. AI matches trigger to offer: limit approach → upgrade; integration complete → add-on module.",
            "Q3 upsell blast to entire base ignores individual readiness.",
          ),
          s(" Product event webhooks to ESP — expansion triggers within hours of milestone."),
        ],
        [
          s("Measure expansion incrementality separately from retention. "),
          x(
            "Holdout on expansion campaigns — 5% healthy customers receive no upsell email. Track expansion revenue lift, not just click rate. Negative lift means campaign pushes premature upgrades that increase churn — pause and redesign.",
            "High click rate on expansion email that increases 90-day churn is net negative LTV.",
          ),
          s(" Expansion and retention metrics on separate dashboard — conflating masks trade-offs."),
        ],
      ],
      examples: [
        {
          title: "Limit-approach upgrade trigger",
          body: "A cloud storage SaaS emailed upgrade offer when accounts hit 85% capacity — AI personalised with projected 'full in X days' based on upload velocity. Conversion to paid tier 3.2x generic upgrade campaign. Expansion revenue $420K annual with zero incremental discount.",
        },
        {
          title: "NPS promoter expansion",
          body: "Promoters (NPS 9–10) received expansion email 48 hours post-survey — seat add-on for teams, API tier for developers based on persona. Expansion rate 2.8x non-promoter cohort. Detractors routed to CS, not upsell — churn risk contained.",
        },
        {
          title: "Premature upsell churn backlash",
          body: "Expansion campaign to entire base including health score <50 customers generated complaints and 3% churn spike in targeted cohort. Campaign paused; eligibility gate added. Expansion revenue recovered on healthy subset without churn penalty.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Loyalty Programme Design",
      subtitle: "Points, tiers, referrals, and email as loyalty communication backbone",
      take: "Loyalty programmes — points, tiered status, referral rewards, early access — increase switching costs and repeat behaviour. Email communicates point balances, tier progress, reward availability, and exclusive offers. AI personalises loyalty messaging from purchase history and engagement; marketers design earn/burn economics, tier thresholds, and fraud prevention rules.",
      why: "Loyalty without email communication is invisible. Email makes programme value tangible — reminder that points expire, progress to next tier, and exclusive member offers.",
      paragraphs: [
        [
          s("Design earn/burn economics before creative. "),
          x(
            "Target: loyalty cost 2–4% of revenue for profitable programmes. Points expire to drive urgency — 12-month rolling typical. Tier thresholds achievable by top 20% customers, aspirational for next 30%. AI models breakage rate and liability — marketer sets expiration policy.",
            "Generous points without expiration create accounting liability without behaviour change.",
          ),
          s(" Finance reviews loyalty liability quarterly — email drives redemption that reduces liability."),
        ],
        [
          s("Email cadence for loyalty: balance, progress, and exclusivity. "),
          x(
            "Monthly balance statement. Tier progress nudge at 80% to next level. Expiration warning 30/7 days. Member-exclusive offers before public sale. AI optimises send timing from individual engagement patterns. Over-communication on points fatigues; under-communication lets points expire unused — customer resentment.",
            "Expired points without warning email is a loyalty programme own-goal.",
          ),
          s(" Loyalty email templates separate from promotional — distinct unsubscribe handling where legally required."),
        ],
        [
          s("Integrate loyalty data with retention health score. "),
          x(
            "Declining loyalty engagement — fewer redemptions, ignored member emails — feeds health model. High-tier members churning is existential signal. Priority save interventions for top-tier loyalty members.",
            "Loyalty tier is retention asset — losing platinum customer costs more than losing new subscriber.",
          ),
          s(" CRM loyalty tier field syncs to ESP for segmentation and intervention priority."),
        ],
      ],
      examples: [
        {
          title: "Tier progress email — retail",
          body: "A beauty retailer emailed '€12 away from Gold tier' when customers reached 80% of annual spend threshold. Gold unlocks free shipping and early sale access. Tier completion rate up 34% versus control without progress email. AI personalised recommended products to close spend gap.",
        },
        {
          title: "Expiration warning sequence",
          body: "A airline loyalty programme added 30-day and 7-day expiration warnings for inactive point balances. Redemption rate on warned accounts 28% versus 4% unwarned expiration. Programme breakage dropped; customer complaints about 'surprise expiration' eliminated.",
        },
        {
          title: "Loyalty-liability overrun",
          body: "A coffee chain issued 2x points promotion without expiration or earn caps. Liability exceeded budget by 40%; programme paused. Redesign: standard earn rate, 18-month expiration, email redemption nudges. Sustainable economics with email-driven 22% redemption lift.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Advocacy & Referral Marketing",
      subtitle: "Review requests, referral programmes, case study recruitment, and UGC via email",
      take: "Advocacy programmes turn satisfied customers into promoters: referral invites, review requests, testimonial recruitment, user community invites, and case study participation. Email identifies advocates from NPS, loyalty tier, tenure, and engagement; AI drafts personalised referral asks and testimonial prompts. Marketers set advocate eligibility, incentive structure, and brand safety review for UGC.",
      why: "Referred customers have higher LTV and lower CAC — but referral asks sent to detractors damage brand. Email advocacy requires precision targeting, not broadcast 'refer a friend' blasts.",
      paragraphs: [
        [
          s("Define advocate eligibility with multiple positive signals. "),
          x(
            "NPS 9–10, health score >75, tenure >6 months, no open support escalations in 90 days, optional loyalty tier Gold+. AI advocate propensity model combines signals. Ineligible customers never receive referral ask — detractor referral invite generates negative word of mouth.",
            "Single-signal advocacy targeting — NPS alone — misses context of recent support failure.",
          ),
          s(" Advocate segment refreshes weekly — post-support recovery period before referral ask."),
        ],
        [
          s("Time advocacy asks to peak satisfaction moments. "),
          x(
            "Post-positive support resolution, loyalty tier upgrade, product milestone achievement, renewal confirmation. AI identifies individual satisfaction peaks from behavioural sequence. Generic monthly referral email underperforms moment-triggered ask 2–3x.",
            "Asking for referral during onboarding before value delivery feels tone-deaf.",
          ),
          s(" Advocacy trigger library maintained with product and CS — new milestones added quarterly."),
        ],
        [
          s("Incentivise both referrer and referee with clear economics. "),
          x(
            "Double-sided incentives outperform referrer-only for B2C. B2B: charitable donation or account credit over cash. Email communicates incentive clearly — ambiguous reward rules reduce participation. Fraud monitoring on self-referral and synthetic accounts.",
            "Referral programme fraud can exceed acquisition cost savings if unchecked.",
          ),
          s(" Referral performance tracked: referred customer LTV, CAC equivalent, advocate participation rate."),
        ],
      ],
      examples: [
        {
          title: "NPS-triggered referral — fintech",
          body: "A personal finance app sent referral invite 24 hours after NPS 9–10 submission. Personalised message referenced feature they rated highly. Referral participation 8.2% versus 1.4% on monthly blast. Referred user 90-day retention 1.6x organic signup.",
        },
        {
          title: "Case study recruitment email",
          body: "B2B SaaS identified 40 advocate accounts via health score and executive engagement. AI-drafted personalised case study invite citing specific outcomes from their usage data. 12 agreed — sales enablement asset pipeline filled for 6 months. Incentive: conference ticket, not cash.",
        },
        {
          title: "Detractor referral disaster",
          body: "Referral campaign sent to entire NPS respondent pool including passives and detractors. Public tweet from detractor offered referral link with complaint attached. Fix: advocate eligibility gate; detractors routed to recovery workflow only. Referral programme paused 2 weeks for redesign.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Retention Allocation",
      subtitle: "When to save, expand, or invest in loyalty — allocating retention budget by incremental LTV",
      take: "Before scaling save offers, expansion campaigns, or loyalty investment, run four checks: (1) do cohort economics justify intervention cost — positive incremental LTV? (2) is health monitoring accurate enough to target — model validated? (3) are frequency caps and suppression rules preventing retention fatigue? (4) does expansion eligibility protect fragile accounts? Save when prediction precision and LTV justify offer cost. Expand when health and activation gates pass. Invest in loyalty when earn/burn economics are sustainable.",
      why: "AI makes churn prediction and personalisation accessible — creating temptation to discount broadly. This lens focuses retention spend where incremental LTV is provable.",
      paragraphs: [
        [
          s("Check one: incremental retention ROI. "),
          x(
            "No holdout measurement → establish before scaling. Negative incremental ROI on save offers → reduce offer generosity or tighten targeting, not increase send volume.",
            "Retention budget without incrementality proof is margin donation.",
          ),
          s(" ROI gate on every retention campaign above $10K annual cost."),
        ],
        [
          s("Check two: prediction and health accuracy. "),
          x(
            "Model AUC below 0.60 → improve features before automating interventions. CS ignoring red alerts → fix handoff before adding orange email volume.",
            "Targeting precision matters more than creative quality for retention.",
          ),
          s(" Model and health accuracy reviewed quarterly with CS leadership."),
        ],
        [
          s("Checks three and four: fatigue prevention and expansion gates. "),
          x(
            "Complaint rate rising → audit frequency caps and overlapping triggers. Expansion campaign to health score <50 → pause and add eligibility gate. Loyalty liability exceeding budget → fix economics before acquisition-style promotion.",
            "Retention programmes can harm LTV when over-communicated or misfired.",
          ),
          s(" Lens applied in monthly retention programme review with finance and CS."),
        ],
      ],
      examples: [
        {
          title: "Save offer scale-back",
          body: "Save campaign showed 8% incremental lift but discount cost exceeded retained LTV on SMB segment. Lens: restrict save offers to enterprise and mid-market; SMB gets self-serve re-engagement only. Blended retention ROI turned positive; SMB churn rose 2 points — acceptable versus negative margin retention.",
        },
        {
          title: "Expansion before save investment",
          body: "Company debated $200K save offer budget increase. Lens: healthy cohort expansion holdout showed 14% incremental upgrade lift with zero discount cost. Reallocated $120K to expansion triggers; retention save budget held. Net LTV impact 2.3x save-only scenario.",
        },
        {
          title: "Loyalty deferral",
          body: "CMO proposed points programme launch. Lens: cohort economics unmodelled, email infrastructure for balance statements absent. Deferred loyalty 6 months; invested in health monitoring and save campaign incrementality. Loyalty launched with sustainable economics and email cadence ready.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A save campaign reports 25% retention with no holdout group. What is the problem?",
      options: [
        "25% is too low — increase the discount.",
        "Without holdout, you cannot measure incremental lift — some customers would have stayed anyway.",
        "Holdout groups are only for acquisition campaigns.",
        "Retention campaigns do not need ROI measurement.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Holdout proves incrementality. Re-read sections 6.1 and 6.4.",
      wrongFeedback:
        "Always measure incremental retention with holdout. Re-read sections 6.1 and 6.4.",
    },
    {
      q: "Customer health score is 72 but dropped 20 points in 30 days. What action fits?",
      options: [
        "No action — 72 is still above threshold.",
        "Trigger intervention based on negative engagement slope — trend matters more than snapshot.",
        "Send expansion upsell immediately.",
        "Remove from all email programmes.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Slope detection catches deteriorating accounts early. Re-read sections 6.2 and 6.3.",
      wrongFeedback:
        "Monitor trend, not just absolute score. Re-read sections 6.2 and 6.3.",
    },
    {
      kind: "order",
      q: "Order the retention marketing loop from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Model retention economics and cohort curves",
        "Monitor health signals and predict churn risk",
        "Run tiered save and expansion email campaigns",
        "Measure incremental LTV and refine playbooks",
      ],
      correctFeedback:
        "Right. Economics → monitor → intervene → measure. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Start with economics. Measurement closes the loop. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct retention layer.",
      categories: ["Economics & measurement", "Health & prediction", "Campaigns & programmes", "Governance & allocation"],
      items: [
        { text: "5% holdout group on save campaign.", category: 0 },
        { text: "Email open rate slope in health score.", category: 1 },
        { text: "Expansion email gated on health score >60.", category: 2 },
        { text: "Global 2-per-week retention email cap.", category: 3 },
        { text: "Tiered intervention by churn probability.", category: 2 },
        { text: "Quarterly cohort retention dashboard.", category: 0 },
      ],
      correctFeedback:
        "Right. Economics = holdout and cohorts. Health = signals and prediction. Campaigns = interventions. Governance = caps and lens. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Match each practice to economics, health, campaigns, or governance. Re-read sections 6.1–6.8.",
    },
    {
      q: "Expansion emails to customers with health score below 50 caused churn spike. What does the lens recommend?",
      options: [
        "Increase expansion email frequency.",
        "Add expansion eligibility gates on health and activation — pause upsell to at-risk accounts.",
        "Offer larger discounts to at-risk customers.",
        "Remove all retention emails instead.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Expansion requires healthy, activated customers. Re-read sections 6.5 and 6.8.",
      wrongFeedback:
        "Gate expansion on health score. Re-read sections 6.5 and 6.8.",
    },
    {
      q: "Churn prediction model has 0.55 AUC and CS ignores alerts. Priority fix?",
      options: [
        "Send more save emails to entire customer base.",
        "Improve model features and validation; fix CS handoff before scaling automated interventions.",
        "Lower churn probability thresholds to flag more accounts.",
        "Replace email with direct mail.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model accuracy and CS trust precede scale. Re-read sections 6.3 and 6.8.",
      wrongFeedback:
        "Validate prediction and fix handoff first. Re-read sections 6.3 and 6.8.",
    },
  ],
});
