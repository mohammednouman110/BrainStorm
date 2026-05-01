import { Bell, Search, Zap } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="flex items-center gap-3 px-4 md:px-8 h-16">
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md glass rounded-xl px-3.5 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search topics, concepts, decks…"
            className="bg-transparent flex-1 outline-none text-sm placeholder:text-muted-foreground"
          />
          <span className="font-mono text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">⌘K</span>
        </div>
        <div className="md:hidden font-display font-bold text-lg">BrainStorm AI</div>
        <div className="ml-auto flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
            <Zap className="h-3.5 w-3.5 text-gold" fill="currentColor" />
            <span className="font-mono text-sm font-semibold">4,287</span>
            <span className="text-xs text-muted-foreground">XP</span>
          </div>
          <button className="relative glass rounded-xl h-9 w-9 flex items-center justify-center hover:border-cyan/40 transition">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-pink animate-pulse-glow" />
          </button>
          <div className="h-9 w-9 rounded-xl bg-gradient-aurora flex items-center justify-center font-bold text-sm text-background">
            AK
          </div>
        </div>
      </div>
    </header>
  );
}
