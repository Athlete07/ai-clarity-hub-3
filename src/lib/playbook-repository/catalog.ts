import type { UseCasePlaybook } from "@/lib/use-cases/types";
import { USE_CASE_PLAYBOOKS } from "@/lib/use-cases/registry";
import type { PlaybookKind, RepositoryCategoryId } from "./taxonomy";

/**
 * Lightweight catalog entry for browse, search, and pagination.
 * Full playbook content loads only on detail routes — keeps the index fast at 1,000+ items.
 */
export type RepositoryCatalogEntry = {
  slug: string;
  title: string;
  summary: string;
  kind: PlaybookKind;
  categoryId: RepositoryCategoryId;
  roles: UseCasePlaybook["roles"];
  tools: string[];
  tags: string[];
  timeLabel?: string;
  costLabel?: string;
  readingMinutes?: number;
  chapterCount?: number;
  /** Extra terms for repository search (from playbook searchKeywords). */
  searchText?: string;
  updatedAt: string;
  href: string;
  /** When set, entry is a mirror/link (e.g. AI Literacy chapter) not a native workflow page. */
  external?: boolean;
};

export function playbookToCatalogEntry(p: UseCasePlaybook): RepositoryCatalogEntry {
  return {
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    kind: p.kind,
    categoryId: p.categoryId,
    roles: p.roles,
    tools: p.tools,
    tags: p.tags,
    timeLabel: p.timeToImplement,
    costLabel: p.costEstimate,
    readingMinutes: p.readingMinutes,
    chapterCount: p.guide?.chapters.length,
    searchText: p.searchKeywords.join(" "),
    updatedAt: p.updatedAt,
    href: `/use-cases/${p.slug}`,
  };
}

/** Single source of truth for repository browse — extend as playbooks and migrated literacy entries land. */
export function buildRepositoryCatalog(): RepositoryCatalogEntry[] {
  return USE_CASE_PLAYBOOKS.map(playbookToCatalogEntry);
}

export const REPOSITORY_CATALOG = buildRepositoryCatalog();

export function repositoryStats(catalog: RepositoryCatalogEntry[]) {
  const kinds = new Set(catalog.map((e) => e.kind));
  const categories = new Set(catalog.map((e) => e.categoryId));
  const roles = new Set(catalog.flatMap((e) => e.roles));
  return {
    total: catalog.length,
    kinds: kinds.size,
    categories: categories.size,
    roles: roles.size,
  };
}
