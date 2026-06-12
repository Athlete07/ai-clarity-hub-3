/** FactorBeam brand assets — single source of truth for logo paths. */
export const BRAND = {
  name: "FactorBeam",
  tagline: "Understand AI enough to ship.",
  colors: {
    primary: "#534AB7",
    secondary: "#6B5FD4",
    deep: "#3C3489",
    ink: "#1F1F1F",
    muted: "#6B7280",
  },
  logo: {
    /** Official horizontal logo — transparent, for light backgrounds */
    full: "/factorbeam-logo-light.png",
    /** Horizontal logo — transparent, lightened wordmark for dark backgrounds */
    fullDark: "/factorbeam-logo-dark.png",
    /** Icon mark only — cropped from official logo */
    mark: "/logo-mark.png",
    /** Icon mark — lightened for dark backgrounds */
    markDark: "/logo-mark-dark.png",
    /** Browser tab / PWA icon */
    favicon: "/favicon.png",
    /** Social preview image */
    og: "/og.png",
  },
  /**
   * Site header scale — aligned with Material (64dp bar, 14sp nav)
   * and WCAG 2.2 (44px minimum touch targets).
   */
  header: {
    heightPx: 64,
    heightSlimPx: 56,
    navFontPx: 14,
    /** Full horizontal logo — main nav bar */
    logoFullPx: 48,
    /** Home hero, 404, error states */
    logoHeroPx: 72,
    /** Footer and compact chrome */
    logoCompactPx: 40,
    /** Icon-only — slim chapter header, inline marks */
    logoMarkPx: 44,
    touchTargetPx: 44,
  },
} as const;

type HeadMeta = { title?: string; name?: string; property?: string; content: string; charSet?: string };

export function brandIconLinks() {
  return [
    { rel: "icon", href: BRAND.logo.favicon, type: "image/png" },
    { rel: "apple-touch-icon", href: BRAND.logo.favicon },
    { rel: "manifest", href: "/site.webmanifest" },
  ] as const;
}

export function brandOgMeta(): HeadMeta[] {
  const alt = `${BRAND.name} — ${BRAND.tagline}`;
  return [
    { property: "og:image", content: BRAND.logo.og },
    { property: "og:image:alt", content: alt },
    { name: "twitter:image", content: BRAND.logo.og },
    { name: "twitter:image:alt", content: alt },
  ];
}
