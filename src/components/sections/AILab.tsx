"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aiLab } from "@/data/content";

export default function AILab() {
  const [lines, setLines] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (lines >= aiLab.terminalCommands.length) return;

    const timeout = setTimeout(
      () => setLines((prev) => prev + 1),
      Math.random() * 500 + 300
    );
    return () => clearTimeout(timeout);
  }, [lines, hasStarted]);

  return (
    <section
      id="lab"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex items-center border-t border-border/30 bg-[radial-gradient(ellipse_at_bottom,rgba(13,21,37,0.6)_0%,rgba(10,10,12,1)_70%)]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-retro-green/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end gap-4 border-b border-border/30 pb-6"
        >
          <span className="text-cyan-desat font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            AI Laboratory
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description + Module Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 uppercase leading-tight text-cyan-desat text-glow">
                {aiLab.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {aiLab.description}
              </p>
            </div>

            {/* Lab Module Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiLab.modules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group p-5 border border-border/30 bg-matte-black/60 hover:border-cyan-desat/30 hover:bg-navy-crt/30 transition-all duration-300 relative overflow-hidden interactive"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-desat/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-lg">{mod.icon}</span>
                    <span
                      className={`font-pixel text-[9px] tracking-widest ${
                        mod.status === "ACTIVE"
                          ? "text-retro-green"
                          : "text-soft-amber"
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm mb-2 group-hover:text-cyan-desat transition-colors">
                    {mod.title}
                  </h4>
                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                    {mod.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="w-full border border-border/40 bg-matte-black rounded-md overflow-hidden shadow-2xl shadow-black/30 relative"
          >
            {/* Terminal Header */}
            <div className="w-full h-9 bg-border/20 px-4 flex items-center justify-between border-b border-border/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                bash — root@alwan-lab — 80×24
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm flex flex-col gap-1.5 min-h-[350px] relative">
              {/* Initial prompt */}
              <div className="text-muted-foreground/50 mb-2">
                <span className="text-retro-green/50">alwan@lab</span>
                <span className="text-muted-foreground/30">:</span>
                <span className="text-electric-blue/50">~</span>
                <span className="text-muted-foreground/30">$</span>
                <span className="ml-2 text-warm-white/60">./start_engine.sh</span>
              </div>

              {aiLab.terminalCommands.slice(0, lines).map((cmd, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    i === aiLab.terminalCommands.length - 1
                      ? "text-cyan-desat text-glow"
                      : i === aiLab.terminalCommands.length - 2
                      ? "text-retro-green"
                      : "text-warm-white/70"
                  }`}
                >
                  {cmd}
                </motion.div>
              ))}

              {/* Blinking cursor */}
              {lines < aiLab.terminalCommands.length && hasStarted && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="w-2.5 h-4 bg-retro-green/70 mt-1"
                />
              )}

              {lines >= aiLab.terminalCommands.length && (
                <div className="mt-4 text-muted-foreground/40">
                  <span className="text-retro-green/50">alwan@lab</span>
                  <span className="text-muted-foreground/30">:</span>
                  <span className="text-electric-blue/50">~</span>
                  <span className="text-muted-foreground/30">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="ml-2 inline-block w-2 h-4 bg-retro-green/60"
                  />
                </div>
              )}

              {/* Terminal ambient glow */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(90,224,122,0.03)_0%,transparent_60%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
