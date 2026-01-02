import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Экспресс отогрев',
    description: 'Быстрый отогрев двигателя за 15-30 минут',
    price: 'от 800₽',
    icon: 'Zap'
  },
  {
    title: 'Полный отогрев',
    description: 'Отогрев всех систем автомобиля',
    price: 'от 1500₽',
    icon: 'Car'
  },
  {
    title: 'Запуск двигателя',
    description: 'Помощь в запуске замёрзшего двигателя',
    price: 'от 600₽',
    icon: 'Power'
  },
  {
    title: 'Выездная служба',
    description: 'Приедем в любую точку города за 30 минут',
    price: 'от 500₽',
    icon: 'MapPin'
  }
];

const portfolio = [
  {
    title: 'Toyota Camry',
    temp: '-35°C',
    time: '25 минут',
    location: 'ул. Ленина'
  },
  {
    title: 'Hyundai Solaris',
    temp: '-40°C',
    time: '30 минут',
    location: 'Индустриальный р-н'
  },
  {
    title: 'Mazda CX-5',
    temp: '-38°C',
    time: '20 минут',
    location: 'Железнодорожный р-н'
  }
];

const districts = [
  { name: 'Центральный', time: '15-20 мин' },
  { name: 'Железнодорожный', time: '20-25 мин' },
  { name: 'Индустриальный', time: '25-30 мин' },
  { name: 'Краснофлотский', time: '20-30 мин' }
];

export default function MainContent() {
  return (
    <>
      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональный отогрев автомобилей любых марок с гарантией качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Зоны обслуживания</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем во всех районах Хабаровска
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {districts.map((district, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="MapPin" size={20} className="text-primary" />
                        </div>
                        <CardTitle className="text-lg">{district.name} район</CardTitle>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {district.time}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    Выезд за город
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Выезжаем в пригород и за пределы города. Стоимость рассчитывается индивидуально.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Icon name="Map" size={64} className="mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-medium">Интерактивная карта зон обслуживания</p>
                  <p className="text-sm mt-2 opacity-90">Визуализация районов Хабаровска</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешных отогревов в экстремальных условиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="Car" size={64} className="text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-2 mt-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Thermometer" size={16} className="text-primary" />
                        <span>Температура: {item.temp}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span>Время работы: {item.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
