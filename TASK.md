# TASK.md

## Текущая задача (2024-06-08)
**Сделать демо-версию админ-дэшборда учёта заказов на металлообработку на моковых данных (без реального Supabase), с красивым UI и тестовыми данными.**

### Подзадачи:
- [🟢] Сгенерировать тестовые данные (отдельный модуль)
- [🟢] Описать базовые типы (Order, Customer, Material и т.д.)
- [🟢] Реализовать layout админ-дэшборда (меню, шапка, навигация)
- [🟢] Реализовать страницу заказов (таблица, фильтры, массовые действия, экспорт-заглушка, вложения-заглушка)
- [🟢] Реализовать страницу заказчиков (таблица, поиск, история заказов)
- [🟢] Реализовать страницу материалов (таблица, приход/списание, остатки)
- [🟢] Реализовать страницу доходов/расходов (отчёты, формы)
- [🟢] Удалить вкладку "Коммерческое предложение" из Sidebar и навигации
- [🟢] Удалить старую страницу коммерческого предложения (/proposal)
- [🟢] Создать независимую страницу коммерческого предложения по маршруту /offer с описанием цены и обоснованием
- [🟢] Реализовать страницу настроек (стоимости, параметры)
- [🟢] Обновить README.md (структура, запуск, демо-режим)
- [🟢] Реализовать форму создания нового заказа в модальном окне по кнопке «Новый заказ» согласно ТЗ (поля, автоматический расчёт, статусы).
- [🟢] Добавить стилизацию UI компонентов по всему приложению — мягкие тени, отступы, плавные переходы, обводки и шрифты.

### План выполнения:
- [🟢] Создать компонент `OrderForm` в директории `src/features/order`.
- [🟢] Реализовать модальное окно (`Sheet` или `Dialog`) для открытия формы по кнопке «Новый заказ» на странице заказов.
- [🟢] Добавить в форму поля: выбор заказчика, перечень деталей (наименование, цена, количество), выбор материала, опции сварки и покраски, статус заказа и оплаты.
- [🟢] Реализовать логику автоматического расчёта общей суммы.
- [🟢] Обработчик отправки формы — mock-сохранение (console.log или обновление состояния).
- [🟢] Стилизовать форму и добавить эффекты (тени, отступы, плавные переходы) по стилевым гайдам.

## Обнаружено в ходе работы
- Необходимо перенести mockData.ts и types.ts в директорию src/shared/ 

## UI Enhancement Tasks

### Button and Component Redesign 🟢 Completed
- [x] Install react-icons package
- [x] Redesign button component with transitions and better styling
- [x] Add icons to buttons where appropriate
- [x] Enhance visual style of all UI components:
  - [x] Add smooth transitions
  - [x] Improve shadows and elevations
  - [x] Refine padding and spacing
  - [x] Update border radiuses
  - [x] Enhance typography and font weights
- [x] Create UI samples page at `/ui-samples` to showcase components

## Previous Tasks

### Remove Commercial Proposal Tab and Create Independent Page 🟢 Completed
- [x] Remove "Коммерческое предложение" tab from sidebar navigation
- [x] Delete `/proposal` route and associated files
- [x] Create independent commercial proposal at `/offer` route
- [x] Add price and justification (600,000₽, 1 month timeframe)

### Create New Order Form 🟢 Completed
- [x] Add "Новый заказ" button
- [x] Implement modal dialog for order creation
- [x] Add all necessary fields for order creation
- [x] Implement automatic calculations
- [x] Apply proper styling to the form 