"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, FileSignature, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    gradient: "from-accent/10 via-accent/5 to-transparent",
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
    gradient: "from-teal/8 via-teal/3 to-transparent",
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
    gradient: "from-amber/8 via-amber/3 to-transparent",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -40]);
  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="relative flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — Giant title + description */}
        <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
          <ScrollReveal variant="cinematic" delay={0.1}>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-text-muted font-mono text-[10px] tracking-[0.2em] uppercase">
                0{index + 1}
              </span>
              <span className="bg-accent/20 h-px w-6" />
              <span className="text-teal bg-teal/5 border-teal/10 rounded border px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase">
                {project.status}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="blur" delay={0.2}>
            <h3
              className="font-heading text-text-primary mb-3 leading-[1.05] font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {project.title}
            </h3>
            <p className="text-text-muted mb-6 font-mono text-sm tracking-wide">
              {project.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-text-secondary mb-8 text-base leading-relaxed md:text-lg">
              {project.description}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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

        {/* Right — Visual showcase */}
        <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
          <ScrollReveal variant="scaleUp" delay={0.2}>
            <div
              className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} border-border/30 group flex items-center justify-center overflow-hidden border`}
            >
              <Icon
                size={80}
                strokeWidth={0.8}
                className="text-white/8 transition-all duration-1000 group-hover:scale-110 group-hover:text-white/15"
              />

              {/* Decorative rings */}
              <div className="absolute h-32 w-32 rounded-full border border-white/3 transition-transform duration-[2s] group-hover:scale-[2]" />
              <div className="absolute h-56 w-56 rounded-full border border-white/1.5 transition-transform duration-[2.5s] group-hover:scale-150" />
              <div className="absolute h-80 w-80 rounded-full border border-white/[0.008] transition-transform duration-[3s] group-hover:scale-125" />

              {/* Highlights inside the card */}
              <div className="from-bg-primary/80 absolute right-0 bottom-0 left-0 bg-linear-to-t to-transparent p-6">
                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-text-muted/80 flex items-start gap-2 text-xs"
                    >
                      <span className="text-accent/40 mt-0.5 shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-glow relative">
      {/* Section Header */}
      <div className="mx-auto max-w-4xl px-6 pt-[var(--section-padding)] lg:px-8">
        <ScrollReveal variant="cinematic" className="mb-6">
          <span className="text-accent-light font-mono text-xs tracking-[0.2em] uppercase">
            Portfolio
          </span>
        </ScrollReveal>

        <ScrollReveal variant="blur" delay={0.1} className="mb-4">
          <h2
            className="font-heading text-text-primary leading-[1.1] font-bold tracking-tight"
            style={{ fontSize: "var(--text-section)" }}
          >
            Featured Projects
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="text-text-secondary mb-8 max-w-lg text-sm">
            Production applications built during my role as a Software
            Development Engineer — shipped to real users.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-screen project showcases */}
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </section>
  );
}
