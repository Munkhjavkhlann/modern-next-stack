"use client";

import { useSidebar } from "@/lib/stores/use-sidebar";
import { useStore } from "@/lib/stores/use-store";
import { cn } from "@/lib/utils";

import { Sidebar } from "./sidebar";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) { return null; }
  const { getOpenState, settings } = sidebar;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          settings.disabled
            ? "lg:ml-0"
            : !getOpenState()
              ? "lg:ml-[90px]"
              : "lg:ml-[288px]"
        )}
      >
        {children}
      </main>
    </>
  );
}