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
            با بیش از ۱۵ سال تجربه در طراحی، ساخت و اجرای کابینت‌های مدرن و کلاسیک، طراحی سه‌بعدی، آنالیز و کات‌مستر، هدف من ارائه راهکارهایی است که زیبایی، کیفیت و کارایی را در کنار هم به فضای شما بیاورد. از انتخاب متریال تا اجرای نهایی، تمام مراحل با دقت و وسواس انجام می‌شود تا نتیجه‌ای ماندگار و حرفه‌ای خلق شود.
          </p>
          <ul className="about__list">
            <li>بیش از ۱۵ سال تجربه در صنعت چوب</li>
            <li>مشاوره تخصصی در انتخاب متریال مناسب</li>
            <li>تحویل به‌موقع فایل‌های طراحی</li>
          </ul>
          <div className="stats">
            <div className="stat"><strong>۴۵۰+</strong><span>پروژه موفق</span></div>
            <div className="stat"><strong>۱۵</strong><span>سال تجربه</span></div>
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
