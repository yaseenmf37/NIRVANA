import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="hero__eyebrow">طراحی لوکس، دقت بی‌نهایت</span>
          <h1 className="hero__title">
            خلق فضاهایی زیبا، <span>کاربردی و ماندگار</span>
          </h1>
          <p className="hero__desc">
            ما با ترکیب زیبایی، عملکرد و متریال‌های برتر، فضایی منحصربه‌فرد برای
            خانه شما خلق می‌کنیم.
          </p>
          <div className="hero__actions">
            {/* <Link href="/projects" className="btn btn--primary">
              مشاهده نمونه‌کارها <span className="arrow">←</span>
            </Link> */}
            <Link href="/contact" className="btn btn--outline">
              دریافت مشاوره
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
