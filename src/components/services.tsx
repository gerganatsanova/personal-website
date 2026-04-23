"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();

  const services = [
    {
      numeral: t.workWithMe.service1Numeral[lang],
      title: t.workWithMe.service1Title[lang],
      description: t.homeServices.service1Description[lang],
      href: "/work-with-me#coaching",
    },
    {
      numeral: t.workWithMe.service2Numeral[lang],
      title: t.workWithMe.service2Title[lang],
      description: t.homeServices.service2Description[lang],
      href: "/work-with-me#facilitation",
    },
    {
      numeral: t.workWithMe.service3Numeral[lang],
      title: t.workWithMe.service3Title[lang],
      description: t.homeServices.service3Description[lang],
      href: "/work-with-me#trainings",
    },
  ];

  return (
    <section className="relative">
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
            {t.homeServices.kicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.homeServices.titleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.homeServices.titleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
            {t.homeServices.subtitle[lang]}
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
                <h3 className="mt-4 flex min-h-[4rem] items-center font-serif text-2xl leading-tight tracking-tight text-foreground md:min-h-[4.5rem] md:text-[1.75rem]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-6 text-[15px] leading-[1.75] text-muted">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="group mt-auto inline-flex items-center self-start pt-8 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {t.directions.learnMore[lang]}
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
