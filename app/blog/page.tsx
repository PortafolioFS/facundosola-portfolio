import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export default function BlogPage() {
  return (
    <main
      className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28"
      id="blog"
    >
      <SectionHeader
        eyebrow="Blog"
        title="Próximamente"
        description="Todavía no publiqué artículos. Cuando tenga contenido listo, esta sección va a estar activa."
      />

      <section className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-lg">
        <p className="max-w-2xl text-sm leading-7 text-neutral-300">
          Estoy priorizando que el portfolio muestre proyectos reales y formación
          verificada. Cuando tenga artículos listos, el blog va a volver con
          contenido mejor trabajado.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Contactar
          </Link>
        </div>
      </section>
    </main>
  );
}
