"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { WorkTestimonialsPreview } from "@/components/work-testimonials-preview";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export default function WorkWithMePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <Directions />
        <SectionDivider />
        <Formats />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <WorkTestimonialsPreview />
        <SectionDivider />
        <Questions />
        <SectionDivider />
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
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-24">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          {t.workWithMe.kicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="max-w-4xl font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.workWithMe.practicalHeadline[lang]}{" "}
          <span className="italic text-accent">
            {t.workWithMe.practicalHeadlineAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-8 max-w-3xl text-[15px] leading-[1.8] text-muted md:text-base"
        >
          {t.workWithMe.practicalIntro[lang]}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-5 max-w-3xl border-l-2 border-accent/60 pl-5 text-[15px] italic leading-[1.75] text-foreground/90 md:text-base"
        >
          {t.workWithMe.practicalNote[lang]}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/contact#book"
            className="group inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:border-accent hover:bg-accent"
          >
            {t.workWithMe.introCta[lang]}
            <span
              aria-hidden
              className="ml-2 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- 2. Two directions ---------------- */
function Directions() {
  const { lang } = useLanguage();
  const directions = [
    {
      numeral: "I.",
      title: t.workWithMe.lifeTitle[lang],
      description: t.workWithMe.lifePracticalDescription[lang],
      topics: t.workWithMe.lifePracticalTopics[lang],
    },
    {
      numeral: "II.",
      title: t.workWithMe.workTitle[lang],
      description: t.workWithMe.workPracticalDescription[lang],
      topics: t.workWithMe.workPracticalTopics[lang],
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.workWithMe.directionsKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.workWithMe.directionsTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.workWithMe.directionsTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.8] text-muted md:text-base">
            {t.workWithMe.directionsIntro[lang]}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {directions.map((direction, directionIndex) => (
            <motion.article
              key={direction.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: directionIndex * 0.1 }}
              className="rounded-sm border border-border/70 bg-surface/30 p-7 md:p-9"
            >
              <span className="font-serif text-sm italic text-accent">
                {direction.numeral}
              </span>
              <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground">
                {direction.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
                {direction.description}
              </p>
              <ul className="mt-7 border-t border-border/60">
                {direction.topics.map((topic, i) => (
                  <motion.li
                    key={topic}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.035,
                      ease: EASE,
                    }}
                    className="flex gap-3 border-b border-border/60 py-3.5 text-[14px] leading-snug text-foreground/90 md:text-[15px]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.65em] h-px w-4 shrink-0 bg-accent"
                    />
                    <span>{topic}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] italic leading-[1.7] text-subtle md:text-sm">
                {t.workWithMe.directionsMore[lang]}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Formats ---------------- */
function Formats() {
  const { lang } = useLanguage();
  const formats = [
    {
      numeral: "I.",
      title: t.workWithMe.service1Title[lang],
      description: t.workWithMe.primaryFormatDescription[lang],
      note: t.workWithMe.primaryFormatNote[lang],
      image:
        "https://images.unsplash.com/photo-1463397952320-023b1defe8a9?w=900&q=80",
    },
    {
      numeral: "II.",
      title: t.workWithMe.service2Title[lang],
      description: t.workWithMe.additionalFormatDescription[lang],
      note: t.workWithMe.additionalFormatNote[lang],
      image:
        "https://images.unsplash.com/photo-1769771744699-7b73a101b318?w=900&q=80",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.workWithMe.formatsKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.workWithMe.formatsTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.workWithMe.formatsTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.8] text-muted md:text-base">
            {t.workWithMe.formatsIntro[lang]}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {formats.map((format, i) => (
            <motion.article
              key={format.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col overflow-hidden rounded-sm border border-border/70 bg-surface/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={format.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 font-serif text-sm italic text-white/90">
                  {format.numeral}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="whitespace-pre-line font-serif text-3xl leading-tight tracking-tight text-foreground">
                  {format.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted md:text-base">
                  {format.description}
                </p>
                <p className="mt-6 border-l-2 border-accent/60 pl-5 text-[13px] italic leading-[1.75] text-foreground/90 md:text-sm">
                  {format.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Process ---------------- */
function Process() {
  const { lang } = useLanguage();
  const steps = t.workWithMe.processSteps[lang];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="md:col-span-5"
          >
            <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden />
              {t.workWithMe.processKicker[lang]}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {t.workWithMe.processTitleLead[lang]}{" "}
              <span className="italic text-accent">
                {t.workWithMe.processTitleAccent[lang]}
              </span>
            </h2>
            <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.8] text-muted md:text-base">
              {t.workWithMe.processIntro[lang]}
            </p>
          </motion.div>

          <ol className="md:col-span-7 md:pt-10">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border/70 py-6 first:pt-0"
              >
                <span className="font-serif text-sm italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                    {step.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Questions link ---------------- */
function Questions() {
  const { lang } = useLanguage();

  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <span aria-hidden className="mb-6 block h-px w-12 bg-accent" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
            {t.workWithMe.questionsKicker[lang]}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            {t.workWithMe.questionsTitle[lang]}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-muted md:text-base">
            {t.workWithMe.questionsText[lang]}
          </p>
          <Link
            href="/contact#faq"
            className="group mt-8 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {t.workWithMe.questionsLink[lang]}
            <span
              aria-hidden
              className="ml-2 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
