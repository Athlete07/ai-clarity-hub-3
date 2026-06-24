import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPageHero } from "@/components/home/catalog-hero";
import { LandingPageShell } from "@/components/home/landing-page-shell";
import { LandingSectionLabel } from "@/components/home/landing-ui";
import { AuthorPortrait } from "@/components/author-portrait";
import { AUDIENCE, AI_LITERACY, brandOgMeta } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";
import { PLATFORM_ABOUT } from "@/lib/platform-about";
import { ArrowRight, BookOpen, Layers, PenLine, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${PLATFORM_ABOUT.pageName} — FactorBeam` },
      {
        name: "description",
        content: `FactorBeam cuts through AI hype for ${AUDIENCE.short}. Transparent methodology, stress-tested playbooks, and frameworks built for execution.`,
      },
      {
        property: "og:title",
        content: `${PLATFORM_ABOUT.pageName} — FactorBeam`,
      },
      {
        property: "og:description",
        content: PLATFORM_ABOUT.hero.subheadline,
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutThePlatform,
});

const METHODOLOGY_ICONS = [Layers, ShieldCheck, PenLine] as const;

function AboutThePlatform() {
  const { hero, enemy, methodology, conversion } = PLATFORM_ABOUT;

  return (
    <LandingPageShell>
      <ContentPageHero
        eyebrow={PLATFORM_ABOUT.pageName}
        title={hero.headline}
        subtitle={hero.subheadline}
      >
        <Link to={AI_LITERACY.href} className="landing-cta-on-aurora inline-flex items-center gap-2">
          Explore AI Literacy
          <ArrowRight size={15} />
        </Link>
      </ContentPageHero>

      <section className="landing-body-section-alt">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12">
          <LandingSectionLabel>{enemy.label}</LandingSectionLabel>
          <h2 className="landing-headline mt-5 text-balance">
            {enemy.title}
          </h2>
          <div className="mt-8 space-y-5">
            {enemy.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="editorial-methodology"
        className="landing-section scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <LandingSectionLabel>{methodology.label}</LandingSectionLabel>
            <h2 className="landing-headline mt-5">{methodology.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
              {methodology.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {methodology.steps.map((item, i) => {
              const Icon = METHODOLOGY_ICONS[i] ?? Layers;
              return (
                <div key={item.step} className="landing-surface-card landing-surface-card-hover rounded-2xl p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                      {item.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-light text-purple-dark dark:bg-purple-light/15 dark:text-purple">
                      <Icon size={16} aria-hidden />
                    </div>
                  </div>
                  <h3 className="mt-5 text-[17px] font-medium tracking-tight sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="landing-body-section">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="landing-surface-card overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-5">
              <div className="flex flex-col items-center justify-center bg-muted/40 px-8 py-12 lg:col-span-2 lg:py-16">
                <AuthorPortrait size="hero" loading="eager" priority />
                <p className="mt-5 text-[17px] font-medium tracking-tight">{CREATOR.name}</p>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  {CREATOR.title} · {CREATOR.brand}
                </p>
                <p className="mt-1 text-[12px] text-muted-foreground/80">{CREATOR.location}</p>
              </div>
              <div className="flex flex-col justify-center px-8 py-10 lg:col-span-3 lg:px-12 lg:py-14">
                <LandingSectionLabel>Who curates this</LandingSectionLabel>
                <p className="mt-4 text-[16px] leading-relaxed text-foreground/90 sm:text-[17px]">
                  {CREATOR.curatorBrief[0]}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                  {CREATOR.curatorBrief[1]}
                </p>
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {CREATOR.aiDisclosure}
                  </p>
                </div>
                <Link
                  to="/creator"
                  className="landing-text-cta mt-6 inline-flex items-center gap-1.5"
                >
                  Open Curator Box
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
          <div className="catalog-methodology">
            <div className="catalog-methodology-aurora" aria-hidden />
            <div className="relative">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Your next step
              </p>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-stretch sm:gap-6">
                <div className="landing-glass-card flex flex-1 flex-col rounded-2xl p-6 sm:p-7">
                  <h2 className="text-[18px] font-medium leading-snug tracking-tight text-white sm:text-[20px]">
                    {conversion.secondary.label}
                  </h2>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
                    {conversion.secondary.hint}
                  </p>
                  <Link
                    to={conversion.secondary.href}
                    className="landing-cta-ghost-on-aurora mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-start"
                  >
                    <BookOpen size={16} aria-hidden />
                    Explore AI Literacy
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingPageShell>
  );
}
