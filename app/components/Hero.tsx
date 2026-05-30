"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { GitHubIcon } from "./Icons";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, var(--color-accent-glow), transparent 80%)`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-mesh opacity-50" />
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{ background: spotlightBackground }}
      />
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal/3 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/6 w-[300px] h-[300px] bg-rose/2 rounded-full blur-[100px]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-2 h-2 bg-accent rounded-full animate-float opacity-40" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-teal rounded-full animate-float opacity-30 [animation-delay:2s]" />
      <div className="absolute bottom-40 left-[25%] w-1 h-1 bg-rose rounded-full animate-float opacity-20 [animation-delay:4s]" />
      <div className="absolute top-60 right-[10%] w-1 h-1 bg-amber rounded-full animate-float opacity-25 [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Status Badge */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              Available for Work
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal variant="blur" delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Ram Nikhil</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal variant="fadeUp" delay={0.35}>
            <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
              A frontend developer crafting{" "}
              <span className="text-accent-light font-medium">high-performance</span> web experiences with React, TypeScript, and modern UI architecture.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal variant="fadeUp" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Sparkles size={16} />
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-text-primary font-semibold rounded-xl border border-border hover:border-accent/40 transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/RamNikhil4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-text-primary font-semibold rounded-xl border border-border hover:border-accent/40 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Avatar Visual */}
        <ScrollReveal variant="scaleUp" delay={0.25} className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-teal/15 to-rose/10 blur-2xl scale-110 animate-pulse-glow" />

            {/* Spinning orbit */}
            <div className="absolute inset-[-8px] sm:inset-[-16px] border border-accent/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-[-16px] sm:inset-[-32px] border border-teal/5 rounded-full animate-spin-slow [animation-direction:reverse] [animation-duration:30s]" />

            {/* Orbit dots */}
            <div className="absolute inset-[-8px] sm:inset-[-16px] animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
            </div>
            <div className="absolute inset-[-16px] sm:inset-[-32px] animate-spin-slow [animation-direction:reverse] [animation-duration:30s]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-teal rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            </div>

            {/* Avatar */}
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl">
              <Image
                src="/ram.png"
                alt="Ram Nikhil Teja"
                fill
                className="avatar-photo"
                priority
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted hover:text-accent-light transition-colors cursor-pointer group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
