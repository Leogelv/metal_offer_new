"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../src/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { 
  Menu, 
  Package, 
  Users, 
  Layers, 
  DollarSign, 
  Settings,
  FileText,
  Factory
} from 'lucide-react';

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { title: 'Заказы', href: '/orders', icon: <Package className="w-5 h-5" /> },
  { title: 'Заказчики', href: '/customers', icon: <Users className="w-5 h-5" /> },
  { title: 'Материалы', href: '/materials', icon: <Layers className="w-5 h-5" /> },
  { title: 'Финансы', href: '/finances', icon: <DollarSign className="w-5 h-5" /> },
  { title: 'Коммерческое', href: '/offer', icon: <FileText className="w-5 h-5" /> },
  { title: 'Настройки', href: '/settings', icon: <Settings className="w-5 h-5" /> },
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
            <Menu className="h-5 w-5" />
            <span className="sr-only">Открыть меню</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col space-y-6 py-4">
            <div className="flex items-center gap-2 px-3 py-2">
              <Factory className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Metallorg</span>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:bg-gray-100',
                    pathname === item.href
                      ? 'bg-gray-100 text-primary shadow-sm'
                      : 'text-gray-700 hover:text-primary'
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop */}
      <div
        className={cn(
          'hidden lg:flex lg:flex-col h-screen w-64 border-r bg-white shadow-sm transition-all duration-300',
          className
        )}
      >
        <div className="flex flex-col space-y-6 py-4">
          <div className="flex items-center gap-2 px-6 py-4 border-b pb-4">
            <Factory className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Metallorg</span>
          </div>
          <div className="space-y-1 px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:bg-gray-100 hover:transform hover:translate-x-1',
                  pathname === item.href
                    ? 'bg-gray-100 text-primary shadow-sm'
                    : 'text-gray-700 hover:text-primary'
                )}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 