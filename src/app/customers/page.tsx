import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Input } from "../../../components/ui/input";
import { customers } from "../../shared/mockData";
import { Customer } from "../../shared/types";

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Заказчики</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Новый заказчик
        </button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Поиск</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Поиск по имени, компании" />
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Найти
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Все заказчики</CardTitle>
          <CardDescription>
            База заказчиков для металлообработки
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>ФИО / Название компании</TableHead>
                <TableHead>Контакты</TableHead>
                <TableHead>Количество заказов</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer: Customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.contact}</TableCell>
                  <TableCell>{customer.history.length}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                        Посмотреть
                      </button>
                      <button className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200">
                        Изменить
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
} 