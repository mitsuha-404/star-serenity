import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { ReadingForm } from "@/components/landing/ReadingForm";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { FloatingActions } from "@/components/landing/FloatingActions";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Numera — Free Lucky Number Reading & Numerology Consultation" },
      {
        name: "description",
        content:
          "Claim your free lucky number reading. Premium numerology guidance for love, career, relationships, and life purpose. Trusted spiritual consultations.",
      },
      { property: "og:title", content: "Numera — Free Lucky Number Reading" },
      {
        property: "og:description",
        content:
          "Discover the numbers shaping your destiny. Free lucky number reading and premium numerology consultations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "keywords", content: "numerology consultation, free numerology reading, lucky number reading, numerology guidance, relationship numerology, career numerology, spiritual guidance, life path numerology" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Numera Numerology",
          description: "Premium numerology consultations and free lucky number readings.",
          serviceType: "Numerology Consultation",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <ReadingForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
