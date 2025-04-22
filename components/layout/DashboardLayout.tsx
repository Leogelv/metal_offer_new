"use client";

import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
        <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Система учёта заказов на металлообработку
        </footer>
      </div>
    </div>
  );
} 