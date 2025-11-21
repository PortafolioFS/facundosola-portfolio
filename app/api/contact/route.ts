// 👈 ESTA LÍNEA DEBE SER LA PRIMERA
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("⚠ RESEND_API_KEY no disponible en el entorno.");
      return NextResponse.json(
        {
          error:
            "El servicio de email no está disponible en este momento. Escribime a solafacu@gmail.com.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Web <onboarding@resend.dev>",
      to: "solafacu@gmail.com",
      replyTo: email,
      subject: subject || `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject || "(Sin asunto)"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el email." },
      { status: 500 }
    );
  }
}
