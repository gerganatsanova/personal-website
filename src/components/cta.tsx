"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function CTA() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-28 text-center md:px-10 md:pt-20 md:pb-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.workWithMe.ctaKicker[lang]}
            <span className="h-px w-8 bg-accent" aria-hidden />
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.workWithMe.ctaTitle[lang]}{" "}
            <span className="italic text-accent">
              {t.workWithMe.ctaTitleAccent[lang]}
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.8] text-muted md:text-base">
            {t.workWithMe.ctaParagraph[lang]}
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:border-accent hover:bg-accent"
            >
              {t.workWithMe.ctaPrimary[lang]}
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
