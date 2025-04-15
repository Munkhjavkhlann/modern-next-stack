import AdminPanelLayout from "@/layout/dashboard-layout/admin-panel-layout";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
