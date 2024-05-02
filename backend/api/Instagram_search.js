import axios from 'axios';
const apikey = process.env.INSTAGRAM_KEY;

export async function getHashtagSearch(prompt) {
  try {
    const options = {
      method: 'GET',
      url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/hashtag',
      params: { hashtag: prompt },
      headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
}
