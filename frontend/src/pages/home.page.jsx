import AnimationWrapper from '../common/page-animation';
import gao from '../imgs/Gao.jpg';
import paris from '../imgs/Paris.jpg';
import guam from '../imgs/Guam.png';
import korea from '../imgs/Korea.png';
import WeatherWidget from '../components/weatherWidget.component';
import React, { useState, useContext, useRef } from 'react';
import { TravelPlanContext } from '../App';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  // Get the TravelPlanContext
  const { travelPlan, setTravelPlan } = useContext(TravelPlanContext);
  const travelRef = useRef();
  // State to manage display of input fields
  const [editWhere, setEditWhere] = useState(false);
  const [editWhen, setEditWhen] = useState(false);
  const [editTheme, setEditTheme] = useState(false);

  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');
  const [theme, setTheme] = useState('');

  // Handlers for focus and blur events
  const handleFocus = (setter) => {
    setter(true);
  };

  const handleBlur = (setter) => {
    setter(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(where, when, theme);

    let form = new FormData(travelRef.current);

    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/build-travel-plan', formData)
      .then((response) => {
        setTravelPlan(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='home'>
      <div className='search-area'>
        <div className='heading'>
          <div className='ai-travel-planner'>AI Travel Planner</div>
          <span className='let-me-build-your-personal-itinerary'>
            Let me build your personal Itinerary
          </span>
        </div>
        <form ref={travelRef} className='flex justify-center gap-1 pb-10'>
          <div className='radius-gradient-contatiner-l'>
            <div className='search-input-box-l'>
              <div className='container-8'>
                <div className='text-lg text-gray-400 font-bold'>Where</div>
                <input
                  name='travelFrom'
                  className='bg-transparent text-white outline-none focus:ring-0 focus:ring-offset-0'
                  autoFocus
                  placeholder='Travel To'
                />
                <input
                  name='travelTo'
                  className='bg-transparent text-white outline-none focus:ring-0 focus:ring-offset-0'
                  autoFocus
                  placeholder='Travel From'
                />
              </div>
            </div>
          </div>
          <div className='radius-gradient-contatiner-c'>
            <div className='search-input-box-c'>
              <div className='container-8'>
                <div className='text-lg text-gray-400 font-bold'>When</div>
                <input
                  name='fromDate'
                  className='bg-transparent text-gray-400 outline-none focus:ring-0 focus:ring-offset-0'
                  type='date'
                  autoFocus
                  placeholder='Add date'
                />
                <input
                  name='toDate'
                  className='bg-transparent text-gray-400 outline-none focus:ring-0 focus:ring-offset-0'
                  type='date'
                  autoFocus
                  placeholder='Add date'
                />
              </div>
            </div>
          </div>
          <div className='radius-gradient-contatiner-r'>
            <div className='search-input-box-r'>
              <div className='container-8'>
                <div className='text-lg text-gray-400 font-bold'>Theme</div>
                <input
                  name='specificActivity'
                  className='bg-transparent text-white outline-none focus:ring-0 focus:ring-offset-0'
                  autoFocus
                  placeholder='Activities'
                />
                <input
                  name='travelWith'
                  className='bg-transparent text-white outline-none focus:ring-0 focus:ring-offset-0'
                  autoFocus
                  placeholder='Travel With'
                />
              </div>
            </div>
          </div>
          <NavLink
            to='/travel_plan'
            className='container-6'
            // onClick={handleSearch}
          >
            <div className='text-lg font-bold'>Search</div>
          </NavLink>
        </form>
        <div className='flex gap-3 '>
          <button className='bottom-button'>
            <div className='bottom-button-text'>Inspire me where to go</div>
          </button>
          <button className='bottom-button'>
            <div className='bottom-button-text'>Build me an itinerary </div>
          </button>
          <button className='bottom-button'>
            <div className='bottom-button-text'>Find a stunning beach</div>
          </button>
          <button className='bottom-button'>
            <div className='bottom-button-text'>Find me flights</div>
          </button>
        </div>
      </div>
      <div className='bucketlist'>
        <div className='your-travel-bucketlist-starts-here'>
          Your travel bucketlist starts here
        </div>
        <div className='container'>
          <div className='goa'>
            <img src={gao} className='rounded-t-lg mb-2' />
            <div className='weather-widget'>
              {/* <WeatherWidget city='Goa' /> */}
            </div>
            <div className='day-adventure-in-goa'>5-Day Adventure in Goa</div>
            <div className='may-29-jun-2'>May 29 - Jun 2</div>
            <button className='container-10'>
              <div className='explore-1'>Explore</div>
            </button>
          </div>
          <div className='paris'>
            <img src={paris} className='rounded-t-lg mb-2' />
            <div className='weather-widget'>
              {/* <WeatherWidget city='Paris' /> */}
            </div>
            <div className='day-adventure-in-paris'>
              5-Day Adventure in Paris
            </div>
            <div className='may-29-jun-21'>May 29 - Jun 2</div>
            <button className='container-10'>
              <div className='explore-1'>Explore</div>
            </button>
          </div>
          <div className='guam'>
            <img src={guam} className='rounded-t-lg mb-2' />
            <div className='weather-widget'>
              {/* <WeatherWidget city='Guam' /> */}
            </div>
            <div className='day-adventure-in-guam'>5-Day Adventure in Guam</div>
            <div className='may-29-jun-22'>May 29 - Jun 2</div>
            <button className='container-10'>
              <div className='explore-1'>Explore</div>
            </button>
          </div>
          <div className='korea'>
            <img src={korea} className='rounded-t-lg mb-2' />
            <div className='weather-widget'>
              {/* <WeatherWidget city='Seoul' /> */}
            </div>
            <div className='day-adventure-in-korea'>
              5-Day Adventure in Seoul
            </div>
            <div className='may-29-jun-23'>May 29 - Jun 2</div>
            <button className='container-10'>
              <div className='explore-1'>Explore</div>
            </button>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='how-to-travel-with-ai'>How to travel with AI</div>
        <div className='container-11'>
          <div className='this-is-about-the-app'>
            In the heart of the bustling city, a small, quaint café sat tucked
            away on a narrow, cobblestone street. Its charming exterior, adorned
            with hanging plants and vintage signage, beckoned passersby to step
            inside. The café, known for its aromatic coffee and freshly baked
            pastries, served as a tranquil oasis amidst the urban chaos.
            Patrons, ranging from busy professionals to leisurely readers, found
            solace at the rustic wooden tables, where the soft hum of whispered
            conversations mingled with the clinking of coffee cups.
          </div>
          <iframe
            className='youtube'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/c-ptvXgUfdg?si=XbktqTfryLlrhCoa'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
