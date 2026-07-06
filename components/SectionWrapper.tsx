"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`py-20 md:py-[90px] ${className}`}
    >
      <div className={`mx-auto max-w-hub px-6 ${innerClassName}`}>{children}</div>
    </motion.section>
  );
}
