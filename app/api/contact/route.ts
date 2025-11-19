import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || "solafacu@gmail.com";

    await transporter.sendMail({
      from: `"Portfolio Web" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: subject || `Nuevo mensaje de ${name}`,
      text: `
Nombre: ${name}
Email: ${email}
Asunto: ${subject || "(Sin asunto)"}

Mensaje:
${message}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el email." },
      { status: 500 }
    );
  }
}
