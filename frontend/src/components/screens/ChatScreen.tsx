import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, Brain } from "lucide-react";
import { chatSuggestions, initialMessages, mockAIResponses } from "@/lib/mockData";

type Msg = { role: "user" | "ai"; text: string };

export function ChatScreen() {
  const [msgs, setMsgs] = useState<Msg[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
      setMsgs((m) => [...m, { role: "ai", text: reply }]);
      setTyping(false);
    }, 1100);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-9rem)]">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-11 w-11 rounded-xl bg-gradient-aurora flex items-center justify-center glow-purple">
          <Brain className="h-5 w-5 text-background" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Neural Tutor</h1>
          <div className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" /> Online · adaptive mode
          </div>
        </div>
      </div>

      <div className="flex-1 glass rounded-2xl p-5 overflow-y-auto scrollbar-thin space-y-4">
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-3 animate-fade-in-up ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${m.role === "user" ? "bg-surface-elevated text-foreground" : "bg-gradient-aurora text-background"}`}>
              {m.role === "user" ? "AK" : <Brain className="h-4 w-4" />}
            </div>
            <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-gradient-to-br from-cyan/15 to-purple/15 border border-cyan/25 rounded-tr-sm" : "bg-surface/70 border border-border rounded-tl-sm"}`}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-aurora flex items-center justify-center"><Brain className="h-4 w-4 text-background" /></div>
            <div className="bg-surface/70 border border-border px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan animate-typing" style={{ animationDelay: "0ms" }} />
              <span className="h-2 w-2 rounded-full bg-cyan animate-typing" style={{ animationDelay: "150ms" }} />
              <span className="h-2 w-2 rounded-full bg-cyan animate-typing" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
          {chatSuggestions.map((s) => (
            <button key={s} onClick={() => send(s)} className="shrink-0 glass rounded-full px-3.5 py-1.5 text-xs hover:border-cyan/40 hover:text-cyan transition flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" /> {s}
            </button>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="glass-strong rounded-2xl p-2 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything — concepts, quizzes, summaries…"
            className="flex-1 bg-transparent outline-none px-3 py-2 text-sm placeholder:text-muted-foreground"
          />
          <button type="submit" className="bg-gradient-primary text-primary-foreground rounded-xl h-10 w-10 flex items-center justify-center glow-cyan hover:scale-105 transition disabled:opacity-50" disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}