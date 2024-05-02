// import React, { useState } from 'react';
// import axios from 'axios';

// const WeatherPage = () => {
//   const [location, setLocation] = useState('');
//   const [weather, setWeather] = useState(null);

//   const handleInputChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleGetWeather = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/weather?location=${location}`);
//       if (response.data && response.data.data && response.data.data.values) {
//         const { humidity, temperature, windSpeed, cloudCover } = response.data.data.values;
//         setWeather({ humidity, temperature, windSpeed, cloudCover });
//       } else {
//         setWeather(null);
//         alert('No weather data found for the entered location. Please check the city name and try again.'); // api 호출이 안되거나 오타일 때
//       }
//     } catch (error) {
//       console.error('Error fetching weather:', error);
//     //   alert('Failed to load weather data. Please try again.'); // api 호출이 안되거나 오타일 때도 이 메세지 나옴...왜지?
//       alert('No weather data found for the entered location. Please check the city name and try again.');
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={location} onChange={handleInputChange} />
//       <br />
//       <br />
//       <br />
//       <button onClick={handleGetWeather}>Get Weather</button>
//       {weather && (
//         <div>
//           <ul>
//             {Object.entries(weather).map(([key, value]) => (
//               <li key={key}>{key}: {value}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState('');

  const cities = [ // top 200 추천 여행 도시
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
    const getRandomCity = () => {
      const randomIndex = Math.floor(Math.random() * cities.length);
      return cities[randomIndex];
    };

    const fetchWeather = async (city) => {
      try {
        const response = await axios.get(`http://localhost:3000/weather?location=${city}`);
        if (response.data && response.data.data && response.data.data.values) {
          const { humidity, temperature, windSpeed, cloudCover } = response.data.data.values;
          setWeather({ humidity, temperature, windSpeed, cloudCover });
          const fullName = response.data.location.name;
          const shortName = fullName.split(',')[0]; // 쉼표로 분할 후 첫 번째 요소를 선택
          setCityName(shortName);
        } else {
          setWeather(null);
          alert('No weather data found for the selected location.');
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
        alert('Failed to load weather data. Please try again.');
      }
    };

    const city = getRandomCity();
    fetchWeather(city);
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <div>
      <h2>Weather Information for {cityName}</h2> {/* 도시 이름 표시 */}
      {weather ? (
        <div>
          <ul>
            {Object.entries(weather).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading Weather Data...</p>
      )}
    </div>
  );
};

export default WeatherPage;