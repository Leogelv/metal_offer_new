"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { cn } from '../../src/lib/utils';
import { Factory } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

// Маппинг заголовков страниц по путям
const pageTitles: Record<string, string> = {
  '/orders': 'Заказы',
  '/customers': 'Заказчики',
  '/materials': 'Материалы',
  '/finances': 'Финансы',
  '/settings': 'Настройки',
  '/offer': 'Коммерческое предложение',
  '/': 'Главная',
};

export function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const currentPageTitle = pageTitles[pathname] || 'Система учёта заказов';

  return (
    <header className={cn('flex h-16 items-center border-b bg-white px-6', className)}>
      <div className="flex items-center gap-2 mr-6">
        <Factory className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">Metallorg</span>
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold">{currentPageTitle}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                <Avatar>
                  <AvatarFallback>ИП</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Иван Петрович</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Профиль</DropdownMenuItem>
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Выйти</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
} 