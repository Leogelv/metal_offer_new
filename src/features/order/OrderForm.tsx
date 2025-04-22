"use client";

import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '../../../components/ui/sheet';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { customers } from '../../shared/mockData';
import { OrderItem } from '../../shared/types';
import { Plus, User, Package, Wrench, PaintBucket, Save, X, DollarSign } from 'lucide-react';

export default function OrderForm() {
  const [open, setOpen] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [items, setItems] = useState<OrderItem[]>([{ name: '', price: 0, quantity: 1 }]);
  const [material, setMaterial] = useState<'own' | 'client'>('own');
  const [welding, setWelding] = useState(false);
  const [painting, setPainting] = useState(false);
  const [status, setStatus] = useState<'completed' | 'not_completed'>('not_completed');
  const [payment, setPayment] = useState<'paid' | 'not_paid' | 'debt'>('not_paid');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [comment, setComment] = useState('');

  const handleAddItem = () => setItems([...items, { name: '', price: 0, quantity: 1 }]);

  const handleItemChange = (index: number, field: keyof OrderItem, value: string) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: field === 'name' ? value : Number(value),
    };
    setItems(newItems);
  };

  const computeTotal = () => {
    const partsTotal = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    const weldingCost = welding ? 1000 : 0;
    const paintingCost = painting ? 500 : 0;
    return partsTotal + weldingCost + paintingCost;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = {
      customerId,
      items,
      material,
      welding,
      painting,
      status,
      payment,
      date,
      comment,
      total: computeTotal(),
    };
    console.log('Создан новый заказ:', newOrder);
    setOpen(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="mb-4" onClick={() => setOpen(true)}>
            <Plus className="h-4 w-4 mr-2" /> Новый заказ
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="max-w-sm sm:max-w-md p-0 overflow-y-auto">
          <SheetHeader className="px-4 py-3 border-b">
            <SheetTitle className="text-xl font-medium">Новый заказ</SheetTitle>
          </SheetHeader>
          
          <div className="px-4 py-6 space-y-6">
            {/* Customer */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-500" />
                <div className="font-medium">Заказчик</div>
              </div>
              <select
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="" disabled>Выберите заказчика</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            
            {/* Items */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-gray-500" />
                <div className="font-medium">Перечень деталей</div>
              </div>
              
              <div className="space-y-1">
                <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 mb-1 text-gray-500 text-sm">
                  <div>Наименование</div>
                  <div>Цена, ₽</div>
                  <div>Кол-во</div>
                  <div></div>
                </div>
                
                {items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 items-center">
                    <Input
                      placeholder="Название детали"
                      value={item.name}
                      onChange={(e) => handleItemChange(idx, 'name', e.target.value)}
                      className="h-10 border border-gray-300 rounded-lg"
                    />
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.price || ''}
                      onChange={(e) => handleItemChange(idx, 'price', e.target.value)}
                      className="h-10 border border-gray-300 rounded-lg"
                    />
                    <Input
                      type="number"
                      placeholder="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
                      className="h-10 border border-gray-300 rounded-lg"
                    />
                    {idx === items.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddItem}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Material & Options */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-gray-500" />
                  <div className="font-medium">Материал</div>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={material === 'own'}
                      onChange={() => setMaterial('own')}
                      className="h-4 w-4 accent-primary"
                    />
                    <span>Свой</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={material === 'client'}
                      onChange={() => setMaterial('client')}
                      className="h-4 w-4 accent-primary"
                    />
                    <span>Клиента</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="font-medium">Опции</div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={welding}
                      onChange={() => setWelding(!welding)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span>Сварка</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={painting}
                      onChange={() => setPainting(!painting)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span>Покраска</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Date */}
            <div className="space-y-3">
              <div className="font-medium">Дата заказа</div>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-10 border border-gray-300 rounded-lg"
              />
            </div>
            
            {/* Status & Payment */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="font-medium">Статус</div>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="not_completed">Не выполнен</option>
                  <option value="completed">Выполнен</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-gray-500" />
                  <div className="font-medium">Оплата</div>
                </div>
                <select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value as any)}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="not_paid">Не оплачено</option>
                  <option value="debt">Долг</option>
                  <option value="paid">Оплачено</option>
                </select>
              </div>
            </div>
            
            {/* Comment */}
            <div className="space-y-3">
              <div className="font-medium">Комментарий</div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          
          {/* Total and Actions */}
          <div className="mt-4 border-t">
            <div className="px-4 py-3 text-center">
              <div className="text-sm text-gray-500">Итого к оплате:</div>
              <div className="text-2xl font-bold">{computeTotal().toLocaleString()} ₽</div>
            </div>
            
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