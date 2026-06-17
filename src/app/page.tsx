import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Directions } from "@/components/directions";
import { Recognition } from "@/components/recognition";
import { Services } from "@/components/services";
import { TopicsMarquee } from "@/components/topics-marquee";
import { ArticlesPreview } from "@/components/articles-preview";
import { Metrics } from "@/components/metrics";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Directions />
        <SectionDivider />
        <Recognition />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <TopicsMarquee />
        <SectionDivider />
        <Metrics />
        <SectionDivider />
        <ArticlesPreview />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}
