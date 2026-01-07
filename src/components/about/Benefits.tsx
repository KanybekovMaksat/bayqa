import { Layers, Smartphone, BarChart3, Clock, Palette } from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: 'Всё в одном месте',
    description: 'Услуги, кейсы, опыт, запись клиентов — все инструменты под рукой'
  },
  {
    icon: Smartphone,
    title: 'Простой интерфейс и быстрый старт',
    description: 'Без знаний кода, drag & drop, mobile-first дизайн'
  },
  {
    icon: BarChart3,
    title: 'Удобная аналитика',
    description: 'Смотри, сколько клиентов записалось и анализируй эффективность'
  },
  {
    icon: Clock,
    title: 'Экономия времени',
    description: 'Автоматический календарь и онлайн-запись без лишних действий'
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Почему Bayqa удобен для тебя
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Всё необходимое для привлечения клиентов в одной платформе
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">85%</div>
            <p className="text-gray-700 dark:text-gray-300">
              клиентов выбирают удобный профиль с календарем
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl">
            <div className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">+30%</div>
            <p className="text-gray-700 dark:text-gray-300">
              конверсии с красивых кейсов и услуг
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
