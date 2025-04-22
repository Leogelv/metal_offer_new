"use client";

import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../../../components/ui/sheet';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Plus, User, Save, X, Phone, Mail, Building2 } from 'lucide-react';

export default function CustomerForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCustomer = {
      name,
      companyName,
      contact: `${phone}, ${email}`,
      address,
    };
    console.log('Создан новый заказчик:', newCustomer);
    setOpen(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="mb-4" onClick={() => setOpen(true)}>
            <Plus className="h-4 w-4 mr-2" /> Новый заказчик
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="max-w-sm sm:max-w-md p-0 overflow-y-auto">
          <SheetHeader className="px-4 py-3 border-b">
            <SheetTitle className="text-xl font-medium">Новый заказчик</SheetTitle>
          </SheetHeader>
          
          <div className="px-4 py-6 space-y-6">
            {/* Customer Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-500" />
                <div className="font-medium">Информация о заказчике</div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">ФИО контактного лица</label>
                  <Input
                    placeholder="Иванов Иван Иванович"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <label className="text-sm text-gray-600">Название компании (если есть)</label>
                  </div>
                  <Input
                    placeholder="ООО 'Компания'"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <label className="text-sm text-gray-600">Телефон</label>
                  </div>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <label className="text-sm text-gray-600">Email</label>
                  </div>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Адрес</label>
                  <Input
                    placeholder="Город, улица, дом"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-4 border-t">
            <div className="grid grid-cols-2 gap-3 p-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <X className="h-4 w-4" />
                <span>Отмена</span>
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
              >
                <Save className="h-4 w-4" />
                <span>Сохранить</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
} 