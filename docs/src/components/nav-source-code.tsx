'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { FaGithub } from 'react-icons/fa';

export function NavSourceCode() {
  const { open } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <a
              href="https://github.com/Yuefii/nusantarakita"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <SidebarMenuButton
                size="lg"
                className="bg-sidebar-primary hover:bg-sidebar-primary/80 active:bg-sidebar-primary/80 cursor-pointer text-white hover:text-white"
              >
                <div className="flex flex-1 items-center justify-center gap-3 text-center text-white">
                  <span className="truncate text-2xl font-medium">
                    <FaGithub />
                  </span>
                  <span
                    className={cn(
                      'truncate text-sm transition-all',
                      !open && 'hidden',
                    )}
                  >
                   CONTRIBUTING 
                  </span>
                </div>
              </SidebarMenuButton>
            </a>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
