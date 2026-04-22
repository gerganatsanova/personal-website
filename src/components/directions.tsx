"use client";

import { motion } from "motion/react";
import Link from "next/link";

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

export function Directions() {
  return (
    <section className="relative border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        {/* Intro line */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center font-serif text-2xl leading-snug text-foreground md:text-3xl lg:text-[2.25rem]"
        >
          Растежът не се случва на парче. В{" "}
          <span className="italic text-accent">кариерата</span> и в{" "}
          <span className="italic text-accent">живота</span> — това е една и
          съща крачка.
        </motion.p>

        {/* Two-column directions */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-[1fr_auto_1fr] md:gap-0">
          {/* Column 1 — Work */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="md:pr-10 lg:pr-16"
          >
            <p className="mb-5 font-serif text-sm italic tracking-wide text-accent">
              Професионално
            </p>
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              Растеж
              <br />в работата.
            </h3>
            <p className="mt-7 max-w-md text-[15px] leading-[1.75] text-muted md:text-base">
              Кариерата заема повече от третина от живота ни. Когато растеш в
              нея — в яснота, в увереност, в лидерско присъствие — промяната не
              остава в офиса. Тя става начинът, по който се чувстваш всеки ден.
              Да се развиваш професионално е акт на самоуважение.
            </p>
            <Link
              href="/work-with-me"
              className="group mt-8 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Научи повече
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>

          <div
            aria-hidden
            className="hidden md:block md:w-px md:bg-border"
          />

          {/* Column 2 — Life */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="md:pl-10 lg:pl-16"
          >
            <p className="mb-5 font-serif text-sm italic tracking-wide text-accent">
              Личностно
            </p>
            <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              Растеж
              <br />в живота.
            </h3>
            <p className="mt-7 max-w-md text-[15px] leading-[1.75] text-muted md:text-base">
              Най-дълбоките промени не се случват на работното място, а вътре в
              нас. Когато развиваш осъзнатост, яснота и вътрешна увереност,
              започваш да избираш — вместо да реагираш. Личностният растеж е
              тихата, но най-важната работа.
            </p>
            <Link
              href="/work-with-me"
              className="group mt-8 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Научи повече
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Unifying line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-20 flex max-w-xl flex-col items-center text-center md:mt-28"
        >
          <span
            aria-hidden
            className="mb-6 h-px w-12 bg-accent"
          />
          <p className="font-serif text-lg italic leading-relaxed text-muted md:text-xl">
            Не можеш да растеш истински в едното — без да растеш и в другото.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
