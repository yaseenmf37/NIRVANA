"use client";
import { useState } from "react";
import {
  videoTestimonials,
  textTestimonials,
  photoTestimonials,
} from "@/data/testimonials";
import Lightbox from "@/components/Lightbox";
import VideoModal from "@/components/VideoModal";

const photoAlbum = {
  tag: "رضایت مشتری",
  title: "تصاویر ارسالی مشتریان",
  sub: "آشپزخانه‌های تکمیل‌شده",
  gallery: photoTestimonials.map((p) => p.img),
};

function Stars({ rating }) {
  return (
    <span className="tsm-stars" aria-label={`${rating} از ۵`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "is-on" : ""}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [videoItem, setVideoItem] = useState(null);

  return (
    <>
      {/* ویدئوها */}
      <section className="tsm">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-head__eyebrow">ویدئو</span>
            <h2 className="section-head__title">مشتریان درباره ما می‌گویند</h2>
            <p className="section-head__sub">
              روایت مشتریان از تجربه‌ی همکاری با تیم طراحی نیروانا.
            </p>
          </div>
          <div className="tsm-videos">
            {videoTestimonials.map((v) => (
              <button
                key={v.id}
                type="button"
                className="tsm-video reveal"
                style={{ backgroundImage: `url(${v.poster})` }}
                onClick={() => setVideoItem(v)}
                aria-label={`پخش ویدئوی ${v.name}`}
              >
                <span className="tsm-video__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" />
                  </svg>
                </span>
                <span className="tsm-video__cap">
                  {v.quote && <span className="tsm-video__quote">«{v.quote}»</span>}
                  <span className="tsm-video__who">
                    <strong>{v.name}</strong>
                    <small>{v.city}</small>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* نظرات نوشتاری */}
      <section className="tsm tsm--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-head__eyebrow">نظرات مشتریان</span>
            <h2 className="section-head__title">آنچه درباره‌ی ما نوشته‌اند</h2>
            <p className="section-head__sub">
              رضایت شما بزرگ‌ترین سرمایه‌ی ماست.
            </p>
          </div>
          <div className="tsm-quotes">
            {textTestimonials.map((t) => (
              <blockquote className="tsm-quote reveal" key={t.id}>
                <Stars rating={t.rating} />
                <p className="tsm-quote__text">{t.text}</p>
                <footer className="tsm-quote__by">
                  <span className="tsm-quote__avatar">{t.name.charAt(0)}</span>
                  <span className="tsm-quote__meta">
                    <strong>{t.name}</strong>
                    <small>
                      {t.city}
                      {t.style ? ` • ${t.style}` : ""}
                    </small>
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* گالری عکس */}
      <section className="tsm">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-head__eyebrow">گالری</span>
            <h2 className="section-head__title">تصاویر ارسالی مشتریان</h2>
            <p className="section-head__sub">
              نمونه‌هایی از آشپزخانه‌های تکمیل‌شده‌ی مشتریان ما.
            </p>
          </div>
          <div className="tsm-photos">
            {photoTestimonials.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className="tsm-photo reveal"
                style={{ backgroundImage: `url(${p.img})` }}
                onClick={() => setPhotoIndex(i)}
                aria-label={`مشاهده عکس ${i + 1}`}
              >
                <span className="card__zoom">⤢</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {photoIndex !== null && (
        <Lightbox
          project={photoAlbum}
          startIndex={photoIndex}
          onClose={() => setPhotoIndex(null)}
        />
      )}

      {videoItem && (
        <VideoModal item={videoItem} onClose={() => setVideoItem(null)} />
      )}
    </>
  );
}
