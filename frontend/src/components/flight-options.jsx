import React, { useState, useEffect } from 'react';
import {
  getRoundTrip,
  getOneWayTrip,
  getConfig,
} from '../../../backend/api/skyscannerApi';
const FlightOptions = () => {
  const [roundTripItineraries, setRoundTripItineraries] = useState([]);
  const [config, setConfig] = useState(null);

  async function fetchData() {
    const itineraries = await getRoundTrip(
      'Provo',
      'Korea',
      '2024-05-30',
      '2024-06-01'
    );
    const configData = await getConfig();

    setRoundTripItineraries(itineraries);
    setConfig(configData);
  }

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  return (
    <div className='flex-col my-5 border-2 rounded-lg px-4 py-4'>
      <h1 className='text-2xl my-4 font-bold'>Flight Options</h1>
      {roundTripItineraries
        ? roundTripItineraries.map((itinerary, index) => (
            <div
              key={index}
              className='flex bg-gray-100 justify-center items-center py-2 mb-4 rounded-lg p-2'
            >
              <div className='flex flex-col gap-1 flex-1'>
                <p>{itinerary.fromCity}</p>
                <h1 className='text-xl font-bold'>{itinerary.fromAirport}</h1>
                <p>{itinerary.departDate}</p>
              </div>
              <div className='flex items-center flex-col gap-1 flex-1'>
                <p>{itinerary.duration}</p>
              </div>
              <div className='flex items-end flex-col gap-1 flex-1'>
                <p>{itinerary.toCity}</p>
                <h1 className='text-xl font-bold'>{itinerary.toAirport}</h1>
                <p>{itinerary.returnDate}</p>
              </div>
            </div>
          ))
        : ''}
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/14/Skyscanner_Icon_2020.svg'
            className='w-8'
          />
          <p className='text-gray-500'>Powered by Skyscanner</p>
        </div>
        <h1 className='flex items-center gap-2'>
          from<b className='text-lg'>$450</b>
        </h1>
      </div>
      <button className='border-2 w-full rounded-lg py-2 text-md mt-4 font-bold hover:bg-gray-200 hover:text-gray-500'>
        See more
      </button>
    </div>
  );
};
//   return (
//     <div className='flex-col my-5 border-2 rounded-lg px-4 py-4'>
//       <h1 className='text-2xl my-4 font-bold'>Flight Options</h1>
//       <div className='flex bg-gray-100 justify-center items-center py-2 mb-4 rounded-lg p-2'>
//         <div className='flex flex-col gap-1 flex-1'>
//           <p>Provo</p>
//           <h1 className='text-xl font-bold'>PVU</h1>
//           <p>30 May</p>
//         </div>
//         <div className='flex items-center flex-col gap-1 flex-1'>
//           <p>10h 43m</p>
//           <div className='flex gap-4 w-[200px] items-center justify-center'>
//             <div className='border-b-2 border-slate-400 w-1/2'></div>
//             <i className='fi fi-br-plane-departure'></i>
//             <div className='border-b-2 border-slate-400 w-1/2'></div>
//           </div>
//           <p>2 stops</p>
//         </div>
//         <div className='flex items-end flex-col gap-1 flex-1'>
//           <p>Korea</p>
//           <h1 className='text-xl font-bold'>ICN</h1>
//           <p>30 May</p>
//         </div>
//       </div>
//       <div className='flex bg-gray-100 justify-center items-center py-2 mb-4 rounded-lg p-2'>
//         <div className='flex flex-col gap-1 flex-1'>
//           <p>Korea</p>
//           <h1 className='text-xl font-bold'>ICN</h1>
//           <p>30 May</p>
//         </div>
//         <div className='flex items-center flex-col gap-1 flex-1'>
//           <p>10h 43m</p>
//           <div className='flex gap-4 w-[200px] items-center justify-center'>
//             <div className='border-b-2 border-slate-400 w-1/2'></div>
//             <i className='fi fi-br-plane-arrival'></i>
//             <div className='border-b-2 border-slate-400 w-1/2'></div>
//           </div>
//           <p>2 stops</p>
//         </div>
//         <div className='flex items-end flex-col gap-1 flex-1'>
//           <p>Provo</p>
//           <h1 className='text-xl font-bold'>PVU</h1>
//           <p>30 May</p>
//         </div>
//       </div>
//       <div className='flex justify-between'>
//         <div className="flex items-center gap-2">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Skyscanner_Icon_2020.svg" className="w-8" />
//           <p className="text-gray-500">Powered by Skyscanner</p>
//         </div>
//         <h1 className="flex items-center gap-2">
//           from<b className="text-lg">$450</b>
//         </h1>
//       </div>
//       <button className='border-2 w-full rounded-lg py-2 text-md mt-4 font-bold hover:bg-gray-200 hover:text-gray-500'>
//         See more
//       </button>
//     </div>
//   );
// };

export default FlightOptions;
