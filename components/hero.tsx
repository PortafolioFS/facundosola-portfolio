import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      {/* Eyebrow */}
      <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300 uppercase">
        Desarrollador de Software en formación · Ciberseguridad · IA aplicada
      </p>

      <div className="mt-6 relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Columna izquierda: texto */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Construyo experiencias digitales seguras, escalables y futuristas
            combinando desarrollo, ciberseguridad e inteligencia artificial.
          </h1>

          <p className="max-w-2xl text-lg text-neutral-300">
            Formación sólida, enfoque práctico y visión moderna aplicada a
            proyectos reales. Bases fuertes en software, seguridad informática e
            IA para llevar productos a producción con confianza.
          </p>

          {/* Chips de skills clave */}
          <div className="flex flex-wrap gap-3 text-xs text-neutral-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Ciberseguridad (Google, Hacking Ético)
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              C#, .NET, EF Core
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              SQL avanzado
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              IA aplicada (LLM, automatización)
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              // Cambia este href si usás otro path o el link de Drive
              href="https://drive.google.com/file/d/1kRnBZO5FdoWgvsf0UfcUM1F2CG9nfyOz/view?usp=drive_link"
              target="_blank"
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
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              Enviar email
            </Link>
          </div>

          {/* Nombre + disponibilidad */}
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">Facundo Sola</span> ·{" "}
            <span className="text-emerald-400">
              Disponible para nuevas oportunidades Junior / Trainee
            </span>
          </p>
        </div>

        {/* Columna derecha: foto */}
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
              <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
              Disponible para nuevas oportunidades Junior / Trainee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
