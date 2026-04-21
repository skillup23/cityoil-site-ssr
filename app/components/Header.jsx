'use client';

import { navLinks } from '@/public/data';
import logoBlack from '@/public/main/logo-black.svg';
import logo from '@/public/main/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import MobileNav from './MobileNav';
import SocialButtons from './SocialButtons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openMobileMenu() {
    setIsOpen(!isOpen);

    const b = document.querySelector('body');

    if (isOpen === false) {
      b.classList.add('overflow-hidden');
      b.classList.remove('overflow-auto');
    } else {
      b.classList.add('overflow-auto');
      b.classList.remove('overflow-hidden');
    }
  }

  return (
    <header>
      <div className="hidden md:block">
        <div className="bg-green drop-shadow-lg">
          <nav className="container py-5 flex items-center justify-between font-bold uppercase">
            {navLinks.map(({ id, url, title }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className="text-base hover:text-yeloy animate-simple"
                >
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="container pb-1 flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              width="auto"
              height="auto"
              alt="Лого"
              className="w-[65px] cursor-pointer"
            />
          </Link>
          <div className="mt-1 flex flex-col font-bold">
            <Link
              href="tel:88612040444"
              className="text-[18px] hover:text-green animate-simple"
            >
              8 861 204 04 44
            </Link>
            <Link
              href="mailto:azs5@cityoil23.ru"
              className="text-md hover:text-green animate-simple"
            >
              azs5@cityoil23.ru
            </Link>
          </div>
          <p className="text-[48px] font-light">|</p>
          <div className="mt-1 flex flex-col font-bold">
            <p className="text-[18px] text-green text-center">Краснодар</p>
            <Link
              href="https://yandex.ru/maps/-/CHelqFNT"
              className="text-md hover:text-green animate-simple"
              target="_blank"
            >
              ул. Сормовская, 200
            </Link>
          </div>
          <div className="mt-1 flex flex-col font-bold">
            <Link
              href="https://yandex.ru/maps/-/CHelqEZ4"
              className="text-md hover:text-green animate-simple text-center"
              target="_blank"
            >
              ул. Мачуги, 9
            </Link>
            <Link
              href="https://yandex.ru/maps/-/CHelqJo3"
              className="mt-[2px] text-md hover:text-green animate-simple text-center"
              target="_blank"
            >
              ул. Ростовское ш., 5
            </Link>
          </div>
          <p className="text-[48px] font-light">|</p>
          <div className="mt-1 flex flex-col font-bold">
            <p className="text-[18px] text-gray text-center">Платнировская</p>
            <Link
              href="https://yandex.ru/maps/-/CLsV6S6~"
              className="mt-[2px] text-md hover:text-gray animate-simple"
              target="_blank"
            >
              ул. Карла Маркса, 128Б
            </Link>
          </div>
          <p className="text-[48px] font-light">|</p>
          <div className="mt-1 flex flex-col font-bold">
            <p className="text-[18px] text-yeloy text-center">Курганинск</p>
            <Link
              href="https://yandex.ru/maps/-/CHelq0Oe"
              className="text-md hover:text-yeloy animate-simple"
              target="_blank"
            >
              ул. Шоссейная, 31
            </Link>
          </div>
        </div>
      </div>

      {/*      Мобильный хеадер      */}
      <div className="block md:hidden">
        <div className="bg-green drop-shadow-lg">
          <div className="container pt-[5px] pb-[5px] flex items-center justify-between">
            <Link href="/">
              <Image
                src={logoBlack}
                width="auto"
                height="auto"
                alt="Лого"
                className="w-[48px] cursor-pointer"
              />
            </Link>
            <Link
              href="tel:88612040444"
              className="text-[18px] hover:text-yelow font-bold animate-simple"
            >
              8 861 204 04 44
            </Link>
            {/* <!-- Бургер меню кнопка --> */}
            <div
              onClick={() => {
                openMobileMenu();
              }}
            >
              <BurgerButton isOpen={isOpen}></BurgerButton>
            </div>
          </div>
        </div>

        <div className="container pt-2 pb-3 flex justify-between">
          <div className="flex flex-col text-sm font-bold">
            <p className="text-base text-green">Краснодар</p>
            <Link
              href="https://yandex.ru/maps/-/CHelqFNT"
              className="hover:text-green animate-simple"
              target="_blank"
            >
              ул. Сормовская, 200
            </Link>
            <Link
              href="https://yandex.ru/maps/-/CHelqJo3"
              className="hover:text-green animate-simple"
              target="_blank"
            >
              ул. Ростовское ш., 5
            </Link>
            <Link
              href="https://yandex.ru/maps/-/CHelqEZ4"
              className=" hover:text-green animate-simple"
              target="_blank"
            >
              ул. Мачуги, 9
            </Link>
            <SocialButtons color={'black'} />
          </div>

          <div className="flex flex-col text-sm font-bold">
            <p className="text-base text-yeloy">Курганинск</p>
            <Link
              href="https://yandex.ru/maps/-/CHelqFNT"
              className="hover:text-yeloy animate-simple"
              target="_blank"
            >
              ул. Шоссейная, 31
            </Link>
            <p className="mt-8 text-base text-gray">Платнировская</p>
            <Link
              href="https://yandex.ru/maps/-/CLsV6S6~"
              className="hover:text-gray animate-simple"
              target="_blank"
            >
              ул. Карла Маркса, 128Б
            </Link>
          </div>
        </div>

        {/*      Мобильное меню      */}
        <MobileNav
          navLinks={navLinks}
          isOpen={isOpen}
          openMobileMenu={openMobileMenu}
        />
      </div>
    </header>
  );
}
