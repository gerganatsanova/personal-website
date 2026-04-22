import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Directions } from "@/components/directions";
import { Services } from "@/components/services";
import { TopicsMarquee } from "@/components/topics-marquee";
import { ArticlesPreview } from "@/components/articles-preview";
import { Metrics } from "@/components/metrics";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Directions />
        <Services />
        <TopicsMarquee />
        <Metrics />
        <ArticlesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
