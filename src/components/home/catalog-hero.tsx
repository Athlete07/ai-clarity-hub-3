import { X } from "lucide-react";
import type { ReactNode } from "react";
import {
  LandingAurora,
  LandingGrain,
  LandingGrid,
} from "@/components/home/landing-graphics";
import { cn } from "@/lib/utils";

function LandingHeroBackdrop() {
  return (
    <>
      <LandingAurora />
      <LandingGrid />
      <LandingGrain />
    </>
  );
}

export function CatalogPageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <header className="landing-hero landing-hero-compact relative overflow-hidden">
      <LandingHeroBackdrop />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pt-32">
        {eyebrow ? (
          <p className="landing-section-label !text-white/50">
            <span className="landing-section-label-line !bg-[#A78BFA]" aria-hidden />
            {eyebrow}
          </p>
        ) : null}

        <h1 className="landing-display mt-4 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.98] tracking-[-0.04em] text-white">
          {title}
          {titleAccent ? (
            <>
              <br />
              <em className="landing-display-italic text-[#C4B5FD]">{titleAccent}</em>
            </>
          ) : null}
        </h1>

        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
          {subtitle}
        </p>

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </header>
  );
}

/** Centered or split editorial hero for marketing & legal pages. */
export function ContentPageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
  aside,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  align?: "center" | "left";
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <header className="landing-hero landing-hero-compact relative overflow-hidden">
      <LandingHeroBackdrop />

      <div
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pt-32",
          !centered && "lg:grid lg:grid-cols-12 lg:items-end lg:gap-12",
        )}
      >
        <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "lg:col-span-7")}>
          {eyebrow ? (
            <p
              className={cn(
                "landing-section-label !text-white/50",
                centered && "justify-center",
              )}
            >
              <span className="landing-section-label-line !bg-[#A78BFA]" aria-hidden />
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={cn(
              "landing-display mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] tracking-[-0.04em] text-white",
              centered && "text-balance",
            )}
          >
            {title}
            {titleAccent ? (
              <>
                <br />
                <em className="landing-display-italic text-[#C4B5FD]">{titleAccent}</em>
              </>
            ) : null}
          </h1>

          <p
            className={cn(
              "mt-5 text-[16px] leading-relaxed text-white/60 sm:text-[17px]",
              centered ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {subtitle}
          </p>

          {children ? <div className={cn("mt-8", centered && "flex flex-col items-center")}>{children}</div> : null}
        </div>

        {aside ? (
          <div className={cn(centered ? "mt-10 text-center" : "mt-8 lg:col-span-5 lg:mt-0 lg:text-right")}>
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function CatalogCrossLink({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="catalog-cross-link text-[13px] text-muted-foreground">{children}</p>
  );
}

export function CatalogSearch({
  value,
  onChange,
  onClear,
  onFocus,
  onBlur,
  placeholder,
  "aria-label": ariaLabel = "Search",
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  "aria-label"?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative max-w-xl">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="catalog-search-input w-full"
      />
      {value ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-white/50 hover:bg-white/10 hover:text-white"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      ) : null}
      {children}
    </div>
  );
}
