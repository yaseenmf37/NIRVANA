import Link from "next/link";

export default function PageHero({ eyebrow, title, lead, image, crumb }) {
  return (
    <section
      className="page-hero"
      style={image ? { backgroundImage: `linear-gradient(to top, rgba(12,10,8,.92), rgba(12,10,8,.6)), url(${image})` } : undefined}
    >
      <div className="container page-hero__inner reveal">
        <nav className="crumb">
          <Link href="/">خانه</Link>
          <span>/</span>
          <span className="crumb__current">{crumb || title}</span>
        </nav>
        {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  );
}
