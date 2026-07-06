"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { navItems } from "@/lib/data";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[1000] flex min-h-dvh flex-col bg-[#d79b1f] px-5 py-7 text-[#070706] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/25 bg-black/10 text-[#070706] transition duration-300 hover:rotate-90 hover:bg-black/20 active:scale-95"
        aria-label="Close menu"
      >
        <X size={24} strokeWidth={2.4} />
      </button>

      <nav className="mt-10 flex flex-col gap-4" aria-label="Mobile navigation">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`block rounded-xl border border-black/25 px-6 py-5 font-poppins text-xl font-extrabold text-[#070706] shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition duration-300 hover:translate-x-1 ${
                active ? "bg-black/25" : "bg-black/10 hover:bg-black/20"
              }`}
            >
              {item.label === "About me" ? "About Me" : item.label}
            </Link>
          );
        })}
      </nav>
    </div>,
    document.body
  );
}
