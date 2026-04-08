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
    fieldErrors.name = "Please enter your name.";
  } else if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Your name must contain between 2 and 80 characters.";
  }

  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email) || email.length > 320) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!subject) {
    fieldErrors.subject = "Please enter a subject.";
  } else if (subject.length < 3 || subject.length > 120) {
    fieldErrors.subject =
      "The subject must contain between 3 and 120 characters.";
  }

  if (!message) {
    fieldErrors.message = "Please enter your message.";
  } else if (message.length < 10 || message.length > 5000) {
    fieldErrors.message =
      "The message must contain between 10 and 5000 characters.";
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
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { data, fieldErrors } = validatePayload(payload);

  if (data.website) {
    return NextResponse.json(
      { ok: false, error: "Spam detected." },
      { status: 400 }
    );
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please review the highlighted fields.",
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
        "New portfolio contact message",
        "",
        `From: ${data.name} <${data.email}>`,
        `Reply-To: ${data.email}`,
        `Submitted: ${submittedAt}`,
        "",
        `Subject: ${data.subject}`,
        "",
        "Message:",
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
            "We couldn't send your message right now. Please try again in a moment.",
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
          "We couldn't send your message right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
