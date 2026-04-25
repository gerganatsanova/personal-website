"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";
import type { Book } from "@/content/books";

export function BookCard({ book }: { book: Book }) {
  const { lang } = useLanguage();

  return (
    <a
      href={book.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border/60 md:col-span-5">
        <Image
          src={book.cover}
          alt={t.resources.bookCoverAlt[lang]}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex flex-col justify-center md:col-span-7">
        <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-subtle">
          <span className="h-px w-6 bg-accent" aria-hidden />
          <span>{book.type[lang]}</span>
        </div>
        <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl lg:text-[2.5rem]">
          {book.title[lang]}
        </h3>
        <p className="mt-5 max-w-[55ch] text-[15px] leading-[1.75] text-muted md:text-base">
          {book.description[lang]}
        </p>
        <span className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all group-hover:bg-accent">
          {t.resources.bookCta[lang]}
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
        </span>
      </div>
    </a>
  );
}
