import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { ChatScreen } from "@/components/screens/ChatScreen";

export const Route = createFileRoute("/chat")({
  head: () => ({ meta: [{ title: "AI Tutor — BrainStorm AI" }, { name: "description", content: "Chat with your adaptive AI memory tutor." }] }),
  component: () => (<AppShell><ChatScreen /></AppShell>),
});
