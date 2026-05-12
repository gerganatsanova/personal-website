"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { BookCard } from "@/components/book-card";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { sortedBooks } from "@/content/books";
import { materials } from "@/content/materials";

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <Paid />
        <SectionDivider />
        <Materials />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

/* ---------------- 1. Intro ---------------- */
function Intro() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          {t.resources.kicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.resources.titleLead[lang]}{" "}
          <span className="italic text-accent">
            {t.resources.titleAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-8 max-w-[60ch] text-[15px] leading-[1.75] text-muted md:text-base"
        >
          {t.resources.intro[lang]}
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- 2. Paid resources (paginator) ---------------- */
function Paid() {
  const { lang } = useLanguage();
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const books = sortedBooks;
  const current = books[index];
  const total = books.length;
  const showPagination = total > 1;

  const goTo = (next: number) => {
    if (next < 0 || next >= total || next === index) return;
    setState([next, next > index ? 1 : -1]);
  };

  const prev = index > 0 ? index - 1 : null;
  const next = index < total - 1 ? index + 1 : null;

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden />
              {t.resources.paidKicker[lang]}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {t.resources.paidTitleLead[lang]}{" "}
              <span className="italic text-accent">
                {t.resources.paidTitleAccent[lang]}
              </span>
            </h2>
          </div>

          {showPagination && (
            <Link
              href="/resources/books"
              className="group hidden items-center text-sm font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
            >
              {t.resources.viewAll[lang]}
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          )}
        </motion.div>

        <div className="mt-14 overflow-hidden md:mt-16">
          <motion.div
            key={current.slug}
            initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-lg border border-border/60 bg-surface p-6 md:p-10"
          >
            <BookCard book={current} />
          </motion.div>
        </div>

        {showPagination && (
          <nav
            aria-label="Books pagination"
            className="mt-14 flex flex-col items-center gap-5 md:mt-16"
          >
            <div className="flex items-center gap-1">
              <PageButton
                onClick={prev !== null ? () => goTo(prev) : null}
                label={t.articles.paginationPrev[lang]}
                arrow="left"
              />
              <ul className="mx-2 flex items-center gap-1">
                {books.map((book, i) => {
                  const active = i === index;
                  return (
                    <li key={book.slug}>
                      {active ? (
                        <span
                          aria-current="page"
                          className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm bg-foreground px-3 text-sm font-medium text-background"
                        >
                          {i + 1}
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => goTo(i)}
                          className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm px-3 text-sm text-muted transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                        >
                          {i + 1}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
              <PageButton
                onClick={next !== null ? () => goTo(next) : null}
                label={t.articles.paginationNext[lang]}
                arrow="right"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
              {t.articles.paginationPageLabel[lang]} {index + 1}{" "}
              {t.articles.paginationOf[lang]} {total}
            </p>
          </nav>
        )}

        {showPagination && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/resources/books"
              className="group inline-flex items-center text-sm font-medium text-foreground hover:text-accent md:hidden"
            >
              {t.resources.viewAllMobile[lang]}
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function PageButton({
  onClick,
  label,
  arrow,
}: {
  onClick: (() => void) | null;
  label: string;
  arrow: "left" | "right";
}) {
  const glyph = arrow === "left" ? "←" : "→";
  if (!onClick) {
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
    <button
      type="button"
      onClick={onClick}
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
    </button>
  );
}

/* ---------------- 3. Materials ---------------- */
// Each page of the Materials section shows this many items side by side.
const MATERIALS_PAGE_SIZE = 2;

function Materials() {
  const { lang } = useLanguage();

  const [[pageIndex, direction], setState] = useState<[number, number]>([0, 1]);
  const totalPages = Math.max(1, Math.ceil(materials.length / MATERIALS_PAGE_SIZE));
  const showPagination = totalPages > 1;
  const currentItems = materials.slice(
    pageIndex * MATERIALS_PAGE_SIZE,
    (pageIndex + 1) * MATERIALS_PAGE_SIZE,
  );

  const goTo = (next: number) => {
    if (next < 0 || next >= totalPages || next === pageIndex) return;
    setState([next, next > pageIndex ? 1 : -1]);
  };

  const prevPage = pageIndex > 0 ? pageIndex - 1 : null;
  const nextPage = pageIndex < totalPages - 1 ? pageIndex + 1 : null;

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden />
              {t.resources.materialsKicker[lang]}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {t.resources.materialsTitleLead[lang]}{" "}
              <span className="italic text-accent">
                {t.resources.materialsTitleAccent[lang]}
              </span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-muted md:text-base">
              {t.resources.materialsIntro[lang]}
            </p>
          </div>

          {showPagination && (
            <Link
              href="/resources/materials"
              className="group hidden items-center text-sm font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
            >
              {t.resources.viewAll[lang]}
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          )}
        </motion.div>

        <div className="mt-14 overflow-hidden md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8"
            >
              {currentItems.map((material) => (
                <div
                  key={material.slug}
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
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {showPagination && (
          <nav
            aria-label="Materials pagination"
            className="mt-14 flex flex-col items-center gap-5 md:mt-16"
          >
            <div className="flex items-center gap-1">
              <PageButton
                onClick={prevPage !== null ? () => goTo(prevPage) : null}
                label={t.articles.paginationPrev[lang]}
                arrow="left"
              />
              <ul className="mx-2 flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => {
                  const active = i === pageIndex;
                  return (
                    <li key={i}>
                      {active ? (
                        <span
                          aria-current="page"
                          className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm bg-foreground px-3 text-sm font-medium text-background"
                        >
                          {i + 1}
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => goTo(i)}
                          className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm px-3 text-sm text-muted transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                        >
                          {i + 1}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
              <PageButton
                onClick={nextPage !== null ? () => goTo(nextPage) : null}
                label={t.articles.paginationNext[lang]}
                arrow="right"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
              {t.articles.paginationPageLabel[lang]} {pageIndex + 1}{" "}
              {t.articles.paginationOf[lang]} {totalPages}
            </p>
          </nav>
        )}

        {showPagination && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/resources/materials"
              className="group inline-flex items-center text-sm font-medium text-foreground hover:text-accent md:hidden"
            >
              {t.resources.viewAllMaterialsMobile[lang]}
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
