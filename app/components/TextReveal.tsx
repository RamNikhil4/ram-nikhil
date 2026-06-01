"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, UseScrollOptions } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  offset?: UseScrollOptions["offset"];
}

/**
 * Apple-style text reveal — each word transitions from
 * dim/blurred to bright/sharp as you scroll past it.
 */
export default function TextReveal({
  text,
  className = "",
  as: Tag = "p",
  offset = ["start 0.9", "start 0.25"],
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Tag className="flex flex-wrap leading-relaxed">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </Tag>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative mt-[0.1em] mr-[0.3em]">
      {/* Shadow text for layout stability */}
      <span className="opacity-0 select-none" aria-hidden>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {children}
      </motion.span>
    </span>
  );
}
