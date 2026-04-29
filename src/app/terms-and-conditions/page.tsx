"use client";

import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { useObfuscatedEmail } from "@/components/obfuscated-email";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Body />
        <SectionDivider />
        <ContactBlock />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

function Hero() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          {t.termsPage.kicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3rem]"
        >
          {t.termsPage.headlineLead[lang]}{" "}
          <span className="italic text-accent">
            {t.termsPage.headlineAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-6 text-[12px] uppercase tracking-[0.18em] text-subtle"
        >
          {t.termsPage.lastUpdatedLabel[lang]}: {t.termsPage.lastUpdated[lang]}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-3xl space-y-5 text-[15px] leading-[1.85] text-muted md:text-base"
        >
          <p>{t.termsPage.intro1[lang]}</p>
          <p>{t.termsPage.intro2[lang]}</p>
          <p>{t.termsPage.intro3[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
}

function Body() {
  const { lang } = useLanguage();
  const { email, href: emailHref, copy, copied } = useObfuscatedEmail();
  const emailLabel = lang === "bg" ? "Имейл" : "Email";

  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-16 md:px-10 md:pt-16 md:pb-20">
        <ol className="space-y-12 md:space-y-14">
          {t.termsPage.sections.map((section, i) => (
            <motion.li
              key={section.title.en}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
            >
              <h2 className="mb-4 font-serif text-[1.5rem] leading-tight tracking-tight text-foreground md:text-[1.75rem]">
                {section.title[lang]}
              </h2>
              <div className="max-w-3xl space-y-4 text-[15px] leading-[1.85] text-muted md:text-base">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p[lang]}</p>
                ))}
                {"emailIntro" in section && section.emailIntro ? (
                  <div className="pt-1">
                    <p>{section.emailIntro[lang]}</p>
                    <div className="relative mt-1 inline-block">
                      <a
                        href={emailHref ?? "#"}
                        onClick={(e) => {
                          if (!emailHref) {
                            e.preventDefault();
                            return;
                          }
                          copy();
                        }}
                        className="text-accent underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
                      >
                        {email ?? emailLabel}
                      </a>
                      <span
                        aria-live="polite"
                        className={`pointer-events-none absolute left-0 top-full mt-1 whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-accent transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
                      >
                        {t.nav.emailCopied[lang]}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ContactBlock() {
  const { lang } = useLanguage();
  const { email, href: emailHref, copy, copied } = useObfuscatedEmail();
  const emailLabel = lang === "bg" ? "Имейл" : "Email";

  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.termsPage.contactLabel[lang]}
          </p>
          <p className="max-w-3xl text-[15px] leading-[1.85] text-muted md:text-base">
            {t.termsPage.contactIntro[lang]}
          </p>
          <div className="relative mt-6 inline-block">
            <a
              href={emailHref ?? "#"}
              onClick={(e) => {
                if (!emailHref) {
                  e.preventDefault();
                  return;
                }
                copy();
              }}
              className="font-serif text-[1.25rem] italic text-accent transition-colors hover:text-foreground md:text-[1.4rem]"
            >
              {email ?? emailLabel}
            </a>
            <span
              aria-live="polite"
              className={`pointer-events-none absolute left-0 top-full mt-1 whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-accent transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
            >
              {t.nav.emailCopied[lang]}
            </span>
          </div>
          <p className="mt-8 max-w-3xl text-[15px] leading-[1.85] text-muted md:text-base">
            {t.termsPage.contactOutro[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
