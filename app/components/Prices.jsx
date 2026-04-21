import clientPromise from '@/lib/mongodb';
import {
  priceMachLocal,
  priceRazinaLocal,
  priceRostLocal,
  priceShosLocal,
  priceSormLocal,
} from '@/public/data';
import azsFoto1 from '@/public/main/azs-foto1.jpg';
import Image from 'next/image';
import Heading from './Heading';
import Stella from './Stella';
import Subtitle from './Subtitle';

export default async function Prices() {
  let priceRost = priceRostLocal;
  let priceSorm = priceSormLocal;
  let priceMach = priceMachLocal;
  // let priceRazina = priceRazinaLocal;
  let priceShos = priceShosLocal;

  // const client = await clientPromise;
  // const db = client.db("cityoil");

  try {
    console.log('🔄 Запрос к MongoDB для цен...');
    const client = await clientPromise;
    const db = client.db('cityoil');
    // Отключаем кеширование для свежих данных
    const dataRost = await db.collection('priceRost').find({}, { noCursorTimeout: false }).toArray();
    const dataSorm = await db.collection('priceSorm').find({}, { noCursorTimeout: false }).toArray();
    const dataMach = await db.collection('priceMach').find({}, { noCursorTimeout: false }).toArray();
    // const dataRazina = await db.collection("priceRazina").find({}).toArray();
    const dataShos = await db.collection('priceShos').find({}, { noCursorTimeout: false }).toArray();
    console.log('✅ Данные из MongoDB получены успешно');

    // Конвертация MongoDB данных в простой объект
    priceRost = dataRost.map((item) => ({
      ...item,
      _id: item._id.toString(), // Конвертируем ObjectId в строку
      id: item._id.toString(),
    }));
    priceSorm = dataSorm.map((item) => ({
      ...item,
      _id: item._id.toString(), // Конвертируем ObjectId в строку
      id: item._id.toString(),
    }));
    priceMach = dataMach.map((item) => ({
      ...item,
      _id: item._id.toString(), // Конвертируем ObjectId в строку
      id: item._id.toString(),
    }));
    // priceRazina = dataRazina.map((item) => ({
    //   ...item,
    //   _id: item._id.toString(), // Конвертируем ObjectId в строку
    //   id: item._id.toString(),
    // }));
    priceShos = dataShos.map((item) => ({
      ...item,
      _id: item._id.toString(), // Конвертируем ObjectId в строку
      id: item._id.toString(),
    }));
  } catch (error) {
    console.error('Failed to fetch from MongoDB, using local data:', error);
  }

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between">
      <div>
        <Subtitle style="hidden md:block">ТОПЛИВО НАИВЫСШЕГО КАЧЕСТВА</Subtitle>
        <Heading style="mt-5 md:mt-3">Актуальные цены на&nbsp;топливо</Heading>
        <Image
          src={azsFoto1}
          width="auto"
          height="auto"
          alt="фото АЗС"
          className="w-[100%] md:max-w-[572px] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>
      <Stella
        priceRost={priceRost}
        priceSorm={priceSorm}
        priceMach={priceMach}
        // priceRazina={priceRazina}
        priceShos={priceShos}
      />
    </div>
  );
}
