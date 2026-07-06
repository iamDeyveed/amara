import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { contact, navItems, socialLinks } from "@/lib/data";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-hub-border py-14 md:py-16">
      <div className="mx-auto max-w-hub px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Logo showDescriptor={false} />
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-hub-muted">
              I&apos;m currently open to product design opportunities and collaborations.
            </p>
            <div className="mt-5 flex gap-3" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hub-border bg-hub-card text-xs font-semibold text-hub-muted transition duration-300 hover:-translate-y-1 hover:border-hub-gold hover:text-hub-gold"
                >
                  {social.shortLabel}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 font-poppins text-[15px] font-semibold text-hub-text">Navigation</h2>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-hub-muted transition duration-300 hover:translate-x-1 hover:text-hub-gold"
                >
                  {item.label === "About me" ? "About" : item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-3 font-poppins text-[15px] font-semibold text-hub-text">Contact me</h2>
            <div className="space-y-2 text-sm text-hub-muted">
              <p>
                Email:
                <br />
                <a href={`mailto:${contact.email}`} className="transition duration-300 hover:text-hub-gold">
                  {contact.email}
                </a>
              </p>
              <p>
                WhatsApp:
                <br />
                <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} className="transition duration-300 hover:text-hub-gold">
                  {contact.whatsapp}
                </a>
              </p>
              <a href="/work" className="block transition duration-300 hover:translate-x-1 hover:text-hub-gold">
                Service
              </a>
              <a href="/about" className="block transition duration-300 hover:translate-x-1 hover:text-hub-gold">
                Testimonials
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hub-border pt-5 text-[13px] text-hub-faint sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright 2026 Big_Hub.</span>
          <a href="#top" className="inline-flex items-center gap-1 text-hub-muted transition duration-300 hover:-translate-y-0.5 hover:text-hub-gold">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mt-8 overflow-hidden whitespace-nowrap text-center font-poppins text-[18vw] font-extrabold leading-none text-hub-gold opacity-[0.06] md:text-[160px]">
          Big_Hub
        </div>
      </div>
    </footer>
  );
}
