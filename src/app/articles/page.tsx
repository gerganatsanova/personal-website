import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { CTA } from "@/components/cta";
import { ArticlesListView } from "@/components/articles-list-view";

export default function ArticlesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ArticlesListView page={1} />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}
