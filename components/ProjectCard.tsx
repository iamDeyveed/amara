import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-hub-border bg-hub-card transition duration-200 hover:-translate-y-1 hover:border-hub-goldDim">
      <div
        className={`relative flex aspect-[16/10] flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br font-poppins ${project.className}`}
      >
        {/* Replace this placeholder with an image in /public/images and render it here later. */}
        <span className="absolute left-5 top-5 rounded-full bg-black/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {project.symbol}
        </span>
        <span className="text-xl font-bold">{project.title}</span>
        <small className="font-sans text-[13px] opacity-85">{project.sector}</small>
        <div className="absolute inset-x-0 bottom-0 h-16 translate-y-4 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
      <div className="px-5 py-4 text-center font-poppins text-[15px] font-bold text-hub-text">
        {project.type}
      </div>
    </article>
  );
}
