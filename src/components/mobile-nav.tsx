"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

type NavLink = { label: string; href: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();

  // Portals must wait for client mount to avoid hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

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

  const overlay = (
    <AnimatePresence>
      {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-background lg:hidden"
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
                        className="block py-1 font-serif text-[2rem] leading-tight tracking-tight text-foreground transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom section — toggles */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-16 flex items-center justify-between border-t border-border/60 pt-6"
              >
                <LanguageToggle />
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.nav.openMenu[lang]}
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent lg:hidden"
      >
        <HamburgerIcon />
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
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
