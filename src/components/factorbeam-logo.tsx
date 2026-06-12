import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Height presets per layout context — tied to BRAND.header scale */
const LOGO_CONTEXT = {
  header: { height: BRAND.header.logoFullPx },
  hero: { height: BRAND.header.logoHeroPx },
  compact: { height: BRAND.header.logoCompactPx },
  icon: { height: BRAND.header.logoMarkPx },
} as const;

type LogoContext = keyof typeof LOGO_CONTEXT;

type MarkProps = {
  size?: number;
  className?: string;
  /** Favicon / app-icon style — square crop of the icon mark from the full logo */
  variant?: "default" | "filled";
};

/**
 * FactorBeam icon mark — left portion of the official horizontal logo (icon only).
 */
export function FactorBeamMark({ size = BRAND.header.logoMarkPx, className, variant: _variant = "default" }: MarkProps) {
  return (
    <span
      className={cn("inline-block shrink-0 overflow-hidden", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <img
        src={BRAND.logo.mark}
        alt=""
        draggable={false}
        className="h-full w-full object-contain select-none dark:hidden"
      />
      <img
        src={BRAND.logo.markDark}
        alt=""
        draggable={false}
        className="hidden h-full w-full object-contain select-none dark:block"
      />
    </span>
  );
}

type LogoProps = {
  /** Layout preset — `header` matches global nav standards */
  context?: LogoContext;
  markSize?: number;
  className?: string;
  showWordmark?: boolean;
  iconOnly?: boolean;
  /** @deprecated Use `context` instead */
  size?: number;
};

/** Full FactorBeam horizontal logo (icon + wordmark) from brand asset. */
export function FactorBeamLogo({
  context = "header",
  markSize,
  className,
  showWordmark: _showWordmark = true,
  iconOnly = false,
  size,
}: LogoProps) {
  const preset = LOGO_CONTEXT[context];
  const height = markSize ?? (size ? size * 1.75 : preset.height);

  if (iconOnly || context === "icon") {
    return <FactorBeamMark size={height} className={className} />;
  }

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)} style={{ height }}>
      <img
        src={BRAND.logo.full}
        alt={BRAND.name}
        draggable={false}
        className="block h-full w-auto max-w-none select-none dark:hidden"
      />
      <img
        src={BRAND.logo.fullDark}
        alt=""
        aria-hidden
        draggable={false}
        className="hidden h-full w-auto max-w-none select-none dark:block"
      />
    </span>
  );
}
