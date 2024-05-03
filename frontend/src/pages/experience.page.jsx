import gao from '../imgs/Gao.jpg';
import paris from '../imgs/Paris.jpg';
import korea from '../imgs/Korea.png';
import React, { useState } from 'react';
import gemini_data from '../../../backend/gemini_response.json';

const ExperiencePage = () => {
  const travel_period = gemini_data["Travel Summary"]['travel_dates']['date_from'] + ' - ' + gemini_data["Travel Summary"]['travel_dates']['date_to'];
  const area = 'Seoul';
  const country = 'South Korea';
  const location = 'Theme Parks, Outdoor Activities, Entertainment';
  const location_explanation = `Seoul, the vibrant capital city of South Korea, is an incredibly diverse and dynamic destination, offering a captivating blend of tradition and modernity. Renowned for its cutting-edge technology, futuristic architecture, bustling streets, and rich cultural heritage, Seoul is a fascinating city that has something to offer for every type of traveler. Here's a description of Seoul as a tourist place `;

  const maxLength = 500;
  const [expanded, setExpanded] = useState(false); // 상태 변수를 생성합니다.

  const truncatedText =
    location_explanation.length > maxLength
      ? location_explanation.substring(0, maxLength) + '...'
      : location_explanation;

  const handleClick = () => {
    setExpanded(!expanded); // 클릭할 때마다 expanded 상태를 토글합니다.
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
        <div className='text-2xl font-bold'>
          {area}, {country}
        </div>
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
      <h1 className='text-2xl my-4 font-bold'>Experiences</h1>

      <span className='w-full overflow-hidden' onClick={handleClick}>
        {expanded ? location_explanation : truncatedText}
        <span className='text-blue-500 cursor-pointer'>
          {expanded ? 'Collapse' : 'Read More'}
        </span>
      </span>

      <div className='grid grid-flow-col grid-flow-row  grid-cols-2 grid-rows-5 pt-2 gap-2 rounded-lg h-[32rem]'>
        <img src={paris} className='col-span-1 row-span-5 ' />
        <img src={korea} className='row-span-3 col-span-2' />
        <img src={gao} className='col-span-2 row-span-2' />
      </div>

      <div className='flex justify-between'>
        <div className='my-5'>
          <h1 className='text-slate-500'>{travel_period}</h1>
          <a className='text-slate-500 underline hover:underline cursor-pointer'>
            Edit Details
          </a>
        </div>

        <div className='flex gap-2 my-5'>
          <div className='flex flex-col rounded-lg px-6 py-3 bg-teal-100 text-slate-400'>
            <h1 className='text-lg'>Plan</h1>
          </div>
          <div className='flex flex-col rounded-lg px-6 py-3 bg-teal-400 text-white'>
            <h1 className='text-lg'>&#x2661; Save</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
