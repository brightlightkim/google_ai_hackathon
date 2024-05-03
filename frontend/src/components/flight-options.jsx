const FlightOptions = () => {
  return (
    <div className='flex-col my-5 border-2 rounded-lg px-4 py-4'>
      <h1 className='text-lg font-bold mb-2'>Flight Options</h1>
      <div className='flex bg-gray-100 justify-center items-center py-2 mb-4 rounded-lg p-2'>
        <div className='flex flex-col gap-1 flex-1'>
          <p>Provo</p>
          <h1 className='text-xl font-bold'>PVU</h1>
          <p>30 May</p>
        </div>
        <div className='flex items-center flex-col gap-1 flex-1'>
          <p>10h 43m</p>
          <div className='flex gap-4 w-[200px] items-center justify-center'>
            <div className='border-b-2 border-slate-400 w-1/2'></div>
            <i className='fi fi-br-plane-departure'></i>
            <div className='border-b-2 border-slate-400 w-1/2'></div>
          </div>
          <p>2 stops</p>
        </div>
        <div className='flex items-end flex-col gap-1 flex-1'>
          <p>Korea</p>
          <h1 className='text-xl font-bold'>ICN</h1>
          <p>30 May</p>
        </div>
      </div>
      <div className='flex bg-gray-100 justify-center items-center py-2 mb-4 rounded-lg p-2'>
        <div className='flex flex-col gap-1 flex-1'>
          <p>Korea</p>
          <h1 className='text-xl font-bold'>ICN</h1>
          <p>30 May</p>
        </div>
        <div className='flex items-center flex-col gap-1 flex-1'>
          <p>10h 43m</p>
          <div className='flex gap-4 w-[200px] items-center justify-center'>
            <div className='border-b-2 border-slate-400 w-1/2'></div>
            <i className='fi fi-br-plane-arrival'></i>
            <div className='border-b-2 border-slate-400 w-1/2'></div>
          </div>
          <p>2 stops</p>
        </div>
        <div className='flex items-end flex-col gap-1 flex-1'>
          <p>Provo</p>
          <h1 className='text-xl font-bold'>PVU</h1>
          <p>30 May</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Skyscanner_Icon_2020.svg" className="w-8" />
          <p className="text-gray-500">Powered by Skyscanner</p>
        </div>
        <h1 className="flex items-center gap-2"> 
          from<b className="text-lg">$450</b>
        </h1>
      </div>
      <button className='border-2 w-full rounded-lg py-2 text-md mt-4 font-bold hover:bg-gray-200 hover:text-gray-500'>
        See more
      </button>
    </div>
  );
};

export default FlightOptions;
