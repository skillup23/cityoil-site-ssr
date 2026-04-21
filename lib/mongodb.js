import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  // Оптимизация пула соединений
  maxPoolSize: 5, // Уменьшаем до 5 соединений
  minPoolSize: 1, // Минимум 1 соединение
  maxIdleTimeMS: 30000, // Закрывать неиспользуемые через 30 сек
  waitQueueTimeoutMS: 5000, // Таймаут очереди 5 сек
  // Таймауты
  serverSelectionTimeoutMS: 3000, // 3 сек на выбор сервера
  socketTimeoutMS: 30000, // 30 сек таймаут сокета
  // Переподключение
  retryWrites: true,
  retryReads: true,
  // Отключаем мониторинг для снижения нагрузки
  monitorCommands: false,
};

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

let clientPromise;

// Кэшируем promise в глобальном объекте для обоих режимов
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
