"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import {
  materials,
  searchMaterials,
  type Material,
} from "@/content/materials";

export default function MaterialsPage() {
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;
  const results = useMemo(
    () => (isSearching ? searchMaterials(query, lang) : []),
    [isSearching, query, lang],
  );
  const visibleMaterials = isSearching ? results : materials;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <Search value={query} onChange={setQuery} lang={lang} />
        <SectionDivider />
        {isSearching && (
          <SearchSummary count={results.length} query={query} lang={lang} />
        )}
        <List materials={visibleMaterials} />
        {isSearching && results.length === 0 && (
          <p className="mx-auto max-w-6xl px-6 pb-16 text-center text-[15px] text-muted md:px-10">
            {t.resources.materialsSearchNoResults[lang]}
          </p>
        )}
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

function Intro() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-12 md:px-10 md:pt-16 md:pb-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-8"
        >
          <Link
            href="/resources"
            className="group inline-flex items-center text-[13px] text-muted transition-colors hover:text-foreground"
          >
            <span
              aria-hidden
              className="mr-2 transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            {t.resources.backToResources[lang]}
          </Link>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          {t.resources.materialsPageKicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.resources.materialsPageTitleLead[lang]}{" "}
          <span className="italic text-accent">
            {t.resources.materialsPageTitleAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-[60ch] text-[15px] leading-[1.75] text-muted md:text-base"
        >
          {t.resources.materialsPageIntro[lang]}
        </motion.p>
      </div>
    </section>
  );
}

function Search({
  value,
  onChange,
  lang,
}: {
  value: string;
  onChange: (v: string) => void;
  lang: "bg" | "en";
}) {
  return (
    <div className="sticky top-[calc(3.5rem+2px)] z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-6xl px-6 py-3 md:px-10 md:py-3.5"
      >
        <div className="relative">
          <label htmlFor="materials-search" className="sr-only">
            {t.resources.materialsSearchPlaceholder[lang]}
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
            id="materials-search"
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label={`${t.resources.materialsSearchPlaceholder[lang]} ${t.resources.materialsSearchPlaceholderHint[lang]}`}
            className="w-full rounded-sm border-2 border-border bg-surface py-3 pl-11 pr-11 text-[15px] text-foreground shadow-[inset_0_1px_0_rgba(0,0,0,0.02)] focus:border-accent focus:outline-none focus:ring-0"
          />
          {!value && (
            <div
              aria-hidden
              className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 truncate pr-11 text-[15px] text-subtle"
            >
              <span>{t.resources.materialsSearchPlaceholder[lang]} </span>
              <span className="italic">
                {t.resources.materialsSearchPlaceholderHint[lang]}
              </span>
            </div>
          )}
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              aria-label={t.resources.materialsSearchClear[lang]}
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
      </motion.div>
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
      ? t.resources.materialsSearchCountOne[lang]
      : t.resources.materialsSearchCountMany[lang];
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 md:px-10 md:pt-12">
      <p className="text-[13px] uppercase tracking-[0.18em] text-subtle">
        {count} {countWord} · {t.resources.materialsSearchResultsFor[lang]}{" "}
        <span className="text-foreground normal-case tracking-normal">
          {"„"}
          {query}
          {"“"}
        </span>
      </p>
    </div>
  );
}

function List({ materials }: { materials: Material[] }) {
  if (materials.length === 0) return null;
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {materials.map((material, i) => (
            <MaterialCard
              key={material.slug}
              material={material}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  material,
  delay,
}: {
  material: Material;
  delay: number;
}) {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="group relative flex flex-col items-center rounded-lg border border-border/60 bg-surface p-8 text-center transition-colors md:p-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted">
        {material.type[lang]}
      </p>
      <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground md:text-2xl">
        {material.title[lang]}
      </h3>
      <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.7] text-muted md:text-[15px]">
        {material.description[lang]}
      </p>
      <a
        href={material.file[lang]}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        {t.resources.openMaterialCta[lang]}
      </a>
    </motion.div>
  );
}
