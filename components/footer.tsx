import { portfolioProfile } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 py-10 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-white">{portfolioProfile.name}</p>
        <p>
          Perfil junior en formación con foco en desarrollo de software, IA,
          SQL, ciberseguridad y soporte técnico.
        </p>
        <div className="flex gap-4 text-white">
          <a
            className="hover:text-[#22d3ee]"
            href={portfolioProfile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-[#22d3ee]"
            href={portfolioProfile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="hover:text-[#22d3ee]" href={portfolioProfile.email}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
