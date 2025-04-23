"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Check, Shield, Clock, Users, FileText, Code, Database, Palette, Wrench, Sparkles, BarChart3, Download, Zap, Settings, Rocket } from 'lucide-react';
import { DashboardLayout } from "../../../components/layout/DashboardLayout";

export default function OfferPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-start py-6 px-2">
        <div className="max-w-4xl w-full space-y-8">
          {/* Main Offer Card */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="bg-primary text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Коммерческое предложение</h2>
                  <p className="text-primary-foreground/90 mt-1">Полный цикл разработки специализированного ПО</p>
                </div>
                <div className="hidden md:block">
                  <Rocket className="h-12 w-12" />
                </div>
              </div>
            </div>
            
            <CardContent className="pt-8 pb-6 px-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Полная автоматизация учёта заказов</h3>
                <p className="text-gray-600 leading-relaxed">
                  Предлагаем разработку современного web-приложения для управления всеми аспектами вашего бизнеса по металлообработке — от поступления заказа до анализа финансовых результатов.
                </p>
                
                {/* Key Features */}
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Управление заказами</h4>
                      <p className="text-sm text-gray-600 mt-1">Создание, отслеживание статуса и полная история каждого заказа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">База заказчиков</h4>
                      <p className="text-sm text-gray-600 mt-1">Учёт контактов, истории заказов и аналитика по каждому клиенту</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Учёт материалов</h4>
                      <p className="text-sm text-gray-600 mt-1">Автоматический расчёт остатков, приход/расход, стоимость и наценка</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Финансовая аналитика</h4>
                      <p className="text-sm text-gray-600 mt-1">Детальные отчёты по доходам/расходам с визуализацией</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Технические возможности системы</h3>
                
                <div className="grid grid-cols-1 gap-3 mt-4">
                  <div className="flex items-start gap-4 group">
                    <div className="min-w-6 mt-1">
                      <Check className="h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Комплексная форма создания заказа</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Интуитивно понятный интерфейс с автоматическим расчётом стоимости, учётом сварки, покраски, выбором материала и типа оплаты
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="min-w-6 mt-1">
                      <Check className="h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Детализированная таблица заказов</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Многоуровневая фильтрация, поиск, сортировка, массовое изменение статусов и выгрузка в Excel
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="min-w-6 mt-1">
                      <Check className="h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Автоматизация складского учёта</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Списание материалов при оформлении заказа, контроль остатков, уведомления о низком запасе
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="min-w-6 mt-1">
                      <Check className="h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Система вложений и комментариев</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Возможность прикрепить чертежи, технические задания и добавлять комментарии к заказам
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="min-w-6 mt-1">
                      <Check className="h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Настраиваемая панель управления</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Гибкие пользовательские настройки стоимости операций, наценок и параметров отображения
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="my-10 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Используемый стек технологий</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center text-center p-3 hover:bg-white rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full mb-2">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">React + TypeScript</p>
                    <p className="text-xs text-gray-500">Современный интерфейс</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3 hover:bg-white rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full mb-2">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Supabase + PostgreSQL</p>
                    <p className="text-xs text-gray-500">Надёжное хранение</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3 hover:bg-white rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full mb-2">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Shadcn/UI</p>
                    <p className="text-xs text-gray-500">Премиум дизайн</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3 hover:bg-white rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full mb-2">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Next.js</p>
                    <p className="text-xs text-gray-500">Высокая производительность</p>
                  </div>
                </div>
              </div>

              {/* Credibility Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Не бросаем после сдачи</h3>
                    </div>
                    <p className="text-sm text-gray-600">В отличие от многих, мы не исчезаем после получения оплаты. Гарантируем реальную поддержку, а не обещания по телефону.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Предлагаем улучшения</h3>
                    </div>
                    <p className="text-sm text-gray-600">Не просто выполняем ТЗ, а предлагаем оптимизации и доработки, о которых вы могли не подумать. Мыслим бизнес-логикой.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Download className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Соблюдаем сроки</h3>
                    </div>
                    <p className="text-sm text-gray-600">Никаких &ldquo;почти готово&rdquo; или &ldquo;ещё неделька&rdquo;. Если говорим месяц — значит месяц. Никаких неожиданных доплат в процессе.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Говорим на языке бизнеса</h3>
                    </div>
                    <p className="text-sm text-gray-600">Объясняем всё без &ldquo;программистского жаргона&rdquo;. Ваш отдел сможет освоить систему за 1-2 дня без специальных знаний.</p>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center p-6 bg-gray-50 border-t">
              <a href="https://t.me/sapientweb" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                  Получить предложение по цене
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
} 