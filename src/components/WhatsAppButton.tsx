import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '79940645474';
  const message = encodeURIComponent('Здравствуйте! Мне нужен отогрев автомобиля');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg transition-all hover:scale-110 group"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Напишите нам
      </span>
    </a>
  );
};

export default WhatsAppButton;
