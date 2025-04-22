import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { materials } from "../../shared/mockData";
import { Material } from "../../shared/types";

export default function MaterialsPage() {
  // Функция для отображения статуса остатка
  const getStockBadge = (stock: number) => {
    if (stock > 100) {
      return <Badge className="bg-green-500 hover:bg-green-600">В наличии</Badge>;
    } else if (stock > 20) {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Заканчивается</Badge>;
    }
    return <Badge className="bg-red-500 hover:bg-red-600">Мало</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Материалы</h1>
        <Button className="bg-blue-500 hover:bg-blue-600">
          Новый материал
        </Button>
      </div>

      <Tabs defaultValue="materials" className="w-full mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="materials">Материалы</TabsTrigger>
          <TabsTrigger value="add-stock">Приход материала</TabsTrigger>
          <TabsTrigger value="remove-stock">Списание материала</TabsTrigger>
        </TabsList>
        
        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Все материалы</CardTitle>
              <CardDescription>
                Управление складскими запасами материалов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Толщина (мм)</TableHead>
                    <TableHead>Остаток</TableHead>
                    <TableHead>Цена закупки</TableHead>
                    <TableHead>Наценка (%)</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materials.map((material: Material) => (
                    <TableRow key={material.id}>
                      <TableCell>{material.id}</TableCell>
                      <TableCell>{material.name}</TableCell>
                      <TableCell>{material.thickness}</TableCell>
                      <TableCell>{material.stock}</TableCell>
                      <TableCell>{material.price} ₽</TableCell>
                      <TableCell>{material.markup}%</TableCell>
                      <TableCell>{getStockBadge(material.stock)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Изменить</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="add-stock">
          <Card>
            <CardHeader>
              <CardTitle>Добавление материала на склад</CardTitle>
              <CardDescription>
                Регистрация прихода нового материала
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Материал</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Выберите материал</option>
                      {materials.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.name} ({material.thickness} мм)
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Количество</label>
                    <Input type="number" placeholder="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Цена закупки</label>
                    <Input type="number" placeholder="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дата прихода</label>
                    <Input type="date" />
                  </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600">
                  Добавить на склад
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="remove-stock">
          <Card>
            <CardHeader>
              <CardTitle>Списание материала</CardTitle>
              <CardDescription>
                Списание материала со склада
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Материал</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Выберите материал</option>
                      {materials.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.name} ({material.thickness} мм) - Остаток: {material.stock}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Количество для списания</label>
                    <Input type="number" placeholder="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Причина списания</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="order">Использование в заказе</option>
                      <option value="defect">Брак</option>
                      <option value="other">Иное</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Input type="text" placeholder="Причина списания" />
                  </div>
                </div>
                <Button className="bg-red-500 hover:bg-red-600">
                  Списать со склада
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
} 