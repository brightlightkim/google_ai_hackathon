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
        const data = response.data.data
        // console.log(data[0].dest_id);
        return data;
      } catch (error) {
          console.error(error);
      }
}

export async function getHotels(prompt,arrival,departure) {
    try {
        const data = await getDestid(prompt);
        for (const i in data){
            const dest_id = data[i].dest_id;
            const search_type = data[i].search_type
            // console.log(dest_id,search_type);
            const options = {
                method: 'GET',
                url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
                params: {
                    dest_id: dest_id,
                    search_type: search_type,
                    arrival_date: arrival,
                    departure_date: departure,
                    // adults: '1',
                    // children_age: '0,17',
                    // room_qty: '1',
                    // page_number: '1',
                    // languagecode: 'en-us',
                    // currency_code: 'AED'
                },
                headers: {
                    'X-RapidAPI-Key': apikey,
                    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
                }
                };
            
                try {
                    const response = await axios.request(options);
                    // console.log(response.data);
                    // It returns a bunch of properties of the hotel object
                    return response.data
                } catch (error) {
                    console.error(error);
                }
        }
        
    }
    catch (error) {
        console.error('Error:', error);
        return null;
    }
    
}
