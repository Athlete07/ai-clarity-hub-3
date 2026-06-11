import { CREATOR } from "@/lib/creator";
import { cn } from "@/lib/utils";

/**
 * Head-and-shoulders crop aligned to common profile-photo standards
 * (LinkedIn 1:1, schema.org Person image, eyes in upper third).
 */
export const AUTHOR_PORTRAIT_OBJECT_POSITION = "center 22%";

const SIZES = {
  /** Chapter author card — large enough to read facial features without zoom. */
  card: "h-[7.5rem] w-[7.5rem] sm:h-[8.5rem] sm:w-[8.5rem]",
  /** Creator profile hero. */
  hero: "h-32 w-32 sm:h-40 sm:w-40",
} as const;

type AuthorPortraitSize = keyof typeof SIZES;

type AuthorPortraitProps = {
  size?: AuthorPortraitSize;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
};

export function AuthorPortrait({
  size = "card",
  className = "",
  loading = "lazy",
  priority = false,
}: AuthorPortraitProps) {
  const dim = size === "hero" ? 160 : 136;

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl hairline",
        SIZES[size],
        className,
      )}
      style={{ aspectRatio: "1 / 1" }}
    >
      <img
        src={CREATOR.photo}
        alt={`Portrait of ${CREATOR.name}, ${CREATOR.role}`}
        width={dim}
        height={dim}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: AUTHOR_PORTRAIT_OBJECT_POSITION }}
      />
    </div>
  );
}
