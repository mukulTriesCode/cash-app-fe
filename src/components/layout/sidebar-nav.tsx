
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  PlusCircle,
  Shapes,
  User,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  useSidebar,
} from '@/components/ui/sidebar';
import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/add-entry', label: 'Add Entry', icon: PlusCircle },
  { href: '/categories', label: 'Categories', icon: Shapes },
  { href: '/profile', label: 'Profile', icon: User },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="text-lg font-semibold">CashFlow Canvas</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2" />
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="/profile">
                        <Settings/>
                        <span>Settings</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={toggleSidebar} tooltip={state === 'expanded' ? 'Collapse' : 'Expand'}>
                {state === 'expanded' ? <PanelLeftClose /> : <PanelLeftOpen />}
                <span>{state === 'expanded' ? 'Collapse' : 'Expand'}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
