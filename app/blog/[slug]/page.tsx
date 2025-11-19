import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const publishedDate = post.date ?? post.publishedAt ?? null;

  const rawContent = post.content ?? "";
  const contentParagraphs = Array.isArray(rawContent)
    ? rawContent
    : String(rawContent)
        .trim()
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

  const tags = post.tags ?? [];
  const summary = post.summary ?? post.excerpt;

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-28">
      <Link
        href="/blog"
        className="text-sm text-neutral-400 transition hover:text-white"
      >
        ← Volver al blog
      </Link>

      <article className="space-y-4">
        {tags.length > 0 && (
          <p className="text-xs uppercase tracking-[0.2em] text-[#22d3ee]">
            {tags.join(" • ")}
          </p>
        )}

        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          {post.title}
        </h1>

        {publishedDate && (
          <p className="text-sm text-neutral-400">
            {new Date(publishedDate).toLocaleDateString("es-AR")}
          </p>
        )}

        <div className="space-y-4 text-base leading-7 text-neutral-200">
          {summary && <p className="opacity-90">{summary}</p>}

          {contentParagraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
