import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Hanya terima POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validasi
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Semua field wajib diisi." });
  }

  // Validasi format email sederhana
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Format email tidak valid." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Zetech Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL ?? "hmse-pwt@telkomuniversity.ac.id",
      replyTo: email,
      subject: `[Zetech] Pesan baru dari ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 32px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #020049, #218ABB); padding: 24px; border-radius: 10px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">📬 Pesan Baru — Zetech</h1>
          </div>

          <div style="background: white; padding: 24px; border-radius: 10px; border: 1px solid #e5e7eb; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 80px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Nama</td>
                <td style="padding: 10px 0; color: #111827; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #218ABB; text-decoration: none; font-size: 15px;">${email}</a>
                </td>
              </tr>
            </table>
          </div>

          <div style="background: white; padding: 24px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Pesan</p>
            <p style="color: #111827; font-size: 15px; line-height: 1.75; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
            Email ini dikirim melalui form kontak Zetech · <a href="https://reply-to: ${email}" style="color: #218ABB;">Balas langsung</a> ke pengirim
          </p>
        </div>
      `,
    });

    // Auto-reply ke pengirim
    await transporter.sendMail({
      from: `"Zetech" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Terima kasih telah menghubungi Zetech 🙏",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 32px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #020049, #218ABB); padding: 24px; border-radius: 10px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Zetech</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">Digital Solutions</p>
          </div>

          <div style="background: white; padding: 28px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #020049; margin: 0 0 12px; font-size: 18px;">Hei, ${name}! 👋</h2>
            <p style="color: #374151; line-height: 1.75; margin: 0 0 16px;">
              Terima kasih sudah menghubungi kami. Pesan kamu sudah kami terima dan tim kami akan segera merespons dalam waktu <strong>1×24 jam</strong>.
            </p>
            <p style="color: #374151; line-height: 1.75; margin: 0 0 24px;">
              Jika ada yang mendesak, kamu bisa langsung menghubungi kami via WhatsApp di <a href="https://wa.me/6285385782684" style="color: #218ABB; font-weight: 600;">+62 853-8578-2684</a>.
            </p>
            <div style="border-top: 1px solid #f3f4f6; padding-top: 16px;">
              <p style="color: #9ca3af; font-size: 13px; margin: 0;">Salam hangat,<br/><strong style="color: #020049;">Tim Zetech</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Pesan berhasil dikirim!" });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Gagal mengirim pesan. Coba lagi nanti." });
  }
}