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
              Lo que sé hoy y cómo me estoy formando
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Este portfolio está armado para mostrar un perfil realista:
              formación técnica actual, proyectos propios publicados y
              certificaciones verificadas.
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
