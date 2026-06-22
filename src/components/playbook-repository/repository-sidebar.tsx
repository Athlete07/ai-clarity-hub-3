import { cn } from "@/lib/utils";
import {
  REPOSITORY_CATEGORIES,
  REPOSITORY_ROLES,
  REPOSITORY_ROLE_LABELS,
  PLAYBOOK_KIND_LABELS,
  type PlaybookKind,
  type RepositoryCategoryId,
} from "@/lib/playbook-repository/taxonomy";
import type { UseCaseRole } from "@/lib/use-cases/types";

type FilterChipProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
};

function FilterChip({ active, onClick, children, count }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-[13px] transition-colors",
        active
          ? "bg-foreground text-background font-medium"
          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
      )}
    >
      <span>{children}</span>
      {count !== undefined && (
        <span
          className={cn(
            "ml-2 text-[11px] tabular-nums",
            active ? "text-background/70" : "text-muted-foreground/60",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export function RepositorySidebar({
  kinds,
  categories,
  roles,
  kindCounts,
  categoryCounts,
  roleCounts,
  onToggleKind,
  onToggleCategory,
  onToggleRole,
  onClear,
  hasFilters,
}: {
  kinds: PlaybookKind[];
  categories: RepositoryCategoryId[];
  roles: UseCaseRole[];
  kindCounts: Record<PlaybookKind, number>;
  categoryCounts: Record<RepositoryCategoryId, number>;
  roleCounts: Record<UseCaseRole, number>;
  onToggleKind: (k: PlaybookKind) => void;
  onToggleCategory: (c: RepositoryCategoryId) => void;
  onToggleRole: (r: UseCaseRole) => void;
  onClear: () => void;
  hasFilters: boolean;
}) {
  return (
    <aside className="repository-sidebar">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Browse
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] font-medium text-purple-dark hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mt-5">
        <p className="px-2.5 text-[11px] font-medium text-muted-foreground/80">Type</p>
        <ul className="mt-1 space-y-0.5">
          {(Object.keys(PLAYBOOK_KIND_LABELS) as PlaybookKind[]).map((kind) => (
            <li key={kind}>
              <FilterChip
                active={kinds.includes(kind)}
                onClick={() => onToggleKind(kind)}
                count={kindCounts[kind]}
              >
                {PLAYBOOK_KIND_LABELS[kind]}
              </FilterChip>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="px-2.5 text-[11px] font-medium text-muted-foreground/80">Category</p>
        <ul className="mt-1 max-h-[220px] space-y-0.5 overflow-y-auto">
          {REPOSITORY_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <FilterChip
                active={categories.includes(cat.id)}
                onClick={() => onToggleCategory(cat.id)}
                count={categoryCounts[cat.id]}
              >
                {cat.label}
              </FilterChip>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="px-2.5 text-[11px] font-medium text-muted-foreground/80">Role</p>
        <ul className="mt-1 space-y-0.5">
          {REPOSITORY_ROLES.map((role) => (
            <li key={role}>
              <FilterChip
                active={roles.includes(role)}
                onClick={() => onToggleRole(role)}
                count={roleCounts[role]}
              >
                {REPOSITORY_ROLE_LABELS[role]}
              </FilterChip>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
