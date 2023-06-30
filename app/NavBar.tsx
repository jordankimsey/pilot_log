"use client"
import React, { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsBook } from 'react-icons/bs';
import {GiAirplaneDeparture} from 'react-icons/gi'
import Image from 'next/image';
import Icon from '../public/logo-no-background.png';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div
      className={`${
        showNav ? 'w-52' : 'w-14'
      } text-center bg-[#212e39] text-white shadow-xl`}
    >
      <div
        className='flex justify-end pt-1 pr-2 cursor-pointer'
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? (
          <BsArrowLeftShort fontSize={22} />
        ) : (
          <BsArrowRightShort fontSize={22} />
        )}
      </div>
      <div className='flex justify-center mb-2'>
        {showNav ? (
          <Image src={Icon} height={75} width={115} alt='PilotLog Logo' />
        ) : <GiAirplaneDeparture fontSize={32}/>}
      </div>
      <ul className=''>
        <li className='px-5 py-3 hover:bg-blue-300 bg-[#2c97de] text-center items-center flex cursor-pointer text-sm'>
          <div className='pr-4 '>
            <BsBook />{' '}
          </div>
          {showNav && 'Logbook'}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
