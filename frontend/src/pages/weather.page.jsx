import React, { useState } from 'react';
import axios from 'axios';

const WeatherPage = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleGetWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/weather?location=${location}`);
      if (response.data && response.data.data && response.data.data.values) {
        const { humidity, temperature, windSpeed, cloudCover } = response.data.data.values;
        setWeather({ humidity, temperature, windSpeed, cloudCover });
      } else {
        setWeather(null);
        alert('No weather data found for the entered location. Please check the city name and try again.'); // api 호출이 안되거나 오타일 때
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    //   alert('Failed to load weather data. Please try again.'); // api 호출이 안되거나 오타일 때도 이 메세지 나옴...왜지?
      alert('No weather data found for the entered location. Please check the city name and try again.');
    }
  };

  return (
    <div>
      <input type="text" value={location} onChange={handleInputChange} />
      <button onClick={handleGetWeather}>Get Weather</button>
      {weather && (
        <div>
          <ul>
            {Object.entries(weather).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
