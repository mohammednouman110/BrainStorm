import { Brain, Crown, Flame, Layers, Sparkles, Trophy, Zap } from "lucide-react";
import { achievements } from "@/lib/mockData";

const iconMap: Record<string, any> = { Sparkles, Flame, Brain, Trophy, Layers, Crown };

// 7 cols x 12 rows streak grid (last 84 days)
const streak = Array.from({ length: 84 }, (_, i) => {
  const seed = (i * 2654435761) % 100;
  return seed > 30 ? Math.min(100, seed + 20) : 0;
});

export function ProfileScreen() {
  const xp = 4287;
  const nextLevel = 5000;
  const pct = (xp / nextLevel) * 100;

  return (
    <div className="space-y-6 max-w-[1300px] mx-auto">
      <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-aurora opacity-30 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-24 w-24 rounded-2xl bg-gradient-aurora flex items-center justify-center text-3xl font-bold text-background glow-cyan shrink-0">AK</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold">Alex Kovacs</h1>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-purple/20 text-purple border border-purple/30">Pro</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Level 12 · Cognitive Architect · Joined Mar 2024</p>
            <div className="flex items-end justify-between mb-2 text-sm">
              <span className="font-mono">{xp.toLocaleString()} XP</span>
              <span className="text-muted-foreground font-mono text-xs">Level 13 · {nextLevel - xp} XP to go</span>
            </div>
            <div className="h-2.5 rounded-full bg-surface overflow-hidden">
              <div className="h-full bg-gradient-aurora rounded-full transition-all duration-1000" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Cards Reviewed", value: "2,148", icon: Brain, color: "cyan" },
          { label: "Retention", value: "87%", icon: Sparkles, color: "purple" },
          { label: "Hours Studied", value: "143", icon: Zap, color: "gold" },
          { label: "Day Streak", value: "27", icon: Flame, color: "pink" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass card-hover rounded-2xl p-5">
              <Icon className="h-5 w-5 mb-3" style={{ color: `var(--${s.color})` }} />
              <div className="font-mono text-2xl font-semibold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display text-lg font-semibold">Activity Streak</h3>
              <p className="text-xs text-muted-foreground">Last 12 weeks</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>Less</span>
              {[15, 40, 65, 90].map((v) => (<span key={v} className="h-3 w-3 rounded" style={{ background: v === 0 ? "var(--surface)" : `oklch(0.85 0.18 210 / ${0.2 + v / 130})` }} />))}
              <span>More</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-1.5" style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))", gridAutoFlow: "column" }}>
            {streak.map((v, i) => (
              <div
                key={i}
                className="aspect-square rounded-md transition hover:scale-125"
                style={{ background: v === 0 ? "oklch(0.22 0.04 275)" : `oklch(0.85 0.18 210 / ${0.15 + v / 130})` }}
                title={`${v} XP`}
              />
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5">
          <h3 className="font-display text-lg font-semibold mb-1">Achievements</h3>
          <p className="text-xs text-muted-foreground mb-4">{achievements.filter(a => a.unlocked).length}/{achievements.length} unlocked</p>
          <div className="grid grid-cols-3 gap-2.5">
            {achievements.map((a) => {
              const Icon = iconMap[a.icon];
              return (
                <div key={a.id} className={`relative aspect-square rounded-xl p-2.5 flex flex-col items-center justify-center text-center border transition ${a.unlocked ? "bg-gradient-to-br from-cyan/15 to-purple/10 border-cyan/30" : "bg-surface/40 border-border opacity-50"}`} title={a.desc}>
                  <Icon className={`h-5 w-5 mb-1 ${a.unlocked ? "text-cyan" : "text-muted-foreground"}`} />
                  <div className="text-[10px] font-semibold leading-tight">{a.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}