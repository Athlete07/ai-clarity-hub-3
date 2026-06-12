import { flushTelemetry, flushTelemetryNow } from "./storage";
import { retryQueuedSync } from "./credentialIssuer";

let wired = false;

/** UI flag only — HRIS secrets live in Worker env, not the client bundle. */
export function hrisConfigured(): boolean {
  return import.meta.env.VITE_AO_HRIS_ENABLED === "true";
}

export function initAgentOverseerSync(): () => void {
  if (wired || typeof window === "undefined") return () => {};
  wired = true;

  const onOnline = () => {
    void retryQueuedSync();
    void flushTelemetry();
  };

  const onUnload = () => flushTelemetryNow();

  window.addEventListener("online", onOnline);
  window.addEventListener("beforeunload", onUnload);

  if (navigator.onLine) void onOnline();

  return () => {
    window.removeEventListener("online", onOnline);
    window.removeEventListener("beforeunload", onUnload);
    wired = false;
  };
}
