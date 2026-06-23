import { CLAUDE_FULL_STACK } from "./playbooks/claude-full-stack";
import { COWORK_COO } from "./playbooks/cowork-coo";
import { AI_CUSTOMER_QUERY_TRIAGE } from "./playbooks/ai-customer-query-triage";
import type { UseCasePlaybook } from "./types";
import {
  guideChapterBySlug,
  hasGuideChapters,
  LEGACY_GUIDE_CHAPTER_SLUGS,
} from "./guide-helpers";

export const USE_CASE_PLAYBOOKS: UseCasePlaybook[] = [
  CLAUDE_FULL_STACK,
  COWORK_COO,
  AI_CUSTOMER_QUERY_TRIAGE,
];

const bySlug = new Map(USE_CASE_PLAYBOOKS.map((p) => [p.slug, p]));

export function useCaseBySlug(slug: string): UseCasePlaybook | undefined {
  const legacy = LEGACY_GUIDE_CHAPTER_SLUGS[slug];
  if (legacy) return bySlug.get(legacy.playbookSlug);
  return bySlug.get(slug);
}

export function resolveLegacyChapterSlug(
  slug: string,
): { playbookSlug: string; chapterSlug: string } | undefined {
  return LEGACY_GUIDE_CHAPTER_SLUGS[slug];
}

export function allUseCaseSlugs(): string[] {
  return USE_CASE_PLAYBOOKS.map((p) => p.slug);
}

export function allGuideChapterPaths(): { playbookSlug: string; chapterSlug: string }[] {
  const paths: { playbookSlug: string; chapterSlug: string }[] = [];
  for (const playbook of USE_CASE_PLAYBOOKS) {
    if (!hasGuideChapters(playbook)) continue;
    for (const chapter of playbook.guide.chapters) {
      paths.push({ playbookSlug: playbook.slug, chapterSlug: chapter.slug });
    }
  }
  return paths;
}

export function loadGuideChapter(
  playbookSlug: string,
  chapterSlug: string,
): { playbook: UseCasePlaybook; chapter: NonNullable<ReturnType<typeof guideChapterBySlug>> } | undefined {
  const playbook = bySlug.get(playbookSlug);
  if (!playbook || !hasGuideChapters(playbook)) return undefined;
  const chapter = guideChapterBySlug(playbook, chapterSlug);
  if (!chapter) return undefined;
  return { playbook, chapter };
}
