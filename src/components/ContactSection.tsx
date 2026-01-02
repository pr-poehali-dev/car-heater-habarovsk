import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

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
    <>
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
    </>
  );
}
