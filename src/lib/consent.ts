import { useEffect, useState, useCallback } from "react";
import { z } from "zod";

const CONSENT_KEY = "factorbeam:consent";
const CONSENT_VERSION = 1;

/** Fired when the user opens cookie preferences from the footer / privacy page. */
export const CONSENT_PANEL_OPEN_EVENT = "factorbeam:consent-panel-open";

export type ConsentCategory = "necessary" | "analytics" | "ads";

export type ConsentState = {
  version: number;
  decidedAt: number;
  necessary: true; // always on
  analytics: boolean;
  ads: boolean;
};

const DEFAULT: ConsentState = {
  version: CONSENT_VERSION,
  decidedAt: 0,
  necessary: true,
  analytics: false,
  ads: false,
};

const consentSchema = z.object({
  version: z.number(),
  decidedAt: z.number(),
  necessary: z.literal(true).optional(),
  analytics: z.boolean(),
  ads: z.boolean(),
});

function read(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const json: unknown = JSON.parse(raw);
    const parsed = consentSchema.safeParse(json);
    if (!parsed.success || parsed.data.version !== CONSENT_VERSION) return null;
    return { ...DEFAULT, ...parsed.data, necessary: true };
  } catch {
    return null;
  }
}

function write(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("factorbeam:consent-change"));
  } catch {
    /* noop */
  }
}

export function useConsent() {
  const [state, setState] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(read());
    setHydrated(true);
    const onChange = () => setState(read());
    window.addEventListener("factorbeam:consent-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("factorbeam:consent-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const save = useCallback((next: Partial<Omit<ConsentState, "version" | "necessary" | "decidedAt">>) => {
    const merged: ConsentState = {
      ...DEFAULT,
      ...(state ?? {}),
      ...next,
      version: CONSENT_VERSION,
      necessary: true,
      decidedAt: Date.now(),
    };
    write(merged);
    setState(merged);
  }, [state]);

  const acceptAll = useCallback(() => save({ analytics: true, ads: true }), [save]);
  const rejectAll = useCallback(() => save({ analytics: false, ads: false }), [save]);
  const reopen = useCallback(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent(CONSENT_PANEL_OPEN_EVENT));
  }, []);

  return {
    hydrated,
    decided: !!state && state.decidedAt > 0,
    consent: state ?? DEFAULT,
    save,
    acceptAll,
    rejectAll,
    reopen,
  };
}

export function useHasConsent(category: ConsentCategory): boolean {
  const { consent, decided } = useConsent();
  if (category === "necessary") return true;
  if (!decided) return false;
  return !!consent[category];
}
