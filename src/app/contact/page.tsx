"use client";

import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { Ornament } from "@/components/ornament";
import { FaqItem } from "@/components/faq-item";
import { useObfuscatedEmail } from "@/components/obfuscated-email";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

const CAL_BOOKING_URL = "https://cal.com/tsanova-consulting/intro";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Connect />
        <SectionDivider />
        <Faq />
        <SectionDivider />
        <Close />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

/* ---------------- 1. Hero ---------------- */
function Hero() {
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
          {t.contactPage.kicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="max-w-4xl font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.contactPage.headlineLead[lang]}{" "}
          <span className="italic text-accent">
            {t.contactPage.headlineAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-subtle"
        >
          <PinIcon />
          {t.contactPage.location[lang]}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-3xl text-[15px] leading-[1.8] text-muted md:text-base"
        >
          {t.contactPage.intro[lang]}
        </motion.p>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-accent"
    >
      <path
        d="M6 11s4-3.5 4-6.5A4 4 0 0 0 2 4.5C2 7.5 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* ---------------- 2. Connect ---------------- */
function Connect() {
  const { lang } = useLanguage();
  const bullets = t.contactPage.bookBullets[lang];
  const { href: emailHref, copy, copied } = useObfuscatedEmail(
    t.contactPage.emailSubject[lang],
  );

  return (
    <section id="book" className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        {/* Combined header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.contactPage.connectKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.contactPage.connectTitleLead[lang]}
          </h2>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.8] text-muted md:text-base">
            {t.contactPage.connectIntro[lang]}
          </p>
        </motion.div>

        {/* Booking sub-block */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
          {/* Bullets */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="md:col-span-5"
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-subtle">
              {t.contactPage.bookBulletsLabel[lang]}
            </p>
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: EASE }}
                  className="flex gap-3 text-[15px] leading-[1.7] text-foreground/90 md:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-px w-4 shrink-0 bg-accent"
                  />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Booking card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="relative flex flex-col items-start rounded-sm border border-border/70 bg-foreground/[0.02] p-8 md:p-10">
              <Ornament className="mb-6 self-start" />
              <p className="font-serif text-[1.5rem] leading-tight tracking-tight text-foreground md:text-[1.75rem]">
                {t.contactPage.connectTitleLead[lang]}
              </p>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted">
                {t.contactPage.bookFallback[lang]}
              </p>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:border-accent hover:bg-accent"
              >
                {t.contactPage.bookCta[lang]}
                <span
                  aria-hidden
                  className="ml-2 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* "Or simply write to me" transition heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-20 flex flex-col items-center text-center md:mt-24"
        >
          <span
            aria-hidden
            className="mb-6 block h-px w-12 bg-accent"
          />
          <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            <span className="italic text-accent">
              {t.contactPage.transitionOr[lang]}
            </span>
          </h3>
        </motion.div>

        {/* Email sub-block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center text-center md:mt-12"
        >
          <div className="relative inline-flex flex-col items-center">
            <a
              href={emailHref ?? "#"}
              onClick={(e) => {
                if (!emailHref) {
                  e.preventDefault();
                  return;
                }
                copy();
              }}
              className="group inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-9 py-4 text-base font-medium text-background transition-all hover:border-accent hover:bg-accent md:text-[17px]"
            >
              {t.contactPage.emailButton[lang]}
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <span
              aria-live="polite"
              className={`pointer-events-none mt-3 text-[12px] uppercase tracking-[0.2em] text-accent transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
            >
              {t.nav.emailCopied[lang]}
            </span>
          </div>

          <p className="mt-6 text-[13px] italic leading-[1.7] text-subtle md:text-sm">
            {t.contactPage.inPersonNote[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- 3. FAQ ---------------- */
function Faq() {
  const { lang } = useLanguage();
  const items = t.contactPage.faq[lang];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.contactPage.faqKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {t.contactPage.faqTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.contactPage.faqTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.8] text-muted md:text-base">
            {t.contactPage.faqIntro[lang]}
          </p>
        </motion.div>

        <ul className="mx-auto mt-12 max-w-3xl border-t border-border/60 md:mt-14">
          {items.map((item, i) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              openLabel={t.contactPage.faqOpen[lang]}
              closeLabel={t.contactPage.faqClose[lang]}
              index={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- 4. Close ---------------- */
function Close() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-28 text-center md:px-10 md:pt-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col items-center"
        >
          <Ornament className="mb-8" />
          <div className="space-y-5 font-serif text-2xl leading-[1.3] tracking-tight text-foreground md:text-3xl">
            {t.contactPage.closeText[lang].split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="mt-6 font-serif text-[1.05rem] italic text-accent md:text-lg">
            {t.contactPage.closeSignature[lang]}
          </p>
          <Ornament className="mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
