import React from "react";
import AnimationWrapper from "../common/page-animation";
import goaImage from "../imgs/Gao.jpg";
import guamImage from "../imgs/Guam.png";
import koreaImage from "../imgs/Korea.png";
import parisImage from "../imgs/Paris.jpg";

const HomePage = () => {
  return (
    <AnimationWrapper>
      <div className='head'>
        <h1>AI Travel Planner</h1>
        <p>Let me build your personal itinerary</p>
      </div>

      <br />
      <div className='search-area'>
        <div className='search-bar'>
          <input type='text' required />
          <div className='where'>Where (Country, city, or landmark)</div>
          {/* <input type='date' />
          <input type='text' required />
          <div className='where'>Theme (Outdoor, meseum, food...)</div> */}
        </div>
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
      </div>
    </AnimationWrapper>
  );
};

export default HomePage;
