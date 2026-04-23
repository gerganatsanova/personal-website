"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { sortedArticles } from "@/content/articles";

export function ArticlesPreview() {
  const { lang } = useLanguage();

  const preview = sortedArticles.slice(0, 4);
  if (preview.length === 0) return null;
  const [featured, ...rest] = preview;

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-20 md:pb-16">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden />
              {t.articles.kicker[lang]}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t.articles.titleLead[lang]}
              <br className="hidden sm:inline" />{" "}
              <span className="italic text-accent">
                {t.articles.titleAccent[lang]}
              </span>
            </h2>
          </div>
          <Link
            href="/articles"
            className="group hidden items-center text-sm font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
          >
            {t.articles.viewAll[lang]}
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-14"
        >
          <Link
            href={`/articles/${featured.slug}`}
            className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-7">
              <Image
                src={featured.cover}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.12))",
                }}
              />
            </div>

            <div className="flex flex-col justify-center md:col-span-5">
              <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-subtle">
                <span className="h-px w-6 bg-accent" aria-hidden />
                <span>{featured.displayDate[lang]}</span>
              </div>
              <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl lg:text-[2.5rem]">
                {featured.title[lang]}
              </h3>
              {featured.excerpt[lang] && (
                <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
                  {featured.excerpt[lang]}
                </p>
              )}
              <span className="mt-7 inline-flex items-center text-sm font-medium text-foreground">
                {t.articles.readCta[lang]}
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Rest of articles — list with small thumbnails */}
        <div className="mt-16 border-t border-border/60">
          {rest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/articles/${article.slug}`}
                className="group grid grid-cols-[84px_1fr_auto] items-center gap-5 border-b border-border/60 py-6 transition-colors hover:bg-foreground/[0.02] md:grid-cols-[128px_auto_1fr_auto] md:gap-x-6 md:py-7"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] h-16 w-[84px] overflow-hidden rounded-sm md:h-auto md:w-32">
                  <Image
                    src={article.cover}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Date (desktop only in its own column) */}
                <div className="hidden text-[11px] uppercase tracking-[0.18em] text-subtle md:block">
                  <span className="whitespace-nowrap">
                    {article.displayDate[lang]}
                  </span>
                </div>

                {/* Title (mobile shows date above) */}
                <div className="min-w-0">
                  <div className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-subtle md:hidden">
                    <span>{article.displayDate[lang]}</span>
                  </div>
                  <h3 className="font-serif text-lg leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl lg:text-2xl">
                    {article.title[lang]}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-sm text-subtle">
                  <span
                    aria-hidden
                    className="inline-block text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "view all" link */}
        <div className="mt-10 md:hidden">
          <Link
            href="/articles"
            className="group inline-flex items-center text-sm font-medium text-foreground hover:text-accent"
          >
            {t.articles.viewAllMobile[lang]}
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
