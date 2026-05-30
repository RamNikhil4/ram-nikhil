"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Mail,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Mock submission delay (same UX as original)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();

      setTimeout(() => setSubmitted(false), 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 section-glow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <span className="text-accent-light text-sm font-mono tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-text-primary">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto">
            Have a project in mind or want to chat? Drop me a message and
            I&apos;ll get back to you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <ScrollReveal variant="fadeLeft" delay={0.1} className="lg:col-span-3">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-5 sm:p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-muted mb-2 tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-muted mb-2 tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-muted mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
 
          {/* Sidebar */}
          <ScrollReveal variant="fadeRight" delay={0.2} className="lg:col-span-2 flex flex-col gap-4">
            {/* Connect card */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-heading text-lg font-bold text-text-primary flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-accent rounded-full" />
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/RamNikhil4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-primary/50 border border-border flex items-center justify-center text-text-muted group-hover:text-accent-light transition-colors">
                    <GitHubIcon size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                      GITHUB
                    </div>
                    <div className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                      @ramnikhil
                    </div>
                  </div>
                </a>
 
                <a
                  href="https://www.linkedin.com/in/ram-nikhil-teja-budide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-primary/50 border border-border flex items-center justify-center text-text-muted group-hover:text-accent-light transition-colors">
                    <LinkedInIcon size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                      LINKEDIN
                    </div>
                    <div className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                      ramnikhil-dev
                    </div>
                  </div>
                </a>
 
                <a
                  href="mailto:ramnikhil312@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-primary/50 border border-border flex items-center justify-center text-text-muted group-hover:text-accent-light transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                      EMAIL
                    </div>
                    <div className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                      hello@ramnikhil.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
 
            {/* Quote Card */}
            <div className="glass rounded-2xl p-6 text-left border border-border">
              <p className="text-accent italic font-medium mb-3 leading-relaxed text-sm">
                &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
              </p>
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                &mdash; Steve Jobs
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Success overlay */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-2xl p-10 text-center max-w-sm mx-4"
          >
            <CheckCircle2
              size={48}
              className="text-teal mx-auto mb-4"
            />
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
              Message Sent!
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
