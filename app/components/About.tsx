"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { MapPin, Zap, GraduationCap } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const skills = [
  { name: "React.js", color: "text-accent-light border-accent/30 bg-accent/5" },
  { name: "Next.js", color: "text-text-primary border-white/20 bg-white/5" },
  {
    name: "TypeScript",
    color: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  },
  { name: "Node.js", color: "text-teal border-teal/30 bg-teal/5" },
  { name: "Express.js", color: "text-teal border-teal/25 bg-teal/5" },
  {
    name: "Tailwind CSS",
    color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  },
  { name: "Shadcn UI", color: "text-text-primary border-white/15 bg-white/5" },
  { name: "TanStack", color: "text-amber border-amber/30 bg-amber/5" },
  { name: "MongoDB", color: "text-teal border-teal/30 bg-teal/5" },
  {
    name: "PostgreSQL",
    color: "text-blue-300 border-blue-300/30 bg-blue-300/5",
  },
  {
    name: "WebSockets",
    color: "text-accent-light border-accent/25 bg-accent/5",
  },
  { name: "Git", color: "text-rose border-rose/30 bg-rose/5" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <span className="text-accent-light text-sm font-mono tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-text-primary">
            Get to Know Me
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Bio Card */}
          <ScrollReveal
            variant="fadeLeft"
            delay={0.1}
            className="lg:col-span-3 glass rounded-2xl p-8 md:p-10 relative group hover:border-accent/30 transition-colors duration-500"
          >
            {/* Subtle corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-accent/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-teal/20 rounded-br-2xl" />

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p className="text-lg">
                I&apos;m a{" "}
                <span className="text-accent-light font-medium">
                  Software Engineer
                </span>{" "}
                with 1.3+ years of experience building scalable web applications
                using{" "}
                <span className="text-text-primary font-medium">
                  Node.js, React.js, and Next.js
                </span>
                . Proficient in JavaScript and TypeScript with hands-on
                experience developing{" "}
                <span className="text-teal font-medium">responsive UIs</span>{" "}
                and integrating RESTful APIs.
              </p>
              <p>
                Familiar with performance optimization techniques including SSR,
                lazy loading, caching, and bundle optimization. Experienced in
                implementing real-time communication using WebSockets. I have
                strong CS fundamentals and a problem-solving mindset with
                experience building production-ready full-stack applications.
              </p>
            </div>

            {/* Info chips */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-border">
                <GraduationCap size={16} className="text-accent-light" />
                <div>
                  <div className="text-xs text-text-muted">Education</div>
                  <div className="text-sm text-text-primary font-medium">
                    B.Tech CSE — RGUKT (2020-24)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-border">
                <MapPin size={16} className="text-teal" />
                <div>
                  <div className="text-xs text-text-muted">Location</div>
                  <div className="text-sm text-text-primary font-medium">
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-border">
                <Zap size={16} className="text-amber" />
                <div>
                  <div className="text-xs text-text-muted">Status</div>
                  <div className="text-sm text-teal font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
                    Open to Work
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal
            variant="fadeRight"
            delay={0.2}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-accent rounded-full" />
              Tech Stack
            </h3>

            <StaggerContainer
              className="flex flex-wrap gap-2.5"
              staggerDelay={0.05}
            >
              {skills.map((skill) => (
                <StaggerItem key={skill.name} variant="scaleUp">
                  <span
                    className={`inline-block px-4 py-2 rounded-lg border font-medium text-sm transition-all duration-200 hover:scale-105 cursor-default ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quick stats */}
            <StaggerContainer
              className="mt-8 grid grid-cols-2 gap-3"
              staggerDelay={0.08}
            >
              {[
                { label: "Years Exp.", value: "1.3+" },
                { label: "Projects Shipped", value: "3" },
                { label: "Tech Stack", value: "12+" },
                { label: "CGPA", value: "7.9" },
              ].map((stat) => (
                <StaggerItem key={stat.label} variant="fadeUp">
                  <div className="glass rounded-xl p-4 text-center hover:border-accent/30 transition-colors group">
                    <div className="font-heading text-2xl font-bold text-accent-light group-hover:text-accent transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted mt-1 font-mono tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
