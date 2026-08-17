"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { workTestimonials } from "@/content/testimonials";

export function WorkTestimonialsPreview() {
  const { lang } = useLanguage();
  return (
    <section id="client-stories" className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.testimonials.fullKicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.testimonials.workTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.testimonials.workTitleAccent[lang]}
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-muted md:text-base">
            {t.testimonials.workIntro[lang]}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {workTestimonials.map((testimonial, index) => (
            <a
              key={`${lang}-${testimonial.id}`}
              href={`/testimonials#${testimonial.id}`}
              className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <motion.article
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ delay: (index % 2) * 0.06 }}
                className="flex min-h-[18rem] flex-col rounded-sm border border-border/70 bg-surface/40 px-6 py-7 transition-colors group-hover:border-accent/50 group-hover:bg-surface/60 md:px-8 md:py-8"
              >
                <span aria-hidden className="font-serif text-4xl leading-none text-accent/70">
                  “
                </span>
                <blockquote className="mt-3 font-serif text-xl leading-[1.5] tracking-[-0.01em] text-foreground md:text-[1.35rem]">
                  {testimonial.quote[lang]}
                </blockquote>
                <div className="mt-auto border-t border-border/70 pt-5">
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name[lang]}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted md:text-sm">
                    {testimonial.context[lang]}
                  </p>
                </div>
              </motion.article>
            </a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-8 flex justify-end"
        >
          <Link
            href="/testimonials"
            className="group inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {t.testimonials.readAll[lang]}
            <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
