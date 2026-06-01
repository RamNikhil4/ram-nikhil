"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
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
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up (Apple pattern)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
    setIsScrolled(latest > 40);
  });

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
          isScrolled
            ? "bg-bg-primary/60 shadow-[0_1px_0_0_rgba(251,191,36,0.06)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo — clean text only */}
          <a
            href="#"
            className="font-heading gradient-text-warm hover:opacity-80 text-xl font-bold tracking-tight transition-opacity duration-300 md:text-2xl"
          >
            RamNikhil
          </a>

          {/* Desktop Nav — minimal */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-4 py-2 text-sm font-medium tracking-wide transition-all duration-500 ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-light"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="bg-accent absolute bottom-0 left-1/2 h-px w-3 -translate-x-1/2 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            <div className="ml-4 flex items-center gap-1">
              <a
                href="https://github.com/RamNikhil4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary rounded-md p-2 transition-all duration-500"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-nikhil-teja-budide/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary rounded-md p-2 transition-all duration-500"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-text-primary border-border hover:border-accent/30 ml-2 flex items-center gap-2 rounded-md border bg-white/5 px-4 py-2 text-sm font-medium transition-all duration-500 hover:bg-white/10"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-text-muted hover:text-text-primary rounded-md p-2 transition-colors md:hidden"
            id="mobile-menu-toggle"
            aria-label="Open menu"
          >
            <Menu size={20} />
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
            transition={{ duration: 0.3 }}
            className="bg-bg-primary/97 fixed inset-0 z-60 flex flex-col backdrop-blur-2xl"
          >
            <div className="flex justify-end p-5">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-text-muted hover:text-text-primary rounded-md p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="font-heading text-text-primary hover:text-accent-light text-3xl font-bold transition-colors duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 flex gap-4"
              >
                <a
                  href="https://github.com/RamNikhil4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border text-text-muted hover:text-accent-light hover:border-accent/30 rounded-md border p-3 transition-all duration-500"
                >
                  <GitHubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ram-nikhil-teja-budide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border text-text-muted hover:text-accent-light hover:border-accent/30 rounded-md border p-3 transition-all duration-500"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="border-border text-text-muted hover:text-accent-light hover:border-accent/30 flex items-center gap-2 rounded-md border p-3 transition-all duration-500"
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
