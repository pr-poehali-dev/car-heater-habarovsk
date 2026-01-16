import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Игорь',
      rating: 5,
      date: '12.01.2025',
      text: 'Работа выполнена отлично, мастер до конца довел дело, машина завелась, было мало шансов уже начинал расстраиваться, но мастер молодец довёл дело до конца.',
      source: 'Авито'
    },
    {
      id: 2,
      author: 'Александр Сергеевич',
      rating: 5,
      date: '19.01.2024',
      text: 'Запустили замершее неисправное авто на 3 цилиндрах, оживление мертвеца было успешно',
      source: 'Авито'
    },
    {
      id: 3,
      author: 'Максим',
      rating: 5,
      date: '18.12.2023',
      text: 'Алексей выполнил работу на отлично. Позвонил заранее, приехал вовремя, озвучил цену, все сделал на 100 процентов.',
      source: 'Авито'
    },
    {
      id: 4,
      author: 'Кристина Проскокова',
      rating: 5,
      date: '13.12.2023',
      text: 'Алексей отлично выполнил свою работу. Обращались несколько раз. Всегда очень оперативно подъезжал. Спасибо большое!',
      source: 'Авито'
    },
    {
      id: 5,
      author: 'Дмитрий',
      rating: 5,
      date: '24.01.2023',
      text: 'Все супер, случай был сложный. Но машину завел. Рекомендую',
      source: 'Авито'
    },
    {
      id: 6,
      author: 'Андрей',
      rating: 5,
      date: '27.01.2023',
      text: 'Быстро приехал и отогрел автомобиль. Мастер своего дела👍',
      source: 'Авито'
    },
    {
      id: 7,
      author: 'Илья',
      rating: 5,
      date: '14.01.2023',
      text: 'Специалист🤝 Советую',
      source: 'Авито'
    },
    {
      id: 8,
      author: 'Михаил',
      rating: 5,
      date: '01.12.2022',
      text: 'Отлично! Через 30 минут после звонка двигатель был уже запущен! Рекомендую.',
      source: 'Авито'
    },
    {
      id: 9,
      author: 'Мария',
      rating: 5,
      date: '01.12.2022',
      text: 'Спасибо за работу, быстро и качественно',
      source: 'Авито'
    },
    {
      id: 10,
      author: 'Никита',
      rating: 5,
      date: '11.10.2024',
      text: 'Быстро приехал и всё сделал, спасибо',
      source: 'Авито'
    },
    {
      id: 11,
      author: 'Павел',
      rating: 5,
      date: '27.08.2024',
      text: 'Оперативно приехал заменил пробитое колесо, по пути подобрал докатку. Спасибо',
      source: 'Авито'
    },
    {
      id: 12,
      author: 'Токио',
      rating: 5,
      date: '15.12.2023',
      text: 'Лучше уже не будет!',
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