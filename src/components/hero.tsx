"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
};

export function Hero() {
  const { lang } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden md:pb-32">
      {/* Atmospheric background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-20 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,111,71,0.16), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-[10%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,111,71,0.12), transparent 70%)",
          }}
        />
      </div>

      {/* Watermark — edge-to-edge italic */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden select-none md:block"
        style={{ transform: "translateY(5%)" }}
      >
        <svg
          viewBox="0 0 1000 220"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          <text
            x="500"
            y="150"
            textAnchor="middle"
            textLength="990"
            lengthAdjust="spacingAndGlyphs"
            fontSize="200"
            className="font-serif italic fill-accent"
            style={{ opacity: 0.09 }}
          >
            {t.hero.watermark[lang]}
          </text>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pt-4 pb-16 md:grid-cols-12 md:items-center md:gap-12 md:px-10 md:pb-20 lg:pt-6 lg:pb-24">
        {/* Text column */}
        <div className="relative z-10 md:col-span-7">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
          >
            <span className="h-px w-10 bg-accent" aria-hidden />
            {t.hero.kicker[lang]}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[4rem] lg:text-[4.75rem] xl:text-[5.25rem]"
          >
            {t.hero.headlineLine1[lang]}
            <br />
            <span className="italic text-accent">
              {t.hero.headlineAccent[lang]}
            </span>
            {t.hero.headlineLine2Rest[lang]}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg md:leading-[1.7]"
          >
            {t.hero.paragraph[lang]}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/work-with-me"
              className="group inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-accent"
            >
              {t.hero.ctaPrimary[lang]}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {t.hero.ctaSecondary[lang]}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          className="relative z-10 md:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-full w-full"
              style={{
                border: "1px solid rgba(139,111,71,0.55)",
                maskImage:
                  "linear-gradient(to bottom left, black 0%, black 40%, transparent 95%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom left, black 0%, black 40%, transparent 95%)",
              }}
            />
            <div className="relative isolate aspect-[4/5] w-full overflow-hidden border border-border/60">
              <Image
                src="/images/portrait-v2.png"
                alt="Gergana Tsanova"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_20%]"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 15%, rgba(139,111,71,0.12), transparent 60%)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
