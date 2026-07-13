"use client";
import { useEffect, useRef, useState, useCallback } from "react";

function toFa(s) {
  return String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
function fmt(s) {
  if (!s || isNaN(s)) return "۰:۰۰";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return toFa(`${m}:${sec < 10 ? "0" + sec : sec}`);
}

export default function VideoModal({ item, onClose }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " || e.key === "k") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }, []);

  const onTime = () => {
    const v = videoRef.current;
    if (!v) return;
    setTime(v.currentTime);
    setProgress(v.duration ? v.currentTime / v.duration : 0);
  };

  const onLoaded = () => {
    const v = videoRef.current;
    if (v) setDuration(v.duration || 0);
  };

  const seek = (e) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = Math.min(Math.max(ratio, 0), 1) * v.duration;
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const goFull = () => {
    const el = videoRef.current;
    if (el?.requestFullscreen) el.requestFullscreen();
    else if (el?.webkitEnterFullscreen) el.webkitEnterFullscreen();
  };

  return (
    <div className="vlb" onClick={onClose}>
      <button className="lb__close" aria-label="بستن" onClick={onClose}>
        ✕
      </button>

      <div className="vlb__stage" onClick={(e) => e.stopPropagation()}>
        <div className={`vplayer ${playing ? "is-playing" : ""}`}>
          <video
            ref={videoRef}
            src={item.video}
            poster={item.poster}
            playsInline
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={onTime}
            onLoadedMetadata={onLoaded}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button className="vplayer__big" onClick={togglePlay} aria-label="پخش ویدئو">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" />
              </svg>
            </button>
          )}

          <div className="vplayer__bar" onClick={(e) => e.stopPropagation()}>
            <button className="vplayer__ico" onClick={togglePlay} aria-label={playing ? "توقف" : "پخش"}>
              {playing ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" /></svg>
              )}
            </button>

            <span className="vplayer__time">{fmt(time)}</span>

            <div className="vplayer__track" onClick={seek}>
              <span className="vplayer__fill" style={{ width: `${progress * 100}%` }}>
                <span className="vplayer__knob" />
              </span>
            </div>

            <span className="vplayer__time">{fmt(duration)}</span>

            <button className="vplayer__ico" onClick={toggleMute} aria-label={muted ? "صدا" : "بی‌صدا"}>
              {muted ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M11 5 6 9H3v6h3l5 4V5z" /><path d="m16 9 5 6M21 9l-5 6" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M11 5 6 9H3v6h3l5 4V5z" /><path d="M16 9a4 4 0 0 1 0 6" /><path d="M18.5 7a7 7 0 0 1 0 10" /></svg>
              )}
            </button>

            <button className="vplayer__ico" onClick={goFull} aria-label="تمام‌صفحه">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5" /></svg>
            </button>
          </div>
        </div>

        <div className="vlb__caption">
          <div>
            <strong>{item.name}</strong>
            <small>{item.city}</small>
          </div>
          {item.quote && <p>«{item.quote}»</p>}
        </div>
      </div>
    </div>
  );
}
