import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Calculator, Phone } from 'lucide-react';

const PriceCalculator = () => {
  const [carType, setCarType] = useState('sedan');
  const [temperature, setTemperature] = useState('minus20');
  const [district, setDistrict] = useState('center');

  const calculatePrice = () => {
    let basePrice = 0;

    // Тип авто
    switch (carType) {
      case 'sedan':
        basePrice = 3000;
        break;
      case 'crossover':
        basePrice = 3500;
        break;
      case 'minivan':
        basePrice = 4000;
        break;
      case 'truck':
        basePrice = 5000;
        break;
    }

    // Температура
    switch (temperature) {
      case 'minus20':
        basePrice += 0;
        break;
      case 'minus30':
        basePrice += 500;
        break;
      case 'minus40':
        basePrice += 1000;
        break;
    }

    // Район
    switch (district) {
      case 'center':
        basePrice += 0;
        break;
      case 'near':
        basePrice += 300;
        break;
      case 'far':
        basePrice += 500;
        break;
    }

    return basePrice;
  };

  const price = calculatePrice();

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <Calculator className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Калькулятор стоимости</h2>
          <p className="text-muted-foreground">
            Узнайте примерную стоимость отогрева вашего автомобиля
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Рассчитать стоимость</CardTitle>
            <CardDescription>
              Выберите параметры для расчета стоимости отогрева
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Тип автомобиля */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Тип автомобиля</Label>
              <RadioGroup value={carType} onValueChange={setCarType} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="sedan" id="sedan" />
                  <Label htmlFor="sedan" className="cursor-pointer flex-1">
                    Легковой автомобиль (седан, хэтчбек)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="crossover" id="crossover" />
                  <Label htmlFor="crossover" className="cursor-pointer flex-1">
                    Кроссовер, внедорожник
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="minivan" id="minivan" />
                  <Label htmlFor="minivan" className="cursor-pointer flex-1">
                    Минивэн, микроавтобус
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="truck" id="truck" />
                  <Label htmlFor="truck" className="cursor-pointer flex-1">
                    Грузовой автомобиль
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Температура */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Температура на улице</Label>
              <RadioGroup value={temperature} onValueChange={setTemperature} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="minus20" id="minus20" />
                  <Label htmlFor="minus20" className="cursor-pointer flex-1">
                    До -20°C
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="minus30" id="minus30" />
                  <Label htmlFor="minus30" className="cursor-pointer flex-1">
                    -20°C до -30°C
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="minus40" id="minus40" />
                  <Label htmlFor="minus40" className="cursor-pointer flex-1">
                    Ниже -30°C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Район */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Район Хабаровска</Label>
              <RadioGroup value={district} onValueChange={setDistrict} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="center" id="center" />
                  <Label htmlFor="center" className="cursor-pointer flex-1">
                    Центр города
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="near" id="near" />
                  <Label htmlFor="near" className="cursor-pointer flex-1">
                    Спальные районы
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                  <RadioGroupItem value="far" id="far" />
                  <Label htmlFor="far" className="cursor-pointer flex-1">
                    Окраины города
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Результат */}
            <div className="border-t pt-6">
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Примерная стоимость отогрева:</p>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-4">{price} ₽</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Точная стоимость определяется после осмотра автомобиля
                </p>
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <a href="tel:+79940645474">
                    <Phone className="mr-2 h-5 w-5" />
                    Вызвать специалиста
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;