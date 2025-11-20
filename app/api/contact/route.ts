// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  // Esto se ve en los logs de Vercel si algo falla con la variable
  console.warn("⚠ RESEND_API_KEY no está definida en el entorno.");
}

const resend = new Resend(apiKey ?? "");

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios (nombre, email o mensaje)." },
        { status: 400 }
      );
    }

    // Si REALMENTE no hay API key, devolvemos este error
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "El servicio de email no está disponible en este momento. Podés escribirme directamente a solafacu@gmail.com.",
        },
        { status: 503 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Web <onboarding@resend.dev>",
      to: "solafacu@gmail.com",
      replyTo: String(email),
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
    console.error("Error al enviar el mail:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el email." },
      { status: 500 }
    );
  }
}
