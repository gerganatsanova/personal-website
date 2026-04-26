"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { PullQuote } from "@/components/pull-quote";
import { CTA } from "@/components/cta";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <Story />
        <SectionDivider />
        <Philosophy />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        {/* <Credentials />
        <SectionDivider /> */}
        <Beyond />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

function FramedImage({
  src,
  alt,
  aspect,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  aspect: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
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
      <div
        className={`relative isolate ${aspect} w-full overflow-hidden rounded-sm border border-border/60`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}

/* ---------------- 1. Intro ---------------- */
function Intro() {
  const { lang } = useLanguage();
  const paragraphs = t.about.introParagraphs[lang];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Text */}
          <div className="md:col-span-7">
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
            >
              <span className="h-px w-10 bg-accent" aria-hidden />
              {t.about.kicker[lang]}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.05 }}
              className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
            >
              {t.about.introHeadlineLead[lang]}{" "}
              <span className="italic text-accent">
                {t.about.introHeadlineAccent[lang]}
              </span>
            </motion.h1>

            <div className="mt-8 space-y-5 max-w-[60ch]">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-[15px] leading-[1.75] text-muted md:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="md:col-span-5"
          >
            <FramedImage
              src="/images/about-portrait.png"
              alt={t.about.portraitAlt[lang]}
              aspect="aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Story ---------------- */
function Story() {
  const { lang } = useLanguage();
  const paragraphs = t.about.storyParagraphs[lang];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Image on left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="md:col-span-5"
          >
            <FramedImage
              src="/images/about-story.png"
              alt={t.about.storyImageAlt[lang]}
              aspect="aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>

          {/* Story copy */}
          <div className="md:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" aria-hidden />
                {t.about.storyKicker[lang]}
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                {t.about.storyTitleLead[lang]}{" "}
                <span className="italic text-accent">
                  {t.about.storyTitleAccent[lang]}
                </span>
              </h2>
            </motion.div>

            <div className="mt-8 max-w-[60ch] space-y-5">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-[15px] leading-[1.75] text-muted md:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <PullQuote text={t.about.storyPullQuote[lang]} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Philosophy ---------------- */
function Philosophy() {
  const { lang } = useLanguage();
  const principles = [
    {
      title: t.about.principle1Title[lang],
      text: t.about.principle1Text[lang],
    },
    {
      title: t.about.principle2Title[lang],
      text: t.about.principle2Text[lang],
    },
    {
      title: t.about.principle3Title[lang],
      text: t.about.principle3Text[lang],
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.about.philosophyKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.about.philosophyTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.about.philosophyTitleAccent[lang]}
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-x-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span
                aria-hidden
                className="mb-5 block h-px w-10 bg-accent"
              />
              <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-[1.75rem]">
                {p.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Experience ---------------- */
function Experience() {
  const { lang } = useLanguage();
  const metrics = [
    {
      value: t.about.metric1Value[lang],
      label: t.about.metric1Label[lang],
    },
    {
      value: t.about.metric2Value[lang],
      label: t.about.metric2Label[lang],
    },
    {
      value: t.about.metric3Value[lang],
      label: t.about.metric3Label[lang],
    },
    {
      value: t.about.metric4Value[lang],
      label: t.about.metric4Label[lang],
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.about.experienceKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.about.experienceTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.about.experienceTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.about.experienceParagraph[lang]}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-4 md:gap-x-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col"
            >
              <span
                aria-hidden
                className="mb-4 block h-px w-8 bg-accent"
              />
              <span className="font-serif text-4xl leading-none tracking-tight text-foreground md:text-5xl">
                {m.value}
              </span>
              <span className="mt-3 text-[13px] leading-[1.6] text-muted md:text-sm">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Credentials ---------------- */
function Credentials() {
  const { lang } = useLanguage();
  const items = t.about.credentials[lang];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
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
              {t.about.credentialsKicker[lang]}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {t.about.credentialsTitleLead[lang]}{" "}
              <span className="italic text-accent">
                {t.about.credentialsTitleAccent[lang]}
              </span>
            </h2>
          </motion.div>

          <div className="md:col-span-7">
            <ul className="space-y-0">
              {items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: EASE,
                  }}
                  className="group relative flex items-start gap-4 border-b border-border/60 py-4 text-[15px] leading-snug text-foreground/90 md:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-[0.65em] h-px w-4 shrink-0 bg-accent transition-all duration-300 ease-out group-hover:w-6"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. Beyond work ---------------- */
function Beyond() {
  const { lang } = useLanguage();
  const paragraphs = t.about.beyondParagraphs[lang];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Copy */}
          <div className="md:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-accent" aria-hidden />
                {t.about.beyondKicker[lang]}
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                {t.about.beyondTitleLead[lang]}{" "}
                <span className="italic text-accent">
                  {t.about.beyondTitleAccent[lang]}
                </span>
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 max-w-[55ch]">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-[15px] leading-[1.75] text-muted md:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Two personal images */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-border/60"
              >
                <Image
                  src="/images/about-beyond-1.png"
                  alt={t.about.beyondImage1Alt[lang]}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: EASE,
                }}
                className="relative mt-8 aspect-[3/4] w-full overflow-hidden rounded-sm border border-border/60"
              >
                <Image
                  src="/images/about-beyond-2.png"
                  alt={t.about.beyondImage2Alt[lang]}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

