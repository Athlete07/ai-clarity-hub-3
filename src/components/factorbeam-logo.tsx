import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Logo height tokens — keep in sync with --logo-height-* in styles.css */
const LOGO_HEIGHT = {
  header: { var: "var(--logo-height-header)", px: BRAND.header.logoFullPx },
  hero: { var: "var(--logo-height-hero)", px: BRAND.header.logoHeroPx },
  compact: { var: "var(--logo-height-compact)", px: BRAND.header.logoCompactPx },
  icon: { var: "var(--logo-height-mark)", px: BRAND.header.logoMarkPx },
} as const;

type LogoContext = keyof typeof LOGO_HEIGHT;

type MarkProps = {
  size?: number;
  className?: string;
  variant?: "default" | "filled";
};

/** FactorBeam icon mark — square crop from the horizontal logo. */
export function FactorBeamMark({ size, className, variant: _variant = "default" }: MarkProps) {
  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center leading-none", className)}
      style={
        size
          ? { width: size, height: size }
          : { width: LOGO_HEIGHT.icon.var, height: LOGO_HEIGHT.icon.var }
      }
      aria-hidden
    >
      <img
        src={BRAND.logo.mark}
        alt=""
        draggable={false}
        className="block h-full w-full object-contain select-none dark:hidden"
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
  context?: LogoContext;
  markSize?: number;
  className?: string;
  showWordmark?: boolean;
  iconOnly?: boolean;
  /** @deprecated Use `context` instead */
  size?: number;
};

/** Full FactorBeam horizontal logo (icon + wordmark). */
export function FactorBeamLogo({
  context = "header",
  markSize,
  className,
  showWordmark: _showWordmark = true,
  iconOnly = false,
  size,
}: LogoProps) {
  const preset = LOGO_HEIGHT[context];
  const overridePx = markSize ?? (size ? size * 1.75 : undefined);

  if (iconOnly || context === "icon") {
    return <FactorBeamMark size={overridePx} className={className} />;
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center leading-none",
        context === "header" && "site-logo",
        className,
      )}
      style={
        overridePx
          ? { height: overridePx }
          : context !== "header"
            ? { height: preset.var }
            : undefined
      }
    >
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
