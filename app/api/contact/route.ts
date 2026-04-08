import { NextResponse } from "next/server";
import { getContactEmailConfig, getResend } from "@/lib/resend";

type ContactField = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<ContactField, string>>;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validatePayload(payload: ContactPayload) {
  const name = readTrimmedString(payload.name);
  const email = readTrimmedString(payload.email);
  const subject = readTrimmedString(payload.subject);
  const message = readTrimmedString(payload.message);
  const website = readTrimmedString(payload.website);

  const fieldErrors: FieldErrors = {};

  if (!name) {
    fieldErrors.name = "Ingresá tu nombre.";
  } else if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Tu nombre debe tener entre 2 y 80 caracteres.";
  }

  if (!email) {
    fieldErrors.email = "Ingresá tu email.";
  } else if (!EMAIL_REGEX.test(email) || email.length > 320) {
    fieldErrors.email = "Ingresá un email válido.";
  }

  if (!subject) {
    fieldErrors.subject = "Ingresá un asunto.";
  } else if (subject.length < 3 || subject.length > 120) {
    fieldErrors.subject = "El asunto debe tener entre 3 y 120 caracteres.";
  }

  if (!message) {
    fieldErrors.message = "Escribí tu mensaje.";
  } else if (message.length < 10 || message.length > 5000) {
    fieldErrors.message = "El mensaje debe tener entre 10 y 5000 caracteres.";
  }

  return {
    data: {
      name,
      email,
      subject,
      message,
      website,
    },
    fieldErrors,
  };
}

function buildEmailHtml(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}) {
  const safeMessage = escapeHtml(input.message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; background: #05060a; color: #f5f5f5; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; background: #0f172a; overflow: hidden;">
        <div style="padding: 24px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <p style="margin: 0 0 8px; color: #22d3ee; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;">Portfolio contact</p>
          <h1 style="margin: 0; font-size: 24px; line-height: 1.3;">${escapeHtml(input.subject)}</h1>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 12px;"><strong>From:</strong> ${escapeHtml(input.name)} (${escapeHtml(input.email)})</p>
          <p style="margin: 0 0 12px;"><strong>Submitted:</strong> ${escapeHtml(input.submittedAt)}</p>
          <p style="margin: 0 0 12px;"><strong>Reply-To:</strong> ${escapeHtml(input.email)}</p>
          <div style="margin-top: 20px; padding: 16px; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
            <p style="margin: 0 0 10px;"><strong>Message</strong></p>
            <p style="margin: 0; line-height: 1.7;">${safeMessage}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "La solicitud no tiene un formato válido." },
      { status: 400 }
    );
  }

  const { data, fieldErrors } = validatePayload(payload);

  if (data.website) {
    return NextResponse.json(
      { ok: false, error: "Detectamos un envío no válido." },
      { status: 400 }
    );
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: "Revisá los campos marcados.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  try {
    const resend = getResend();
    const { fromHeader, toEmail } = getContactEmailConfig();
    const submittedAt = new Date().toISOString();

    const { error } = await resend.emails.send({
      from: fromHeader,
      to: toEmail,
      replyTo: data.email,
      subject: `[Portfolio] ${data.subject}`,
      text: [
        "Nuevo mensaje desde el portfolio",
        "",
        `Nombre: ${data.name}`,
        `Email: ${data.email}`,
        `Reply-To: ${data.email}`,
        `Enviado: ${submittedAt}`,
        "",
        `Asunto: ${data.subject}`,
        "",
        "Mensaje:",
        data.message,
      ].join("\n"),
      html: buildEmailHtml({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        submittedAt,
      }),
    });

    if (error) {
      console.error("Resend contact email failed", error);

      return NextResponse.json(
        {
          ok: false,
          error:
            "No pudimos enviar tu mensaje ahora. Probá nuevamente en un momento.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route failed", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "No pudimos enviar tu mensaje ahora. Probá nuevamente en un momento.",
      },
      { status: 500 }
    );
  }
}
