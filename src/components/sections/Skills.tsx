"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { skills as skillNodes } from "@/data/content";

const categoryColors: Record<string, string> = {
  CORE: "border-cyan-desat text-cyan-desat",
  TECH: "border-electric-blue text-electric-blue",
  SYSTEM: "border-muted-magenta text-muted-magenta",
  CREATIVE: "border-soft-amber text-soft-amber",
};

const categoryBg: Record<string, string> = {
  CORE: "bg-cyan-desat/10",
  TECH: "bg-electric-blue/10",
  SYSTEM: "bg-muted-magenta/10",
  CREATIVE: "bg-soft-amber/10",
};

export default function Skills() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeSkill = skillNodes.find((s) => s.id === activeNode);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex flex-col border-t border-border/30 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(13,21,37,0.5)_0%,rgba(10,10,12,1)_70%)]"
    >
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/30 pb-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-cyan-desat font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              Skill Tree
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            {">"} Select nodes to reveal capabilities and interconnected disciplines.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          {/* Node cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 content-start"
          >
            {skillNodes.map((skill, i) => {
              const isActive = activeNode === skill.id;
              const isConnected = activeSkill?.connections.includes(skill.id);
              return (
                <motion.button
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  onClick={() => setActiveNode(isActive ? null : skill.id)}
                  onMouseEnter={() => setActiveNode(skill.id)}
                  className={`relative p-5 border text-left transition-all duration-300 overflow-hidden group interactive ${
                    isActive
                      ? `${categoryColors[skill.category].split(" ")[0]} ${categoryBg[skill.category]} shadow-lg`
                      : isConnected
                      ? "border-muted-purple/40 bg-muted-purple/5"
                      : "border-border/30 bg-matte-black/50 hover:border-border/60"
                  }`}
                >
                  {/* Top bar */}
                  <div className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } ${
                    skill.category === "CORE" ? "bg-cyan-desat" :
                    skill.category === "TECH" ? "bg-electric-blue" :
                    skill.category === "SYSTEM" ? "bg-muted-magenta" : "bg-soft-amber"
                  }`} />

                  <div className="flex justify-between items-start mb-3">
                    <span className={`font-pixel text-[9px] tracking-widest ${
                      isActive ? categoryColors[skill.category].split(" ")[1] : "text-muted-foreground/50"
                    }`}>
                      [{skill.category}]
                    </span>
                    <span className={`font-pixel text-[9px] ${
                      isActive ? "text-retro-green" : "text-muted-foreground/30"
                    }`}>
                      LV.{skill.level}
                    </span>
                  </div>

                  <h4 className={`font-mono text-sm font-bold mb-2 transition-colors ${
                    isActive ? "text-warm-white" : "text-warm-white/70"
                  }`}>
                    {skill.label}
                  </h4>

                  {/* Level bar */}
                  <div className="w-full h-1 bg-border/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.2 * i + 0.5, duration: 0.8, ease: "easeOut" }}
                      className={`h-full ${
                        skill.category === "CORE" ? "bg-cyan-desat/60" :
                        skill.category === "TECH" ? "bg-electric-blue/60" :
                        skill.category === "SYSTEM" ? "bg-muted-magenta/60" : "bg-soft-amber/60"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Detail panel */}
          <div className="w-full lg:w-80 shrink-0">
            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="sticky top-28 border border-border/40 bg-navy-crt/30 backdrop-blur-md overflow-hidden"
                >
                  {/* Panel header */}
                  <div className="px-5 py-3 border-b border-border/30 bg-matte-black/60 flex justify-between items-center">
                    <span className="font-pixel text-[10px] text-cyan-desat tracking-widest">
                      NODE_INFO
                    </span>
                    <span className="w-2 h-2 bg-retro-green rounded-full animate-pulse shadow-[0_0_6px_rgba(90,224,122,0.5)]" />
                  </div>

                  <div className="p-5 flex flex-col gap-4">
                    <div>
                      <span className={`font-pixel text-[9px] tracking-widest ${
                        categoryColors[activeSkill.category].split(" ")[1]
                      }`}>
                        [{activeSkill.category}]
                      </span>
                      <h4 className="font-bold text-lg mt-1 uppercase tracking-wide">
                        {activeSkill.label}
                      </h4>
                    </div>

                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                      {activeSkill.description}
                    </p>

                    {/* Proficiency */}
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
                        <span>PROFICIENCY</span>
                        <span className="text-cyan-desat">{activeSkill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-border/30 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${activeSkill.level}%` }}
                          className="h-full bg-gradient-to-r from-cyan-desat to-electric-blue"
                        />
                      </div>
                    </div>

                    {/* Connected nodes */}
                    <div>
                      <span className="font-pixel text-[9px] text-muted-foreground tracking-widest mb-2 block">
                        CONNECTED_NODES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeSkill.connections.map((connId) => {
                          const conn = skillNodes.find((s) => s.id === connId);
                          return (
                            <button
                              key={connId}
                              onClick={() => setActiveNode(connId)}
                              className="px-2 py-1 text-[10px] font-mono border border-border/40 text-muted-foreground hover:border-cyan-desat/50 hover:text-cyan-desat transition-colors interactive"
                            >
                              {conn?.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border/30 flex justify-between text-[9px] font-mono text-muted-foreground/50">
                      <span>STATUS: OPTIMAL</span>
                      <span>XP: MAX</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="sticky top-28 border border-border/20 border-dashed p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
                >
                  <div className="w-10 h-10 border border-border/40 rotate-45 mb-4 flex items-center justify-center">
                    <span className="font-pixel text-muted-foreground/30 -rotate-45 text-sm">?</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground/40">
                    Select a skill node to view details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
