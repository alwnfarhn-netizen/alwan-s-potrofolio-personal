export default function Loading() {
  return (
    <div className="fixed inset-0 bg-deep-black z-[100] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Futuristic spinner */}
        <div className="relative w-16 h-16 border border-cyan-desat/20 flex items-center justify-center shadow-[0_0_30px_rgba(92,200,215,0.1)]">
          <div className="absolute inset-0 border-t border-r border-cyan-desat animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 border-b border-l border-retro-green/50 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          <span className="absolute font-pixel text-cyan-desat text-[10px] animate-pulse">SYS</span>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-cyan-desat tracking-widest uppercase animate-pulse">
            INITIALIZING_SYSTEM...
          </span>
          <span className="font-pixel text-[8px] text-muted-foreground/50 tracking-widest">
            LOADING RESOURCES
          </span>
        </div>
      </div>
    </div>
  );
}
