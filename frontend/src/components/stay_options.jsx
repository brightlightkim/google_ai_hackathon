const StayOptions = () => {
  return (
    <div className='flex-col my-5 border-2 rounded-lg px-4 py-4'>
      <h1 className='text-lg font-bold mb-2'>Stay Options</h1>
      <img
        className='h-[400px] rounded-2xl'
        src='https://cf.bstatic.com/xdata/images/hotel/square600/479049255.webp?k=e9d174198305911587468e0c893de988bb1a86730ff282b5fc0754efa64622d9&o='
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
            src='https://cf.bstatic.com/xdata/images/hotel/square600/479049255.webp?k=e9d174198305911587468e0c893de988bb1a86730ff282b5fc0754efa64622d9&o='
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
        </div>
        <div className='flex flex-col gap-1 flex-1'>
          <img
            className='h-[200px] rounded-2xl'
            src='https://cf.bstatic.com/xdata/images/hotel/square600/479049255.webp?k=e9d174198305911587468e0c893de988bb1a86730ff282b5fc0754efa64622d9&o='
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
        </div>
      </div>
    </div>
  );
};

export default StayOptions;
