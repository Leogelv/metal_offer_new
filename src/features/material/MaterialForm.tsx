"use client";

import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../../../components/ui/sheet';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Plus, Layers, Save, X } from 'lucide-react';

export default function MaterialForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [thickness, setThickness] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [markup, setMarkup] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMaterial = {
      name,
      thickness: parseFloat(thickness),
      stock: parseFloat(stock),
      price: parseFloat(price),
      markup: parseFloat(markup),
    };
    console.log('Создан новый материал:', newMaterial);
    setOpen(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="mb-4" onClick={() => setOpen(true)}>
            <Plus className="h-4 w-4 mr-2" /> Новый материал
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="max-w-sm sm:max-w-md p-0 overflow-y-auto">
          <SheetHeader className="px-4 py-3 border-b">
            <SheetTitle className="text-xl font-medium">Новый материал</SheetTitle>
          </SheetHeader>
          
          <div className="px-4 py-6 space-y-6">
            {/* Material Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-gray-500" />
                <div className="font-medium">Информация о материале</div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Наименование материала</label>
                  <Input
                    placeholder="Сталь 45, Алюминий и т.д."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Толщина (мм)</label>
                  <Input
                    type="number"
                    placeholder="0.0"
                    step="0.1"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Начальный остаток</label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Цена закупки (₽)</label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="h-10 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Наценка (%)</label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={markup}
                    onChange={(e) => setMarkup(e.target.value)}
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