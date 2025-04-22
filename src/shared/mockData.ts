// src/shared/mockData.ts

import { Order, Customer, Material, IncomeExpense } from './types';

export const customers: Customer[] = [
  {
    id: 'c1',
    name: 'ООО МеталлПрофи',
    contact: '+7 999 123-45-67',
    history: ['o1', 'o2'],
  },
  {
    id: 'c2',
    name: 'ИП Иванов И.И.',
    contact: '+7 912 555-66-77',
    history: ['o3'],
  },
];

export const materials: Material[] = [
  {
    id: 'm1',
    name: 'Сталь 09Г2С',
    thickness: 5,
    stock: 120,
    price: 1500,
    markup: 20,
  },
  {
    id: 'm2',
    name: 'Алюминий АМг5',
    thickness: 3,
    stock: 80,
    price: 2100,
    markup: 15,
  },
];

export const orders: Order[] = [
  {
    id: 'o1',
    customerId: 'c1',
    items: [
      { name: 'Фланец', price: 500, quantity: 10 },
      { name: 'Кронштейн', price: 700, quantity: 5 },
    ],
    material: 'own',
    welding: true,
    painting: false,
    status: 'not_completed',
    payment: 'debt',
    comment: 'Срочно!',
    attachments: [],
    date: '2024-06-01',
  },
  {
    id: 'o2',
    customerId: 'c1',
    items: [
      { name: 'Корпус', price: 1200, quantity: 2 },
    ],
    material: 'client',
    welding: false,
    painting: true,
    status: 'completed',
    payment: 'paid',
    comment: '',
    attachments: [],
    date: '2024-05-20',
  },
  {
    id: 'o3',
    customerId: 'c2',
    items: [
      { name: 'Деталь Х', price: 900, quantity: 7 },
    ],
    material: 'own',
    welding: true,
    painting: true,
    status: 'not_completed',
    payment: 'not_paid',
    comment: 'Покраска в синий',
    attachments: [],
    date: '2024-06-05',
  },
];

export const incomeExpenses: IncomeExpense[] = [
  {
    id: 'ie1',
    type: 'income',
    orderId: 'o1',
    amount: 9500,
    date: '2024-06-01',
    comment: 'Оплата по заказу o1',
  },
  {
    id: 'ie2',
    type: 'expense',
    orderId: null,
    amount: 3000,
    date: '2024-06-02',
    comment: 'Аренда цеха',
  },
  {
    id: 'ie3',
    type: 'expense',
    orderId: 'o1',
    amount: 1200,
    date: '2024-06-01',
    comment: 'Покупка материала',
  },
]; 