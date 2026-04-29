"use client";

import Link from "next/link";
import { contact, t } from "@/lib/translations";
import { useLanguage } from "@/lib/i18n";
import { useObfuscatedEmail } from "./obfuscated-email";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const { email, href: emailHref, copy, copied } = useObfuscatedEmail();
  const emailLabel = lang === "bg" ? "Имейл" : "Email";

  const navLinks = [
    { href: "/", label: t.nav.home[lang] },
    { href: "/about", label: t.nav.about[lang] },
    { href: "/work-with-me", label: t.nav.workWithMe[lang] },
    { href: "/articles", label: t.nav.articles[lang] },
    { href: "/resources", label: t.nav.resources[lang] },
    { href: "/contact", label: t.nav.contact[lang] },
  ];

  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:px-10 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-[1.75rem]">
              {t.footer.brandFirst[lang]}{" "}
              <span className="italic text-accent">
                {t.footer.brandLast[lang]}
              </span>
            </p>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.8] text-muted">
              {t.footer.tagline[lang]}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-subtle">
              {t.nav.navigationLabel[lang]}
            </p>
            <ul className="space-y-3 text-[14px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-subtle">
              {t.nav.connectLabel[lang]}
            </p>
            <ul className="space-y-3 text-[14px]">
              <li className="relative inline-block">
                <a
                  href={emailHref ?? "#"}
                  className="text-muted transition-colors hover:text-foreground"
                  onClick={(e) => {
                    if (!emailHref) {
                      e.preventDefault();
                      return;
                    }
                    copy();
                  }}
                >
                  {email ?? emailLabel}
                </a>
                <span
                  aria-live="polite"
                  className={`pointer-events-none absolute left-0 top-full mt-1 whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-accent transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
                >
                  {t.nav.emailCopied[lang]}
                </span>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn
                  <span
                    aria-hidden
                    className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-[12px] text-subtle md:flex-row md:items-center">
          <p>
            © {year} {t.footer.brandFirst[lang]} {t.footer.brandLast[lang]}.{" "}
            {t.footer.rights[lang]}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-foreground"
            >
              {t.termsPage.footerLink[lang]}
            </Link>
            <p className="italic">{t.footer.madeWithCare[lang]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
