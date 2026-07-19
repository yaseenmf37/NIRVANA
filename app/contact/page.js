import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = {
  title: "تماس با ما | طراحی نیروانا",
  description: "برای مشاوره رایگان، و دریافت قیمت با ما تماس بگیرید.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تماس با ما"
        title="با ما در ارتباط باشید"
        lead="برای مشاوره فرم را پر کنید تا با شما تماس گرفته شود یا مستقیم تماس بگیرید."
        image="/img/contact-hero.jpg"
      />
      <Contact />
    </>
  );
}
