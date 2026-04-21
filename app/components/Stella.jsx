'use client';
import {
  // priceMach,
  // priceRazina,
  // priceRost,
  // priceShos,
  // priceSorm,
  stellaAdrKgn,
  stellaAdrKrd,
  stellaCity,
} from '@/public/data';
import arroy from '@/public/main/arroy-down.svg';
import stellaMob from '@/public/main/stella-mobile.svg';
import stella from '@/public/main/stella.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Stella({
  priceRost,
  priceMach,
  // priceRazina,
  priceShos,
  priceSorm,
}) {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [isCity, setIsCity] = useState('Краснодар');
  const [isOpenAzs, setIsOpenAzs] = useState(false);
  const [isAzs, setIsAzs] = useState('Ростовское ш., 5');

  const [isPrice, setIsPrice] = useState(priceRost);

  function selectedCity() {
    setIsOpenCity(!isOpenCity);
    setIsOpenAzs(false);
  }

  function selectedAzs() {
    setIsOpenAzs(!isOpenAzs);
    setIsOpenCity(false);
  }

  function toggleCity(item) {
    if (item == 'Краснодар') {
      setIsAzs('Ростовское ш., 5');
    }
    if (item == 'Курганинск') {
      setIsAzs('Шоссейная, 31');
    }
    setIsCity(item);
  }

  useEffect(() => {
    if (isAzs == 'Ростовское ш., 5') {
      setIsPrice(priceRost);
    } else if (isAzs == 'Сормовская, 200') {
      setIsPrice(priceSorm);
    } else if (isAzs == 'Мачуги, 9') {
      setIsPrice(priceMach);
    } else if (isAzs == 'Шоссейная, 31') {
      setIsPrice(priceShos);
    }
    // } else if (isAzs == 'Степана Разина, 57') {
    //   setIsPrice(priceRazina);
    // }
  }, [isAzs]);

  return (
    <div className="relative text-gray">
      <Image
        src={stella}
        width="auto"
        height="auto"
        alt="фото АЗС"
        className="hidden md:block max-w-[402px] -mt-80 -mb-36 -mr-2 z-20"
      />
      <Image
        src={stellaMob}
        width="auto"
        height="auto"
        alt="фото АЗС"
        className="block md:hidden w-full mx-auto -mt-[34vh] z-20"
      />

      <div className="absolute h-[280px] top-[6%] left-[31vw] md:top-[80px] md:left-[130px] md:h-[350px] flex flex-col">
        {/* --------Выбор города--------- */}
        <div
          className="w-[40vw] md:w-[196px] flex items-center justify-center gap-[10px] border-b-3 border-green cursor-pointer"
          onClick={() => selectedCity()}
        >
          <span className="py-2 text-base font-bold text-center leading-4 select-none">
            {isCity}
          </span>
          <ul
            className={`w-full ${
              isOpenCity ? `flex` : `hidden`
            } absolute top-10 flex-col bg-gray-100 border-2 rounded-md`}
          >
            {stellaCity.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-1 cursor-pointer hover:bg-gray-200 text-center font-medium rounded-md select-none"
                  onClick={() => toggleCity(`${item}`)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <Image
            src={arroy}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="w-6 select-none"
          />
        </div>

        {/* ----------Выбор АЗС----------- */}
        <div
          className="mt-1 md:mt-[10px] w-[40vw] md:w-[196px] flex items-center justify-center gap-1 md:gap-[10px] border-b-3 border-green cursor-pointer"
          onClick={() => selectedAzs()}
        >
          <span className="py-2 text-sm md:text-base font-bold text-center leading-4 select-none">
            {isAzs}
          </span>

          {isCity == 'Краснодар' && (
            <ul
              className={`w-full ${
                isOpenAzs ? `flex` : `hidden`
              } absolute top-21 flex-col bg-gray-100 border-2 rounded-md`}
            >
              {stellaAdrKrd.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-1 cursor-pointer hover:bg-gray-200 font-medium text-center select-none"
                    onClick={() => setIsAzs(`${item}`)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}

          {isCity == 'Курганинск' && (
            <ul
              className={`w-full ${
                isOpenAzs ? `scale-100 flex` : `scale-25 hidden`
              } absolute top-21 flex-col bg-gray-200 animate-simple`}
            >
              {stellaAdrKgn.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-1 cursor-pointer hover:bg-gray-200 font-medium text-center select-none"
                    onClick={() => setIsAzs(`${item}`)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}

          <Image
            src={arroy}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="w-6 select-none"
          />
        </div>

        {/* --------------Цены------------- */}
        <div className="mt-4 md:mt-6">
          {isPrice.map(({ id, toplovo, price }) => {
            return (
              <ul
                key={id}
                className="w-[40vw] md:w-[196px] mt-2 md:mt-5 flex items-center justify-between gap-[10px] border-b-3 border-yeloy cursor-pointer"
              >
                <p className="py-2 text-lg md:text-xl font-bold text-center leading-4 select-none">
                  {toplovo}
                </p>
                <p className="py-2 text-xl md:text-2xl font-bold text-center leading-4 select-none">
                  {price}
                </p>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
