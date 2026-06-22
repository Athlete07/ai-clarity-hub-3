/** Audience copy — keep role lists in sync across meta, hero, and legal pages. */
export const AUDIENCE = {
  short: "PMs, founders, business leaders, and marketers",
  long: "product managers, founders, business leaders, and marketers",
} as const;

/** User-facing name and URL for the sequenced chapter library. */
export const AI_LITERACY = {
  name: "AI Literacy",
  href: "/ai-literacy" as const,
  tracks: "AI Literacy tracks",
  browse: "Browse AI Literacy",
  explore: "Explore AI Literacy",
  back: "Back to AI Literacy",
  backShort: "← AI Literacy",
} as const;

/** Primary repository — workflows, playbooks, and future migrated AI Literacy content. */
export const PLAYBOOK_REPOSITORY = {
  name: "Playbook Library",
  navLabel: "Playbook Library",
  shortLabel: "Library",
  href: "/use-cases" as const,
  /** Friendly alias — redirects to href. */
  aliasHref: "/library" as const,
  browse: "Browse the library",
  explore: "Explore the library",
  back: "Back to library",
  backShort: "← Library",
  tagline:
    "The single repository for AI workflows, implementation guides, and role playbooks.",
} as const;

/** @deprecated Use PLAYBOOK_REPOSITORY */
export const USE_CASES = PLAYBOOK_REPOSITORY;

/**
 * When false, AI Literacy moves out of primary nav (footer only).
 * Flip to false once the Playbook Library holds 10+ native workflows.
 */
export const SHOW_AI_LITERACY_IN_NAV = true;

/** FactorBeam brand assets — single source of truth for logo paths. */
export const BRAND = {
  name: "FactorBeam",
  /** Canonical production URL — used in structured data and absolute links. */
  siteUrl: "https://www.factorbeam.com",
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
    /** Icon mark only — transparent PNG, no wordmark */
    mark: "/logo-mark.png",
    /** Icon mark — slightly lifted for dark UI chrome */
    markDark: "/logo-mark-dark.png",
    /** Browser tab icon (ICO + PNG fallbacks) */
    favicon: "/favicon.ico",
    faviconPng32: "/favicon-32x32.png",
    appleTouchIcon: "/apple-touch-icon.png",
    icon192: "/icon-192.png",
    icon512: "/icon-512.png",
    /** Master transparent mark source (1024px max edge) */
    iconSource: "/factorbeam-icon-transparent-1024.png",
    /** Social preview image */
    og: "/og.png",
  },
  /**
   * Site chrome scale — mirrors CSS vars in styles.css (--header-height, --logo-height-*).
   * Body base is 15px; nav is 14px; header bar is 48px.
   */
  header: {
    heightPx: 48,
    heightSlimPx: 48,
    navFontPx: 14,
    logoFullPx: 20,
    logoHeroPx: 32,
    logoCompactPx: 20,
    logoMarkPx: 24,
    touchTargetPx: 44,
  },
} as const;

type HeadMeta = { title?: string; name?: string; property?: string; content: string; charSet?: string };

export function brandIconLinks() {
  return [
    { rel: "icon", href: BRAND.logo.favicon, sizes: "48x48" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: BRAND.logo.faviconPng32 },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: BRAND.logo.appleTouchIcon },
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
