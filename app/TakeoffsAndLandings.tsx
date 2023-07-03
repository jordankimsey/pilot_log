import React from 'react'

const TakeoffsAndLandings = () => {
  return (
    <div className='bg-white w-[800px] px-3 py-5 rounded-md shadow-sm'>
      <div>
        <h4 className='text-gray-500 pb-2'>TAKEOFFS & LANDINGS</h4>
        <div className='grid grid-cols-5 gap-4'>
          <div>Day Takeoffs</div>
          <div>Day Landings Full Stop</div>
          <div>Night Takeoffs</div>
          <div>Night Landings Full Stop</div>
          <div>All Landings</div>
        </div>
      </div>
    </div>
  );
}

export default TakeoffsAndLandings