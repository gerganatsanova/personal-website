"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

// TODO: replace with the real external purchase link once confirmed.
const BOOK_EXTERNAL_URL = "https://example.com/book";
// TODO: replace with real cover image (e.g. /images/book-cover.jpg).
const BOOK_COVER_SRC =
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80";

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <Paid />
        <SectionDivider />
        <ComingSoon />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

/* ---------------- 1. Intro ---------------- */
function Intro() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          {t.resources.kicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.resources.titleLead[lang]}{" "}
          <span className="italic text-accent">
            {t.resources.titleAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-8 max-w-[60ch] text-[15px] leading-[1.75] text-muted md:text-base"
        >
          {t.resources.intro[lang]}
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- 2. Paid resources ---------------- */
function Paid() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.resources.paidKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.resources.paidTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.resources.paidTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.resources.paidIntro[lang]}
          </p>
        </motion.div>

        {/* Book card */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          href={BOOK_EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-12"
        >
          {/* Cover */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border/60 md:col-span-5">
            <Image
              src={BOOK_COVER_SRC}
              alt={t.resources.book1CoverAlt[lang]}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center md:col-span-7">
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-subtle">
              <span className="h-px w-6 bg-accent" aria-hidden />
              <span>{t.resources.book1Type[lang]}</span>
            </div>
            <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl lg:text-[2.5rem]">
              {t.resources.book1Title[lang]}
            </h3>
            <p className="mt-5 max-w-[55ch] text-[15px] leading-[1.75] text-muted md:text-base">
              {t.resources.book1Description[lang]}
            </p>
            <span className="mt-8 inline-flex items-center text-sm font-medium text-foreground">
              {t.resources.book1Cta[lang]}
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </span>
            <span className="mt-2 text-[11px] uppercase tracking-[0.18em] text-subtle">
              {t.resources.book1ExternalLabel[lang]}
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

/* ---------------- 3. Coming soon ---------------- */
function ComingSoon() {
  const { lang } = useLanguage();
  const items = [
    {
      title: t.resources.comingSoonItem1Title[lang],
      description: t.resources.comingSoonItem1Description[lang],
    },
    {
      title: t.resources.comingSoonItem2Title[lang],
      description: t.resources.comingSoonItem2Description[lang],
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.resources.comingSoonKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.resources.comingSoonTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.resources.comingSoonTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.resources.comingSoonParagraph[lang]}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="relative flex flex-col border border-dashed border-border/80 p-7 md:p-8"
            >
              <span className="mb-5 inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-5 bg-accent" aria-hidden />
                {t.resources.comingSoonBadge[lang]}
              </span>
              <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-muted md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
