"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);
  const springX = useSpring(x, { stiffness: 520, damping: 34, mass: 0.22 });
  const springY = useSpring(y, { stiffness: 520, damping: 34, mass: 0.22 });

  useEffect(() => {
    if (reduceMotion) {
      setEnabled(false);
      return;
    }

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncEnabled = () => setEnabled(media.matches);
    syncEnabled();
    media.addEventListener("change", syncEnabled);

    return () => media.removeEventListener("change", syncEnabled);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 4);
      y.set(event.clientY - 4);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1200] hidden h-2 w-2 rounded-full bg-hub-goldLight shadow-[0_0_18px_rgba(238,197,101,0.65)] md:block"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 0.95 : 0 }}
      transition={{ duration: 0.18 }}
    />
  );
}
