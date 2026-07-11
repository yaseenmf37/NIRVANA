import Link from "next/link";
import { serviceList } from "@/data/services";

const imgClass = {
  design: "service-card__img--design",
  cutmaster: "service-card__img--cutmaster",
};

export default function Services() {
  return (
    <section className="services services--light">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-head__eyebrow">خدمات ما</span>
          <h2 className="section-head__title">دو تخصص اصلی ما</h2>
          <p className="section-head__sub">به کدام بخش نیاز دارید؟</p>
        </div>

        <div className="services__grid">
          {serviceList.map((s) => (
            <Link
              href={`/services/${s.slug}`}
              className="service-card reveal"
              key={s.slug}
            >
              <div className={`service-card__img ${imgClass[s.slug]}`} />
              <div className="service-card__body">
                <span className="service-card__no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.lead}</p>
                <span className="link-arrow">مشاهده صفحه ←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
