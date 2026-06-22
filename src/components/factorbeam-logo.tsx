import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const WORDMARK_SIZE = {
  header: "text-[15px] sm:text-[16px]",
  hero: "text-[26px] sm:text-[32px]",
  compact: "text-[15px]",
  icon: "text-[15px]",
} as const;

type LogoContext = keyof typeof WORDMARK_SIZE;

/** Colored wordmark only — Factor (ink) + Beam (purple). No icon image. */
export function FactorBeamWordmark({
  context = "header",
  className,
  style,
}: {
  context?: LogoContext;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={cn(
        "site-wordmark inline-flex shrink-0 items-baseline font-semibold leading-none tracking-[-0.02em]",
        WORDMARK_SIZE[context],
        className,
      )}
      style={style}
      aria-label={BRAND.name}
    >
      <span className="text-foreground">Factor</span>
      <span className="text-purple-dark dark:text-purple">Beam</span>
    </span>
  );
}

type MarkProps = {
  size?: number;
  className?: string;
  variant?: "default" | "filled";
};

/** @deprecated Site UI uses wordmark only — kept for callers that imported the mark. */
export function FactorBeamMark({ size, className }: MarkProps) {
  return (
    <FactorBeamWordmark
      context="icon"
      className={className}
      style={size ? { fontSize: size } : undefined}
    />
  );
}

type LogoProps = {
  context?: LogoContext;
  markSize?: number;
  className?: string;
  showWordmark?: boolean;
  iconOnly?: boolean;
  /** @deprecated Use `context` instead */
  size?: number;
};

/** FactorBeam wordmark — icon image removed; colored name only. */
export function FactorBeamLogo({
  context = "header",
  markSize,
  className,
  showWordmark: _showWordmark = true,
  iconOnly = false,
  size,
}: LogoProps) {
  const resolvedContext = iconOnly || context === "icon" ? "icon" : context;
  const fontSize = markSize ?? size;

  return (
    <FactorBeamWordmark
      context={resolvedContext}
      className={cn(context === "header" && "site-logo", className)}
      style={fontSize ? { fontSize } : undefined}
    />
  );
}
