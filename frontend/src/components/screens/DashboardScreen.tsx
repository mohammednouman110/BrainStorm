import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowUpRight, Brain, Clock, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { atRiskTopics, retentionData, todayPlan } from "@/lib/mockData";

const colorMap: Record<string, string> = {
  cyan: "var(--cyan)", purple: "var(--purple)", pink: "var(--pink)", gold: "var(--gold)", green: "var(--green)",
};

function StatCard({ label, value, sub, icon: Icon, accent }: { label: string; value: string; sub: string; icon: any; accent: string }) {
  return (
    <div className="glass card-hover rounded-2xl p-5 relative overflow-hidden">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-25 blur-2xl" style={{ background: colorMap[accent] }} />
      <div className="flex items-start justify-between mb-4 relative">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `color-mix(in oklab, ${colorMap[accent]} 18%, transparent)`, color: colorMap[accent] }}>
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <span className="text-xs flex items-center gap-1 text-green font-mono">
          <ArrowUpRight className="h-3 w-3" />{sub}
        </span>
      </div>
      <div className="font-mono text-3xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function DashboardScreen() {
  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <div className="space-y-6 max-w-[1500px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-cyan tracking-widest uppercase mb-1.5">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</div>
          <h1 className="text-3xl md:text-4xl font-bold">{greeting}, <span className="text-aurora">Alex</span></h1>
          <p className="text-muted-foreground mt-1">Your memory is sharpest right now — let's make it count.</p>
        </div>
        <button className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold flex items-center gap-2 glow-cyan hover:scale-[1.02] transition">
          <Sparkles className="h-4 w-4" /> Start Daily Review
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Due Today" value="46" sub="8 new" icon={Target} accent="cyan" />
        <StatCard label="Retention Rate" value="87%" sub="+3.2%" icon={Brain} accent="purple" />
        <StatCard label="XP Today" value="+312" sub="streak ×7" icon={Zap} accent="gold" />
        <StatCard label="Focus Time" value="42m" sub="+11m" icon={Clock} accent="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 glass rounded-2xl p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display text-lg font-semibold">Memory Retention Curve</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Spaced repetition vs. natural decay (Ebbinghaus)</p>
            </div>
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan" />With BrainStorm AI</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pink" />No revision</div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retentionData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.85 0.18 210)" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="oklch(0.85 0.18 210)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="pinkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.68 0.26 5)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="oklch(0.68 0.26 5)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(0.3 0.04 275 / 0.3)" strokeDasharray="3 6" vertical={false} />
                <XAxis dataKey="day" stroke="oklch(0.6 0.03 260)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.6 0.03 260)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.04 270)", border: "1px solid oklch(0.3 0.04 275)", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="withRevision" stroke="oklch(0.85 0.18 210)" strokeWidth={2.5} fill="url(#cyanGrad)" />
                <Area type="monotone" dataKey="withoutRevision" stroke="oklch(0.68 0.26 5)" strokeWidth={2} fill="url(#pinkGrad)" strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-aurora opacity-[0.08]" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-purple/20 text-purple flex items-center justify-center"><Brain className="h-4 w-4" /></div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">AI Prediction</div>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug mb-1">You may forget <span className="text-pink">3 topics</span> in 48h</h3>
            <p className="text-xs text-muted-foreground mb-4">Based on your forgetting curve and last review intervals.</p>
            <div className="space-y-2.5">
              {atRiskTopics.map((t) => (
                <div key={t.name} className="flex items-center gap-3 text-sm">
                  <div className="flex-1 truncate">{t.name}</div>
                  <div className="flex-1 h-1.5 rounded-full bg-surface overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${t.risk}%`, background: t.risk > 70 ? "var(--pink)" : t.risk > 50 ? "var(--gold)" : "var(--cyan)" }} />
                  </div>
                  <span className="font-mono text-xs w-9 text-right text-muted-foreground">{t.risk}%</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full glass-strong rounded-xl py-2.5 text-sm font-medium hover:border-cyan/40 transition flex items-center justify-center gap-2">
              <TrendingUp className="h-3.5 w-3.5" /> Reinforce Now
            </button>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display text-lg font-semibold">Today's Review Plan</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Optimized by your circadian focus pattern</p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">4 sessions</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {todayPlan.map((p) => (
            <div key={p.id} className="group relative bg-surface/40 rounded-xl p-4 border border-border/60 card-hover">
              <span className="inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full mb-3" style={{ background: `color-mix(in oklab, ${colorMap[p.color]} 18%, transparent)`, color: colorMap[p.color] }}>{p.count} cards</span>
              <div className="font-semibold mb-1">{p.topic}</div>
              <div className="text-xs text-muted-foreground mb-3">{p.progress}% complete</div>
              <div className="h-1.5 rounded-full bg-background/60 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${p.progress}%`, background: colorMap[p.color] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
