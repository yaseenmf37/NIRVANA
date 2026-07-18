const cards = [
  {
    title: "طراحی بر پایه اجرای واقعی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <path d="M12 3.5V6M12 18v2.5M3.5 12H6M18 12h2.5" />
      </svg>
    ),
  },
  {
    title: "نقشه‌های دقیق و استاندارد",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M8 12.2l2.8 2.8L16.5 9" />
      </svg>
    ),
  },
  {
    title: "کاهش خطا و هزینه‌های اضافی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M4 20V10M9.3 20V6M14.6 20v-7M19.9 20V4" />
        <path d="M4 8.5l4.5-4 4.5 3 6-6" />
        <path d="M19 1.5h1.5V3" />
      </svg>
    ),
  },
  {
    title: "خروجی حرفه‌ای برای کارگاه و نصب",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 2.5l7 2.6v5.4c0 4.6-3 8.2-7 10.5-4-2.3-7-5.9-7-10.5V5.1L12 2.5z" />
        <path d="M8.7 12l2.3 2.3L15.5 9.5" />
      </svg>
    ),
  },
];

export default function HomeWhy() {
  return (
    <section className="hm-why">
      <div className="container">
        <div className="hm-head hm-head--start reveal">
          <span className="hm-head__dash" />
          <h2>چرا نیروانا؟</h2>
        </div>

        <div className="hm-why__grid reveal">
          {cards.map((c) => (
            <div className="hm-why__card" key={c.title}>
              <span className="hm-why__icon">{c.icon}</span>
              <h3>{c.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
