import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { incomeExpenses } from "../../shared/mockData";
import { IncomeExpense } from "../../shared/types";

export default function FinancesPage() {
  // Рассчитываем общую сумму доходов и расходов
  const totalIncome = incomeExpenses
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);
  
  const totalExpense = incomeExpenses
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);
  
  const balance = totalIncome - totalExpense;
  
  // Функция для отображения типа операции
  const getTypeBadge = (type: string) => {
    if (type === 'income') {
      return <Badge className="bg-green-500 hover:bg-green-600">Доход</Badge>;
    }
    return <Badge className="bg-red-500 hover:bg-red-600">Расход</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Финансы</h1>
        <Button className="bg-blue-500 hover:bg-blue-600">
          Новая операция
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Всего доходов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{totalIncome} ₽</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Всего расходов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalExpense} ₽</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Баланс</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {balance} ₽
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Все операции</TabsTrigger>
          <TabsTrigger value="income">Доходы</TabsTrigger>
          <TabsTrigger value="expense">Расходы</TabsTrigger>
          <TabsTrigger value="report">Отчёты</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Финансовые операции</CardTitle>
              <CardDescription>
                Все доходы и расходы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead>Заказ</TableHead>
                    <TableHead>Сумма</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Комментарий</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incomeExpenses.map((item: IncomeExpense) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{getTypeBadge(item.type)}</TableCell>
                      <TableCell>{item.orderId || '-'}</TableCell>
                      <TableCell className={item.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                        {item.type === 'income' ? '+' : '-'}{item.amount} ₽
                      </TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.comment}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="income">
          <Card>
            <CardHeader>
              <CardTitle>Добавить доход</CardTitle>
              <CardDescription>
                Регистрация нового дохода
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сумма</label>
                    <Input type="number" placeholder="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Заказ (опционально)</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Выберите заказ</option>
                      <option value="o1">Заказ #o1</option>
                      <option value="o2">Заказ #o2</option>
                      <option value="o3">Заказ #o3</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дата</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Input type="text" placeholder="Комментарий к доходу" />
                  </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600">
                  Добавить доход
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expense">
          <Card>
            <CardHeader>
              <CardTitle>Добавить расход</CardTitle>
              <CardDescription>
                Регистрация нового расхода
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сумма</label>
                    <Input type="number" placeholder="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Категория</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="materials">Материалы</option>
                      <option value="rent">Аренда</option>
                      <option value="salary">Зарплата</option>
                      <option value="utilities">Коммунальные платежи</option>
                      <option value="other">Прочее</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дата</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Input type="text" placeholder="Комментарий к расходу" />
                  </div>
                </div>
                <Button className="bg-red-500 hover:bg-red-600">
                  Добавить расход
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="report">
          <Card>
            <CardHeader>
              <CardTitle>Финансовые отчёты</CardTitle>
              <CardDescription>
                Формирование отчётов за период
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Начало периода</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Конец периода</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Тип отчёта</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="summary">Сводный</option>
                      <option value="by-customer">По заказчикам</option>
                      <option value="by-category">По категориям</option>
                    </select>
                  </div>
                </div>
                <Button>Сформировать отчёт</Button>

                <div className="mt-8 p-4 bg-gray-100 rounded-md text-center">
                  <p className="text-gray-600">Здесь будет отображён сформированный отчёт</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">Экспорт в Excel</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
} 