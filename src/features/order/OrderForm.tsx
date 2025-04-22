"use client";

import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from '../../../components/ui/sheet';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { customers, materials } from '../../shared/mockData';
import { OrderItem } from '../../shared/types';

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
    (newItems[index] as any)[field] = field === 'name' ? value : Number(value);
    setItems(newItems);
  };

  const computeTotal = () => {
    const sum = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    const weldingCost = welding ? 1000 : 0;
    const paintingCost = painting ? 500 : 0;
    return sum + weldingCost + paintingCost;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = { customerId, items, material, welding, painting, status, payment, date, comment, total: computeTotal() };
    console.log('Создан новый заказ:', newOrder);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)}>Новый заказ</Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-md">
        <SheetHeader>
          <SheetTitle>Новый заказ</SheetTitle>
          <SheetDescription>Заполните форму для создания заказа</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium">Заказчик</label>
            <select
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="block w-full rounded-md border px-3 py-2 shadow-sm focus:ring-primary focus:border-primary transition"
            >
              <option value="" disabled>Выберите заказчика</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium">Детали</label>
            {items.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <Input placeholder="Наименование" value={item.name} onChange={(e) => handleItemChange(idx, 'name', e.target.value)} />
                <Input type="number" placeholder="Цена" value={item.price} onChange={(e) => handleItemChange(idx, 'price', e.target.value)} />
                <Input type="number" placeholder="Кол-во" value={item.quantity} onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)} />
                {idx === items.length - 1 && (
                  <Button variant="outline" size="icon" onClick={handleAddItem}>+</Button>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <div>
              <label className="text-sm">Материал</label>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1"><input type="radio" checked={material === 'own'} value="own" onChange={() => setMaterial('own')} /> Свой</label>
                <label className="flex items-center gap-1"><input type="radio" checked={material === 'client'} value="client" onChange={() => setMaterial('client')} /> Клиента</label>
              </div>
            </div>
            <div className="flex items-center gap-1"><input type="checkbox" checked={welding} onChange={() => setWelding(!welding)} /> <span className="text-sm">Сварка</span></div>
            <div className="flex items-center gap-1"><input type="checkbox" checked={painting} onChange={() => setPainting(!painting)} /> <span className="text-sm">Покраска</span></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm">Статус</label>
              <select value={status} onChange={(e) => setStatus(e.target.value as any)} className="block w-full rounded-md border px-3 py-2 shadow-sm transition">
                <option value="not_completed">Не выполнен</option>
                <option value="completed">Выполнен</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-sm">Оплата</label>
              <select value={payment} onChange={(e) => setPayment(e.target.value as any)} className="block w-full rounded-md border px-3 py-2 shadow-sm transition">
                <option value="not_paid">Не оплачено</option>
                <option value="debt">Долг</option>
                <option value="paid">Оплачено</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Комментарий</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-md border px-3 py-2 shadow-sm transition"
              rows={3}
            />
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-semibold">Итого: {computeTotal()} ₽</span>
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
        <SheetFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Отмена</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
} 