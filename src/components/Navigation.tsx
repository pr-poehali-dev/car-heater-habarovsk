import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import PhoneLink from '@/components/PhoneLink';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
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
          <a 
            href="https://wa.me/79940645474" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).ym) {
                (window as any).ym(101026698, 'reachGoal', 'whatsapp_header');
              }
            }}
          >
            <Button variant="outline" size="icon" className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0">
              <Icon name="MessageCircle" size={18} />
            </Button>
          </a>
          <a 
            href="https://t.me/+79940645474" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).ym) {
                (window as any).ym(101026698, 'reachGoal', 'telegram_header');
              }
            }}
          >
            <Button variant="outline" size="icon" className="bg-[#0088cc] hover:bg-[#0077b5] text-white border-0">
              <Icon name="Send" size={18} />
            </Button>
          </a>
          <PhoneLink location="navigation_main">
            <Button className="gap-2">
              <Icon name="Phone" size={18} />
              <PhoneLink location="navigation_main" className="hidden md:inline" />
            </Button>
          </PhoneLink>
          <a 
            href="tel:446070" 
            className="hidden lg:block"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).ym) {
                (window as any).ym(101026698, 'reachGoal', 'phone_header');
              }
            }}
          >
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
              <a 
                href="tel:446070" 
                className="flex-1"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).ym) {
                    (window as any).ym(101026698, 'reachGoal', 'phone_mobile');
                  }
                }}
              >
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
  );
}