"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";
import { t } from "@/lib/translations";

export default function ArticlesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Intro />
        <SectionDivider />
        <ArticlesList />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  const { lang } = useLanguage();
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
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

/* ---------------- List ---------------- */
function ArticlesList() {
  const { lang } = useLanguage();

  const articles = [
    {
      slug: "uverenost-i-deystvieto",
      title: t.articles.item1Title[lang],
      excerpt: t.articles.item1Excerpt[lang],
      date: t.articles.item1Date[lang],
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80",
    },
    {
      slug: "leadership-vs-management",
      title: t.articles.item2Title[lang],
      excerpt: t.articles.item2Excerpt[lang],
      date: t.articles.item2Date[lang],
      image:
        "https://images.unsplash.com/photo-1554774853-719586ee6f64?w=1400&q=80",
    },
    {
      slug: "petteto-vaprosa",
      title: t.articles.item3Title[lang],
      excerpt: t.articles.item3Excerpt[lang],
      date: t.articles.item3Date[lang],
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1400&q=80",
    },
    {
      slug: "chesten-sas-sebe-si",
      title: t.articles.item4Title[lang],
      excerpt: t.articles.item4Excerpt[lang],
      date: t.articles.item4Date[lang],
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:px-10 md:pt-20 md:pb-28">
        <div className="flex flex-col gap-16 md:gap-24">
          {articles.map((article, i) => {
            const imageRight = i % 2 === 1;
            return (
              <motion.article
                key={article.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="group grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center md:gap-12"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-6 md:aspect-[5/4] ${
                      imageRight ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
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
                  <div className="flex flex-col md:col-span-6">
                    <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-subtle">
                      <span className="h-px w-6 bg-accent" aria-hidden />
                      <span>{article.date}</span>
                    </div>
                    <h2 className="font-serif text-2xl leading-[1.2] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl lg:text-[2rem]">
                      {article.title}
                    </h2>
                    <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
                      {article.excerpt}
                    </p>
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

