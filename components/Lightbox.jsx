"use client";
import { useEffect, useState, useCallback } from "react";

export default function Lightbox({ project, onClose, startIndex = 0 }) {
  const images = project?.gallery?.length ? project.gallery : [project?.img];
  const [index, setIndex] = useState(startIndex);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      // در حالت راست‌چین، فلش‌ها را معکوس می‌کنیم تا طبیعی باشد
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [next, prev, onClose]);

  if (!project) return null;

  return (
    <div className="lb" onClick={onClose}>
      <button className="lb__close" aria-label="بستن" onClick={onClose}>
        ✕
      </button>

      <div className="lb__stage" onClick={(e) => e.stopPropagation()}>
        <div className="lb__head">
          <div>
            <span className="card__tag">{project.tag}</span>
            <h3 className="lb__title">{project.title}</h3>
            <span className="card__sub">{project.sub}</span>
          </div>
          <span className="lb__counter">
            {index + 1} / {images.length}
          </span>
        </div>

        <div className="lb__main">
          {images.length > 1 && (
            <button className="lb__nav lb__nav--prev" aria-label="قبلی" onClick={prev}>
              ›
            </button>
          )}
          <img className="lb__img" src={images[index]} alt={project.title} />
          {images.length > 1 && (
            <button className="lb__nav lb__nav--next" aria-label="بعدی" onClick={next}>
              ‹
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="lb__thumbs">
            {images.map((src, i) => (
              <button
                key={i}
                className={`lb__thumb ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                style={{ backgroundImage: `url(${src})` }}
                aria-label={`عکس ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
