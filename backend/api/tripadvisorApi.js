import axios from 'axios';
const apikey = process.env.TRIPADVISOR_ACCESS_KEY
export async function getLocationId(prompt) {
  try {
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apikey}&searchQuery=${encodeURIComponent(prompt)}`;

    const response = await axios.get(url);
    const data = response.data;
    // 첫 번째 검색 결과의 location ID 가져오기
    const locationId = data.data && data.data.length > 0 ? data.data[0].location_id : null;
    return locationId;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getLocationDetails(prompt) {
  try{
    const location_id = await getLocationId(prompt);
    const url = `https://api.content.tripadvisor.com/api/v1/location/${location_id}/details?key=${apikey}`;
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data.description);
    const locationDetails = data;
    // console.log(locationDetails);
    return locationDetails;
  }
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}
export async function getLocationPhotos(prompt) {
  try{
    const location_id = await getLocationId(prompt);
    console.log(location_id);
    const url = `https://api.content.tripadvisor.com/api/v1/location/${location_id}/photos?key=${process.env.TRIPADVISOR_ACCESS_KEY}&limit=3`;
    const response = await axios.get(url);
    // console.log(response);
    const data = response.data;
    // console.log(data);
    const locationPhotoes = data;
    // console.log(locationPhotoes);
    return locationPhotoes;
  }
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getLocationReviews(prompt) {
  try{
    const location_id = await getLocationId(prompt);
    console.log(location_id);
    const url = `https://api.content.tripadvisor.com/api/v1/location/${location_id}/reviews?key=${apikey}&language=en`;
    const response = await axios.get(url);
    console.log(response);
    const data = response.data;
    // console.log(data);
    const locationReviews = data;
    // console.log(locationDetails);
    return locationReviews;
  }
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}
