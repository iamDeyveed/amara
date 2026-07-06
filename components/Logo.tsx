import Link from "next/link";

type LogoProps = {
  showDescriptor?: boolean;
};

export function Logo({ showDescriptor = true }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Big_Hub home">
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-gradient-to-br from-hub-goldLight to-hub-goldDim font-poppins text-[13px] font-extrabold text-[#1a1408] shadow-gold">
        H8
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
