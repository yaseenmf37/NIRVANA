const features = [
  {
    icon: "◆",
    title: "طراحی دقیق و اصولی",
    text: "طراحی کابینت با توجه به ابعاد فضا، نیاز کاربر و استانداردهای اجرایی"
  },
  {
    icon: "✕",
    title: "مشاوره تخصصی متریال",
    text: "راهنمایی برای انتخاب بهترین متریال متناسب با سبک، بودجه و کاربرد پروژه"
  },
  {
    icon: "⛨",
    title: "آنالیز و کات‌مستر حرفه‌ای",
    text: "محاسبه دقیق برش‌ها برای کاهش پرت متریال و اجرای بهینه پروژه"
  },
  {
    icon: "⚒",
    title: "همراهی تا اجرای نهایی",
    text: "ارائه جزئیات کامل و هماهنگی برای اجرای دقیق و بدون خطا"
  },
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
