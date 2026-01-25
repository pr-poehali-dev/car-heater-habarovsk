import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import PhoneLink from '@/components/PhoneLink';

export default function ContactSection() {
  return (
    <>
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div className="font-semibold mb-1">Телефоны</div>
              <PhoneLink 
                location="contacts_section"
                className="text-muted-foreground hover:text-primary transition-colors block"
              />
              <a href="tel:446070" className="text-muted-foreground hover:text-primary transition-colors block mt-1">
                446070
              </a>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <div className="font-semibold mb-1">WhatsApp</div>
              <a 
                href="https://wa.me/79940645474" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Написать
              </a>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0088cc] flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              <div className="font-semibold mb-1">Telegram</div>
              <a 
                href="https://t.me/+79940645474" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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
          <div className="mt-8 text-center">
            <a 
              href="https://yandex.ru/maps/?rtext=~48.480223,135.071917" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Navigation" size={20} />
                Построить маршрут на Яндекс.Картах
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2026 Отогрев Авто Хабаровск. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
