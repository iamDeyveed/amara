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

export function HoverImagePreview({ src, alt, children }: HoverImagePreviewProps) {
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
            className="pointer-events-none fixed inset-0 z-[260] hidden items-center justify-center bg-hub-background/88 backdrop-blur-[2px] md:flex"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <motion.div
              className="relative h-[88vh] w-[min(94vw,1320px)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="94vw"
                className="object-contain drop-shadow-[0_36px_90px_rgba(0,0,0,0.72)]"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
