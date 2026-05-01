import { Link, useLocation } from "@tanstack/react-router";
import { LayoutDashboard, BookOpen, MessageSquare, Grid3x3, User, Brain } from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/chat", label: "Chat", icon: MessageSquare },
  { to: "/memory", label: "Memory", icon: Grid3x3 },
  { to: "/profile", label: "Profile", icon: User },
];

export function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 p-5 border-r border-border/60">
      <Link to="/" className="flex items-center gap-2.5 mb-10 group">
        <div className="relative h-10 w-10 rounded-xl bg-gradient-aurora flex items-center justify-center glow-cyan">
          <Brain className="h-5 w-5 text-background" />
        </div>
        <div>
          <div className="font-display font-bold text-xl tracking-tight">BrainStorm AI</div>
          <div className="font-mono text-[10px] text-muted-foreground -mt-0.5">v2.4 · neural</div>
        </div>
      </Link>
      <nav className="flex flex-col gap-1.5">
        {items.map((it) => {
          const active = pathname === it.to;
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-gradient-to-r from-cyan/15 to-purple/10 text-foreground border border-cyan/30 glow-cyan"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface/60"
              }`}
            >
              <Icon className={`h-[18px] w-[18px] ${active ? "text-cyan" : ""}`} />
              {it.label}
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto glass rounded-2xl p-4">
        <div className="text-xs text-muted-foreground mb-1.5">Daily Goal</div>
        <div className="flex items-end justify-between mb-2">
          <span className="font-mono text-2xl font-semibold">28<span className="text-muted-foreground text-base">/40</span></span>
          <span className="text-xs text-green">+12%</span>
        </div>
        <div className="h-1.5 rounded-full bg-surface overflow-hidden">
          <div className="h-full bg-gradient-aurora rounded-full" style={{ width: "70%" }} />
        </div>
      </div>
    </aside>
  );
}

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50 glass-strong rounded-2xl p-1.5 flex justify-around">
      {items.map((it) => {
        const active = pathname === it.to;
        const Icon = it.icon;
        return (
          <Link key={it.to} to={it.to} className={`flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-all ${active ? "bg-gradient-to-br from-cyan/20 to-purple/10 text-cyan" : "text-muted-foreground"}`}>
            <Icon className="h-[18px] w-[18px]" />
            <span className="text-[10px] font-medium">{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
