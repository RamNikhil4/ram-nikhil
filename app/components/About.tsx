"use client";

import { MapPin, Zap, GraduationCap } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import TextReveal from "./TextReveal";
import Counter from "./Counter";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Shadcn UI",
  "TanStack",
  "MongoDB",
  "PostgreSQL",
  "WebSockets",
  "Git",
];

const stats = [
  { label: "Years Exp.", value: "1.3+" },
  { label: "Projects Shipped", value: "3" },
  { label: "Tech Stack", value: "12+" },
  { label: "CGPA", value: "7.9" },
];

export default function About() {
  return (
    <section id="about" className="section-apple section-glow relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="cinematic" className="mb-6">
          <span className="text-accent-light font-mono text-xs tracking-[0.2em] uppercase">
            About
          </span>
        </ScrollReveal>

        <ScrollReveal variant="blur" delay={0.1} className="mb-16">
          <h2
            className="font-heading text-text-primary leading-[1.1] font-bold tracking-tight"
            style={{ fontSize: "var(--text-section)" }}
          >
            Get to Know Me
          </h2>
        </ScrollReveal>

        {/* Bio — no glass card, direct on page */}
        <div className="mb-20">
          <TextReveal
            text="I'm a Software Engineer with 1.3+ years of experience building scalable web applications using Node.js, React.js, and Next.js. Proficient in JavaScript and TypeScript with hands-on experience developing responsive UIs and integrating RESTful APIs."
            className="mb-8"
            as="p"
          />
          <TextReveal
            text="Familiar with performance optimization techniques including SSR, lazy loading, caching, and bundle optimization. Experienced in implementing real-time communication using WebSockets. I have strong CS fundamentals and a problem-solving mindset with experience building production-ready full-stack applications."
            as="p"
            offset={["start 0.85", "start 0.3"]}
          />
        </div>

        {/* Info chips — floating on background */}
        <ScrollReveal variant="fadeUp" delay={0.1} className="mb-20">
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <div className="border-border/50 hover:border-accent/20 flex items-center gap-3 rounded-xl border bg-white/2 px-5 py-4 transition-colors duration-700">
              <GraduationCap size={16} className="text-accent-light shrink-0" />
              <div>
                <div className="text-text-muted font-mono text-[10px] tracking-wider uppercase">
                  Education
                </div>
                <div className="text-text-primary text-sm font-medium">
                  B.Tech CSE — RGUKT (2020-24)
                </div>
              </div>
            </div>
            <div className="border-border/50 hover:border-accent/20 flex items-center gap-3 rounded-xl border bg-white/2 px-5 py-4 transition-colors duration-700">
              <MapPin size={16} className="text-teal shrink-0" />
              <div>
                <div className="text-text-muted font-mono text-[10px] tracking-wider uppercase">
                  Location
                </div>
                <div className="text-text-primary text-sm font-medium">
                  Andhra Pradesh, India
                </div>
              </div>
            </div>
            <div className="border-border/50 hover:border-accent/20 flex items-center gap-3 rounded-xl border bg-white/2 px-5 py-4 transition-colors duration-700">
              <Zap size={16} className="text-amber shrink-0" />
              <div>
                <div className="text-text-muted font-mono text-[10px] tracking-wider uppercase">
                  Status
                </div>
                <div className="text-teal flex items-center gap-1.5 text-sm font-medium">
                  <span className="bg-teal h-1.5 w-1.5 animate-pulse rounded-full" />
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal variant="fadeUp" delay={0.1} className="mb-16">
          <h3 className="font-heading text-text-muted mb-6 flex items-center gap-3 text-sm font-semibold tracking-wide uppercase">
            <span className="bg-accent/30 h-px w-8" />
            Tech Stack
          </h3>
          <StaggerContainer
            className="flex flex-wrap gap-3"
            staggerDelay={0.05}
          >
            {skills.map((skill) => (
              <StaggerItem key={skill} variant="scaleUp">
                <span className="border-border/50 text-text-secondary hover:text-text-primary hover:border-accent/20 inline-block cursor-default rounded-md border bg-white/3 px-3.5 py-2 text-sm font-medium transition-all duration-500">
                  {skill}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Stats — oversized numbers */}
        <StaggerContainer
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
          staggerDelay={0.1}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} variant="fadeUp">
              <div className="py-6 text-center">
                <div className="font-heading text-accent-light mb-2 text-4xl font-bold md:text-5xl">
                  <Counter value={stat.value} />
                </div>
                <div className="text-text-muted font-mono text-[10px] tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
