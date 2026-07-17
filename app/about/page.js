import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Materials from "@/components/Materials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "درباره ما | طراحی نیروانا",
  description: "آشنایی با تیم و ارزش‌های طراحی نیروانا در زمینه طراحی و ساخت کابینت و کلبه چوبی.",
};

const values = [
  { icon: "◆", title: "دقت در جزئیات", text: "از طراحی اولیه تا آماده‌سازی نقشه‌های اجرایی، تمام جزئیات با دقت بررسی می‌شوند." },
  { icon: "✕", title: "خلاقیت در طراحی", text: "هر فضا منحصربه‌فرد است و طراحی اختصاصی خود را دارد." },
  { icon: "⛨", title: "تعهد و صداقت", text: "تحویل به‌موقع و پایبندی به قول‌هایمان." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره ما"
        title="درباره طراحی نیروانا"
        lead="خلق فضاهایی زیبا و کاربردی با طراحی دقیق، تجربه و توجه به جزئیات."
        image="/img/about-hero.jpg"
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
