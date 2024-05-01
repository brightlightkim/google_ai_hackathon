import axios from 'axios';

const getWeather = async (location) => {
  const options = {
    method: 'GET',
    url: 'https://api.tomorrow.io/v4/weather/realtime',
    params: {
      location: location,
      apikey: process.env.TOMORROW_IO_API_KEY
    },
    headers: {
      accept: 'application/json'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Weather API error:', error);
    throw error; // 오류를 다시 throw하여 호출자가 처리할 수 있도록 합니다.
  }
};

export default getWeather;
