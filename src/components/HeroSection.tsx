import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
                src="https://cdn.poehali.dev/files/IMG_20241230_135322.jpg" 
                alt="Отогрев автомобиля в Хабаровске" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}