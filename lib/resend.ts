import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export function getContactEmailConfig() {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!toEmail) {
    throw new Error("Missing CONTACT_TO_EMAIL environment variable.");
  }

  if (!fromEmail) {
    throw new Error("Missing CONTACT_FROM_EMAIL environment variable.");
  }

  return {
    toEmail,
    fromEmail,
    fromHeader: `Facundo Sola <${fromEmail}>`,
  };
}
