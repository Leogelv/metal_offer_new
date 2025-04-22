"use client";

import React from 'react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { cn } from '../../src/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn('flex h-16 items-center border-b bg-white px-6', className)}>
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Система учёта заказов на металлообработку</h1>
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