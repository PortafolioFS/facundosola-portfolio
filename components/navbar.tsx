"use client";

import { Cpu, Command, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar({ onOpenCmd }: { onOpenCmd: () => void }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenCmd();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenCmd]);

  return (
    <header className="sticky top-0 z-40 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Cpu className="h-5 w-5" />
          <span>FACUNDO SOLA // FUTURE</span>
        </a>
        <nav className="hidden gap-4 md:flex">
          <a href="#about" className="opacity-80 hover:opacity-100">
            Sobre mí
          </a>
          <a href="#projects" className="opacity-80 hover:opacity-100">
            Proyectos
          </a>
          <a href="#blog" className="opacity-80 hover:opacity-100">
            Blog
          </a>
          <a href="#contact" className="opacity-80 hover:opacity-100">
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCmd}
            className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/10 px-2 py-1 md:flex"
          >
            <Command className="h-4 w-4" />{" "}
            <span>Comandos</span>
          </button>
          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-xl border border-white/10 bg-white/10 p-2"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
