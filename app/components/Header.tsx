"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 200) {
          current = el.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${
          isScrolled
            ? "bg-bg-primary/70 shadow-[0_1px_0_0_rgba(124,58,237,0.12),0_4px_20px_rgba(0,0,0,0.3)]"
            : "bg-bg-primary/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-xl md:text-2xl font-bold tracking-tight text-text-primary hover:text-accent-light transition-colors group flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              R
            </span>
            <span className="hidden sm:inline">
              Ram<span className="text-accent-light">Nikhil</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-light bg-accent/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            <div className="ml-3 flex items-center gap-2">
              <a
                href="https://github.com/RamNikhil4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-nikhil-teja-budide/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="/Ram_Nikhil_Resume.pdf"
                target="_blank"
                className="ml-1 px-4 py-2 text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-lg transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
            id="mobile-menu-toggle"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-bg-primary/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-text-secondary hover:text-text-primary rounded-lg"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-heading text-3xl font-bold text-text-primary hover:text-accent-light transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 mt-4"
              >
                <a
                  href="https://github.com/RamNikhil4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg text-text-secondary hover:text-accent-light hover:border-accent/40 transition-all"
                >
                  <GitHubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ram-nikhil-teja-budide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg text-text-secondary hover:text-accent-light hover:border-accent/40 transition-all"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a
                  href="/Ram_Nikhil_Resume.pdf"
                  target="_blank"
                  className="p-3 border border-border rounded-lg text-text-secondary hover:text-accent-light hover:border-accent/40 transition-all flex items-center gap-2"
                >
                  <FileText size={20} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
