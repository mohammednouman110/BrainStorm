import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { HeatmapScreen } from "@/components/screens/HeatmapScreen";

export const Route = createFileRoute("/memory")({
  head: () => ({ meta: [{ title: "Memory Heatmap — BrainStorm AI" }, { name: "description", content: "Visualize concept-level retention across your knowledge graph." }] }),
  component: () => (<AppShell><HeatmapScreen /></AppShell>),
});
