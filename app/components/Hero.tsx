"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Scroll-linked parallax for avatar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(251, 191, 36, 0.12), transparent 80%)`;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] md:min-h-[115vh] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background effects — subtle */}
      <div className="hero-mesh absolute inset-0 opacity-30" />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
        style={{ background: spotlightBackground }}
      />
      <div className="bg-accent/3 absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

      {/* Sticky content container */}
      <div className="sticky top-0 flex h-[100dvh] md:h-screen flex-col items-center justify-center px-6">
        {/* Avatar — cinematic, scroll-linked */}
        <motion.div
          style={{ scale: avatarScale, opacity: avatarOpacity, y: avatarY }}
          className="mb-10 md:mb-12"
        >
          <div className="relative">
            {/* Subtle glow ring */}
            <div className="from-accent/15 to-teal/8 absolute inset-0 scale-125 rounded-full bg-linear-to-br via-transparent blur-xl" />

            {/* Avatar */}
            <div className="border-accent/15 shadow-accent/5 relative h-36 w-36 overflow-hidden rounded-full border shadow-2xl md:h-48 md:w-48">
              <Image
                src="/ram.png"
                alt="Ram Nikhil Teja"
                fill
                sizes="(max-width: 768px) 144px, 192px"
                className="avatar-photo"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text content — centered, massive */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-4xl text-center"
        >
          {/* Status Badge — very subtle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-border text-text-muted mb-8 inline-flex items-center gap-2 rounded-full border bg-white/3 px-3.5 py-1 text-xs font-medium md:mb-10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-teal absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
              <span className="bg-teal relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            Available for Work
          </motion.div>

          {/* Giant Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="font-heading leading-none font-bold tracking-tight"
            style={{ fontSize: "var(--text-hero)" }}
          >
            Hi, I&apos;m <span className="gradient-text">Ram Nikhil</span>
          </motion.h1>

          {/* Subtitle — large, muted */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-text-secondary mx-auto mt-6 max-w-xl leading-relaxed md:mt-8"
            style={{ fontSize: "var(--text-large)" }}
          >
            A frontend developer crafting{" "}
            <span className="text-accent-light/90">high-performance</span> web
            experiences with React, TypeScript, and modern UI architecture.
          </motion.p>

          {/* Single CTA — Apple-style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 md:mt-12"
          >
            <a
              href="#projects"
              className="bg-accent hover:bg-accent-dark text-bg-primary shadow-accent/15 hover:shadow-accent/25 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium shadow-lg transition-all duration-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              View My Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — minimal */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="text-text-muted/50 absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <ChevronDown
            size={16}
            className="animate-bounce"
            style={{ animationDuration: "2s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
