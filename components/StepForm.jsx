"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const steps = [
  { key: "name", q: "نام و نام خانوادگی شما چیست؟", type: "text", placeholder: "نام شما", required: true },
  { key: "phone", q: "شماره تماس شما؟", type: "tel", placeholder: "۰۹۱۲...", required: true, numeric: true },
  {
    key: "type",
    q: "نوع کابینت مدنظرتان؟",
    type: "select",
    options: ["مدرن", "پست مدرن", "کلاسیک", "نئوکلاسیک"],
    required: true,
    info: [
      { t: "مدرن", d: "خطوط ساده و صاف، سطوح براق و بدون منبت و تزئینات؛ ظاهری مینیمال و امروزی با رنگ‌های یکدست." },
      { t: "پست مدرن", d: "ترکیبی از مدرن و کلاسیک؛ فرم‌های ساده همراه با جزئیات، بافت و رنگ‌های جسورانه." },
      { t: "کلاسیک", d: "طرح‌های سنتی با قاب‌بندی درب، منبت‌کاری و جزئیات چوبی؛ فضایی گرم و اشرافی." },
      { t: "نئوکلاسیک", d: "بازآفرینی سبک کلاسیک با ظرافت مدرن؛ ساده‌تر از کلاسیک اما همچنان لوکس." },
    ],
  },
  {
    key: "have",
    q: "چه لوازمی دارید که باید در چیدمان لحاظ شود؟",
    type: "multi",
    options: [
      "یخچال ساید‌بای‌ساید",
      "ماشین لباس‌شویی",
      "ماشین ظرف‌شویی",
      "مایکروویو",
      "فر توکار",
      "گاز صفحه‌ای",
      "هود",
      "سینک ظرفشویی",
    ],
    required: false,
  },
  { key: "file", q: "فایل یا عکس مرتبط را ارسال کنید.", type: "file", required: false },
  { key: "desc2", q: "توضیحات تکمیلی؟", type: "textarea", placeholder: "هر نکته‌ی دیگری که لازم است...", required: false },
];

