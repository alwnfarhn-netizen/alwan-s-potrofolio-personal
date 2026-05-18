"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  { msg: "INITIALIZING CORE SYSTEM...", delay: 400 },
  { msg: "LOADING AI MODULE [v3.2.1]...", delay: 600 },
  { msg: "CONNECTING RESEARCH DATABASE...", delay: 500 },
  { msg: "MOUNTING EDUCATIONAL INTERFACE...", delay: 700 },
  { msg: "CALIBRATING NEURAL PATHWAYS...", delay: 400 },
  { msg: "SYNCING KNOWLEDGE GRAPH...", delay: 500 },
  { msg: "COMPILING INTERACTIVE SYSTEMS...", delay: 600 },
  { msg: "ALL SYSTEMS NOMINAL.", delay: 300 },
  { msg: "ACCESS GRANTED.", delay: 800 },
];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"boot" | "entering">("boot");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let lineIndex = 0;
    const totalLines = bootSequence.length;

    const showNextLine = () => {
      if (lineIndex < totalLines) {
        setVisibleLines(lineIndex + 1);
        setProgress(Math.min(100, Math.round(((lineIndex + 1) / totalLines) * 100)));
        lineIndex++;
        timerRef.current = setTimeout(showNextLine, bootSequence[lineIndex - 1]?.delay || 500);
      } else {
        setPhase("entering");
        setTimeout(() => setLoading(false), 1200);
      }
    };

    const initialDelay = setTimeout(() => {
      showNextLine();
    }, 600);

    return () => {
      clearTimeout(initialDelay);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(12px) brightness(2)",
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-black"
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-muted-purple/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-cyan-desat/3 rounded-full blur-[80px]" />
          </div>

          {/* CRT overlay for loader */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)]" />
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]" />

          <div className="z-10 w-full max-w-2xl px-6 flex flex-col gap-6">
            {/* System header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-3 h-3 border border-cyan-desat/50 rotate-45" />
              <span className="font-pixel text-cyan-desat/70 text-sm tracking-[0.3em]">
                ALWAN_OS v2.0
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-desat/30 to-transparent" />
            </motion.div>

            {/* Boot messages */}
            <div className="flex flex-col gap-1.5 min-h-[280px] font-mono text-sm">
              {bootSequence.slice(0, visibleLines).map((item, i) => {
                const isLast = i === bootSequence.length - 1;
                const isSuccess = item.msg === "ALL SYSTEMS NOMINAL." || isLast;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-muted-foreground/60 font-pixel text-xs w-8 text-right shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-retro-green/50">{">"}</span>
                    <span
                      className={`tracking-wide ${
                        isLast
                          ? "text-cyan-desat font-bold text-glow"
                          : isSuccess
                          ? "text-retro-green"
                          : "text-warm-white/80"
                      }`}
                    >
                      {item.msg}
                    </span>
                    {isLast && (
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="w-2 h-4 bg-cyan-desat ml-1"
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Blinking cursor while loading */}
              {visibleLines < bootSequence.length && visibleLines > 0 && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="w-2.5 h-4 bg-retro-green/80 ml-[52px] mt-1"
                />
              )}
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="w-full h-1 bg-border/40 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-desat via-electric-blue to-muted-magenta"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
                {/* Shimmer on progress bar */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["0%", "400%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
              <div className="flex justify-between items-center font-pixel text-xs">
                <span className="text-muted-foreground/50 tracking-widest">
                  {phase === "entering" ? "LAUNCHING INTERFACE..." : "LOADING MODULES..."}
                </span>
                <span className="text-cyan-desat/70 tabular-nums">
                  {Math.min(progress, 100)}%
                </span>
              </div>
            </div>

            {/* Decorative footer */}
            <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-muted-foreground/30">
              <div className="w-1.5 h-1.5 rounded-full bg-retro-green/50 animate-pulse" />
              <span>SYS_KERNEL:ACTIVE</span>
              <span className="mx-2">|</span>
              <span>MEM:2048MB</span>
              <span className="mx-2">|</span>
              <span>NET:CONNECTED</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
