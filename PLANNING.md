# PLANNING.md

## Архитектура
- **Frontend:** React + TypeScript, UI — shadcn/ui
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **Менеджер пакетов:** pnpm
- **Структура:**
  - `src/app` — страницы и роутинг
  - `src/entities` — бизнес-сущности (Order, Customer, Material, Income, Expense)
  - `src/features` — фичи (OrderForm, CustomerTable, MaterialStock и т.д.)
  - `src/shared` — утилиты, типы, компоненты общего назначения
  - `src/widgets` — сложные виджеты (Таблица заказов, Финансовый отчёт)
  - `src/processes` — бизнес-процессы (оформление заказа, списание материалов)

## Цели
- Удобный учёт заказов, материалов, клиентов, финансов
- Автоматизация расчётов и отчётов
- Массовые действия, экспорт, вложения файлов
- Гибкая настройка цен и параметров

## Стиль
- Чистый, модульный код (SOLID, DRY, KISS)
- PEP8/black для Python, Prettier/ESLint для TypeScript
- Документирование сложных мест, актуальный README
- Лимит 500 строк на файл

## Ограничения
- Только Supabase как БД и storage
- Только shadcn/ui для UI
- Не использовать сторонние UI-киты
- Не превышать лимит строк в файлах
- Логирование только по запросу 