"use client";

import {
  Scale,
  FileSignature,
  Users,
} from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const projects = [
  {
    title: "NyayaTech",
    subtitle: "Legal Case Management Platform",
    description:
      "A legal case management dashboard supporting multiple user roles with reusable, modular React components. Features SSR and dynamic routing for fast load speeds and SEO.",
    highlights: [
      "Multi-role dashboard with reusable component architecture",
      "Server-Side Rendering (SSR) & dynamic routing via Next.js",
      "Integrated REST APIs with optimized async data fetching",
      "Scalable component design for rapid feature development",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "SSR"],
    icon: Scale,
    status: "Production",
    statusColor: "bg-teal text-bg-primary",
    gradient: "from-accent/25 via-accent/12 to-teal/10",
    accentBorder: "hover:border-accent/40",
  },
  {
    title: "eSigns",
    subtitle: "Digital E-Signature Platform",
    description:
      "Secure document workflow platform for uploading, annotating, and signing digital documents. Features undo/redo, offline capability via IndexedDB, and cross-device responsive design.",
    highlights: [
      "Document upload, annotation & digital signing workflow",
      "Undo/redo via structured state management",
      "IndexedDB for offline client-side document storage",
      "Fully responsive & accessible cross-device UI",
    ],
    tags: ["React.js", "IndexedDB", "Tailwind", "State Mgmt"],
    icon: FileSignature,
    status: "Production",
    statusColor: "bg-teal text-bg-primary",
    gradient: "from-teal/20 via-teal/8 to-accent/10",
    accentBorder: "hover:border-teal/40",
  },
  {
    title: "LandCare CRM",
    subtitle: "Community CRM Platform",
    description:
      "Full-stack CRM for community data management with interactive tools including a drag-and-drop form builder and Kanban workflow board.",
    highlights: [
      "CRM modules with Next.js frontend & Node.js REST APIs",
      "Drag-and-drop form builder & Kanban workflow board",
      "TanStack Query caching for optimized data fetching",
      "Modular UI architecture for scalable feature expansion",
    ],
    tags: ["Next.js", "Node.js", "MongoDB", "TanStack"],
    icon: Users,
    status: "Production",
    statusColor: "bg-teal text-bg-primary",
    gradient: "from-amber/15 via-amber/8 to-rose/10",
    accentBorder: "hover:border-amber/40",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <span className="text-accent-light text-sm font-mono tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-text-primary">
            Featured Projects
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm">
            Production applications built during my role as a Software
            Development Engineer — shipped to real users.
          </p>
        </ScrollReveal>

        {/* Project Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.title} variant="fadeUp">
                <div
                  className={`glass rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 ${project.accentBorder} flex flex-col h-full hover:-translate-y-1`}
                >
                  {/* Card header with gradient */}
                  <div
                    className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <Icon
                      size={48}
                      strokeWidth={1.2}
                      className="text-white/15 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500"
                    />
                    {/* Decorative rings */}
                    <div className="absolute w-28 h-28 border border-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute w-48 h-48 border border-white/[0.02] rounded-full group-hover:scale-125 transition-transform duration-1000" />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-bold rounded-md ${project.statusColor}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Company product badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-medium tracking-wider uppercase text-text-muted bg-bg-primary/60 backdrop-blur-sm border border-border rounded-md">
                        Company Product
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-accent-light transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-muted font-mono mt-0.5 tracking-wide">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5 flex-1">
                      {project.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-text-muted"
                        >
                          <span className="text-accent-light mt-0.5 shrink-0">
                            ›
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-text-muted bg-white/5 border border-border rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
