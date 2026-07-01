import type { ExplainSpan } from "@/lib/concepts";
import type { GuideChapter } from "./guide-types";
import type { UseCasePlaybook } from "./types";
import { splitSynopsisParagraphs } from "./audio-brief-premium";

/** ~5–6 min at measured Edge TTS pace with editorial pacing (~125 words/min). */
export const CHAPTER_BRIEF_TARGET_WORDS_MIN = 620;
export const CHAPTER_BRIEF_TARGET_WORDS_MAX = 720;
export const OVERVIEW_BRIEF_TARGET_WORDS_MIN = 480;
export const OVERVIEW_BRIEF_TARGET_WORDS_MAX = 580;

export const TTS_WORDS_PER_MINUTE = 125;

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function truncateWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}.`;
}

export function plainFromSpanParts(parts: (string | ExplainSpan)[]): string {
  return parts
    .map((part) => (typeof part === "string" ? part : `${part.text}. ${part.explain}`))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Strip syllabus phrasing that sounds wrong in spoken audio. */
export function sanitizeForSpeech(text: string): string {
  return text
    .replace(/§[\d.]+/g, "")
    .replace(/\bConcepts?\s+\d+(?:\s*[–-]\s*\d+)?(?:\s*\([^)]*\))?/gi, "")
    .replace(/\bConcept\s+\d+(?:\s*\([^)]*\))?/gi, "")
    .replace(/\bTakeaway:\s*/gi, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .trim();
}

function normalizeScript(text: string): string {
  return sanitizeForSpeech(text.replace(/\s+/g, " ").replace(/\.\s*\./g, ".").trim());
}

function lowerFirst(text: string): string {
  const t = text.trim();
  if (!t) return t;
  return t.charAt(0).toLowerCase() + t.slice(1);
}

function fitParagraphWordCount(paragraphs: string[], maxWords: number): string {
  const result: string[] = [];
  let used = 0;
  for (const paragraph of paragraphs) {
    const p = normalizeScript(paragraph);
    const w = wordCount(p);
    if (used + w > maxWords) {
      const remaining = maxWords - used;
      if (remaining > 40) result.push(truncateWords(p, remaining));
      break;
    }
    result.push(p);
    used += w;
  }
  return result.join("\n\n");
}

const STORY_TRANSITIONS = [
  "The story begins with",
  "From there, the chapter shows",
  "You then learn",
  "A second thread explains",
  "The argument develops around",
  "Later, the chapter addresses",
  "It closes by examining",
];

function conceptStorySentences(concept: GuideChapter["concepts"][number]): string[] {
  const sentences: string[] = [];
  const primary = concept.sections[0];
  const secondary = concept.sections[1];

  if (primary?.takeaway) {
    sentences.push(lowerFirst(primary.takeaway));
  } else if (concept.subtitle) {
    sentences.push(lowerFirst(concept.subtitle));
  }

  if (secondary?.takeaway) {
    sentences.push(lowerFirst(secondary.takeaway));
  } else if (primary?.why) {
    sentences.push(`because ${lowerFirst(primary.why)}`);
  }

  return sentences.filter(Boolean);
}

/** Weave concepts into story paragraphs — no syllabus openers or "Digging deeper". */
function weaveConceptStoryParagraphs(concepts: GuideChapter["concepts"]): string[] {
  if (concepts.length === 0) return [];

  const targetParagraphs = Math.min(4, Math.max(2, Math.ceil(concepts.length / 2)));
  const groupSize = Math.ceil(concepts.length / targetParagraphs);
  const paragraphs: string[] = [];

  for (let i = 0; i < concepts.length; i += groupSize) {
    const group = concepts.slice(i, i + groupSize);
    const transition = STORY_TRANSITIONS[paragraphs.length % STORY_TRANSITIONS.length];
    const theme =
      group.length === 1
        ? group[0].title.toLowerCase()
        : `${group[0].title.toLowerCase()} and related threads`;

    const body = group
      .flatMap((concept) => conceptStorySentences(concept))
      .filter(Boolean)
      .join(" ");

    paragraphs.push(normalizeScript(`${transition} ${theme}: ${body}`));
  }

  return paragraphs;
}

function decisionCriterionParagraph(
  criterion: GuideChapter["decisionCriteria"][number],
): string {
  const question = sanitizeForSpeech(criterion.question).replace(/\?+$/, "");
  const answer = sanitizeForSpeech(criterion.yesMeans);
  return normalizeScript(
    `This chapter matters most when ${lowerFirst(question)} — ${lowerFirst(answer)}`,
  );
}

export function buildNarrativeChapterSynopsis(
  playbookTitle: string,
  chapter: GuideChapter,
): string {
  const paragraphs: string[] = [];

  paragraphs.push(
    normalizeScript(
      `This brief tells the story of ${chapter.title} — chapter ${chapter.number} of ${playbookTitle}. ${chapter.subtitle}`,
    ),
  );

  if (chapter.businessContext.length > 0) {
    paragraphs.push(truncateWords(plainFromSpanParts(chapter.businessContext), 95));
  }

  paragraphs.push(
    `At its core, the chapter argues that ${lowerFirst(sanitizeForSpeech(chapter.keyInsight))}`,
  );

  if (chapter.decisionCriteria[0]) {
    paragraphs.push(decisionCriterionParagraph(chapter.decisionCriteria[0]));
  }

  paragraphs.push(...weaveConceptStoryParagraphs(chapter.concepts));

  if (chapter.caseStudy?.title) {
    paragraphs.push(
      normalizeScript(
        `The chapter grounds the ideas in practice with ${chapter.caseStudy.title}. ${chapter.caseStudy.scenario} ${truncateWords(chapter.caseStudy.after, 55)}`,
      ),
    );
  }

  if (chapter.diagrams[0]) {
    paragraphs.push(
      normalizeScript(
        `In the full article, the ${chapter.diagrams[0].title} diagram makes the architecture concrete: ${lowerFirst(chapter.diagrams[0].caption)}`,
      ),
    );
  }

  if (chapter.architecture?.title) {
    paragraphs.push(
      normalizeScript(
        `You will also build a reference view of ${chapter.architecture.title.toLowerCase()} — ${lowerFirst(chapter.architecture.caption)}`,
      ),
    );
  }

  if (chapter.failurePoints[0]) {
    paragraphs.push(
      normalizeScript(
        `Watch for a common failure mode: ${lowerFirst(chapter.failurePoints[0].problem)} The chapter shows how to recover: ${lowerFirst(chapter.failurePoints[0].fix)}`,
      ),
    );
  }

  paragraphs.push(
    chapter.readingMinutes
      ? `That is the story this chapter tells. The full article adds about ${chapter.readingMinutes} minutes of reading with interactive diagrams, workflows, and copy-paste artifacts. Listen here for understanding; read there to implement.`
      : "Listen here for understanding; open the full chapter to implement with diagrams and artifacts.",
  );

  let script = fitParagraphWordCount(paragraphs, CHAPTER_BRIEF_TARGET_WORDS_MAX);

  if (wordCount(script) < CHAPTER_BRIEF_TARGET_WORDS_MIN) {
    const extras: string[] = [];
    for (const concept of chapter.concepts) {
      for (const section of concept.sections.slice(2, 3)) {
        extras.push(
          normalizeScript(
            `The chapter also reinforces ${section.title.toLowerCase()}: ${lowerFirst(section.takeaway)}`,
          ),
        );
        if (section.example) {
          extras.push(
            normalizeScript(
              `For example, ${section.example.title}: ${truncateWords(section.example.body, 35)}`,
            ),
          );
        }
      }
    }
    script = fitParagraphWordCount(
      [...splitSynopsisParagraphs(script), ...extras],
      CHAPTER_BRIEF_TARGET_WORDS_MAX,
    );
  }

  return script;
}

export function buildNarrativePlaybookOverviewSynopsis(
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> },
): string {
  const paragraphs: string[] = [
    normalizeScript(
      `${playbook.title} on FactorBeam is a practitioner playbook, not a feature list. ${playbook.summary}`,
    ),
    `The guide contains ${playbook.guide.chapters.length} chapters. Each is a standalone article, but together they form one adoption arc.`,
  ];

  if (playbook.heroBullets?.length) {
    paragraphs.push(
      normalizeScript(
        `Readers typically come for ${lowerFirst(playbook.heroBullets[0])}. ${playbook.heroBullets[1] ?? ""}`,
      ),
    );
  }

  const first = playbook.guide.chapters[0];
  const mid = playbook.guide.chapters[Math.floor(playbook.guide.chapters.length / 2)];
  const last = playbook.guide.chapters[playbook.guide.chapters.length - 1];

  paragraphs.push(
    `Start with ${first.title.toLowerCase()} if you need the foundation. Mid-playbook, ${mid.title.toLowerCase()} serves builders in the thick of implementation. ${last.title} helps when you are scaling, governing, or preparing for stakeholder conversations.`,
  );

  paragraphs.push(
    "Every chapter includes an audio synopsis that explains the story before the long read, plus diagrams and artifacts in the article. Choose the chapter that matches your current bottleneck, listen to orient, then read to ship.",
  );

  return fitParagraphWordCount(paragraphs, OVERVIEW_BRIEF_TARGET_WORDS_MAX);
}

export function estimateAudioDurationSeconds(transcript: string): number {
  const words = wordCount(transcript);
  return Math.max(60, Math.round((words / TTS_WORDS_PER_MINUTE) * 60));
}
