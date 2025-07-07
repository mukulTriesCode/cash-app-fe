import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { Sidebar, SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-4 sm:p-6 bg-background/80">
            {children}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
