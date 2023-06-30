import React from 'react';
import { BsSearch } from 'react-icons/bs';
import LogBookEntriesList from './LogBookEntriesList';

const LogBookEntriesSearch = () => {
  return (
    <div className='w-80 h-full bg-white rounded-sm'>
      <div className='flex justify-between p-3'>
        <h2 className='text-gray-500'>LOGBOOK ENTRIES</h2>
        <button className='text-sm bg-[#2c97de] text-white rounded-sm px-2 py-0.5 hover:bg-blue-300 '>
          Add Entry
        </button>
      </div>
      <div className='px-3 text-center'>
        <div className='border-b-2 border-gray-400 relative'>
          <div className='absolute top-1 bottom-0 w-5 h-5 my-auto text-gray-400 left-3'>
            <BsSearch />
          </div>
          <input
            type='text'
            placeholder='Filter Entries'
            className='h-8 px-12 rounded-lg focus:outline-none hover:cursor-pointer'
          />
        </div>
      </div>
      <div className='pt-3'>
        <LogBookEntriesList />
      </div>
    </div>
  );
};

export default LogBookEntriesSearch;
