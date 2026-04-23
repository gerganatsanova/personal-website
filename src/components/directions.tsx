"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function Directions() {
  const { lang } = useLanguage();
  const d = t.directions;

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        {/* Intro line — two sentences on separate lines */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center font-serif text-2xl leading-snug text-foreground md:text-3xl lg:text-[2.25rem]"
        >
          {d.introLine1[lang]}
          {lang === "bg" ? <br /> : " "}
          {d.introLine2Pre[lang]}{" "}
          <span className="italic text-accent">
            {d.introLine2AccentA[lang]}
          </span>{" "}
          {d.introLine2Mid[lang]}{" "}
          <span className="italic text-accent">
            {d.introLine2AccentB[lang]}
          </span>{" "}
          {d.introLine2Post[lang]}
        </motion.p>

        {/* Two-column directions */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-[1fr_auto_1fr] md:gap-0">
          {/* Column 1 — Life */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="md:pr-10 lg:pr-16"
          >
            <span aria-hidden className="mb-5 block h-px w-10 bg-accent" />
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {d.lifeTitleLead[lang]}
              {lang === "bg" ? <br /> : " "}
              {d.lifeTitlePrep[lang]}{" "}
              <span className="italic text-accent">
                {d.lifeTitleAccent[lang]}
              </span>
              .
            </h3>
            <p className="mt-7 max-w-md text-[15px] leading-[1.75] text-muted md:text-base">
              {d.lifeParagraph[lang]}
            </p>
            <Link
              href="/work-with-me#life"
              className="group mt-8 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {d.learnMore[lang]}
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>

          <div aria-hidden className="hidden md:block md:w-px md:bg-border" />

          {/* Column 2 — Work */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="md:pl-10 lg:pl-16"
          >
            <span aria-hidden className="mb-5 block h-px w-10 bg-accent" />
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {d.workTitleLead[lang]}
              {lang === "bg" ? <br /> : " "}
              {d.workTitlePrep[lang]}{" "}
              <span className="italic text-accent">
                {d.workTitleAccent[lang]}
              </span>
              .
            </h3>
            <p className="mt-7 max-w-md text-[15px] leading-[1.75] text-muted md:text-base">
              {d.workParagraph[lang]}
            </p>
            <Link
              href="/work-with-me#work"
              className="group mt-8 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {d.learnMore[lang]}
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Unifying line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-20 flex max-w-3xl flex-col items-center text-center md:mt-28"
        >
          <span aria-hidden className="mb-6 h-px w-12 bg-accent" />
          <p className="font-serif text-lg italic leading-relaxed text-muted md:text-xl">
            {d.unifier[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
