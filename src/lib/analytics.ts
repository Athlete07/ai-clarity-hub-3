/**
 * Google Analytics 4 (GA4) — consent-gated loader and SPA page views.
 *
 * Set the measurement ID via env (see `.env.example`):
 *   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * GA4 loads ONLY after the user grants the "analytics" consent category
 * (see src/lib/consent.ts).
 */

import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useHasConsent } from "./consent";

/** GA4 measurement ID for factorbeam.com — safe in the client bundle. */
export const GA4_MEASUREMENT_ID_DEFAULT = "G-TWXVPC5C8V";

export const GA4_MEASUREMENT_ID: string =
  (import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined) ??
  GA4_MEASUREMENT_ID_DEFAULT;

const MEASUREMENT_ID_RE = /^G-[A-Z0-9]+$/i;
const GTAG_SCRIPT_ID = "google-gtag-js";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isGa4Configured(): boolean {
  return MEASUREMENT_ID_RE.test(GA4_MEASUREMENT_ID);
}

function pagePath(pathname: string, search: string): string {
  return search ? `${pathname}${search}` : pathname;
}

function ensureGtagStub(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

let scriptLoadPromise: Promise<void> | null = null;

/** Inject the gtag.js loader after analytics consent. */
export function loadGa4Script(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (!isGa4Configured()) return Promise.resolve();

  ensureGtagStub();
  window.gtag!("js", new Date());
  window.gtag!("config", GA4_MEASUREMENT_ID, {
    send_page_view: false,
  });

  const existing = document.getElementById(GTAG_SCRIPT_ID) as HTMLScriptElement | null;
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
    s.id = GTAG_SCRIPT_ID;
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      GA4_MEASUREMENT_ID,
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

/** Remove GA4 when analytics consent is withdrawn. */
export function unloadGa4Script(): void {
  if (typeof window === "undefined") return;
  document.getElementById(GTAG_SCRIPT_ID)?.remove();
  delete window.dataLayer;
  delete window.gtag;
  scriptLoadPromise = null;
}

/** Send a page_view for SPA navigations. */
export function trackGa4PageView(pathname: string, search = ""): void {
  if (!isGa4Configured() || typeof window.gtag !== "function") return;
  const path = pagePath(pathname, search);
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

/** Loads or unloads GA4 when analytics consent changes. */
export function useGa4Loader(): void {
  const allowed = useHasConsent("analytics");
  useEffect(() => {
    if (allowed) {
      void loadGa4Script();
      return;
    }
    unloadGa4Script();
  }, [allowed]);
}

/** Tracks route changes as GA4 page views when analytics consent is granted. */
export function useGa4PageViews(): void {
  const allowed = useHasConsent("analytics");
  const { pathname, search } = useRouterState({
    select: (s) => ({
      pathname: s.location.pathname,
      search: s.location.search,
    }),
  });

  useEffect(() => {
    if (!allowed) return;
    void loadGa4Script().then(() => trackGa4PageView(pathname, search));
  }, [allowed, pathname, search]);
}
