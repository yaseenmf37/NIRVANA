import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";

export const metadata = {
  title: "سوالات متداول | کابینت لوکس",
  description: "پاسخ پرسش‌های رایج درباره ساخت کابینت، ساخت کلبه چوبی و طراحی کابینت.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="پشتیبانی"
        title="سوالات متداول"
        lead="پاسخ پرسش‌هایی که بیشتر از ما پرسیده می‌شود."
        image="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80"
      />
      <Faq />
      <CTA />
    </>
  );
}
