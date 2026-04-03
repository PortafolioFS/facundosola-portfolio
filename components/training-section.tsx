import { SectionHeader } from "@/components/section-header";
import {
  complementaryCertificates,
  inProgressCertificates,
  learningTracks,
  technicalCertificates,
  type Certificate,
  type LearningTrack,
} from "@/lib/portfolio";

function renderMeta(item: Certificate) {
  const meta = [item.institution, item.date, item.duration, item.score].filter(
    Boolean
  );

  if (meta.length === 0) {
    return null;
  }

  return (
    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#22d3ee]">
      {meta.join(" • ")}
    </p>
  );
}

function LearningCard({ item }: { item: LearningTrack }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-[#22d3ee]">
        {item.period}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
      {item.institution && (
        <p className="mt-1 text-sm text-neutral-400">{item.institution}</p>
      )}
      <p className="mt-3 text-sm text-neutral-300">{item.description}</p>
    </article>
  );
}

function CertificateCard({ item }: { item: Certificate }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5">
      <h3 className="text-base font-semibold text-white">{item.title}</h3>
      {renderMeta(item)}
      {item.notes && <p className="mt-3 text-sm text-neutral-300">{item.notes}</p>}
    </article>
  );
}

export function TrainingSection() {
  return (
    <section className="space-y-6" id="learning">
      <SectionHeader
        eyebrow="Formación"
        title="Estudios, certificaciones y aprendizaje continuo"
        description="Una base en desarrollo de software, SQL, IA, ciberseguridad y formación complementaria que acompaña mi perfil técnico."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
              Formación actual
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Base técnica en construcción
            </h3>
          </div>
          <div className="grid gap-4">
            {learningTracks.map((item) => (
              <LearningCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
              Certificados técnicos completados
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              IA, SQL y ciberseguridad
            </h3>
          </div>
          <div className="grid gap-4">
            {technicalCertificates.map((item) => (
              <CertificateCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
              Formación complementaria
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Certificados que suman contexto
            </h3>
          </div>
          <div className="grid gap-4">
            {complementaryCertificates.map((item) => (
              <CertificateCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
              En progreso
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Formación que sigo desarrollando
            </h3>
          </div>
          <div className="grid gap-4">
            {inProgressCertificates.map((item) => (
              <CertificateCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
