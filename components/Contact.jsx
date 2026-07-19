"use client";
import { useState } from "react";

export default function Contact() {
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    if (!name || !phone) {
      setNote("لطفاً نام و شماره تماس را وارد کنید.");
      return;
    }
    setSending(true);
    setNote("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "فرم تماس (صفحه تماس با ما)",
          fields: [
            { label: "نام و نام خانوادگی", value: name },
            { label: "شماره تماس", value: phone },
            { label: "توضیحات", value: message },
          ],
        }),
      });
      if (!res.ok) throw new Error("send_failed");
      setNote(`ممنون ${name} عزیز! درخواست شما ثبت شد، به‌زودی تماس می‌گیریم.`);
      form.reset();
    } catch {
      setNote("ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label>نام و نام خانوادگی</label>
            <input type="text" name="name" placeholder="نام شما" />
          </div>
          <div className="field">
            <label>شماره تماس</label>
            <input type="tel" name="phone" placeholder="۰۹۱۲..." />
          </div>
          {/* <div className="field">
            <label>نوع کابینت</label>
            <select name="cabinetType" defaultValue="modern">
              <option value="modern">مدرن</option>
              <option value="postmodern">پست مدرن</option>
              <option value="classic">کلاسیک</option>
              <option value="neoclassic">نئوکلاسیک</option>
            </select>
          </div> */}
          <div className="field">
            <label>توضیحات</label>
            <textarea name="message" rows={4} placeholder="درباره پروژه‌تان بنویسید..." />
          </div>
          <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
            {sending ? "در حال ارسال…" : "ارسال درخواست"}
          </button>
          {note && <p className={`form-note ${note.includes("ممنون") ? "ok" : ""}`}>{note}</p>}
        </form>

        <div className="contact__info reveal">
          <span className="section-head__eyebrow">تماس با ما</span>
          <h2>بیایید با هم صحبت کنیم</h2>
          <p>فرم را پر کنید یا از راه‌های زیر با ما در ارتباط باشید.</p>
          <ul className="contact__list">
            <li><span className="ci">☎</span> <a href="tel:09121234567">09199826119</a></li>
            <li><span className="ci">✉</span> <a href="mailto:koriesmarili@gmail.com">koriesmarili@gmail.com</a></li>
            {/* <li><span className="ci">⌖</span> تهران، خیابان نمونه، پلاک ۱۲</li> */}
            <li><span className="ci">◷</span> شنبه تا پنجشنبه، ۹ تا ۲۱</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
