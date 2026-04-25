"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { useObfuscatedEmail } from "./obfuscated-email";
import { useLanguage } from "@/lib/i18n";
import { t, contact } from "@/lib/translations";

type NavLink = { label: string; href: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const { email, href: emailHref } = useObfuscatedEmail();
  const emailLabel = lang === "bg" ? "Имейл" : "Email";

  // Lock body scroll while menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.nav.openMenu[lang]}
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent md:hidden"
      >
        <HamburgerIcon />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-background md:hidden"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Top bar — mirrors the main nav */}
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-border/40 px-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-serif text-[15px] tracking-tight text-foreground"
              >
                Gergana Tsanova
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.nav.closeMenu[lang]}
                className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-10 pt-12">
              {/* Navigation */}
              <nav>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
                >
                  <span className="h-px w-6 bg-accent" aria-hidden />
                  {t.nav.navigationLabel[lang]}
                </motion.p>
                <ul className="flex flex-col gap-5">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-4 py-1 font-serif text-[2rem] leading-tight tracking-tight text-foreground transition-colors hover:text-accent"
                      >
                        <span className="text-xs italic text-accent/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom section — contact + toggles */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-16 flex flex-col gap-8"
              >
                <div>
                  <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                    <span className="h-px w-6 bg-accent" aria-hidden />
                    {t.nav.connectLabel[lang]}
                  </p>
                  <div className="flex flex-col gap-3 text-[14px]">
                    <a
                      href={emailHref ?? "#"}
                      className="text-muted transition-colors hover:text-foreground"
                      onClick={(e) => {
                        if (!emailHref) e.preventDefault();
                      }}
                    >
                      {email ?? emailLabel}
                    </a>
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
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-6">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
