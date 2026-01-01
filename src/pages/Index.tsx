import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "Заявка отправлена! ✅",
      description: "Мы свяжемся с вами в течение 5 минут",
    });
    
    setFormData({
      name: '',
      phone: '',
      address: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Snowflake" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">Отогрев Авто Хабаровск</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#map" className="text-muted-foreground hover:text-primary transition-colors">Зоны</a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
            <a href="https://wa.me/79940645474" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0">
                <Icon name="MessageCircle" size={18} />
              </Button>
            </a>
            <a href="https://t.me/+79940645474" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-[#0088cc] hover:bg-[#0077b5] text-white border-0">
                <Icon name="Send" size={18} />
              </Button>
            </a>
            <a href="tel:+79940645474">
              <Button className="gap-2">
                <Icon name="Phone" size={18} />
                <span className="hidden md:inline">+7 (994) 064-54-74</span>
              </Button>
            </a>
            <a href="tel:446070" className="hidden lg:block">
              <Button variant="outline" className="gap-2">
                <Icon name="Phone" size={18} />
                <span>446070</span>
              </Button>
            </a>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#prices" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Цены
              </a>
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Портфолио
              </a>
              <a 
                href="#map" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Зоны обслуживания
              </a>
              <a 
                href="#contacts" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <a href="tel:446070" className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="Phone" size={18} />
                    446070
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Отогрев авто в Хабаровске
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональный отогрев автомобиля в любую погоду. Приедем за 15-30 минут в любую точку города.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacts">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <Icon name="Phone" size={20} />
                    Вызвать мастера
                  </Button>
                </a>
                <a href="#services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Узнать больше
                  </Button>
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">15-30</div>
                  <div className="text-sm text-muted-foreground">минут приезд</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">работаем</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">-45°C</div>
                  <div className="text-sm text-muted-foreground">работаем в любой мороз</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Отогрев автомобиля" 
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Оставить заявку</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в течение 5 минут
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Адрес</label>
                  <Input 
                    placeholder="Улица, дом"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Комментарий</label>
                  <Textarea 
                    placeholder="Опишите проблему или дополнительную информацию"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div className="font-semibold mb-1">Телефоны</div>
              <a href="tel:+79940645474" className="text-muted-foreground hover:text-primary transition-colors block">
                +7 (994) 064-54-74
              </a>
              <a href="tel:446070" className="text-muted-foreground hover:text-primary transition-colors block mt-1">
                446070
              </a>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <div className="font-semibold mb-1">WhatsApp</div>
              <a href="https://wa.me/79940645474" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Написать
              </a>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0088cc] flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              <div className="font-semibold mb-1">Telegram</div>
              <a href="https://t.me/+79940645474" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Написать
              </a>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div className="font-semibold mb-1">Режим работы</div>
              <div className="text-muted-foreground">Круглосуточно, 24/7</div>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div className="font-semibold mb-1">Город</div>
              <div className="text-muted-foreground">Хабаровск, все районы</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2026 Отогрев Авто Хабаровск. Все права защищены.</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://wa.me/79940645474" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <div className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110">
            <Icon name="MessageCircle" size={26} className="text-white" />
          </div>
        </a>
        <a 
          href="https://t.me/+79940645474" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <div className="w-14 h-14 rounded-full bg-[#0088cc] hover:bg-[#0077b5] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110">
            <Icon name="Send" size={26} className="text-white" />
          </div>
        </a>
        <a 
          href="tel:+79940645474"
          className="group"
        >
          <div className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110">
            <Icon name="Phone" size={26} className="text-white" />
          </div>
        </a>
      </div>
    </div>
  );
}