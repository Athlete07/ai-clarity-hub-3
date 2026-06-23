import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPageHero } from "@/components/home/catalog-hero";
import { LandingPageShell } from "@/components/home/landing-page-shell";
import { ArrowRight } from "lucide-react";
import { AuthorPortrait } from "@/components/author-portrait";
import { BRAND } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";

export const Route = createFileRoute("/creator")({
  head: () => {
    const description = `${CREATOR.hook[0]} ${CREATOR.hook[1]}`;

    const personJsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: CREATOR.name,
      jobTitle: CREATOR.title,
      description,
      image: CREATOR.photo,
      url: "/creator",
      email: `mailto:${CREATOR.socials.email}`,
      worksFor: {
        "@type": "Organization",
        name: BRAND.name,
      },
    };

    return {
      meta: [
        { title: `${CREATOR.pageName} — ${CREATOR.name} · ${BRAND.name}` },
        { name: "description", content: description },
        { name: "author", content: CREATOR.name },
        {
          property: "og:title",
          content: `${CREATOR.pageName} — ${CREATOR.name}`,
        },
        { property: "og:description", content: description },
        { property: "og:url", content: "/creator" },
        { property: "og:type", content: "profile" },
        { property: "og:image", content: CREATOR.photo },
        { property: "profile:first_name", content: CREATOR.name.split(" ")[0] },
        {
          property: "profile:last_name",
          content: CREATOR.name.split(" ").slice(1).join(" "),
        },
      ],
      links: [{ rel: "canonical", href: "/creator" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(personJsonLd),
        },
      ],
    };
  },
  component: CuratorBoxPage,
});

function CuratorBoxPage() {
  return (
    <LandingPageShell>
      <ContentPageHero
        eyebrow={CREATOR.pageName}
        title={CREATOR.name}
        subtitle={`${CREATOR.title} · ${CREATOR.brand} — ${CREATOR.location}`}
      >
        <AuthorPortrait size="spotlight" tone="editorial" priority />
      </ContentPageHero>

      <div className="catalog-body">
        <section className="mx-auto max-w-xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="landing-surface-card space-y-4 rounded-2xl p-8 text-center sm:p-10">
            <p className="text-[17px] font-medium leading-[1.55] tracking-[-0.01em] text-foreground sm:text-[18px]">
              {CREATOR.hook[0]}
            </p>
            <p className="text-[16px] leading-[1.65] text-muted-foreground sm:text-[17px]">
              {CREATOR.hook[1]}
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={CREATOR.methodologyCta.href}
              className="landing-text-cta inline-flex items-center gap-2"
            >
              <ArrowRight size={15} aria-hidden />
              {CREATOR.methodologyCta.label}
            </a>
          </div>

          <p className="mt-14 text-center text-[12px] leading-relaxed text-muted-foreground">
            Questions or corrections?{" "}
            <Link to="/contact" className="text-foreground/80 underline-offset-2 hover:underline">
              Get in touch
            </Link>
          </p>
        </section>
      </div>
    </LandingPageShell>
  );
}
