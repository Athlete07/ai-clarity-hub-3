import type { GuideChapter } from "./guide-types";
import {
  plainFromSpanParts,
  sanitizeForSpeech,
  truncateWords,
  wordCount,
} from "./audio-brief-narrative";
import { splitSynopsisParagraphs } from "./audio-brief-premium";

/** ServiceNow ch01 reference: 8 paragraphs, ~500 words, story-first editorial brief. */
export const EDITORIAL_CHAPTER_WORDS_MIN = 400;
export const EDITORIAL_CHAPTER_WORDS_MAX = 560;
const PARAGRAPH_WORD_CAP = 78;

function normalizeScript(text: string): string {
  return sanitizeForSpeech(text.replace(/\s+/g, " ").replace(/\.\s*\./g, ".").trim());
}

function lowerFirst(text: string): string {
  const t = text.trim();
  if (!t) return t;
  return t.charAt(0).toLowerCase() + t.slice(1);
}

function capParagraph(text: string, maxWords = PARAGRAPH_WORD_CAP): string {
  return truncateWords(normalizeScript(text), maxWords);
}

function fitEditorialParagraphs(paragraphs: string[]): string {
  const capped = paragraphs.map((p) => capParagraph(p)).filter(Boolean);

  let result = [...capped];
  while (wordCount(result.join(" ")) > EDITORIAL_CHAPTER_WORDS_MAX) {
    const longestIdx = result.reduce(
      (best, p, i) => (wordCount(p) > wordCount(result[best]) ? i : best),
      0,
    );
    const longest = result[longestIdx];
    const trimmed = truncateWords(longest, Math.max(38, wordCount(longest) - 12));
    if (trimmed === longest) break;
    result[longestIdx] = trimmed;
  }

  return result.join("\n\n");
}

function firstTakeaway(chapter: GuideChapter, conceptIndex: number): string {
  const takeaway = chapter.concepts[conceptIndex]?.sections[0]?.takeaway;
  return takeaway ? lowerFirst(takeaway) : "";
}

function hookParagraph(playbookTitle: string, chapter: GuideChapter): string {
  const pain =
    chapter.businessContext.length > 0
      ? truncateWords(plainFromSpanParts(chapter.businessContext), 32)
      : lowerFirst(chapter.subtitle);

  if (chapter.number === 1) {
    return capParagraph(
      `${pain} Chapter one of ${playbookTitle} exists to break that habit. It is not a product tour. It is the mental model you need before tactics or production decisions.`,
    );
  }

  return capParagraph(
    `${pain} Chapter ${chapter.number} of ${playbookTitle} — ${chapter.title} — gives you the story before the deep read. It is the through-line that turns this chapter into production decisions.`,
  );
}

function centralArgumentParagraph(chapter: GuideChapter): string {
  return capParagraph(
    `The chapter's central argument is that ${lowerFirst(chapter.keyInsight)} ${firstTakeaway(chapter, 0)}`,
  );
}

function reframeParagraph(chapter: GuideChapter): string {
  const first = chapter.concepts[0];
  const primary = first?.sections[0]?.takeaway;
  const why = first?.sections[0]?.why;

  if (primary && why) {
    return capParagraph(
      `You begin by reframing ${first.title.toLowerCase()}: ${lowerFirst(primary)} This matters because ${lowerFirst(why)}`,
    );
  }

  if (chapter.intro.length > 0) {
    return capParagraph(
      `You begin by reframing the problem: ${truncateWords(plainFromSpanParts(chapter.intro), 40)}`,
    );
  }

  return capParagraph(
    `You begin with ${first?.title.toLowerCase() ?? "the foundation"}: ${firstTakeaway(chapter, 0)}`,
  );
}

