import React, { useEffect, useRef } from 'react';

const YandexMap = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null); 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ae4fe19a-d0ff-4626-8a69-433c51950154&lang=ru_RU';
    script.type = 'text/javascript';
    script.onload = () => {
      window.ymaps.ready(init); 
    };
    document.body.appendChild(script);


    function init() {
      if (!mapInstance.current) {
        mapInstance.current = new window.ymaps.Map(mapContainer.current, {
          center: [55.76, 37.64], 
          zoom: 7,               
        });
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;  
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{ width: '600px', height: '400px' }}
      />
    </div>
  );
};

export default YandexMap;