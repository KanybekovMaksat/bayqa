import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Платформа для профессионалов
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Bayqa — твоя витрина для клиентов и кейсов
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Создай красивый профиль с услугами, кейсами и возможностью записи, без лишних сложностей
        </p>

      <a
            href="https://t.me/maksat_kanybekov"
            target="_blank"
            rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
          Подключить
        </a>

        <div className="mt-16 relative">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full"></div>
              <div className="text-left">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
