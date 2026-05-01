import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { ProfileScreen } from "@/components/screens/ProfileScreen";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — BrainStorm AI" }, { name: "description", content: "Your XP, streaks, and achievements." }] }),
  component: () => (<AppShell><ProfileScreen /></AppShell>),
});
