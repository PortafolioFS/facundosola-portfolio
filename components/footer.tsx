import { contactLinks, profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 py-10 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p>
            Desarrollo de software con enfoque en ciberseguridad e IA aplicada. {profile.location} · {profile.workMode.toLowerCase()}.
          </p>
        </div>
        <div className="flex gap-4 text-white">
          <a className="hover:text-[#22d3ee]" href={contactLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-[#22d3ee]" href={contactLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-[#22d3ee]" href={contactLinks.cvPage}>
            CV
          </a>
          <a className="hover:text-[#22d3ee]" href={`mailto:${contactLinks.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
