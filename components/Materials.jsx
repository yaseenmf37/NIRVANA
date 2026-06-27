const materials = [
  { sw: "s1", title: "ام‌دی‌اف های‌گلاس", text: "سطح براق و مقاوم در برابر خش" },
  { sw: "s2", title: "چوب طبیعی روس", text: "گرما و اصالت چوب طبیعی" },
  { sw: "s3", title: "ممبران مات", text: "ظاهر مخملی و ضد اثر انگشت" },
  { sw: "s4", title: "صفحه کوارتز", text: "مقاوم در برابر حرارت و لک" },
];

export default function Materials() {
  return (
    <section className="materials" id="materials">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-head__eyebrow">متریال‌ها</span>
          <h2 className="section-head__title">متریال‌هایی که استفاده می‌کنیم</h2>
          <p className="section-head__sub">کیفیت از انتخاب متریال شروع می‌شود</p>
        </div>
        <div className="materials__grid">
          {materials.map((m) => (
            <div className="material reveal" key={m.title}>
              <span className={`material__swatch ${m.sw}`} />
              <h4>{m.title}</h4>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
