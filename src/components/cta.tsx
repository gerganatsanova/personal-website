"use client";

import { motion } from "motion/react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-28 text-center md:px-10 md:pt-20 md:pb-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            Следваща крачка
            <span className="h-px w-8 bg-accent" aria-hidden />
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Да започнем с{" "}
            <span className="italic text-accent">разговор.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.8] text-muted md:text-base">
            Ако нещо тук те докосна — пиши ми. Започваме с кратък
            разговор, за да видим дали си пасваме като стил и посока,
            и какво точно искаш да промениш.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:border-accent hover:bg-accent"
            >
              Запиши разговор
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <Link
              href="/work-with-me"
              className="group inline-flex items-center text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              или виж как работим заедно
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
