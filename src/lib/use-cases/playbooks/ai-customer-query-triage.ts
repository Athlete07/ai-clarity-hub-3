import { x } from "../explain";
import type { UseCasePlaybook } from "./types";

export const AI_CUSTOMER_QUERY_TRIAGE: UseCasePlaybook = {
  slug: "ai-customer-query-triage",
  title:
    "Build an AI-powered customer query triage system for your SME — no developer required",
  summary:
    "Classify and route customer messages automatically using AI, Google Sheets, and Zapier — no engineering team required.",
  kind: "workflow",
  categoryId: "customer-ops",
  tags: [
    "SME Owner",
    "Business Leader",
    "Customer Support",
    "50–500 employees",
  ],
  roles: ["sme-owner", "business-leader"],
  timeToImplement: "2–3 days to first working version",
  tools: ["ChatGPT or Claude", "Google Sheets", "Zapier (free tier)"],
  costEstimate: "Free–$30/month",
  readingMinutes: 45,
  updatedAt: "2026-03-01",
  searchKeywords: [
    "customer support",
    "ticket triage",
    "helpdesk",
    "Zapier",
    "ChatGPT",
    "Claude",
    "SME",
    "automation",
    "escalation",
    "priority",
  ],
  businessContext: [
    "Your support inbox is a firehose. Every morning, someone opens Gmail, Zendesk, or Intercom and spends the first hour just figuring out which messages need a human now, which can wait, and which are duplicates of the same question asked three times.",
    "For a 40–200 person company, this isn't a staffing problem alone — it's a ",
    x(
      "classification",
      "Sorting incoming messages into categories (billing, technical, sales, complaint) and priority levels (urgent, normal, low) before a human reads them.",
    ),
    " problem. Support leads burn 30–45 minutes per shift on triage before answering a single customer. That delay shows up as longer response times, missed SLAs, and customers who email again — doubling your volume.",
    "AI is the right lever now because modern ",
    x(
      "large language models",
      "AI systems trained on vast text data that can read a customer message and infer intent, urgency, and category from context — not just keywords.",
    ),
    " can read messy, emotional customer language and output structured tags in seconds. Two years ago you'd need a developer and labeled training data. Today you need a prompt, a spreadsheet, and an afternoon.",
  ],
  decisionCriteria: [
    {
      question:
        "Do you receive at least 20 customer messages per day across email, chat, or a helpdesk?",
      yesMeans:
        "Yes — triage saves measurable time. Below 20/day, manual sorting is faster than setting up automation.",
    },
    {
      question:
        "Are more than 30% of your messages clearly repetitive (status checks, password resets, pricing questions)?",
      yesMeans:
        "Yes — AI categorization will immediately surface patterns and let you template responses.",
    },
    {
      question:
        "Do you have (or can you create) a simple list of 5–8 categories your team already uses informally?",
      yesMeans:
        "Yes — you have the taxonomy AI needs. If every message feels unique, spend a week logging categories manually first.",
    },
    {
      question:
        "Can one person spend 2–3 hours over two days to set this up and test it?",
      yesMeans:
        "Yes — proceed. If nobody owns support ops, assign an owner before building anything.",
    },
  ],
  architecture: {
    title: "AI ticket triage workflow",
    caption:
      "Every customer message flows through AI classification, lands in a structured sheet your team can filter, and triggers escalation rules for urgent items — no custom code required.",
    steps: [
      {
        label: "Customer message",
        desc: "Email, chat, or form submission",
        tool: "Gmail / Zendesk / Intercom",
      },
      {
        label: "AI classification",
        desc: "Category, priority, summary",
        tool: "ChatGPT or Claude API",
      },
      {
        label: "Structured log",
        desc: "Tagged row per ticket",
        tool: "Google Sheets",
      },
      {
        label: "Routing rules",
        desc: "Escalate urgent, notify owner",
        tool: "Zapier",
      },
      {
        label: "Human response",
        desc: "Agent picks from filtered queue",
        tool: "Your helpdesk",
      },
    ],
  },
  phases: [
    {
      title: "Phase 1 — Define your taxonomy and escalation rules",
      intro: [
        "Before touching any tool, write down how your team already thinks about incoming messages. AI will only be as good as the categories you give it.",
      ],
      steps: [
        "List every support channel you use (email, live chat, contact form, social DMs).",
        "Write 5–8 categories your team would recognize — e.g. Billing, Technical bug, Feature request, Account access, Sales inquiry, Complaint, Other.",
        "Define 3 priority levels: Urgent (customer blocked or revenue at risk), Normal (needs response within 24h), Low (can wait or is informational).",
        "Write 2–3 escalation triggers — e.g. 'Complaint + Urgent = notify support lead immediately via Slack/email.'",
        "Collect 10 real past messages (redact names) to use as test cases in Phase 2.",
      ],
      checkpoint:
        "You have a one-page doc with categories, priority definitions, escalation rules, and 10 test messages. A colleague can read it and sort 3 random messages correctly without asking you.",
    },
    {
      title: "Phase 2 — Build and test the triage prompt",
      intro: [
        "This is where AI does the sorting. You'll craft a prompt that takes a raw customer message and returns structured JSON your team can act on.",
      ],
      steps: [
        "Open ChatGPT or Claude and paste the triage prompt template from the artifacts section below.",
        "Replace the [CATEGORIES] and [PRIORITY RULES] placeholders with your taxonomy from Phase 1.",
        "Paste each of your 10 test messages one at a time and review the output.",
        "If a message is misclassified, add a one-line rule to the prompt (e.g. 'Password reset = Account access, not Technical bug').",
        "Re-test until 8 of 10 messages are classified correctly.",
        "Save your final prompt — you'll reuse it verbatim in automation.",
      ],
      checkpoint:
        "Run 10 test messages through your prompt. At least 8 return the correct category and priority. Note which 2 failed and whether you need more rules or those are genuinely ambiguous.",
      screenshotPlaceholder:
        "[Screenshot: ChatGPT conversation showing a customer message input and structured JSON output with category, priority, summary, and suggested_action fields]",
    },
    {
      title: "Phase 3 — Set up the Google Sheets log",
      intro: [
        "Your sheet is the single source of truth — every classified ticket gets a row your team can filter, sort, and assign.",
      ],
      steps: [
        "Create a new Google Sheet with columns: Timestamp, Customer Email, Original Message, Category, Priority, Summary, Suggested Action, Status, Assigned To.",
        "Add data validation on Category (dropdown from your list) and Priority (Urgent / Normal / Low).",
        "Create a filter view called 'Urgent queue' that shows Priority = Urgent and Status = New.",
        "Create a filter view called 'By category' grouped by Category.",
        "Share the sheet with your support team (Editor access for leads, Commenter for agents).",
      ],
      checkpoint:
        "Manually add 3 test rows. Your team can open the 'Urgent queue' filter and see only urgent items. Sorting by Category works.",
      screenshotPlaceholder:
        "[Screenshot: Google Sheets with column headers, dropdown validation on Category column, and an active filter view showing urgent tickets]",
    },
    {
      title: "Phase 4 — Connect the manual flow (no Zapier yet)",
      intro: [
        "Before automating, run the system manually for 3–5 days. Copy message → paste into AI → copy result → paste into sheet. This validates accuracy before you wire up Zapier.",
      ],
      steps: [
        "For each new support message, paste it into your triage prompt.",
        "Copy the JSON output fields into a new row in your Google Sheet.",
        "If Priority = Urgent, manually notify the support lead (Slack, email, or phone).",
        "At end of day, review misclassifications and update your prompt rules.",
        "Track time: how long does manual triage take per message? (Target: under 60 seconds.)",
      ],
      checkpoint:
        "After 3 days and at least 30 real messages, your team agrees classifications are reliable enough to automate. Average triage time is under 60 seconds per message.",
    },
    {
      title: "Phase 5 — Automate with Zapier (optional but recommended)",
      intro: [
        "Once manual triage works, Zapier connects your helpdesk to AI to Sheets automatically. Start with one channel only — usually email.",
      ],
      steps: [
        "Create a Zapier account (free tier allows 100 tasks/month — enough to validate).",
        "Trigger: 'New email in Gmail' (or 'New ticket in Zendesk' / 'New conversation in Intercom').",
        "Action 1: Send the message body to OpenAI or Claude via Zapier's built-in AI action. Paste your triage prompt as the system instruction.",
        "Action 2: Add a row to Google Sheets with the parsed fields.",
        "Action 3 (conditional): If priority contains 'Urgent', send a Slack message or email to your support lead.",
        "Test with 5 real messages before turning the Zap on.",
        "Monitor the Zap history daily for the first week — AI outputs can drift if message formats change.",
      ],
      checkpoint:
        "Send a test urgent billing complaint. Within 2 minutes, a row appears in your sheet with correct category/priority, and the support lead gets a notification.",
      screenshotPlaceholder:
        "[Screenshot: Zapier workflow editor showing trigger → AI action → Google Sheets → conditional Slack notification]",
    },
  ],
  artifacts: [
    {
      id: "triage-prompt",
      title: "Customer query triage prompt",
      description:
        "Paste into ChatGPT, Claude, or your Zapier AI action. Replace bracketed placeholders with your taxonomy.",
      content: `You are a customer support triage assistant for a small business. Your job is to classify incoming customer messages so a human agent can respond efficiently.

## Categories (choose exactly one)
[CATEGORIES — e.g. Billing, Technical bug, Feature request, Account access, Sales inquiry, Complaint, Other]

## Priority rules
[PRIORITY RULES — e.g. Urgent = customer is blocked from using the product OR mentions cancellation/chargeback. Normal = needs response within 24 hours. Low = general question or feedback with no time pressure.]

## Instructions
Read the customer message below. Return ONLY valid JSON with these fields:
- "category": one category from the list above
- "priority": "Urgent", "Normal", or "Low"
- "summary": one sentence describing what the customer needs (max 30 words)
- "suggested_action": what the human agent should do first (max 20 words)
- "confidence": "high", "medium", or "low" — how sure you are about the classification

If the message is ambiguous, set confidence to "low" and pick the most likely category.

## Customer message
"""
{{PASTE CUSTOMER MESSAGE HERE}}
"""`,
    },
    {
      id: "category-tagging-prompt",
      title: "Batch category tagging prompt",
      description:
        "Use when you want to retroactively tag a backlog of old messages in one session.",
      content: `You are a customer support analyst. I will paste multiple customer messages separated by "---". For each message, return a JSON array where each item has:
- "message_number": integer starting at 1
- "category": one of [CATEGORIES]
- "priority": "Urgent", "Normal", or "Low"
- "summary": max 20 words

Rules:
- Billing issues mentioning refunds or double charges = Urgent
- "How do I..." questions = Normal unless they say they are blocked
- Thank-you messages and feedback = Low
- If unsure, set priority to Normal and note "needs review" in summary

Return ONLY the JSON array, no other text.

Messages:
---
{{PASTE MESSAGES SEPARATED BY ---}}
---`,
    },
    {
      id: "escalation-checklist",
      title: "Escalation criteria checklist",
      description:
        "Print or pin this next to your support queue. Any checked item = escalate immediately.",
      content: `ESCALATION CHECKLIST — escalate to support lead NOW if ANY of these are true:

□ Customer mentions legal action, lawyer, or regulatory complaint
□ Customer threatens to cancel AND is on an annual/enterprise plan
□ Message is marked Urgent AND category is Complaint
□ Customer reports data loss, security breach, or unauthorized access
□ Same customer has sent 3+ messages in 24 hours with no resolution
□ AI confidence is "low" AND priority is Urgent
□ Message is in a language your team cannot support (flag for translation)

ESCALATION ACTION:
1. Assign to support lead in sheet (Assigned To column)
2. Notify via Slack #support-urgent or email support-lead@company.com
3. Set Status = "Escalated" in sheet
4. Respond to customer within 30 minutes with acknowledgment (even if fix takes longer)

DO NOT ESCALATE (handle normally):
- Feature requests, even angry ones (category = Feature request, priority based on tone)
- Password resets (category = Account access, use template response)
- Pricing questions from non-customers (category = Sales inquiry)`,
    },
  ],
  mindmap: {
    center: "AI ticket triage",
    caption:
      "Two paths to the same outcome: start manual with Google Sheets (faster to validate), then graduate to Zapier automation once your prompt is reliable.",
    branches: [
      {
        id: "manual",
        label: "Manual path",
        description: "Google Sheets + copy-paste AI — best for week 1",
        children: [
          {
            label: "Paste message into ChatGPT",
            description: "60 sec per ticket, full control",
          },
          {
            label: "Copy JSON to sheet row",
            description: "Build accuracy data before automating",
          },
          {
            label: "Filter views for queue",
            description: "Urgent / By category / Unassigned",
          },
        ],
      },
      {
        id: "automated",
        label: "Zapier path",
        description: "Automated pipeline — best after 30+ manual tickets",
        children: [
          {
            label: "Email/ticket trigger",
            description: "Gmail, Zendesk, or Intercom",
          },
          {
            label: "AI classifies automatically",
            description: "Same prompt, zero copy-paste",
          },
          {
            label: "Conditional escalation",
            description: "Slack alert on Urgent + Complaint",
          },
        ],
      },
    ],
  },
  caseStudy: {
    title: "40-person logistics company — support triage turnaround",
    scenario:
      "A regional logistics company (42 employees, ~180 support emails/week) had one support lead and two part-time agents. All three spent the first 45 minutes of each shift reading and sorting before responding.",
    before:
      "Average first-response time: 6 hours. Urgent shipment-delay complaints sat in the general inbox alongside newsletter replies. The support lead manually forwarded urgent items via Slack when she noticed them — roughly 70% caught, 30% missed until the customer emailed again.",
    after:
      "After implementing AI triage with Google Sheets (week 1, manual) and Zapier automation (week 3), every message was classified within 90 seconds of arrival. Urgent items triggered an automatic Slack alert. Agents opened a filtered 'Urgent queue' instead of the full inbox.",
    metrics: [
      "Average first-response time: 6 hours → 38 minutes",
      "Urgent tickets missed: ~30% → under 5%",
      "Daily triage time per agent: 45 min → 8 min",
      "Customer re-contact rate (same issue, second email): 22% → 11%",
    ],
  },
  failurePoints: [
    {
      problem:
        "AI misclassifies messages that mix topics — e.g. a billing complaint that also describes a bug.",
      fix: "Add a rule to your prompt: 'If message contains multiple topics, classify by the most urgent topic and mention the secondary topic in summary.' Test with 5 mixed messages.",
    },
    {
      problem:
        "Zapier stops running silently after hitting the free tier's 100 task/month limit.",
      fix: "Set a calendar reminder to check Zapier task usage weekly. Upgrade to Starter ($19.99/mo) when you consistently exceed 80 tasks. Add a fallback: if no new sheet row in 4 hours during business hours, check Zap history.",
    },
    {
      problem:
        "Team ignores the Google Sheet and keeps working from the raw inbox.",
      fix: "Make the sheet the official queue — support lead assigns tickets only from the sheet. Disable or reduce inbox notifications so agents aren't pulled back to untriaged messages.",
    },
    {
      problem:
        "Prompt accuracy drops when customers write in slang, abbreviations, or non-English.",
      fix: "Add 3–5 examples of messy real messages to your prompt as few-shot examples. For non-English, add: 'Classify regardless of language; write summary in English.'",
    },
  ],
  nextPlaybook: {
    slug: "ai-support-response-drafting",
    title: "AI-drafted support responses with human review",
    description:
      "Once triage works, the next step is generating draft replies agents can edit and send — cutting response time from 38 minutes to under 10.",
  },
};
