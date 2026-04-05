"use client";

import { useState } from "react";
import { BackgroundFX } from "@/components/background-fx";
import { CommandPalette } from "@/components/command-palette";
import { CursorTrail } from "@/components/cursor-trail";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { TrainingSection } from "@/components/training-section";
import { aboutHighlights } from "@/lib/portfolio";

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05060a] text-neutral-100">
      <BackgroundFX />
      <CursorTrail />
      <Navbar onOpenCmd={() => setCmdOpen(true)} />
      <main>
        <Hero />
        <section
          className="grid gap-4 rounded-3xl border border-white/10 bg-black/40 p-6"
          id="about"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
              Perfil actual
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Formación técnica y enfoque profesional
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Actualmente curso la Tecnicatura Superior en Desarrollo de
              Software y complemento esa formación con bases en C#, SQL
              Server, HTML, CSS y JavaScript, junto con capacitación en
              ciberseguridad e inteligencia artificial. Esa preparación se
              apoya en práctica concreta de soporte técnico, mantenimiento de
              equipos y redes básicas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
          <ProjectsSection />
          <TrainingSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
}
