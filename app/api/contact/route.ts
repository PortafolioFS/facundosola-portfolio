// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = "solafacu@gmail.com";
const serviceMisconfiguredMessage =
  "El servicio de email no está configurado. Por favor escribime a solafacu@gmail.com.";

const sanitizeText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  try {
    if (!resendApiKey) {
      return NextResponse.json(
        { error: serviceMisconfiguredMessage },
        { status: 503 }
      );
    }

    const payload = await req
      .json()
      .then((body) => ({
        name: sanitizeText(body?.name),
        email: sanitizeText(body?.email),
        subject: sanitizeText(body?.subject),
        message: sanitizeText(body?.message),
      }))
      .catch(() => ({ name: "", email: "", subject: "", message: "" }));

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios." },
        { status: 400 }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br>");

    await resend.emails.send({
      from: "Portfolio Web <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: payload.email,
      subject: payload.subject || `Nuevo mensaje de ${payload.name}`,
      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(payload.subject || "(Sin asunto)")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar el mail:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el email." },
      { status: 500 }
    );
  }
}
