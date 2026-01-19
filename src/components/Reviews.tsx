import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BACKEND_URL = 'https://functions.poehali.dev/e1cf7d24-e540-4d8b-ba3a-95f14f31b711';

const Reviews = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dbReviews, setDbReviews] = useState([]);

  useEffect(() => {
    fetch(BACKEND_URL)
      .then(res => res.json())
      .then(data => setDbReviews(data))
      .catch(err => console.error('Ошибка загрузки отзывов:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: name,
          rating: rating,
          text: reviewText
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Спасибо за отзыв!",
          description: "Ваш отзыв отправлен и будет опубликован после модерации.",
        });
        setShowForm(false);
        setName('');
        setReviewText('');
        setRating(5);
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить отзыв",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить отзыв. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const allReviews = dbReviews;

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
          {allReviews.map((review) => (
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
          <p className="text-sm text-muted-foreground mb-6">
            ⭐ Средняя оценка: 5.0 из 5 на основе реальных отзывов с Авито
          </p>
          
          {!showForm ? (
            <Button 
              onClick={() => setShowForm(true)}
              size="lg"
              className="gap-2"
            >
              <Star className="w-5 h-5" />
              Оставить отзыв
            </Button>
          ) : (
            <Card className="max-w-2xl mx-auto mt-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Напишите ваш отзыв</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Оценка</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                    <Textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Расскажите о вашем опыте..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1" disabled={isSubmitting}>
                      {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      disabled={isSubmitting}
                    >
                      Отмена
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;