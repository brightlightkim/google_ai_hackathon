import gao from '../imgs/Gao.jpg';
import paris from '../imgs/Paris.jpg';
import korea from '../imgs/Korea.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StayOptions from '../components/stay_options';
import FlightOptions from '../components/flight-options';
import ExperiencePage from './experience.page';

const baseUrl = 'http://localhost:3000';

async function getTripPhotos() {
  // get place id
  let config = {
    params: {
      prompt: 'Korea',
    },
  };
  let response = await axios.get(`${baseUrl}/getLocationPhotos`, config);

  if (!response.data.locationPhotoes.data) {
    // throw new Error(`No photos available of ${props.prompt}`);
    throw new Error(`No photos available of Seoul Korea`);
  }

  return response.data.locationPhotoes.data[0].images.original.url;
}

async function getLocationRating() {
  let body = {
    textQuery: 'Landmarks in Seoul, Korea',
  };

  const response = await axios.post(`${baseUrl}/place-reviews`, body, {});
  let rating = 0;
  console.log(response);
  response.data.places.map((place) => {
    rating += place.rating;
  });
  rating = rating / response.data.places.length;

  return rating.toFixed(1);
}

const TravelPlanPage = () => {
  // states for budget
  const [range, setRange] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [transportation, setTransportation] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [flight, setFlight] = useState('');
  const [activities, setActivities] = useState('');
  const [total, setTotal] = useState('');

  // states for itinerary
  const [dest, setDest] = useState('');
  const [details, setDetails] = useState([]);
  const [rating, setRating] = useState(null);
  const [photo, setPhoto] = useState('');

  useEffect(async () => {
    setRating(await getLocationRating());
    // setPhoto(await getTripPhotos());
  }, []);

  const extimated_budget = {
    Range: '$2,500 - $3,500',
    'Food price': 'Estimated $500 - $700',
    Transportation:
      'Estimated $300 - $500 (including local travel within Honolulu)',
    Accommodation:
      'Estimated $800 - $1,200 (depending on hotel choice and length of stay)',
    Flight: 'Estimated $600 - $800 (from Provo to Honolulu)',
    Activities: 'Estimated $200 - $300',
    Total: 'Varies depending on specific choices and spending habits',
  };

  return (
    <div className='flex flex-col m-4'>
      {/* Title */}
      <div className='flex justify-center py-2 mb-4 justify-between'>
        <button className='flex justify-center items-center'>
          <i
            className='fi fi-rr-cross-circle'
            style={{ fontSize: '24px', color: 'black' }}
          ></i>
        </button>
        <div className='text-2xl font-bold'>Seoul, South Korea</div>
        <button className='flex justify-center items-center bg-teal-200 hover:bg-teal-300 px-4 rounded-md gap-1'>
          <p className='text-teal-600'>Share</p>
          <i
            className='fi fi-rr-share'
            style={{ color: 'rgb(13 148 136)' }}
          ></i>
        </button>
      </div>
      {/* Draw Line */}
      <div className='flex justify-center'>
        <div className='border-b-2 border-slate-200 w-full'></div>
      </div>
      <h1 className='text-2xl my-4 font-bold'>Itinerary</h1>
      <img src={korea} className='rounded-lg mb-2 h-48' />

      {/* Day Box */}
      <div className='flex gap-2 my-5'>
        <div className='flex flex-col rounded-lg px-6 py-1 border-2 border-black'>
          <h1 className='text-lg'>Day1</h1>
          <h1 className='text-slate-500'>Seoul</h1>
        </div>
        <div className='flex flex-col rounded-lg px-6 py-1 border-2 '>
          <h1 className='text-lg'>Day2</h1>
          <h1 className='text-slate-500'>Seoul</h1>
        </div>
        <div className='flex flex-col rounded-lg px-6 py-1 border-2 '>
          <h1 className='text-lg'>Day3</h1>
          <h1 className='text-slate-500'>Seoul</h1>
        </div>
      </div>

      {/* Day Plan */}
      <div className='flex flex-col gap-2'>
        <div className='flex-col my-5 border-2 rounded-lg px-4 py-4'>
          <div className='flex flex-row justify-between items-center gap-2 my-5'>
            <h1 className='text-lg font-bold'>Magical Seoul Tour with KPOP</h1>
            {rating ? (
              <h1 className='text-lg font-bold'>Ratings: {rating}</h1>
            ) : (
              <h1 className='text-lg font-bold'>Loading rating...</h1>
            )}
          </div>
          <h1 className='text-slate-500 py-2'>Seoul</h1>
          <button className='flex gap-2 border-2 rounded-lg px-2 py-1'>
            <img
              className='h-6 w-6'
              src='https://www.cdnlogo.com/logos/b/46/booking-com.svg'
            />
            <p className='text-slate-600'>Find Amazing Hotel</p>
          </button>
          <h1 className='text-slate-800 py-2 font-bold'>Morning</h1>
          <p className='text-slate-500'>
            Start the day with a hearty breakfast.
          </p>
          <button className='border-2 w-full rounded-lg py-2 text-md mt-4 font-bold'>
            See more
          </button>
        </div>
      </div>

      {/* Experience Page */}
      <div className='flex flex-col gap-2 my-5 border-2 rounded-lg p-4'>
        <ExperiencePage />
      </div>

      {/* Stay Options */}
      <StayOptions />

      {/* Flight Options */}
      <FlightOptions />

      {/* Estimated Budget */}
      <div className='flex flex-col gap-2 my-5 border-2 rounded-lg p-4'>
        <h1 className='text-2xl font-bold'>Estimated Budget</h1>
        <div className='flex flex-col gap-2'>
          {Object.entries(extimated_budget).map(([key, value]) => (
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>{key}</p>
              <p className='text-lg'>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TravelPlanPage;
