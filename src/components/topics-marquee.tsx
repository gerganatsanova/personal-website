"use client";

import { motion } from "motion/react";

const topics = [
  "Нагласа за растеж",
  "Лидерство",
  "Комуникация",
  "Себепознание",
  "Увереност",
  "Презентационни умения",
  "Разказване на истории",
  "Управление на промяната",
  "Личностен растеж",
  "Управление на времето",
  "Лидерско присъствие",
  "Меки умения",
];

export function TopicsMarquee() {
  return (
    <section
      aria-label="Теми, по които работя"
      className="relative overflow-hidden border-t border-border/50 py-5 md:py-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-40"
        style={{
          background:
            "linear-gradient(to right, var(--background), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-40"
        style={{
          background:
            "linear-gradient(to left, var(--background), transparent)",
        }}
      />

      <motion.div
        className="flex items-center gap-8 md:gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {[...topics, ...topics].map((topic, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-8 md:gap-10"
          >
            <span className="whitespace-nowrap font-serif text-base italic leading-none text-muted md:text-lg lg:text-xl">
              {topic}
            </span>
            <span
              aria-hidden
              className="h-1 w-1 shrink-0 rounded-full bg-accent/70"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
