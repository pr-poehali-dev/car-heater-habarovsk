import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface Contact {
  id: number;
  name: string;
  phone: string;
  message: string;
  created_at: string;
}

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const loadContacts = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/fcb2366f-c9f4-4f61-a1d3-2e870a21e5f1');
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить заявки',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      await fetch(`https://functions.poehali.dev/fcb2366f-c9f4-4f61-a1d3-2e870a21e5f1?id=${id}`, {
        method: 'DELETE'
      });
      toast({
        title: 'Успешно',
        description: 'Заявка удалена'
      });
      loadContacts();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось удалить заявку',
        variant: 'destructive'
      });
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Заявки с сайта</h1>
            <p className="text-gray-600 mt-2">Всего заявок: {contacts.length}</p>
          </div>
          <Button onClick={loadContacts} variant="outline">
            <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
            Обновить
          </Button>
        </div>

        {contacts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Icon name="Inbox" className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg text-gray-600">Пока нет заявок</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card key={contact.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <div className="flex items-center gap-2 mt-2">
                          <Icon name="Phone" className="h-4 w-4" />
                          <a href={`tel:${contact.phone}`} className="hover:underline">
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs">
                          <Icon name="Clock" className="h-3 w-3" />
                          {new Date(contact.created_at).toLocaleString('ru-RU')}
                        </div>
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteContact(contact.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Icon name="Trash2" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                {contact.message && (
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContacts;
