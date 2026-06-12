import { useGa4Loader, useGa4PageViews } from "@/lib/analytics";

/** Mounts consent-gated GA4 — no UI. */
export function GoogleAnalytics() {
  useGa4Loader();
  useGa4PageViews();
  return null;
}
