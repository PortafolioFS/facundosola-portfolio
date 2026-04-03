import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function ContactSection() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-black p-8" id="contact">
      <SectionHeader
        eyebrow="Contacto"
        title="Disponible para seguir creciendo"
        description="Si querés ver mi perfil, revisar mis proyectos o conversar sobre una oportunidad, escribime y lo seguimos."
      />
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="mailto:facundo@sola.dev"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
        >
          Enviar email
        </Link>
        <Link
          href="https://www.linkedin.com/in/facundosola/"
          target="_blank"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
        >
          LinkedIn
        </Link>
        <p className="text-sm text-neutral-300">Tiempo de respuesta habitual: 24 hs.</p>
      </div>
    </section>
  );
}
