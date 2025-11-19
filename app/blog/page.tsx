// app/blog/page.tsx
import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <main
      className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28"
      id="blog"
    >
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          Blog
        </p>
        <h1 className="mt-2 text-3xl font-bold">Ideas y aprendizajes</h1>
        <p className="mt-2 text-sm text-neutral-300">
          Notas sobre arquitectura, IA aplicada y experiencias digitales.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const displayDate = post.publishedAt ?? post.date;
          const excerpt = post.excerpt ?? post.summary;

          return (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg"
            >
              {post.tags.length > 0 && (
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {post.tags.join(" • ")}
                </p>
              )}

              <h2 className="mt-2 text-xl font-semibold text-white">
                {post.title}
              </h2>

              {excerpt && (
                <p className="mt-2 text-sm text-neutral-300">{excerpt}</p>
              )}

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                {displayDate && (
                  <span>
                    {new Date(displayDate).toLocaleDateString("es-AR")}
                  </span>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-white transition hover:text-cyan-300"
                >
                  Leer →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
