/** Audience copy — keep role lists in sync across meta, hero, and legal pages. */
export const AUDIENCE = {
  short: "PMs, founders, business leaders, and marketers",
  long: "product managers, founders, business leaders, and marketers",
} as const;

/** User-facing name for the sequenced chapter library (routes stay at /executive-kb). */
export const AI_LITERACY = {
  name: "AI Literacy",
  tracks: "AI Literacy tracks",
  browse: "Browse AI Literacy",
  explore: "Explore AI Literacy",
  back: "Back to AI Literacy",
  backShort: "← AI Literacy",
} as const;

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
   * Site chrome scale — mirrors CSS vars in styles.css (--header-height, --logo-height-*).
   * Body base is 15px; nav is 14px; header bar is 56px.
   */
  header: {
    heightPx: 56,
    heightSlimPx: 48,
    navFontPx: 14,
    logoFullPx: 24,
    logoHeroPx: 32,
    logoCompactPx: 20,
    logoMarkPx: 24,
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
