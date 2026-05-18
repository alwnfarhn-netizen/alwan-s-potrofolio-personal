"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { insights as insightEntries } from "@/data/content";

export default function Insights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="insights"
      ref={ref}
      className="relative w-full py-28 min-h-screen flex items-center border-t border-border/30 bg-[radial-gradient(ellipse_at_top,rgba(13,21,37,0.4)_0%,rgba(10,10,12,1)_70%)]"
    >
      {/* Binary background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden flex flex-col font-pixel text-[7px] leading-tight text-cyan-desat break-all select-none">
        {Array(30)
          .fill(
            "01010100 01101000 01100101 00100000 01100110 01110101 01110100 01110101 01110010 01100101 "
          )
          .map((text, i) => (
            <span key={i}>{text.repeat(8)}</span>
          ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end gap-4 border-b border-border/30 pb-6"
        >
          <span className="text-cyan-desat font-mono text-sm">07.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            Data_Archive
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </motion.div>

        {/* Database table */}
        <div className="border border-border/30 bg-matte-black/80 backdrop-blur-md max-w-5xl mx-auto shadow-2xl shadow-black/20 overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border/30 bg-matte-black/60 font-pixel text-[9px] text-muted-foreground/50 uppercase tracking-[0.2em] hidden md:grid">
            <div className="col-span-5">File_Name</div>
            <div className="col-span-3">Category</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1">Size</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          {/* Table rows */}
          <div className="divide-y divide-border/15">
            {insightEntries.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="group px-6 py-4 hover:bg-cyan-desat/5 transition-all duration-300 cursor-pointer interactive"
              >
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center gap-3">
                    <span className="text-cyan-desat/40 text-sm">{">"}</span>
                    <div>
                      <span className="font-mono text-sm text-warm-white/80 group-hover:text-warm-white transition-colors">
                        {item.title}
                      </span>
                      <p className="font-mono text-[10px] text-muted-foreground/40 mt-0.5 line-clamp-1">
                        {item.preview}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 font-mono text-[10px] text-muted-purple tracking-wider">
                    [{item.category}]
                  </div>
                  <div className="col-span-2 font-mono text-[10px] text-muted-foreground/50">
                    {item.date}
                  </div>
                  <div className="col-span-1 font-mono text-[10px] text-muted-foreground/40">
                    {item.sizeKb}
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="font-pixel text-[9px] text-retro-green opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
                      READ
                    </span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex flex-col gap-1.5">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-sm text-warm-white/80">
                      {item.title}
                    </span>
                    <span className="font-pixel text-[9px] text-muted-foreground/40 shrink-0 ml-2">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-muted-purple">
                      [{item.category}]
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/30">
                      {item.sizeKb}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <div className="px-6 py-3 border-t border-border/20 flex justify-between items-center font-mono text-[9px] text-muted-foreground/40 bg-matte-black/60">
            <span>SHOWING {insightEntries.length} RECORDS</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-retro-green/50 animate-pulse" />
              <span>ARCHIVE_ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