export default function StepForm() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [filePreview, setFilePreview] = useState(null); // { name, url|null }
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      const el = activeRef.current.querySelector("input, textarea");
      if (el && el.type !== "file") el.focus();
    }
  }, [current]);

  useEffect(() => () => { if (filePreview?.url) URL.revokeObjectURL(filePreview.url); }, [filePreview]);

  // بعد از ثبت، ۵ ثانیه بعد به صفحه اصلی می‌رود
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(t);
  }, [done, router]);

  const setValue = (key, value) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setError("");
  };

  const toggleMulti = (key, opt) => {
    setAnswers((a) => {
      const arr = Array.isArray(a[key]) ? a[key] : [];
      const next = arr.includes(opt) ? arr.filter((x) => x !== opt) : [...arr, opt];
      return { ...a, [key]: next };
    });
    setError("");
  };

  const onFile = (e) => {
    const f = e.target.files?.[0];
    setFilePreview((prev) => {
      if (prev?.url) URL.revokeObjectURL(prev.url);
      if (!f) return null;
      return { name: f.name, url: f.type.startsWith("image/") ? URL.createObjectURL(f) : null };
    });
    setValue("file", f ? f.name : "");
  };

  const isEmpty = (step) => {
    const val = answers[step.key];
    if (Array.isArray(val)) return val.length === 0;
    return !val || String(val).trim() === "";
  };

  const confirm = () => {
    const step = steps[current];
    if (step.required && isEmpty(step)) {
      setError("لطفاً این مورد را تکمیل کنید.");
      return;
    }
    if (current < steps.length - 1) setCurrent((c) => c + 1);
    else setDone(true);
  };

  const goBack = () => {
    setError("");
    setCurrent((c) => Math.max(0, c - 1));
  };

  const editStep = (i) => {
    if (i < current && !done) { setError(""); setCurrent(i); }
  };

  const onKeyDown = (e, isTextarea) => {
    if (e.key === "Enter" && !isTextarea) {
      e.preventDefault();
      confirm();
    }
  };

  const renderInput = (step) => {
    const val = answers[step.key] ?? "";
    if (step.type === "select") {
      return (
        <div className="field qstep__field">
          <select value={val || step.options[0]} onChange={(e) => setValue(step.key, e.target.value)}>
            {step.options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      );
    }
    if (step.type === "multi") {
      const arr = Array.isArray(val) ? val : [];
      return (
        <div className="chips">
          {step.options.map((o) => (
            <button
              key={o}
              type="button"
              className={`chip ${arr.includes(o) ? "chip--on" : ""}`}
              onClick={() => toggleMulti(step.key, o)}
            >
              {arr.includes(o) && <span className="chip__tick">✓</span>}
              {o}
            </button>
          ))}
        </div>
      );
    }
    if (step.type === "textarea") {
      return (
        <div className="field qstep__field">
          <textarea rows={3} value={val} placeholder={step.placeholder}
            onChange={(e) => setValue(step.key, e.target.value)} />
        </div>
      );
    }
    if (step.type === "file") {
      return (
        <div className="qstep__file">
          <label className="filedrop">
            <input type="file" onChange={onFile} />
            <span className="filedrop__icon">⇧</span>
            <span>{filePreview ? "تغییر فایل" : "انتخاب فایل یا عکس"}</span>
          </label>
          {filePreview?.url && (
            <div className="filepreview">
              <img src={filePreview.url} alt="پیش‌نمایش" />
            </div>
          )}
          {filePreview && !filePreview.url && (
            <div className="filechip">📎 {filePreview.name}</div>
          )}
        </div>
      );
    }
    return (
      <div className="field qstep__field">
        <input
          type={step.type}
          inputMode={step.numeric ? "numeric" : undefined}
          value={val}
          placeholder={step.placeholder}
          onChange={(e) =>
            setValue(step.key, step.numeric ? e.target.value.replace(/[^0-9۰-۹]/g, "") : e.target.value)
          }
          onKeyDown={(e) => onKeyDown(e, false)}
        />
      </div>
    );
  };

  const renderAnswer = (step) => {
    const val = answers[step.key];
    if (step.key === "file") {
      if (filePreview?.url) return <img className="qstep__thumb" src={filePreview.url} alt="" />;
      if (filePreview) return <>📎 {filePreview.name}</>;
      return "—";
    }
    if (Array.isArray(val)) return val.length ? val.join("، ") : "—";
    return val ? val : "—";
  };

  if (done) {
    return (
      <div className="stepform stepform--done">
        <div className="stepform__success reveal">
          <div className="stepform__check">✓</div>
          <h2>درخواست شما ارسال شد</h2>
          <p>با شما تماس می‌گیریم. ممنون {answers.name || "دوست عزیز"}!</p>
          <span className="stepform__redirect">تا چند لحظه‌ی دیگر به صفحه اصلی برمی‌گردید…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="stepform">
      <div className="stepform__progress">
        <span>سوال {toFa(current + 1)} از {toFa(steps.length)}</span>
        <span className="stepform__bar">
          <span style={{ width: `${((current + 1) / steps.length) * 100}%` }} />
        </span>
      </div>

      <div className="stepform__list">
        {steps.map((step, i) => {
          const isActive = i === current;
          const isDone = i < current;
          const isUpcoming = i > current;
          return (
            <div
              key={step.key}
              ref={isActive ? activeRef : null}
              className={`qstep ${isActive ? "qstep--active" : ""} ${isDone ? "qstep--done" : ""} ${isUpcoming ? "qstep--upcoming" : ""}`}
              onClick={() => isDone && editStep(i)}
            >
              <span className="qstep__no">{toFa(i + 1)}</span>
              <div className="qstep__body">
                <p className="qstep__q">
                  <span>{step.q}</span>
                  {isActive && step.info && (
                    <InfoLamp items={step.info} selected={answers[step.key] || step.options[0]} />
                  )}
                </p>

                {isActive && (
                  <>
                    {renderInput(step)}
                    {error && <p className="form-note">{error}</p>}
                    <div className="qstep__actions">
                      <button type="button" className="btn btn--primary" onClick={confirm}>
                        {current < steps.length - 1 ? "تایید و ادامه" : "ارسال درخواست"}
                      </button>
                      {current > 0 && (
                        <button type="button" className="qstep__back" onClick={goBack}>
                          سوال قبلی →
                        </button>
                      )}
                    </div>
                  </>
                )}

                {isDone && (
                  <p className="qstep__answer">
                    <span className="qstep__answer-val">{renderAnswer(step)}</span>
                    <span className="qstep__edit">ویرایش</span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InfoLamp({ items, selected }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const active = items.find((it) => it.t === selected) || items[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
    };
  }, [open]);

  return (
    <span ref={ref} className={`infolamp ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="infolamp__btn"
        aria-label={`توضیح مدل ${active.t}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z" />
        </svg>
      </button>
      <span className="infolamp__pop" role="tooltip">
        <span className="infolamp__title">کابینت {active.t}</span>
        <span className="infolamp__row">{active.d}</span>
      </span>
    </span>
  );
}

function toFa(n) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
