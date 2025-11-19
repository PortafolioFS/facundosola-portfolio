"use client";

import { useState } from "react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-xl transition hover:border-white/40"
      >
        ⌘K / Ctrl+K
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal
          aria-label="Atajos rápidos"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-white/15 bg-neutral-950/90 p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Atajos rápidos</p>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Esc
              </button>
            </div>
            <p className="mt-4 text-sm text-neutral-300">
              Este es un atajo rápido para futuras acciones: abrir proyectos, contactar o buscar en el blog.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
