import { TrendingUp, FileText, Trophy } from 'lucide-react';

const cases = [
  {
    icon: TrendingUp,
    title: 'BilimTrack',
    description: 'Платформа рейтингов студентов',
    details: 'Система автоматического отслеживания академической успеваемости с аналитикой и визуализацией данных',
    tags: ['Web', 'Analytics', 'Education'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FileText,
    title: 'MakalaBox',
    description: 'Публикация статей',
    details: 'Современная платформа для авторов и читателей с удобным редактором и системой монетизации контента',
    tags: ['Content', 'Publishing', 'SaaS'],
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: Trophy,
    title: 'Hackathon BashtUp',
    description: 'Организация хакатонов',
    details: 'Полноценная система для управления хакатонами: регистрация команд, оценка проектов, лидерборд',
    tags: ['Events', 'Community', 'Platform'],
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function Cases() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Примеры, как выглядит твой профиль
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Вдохновись реальными кейсами специалистов на Weasy
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
              >
                <div className={`h-40 bg-gradient-to-br ${caseItem.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                  <Icon className="w-16 h-16 text-white relative z-10" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                    {caseItem.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {caseItem.details}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            И это только начало. Добавь свои уникальные проекты
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg">
            Создать портфолио
          </button>
        </div>
      </div>
    </section>
  );
}
