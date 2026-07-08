const features = [
  { icon: "◆", title: "متریال درجه یک", text: "استفاده از بهترین متریال‌های روز دنیا برای دوام و زیبایی بیشتر" },
  { icon: "✕", title: "طراحی اختصاصی", text: "طراحی اختصاصی بر اساس سلیقه و نیاز فضای شما" },
  { icon: "⛨", title: "ضمانت کیفیت", text: "ضمانت کتبی کیفیت و خدمات پس از اجرا" },
  { icon: "⚒", title: "نصب حرفه‌ای", text: "تیم نصب مجرب و آموزش‌دیده با دقت و سرعت بالا" },
];

export default function Features() {
  return (
    <section className="features-section">
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
