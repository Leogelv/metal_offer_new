"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../src/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

const navItems: NavItem[] = [
  { title: 'Заказы', href: '/orders' },
  { title: 'Заказчики', href: '/customers' },
  { title: 'Материалы', href: '/materials' },
  { title: 'Финансы', href: '/finances' },
  { title: 'Настройки', href: '/settings' },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Открыть меню</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col space-y-6 py-4">
            <div className="px-3 py-2 text-xl font-bold">
              Металлообработка
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md',
                    pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop */}
      <div
        className={cn(
          'hidden lg:flex lg:flex-col h-screen w-64 border-r bg-white',
          className
        )}
      >
        <div className="flex flex-col space-y-6 py-4">
          <div className="px-6 py-2 text-xl font-bold">
            Металлообработка
          </div>
          <div className="space-y-1 px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-md',
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 