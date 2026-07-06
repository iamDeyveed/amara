import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { previewTiles, processSteps, quote, socialLinks, valueCards } from "@/lib/data";

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
            <div className="mt-7 flex gap-3.5" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hub-border text-xs font-semibold text-hub-muted transition hover:border-hub-gold hover:text-hub-gold"
                >
                  {social.shortLabel}
                </a>
              ))}
            </div>
          </div>

          <div className="relative order-first flex min-h-[360px] items-end justify-center overflow-visible md:order-none md:min-h-[560px]">
            {/* Hero portrait lives at /public/images/amarachi-hero.png. Replace that file to update the image. */}
            <div className="absolute bottom-6 left-1/2 h-[58%] w-[76%] -translate-x-1/2 rounded-full bg-hub-gold/10 blur-3xl" />
            <Image
              src="/images/amarachi-hero.png"
              alt="Portrait of Amarachi Mbanta"
              width={1536}
              height={1792}
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="relative z-10 h-auto w-[88%] max-w-[440px] object-contain object-bottom drop-shadow-[0_28px_42px_rgba(0,0,0,0.55)] md:w-full md:max-w-[520px]"
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

        <div className="mt-10 grid gap-[18px] md:grid-cols-3">
          {previewTiles.map((tile, index) => {
            const lightTile = index >= 4;

            return (
              <article
                key={tile.name}
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br ${tile.className} transition duration-200 hover:-translate-y-1`}
              >
                {tile.image ? (
                  <Image
                    src={tile.image}
                    alt={`${tile.name} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <>
                    {/* Replace preview placeholders with real project thumbnails in /public/images. */}
                    <span className="absolute inset-4 rounded-xl border border-white/15" />
                  </>
                )}
                <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
                <h3
                  className={`absolute bottom-4 left-4 font-poppins text-[15px] font-bold ${
                    lightTile && !tile.image ? "text-[#1a1a1a]" : "text-white drop-shadow"
                  }`}
                >
                  {tile.name}
                  {tile.meta ? ` - ${tile.meta}` : ""}
                </h3>
              </article>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="section-title text-center">My Process</h2>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="flex h-[130px] items-center justify-center rounded-[14px] border border-hub-border bg-hub-card px-6 text-center text-sm text-hub-faint transition hover:border-hub-goldDim hover:text-hub-muted"
            >
              {step.title}
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="section-title text-center">What I bring to the table</h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-[#332f4d] bg-[#241f3d] px-5 py-8 text-center transition hover:-translate-y-1 hover:border-hub-goldDim"
              >
                <Icon className="mx-auto mb-4 text-hub-goldLight" size={44} strokeWidth={1.7} />
                <p className="font-semibold text-hub-text">{card.title}</p>
              </article>
            );
          })}
        </div>

        <blockquote className="mx-auto mt-[70px] max-w-[700px] text-center">
          <p className="font-script text-[26px] leading-relaxed text-hub-goldLight">{quote}</p>
        </blockquote>

        <div className="mt-8 text-center">
          <Button href="/work" variant="gold" className="rounded-lg px-8 py-4">
            Let&apos;s Make $5M Together
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
