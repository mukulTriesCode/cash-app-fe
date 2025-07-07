'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  PlusCircle,
  Shapes,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/add-entry', label: 'Add Entry', icon: PlusCircle },
  { href: '/categories', label: 'Categories', icon: Shapes },
  { href: '/profile', label: 'Profile', icon: User },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { state, toggleSidebar, isMobile } = useSidebar();

  const commonMenu = (
    <>
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
            </SidebarMenu>
        </SidebarFooter>
    </>
  )

  if (isMobile) {
    return (
        <>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Icons.logo className="h-8 w-8 text-primary" />
                    <span className="text-lg font-semibold">CashFlow Canvas</span>
                </div>
            </SidebarHeader>
            {commonMenu}
        </>
    )
  }

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 overflow-hidden">
            <Icons.logo className="h-8 w-8 shrink-0 text-primary" />
            <span className="whitespace-nowrap text-lg font-semibold group-data-[collapsible=icon]:opacity-0 transition-opacity">
                CashFlow Canvas
            </span>
        </div>
      </SidebarHeader>
      
      {commonMenu}
      
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleSidebar}
            className="absolute top-1/2 -right-3 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-foreground shadow-md hover:bg-muted"
          >
            {state === 'expanded' ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <span className="sr-only">{state === 'expanded' ? 'Collapse' : 'Expand'}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          {state === 'expanded' ? 'Collapse' : 'Expand'}
        </TooltipContent>
      </Tooltip>
    </>
  );
}
