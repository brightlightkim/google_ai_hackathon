import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherPage = () => {
  const [weathers, setWeathers] = useState([]);

  // 고정된 도시 목록
  const cities = ["Goa", "Paris", "Guam", "Seoul"];

  useEffect(() => {
    // 주어진 도시에 대한 날씨 정보를 비동기적으로 가져오는 함수
    const fetchWeather = async (city) => {
      try {
        const response = await axios.get(`http://localhost:3000/weather?location=${city}`);
        if (response.data && response.data.data && response.data.data.values) {
          const { humidity, temperature, windSpeed, cloudCover } = response.data.data.values;
          const fullName = response.data.location.name;
          const shortName = fullName.split(',')[0]; // 도시 이름을 쉼표로 분리하고 첫 번째 요소를 선택
          return { cityName: shortName, humidity, temperature, windSpeed, cloudCover };
        } else {
          return null; // 날씨 데이터가 없는 경우 null 반환
        }
      } catch (error) {
        console.error('Error fetching weather for ' + city, error);
        return null;
      }
    };

    // 날씨 데이터 로드 및 상태 업데이트를 수행하는 비동기 함수
    const loadWeatherData = async () => {
      const weatherPromises = cities.map(city => fetchWeather(city)); // 각 도시에 대해 날씨 데이터 요청
      const weatherResults = await Promise.all(weatherPromises); // 모든 요청이 완료될 때까지 대기
      setWeathers(weatherResults.filter(w => w !== null)); // 유효한 결과만 상태에 저장
    };

    loadWeatherData();
  }, []);

  return (
    <div>
      {weathers.length > 0 ? weathers.map((weather, index) => (
        <div key={index}>
          <h3>Weather in {weather.cityName}</h3>
          <ul>
            <li>Temperature: {weather.temperature}°C</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind Speed: {weather.windSpeed} km/h</li>
            <li>Cloud Cover: {weather.cloudCover}%</li>
          </ul>
        </div>
      )) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherPage;