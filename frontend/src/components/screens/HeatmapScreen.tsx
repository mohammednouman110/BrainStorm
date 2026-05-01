import { useState } from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { heatmapGrid, heatmapTopics, radarData } from "@/lib/mockData";

function strengthColor(s: number) {
  // 0 red -> 100 green, via gold
  if (s < 35) return `oklch(0.65 0.25 15 / ${0.4 + s / 100})`;
  if (s < 60) return `oklch(0.78 0.18 50 / ${0.4 + s / 130})`;
  if (s < 80) return `oklch(0.82 0.18 130 / ${0.4 + s / 130})`;
  return `oklch(0.85 0.22 155 / ${0.5 + s / 200})`;
}

export function HeatmapScreen() {
  const [active, setActive] = useState(heatmapTopics[0]);
  const grid = heatmapGrid[active];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div>
        <div className="font-mono text-xs text-cyan tracking-widest uppercase mb-1.5">Cognitive Map</div>
        <h1 className="text-3xl md:text-4xl font-bold">Memory <span className="text-aurora">Heatmap</span></h1>
        <p className="text-muted-foreground mt-1">Concept-level retention strength across your knowledge graph.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
        {heatmapTopics.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition border ${active === t ? "bg-gradient-to-r from-cyan/20 to-purple/15 border-cyan/40 text-foreground glow-cyan" : "glass border-border text-muted-foreground hover:text-foreground"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 glass rounded-2xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display text-lg font-semibold">{active}</h3>
              <p className="text-xs text-muted-foreground">{grid.length} concepts tracked</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span>Weak</span>
              <div className="h-2 w-32 rounded-full" style={{ background: "linear-gradient(90deg, oklch(0.65 0.25 15), oklch(0.82 0.16 80), oklch(0.85 0.22 155))" }} />
              <span>Strong</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {grid.map((c) => (
              <div key={c.concept} className="rounded-xl p-4 border border-border/60 card-hover relative overflow-hidden" style={{ background: strengthColor(c.strength) }}>
                <div className="absolute inset-0 bg-background/50" />
                <div className="relative">
                  <div className="text-sm font-semibold mb-2 truncate">{c.concept}</div>
                  <div className="flex items-end justify-between">
                    <span className="font-mono text-2xl font-bold">{c.strength}<span className="text-sm text-muted-foreground">%</span></span>
                    <span className="text-[10px] uppercase tracking-widest font-mono opacity-70">{c.strength > 75 ? "Strong" : c.strength > 50 ? "Stable" : c.strength > 35 ? "Fading" : "Weak"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5">
          <h3 className="font-display text-lg font-semibold mb-1">Cognitive Profile</h3>
          <p className="text-xs text-muted-foreground mb-4">Strength across learning dimensions</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="oklch(0.3 0.04 275 / 0.5)" />
                <PolarAngleAxis dataKey="topic" tick={{ fill: "oklch(0.7 0.03 260)", fontSize: 11 }} />
                <PolarRadiusAxis stroke="transparent" tick={false} domain={[0, 100]} />
                <Radar dataKey="value" stroke="oklch(0.85 0.18 210)" fill="oklch(0.85 0.18 210)" fillOpacity={0.35} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="text-center"><div className="font-mono text-lg font-semibold text-cyan">82</div><div className="text-[10px] text-muted-foreground">Avg Score</div></div>
            <div className="text-center"><div className="font-mono text-lg font-semibold text-green">+6</div><div className="text-[10px] text-muted-foreground">vs Last Week</div></div>
            <div className="text-center"><div className="font-mono text-lg font-semibold text-gold">A−</div><div className="text-[10px] text-muted-foreground">Mastery</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
