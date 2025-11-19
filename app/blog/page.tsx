import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16" id="blog">
      <h1 className="text-3xl font-bold mb-4">Blog técnico</h1>
      <p className="text-sm opacity-70 mb-6">
        Experimentos, notas y reflexiones sobre software, IA y arquitectura.
      </p>
      <div className="space-y-4">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <Link href={`/blog/${p.slug}`}>
              <h2 className="text-lg font-semibold">{p.title}</h2>
            </Link>
            <p className="text-xs opacity-60">{p.date}</p>
            <p className="mt-2 text-sm opacity-80">{p.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
