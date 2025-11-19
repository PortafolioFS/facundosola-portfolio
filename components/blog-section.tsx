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
        {posts.slice(0, 2).map((post) => (
          <article key={post.slug} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22d3ee]">{post.tags.join(" • ")}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{post.summary}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>{new Date(post.date).toLocaleDateString("es-AR")}</span>
              <Link href={`/blog/${post.slug}`} className="font-semibold text-white transition hover:text-[#22d3ee]">
                Leer →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
