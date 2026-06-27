import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = {
  title: "تماس با ما | کابینت لوکس",
  description: "برای مشاوره رایگان، بازدید حضوری و دریافت قیمت با ما تماس بگیرید.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تماس با ما"
        title="با ما در ارتباط باشید"
        lead="برای مشاوره رایگان و بازدید حضوری فرم را پر کنید یا مستقیم تماس بگیرید."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      />
      <Contact />
    </>
  );
}
