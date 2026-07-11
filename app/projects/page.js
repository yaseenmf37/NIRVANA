import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export const metadata = {
  title: "نمونه‌کارها | طراحی نیروانا",
  description: "گالری پروژه‌های ساخت کابینت، ساخت کلبه چوبی و طراحی کابینت.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="نمونه‌کارها"
        title="پروژه‌های ما"
        lead="مجموعه‌ای از پروژه‌های انجام‌شده در زمینه طراحی کابینت، آنالیز و کات‌مستر؛ همراه با نمونه‌هایی از فضاهای مدرن و کلاسیک طراحی‌شده."
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
      />
      <Projects />
      <CTA />
    </>
  );
}
