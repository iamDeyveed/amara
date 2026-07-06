import { Button } from "@/components/Button";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { caseStudyCategories, expertiseGroups, projects } from "@/lib/data";

export const metadata = {
  title: "My Work | Big_Hub"
};

export default function WorkPage() {
  return (
    <SectionWrapper className="pt-12 md:pt-[50px]">
      <h1 className="section-title">My Expertise</h1>
      <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {expertiseGroups.map((group) => (
          <StaggerItem key={group.title}>
            <ExpertiseCard group={group} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <section className="mt-16" aria-labelledby="case-studies-title">
        <h2 id="case-studies-title" className="font-poppins text-[26px] font-bold text-hub-text">
          Here is about six case studies you can review.
        </h2>
        <ul className="mt-4 space-y-1.5">
          {caseStudyCategories.map((category) => (
            <li key={category} className="relative pl-4 text-[15px] text-hub-muted">
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-hub-gold" />
              {category}
            </li>
          ))}
        </ul>
      </section>

      <StaggerGroup className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-16 text-center">
        <Button href="/about" variant="gold" className="rounded-lg px-8 py-4">
          Let&apos;s collaborate
        </Button>
      </div>
    </SectionWrapper>
  );
}
