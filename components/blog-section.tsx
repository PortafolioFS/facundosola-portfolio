import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { posts } from "@/lib/blog";

export function BlogSection() {
  return (
    <section className="space-y-6" id="blog">
      <SectionHeader
        eyebrow="Blog"
        title="Notas recientes"
        description="Ideas en construcción sobre IA aplicada y experiencias digitales."
        cta={
          <Link
            href="/blog"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Ver blog
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {posts.slice(0, 2).map((post) => {
          const tags = post.tags ?? [];
          const summary = post.summary ?? post.excerpt;
          const displayDate = post.publishedAt ?? post.date;

          return (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg"
            >
              {tags.length > 0 && (
                <p className="text-xs uppercase tracking-[0.2em] text-[#22d3ee]">
                  {tags.join(" • ")}
                </p>
              )}
              <h3 className="mt-2 text-xl font-semibold text-white">
                {post.title}
              </h3>
              {summary && (
                <p className="mt-2 text-sm text-neutral-300">{summary}</p>
              )}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                {displayDate && (
                  <span>{new Date(displayDate).toLocaleDateString("es-AR")}</span>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-white transition hover:text-[#22d3ee]"
                >
                  Leer →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
