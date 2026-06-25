import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  validateCommentText,
  validateDisplayName,
  validatePlaybookSlug,
} from "./comment-validation";

export type UseCaseComment = {
  id: string;
  playbook_slug: string;
  display_name: string;
  comment_text: string;
  upvotes: number;
  created_at: string;
};

const COMMENT_COLUMNS =
  "id,playbook_slug,display_name,comment_text,upvotes,created_at";

let client: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
  );
}

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (!client) {
    client = createClient(
      import.meta.env.VITE_SUPABASE_URL!,
      import.meta.env.VITE_SUPABASE_ANON_KEY!,
    );
  }
  return client;
}

export async function fetchComments(
  playbookSlug: string,
): Promise<UseCaseComment[]> {
  if (!validatePlaybookSlug(playbookSlug)) return [];

  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("comments")
    .select(COMMENT_COLUMNS)
    .eq("playbook_slug", playbookSlug)
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    console.warn("[comments] fetch failed:", error.message);
    return [];
  }
  return (data ?? []) as UseCaseComment[];
}

export async function fetchCommentCounts(): Promise<Record<string, number>> {
  const supabase = getSupabase();
  if (!supabase) return {};

  const { data, error } = await supabase.rpc("comment_counts_by_playbook");

  if (error || !data) {
    console.warn("[comments] counts failed:", error?.message);
    return {};
  }

  const counts: Record<string, number> = {};
  for (const row of data as Array<{
    playbook_slug: string;
    comment_count: number;
  }>) {
    counts[row.playbook_slug] = Number(row.comment_count) || 0;
  }
  return counts;
}

export async function postComment(opts: {
  playbookSlug: string;
  displayName: string;
  commentText: string;
}): Promise<UseCaseComment | null> {
  if (!validatePlaybookSlug(opts.playbookSlug)) return null;

  const displayName = validateDisplayName(opts.displayName);
  const commentText = validateCommentText(opts.commentText);
  if (!displayName || !commentText) return null;

  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("comments")
    .insert({
      playbook_slug: opts.playbookSlug,
      display_name: displayName,
      comment_text: commentText,
    })
    .select(COMMENT_COLUMNS)
    .single();

  if (error) {
    console.warn("[comments] post failed:", error.message);
    return null;
  }
  return data as UseCaseComment;
}

export async function upvoteComment(id: string): Promise<number | null> {
  if (!id) return null;

  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase.rpc("increment_comment_upvote", {
    target_id: id,
  });

  if (error) {
    console.warn("[comments] upvote failed:", error.message);
    return null;
  }
  return typeof data === "number" ? data : null;
}
