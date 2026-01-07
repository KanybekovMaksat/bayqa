import { Layout, Calendar, Star, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Layout,
    title: 'Всё на одной странице',
    description: 'Просмотр всех услуг, портфолио и контактов в одном месте'
  },
  {
    icon: Calendar,
    title: 'Чёткий календарь',
    description: 'Удобная запись на удобное время без переписок и звонков'
  },
  {
    icon: Star,
    title: 'Отзывы и кейсы',
    description: 'Реальные работы и отзывы для уверенности в выборе'
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    description: 'Идеально работает на любом устройстве и экране'
  }
];

export default function ClientBenefits() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Почему клиентам удобно
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Твои клиенты получают лучший опыт взаимодействия
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%</div>
            <p className="text-gray-700 dark:text-gray-300">
              пользователей оставляют заявку в течение 3 минут
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <div className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">4.8/5</div>
            <p className="text-gray-700 dark:text-gray-300">
              средняя оценка удобства платформы
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Удобство для клиентов = больше заказов
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Когда клиентам легко с тобой работать, они чаще возвращаются и рекомендуют другим
          </p>
        </div>
      </div>
    </section>
  );
}
