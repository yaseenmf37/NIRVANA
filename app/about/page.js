import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Materials from "@/components/Materials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "درباره ما | کابینت نیروانا",
  description: "آشنایی با تیم و ارزش‌های کابینت نیروانا در زمینه طراحی و ساخت کابینت و کلبه چوبی.",
};

const values = [
  { icon: "◆", title: "کیفیت بی‌چون‌وچرا", text: "از انتخاب متریال تا اجرای نهایی، کیفیت اولویت ماست." },
  { icon: "✕", title: "خلاقیت در طراحی", text: "هر فضا منحصربه‌فرد است و طراحی اختصاصی خود را دارد." },
  { icon: "⛨", title: "تعهد و صداقت", text: "تحویل به‌موقع و پایبندی به قول‌هایمان." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره ما"
        title="درباره کابینت نیروانا"
        lead="تیمی که زیبایی، کارایی و کیفیت را در فضای شما ترکیب می‌کند."
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80"
      />

      <About variant="page" />

      <section className="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-head__eyebrow">ارزش‌های ما</span>
            <h2 className="section-head__title">به چه چیزهایی پایبندیم</h2>
          </div>
          <div className="services__grid">
            {values.map((v) => (
              <div className="feature reveal" key={v.title}>
                <div className="feature__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Materials />
      <CTA />
    </>
  );
}
