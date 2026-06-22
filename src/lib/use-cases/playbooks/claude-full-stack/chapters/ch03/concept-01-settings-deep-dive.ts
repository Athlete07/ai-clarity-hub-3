import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_SETTINGS_DEEP_DIVE: GuideConcept = {
  number: 1,
  title: "Settings Deep Dive",
  subtitle:
    "The configuration layer that most users ignore — and the leverage it creates",
  sections: [
    buildGuideSection({
      id: "user-preferences",
      number: "1.1",
      title: "User preferences",
      subtitle:
        "How to set your default communication style, format, and response length so you stop repeating yourself in every conversation",
      takeaway:
        "Preferences are your standing brief to Claude — set tone, format, and brevity once; every new chat inherits them without a preamble.",
      why: "Power users who re-type 'be concise, use bullets, no fluff' fifty times a week are paying a tax preferences eliminate.",
      paragraphs: [
        [
          s("Claude.ai "),
          x("user preferences", "Profile-level defaults — separate from per-Project instructions."),
          s(
            " let you specify how Claude should communicate: direct vs exploratory, formal vs casual, default list vs prose format, and how much detail to include.",
          ),
        ],
        [
          s("Treat preferences like a job description for your assistant: role ('you support a VP of Product'), output norms ('lead with recommendation, then rationale'), and anti-patterns ('never open with Certainly!')."),
        ],
        [
          s("Keep preferences stable and generic. Task-specific constraints belong in the message or Project — not in global prefs."),
        ],
      ],
      workflowSteps: [
        "Open Settings → Profile / Preferences.",
        "Write 3 lines: role, format default, length default.",
        "Start 3 test chats with one-word prompts — verify style holds without reminders.",
      ],
      artifact: {
        id: "preferences-template",
        title: "User preferences starter template",
        content: `ROLE: I am a [role] at [type of org].

FORMAT: Default to [bullets / tables / short paragraphs].
Lead with the answer; put caveats after.

LENGTH: [Concise / Standard / Deep dive when I ask].
Skip preamble and filler phrases.

AVOID: [List 2–3 pet peeves, e.g. hedge words, unsolicited emojis].`,
      },
    }),
    buildGuideSection({
      id: "custom-instructions",
      number: "1.2",
      title: "Custom instructions",
      subtitle:
        "The persistent context that follows you into every new conversation — what to put here and what not to",
      takeaway:
        "Custom instructions are global memory for how you work — not a filing cabinet for project docs.",
      why: "Stuffing 2,000 words of company wiki into custom instructions burns context on every chat and dilutes what actually matters.",
      paragraphs: [
        [
          s(""),
          x(
            "Custom instructions",
            "Persistent text applied across chats (distinct from Project knowledge and Claude memory).",
          ),
          s(
            " travel with your account into new conversations. Ideal content: standing constraints, vocabulary, and workflow habits.",
          ),
        ],
        [
          s("Put here: industry jargon definitions, approval chains ('flag legal if customer data'), preferred citation style, tools you use daily."),
        ],
        [
          s("Do not put here: full product specs, client decks, or anything that changes weekly — use Projects instead."),
        ],
      ],
      workflowSteps: [
        "Audit current custom instructions — highlight anything project-specific.",
        "Move project content to a Project; keep <400 words global.",
        "Add one line: 'If unsure which doc applies, ask before assuming.'",
      ],
      example: {
        title: "Founder — global vs Project split",
        body: "A founder kept investor update tone in custom instructions and moved each fundraise's metrics into a Project. New chats felt personal; fundraise work stayed scoped and versioned.",
      },
    }),
    buildGuideSection({
      id: "memory-settings",
      number: "1.3",
      title: "Memory settings",
      subtitle:
        "What Claude's memory system stores, how to view it, how to edit it, and when to clear it",
      takeaway:
        "Memory is Claude's notebook about you — useful for continuity, dangerous if wrong facts stick.",
      why: "Unreviewed memory causes confident wrong callbacks ('you prefer Opus for everything') that poison future sessions.",
      paragraphs: [
        [
          s("When enabled, Claude may retain "),
          x("memories", "Facts inferred from conversations — preferences, role, recurring projects."),
          s(
            " across chats. You can view, edit, and delete individual memories in settings.",
          ),
        ],
        [
          s("Good memories: your role, standing preferences you confirmed, long-running initiatives. Bad memories: one-off tasks, stale decisions, guesses you never verified."),
        ],
        [
          s("Clear memory when changing jobs, after a major pivot, or if Claude keeps citing outdated context. Pair memory with Projects for anything team-visible."),
        ],
      ],
      workflowSteps: [
        "Settings → Memory — read full list monthly.",
        "Delete anything you wouldn't want in a new hire's onboarding doc.",
        "After a wrong callback, fix or delete the source memory immediately.",
      ],
    }),
    buildGuideSection({
      id: "feature-toggles",
      number: "1.4",
      title: "Feature toggles",
      subtitle:
        "Web search, code execution, file creation, artifacts, extended thinking, Skills — what each does and when to turn them on or off",
      takeaway:
        "Toggles are capability switches — artifacts ON for deliverables; search ON for research threads; code execution ON for analysis/skills with scripts; thinking ON only for hard tasks; Skills enabled per governance policy.",
      why: "Web search on every chat invites stale citations; code execution on sensitive docs raises exfiltration risk; thinking always-on burns limits.",
      paragraphs: [
        [
          s("Key toggles (availability varies by plan): "),
          x("web search", "Claude fetches live pages to answer."),
          s(", "),
          x("artifacts", "Separate panel for code, docs, diagrams."),
          s(", analysis/code execution, file creation, "),
          x("extended thinking", "Deeper reasoning before answer — higher cost/latency."),
          s(", "),
          x("Agent Skills", "Enable/browse/upload skills in Customize → Skills."),
          s(". Each adds tools, tokens, or execution surface."),
        ],
        [
          s("Default stance: artifacts ON for build work; search ON only for research; code execution ON when verified runs or script-backed skills needed; thinking OFF until thread marked HARD; skills from trusted sources only."),
        ],
      ],
      workflowSteps: [
        "List your top 5 task types.",
        "For each, note ideal toggle state.",
        "Create a pinned note in your Project: TOGGLE_DEFAULTS.",
      ],
      artifact: {
        id: "toggle-matrix",
        title: "Feature toggle matrix",
        content: `TASK TYPE          | SEARCH | ARTIFACTS | CODE RUN | THINKING | SKILLS
Drafting / editing | OFF    | optional  | OFF      | OFF      | if needed
Live market scan   | ON     | ON        | OFF      | OFF      | research skill
Data / spreadsheet | OFF    | ON        | ON       | OFF      | xlsx skill
Hard strategy/ADR  | OFF    | ON        | OFF      | ON       | optional
Build mini-tool    | OFF    | ON (React)| ON       | OFF      | OFF
Sensitive internal | OFF    | ON        | OFF      | OFF      | internal only`,
      },
    }),
    buildGuideSection({
      id: "notification-interface",
      number: "1.5",
      title: "Notification and interface preferences",
      subtitle:
        "The settings that make Claude faster to reach and easier to use daily",
      takeaway:
        "Friction in reaching Claude determines whether you use it or open another tab — optimise access, not just prompts.",
      why: "Thirty seconds saved per open × 20 opens/day is hours per month.",
      paragraphs: [
        [
          s("Pin Claude (browser PWA or desktop app), set keyboard shortcuts where available, and tune notifications so you only get interrupted for async jobs that matter."),
        ],
        [
          s("Dark mode, font size, and sidebar defaults reduce fatigue on long sessions. Mobile vs desktop: reserve phone for capture and quick Q&A; deep artifact work on desktop."),
        ],
      ],
      workflowSteps: [
        "Install desktop or PWA if you use Claude daily.",
        "Disable non-essential notifications.",
        "Bookmark your primary Project — not just claude.ai/new.",
      ],
    }),
    buildGuideSection({
      id: "api-key-claude-ai",
      number: "1.6",
      title: "API key management for Claude.ai",
      subtitle: "Connecting your own API key and what that unlocks",
      takeaway:
        "Bring-your-own-key (where offered) shifts spend to your API console — useful for power users who already meter production usage.",
      why: "Teams mixing personal Pro with company API keys need one owner for keys, rotation, and spend alerts.",
      paragraphs: [
        [
          s("Some Claude.ai flows let you attach an "),
          x("Anthropic API key", "Bills your console account instead of or in addition to subscription limits."),
          s(
            " for higher caps or specific features. Keys live in console.anthropic.com — never in shared docs.",
          ),
        ],
        [
          s("Unlocks: predictable API pricing for heavy users, alignment with org key management. Risks: accidental spend without console alerts; key leakage if pasted in chats."),
        ],
      ],
      workflowSteps: [
        "Create a dedicated key named 'claude-ai-personal' in console.",
        "Set monthly spend cap and email alert.",
        "Rotate if ever pasted into a thread or screenshot.",
      ],
    }),
    buildGuideSection({
      id: "data-privacy-settings",
      number: "1.7",
      title: "Data and privacy settings",
      subtitle:
        "What Anthropic stores, what you can delete, and the controls that matter for sensitive work",
      takeaway:
        "Know what persists — chat history, memories, uploads — and delete on schedule for sensitive work.",
      why: "Compliance incidents are usually 'we didn't know it was stored there,' not model malice.",
      paragraphs: [
        [
          s("Review data retention and training policies for your plan (consumer vs commercial differ). Use "),
          x("chat deletion", "Remove conversations from your account history."),
          s(" and memory controls for client data. Do not upload what your policy forbids — settings cannot un-see a file."),
        ],
        [
          s("For regulated work: Enterprise/Team policies, SSO, and documented data handling beat consumer toggles."),
        ],
      ],
      workflowSteps: [
        "Read current Anthropic privacy docs for your tier.",
        "Define team rule: which data classes may enter Claude.ai.",
        "Monthly: purge completed sensitive threads.",
      ],
    }),
    buildGuideSection({
      id: "account-billing",
      number: "1.8",
      title: "Account and billing management",
      subtitle:
        "The controls that prevent billing surprises and plan management mistakes",
      takeaway:
        "Billing settings are where plan tier, payment method, and seat changes actually happen — check after every org change.",
      why: "Shadow Pro seats and forgotten annual renewals show up here, not in usage limits.",
      paragraphs: [
        [
          s("Centralise payment for teams; avoid five cards for five PMs. Align Claude.ai subscription with API console billing owners from Chapter 2."),
        ],
        [
          s("Before downgrade: export critical Projects. Before upgrade: confirm which friction you're solving (limits vs collaboration vs compliance)."),
        ],
      ],
      workflowSteps: [
        "Calendar quarterly billing review with finance.",
        "Document plan owner and escalation for limit hits.",
        "After team changes, reconcile seats within 48 hours.",
      ],
    }),
  ],
};
