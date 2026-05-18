import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vh] bg-warning-red/5 rounded-full blur-[120px]" />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)] pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="text-8xl md:text-9xl font-bold font-mono text-warning-red mb-4 tracking-tighter mix-blend-screen drop-shadow-[0_0_20px_rgba(255,87,87,0.3)]">
          404
        </h1>
        <div className="bg-warning-red/10 border border-warning-red/30 px-6 py-3 mb-8 flex items-center gap-3">
          <div className="w-2 h-2 bg-warning-red animate-pulse" />
          <span className="font-pixel text-xs text-warning-red tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,87,87,0.8)]">
            FATAL_ERROR: DIRECTORY_NOT_FOUND
          </span>
        </div>
        <p className="font-mono text-sm text-muted-foreground max-w-md mb-10 leading-relaxed">
          <span className="text-warning-red mr-2">{">"}</span>
          The requested coordinate is invalid or has been purged from the system archives.
        </p>
        
        <Link 
          href="/"
          className="px-8 py-4 bg-cyan-desat/5 border border-cyan-desat/50 text-cyan-desat hover:bg-cyan-desat hover:text-deep-black transition-all duration-300 font-mono text-sm uppercase tracking-widest font-bold interactive"
        >
          RETURN_TO_BASE
        </Link>
      </div>
    </div>
  );
}
