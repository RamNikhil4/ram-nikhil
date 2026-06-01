"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-apple section-glow relative">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        {/* Section Header — giant, centered */}
        <ScrollReveal variant="cinematic" className="mb-6 text-center">
          <span className="text-accent-light font-mono text-xs tracking-[0.2em] uppercase">
            Contact
          </span>
        </ScrollReveal>

        <ScrollReveal variant="blur" delay={0.1} className="mb-6 text-center">
          <h2
            className="font-heading text-text-primary leading-[1.1] font-bold tracking-tight"
            style={{ fontSize: "var(--text-section)" }}
          >
            Let&apos;s Work Together
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variant="fadeUp"
          delay={0.2}
          className="mb-16 text-center"
        >
          <p className="text-text-secondary mx-auto max-w-md text-base leading-relaxed">
            Have a project in mind or want to chat? Drop me a message and
            I&apos;ll get back to you.
          </p>
        </ScrollReveal>

        {/* Form — centered, minimal */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-text-muted mb-2 block font-mono text-xs tracking-wider uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border-border/50 text-text-primary placeholder:text-text-muted/30 focus:border-accent/30 focus:ring-accent/20 w-full rounded-xl border bg-white/3 px-5 py-4 text-base transition-all duration-500 focus:ring-1 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-text-muted mb-2 block font-mono text-xs tracking-wider uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border-border/50 text-text-primary placeholder:text-text-muted/30 focus:border-accent/30 focus:ring-accent/20 w-full rounded-xl border bg-white/3 px-5 py-4 text-base transition-all duration-500 focus:ring-1 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-text-muted mb-2 block font-mono text-xs tracking-wider uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="border-border/50 text-text-primary placeholder:text-text-muted/30 focus:border-accent/30 focus:ring-accent/20 w-full resize-none rounded-xl border bg-white/3 px-5 py-4 text-base transition-all duration-500 focus:ring-1 focus:outline-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent-dark text-bg-primary shadow-accent/10 hover:shadow-accent/20 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold shadow-lg transition-all duration-700 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="border-bg-primary/30 border-t-bg-primary h-4 w-4 animate-spin rounded-full border-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        </ScrollReveal>

        {/* Social links — horizontal, minimal */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-4">
            <a
              href="https://github.com/RamNikhil4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary rounded-md p-3 transition-all duration-500 hover:bg-white/3"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ram-nikhil-teja-budide/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary rounded-md p-3 transition-all duration-500 hover:bg-white/3"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:ramnikhil312@gmail.com"
              className="text-text-muted hover:text-text-primary rounded-md p-3 transition-all duration-500 hover:bg-white/3"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Success overlay */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-bg-primary/95 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-6 max-w-sm text-center"
          >
            <CheckCircle2
              size={48}
              className="text-teal mx-auto mb-6"
              strokeWidth={1.5}
            />
            <h3 className="font-heading text-text-primary mb-3 text-2xl font-bold">
              Message Sent
            </h3>
            <p className="text-text-secondary text-sm">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
