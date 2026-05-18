"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { hero, identity } from "@/data/content";

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % hero.headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* === INTERACTIVE BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow following mouse */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-1000 ease-out"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(59,47,91,0.25) 0%, rgba(92,200,215,0.08) 50%, transparent 70%)",
          }}
        />

        {/* Static ambient orbs */}
        <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-electric-blue/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[25%] left-[10%] w-[400px] h-[400px] bg-muted-purple/10 rounded-full blur-[120px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-30" />

        {/* Horizontal scan line */}
        <motion.div
          className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-desat/20 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* System status label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.8 }}
          className="mb-10 inline-flex items-center gap-3 border border-border/60 bg-matte-black/40 backdrop-blur-md px-5 py-2.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-retro-green rounded-full animate-pulse shadow-[0_0_8px_rgba(90,224,122,0.5)]" />
            <span className="font-mono text-[10px] text-retro-green tracking-[0.2em]">
              ONLINE
            </span>
          </div>
          <div className="w-px h-3 bg-border" />
          <span className="font-pixel text-[11px] text-muted-foreground tracking-[0.15em]">
            {hero.statusLabel}
          </span>
        </motion.div>

        {/* Rotating headlines */}
        <div className="relative h-[120px] md:h-[160px] lg:h-[180px] w-full max-w-5xl mb-4 flex items-center justify-center overflow-hidden">
          {hero.headlines.map((headline, i) => (
            <motion.h1
              key={headline}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{
                opacity: headlineIndex === i ? 1 : 0,
                y: headlineIndex === i ? 0 : -40,
                rotateX: headlineIndex === i ? 0 : 15,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter leading-[1.05]"
            >
              {headline}
            </motion.h1>
          ))}
        </div>

        {/* "Through AI" accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 6.2 }}
          className="mb-8"
        >
          <span className="relative inline-block text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter">
            <span className="absolute -inset-2 bg-cyan-desat/10 blur-2xl" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan-desat to-muted-magenta bg-[length:200%_auto] animate-gradient-shift">
              Through AI
            </span>
          </span>
        </motion.div>

        {/* Subtitle with terminal styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6.5 }}
          className="relative max-w-2xl mb-14"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-desat/60 via-muted-purple/40 to-transparent" />
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg font-mono text-left pl-6 leading-relaxed">
            <span className="text-cyan-desat mr-1">{">"}</span>
            {hero.subtitle}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 6.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-warm-white text-matte-black font-bold font-mono tracking-wider text-sm border-2 border-warm-white hover:border-cyan-desat overflow-hidden interactive"
          >
            <div className="absolute inset-0 bg-cyan-desat translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10 flex items-center gap-2">
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-lg"
              >
                ▸
              </motion.span>
              START EXPERIENCE
            </span>
          </a>
          <a
            href="#lab"
            className="px-8 py-4 border-2 border-border/60 text-warm-white/80 font-bold font-mono tracking-wider text-sm hover:border-cyan-desat/60 hover:text-cyan-desat hover:bg-cyan-desat/5 transition-all duration-300 backdrop-blur-sm interactive"
          >
            ENTER LAB →
          </a>
        </motion.div>
      </div>

      {/* === FLOATING UI ELEMENTS === */}
      {/* Bottom-left: Identity card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 7.2 }}
        className="absolute bottom-8 left-6 hidden lg:flex flex-col gap-1 font-mono text-[10px] text-muted-foreground/50"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-px bg-muted-foreground/30" />
          <span className="font-pixel text-cyan-desat/40 tracking-widest">
            IDENTITY
          </span>
        </div>
        <p>USR: {(identity.name || "USER").toUpperCase()}</p>
        <p>LOC: {identity.locationCode || "UNKNOWN"}</p>
        <p>ROLE: {(identity.role || "DEVELOPER").toUpperCase()}</p>
        <p>STATUS: {identity.status || "UNKNOWN"}</p>
      </motion.div>

      {/* Bottom-right: Audio visualizer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 7.2 }}
        className="absolute bottom-8 right-6 hidden lg:flex items-end gap-[3px]"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
          <motion.div
            key={bar}
            animate={{
              height: ["8px", `${Math.random() * 24 + 8}px`, "8px"],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 0.8 + 0.6,
              ease: "easeInOut",
            }}
            className="w-[2px] bg-cyan-desat/30"
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-pixel text-[9px] text-muted-foreground/40 tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-cyan-desat/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
