"use client";

import { motion } from "motion/react";
import Link from "next/link";

type Service = {
  numeral: string;
  title: string;
  description: string;
  audience: string;
  href: string;
};

const services: Service[] = [
  {
    numeral: "I.",
    title: "1:1 Коучинг",
    description:
      "За хора в преход — нов етап в кариерата, ново ниво на отговорност или момент, в който нещо вътре иска промяна. Работим заедно за яснота, увереност и конкретни решения, които пасват на твоя живот, не на нечий чужд модел.",
    audience: "лидери, специалисти, предприемачи",
    href: "/work-with-me#coaching",
  },
  {
    numeral: "II.",
    title: "Фасилитация на екипи",
    description:
      "Стратегически сесии, работилници и разговори, които екипите често отлагат. Създавам пространство, в което хората говорят по същество — без защитни реакции и без излишна структура.",
    audience: "мениджъри, HR, предприемачи с екипи",
    href: "/work-with-me#facilitation",
  },
  {
    numeral: "III.",
    title: "Обучения и програми",
    description:
      "Програми по темите на soft skills и лидерско присъствие — комуникация, увереност, презентационни умения, storytelling. Създавам съдържание по поръчка или водя съществуващи модули.",
    audience: "организации и обучителни центрове",
    href: "/work-with-me#trainings",
  },
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

export function Services() {
  return (
    <section className="relative border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:px-10 md:pt-20 md:pb-32">
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
            Услуги
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Как работим <span className="italic text-accent">заедно.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            Три формата, една философия — растеж, който отговаря на твоя живот,
            не на нечий чужд модел.
          </p>
        </motion.div>

        {/* Services columns */}
        <div className="mt-10 grid grid-cols-1 gap-y-14 border-t border-border/60 pt-10 md:mt-12 md:grid-cols-3 md:gap-x-0 md:gap-y-0 md:pt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.12 }}
              className={`flex flex-col ${
                i > 0 ? "md:border-l md:border-border/60 md:pl-10" : "md:pr-10"
              } ${i < services.length - 1 ? "md:pr-10" : ""}`}
            >
              <div className="flex flex-col">
                <span className="font-serif text-sm italic text-accent">
                  {service.numeral}
                </span>
                <h3 className="mt-4 flex min-h-[4rem] items-start font-serif text-2xl leading-tight tracking-tight text-foreground md:min-h-[4.5rem] md:text-[1.75rem]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-6 text-[15px] leading-[1.75] text-muted">
                {service.description}
              </p>
              <p className="mt-auto pt-6 text-[11px] uppercase tracking-[0.18em] leading-relaxed text-subtle">
                За кого: {service.audience}
              </p>
              <Link
                href={service.href}
                className="group mt-8 inline-flex items-center self-start text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Научи повече
                <span
                  aria-hidden
                  className="ml-2 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
