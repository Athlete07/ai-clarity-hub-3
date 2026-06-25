import type { GuideChapter, GuidePlaybook } from "./guide-types";
import type { UseCasePlaybook } from "./types";

/** Old per-chapter slugs → unified playbook + chapter slug. */
export const LEGACY_GUIDE_CHAPTER_SLUGS: Record<
  string,
  { playbookSlug: string; chapterSlug: string }
> = {
  "claude-full-stack-ch01-mental-model": {
    playbookSlug: "claude-full-stack",
    chapterSlug: "ch01-mental-model",
  },
  "claude-full-stack-ch02-plans-pricing": {
    playbookSlug: "claude-full-stack",
    chapterSlug: "ch02-plans-pricing",
  },
};

export function guideChapterPath(playbookSlug: string, chapterSlug: string): string {
  return `/library/${playbookSlug}/${chapterSlug}`;
}

export function guideOverviewPath(playbookSlug: string): string {
  return `/library/${playbookSlug}`;
}

export function hasGuideChapters(
  playbook: UseCasePlaybook,
): playbook is UseCasePlaybook & { guide: GuidePlaybook } {
  return Boolean(playbook.guide && playbook.guide.chapters.length > 0);
}

export function guideChapterBySlug(
  playbook: UseCasePlaybook,
  chapterSlug: string,
): GuideChapter | undefined {
  return playbook.guide?.chapters.find((c) => c.slug === chapterSlug);
}

export function firstGuideChapter(playbook: UseCasePlaybook): GuideChapter | undefined {
  return playbook.guide?.chapters[0];
}

/** Library cards and catalog hrefs land on the guide overview; use entryChapterSlug to start reading. */
export function playbookEntryPath(playbook: UseCasePlaybook): string {
  if (hasGuideChapters(playbook)) return guideOverviewPath(playbook.slug);
  return `/library/${playbook.slug}`;
}

export function guideStartChapterPath(playbook: UseCasePlaybook): string | undefined {
  const first = firstGuideChapter(playbook);
  if (!first) return undefined;
  return guideChapterPath(playbook.slug, first.slug);
}

export function prevGuideChapter(
  playbook: UseCasePlaybook,
  chapterSlug: string,
): GuideChapter | undefined {
  const chapters = playbook.guide?.chapters;
  if (!chapters) return undefined;
  const idx = chapters.findIndex((c) => c.slug === chapterSlug);
  return idx > 0 ? chapters[idx - 1] : undefined;
}

export function nextGuideChapter(
  playbook: UseCasePlaybook,
  chapterSlug: string,
): GuideChapter | undefined {
  const chapters = playbook.guide?.chapters;
  if (!chapters) return undefined;
  const idx = chapters.findIndex((c) => c.slug === chapterSlug);
  return idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : undefined;
}

export function guideProgressKey(playbookSlug: string, chapterSlug: string): string {
  return `${playbookSlug}:${chapterSlug}`;
}

export function totalGuideReadingMinutes(playbook: UseCasePlaybook): number | undefined {
  const chapters = playbook.guide?.chapters;
  if (!chapters?.length) return playbook.readingMinutes;
  const sum = chapters.reduce((n, c) => n + (c.readingMinutes ?? 0), 0);
  return sum || playbook.readingMinutes;
}

