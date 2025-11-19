"use client";

import Image from "next/image";
import { Download, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center md:flex-row md:items-center md:gap-10 md:pt-24"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-[420px] w-[70%] rounded-[40px] bg-gradient-to-r from-cyan-400/40 via-fuchsia-500/30 to-indigo-500/40 blur-3xl"
      />
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Portafolio Futurista • IA & Software</span>
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Facundo Sola
          </span>
          <br />
          <span className="text-white/90">
            Desarrollo, Arquitectura & Inteligencia Artificial
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-sm opacity-80 md:text-base">
          Diseñador de soluciones tecnológicas que combinan frontend moderno,
          backend robusto e IA aplicada. Enfocado en portafolios, sistemas de
          gestión y experiencias digitales de alto impacto.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm"
          >
            Contactar
          </a>
          <a
            href="https://drive.google.com/file/d/1kRnBZO5FdoWgvsf0UfcUM1F2CG9nfyOz/view?usp=drive_link"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
            target="_blank"
          >
            <Download className="h-4 w-4" /> Descargar CV
          </a>
        </div>
      </div>

      <div className="mt-10 flex-1 md:mt-0">
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-indigo-500/30 shadow-2xl">
          <Image
            src="/facundo-hero.jpg"
            alt="Facundo Sola"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
