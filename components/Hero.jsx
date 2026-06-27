import Link from "next/link";

const features = [
  { icon: "◆", title: "متریال درجه یک", text: "استفاده از بهترین متریال‌های روز دنیا برای دوام و زیبایی بیشتر" },
  { icon: "✕", title: "طراحی اختصاصی", text: "طراحی اختصاصی بر اساس سلیقه و نیاز فضای شما" },
  { icon: "⛨", title: "ضمانت کیفیت", text: "ضمانت کتبی کیفیت و خدمات پس از اجرا" },
  { icon: "⚒", title: "نصب حرفه‌ای", text: "تیم نصب مجرب و آموزش‌دیده با دقت و سرعت بالا" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="hero__eyebrow">طراحی لوکس، کیفیت ماندگار</span>
          <h1 className="hero__title">
            کابینت‌هایی برای <span>زندگی بهتر</span>
          </h1>
          <p className="hero__desc">
            ما با ترکیب زیبایی، عملکرد و متریال‌های برتر، فضایی منحصربه‌فرد برای
            خانه شما خلق می‌کنیم.
          </p>
          <div className="hero__actions">
            <Link href="/projects" className="btn btn--primary">
              مشاهده نمونه‌کارها <span className="arrow">←</span>
            </Link>
            <Link href="/contact" className="btn btn--outline">
              دریافت مشاوره رایگان
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="features">
          {features.map((f) => (
            <div className="feature reveal" key={f.title}>
              <div className="feature__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
