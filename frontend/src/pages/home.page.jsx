import React from 'react';
import AnimationWrapper from '../common/page-animation';
import gao from '../imgs/Gao.jpg';
import paris from '../imgs/Paris.jpg';
import guam from '../imgs/Guam.png';
import korea from '../imgs/Korea.png';
import WeatherWidget from '../components/weatherWidget.component';

const HomePage = () => {
  return (
    <div class='home'>
      <div class='search-area'>
        <div class='heading'>
          <div class='ai-travel-planner'>AI Travel Planner</div>
          <span class='let-me-build-your-personal-itinerary'>
            Let me build your personal Itinerary
          </span>
        </div>
        <div className='flex justify-center gap-1 pb-10'>
          <div class='radius-gradient-contatiner-l'>
            <div class='search-input-box-l'>
              <div class='container-8'>
                <div className='text-lg text-gray-400 font-bold'>Where</div>
                <span class='country-city-or-landmark'>
                  Country, city, or landmark
                </span>
              </div>
            </div>
          </div>
          <div class='radius-gradient-contatiner-c'>
            <div class='search-input-box-c'>
              <div class='container-8'>
                <div className='text-lg text-gray-400 font-bold'>When</div>
                <span class='country-city-or-landmark'>Add date</span>
              </div>
            </div>
          </div>
          <div class='radius-gradient-contatiner-r'>
            <div class='search-input-box-r'>
              <div class='container-8'>
                <div className='text-lg text-gray-400 font-bold'>Theme</div>
                <span class='country-city-or-landmark'>
                  Outdoor, museum, food...
                </span>
              </div>
            </div>
          </div>
          <button class='container-6'>
            <div className='text-lg font-bold'>Search</div>
          </button>
        </div>
        <div className='flex gap-3 '>
          <button class='bottom-button'>
            <div class='bottom-button-text'>Inspire me where to go</div>
          </button>
          <button class='bottom-button'>
            <div class='bottom-button-text'>Build me an itinerary </div>
          </button>
          <button class='bottom-button'>
            <div class='bottom-button-text'>Find a stunning beach</div>
          </button>
          <button class='bottom-button'>
            <div class='bottom-button-text'>Find me flights</div>
          </button>
        </div>
      </div>
      <div class='bucketlist'>
        <div class='your-travel-bucketlist-starts-here'>
          Your travel bucketlist starts here
        </div>
        <div class='container'>
          <div class='goa'>
            <img src={gao} class='rounded-t-lg mb-2' />
            <div class='weather-widget'>
              <WeatherWidget city="Goa"/>
            </div>
            <div class='day-adventure-in-goa'>5-Day Adventure in Goa</div>
            <div class='may-29-jun-2'>May 29 - Jun 2</div>
            <button class='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
          <div class='paris'>
            <img src={paris} class='rounded-t-lg mb-2' />
            <div class='weather-widget'>
              <WeatherWidget city="Paris"/>
            </div>
            <div class='day-adventure-in-paris'>5-Day Adventure in Paris</div>
            <div class='may-29-jun-21'>May 29 - Jun 2</div>
            <button class='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
          <div class='guam'>
            <img src={guam} class='rounded-t-lg mb-2' />
            <div class='weather-widget'>
              <WeatherWidget city="Guam"/>
            </div>
            <div class='day-adventure-in-guam'>5-Day Adventure in Guam</div>
            <div class='may-29-jun-22'>May 29 - Jun 2</div>
            <button class='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
          <div class='korea'>
            <img src={korea} class='rounded-t-lg mb-2' />
            <div class='weather-widget'>
              <WeatherWidget city="Seoul"/>
            </div>
            <div class='day-adventure-in-korea'>5-Day Adventure in Seoul</div>
            <div class='may-29-jun-23'>May 29 - Jun 2</div>
            <button className='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
        </div>
      </div>
      <div class='about'>
        <div class='how-to-travel-with-ai'>How to travel with AI</div>
        <div class='container-11'>
          <div class='this-is-about-the-app'>This is about the app</div>
          <div class='image-9'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
