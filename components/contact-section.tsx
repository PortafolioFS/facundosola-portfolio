import Link from "next/link";
import { ContactEmailDialog } from "@/components/contact-email-dialog";
import { SectionHeader } from "@/components/section-header";
import { portfolioProfile } from "@/lib/portfolio";

export function ContactSection() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-black p-8" id="contact">
      <SectionHeader
        eyebrow="Contacto"
        title="Disponible para seguir creciendo"
        description="Si querés ver mi perfil, revisar mis proyectos o conversar sobre una oportunidad, escribime y lo seguimos."
      />
      <div className="flex flex-wrap items-center gap-4">
        <ContactEmailDialog fallbackHref={portfolioProfile.email} />
        <Link
          href={portfolioProfile.linkedinUrl}
          target="_blank"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
        >
          LinkedIn
        </Link>
        <p className="text-sm text-neutral-300">Tiempo de respuesta habitual: 24 hs.</p>
      </div>
      <p className="text-sm text-neutral-300">
        Si preferís ir por la vía directa, también podés{" "}
        <Link
          href={portfolioProfile.email}
          className="font-medium text-[#22d3ee] underline underline-offset-4"
        >
          abrir tu cliente de correo
        </Link>
        .
      </p>
    </section>
  );
}
