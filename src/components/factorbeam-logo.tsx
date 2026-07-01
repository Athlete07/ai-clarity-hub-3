import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const WORDMARK_SIZE = {
  header: "text-[15px] sm:text-[16px]",
  hero: "text-[26px] sm:text-[32px]",
  compact: "text-[15px]",
  icon: "text-[15px]",
} as const;

type LogoContext = keyof typeof WORDMARK_SIZE;
type BetaVariant = "default" | "onDark";

export function BetaTag({
  variant = "default",
  className,
}: {
  variant?: BetaVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "beta-tag inline-flex shrink-0 items-center rounded border px-1.5 py-px text-[9px] font-bold uppercase leading-none tracking-[0.08em]",
        variant === "onDark"
          ? "border-white/30 bg-white/10 text-white/90"
          : "border-purple/30 bg-purple/10 text-purple-dark dark:border-purple/40 dark:bg-purple/15 dark:text-purple",
        className,
      )}
      title="Beta version"
      aria-label="Beta version"
    >
      Beta
    </span>
  );
}

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
  showBeta?: boolean;
  betaVariant?: BetaVariant;
  /** @deprecated Use `context` instead */
  size?: number;
};

/** FactorBeam wordmark with optional BETA tag — used in header and site chrome. */
export function FactorBeamLogo({
  context = "header",
  markSize,
  className,
  showWordmark: _showWordmark = true,
  iconOnly = false,
  showBeta = true,
  betaVariant = "default",
  size,
}: LogoProps) {
  const resolvedContext = iconOnly || context === "icon" ? "icon" : context;
  const fontSize = markSize ?? size;

  return (
    <span
      className={cn(
        "site-logo-lockup inline-flex items-center gap-1.5",
        context === "header" && "site-logo",
        className,
      )}
    >
      <FactorBeamWordmark
        context={resolvedContext}
        style={fontSize ? { fontSize } : undefined}
      />
      {showBeta && BRAND.isBeta ? <BetaTag variant={betaVariant} /> : null}
    </span>
  );
}
