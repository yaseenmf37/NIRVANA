// دسته‌بندی‌ها مطابق دو خدمت اصلی سایت:
// design (طراحی کابینت) | cutmaster (آنالیز و کات مستر)
// gallery: عکس‌هایی که با کلیک روی پروژه در لایت‌باکس نمایش داده می‌شوند
export const projects = [
  {
    id: 1,
    category: "design",
    tag: "طراحی کابینت",
    title: "طراحی سه‌بعدی مدرن",
    sub: "رندر اختصاصی پیش از اجرا",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=80",
    ],
  },
  {
    id: 2,
    category: "design",
    tag: "طراحی کابینت",
    title: "چیدمان مدرن مینیمال",
    sub: "طراحی نور و متریال",
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1400&q=80",
    ],
  },
  {
    id: 3,
    category: "design",
    tag: "طراحی کابینت",
    title: "رندر آشپزخانه باز",
    sub: "اپن به نشیمن",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    ],
  },
  {
    id: 4,
    category: "cutmaster",
    tag: "آنالیز و کات مستر",
    title: "نقشه برش بهینه",
    sub: "کمترین دورریز متریال",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1400&q=80",
    ],
  },
  {
    id: 5,
    category: "cutmaster",
    tag: "آنالیز و کات مستر",
    title: "آنالیز کاتینگ قطعات",
    sub: "خروجی آماده برای دستگاه برش",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1400&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1400&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80",
    ],
  },
  {
    id: 6,
    category: "cutmaster",
    tag: "آنالیز و کات مستر",
    title: "لیست برش و لبه‌چسبان",
    sub: "اجرای دقیق مطابق نقشه",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
    ],
  },
];

export const filters = [
  { key: "all", label: "همه" },
  { key: "design", label: "طراحی کابینت" },
  { key: "cutmaster", label: "آنالیز و کات مستر" },
];
