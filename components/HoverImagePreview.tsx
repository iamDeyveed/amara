"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

type HoverImagePreviewProps = {
  src: string;
  alt: string;
  title: string;
  meta?: string;
  children: ReactNode;
};

export function HoverImagePreview({ src, alt, title, meta, children }: HoverImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[260] hidden items-center justify-center bg-hub-background/92 px-6 py-10 backdrop-blur-sm md:flex"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <motion.div
              className="relative h-[82vh] w-[min(92vw,1280px)] overflow-hidden rounded-[18px] border border-hub-gold/35 bg-hub-card shadow-[0_40px_120px_rgba(0,0,0,0.72)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={src} alt={alt} fill sizes="92vw" className="object-contain" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-hub-background via-hub-background/68 to-transparent px-7 pb-6 pt-20">
                <p className="font-poppins text-2xl font-extrabold text-hub-gold">{title}</p>
                {meta ? <p className="mt-1 text-sm text-hub-muted">{meta}</p> : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
