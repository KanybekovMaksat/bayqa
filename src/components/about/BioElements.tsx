import {
  User,
  Award,
  Briefcase,
  FolderOpen,
  Star,
  MessageSquare,
} from 'lucide-react';

const elements = [
  {
    icon: User,
    title: 'Фото и аватар',
    description:
      'Профессиональная фотография, которая создает первое впечатление',
  },
  {
    icon: Award,
    title: 'Опыт и навыки',
    description: 'Покажи свою экспертизу и ключевые компетенции',
  },
  {
    icon: Briefcase,
    title: 'Услуги',
    description: 'Покажи свои основные услуги и направления работы',
  },
  {
    icon: FolderOpen,
    title: 'Кейсы',
    description: 'Покажите свои успешные кейсы и другие проекты',
  },
  {
    icon: Star,
    title: 'Отзывы клиентов',
    description: 'Реальные отзывы довольных клиентов повышают доверие',
  },
  {
    icon: MessageSquare,
    title: 'Контакты и запись',
    description: 'Кнопка записи и все способы связи в одном месте',
  },
];

export default function BioElements() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Покажи себя и свои работы
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Создай комплексный профиль, который впечатлит клиентов
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {element.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Всё это в одном профиле</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Не нужно управлять несколькими платформами. Bayqa объединяет всё
            необходимое для работы с клиентами
          </p>

          <a
            href="https://t.me/maksat_kanybekov"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Начать сейчас
          </a>
        </div>
      </div>
    </section>
  );
}
