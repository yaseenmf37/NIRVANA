import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Materials from "@/components/Materials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects limit={6} />
      <About />
      <Materials />
      <CTA />
    </>
  );
}
