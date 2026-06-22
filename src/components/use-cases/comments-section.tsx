import { useCallback, useEffect, useState } from "react";
import { Heart, Loader2, MessageCircle } from "lucide-react";
import {
  getDisplayName,
  getUpvotedCommentIds,
  markCommentUpvoted,
  setDisplayName,
} from "@/lib/use-case-storage";
import {
  fetchComments,
  isSupabaseConfigured,
  postComment,
  upvoteComment,
  type UseCaseComment,
} from "@/lib/supabase";
import { cn } from "@/lib/utils";

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

export function CommentsSection({ playbookSlug }: { playbookSlug: string }) {
  const discussionLive = isSupabaseConfigured();
  const [comments, setComments] = useState<UseCaseComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [showNameField, setShowNameField] = useState(false);
  const [text, setText] = useState("");
  const [upvoted, setUpvoted] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await fetchComments(playbookSlug);
    setComments(data);
    setLoading(false);
  }, [playbookSlug]);

  useEffect(() => {
    if (!discussionLive) {
      setLoading(false);
      return;
    }

    const stored = getDisplayName();
    setName(stored);
    setShowNameField(!stored);
    setUpvoted(getUpvotedCommentIds());
    load();
  }, [discussionLive, load]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const displayName = name.trim();
    const commentText = text.trim();
    if (!displayName) {
      setShowNameField(true);
      setError("Please enter a display name.");
      return;
    }
    if (!commentText) return;

    if (!isSupabaseConfigured()) return;

    setSubmitting(true);
    const created = await postComment({
      playbookSlug,
      displayName,
      commentText,
    });
    setSubmitting(false);

    if (!created) {
      setError("Could not post comment. Please try again.");
      return;
    }

    setDisplayName(displayName);
    setShowNameField(false);
    setText("");
    setComments((prev) => [created, ...prev]);
  }

  async function handleUpvote(comment: UseCaseComment) {
    if (upvoted.has(comment.id)) return;
    const ok = await upvoteComment(comment.id, comment.upvotes);
    if (!ok) return;
    markCommentUpvoted(comment.id);
    setUpvoted((prev) => new Set([...prev, comment.id]));
    setComments((prev) =>
      prev.map((c) =>
        c.id === comment.id ? { ...c, upvotes: c.upvotes + 1 } : c,
      ),
    );
  }

  if (!discussionLive) {
    return (
      <section>
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Discussion
        </h2>
        <div className="mt-6 rounded-xl border border-border bg-muted/30 px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <MessageCircle size={18} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-medium text-foreground">
                Discussion coming soon
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Shared comments for this playbook are not live yet. When they are,
                you&apos;ll be able to ask questions, share what worked, and see
                replies from other readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
        Discussion
        <span className="ml-2 text-[15px] font-normal text-muted-foreground">
          {comments.length}
        </span>
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {showNameField && (
          <div>
            <label
              htmlFor="comment-name"
              className="text-[12px] font-medium text-muted-foreground"
            >
              Your name (shown with your comment)
            </label>
            <input
              id="comment-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={64}
              placeholder="First name or nickname"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-[14px] text-foreground outline-none focus:border-purple/40 focus:ring-2 focus:ring-purple/10"
            />
          </div>
        )}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={4000}
          rows={4}
          placeholder="Tried this? Got stuck? Ask or share what happened."
          className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-[14px] leading-relaxed text-foreground outline-none focus:border-purple/40 focus:ring-2 focus:ring-purple/10"
        />
        {error && (
          <p className="text-[13px] text-error">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting || !text.trim()}
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Posting…
            </>
          ) : (
            "Post comment"
          )}
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {loading ? (
          <p className="text-[13px] text-muted-foreground">Loading comments…</p>
        ) : comments.length === 0 ? (
          <p className="text-[13px] text-muted-foreground">
            No comments yet — be the first to share how it went.
          </p>
        ) : (
          comments.map((comment) => (
            <article
              key={comment.id}
              className="border-b border-border py-6 last:border-0"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[13px] font-medium text-foreground">
                    {comment.display_name}
                  </span>
                  <span className="ml-2 text-[12px] text-muted-foreground">
                    {relativeTime(comment.created_at)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleUpvote(comment)}
                  disabled={upvoted.has(comment.id)}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] transition-colors",
                    upvoted.has(comment.id)
                      ? "text-purple"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  aria-label="Upvote comment"
                >
                  <Heart
                    size={14}
                    className={upvoted.has(comment.id) ? "fill-purple" : ""}
                  />
                  {comment.upvotes > 0 ? comment.upvotes : ""}
                </button>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground/90 whitespace-pre-wrap">
                {comment.comment_text}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
