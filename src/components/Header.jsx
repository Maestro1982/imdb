import React from 'react';
import MenuItem from './MenuItem';
import { IoHome } from 'react-icons/io5';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6'>
      {/* Left Side */}
      <div className='flex'>
        <MenuItem title='HOME' address='/' Icon={IoHome} />
        <MenuItem title='ABOUT' address='/about' Icon={FaInfoCircle} />
      </div>
      {/* Right Side */}
      <div className=''>
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
