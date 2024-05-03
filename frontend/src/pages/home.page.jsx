import React, { useState } from "react";

import gao from "../imgs/Gao.jpg";
import guam from "../imgs/Guam.png";
import korea from "../imgs/Korea.png";
import paris from "../imgs/Paris.jpg";

const HomePage = () => {
  // State to manage display of input fields
  const [editWhere, setEditWhere] = useState(false);
  const [editWhen, setEditWhen] = useState(false);
  const [editTheme, setEditTheme] = useState(false);

  // Handlers for focus and blur events
  const handleFocus = (setter) => {
    setter(true);
  };

  const handleBlur = (setter) => {
    setter(false);
  };

  return (
    <div className='home'>
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
                {/* <span class='country-city-or-landmark'>
                  Country, city, or landmark
                </span> */}
                {editWhere ? (
                  <input
                    className='input-editable'
                    autoFocus
                    onBlur={() => handleBlur(setEditWhere)}
                  />
                ) : (
                  <span
                    className='country-city-or-landmark'
                    onClick={() => handleFocus(setEditWhere)}
                  >
                    Country, city, or landmark
                  </span>
                )}
              </div>
            </div>
          </div>
          <div class='radius-gradient-contatiner-c'>
            <div class='search-input-box-c'>
              <div class='container-8'>
                <div className='text-lg text-gray-400 font-bold'>When</div>
                {/* <span class='country-city-or-landmark'>Add date</span> */}
                {editWhen ? (
                  <input
                    type='date'
                    className='input-editable'
                    autoFocus
                    onBlur={() => handleBlur(setEditWhen)}
                  />
                ) : (
                  <span
                    className='country-city-or-landmark'
                    onClick={() => handleFocus(setEditWhen)}
                  >
                    Add date
                  </span>
                )}
              </div>
            </div>
          </div>
          <div class='radius-gradient-contatiner-r'>
            <div class='search-input-box-r'>
              <div class='container-8'>
                <div className='text-lg text-gray-400 font-bold'>Theme</div>
                {/* <span class='country-city-or-landmark'>
                  Outdoor, museum, food...
                </span> */}
                {editTheme ? (
                  <input
                    className='input-editable'
                    autoFocus
                    onBlur={() => handleBlur(setEditTheme)}
                  />
                ) : (
                  <span
                    className='country-city-or-landmark'
                    onClick={() => handleFocus(setEditTheme)}
                  >
                    Outdoor, museum, food...
                  </span>
                )}
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
            <img src={gao} className='rounded-t-lg mb-2' />
            <div class='day-adventure-in-goa'>5-Day Adventure in Goa</div>
            <div class='may-29-jun-2'>May 29 - Jun 2</div>
            <button class='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
          <div class='paris'>
            <img src={paris} className='rounded-t-lg mb-2' />
            <div class='day-adventure-in-paris'>5-Day Adventure in Paris</div>
            <div class='may-29-jun-21'>May 29 - Jun 2</div>
            <button class='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
          <div class='paris'>
            <img src={guam} className='rounded-t-lg mb-2' />
            <div class='day-adventure-in-paris'>5-Day Adventure in Guam</div>
            <div class='may-29-jun-22'>May 29 - Jun 2</div>
            <button class='container-10'>
              <div class='explore-1'>Explore</div>
            </button>
          </div>
          <div class='paris'>
            <img src={korea} className='rounded-t-lg mb-2' />
            <div class='day-adventure-in-paris'>5-Day Adventure in Korea</div>
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
          <div class='this-is-about-the-app'>
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
