import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="logo">
            <span className="logo__mark">N</span>
            <span className="logo__text">
              <strong>کابینت لوکس</strong>
              <small>طراحی • ساخت • اجرا</small>
            </span>
          </Link>
          <p>خلق فضاهای زیبا و ماندگار با بهترین کیفیت.</p>
        </div>
        <div className="footer__col">
          <h4>دسترسی سریع</h4>
          <Link href="/projects">نمونه‌کارها</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/faq">سوالات متداول</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>
        <div className="footer__col">
          <h4>خدمات</h4>
          <Link href="/services/cabinet">ساخت کابینت</Link>
          <Link href="/services/cabin">ساخت کلبه چوبی</Link>
          <Link href="/services/design">طراحی کابینت</Link>
        </div>
        <div className="footer__col">
          <h4>ما را دنبال کنید</h4>
          <div className="socials">
            <a href="#" aria-label="اینستاگرام">Ig</a>
            <a href="#" aria-label="تلگرام">Tg</a>
            <a href="#" aria-label="واتساپ">Wa</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>© ۱۴۰۳ کابینت لوکس — تمامی حقوق محفوظ است.</span>
      </div>
    </footer>
  );
}
