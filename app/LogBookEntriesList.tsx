import React from 'react'

const LogBookEntriesList = () => {
  return (
    <div className='text-sm'>
      <h3 className='bg-gray-100 px-3 py-1 text-gray-500 text-lg'>July 2023</h3>
      <div className='flex justify-between px-4 py-3 cursor-pointer hover:bg-blue-100'>
        <div>
          <h4 className=''>KPRC - KPRC</h4>
          <p>N812B C172</p>
        </div>
          <div className='text-right'>
            <p>July 1, 2023</p>
            <p>1.0 Total</p>
            {/* <p>1 Approach, 1 Hold</p> */}
          </div>
      </div>
    </div>
  );
}

export default LogBookEntriesList