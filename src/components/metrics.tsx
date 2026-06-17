"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function Metrics() {
  const { lang } = useLanguage();

  const metrics = [
    {
      value: t.metrics.featuredValue[lang],
      label: t.metrics.featuredLabel[lang],
    },
    {
      value: t.metrics.participantsValue[lang],
      label: t.metrics.participantsLabel[lang],
    },
    {
      value: t.metrics.projectsValue[lang],
      label: t.metrics.projectsLabel[lang],
    },
    {
      value: t.metrics.trainingsValue[lang],
      label: t.metrics.trainingsLabel[lang],
    },
    {
      value: t.metrics.modulesValue[lang],
      label: t.metrics.modulesLabel[lang],
    },
    {
      value: t.metrics.coachingValue[lang],
      label: t.metrics.coachingLabel[lang],
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.metrics.kicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.metrics.titleLead[lang]}
            <br className="hidden sm:inline" />{" "}
            <span className="italic text-accent">
              {t.metrics.titleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.metrics.intro[lang]}
          </p>
        </motion.div>

        <div className="mt-8 border-y border-border/60 md:mt-10">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.06 }}
                className={`group relative flex min-h-[9.5rem] flex-col justify-between border-border/60 py-7 md:min-h-[10.5rem] md:px-10 md:py-8 ${
                  i > 0 ? "border-t md:border-t-0" : ""
                } ${
                  i % 3 !== 0 ? "md:border-l" : ""
                } ${
                  i >= 3 ? "md:border-t" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-12 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:left-10"
                />
                <div className="flex flex-col gap-5">
                  <span className="whitespace-nowrap font-serif text-[4.25rem] leading-[0.9] tracking-tight text-foreground md:text-[4.75rem] lg:text-[5.25rem]">
                    <span className="italic text-accent">
                      {metric.value.charAt(0)}
                    </span>
                    {metric.value.slice(1)}
                  </span>
                  <span className="max-w-[14rem] text-[11px] uppercase leading-relaxed tracking-[0.2em] text-muted">
                    {metric.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
