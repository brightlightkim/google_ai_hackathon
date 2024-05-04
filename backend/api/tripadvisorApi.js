import axios from 'axios';
const apikey = process.env.TRIPADVISOR_ACCESS_KEY
export async function getLocationId(prompt) {
  try {
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apikey}&searchQuery=${encodeURIComponent(prompt)}`;

    const response = await axios.get(url);
    const data = response.data;
    const locationIds = [];
    for (let i = 0; i < Math.min(3, data.data.length); i++) {
      locationIds.push(data.data[i].location_id);
    }
    console.log(locationIds);
    return locationIds;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getLocationDetails(prompt) {
  try{
    const location_ids = await getLocationId(prompt);
    const locationDetails = [];
    for(let id in location_ids){
      const location_id = location_ids[id];
      const url = `https://api.content.tripadvisor.com/api/v1/location/${location_id}/details?key=${apikey}`;
      const response = await axios.get(url);
      const data = response.data;
      // console.log(data.description);
      locationDetails.push(data);
      // console.log(locationDetails);
    }
    return locationDetails;
  }
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}
export async function getLocationPhotos(prompt) {
  try{
    const location_ids = await getLocationId(prompt);
    const locationPhotos = [];

    for(let id in location_ids){
      const location_id = location_ids[id];
      const url = `https://api.content.tripadvisor.com/api/v1/location/${location_id}/photos?key=${apikey}&limit=1`;
      const response = await axios.get(url);
      const data = response.data;
      locationPhotos.push(data);
    }
    return locationPhotos;
  }
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getLocationReviews(prompt) {
  try{
    const location_ids = await getLocationId(prompt);
    const locationReviews = [];
    for(let id in location_ids){
      const location_id = location_ids[id];
      const url = `https://api.content.tripadvisor.com/api/v1/location/${location_id}/reviews?key=${apikey}&limit=1`;
      const response = await axios.get(url);
      const data = response.data;
      locationReviews.push(data);
    }
    return locationReviews;
  }
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}
