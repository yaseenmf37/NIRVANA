import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "رضایت مشتری | طراحی نیروانا",
  description:
    "ویدئوها، نظرات و تصاویر مشتریان درباره‌ی تجربه‌ی همکاری با تیم طراحی، آنالیز و کات‌مستر نیروانا.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="رضایت مشتری"
        title="رضایت مشتریان ما"
        lead="ویدئو، نظرات نوشتاری و تصاویر واقعی مشتریانی که پروژه‌شان را به ما سپردند."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      />
      <Testimonials />
      <CTA />
    </>
  );
}
