"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about, identity } from "@/data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex items-center border-t border-border/30"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-muted-purple/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-desat/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 flex items-end gap-4 border-b border-border/30 pb-6"
        >
          <motion.span
            variants={itemVariants}
            className="text-cyan-desat font-mono text-sm"
          >
            01.
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold tracking-tighter uppercase"
          >
            Character Profile
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="hidden md:block flex-1 h-px bg-gradient-to-r from-border/50 to-transparent"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14"
        >
          {/* Portrait Panel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 relative"
          >
            <div className="aspect-[3/4] relative border border-border/60 bg-navy-crt/30 overflow-hidden group">
              {/* Placeholder gradient portrait */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-crt via-muted-purple/20 to-matte-black" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(92,200,215,0.1)_0%,transparent_60%)]" />

              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none opacity-40" />

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-cyan-desat/20 rotate-45 flex items-center justify-center group-hover:border-cyan-desat/40 group-hover:shadow-[0_0_30px_rgba(92,200,215,0.1)] transition-all duration-700">
                  <span className="font-pixel text-3xl text-cyan-desat/40 -rotate-45 group-hover:text-cyan-desat/70 transition-colors duration-700">
                    A
                  </span>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-matte-black via-matte-black/80 to-transparent">
                <p className="font-mono text-[10px] text-cyan-desat/70 mb-1 tracking-widest">
                  ID: {about.characterId}
                </p>
                <h3 className="font-bold text-xl uppercase tracking-[0.2em]">
                  {identity.name || "USER"}
                </h3>
                <p className="font-mono text-[10px] text-muted-foreground mt-1">
                  {about.characterTitle}
                </p>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-cyan-desat/30" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-cyan-desat/30" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-cyan-desat/30" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-cyan-desat/30" />

              {/* Hover glow line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-desat/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Metrics below portrait */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              {about.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-3 border border-border/30 bg-matte-black/50 text-center"
                >
                  <p className={`font-bold text-lg ${m.color}`}>{m.value}</p>
                  <p className="font-pixel text-[9px] text-muted-foreground tracking-wider">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* System Stats Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {about.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 border backdrop-blur-sm relative overflow-hidden group transition-all duration-300 ${
                    stat.active
                      ? "border-cyan-desat/50 bg-cyan-desat/5 box-glow"
                      : "border-border/40 bg-matte-black/60 hover:border-muted-purple/50 hover:bg-muted-purple/5"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-desat/40 text-sm">{stat.icon}</span>
                    <p className="font-pixel text-[10px] text-muted-foreground tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                  <p
                    className={`font-mono font-bold text-sm ${
                      stat.active ? "text-warm-white" : "text-warm-white/80"
                    }`}
                  >
                    {stat.value}
                    {stat.active && (
                      <span className="inline-block w-2 h-2 bg-retro-green rounded-full ml-2 animate-pulse shadow-[0_0_6px_rgba(90,224,122,0.5)]" />
                    )}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-desat to-muted-purple w-0 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </motion.div>

            {/* Terminal Bio */}
            <motion.div
              variants={itemVariants}
              className="flex-1 border border-border/40 bg-navy-crt/20 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Window chrome */}
              <div className="w-full h-9 bg-matte-black/80 flex items-center px-4 border-b border-border/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning-red/70" />
                  <div className="w-3 h-3 rounded-full bg-soft-amber/70" />
                  <div className="w-3 h-3 rounded-full bg-retro-green/70" />
                </div>
                <span className="ml-4 font-pixel text-[10px] text-muted-foreground tracking-widest">
                  profile.sys
                </span>
                <div className="ml-auto flex items-center gap-2 text-[9px] font-mono text-muted-foreground/40">
                  <span>PID:1024</span>
                  <span>|</span>
                  <span>MEM:128MB</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 md:p-8 flex flex-col gap-6 font-mono text-sm leading-relaxed text-warm-white/80">
                {about.bio.map((paragraph, idx) => (
                  <div key={idx}>
                    <p className="text-muted-purple font-pixel text-[10px] tracking-widest mb-3">
                      /// {idx === 0 ? 'SYSTEM_BIO' : 'PHILOSOPHY'}
                    </p>
                    <p>
                      <span className="text-cyan-desat mr-2">{">"}</span>
                      {paragraph}
                    </p>
                  </div>
                ))}
                <div className="border-l-2 border-muted-purple/40 pl-5 py-2">
                  <p className="text-muted-purple font-pixel text-[10px] tracking-widest mb-3">
                    /// MISSION_STATEMENT
                  </p>
                  <p className="italic text-warm-white/60">
                    &ldquo;{about.missionStatement}&rdquo;
                  </p>
                </div>
              </div>

              {/* Ambient glow */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(92,200,215,0.03)_0%,transparent_50%)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
