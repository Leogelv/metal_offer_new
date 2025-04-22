import { redirect } from 'next/navigation';

export default function Home() {
  // Редирект на страницу заказов при загрузке главной страницы
  redirect('/orders');
}
