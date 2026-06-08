"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { Ornament } from "@/components/ornament";
import { PullQuote } from "@/components/pull-quote";
import { CTA } from "@/components/cta";
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
        <LifeDirection />
        <SectionDivider />
        <WorkDirection />
        <SectionDivider />
        <Unifier />
        <SectionDivider />
        <HowWeWork />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

/* ---------------- Section 1 — Intro ---------------- */
function Intro() {
  const { lang } = useLanguage();
  const paragraphs = t.workWithMe.introParagraphs[lang];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
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
          {t.workWithMe.headline[lang]}{" "}
          <span
            className={`italic text-accent ${
              lang === "en" ? "md:block" : ""
            }`}
          >
            {t.workWithMe.headlineAccent[lang]}
          </span>
        </motion.h1>

        <div className="mt-8 max-w-4xl">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-[15px] leading-[1.75] text-muted md:text-base"
          >
            {paragraphs[0]}
          </motion.p>

          <PullQuote text={t.workWithMe.introPullQuote[lang]} />

          <div className="space-y-5">
            {paragraphs.slice(1).map((p, i) => (
              <motion.p
                key={i}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ delay: 0.18 + i * 0.06 }}
                className="text-[15px] leading-[1.75] text-muted md:text-base"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Delicate inline CTA */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-center gap-3 text-[13px] italic text-subtle"
        >
          <span className="h-px w-6 bg-accent" aria-hidden />
          {t.workWithMe.topCtaLead[lang]}{" "}
          <Link
            href="/contact#book"
            className="group not-italic font-medium text-foreground transition-colors hover:text-accent"
          >
            {t.workWithMe.topCtaLink[lang]}
            <span
              aria-hidden
              className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Growth in life ---------------- */
function LifeDirection() {
  const { lang } = useLanguage();
  return (
    <DirectionSection
      id="life"
      eyebrow={t.workWithMe.lifeEyebrow[lang]}
      title={t.workWithMe.lifeTitle[lang]}
      paragraphs={t.workWithMe.lifeParagraphs[lang]}
      pullQuote={t.workWithMe.lifePullQuote[lang]}
      pullQuoteAfter={1}
      audience={t.workWithMe.lifeAudience[lang]}
      topicsLabel={t.workWithMe.lifeTopicsLabel[lang]}
      topics={t.workWithMe.lifeTopics[lang]}
    />
  );
}

/* ---------------- Section 3 — Growth at work ---------------- */
function WorkDirection() {
  const { lang } = useLanguage();
  return (
    <DirectionSection
      id="work"
      eyebrow={t.workWithMe.workEyebrow[lang]}
      title={t.workWithMe.workTitle[lang]}
      paragraphs={t.workWithMe.workParagraphs[lang]}
      pullQuote={t.workWithMe.workPullQuote[lang]}
      pullQuoteAfter={1}
      audience={t.workWithMe.workAudience[lang]}
      topicsLabel={t.workWithMe.workTopicsLabel[lang]}
      topics={t.workWithMe.workTopics[lang]}
      reverse
    />
  );
}

function DirectionSection({
  id,
  eyebrow,
  title,
  paragraphs,
  pullQuote,
  pullQuoteAfter = 1,
  audience,
  topicsLabel,
  topics,
  reverse = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  pullQuote?: string;
  pullQuoteAfter?: number;
  audience: string;
  topicsLabel: string;
  topics: readonly string[];
  reverse?: boolean;
}) {
  const words = title.split(" ");
  const lastWord = words[words.length - 1];
  const titlePrefix = words.slice(0, -1).join(" ");

  return (
    <section id={id} className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        {/* Top: eyebrow + title, full width */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
            {titlePrefix && <span>{titlePrefix} </span>}
            <span className="italic text-accent">{lastWord}</span>
          </h2>
        </motion.div>

        {/* Two-column body */}
        <div
          className={`mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-12 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Paragraphs + audience */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="md:col-span-7"
          >
            <div className="max-w-[62ch] space-y-4">
              {paragraphs.slice(0, pullQuoteAfter + 1).map((p, i) => (
                <p
                  key={`pre-${i}`}
                  className="text-[15px] leading-[1.75] text-muted md:text-base"
                >
                  {p}
                </p>
              ))}
            </div>

            {pullQuote && (
              <div className="max-w-[62ch]">
                <PullQuote text={pullQuote} />
              </div>
            )}

            {paragraphs.length > pullQuoteAfter + 1 && (
              <div className="max-w-[62ch] space-y-4">
                {paragraphs.slice(pullQuoteAfter + 1).map((p, i) => (
                  <p
                    key={`post-${i}`}
                    className="text-[15px] leading-[1.75] text-muted md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-8 max-w-[62ch] border-l-2 border-accent/60 pl-5">
              <p className="text-[15px] leading-[1.75] italic text-foreground/90 md:text-base">
                {audience}
              </p>
            </div>
          </motion.div>

          {/* Topics */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="md:col-span-5"
          >
            <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-subtle">
              {topicsLabel}
            </p>
            <ul className="space-y-0">
              {topics.map((topic, i) => (
                <motion.li
                  key={topic}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: EASE,
                  }}
                  className="group relative border-b border-border/60 py-4 text-[15px] leading-snug text-foreground/90 md:text-base"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-4 w-0 -translate-y-1/2 bg-accent transition-[width] duration-300 ease-out group-hover:w-[2px]"
                  />
                  <span className="block transition-[padding] duration-300 ease-out group-hover:pl-3">
                    {topic}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Unifier ---------------- */
function Unifier() {
  const { lang } = useLanguage();
  const paragraphs = t.workWithMe.unifierParagraphs[lang];
  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col items-center text-center"
        >
          <Ornament className="mb-8" />
          <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.workWithMe.unifierHeadline[lang]}{" "}
            <span className="italic text-accent">
              {t.workWithMe.unifierHeadlineAccent[lang]}
            </span>
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: EASE,
                }}
                className="text-[15px] leading-[1.8] text-muted md:text-base"
              >
                {p}
              </motion.p>
              {i < paragraphs.length - 1 && <Ornament className="my-6" />}
            </div>
          ))}
        </div>

        <Ornament className="mt-10" />
      </div>
    </section>
  );
}

/* ---------------- Section 5 — How we work together ---------------- */
function HowWeWork() {
  const { lang } = useLanguage();

  const services = [
    {
      anchor: "coaching",
      numeral: t.workWithMe.service1Numeral[lang],
      title: t.workWithMe.service1Title[lang],
      description: t.workWithMe.service1Description[lang],
      image:
        "https://images.unsplash.com/photo-1463397952320-023b1defe8a9?w=900&q=80",
    },
    {
      anchor: "facilitation",
      numeral: t.workWithMe.service2Numeral[lang],
      title: t.workWithMe.service2Title[lang],
      description: t.workWithMe.service2Description[lang],
      image:
        "https://images.unsplash.com/photo-1769771744699-7b73a101b318?w=900&q=80",
    },
    {
      anchor: "trainings",
      numeral: t.workWithMe.service3Numeral[lang],
      title: t.workWithMe.service3Title[lang],
      description: t.workWithMe.service3Description[lang],
      image:
        "https://images.unsplash.com/photo-1669833576253-3ac6369b55f3?w=900&q=80",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.workWithMe.howKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.workWithMe.howTitle[lang]}{" "}
            <span className="italic text-accent">
              {t.workWithMe.howTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.workWithMe.howIntro[lang]}
          </p>
        </motion.div>

        {/* Services columns */}
        <div className="mt-14 grid grid-cols-1 gap-y-16 md:mt-16 md:grid-cols-3 md:gap-x-10 md:gap-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={service.anchor}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ delay: i * 0.12 }}
              className="flex scroll-mt-20 flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border/60">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 55%, rgba(20,15,10,0.28))",
                  }}
                />
                <span className="absolute left-4 top-4 font-serif text-sm italic text-background/90">
                  {service.numeral}
                </span>
              </div>

              <h3 className="mt-6 flex min-h-[3.25rem] items-center whitespace-pre-line font-serif text-2xl leading-tight tracking-tight text-foreground md:min-h-[4.5rem] md:text-[1.75rem]">
                {service.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.75] text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
