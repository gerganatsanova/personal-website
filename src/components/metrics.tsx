"use client";

import { motion } from "motion/react";
import { ExperienceMetricsGrid } from "@/components/experience-metrics-grid";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function Metrics() {
  const { lang } = useLanguage();

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

        <ExperienceMetricsGrid variant="summary" />
      </div>
    </section>
  );
}
