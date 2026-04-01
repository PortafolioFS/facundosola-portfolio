import Image from "next/image";
import Link from "next/link";

import type { ContactLinks, Profile } from "@/lib/profile";

type HeroProps = {
  contacts: ContactLinks;
  profile: Profile;
};

export function Hero({ contacts, profile }: HeroProps) {
  return (
    <section id="top" className="py-10 lg:py-16">
      <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300 uppercase">
        {profile.heroEyebrow}
      </p>

      <div className="mt-6 relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {profile.heroTitle}
          </h1>

          <p className="max-w-2xl text-lg text-neutral-300">
            {profile.heroDescription}
          </p>

          <div className="flex flex-wrap gap-3 text-xs text-neutral-300">
            {profile.quickFacts.map((fact) => (
              <span key={fact} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {fact}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={contacts.cvPage}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
            >
              Ver CV web
            </Link>

            <a
              href={contacts.cvPdf}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Descargar PDF
            </a>

            <Link
              href="/#contact"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              Contactar
            </Link>
          </div>

          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">{profile.name}</span> · {profile.location} ·{" "}
            <span className="text-emerald-400">
              {profile.availability}
            </span>
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative h-[320px] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-3 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_35%)]" />
            <Image
              src="/facundo-hero.jpg"
              alt="Facundo Sola"
              fill
              priority
              className="rounded-xl object-cover"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
              {profile.availability}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
