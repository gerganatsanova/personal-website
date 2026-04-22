"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { MobileNav } from "./mobile-nav";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function Nav() {
  const { lang } = useLanguage();

  const links = [
    { label: t.nav.home[lang], href: "/" },
    { label: t.nav.about[lang], href: "/about" },
    { label: t.nav.workWithMe[lang], href: "/work-with-me" },
    { label: t.nav.articles[lang], href: "/articles" },
    { label: t.nav.guides[lang], href: "/guides" },
    { label: t.nav.contact[lang], href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-serif text-[17px] italic tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Gergana Tsanova
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <span className="h-3 w-px bg-border" aria-hidden />
          <LanguageToggle />
          <span className="h-3 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <MobileNav links={links} />
      </div>
    </header>
  );
}
