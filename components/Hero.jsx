import Link from "next/link";

export default function Hero() {
  return (
    <section className="hm-hero" id="home">
      <div className="container hm-hero__inner">
        <div className="hm-hero__visual reveal" aria-hidden="true">
          <img src="/img/cabinet-blueprint.svg" alt="" className="hm-hero__blueprint" />
        </div>

        <div className="hm-hero__content reveal">
          <h1 className="hm-hero__title">
            طراحی که
            <span>به ساخت ختم می‌شود.</span>
          </h1>
          <p className="hm-hero__desc">
            طراحی قابل اجرا، همراه با آنالیز فنی، کات‌مستر و نقشه‌های برش، مونتاژ و
            نصب.
          </p>
          <div className="hm-hero__actions">
            <Link href="/form" className="btn btn--primary hm-hero__btn">
              شروع پروژه <span className="hm-chev">›</span>
            </Link>
            <Link href="/projects" className="btn btn--outline hm-hero__btn">
              نمونه کارها <span className="hm-chev">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
