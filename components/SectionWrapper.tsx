"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function SectionWrapper({
  children,
  className = "",
  innerClassName = "",
  id
}: SectionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 md:py-[90px] ${className}`}
    >
      <div className={`mx-auto max-w-hub px-6 ${innerClassName}`}>{children}</div>
    </motion.section>
  );
}
