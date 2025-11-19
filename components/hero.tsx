import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0f17] to-[#0c101e] p-8 pt-14 shadow-[0_0_60px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#7c3aed]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#22d3ee]/30 blur-3xl" />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#22d3ee]">Arquitecto de software</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Hola, soy Facundo Sola. Construyo experiencias digitales futuristas con IA y diseño cuidando cada detalle.
          </h1>
          <p className="max-w-2xl text-lg text-neutral-300">
            Mezclo arquitectura moderna, sistemas distribuidos y productos AI-first. Me mueven los equipos ágiles, la
            velocidad de entrega y el impacto en negocio.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
            >
              Ver proyectos destacados
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Escríbeme
            </Link>
          </div>
          <ul className="flex flex-wrap gap-4 text-xs text-neutral-400">
            <li className="rounded-full border border-white/10 px-3 py-1">Next.js</li>
            <li className="rounded-full border border-white/10 px-3 py-1">TypeScript</li>
            <li className="rounded-full border border-white/10 px-3 py-1">LLMs</li>
            <li className="rounded-full border border-white/10 px-3 py-1">Product Design</li>
          </ul>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative h-[320px] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-3 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_35%)]" />
            <Image
              src="/facundo-hero.jpg"
              alt="Facundo Sola"
              fill
              priority
              className="rounded-xl object-cover"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Disponible para colaboraciones
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
