import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export const metadata = {
  title: 'Коммерческое предложение',
  description: 'Полноценная разработка демо-версии админ-дэшборда учёта заказов на металлообработку за 1 месяц',
};

export default function OfferPage() {
  return (
    <div className="flex justify-center items-start py-10 px-4 bg-gray-50">
      <Card className="max-w-3xl w-full">
        <CardHeader>
          <CardTitle>Коммерческое предложение</CardTitle>
          <CardDescription>
            Полноценная разработка демо-версии админ-дэшборда учёта заказов на металлообработку
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Уважаемые партнёры,
          </p>
          <p>
            Мы предлагаем комплексную разработку вашего приложения с учётом всех требований ТЗ:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Анализ требований и проработка архитектуры системы</li>
            <li>Frontend на React/TypeScript и Next.js с использованием shadcn/ui</li>
            <li>Backend на Supabase: БД PostgreSQL, аутентификация, storage</li>
            <li>Адаптивный и современный UI с мягкими тенями, плавными переходами и оптимальными отступами</li>
            <li>Интеграция mockData для тестового режима без реального подключения к Supabase</li>
            <li>Развёртывание на Vercel с автоматическими CI/CD процессами</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6">Стоимость и сроки</h2>
          <p>
            Стоимость всей работы: <span className="font-bold text-3xl">600 000 ₽</span><br />
            Срок реализации: <span className="font-bold">1 месяц</span>
          </p>
          <h2 className="text-2xl font-semibold mt-6">Почему мы?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Авторитет:</strong> Наша команда — эксперты в Next.js и Supabase.</li>
            <li><strong>Социальное доказательство:</strong> Уже реализовано 10+ проектов в сфере производства.</li>
            <li><strong>Ограниченное предложение:</strong> Специальная цена действует до конца месяца.</li>
            <li><strong>Взаимность:</strong> Бесплатная поддержка и консультации в течение 2 недель.</li>
            <li><strong>Симпатия:</strong> Индивидуальный подход и прозрачность на каждом этапе.</li>
            <li><strong>Обязательства:</strong> Соблюдение сроков и качества согласно договорённостям.</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button asChild>
            <a href="mailto:contact@yourcompany.ru" className="w-full text-center">Связаться с нами</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 