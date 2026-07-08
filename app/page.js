import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Materials from "@/components/Materials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <FeaturedProjects limit={6} />
      <About />
      <Materials />
      <CTA />
    </>
  );
}
