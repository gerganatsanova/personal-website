"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function Recognition() {
  const { lang } = useLanguage();
  const situations = t.recognition.items[lang];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            <RecognitionTitle lang={lang} />
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.recognition.subtitle[lang]}
          </p>
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {situations.map((situation, i) => (
            <motion.li
              key={situation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ delay: i * 0.04 }}
              className="flex gap-4 rounded-lg border border-border/60 bg-surface p-5 md:p-6"
            >
              <span
                aria-hidden
                className="mt-3 h-px w-7 shrink-0 bg-accent"
              />
              <span className="text-[15px] leading-[1.75] text-muted md:text-base">
                {situation}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RecognitionTitle({ lang }: { lang: "bg" | "en" }) {
  return (
    <>
      {t.recognition.titleLead[lang]}{" "}
      <span className="italic text-accent">
        {t.recognition.titleAccent[lang]}
      </span>{" "}
      {t.recognition.titleRest[lang]}
    </>
  );
}
