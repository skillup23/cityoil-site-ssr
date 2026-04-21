/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Убираем output: 'standalone', если деплоим обычным способом через npm start
  // 2. Включаем сжатие для экономии трафика (по умолчанию true, но можно оставить явно)
  compress: true,

  // 3. Безопасность
  poweredByHeader: false,

  // 4. Работа с переменными окружения
  // В Next.js 13+ переменные из .env и так доступны на сервере через process.env.
  // Добавлять их в секцию env нужно только если они нужны В БРАУЗЕРЕ (но для БД это опасно!).
  // Поэтому секцию env для MONGODB_URI лучше вообще убрать из конфига ради безопасности.

  // 5. Оставляем игнорирование ошибок, если проект "капризный",
  // но в идеале их лучше исправлять.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 6. Оптимизация сборки (App Router лучше работает с этим включенным)
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'], // пример библиотек
  },
};

module.exports = nextConfig;
