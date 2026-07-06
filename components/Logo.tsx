import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  showDescriptor?: boolean;
};

export function Logo({ showDescriptor = true }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Big_Hub home">
      <span className="relative block h-[30px] w-[30px] overflow-hidden">
        <Image
          src="/images/big-hub-logo.png"
          alt=""
          fill
          sizes="30px"
          className="object-contain transition duration-300 group-hover:scale-105"
          priority
        />
      </span>
      <span className="font-poppins text-xl font-extrabold text-hub-gold transition-colors group-hover:text-hub-goldLight">
        Big_Hub
      </span>
      {showDescriptor ? (
        <span
          className="ml-1 hidden items-center gap-2.5 text-hub-muted lg:flex"
          aria-label="Blackigbogal_Hub - Product Designer"
        >
          <span className="font-script text-[19px] leading-none">Blackigbogal_Hub</span>
          <span className="h-px w-7 bg-hub-faint" />
          <span className="font-poppins text-[13px] tracking-[0.03em]">Product Designer</span>
        </span>
      ) : null}
    </Link>
  );
}
