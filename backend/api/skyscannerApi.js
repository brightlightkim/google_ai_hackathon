import axios from 'axios';

const apikey = import.meta.env.SKYSCANNER_ACCESS_KEY
export async function getConfig(){
    const options = {
            method: 'GET',
            url: 'https://sky-scanner3.p.rapidapi.com/get-config',
            headers: {
              'X-RapidAPI-Key': apikey,
              'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
            }
          };
          try {
              const response = await axios.request(options);
            //   console.log(response.data);
          } catch (error) {
              console.error(error);
          }
}
export async function getEntityId(prompt){
      try {
        const options = {
            method: 'GET',
            url: 'https://sky-scanner3.p.rapidapi.com/flights/auto-complete',
            params: {query: prompt},
            headers: {
              'X-RapidAPI-Key': apikey,
              'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            // console.log(response.data.data[0].presentation.id)
            return response.data.data[0].presentation.id;
        } catch (error) {
            console.error(error);
        }
      } catch (error) {
          console.error(error);
      }
}

export async function getRoundTrip(fromCity, toCity, departDate, returnDate) {
    try {
        const fromCityId = await getEntityId(fromCity);
        const toCityId = await getEntityId(toCity);
        const options = {
            method: 'GET',
            url: 'https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip',
            params: {
              fromEntityId: fromCityId,
              toEntityId: toCityId,
              departDate: departDate,
              returnDate: returnDate
            },
            headers: {
              'X-RapidAPI-Key': apikey,
              'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              const itineraries = response.data.data.itineraries.slice(0, 3);
              return itineraries
              
          } catch (error) {
              console.error(error);
          }
    }
    catch (error) {
        console.error('Error:', error);
        return null;
    }
    
}

export async function getOneWayTrip(fromCity, toCity, departDate) {
    try {
        const fromCityId = await getEntityId(fromCity);
        const toCityId = await getEntityId(toCity);
        const options = {
            method: 'GET',
            url: 'https://sky-scanner3.p.rapidapi.com/flights/search-one-way',
            params: {
              fromEntityId: fromCityId,
              toEntityId: toCityId,
              departDate: departDate
            },
            headers: {
              'X-RapidAPI-Key': apikey,
              'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              const itineraries = response.data.data.itineraries.slice(0, 3);
              return itineraries
          } catch (error) {
              console.error(error);
          }
    }
    catch (error) {
        console.error('Error:', error);
        return null;
    }
    
}
