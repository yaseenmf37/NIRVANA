import PageHero from "@/components/PageHero";
import StepForm from "@/components/StepForm";

export const metadata = {
  title: "فرم درخواست | کابینت نیروانا",
  description: "درخواست خود را قدم‌به‌قدم ثبت کنید تا کارشناسان ما با شما تماس بگیرند.",
};

export default function FormPage() {
  return (
    <>
      <PageHero
        eyebrow="فرم درخواست"
        title="بیایید پروژه‌تان را بشناسیم"
        lead="به چند سوال کوتاه پاسخ دهید؛ قدم‌به‌قدم و سریع."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      />
      <section className="form-section">
        <div className="container">
          <StepForm />
        </div>
      </section>
    </>
  );
}
