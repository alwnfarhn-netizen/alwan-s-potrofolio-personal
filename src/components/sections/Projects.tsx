"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects } from "@/data/content";

const statusColors: Record<string, string> = {
  DEPLOYED: "text-retro-green",
  ACTIVE: "text-cyan-desat",
  ONGOING: "text-soft-amber",
  BETA: "text-muted-magenta",
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex flex-col border-t border-border/30"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col h-full z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end gap-4 border-b border-border/30 pb-6"
        >
          <span className="text-cyan-desat font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            Simulations & Projects
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1">
          {/* Level Selector Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[320px] shrink-0 flex flex-col gap-2"
          >
            <p className="font-mono text-[10px] text-muted-foreground mb-3 tracking-widest">
              {">"} SELECT_LEVEL_TO_LOAD
            </p>
            {projects.map((p, i) => {
              const isActive = activeProject.id === p.id;
              return (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  onClick={() => setActiveProject(p)}
                  className={`text-left p-4 border transition-all duration-300 group interactive relative overflow-hidden ${
                    isActive
                      ? "border-cyan-desat/50 bg-cyan-desat/5"
                      : "border-border/30 hover:border-border/60 hover:bg-matte-black/80"
                  }`}
                >
                  {/* Hover sweep */}
                  <div
                    className={`absolute inset-0 transition-transform duration-500 ${
                      isActive
                        ? "translate-x-0 bg-cyan-desat/5"
                        : "translate-x-[-101%] bg-muted-purple/5 group-hover:translate-x-0"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`font-pixel text-[10px] tracking-widest ${
                          isActive ? "text-cyan-desat" : "text-muted-foreground/50"
                        }`}
                      >
                        {p.level}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-pixel text-[9px] ${statusColors[p.status] || "text-muted-foreground"}`}
                        >
                          {p.status}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 bg-cyan-desat rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                    <h3
                      className={`font-bold text-base uppercase tracking-wider transition-colors ${
                        isActive ? "text-warm-white" : "text-warm-white/60"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground/50 mt-0.5">
                      {p.type}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Project Detail Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex-1 border border-border/40 bg-navy-crt/20 relative overflow-hidden flex flex-col backdrop-blur-sm"
          >
            {/* Window chrome */}
            <div className="w-full h-9 bg-matte-black/80 border-b border-border/30 flex items-center px-4 justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-pixel text-[10px] text-muted-foreground tracking-widest">
                  project_viewer.exe
                </span>
              </div>
              <span
                className={`font-pixel text-[9px] ${
                  statusColors[activeProject.status]
                }`}
              >
                STATUS: {activeProject.status}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  {/* Header */}
                  <div>
                    <span className="text-cyan-desat font-mono text-xs mb-2 block">
                      {">"} {activeProject.type}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
                      {activeProject.title}
                    </h3>
                  </div>

                  {/* Project visual placeholder */}
                  <div className="relative w-full aspect-video border border-border/30 overflow-hidden group bg-navy-crt/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-crt via-muted-purple/10 to-matte-black" />
                    <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 border border-border/40 rotate-45 mx-auto mb-4 flex items-center justify-center group-hover:border-cyan-desat/40 transition-colors duration-500">
                          <span className="font-pixel text-2xl text-muted-foreground/30 -rotate-45 group-hover:text-cyan-desat/60 transition-colors duration-500">
                            {activeProject.level.split("_")[1]}
                          </span>
                        </div>
                        <span className="font-pixel text-[10px] text-muted-foreground/40 tracking-widest">
                          {activeProject.title} — PREVIEW
                        </span>
                      </div>
                    </div>
                    {/* CRT overlay */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none opacity-40" />
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-cyan-desat/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <p className="font-pixel text-[10px] text-muted-purple tracking-widest mb-2">
                          /// PROBLEM
                        </p>
                        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                          {activeProject.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-pixel text-[10px] text-muted-purple tracking-widest mb-2">
                          /// DESCRIPTION
                        </p>
                        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                          {activeProject.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6 lg:border-l lg:border-border/30 lg:pl-8">
                      <div>
                        <p className="font-pixel text-[10px] text-muted-purple tracking-widest mb-2">
                          /// IMPACT
                        </p>
                        <p className="font-mono text-sm text-warm-white/90 leading-relaxed">
                          {activeProject.impact}
                        </p>
                      </div>
                      <div>
                        <p className="font-pixel text-[10px] text-muted-purple tracking-widest mb-2">
                          /// TECH_STACK
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.techStack.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 text-[10px] font-mono border border-border/40 bg-matte-black/60 text-cyan-desat hover:border-cyan-desat/50 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-4 border-t border-border/20">
                    <button className="px-6 py-3 bg-warm-white text-matte-black font-bold font-mono text-xs hover:bg-cyan-desat transition-colors interactive uppercase tracking-wider">
                      VIEW_CASE_STUDY
                    </button>
                    <button className="px-6 py-3 border border-border/40 font-mono text-xs hover:border-cyan-desat hover:text-cyan-desat transition-colors interactive uppercase tracking-wider">
                      SOURCE_CODE
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