function ecosystemMapParagraph(chapter: GuideChapter): string {
  const mid = chapter.concepts[Math.min(1, chapter.concepts.length - 1)];
  const midTakeaway = mid?.sections[0]?.takeaway;

  if (chapter.architecture?.title) {
    return capParagraph(
      `The chapter maps ${chapter.architecture.title.toLowerCase()} — ${lowerFirst(chapter.architecture.caption)}${midTakeaway ? ` — including ${lowerFirst(mid?.title ?? "")}: ${lowerFirst(midTakeaway)}` : ""}`,
    );
  }

  if (chapter.diagrams[0]) {
    return capParagraph(
      `The chapter maps ${chapter.diagrams[0].title.toLowerCase()} — ${lowerFirst(chapter.diagrams[0].caption)}`,
    );
  }

  return capParagraph(
    `The chapter maps ${mid?.title.toLowerCase() ?? "the operating model"}: ${midTakeaway ? lowerFirst(midTakeaway) : lowerFirst(chapter.subtitle)}`,
  );
}

function secondThreadParagraph(chapter: GuideChapter): string {
  const lateIndex = Math.min(chapter.concepts.length - 1, 2);
  const late = chapter.concepts[lateIndex];
  const takeaway = late?.sections[0]?.takeaway;

  if (takeaway) {
    return capParagraph(
      `A second thread goes deeper on ${late.title.toLowerCase()}: ${lowerFirst(takeaway)}`,
    );
  }

  const failure = chapter.failurePoints[0];
  if (failure) {
    return capParagraph(
      `A second thread addresses what breaks: ${lowerFirst(failure.problem)} The recovery path is ${lowerFirst(failure.fix)}`,
    );
  }

  return capParagraph(`A second thread ties the chapter together: ${lowerFirst(chapter.keyInsight)}`);
}

function illustrationParagraph(chapter: GuideChapter): string {
  if (chapter.caseStudy?.title) {
    return capParagraph(
      `You will see this grounded in ${chapter.caseStudy.title}. ${truncateWords(chapter.caseStudy.scenario, 18)} ${truncateWords(chapter.caseStudy.after, 18)}`,
    );
  }

  if (chapter.diagrams[0]) {
    return capParagraph(
      `In the full article, the ${chapter.diagrams[0].title} diagram makes the architecture concrete: ${lowerFirst(chapter.diagrams[0].caption)}`,
    );
  }

  return capParagraph(
    `The full article includes workflows, diagrams, and copy-paste artifacts that make ${chapter.title.toLowerCase()} operational.`,
  );
}

function audienceParagraph(chapter: GuideChapter): string {
  const criterion = chapter.decisionCriteria[0];
  if (criterion) {
    const question = sanitizeForSpeech(criterion.question).replace(/\?+$/, "");
    const answer = sanitizeForSpeech(criterion.yesMeans);
    return capParagraph(
      `If ${lowerFirst(question)}, this chapter is the benchmark. ${lowerFirst(answer)}`,
    );
  }

  return capParagraph(
    `If ${lowerFirst(chapter.subtitle)}, this chapter is written for practitioners who need the story before implementation.`,
  );
}

function closingParagraph(chapter: GuideChapter): string {
  const minutes = chapter.readingMinutes;
  return capParagraph(
    minutes
      ? `Listen here for the story and the through-line. Open the full chapter — about ${minutes} minutes with diagrams, workflows, and artifacts — when you are ready to implement.`
      : "Listen here for the story and the through-line. Open the full chapter when you are ready to implement with diagrams and artifacts.",
    58,
  );
}

/**
 * Builds an 8-paragraph editorial chapter brief — same audio format as ServiceNow chapter 1.
 */
export function buildEditorialChapterSynopsis(
  playbookTitle: string,
  chapter: GuideChapter,
): string {
  const paragraphs = [
    hookParagraph(playbookTitle, chapter),
    centralArgumentParagraph(chapter),
    reframeParagraph(chapter),
    ecosystemMapParagraph(chapter),
    secondThreadParagraph(chapter),
    illustrationParagraph(chapter),
    audienceParagraph(chapter),
    closingParagraph(chapter),
  ];

  return fitEditorialParagraphs(paragraphs);
}

export function editorialChapterParagraphs(
  playbookTitle: string,
  chapter: GuideChapter,
): string[] {
  return splitSynopsisParagraphs(buildEditorialChapterSynopsis(playbookTitle, chapter));
}
