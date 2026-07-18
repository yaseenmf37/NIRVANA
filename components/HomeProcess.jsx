const steps = [
  {
    no: "۰۱",
    label: "ارسال ابعاد و اطلاعات",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M3 7.5V19h18V8H12l-2.2-2.5H3v2z" />
        <path d="M12 16v-5M9.7 13.2L12 10.8l2.3 2.4" />
      </svg>
    ),
  },
  {
    no: "۰۲",
    label: "طراحی سه‌بعدی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
        <path d="M12 6.5l3 1.7v3.3l-3 1.7-3-1.7V8.2l3-1.7z" />
        <path d="M12 6.5v6.4M9 8.2l3 1.7 3-1.7" />
      </svg>
    ),
  },
  {
    no: "۰۳",
    label: "آنالیز فنی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v4h4" />
        <circle cx="11" cy="13" r="2.6" />
        <path d="M13 15l2.4 2.4" />
      </svg>
    ),
  },
  {
    no: "۰۴",
    label: "کات‌مستر",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="9" cy="9" r="6" />
        <path d="M9 5.5v3.5l2.3 1.4" />
        <path d="M13.5 13.5L21 21M16 11l2 2" />
      </svg>
    ),
  },
  {
    no: "۰۵",
    label: "تحویل نقشه‌های اجرایی",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <path d="M3 9h18M7 4v16" />
        <path d="M11 13h6M11 16h4" />
      </svg>
    ),
  },
];

export default function HomeProcess() {
  return (
    <section className="hm-proc">
      <div className="container">
        <div className="hm-head reveal">
          <span className="hm-head__line" />
          <h2>روند انجام پروژه</h2>
          <span className="hm-head__line" />
        </div>

        <div className="hm-proc__track reveal">
          {steps.map((s, i) => (
            <div className="hm-proc__step" key={s.no}>
              {i < steps.length - 1 && <span className="hm-proc__link" />}
              <span className="hm-proc__node">
                <span className="hm-proc__icon">{s.icon}</span>
                <span className="hm-proc__no">{s.no}</span>
              </span>
              <span className="hm-proc__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
