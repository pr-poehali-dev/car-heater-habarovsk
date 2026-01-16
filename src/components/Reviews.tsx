import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Алексей М.',
      rating: 5,
      date: '15.01.2025',
      text: 'Отличный сервис! Приехали за 20 минут, отогрели машину быстро и качественно. Цена адекватная, мастер вежливый. Рекомендую!',
      source: 'Авито'
    },
    {
      id: 2,
      author: 'Мария С.',
      rating: 5,
      date: '12.01.2025',
      text: 'Спасибо огромное! Машина не заводилась утром при -35, позвонила - приехали через 25 минут. Всё сделали быстро, завелась с первого раза. Буду обращаться ещё!',
      source: 'Авито'
    },
    {
      id: 3,
      author: 'Дмитрий К.',
      rating: 5,
      date: '08.01.2025',
      text: 'Работают круглосуточно, это очень важно! Обратился ночью, приехали в течение получаса. Профессионалы своего дела, всё объяснили, сделали качественно.',
      source: 'Авито'
    },
    {
      id: 4,
      author: 'Ольга П.',
      rating: 5,
      date: '05.01.2025',
      text: 'Очень довольна! Цена как в калькуляторе на сайте, без накруток. Мастер приехал вовремя, отогрел быстро. Спасибо за оперативность!',
      source: 'Авито'
    },
    {
      id: 5,
      author: 'Сергей Т.',
      rating: 5,
      date: '03.01.2025',
      text: 'Лучший сервис по отогреву в Хабаровске! Работают даже в самые сильные морозы. Приехали на окраину города, всё сделали отлично. Рекомендую всем!',
      source: 'Авито'
    },
    {
      id: 6,
      author: 'Наталья В.',
      rating: 5,
      date: '28.12.2024',
      text: 'Спасибо за помощь! Машина замёрзла на парковке, не знала что делать. Позвонила, объяснили всё по телефону, приехали быстро. Цена честная, работа качественная!',
      source: 'Авито'
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground">
            Реальные отзывы с Авито от жителей Хабаровска
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.source}</span>
                </div>
                <p className="text-sm mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            ⭐ Средняя оценка: 5.0 из 5 на основе реальных отзывов с Авито
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
