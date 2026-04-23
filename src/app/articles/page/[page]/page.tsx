import { redirect, notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { ArticlesListView } from "@/components/articles-list-view";
import { totalPages } from "@/content/articles";

export function generateStaticParams() {
  const pages = totalPages();
  // Page 1 lives at /articles, so skip it here.
  return Array.from({ length: Math.max(0, pages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function ArticlesPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageStr } = await params;
  const page = Number.parseInt(pageStr, 10);

  if (!Number.isFinite(page) || page < 1) notFound();
  if (page === 1) redirect("/articles");
  if (page > totalPages()) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <ArticlesListView page={page} />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}
