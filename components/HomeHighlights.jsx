const items = [
  {
    title: "طراحی سه‌بعدی",
    text: "مدل‌سازی دقیق بر اساس ابعاد واقعی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 2.5l8 4.5v9l-8 4.5-8-4.5v-9l8-4.5z" />
        <path d="M12 2.5v19M4 7l8 4.5L20 7" />
      </svg>
    ),
  },
  {
    title: "نقشه‌های اجرایی",
    text: "نقشه برش، مونتاژ و نصب",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v4h4" />
        <path d="M9 12h6M9 15h6M9 18h4" />
      </svg>
    ),
  },
  {
    title: "کات مستر و آنالیز",
    text: "بهینه‌سازی برش و کاهش پرت متریال",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="M8.5 5.5v3l2 1.2" />
        <path d="M13 13l7.5 7.5M15.5 11.5l2 2" />
      </svg>
    ),
  },
];

export default function HomeHighlights() {
  return (
    <section className="hm-hl">
      <div className="container">
        <div className="hm-hl__card reveal">
          {items.map((it) => (
            <div className="hm-hl__item" key={it.title}>
              <span className="hm-hl__icon">{it.icon}</span>
              <div className="hm-hl__text">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
