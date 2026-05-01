import { useState } from "react";
import { Check, RotateCcw, Sparkles, Trophy, Zap } from "lucide-react";
import { flashcards } from "@/lib/mockData";

const ratings = [
  { label: "Again", color: "pink", xp: 0 },
  { label: "Hard", color: "gold", xp: 5 },
  { label: "Good", color: "cyan", xp: 10 },
  { label: "Easy", color: "green", xp: 15 },
];
const colorMap: Record<string, string> = { cyan: "var(--cyan)", purple: "var(--purple)", pink: "var(--pink)", gold: "var(--gold)", green: "var(--green)" };

export function LearnScreen() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [xp, setXp] = useState(0);
  const [done, setDone] = useState(false);

  const card = flashcards[idx];
  const progress = ((idx) / flashcards.length) * 100;

  const handleRate = (gained: number) => {
    setXp((x) => x + gained);
    if (idx + 1 >= flashcards.length) { setDone(true); return; }
    setFlipped(false);
    setTimeout(() => setIdx((i) => i + 1), 150);
  };

  const restart = () => { setIdx(0); setFlipped(false); setXp(0); setDone(false); };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto mt-10">
        <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-aurora opacity-10" />
          <div className="relative">
            <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-aurora flex items-center justify-center glow-cyan mb-5">
              <Trophy className="h-10 w-10 text-background" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Session Complete</h2>
            <p className="text-muted-foreground mb-8">Your retention curve just got stronger.</p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="glass-strong rounded-xl p-4">
                <div className="font-mono text-2xl font-semibold text-cyan">{flashcards.length}</div>
                <div className="text-xs text-muted-foreground mt-1">Reviewed</div>
              </div>
              <div className="glass-strong rounded-xl p-4">
                <div className="font-mono text-2xl font-semibold text-gold">+{xp}</div>
                <div className="text-xs text-muted-foreground mt-1">XP Earned</div>
              </div>
              <div className="glass-strong rounded-xl p-4">
                <div className="font-mono text-2xl font-semibold text-green">94%</div>
                <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
              </div>
            </div>
            <button onClick={restart} className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 glow-cyan hover:scale-[1.02] transition">
              <RotateCcw className="h-4 w-4" /> Restart Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-mono text-xs text-cyan tracking-widest uppercase mb-1">Active Session</div>
          <h1 className="text-2xl md:text-3xl font-bold">Daily Review</h1>
        </div>
        <div className="flex items-center gap-2 glass rounded-full px-3.5 py-2">
          <Zap className="h-3.5 w-3.5 text-gold" fill="currentColor" />
          <span className="font-mono text-sm font-semibold">+{xp}</span>
          <span className="text-xs text-muted-foreground">XP</span>
        </div>
      </div>

      <div className="glass rounded-full p-1">
        <div className="h-2 rounded-full bg-gradient-aurora transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground font-mono">
        <span>Card {idx + 1} of {flashcards.length}</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="perspective h-[420px]">
        <div className={`relative preserve-3d w-full h-full transition-transform duration-700 cursor-pointer ${flipped ? "rotate-y-180" : ""}`} onClick={() => setFlipped((f) => !f)}>
          {/* Front */}
          <div className="absolute inset-0 backface-hidden glass-strong rounded-3xl p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-cyan/15 text-cyan border border-cyan/30">{card.topic}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: `color-mix(in oklab, ${card.difficulty === "Easy" ? "var(--green)" : card.difficulty === "Hard" ? "var(--pink)" : "var(--gold)"} 18%, transparent)`, color: card.difficulty === "Easy" ? "var(--green)" : card.difficulty === "Hard" ? "var(--pink)" : "var(--gold)" }}>{card.difficulty}</span>
            </div>
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">Question</div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug max-w-xl">{card.q}</h2>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Last reviewed · {card.lastReviewed}</span>
              <span className="text-cyan">Tap to reveal →</span>
            </div>
          </div>
          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 glass-strong rounded-3xl p-8 flex flex-col border-cyan/30 glow-cyan">
            <div className="flex items-center gap-2 mb-6">
              <Check className="h-4 w-4 text-green" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Answer</span>
            </div>
            <div className="flex-1 flex items-center justify-center text-center">
              <p className="text-lg md:text-xl leading-relaxed max-w-xl text-foreground/90">{card.a}</p>
            </div>
            <div className="text-xs text-center text-muted-foreground">Tap card to flip back</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {ratings.map((r) => (
          <button
            key={r.label}
            disabled={!flipped}
            onClick={() => handleRate(r.xp)}
            className="glass rounded-xl p-3.5 text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:scale-[1.03] enabled:hover:border-current"
            style={{ color: flipped ? colorMap[r.color] : undefined }}
          >
            <div>{r.label}</div>
            <div className="font-mono text-[10px] text-muted-foreground mt-0.5">+{r.xp} XP</div>
          </button>
        ))}
      </div>
      {!flipped && <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5"><Sparkles className="h-3 w-3" /> Reveal the answer to rate your recall</p>}
    </div>
  );
}
