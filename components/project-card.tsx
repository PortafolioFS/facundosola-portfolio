import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  highlight?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-neutral-950/60 p-5 shadow-lg transition hover:-translate-y-1 hover:border-white/30">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-[#22d3ee]">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {project.highlight ?? "Proyecto"}
        </div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-neutral-300">{project.description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-300">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      {project.href ? (
        <Link
          href={project.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#22d3ee]"
        >
          Ver detalle
          <span aria-hidden>→</span>
        </Link>
      ) : null}
    </article>
  );
}
