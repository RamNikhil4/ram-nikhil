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
    <section id="experience" className="relative py-24 md:py-32 section-glow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <span className="text-accent-light text-sm font-mono tracking-widest uppercase">
            Career
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-text-primary">
            Work Experience
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {experiences.map((exp, i) => (
              <StaggerItem key={i} variant="fadeLeft">
                <div className="relative pl-12 md:pl-20 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-2 z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                        exp.current
                          ? "bg-accent border-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                          : "bg-bg-secondary border-accent/50 group-hover:border-accent group-hover:bg-accent/30"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/5">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-light transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={14} className="text-teal" />
                          <span className="text-teal font-medium text-sm">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted text-sm font-mono">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <ChevronRight
                            size={14}
                            className="text-accent-light mt-0.5 shrink-0"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
