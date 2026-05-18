"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials as logs } from "@/data/content";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex items-center border-t border-border/30"
    >
      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end gap-4 border-b border-border/30 pb-6"
        >
          <span className="text-cyan-desat font-mono text-sm">06.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            Comm_Logs
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
          <span className="hidden md:block font-pixel text-[9px] text-muted-foreground/40 tracking-widest">
            {logs.length} TRANSMISSIONS
          </span>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {logs.map((log, i) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-border/30 bg-navy-crt/10 hover:bg-navy-crt/20 transition-colors duration-300 relative group overflow-hidden"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-muted-purple/60 via-muted-purple/20 to-transparent" />

              <div className="p-5 md:p-7 flex flex-col md:flex-row gap-5">
                {/* Author info */}
                <div className="md:w-44 shrink-0 flex flex-col gap-1 border-b md:border-b-0 md:border-r border-border/20 pb-4 md:pb-0 md:pr-5">
                  <span className="font-pixel text-[9px] text-muted-foreground/40 tracking-widest">
                    {log.id}
                  </span>
                  <span className="font-mono text-sm font-bold text-cyan-desat">
                    {log.author}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {log.role}
                  </span>
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <span className="font-mono text-[9px] text-muted-foreground/40">
                      {log.date}
                    </span>
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        log.signal === "STRONG"
                          ? "bg-retro-green"
                          : "bg-soft-amber"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="font-mono text-sm text-warm-white/70 leading-relaxed">
                    <span className="text-muted-purple mr-2">{">"}</span>
                    &ldquo;{log.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-muted-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
