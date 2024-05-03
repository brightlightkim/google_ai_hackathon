import gao from '../imgs/Gao.jpg';
import paris from '../imgs/Paris.jpg';
import korea from '../imgs/Korea.png';
import React, { useState } from 'react';

const ExperiencePage = () => {
  const travel_period = "30 May - 4 Jun"
  const area = "Orlando"
  const country = "United States"
  const location = "Theme Parks, Outdoor Activities, Entertainment"
  const location_explanation = `Orlando, situated in central-northern Florida, USA, is a vibrant city celebrated globally for its vast array of tourist attractions and renowned theme parks. It serves as a beacon of entertainment and adventure, drawing visitors from every corner of the globe.

  At the heart of Orlando's allure lies Walt Disney World, a sprawling complex of theme parks, resorts, and entertainment venues that captivates visitors of all ages. With its iconic Magic Kingdom, Epcot Center, Disney's Hollywood Studios, and Disney's Animal Kingdom, Walt Disney World offers a magical experience that transcends generations.
  
  In addition to Disney's enchanting realm, Orlando is home to Universal Orlando Resort, where visitors can immerse themselves in the wizarding world of Harry Potter, explore thrilling rides, and enjoy live entertainment. The resort's Islands of Adventure and Universal Studios Florida provide an exhilarating blend of movie-themed attractions and adrenaline-pumping adventures.
  
  Furthermore, SeaWorld Orlando offers a unique aquatic experience, allowing visitors to interact with marine life, enjoy captivating shows, and embark on thrilling rides. Beyond its world-famous theme parks, Orlando boasts an eclectic mix of cultural attractions, shopping districts, dining establishments, and outdoor recreational opportunities.
  
  Whether exploring the vibrant nightlife of International Drive, discovering the rich cultural heritage of Winter Park, or indulging in outdoor adventures amidst the natural beauty of the surrounding region, Orlando offers something for every traveler's taste and preference. With its warm climate, diverse offerings, and boundless entertainment options, Orlando stands as a premier destination for unforgettable experiences and cherished memories.`

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

  const ImageGrid = ({ images }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full aspect-ratio-1/1">
            <img src={image} alt={`image-${index}`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    );
  };

  const images = {
    korea, 
    paris,
    gao
  }

  const maxLength = 500; 
  const [expanded, setExpanded] = useState(false); // 상태 변수를 생성합니다.

  const truncatedText = location_explanation.length > maxLength ? location_explanation.substring(0, maxLength) + '...' : location_explanation;

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
        <div className='text-2xl font-bold'>{area}, {country}</div>
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

      <span className="w-full overflow-hidden" onClick={handleClick}>
        {expanded ? location_explanation : truncatedText}
        <span className="text-blue-500 cursor-pointer">{expanded ? 'Collapse' : 'Read More'}</span>
      </span>

      
      <div className='grid grid-flow-col grid-flow-row  grid-cols-2 grid-rows-5 pt-2 gap-2 rounded-lg h-[32rem]'>
        <img src={paris} className='col-span-1 row-span-5 ' />
        <img src={korea} className='row-span-3 col-span-2' />
        <img src={gao} className='col-span-2 row-span-2' />
      </div>

      <div className= 'flex justify-between'>
        <div className='my-5'>
          <h1 className='text-slate-500'>{travel_period}</h1>
          <a className="text-slate-500 underline hover:underline cursor-pointer">
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
