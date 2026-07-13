"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceList } from "@/data/services";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "نمونه‌کارها" },
  { href: "/testimonials", label: "رضایت مشتری" },
  { href: "/about", label: "درباره ما" },
  { href: "/faq", label: "سوالات متداول" },
  { href: "/form", label: "فرم درخواست" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // بستن منوی موبایل هنگام تغییر صفحه
  useEffect(() => setOpen(false), [pathname]);

  // قفل اسکرول صفحه پشت منوی موبایل هنگام باز بودن
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const servicesActive = pathname.startsWith("/services");

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="logo">
          <span className="logo__mark">N</span>
          <span className="logo__text">
            <strong>طراحی نیروانا</strong>
            <small>طراحی • آنالیز • کات مستر</small>
          </span>
        </Link>

        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/" className={isActive("/") ? "is-active" : ""}>
            خانه
          </Link>

          <div className={`nav__dropdown ${servicesActive ? "is-active" : ""}`}>
            <Link href="/services" className="nav__dropdown-label">
              خدمات ▾
            </Link>
            <div className="nav__menu">
              {serviceList.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "is-active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a href="tel:09121234567" className="btn btn--ghost header__phone">
          <span className="icon-phone" />
          09199826119
        </a>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-label="منو"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
