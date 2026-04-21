import { contacts } from "@/public/data";
import Image from "next/image";
import Link from "next/link";

export default function SocialButtons({ color, size }) {
  return (
    <div className="mt-1 flex gap-[10px]">
      {contacts
        .slice(1, 4)
        .map(({ id, imageBlack, image, url }) => {
          return (
            <Link
              key={id}
              href={url}
              className="text-[18px] text-white uppercase font-medium tracking-wide hover:text-gray-light animate-simple"
            >
              {color == "black" ? (
                <Image
                  src={imageBlack}
                  width="auto"
                  height="auto"
                  alt="иконка"
                  className={`w-[32px] mx-auto ${size}`}
                />
              ) : (
                <Image
                  src={image}
                  width="auto"
                  height="auto"
                  alt="иконка"
                  className={`w-[32px] mx-auto ${size}`}
                />
              )}
            </Link>
          );
        })
        .reverse()}
    </div>
  );
}
