import { Link } from "@tanstack/react-router";
import { AuthorPortrait } from "@/components/author-portrait";
import { CREATOR } from "@/lib/creator";
import {
  resolveAttribution,
  type ContentAttributionOverride,
} from "@/lib/content-attribution";
import { cn } from "@/lib/utils";

type ContentAttributionProps = {
  /** `chapter` — portrait card; `compact` — text + methodology link */
  variant?: "chapter" | "compact";
  override?: ContentAttributionOverride;
  /** Second line with AI disclosure (chapter variant only). */
  showDisclosure?: boolean;
  className?: string;
};

/**
 * Standard end-of-article attribution — portrait + vetted-by line.
 */
export function ContentAttribution({
  variant = "chapter",
  override,
  showDisclosure = false,
  className,
}: ContentAttributionProps) {
  const { name, role, brand, label } = resolveAttribution(override);

  const creditLine = (
    <>
      <span className="text-muted-foreground">{label} </span>
      <Link
        to="/creator"
        className="font-medium text-foreground transition-colors hover:text-purple"
      >
        {name}
      </Link>
      <span aria-hidden className="text-muted-foreground/40">
        {" "}
        ·{" "}
      </span>
      <span className="text-muted-foreground">{role}, </span>
      <span className="font-medium text-purple">{brand}</span>
    </>
  );

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "hairline rounded-xl bg-muted/20 px-5 py-4 text-center sm:px-6 sm:py-5",
          className,
        )}
      >
        <p className="text-[14px] leading-relaxed sm:text-[15px]">{creditLine}</p>
        <Link
          to="/about"
          hash="editorial-methodology"
          className="landing-text-cta mt-3 inline-block text-[13px]"
        >
          {CREATOR.methodologyCta.label}
        </Link>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "hairline flex items-center gap-4 rounded-xl bg-muted/20 px-5 py-4 sm:gap-5 sm:px-6 sm:py-5",
        className,
      )}
    >
      <Link
        to="/creator"
        aria-label={`View ${name}'s profile`}
        className="shrink-0 transition-opacity hover:opacity-90"
      >
        <AuthorPortrait size="card" />
      </Link>

      <div className="min-w-0">
        <p className="text-[15px] leading-snug sm:text-[16px]">{creditLine}</p>
        {showDisclosure ? (
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {CREATOR.aiDisclosure}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** @deprecated Use ContentAttribution — kept for existing imports. */
export function CreatorAttribution(props: Omit<ContentAttributionProps, "variant">) {
  return <ContentAttribution variant="chapter" {...props} />;
}
