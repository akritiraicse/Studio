'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Recycle,
  LayoutGrid,
  UserCircle,
  MessageCircle,
  Sparkles,
  LogOut,
} from 'lucide-react';

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { users } from '@/lib/data';

const currentUser = users[0];

export function MainSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Browse Skills', icon: LayoutGrid },
    { href: '/profile', label: 'My Profile', icon: UserCircle },
    { href: '/messages', label: 'Messages', icon: MessageCircle },
    { href: '/recommendations', label: 'AI Recommendations', icon: Sparkles },
  ];

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Recycle className="w-7 h-7 text-primary" />
            <span className="text-primary group-data-[collapsible=icon]:hidden">SkillSwap</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-1" />
        <SidebarGroup>
          <div className="flex items-center gap-3">
             <Avatar className="h-9 w-9">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
                <span className="font-medium truncate">{currentUser.name}</span>
                <span className="text-xs text-muted-foreground truncate">{currentUser.location}</span>
            </div>
            <LogOut className="ml-auto text-muted-foreground hover:text-foreground cursor-pointer group-data-[collapsible=icon]:hidden" size={20} />
          </div>
        </SidebarGroup>
      </SidebarFooter>
    </>
  );
}
