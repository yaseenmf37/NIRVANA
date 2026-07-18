// دریافت داده‌ی فرم‌ها + فایل‌ها و ارسال به بات روبیکا (سمت سرور — توکن به مرورگر لو نمی‌رود)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60; // مهلت اجرای تابع روی ورسل برای آپلود فایل

const BASE = "https://botapi.rubika.ir/v3";
const MAX_FILE_BYTES = 20 * 1024 * 1024; // حداکثر ۲۰ مگابایت برای هر فایل
const MAX_FILES = 10;

export async function POST(req) {
  const token = process.env.RUBIKA_BOT_TOKEN;
  const chatId = process.env.RUBIKA_CHAT_ID;

  if (!token || !chatId) {
    return Response.json({ ok: false, error: "bot_not_configured" }, { status: 500 });
  }

  let payload = {};
  let files = [];
  const ctype = req.headers.get("content-type") || "";

  try {
    if (ctype.includes("multipart/form-data")) {
      const fd = await req.formData();
      const raw = fd.get("payload");
      payload = raw ? JSON.parse(raw) : {};
      files = fd
        .getAll("files")
        .filter((f) => f && typeof f === "object" && typeof f.arrayBuffer === "function");
    } else {
      payload = await req.json();
    }
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const fileNames = files.map((f) => f.name);

  // ۱) ارسال متن درخواست — فقط وقتی این درخواست حاوی فیلدهای فرم است.
  // (کلاینت متن را در یک درخواست سبک و هر فایل را در درخواست جدا می‌فرستد)
  const hasFields = Array.isArray(payload.fields) && payload.fields.length > 0;
  if (hasFields) {
    const text = buildMessage({
      ...payload,
      files: payload.files && payload.files.length ? payload.files : fileNames,
    });
    const sent = await rubika(token, "sendMessage", { chat_id: chatId, text });
    if (!sent.ok) {
      return Response.json({ ok: false, error: sent.error }, { status: 502 });
    }
  }

  // ۲) آپلود و ارسال فایل‌ها (best-effort — خطای فایل باعث از دست رفتن خود درخواست نمی‌شود)
  const fileResults = [];
  for (const file of files.slice(0, MAX_FILES)) {
    const r = await sendOneFile(token, chatId, file);
    fileResults.push({ name: file.name, ok: r.ok });
  }

  return Response.json({ ok: true, files: fileResults });
}

async function sendOneFile(token, chatId, file) {
  try {
    if (file.size > MAX_FILE_BYTES) return { ok: false, error: "too_large" };

    const isImage = (file.type || "").startsWith("image/");
    const type = isImage ? "Image" : "File";
    const fileName = file.name || (isImage ? "image" : "file");

    // درخواست آدرس آپلود
    const req1 = await rubika(token, "requestSendFile", { type });
    const uploadUrl = req1.ok && req1.data ? req1.data.upload_url : null;
    if (!uploadUrl) return { ok: false, error: "no_upload_url" };

    // آپلود بایت‌های فایل
    const up = new FormData();
    up.append("file", file, fileName);
    const upRes = await fetch(uploadUrl, { method: "POST", body: up });
    const upJson = await upRes.json().catch(() => ({}));
    const fileId = upJson && upJson.data ? upJson.data.file_id : null;
    if (!fileId) return { ok: false, error: "upload_failed" };

    // ارسال فایل به چت
    const send = await rubika(token, "sendFile", {
      chat_id: chatId,
      file_id: fileId,
      file_name: fileName,
    });
    return { ok: send.ok };
  } catch {
    return { ok: false, error: "exception" };
  }
}

async function rubika(token, method, body) {
  try {
    const res = await fetch(`${BASE}/${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (data.status !== "OK") return { ok: false, error: data.status || "failed" };
    return { ok: true, data: data.data };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

function buildMessage({ formType, fields, files }) {
  const lines = ["🆕 درخواست جدید از سایت"];
  if (formType) lines.push(`📋 ${formType}`);
  lines.push("━━━━━━━━━━━━━━━");

  (Array.isArray(fields) ? fields : []).forEach((f) => {
    if (!f || !f.value) return;
    lines.push(`▪️ ${f.label}`);
    lines.push(`     ${f.value}`);
  });

  if (Array.isArray(files) && files.length) {
    lines.push("━━━━━━━━━━━━━━━");
    lines.push(`📎 فایل‌های پیوست (${files.length}) در ادامه ارسال می‌شوند:`);
    files.forEach((n) => lines.push(`   • ${n}`));
  }

  return lines.join("\n");
}
