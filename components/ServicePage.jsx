import Link from "next/link";
import PageHero from "@/components/PageHero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function ServicePage({ service }) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.lead}
        image={service.heroImg}
      />

      {/* معرفی */}
      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <div
            className="svc-intro__img reveal"
            style={{ backgroundImage: `url(${service.heroImg})` }}
          />
          <div className="svc-intro__text reveal">
            <span className="service-card__no">{service.no}</span>
            <h2 className="about__title">{service.title}</h2>
            <p>{service.intro}</p>
            {/* <Link href="/contact" className="btn btn--primary">
              درخواست مشاوره <span className="arrow">←</span>
            </Link> */}
          </div>
        </div>
      </section>

      {/* ویژگی‌ها */}
      {/* <section className="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-head__eyebrow">چرا ما</span>
            <h2 className="section-head__title">ویژگی‌های این خدمت</h2>
          </div>
          <div className="features">
            {service.features.map((f) => (
              <div className="feature reveal" key={f.title}>
                <div className="feature__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* مراحل کار */}
      <section className="steps-sec">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-head__eyebrow">فرآیند کار</span>
            <h2 className="section-head__title">از سفارش تا تحویل</h2>
          </div>
          <div className="steps">
            {service.steps.map((s, i) => (
              <div className="step reveal" key={s.t}>
                <span className="step__no">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نمونه‌کارهای مرتبط */}
      <FeaturedProjects category={service.slug} limit={3} />

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <div className="reveal">
            <h2>آماده شروع پروژه‌تان هستید؟</h2>
            <p>برای مشاوره رایگان و دریافت قیمت با ما در تماس باشید.</p>
          </div>
          <Link href="/contact" className="btn btn--primary">
            تماس با ما <span className="arrow">←</span>
          </Link>
        </div>
      </section>
    </>
  );
}
