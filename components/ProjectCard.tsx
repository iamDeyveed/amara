"use client";

import type { Project } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((current) => !current);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${project.title} case study card. Click to ${isFlipped ? "show image" : "show details"}.`}
      aria-pressed={isFlipped}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      className="group cursor-pointer outline-none [perspective:1200px]"
    >
      <div
        className={`relative transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="[backface-visibility:hidden]">
          <div className="overflow-hidden rounded-2xl border border-hub-border bg-hub-card transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:border-hub-goldDim group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.34)] group-focus-visible:border-hub-gold">
            <div
              className={`relative flex aspect-[16/10] flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br font-poppins ${project.className}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} case study preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-85 transition duration-300 group-hover:opacity-65" />
              <div className="absolute bottom-4 left-4 right-4 z-10 transition duration-300 group-hover:-translate-y-1">
                <span className="font-poppins text-lg font-bold text-white drop-shadow">
                  {project.title}
                </span>
                <small className="mt-1 block font-sans text-[13px] text-white/85">
                  {project.sector}
                </small>
              </div>
              <span className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                Flip
              </span>
              <div className="absolute inset-x-0 bottom-0 h-16 translate-y-4 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="px-5 py-4 text-center font-poppins text-[15px] font-bold text-hub-text">
              {project.type}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-hub-goldDim bg-hub-card p-6 text-left shadow-[0_28px_80px_rgba(0,0,0,0.34)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full min-h-[calc((100vw-48px)*0.625+56px)] flex-col justify-center sm:min-h-[306px]">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-hub-gold/30 bg-hub-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-hub-goldLight">
                Case note
              </span>
              <h3 className="font-poppins text-2xl font-extrabold text-hub-gold">{project.title}</h3>
              <p className="mt-2 text-sm font-semibold text-hub-text">{project.type}</p>
              <p className="mt-5 text-sm leading-relaxed text-hub-muted">{project.flipText}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
