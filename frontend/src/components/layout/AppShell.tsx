import { Sidebar, BottomNav } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 px-4 md:px-8 pt-6 pb-28 md:pb-10 animate-fade-in-up">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
