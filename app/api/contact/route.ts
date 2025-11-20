// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
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
        <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error interno al enviar el email." },
      { status: 500 }
    );
  }
}
