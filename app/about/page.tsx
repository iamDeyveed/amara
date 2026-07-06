import { SectionWrapper } from "@/components/SectionWrapper";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { aboutExperience, aboutJourney } from "@/lib/data";

export const metadata = {
  title: "About Me | Big_Hub"
};

export default function AboutPage() {
  return (
    <SectionWrapper className="pt-12 md:pt-[50px]">
      <div className="mx-auto max-w-[780px]">
        <section aria-labelledby="experience-title">
          <h1 id="experience-title" className="font-script text-[40px] leading-tight text-hub-goldLight">
            My experience!
          </h1>
          <StaggerGroup className="mt-5 space-y-4 text-base leading-relaxed text-hub-muted" delay={0.12}>
            {aboutExperience.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p>{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="mt-16" aria-labelledby="journey-title">
          <h2 id="journey-title" className="font-script text-[38px] leading-tight text-hub-goldLight">
            My Journey
          </h2>
          <StaggerGroup className="mt-5 space-y-4 text-base leading-relaxed text-hub-muted" delay={0.12}>
            {aboutJourney.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p>{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <p className="mt-[70px] text-center font-poppins text-sm font-bold tracking-[0.04em] text-hub-gold">
          A NOTE FROM MY DESK
        </p>
      </div>
    </SectionWrapper>
  );
}
