import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { LearnScreen } from "@/components/screens/LearnScreen";

export const Route = createFileRoute("/learn")({
  head: () => ({ meta: [{ title: "Learn — BrainStorm AI" }, { name: "description", content: "Flashcard review session powered by spaced repetition." }] }),
  component: () => (<AppShell><LearnScreen /></AppShell>),
});
