import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center" }}>
      <div className="container">
        <h1 className="page-hero__title">۴۰۴</h1>
        <p className="page-hero__lead" style={{ margin: "0 auto 1.6rem" }}>
          صفحه‌ای که دنبالش بودید پیدا نشد.
        </p>
        <Link href="/" className="btn btn--primary">
          بازگشت به خانه <span className="arrow">←</span>
        </Link>
      </div>
    </section>
  );
}
