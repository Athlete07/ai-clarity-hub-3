import { USE_CASE_PLAYBOOKS } from "./registry";
import type { UseCaseRole } from "./types";
import { queryRepository, EMPTY_REPOSITORY_QUERY } from "@/lib/playbook-repository/query";
import { buildRepositoryCatalog } from "@/lib/playbook-repository/catalog";

/** @deprecated Use queryRepository from playbook-repository */
export function filterUseCasePlaybooks(opts: {
  roles: UseCaseRole[];
  query: string;
}) {
  const catalog = buildRepositoryCatalog();
  const result = queryRepository(catalog, {
    ...EMPTY_REPOSITORY_QUERY,
    q: opts.query,
    roles: opts.roles,
  });
  return USE_CASE_PLAYBOOKS.filter((p) =>
    result.items.some((item) => item.slug === p.slug),
  );
}
