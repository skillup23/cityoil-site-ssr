'use client';

// components/YandexMap.js
import { useEffect, useRef } from 'react';

const YandexMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Проверяем, что скрипт уже не был загружен
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src =
        'https://api-maps.yandex.ru/2.1/?apikey=a780b13a-0b20-46b6-9f2a-e72766b3c2ac&lang=ru_RU';
      script.async = true;
      script.onload = () => {
        window.ymaps.ready(initMap);
      };
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [45.04, 39.05], // Координаты центра карты
        zoom: 11, // Масштаб карты
        controls: [], // Отключаем все элементы управления
      });

      // Добавляем кнопку масштаба
      map.controls.add('zoomControl', {
        size: 'small',
        position: {
          right: 10,
          top: 100,
        },
      });

      // Добавляем кнопку "Определить местоположение"
      map.controls.add('geolocationControl', {
        position: {
          right: 10,
          top: 180,
        },
      });

      // Добавляем несколько маркеров
      const markers = [
        {
          coords: [45.065664, 38.98527],
          hintContent: 'Ситиойл',
          balloonContent: 'Ростовское шоссе, 5',
        },
        {
          coords: [45.037281, 39.104311],
          hintContent: 'Ситиойл',
          balloonContent: 'Сормовская, 200',
        },
        {
          coords: [45.013093, 39.065142],
          hintContent: 'Ситиойл',
          balloonContent: 'Мачуги, 9',
        },
        // {
        //   coords: [45.019678, 39.024172],
        //   hintContent: "Ситиойл",
        //   balloonContent: "Степана Разина, 57",
        // },
        {
          coords: [45.411717, 39.339032],
          hintContent: 'АЗС №1',
          balloonContent: 'Карла Маркса, 128Б',
        },
        {
          coords: [44.917462, 40.591445],
          hintContent: 'Ситиойл',
          balloonContent: 'Шоссейная, 31А',
        },
      ];

      markers.forEach((marker) => {
        const placemark = new window.ymaps.Placemark(
          marker.coords,
          {
            hintContent: marker.hintContent,
            balloonContent: marker.balloonContent,
          },
          {
            iconColor: '#64dd17', // Изменяем цвет метки
          }
        );
        map.geoObjects.add(placemark);
      });
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default YandexMap;
