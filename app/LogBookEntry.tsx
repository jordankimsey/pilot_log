import React from 'react';

const LogBookEntry = () => {
  return (
    <div className='bg-white w-[800px] px-5 py-5 rounded-md shadow-sm'>
      <div>
        <h4 className='text-gray-500 pb-2'>LOGBOOK ENTRY</h4>
        <div className='grid grid-cols-4 gap-4'>
          <div className='flex flex-col border-b'>
            <label htmlFor='date' className='text-sm'>
              Date
            </label>
            <input type='date' id='date' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='aircraft' className='text-sm'>
              Aircraft
            </label>
            <input type='text' id='aircraft' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='depature' className='text-sm'>
              Depature
            </label>
            <input type='text' id='depature' placeholder='KATL' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='destination' className='text-sm'>
              Destination
            </label>
            <input type='text' id='destination' placeholder='KATL' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='totalTime' className='text-sm'>
              Total Time
            </label>
            <input type='number' id='totalTime' placeholder='0.0' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='pic' className='text-sm'>
              PIC
            </label>
            <input type='number' id='pic' placeholder='0.0' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='sic' className='text-sm'>
              SIC
            </label>
            <input type='number' id='sic' placeholder='0.0' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='night' className='text-sm'>
              Night
            </label>
            <input type='number' id='night' placeholder='0.0' />
          </div>
          <div className='flex flex-col border-b'>
            <label htmlFor='solo' className='text-sm'>
              Solo
            </label>
            <input type='number' id='solo' placeholder='0.0' />
          </div>
          <div className='flex flex-col border-b ml-3'>
            <label htmlFor='crossCountry' className='text-sm'>
              Cross Country
            </label>
            <input type='number' id='crossCountry' placeholder='0.0' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogBookEntry;
