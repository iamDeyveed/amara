import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { HoverImagePreview } from "@/components/HoverImagePreview";
import { SectionWrapper } from "@/components/SectionWrapper";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { contact, previewTiles, processSteps, quote, socialLinks, valueCards } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <SectionWrapper className="pb-14 pt-14 md:pb-16 md:pt-[70px]">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-1 font-script text-[24px] leading-tight text-hub-muted">
              I craft digital experiences that sit at
            </p>
            <h1 className="mb-5 font-poppins text-[48px] font-extrabold leading-[1.03] text-hub-gold sm:text-[64px]">
              Product
              <br />
              Designer
            </h1>
            <p className="mb-8 max-w-[470px] text-[18px] leading-relaxed text-hub-muted">
              I craft digital experiences that sit at the intersection of form and functionality.
            </p>
            <Button href="/work" aria-label="View my work" className="px-7 py-3.5">
              View my work <ArrowRight size={17} />
            </Button>
            <StaggerGroup className="mt-7 flex gap-3.5" aria-label="Social links" delay={0.05}>
              {socialLinks.map((social) => (
                <StaggerItem key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-hub-border text-xs font-semibold text-hub-muted transition duration-300 hover:-translate-y-1 hover:border-hub-gold hover:text-hub-gold hover:shadow-[0_10px_30px_rgba(215,155,31,0.16)]"
                  >
                    {social.shortLabel}
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="relative flex min-h-[360px] items-end justify-center overflow-visible md:min-h-[560px]">
            {/* Hero portrait lives at /public/images/amarachi-hero.png. Replace that file to update the image. */}
            <div className="animate-gold-breathe absolute bottom-6 left-1/2 h-[58%] w-[76%] -translate-x-1/2 rounded-full bg-hub-gold/10 blur-3xl" />
            <Image
              src="/images/amarachi-hero.png"
              alt="Portrait of Amarachi Mbanta"
              width={1536}
              height={1792}
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="relative z-10 h-auto w-[88%] max-w-[440px] object-contain object-bottom drop-shadow-[0_28px_42px_rgba(0,0,0,0.55)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] md:w-full md:max-w-[520px]"
            />
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[42%] w-[94%] max-w-[500px] -translate-x-1/2 bg-[linear-gradient(to_top,#070706_0%,rgba(7,7,6,0.98)_18%,rgba(7,7,6,0.82)_45%,rgba(7,7,6,0)_100%)] md:h-[46%] md:max-w-[560px]" />
            <div className="absolute bottom-8 right-0 z-30 text-right font-poppins text-[22px] font-extrabold leading-tight text-hub-gold sm:text-[28px] md:bottom-20 md:-right-4">
              Amarachi
              <br />
              Mbanta
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <p className="font-script text-2xl text-hub-muted">The big question is?</p>
          <h2 className="mt-1 font-script text-[34px] leading-tight text-hub-goldLight">
            What kind of designer are you
          </h2>
        </div>

        <StaggerGroup className="mt-10 grid gap-[18px] md:grid-cols-3">
          {previewTiles.map((tile, index) => {
            const lightTile = index >= 4;

            return (
              <StaggerItem key={tile.name}>
                <HoverImagePreview
                  src={tile.image ?? ""}
                  alt={`${tile.name} project preview`}
                  title={tile.name}
                  meta={tile.meta}
                >
                  <article
                    className={`group relative flex aspect-[4/3] cursor-zoom-in items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br ${tile.className} transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.34)]`}
                  >
                    {tile.image ? (
                      <Image
                        src={tile.image}
                        alt={`${tile.name} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                    ) : (
                      <>
                        {/* Replace preview placeholders with real project thumbnails in /public/images. */}
                        <span className="absolute inset-4 rounded-xl border border-white/15" />
                      </>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-60" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                      Preview
                    </span>
                    <h3
                      className={`absolute bottom-4 left-4 font-poppins text-[15px] font-bold transition duration-300 group-hover:-translate-y-1 ${
                        lightTile && !tile.image ? "text-[#1a1a1a]" : "text-white drop-shadow"
                      }`}
                    >
                      {tile.name}
                      {tile.meta ? ` - ${tile.meta}` : ""}
                    </h3>
                  </article>
                </HoverImagePreview>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="section-title text-center">My Process</h2>
        <StaggerGroup className="mt-9 grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <StaggerItem key={step.title}>
              <article className="flex h-[130px] items-center justify-center rounded-[14px] border border-hub-border bg-hub-card px-6 text-center text-sm text-hub-faint transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-hub-goldDim hover:text-hub-muted hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                {step.title}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="section-title text-center">What I bring to the table</h2>
        <StaggerGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((card) => {
            const Icon = card.icon;

            return (
              <StaggerItem key={card.title}>
                <article className="group rounded-2xl border border-[#332f4d] bg-[#241f3d] px-5 py-8 text-center transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-hub-goldDim hover:shadow-[0_28px_70px_rgba(36,31,61,0.34)]">
                  <Icon
                    className="mx-auto mb-4 text-hub-goldLight transition duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]"
                    size={44}
                    strokeWidth={1.7}
                  />
                  <p className="font-semibold text-hub-text">{card.title}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <blockquote className="mx-auto mt-[70px] max-w-[700px] text-center">
          <p className="font-script text-[26px] leading-relaxed text-hub-goldLight">{quote}</p>
        </blockquote>

        <div className="mt-8 text-center">
          <Button
            href={`mailto:${contact.email}?subject=Let%27s%20Make%20%245M%20Together`}
            variant="gold"
            className="rounded-lg px-8 py-4"
          >
            Let&apos;s Make $5M Together
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
