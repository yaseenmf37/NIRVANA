import Link from "next/link";
import PageHero from "@/components/PageHero";
import { serviceList } from "@/data/services";

export const metadata = {
  title: "خدمات | طراحی نیروانا",
  description: "به کدام بخش نیاز دارید؟ طراحی کابینت یا آنالیز و کات مستر.",
};

const shortDesc = {
  design: "طراحی سه‌بعدی و مشاوره چیدمان، رنگ و متریال پیش از اجرا.",
  cutmaster: "آنالیز نقشه و برش بهینه قطعات با نرم‌افزار کات‌مستر با کمترین دورریز.",
};

const cardImg = {
  design: "service-card__img--design",
  cutmaster: "service-card__img--cutmaster",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدمات ما"
        title="به کدام بخش نیاز دارید؟"
        lead="یکی از دو تخصص ما را انتخاب کنید تا جزئیات کامل آن را ببینید."
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
      />

      <section className="services">
        <div className="container">
          <div className="services-choose">
            {serviceList.map((s) => (
              <Link
                href={`/services/${s.slug}`}
                className="choose-card reveal"
                key={s.slug}
              >
                <div className={`choose-card__img ${cardImg[s.slug]}`} />
                <div className="choose-card__body">
                  <span className="choose-card__no">{s.no}</span>
                  <h2>{s.title}</h2>
                  <p>{shortDesc[s.slug] || s.lead}</p>
                  <span className="link-arrow">مشاهده جزئیات ←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
