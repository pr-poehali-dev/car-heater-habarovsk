import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Check, X, Trash2, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ADMIN_API = 'https://functions.poehali.dev/85db16c3-d845-47f3-9572-2cc8dfd078c0';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  is_approved: boolean;
}

export default function AdminReviews() {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const loadReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(ADMIN_API);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить отзывы",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleApprove = async (id: number) => {
    try {
      const response = await fetch(ADMIN_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'approve' })
      });

      if (response.ok) {
        toast({ title: "Успех", description: "Отзыв одобрен" });
        loadReviews();
      }
    } catch (error) {
      toast({ title: "Ошибка", description: "Не удалось одобрить отзыв", variant: "destructive" });
    }
  };

  const handleReject = async (id: number) => {
    try {
      const response = await fetch(ADMIN_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'reject' })
      });

      if (response.ok) {
        toast({ title: "Успех", description: "Отзыв отклонен" });
        loadReviews();
      }
    } catch (error) {
      toast({ title: "Ошибка", description: "Не удалось отклонить отзыв", variant: "destructive" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить этот отзыв навсегда?')) return;

    try {
      const response = await fetch(ADMIN_API, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (response.ok) {
        toast({ title: "Успех", description: "Отзыв удален" });
        loadReviews();
      }
    } catch (error) {
      toast({ title: "Ошибка", description: "Не удалось удалить отзыв", variant: "destructive" });
    }
  };

  const pendingReviews = reviews.filter(r => !r.is_approved);
  const approvedReviews = reviews.filter(r => r.is_approved);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Модерация отзывов</h1>
          <Button onClick={loadReviews} variant="outline" className="gap-2">
            <RefreshCw size={18} />
            Обновить
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">Загрузка...</div>
        ) : (
          <div className="space-y-8">
            {/* Ожидают модерации */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">
                Ожидают одобрения ({pendingReviews.length})
              </h2>
              {pendingReviews.length === 0 ? (
                <p className="text-muted-foreground">Нет новых отзывов</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {pendingReviews.map((review) => (
                    <Card key={review.id} className="border-orange-300">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between text-base">
                          <span>{review.author}</span>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="mb-4 text-sm">{review.text}</p>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleApprove(review.id)}
                            size="sm"
                            className="flex-1 gap-2"
                          >
                            <Check size={16} />
                            Одобрить
                          </Button>
                          <Button
                            onClick={() => handleReject(review.id)}
                            size="sm"
                            variant="outline"
                            className="flex-1 gap-2"
                          >
                            <X size={16} />
                            Отклонить
                          </Button>
                          <Button
                            onClick={() => handleDelete(review.id)}
                            size="sm"
                            variant="destructive"
                            className="gap-2"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Одобренные */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-500">
                Опубликованные ({approvedReviews.length})
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {approvedReviews.map((review) => (
                  <Card key={review.id} className="border-green-300">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm">{review.author}</span>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-xs mb-3">{review.text}</p>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleReject(review.id)}
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          Скрыть
                        </Button>
                        <Button
                          onClick={() => handleDelete(review.id)}
                          size="sm"
                          variant="destructive"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
