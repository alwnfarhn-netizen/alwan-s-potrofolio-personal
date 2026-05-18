"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { identity } from "@/data/content";

const navLinks = [
  { name: "ABOUT", code: "01", href: "#about" },
  { name: "SKILLS", code: "02", href: "#skills" },
  { name: "LAB", code: "03", href: "#lab" },
  { name: "PROJECTS", code: "04", href: "#projects" },
  { name: "SERVICES", code: "05", href: "#services" },
  { name: "INSIGHTS", code: "06", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Live clock
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 5.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
          scrolled
            ? "bg-matte-black/85 backdrop-blur-xl border-b border-border/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group interactive">
            <div className="relative w-8 h-8 border border-cyan-desat/40 flex items-center justify-center bg-matte-black/50 group-hover:border-cyan-desat group-hover:shadow-[0_0_12px_rgba(92,200,215,0.3)] transition-all duration-300">
              <span className="font-pixel text-cyan-desat text-sm">
                {(identity.name || "A").charAt(0).toUpperCase()}
              </span>
              <div className="absolute -top-px -right-px w-2 h-2 border-t border-r border-cyan-desat/60" />
              <div className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-cyan-desat/60" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-[0.15em] text-warm-white group-hover:text-cyan-desat transition-colors">
                {(identity.name || "USER").toUpperCase()}.SYS
              </span>
              <span className="text-[9px] font-mono text-muted-foreground tracking-widest">
                {identity.tagline || "PORTFOLIO"}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-xs font-mono text-muted-foreground hover:text-cyan-desat transition-colors group interactive"
              >
                <span className="text-cyan-desat/40 mr-1">{link.code}.</span>
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-cyan-desat transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right side: clock + CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* System clock */}
            <span className="hidden md:block font-pixel text-[10px] text-muted-foreground/50 tracking-widest tabular-nums">
              {time}
            </span>

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 border border-cyan-desat/30 text-xs font-mono text-cyan-desat hover:bg-cyan-desat/10 hover:border-cyan-desat/60 transition-all duration-300 interactive"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-retro-green animate-pulse" />
              CONTACT
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 interactive"
              aria-label="Toggle navigation"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-warm-white block origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-4 h-px bg-warm-white block ml-auto"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-warm-white block origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-matte-black/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold tracking-wider text-warm-white hover:text-cyan-desat transition-colors interactive"
                >
                  <span className="text-cyan-desat/40 font-mono text-sm mr-3">
                    {link.code}
                  </span>
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="mt-8 px-8 py-3 border border-cyan-desat text-cyan-desat font-mono text-sm hover:bg-cyan-desat hover:text-matte-black transition-all interactive"
              >
                INITIALIZE_CONTACT
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
