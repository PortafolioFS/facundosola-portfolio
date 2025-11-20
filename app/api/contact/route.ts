export const dynamic = "force-dynamic";
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Log visible en Vercel durante el build o en tiempo de ejecución
      console.warn("⚠ RESEND_API_KEY no está definida en el entorno.");
      return NextResponse.json(
        {
          error:
            "El servicio de email no está disponible en este momento. Podés escribirme directamente a solafacu@gmail.com.",
        },
        { status: 503 }
      );
    }

    // Importamos Resend solo cuando contamos con la API key.
    const { Resend } = await import("resend");

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios (nombre, email o mensaje)." },
        { status: 400 }
      );
    }

    // Instanciamos Resend aquí (en tiempo de ejecución), no durante el import.
    const resend = new Resend(apiKey);

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
