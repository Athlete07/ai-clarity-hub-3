import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ContentPageHero } from "@/components/home/catalog-hero";
import { LandingMarquee } from "@/components/home/landing-ui";
import { AI_LITERACY } from "@/lib/brand";

const CONTACT_EMAIL = "contact.factorbeam@gmail.com";

export function LegalHero({
  title,
  description,
  lastUpdated,
}: {
  title: string;
  description: string;
  lastUpdated: string;
}) {
  return (
    <ContentPageHero
      eyebrow="Legal"
      title={title}
      subtitle={description}
      align="left"
      aside={
        <div>
          <p className="text-[12px] font-medium uppercase tracking-wider text-white/45">
            Last updated
          </p>
          <p className="mt-1 text-[15px] font-medium text-white">{lastUpdated}</p>
          <p className="mt-4 text-[13px] leading-relaxed text-white/55 lg:ml-auto lg:max-w-[280px]">
            Questions?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#C4B5FD] transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      }
    />
  );
}

export function LegalHighlightStrip({ items }: { items: { label: string; detail: string }[] }) {
  const stats = items.map((item) => ({ value: item.label, label: item.detail }));
  return <LandingMarquee stats={stats} />;
}

export function LegalDocumentLayout({
  toc,
  children,
  related,
}: {
  toc: { id: string; title: string }[];
  children: ReactNode;
  related: { label: string; to: "/privacy-policy" | "/terms-of-service"; description: string };
}) {
  return (
    <section className="catalog-body">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav
              aria-label="On this page"
              className="landing-surface-card sticky top-24 rounded-2xl p-5"
            >
              <p className="landing-section-label">On this page</p>
              <ul className="mt-4 space-y-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-md px-2 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border/60 pt-5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Related
                </p>
                <Link
                  to={related.to}
                  className="mt-2 block text-[13px] font-medium text-purple hover:underline"
                >
                  {related.label}
                </Link>
                <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
                  {related.description}
                </p>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <div className="space-y-5">{children}</div>

            <div className="landing-surface-card mt-8 rounded-2xl p-5 sm:p-6 lg:hidden">
              <p className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
                Related document
              </p>
              <Link
                to={related.to}
                className="mt-2 inline-flex items-center gap-1 text-[14px] font-medium text-purple hover:underline"
              >
                {related.label}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalSection({
  id,
  index,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  index: number;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <article id={id} className="landing-surface-card scroll-mt-24 rounded-2xl p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-light text-purple-dark dark:bg-purple-light/20 dark:text-purple">
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground/70">
              {String(index).padStart(2, "0")}
            </span>
            <h2 className="text-[18px] font-medium tracking-tight sm:text-[20px]">{title}</h2>
          </div>
          <LegalProse>{children}</LegalProse>
        </div>
      </div>
    </article>
  );
}

export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div className="legal-prose mt-4 space-y-3 text-[14.5px] leading-[1.75] text-muted-foreground sm:text-[15px]">
      {children}
    </div>
  );
}

export function LegalClosingCta({
  title,
  subtitle,
  primaryLabel = "Browse AI Literacy",
  primaryTo = AI_LITERACY.href,
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryTo?: typeof AI_LITERACY.href | "/contact";
  secondaryLabel?: string;
  secondaryTo?: "/contact" | "/privacy-policy" | "/terms-of-service";
}) {
  return (
    <section className="catalog-body">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="catalog-methodology text-center">
          <div className="catalog-methodology-aurora" aria-hidden />
          <div className="relative">
            <h2 className="text-[24px] font-medium tracking-tight text-white sm:text-[30px]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] text-white/70">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={primaryTo} className="landing-cta-on-aurora inline-flex items-center gap-2">
                {primaryLabel}
                <ArrowRight size={16} />
              </Link>
              {secondaryLabel && secondaryTo ? (
                <Link
                  to={secondaryTo}
                  className="landing-cta-ghost-on-aurora inline-flex items-center gap-2"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
