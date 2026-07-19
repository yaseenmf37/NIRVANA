"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const styleInfo = [
  { t: "مدرن", d: "خطوط ساده و صاف، سطوح براق و بدون منبت و تزئینات؛ ظاهری مینیمال و امروزی با رنگ‌های یکدست." },
  { t: "پست مدرن", d: "ترکیبی از مدرن و کلاسیک؛ فرم‌های ساده همراه با جزئیات، بافت و رنگ‌های جسورانه." },
  { t: "کلاسیک", d: "طرح‌های سنتی با قاب‌بندی درب، منبت‌کاری و جزئیات چوبی؛ فضایی گرم و اشرافی." },
  { t: "نئوکلاسیک", d: "بازآفرینی سبک کلاسیک با ظرافت مدرن؛ ساده‌تر از کلاسیک اما همچنان لوکس." },
];

const CUSTOM_PLACEHOLDER = "یا مورد دلخواه را تایپ کنید…";
const surfaceColors = ["سفید", "طوسی روشن", "طوسی تیره", "مشکی", "چوبی", "همرنگ بدنه"];

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
// همه‌ی مرحله‌ها چندگزینه‌ای‌اند و در کنارشان امکان تایپ مورد دلخواه هست.
const analysisSteps = [
  { key: "name", q: "نام و نام خانوادگی شما چیست؟", type: "text", placeholder: "نام شما", required: true },
  { key: "phone", q: "شماره تماس شما؟", type: "tel", placeholder: "۰۹۱۲...", required: true, numeric: true },
  {
    key: "style",
    q: "سبک کابینت؟",
    type: "multi",
    options: ["مدرن", "پست مدرن", "نئوکلاسیک", "کلاسیک"],
    info: styleInfo,
    customInput: true,
  },
  {
    key: "body",
    q: "جنس بدنه؟",
    type: "multi",
    options: ["MDF سفید", "MDF رنگی"],
    customInput: true,
  },
  {
    key: "doorThickness",
    q: "ضخامت درب‌ها؟",
    type: "multi",
    options: ["۱۶ میل MDF", "۱۶ میل رنگ وکیوم", "۲۵ میل رنگ وکیوم"],
    customInput: true,
  },
  {
    key: "facadeThickness",
    q: "ضخامت نماها؟",
    type: "multi",
    options: ["۱۶ میل", "۲۵ میل"],
    customInput: true,
  },
  {
    key: "wallHeight",
    q: "ارتفاع دیواری‌ها؟",
    type: "multi",
    options: ["استاندارد (90)", "تا سقف با تاج", "تا سقف بدون تاج"],
    customInput: true,
  },
  {
    key: "wallDepth",
    q: "عمق یونیت دیواری؟",
    type: "multi",
    options: ["۳۵ سانت (استاندارد)", "۴۵ سانت", "هم‌تراز با زمینی"],
    customInput: true,
  },
  {
    key: "baseSize",
    q: "عمق یونیت زمینی؟",
    type: "multi",
    options: ["۵۵ سانت (استاندارد)", "۷۰ سانت برای ماشین توکار"],
    customInput: true,
  },
  {
    key: "counterThickness",
    q: "ضخامت صفحه؟",
    type: "multi",
    options: ["۱۲ میل", "۳ سانت", "۵ سانت"],
    customInput: true,
  },
  {
    key: "counterColor",
    q: "رنگ صفحه؟",
    type: "multi",
    options: surfaceColors,
    customInput: true,
  },
  {
    key: "sink",
    q: "سینک؟",
    type: "multi",
    options: ["توکار", "روکار"],
    customInput: true,
    sizeNote: "ابعاد سینک را بنویسید",
  },
  {
    key: "gas",
    q: "گاز؟",
    type: "multi",
    options: ["رومیزی", "مبله"],
    customInput: true,
    sizeNote: "ابعاد گاز را بنویسید",
  },
  {
    key: "hood",
    q: "هود؟",
    type: "multi",
    options: ["مخفی", "شومینه‌ای"],
    customInput: true,
    sizeNote: "ابعاد هود را بنویسید",
  },
  {
    key: "drainerMat",
    q: "جنس یونیت آبچکان؟",
    type: "multi",
    options: ["PVC", "MDF"],
    customInput: true,
  },
  {
    key: "sinkMat",
    q: "جنس یونیت سینک؟",
    type: "multi",
    options: ["PVC", "MDF"],
    customInput: true,
  },
  {
    key: "railType",
    q: "نوع ریل کشو؟",
    type: "multi",
    options: ["ساچمه‌ای", "تاندم", "بلوم"],
    customInput: true,
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
    customInput: true,
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
    type: "multi",
    options: ["مدرن", "پست مدرن", "نئوکلاسیک"],
    info: styleInfo,
    customInput: true,
  },
  {
    key: "colorType",
    q: "نوع رنگ؟",
    type: "multi",
    options: ["تک رنگ", "دو رنگ"],
    customInput: true,
  },
  {
    key: "color",
    q: "انتخاب رنگ؟",
    type: "multi",
    options: ["سفید براق", "سفید مات", "طوسی روشن", "طوسی تیره", "چوبی"],
    customInput: true,
  },
  {
    key: "counterColor",
    q: "رنگ صفحه؟",
    type: "multi",
    options: surfaceColors,
    customInput: true,
  },
  {
    key: "fridge",
    q: "نوع یخچال؟",
    type: "multi",
    options: ["ساید", "دوقلو"],
    customInput: true,
    sizeNote: "ابعاد یخچال را بنویسید",
  },
  {
    key: "oven",
    q: "فر و ماکروفر؟",
    type: "multi",
    options: ["فر", "ماکروفر"],
    customInput: true,
  },
  {
    key: "sink",
    q: "سینک؟",
    type: "multi",
    options: ["روکار", "توکار"],
    customInput: true,
    sizeNote: "ابعاد سینک را بنویسید",
  },
  {
    key: "hood",
    q: "هود؟",
    type: "multi",
    options: ["مخفی", "شومینه‌ای"],
    customInput: true,
    sizeNote: "ابعاد هود را بنویسید",
  },
  {
    key: "gas",
    q: "گاز؟",
    type: "multi",
    options: ["رومیزی", "مبله"],
    customInput: true,
  },
  {
    key: "machines",
    q: "تعداد ماشین؟",
    type: "multi",
    options: ["ماشین لباس‌شویی", "ماشین ظرف‌شویی"],
    customInput: true,
    sizeNote: "در صورت نیاز، تعداد یا توضیح را بنویسید",
  },
  { key: "file", q: "عکس آشپزخانه و اندازه‌ها را ارسال کنید.", type: "file", required: false },
];

