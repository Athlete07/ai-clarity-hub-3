/** Slug format enforced in Supabase RLS and client validation. */
export const PLAYBOOK_SLUG_RE = /^[a-z0-9][a-z0-9:._-]{0,127}$/;

const CONTROL_CHARS_RE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

export function stripControlChars(value: string): string {
  return value.replace(CONTROL_CHARS_RE, "");
}

export function validatePlaybookSlug(slug: string): boolean {
  return PLAYBOOK_SLUG_RE.test(slug);
}

export function validateDisplayName(name: string): string | null {
  const trimmed = stripControlChars(name).trim();
  if (trimmed.length < 1 || trimmed.length > 64) return null;
  return trimmed;
}

export function validateCommentText(text: string): string | null {
  const trimmed = stripControlChars(text).trim();
  if (trimmed.length < 1 || trimmed.length > 4000) return null;
  return trimmed;
}
