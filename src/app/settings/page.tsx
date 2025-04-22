import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Настройки</h1>
        <Button className="bg-blue-500 hover:bg-blue-600">
          Сохранить изменения
        </Button>
      </div>

      <Tabs defaultValue="prices" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="prices">Цены и тарифы</TabsTrigger>
          <TabsTrigger value="company">Данные компании</TabsTrigger>
          <TabsTrigger value="system">Системные настройки</TabsTrigger>
        </TabsList>
        
        <TabsContent value="prices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Стоимость работ</CardTitle>
                <CardDescription>
                  Базовые цены на выполнение работ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Базовая стоимость резки (₽ за погонный метр)
                      </label>
                      <Input type="number" min="0" placeholder="0" defaultValue="100" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Стоимость сварки (₽ за соединение)
                      </label>
                      <Input type="number" min="0" placeholder="0" defaultValue="200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Стоимость покраски (₽ за кв. метр)
                      </label>
                      <Input type="number" min="0" placeholder="0" defaultValue="300" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Стоимость гибки (₽ за сгиб)
                      </label>
                      <Input type="number" min="0" placeholder="0" defaultValue="150" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Наценки</CardTitle>
                <CardDescription>
                  Настройка наценок на материалы и услуги
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Базовая наценка на материалы (%)
                      </label>
                      <Input type="number" min="0" max="100" placeholder="0" defaultValue="20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Наценка на срочные заказы (%)
                      </label>
                      <Input type="number" min="0" max="100" placeholder="0" defaultValue="30" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Скидка при большом объеме (%)
                      </label>
                      <Input type="number" min="0" max="100" placeholder="0" defaultValue="10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Минимальная стоимость заказа (₽)
                      </label>
                      <Input type="number" min="0" placeholder="0" defaultValue="1000" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>Данные компании</CardTitle>
              <CardDescription>
                Информация о вашей компании для документов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Название компании</label>
                    <Input defaultValue="ООО Металлообработка" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">ИНН</label>
                    <Input defaultValue="7701234567" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">КПП</label>
                    <Input defaultValue="770101001" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">ОГРН</label>
                    <Input defaultValue="1234567890123" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Юридический адрес</label>
                    <Input defaultValue="г. Москва, ул. Примерная, д. 123" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Фактический адрес</label>
                    <Input defaultValue="г. Москва, ул. Примерная, д. 123" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input defaultValue="+7 (495) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="info@metall-obrabotka.ru" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Банковские реквизиты</label>
                    <textarea
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      defaultValue="р/с 40702810123450000123 в АО Банк, БИК 044525123, к/с 30101810400000000123"
                    ></textarea>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Логотип</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-20 border rounded flex items-center justify-center bg-gray-50">
                      <span className="text-sm text-gray-500">Логотип</span>
                    </div>
                    <Button variant="outline">Загрузить</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Общие настройки</CardTitle>
                <CardDescription>
                  Базовые параметры системы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4" defaultChecked />
                      <span>Отправлять уведомления о новых заказах</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4" defaultChecked />
                      <span>Уведомлять о низком остатке материалов</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Автоматически создавать отчет в конце месяца</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Порог низкого остатка материалов (%)</label>
                    <Input type="number" min="0" max="100" defaultValue="20" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Пользователи и доступ</CardTitle>
                <CardDescription>
                  Управление доступом к системе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Иван Петрович</h4>
                        <p className="text-sm text-gray-500">Администратор</p>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Мария Сидорова</h4>
                        <p className="text-sm text-gray-500">Менеджер</p>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                  </div>
                  <Button className="w-full">
                    Добавить пользователя
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
} 