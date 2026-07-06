"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SharedDivProps = {
  id?: string;
  role?: string;
  "aria-label"?: string;
};

type StaggerGroupProps = SharedDivProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type StaggerItemProps = SharedDivProps & {
  children: ReactNode;
  className?: string;
};

export function StaggerGroup({
  children,
  className = "",
  delay = 0.08,
  ...props
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", ...props }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
