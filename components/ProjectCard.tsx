import type { Project } from "@/lib/data";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-hub-border bg-hub-card transition duration-200 hover:-translate-y-1 hover:border-hub-goldDim">
      <div
        className={`relative flex aspect-[16/10] flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br font-poppins ${project.className}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} case study preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <span className="absolute left-5 top-5 rounded-full bg-black/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {project.symbol}
            </span>
            <span className="text-xl font-bold">{project.title}</span>
            <small className="font-sans text-[13px] opacity-85">{project.sector}</small>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-85 transition duration-200 group-hover:opacity-65" />
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="font-poppins text-lg font-bold text-white drop-shadow">{project.title}</span>
          <small className="mt-1 block font-sans text-[13px] text-white/85">{project.sector}</small>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 translate-y-4 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
      <div className="px-5 py-4 text-center font-poppins text-[15px] font-bold text-hub-text">
        {project.type}
      </div>
    </article>
  );
}
