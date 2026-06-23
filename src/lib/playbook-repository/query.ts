import type { UseCaseRole } from "@/lib/use-cases/types";
import type { RepositoryCatalogEntry } from "./catalog";
import {
  REPOSITORY_PAGE_SIZE,
  type PlaybookKind,
  type RepositoryCategoryId,
  type RepositorySort,
} from "./taxonomy";

export type RepositoryQuery = {
  q: string;
  kinds: PlaybookKind[];
  categories: RepositoryCategoryId[];
  roles: UseCaseRole[];
  sort: RepositorySort;
  page: number;
};

export type RepositoryQueryResult = {
  items: RepositoryCatalogEntry[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

function matchesSearch(entry: RepositoryCatalogEntry, q: string): boolean {
  if (!q) return true;
  const haystack = normalize(
    [
      entry.title,
      entry.summary,
      entry.tags.join(" "),
      entry.tools.join(" "),
      entry.kind,
      entry.categoryId,
    ].join(" "),
  );
  return q.split(/\s+/).every((word) => haystack.includes(word));
}

function sortEntries(
  entries: RepositoryCatalogEntry[],
  sort: RepositorySort,
): RepositoryCatalogEntry[] {
  const copy = [...entries];
  switch (sort) {
    case "title-asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return copy.sort((a, b) => b.title.localeCompare(a.title));
    case "newest":
      return copy.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
    case "recommended":
    default:
      return copy.sort((a, b) => {
        const feat = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
        if (feat !== 0) return feat;
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
  }
}

export function queryRepository(
  catalog: RepositoryCatalogEntry[],
  query: RepositoryQuery,
): RepositoryQueryResult {
  const q = normalize(query.q);

  let filtered = catalog.filter((entry) => {
    if (query.kinds.length > 0 && !query.kinds.includes(entry.kind)) return false;
    if (
      query.categories.length > 0 &&
      !query.categories.includes(entry.categoryId)
    ) {
      return false;
    }
    if (
      query.roles.length > 0 &&
      !query.roles.some((r) => entry.roles.includes(r))
    ) {
      return false;
    }
    return matchesSearch(entry, q);
  });

  filtered = sortEntries(filtered, query.sort);

  const total = filtered.length;
  const pageSize = REPOSITORY_PAGE_SIZE;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(1, query.page), totalPages);
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return { items, total, page, pageSize, totalPages };
}

export const EMPTY_REPOSITORY_QUERY: RepositoryQuery = {
  q: "",
  kinds: [],
  categories: [],
  roles: [],
  sort: "recommended",
  page: 1,
};
