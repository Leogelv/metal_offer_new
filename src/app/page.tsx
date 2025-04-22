import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

export default function Home() {
  // Редирект на страницу заказов при загрузке главной страницы
  redirect('/orders');
}
