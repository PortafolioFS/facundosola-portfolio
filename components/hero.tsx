

export function Hero() {
  return (
     <section id="top" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300">
        Desarrollador de Software en formación · Ciberseguridad · IA aplicada
      </p>

      <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
        Construyo experiencias digitales seguras, escalables y futuristas
        combinando desarrollo, ciberseguridad e inteligencia artificial.
      </h1>

      <p className="mt-4 max-w-2xl text-sm text-neutral-300 md:text-base">
        Formación sólida, enfoque práctico y visión moderna aplicada a proyectos reales.
        Bases fuertes en software, seguridad informática e IA para llevar productos
        a producción con confianza.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-300">
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

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="TU_LINK_CV"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
        >
          Descargar CV
        </a>
        <a
          href="#projects"
          className="rounded-full border border-white/20 px-5 py-2 text-sm"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="text-sm text-neutral-300 underline-offset-4 hover:underline"
        >
          Contacto profesional
        </a>
      </div>

      <p className="mt-6 text-sm text-neutral-300">
        <span className="font-semibold text-white">Facundo Sola</span> ·{" "}
        <span className="text-emerald-400">
          Disponible para nuevas oportunidades Junior / Trainee
        </span>
      </p>
    </section>
  );
}
