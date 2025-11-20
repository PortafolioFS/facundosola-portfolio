"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "#about", label: "Quién soy" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#education", label: "Formación" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-white">
          facundosola.dev
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-200 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-white/40 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir navegación"
        >
          <span className="text-lg">≡</span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-black/70 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-200">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
        
          </div>
        </div>
      ) : null}
    </header>
  );
}
