export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 py-10 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-white">Facundo Sola</p>
        <p>Diseño y código desde el futuro. Buenos Aires, remoto para el mundo.</p>
        <div className="flex gap-4 text-white">
          <a className="hover:text-[#22d3ee]" href="https://github.com/Facundo2504" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-[#22d3ee]" href="https://www.linkedin.com/in/facusola" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-[#22d3ee]" href="mailto:solafacu@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
