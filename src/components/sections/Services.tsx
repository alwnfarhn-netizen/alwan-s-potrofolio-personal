"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/content";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex items-center border-t border-border/30"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-muted-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-4 border-b border-border/30 pb-6"
        >
          <span className="text-cyan-desat font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            Available Protocols
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 border border-border/30 bg-matte-black/40 hover:bg-navy-crt/40 transition-all duration-500 flex flex-col h-full relative overflow-hidden interactive"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-desat to-electric-blue group-hover:w-full transition-all duration-500" />

              {/* Corner brackets on hover */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-desat/0 group-hover:border-cyan-desat/30 transition-all duration-300" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-desat/0 group-hover:border-cyan-desat/30 transition-all duration-300" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-desat/0 group-hover:border-cyan-desat/30 transition-all duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-desat/0 group-hover:border-cyan-desat/30 transition-all duration-300" />

              <div className="flex justify-between items-start mb-5">
                <span className="text-xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </span>
                <span className="font-pixel text-[9px] text-muted-foreground/40 tracking-widest group-hover:text-cyan-desat/50 transition-colors">
                  [{service.tag}]
                </span>
              </div>

              <h3 className="font-bold text-base mb-3 leading-snug group-hover:text-warm-white transition-colors">
                {service.title}
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mt-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
