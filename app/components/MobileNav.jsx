import Link from "next/link";
import SocialButtons from "./SocialButtons";

export default function MobileNav({ navLinks, isOpen, openMobileMenu }) {
  return (
    <div
      className={`${
        isOpen ? `translate-x-0` : `-translate-x-full`
      } w-full block lg:hidden absolute h-dvh bg-gray p-8 top-[60px] sm:top-[93px] z-30 animate-simple`}
    >
      <nav className="flex flex-col items-start gap-4">
        {navLinks.map(({ id, url, title }) => {
          return (
            <Link
              key={id}
              href={url}
              onClick={() => {
                openMobileMenu();
              }}
              className="text-[18px] text-white uppercase font-medium tracking-wide hover:text-gray-light animate-simple"
            >
              {title}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 flex flex-col text-white text-base gap-1">
        <p className="text-lg">Краснодар</p>
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
        <Link
          href="https://yandex.ru/maps/-/CHelqEZ4"
          className=" hover:text-green animate-simple"
          target="_blank"
        >
          ул. Степана Разина, 57
        </Link>
      </div>

      <div className="mt-6 flex flex-col text-white text-base gap-1">
        <p className="text-lg">Курганинск</p>
        <Link
          href="https://yandex.ru/maps/-/CHelqFNT"
          className="hover:text-yeloy animate-simple"
          target="_blank"
        >
          ул. Шоссейная, 31
        </Link>
      </div>

      <SocialButtons size={"w-[45px] mt-6"} />
    </div>
  );
}
