"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export default function MaterialsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <List />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

function Intro() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10 md:pt-16 md:pb-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-8"
        >
          <Link
            href="/resources"
            className="group inline-flex items-center text-[13px] text-muted transition-colors hover:text-foreground"
          >
            <span
              aria-hidden
              className="mr-2 transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            {t.resources.backToResources[lang]}
          </Link>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          {t.resources.materialsPageKicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.resources.materialsPageTitleLead[lang]}{" "}
          <span className="italic text-accent">
            {t.resources.materialsPageTitleAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-[60ch] text-[15px] leading-[1.75] text-muted md:text-base"
        >
          {t.resources.materialsPageIntro[lang]}
        </motion.p>
      </div>
    </section>
  );
}

function List() {
  const placeholders = [
    { key: "upcoming-1" },
    { key: "upcoming-2" },
    { key: "upcoming-3" },
    { key: "upcoming-4" },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {placeholders.map((item, i) => (
            <MaterialCard key={item.key} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({ delay }: { delay: number }) {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="group relative flex flex-col items-center rounded-lg border border-border/60 bg-surface p-8 text-center transition-colors md:p-10"
    >
      <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground md:text-2xl">
        {t.resources.upcomingMaterialTitle[lang]}
      </h3>
      <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.7] text-muted md:text-[15px]">
        {t.resources.upcomingMaterialDescription[lang]}
      </p>
      <button
        type="button"
        disabled
        className="mt-8 inline-flex h-11 cursor-not-allowed items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background opacity-60"
      >
        {t.resources.upcomingMaterialCta[lang]}
      </button>
    </motion.div>
  );
}
