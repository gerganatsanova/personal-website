"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { homepageTestimonials } from "@/content/testimonials";

export function TestimonialsPreview() {
  const { lang } = useLanguage();
  return (
    <section id="testimonials" className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {t.testimonials.kicker[lang]}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.testimonials.titleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.testimonials.titleAccent[lang]}
            </span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {homepageTestimonials.map((testimonial, index) => (
            <motion.article
              key={`${lang}-${index}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              className="flex min-h-[21rem] flex-col rounded-sm border border-border/70 bg-surface/55 px-6 py-7 md:h-[23rem] md:min-h-0 lg:h-[22rem] lg:px-7 lg:py-8"
            >
              <span
                aria-hidden
                className="font-serif text-4xl leading-none text-accent/70"
              >
                “
              </span>
              <blockquote className="mt-3 font-serif text-[1.2rem] leading-[1.45] tracking-[-0.01em] text-foreground lg:text-[1.28rem]">
                {testimonial.quote[lang]}
              </blockquote>

              <div className="mt-auto border-t border-border/70 pt-5">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.name[lang]}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {testimonial.context[lang]}
                </p>
              </div>
            </motion.article>
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
            <span
              aria-hidden
              className="ml-2 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
