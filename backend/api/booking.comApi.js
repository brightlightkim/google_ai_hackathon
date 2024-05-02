import axios from 'axios';
const apikey = process.env.BOOKING_ACCESS_KEY
export async function getDestid(prompt){
      try {
        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
            params: {query: prompt},
            headers: {
              'X-RapidAPI-Key': apikey,
              'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
          };
        const response = await axios.request(options);
        const data = response.data
        console.log(data);
      } catch (error) {
          console.error(error);
      }
}

export async function searchHotels(prompt) {
    const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
    params: {
        dest_id: '-2092174',
        search_type: 'CITY',
        arrival_date: '<REQUIRED>',
        departure_date: '<REQUIRED>',
        adults: '1',
        children_age: '0,17',
        room_qty: '1',
        page_number: '1',
        languagecode: 'en-us',
        currency_code: 'AED'
    },
    headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
