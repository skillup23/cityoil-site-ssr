import { azsAdress, contacts, onas, workers } from '@/public/data';
// import partner4 from '@/public/main/anb.svg';
import partner2 from '@/public/main/gazprom.svg';
import iconMap from '@/public/main/iconMap.svg';
// import mapAzs from '@/public/main/mapAzs.jpg';
import partner3 from '@/public/main/rosneft.svg';
import partner1 from '@/public/main/tatneft.svg';
import Image from 'next/image';
import Link from 'next/link';
import Heading from './components/Heading';
import InfoBanner from './components/InfoBanner';
// import Map from './components/YandexMap';
import Prices from './components/Prices';
import SectionMain from './components/SectionMain';
import Subtitle from './components/Subtitle';
import YandexMap from './components/YandexMap';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <InfoBanner>
        <p className="mx-auto lg:w-[905px] text-white text-xs md:text-base text-center leading-4 md:leading-6">
          Внимание! На АЗС ведутся ремонтные работы, но&nbsp;продажа топлива
          осуществляется в&nbsp;штатном режиме. Мы&nbsp;всегда рады видеть вас
          в&nbsp;числе наших&nbsp;клиентов!
        </p>
        {/* <p className="mx-auto lg:w-[905px] text-white text-xs md:text-base text-center leading-4 md:leading-6">
          Дорогие клиенты! Наша АЗС по адресу ул.&nbsp;С.&nbsp;Разина,&nbsp;57,
          временно закрыта на&nbsp;масштабную&nbsp;реконструкцию. <br />
          Мы готовим для вас совершенно новое пространство и ещё более высокий
          &nbsp;уровень&nbsp;сервиса.
          <br />
          Мы снова откроемся в середине декабря&nbsp;2025&nbsp;года!
          <br />
          Следите за новостями, здесь всё будет по-новому! Приносим извинения за
          временные неудобства.
        </p> */}
      </InfoBanner>

      {/* --------Первый экран--------- */}
      <section className="py-15 w-full h-[70vh] md:min-h-[78vh] first-screen">
        <div className="container text-white">
          <h5 className="text-2xl md:text-4xl font-medium">
            БУДЬ
            <br />
            <span className="ml-8 md:ml-12 font-black">В РИТМЕ</span>
            <br />
            <span className="ml-[80px] md:ml-[115px] font-black text-yeloy">
              ГОРОДА
            </span>
          </h5>

          <h1 className="mt-[60px] md:mt-[100px] text-[32px] md:text-5xl text-center font-bold leading-12 md:leading-16">
            ГОРОДСКИЕ АЗС <br />
            <span className="text-4xl md:text-8xl text-green font-black">
              СИТИОЙЛ
            </span>
          </h1>
        </div>
      </section>

      {/* --------Цены--------- */}
      <SectionMain style="pattern_background" idScroll="price">
        <Prices />
      </SectionMain>

      {/* --------Местоположение--------- */}
      <SectionMain idScroll="place">
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <Subtitle>ДОБРО ПОЖАЛОВАТЬ</Subtitle>
            <Heading>Местоположение АЗС&nbsp;СИТИОЙЛ</Heading>
            <div className="mt-[30px]">
              {azsAdress.map(({ id, url, title }) => {
                return (
                  <Link
                    key={id}
                    href={url}
                    target="_blank"
                    className="mt-3 flex items-center gap-[10px]"
                  >
                    <Image
                      src={iconMap}
                      width="auto"
                      height="auto"
                      alt="фото АЗС"
                      className="w-[30px] md:w-[50px]"
                    />
                    <h6 className="text-[14px] md:text-xl hover:text-green">
                      {title}
                    </h6>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 md:mt-0 w-full h-[275px] md:h-[356px] self-end md:w-1/2 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
            <YandexMap />
          </div>
        </div>
      </SectionMain>

      {/* --------Поставщики--------- */}
      <SectionMain style="pattern_background" idScroll="postavki">
        <Subtitle>Партнерский блок</Subtitle>
        <Heading>Происхождение топлива</Heading>
        <h6 className="mt-2 mb-12 text-base md:text-xl text-center md:text-start font-medium">
          Все поставки топлива осуществляются с ведущих нефтеперерабатывающих
          заводов России, в том числе принадлежащих компаниям Татнефть, Газпром
          нефть, Роснефть. Мы&nbsp;соблюдаем строгий контроль качества и
          поставляем продукцию, соответствующую требованиям ГОСТ.
        </h6>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <Image
            src={partner1}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="max-w-[208px]"
          />
          <Image
            src={partner2}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="max-w-[182px]"
          />
          <Image
            src={partner3}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="max-w-[160px]"
          />
          {/* <Link href="https://anboil.ru" target="_blank">
            <Image
              src={partner4}
              width="auto"
              height="auto"
              alt="фото АЗС"
              className="max-w-[163px]"
            />
          </Link> */}
        </div>

        <h6 className="mt-[50px] text-xl md:text-2xl text-center font-bold">
          АЗС «СИТИОЙЛ» приглашает&nbsp;к&nbsp;сотрудничеству
          бизнес&#8209;партнеров
        </h6>
      </SectionMain>

      {/* --------О нас--------- */}
      <InfoBanner style="pt-10 pb-[50px] md:py-20 px-0" idScroll="onas">
        <Heading style="text-center text-white">АЗС СИТИОЙЛ — это</Heading>

        <ul className="mt-[25px] md:mt-[30px] flex items-center justify-between flex-wrap gap-y-6 sm:gap-y-0">
          {onas.map(({ id, image, title, subtitle }) => {
            return (
              <li key={id} className="w-1/2 md:w-1/4">
                <Image
                  src={image}
                  width="auto"
                  height="auto"
                  alt="иконка"
                  className="w-[45px] md:w-[65px] mx-auto"
                />
                <h6 className="mt-[5px] md:mt-0 text-[15px] md:text-xl font-bold text-yeloy uppercase text-center">
                  {title}
                </h6>
                <p className="mt-[5px] md:mt-0 text-sm text-white font-normal uppercase text-center">
                  {subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </InfoBanner>

      {/* --------Акции--------- */}
      <SectionMain style="pattern_background" idScroll="sales">
        <Subtitle>ДЛЯ НОВЫХ И ПОСТОЯННЫХ КЛИЕНТОВ</Subtitle>
        <Heading>Акции и предложения</Heading>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full my-[20px] md:mr-20 md:ml-0">
            <h5 className="text-base md:text-xl text-center text-gray font-bold">
              Уважаемые клиенты! <br /> <br /> В настоящее время мы временно
              приостановили действие всех действующих акций. Мы&nbsp;благодарим
              вас за понимание и лояльность.
              <br />
              <br />
              Наша команда активно работает над разработкой новых специальных
              предложений, которые сделают ваши покупки еще более выгодными. Мы
              постоянно стремимся улучшать условия сотрудничества и создавать
              привлекательные акции для&nbsp;наших&nbsp;клиентов.
            </h5>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Image
              src={sale1}
              width="auto"
              height="auto"
              alt="акция"
              className="w-full mt-8 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
            <Image
              src={sale2}
              width="auto"
              height="auto"
              alt="акция"
              className="w-full mt-8 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
            <Image
              src={sale3}
              width="auto"
              height="auto"
              alt="акция"
              className="w-full mt-8 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div> */}
        </div>
      </SectionMain>

      {/* --------Вакансии--------- */}
      <SectionMain idScroll="workin">
        <Subtitle>ИЩЕМ СОТРУДНИКОВ</Subtitle>
        <Heading>Вакансии</Heading>
        <ul className="mt-[30px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {workers.map(({ id, name, place, price, time, phone, adresses }) => {
            return (
              <li
                key={id}
                className="p-4 font-sebold border-2 border-green rounded-lg text-lg md:text-xl"
              >
                <h6 className="text-xl md:text-2xl font-bold">{name}</h6>
                <p>{place}</p>
                <div className="w-full md:w-[495px]">
                  <p>
                    Адрес:{' '}
                    {adresses.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </p>
                </div>
                <p>{price}</p>
                <p>{time}</p>
                <p>{phone}</p>
              </li>
            );
          })}
        </ul>
      </SectionMain>

      {/* --------Контакты--------- */}
      <SectionMain style="contact-screen text-white" idScroll="contacts">
        <Heading style="mt-0">Контакты</Heading>
        <div className="mt-[30px] mb-0 md:mt-[90px] md:mb-[60px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {contacts.map(({ id, image, title, subtitle, url }) => {
            return (
              <Link
                href={url}
                target="_blank"
                key={id}
                className="w-full md:w-1/4 flex flex-row md:flex-col gap-[15px] hover:text-green"
              >
                <Image
                  src={image}
                  width="auto"
                  height="auto"
                  alt="иконка"
                  className="w-[50px] md:w-[60px] ml-12 mr-2 md:mx-auto"
                />
                <div className="flex flex-col gap-0 md:gap-3">
                  <h6 className="text-xl md:text-2xl font-semibold text-start md:text-center">
                    {title}
                  </h6>
                  <p className="text-xl md:text-2xl font-medium text-start md:text-center">
                    {subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionMain>
    </main>
  );
}
