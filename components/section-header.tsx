import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  cta?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, cta }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">{eyebrow}</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description ? <p className="mt-2 text-sm text-neutral-300">{description}</p> : null}
      </div>
      {cta}
    </div>
  );
}
