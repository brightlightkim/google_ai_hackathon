import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherPage = () => {
  const [weathers, setWeathers] = useState([]); // 날씨 정보를 저장할 상태 배열

  // 유명한 여행지 도시 목록
  const cities = [
    "Seoul", "New York", "London", "Tokyo", "Sydney", "Paris", "Bangkok", "Dubai", "Istanbul", 
    "Hong Kong", "Rome", "Phuket", "Barcelona", "Osaka", "Orlando", "Moscow", "Shanghai", 
    "Las Vegas", "Singapore", "Miami", "Los Angeles", "Madrid", "Amsterdam", "Beijing", 
    "Berlin", "Vienna", "Kyoto", "Milan", "Mexico City", "Saint Petersburg", "San Francisco", 
    "Rio de Janeiro", "Prague", "Venice", "Buenos Aires", "Melbourne", "Munich", "Dublin", 
    "Cape Town", "Saint Petersburg", "Mumbai", "Florence", "Istanbul", "Lisbon", "Los Angeles", 
    "Madrid", "Bangkok", "Berlin", "Budapest", "Sydney", "Jaipur", "Cairo", "Vienna", "Hanoi", 
    "Jakarta", "Johannesburg", "Athens", "Beirut", "Doha", "Brussels", "Warsaw", "Budapest", 
    "Copenhagen", "Wellington", "Auckland", "Seville", "Lima", "Sofia", "Oslo", "Stockholm", 
    "Cape Town", "Marrakesh", "Tel Aviv", "São Paulo", "Toronto", "Vancouver", "Melbourne", 
    "Perth", "Brussels", "Frankfurt", "Zurich", "Edinburgh", "Geneva", "Porto", "Marseille", 
    "Birmingham", "Cologne", "Naples", "Turin", "Stockholm", "Riga", "Dublin", "Lyon", "Hamburg", 
    "Lisbon", "Prague", "Oslo", "Helsinki", "Copenhagen", "Luxembourg", "Taipei", "Macau", 
    "Guangzhou", "Medellín", "Manchester", "Glasgow", "Leeds", "Dubai", "Abu Dhabi", "Doha", 
    "Kuwait City", "Bahrain", "Muscat", "Istanbul", "Ankara", "Baku", "Tbilisi", "Yerevan", 
    "Tehran", "Karachi", "Lahore", "Delhi", "Mumbai", "Kolkata", "Chennai", "Dhaka", "Kathmandu", 
    "Thimphu", "Colombo", "Male", "Jakarta", "Bali", "Kuala Lumpur", "Singapore", "Manila", 
    "Ho Chi Minh City", "Bangkok", "Phuket", "Hong Kong", "Shanghai", "Beijing", "Seoul", 
    "Osaka", "Sapporo", "Fukuoka", "Kyoto", "Taipei", "Auckland", "Sydney", "Melbourne", 
    "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Hobart", "Darwin", "Cairns", 
    "Alice Springs", "Queenstown", "Christchurch", "Wellington", "Rotorua", "Hamilton", 
    "Dunedin", "Napier", "Tauranga", "Palmerston North", "Nelson", "Riccarton", "New Plymouth", 
    "Whangarei", "Invercargill", "Gisborne", "Plymouth", "York", "Newcastle", "Brighton", 
    "Liverpool", "Manchester", "Bristol", "Oxford", "Cambridge", "Norwich", "Nottingham", 
    "Sheffield", "Leicester", "Exeter", "Southampton", "Bath", "Cardiff", "Brighton", "Blackpool", 
    "Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling", "Inverness", "Perth", "St Andrews"
  ];

  useEffect(() => {
    // numCities 개수만큼 도시를 무작위로 선택하는 함수
    const getRandomCities = (numCities) => {
      const shuffled = cities.sort(() => 0.5 - Math.random()); // 배열을 무작위로 섞음
      return shuffled.slice(0, numCities); // 섞인 배열에서 상위 numCities 개의 도시를 선택
    };

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
      const selectedCities = getRandomCities(5); // 5개의 도시를 무작위로 선택
      const uniqueCities = Array.from(new Set(selectedCities)); // 중복 제거
      const weatherPromises = uniqueCities.map(city => fetchWeather(city)); // 각 도시에 대해 날씨 데이터 요청
      const weatherResults = await Promise.all(weatherPromises); // 모든 요청이 완료될 때까지 대기
      setWeathers(weatherResults.filter(w => w !== null)); // 유효한 결과만 상태에 저장
    };

    loadWeatherData();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <div>
      {weathers.length > 0 ? weathers.map((weather, index) => (
        <div key={index}>
          <h2>Weather Information for {weather.cityName}</h2>
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
