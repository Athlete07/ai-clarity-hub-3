import { Link } from "@tanstack/react-router";
import { AuthorPortrait } from "@/components/author-portrait";
import { CREATOR } from "@/lib/creator";

function AuthorByline({ className = "text-[13px]" }: { className?: string }) {
  return (
    <p className={`${className} text-muted-foreground`}>
      By{" "}
      <Link
        to="/creator"
        className="font-medium text-foreground transition-colors hover:text-purple"
      >
        {CREATOR.name}
      </Link>
      <span aria-hidden className="text-muted-foreground/50">
        {" "}
        ·{" "}
      </span>
      {CREATOR.role}
    </p>
  );
}

/**
 * Author attribution for chapter pages — same flex card on every chapter.
 */
export function CreatorAttribution() {
  return (
    <div className="hairline flex items-center gap-5 rounded-xl bg-card/60 p-5 sm:gap-6 sm:p-6">
      <Link
        to="/creator"
        aria-label={`View ${CREATOR.name}'s profile`}
        className="transition-opacity hover:opacity-90"
      >
        <AuthorPortrait size="card" />
      </Link>
      <div className="min-w-0">
        <AuthorByline className="text-[15px] sm:text-[16px]" />
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/75 sm:text-[14px]">
          {CREATOR.shortBio}
        </p>
      </div>
    </div>
  );
}
