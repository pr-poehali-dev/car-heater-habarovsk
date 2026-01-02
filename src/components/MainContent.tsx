import { useState } from 'react';
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
    title: 'Прикуривание 12-24В',
    description: 'Прикурим легковой и грузовой транспорт',
    price: 'от 400₽',
    icon: 'Battery'
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
    title: 'УАЗ Буханка',
    temp: '-38°C',
    time: '30 минут',
    location: 'Центральный р-н',
    image: 'https://cdn.poehali.dev/files/IMG_20241216_123153.jpg'
  },
  {
    title: 'Грузовик FAW',
    temp: '-42°C',
    time: '40 минут',
    location: 'Индустриальный р-н',
    image: 'https://cdn.poehali.dev/files/IMG_20251212_082640.jpg'
  },
  {
    title: 'Легковой автомобиль',
    temp: '-35°C',
    time: '25 минут',
    location: 'Железнодорожный р-н',
    image: 'https://cdn.poehali.dev/files/IMG_20241219_161244.jpg'
  },
  {
    title: 'Грузовик Mitsubishi',
    temp: '-40°C',
    time: '35 минут',
    location: 'Краснофлотский р-н',
    image: 'https://cdn.poehali.dev/files/IMG_20241223_100133.jpg'
  }
];

const districts = [
  { name: 'Центральный', time: '15-20 мин' },
  { name: 'Железнодорожный', time: '20-25 мин' },
  { name: 'Индустриальный', time: '25-30 мин' },
  { name: 'Краснофлотский', time: '20-30 мин' }
];

const faqItems = [
  {
    question: 'Сколько времени занимает отогрев автомобиля?',
    answer: 'В среднем отогрев двигателя занимает от 15 до 30 минут в зависимости от температуры воздуха и состояния автомобиля. При температуре -35°C стандартный отогрев займёт около 20-25 минут.'
  },
  {
    question: 'В какую погоду вы работаете?',
    answer: 'Мы работаем в любую погоду, даже при температуре до -45°C. Используем профессиональное оборудование, которое эффективно работает в экстремальных условиях хабаровских морозов.'
  },
  {
    question: 'Сколько стоит вызов мастера для отогрева?',
    answer: 'Прикуривание автомобиля от 400₽, отогрев двигателя от 600₽, экспресс-отогрев от 800₽, полный отогрев всех систем от 1500₽. Выезд в пределах города включён в стоимость. Работаем с легковыми (12В) и грузовыми (24В) автомобилями.'
  },
  {
    question: 'Можно ли прикурить грузовой автомобиль?',
    answer: 'Да, мы прикуриваем как легковые автомобили (12 вольт), так и грузовой транспорт (24 вольта). Используем профессиональное оборудование с мощными пусковыми устройствами, безопасными для любого типа транспорта.'
  },
  {
    question: 'Как быстро вы приедете?',
    answer: 'Среднее время приезда по Хабаровску составляет 15-30 минут. В Центральном районе приедем за 15-20 минут, в отдалённые районы — за 25-30 минут. Работаем круглосуточно без выходных.'
  },
  {
    question: 'Безопасно ли отогревать машину в мороз?',
    answer: 'Да, профессиональный отогрев полностью безопасен для автомобиля. Мы используем специализированное оборудование и следуем технологии постепенного прогрева, что исключает повреждение двигателя и электроники.'
  },
  {
    question: 'Какие районы Хабаровска вы обслуживаете?',
    answer: 'Мы работаем во всех районах Хабаровска: Центральный, Железнодорожный, Индустриальный и Краснофлотский. Также выезжаем в пригород и за пределы города по договорённости.'
  }
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
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

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы об отогреве автомобилей в Хабаровске
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader 
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg pr-4">{question}</CardTitle>
          <Icon 
            name={isOpen ? "ChevronUp" : "ChevronDown"} 
            size={24} 
            className="text-primary flex-shrink-0"
          />
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </CardContent>
      )}
    </Card>
  );
}