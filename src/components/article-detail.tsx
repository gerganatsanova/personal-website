"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { SectionDivider } from "@/components/section-divider";
import type { Article } from "@/content/articles";

type Props = {
  article: Article;
  others: Article[];
};

export function ArticleDetail({ article, others }: Props) {
  const { lang } = useLanguage();
  const body = article.body[lang];

  const [recommendations, setRecommendations] = useState<Article[]>(() =>
    others.slice(0, 2),
  );
  useEffect(() => {
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    setRecommendations(shuffled.slice(0, 2));
  }, [others]);

  // Return to wherever the user came from in the articles list — preserves
  // their search term and pagination. Falls back to /articles.
  const [backHref, setBackHref] = useState("/articles");
  useEffect(() => {
    const saved = sessionStorage.getItem("articlesPath");
    if (saved) setBackHref(saved);
  }, []);

  return (
    <article className="relative">
      {/* Top bar: back link */}
      <div className="mx-auto max-w-5xl px-6 pt-10 md:px-10 md:pt-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-[11px] uppercase tracking-[0.22em] text-subtle"
        >
          <Link
            href={backHref}
            className="group inline-flex items-center text-muted transition-colors hover:text-foreground"
          >
            <span className="mr-2 inline-block transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            {t.articles.backToArticles[lang]}
          </Link>
        </motion.div>
      </div>

      {/* Title block */}
      <header className="mx-auto max-w-5xl px-6 pt-12 pb-10 md:px-10 md:pt-16 md:pb-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {article.displayDate[lang]}
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {article.title[lang]}
          </h1>
          {article.excerpt[lang] && (
            <p className="mt-8 max-w-3xl text-lg leading-[1.6] text-muted md:text-xl md:leading-[1.55]">
              {article.excerpt[lang]}
            </p>
          )}
        </motion.div>
      </header>

      {/* Hero image — wide band */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="mx-auto max-w-5xl px-6 md:px-10"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm md:aspect-[2/1]">
          <Image
            src={article.cover}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Body */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="mx-auto max-w-4xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16"
      >
        <ArticleBody body={body} />

        <div className="mt-16 md:mt-20">
          <Link
            href={backHref}
            className="group inline-flex items-center text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
          >
            <span className="mr-2 inline-block transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            {t.articles.backToArticles[lang]}
          </Link>
        </div>
      </motion.div>

      {/* Recommended articles */}
      {recommendations.length > 0 && (
        <nav aria-label={t.articles.moreArticles[lang]}>
          <SectionDivider />
          <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
            <p className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden />
              {t.articles.moreArticles[lang]}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {recommendations.map((rec) => (
                <RecommendationCard key={rec.slug} article={rec} />
              ))}
            </div>
          </div>
        </nav>
      )}
    </article>
  );
}

function RecommendationCard({ article }: { article: Article }) {
  const { lang } = useLanguage();
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block overflow-hidden rounded-sm border border-border/60 transition-colors hover:border-accent/60 hover:bg-foreground/[0.02]"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={article.cover}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 md:p-7">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-subtle">
          {article.displayDate[lang]}
        </span>
        <h3 className="font-serif text-xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent md:text-2xl">
          {article.title[lang]}
        </h3>
      </div>
    </Link>
  );
}

/**
 * Parses a small markdown-like format:
 *   - "## " at line start → <h2>
 *   - "> " at line start  → <blockquote>
 *   - blank lines         → paragraph breaks
 */
function ArticleBody({ body }: { body: string }) {
  const blocks = body
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-6 font-serif text-[17px] leading-[1.85] text-foreground/90 md:text-[18px]">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-12 font-serif text-2xl italic leading-tight tracking-tight text-foreground md:mt-16 md:text-3xl"
            >
              {block.slice(3).trim()}
            </h2>
          );
        }
        if (block.startsWith("> ")) {
          const quoteText = block
            .split("\n")
            .map((l) => (l.startsWith("> ") ? l.slice(2) : l))
            .join(" ")
            .trim()
            .replace(/^["„"]/, "")
            .replace(/["""]$/, "");
          return (
            <blockquote
              key={i}
              className="my-10 border-l-2 border-accent pl-6 font-serif text-xl italic leading-[1.6] text-foreground md:my-14 md:text-2xl md:leading-[1.55]"
            >
              {quoteText}
            </blockquote>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