const variants = { analysis: analysisSteps, design: designSteps };

const formTitles = {
  analysis: "درخواست طراحی و آنالیز",
  design: "درخواست طراحی کابینت",
};

// فشرده‌سازی عکس‌ها در مرورگر تا حجم آپلود کم شود (رفع خطای حجم روی ورسل)
function compressImage(file, maxDim = 1600, quality = 0.82) {
  return new Promise((resolve) => {
    if (!file || !file.type || !file.type.startsWith("image/")) return resolve(file);
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (!width || !height) return resolve(file);
      if (width > maxDim || height > maxDim) {
        if (width >= height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(file);
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob && blob.size < file.size) {
            resolve(new File([blob], file.name, { type: "image/jpeg" }));
          } else {
            resolve(file);
          }
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(file);
    };
    img.src = url;
  });
}

export default function StepForm({ variant }) {
  const steps = variants[variant] || genericSteps;
  const formType = formTitles[variant] || "فرم درخواست عمومی";

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [files, setFiles] = useState([]); // [{ id, name, url|null }]
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
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
      file: f, // فایل خام برای آپلود به بات
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
    const custom = answers[step.key + "__custom"];
    if (Array.isArray(val)) return val.length === 0 && !(custom && String(custom).trim());
    return !val || String(val).trim() === "";
  };

  // متن پاسخ هر سوال به‌صورت رشته‌ی ساده (برای ارسال به بات)
  const answerText = (step) => {
    const val = answers[step.key];
    if (step.type === "multi" || Array.isArray(val)) {
      const arr = Array.isArray(val) ? val : [];
      const custom = (answers[step.key + "__custom"] || "").trim();
      const parts = custom ? [...arr, custom] : arr;
      const base = parts.length ? parts.join("، ") : "";
      const note = step.sizeNote ? answers[step.key + "__size"] : "";
      return [base, note].filter(Boolean).join(" — ");
    }
    return val ? String(val).trim() : "";
  };

  const submitForm = async () => {
    setSending(true);
    setError("");
    const fields = steps
      .filter((s) => s.type !== "file")
      .map((s) => ({ label: s.q, value: answerText(s) }))
      .filter((f) => f.value);
    try {
      // ۱) ارسال متن درخواست (سبک — بدون فایل تا از محدودیت حجم ورسل رد نشویم)
      const textFd = new FormData();
      textFd.append(
        "payload",
        JSON.stringify({ formType, fields, files: files.map((f) => f.name) })
      );
      const res = await fetch("/api/submit", { method: "POST", body: textFd });
      if (!res.ok) throw new Error("send_failed");

      // ۲) ارسال فایل‌ها؛ هر فایل در یک درخواست جدا و پس از فشرده‌سازی عکس‌ها
      for (const f of files) {
        if (!f.file) continue;
        let blob = f.file;
        try {
          blob = await compressImage(f.file);
        } catch {
          blob = f.file;
        }
        const fileFd = new FormData();
        fileFd.append("payload", JSON.stringify({ fileOnly: true }));
        fileFd.append("files", blob, f.name);
        await fetch("/api/submit", { method: "POST", body: fileFd }).catch(() => {});
      }

      setDone(true);
    } catch {
      setError("ارسال با خطا مواجه شد. لطفاً اتصال اینترنت را بررسی و دوباره تلاش کنید.");
    } finally {
      setSending(false);
    }
  };

  const confirm = () => {
    if (sending) return;
    const step = steps[current];
    if (step.required && isEmpty(step)) {
      setError("لطفاً این مورد را تکمیل کنید.");
      return;
    }
    if (current < steps.length - 1) setCurrent((c) => c + 1);
    else submitForm();
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
          {step.customInput && (
            <div className="field qstep__field qstep__custom">
              <input
                type="text"
                value={answers[step.key + "__custom"] ?? ""}
                placeholder={step.customPlaceholder || CUSTOM_PLACEHOLDER}
                onChange={(e) => setValue(step.key + "__custom", e.target.value)}
                onKeyDown={(e) => onKeyDown(e, false)}
              />
            </div>
          )}
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
    if (step.type === "multi" || Array.isArray(val)) {
      const arr = Array.isArray(val) ? val : [];
      const custom = (answers[step.key + "__custom"] || "").trim();
      const parts = custom ? [...arr, custom] : arr;
      const base = parts.length ? parts.join("، ") : "";
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
          const infoSelected =
            Array.isArray(answers[step.key]) && answers[step.key].length
              ? answers[step.key][answers[step.key].length - 1]
              : step.options && step.options[0];
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
                    <InfoLamp items={step.info} selected={infoSelected} />
                  )}
                </p>

                {isActive && (
                  <>
                    {renderInput(step)}
                    {error && <p className="form-note">{error}</p>}
                    <div className="qstep__actions">
                      <button type="button" className="btn btn--primary" onClick={confirm} disabled={sending}>
                        {current < steps.length - 1
                          ? "تایید و ادامه"
                          : sending
                          ? "در حال ارسال…"
                          : "ارسال درخواست"}
                      </button>
                      {current > 0 && !sending && (
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
