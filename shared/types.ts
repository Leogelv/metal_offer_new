export type Customer = {
  id: string;
  name: string;
  contact: string;
  history: string[]; // order ids
};

export type Material = {
  id: string;
  name: string;
  thickness: number;
  stock: number;
  price: number;
  markup: number;
};

export type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  customerId: string;
  items: OrderItem[];
  material: 'own' | 'client';
  welding: boolean;
  painting: boolean;
  status: 'completed' | 'not_completed';
  payment: 'paid' | 'not_paid' | 'debt';
  comment: string;
  attachments: string[]; // file urls or names
  date: string; // ISO
};

export type IncomeExpense = {
  id: string;
  type: 'income' | 'expense';
  orderId: string | null;
  amount: number;
  date: string;
  comment: string;
}; 