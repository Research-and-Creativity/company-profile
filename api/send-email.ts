import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Semua field wajib diisi." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Format email tidak valid." });
  }

  const LOGO_URL = `${process.env.SITE_URL ?? "https://zetech.vercel.app"}/logo_white.svg`;

  const now = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const year = new Date().getFullYear();

    await transporter.sendMail({
      from: `"Zetech Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL ?? "hmse@ittelkom-pwt.ac.id",
      replyTo: email,
      subject: `[Zetech] Pesan baru dari ${name}`,
      html: `
<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr>
    <td style="background:linear-gradient(135deg,#020049 0%,#0d0d7a 45%,#218ABB 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
      <img src="${LOGO_URL}" alt="Zetech" height="44" style="display:block;margin:0 auto 18px;object-fit:contain;" onerror="this.style.display='none'"/>
      <h1 style="color:white;margin:0;font-size:21px;font-weight:700;letter-spacing:-0.02em;">📬 Pesan Baru Masuk</h1>
      <p style="color:rgba(255,255,255,0.55);margin:8px 0 0;font-size:12.5px;">${now} WIB</p>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#ffffff;padding:32px 40px;">

      <!-- Alert -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        <tr>
          <td style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:14px 18px;">
            <p style="margin:0;color:#0369a1;font-size:13.5px;line-height:1.65;">
              💡 Ada pesan baru dari form kontak Zetech. Segera tindak lanjuti dalam <strong>1×24 jam</strong>.
            </p>
          </td>
        </tr>
      </table>

      <!-- Sender info label -->
      <p style="color:#9ca3af;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;margin:0 0 10px;">Informasi Pengirim</p>

      <!-- Sender table -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:28px;">
        <tr style="background:#f9fafb;">
          <td style="padding:13px 20px;color:#6b7280;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;width:80px;border-bottom:1px solid #e5e7eb;">Nama</td>
          <td style="padding:13px 20px;color:#111827;font-size:15px;font-weight:600;border-bottom:1px solid #e5e7eb;">${name}</td>
        </tr>
        <tr>
          <td style="padding:13px 20px;color:#6b7280;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Email</td>
          <td style="padding:13px 20px;">
            <a href="mailto:${email}" style="color:#218ABB;text-decoration:none;font-size:14.5px;">${email}</a>
          </td>
        </tr>
      </table>

      <!-- Message label -->
      <p style="color:#9ca3af;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;margin:0 0 10px;">Isi Pesan</p>

      <!-- Message box -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td style="background:#f9fafb;border:1px solid #e5e7eb;border-left:3px solid #218ABB;border-radius:0 12px 12px 0;padding:18px 22px;">
            <p style="color:#374151;font-size:15px;line-height:1.85;margin:0;white-space:pre-wrap;">${message}</p>
          </td>
        </tr>
      </table>

      <!-- Reply CTA -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <a href="mailto:${email}?subject=Re: Pesan dari Zetech"
              style="display:inline-block;background:linear-gradient(135deg,#020049,#218ABB);color:white;text-decoration:none;padding:13px 32px;border-radius:100px;font-size:14px;font-weight:700;letter-spacing:0.01em;">
              ↩&nbsp; Balas Pesan
            </a>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="background:#f1f5f9;border-radius:0 0 16px 16px;padding:18px 40px;text-align:center;border-top:1px solid #e2e8f0;">
      <p style="color:#94a3b8;font-size:12px;margin:0 0 4px;">
        Dikirim otomatis via <a href="${process.env.SITE_URL ?? "https://zetech.vercel.app"}" style="color:#218ABB;text-decoration:none;font-weight:600;">zetech.vercel.app</a>
      </p>
      <p style="color:#cbd5e1;font-size:11px;margin:0;">© ${year} Zetech · HMSE Telkom University Purwokerto</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`,
    });

    await transporter.sendMail({
      from: `"Zetech" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Pesan kamu sudah kami terima — Zetech",
      html: `
<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr>
    <td style="background:linear-gradient(135deg,#020049 0%,#0d0d7a 45%,#218ABB 100%);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
      <img src="${LOGO_URL}" alt="Zetech" height="44" style="display:block;margin:0 auto 20px;object-fit:contain;" onerror="this.style.display='none'"/>
      <div style="width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;margin:0 auto 16px;font-size:26px;line-height:56px;text-align:center;">✅</div>
      <h1 style="color:white;margin:0;font-size:21px;font-weight:700;letter-spacing:-0.02em;">Pesan Diterima!</h1>
      <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:13px;">Terima kasih sudah menghubungi Zetech</p>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#ffffff;padding:36px 40px;">

      <h2 style="color:#020049;margin:0 0 14px;font-size:18px;font-weight:700;">Hei, ${name}! 👋</h2>
      <p style="color:#4b5563;line-height:1.85;margin:0 0 24px;font-size:14.5px;">
        Pesan kamu sudah kami terima. Tim Zetech akan segera merespons dalam waktu
        <strong style="color:#020049;">1×24 jam</strong> di hari kerja.
      </p>

      <!-- Ringkasan pesan -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        <tr>
          <td style="background:#f8faff;border:1px solid #dbeafe;border-radius:12px;padding:18px 22px;">
            <p style="color:#6b7280;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;margin:0 0 10px;">Ringkasan Pesanmu</p>
            <p style="color:#374151;font-size:14px;line-height:1.8;margin:0;white-space:pre-wrap;font-style:italic;">"${message}"</p>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr><td style="border-top:1px solid #e5e7eb;font-size:0;">&nbsp;</td></tr>
      </table>

      <p style="color:#4b5563;font-size:14px;line-height:1.75;margin:0 0 18px;">
        Butuh respons lebih cepat? Hubungi kami via WhatsApp:
      </p>

      <!-- WA button -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        <tr>
          <td align="center">
            <a href="https://wa.me/6285385782684"
              style="display:inline-block;background:#25D366;color:white;text-decoration:none;padding:13px 28px;border-radius:100px;font-size:14px;font-weight:700;">
              &nbsp;+62 853-8578-2684
            </a>
          </td>
        </tr>
      </table>

      <!-- Website link -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background:#f9fafb;border-radius:12px;padding:16px 22px;text-align:center;">
            <p style="color:#9ca3af;font-size:12px;margin:0 0 8px;">Ikuti perkembangan Zetech</p>
            <a href="${process.env.SITE_URL ?? "https://zetech.vercel.app"}" style="color:#218ABB;text-decoration:none;font-size:13.5px;font-weight:600;">
              &nbsp;zetech.vercel.app
            </a>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="background:#f1f5f9;border-radius:0 0 16px 16px;padding:18px 40px;text-align:center;border-top:1px solid #e2e8f0;">
      <p style="color:#94a3b8;font-size:12px;margin:0 0 4px;">
        Salam hangat, <strong style="color:#64748b;">Tim Zetech</strong>
      </p>
      <p style="color:#cbd5e1;font-size:11px;margin:0;">© ${year} Zetech · HMSE Telkom University Purwokerto</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`,
    });

    return res.status(200).json({ message: "Pesan berhasil dikirim!" });
  } catch (error) {
    console.error("Email error:", error);
    return res
      .status(500)
      .json({ message: "Gagal mengirim pesan. Coba lagi nanti." });
  }
}
