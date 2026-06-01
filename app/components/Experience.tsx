"use client";

import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const experiences = [
  {
    role: "Software Development Engineer",
    company: "Orotron",
    period: "Nov 2024 — Jan 2026",
    description:
      "Developed and maintained scalable SaaS applications using React.js, Next.js, and TypeScript — delivering responsive and high-performance user interfaces for legal tech and CRM platforms.",
    highlights: [
      "Designed reusable, modular component systems improving development efficiency across multiple modules.",
      "Integrated frontend with Node.js/Express RESTful APIs using TanStack Query with caching strategies.",
      "Implemented SSR and dynamic routing using Next.js, improving application performance and SEO.",
      "Improved app load performance by 30% through lazy loading, memoization, and bundle optimization.",
      "Implemented real-time updates using WebSocket-based communication for live data sync.",
      "Collaborated with backend engineers and product teams to design API contracts and deliver features.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "TanStack",
      "WebSockets",
      "Tanstack Table",
      "Tanstack Query",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-apple section-glow relative">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="cinematic" className="mb-6">
          <span className="text-accent-light font-mono text-xs tracking-[0.2em] uppercase">
            Career
          </span>
        </ScrollReveal>

        <ScrollReveal variant="blur" delay={0.1} className="mb-20">
          <h2
            className="font-heading text-text-primary leading-[1.1] font-bold tracking-tight"
            style={{ fontSize: "var(--text-section)" }}
          >
            Work Experience
          </h2>
        </ScrollReveal>

        {/* Experience Items — no cards, direct on page */}
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Accent line */}
              <div className="from-accent/30 via-accent/10 absolute top-0 bottom-0 left-0 w-px bg-linear-to-b to-transparent" />

              <div className="pl-8 md:pl-12">
                {/* Role title — giant */}
                <ScrollReveal variant="cinematic" delay={0.1}>
                  <h3 className="font-heading text-text-primary mb-2 text-2xl leading-tight font-bold md:text-3xl">
                    {exp.role}
                  </h3>
                </ScrollReveal>

                {/* Company & period */}
                <ScrollReveal variant="fadeUp" delay={0.2}>
                  <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex items-center gap-2">
                      <Briefcase size={13} className="text-teal" />
                      <span className="text-teal text-sm font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-text-muted flex items-center gap-1.5 font-mono text-xs">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal variant="fadeUp" delay={0.3}>
                  <p className="text-text-secondary mb-8 text-base leading-relaxed md:text-lg">
                    {exp.description}
                  </p>
                </ScrollReveal>

                {/* Highlights — staggered */}
                <StaggerContainer
                  className="mb-8 space-y-3"
                  staggerDelay={0.08}
                >
                  {exp.highlights.map((h, j) => (
                    <StaggerItem key={j} variant="fadeUp">
                      <div className="text-text-secondary flex items-start gap-3 text-sm">
                        <ChevronRight
                          size={13}
                          className="text-accent/60 mt-1 shrink-0"
                        />
                        <span>{h}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Tags — minimal */}
                <ScrollReveal variant="fadeUp" delay={0.5}>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-text-muted border-border/50 rounded-md border bg-white/3 px-3 py-1.5 font-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
