"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const articles: Article[] = [
  {
    slug: "uverenost-i-deystvieto",
    title: "Защо увереността не идва преди действието",
    excerpt:
      "Чакаме да се почувстваме готови, преди да направим крачка. Истината е, че увереността не е предпоставка — тя е резултат. Кратко есе за това как се формира вътрешната сигурност и защо повечето хора я търсят на грешното място.",
    date: "Март 2026",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80",
  },
  {
    slug: "leadership-vs-management",
    title: "Разликата между да ръководиш и да управляваш",
    excerpt: "",
    date: "Февруари 2026",
    image:
      "https://images.unsplash.com/photo-1554774853-719586ee6f64?w=800&q=80",
  },
  {
    slug: "petteto-vaprosa",
    title: "Петте въпроса, които задавам на всеки нов клиент",
    excerpt: "",
    date: "Януари 2026",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
  },
  {
    slug: "chesten-sas-sebe-si",
    title: "Какво означава „да си честен със себе си“ на практика",
    excerpt: "",
    date: "Декември 2025",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function ArticlesPreview() {
  const [featured, ...rest] = articles;

  return (
    <section className="relative border-t border-border/50">
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
              Статии
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Мисли, записани
              <br className="hidden sm:inline" />{" "}
              <span className="italic text-accent">на глас.</span>
            </h2>
          </div>
          <Link
            href="/articles"
            className="group hidden items-center text-sm font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
          >
            Виж всички
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
                src={featured.image}
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
                <span>{featured.date}</span>
              </div>
              <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl lg:text-[2.5rem]">
                {featured.title}
              </h3>
              {featured.excerpt && (
                <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
                  {featured.excerpt}
                </p>
              )}
              <span className="mt-7 inline-flex items-center text-sm font-medium text-foreground">
                Прочети
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
                    src={article.image}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Date (desktop only in its own column) */}
                <div className="hidden text-[11px] uppercase tracking-[0.18em] text-subtle md:block">
                  <span className="whitespace-nowrap">{article.date}</span>
                </div>

                {/* Title (mobile shows date above) */}
                <div className="min-w-0">
                  <div className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-subtle md:hidden">
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl lg:text-2xl">
                    {article.title}
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
            Виж всички статии
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
