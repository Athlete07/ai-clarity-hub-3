import { Link, useRouter } from "@tanstack/react-router";
import { FactorBeamLogo } from "@/components/factorbeam-logo";
import { AI_LITERACY, BRAND, PLAYBOOK_REPOSITORY, SHOW_AI_LITERACY_IN_NAV } from "@/lib/brand";
import { useStreak } from "@/lib/storage";
import { useTheme } from "@/lib/theme";
import { Flame, Moon, Sun, Menu } from "lucide-react";
import { CookiePreferencesLink } from "@/components/cookie-consent";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import * as React from "react";

const navLinkClass =
  "nav-link text-muted-foreground transition-colors hover:text-foreground";

function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="nav-icon-btn hairline text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {!mounted ? <Sun size={18} /> : isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center text-foreground transition-opacity hover:opacity-90"
      aria-label={`${BRAND.name} home`}
    >
      <FactorBeamLogo context="compact" />
    </Link>
  );
}

function MobileMenu({ slim = false }: { slim?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", () => setOpen(false));
    return () => unsubscribe();
  }, [router]);

  if (slim) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="nav-icon-btn hairline text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
        >
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] border-l bg-background/95 backdrop-blur p-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="site-header hairline-b flex items-center px-5">
            <Logo />
          </div>
          <nav className="flex flex-col gap-1 p-3" aria-label="Primary">
            <Link to={PLAYBOOK_REPOSITORY.href} className={cn(navLinkClass, "rounded-md px-3 py-3")}>
              {PLAYBOOK_REPOSITORY.navLabel}
            </Link>
            {SHOW_AI_LITERACY_IN_NAV && (
              <Link to={AI_LITERACY.href} className={cn(navLinkClass, "rounded-md px-3 py-3")}>
                {AI_LITERACY.name}
              </Link>
            )}
            <Link to="/about" className={cn(navLinkClass, "rounded-md px-3 py-3")}>
              About the Platform
            </Link>
          </nav>
          <div className="mt-auto hairline-t space-y-3 p-4">
            <div className="flex flex-col gap-1">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Connect
              </span>
              <Link
                to="/creator"
                className={cn(navLinkClass, "rounded-md px-3 py-3")}
              >
                Curator Box
              </Link>
              <Link
                to="/contact"
                className={cn(navLinkClass, "rounded-md px-3 py-3")}
              >
                Contact
              </Link>
            </div>
            <CookiePreferencesLink
              className={cn(navLinkClass, "block rounded-md px-3 py-3")}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Nav({ slim = false, overlay = false }: { slim?: boolean; overlay?: boolean }) {
  const streak = useStreak();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const isOverlayTop = overlay && !scrolled;

  return (
    <header
      className={cn(
        overlay ? "fixed inset-x-0 top-0 z-50 transition-all duration-500" : "sticky top-0 z-40",
        isOverlayTop
          ? "landing-nav-overlay border-transparent bg-transparent backdrop-blur-none"
          : "hairline-b bg-background/85 backdrop-blur",
        slim ? "site-header--slim" : "site-header",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className={cn(
              "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
              isOverlayTop ? "text-white" : "text-foreground",
            )}
            aria-label={`${BRAND.name} home`}
          >
            <FactorBeamLogo context="compact" />
          </Link>
          {slim && (
            <Link
              to={AI_LITERACY.href}
              className={cn(
                navLinkClass,
                "hidden sm:inline",
                isOverlayTop && "text-white/70 hover:text-white",
              )}
            >
              {AI_LITERACY.backShort}
            </Link>
          )}
        </div>

        {!slim && (
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <Link
              to={PLAYBOOK_REPOSITORY.href}
              className={cn(navLinkClass, isOverlayTop && "text-white/75 hover:text-white")}
            >
              {PLAYBOOK_REPOSITORY.navLabel}
            </Link>
            {SHOW_AI_LITERACY_IN_NAV && (
              <Link
                to={AI_LITERACY.href}
                className={cn(navLinkClass, isOverlayTop && "text-white/75 hover:text-white")}
              >
                {AI_LITERACY.name}
              </Link>
            )}
            <Link
              to="/about"
              className={cn(navLinkClass, isOverlayTop && "text-white/75 hover:text-white")}
            >
              About the Platform
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-1 sm:gap-2">
          {streak > 1 && (
            <span
              className={cn(
                "nav-link hidden items-center gap-1.5 md:inline-flex",
                isOverlayTop ? "text-white/70" : "text-muted-foreground",
              )}
            >
              <Flame size={14} aria-hidden />
              {streak}-day streak
            </span>
          )}
          <ThemeToggle />
          <MobileMenu slim={slim} />
        </div>
      </div>
    </header>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
        {title}
      </p>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  children,
  href,
}: {
  to?:
    | "/use-cases"
    | "/ai-literacy"
    | "/about"
    | "/creator"
    | "/contact"
    | "/privacy-policy"
    | "/terms-of-service"
    | "/simulations";
  href?: string;
  children: React.ReactNode;
}) {
  const className = "nav-link text-muted-foreground transition-colors hover:text-foreground";
  if (href) {
    return (
      <li>
        <a href={href} className={className}>
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={to!} className={className}>
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="landing-footer">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <FooterColumn title="Product">
            <FooterLink to={PLAYBOOK_REPOSITORY.href}>
              {PLAYBOOK_REPOSITORY.navLabel}
            </FooterLink>
            <FooterLink to={AI_LITERACY.href}>{AI_LITERACY.name}</FooterLink>
            <FooterLink to="/about">About the Platform</FooterLink>
            <FooterLink to="/simulations">
              <span className="inline-flex items-center gap-2">
                Simulations
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Beta
                </span>
              </span>
            </FooterLink>
          </FooterColumn>
          <FooterColumn title="Connect">
            <FooterLink to="/creator">Curator Box</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterColumn>
          <FooterColumn title="Legal">
            <FooterLink to="/privacy-policy">Privacy</FooterLink>
            <FooterLink to="/terms-of-service">Terms</FooterLink>
            <li>
              <CookiePreferencesLink />
            </li>
          </FooterColumn>
        </div>

        <div className="hairline-t mt-10 flex flex-col gap-2 pt-8 text-sm leading-normal text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <span className="text-xs sm:text-sm">© 2026 · {BRAND.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
