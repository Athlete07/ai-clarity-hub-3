import { EXECUTIVE_KBS } from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { MARKETER_EXECUTIVE_KBS } from "@/lib/executive-kb-marketer";
import { conceptBySlug } from "@/lib/concepts";
import { guideChapterPath, hasGuideChapters } from "@/lib/use-cases/guide-helpers";
import { USE_CASE_PLAYBOOKS } from "@/lib/use-cases/registry";
import { REPOSITORY_CATALOG, type RepositoryCatalogEntry } from "./catalog";
import { PLAYBOOK_KIND_LABELS } from "./taxonomy";

export type RepositorySearchResult = {
  id: string;
  type: "catalog" | "tool" | "ai-literacy";
  title: string;
  subtitle: string;
  href: string;
  kindLabel?: string;
};

const ALL_KBS = [
  ...EXECUTIVE_KBS,
  ...FOUNDER_EXECUTIVE_KBS,
  ...BUSINESS_LEADER_EXECUTIVE_KBS,
  ...MARKETER_EXECUTIVE_KBS,
];

function buildSearchIndex(): RepositorySearchResult[] {
  const results: RepositorySearchResult[] = [];

  for (const entry of REPOSITORY_CATALOG) {
    results.push({
      id: `catalog:${entry.slug}`,
      type: "catalog",
      title: entry.title,
      subtitle: entry.summary,
      href: entry.href,
      kindLabel: PLAYBOOK_KIND_LABELS[entry.kind],
    });

    for (const tool of entry.tools) {
      results.push({
        id: `tool:${entry.slug}:${tool}`,
        type: "tool",
        title: tool,
        subtitle: entry.title,
        href: entry.href,
      });
    }

    const playbook = USE_CASE_PLAYBOOKS.find((p) => p.slug === entry.slug);
    if (playbook && hasGuideChapters(playbook)) {
      for (const chapter of playbook.guide.chapters) {
        results.push({
          id: `catalog:${entry.slug}:${chapter.slug}`,
          type: "catalog",
          title: `Ch ${chapter.number}: ${chapter.title}`,
          subtitle: playbook.title,
          href: guideChapterPath(playbook.slug, chapter.slug),
          kindLabel: "Chapter",
        });
      }
    }
  }

  for (const kb of ALL_KBS) {
    for (const chapter of kb.sequence) {
      const concept = conceptBySlug(chapter.slug);
      if (!concept) continue;
      results.push({
        id: `literacy:${chapter.slug}`,
        type: "ai-literacy",
        title: concept.shortTitle ?? concept.title,
        subtitle: kb.title,
        href: `/ai-literacy/${kb.id}/${chapter.slug}`,
        kindLabel: "Concept",
      });
    }
  }

  return results;
}

const SEARCH_INDEX = buildSearchIndex();

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

export function searchRepository(query: string): RepositorySearchResult[] {
  const q = normalize(query);
  if (!q) return [];

  return SEARCH_INDEX.filter((item) => {
    const haystack = normalize([item.title, item.subtitle, item.kindLabel ?? ""].join(" "));
    return q.split(/\s+/).every((word) => haystack.includes(word));
  }).slice(0, 20);
}

export function catalogEntryMatches(
  entry: RepositoryCatalogEntry,
  q: string,
): boolean {
  const normalized = normalize(q);
  if (!normalized) return true;
  const haystack = normalize(
    [
      entry.title,
      entry.summary,
      entry.tags.join(" "),
      entry.tools.join(" "),
      entry.searchText ?? "",
    ].join(" "),
  );
  return normalized.split(/\s+/).every((word) => haystack.includes(word));
}
