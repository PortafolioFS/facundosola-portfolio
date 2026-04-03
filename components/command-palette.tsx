"use client";

import { useEffect } from "react";

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal
      aria-label="Atajos rápidos"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-white/15 bg-neutral-950/90 p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Atajos rápidos</p>
          <button
            onClick={onClose}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Esc
          </button>
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          Pronto podrás abrir proyectos, revisar formación o contactarme desde aquí.
        </p>
      </div>
    </div>
  );
}
