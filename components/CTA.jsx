import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="reveal">
          <h2>پروژه‌ای در ذهن دارید؟</h2>
          <p>همین حالا برای مشاوره رایگان و بازدید حضوری با ما تماس بگیرید.</p>
        </div>
        <Link href="/contact" className="btn btn--primary">
          شروع پروژه <span className="arrow">←</span>
        </Link>
      </div>
    </section>
  );
}
