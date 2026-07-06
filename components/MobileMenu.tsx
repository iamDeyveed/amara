"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/data";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col bg-hub-gold px-5 py-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/10 text-[#211806] transition duration-300 hover:rotate-90 hover:bg-black/20 active:scale-95"
        aria-label="Close menu"
      >
        <X size={24} strokeWidth={2.4} />
      </button>

      <nav className="mt-8 flex flex-col gap-3" aria-label="Mobile navigation">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`rounded-xl px-5 py-[18px] font-poppins text-[17px] font-semibold text-[#241b06] transition duration-300 hover:translate-x-1 ${
                active ? "bg-black/25" : "bg-black/10 hover:bg-black/20"
              }`}
            >
              {item.label === "About me" ? "About Me" : item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
