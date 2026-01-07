import { Twitter, Instagram, Mail, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Готов начать?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Создай профиль за 5 минут и начинай принимать клиентов
          </p>
           <a
            href="https://t.me/maksat_kanybekov"
            target="_blank"
            rel="noopener noreferrer" className="px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-2xl">
            Подключить Bayqa
          </a>
        </div>

        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bayqa</h3>
              <p className="text-gray-400">
                Платформа для создания профессиональных профилей специалистов
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2026 Bayqa. Все права защищены.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
