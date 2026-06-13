import {
  ADSENSE_CLIENT,
  ADSENSE_SLOT_ARTICLE,
  isArticleAdSlotConfigured,
  useAdsenseSlot,
} from "@/lib/adsense";
import { useHasConsent } from "@/lib/consent";

type AdSlotVariant = "article";

const SLOT_BY_VARIANT: Record<AdSlotVariant, string> = {
  article: ADSENSE_SLOT_ARTICLE,
};

type AdSlotProps = {
  /** Placement key — maps to env slot IDs in adsense.ts */
  variant: AdSlotVariant;
  className?: string;
};

/**
 * Consent-gated Google AdSense display unit for chapter pages only.
 * Renders nothing until:
 * 1) VITE_ADSENSE_CLIENT + slot ID are configured
 * 2) User has granted advertising cookies
 * 3) AdSense script has loaded (via useAdsenseLoader on the chapter route)
 */
export function AdSlot({ variant, className }: AdSlotProps) {
  const hasAdsConsent = useHasConsent("ads");
  const slotId = SLOT_BY_VARIANT[variant];
  const configured =
    variant === "article" ? isArticleAdSlotConfigured() : /^\d+$/.test(slotId);
  const active = hasAdsConsent && configured;

  useAdsenseSlot(active);

  if (!active) return null;

  return (
    <aside
      className={className ?? "my-10"}
      aria-label="Advertisement"
      data-ad-placement={variant}
    >
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        Advertisement
      </p>
      <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/20 px-2 py-3">
        <ins
          className="adsbygoogle block min-h-[90px] w-full"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
