import Link from "next/link";

export default function About({ variant }) {
  const isPage = variant === "page";
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__media reveal">
          <div className="about__img about__img--1" />
          <div className="about__img about__img--2" />
          <div className="about__img about__img--3" />
        </div>
        <div className="about__content reveal">
          <span className="section-head__eyebrow">درباره ما</span>
          <h2 className="about__title">ما زیبایی را به فضاهای شما می‌آوریم</h2>
          <p>
            ما یک تیم متخصص در زمینه طراحی، ساخت و اجرای کابینت‌های مدرن و کلاسیک
            و همچنین ساخت کلبه چوبی هستیم. هدف ما خلق فضایی است که ترکیبی از
            زیبایی، کارایی و کیفیت باشد.
          </p>
          <ul className="about__list">
            <li>بیش از ۱۰ سال تجربه در صنعت چوب</li>
            <li>استفاده از یراق‌آلات و متریال اروپایی</li>
            <li>تحویل به‌موقع و ضمانت کیفیت</li>
          </ul>
          <div className="stats">
            <div className="stat"><strong>۴۵۰+</strong><span>پروژه موفق</span></div>
            <div className="stat"><strong>۱۰</strong><span>سال تجربه</span></div>
            <div className="stat"><strong>۹۸٪</strong><span>رضایت مشتری</span></div>
          </div>
          <Link href={isPage ? "/contact" : "/about"} className="btn btn--primary">
            {isPage ? "درخواست مشاوره" : "درباره ما بیشتر بدانید"} <span className="arrow">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
