"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const styleInfo = [
  { t: "مدرن", d: "خطوط ساده و صاف، سطوح براق و بدون منبت و تزئینات؛ ظاهری مینیمال و امروزی با رنگ‌های یکدست." },
  { t: "پست مدرن", d: "ترکیبی از مدرن و کلاسیک؛ فرم‌های ساده همراه با جزئیات، بافت و رنگ‌های جسورانه." },
  { t: "کلاسیک", d: "طرح‌های سنتی با قاب‌بندی درب، منبت‌کاری و جزئیات چوبی؛ فضایی گرم و اشرافی." },
  { t: "نئوکلاسیک", d: "بازآفرینی سبک کلاسیک با ظرافت مدرن؛ ساده‌تر از کلاسیک اما همچنان لوکس." },
];

// ── فرم عمومی (صفحه «فرم درخواست») ─────────────────────────────
const genericSteps = [
  { key: "name", q: "نام و نام خانوادگی شما چیست؟", type: "text", placeholder: "نام شما", required: true },
  { key: "phone", q: "شماره تماس شما؟", type: "tel", placeholder: "۰۹۱۲...", required: true, numeric: true },
  {
    key: "type",
    q: "نوع کابینت مدنظرتان؟",
    type: "select",
    options: ["مدرن", "پست مدرن", "کلاسیک", "نئوکلاسیک"],
    required: false,
    info: styleInfo,
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

// ── فرم «طراحی و آنالیز» (صفحه آنالیز و کات‌مستر) ───────────────
const analysisSteps = [
  { key: "name", q: "نام و نام خانوادگی شما چیست؟", type: "text", placeholder: "نام شما", required: true },
  { key: "phone", q: "شماره تماس شما؟", type: "tel", placeholder: "۰۹۱۲...", required: true, numeric: true },
  {
    key: "style",
    q: "سبک کابینت؟",
    type: "choice",
    options: ["مدرن", "پست مدرن", "نئوکلاسیک", "کلاسیک"],
    info: styleInfo,
  },
  {
    key: "body",
    q: "جنس بدنه؟",
    type: "choice",
    options: ["MDF سفید", "ام‌دی‌اف رنگی"],
    custom: "تایپ کنید",
  },
  {
    key: "doorThickness",
    q: "ضخامت درب‌ها؟",
    type: "choice",
    options: ["۱.۶ میل ام‌دی‌اف", "۱.۶ میل رنگ وکیوم", "۲۵ میل رنگ وکیوم"],
    custom: "تایپ کنید",
  },
  {
    key: "facadeThickness",
    q: "ضخامت نماها؟",
    type: "choice",
    options: ["۱۶ میل", "۲۵ میل"],
    custom: "تایپ کنید",
  },
  {
    key: "wallHeight",
    q: "ارتفاع دیواری‌ها؟",
    type: "choice",
    options: ["ارتفاع ۹۰ سانت", "تا سقف با تاج", "تا سقف بدون تاج"],
  },
  {
    key: "wallDepth",
    q: "عمق یونیت دیواری؟",
    type: "choice",
    options: ["۳۵ سانت (نرمال)", "۴۵ سانت", "هم‌تراز با زمینی"],
  },
  {
    key: "baseSize",
    q: "ابعاد یونیت زمینی؟",
    type: "choice",
    options: ["۵۵ سانت (استاندارد)", "۷۰ سانت برای ماشین توکار"],
  },
  {
    key: "counterThickness",
    q: "ضخامت صفحه؟",
    type: "choice",
    options: ["۱۲ میل", "۳ سانت", "۵ سانت"],
    custom: "تایپ کنید",
  },
  {
    key: "sink",
    q: "سینک؟",
    type: "choice",
    options: ["توکار", "روکار"],
    custom: "ابعاد",
    customPlaceholder: "ابعاد سینک را بنویسید",
  },
  {
    key: "gas",
    q: "گاز؟",
    type: "choice",
    options: ["رومیزی", "مبله"],
    custom: "ابعاد",
    customPlaceholder: "ابعاد گاز را بنویسید",
  },
  {
    key: "hood",
    q: "هود؟",
    type: "choice",
    options: ["مخفی", "شومینه‌ای"],
    custom: "ابعاد",
    customPlaceholder: "ابعاد هود را بنویسید",
  },
  {
    key: "drainerMat",
    q: "جنس یونیت آبچکان؟",
    type: "choice",
    options: ["PVC", "MDF"],
  },
  {
    key: "sinkMat",
    q: "جنس یونیت سینک؟",
    type: "choice",
    options: ["PVC", "MDF"],
  },
  {
    key: "railType",
    q: "نوع ریل کشو؟",
    type: "choice",
    options: ["ساچمه‌ای", "تاندم", "بلوم"],
    custom: "تایپ کنید",
  },
  {
    key: "appliances",
    q: "چه لوازم برقی دارید که باید در چیدمان لحاظ شود؟",
    type: "multi",
    options: [
      "یخچال ساید‌بای‌ساید",
      "یخچال دوقلو",
      "ماشین لباس‌شویی",
      "ماشین ظرف‌شویی",
      "مایکروویو",
      "فر توکار",
      "گاز صفحه‌ای",
      "هود",
      "سینک ظرفشویی",
      "قهوه‌ساز",
    ],
    sizeNote: "در صورت نیاز، ابعاد لوازم برقی را بنویسید",
  },
  { key: "file", q: "عکس آشپزخانه و اندازه‌ها را ارسال کنید.", type: "file", required: false },
  {
    key: "extras",
    q: "مورد دیگری هست که باید لحاظ شود؟",
    type: "textarea",
    placeholder: "مثلاً سبد سوپری، جای ادویه، جای سطل زباله و ...",
    required: false,
  },
];

// ── فرم «فقط طراحی» (صفحه طراحی کابینت) ────────────────────────
const designSteps = [
  { key: "name", q: "نام و نام خانوادگی شما چیست؟", type: "text", placeholder: "نام شما", required: true },
  { key: "phone", q: "شماره تماس شما؟", type: "tel", placeholder: "۰۹۱۲...", required: true, numeric: true },
  {
    key: "style",
    q: "سبک کابینت؟",
    type: "choice",
    options: ["مدرن", "پست مدرن", "نئوکلاسیک"],
    info: styleInfo,
  },
  {
    key: "colorType",
    q: "نوع رنگ؟",
    type: "choice",
    options: ["تک رنگ", "دو رنگ"],
  },
  {
    key: "color",
    q: "انتخاب رنگ؟",
    type: "choice",
    options: ["سفید براق", "سفید مات", "طوسی روشن", "طوسی تیره", "چوبی"],
    custom: "تایپ کنید",
  },
  {
    key: "fridge",
    q: "نوع یخچال؟",
    type: "choice",
    options: ["ساید", "دوقلو"],
  },
  {
    key: "oven",
    q: "فر و ماکروفر؟",
    type: "multi",
    options: ["فر", "ماکروفر"],
  },
  {
    key: "sink",
    q: "سینک؟",
    type: "choice",
    options: ["روکار", "توکار"],
  },
  {
    key: "hood",
    q: "هود؟",
    type: "choice",
    options: ["مخفی", "شومینه‌ای"],
  },
  {
    key: "gas",
    q: "گاز؟",
    type: "choice",
    options: ["رومیزی", "مبله"],
  },
  {
    key: "machines",
    q: "تعداد ماشین؟",
    type: "multi",
    options: ["ماشین لباس‌شویی", "ماشین ظرف‌شویی"],
    sizeNote: "در صورت نیاز، تعداد یا توضیح را بنویسید",
  },
  { key: "file", q: "عکس آشپزخانه و اندازه‌ها را ارسال کنید.", type: "file", required: false },
];

const variants = { analysis: analysisSteps, design: designSteps };

export default function StepForm({ variant }) {
  const steps = variants[variant] || genericSteps;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [files, setFiles] = useState([]); // [{ id, name, url|null }]
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const activeRef = useRef(null);
  const fileIdRef = useRef(0);
  const filesRef = useRef([]);

  useEffect(() => {
    if (activeRef.current) {
      const el = activeRef.current.querySelector("input, textarea");
      if (el && el.type !== "file") el.focus();
    }
  }, [current]);

  // نگه‌داشتن آخرین لیست فایل‌ها برای پاک‌سازی هنگام خروج
  useEffect(() => { filesRef.current = files; }, [files]);
  useEffect(
    () => () => filesRef.current.forEach((f) => f.url && URL.revokeObjectURL(f.url)),
    []
  );

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
    const picked = Array.from(e.target.files || []);
    e.target.value = ""; // تا بشود دوباره همان فایل را هم انتخاب کرد
    if (!picked.length) return;
    const added = picked.map((f) => ({
      id: ++fileIdRef.current,
      name: f.name,
      url: f.type.startsWith("image/") ? URL.createObjectURL(f) : null,
    }));
    setFiles((prev) => [...prev, ...added]);
    setError("");
  };

  const removeFile = (id) => {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id);
      if (target?.url) URL.revokeObjectURL(target.url);
      return prev.filter((f) => f.id !== id);
    });
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
    if (step.type === "choice") {
      const isCustom = step.custom && val === step.custom;
      return (
        <>
          <div className="chips">
            {step.options.map((o) => (
              <button
                key={o}
                type="button"
                className={`chip ${val === o ? "chip--on" : ""}`}
                onClick={() => setValue(step.key, o)}
              >
                {val === o && <span className="chip__tick">✓</span>}
                {o}
              </button>
            ))}
            {step.custom && (
              <button
                type="button"
                className={`chip ${isCustom ? "chip--on" : ""}`}
                onClick={() => setValue(step.key, step.custom)}
              >
                {isCustom && <span className="chip__tick">✓</span>}
                {step.custom}
              </button>
            )}
          </div>
          {isCustom && (
            <div className="field qstep__field qstep__custom">
              <input
                type="text"
                value={answers[step.key + "__text"] ?? ""}
                placeholder={step.customPlaceholder || "مورد نظر خود را بنویسید"}
                onChange={(e) => setValue(step.key + "__text", e.target.value)}
                onKeyDown={(e) => onKeyDown(e, false)}
              />
            </div>
          )}
        </>
      );
    }
    if (step.type === "multi") {
      const arr = Array.isArray(val) ? val : [];
      return (
        <>
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
          {step.sizeNote && (
            <div className="field qstep__field qstep__custom">
              <input
                type="text"
                value={answers[step.key + "__size"] ?? ""}
                placeholder={step.sizeNote}
                onChange={(e) => setValue(step.key + "__size", e.target.value)}
                onKeyDown={(e) => onKeyDown(e, false)}
              />
            </div>
          )}
        </>
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
            <input type="file" multiple onChange={onFile} />
            <span className="filedrop__icon">⇧</span>
            <span>{files.length ? "افزودن فایل یا عکس دیگر" : "انتخاب فایل یا عکس"}</span>
          </label>
          {files.length > 0 && (
            <div className="filelist">
              {files.map((f) => (
                <div key={f.id} className={`fileitem ${f.url ? "fileitem--img" : ""}`}>
                  {f.url ? (
                    <img src={f.url} alt={f.name} />
                  ) : (
                    <span className="fileitem__icon">📎</span>
                  )}
                  <span className="fileitem__name">{f.name}</span>
                  <button
                    type="button"
                    className="fileitem__remove"
                    aria-label={`حذف ${f.name}`}
                    onClick={() => removeFile(f.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
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
      if (!files.length) return "—";
      return (
        <span className="qstep__files-ans">
          {files.map((f) =>
            f.url ? (
              <img key={f.id} className="qstep__thumb" src={f.url} alt="" />
            ) : (
              <span key={f.id} className="qstep__filepill">📎 {f.name}</span>
            )
          )}
        </span>
      );
    }
    if (step.type === "choice") {
      if (!val) return "—";
      if (step.custom && val === step.custom) {
        return answers[step.key + "__text"] || step.custom;
      }
      return val;
    }
    if (Array.isArray(val)) {
      const base = val.length ? val.join("، ") : "";
      const note = step.sizeNote ? answers[step.key + "__size"] : "";
      if (!base && !note) return "—";
      return [base, note].filter(Boolean).join(" — ");
    }
    return val ? val : "—";
  };

  if (done) {
    return (
      <div className="stepform stepform--done">
        <div className="stepform__success reveal in">
          <div className="stepform__check">✓</div>
          <h2>فرم با موفقیت ارسال شد</h2>
          <p>با شما به زودی تماس خواهیم گرفت. ممنون {answers.name || "دوست عزیز"}!</p>
          <Link href="/" className="btn btn--primary stepform__home">
            بازگشت به صفحه اصلی
          </Link>
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
