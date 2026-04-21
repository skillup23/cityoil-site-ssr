import Link from 'next/link';
import InfoBanner from './InfoBanner';

export default function Footer() {
  return (
    <footer>
      <InfoBanner style="py-5">
        <Link href={'/documents'}>
          <p className="mx-auto w-full md:w-[905px] text-white text-sm md:text-xl text-center leading-6">
            © СитиОйл 2026 Все права защищены.
          </p>
        </Link>
      </InfoBanner>
    </footer>
  );
}
