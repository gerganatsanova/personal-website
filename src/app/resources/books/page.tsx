"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { fadeUp, EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { sortedBooks, type Book } from "@/content/books";

export default function BooksPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <List />
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
          {t.resources.booksPageKicker[lang]}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="font-serif text-[2rem] leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
        >
          {t.resources.booksPageTitleLead[lang]}{" "}
          <span className="italic text-accent">
            {t.resources.booksPageTitleAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-[60ch] text-[15px] leading-[1.75] text-muted md:text-base"
        >
          {t.resources.booksPageIntro[lang]}
        </motion.p>
      </div>
    </section>
  );
}

function List() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-4">
          {sortedBooks.map((book, i) => (
            <BookGridCard key={book.slug} book={book} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookGridCard({ book, delay }: { book: Book; delay: number }) {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="group flex flex-col"
    >
      <a
        href={book.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[3/4] overflow-hidden rounded-sm border border-border/60"
      >
        <Image
          src={book.cover}
          alt={t.resources.bookCoverAlt[lang]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
      </a>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[10px] uppercase tracking-[0.2em] text-subtle">
          {book.type[lang]}
        </p>
        <h3 className="mt-2 font-serif text-lg leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl">
          <a
            href={book.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.title[lang]}
          </a>
        </h3>

        <a
          href={book.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-5 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-accent"
        >
          {t.resources.bookOrderCta[lang]}
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
