"use client";

import { useState } from "react";
import { BackgroundFX } from "@/components/background-fx";
import { CommandPalette } from "@/components/command-palette";
import { CursorTrail } from "@/components/cursor-trail";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { BlogSection } from "@/components/blog-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

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
          <div className="grid gap-6 md:grid-cols-3">
            {["Arquitectura de producto", "IA con propósito", "Experiencia cuidada"].map((title, index) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  {[
                    "De MVP a scale-up: sistemas que crecen sin frenar a producto ni diseño.",
                    "Experimentos rápidos con modelos fundacionales, medidos con métricas de negocio.",
                    "Microinteracciones, estados vacíos y accesibilidad que dan confianza a los usuarios.",
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
}
