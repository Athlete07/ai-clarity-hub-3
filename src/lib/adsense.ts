/**
 * Google AdSense configuration & loader.
 *
 * Activate ads by setting env vars (see `.env.example`):
 *   VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 *   VITE_ADSENSE_SLOT_ARTICLE=1234567890   (optional display unit for chapters)
 *
 * Until a real publisher ID is set, no script loads and ad slots render nothing.
 *
 * Ads load ONLY after the user grants the "ads" consent category
 * (see src/lib/consent.ts) — GDPR / UK PECR compliant by default.
 */

import { useEffect, useRef } from "react";
import { useHasConsent } from "./consent";

/** Public publisher ID for factorbeam.com — safe in the client bundle. */
export const ADSENSE_CLIENT_DEFAULT = "ca-pub-4404421875307576";

// Public, non-secret. Override via VITE_ADSENSE_CLIENT in CI/host env if needed.
export const ADSENSE_CLIENT: string =
  (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined) ??
  ADSENSE_CLIENT_DEFAULT;

/** Display ad unit for in-article placements (chapter pages). */
export const ADSENSE_SLOT_ARTICLE: string =
  (import.meta.env.VITE_ADSENSE_SLOT_ARTICLE as string | undefined) ?? "";

const PUBLISHER_ID_RE = /^ca-pub-(\d{10,})$/;
const SLOT_ID_RE = /^\d+$/;

export function isAdsenseConfigured(): boolean {
  return PUBLISHER_ID_RE.test(ADSENSE_CLIENT);
}

export function isArticleAdSlotConfigured(): boolean {
  return isAdsenseConfigured() && SLOT_ID_RE.test(ADSENSE_SLOT_ARTICLE);
}

/** Numeric pub ID for ads.txt (without the ca-pub- prefix). */
export function adsensePublisherId(): string | null {
  const match = ADSENSE_CLIENT.match(PUBLISHER_ID_RE);
  return match ? match[1] : null;
}

/** Standard Google ads.txt line for direct AdSense inventory. */
export function adsTxtContent(): string | null {
  const pubId = adsensePublisherId();
  if (!pubId) return null;
  return `google.com, pub-${pubId}, DIRECT, f08c47fec0942fa0`;
}

const SCRIPT_ID = "google-adsense-script";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

let scriptLoadPromise: Promise<void> | null = null;

/**
 * Inject the AdSense loader script once, after consent. Resolves when the script
 * has loaded. Safe to call multiple times — dedupes by element id.
 */
export function loadAdsenseScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (!isAdsenseConfigured()) return Promise.resolve();

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    if (existing.dataset.loaded === "true") return Promise.resolve();
    if (!scriptLoadPromise) {
      scriptLoadPromise = new Promise((resolve) => {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => resolve(), { once: true });
      });
    }
    return scriptLoadPromise;
  }

  scriptLoadPromise = new Promise((resolve) => {
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
      ADSENSE_CLIENT,
    )}`;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });

  return scriptLoadPromise;
}

/** Remove the AdSense script when advertising consent is withdrawn. */
export function unloadAdsenseScript(): void {
  if (typeof window === "undefined") return;
  document.getElementById(SCRIPT_ID)?.remove();
  delete window.adsbygoogle;
  scriptLoadPromise = null;
}

/**
 * Hook: loads or unloads AdSense as the user grants or revokes ads consent.
 * Use only on chapter pages — do not mount from the root layout.
 * No-op when publisher ID is not configured.
 */
export function useAdsenseLoader(): void {
  const allowed = useHasConsent("ads");
  useEffect(() => {
    if (!allowed) {
      unloadAdsenseScript();
      return;
    }
    void loadAdsenseScript();
    return () => {
      unloadAdsenseScript();
    };
  }, [allowed]);
}

/**
 * Hook: pushes a single `(adsbygoogle = window.adsbygoogle || []).push({})`
 * once the script is ready. Used by <AdSlot /> for each `<ins>` it renders.
 */
export function useAdsenseSlot(active: boolean): void {
  const pushed = useRef(false);

  useEffect(() => {
    if (!active) {
      pushed.current = false;
      return;
    }
    if (pushed.current) return;
    if (typeof window === "undefined") return;

    let cancelled = false;

    const pushSlot = () => {
      if (cancelled || pushed.current) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.debug("[adsense] push deferred", e);
      }
    };

    void loadAdsenseScript().then(pushSlot);

    return () => {
      cancelled = true;
    };
  }, [active]);
}
