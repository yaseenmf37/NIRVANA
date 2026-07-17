import Link from "next/link";

// شماره تماس سایت — همان شماره‌ی بخش تماس
const PHONE = "09199826119";
const PHONE_INTL = "989199826119"; // برای واتساپ
const USER_NAME = "#c=u0BjiMH09ea640efcbc37db7661461ab"; // برای واتساپ


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="logo">
            <span className="logo__mark">N</span>
            <span className="logo__text">
              <strong>طراحی نیروانا</strong>
              <small>طراحی • آنالیز • کات مستر</small>
            </span>
          </Link>
          <p>خلق فضاهای زیبا و ماندگار با بهترین کیفیت.</p>
        </div>
        <div className="footer__col">
          <h4>دسترسی سریع</h4>
          {/* <Link href="/projects">نمونه‌کارها</Link> */}
          {/* <Link href="/testimonials">رضایت مشتری</Link> */}
          <Link href="/about">درباره ما</Link>
          <Link href="/faq">سوالات متداول</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>
        <div className="footer__col">
          <h4>خدمات</h4>
          <Link href="/services/design">طراحی کابینت</Link>
          <Link href="/services/cutmaster">آنالیز و کات مستر</Link>
        </div>
        <div className="footer__col">
          <h4>ما را دنبال کنید</h4>
          <div className="socials">
            <a
              href={`https://wa.me/${PHONE_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساپ"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.2-.8.9-.9 1.1-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 0 0 0-.5c0-.2-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4A3.3 3.3 0 0 0 5.8 9c0 1.4 1 2.8 1.2 3s2 3.1 4.9 4.3a16 16 0 0 0 1.6.6 3.9 3.9 0 0 0 1.8.1c.5-.1 1.7-.7 2-1.4s.3-1.2.2-1.3-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
              </svg>
            </a>
            <a
              href={`https://web.rubika.ir/${USER_NAME}`}
              aria-label="روبیکا"
              title="روبیکا"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 1.8 3.8 6.5v9.1l8.2 4.7 8.2-4.7V6.5L12 1.8zm0 2.1 5.9 3.4L12 10.7 6.1 7.3 12 3.9z"/>
                <path d="M5.5 8.7 11 12v6.2l-5.5-3.2V8.7z"/>
                <path d="M13 12 18.5 8.7V15l-5.5 3.2V12z"/>
                <path d="M12 10.7 17.9 7.3 12 3.9 6.1 7.3 12 10.7z" opacity=".35"/>
                <path d="M9.2 8.2 12 6.6l2.8 1.6-2.8 1.7-2.8-1.7z" opacity=".6"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="اینستاگرام"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>© ۱۴۰۳ طراحی نیروانا — تمامی حقوق محفوظ است.</span>
      </div>
    </footer>
  );
}
