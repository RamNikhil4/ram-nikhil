"use client";

import { motion, type Variant } from "framer-motion";
import { type ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp" | "blur";

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-60px" }}
      variants={{
        hidden: variants[variant].hidden,
        visible: variants[variant].visible,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for children animations
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-60px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
}) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
