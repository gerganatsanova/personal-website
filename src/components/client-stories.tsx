"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { fullTestimonials } from "@/content/testimonials";

export function ClientStories() {
  const { lang } = useLanguage();
  const publishedTestimonials = fullTestimonials.filter(
    (testimonial) => !testimonial.id.startsWith("testimonial-demo-"),
  );

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
          <h1 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.testimonials.fullTitleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.testimonials.fullTitleAccent[lang]}
            </span>
          </h1>
        </motion.div>

        <div className="mt-12 space-y-5 md:mt-16 md:space-y-6">
          {publishedTestimonials.map((story, index) => (
            <motion.article
              key={`${lang}-${story.id}`}
              id={story.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className={`scroll-mt-24 rounded-sm border border-border/70 px-6 py-7 md:px-10 md:py-9 ${
                index % 2 === 0 ? "bg-surface/45" : "bg-surface/20"
              }`}
            >
              <div className="grid gap-5 md:grid-cols-[3rem_1fr] md:gap-7">
                <span
                  aria-hidden
                  className="font-serif text-5xl leading-none text-accent/75"
                >
                  “
                </span>
                <div>
                  <blockquote className="max-w-[78ch] whitespace-pre-line font-serif text-xl leading-[1.55] tracking-[-0.01em] text-foreground md:text-2xl">
                    {story.quote[lang]}
                  </blockquote>
                  <div className="mt-7 border-t border-border/70 pt-5">
                    <p className="text-sm font-medium text-foreground">
                      {story.name[lang]}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted md:text-sm">
                      {story.context[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
