import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export const metadata = {
  title: "نمونه‌کارها | کابینت لوکس",
  description: "گالری پروژه‌های ساخت کابینت، ساخت کلبه چوبی و طراحی کابینت.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="نمونه‌کارها"
        title="پروژه‌های ما"
        lead="مجموعه‌ای از کارهای انجام‌شده در سه حوزه ساخت کابینت، ساخت کلبه و طراحی کابینت."
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
      />
      <Projects />
      <CTA />
    </>
  );
}
