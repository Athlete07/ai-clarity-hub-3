import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type GuideTocItem = {
  id: string;
  label: string;
  depth?: number;
};

type GuideChapterTocProps = {
  items: GuideTocItem[];
  mobile?: boolean;
};

export function GuideChapterToc({ items, mobile }: GuideChapterTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav
      className={cn(
        mobile
          ? "w-full"
          : "guide-chapter-toc sticky top-12 hidden h-[calc(100vh-3rem)] w-[220px] shrink-0 overflow-y-auto px-5 py-10 lg:block",
      )}
      aria-label="On this page"
    >
      <div className="guide-chapter-toc-panel">
        <p className="section-label">On this page</p>
        <ul className="mt-3 space-y-0.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "flex items-start gap-2 rounded-md px-2 py-1.5 text-[12.5px] leading-snug transition-colors",
                    item.depth ? "pl-4" : undefined,
                    item.depth && item.depth > 1 ? "pl-6 text-[12px]" : undefined,
                    isActive
                      ? "bg-purple-light/60 font-medium text-purple-dark dark:bg-purple-light/10 dark:text-purple"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "mt-1.5 h-1 w-1 shrink-0 rounded-full",
                      isActive ? "bg-purple" : "bg-muted-foreground/30",
                    )}
                    aria-hidden
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/** Collapsible on-page TOC for mobile — below hero */
export function GuideChapterTocMobile({ items }: { items: GuideTocItem[] }) {
  const [open, setOpen] = useState(false);

  if (!items.length) return null;

  return (
    <div className="mb-8 rounded-xl border border-border bg-card lg:hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left text-[13px] font-medium"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        On this page
        <span className="text-muted-foreground">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-border px-2 pb-3">
          <GuideChapterToc items={items} mobile />
        </div>
      )}
    </div>
  );
}
