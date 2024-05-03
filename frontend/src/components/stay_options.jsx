const StayOptions = () => {
  return (
    <div className='flex-col my-5 border-2 rounded-lg px-4 py-4'>
      <h1 className='text-2xl my-4 font-bold'>Stay Options</h1>
      <img
        className='h-[400px] rounded-2xl'
        src='https://digital.ihg.com/is/image/ihg/intercontinental-seoul-5428732284-4x3'
      />
      <div className='flex justify-center py-2 mb-4 justify-between'>
        <div className='flex flex-col gap-1'>
          <h1 className='font-bold'>SimpleStay Hotel in Jongno</h1>
          <p className='text-slate-800'>
            <b>$85</b> night
          </p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <p className='bg-blue-500 px-2 py-1 rounded-lg text-white'>7.3</p>
          <p className='mr-2 font-medium'>Good</p>
        </div>
      </div>
      <div className='flex justify-items-center gap-2'>
        <div className='flex flex-col gap-1 flex-1'>
          <img
            className='h-[200px] rounded-2xl'
            src='https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/10/19175913/FourSeasons-featured-680x1020.jpg'
          />
          <div className='flex justify-center py-2 mb-4 justify-between'>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>SimpleStay Hotel in Jongno</h1>
              <p className='text-slate-800'>
                <b>$85</b> night
              </p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <p className='bg-blue-500 px-2 py-1 rounded-lg text-white'>7.8</p>
              <p className='mr-2 font-medium'>Good</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1 flex-1'>
          <img
            className='h-[200px] rounded-2xl'
            src='https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/SouthKorea/park-hyatt-seoul-hotel-south-korea-p.jpg'
          />
          <div className='flex justify-center py-2 mb-4 justify-between'>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>SimpleStay Hotel in Jongno</h1>
              <p className='text-slate-800'>
                <b>$85</b> night
              </p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <p className='bg-green-500 px-2 py-1 rounded-lg text-white'>8.5</p>
              <p className='mr-2 font-medium'>Great</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayOptions;
