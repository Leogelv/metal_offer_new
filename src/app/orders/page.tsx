import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { orders } from "../../shared/mockData";
import OrderForm from "../../features/order/OrderForm";
import { Package, Plus, Filter, FileDown, Search } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function OrdersPage() {
  // Функция для отображения статуса заказа
  const getStatusBadge = (status: string) => {
    if (status === 'completed') {
      return <Badge className="bg-green-500 hover:bg-green-600">Выполнен</Badge>;
    }
    return <Badge variant="outline">Не выполнен</Badge>;
  };

  // Функция для отображения статуса оплаты
  const getPaymentBadge = (payment: string) => {
    if (payment === 'paid') {
      return <Badge className="bg-blue-500 hover:bg-blue-600">Оплачен</Badge>;
    } else if (payment === 'debt') {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Долг</Badge>;
    }
    return <Badge variant="outline">Не оплачен</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Заказы</h1>
        </div>
        <OrderForm />
      </div>

      <Card className="card-interactive">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Все заказы</CardTitle>
              <CardDescription>
                Управление заказами на металлообработку
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск..."
                  className="pl-8 w-[250px] h-9"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <FileDown className="h-4 w-4 mr-2" />
                Экспорт
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Заказчик</TableHead>
                <TableHead>Детали</TableHead>
                <TableHead>Материал</TableHead>
                <TableHead>Сварка</TableHead>
                <TableHead>Покраска</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Оплата</TableHead>
                <TableHead>Дата</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="hover-scale">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerId}</TableCell>
                  <TableCell>
                    {order.items.map((item) => (
                      <div key={item.name} className="flex items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">x{item.quantity}</span>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>{order.material === 'own' ? 'Свой' : 'Клиента'}</TableCell>
                  <TableCell>{order.welding ? 'Да' : 'Нет'}</TableCell>
                  <TableCell>{order.painting ? 'Да' : 'Нет'}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{getPaymentBadge(order.payment)}</TableCell>
                  <TableCell className="text-muted-foreground">{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
} 