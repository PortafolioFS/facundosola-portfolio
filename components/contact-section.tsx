"use client";

import { useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getStringField = (value: FormDataEntryValue | null) =>
    typeof value === "string" ? value.trim() : "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = getStringField(formData.get("name"));
    const email = getStringField(formData.get("email"));
    const subject = getStringField(formData.get("subject"));
    const message = getStringField(formData.get("message"));

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Completá nombre, email y mensaje para continuar.");
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMsg("Ingresá un email válido.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Hubo un problema al enviar el mensaje.";
      setErrorMsg(message);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-24 lg:py-32"
    >
      <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300 uppercase">
        Colaboremos
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
        Listo para nuevos desafíos
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-neutral-300">
        Disponible para roles Junior/Trainee con foco en desarrollo,
        ciberseguridad e IA aplicada. Completá el formulario y te respondo a la
        brevedad.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
              placeholder="Nombre y apellido"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
              placeholder="tuemail@ejemplo.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300"
          >
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            placeholder="Oportunidad laboral, proyecto, consulta..."
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            placeholder="Contame brevemente sobre la oportunidad o tu consulta."
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          <p className="text-xs text-neutral-400">
            El mensaje llegará a{" "}
            <span className="font-semibold text-white">
              solafacu@gmail.com
            </span>
            .
          </p>
        </div>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            ✅ Mensaje enviado correctamente. ¡Gracias por contactarte!
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            ⚠ Hubo un problema al enviar el mensaje: {errorMsg}
          </p>
        )}
      </form>
    </section>
  );
}
