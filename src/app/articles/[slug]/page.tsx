import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { ArticleDetail } from "@/components/article-detail";
import { sortedArticles, getArticleBySlug } from "@/content/articles";

export function generateStaticParams() {
  return sortedArticles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = sortedArticles.filter((a) => a.slug !== slug);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <ArticleDetail article={article} others={others} />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}
