import type { ExpertiseGroup } from "@/lib/data";

type ExpertiseCardProps = {
  group: ExpertiseGroup;
};

export function ExpertiseCard({ group }: ExpertiseCardProps) {
  const Icon = group.icon;

  return (
    <article className="group rounded-2xl border border-hub-border bg-hub-card p-6 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-hub-goldDim hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hub-border bg-hub-elevated text-hub-gold transition duration-300 group-hover:scale-110 group-hover:border-hub-goldDim group-hover:text-hub-goldLight">
          <Icon size={19} />
        </span>
        <h3 className="font-poppins text-base font-semibold text-hub-text">{group.title}</h3>
      </div>
      <ul className="space-y-2.5">
        {group.items.map((item) => (
          <li key={item} className="relative pl-4 text-sm leading-relaxed text-hub-muted">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-hub-gold" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
