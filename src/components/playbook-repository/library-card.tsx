import { cn } from "@/lib/utils";

export const LIBRARY_CARD_CLASS = cn(
  "repository-card landing-surface-card landing-surface-card-hover group flex h-full flex-col rounded-2xl p-6 transition-all sm:p-7",
  "hover:-translate-y-1",
);

export function LibraryCardShell({
  children,
  className,
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "button";
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <Component className={cn(LIBRARY_CARD_CLASS, className)} {...props}>
      {children}
    </Component>
  );
}

export function LibraryCardHeader({
  badge,
  action,
}: {
  badge: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      {badge}
      {action}
    </div>
  );
}

export function LibraryCardBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}

export function LibraryCardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "mt-3 text-[17px] font-medium leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-purple-dark sm:text-[18px]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function LibraryCardSummary({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 flex-1 line-clamp-3 text-[14px] leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function LibraryCardFooter({
  meta,
  trailing,
}: {
  meta: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
      <p className="text-[12px] text-muted-foreground/75">{meta}</p>
      {trailing}
    </div>
  );
}
