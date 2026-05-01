import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { DashboardScreen } from "@/components/screens/DashboardScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrainStorm AI — AI-Powered Spaced Repetition" },
      { name: "description", content: "Remember everything you learn. BrainStorm AI uses spaced repetition and AI to optimize your memory curve." },
      { property: "og:title", content: "BrainStorm AI — Smart Learning Dashboard" },
      { property: "og:description", content: "AI-powered spaced repetition that beats the forgetting curve." },
    ],
  }),
  component: () => (<AppShell><DashboardScreen /></AppShell>),
});
