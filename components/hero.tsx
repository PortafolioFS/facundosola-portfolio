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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#22d3ee]">

          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Construyo experiencias digitales seguras, escalables y futuristas combinando desarrollo, ciberseguridad e
            inteligencia artificial.
          </h1>
          <p className="max-w-2xl text-lg text-neutral-300">
            Formación sólida, enfoque práctico y visión moderna aplicada a proyectos reales. Bases fuertes en software,
            seguridad informática e IA para llevar productos a producción con confianza.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/facundo-sola-cv.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
            >
              Descargar CV
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Ver proyectos
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Contacto profesional
            </Link>
          </div>
          <ul className="flex flex-wrap gap-4 text-xs text-neutral-400">
            <li className="rounded-full border border-white/10 px-3 py-1">Ciberseguridad (Google, Hacking Ético)</li>
            <li className="rounded-full border border-white/10 px-3 py-1">C#, .NET, EF Core</li>
            <li className="rounded-full border border-white/10 px-3 py-1">SQL avanzado</li>
            <li className="rounded-full border border-white/10 px-3 py-1">IA aplicada (LLM, automatización)</li>
          </ul>
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">Facundo Sola</span> ·{' '}
            <span className="text-emerald-400">Disponible para nuevas oportunidades Junior / Trainee</span>
          </p>
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
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Disponible para nuevas oportunidades Junior / Trainee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
