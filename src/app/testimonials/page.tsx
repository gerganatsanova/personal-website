import { Nav } from "@/components/nav";
import { ClientStories } from "@/components/client-stories";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ClientStories />
        <SectionDivider />
        <CTA />
      </main>
      <SectionDivider variant="thin" />
      <Footer />
    </>
  );
}
