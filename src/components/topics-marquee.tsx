"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function TopicsMarquee() {
  const { lang } = useLanguage();
  const topics = t.topicsMarquee.items[lang];

  return (
    <section
      aria-label={t.topicsMarquee.ariaLabel[lang]}
      className="relative overflow-hidden py-4 md:py-5"
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
        className="flex items-center gap-6 md:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 55,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {[...topics, ...topics].map((topic, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-6 md:gap-8"
          >
            <span className="whitespace-nowrap font-serif text-sm italic leading-none text-muted md:text-base lg:text-lg">
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
