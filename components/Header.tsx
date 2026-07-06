"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-[200] border-b border-hub-border bg-hub-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-hub items-center justify-between px-6 py-[18px]">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[15px] transition-colors ${
                  active ? "text-hub-gold" : "text-hub-text hover:text-hub-goldLight"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-hub-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hub-border text-hub-text transition hover:border-hub-gold hover:text-hub-gold md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={23} />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
