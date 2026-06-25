import { BRAND, PLAYBOOK_REPOSITORY } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";

export const SITE_ORIGIN = "https://factorbeam.com";

/** Optional per-playbook reviewer — defaults to CREATOR when unset. */
export type ContentAttributionOverride = {
  name?: string;
  role?: string;
  brand?: string;
};

export function resolveAttribution(override?: ContentAttributionOverride) {
  const [defaultRole, defaultBrand] = CREATOR.chapterCredit.split(", ");
  return {
    name: override?.name ?? CREATOR.name,
    role: override?.role ?? defaultRole,
    brand: override?.brand ?? defaultBrand,
    label: CREATOR.attributionLabel,
  };
}

export function contentAuthorJsonLd(override?: ContentAttributionOverride) {
  const { name } = resolveAttribution(override);
  return {
    "@type": "Person" as const,
    name,
    url: `${SITE_ORIGIN}/creator`,
  };
}

export function contentPublisherJsonLd() {
  return {
    "@type": "Organization" as const,
    name: BRAND.name,
    url: SITE_ORIGIN,
  };
}

export function workflowArticleJsonLd(
  playbook: { slug: string; title: string; summary: string },
  siteOrigin = SITE_ORIGIN,
) {
  const url = `${siteOrigin}${PLAYBOOK_REPOSITORY.href}/${playbook.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: playbook.title,
    description: playbook.summary,
    url,
    author: contentAuthorJsonLd(),
    publisher: contentPublisherJsonLd(),
    mainEntityOfPage: url,
  };
}

export function attributionFromPlaybook(playbook?: {
  attribution?: { reviewerName?: string; reviewerTitle?: string };
}): ContentAttributionOverride | undefined {
  if (!playbook?.attribution?.reviewerName) return undefined;
  const [, defaultBrand] = CREATOR.chapterCredit.split(", ");
  return {
    name: playbook.attribution.reviewerName,
    role: playbook.attribution.reviewerTitle ?? CREATOR.title,
    brand: defaultBrand,
  };
}
