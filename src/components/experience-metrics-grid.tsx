"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import { getExperienceMetrics } from "@/lib/experience-metrics";
import { fadeUp } from "@/lib/motion";

type ExperienceMetricsGridProps = {
  variant?: "summary" | "full";
};

export function ExperienceMetricsGrid({
  variant = "full",
}: ExperienceMetricsGridProps) {
  const { lang } = useLanguage();
  const isSummary = variant === "summary";
  const allMetrics = getExperienceMetrics(lang);
  const metrics = isSummary ? allMetrics.slice(0, 4) : allMetrics;

  return (
    <div className="mt-8 border-y border-border/60 md:mt-10">
      <div
        className={`grid grid-cols-2 gap-0 ${
          isSummary ? "lg:grid-cols-4" : "md:grid-cols-3"
        }`}
      >
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className={getMetricCellClasses(i, isSummary)}
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 h-px w-12 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:left-10"
            />
            <div className="flex flex-col gap-5">
              <span className="whitespace-nowrap font-serif text-[3.1rem] leading-[0.9] tracking-tight text-foreground sm:text-[4rem] md:text-[4.75rem] lg:text-[5.25rem]">
                <span className="italic text-accent">
                  {metric.value.charAt(0)}
                </span>
                {metric.value.slice(1)}
              </span>
              <span className="max-w-[14rem] text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted md:text-[11px] md:tracking-[0.2em]">
                {metric.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getMetricCellClasses(index: number, isSummary: boolean) {
  const classes = [
    "group relative flex min-h-[8.5rem] flex-col justify-between border-border/60 px-4 py-6 sm:px-5 md:min-h-[10.5rem] md:px-10 md:py-8",
  ];

  if (index % 2 !== 0) {
    classes.push(isSummary ? "border-l" : "border-l md:border-l-0");
  }

  if (index >= 2) {
    classes.push(isSummary ? "border-t lg:border-t-0" : "border-t");
  }

  if (isSummary) {
    if (index > 0) classes.push("lg:border-l");
  } else {
    if (index % 3 !== 0) classes.push("md:border-l");
    if (index >= 3) classes.push("md:border-t");
  }

  return classes.join(" ");
}
