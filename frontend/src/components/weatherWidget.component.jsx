import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // 주어진 도시에 대한 날씨 정보를 비동기적으로 가져오는 함수
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/weather?location=${city}`);
        if (response.data && response.data.data && response.data.data.values) {
          const { humidity, temperature, windSpeed, cloudCover } = response.data.data.values;
          let fullName = response.data.location.name;
          let shortName = fullName.split(',')[0]; // 도시 이름을 쉼표로 분리하고 첫 번째 요소를 선택

          // 서울특별시를 Seoul로 변경
          if (shortName === "서울특별시") {
            shortName = "Seoul";
          }

          setWeather({ cityName: shortName, humidity, temperature, windSpeed, cloudCover });
        } else {
          setWeather(null); // 날씨 데이터가 없는 경우 null로 설정
        }
      } catch (error) {
        console.error('Error fetching weather for ' + city, error);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      {weather ? (
        <div>
          <ul>
            <li><FontAwesomeIcon icon={faTemperatureHalf} /> {weather.temperature}°C</li>
            <li><FontAwesomeIcon icon={faDroplet} /> {weather.humidity}%</li>
            <li><FontAwesomeIcon icon={faWind} /> {weather.windSpeed} km/h</li>
            <li><FontAwesomeIcon icon={faCloud} /> {weather.cloudCover}%</li>
          </ul>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
