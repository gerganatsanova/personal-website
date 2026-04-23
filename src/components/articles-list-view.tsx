"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import {
  getPageSlice,
  searchArticles,
  totalPages,
  type Article,
} from "@/content/articles";

type Props = {
  /** 1-based page number. */
  page: number;
};

export function ArticlesListView({ page }: Props) {
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");

  const pages = totalPages();

  const isSearching = query.trim().length > 0;
  const results = useMemo(
    () => (isSearching ? searchArticles(query, lang) : []),
    [isSearching, query, lang],
  );

  const pageArticles = isSearching ? results : getPageSlice(page);
  const showFeatured = !isSearching && page === 1 && pageArticles.length > 0;
  const featured = showFeatured ? pageArticles[0] : null;
  const rest = showFeatured ? pageArticles.slice(1) : pageArticles;

  return (
    <>
      <Intro />

      <div className="sticky top-[calc(3.5rem+2px)] z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.25 }}
          className="mx-auto max-w-5xl px-6 py-3 md:px-10 md:py-3.5"
        >
          <SearchBox
            value={query}
            onChange={setQuery}
            lang={lang}
          />
        </motion.div>
      </div>

      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pt-14 pb-20 md:px-10 md:pt-16 md:pb-24">
          {isSearching && (
            <SearchSummary count={results.length} query={query} lang={lang} />
          )}

          {featured && <Featured article={featured} lang={lang} />}

          {rest.length > 0 && (
            <div
              className={`border-t border-border/60 ${
                featured ? "mt-14 md:mt-16" : ""
              }`}
            >
              {rest.map((article, i) => (
                <CompactRow
                  key={article.slug}
                  article={article}
                  index={i}
                  lang={lang}
                />
              ))}
            </div>
          )}

          {isSearching && results.length === 0 && (
            <p className="py-16 text-center text-[15px] text-muted">
              {t.articles.searchNoResults[lang]}
            </p>
          )}

          {!isSearching && pages > 1 && (
            <Pagination currentPage={page} totalPages={pages} lang={lang} />
          )}
        </div>
      </section>
    </>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:px-10 md:pt-24 md:pb-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-10 bg-accent" aria-hidden />
            {t.articles.kicker[lang]}
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.articles.titleLead[lang]}{" "}
            <span className="italic text-accent">
              {t.articles.titleAccent[lang]}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-muted md:text-base md:leading-[1.8]">
            {t.articles.pageIntro[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Search ---------------- */
function SearchBox({
  value,
  onChange,
  lang,
}: {
  value: string;
  onChange: (v: string) => void;
  lang: "bg" | "en";
}) {
  return (
    <div className="relative">
      <label htmlFor="articles-search" className="sr-only">
        {t.articles.searchPlaceholder[lang]}
      </label>
      <svg
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtle"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        id="articles-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`${t.articles.searchPlaceholder[lang]} ${t.articles.searchPlaceholderHint[lang]}`}
        className="w-full rounded-sm border-2 border-border bg-surface py-3 pl-11 pr-11 text-[15px] text-foreground shadow-[inset_0_1px_0_rgba(0,0,0,0.02)] focus:border-accent focus:outline-none focus:ring-0"
      />
      {!value && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 truncate pr-11 text-[15px] text-subtle"
        >
          <span>{t.articles.searchPlaceholder[lang]} </span>
          <span className="italic">
            {t.articles.searchPlaceholderHint[lang]}
          </span>
        </div>
      )}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label={t.articles.searchClear[lang]}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-subtle transition-colors hover:text-foreground"
        >
          <svg
            aria-hidden
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

function SearchSummary({
  count,
  query,
  lang,
}: {
  count: number;
  query: string;
  lang: "bg" | "en";
}) {
  const countWord =
    count === 1
      ? t.articles.searchResultsCountOne[lang]
      : t.articles.searchResultsCountMany[lang];
  return (
    <p className="mb-10 text-[13px] uppercase tracking-[0.18em] text-subtle md:mb-12">
      {count} {countWord} · {t.articles.searchResultsFor[lang]}{" "}
      <span className="text-foreground normal-case tracking-normal">
        „{query}"
      </span>
    </p>
  );
}

/* ---------------- Featured (page 1 only) ---------------- */
function Featured({ article, lang }: { article: Article; lang: "bg" | "en" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-7">
          <Image
            src={article.cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
            priority
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
            <span>{article.displayDate[lang]}</span>
          </div>
          <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl lg:text-[2.5rem]">
            {article.title[lang]}
          </h2>
          {article.excerpt[lang] && (
            <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
              {article.excerpt[lang]}
            </p>
          )}
          <span className="mt-7 inline-flex items-center text-sm font-medium text-foreground">
            {t.articles.readCta[lang]}
            <span
              aria-hidden
              className="ml-2 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ---------------- Compact list row ---------------- */
function CompactRow({
  article,
  index,
  lang,
}: {
  article: Article;
  index: number;
  lang: "bg" | "en";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ delay: Math.min(index * 0.04, 0.2) }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="group grid grid-cols-[84px_1fr_auto] items-center gap-5 border-b border-border/60 py-6 transition-colors hover:bg-foreground/[0.02] md:grid-cols-[128px_auto_1fr_auto] md:gap-x-6 md:py-7"
      >
        <div className="relative aspect-[4/3] h-16 w-[84px] overflow-hidden rounded-sm md:h-auto md:w-32">
          <Image
            src={article.cover}
            alt=""
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="hidden text-[11px] uppercase tracking-[0.18em] text-subtle md:block">
          <span className="whitespace-nowrap">{article.displayDate[lang]}</span>
        </div>

        <div className="min-w-0">
          <div className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-subtle md:hidden">
            <span>{article.displayDate[lang]}</span>
          </div>
          <h3 className="font-serif text-lg leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl lg:text-2xl">
            {article.title[lang]}
          </h3>
        </div>

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
  );
}

/* ---------------- Pagination ---------------- */
function Pagination({
  currentPage,
  totalPages,
  lang,
}: {
  currentPage: number;
  totalPages: number;
  lang: "bg" | "en";
}) {
  const hrefFor = (n: number) => (n === 1 ? "/articles" : `/articles/page/${n}`);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex flex-col items-center gap-5 md:mt-20"
    >
      <div className="flex items-center gap-1">
        <PageLink
          href={prev ? hrefFor(prev) : null}
          label={t.articles.paginationPrev[lang]}
          arrow="left"
        />
        <ul className="mx-2 flex items-center gap-1">
          {pages.map((n) => {
            const active = n === currentPage;
            return (
              <li key={n}>
                {active ? (
                  <span
                    aria-current="page"
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm bg-foreground px-3 text-sm font-medium text-background"
                  >
                    {n}
                  </span>
                ) : (
                  <Link
                    href={hrefFor(n)}
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm px-3 text-sm text-muted transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                  >
                    {n}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <PageLink
          href={next ? hrefFor(next) : null}
          label={t.articles.paginationNext[lang]}
          arrow="right"
        />
      </div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
        {t.articles.paginationPageLabel[lang]} {currentPage}{" "}
        {t.articles.paginationOf[lang]} {totalPages}
      </p>
    </nav>
  );
}

function PageLink({
  href,
  label,
  arrow,
}: {
  href: string | null;
  label: string;
  arrow: "left" | "right";
}) {
  const glyph = arrow === "left" ? "←" : "→";
  if (!href) {
    return (
      <span
        aria-disabled
        className="inline-flex h-9 items-center justify-center rounded-sm px-3 text-sm text-subtle opacity-40"
      >
        {arrow === "left" ? (
          <>
            <span aria-hidden className="mr-1.5">
              {glyph}
            </span>
            {label}
          </>
        ) : (
          <>
            {label}
            <span aria-hidden className="ml-1.5">
              {glyph}
            </span>
          </>
        )}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="group inline-flex h-9 items-center justify-center rounded-sm px-3 text-sm text-muted transition-colors hover:text-foreground"
    >
      {arrow === "left" ? (
        <>
          <span
            aria-hidden
            className="mr-1.5 transition-transform group-hover:-translate-x-0.5"
          >
            {glyph}
          </span>
          {label}
        </>
      ) : (
        <>
          {label}
          <span
            aria-hidden
            className="ml-1.5 transition-transform group-hover:translate-x-0.5"
          >
            {glyph}
          </span>
        </>
      )}
    </Link>
  );
}
