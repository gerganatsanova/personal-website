"use client";

import { motion } from "motion/react";

type Metric = {
  value: string;
  label: string;
};

const featured: Metric = {
  value: "2 000+",
  label: "Участници в програми",
};

const secondary: Metric[] = [
  { value: "50+", label: "Управлявани проекти" },
  { value: "80+", label: "Проведени обучения" },
  { value: "300+", label: "1:1 коучинг сесии" },
  { value: "120+", label: "Обучителни модули" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Metrics() {
  return (
    <section className="relative border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
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
            Опит
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Зад думите —<br className="hidden sm:inline" />{" "}
            <span className="italic text-accent">практика.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            Над 9 години в learning &amp; development, коучинг и фасилитация —
            с хора, екипи и организации от различни сектори.
          </p>
        </motion.div>

        {/* Asymmetric metrics layout */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 border-t border-border/60 pt-14 md:mt-20 md:grid-cols-12 md:gap-x-14 md:pt-16">
          {/* Featured metric — big, left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col gap-4 md:col-span-5"
          >
            <span className="whitespace-nowrap font-serif text-[5.5rem] leading-[0.95] tracking-tight text-foreground md:text-[6.5rem] lg:text-[8rem]">
              <span className="italic text-accent">
                {featured.value.charAt(0)}
              </span>
              {featured.value.slice(1)}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] leading-relaxed text-muted">
              {featured.label}
            </span>
          </motion.div>

          {/* Secondary metrics — 2x2 grid, right */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:col-span-7 md:gap-x-10 md:gap-y-12 md:border-l md:border-border/60 md:pl-14">
            {secondary.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex flex-col gap-3"
              >
                <span className="whitespace-nowrap font-serif text-4xl leading-none tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                  <span className="italic text-accent">
                    {metric.value.charAt(0)}
                  </span>
                  {metric.value.slice(1)}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] leading-relaxed text-muted">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
