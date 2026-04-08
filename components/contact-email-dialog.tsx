"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type ContactField = "name" | "email" | "subject" | "message";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<ContactField, string>>;

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

export function ContactEmailDialog({ fallbackHref }: { fallbackHref: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState("");

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const dialogTitleId = useId();
  const dialogDescriptionId = useId();

  function openDialog() {
    setServerError("");
    setFieldErrors({});
    setStatus("idle");
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
    window.setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function handleChange<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (field !== "website") {
      setFieldErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }

    if (serverError) {
      setServerError("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setServerError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setServerError(result.error ?? "We couldn't send your message.");
        setFieldErrors(result.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
      setFieldErrors({});
    } catch {
      setStatus("error");
      setServerError(
        "We couldn't send your message right now. Please try again in a moment."
      );
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openDialog}
        className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
      >
        Enviar email
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeDialog}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            aria-describedby={dialogDescriptionId}
            className="w-full max-w-2xl rounded-[28px] border border-white/12 bg-[#05060a] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
                  Contacto
                </p>
                <h3
                  id={dialogTitleId}
                  className="mt-2 text-2xl font-semibold text-white"
                >
                  Enviame un mensaje
                </h3>
                <p
                  id={dialogDescriptionId}
                  className="mt-2 max-w-xl text-sm text-neutral-300"
                >
                  Completá los datos esenciales y te llega una confirmación visual
                  apenas el formulario se envía.
                </p>
              </div>
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Cerrar
              </button>
            </div>

            <div className="px-6 py-6 sm:px-8">
              {status === "success" ? (
                <div className="space-y-5">
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5"
                  >
                    <h4 className="text-lg font-semibold text-emerald-200">
                      Mensaje enviado
                    </h4>
                    <p className="mt-2 text-sm text-emerald-100/90">
                      Perfecto. Tu mensaje ya salió hacia la inbox de contacto.
                      Si hace falta, también podés escribirme directo por email.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setServerError("");
                        setFieldErrors({});
                        window.setTimeout(() => {
                          firstFieldRef.current?.focus();
                        }, 0);
                      }}
                      className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                    >
                      Enviar otro mensaje
                    </button>
                    <button
                      type="button"
                      onClick={closeDialog}
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
                    >
                      Cerrar ventana
                    </button>
                  </div>

                  <p className="text-sm text-neutral-300">
                    Fallback directo:{" "}
                    <Link
                      href={fallbackHref}
                      className="font-medium text-[#22d3ee] underline underline-offset-4"
                    >
                      escribirme por mail
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-busy={status === "submitting"}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-white"
                        htmlFor="contact-name"
                      >
                        Nombre
                      </label>
                      <input
                        ref={firstFieldRef}
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) => handleChange("name", event.target.value)}
                        aria-invalid={fieldErrors.name ? "true" : "false"}
                        aria-describedby={
                          fieldErrors.name ? "contact-name-error" : undefined
                        }
                        className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#22d3ee]"
                        placeholder="Tu nombre"
                      />
                      {fieldErrors.name ? (
                        <p
                          id="contact-name-error"
                          className="text-sm text-rose-300"
                        >
                          {fieldErrors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-white"
                        htmlFor="contact-email"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        aria-invalid={fieldErrors.email ? "true" : "false"}
                        aria-describedby={
                          fieldErrors.email ? "contact-email-error" : undefined
                        }
                        className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#22d3ee]"
                        placeholder="tu@email.com"
                      />
                      {fieldErrors.email ? (
                        <p
                          id="contact-email-error"
                          className="text-sm text-rose-300"
                        >
                          {fieldErrors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-white"
                      htmlFor="contact-subject"
                    >
                      Asunto
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={(event) => handleChange("subject", event.target.value)}
                      aria-invalid={fieldErrors.subject ? "true" : "false"}
                      aria-describedby={
                        fieldErrors.subject ? "contact-subject-error" : undefined
                      }
                      className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#22d3ee]"
                      placeholder="Contame el motivo del mensaje"
                    />
                    {fieldErrors.subject ? (
                      <p
                        id="contact-subject-error"
                        className="text-sm text-rose-300"
                      >
                        {fieldErrors.subject}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-white"
                      htmlFor="contact-message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      aria-invalid={fieldErrors.message ? "true" : "false"}
                      aria-describedby={
                        fieldErrors.message ? "contact-message-error" : undefined
                      }
                      className="w-full rounded-3xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#22d3ee]"
                      placeholder="Escribí tu mensaje acá"
                    />
                    {fieldErrors.message ? (
                      <p
                        id="contact-message-error"
                        className="text-sm text-rose-300"
                      >
                        {fieldErrors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(event) => handleChange("website", event.target.value)}
                    />
                  </div>

                  {serverError ? (
                    <div
                      role="alert"
                      className="rounded-2xl border border-rose-400/25 bg-rose-500/10 p-4 text-sm text-rose-100"
                    >
                      {serverError}
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-neutral-300">
                      ¿Preferís evitar el formulario?{" "}
                      <Link
                        href={fallbackHref}
                        className="font-medium text-[#22d3ee] underline underline-offset-4"
                      >
                        Abrí el email directo
                      </Link>
                      .
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:bg-neutral-300"
                    >
                      {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
