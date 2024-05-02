import React from "react";
import AnimationWrapper from "../common/page-animation";

const HomePage = () => {
  return (
    <AnimationWrapper>
      {/* <div className='head'>
        <h1>AI Travel Planner</h1>
        <p>Let me build your personal itinerary</p>
      </div>

      <br />
      <div className='search-area'>
        <div className='search-bar'>
          <input type='text' required />
          <div className='where'>Where (Country, city, or landmark)</div> */}
      {/* <input type='date' />
          <input type='text' required />
          <div className='where'>Theme (Outdoor, meseum, food...)</div> */}
      {/* </div>
        <button classname='search=button'>Search</button>

        <br />
        <br />
        <div className='search-option-button'>
          <button>Inspire me where to go</button>
          <button>Build me an itinerary</button>
          <button>Find me a stunning beach</button>
          <button>Find me flights</button>
        </div>
      </div>

      <div className='bucketlist'>
        <h2>Your travel bucketlist starts here</h2>
        <div className='cards'>
          <div className='card'>
            <img src={goaImage} alt='Goa' />
            <div>5-Day Adventure in Goa</div>
            <div>May 20 - Jun 2</div>
            <button>Explore</button>
          </div>
          <div className='card'>
            <img src={parisImage} alt='Paris' />
            <div>5-Day Adventure in Paris</div>
            <div>May 20 - Jun 2</div>
            <button>Explore</button>
          </div>
          <div className='card'>
            <img src={guamImage} alt='Guam' />
            <div>5-Day Adventure in Guam</div>
            <div>May 20 - Jun 2</div>
            <button>Explore</button>
          </div>
          <div className='card'>
            <img src={koreaImage} alt='Korea' />
            <div>5-Day Adventure in Korea</div>
            <div>May 20 - Jun 2</div>
            <button>Explore</button>
          </div>
        </div>
      </div>

      <div className='About'>
        <h2>How to travel with AI</h2>
        <p>
          Layla is your ultimate travel sidekick. Yes, she’s powered by AI, but
          not AI as you know it. Forget the endless hours of trip research,
          she’ll curate personalized ideas for you based on what you actually
          like, showcasing trip destinations through Insta-worthy videos. Once
          you’ve found the right spot, Layla will find you the ideal flights and
          perfect stays, whatever your budget. Partnered with Skyscanner and
          Booking.com, Layla will make your trip planning seamless from dream
          destination to unforgettable exploration.{" "}
        </p>
      </div> */}
      <div class='home'>
        <div class='search-area'>
          <div class='heading'>
            <div class='ai-travel-planner'>AI Travel Planner</div>
            <span class='let-me-build-your-personal-itinerary'>
              Let me build your personal Itinerary
            </span>
          </div>
          <div class='search-1'>
            <div class='container-4'>
              <div class='container-8'>
                <div class='where'>Where</div>
                <span class='country-city-or-landmark'>
                  Country, city, or landmark
                </span>
              </div>
              <div class='container-5'>
                <div class='when'>When</div>
                <span class='add-date'>Add date</span>
              </div>
              <div class='container-2'>
                <div class='theme'>Theme</div>
                <span class='outdoor-museum-food'>
                  Outdoor, museum, food...
                </span>
              </div>
              <div class='container-6'>
                <button class='search'>Search</button>
              </div>
            </div>
            <div class='rectangle-26'></div>
            <div class='rectangle-27'></div>
            <div class='rectangle-28'></div>
          </div>
          <div class='tags'>
            <div class='container-12'>
              <button class='inspire-me-where-to-go'>
                Inspire me where to go
              </button>
            </div>
            <div class='container-9'>
              <button class='build-me-an-itinerary'>
                Build me an itinerary{" "}
              </button>
            </div>
            <div class='container-13'>
              <button class='find-me-astunning-beach'>
                Find me a stunning beach
              </button>
            </div>
            <div class='container-7'>
              <button class='find-me-flights'>Find me flights</button>
            </div>
          </div>
        </div>
        <div class='bucketlist'>
          <div class='your-travel-bucketlist-starts-here'>
            Your travel bucketlist starts here
          </div>
          <div class='container'>
            <div class='goa'>
              <div class='rectangle-12'></div>
              <div class='day-adventure-in-goa'>5-Day Adventure in Goa</div>
              <div class='may-29-jun-2'>May 29 - Jun 2</div>
              <div class='container-3'>
                <button class='explore'>Explore</button>
              </div>
            </div>
            <div class='paris'>
              <div class='rectangle-15'></div>
              <div class='day-adventure-in-paris'>5-Day Adventure in Paris</div>
              <div class='may-29-jun-21'>May 29 - Jun 2</div>
              <div class='container-10'>
                <button class='explore-1'>Explore</button>
              </div>
            </div>
            <div class='guam'>
              <div class='rectangle-18'></div>
              <div class='day-adventure-in-guam'>5-Day Adventure in Guam</div>
              <div class='may-29-jun-22'>May 29 - Jun 2</div>
              <div class='container-14'>
                <button class='explore-2'>Explore</button>
              </div>
            </div>
            <div class='korea'>
              <div class='rectangle-21'></div>
              <div class='day-adventure-in-korea'>5-Day Adventure in Korea</div>
              <div class='may-29-jun-23'>May 29 - Jun 2</div>
              <div class='container-1'>
                <button class='explore-3'>Explore</button>
              </div>
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
    </AnimationWrapper>
  );
};

export default HomePage;
