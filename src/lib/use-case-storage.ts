import { useCallback, useEffect, useState } from "react";

const USE_CASE_PROGRESS_KEY = "factorbeam_usecase_progress";
const DISPLAY_NAME_KEY = "factorbeam_display_name";
const UPVOTED_COMMENTS_KEY = "factorbeam_upvoted_comments";

export type UseCaseProgress = {
  [slug: string]: "in-progress" | "done";
};

const isBrowser = () => typeof window !== "undefined";

function readJson<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("factorbeam:storage", { detail: { key } }));
  } catch {
    // ignore
  }
}

export function useUseCaseProgress() {
  const [progress, setProgress] = useState<UseCaseProgress>({});

  useEffect(() => {
    setProgress(readJson<UseCaseProgress>(USE_CASE_PROGRESS_KEY, {}));
    const onChange = () =>
      setProgress(readJson<UseCaseProgress>(USE_CASE_PROGRESS_KEY, {}));
    window.addEventListener("factorbeam:storage", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("factorbeam:storage", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const markDone = useCallback((slug: string) => {
    const next = {
      ...readJson<UseCaseProgress>(USE_CASE_PROGRESS_KEY, {}),
      [slug]: "done" as const,
    };
    writeJson(USE_CASE_PROGRESS_KEY, next);
    setProgress(next);
  }, []);

  const markInProgress = useCallback((slug: string) => {
    const current = readJson<UseCaseProgress>(USE_CASE_PROGRESS_KEY, {});
    if (current[slug] === "done") return;
    const next = { ...current, [slug]: "in-progress" as const };
    writeJson(USE_CASE_PROGRESS_KEY, next);
    setProgress(next);
  }, []);

  return { progress, markDone, markInProgress };
}

export function getDisplayName(): string {
  return readJson<string>(DISPLAY_NAME_KEY, "");
}

export function setDisplayName(name: string) {
  writeJson(DISPLAY_NAME_KEY, name.trim());
}

export function getUpvotedCommentIds(): Set<string> {
  const ids = readJson<string[]>(UPVOTED_COMMENTS_KEY, []);
  return new Set(ids);
}

export function markCommentUpvoted(id: string) {
  const ids = readJson<string[]>(UPVOTED_COMMENTS_KEY, []);
  if (!ids.includes(id)) {
    writeJson(UPVOTED_COMMENTS_KEY, [...ids, id]);
  }
}
