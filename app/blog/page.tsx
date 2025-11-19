import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28">
      <SectionHeader
        eyebrow="Blog"
        title="Ideas y aprendizajes"
        description="Notas cortas sobre arquitectura, IA aplicada y experiencias digitales."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22d3ee]">{post.tags.join(" • ")}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>{new Date(post.publishedAt).toLocaleDateString("es-AR")}</span>
              <Link href={`/blog/${post.slug}`} className="font-semibold text-white transition hover:text-[#22d3ee]">
                Leer →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
