import localFont from 'next/font/local';
import Script from 'next/script';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const Montcerrat = localFont({
  src: [
    {
      path: './fonts/Montserrat/static/Montserrat-Black.ttf',
      weight: '900',
      style: 'black',
    },
    {
      path: './fonts/Montserrat/static/Montserrat-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Montserrat/static/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/Montserrat/static/Montserrat-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Montserrat/static/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/static/Montserrat-Light.ttf',
      weight: '300',
      style: 'light',
    },
  ],
});

export const metadata = {
  title: 'АЗС СИТИОЙЛ',
  description: 'Будь в ритме города!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="yandex-verification" content="1f84d1e02252ae6e" />
      </head>
      <body className={`${Montcerrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        {/* <Script
          src="https://api-maps.yandex.ru/v3/?apikey=a780b13a-0b20-46b6-9f2a-e72766b3c2ac&lang=ru_RU"
          strategy="beforeInteractive"
        /> */}
        {/* <Script
          src="https://api-maps.yandex.ru/v3/?apikey=c8efdf97-cb56-4062-ac67-2f5c7b9305fe&lang=en_US"
          strategy="beforeInteractive"
        /> */}
      </body>
    </html>
  );
}
