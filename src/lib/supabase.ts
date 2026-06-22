import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type UseCaseComment = {
  id: string;
  playbook_slug: string;
  display_name: string;
  comment_text: string;
  upvotes: number;
  created_at: string;
};

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
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("playbook_slug", playbookSlug)
    .order("created_at", { ascending: false });

  if (error) {
    console.warn("[comments] fetch failed:", error.message);
    return [];
  }
  return (data ?? []) as UseCaseComment[];
}

export async function fetchCommentCounts(): Promise<Record<string, number>> {
  const supabase = getSupabase();
  if (!supabase) return {};

  const { data, error } = await supabase.from("comments").select("playbook_slug");

  if (error || !data) return {};

  const counts: Record<string, number> = {};
  for (const row of data) {
    const slug = row.playbook_slug as string;
    counts[slug] = (counts[slug] ?? 0) + 1;
  }
  return counts;
}

export async function postComment(opts: {
  playbookSlug: string;
  displayName: string;
  commentText: string;
}): Promise<UseCaseComment | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("comments")
    .insert({
      playbook_slug: opts.playbookSlug,
      display_name: opts.displayName.trim(),
      comment_text: opts.commentText.trim(),
    })
    .select()
    .single();

  if (error) {
    console.warn("[comments] post failed:", error.message);
    return null;
  }
  return data as UseCaseComment;
}

export async function upvoteComment(
  id: string,
  currentUpvotes: number,
): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase) return false;

  const { error } = await supabase
    .from("comments")
    .update({ upvotes: currentUpvotes + 1 })
    .eq("id", id);

  if (error) {
    console.warn("[comments] upvote failed:", error.message);
    return false;
  }
  return true;
}
